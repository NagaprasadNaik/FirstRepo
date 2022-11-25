// import React from 'react'; 
// class About extends React.Component {
//     render() {
//         return <React.Fragment>
//                     <h2>Inside AboutUs component...</h2>
//                     <h3>Rendered as default child component</h3>
//                 </React.Fragment>
//     }
// }
// export default About;

import React from 'react'; 
import ContactUs from './Contact';
class About extends React.Component {
    render() {
        return <React.Fragment>
                    <h2>Inside AboutUs component...</h2>
                    {/* <ContactUs /> */}
                </React.Fragment>
    }
}
export default About;