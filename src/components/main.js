import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './home';
import Contact from './contactPage';
import blockchainAggregation from './products/blockchainAggregation';
import decentralizedExchange from './products/decentralizedExchange';
import designLab from './products/designLab';
import education from './products/education';
import liquidityPooling from './products/liquidityPooling';
import paymentProducts from './products/paymentProducts';
import securityAudits from './products/securityAudits';
import walletProducts from './products/walletProducts';

const Main = ()=> (
    <BrowserRouter>
<Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/contact' component={ Contact } />
    <Route path='/blockchainAggregation' component={ blockchainAggregation } />
    <Route path='/decentralizedExchange' component={ decentralizedExchange } />
    <Route path='/designLab' component={ designLab } />
    <Route path='/education' component={ education } />
    <Route path='/liquidityPooling' component={ liquidityPooling } />
    <Route path='/payment' component={ paymentProducts } />
    <Route path='/securityAudits' component={ securityAudits } />
    <Route path='/walletProducts' component={ walletProducts } />
</Switch>
</BrowserRouter>

);

export default Main;