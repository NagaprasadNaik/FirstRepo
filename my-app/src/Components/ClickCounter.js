import React from "react";
import UpdatedComponent from "./WithCounter";
class ClickCounter extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    handlerOnClick = () =>{
        this.setState({ 
            count : this.state.count + 1
        })
    }

    // handlerOnClick = () =>{
    //     this.setState(previous => {
    //        return {count : previous.count + 1}
    //     })
    // }

    render(){
        const {count} = this.state
        return <button onClick={this.handlerOnClick}> Clicked {count} times</button>
    }
}



export default UpdatedComponent(ClickCounter);
// export default ClickCounter;