import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import prodImage from '../imgs/asset3.png';
import prodImage2 from '../imgs/asset4.png';
import prodIcon from '../imgs/prod_icon.png';
import idex from '../imgs/idex.png';
import mbaex from '../imgs/mbaex.png';
import Contact from '../Home/contact';

class Home extends Component{
    render(){
       
        return(
            <div className="productPage walletProducts">
                <div className="wellcom_banner">
                    <Header />
                    <div className="productTitle">
                        <div className="container">
                            <h4>EOS Blockchain as a Service</h4>
                            <h6>Byzantine's API gateway enables instantaneous EOS integration for Centralized and Decentralized Exchanges, Wallets and Decentralized Applications, in a secure, scalable and reliable manner without the need to run a local EOS main net.</h6>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>THE EXCHANGE INTEGRATION PROBLEM</h3>
                                    <p>Exchanges must stand up a new mainnet for every new
                                    blockchain</p>
                                    <p>They are forced to solve for technology complexity instead of
                                    augmenting order books, acquiring new users and building
                                    new markets</p>
                                    <p>This hinders business scalability and growth</p>
                                </div>
                                <div className="prodImageSc">
                                    <img src={prodImage} />
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="detaail lastFrst">
                                    <h3>Solution</h3>
                                    <p>BaaS Platform Digital Exchange Enablement:</p>
                                    <p>High performance cross chain token swap/trading ecosystem
                                    for centralized and decentralized exchanges</p>
                                    <p>Support for non-fungible tokens and algorithmic trading</p>
                                    <p>Optional integration with the Liquid Digital Asset Relay Platform</p>
                                 </div>
                                <div className="prodImageSc lasts">
                                    <img src={prodImage2} />
                                </div>
                            </li>
                            
                            <li className="clearfix">
                                <div className="detaail">
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
                                <div className="prodImageSc">
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