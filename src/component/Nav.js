import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav>
                <div className="title">Movie App</div>
                <ul>
                    <Link className="links" to="/">
                        <li>Home</li>
                    </Link>
                    <Link className="links" to="/Movie">
                        <li>ActionMovies</li>
                    </Link>
                </ul>
           </nav>
         );
    }
}
 
export default Nav;