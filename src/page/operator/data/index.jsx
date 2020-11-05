import React from 'react'
import { Container, Row, Col, Button, Modal, Form, Tabs, Tab, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CardData from '../../../component/cardData'
import { fetchAllActivityProject } from '../../../services/project'
import { postActivity } from '../../../services/activity'
import { fetchAllDocuments, postDocument, destroyDocument } from '../../../services/document'
import { dateIndo } from '../../../helpers/time'

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModalDocument: false,
            listActivities: [],
            listDocuments: [],
            form : {
                userId: 2,
                projectId: this.props.match.params.id,
                title: '',
                date: '',
                description: '',
                isWork: true
            },
            formDocument : {
                userId: 2,
                projectId: this.props.match.params.id,
                title: '',
                description: '',
                file: ''
            },
            files: ''
        }
    }

    componentDidMount() {
        this.fetchList()
        this.fetchListDocuments()
    }

    fetchList = async () => {
        const { id } = this.props.match.params
        const ress = await fetchAllActivityProject(id)
        
        if (ress) {
            this.setState({
                listActivities: ress.data
            })
        }
    }

    fetchListDocuments = async () => {
        const { id } = this.props.match.params
        const ress = await fetchAllDocuments(id)
        if (ress) {
            this.setState({
                listDocuments: ress.data
            })
        }
    }

    submitData = async () => {
        const { form, files } = this.state
        const formNew = {
          ...form, files
        }
        
        const ress = await postActivity(formNew)
        
        if (ress.message === 'success') {
          this.setState({
            form: {
              userId: 2,
              title: '',
              date: '',
              description: '',
              isWork: true
            },
            files: '',
            showModal: false
          })
        }
        this.fetchList()
    }

    submitDataDocument = async () => {
        const { formDocument } = this.state
        const ress = await postDocument(formDocument)
        if (ress) {
            this.setState({
                formDocument : {
                    userId: 2,
                    projectId: this.props.match.params.id,
                    title: '',
                    description: '',
                    file: ''
                },
                showModalDocument: false
            })
        }
        this.fetchListDocuments()
    }

    destroyDocument = async (id) => {
        const ress = await destroyDocument(id)
        if (ress) {
            this.fetchListDocuments()
        }
    }

    handleChangeForm = event => {
        let dataFormNew = { ...this.state.form }
        dataFormNew[event.target.name] = event.target.value
  
        this.setState({
          form: dataFormNew
        })
    }

    handleChangeFormDocument = e => {
        let dataFormNew = { ...this.state.formDocument }
        if (e.target.name === 'file') {
            dataFormNew[e.target.name] = e.target.files[0]
        } else {
            dataFormNew[e.target.name] = e.target.value
        }

        this.setState({
            formDocument: dataFormNew
        })
    }

    handleChangeFiles = e => {
        this.setState({ 
          files: e.target.files
        })
    }

    viewDocument = file => {
        const path = `${process.env.REACT_APP_BASE_PATH_URL}/${file}`
        window.open(path, "_blank")
    }

    handleDestroyDocument = id => {
        const c = window.confirm("Apakah anda ingin menghapus dokumen ini?")
        if (c === true) {
            this.destroyDocument(id)
        }
    }

    handleShow = () => {
        this.setState({
            showModal: true
        })
    }

    handleShowDocument = () => {
        this.setState({
            showModalDocument: true
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false,
            showModalDocument: false,
        })
    }

    render() { 
        const { listActivities, showModal, form, showModalDocument, formDocument, listDocuments } = this.state
        
        return (
            <>
                <Container fluid className="mt-4">
                    <Tabs defaultActiveKey="foto" id="uncontrolled-tab-example">
                        <Tab eventKey="foto" title="Foto">
                            <Row className="mb-3 mt-3">
                                <Col>
                                    <Button variant="primary" onClick={this.handleShow}>+ Upload Foto Pekerjaan</Button>
                                </Col>
                            </Row>
                            <Row>
                                {listActivities.map( d => (
                                    <Col md={3} className="mb-5">
                                        <Link to={`/operator/list-galery/${d.id}`} >
                                            <CardData 
                                                title={d.title} 
                                                description={d.description} 
                                                image={d.file ? `${process.env.REACT_APP_BASE_URL_FILES}/photos/${d.file}` : `${process.env.REACT_APP_BASE_URL_FILES}/images/no-image.png`}
                                                date={dateIndo(d.date)}  
                                                isWork={d.is_work === 'true' ? 'Bekerja' : 'Tidak Bekerja'}
                                            />
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="document" title="Dokumen">
                            <Row className="mb-3 mt-3">
                                <Col>
                                    <Button variant="primary" onClick={this.handleShowDocument}>+ Upload Dokumen</Button>
                                </Col>
                            </Row>
                            <Row className="mb-3 mt-3">
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Judul Dokumen</th>
                                      <th>Dokumen</th>
                                      <th>Aksi</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {listDocuments.map(r => (
                                        <tr>
                                            <td>{r.title}</td>
                                            <td>{r.file}</td>
                                            <td>
                                                <Button className="mr-2" variant="primary" onClick={()=>this.viewDocument(r.file)}>Lihat Dokumen</Button>
                                                <Button variant="danger" onClick={()=>this.handleDestroyDocument(r.id)}>Hapus</Button>
                                            </td>
                                        </tr>
                                    ))}
                                  </tbody>
                                </Table>
                            </Row>
                        </Tab>
                    </Tabs>
                </Container>
                <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Foto Pekerjaan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Judul Pekerjaan</Form.Label>
                                <Form.Control type="text" name="title" value={form.title} onChange={this.handleChangeForm} placeholder="Masukan judul pekerjaan" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Deskripsi Pekerjaan</Form.Label>
                                <Form.Control type="text" name="description" value={form.description} onChange={this.handleChangeForm} placeholder="Masukan deskripsi pekerjaan" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tanggal Pekerjaan</Form.Label>
                                <Form.Control type="date" name="date" value={form.date} onChange={this.handleChangeForm} placeholder="Masukan tanggal pekerjaan" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Apakah berkerja?</Form.Label>
                                <div onChange={this.handleChangeForm}>
                                    <input type="radio" value={true} name="isWork" /> Kerja
                                    <input style={{marginLeft:"15px"}} type="radio" value={false} name="isWork" /> Tidak Kerja
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Foto Pekerjaan</Form.Label>
                                <Form.Control type="file" name="files" onChange={this.handleChangeFiles} multiple placeholder="Masukan foto pekerjaan" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.submitData}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showModalDocument} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Dokumen Pekerjaan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Judul Dokumen</Form.Label>
                                <Form.Control type="text" name="title" value={formDocument.title} onChange={this.handleChangeFormDocument} placeholder="Masukan judul dokumen pekerjaan" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Deskripsi Pekerjaan</Form.Label>
                                <Form.Control type="text" name="description" value={formDocument.description} onChange={this.handleChangeFormDocument} placeholder="Masukan deskripsi dokumen pekerjaan" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Foto Pekerjaan</Form.Label>
                                <Form.Control type="file" name="file" onChange={this.handleChangeFormDocument} placeholder="Masukan file dokumen pekerjaan" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.submitDataDocument}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
 
export default Data;