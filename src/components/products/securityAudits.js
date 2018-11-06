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
                            <h4>Security Audits</h4>
                            <h6>Ensuring customer security and regulatory compliance</h6>
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="container">
                        <ul>
                            <li className="clearfix">
                                <div className="detaail">
                                    <h3>Rigorous Done Right</h3>
                                    <p>We employ a team of mavens using an arsenal of automated tests and code reviews to put your smart contract through its paces.</p>
                                    <p>Our audit methodology regresses design patterns, static and manual analysis, network behavior assessments, memory and cpu optimizations and more to produce a detailed report covering the results of our analysis accross contract behaviors, token allocations, and explicit vulnerability checks to detail the issues discovered from informational to high severity threat levels</p>
                                </div>
                                <div className="prodImage">
                                    <img src="audit.png" />
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