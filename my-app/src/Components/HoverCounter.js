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
    
    render(){
        const {count} = this.state
        return <h2 onMouseOver={this.handlerOnClick}> Clicked {count} times</h2>
    }
}



export default UpdatedComponent(ClickCounter);
// export default ClickCounter;