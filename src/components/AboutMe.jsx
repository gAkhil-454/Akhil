import React from "react";

function AboutMe(){
    return (
        <div className="aboutme" id="aboutme">
        
            <h1>About Me</h1>
            <p>As an electronics engineer with a focus on innovation, I possess a strong foundation in embedded systems, 
            IoT, and microcontrollers like the Raspberry Pi Pico, Arduino, and ESP32.
            My experience spans firmware development using tools like ARM GCC,
            Visual Studio Build Tools, and the ESP-IDF environment.</p>

            <p> Furthermore, I am skilled in web development, utilizing HTML, CSS and JavaScript, including frontend framework React.js.
            Also have hands-on experience in Node.js for developing the server side scripting using Express.js and MongoDB to interact with database.</p>

            <p> Lets <a href="#contactme" className="letsconnect"> connect </a> 
            and work together to make a positive impact!
            </p>
    
    </div>
    );
}

export default AboutMe;