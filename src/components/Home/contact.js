import React, {Component} from 'react';
import $ from "jquery";

class Features extends Component{
    postSignup = (e) => {
    e.preventDefault();
     let data = {
        names : this.first_name.value,
        email: this.email.value,
        phone: this.phone.value,
        msg: this.msg.value,
    };
    
    fetch('https://uberdex-admin.herokuapp.com/sendingEmail/', {
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
            $('.formss').hide();
            $('.msg').show();
        }
    
    }));
  }
    render(){
       
        return(
            <div className="team_wrap contactBottom contactforms" id="contact">
                <div className="container">
                    <h4>Have questions about our Products?</h4>
                    <form className="formss">
                        <label>Name</label>
                        <input type="text" ref={(r) => this.first_name = r} />
                        <label>Email</label>
                        <input type="text"   ref={(r) => this.email = r}/>
                        <label>Phone</label>
                        <input type="text"  ref={(r) => this.phone = r} />
                        <label>Message</label>
                        <textarea  ref={(r) => this.msg = r}></textarea>
                        <input type="submit" onClick={this.postSignup} />
                    </form>
                    <div className="msg">Successfully Send</div>
                </div>
            </div>
        )
    }
}

export default Features;