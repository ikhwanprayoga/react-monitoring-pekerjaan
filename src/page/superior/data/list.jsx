import React from 'react';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'
import { fetchActivty } from '../../../services/activity'
import { dateIndo } from '../../../helpers/time'
import './style.css'

class ListGalery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          detail: '',
          files: []
        }
    }

    componentDidMount(){
      this.fetchActivty()
    }

    fetchActivty = async () => {
      const { id } = this.props.match.params
      const ress = await fetchActivty(id)
      
      this.setState({
        detail: ress.detail,
        files: ress.files
      })
    }

    parsingFile = files => {
      const data = []
      files.forEach(d => {
        data.push({
          original: `${process.env.REACT_APP_BASE_URL_FILES}/photos/${d.file}`,
          thumbnail: `${process.env.REACT_APP_BASE_URL_FILES}/photos/${d.file}`
        })
      });

      return data
    }

    render() { 
      const { detail, files } = this.state
      const dataImage = this.parsingFile(files)
      
      return (
        <>
          <Container fluid className="mt-4">
            <Row className="mb-4">
              <Col>
                {dataImage.length > 0 ? 
                <ImageGallery items={dataImage} />
                :
                <Alert variant="info">File tidak tersedia</Alert>}
              </Col>
            </Row>
            <Row style={{marginBottom:'6rem'}}>
              <Card>
                <Card.Header>{dateIndo(detail.date)} / {detail.is_work === 'true' ? 'Bekerja' : 'Tidak Bekerja'}</Card.Header>
                <Card.Body>
                  <Card.Title>{detail.title}</Card.Title>
                  <Card.Text>
                    {detail.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </>
      );
    }
}
 
export default ListGalery;