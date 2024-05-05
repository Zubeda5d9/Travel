//Lifecycle methods have 4 stages
   //1.Initialization
   //2.Mounting
   //3.Updating
   //4.unmounting
//Initialization
   //in this stage where the component is constructed with the states and props.this is done in the constructor method in the class component

//mounting
   //when the initialization is completed then the component is mounted on dom and rendered for the first time in the web page
      //componentwillmount():-
      //render()
      //componentDidmount():-this method is most commonly used lifecycle.it is called after component is rendered

//updating
    //updating is the stage where the component is being updated and the application is repainted when a component is re-rendered as a result to change in the state
       //shouldcomponentupdate:-This method is used when you want to update the props and states or not 
       //componentwillupdate:-it called just befor a component's update starts
       //render()
       //componentdidupdate:-this method is called after the component is updated in the dom

//unmounting
    //when a component is removed from the dom

import React from 'react'
class Lifecyclemethods extends React.Component{
    constructor(){
        super();
        this.state={
            number:0
        }
    }
    componentWillMount=()=>{
        console.log("Component Will Mount");
    }
    componentDidMount=()=>{
        console.log("Component Did Mount");
    }
    numberChange=()=>{
        this.setState({number:this.state.number+1})
    }
    shouldComponentUpdate=()=>{
        console.log("Should Component Update");
        return true;
    }
    componentWillUpdate=()=>{
        console.log("Component Will Update");
    }
    componentDidUpdate=()=>{
        console.log("Component Did Update");
    }
    render(){
        console.log("render");
        return(
            <div>
                <p>Number is: {this.state.number}</p>
                <button type='button' onClick={this.numberChange}>Change</button>
            </div>
        )
    }
}
export default Lifecyclemethods
