import React from "react";
import Cv from "../assets/Hybrid_Jan.pdf"

function Resume(){
    return(
        <div className="resume" id="resume">
    
        <h1>Resume</h1>
        <iframe className = "cv" src= {Cv} frameborder="0"> </iframe>
        
    </div>
    );
}
export default Resume;