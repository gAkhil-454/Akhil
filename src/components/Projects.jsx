import React from "react";
import Projectcard from "./Projectcard";
import Pinfo from "../Pinfo";

function mapProjects(info){
    return (
        <Projectcard 
        key = {info.key}
        image = {info.imgl}
        title = {info.title}
        description = {info.description}
        link = {info.link} />
    );
    
}
function Projects(){
   
    return(
        <div className="projects" id="projects">
        
            <h1>Projects</h1>
            <div className="tiles">

                {Pinfo.map(mapProjects)}

                
            </div>
    </div>
    );
}

export default Projects;