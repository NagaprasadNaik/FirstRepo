import React, {useContext} from "react";
import { NewContext } from "../App";
// import { NewContext } from "../App"; To import something from outside of the folder...

function CompF(){
    const Context = useContext(NewContext)
    return (
        <>
        <h2>this is a context value -- {Context}</h2>
        </>
    )
}

// class CompF extends React.Component{
//     render(){
//         return(
//             <NewContext.Consumer>
//                 {  
//                     (value) => {
//                         return <h2 style={{color: value}}>This is a context value -- {value}</h2>
//                     }
//                 }
//             </NewContext.Consumer>
//         ) 
//     }
// }


export default CompF;