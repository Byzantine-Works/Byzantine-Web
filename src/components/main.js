import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './home';
import Contact from './contact_page';

const Main = ()=> (
    <BrowserRouter>
<Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/contact' component={ Contact } />
</Switch>
</BrowserRouter>

);

export default Main;