import React from "react";
import {Link} from 'react-router-dom'

class BooksList extends React.Component{
    render(){
        return (
            <>
                <h2>This is BooksList</h2>
                <Link to="/BooksList/1">Book 1</Link>
                <Link to="/BooksList/2">Book 2</Link>
            </>
        )
    }
}

export default BooksList;