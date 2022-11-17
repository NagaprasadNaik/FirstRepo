import logo from './logo.svg';
import './App.css';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Message from './Message.js'
import { ClassNames } from '@emotion/react';





// function App(){
//   return React.createElement("h1",{},"Hello world!!");
// }

// class App extends React.Component{
//   render(){
//     return React.createElement("h1",{},"Hello World!!!");
//   }
// }

// function App () {
//   return (
//   <div>
//   <h1>Hello World !!! </h1>
//   <p>ReactJS for UI</p>
//   </div>
//   );
// }

// function App () {
//   return (
//   <React.Fragment>
//   <h1>Hello World !!! </h1>
//   <p>ReactJS for UI</p>
//   </React.Fragment>
//   );
// }

// function App () {
//   return (
//   <>
//   <h1>Hello World !!! </h1>
//   <img src={logo} width="120" height="120"  />
//   <p>ReactJS for UI</p>
//   </>
//   );
// }



// function App() {
//   let list = [
//     { eId: 123, eName: 'Prasad', eQuali: 'Diploma' },
//     { eId: 456, eName: 'Sharanu', eQuali: 'Diploma' },
//     { eId: 789, eName: 'Vivek', eQuali: 'Diploma' },
//   ];
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>EMP ID</th>
//             <th>EMP NAME</th>
//             <th>EMP OUALIFICATION</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((emp) => {
//             return (
//               <tr key = {emp.eId}>
//                 <td>{emp.eId}</td>
//                 <td>{emp.eName}</td>
//                 <td>{emp.eQuali}</td>
//               </tr>
//             )
//           })
//           }
//         </tbody>
//       </table>
//     </>
//   );
// }


// function App () {
//   return (
//   <>
//   <h1 style={{color:'red'}}>Hello World !!! </h1>
//   </>
//   );
// }

// function App () {
//   return (
//   <>
//   <h1 style={{color:'red', backgroundColor:'black'}}>Hello World !!! </h1>
//   </>
//   );
// }


// function App () {
//   return (
//   <>
//   <button className="btn btn-danger">submit</button>
//   </>
//   );
// }

// function App () {
//   return (
//   <>
//   <Button variant="contained" color="primary">click here</Button>
//   <Typography variant="h4" gutterBottom>Welcome to React</Typography>
//   </>
//   );
// }

// function App () {
//   return (
//   <>
//   <button className="btn btn-danger">submit</button>
//   </>
//   );
// }


// class App extends React.Component {
//   constructor() {
//       super ()
//       this.state = {
//           counter: 0
//       }
//   }
//   handleClick(e){
//       this.setState({counter:this.state.counter+1})
//   }
//   render() {
//       return(<React.Fragment>
//           <h2> Seconds Elapsed: {this.state.counter} </h2>
//           <button onClick = {this.handleClick}> Increment Counter </button>
//       </React.Fragment>)
//   }
// }

// class App extends React.Component {
//   constructor() {
//       super ()
//       this.state = {
//           counter: 0
//       }
//   }
//   handleClick = (e) => {
//     this.setState({counter:this.state.counter+1})
// }

//   render() {
//       return(<React.Fragment>
//           <h2> Seconds Elapsed: {this.state.counter} </h2>
//           <button onClick = {this.handleClick}> Increment Counter </button>
//       </React.Fragment>)
//   }
// }

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {counter : 0}
//   }

//   handleClick = () =>{
//     this.setState({counter: this.state.counter+1});
//   }
//   render(){
//     return (
//       <>
//         <h2>Second Elapsed: {this.state.counter}</h2>
//         <button onClick={this.handleClick}>Increament</button>
//       </>
//     )
//   }
// }


//more on update state --> state asynchronous
// class App extends React.Component {
//   constructor() {
//           super()
//           this.state = {
//                   quantity: 0,
//                   price:0
//           }
//   }
//   update = () => {
//           this.setState({quantity:5})
//           if(this.state.quantity == 5) {
//               this.setState({price:2000-100})
//           }
// update = () => {
//         this.setState({quantity:5},()=>{
//                 if(this.state.quantity == 5) {
//                         this.setState({price:2000-100})
//                 }
//         })
// }

//   }
//   render() {
//          return(<React.Fragment>
//                   <h1>{this.state.quantity}</h1>
//                   <h1>{this.state.price}</h1>
//                   <button onClick={this.update}>Update</button>
//           </React.Fragment>)}
         
// }


// class App extends React.Component{
//         constructor(){
//             super();
//             this.state = {
//                 message : "Welcome visitor!"
//             }
//         }
//         handlerOnClick = () =>{
//                 // this.state.message = "Thanks for subscribing...! "wrong way to change the value of state
//                 this.setState({message : "Thanks for subscribing...!"});
//         }
//         render(){
//             return (
//                 <>
//                     <h3>{this.state.message}</h3>
//                     <button onClick={this.handlerOnClick}>Subscribe</button> 
//                 </>
//             )
//         }
//     }


class App extends React.Component{
    render(){
        return (
            <>
            <Message name="Prasad" heroName="Batman">
                <p>This is a children props</p>
            </Message>
            <Message name="Vivek" heroName="Superman" />
            <Message name="Sharanu" heroName="Spiderman" />
            </>
        )
    }
}
export default App;
