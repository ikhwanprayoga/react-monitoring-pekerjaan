import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardData from '../../../component/cardData'

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Container fluid className="mt-4">
                <Row>
                    <Col>
                        <CardData 
                            title="judul kami disini maka inilah" 
                            description="Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together" 
                            image="https://picsum.photos/200"
                            date="13 Oktober 2020" 
                        />
                    </Col>
                    <Col>
                        <CardData 
                            title="judul" 
                            description="Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together" 
                            image="https://picsum.photos/200"
                            date="13 Oktober 2020" 
                        />
                    </Col>
                    <Col>
                        <CardData 
                            title="judul" 
                            description="Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together" 
                            image="https://picsum.photos/200"
                            date="13 Oktober 2020" 
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Data;