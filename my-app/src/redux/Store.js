import { createStore } from 'redux'
import { cakeReducer } from './CakeReducer'

const store = createStore(cakeReducer)
// const unsubscribe = store.subscribe(() => {console.log(store.getState())})

export default store
