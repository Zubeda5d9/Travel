import React from "react";
import MyComponent from "./MyComponent";
class Myothercomponent extends React.Component{
    render(){
        return(
            <div>
                <h1>This is component reusable statement</h1>
                <MyComponent/>
            </div>
        )
    }
}
export default Myothercomponent;