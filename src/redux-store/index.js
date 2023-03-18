import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import thunk from "redux-thunk";
import vansDataReducer from "./reducers/vansReducer";

const rootReducer = combineReducers({
  vansData: vansDataReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
