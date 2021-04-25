import React, { useState } from "react";

const FilterItemFromTo = (props) => {
    const from = React.useRef();
    const to = React.useRef();

    const [from_value, setFrom] = useState(props.value[0]);
    const [to_value, setTo] = useState(props.value[1]);

    function changed(){
        let obj = [];
        obj[0] = +from.current.value;
        obj[1] = +to.current.value;
        if (obj[0] && obj[1]){
            return props.objChanged(obj)
        }
    } 

    return (
        <div className = "catalog-filters-item">
            <div className = "catalog-filters-box_top">
                <span className = "catalog-filters-box_name">{props.name}</span>
            </div>
            <div className = "catalog-filters-box_content" style={{display:"flex"}}>
                <div className = "flex-column" style={{marginLeft: "20px"}}>
                   <span>от</span>
                   <input type="text" style={{ width: "50px"}} 
                        onBlur={changed} 
                        ref={from} 
                        value={from_value}>
                   </input>
                </div>
                <div className = "flex-column" style={{marginLeft: "10px"}}>
                    <span>до</span>
                    <input type="text" 
                        style={{ width: "50px"}} 
                        onBlur={changed}
                        ref={to} 
                        value={to_value}>
                   </input>
                </div>
            </div>
        </div>
    )
}

export default FilterItemFromTo;