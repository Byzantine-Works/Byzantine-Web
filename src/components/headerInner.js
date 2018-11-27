import React, {Component} from 'react';
import logo from './logo_main.png';
import icon1 from './imgs/prod_icon.png';
import icon2 from './imgs/prod_icon2.png';
import icon3 from './imgs/prod_icon3.png';
import icon4 from './imgs/prod_icon4.png';
import icon5 from './imgs/prod_icon5.png';
import icon6 from './imgs/prod_icon6.png';
import icon7 from './imgs/prod_icon7.png';
import icon8 from './imgs/prod_icon8.png';

import puckBass1 from './imgs/products1.png';
import puckBass2 from './imgs/products2.png';
import puckBass3 from './imgs/products3.png';
import puckBass4 from './imgs/products4.png';
import puckBass6 from './imgs/products6.png';
import puckBass7 from './imgs/products7.png';
import puckBass8 from './imgs/products8.png';
import puckBass9 from './imgs/products9.png';


class Header extends Component{
    render(){
       
        return(
            <div className="header ">
                <div className="container clearfix">
                    <div className="logo">
                        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                    </div>
                    <div className="menu_sections">
                        <nav>
                            <ul>
                                <li>
                                    <a href="/#Products">Products</a>
                                    <div className="drop_prod">
                                        <p><a className="imgs" href="/digitalAssetEnablement" ><img className="grid__img layer" src={puckBass1} /></a><a href="/digitalAssetEnablement" >Digital Asset Enablement</a> </p>
                                        <p><a className="imgs" href="/blockchainAggregation" ><img className="grid__img layer" src={puckBass2} /></a> <a href="/blockchainAggregation" >Exchange Integrations</a></p>
                                        <p><a className="imgs" href="/liquidityPooling" ><img className="grid__img layer" src={puckBass4} /></a> <a href="/liquidityPooling" >Liquidity Pooling</a></p>
                                        <p><a className="imgs" href="/exchangeSonar" ><img className="grid__img layer" src={puckBass6} /></a> <a href="/exchangeSonar" >Exchange Sonar</a></p>
                                        <p><a className="imgs" href="/designLab" ><img className="grid__img layer" src={puckBass3} /></a><a href="/designLab" >Blockchain Consulting</a></p>
                                        <p><a className="imgs" href="/securityAudits"><img className="grid__img layer" src={puckBass7} /></a> <a href="/securityAudits">Security Audits</a></p>
                                        <p><a className="imgs" href="/education" ><img className="grid__img layer" src={puckBass8} /></a> <a href="/education" >Education</a></p>
                                        <p><a className="imgs" href="/community" ><img className="grid__img layer" src={puckBass9} /></a> <a href="/community" >Community</a></p>
                                    </div>     
                                </li>
                                <li><a href="/#pricing">Pricing</a></li>
                                <li><a href="/#contact">Contact</a></li>
                                <li><a href="http://api.byzantine.works/docs/">API</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;