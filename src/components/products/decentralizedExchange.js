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
            <div className="productPage decentEx innweProd">
                <div className="wellcom_banner innerWellcom">
                    <Header />
                    <div className="main_banner">
                        <div className="container clearfix">
                            <div className="banner_left">
                                <h1>Blockchain Integrations For Exchanges</h1>
                                <p>Instant market enablement for digital asset exchanges and banks</p>
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
                                    <h3>Why Stand Up A Stack For Each New Blockchain?</h3>
                                    <p>Digital assets exchanges and banks are focused on beating their rivals, making markets, acquiring customers, and increasing transaction volume</p>
                                    <p><h4><b>NOT</b></h4></p>
                                    <p>Solving for technology complexity</p>
                                    <p>Our platform integrations are usually completed in less than two weeks at a 94% cost savings compared to the fully loaded cost of having your development teams perform the work.</p>
                                </div>
                                <div className="prodImage">
                                    <span><img src="integration.png" /></span> 
                                </div>
                            </li>
                            
                            <li className="clearfix rightD">
                                <div className="prodImageSc">
                                    <img src="exchange1.png" />
                                </div>
                                <div className="detaail">
                                    <h3>Partner with Byzantine and future-proof yourself</h3>
                                    <p>Enables revenue streams from new blockchains instantly via a plug-n-play API gateway.</p>
                                    <p>Enables availability of new digital assets for instant market making.</p>
                                    <p>Exchanges can now focus efforts on increasing trading volume, assets under management, and differentiation.</p>
                                    <p>The <a href="/liquidityPooling">Liquid Digital Asset Relay (LDAR)</a> can be added to the integration, allowing exchanges to participate in global liquidity pool and make/take orders from the pool. This enables a 2-3 week window from cold start to launching a new Exchange business, opening trades on any supported base token and stable coin.</p>
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>Customers Include</h3>
                                </div>
                                <div className="prodImageSc">
                                    <img src="idex.png" />
                                    <img src="mbaex.png" />
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
                                        <p>Using the Byzantine BaaS API Gateway to abstract away on-chain operations, UberDEX currently supports EOS with support for TRON, ADA, LISK, ETH, XLM and more DPOS ecosystems in the works.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Simple</h5>
                                        <p>Flip a switch functionality with scalability built in, UberDEX ensures validation of tokens with their respective contract hashes while ensuring transaction integrity and security.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Secure</h5>
                                        <p>Robust and thorough, all trades rely on a combination of nonces, private salts, API security keys and a ciphers used by the web client, exchange server, and the BaaS API for capturing the users signature. This prevents sybil and replay attacks and provides secure exchange of keys for on-chain calls.</p>
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