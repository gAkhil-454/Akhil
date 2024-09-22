import React from "react";

function Projectcard(props){
    return(
        <div className="ptile">
                    <div className="p1">
                        <div className="tile-front">
                            <img src={props.image} alt="rfid" />
                        <p>{props.title}</p>
                        </div>
                        <div className="tile-back">
                        <p> {props.description}</p>
                        <a href={props.link} style={{ color: '#66fcf2', textDecoration: 'none' }}> <i className="bi bi-github"></i> view</a>
                        </div>
                     </div>
        </div>
    );
}

export default Projectcard;