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
                                    <a href="#Products" className="scrol">Products</a>
                                    <div className="drop_prod">
                                        <p><span><a href="/digitalAssetEnablement" ><img className="grid__img layer" src={icon5} /></a></span> <a href="/digitalAssetEnablement" >Digital Asset Enablement</a> </p>
                                        <p><span><a href="/blockchainAggregation" ><img className="grid__img layer" src={icon2} /></a></span> <a href="/blockchainAggregation" >Blockchain aggregation</a></p>
                                        <p><span><a href="/decentralizedExchange" ><img className="grid__img layer" src={icon6} /></a></span> <a href="/decentralizedExchange" >Exchange Integrations</a></p>
                                        <p><span><a href="/liquidityPooling" ><img className="grid__img layer" src={icon3} /></a></span> <a href="/liquidityPooling" >Liquidity pooling</a></p>
                                        <p><span><a href="/designLab" ><img className="grid__img layer" src={icon7} /></a></span> <a href="/designLab" >Design lab</a></p>
                                        <p><span><a href="/securityAudits"><img className="grid__img layer" src={icon4} /></a></span> <a href="/securityAudits">Security audits</a></p>
                                        <p><span><a href="/education" ><img className="grid__img layer" src={icon8} /></a></span> <a href="/education" >Education</a></p>
                                        <p><span><a href="/community" ><img className="grid__img layer" src={icon1} /></a></span> <a href="/community" >Community</a></p>
                                    </div>    
                                </li>
                                <li><a href="#Team" className="scrol">Team</a></li>
                                <li><a href="#pricing" className="scrol">Pricing</a></li>
                                <li><a href="#contact" className="scrol">Contact</a></li>
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