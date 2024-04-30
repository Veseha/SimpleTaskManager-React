import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {cashReducer} from "./cashReducer";
import taskReducer from "./taskReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
   cash: cashReducer,
   tasks: taskReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
// export const store = createStore(rootReducer, composeWithDevTools(), applyMiddleware(thunk))

