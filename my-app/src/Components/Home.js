// import React from 'react'; 
// class Home extends React.Component {
//     render() {
//         return <React.Fragment>
//                     <h2> Inside home</h2>
//                 </React.Fragment>
//     }
// }
// export default Home;


import React from 'react'; 
import About from './About';

export class Home extends React.Component {
    render() {
        return <React.Fragment>
                    <h2> Inside home</h2>
                    {/* <About /> */}
                </React.Fragment>
    }
}
// export default Home;