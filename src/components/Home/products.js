import React, {Component} from 'react';
import icon1 from '../imgs/prod_icon.png';
import icon8 from '../imgs/prod_icon8.png';
import puckBass1 from '../imgs/products1.png';
import puckBass2 from '../imgs/products2.png';
import puckBass3 from '../imgs/products3.png';
import puckBass4 from '../imgs/products4.png';
import puckBass5 from '../imgs/products5.png';
import puckBass6 from '../imgs/products6.png';
import puckBass7 from '../imgs/products7.png';
import puckBass8 from '../imgs/products8.png';
import puckBass9 from '../imgs/products9.png';

class Home_banner extends Component{
    render(){
        return(
            <div className="Product_wrap" id="Products">
                <div className="container">
                    <h3>Products And Services</h3>
                    <p style={{'display': 'none'}}>Byzantine exists to simplify Blockchains.  We are a technology solutioning design consultancy servicing customers, building an intuitive suite of products and services to reduce costs and increase access</p>
                    <ul className="clearfix">
                        <li><a href="/digitalAssetEnablement">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={puckBass1} /></span> 
                                <h3>Digital Asset Enablement</h3>
                                <p>DApp makers, wallet providers, crypto trading platforms can integrate with new blockchains quickly via one simple API call</p>
                                
                            </div></a>
                        </li>
                        <li> <a href="/blockchainAggregation">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={puckBass2} /></span> 
                                <h3>Exchange Integrations </h3>
                                <p>Focus your development teams on differentiating features, not new blockchain integrations</p>
                            </div></a>
                        </li>
                        <li><a href="/liquidityPooling">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={puckBass4} /></span> 
                                <h3>Liquidity Pooling</h3>
                                <p>Create an exchange and instantly have the ability to make and fill your customers trades without fear of having enough users</p>
                            </div></a>
                        </li>
                        <li><a href="/exchangeSonar">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={puckBass6} /></span> 
                                <h3>Exchange Sonar</h3>
                                <p>Automatically detect wash trading, pump and dump schemes, and enforce KYC and AML compliance</p>
                            </div></a>
                        </li>
                        
                        <li><a href="/designLab">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={puckBass3} /></span> 
                                <h3>Blockchain Consulting</h3>
                                <p>Build blockchain products with us from concept through to deployment</p>
                                
                            </div></a>
                        </li>
                        
                        <li><a href="/securityAudits">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={puckBass7} /></span> 
                                <h3>Security Audits </h3>
                                <p>Ensure customer security and regulatory compliance </p>
                            </div></a>
                        </li>
                        
                        <li><a href="/education">
                            <div className="prod_inner">
                                <span><img className="grid__img layer" src={puckBass8} /></span> 
                                <h3>Education</h3>
                                <p>Access training boot camps, university hack-a-thons, solution hardening, bug bounties, and more</p>
                                
                            </div></a>
                        </li>

                        <li>
                            <a href="/community">
                                <div className="prod_inner">
                                <span><img className="grid__img layer" src={puckBass9} /></span> 
                                <h3>Community</h3>
                                <p>Our commitment to contributing back to the blockchain developer community </p>
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