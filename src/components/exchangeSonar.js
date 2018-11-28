import React, {Component} from 'react';
import Header from './headerInner';
import Footer from './footer';
import prodImage from './imgs/asset7.png';
import prodImage2 from './imgs/asset8.png';
import prodIcon from './imgs/prod_icon.png';
import Contact from './Home/contact';

import icon_main from './imgs/icon_main5.png';
import puckBass from './imgs/products6.png';
import puckBass2 from './imgs/products2.png';
import puckBass3 from './imgs/products3.png';
import puckBass4 from './imgs/products4.png';
import puckBass5 from './imgs/products5.png';

import app1 from './imgs/app3/a_main.png';
import app2 from './imgs/app3/a1.png';
import app3 from './imgs/app3/a2.png';


import app5 from './imgs/app3/b_main.png';
import app6 from './imgs/app3/b1.png';
import app7 from './imgs/app3/b2.png';
import app8 from './imgs/app3/b3.png';
import app9 from './imgs/app3/b4.png';

class Home extends Component{
    render(){
       
        return(
            <div className="productPage walletProducts innweProd">
                <div className="wellcom_banner innerWellcom">
                    <Header />
                    
                    <div className="main_banner">
                        <div className="container clearfix">
                            <div className="banner_left">
                                <h1>Exchange Sonar</h1>
                                <p>Automatically detect wash trading, pump and dump schemes, and enforce KYC and AML compliance</p>
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
                                    <h3>THE FRAUD PROBLEM </h3>
                                    <p>Centralized and Decentralized exchanges have poor visibility
                                    to detect wash trading, pump and dump schemes, and
                                    enforcement of KYC and AML compliance</p>
                                    <p>Lack of coherent and enforceable regulatory rulesets as a
                                    platform within the exchanges </p>
                                </div>
                                <div className="prodImageSc Soner">
                                    <div className="appImg">
                                        <img className="imgM" src={app1} />
                                        <img className="img1" src={app2} />
                                        <img className="img2" src={app3} />
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="detaail lastFrst dots">
                                    <h3>Solution</h3>
                                    <p>Exchange Sonar: </p>
                                    <p>Semantic analysis and prediction of fraudulent activity</p>
                                    <p>Detects potential wash trade and pump and dump activities on an exchange</p>
                                    <p>Recognizes suspicious orders, trades and collusions</p>
                                    <p>Automatically grey/black lists offending accounts</p>
                                </div>
                                <div className="prodImageSc lasts">
                                    <div className="bigImages Soner">
                                        <img className="imgM" src={app5} />
                                        <div className="appImgT">
                                            <img className="img1" src={app6} />
                                            <img className="img2" src={app7} />
                                            <img className="img3" src={app8} />
                                            <img className="img4" src={app9} />
                                        </div>
                                    </div>
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