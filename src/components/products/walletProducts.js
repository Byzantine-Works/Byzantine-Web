import React, {Component} from 'react';
import Header from '../header';
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
                            <h4>Wallet products</h4>
                            <h6>Wallet integrations include a skinny wallet(stripe), a fat wallet, iOS wallet and airdrop utility for EOS. In the future, these integrations will be chain agnostic and support all the major DPOS blockchain ecosystems.</h6>
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
                                <div className="prodImage">
                                    <img src="stripe.png" />
                                </div>
                            </li>
                            
                            <li className="clearfix rightD">
                                <div className="prodImage">
                                    <img src={prodImage} />
                                </div>
                                <div className="detaail">
                                    <h3>EOS Full Wallet</h3>
                                    <p>Comprehensive EOS full wallet to enable all EOS related on-chain functionality such as account creation, voting, delegating, undelegating, buy/sell RAM, transfer and staking.</p>
                                </div>
                            </li>

                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>EOS Airdrop Utility</h3>
                                    <p>Utility tool to simplify the process of Airdrops for token launchers. Provides a CLI interface and a web-interface to wizardify a sequential set of Q&A to create token-contract, deploy, issue tokens and airdrops. This utility also estimates RAM and stake requirement based on the tokenomics for EOS vs Token ratios.</p>
                                </div>
                                <div className="prodImage">
                                    <img src="estimator.png" />
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