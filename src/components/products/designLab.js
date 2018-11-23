import React, {Component} from 'react';
import Header from '../headerInner';
import Footer from '../footer';
import prodImage from '../imgs/productImg.png';
import products3 from '../imgs/products3.png';

import prodIcon from '../imgs/prod_icon.png';
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
            <div className="productPage innweProd">
                <div className="wellcom_banner innerWellcom">
                    <Header />
                    
                    <div className="main_banner">
                        <div className="container clearfix">
                            <div className="banner_left">
                                <h1>Design lab</h1>
                                <p>Build blockchain products with us from idea to to delivery</p>
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
                                <div className="detaail lastFrst">
                                    <h3>Empowering Blockchain Clients - From Ideation To Solution Advisory</h3>
                                    <h4>Mission</h4>
                                    <p>We ensure the success of our clients in building and deploying Infrastructure, Smart Contracts, and Decentralized Applications (DApp’s) onto high performance Blockchains and Distributed Ledger Technologies (DLT’s).</p>
                                </div>
                                <div className="prodImageSc lasts">
                                    <img src={products3} /> 
                                </div>
                            </li>

                            <li className="clearfix rightD">
                                <div className="prodImageSc">
                                    <img src="labs1.png" />
                                </div>
                                <div className="detaail">
                                    <h3>We Work Hard For Our Partners</h3>
                                    <p>We bring visioneering from ideation to solution blueprinting and roadmap building covering the execution lifecycle of DaPPs.</p>
                                    <p>We enable ICOs, Airdrops, and Air Grabs for new token platforms on any blockchain</p>
                                    <p>We establish token economics and assist in orchestrating white papers</p>
                                    <h4>Our Solutioning Approach</h4>
                                    <p>Our Blockchain and DLT subject matter expertise, tightly coupled with an Application Lifecycle Management process dramatically reduces cost, complexity, and time to value.</p>
                                    <p>We enable businesses of any size to engage one vendor for Scoping, Software Development, Support, and Maintenance, dramatically reducing friction and ensuring client satisfaction.</p>
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