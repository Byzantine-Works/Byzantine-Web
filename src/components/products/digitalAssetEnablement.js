import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import prodImage from '../imgs/asset1.png';
import prodImage2 from '../imgs/asset2.png';
import prodIcon from '../imgs/prod_icon.png';
import Contact from '../Home/contact';

import icon_main from '../imgs/icon_main5.png';
import puckBass from '../imgs/products6.png';
import puckBass2 from '../imgs/products2.png';
import puckBass3 from '../imgs/products3.png';
import puckBass4 from '../imgs/products4.png';
import puckBass5 from '../imgs/products5.png';

import app1 from '../imgs/app1/a_main.png';
import app2 from '../imgs/app1/a1.png';
import app3 from '../imgs/app1/a2.png';
import app4 from '../imgs/app1/a3.png';


import app5 from '../imgs/app1/b_main.png';
import app6 from '../imgs/app1/b1.png';
import app7 from '../imgs/app1/b2.png';
import app8 from '../imgs/app1/b3.png';


class Home extends Component{
    render(){
       
        return(
            <div className="productPage walletProducts innweProd">
                <div className="wellcom_banner innerWellcom">
                    <Header />
                    
                    <div className="main_banner">
                        <div className="container clearfix">
                            <div className="banner_left">
                                <h1>Digital Asset Enablement</h1>
                                <p>DApp makers, wallet providers, crypto trading platforms can integrate with new blockchains quickly via one simple API call</p>
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
                                <div className="detaail dots digitalAssets">
                                    <h3>THE INTEGRATION PROBLEM</h3>
                                    <p><span></span> DApp makers, wallet providers, crypto trading platforms, etc. find developing integrations with new blockchains difficult because each chain uses its own programming language, protocol, and syntax</p>
                                    <p><span></span> This creates resource and time burdens for companies while they grapple with understanding the nuances of each chain</p>
                                    <p><span></span> Companies are missing opportunities to capitalize </p>
                                </div>
                                <div className="prodImageSc">
                                    <div className="appImg">
                                        <img className="imgM" src={app1} />
                                        <img className="img1" src={app2} />
                                        <img className="img2" src={app3} />
                                        <img className="img3" src={app4} />
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="detaail lastFrst dots">
                                    <h3>Solution:  BaaS Platform Digital Asset Enablement</h3>
                                    <p><span></span>92% Cheaper & Faster than deploying your own blockchain</p>
                                    <p><span></span>One API to access any blockchain via URL</p>
                                    <p><span></span>Partnered with Liberty Block for on-chain actions</p>
                                </div>
                                <div className="prodImageSc lasts">
                                    <div className="bigImages">
                                        <img className="imgM" src={app5} />
                                        <div className="appImgT">
                                            <img className="img1" src={app6} />
                                            <img className="img2" src={app7} />
                                            <img className="img3" src={app8} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="prdoctBottom">
                    <div className="productInner digitalAssets">
                        <div className="container">
                            <ul>
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Monitoring</h5>
                                        <p>Provides Elasticsearch, Logstash, and Kibana style Analytics Dashboarding for monitoring all transactions, throughput, errors, and uptime.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Security</h5>
                                        <p>Employs a combination of a nonce, a private salt and a api-security-key to enable first class security without compromising speed.  This prevents replay attacks and provides secure sharing of keys for signing transactions.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Protection</h5>
                                        <p>Prevents exploits such as the eosio.token transfer exploit that EOSBetDice experienced or the fake EOS token exploit that NewDEX experienced.</p>
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