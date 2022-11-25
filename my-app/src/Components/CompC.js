// import CompE from "./CompE";

// import React, { useContext } from "react";


// import { ThemeContext } from "../App";
// function CompC() {
//     const appColor = useContext(ThemeContext)
//     return (
//         <div>
//             <h2 style={{ color: appColor }}>Child component</h2>
//         </div>
//     )
// }
// import React, { Component } from 'react'

// class CompC extends Component {
//         themeStyles(dark){
//         return ({ 
//             background : dark? 'black' : 'red',
//             color : dark? 'white' : 'black',
//             padding : '2rem',
//             margin : '2rem'
//         })
// }
//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {
//                     ( darkTheme ) => {
//                         return <div><h2 style={this.themeStyles(darkTheme)}>Child component</h2></div>
                        
//                     }
//                 }
//             </ThemeContext.Consumer>
//         )
//     }
// }

import React, { Component } from 'react' 
import CompE from './CompE';


class CompC extends Component {

    render() {
        return (
            <>
            <CompE/>
            </>
        )
    }
}

export default CompC;