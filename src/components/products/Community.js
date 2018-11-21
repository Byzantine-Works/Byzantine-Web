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

class Home extends Component{
    render(){
       
        return(
            <div className="productPage communityP">
                <div className="wellcom_banner">
                    <Header />
                    
                    <div className="productTitle">
                        <div className="container">
                            <h4>Community</h4>
                            <h6>Powered by <a href="http://libertyblock.io">Liberty Block</a>, these are the tools we've built to make every developer's life easier</h6>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            <li className="clearfix">
                                <div className="detaail lastFrst" style={{'textAlign': 'right'}}>
                                    <h3>Committed to the future of EOS</h3>
                                    <p>We built tools to make our lives easier, and we want to share them with the world.  Like what you see?  Want to know more?  We'd love to hear from you!  <a href="/#contact">Drop us a line</a>, we'd love to hear from you!</p>
                                </div>
                                <div className="prodImageSc lasts">
                                  <img src={prodImage2} />
                                </div>
                            </li>

                            <li className="clearfix rightD">
                                <div className="prodImageSc">
                                    <img src={estimator} />
                                </div>
                                <div className="detaail">
                                    <h3>EOS Contract Cost Estimator</h3>
                                    <p>This utility estimates CPU, Memory, and RAM stakes requirements via a simple web ui.  Simply upload your ABI and WASM file and watch as the tool goes to work, regressing all the function calls within the smart contract and assesses total costs of deployment.</p>
                                    <a href="#"><img src={github} />GitHub</a><a href="#">Live Demo</a>
                                </div>
                            </li>
                            
                            <li className="clearfix">
                                <div className="detaail" style={{'textAlign':'right'}}>
                                    <h3>Community EOS Blockchain as a Service API Middleware</h3>
                                    <p>A community enabled, free to use version of our <a href="/blockchainAggregation">EOS Blockchain as a Service</a> platform</p>
                                    <a href="#">Live Demo</a>
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
currencies</p><a href="#"><img src={github} />GitHub</a><a href="#">Live Demo</a>

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