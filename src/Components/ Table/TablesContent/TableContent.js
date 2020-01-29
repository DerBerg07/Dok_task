import React, {Component} from "react";
import {contentFetchData} from '../../../redux/actions/contentData'
import {connect} from "react-redux";
import TableElement from "./TableElement/TableElement";
import Url from "../../../url/url";
import {currentPageChange, CarValue} from "../../../redux/actions/currentPageData";
import './TableContent.css'

class TableContent extends Component{
        constructor(props) {
            super(props);
            this.state ={
            }
        }


    componentDidUpdate(nextPros) {
        if(nextPros.page.page !== this.props.page.page) {
            this.props.fetchData(Url[this.props.page.page])
        }



        let width = 0;
        this.props.data.content.map(cell =>{
            if(Object.values(cell)[0].length > width){
                width = Object.values(cell)[0].length;
            }
        });
        if(document.getElementById('TableContent')){
            document.getElementById('TableContent').style =
                'grid-template-columns: repeat(auto-fit, minmax('+width * 10+'px, 1fr));'
        }

    }

    syleChanger = () =>{

    }

    changeContent =(value) =>{
            let newPage =  this.props.page.page + 1;
            this.props.changer(newPage);
    };

    render() {
        const content = this.props.data.content;
        const page = this.props.page.page;
        const width = this.state.styleWidth;

        return(
            content[0] ?

            <div id = "TableContent"  >
                {content.map(cell =>{
                    return <TableElement name = {Object.values(cell)[0]} changeContent = {this.changeContent} key = {Object.values(cell)[1]}/>
                })}

            </div>
                :
                page !== null ?
                <div>
                    no Data
                </div>
                :
                <div />
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.content,
        err: state.err,
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(contentFetchData(url)),
        changer: page => dispatch(currentPageChange(page)),
        addValue: value => dispatch(CarValue(value))
    };
};


export default  connect(mapStateToProps, mapDispatchToProps)(TableContent);