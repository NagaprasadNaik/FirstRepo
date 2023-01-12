import counterReducer from "./counter";
import loggedReducer from "./logger";
import { combineReducers } from "redux";
const reducer = combineReducers({
    counter : counterReducer,
    logged : loggedReducer
})

export default reducer;