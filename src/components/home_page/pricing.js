import React, {Component} from 'react';

class Home_banner extends Component{
    render(){
        return(
            <div className="Product_wrap" id="pricing">
                <div className="container">
                    <h3>Pricing</h3>
                    <div className="clearfix Price_wrap">
                        <a href="/">I’m launching a new product</a>
                        <p>From idea to launch, we enable companies to get to market quickly by opening
wallets, processing payments, and building exchanges for as little as $0 per
month. Contact our team to learn more.</p>
                    </div>
                    
                    <div className="clearfix Price_wrap">
                        <a href="/">I’m scaling my business</a>
                        <p>We have full stack digital asset blockchain solutions for you. Please reach out
to us and we will put together a pricing plan that suits your needs.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home_banner;