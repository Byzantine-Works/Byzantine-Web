import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import estimator from '../imgs/estimator.png';
import airdrop from '../imgs/airdrop1.png';
import ideos from '../imgs/ideos.png';
import stripe from '../imgs/stripe1.png';
import prodImage from '../imgs/productImg.png';
import prodIcon from '../imgs/prod_icon.png';
import github from '../imgs/github.svg';
import prodImage2 from '../imgs/asset9.png';
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
            <div className="productPage communityP innweProd">
                <div className="wellcom_banner innerWellcom">
                    <Header />
                    <div className="main_banner">
                        <div className="container clearfix">
                            <div className="banner_left">
                                <h1>Community</h1>
                                <p>Powered by Liberty Block, these are the tools we've built to make every developer's life easier, and we want to share them with the world. Like what you see? Want to know more?  Drop us a line, we'd love to hear from you!</p>
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

                            <li className="clearfix rightD">
                                <div className="prodImageSc">
                                    <img src={estimator} />
                                </div>
                                <div className="detaail">
                                    <h3>EOS Contract Cost Estimator</h3>
                                    <p>This utility estimates CPU, Memory, and RAM stakes requirements via a simple web ui.  Simply upload your ABI and WASM file and watch as the tool goes to work, regressing all the function calls within the smart contract and assesses total costs of deployment.</p>
                                    <a href="#"><img src={github} />GitHub</a><a href="/contractestimator">Live Demo</a>
                                </div>
                            </li>
                            
                            <li className="clearfix">
                                <div className="detaail" style={{'textAlign':'right'}}>
                                    <h3>Community EOS Blockchain as a Service API Middleware</h3>
                                    <p>A community enabled, free to use version of our <a href="/blockchainAggregation">EOS Blockchain as a Service</a> platform</p>
                                    <a href="https://api.byzantine.works/docs">Live Demo</a>
                                </div>
                                <div className="prodImageSc">
                                    <img src="api.png" />
                                </div>
                            </li>

                            <li className="clearfix rightD">
                                <div className="prodImageSc">
                                    <img src={stripe} />
                                </div>
                                <div className="detaail">
                                    <h3>EOS Payment Terminal</h3>
                                    <p>Simple, intuitive, secure and embeddable widget for a
universal crypto wallet built on the Byzantine API
Gateway. This fee-less wallet lowers the barriers for
small businesses accepting EOS and other crypto
currencies</p><a href="#"><img src={github} />GitHub</a><a href="/eospaymentterminal">Live Demo</a>

                                </div>
                            </li>

                            <li className="clearfix ">
                                <div className="detaail" style={{'textAlign':'right'}}>
                                    <h3>EOS Airdrop Tool</h3>
                                    <p>Built by developers for developers, this command line interface tool is a comprehensive EOS utility to simplify all EOS related on-chain functionality such as account creation, voting, delegating, undelegating, buy/sell RAM, transfer and staking.</p>
                                    <p>It dramatically simplifies the process of Airdrops for token launches.  It provides a wizard that walks through a set of questions to create token-contract, deploy it, and then issue tokens and airdrop them to users. This utility also estimates RAM and stake requirement based on the tokenomics for EOS vs Token ratios.</p>
                                    <a href="#"><img src={github} />GitHub</a>
                                </div>
                                <div className="prodImageSc">
                                    <img src={airdrop} />
                                </div>
                            </li>

                           <li className="clearfix rightD">
                                <div className="prodImageSc">
                                    <img src={ideos} />
                                </div>
                                <div className="detaail">
                                    <h3>idEOS</h3>
                                    <p>The WORLDS FIRST Interactive Development Environment for EOS!!!  This simple to use development environment allows you to interact with the EOS testnets and mainnets or just on a local EOS node on your computer.  </p>
                                    <p>Code, compile, deploy, transfer EOS to wallets, estimate resources required, interact with Scatter, and more with point-and-click ease.  Cool!</p>
                                    <a href="#">Coming soon</a>
                                </div>
                            </li>

                            <li className="clearfix ">
                                <div className="detaail" style={{'textAlign':'right'}}>
                                    <h3>Learning Blockchain Development with EOS and C++</h3>
                                    <p>Explore the EOS dApp ecosystem and learn how to write and deploy smart contracts to the EOSIO blockchain.</p>
                                    <p>Smart Contracts? They're here.  The EOS Blockchain?  Covered.  C++?  Yep!</p>
                                    <a href="https://www.udemy.com/learning-blockchain-development-with-eos-and-cpp">Udemy Course</a>
                                </div>
                                <div className="prodImageSc">
                                    <img src="udemy.png" />
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