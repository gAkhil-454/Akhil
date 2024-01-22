import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Aboutme from "./Aboutme";
import Resume from "./Resume";
import Projects from "./Projects";
import Contactme from "./Contactme";

function App(){

    return (
        <div>
            <Header />
            <Intro />
            <Aboutme />
            <Resume />
            <Projects />
            <Contactme />
        </div>
    );
}

export default App;