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

// class Message extends React.Component{
//     render(){
//         return <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }

// class Message extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Mark"
//         }
//     }

//     handleClick = () =>{
//         this.props.update("Diana")
//     }

//     render() {
//         return (
//             <>
//                 <h3>{this.state.name}</h3>
//                 <button onClick={this.handleClick}>Submit</button>
//             </>
//         )
//     }
// }



class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: false,
        errorInfo: null,
      };
    }
  
    componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info,
      });
    }
  
    render() {
      if(this.state.error) {
        return (
          <React.Fragment>
            <h5>Sorry. Counter value is greater than 5</h5>
            <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {/* {this.state.errorInfo} */}
          </details>
          </React.Fragment>
        );
      }
      return this.props.children;
    }
  }


export default Message;