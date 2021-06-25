import React, { Component } from 'react';
import Loader from "./images/spinner.gif"
class Spinner extends Component {
    state = {  }
    render() { 
        return (
            <div className="loader">
                <img src={Loader} alt=""/>
            </div>
         );
    }
}
 
export default Spinner;