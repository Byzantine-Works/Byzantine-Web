import React, {Component} from 'react';
import Header from './headerInner';
import Footer from './footer';
import prodImage from './imgs/asset7.png';
import prodImage2 from './imgs/asset8.png';
import prodIcon from './imgs/prod_icon.png';
import Contact from './Home/contact';

class Home extends Component{
    render(){
       
        return(
            <div className="productPage walletProducts">
                <div className="wellcom_banner">
                    <Header />
                    <div className="productTitle">
                        <div className="container">
                            <h4>Exchange Sonar </h4>
                            <h6>Automatically detect wash trading, pump and dump schemes, and enforce KYC and AML compliance</h6>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>THE FRAUD PROBLEM </h3>
                                    <p>Centralized and Decentralized exchanges have poor visibility
                                    to detect wash trading, pump and dump schemes, and
                                    enforcement of KYC and AML compliance</p>
                                    <p>Lack of coherent and enforceable regulatory rulesets as a
                                    platform within the exchanges </p>
                                </div>
                                <div className="prodImageSc">
                                    <img src={prodImage} />
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="detaail lastFrst">
                                    <h3>Solution</h3>
                                    <p>Exchange Sonar: </p>
                                    <p>Semantic analysis and prediction of fraudulent activity</p>
                                    <p>Detects potential wash trade and pump and dump activities on an exchange</p>
                                    <p>Recognizes suspicious orders, trades and collusions</p>
                                    <p>Automatically grey/black lists offending accounts</p>
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