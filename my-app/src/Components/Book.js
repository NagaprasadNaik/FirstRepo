import React from "react"
import { useParams } from 'react-router-dom'


function Books(props){
    const {id} = useParams()
        return (
            <>
                <h2>Books {id}</h2>
            </>
        )
}
// class Books extends React.Component {
//     render() {

// }    

export default Books;