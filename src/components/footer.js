import React, {Component} from 'react';
import logo from './logo.png';

class Footer extends Component{
    render(){
       
        return(
            <div className="footer">
                <div className="container clearfix">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ul>
                        <li><a href="/">Legal</a></li>
                        <li><a href="/">Resources</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Medium</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                    <p>© Byzantine Labs Inc. 2018</p>
                </div>
            </div>
        )
    }
}

export default Footer;