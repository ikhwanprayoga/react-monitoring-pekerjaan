import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const tabs = [
  // {
  //   route: "/superior/dashboard",
  //   icon: faHome,
  //   label: "Dashboard"
  // },
  {
    route: "/superior/project",
    icon: faList,
    label: "Project"
  }
]

class LayoutSuperior extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                {/* Top Bar*/}
                <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top nav-warna" role="navigation">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"></a>
                        <Nav className="ml-auto">
                          {/* <NavItem>
                            <NavLink to="/superior/dashboard" className="nav-link">
                              Dashboard
                            </NavLink>
                          </NavItem> */}
                          <NavItem>
                            <NavLink to="/superior/project" className="nav-link">
                              Project
                            </NavLink>
                          </NavItem>
                        </Nav>
                    </div>
                </nav>
                {/* Bottom Tab Navigator*/}
                <nav className="navbar fixed-bottom d-block d-lg-none bottom-tab-nav nav-warna" role="navigation">
                    <Nav className="w-100">
                        <div className=" d-flex flex-row justify-content-around w-100">
                        {
                          tabs.map((tab, index) =>(
                            <NavItem key={`tab-${index}`}>
                              <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                                <div className="row d-flex flex-column justify-content-center align-items-center">
                                  <FontAwesomeIcon size="lg" icon={tab.icon}/>
                                  <div className="bottom-tab-label">{tab.label}</div>
                                </div>
                              </NavLink>
                            </NavItem>
                          ))
                        }
                        </div>
                    </Nav>
                </nav>
            </div>
        );
    }
}
 
export default LayoutSuperior;