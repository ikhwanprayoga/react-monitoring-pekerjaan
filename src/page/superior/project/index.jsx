import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CardData from '../../../component/cardData'
import { fetchAllProjects } from '../../../services/project'

class DataProjectSuperior extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProjects: []
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

    render() { 
        const { listProjects } = this.state

        return (
            <Container fluid className="mt-4">
                <Row>
                    {listProjects.map( d => (
                        <Col md={4} className="mb-5">
                            <Link to={`/superior/project/${d.id}`} >
                                <CardData 
                                    title={d.title} 
                                    description={d.description} 
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}
 
export default DataProjectSuperior;