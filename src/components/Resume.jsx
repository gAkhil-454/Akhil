import React from "react";
import Cv from "../assets/Akhil_22-9.pdf"

function Resume(){
    return(
        <div className="resume" id="resume">
    
        <h1>Resume</h1>
        <iframe className = "cv" src= {Cv} frameborder="0"> </iframe>
        
    </div>
    );
}
export default Resume;