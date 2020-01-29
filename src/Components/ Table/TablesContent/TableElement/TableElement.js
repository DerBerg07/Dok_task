import React from "react";


function TableElement(props) {

   const handleOnclick =() => props.changeContent(props.name);

    return(
        <div onClick={handleOnclick}>
           <p>{props.name}</p>
        </div>
    )

}

export default TableElement