import logo from './logo.svg';
import './App.css';
import React from 'react';

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

function App () {
  return (
  <>
  <h1>Hello World !!! </h1>
  <img src={logo} width="120" height="120" />
  <p>ReactJS for UI</p>
  </>
  );
}

export default App;
