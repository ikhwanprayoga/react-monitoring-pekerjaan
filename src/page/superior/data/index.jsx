import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CardData from '../../../component/cardData'
import { fetchAllActivities } from '../../../services/activity'
import { dateIndo } from '../../../helpers/time'

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listActivities: []
        }
    }

    componentDidMount() {
        this.fetchList()
    }

    fetchList = async () => {
        const ress = await fetchAllActivities()
        
        if (ress) {
            this.setState({
                listActivities: ress.data
            })
        }
    }

    render() { 
        const { listActivities } = this.state

        return (
            <Container fluid className="mt-4">
                <Row>
                    {listActivities.map( d => (
                        <Col>
                            <Link to={`/superior/list-galery/${d.id}`} >
                                <CardData 
                                    title={d.title} 
                                    description={d.description} 
                                    image="https://picsum.photos/200/150"
                                    date={dateIndo(d.created_at)}  
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}
 
export default Data;