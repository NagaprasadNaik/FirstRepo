import { alignProperty } from '@mui/material/styles/cssUtils';
import React from 'react'

// function message(props){
//     return (
//         <>
//             <h3>Hello {props.name} a.k.a {props.heroName} </h3>
//             <h3>{props.children}</h3>
            
//         </>
//     )
// }

class message extends React.Component{
    render(){
        return <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default message;