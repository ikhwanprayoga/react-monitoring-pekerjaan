import React from 'react'
import { BrowserRouter as RouterWeb, Route, Switch } from 'react-router-dom'; 
import Login from './page/Login';
import DashboardSuperior from './page/superior/dashboard';
import DataSuperior from './page/superior/data';
import DashboardOperator from './page/operator/dashboard';
import DataOperator from './page/operator/data';
import Home from './page/home';
import Layouts from './component/layouts';

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
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/superior/dashboard' exact component={DashboardSuperior} />
                        <Route path='/superior/data' exact component={DataSuperior} />
                        <Route path='/operator/dashboard' component={DashboardOperator} />
                        <Route path='/operator/data' component={DataOperator} /> 
                    </Switch>
                </RouterWeb>
            </div>
        );
    }
}
 
export default Router;