import React, {Component} from 'react';
import team from '../imgs/team1.png';
import team2 from '../imgs/team2.png';
import team3 from '../imgs/team3.png';
import team4 from '../imgs/team4.png';
import team5 from '../imgs/team5.png';

class Features extends Component{
    render(){
       
        return(
            <div className="team_wrap">
                <div className="container">
                    <h3>Team</h3>
                    <ul className="clearfix">
                        <li>
                            <div className="inners">
                                <figure>
                                    <img src={team} />
                                </figure>
                                <h4>Manjunath Reddy</h4>
                                <p>Founder, CTO</p>
                            </div>
                        </li>
                        <li>
                            <div className="inners">
                                <figure>
                                    <img src={team2} />
                                </figure>
                                <h4>Clark Hogan</h4>
                                <p>Founder, CSO</p>
                            </div>
                        </li>
                        <li>
                            <div className="inners">
                                <figure>
                                    <img src={team3} />
                                </figure>
                                <h4>Anthony Emtman</h4>
                                <p>Partner</p>
                            </div>
                        </li>
                        <li>
                            <div className="inners">
                                <figure>
                                    <img src={team4} />
                                </figure>
                                <h4>Timothy Lewis</h4>
                                <p>Partner</p>
                            </div>
                        </li>
                        <li>
                            <div className="inners">
                                <figure>
                                    <img src={team5} />
                                </figure>
                                <h4>Travis Kling</h4>
                                <p>Partner</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Features;