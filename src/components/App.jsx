import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";
import Contactme from "./Contactme";


function App(){

    return (
        <div>
            <Header />
            <Intro />
            <AboutMe />
            <Resume />
            <Projects />
            <Contactme />
        </div>
    );
}

export default App;
