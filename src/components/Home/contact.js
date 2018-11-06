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
            <div className="team_wrap contactBottom" id="contact">
                <div className="container">
                     <iframe id="JotFormIFrame-83054564185460" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.me/83054564185460" frameborder="0" scrolling="no" > </iframe> 
                    
                </div>
            </div>
        )
    }
}

export default Features;