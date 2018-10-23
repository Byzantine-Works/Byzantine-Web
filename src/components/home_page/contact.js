import React, {Component} from 'react';

class Features extends Component{
    render(){
       
        return(
            <div className="team_wrap" id="contact">
                <div className="container">
                    <div className="home_contact">
                        <h4>Have questions about our Products?</h4>
                        <div className="contact_content">
                                <form id="contact-form" method="post" >
                                    <div>
                                        <input type="text" name="first_name" id="first_name" placeholder="First Name" />
                                        <input type="text" name="last_name" id="last_name" placeholder="Last Name" />
                                    </div>
                                    <div>
                                        <input type="email" name="email" id="email" placeholder="Email" />
                                        <input type="text" name="phone" id="phone" placeholder="Phone" />
                                    </div>
                                    <textarea placeholder="Message" name="message" id='inputMessage'></textarea>
                                    <input type="submit" id="fr1" />
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;