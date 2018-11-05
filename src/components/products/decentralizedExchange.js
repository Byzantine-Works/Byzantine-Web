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
                            <h4>Decentralized exchange with UberDEX</h4>
                            <h6>
Truly decentralized exchange technology with trade AND order book information on the blockchain</h6>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>No Hybrids Here</h3>
                                    <p>UberDEX’s patent-pending decentralized architecture provides the highest level of autonomous, secure, and reliable multi-chain token trading ecosystem that is designed from the ground up to deliver the performance of Centralized Exchanges in a Decentralized Exchange network. </p>
                                    <p>Algorithmic-trading ready right out of the box?  Yes please!  The unique design pairs transparent low-latency global orderbooks and trading engines with a decentralized chain-specific Smart Contract. The global orderbook infrastructure augments the trading experience, while the smart contract handles all funds, trade authorization, and final settlement in a completely autonomous and decentralized manner.</p>
                                </div>
                                <div className="prodImage">
                                    <img src={prodImage} />
                                </div>
                            </li>
                            
                            <li className="clearfix rightD">
                                <div className="prodImage">
                                    <img src={prodImage} />
                                </div>
                                <div className="detaail">
                                    <h3>White Labeled</h3>
                                    <p>UberDEX provides a customizable, secure, robust, white-labeled Decentralized Exchange ecosystem that couples with the Byzantine BaaS API for resiliency and high availability. This platform encapsulates exchange infrastructure and smart contracts to deliver a high-performance, enterprise grade, autonomous and decentralized exchange supporting various chains. The solution augments real-time trading DApps with on-chain instant and transparent settlement.</p>
                                    <p>UberDEX uses the Byzantine Liquidity Pooling product (Liquid Digital Asset Relay or EOS-LDAR) to participate in global liquidity pool and make/take orders from the pool. This enables a 2-3 week window from cold start to launching a new Decentralized Exchange business, opening trades on any supported base token and stable coins.</p>
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