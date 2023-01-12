import { BUY_CAKE } from "./CakeTypes"


const initialState = {
    numOfCakes : 10
}

export const cakeReducer = (state=initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case BUY_CAKE :
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
    }
}

// const reducer = (state=0, action) => {
//   // eslint-disable-next-line default-case
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//   }
// }

// export default reducer;