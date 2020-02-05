import React, {Component} from "react";
import {contentFetchData} from '../../../redux/actions/contentData'
import {connect} from "react-redux";
import TableElement from "./TableElement/TableElement";
import {urls} from "../../../url/url";
import {currentPageChange, CarValue} from "../../../redux/actions/currentPageData";
import './TableContent.css'
import {page} from "../../../redux/redusers/page";

class TableContent extends Component{
        constructor(props) {
            super(props);
        }


    componentDidUpdate(nextPros) {
////////////Check fif new page opened//////////////////////////
        if(nextPros.page !== this.props.page) {
            const mark = this.props.currentCarData[0] ? this.props.currentCarData[0].toLocaleLowerCase() : null,
                  model = this.props.currentCarData[1] ? this.props.currentCarData[1].toLocaleLowerCase(): null,
                  modification = this.props.currentCarData[2] ? this.props.currentCarData[2].toLocaleLowerCase(): null;
            switch (this.props.page) {
                case 0:
                    this.props.fetchData(urls["marks"]);
                    break;
                case 1:
                    this.props.fetchData(urls["models"][mark]);
                    break;
                case 2:
                    this.props.fetchData(urls["modification"][mark][model]);
                    break;
                case 3:
                    alert("Ваш автомобить: " +mark+ " " +model+ " " +modification)
            }

        }

////////////////////check the longest text of element//////////////

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


    changeContent =(value) =>{
        this.props.currentCarData.push(value);
        this.props.addValue( this.props.currentCarData);
        let newPage =  this.props.page + 1;
        this.props.changer(newPage);
    };

//////////////RENDER/////////////////

    render() {
        const content = this.props.data.content;
        const status = this.props.status;
        return(
            status ?
            content[0] ?

            <div id = "TableContent"  >
                {content.map(cell =>{
                    return <TableElement name = {Object.values(cell)[0]} changeContent = {this.changeContent} key = {Object.values(cell)[1]}/>
                })}

            </div>
                :
                <div>
                    no Data
                </div>
                :
                <div />

        )
    }
}



//////////////STATE///////////////////////

const mapStateToProps = state => {
    return {
        data: state.content,
        err: state.err,
        page: state.page.page,
        currentCarData: state.page.currentCarData,
        status: state.table.status
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