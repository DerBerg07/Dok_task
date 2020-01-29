import React, {Component} from "react";
import './../UpButtons.css'





function UpButton (props){

const onclickHandle =() => props.changeActivity(props.number);
const button = props;



    return(
            <div className={button.className} onClick={onclickHandle} >
                <p>{button.name}</p>
            </div>
        )

}


export default UpButton