import React, {Component} from 'react';
import Header from './headerInner';
import Footer from './footer';
import prodImage from './imgs/productImg.png';
import prodIcon from './imgs/prod_icon.png';
import Contact from './Home/contact';

class Home extends Component{
    render(){
       
        return(
            <div className="productPage walletProducts">
                <div className="wellcom_banner">
                    <Header />
                    <div className="productTitle">
                        <div className="container">
                            <h4>Digital Asset Exchanges</h4>
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