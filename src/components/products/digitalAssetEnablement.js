import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import prodImage from '../imgs/asset1.png';
import prodImage2 from '../imgs/asset2.png';
import prodIcon from '../imgs/prod_icon.png';
import Contact from '../Home/contact';

class Home extends Component{
    render(){
       
        return(
            <div className="productPage walletProducts">
                <div className="wellcom_banner">
                    <Header />
                    <div className="productTitle">
                        <div className="container">
                            <h4>Digital Asset Enablement</h4>
                            <h6>DApp makers, wallet providers, crypto trading platforms can integrate with new blockchains quickly via one simple API call</h6>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>THE INTEGRATION PROBLEM</h3>
                                    <p><span></span> DApp makers, wallet providers, crypto trading platforms, etc. find developing integrations with new blockchains difficult because each chain uses its own programming language, protocol, and syntax</p>
                                    <p><span></span> This creates resource and time burdens for companies while they grapple with understanding the nuances of each chain</p>
                                    <p><span></span> Companies are missing opportunities to capitalize </p>
                                </div>
                                <div className="prodImageSc">
                                    <img src={prodImage} />
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="detaail lastFrst">
                                    <h3>Solution</h3>
                                    <p>BaaS Platform Digital Asset Enablement:</p>
                                    <p><span></span>92% Cheaper & Faster than deploying your own blockchain</p>
                                    <p><span></span>One API to access any blockchain via URL</p>
                                    <p><span></span>Partnered with Liberty Block for on-chain actions</p>
                                </div>
                                <div className="prodImageSc lasts">
                                    <img src={prodImage2} />
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