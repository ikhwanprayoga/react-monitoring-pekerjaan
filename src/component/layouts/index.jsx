import React from 'react';
import { withRouter } from 'react-router-dom';
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
    }

    render() { 
        const { level } = this.state
        return (
            level === 'operator' ? <LayoutOperator /> : <LayoutSuperior />
        );
    }
}
 
export default withRouter(Layouts);