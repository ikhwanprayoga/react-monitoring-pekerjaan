import React from 'react'
import { BrowserRouter as RouterWeb, Route, Switch, Redirect } from 'react-router-dom'; 
import Login from './page/Login';
import DashboardSuperior from './page/superior/dashboard';
import DataSuperior from './page/superior/data';
import DataOperator from './page/operator/data';
import UploadOperator from './page/operator/upload';
import ListGalerySuperior from './page/superior/data/list';
import ListGaleryOperator from './page/operator/data/list';
import Home from './page/home';
import Layouts from './component/layouts';
import { Container } from 'react-bootstrap';

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <RouterWeb>
                    <Layouts />
                    <Container fluid style={{marginTop:'20px'}}>
                        <Switch>
                            <Route path='/' exact component={Home}>
                                <Redirect to='/login' />
                            </Route>
                            <Route path='/login' exact component={Login} />
                            <Route path='/superior/dashboard' exact component={DashboardSuperior} />
                            <Route path='/superior/data' exact component={DataSuperior} />
                            <Route path='/superior/list-galery/:id' exact component={ListGalerySuperior} />
                            <Route path='/operator/upload' component={UploadOperator} />
                            <Route path='/operator/data' component={DataOperator} /> 
                            <Route path='/operator/list-galery/:id' exact component={ListGaleryOperator} />
                        </Switch>
                    </Container>
                </RouterWeb>
            </div>
        );
    }
}
 
export default Router;