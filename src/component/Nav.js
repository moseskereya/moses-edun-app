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
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/Movie">
                        <li>Action Movies</li>
                    </Link>
                    <li>Comedy</li>
                </ul>
           </nav>
         );
    }
}
 
export default Nav;