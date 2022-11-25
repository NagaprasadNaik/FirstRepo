import React from "react";

const UpdatedComponent = (props) => {
    class NewComponent extends React.Component{
        render(){
            return <div style={{background : 'red'}}><props.orginalComp /></div>
        }
    }
    return NewComponent
}

export default UpdatedComponent;