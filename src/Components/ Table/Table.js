import React,{Component} from "react";
import './Table.css';
import UpButtons from './UpButtons/UpButtons'
import TableContent from "./TablesContent/TableContent";
import UpButton from "./UpButtons/UpButton/UpButton";


class Table extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {


        return(
            <div id = 'Table' key = '1'>
                <UpButtons />
                <TableContent />
            </div>

        )
    }
}

export default Table