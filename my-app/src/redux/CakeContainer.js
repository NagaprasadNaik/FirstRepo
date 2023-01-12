import React from 'react'
import { buyCake } from './CakeAction'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

function CakeContainer(props) {
  const numOfCakes = useSelector((store) => store.numOfCakes)
  return (
    <div>
        console.log("test")
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  )
}

// const mapStateToProps = state => {
//     return {
//         numOfCakes : state.numOfCakes
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         buyCake : () => dispatch(buyCake())
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CakeContainer)

export default CakeContainer;