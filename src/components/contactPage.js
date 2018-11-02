import React, {Component} from 'react';
import Header from './header';
import Contact from './Home/contact';
import Footer from './footer';

class Home extends Component{
    render(){
       
        return(
            <div className="Home_page contact_page">
                <div className="wellcom_banner">
                    <Header />
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default Home;