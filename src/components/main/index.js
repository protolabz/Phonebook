import React from 'react';
import LoginPage from '../login/Login';
import Dashboard from '../dashboard/index';
import AddPhonePage from '../phone/AddPhone';
import { Switch, Route } from 'react-router-dom';
export default () => {
    return (
            <Switch>
                <Route exact path='/' component={LoginPage}/>
                <Route  path='/dashboard' component={Dashboard}/>
                <Route  path='/phone' component={AddPhonePage}/>
            </Switch>

    )
}
