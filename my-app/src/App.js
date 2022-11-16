import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
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

function App () {
  return (
  <>
  <button className="btn btn-danger">submit</button>
  </>
  );
}

export default App;
