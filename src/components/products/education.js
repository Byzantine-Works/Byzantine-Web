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
                            <h4>Education</h4>
                            <h6>Access training boot camps, university hack-a-thons, solution hardening, bug bounties, and more</h6>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>Teaching Is In Our DNA</h3>
                                    <p>We organize hackathons, crowdsourcing solution hardening, bug bounty setups and smart contract verification</p>
                                    <p>We also orchestrate chain specific coding boot camps with real-life applications to empower “zero-to-hero” mavens</p>
                                    <p>Our drive is to create outreach within the crypto community and enabling product pitches</p>
                                </div>
                                <div className="prodImage">
                                    <img src={prodImage} />
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