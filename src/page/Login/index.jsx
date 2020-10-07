import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { fetchAllActivities } from '../../services/activity'
import { login } from '../../services/user'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userForm: {
                username: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        this.fetchActivities()
    }

    fetchActivities = async() => {
        const result = await fetchAllActivities()
        console.log('res activity', result)
    }

    handleChangeForm = (event) => {
        let userFormNew = { ...this.state.userForm }
        userFormNew[event.target.name] = event.target.value

        this.setState({
            userForm: userFormNew
        })
    }

    render() { 
        const {userForm} = this.state
        console.log('userform', userForm)
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Masukan username" 
                            name="usrename"
                            onChange={this.handleChangeForm}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            onChange={this.handleChangeForm}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Masuk
                    </Button>
                </Form>
            </>
        );
    }
}
 
export default Login;