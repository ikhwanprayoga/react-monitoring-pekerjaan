import React from 'react';
import { withRouter } from 'react-router-dom';
import LayoutLogin from './login';
import LayoutOperator from './operator';
import LayoutSuperior from './superior';

class Layouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: ''
        }
    }

    componentWillMount () {
        const { location } = this.props
        const pathName = location.pathname
        if (/^\/operator(?=\/|$)/i.test(pathName)) {
            this.setState({
                level: 'operator'
            })
        }
        if (/^\/superior(?=\/|$)/i.test(pathName)) {
            this.setState({
                level: 'superior'
            })
        }
        if (/^\/login(?=\/|$)/i.test(pathName)) {
            this.setState({
                level: 'auth'
            })
        }
    }

    render() { 
        const { level } = this.state
        switch (level) {
            case 'operator':
                return (
                    <LayoutOperator />
                );
            case 'superior':
                return (
                    <LayoutSuperior />
                );
            case 'auth':
                return (
                    <LayoutLogin />
                );
            default:
                return ('')
        }
    }
}
 
export default withRouter(Layouts);