import React, {Component} from 'react';
import icon1 from '../imgs/prod_icon.png';
import icon2 from '../imgs/prod_icon2.png';
import icon3 from '../imgs/prod_icon3.png';
import icon4 from '../imgs/prod_icon4.png';
import icon5 from '../imgs/prod_icon5.png';
import icon6 from '../imgs/prod_icon6.png';
import icon7 from '../imgs/prod_icon7.png';
import icon8 from '../imgs/prod_icon8.png';

class Home_banner extends Component{
    render(){
        return(
            <div className="Product_wrap" id="Products">
                <div className="container">
                    <h3>Products</h3>
                    <p>Byzantine exists to simplify Blockchains. We strive to build state-of-the-art
blockchain products. Our <br/> vision is to build an intuitively designed suite of services
with an automated back office and servicing <br /> to reduce costs and increase access</p>
                    <ul className="clearfix">
                        <li><a href="/walletProducts">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={icon5} /></span> 
                                <h3>Wallet Products</h3>
                                <p>Send and receive crypto currency payments and open various kinds of wallets for your customers via simple html widgets.</p>
                                
                            </div></a>
                        </li>
                        <li><a href="/blockchainAggregation">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={icon2} /></span> 
                                <h3>Anychain BaaS Blockchain API Middleware Platform</h3>
                                <p>Instantly authenticate to and integrate any blockchain as a service with one simple API call </p>
                                
                            </div></a>
                        </li>
                        <li> <a href="/decentralizedExchange">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={icon6} /></span> 
                                <h3>Exchange Integrations </h3>
                                <p>Focus your development teams on differentiating features, not new blockchain integrations </p>
                               
                            </div></a>
                        </li>
                        <li><a href="/liquidityPooling">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={icon3} /></span> 
                                <h3>Liquidity Pooling</h3>
                                <p>Create an exchange and instantly have the ability to make and fill your customers trades without fear of having enough users</p>
                                
                            </div></a>
                        </li>
                        
                        <li><a href="/designLab">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={icon7} /></span> 
                                <h3>Design Lab </h3>
                                <p>Build blockchain products with us from idea to delivery </p>
                                
                            </div></a>
                        </li>
                        
                        <li><a href="/securityAudits">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={icon4} /></span> 
                                <h3>Security Audits </h3>
                                <p>Ensure customer security and regulatory compliance </p>
                            </div></a>
                        </li>
                        
                        <li><a href="/education">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={icon8} /></span> 
                                <h3>Education</h3>
                                <p>Access training boot camps, university hack-a-thons, solution hardening, bug bounties, and more </p>
                                
                            </div></a>
                        </li>

                        <li>
                            <a href="/community">
                                <div className="prod_inner">
                                <span><img className="grid__img layer" src={icon1} /></span> 
                                <h3>Community</h3>
                                <p>Our commitment to giving back to the blockchain community</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home_banner;