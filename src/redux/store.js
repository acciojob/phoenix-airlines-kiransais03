import {createStore} from "redux";
import journeyReducer from "./reducer/journeyReducer";

const store = createStore(journeyReducer);

export default store;
