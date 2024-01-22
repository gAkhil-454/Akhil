import React from "react";


function Header(){
    return (
        <header >
            <div className="left">
                <a href="#">
                    <div className="icon uptext">
                        <h2>G</h2>
                    </div>
                </a>
                <div className="uptext">
                    <h3 >G V N AKHIL</h3>
                </div>
            </div>
            <div className="right ">
                <div className="uptext ">
                    <a href="#aboutme"><h3 className="hover-underline-animation">About Me</h3></a>
                
                </div>
                <div className="uptext">
                    <a href="#resume" ><h3 className="hover-underline-animation">Resume</h3></a>
                </div>
                <div className="uptext">
                    <a href="#projects" ><h3 className="hover-underline-animation">Projects</h3></a>
                </div>
                <div className="uptext cm">
                    <a href="#contactme" >
                    <h3>Contact Me</h3></a>
                </div>
        
            </div>
        </header>
    );
}

export default Header;