import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {userReducer} from "./Reducers/UserReducer";

const reducer=combineReducers({
    user:userReducer
});

const initialstate={};

const middleware=[thunk];

const store = createStore(
    reducer,
    initialstate,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
);

export default store;