import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { postActivity } from '../../../services/activity'

class UploadOperator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        form : {
          userId: 2,
          title: '',
          date: '',
          description: '',
          // files: ''
        },
        files: ''
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
          },
          files: ''
        })
      }
    }

    handleChangeForm = event => {
      let dataFormNew = { ...this.state.form }
      dataFormNew[event.target.name] = event.target.value

      this.setState({
        form: dataFormNew
      })
    }

    handleChangeFiles = e => {
      this.setState({ 
        files: e.target.files
      })
    }

    render() { 
      const { form } = this.state
      
      return (
        <>
          <Form>
            <Form.Group>
              <Form.Label>Judul Pekerjaan</Form.Label>
              <Form.Control type="text" name="title" value={form.title} onChange={this.handleChangeForm} placeholder="Masukan judul pekerjaan" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Deskripsi Pekerjaan</Form.Label>
              <Form.Control type="text" name="description" value={form.description} onChange={this.handleChangeForm} placeholder="Masukan deskripsi pekerjaan" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tanggal Pekerjaan</Form.Label>
              <Form.Control type="date" name="date" value={form.date} onChange={this.handleChangeForm} placeholder="Masukan tanggal pekerjaan" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Foto Pekerjaan</Form.Label>
              <Form.Control type="file" name="files" onChange={this.handleChangeFiles} multiple placeholder="Masukan foto pekerjaan" required />
            </Form.Group>
            <Button variant="primary" onClick={this.submitData} type="button">
              Upload
            </Button>
          </Form>
        </>
    );
  }
}
 
export default UploadOperator;