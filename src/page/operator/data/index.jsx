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
        console.log('lisac', listActivities)
        return (
            <Container fluid className="mt-4">
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
            </Container>
        );
    }
}
 
export default Data;