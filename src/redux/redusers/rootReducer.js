import {combineReducers} from "redux";
import {content} from "./content";
import {page} from "./page";
import {table} from "./table"

const rootReducer = combineReducers({
    content,
    page,
    table
});

export default  rootReducer;