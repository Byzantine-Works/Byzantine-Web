import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import prodImage from '../imgs/productImg.png';
import prodIcon from '../imgs/prod_icon.png';
import Contact from '../Home/contact';

class Home extends Component{
    render(){
       
        return(
            <div className="productPage">
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
                                    <h3>Simplicity</h3>
                                    <p>The Byzantine EOS BaaS API provides a simplified abstraction from the complexity of token contract integrations, validating tokens against their respective contract hashes, ensuring token trasfers are secure, preventing replay attacks, and monitoring the fastest routes to the EOS blockchain.</p>
                                    <p>The API runs its own mainnet and load balances across the 21 block producers for high availability.  It compresses all requests and responses to ensure high throughput.</p>
                                </div>
                                <div className="prodImage">
                                    <img width="569" height="323" src="baas.png"/>
                                </div>
                            </li>


                            
                            <li className="clearfix rightD">
                                <div className="prodImage">
                                    <img src="api.png" />
                                </div>
                                <div className="detaail">
                                    <h3>Abstraction</h3>
                                    <p>The Byzantine EOS BaaS API streamlines interactions with the blockchain via features such as:</p>
                                    <p>Simplifies Airdrop and Airgrab Token balances, token precision issues, accessing smart contracts, creation of new accounts, delegating account stakes, voting for Block Producers, retrieving RAM pricing, buying and selling RAM, and accessing account transaction history</p>
									<p>Aggregates decentralized exchange market data across EOS and derivative assets</p>
                                    <p>Enables token transfer with or without Scatter</p>
									<p>Provides an embeddable 'stripe' wallet for EOS that can be customized to work with QR codes on web, mobile or POS systems for accepting EOS and derivative digital assets</p>
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