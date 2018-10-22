import React, {Component} from 'react';
import Header from './header';
import Banner from './home_page/main_banner';
import Products from './home_page/products';
import Team from './home_page/team';
import Pricing from './home_page/pricing';
import Contact from './home_page/contact';
import Footer from './footer';

class Home extends Component{
    render(){
       
        return(
            <div className="Home_page">
                <div className="wellcom_banner">
                    <Header />
                    <Banner />
                </div>
                <Products />
                <Team />
                <Pricing />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home;