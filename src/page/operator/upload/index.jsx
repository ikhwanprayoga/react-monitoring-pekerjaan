import React from 'react'
import { Form, Button } from 'react-bootstrap'

class UploadOperator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <Form>
                  <Form.Group>
                    <Form.Label>Judul Pekerjaan</Form.Label>
                    <Form.Control type="text" placeholder="Masukan judul pekerjaan" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Deskripsi Pekerjaan</Form.Label>
                    <Form.Control type="text" placeholder="Masukan deskripsi pekerjaan" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Tanggal Pekerjaan</Form.Label>
                    <Form.Control type="date" placeholder="Masukan tanggal pekerjaan" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Foto Pekerjaan</Form.Label>
                    <Form.Control type="file" multiple placeholder="Masukan foto pekerjaan" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Upload
                  </Button>
                </Form>
            </>
        );
    }
}
 
export default UploadOperator;