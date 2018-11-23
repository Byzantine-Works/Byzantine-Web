import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import prodImage from '../imgs/asset5.png';
import prodImage2 from '../imgs/asset6.png';
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
                                <h1>Liquidity pooling via the Byzantine LDAR protocol</h1>
                                <p>Create an exchange and instantly have the ability to make and fill your customers trades without fear of having enough users</p>
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
                                <div className="detaail dots">
                                    <h3>THE LIQUIDITY PROBLEM </h3>
                                    <p>Smaller centralized and decentralized exchanges do not have liquidity and volume that rival larger exchanges</p>
                                    <p>Each exchange operates as a silo, there is no protocol to connect these ponds to form an ocean of liquidity </p>
                                </div>
                                <div className="prodImageSc">
                                    <img src={prodImage} />
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="detaail lastFrst dots">
                                    <h3>Solution</h3>
                                    <p>Liquid Digital Asset Relay Platform (LDAR): </p>
                                    <p>Provides inter and intra centralized and decentralized
exchange liquidity with on-chain and off chain total
transparency </p>
                                    <p>On-chain fee swap settlement between exchanges </p>
                                    <p>Bancor.Network provides cold start liquidity  </p>
                                    <p>Supports native KYC/AML/Reward Tokens for compliance and
fee settlement</p>
                                </div>
                                <div className="prodImageSc lasts">
                                    <img src={prodImage2} />
                                </div>
                            </li>

                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>Liquid Digital Asset Relay (LDAR)</h3>
                                    <p>A multi-chain Decentralized Exchange order liquidity protocol designed for high-performance, Blockchain Virtual Machine compatibility, decentralized data exchange, and complete transparency to off-chain market and trade data across UberDEX nodes as well as licensed Decentralized Exchange partners. The protocol enables all exchanges on the network to share liquidity pools while maintaining their high-performance characteristics and native exchange token compatibility across networks.</p>
                                </div>
                                <div className="prodImage">
                                </div>
                            </li>
                            
                            <li className="clearfix rightD">
                                <div className="prodImageSc">
                                    <img src="bancor.png" />
                                </div>
                                <div className="detaail">
                                    <h3>From Cold Start To At Scale</h3>
                                    <p>Partnered with <a href="http://bancor.network">Bancor.network</a> for cold start and at-scale limitless liquidity.</p>
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
                                        <p>Using the Byzantine BaaS API Gateway to abstract away on-chain operations, LDAR currently supports EOS with support for TRON, ADA, LISK, ETH, XLM and more DPOS ecosystems in the works.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Simple</h5>
                                        <p>Flip a switch functionality with scalability built in, LDAR ensures validation of tokens with their respective contract hashes while ensuring transaction integrity and security.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Secure</h5>
                                        <p>Robust and thorough, all relays rely on a combination of nonces, private salts, API security keys and a ciphers used by the web client, exchange server, and the BaaS API for capturing the users signature. This prevents sybil and replay attacks and provides secure exchange of keys for on-chain calls.</p>
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