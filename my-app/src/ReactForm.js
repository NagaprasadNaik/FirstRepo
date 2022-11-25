// import React from 'react'
// import Button from 'react-bootstrap/Button'
// import Alert from 'react-bootstrap/Alert'
// import Form from 'react-bootstrap/Form'
// import Jumbotron from 'react-bootstrap/Jumbotron'

import { render } from "@testing-library/react";
import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

 
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// // import Jumbotron from 'react-bootstrap/Jumbotron';
// class ReactForm extends React.Component {
//     render(){
//     return (
        
//     <div className='App'>
//         <div>
//         <h2 style={{padding : '10px'}}>Login</h2>
//         </div>
//         <Form style={{padding: '10px'}}>
//             <Form.Group>
//                 <Form.Control type='text' style={{width: '30%'}} placeholder="Enter username" />
//             </Form.Group><br/>
//             <Form.Group>
//                 <Form.Control type='password' style={{width:'30%'}} placeholder="Enter password" />
//             </Form.Group><br/>
//             <Form.Group>
//                 <Form.Check type='checkbox' label="Remember me" />
//             </Form.Group><br/><br/>
//             <Button type="submit" variant='primary' size="sm">Login</Button>

//         </Form>
//     </div>
//      )
// }   
// }

class ReactForm extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            message : '',
            textStyle : ''

        }
    }

    handlerOnChange = (e) =>{
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name] : value,
            message : ''
        })
        
    }

    handlerSubmit = (e) =>
    {
        e.preventDefault()

        var validation = (email)=>{
            var  regEx = /^([\w.%+-]+)@([\w.-]+\.)+([\w]{2,})$/i;
            return regEx.test(email);

        }

        if (this.state.email === '' || this.state.password === ''){
            this.state({message: "All fields are required!", textStyle: "danger"})
        }
        else{
            if (validation(this.state.email)){
                this.setState({message:"Looks good!", textStyle:"success"})
            }
            else{
                this.setState({message:"Please enter a valid email", textStyle:"danger"})
            }
        }
    }

render(){
    return(
        <>
        <form className="App" onSubmit={this.handlerSubmit}>
            <h3>Login</h3><br/>
            <div className="form-group">
                <label>Email:</label><br/>
                <input type="text" name="email" onChange={this.handlerOnChange}></input>
            </div><br/>
            <div className="form-group">
                <label >Password:</label><br/>
                <input type="password" name="password" onChange={this.handlerOnChange}></input>
            </div><br/><br/>
            {this.state.message !== "" && <div className={` text-${this.state.textStyle}`}>{this.state.message}</div>}
            <button type="submit" className="btn btn-primary" >Login</button>
        </form>
        </>
    )
}
}

export default ReactForm;



