import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class LayoutOperator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                {/* Top Bar*/}
                <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Brand Login</a>
                        <Nav className="ml-auto">
                          <NavItem>
                            <NavLink to="/login" className="nav-link">
                              Login
                            </NavLink>
                          </NavItem>
                        </Nav>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default LayoutOperator;