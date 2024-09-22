import React from "react";


function Header(){
    return (
        <header >
            <div className="left">
                <a href="#">
                    <div className="icon">
                        <h2>G</h2>
                    </div>
                </a>
                <div className="uptext">
                    <h2 >G V N AKHIL</h2>
                </div>
            </div>
            <div className="right ">
                <div className="uptext ">
                    <a href="#aboutme"><h3 >About Me</h3></a>
                
                </div>
                <div className="uptext">
                    <a href="#resume" ><h3 >Resume</h3></a>
                </div>
                <div className="uptext">
                    <a href="#projects" ><h3 >Projects</h3></a>
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