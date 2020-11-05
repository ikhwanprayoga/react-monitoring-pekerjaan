import React from 'react'
import { Container, Row, Col, Tabs, Tab, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CardData from '../../../component/cardData'
import { fetchAllActivityProject } from '../../../services/project'
import { fetchAllDocuments } from '../../../services/document'
import { dateIndo } from '../../../helpers/time'

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProjects: [],
            listDocuments: [],
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
                listProjects: ress.data
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

    viewDocument = file => {
        const path = `${process.env.REACT_APP_BASE_PATH_URL}/${file}`
        window.open(path, "_blank")
    }

    render() { 
        const { listProjects, listDocuments } = this.state

        return (
            <Container fluid className="mt-4">
                <Tabs defaultActiveKey="foto" id="uncontrolled-tab-example">
                    <Tab eventKey="foto" title="Foto">
                        <Row className="mt-3">
                            {listProjects.length > 0 ? listProjects.map( d => (
                                <Col md={3} className="mb-5">
                                    <Link to={`/superior/list-galery/${d.id}`} >
                                        <CardData 
                                            title={d.title} 
                                            description={d.description} 
                                            image={d.file ? `${process.env.REACT_APP_BASE_URL_FILES}/photos/${d.file}` : `${process.env.REACT_APP_BASE_URL_FILES}/images/no-image.png`}
                                            date={dateIndo(d.date)}  
                                            isWork={d.is_work === 'true' ? 'Bekerja' : 'Tidak Bekerja'}
                                        />
                                    </Link>
                                </Col>
                            )) : 'No Activity post'}
                        </Row>
                    </Tab>
                    <Tab eventKey="document" title="Dokumen">
                        <Row className="mb-3 mt-3">
                            <Col>
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
                                            </td>
                                        </tr>
                                    ))}
                                  </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
 
export default Data;