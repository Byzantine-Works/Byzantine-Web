import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import prodImage from '../imgs/asset3.png';
import prodImage2 from '../imgs/asset4.png';
import prodIcon from '../imgs/prod_icon.png';
import idex from '../imgs/idex.png';
import mbaex from '../imgs/mbaex.png';
import Contact from '../Home/contact';

import icon_main from '../imgs/icon_main5.png';
import puckBass from '../imgs/products6.png';
import puckBass2 from '../imgs/products2.png';
import puckBass3 from '../imgs/products3.png';
import puckBass4 from '../imgs/products4.png';
import puckBass5 from '../imgs/products5.png';


import app1 from '../imgs/app2/a_main.png';
import app2 from '../imgs/app2/a1.png';
import app3 from '../imgs/app2/a2.png';
import app4 from '../imgs/app2/a3.png';


import app5 from '../imgs/app2/b_main.png';
import app6 from '../imgs/app2/b1.png';
import app7 from '../imgs/app2/b2.png';
import app8 from '../imgs/app2/b3.png';

class Home extends Component{
    render(){
       
        return(
            <div className="productPage walletProducts innweProd">
                <div className="wellcom_banner innerWellcom">
                    <Header />
                    <div className="main_banner">
                        <div className="container clearfix">
                            <div className="banner_left">
                                <h1>EOS Blockchain as a Service</h1>
                                <p>Byzantine's API gateway enables instantaneous EOS integration for Centralized and Decentralized Exchanges, Wallets and Decentralized Applications, in a secure, scalable and reliable manner without the need to run a local EOS main net.</p>
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
                                    <h3>THE EXCHANGE INTEGRATION PROBLEM</h3>
                                    <p>Exchanges must stand up a new mainnet for every new
                                    blockchain</p>
                                    <p>They are forced to solve for technology complexity instead of
                                    augmenting order books, acquiring new users and building
                                    new markets</p>
                                    <p>This hinders business scalability and growth</p>
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
                                <div className="detaail lastFrst  dots">
                                    <h3>Solution</h3>
                                    <p>BaaS Platform Digital Exchange Enablement:</p>
                                    <p>High performance cross chain token swap/trading ecosystem
                                    for centralized and decentralized exchanges</p>
                                    <p>Support for non-fungible tokens and algorithmic trading</p>
                                    <p>Optional integration with the Liquid Digital Asset Relay Platform</p>
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
                            
                            <li className="clearfix">
                                <div className="detaail ">
                                    <h3>Why Stand Up A Stack For Each New Blockchain?</h3>
                                    <p>Digital assets exchanges and banks are focused on beating their rivals, making markets, acquiring customers, and increasing transaction volume</p>
                                    <p><h4><b>NOT</b></h4></p>
                                    <p>Solving for technology complexity</p>
                                    <p>Our platform integrations are usually completed in less than two weeks at a 94% cost savings compared to the fully loaded cost of having your development teams perform the work.</p>
                                </div>
                                <div className="prodImage">
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
                                <div className="prodImageSc aggration">
                                    <img src={idex} />
                                    <img src={mbaex} />
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