import React from "react";
import Propsinfunctionalcomponent from "./Propsinfuntionalcomponent";
import css from "./CSS.png";
import reactjs from "./REACTJS.png";
import html from "./HTML.png"
class Passingpropsinaclasscomponent extends React.Component{
    render(){
        return(
            <div>
                <Propsinfunctionalcomponent 
                name="Full Stack"
                preview={css}
                trainer="Satya"></Propsinfunctionalcomponent>
                <Propsinfunctionalcomponent 
                name="Full Stack"
                preview={reactjs}
                trainer="Satya"></Propsinfunctionalcomponent>
                <Propsinfunctionalcomponent 
                name="Full Stack"
                preview={html}
                trainer="Satya"></Propsinfunctionalcomponent>
            </div>
        )
    }
}
export default Passingpropsinaclasscomponent;