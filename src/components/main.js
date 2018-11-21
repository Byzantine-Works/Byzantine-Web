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
import Community from './products/Community';
import securityAudits from './products/securityAudits';
import DigitalAssetEnablement from './products/digitalAssetEnablement';

import ExchangeSonar from './exchangeSonar';
import DigitalAssetExchanges from './digitalAssetExchanges';
import ByzantineConsulting from './byzantineConsulting';
import AssetRelayPlatform from './assetRelayPlatform';
import MetaDexPlatform from './metaDexPlatform';

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
    <Route path='/community' component={ Community } />
    <Route path='/securityAudits' component={ securityAudits } />
    <Route path='/digitalAssetEnablement' component={ DigitalAssetEnablement } />
    <Route path='/exchangeSonar' component={ ExchangeSonar } />
    <Route path='/digitalAssetExchanges' component={ DigitalAssetExchanges } />
    <Route path='/byzantineConsulting' component={ ByzantineConsulting } />
    <Route path='/assetRelayPlatform' component={ AssetRelayPlatform } />
    <Route path='/metaDexPlatform' component={ MetaDexPlatform } />
</Switch>
</BrowserRouter>

);

export default Main;