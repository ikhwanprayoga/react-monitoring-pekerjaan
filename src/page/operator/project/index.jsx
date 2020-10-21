import React from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CardData from '../../../component/cardData'
import { fetchAllProjects, postProject } from '../../../services/project'

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            listProjects: [],
            form : {
                title: '',
                description: '',
            }
        }
    }

    componentDidMount() {
        this.fetchList()
    }

    fetchList = async () => {
        const ress = await fetchAllProjects()
        
        if (ress) {
            this.setState({
                listProjects: ress.data
            })
        }
    }

    submitData = async () => {
        const {form} = this.state

        const ress = await postProject(form)
        if (ress) {
            this.setState({
                form: {
                    title: '',
                    description: ''
                }, 
                showModal:false
            })
        }
        this.fetchList()
    }

    handleChangeForm = event => {
        let dataFormNew = { ...this.state.form }
        dataFormNew[event.target.name] = event.target.value
  
        this.setState({
          form: dataFormNew
        })
      }

    handleShow = () => {
        this.setState({
            showModal: true
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    render() { 
        const { listProjects, showModal, form } = this.state
        
        return (
            <>
                <Container fluid className="mt-4">
                    <Row className="mb-3">
                        <Col>
                            <Button variant="primary" onClick={this.handleShow}>+ Project</Button>
                        </Col>
                    </Row>
                    <Row>
                        {listProjects.map( d => (
                            <Col md={4} className="mb-5">
                                <Link to={`/operator/project/${d.id}`} >
                                    <CardData 
                                        title={d.title} 
                                        description={d.description}
                                    />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                              <Form.Label>Judul Pekerjaan</Form.Label>
                              <Form.Control type="text" name="title" value={form.title} onChange={this.handleChangeForm} placeholder="Masukan judul project" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Judul Pekerjaan</Form.Label>
                              <Form.Control type="text" name="description" value={form.description} onChange={this.handleChangeForm} placeholder="Masukan deskripsi project" />
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
            </>
        );
    }
}
 
export default Project;