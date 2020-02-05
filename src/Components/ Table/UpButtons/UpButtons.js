import React, {Component} from "react";
import UpButton from './UpButton/UpButton'
import {currentPageChange} from "../../../redux/actions/currentPageData";
import {connect} from "react-redux";
import {TableStatus} from "../../../redux/actions/tableStatus";

class UpButtons  extends Component{
        constructor(props) {
            super(props);
            this.state = {
                buttons:[{
                name:'Выберите Марку',
                },{
                    name:'Выберите модель',
                },{
                    name:'Уточните год',
                }],
            }
        }

        ifActive = (index) =>{

            if(index <= this.props.activeButton.page){
                return 'UpButton active'
            }
                return 'UpButton';
        };


        changeActivity =(value) =>{
            if(this.props.activeButton.page >= value){
                this.props.changer(value);
                if(this.props.activeButton.page === value || this.props.activeButton.page === null){
                        this.props.changeStatus()
                    }

            }
        };

        render() {
         const buttons = this.state.buttons;
            return(
                <div id = 'UpButtons' >
                    {buttons.map((button, index) =>{
                        return <UpButton name = {button.name}  className = {this.ifActive(index)} key={index} changeActivity = {this.changeActivity} number = {index}/>
                    })}
                </div>
            )
        }
}


const mapStateToProps = state => {
    return{
        activeButton: state.page,
        status: state.table.status
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        changer: page => dispatch(currentPageChange(page)),
        changeStatus: () => dispatch(TableStatus())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpButtons)