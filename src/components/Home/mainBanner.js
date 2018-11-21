import React, {Component} from 'react';
import earths from '../imgs/earths.png';
import icon_main from '../imgs/icon_main3.png';
import puckBass from '../imgs/products6.png';
import puckBass2 from '../imgs/products2.png';
import puckBass3 from '../imgs/products3.png';
import puckBass4 from '../imgs/products4.png';
import puckBass5 from '../imgs/products5.png';

class Home_banner extends Component{
    render(){
       
        return(
            <div className="main_banner">
                <div className="container clearfix">
                    <div className="banner_left">
                        <img src={earths} className="earth" alt="header" /> 
                        <h1>The Blockchain Solutions Provider</h1>
                        <p>We enable companies with products and services to deliver best-in-class Digital Asset & Blockchain experiences to their customers for a fraction of the cost of building themselves.</p>
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
        )
    }
}

export default Home_banner;