// import logo from './logo.svg';
import './App.css';
import React from 'react';
import CakeContainer from './redux/CakeContainer';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
// import Message from './Message'
// import { ClassNames } from '@emotion/react';
// import { useState } from 'react';
// import PostList from './PostList';
// import ReactForm from './ReactForm'
// import OrderComponent from './Components/OrderComponent';



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


// class App extends React.Component{
//     render(){
//         return (
//             <>
//             <Message name="Prasad" heroName="Batman">
//                 <p>This is a children props</p>
//             </Message>
//             <Message name="Vivek" heroName="Superman" />
//             <Message name="Sharanu" heroName="Spiderman" />
//             </>
//         )
//     }
// }

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             name : "Nagaprasad"
//         }
//     }

//     update = (value) =>{
//         this.setState({name : value})
//     }

//     render(){
//         return (
//             <>
//             <h3>{this.state.name}</h3>
//             <Message name={this.state.name} update={this.update} />
//             </>
//         )
//     }
// }


// const App = () =>{

//     const [name, setName] = useState("Nagaprasad");
//     const [age, setAge] = useState(0);

//     const handlerClick = () =>{
//         setName("Naik")
//         setAge(age+1)
//     }
//     return (
//         <div className='App'>
//             <h3>{name}</h3>
//             <h3>{age}</h3>
//             <button onClick={handlerClick}>Change</button>
//         </div>
//     )
// }


// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             quantity: 0,
//             price: 0
//         }
//     }

//     update = () => {
//         this.setState({ quantity: this.state.quantity+1 }, () => {
//             if (this.state.quantity == 5) {
//                 this.setState({ price: 2000 - 100 })
//             }
//         })
//     }

//     render() {
//         return (<React.Fragment>
//             <h1>{this.state.quantity}</h1>
//             <h1>{this.state.price}</h1>
//             <button onClick={this.update}>Update</button>
//         </React.Fragment>)
//     }

// }


//Error handling
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//     }
//     start = () => {
//         this.setState({
//         count: this.state.count + 1
//         });
//     }
//     render() {
//         if (this.state.count > 5) {
//             throw new Error('Count cannot be greater than 5 ')
//         }
//         return ( <React.Fragment>
//                 <h1>{this.state.count}</h1><br/>
//                <button onClick={this.start}>Update</button> 
//             </React.Fragment>);
//         }
//     }

// class App extends React.Component {
//         render() {
//             return (
//                 <>
//                 <PostList />
//                 </>
//             )
//         }
//     }

// class App extends React.Component {
//     render() {
//         return (
//             <>

//             </>
//         )
//     }
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
//           <h2>{this.state.counter} </h2>
//           <button onClick = {this.handleClick}> Increment Counter </button>
//       </React.Fragment>)
//   }


// class App extends React.Component{
//     constructor()
//     {   
//         super()
//         this.state = {
//             counter : 0
//         }

//         this.handle = this.handle.bind(this)
//     }

//     // handle(){
//     //     this.setState({counter : this.state.counter+1})
//     // }
//     handle = ()=>{
//         this.setState({counter : this.state.counter+1})
//     }
//     render(){
//         return(
//             <>
//             <h2>{this.state.counter}</h2>
//             {/* <button onClick={this.handle.bind(this)}>Click</button> */}
//             {/* <button onClick={() => this.handle()}>Click</button> */}
//             {/* <button onClick={this.handle}>Click</button> */}
//             <button onClick={this.handle}>Click</button>
//             </>
//         )
//     }
// } 


// function App () {

//   return (
//   <div>
//   <h1>Hello World !!! </h1>
//   <p>ReactJS for UI</p>
//   </div>
//   );
// }


// class App extends React.Component {
//     constructor(){
//         super()
//         this.state ={
//             username : "",
//             topic : "React"
//         }
//     }
//     handlerOnChange = (event) =>
//     {
//         this.setState({
//             username : event.target.value
//         })
//     }
//     handlerTopic = (event) =>
//     {
//         this.setState({
//             topic : event.target.value
//         })
//     }

//     handlerSubmit = (event) =>{
//         alert(`${this.state.username} ${this.state.topic} `)
//         event.preventDefault()
//     }
//     render() {
//         return (

//             <form onSubmit={this.handlerSubmit}>
//             <div>
//                 <label>Username</label>
//                 <input type="text" value={this.state.username} onChange={this.handlerOnChange}></input>
//             </div>
//             <div><label>Topic</label>
//                 <select value={this.state.topic} onChange={this.handlerTopic}>
//                     <option value="react">React</option>
//                     <option value="angular">Angular</option>
//                     <option value="vue">Vue</option>
//                 </select>
//             </div>
//             <div>
//                 <button type="submit">Submit</button>
//             </div>
//             </form>

//         );
//     }
// }

// class App extends React.Component {
//     constructor(){
//         super()
//         this.state ={
//             username : "",
//             password : ""
//         }
//     }
//     handlerOnChange = (e)=>{
//         const name = e.target.name
//         const value = e.target.value
//         this.setState({[name] : value})
//     }

//     handlerSubmit = (event) =>{
//         alert(`${this.state.username} ${this.state.password} `)
//         event.preventDefault()
//     }
//     render() {
//         return (
//             <>
//             <form onSubmit={this.handlerSubmit}>
//             <div>
//                 <label>Username</label>
//                 <input type="text" name="username" value={this.state.username} onChange={this.handlerOnChange} placeholder="username"></input>
//             </div>
//             <div><label>Password</label>
//             <input type="password" name="password" value={this.state.password} onChange={this.handlerOnChange} placeholder="password"></input>
//             </div>
//             <div>
//                 <button type="submit">Submit</button>
//             </div>
//             </form>
//             </>
//         );
//     }
// }

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { name: '', password: ''}
//     }
//     setEmpState = (e) => {
//            const value = e.target.value;
//            const field =  e.target.name;
//            this.setState({[field]:value})
//     }
//     handleLogin = (e) => {
//         e.preventDefault();
//         alert('Logged in successfully');
//     }
//     render() {
//         return(<React.Fragment>
//             <form>
//                 <div className="form-group">
//                     <label>Username:</label>
//                     <input style={{width:'40%'}} type="text" className="form-control" value={this.state.name} id="name" placeholder="Enter Name" name="name" onChange={this.setEmpState} />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input style={{width:'40%'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
//                 </div>
//                <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
//            </form>
//         </React.Fragment>)
//     }
// }
// export default Login;


// context not working
// import {UserProvider} from './Components/Context'
// import CompC from './Components/CompC';
// class App extends React.Component{
//     render(){
//         // return <ReactForm />
//         // return <OrderComponent />
//         return (
//         <UserProvider username="Nagaprasad">
//         <CompC  />
//         </UserProvider>
//         )
//     }
// }




// Routes in React
// import {Home} from './Components/Home'
// import About from './Components/About';
// import Contact from './Components/Contact';
// import BooksList from './Components/BooksList';
// import Book from './Components/Book';
// import { Routes, Route , Link} from 'react-router-dom';
// import { Error } from './Components/NoteFound';


// class App extends React.Component {
//     render() {
//         return (
//             <>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/About">AboutUs</Link>
//                     </li>
//                     <li>
//                         <Link to="/Contact">ContactUs</Link>
//                     </li>
//                     <li>
//                         <Link to="/BooksList">Books</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/Home" element={<Home />} />
//                 <Route path="/About" element={<About />} />
//                 <Route path="/Contact" element={<Contact />} />
//                 <Route path="/BooksList" >
//                     <Route index element={<BooksList />} />
//                     <Route path=":id" element={<Book />} />
//                 </Route>
//                 {/* <Route path="/BooksList" element={<BooksList />} />
//                 <Route path="/BooksList/:id" element={<Book />} /> */}
//                 <Route path="*" element={<Error />} />
//             </Routes>
//             </>
//         )
//     }
// }


// **********************   useState hook in React   **********************
// import {useState} from 'react'

// function App(){
//     const [count, setCount] = useState(0)
//     const [theme, setTheme] = useState(0)

//     const increament = () => {
//         setCount(count + 1)
//     }

//     const decreament = () => {
//         setCount(count => count -1)
//         setCount(count => count -1)
//     }

//     return (
//         <>
//             <button style={{width: '75px'} } onClick={decreament}><b>-</b></button>
//             <span style={{width: '75px'}}>{count}</span>
//             <button style={{width: '75px'}} onClick={increament}><b>+</b></button>
//         </>
//     )
//  }



//     return (
//         <>
//         <NewContext.Provider value='red'>
//         <div>
//             {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
//             <CompC />
//         </div>
//         </NewContext.Provider>
//         </>
//     )
// }



// **********************   useContext hook in React   **********************
// import CompF from './Components/CompF';
// import { createContext } from "react"

// export const NewContext = createContext()

// function App(){
//     return (
//         <>
//         <NewContext.Provider value='blue'>
//         {/* <div> */}
//             <CompF />
//         {/* </div> */}
//         </NewContext.Provider>
//         </>
//     )
// }



//**********************useReducer hook in react**********************
// import { useReducer, useState } from 'react';

// function reducer(state, action){
//     console.log(action.type)
//     switch(action.type)
//     {
//         case 'increament': return {count : state.count + 1}
//         case 'decreament': return {count : state.count - 1}
//         default : return state

//     }
// }


// function App(){
//     const [count, setCount] = useState(0)
//     const [state, dispatch] = useReducer(reducer, {count : 0})

//     const increment = () =>{
//         // setCount(count + 1)
//         dispatch({type : 'increament'})
//     }

//     const decreament = () =>{
//         // setCount(count - 1)
//         dispatch({type : 'decreament'})
//     }

//     return (<>
//             <button onClick={decreament}>-</button>
//             <span>{state.count}</span>
//             <button onClick={increment}>+</button>
//     </>
//     )
// }


// import DocumentTitleOne from './Components/DocumentTitle1'
// import DocumentTitleTwo from './Components/DocumentTitle2'
// function App(){

//     return (
//         <>
//             <DocumentTitleOne />
//             <DocumentTitleTwo />
//         </>
//     )
// }

// import { Provider } from 'react-redux'
// import store from './redux/Store';
// function App() {
//     return (
//         <Provider store={store}>
//         <div className='App'>
//                 <CakeContainer />
//         </div>
//         </Provider>
//     )
// }
import {useSelector} from 'react-redux'
 
 function App() {
  const counter = useSelector(store => store.counter)
   return (
     <div>
       <h2>Hello {counter}</h2>
     </div>
   )
 }
 

export default App;









