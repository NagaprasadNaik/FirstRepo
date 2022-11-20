import React from "react";
import './App.css'
import axios from 'axios';
class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : [],
            errorMsg : null
        }
    }

    componentDidMount(){
        axios.get('test.json')
        .then(response =>{
            console.log(response)
            this.setState({
                posts : response.data
            })
        })
        .catch(error =>{
            console.log(error)
            this.setState({
                errorMsg : "Error retrieving data"
            })
        })
    }

    render(){
        const {posts, errorMsg} = this.state
        return(
            <div className="App">
                List of posts
                {
                   posts.length ?
                   posts.map((post) => <div key={post.empId}>{post.empId} {post.name} {post.designation}</div>) : null
                }
                {
                    errorMsg ?
                    <div>{errorMsg}</div> : null
                }

            </div>
        )
    }
}
export default PostList;
