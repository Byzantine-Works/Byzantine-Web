import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import prodImage from '../imgs/productImg.png';
import prodIcon from '../imgs/prod_icon.png';
import Contact from '../Home/contact';

import icon_main from '../imgs/icon_main5.png';
import puckBass from '../imgs/products6.png';
import puckBass2 from '../imgs/products2.png';
import puckBass3 from '../imgs/products3.png';
import puckBass4 from '../imgs/products4.png';
import puckBass5 from '../imgs/products5.png';

class Home extends Component{
    render(){
       
        return(
            <div className="productPage innweProd">
                <div className="wellcom_banner innerWellcom">
                    <Header />
                    
                    <div className="main_banner">
                        <div className="container clearfix">
                            <div className="banner_left">
                                <h1>Wallet products</h1>
                                <p>Simplify the human crypto interface.</p>
                            </div>
                            <div className="banner_right">
                                <div className="header-image animated text-center"> 
                                    <a  href="#Products" className="scrol"><img src={icon_main} className="main_img" alt="header" /> </a>
                                    <a  href="#Products" className="scrol"><img className="header-image-icon left-icon" src={puckBass} alt="header-icon"/> </a>
                                    <a  href="#Products" className="scrol"><img className="header-image-icon right-icon" src={puckBass2} alt="header-icon"/></a>
                                    <a  href="#Products" className="scrol"><img className="header-image-icon top-icon" src={puckBass3} alt="header-icon"/> </a>
                                    <a  href="#Products" className="scrol"><img className="header-image-icon top-left-icon" src={puckBass4} alt="header-icon"/></a>
                                    <a  href="#Products" className="scrol"><img className="header-image-icon top-right-icon" src={puckBass5} alt="header-icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>EOS Stripe Wallet</h3>
                                    <p>Simple, intuitive, secure and "stripe" like embeddable widget for an universal crypto wallet built on the Byzantine API Gateway. This fee-less wallet lowers the barriers for small businesses in accepting EOS and other crypto currencies.</p>

                                </div>
                                <div className="prodImageSc">
                                    <img src="stripe.png" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="prdoctBottom">
                    <div className="productInner">
                        <div className="container">
                            <ul>
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Support</h5>
                                        <p>Uses the Byzantine BaaS API Gateway to abstract away on-chain integrations, the walleting solutions currently supports EOS with support for TRON, ADA, LISK, ETH, XLM and more DPOS ecosystems in the works.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Simple</h5>
                                        <p>These solutions provide an abstraction from token contracts, validation of tokens with their respective contract hashes while ensuring transaction integrity and security.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Secure</h5>
                                        <p>Security is enabled through a combination of nonce, private salt, api-security-key and a cipher used by both the client and server for capturing the users signature. This prevents sybil and replay attacks and provides secure exchange of keys for on-chain calls.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home;