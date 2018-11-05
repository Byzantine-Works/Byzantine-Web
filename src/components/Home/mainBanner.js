import React, {Component} from 'react';
import earths from '../imgs/earths.png';
import icon_main from '../imgs/icon_main3.png';
import icon1 from '../imgs/prod_icon.png';
import icon2 from '../imgs/prod_icon2.png';
import icon3 from '../imgs/prod_icon3.png';
import icon4 from '../imgs/prod_icon5.png';
import icon5 from '../imgs/prod_icon7.png';

class Home_banner extends Component{
    render(){
       
        return(
            <div className="main_banner">
                <div className="container clearfix">
                    <div className="banner_left">
                        <img src={earths} className="earth" alt="header" /> 
                        <h1>The Blockchain Solution Provider</h1>
                        <p>Eliminating the Barriers to Blockchain Adoption & Delivering on the promise of high-performance, enterprise-grade blockchain applications</p>
                    </div>
                    <div className="banner_right">
                        <div className="header-image animated text-center"> 
                            <img src={icon_main} className="main_img" alt="header" /> 
                            <img className="header-image-icon left-icon" src={icon1} alt="header-icon"/> 
                            <img className="header-image-icon right-icon" src={icon2} alt="header-icon"/>
                            <img className="header-image-icon top-icon" src={icon3} alt="header-icon"/> 
                            <img className="header-image-icon top-left-icon" src={icon4} alt="header-icon"/>
                            <img className="header-image-icon top-right-icon" src={icon5} alt="header-icon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home_banner;