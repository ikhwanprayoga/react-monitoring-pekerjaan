import React from 'react'
import { Form, Button } from 'react-bootstrap'
// import { fetchAllActivities } from '../../services/activity'
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

    }

    login = async () => {
        const { userForm } = this.state 
        const ress = await login(userForm)
        
        if (ress.status === 'success' && ress.level === 'superior') {
            this.props.history.push('/superior/project')
        } else if (ress.status === 'success' && ress.level === 'operator') {
            this.props.history.push('/operator/projects')
        } else {
            this.props.history.push('/login')
        }
    }

    handleChangeForm = (event) => {
        let userFormNew = { ...this.state.userForm }
        userFormNew[event.target.name] = event.target.value

        this.setState({
            userForm: userFormNew
        })
    }

    render() { 
        
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Masukan username" 
                            name="username"
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
                    <Button variant="primary" type="button" onClick={this.login}>
                        Masuk
                    </Button>
                </Form>
            </>
        );
    }
}
 
export default Login;