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
                            <h4>Design lab</h4>
                            <h6>Build blockchain products with us from idea to to delivery</h6>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>Empowering Blockchain Clients - From Ideation To Solution Advisory</h3>
                                    <h4>Mission</h4>
                                    <p>We ensure the success of our clients in building and deploying Infrastructure, Smart Contracts, and Decentralized Applications (DApp’s) onto high performance Blockchains and Distributed Ledger Technologies (DLT’s).</p>
                                    <h4>The Problem</h4>
                                    <p>83% of our target clients face significant roadblocks holding them back from integrating Blockchains and DLT’s into their businesses. The majority of those roadblocks are not related to IT but rather politics, budget, time, and staff.</p>
                                    <h4>Our Solution</h4>
                                    <p>Our Blockchain and DLT subject matter expertise, tightly coupled with an Application Lifecycle Management process will dramatically reduce the cost, complexity, and time to value.</p>
                                    <p>We enable businesses of any size to engage one vendor for Scoping, Software Development, Support, and Maintenance, dramatically reducing friction and ensuring client satisfaction.</p>
                                </div>
                                <div className="prodImage">
                                    <img src="labs.png" />
                                </div>
                            </li>

                            <li className="clearfix rightD">
                                <div className="prodImage">
                                    <img src={prodImage} />
                                </div>
                                <div className="detaail">
                                    <h3>We Work Hard For Our Partners</h3>
                                    <p>Visioneering from ideation to solution blueprinting and roadmap building covering the execution lifecycle of DaPPs.</p>
                                    <p>Enabling ICOs, Airdrops, and Air Grabs for new token platforms on any blockchain</p>
                                    <p>Establishing token economics and assist in orchestrating white papers</p>
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
                                        <h5>Smart Rapid Prototyping</h5>
                                        <p>We time-box development cycles into highly structured, goal oriented, weekly feature deliveries. The result are build/ measure/learn cycles that are incredibly efficient without sacrificing quality. We live by Lean/Agile product development methodologies to minimize waste and maximize outputs.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Right Tools & Open-Source Orchestration</h5>
                                        <p>Technology is analogous to the mechanics toolbox. There are many tools open source and otherwise which could be used to effectively do the same job. The best mechanic is the one that chooses the right tool the first time and every time amidst continuous innovation and new tools coming out at an ever increasing pace. We are those expert mechanics, versatile mavens ready to take on your vision.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <span><img src={prodIcon} /> </span>
                                    <div>
                                        <h5>Continuous Delivery And Integration</h5>
                                        <p>At the conclusion of each weeks efforts, a working software is delivered for you to review and test for functionality and efficacy in matching the business requirement. We simultaneously work forward from the start line and back from the finish line so that you can see precisely where you are on the path to realization of your vision.</p>
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