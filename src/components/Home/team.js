import React, {Component} from 'react';
import team from '../imgs/team1.png';
import team2 from '../imgs/team2.png';
import team3 from '../imgs/team3.png';
import team4 from '../imgs/team4.png';
import team5 from '../imgs/team5.png';

class Features extends Component{
    render(){
       
        return(
            <div className="team_wrap" id="Team">
                <div className="container">
                    <h3>Team</h3>
                    <ul className="clearfix">
                        <li>
                            <div className="inners">
                                <figure>
                                    <a href="https://www.linkedin.com/in/manjunathpreddy/"><img src={team} /></a>
                                </figure>
                                <h4>Manjunath Reddy</h4>
                                <p>Founder, CTO</p>
                            </div>
                        </li>
                        <li>
                            <div className="inners">
                                <figure>
                                    <a href="https://www.linkedin.com/in/clarkhogan/"><img src={team2} /></a>
                                </figure>
                                <h4>Clark Hogan</h4>
                                <p>Founder, CSO</p>
                            </div>
                        </li>
                        <li>
                            <div className="inners">
                                <figure>
                                    <a href="https://www.linkedin.com/in/anthonyemtman/"><img src={team3} /></a>
                                </figure>
                                <h4>Anthony Emtman</h4>
                                <p>Partner</p>
                            </div>
                        </li>
                        <li>
                            <div className="inners">
                                <figure>
                                    <a href="https://www.linkedin.com/in/timothytlewis/"><img src={team4} /></a>
                                </figure>
                                <h4>Timothy Lewis</h4>
                                <p>Partner</p>
                            </div>
                        </li>
                        <li>
                            <div className="inners">
                                <figure>
                                    <a href="https://www.linkedin.com/in/travis-kling-ikigai/"><img src={team5} /></a>
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