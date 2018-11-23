import React, {Component} from 'react';
import Header from './header';
import Banner from './Home/mainBanner';
import Products from './Home/products';
import Team from './Home/team';
import Pricing from './Home/pricing';
import Contact from './Home/contact';
import Footer from './footer';

class Home extends Component{
    render(){
       
        return(
            <div className="Home_page innweProd">
                <div className="wellcom_banner innerWellcom">
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