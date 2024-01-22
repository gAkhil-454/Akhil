import React from "react";
import Dp from "../assets/dp.png"

function Intro (){
    return (
        <div className="intro">
            <div className="ileft">
                <h1>Akhil</h1>
                <p >- Highly motivated electronic engineer with a passion for designing and implementing innovative software and hardware applications.</p>
                <p >- Welcome to my engineering portfolio, where I share my journey through projects, challenges, and experiences.</p>
                
            </div>
            <div className="imiddle" >
                <img src={Dp} alt="dp" />
                

            </div>
            <div className="iright">
                
                <h2 className="sicon"><a target="_blank" href="https://www.instagram.com/ahh._.khil/" ><i className="bi bi-instagram"></i></a></h2>
                <h2  className="sicon"><a target="_blank" href="https://github.com/gAkhil-454" ><i className="bi bi-github"></i></a></h2>
                <h2 className="sicon"><a target="_blank" href="https://www.linkedin.com/in/akhil-g-54579b244/"><i className="bi bi-linkedin"></i></a></h2>
            
            </div>
        </div>
    );
}

export default Intro;