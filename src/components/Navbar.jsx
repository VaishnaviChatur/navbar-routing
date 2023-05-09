import { Component } from "react";
import "./NavbarStyles.css";
import { ImMenu } from "react-icons/im";
import { ImSpoonKnife } from "react-icons/im";

import React from 'react'
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">Contact</a></li> 
                        <li><button>Login</button></li>
                      
                  
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