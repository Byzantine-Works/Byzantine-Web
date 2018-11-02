import React, {Component} from 'react';
import $ from "jquery";

class Features extends Component{
    postSignup = (e) => {
    e.preventDefault();
     let data = {
        first_name : this.first_name.value,
        last_name: this.last_name.value,
        email: this.email.value,
        phone: this.phone.value,
        msg: this.msg.value,
    };
    fetch('http://localhost:5000/sendEmail/', {
    method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
  body: JSON.stringify(data)

  }).then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
    ).then(res => {
        
        if(res.data.error=='1')
        {
        
        return false;
        }
        else if(res.data.error=='0')
        {
            $('.msgs').show();
        }
    
    }));
  }
    render(){
       
        return(
            <div className="team_wrap" id="contact">
                <div className="container">
                    <div className="home_contact">
                        <h4>Have questions about our Products?</h4>
                        <div className="contact_content">

                                <form name="contact" method="post" >
                                <div>
                                    <input type="text" name="first_name" ref={(r) => this.first_name = r} id="first_name" placeholder="First Name" />
                                    <input type="text" name="last_name" ref={(r) => this.last_name = r} id="last_name" placeholder="Last Name" />
                                </div>
                                <div>
                                    <input type="email" name="email" id="email" ref={(r) => this.email = r} placeholder="Email" />
                                    <input type="text" name="phone" id="phone" ref={(r) => this.phone = r} placeholder="Phone" />
                                </div>
                                <textarea placeholder="Message" name="message" ref={(r) => this.msg = r} id='msg_text'></textarea>
                                <input type="submit" className="fr1" name="send"  onClick={this.postSignup} value="Send Message"  />
                            </form>
                            <div className="msgs" style={{'display': 'none'}}>Your Message Successfuly Send</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;