import React from "react";

const FavButton = (props) =>{

    return (
        <button className = {props.classN} title = "Добавить в Избранное" onClick = {props.onClick}/>
    )
}

export default FavButton