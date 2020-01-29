import {combineReducers} from "redux";
import {content} from "./content";
import {page} from "./page";

const rootReducer = combineReducers({
    content,
    page
});

export default  rootReducer;