import { Component } from "react";
import "./NavbarStyles.css";
import { ImMenu } from "react-icons/im";
import { ImSpoonKnife } from "react-icons/im";

import React from 'react'
import { Link } from "react-router-dom";

 class Navbar extends Component {

    state={clicked :false};
    handleClic=()=>{

        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return (
            <>
         
            <nav>
          
                <a className="name"><ImSpoonKnife/>  Foof Leaf</a>
               
                <div className="">
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                       
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                      
                        {/* <li><button>Login</button></li> */}
                      
                  
                    </ul>
                    
                </div>
                <div id="mobile" onClick={this.handleClic}>
                       
                        <ImMenu className='imgg'/>
                        </div>
            </nav>
            </>
          )
    }
 
}
export default Navbar;