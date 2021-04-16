import { connect } from 'react-redux'
import React, { useState } from "react";
import ItemBlockView from "./item-blockview";
import ItemListView from "./item-listview";

const Itemslist = (props) =>  {
    const [mode, setMode] = useState(0);
//TODO: read comments
    /** <div className="item-container"...> и <div className = "item-container-list"> должны быть в данном случае отдельными компонентами,
     *   тк. их тут может быть > 1. У этих компонентов должен быть проп key с уникальным значением.
     *  Можно использовать как один из компонентов этого значения index
     **/
return(
    <div className = "all-items">
        <div className = "filter-type">
            <button className ="filter-table" onClick={() => setMode(1)}/>
            <button className ="filter-list" onClick={() => setMode(0)}/>           
        </div>
        {(mode===0) && (<div className = "all-items-block">
            {props.items.map((item, index) => (<ItemBlockView item={item}
                               sellerName={props.sellerName.find(el => el.id === item.sellerId).name}
                               key={index + '--' + index}
                               inFav={props.userFavorites.indexOf(item.id) !== -1}
            />))}
        </div>)}
        {(mode===1) && (<div className = "all-items-list">
            {/* аналогично с ItemContainer, можно название для компонента поумнее придумать. Я тут только примеры привожу :)*/}
            {props.items.map((item, index) => (<ItemListView item={item}
                               sellerName={props.sellerName.find(el => el.id === item.sellerId).name}
                               key={index + '--' + index}
                               inFav={props.userFavorites.indexOf(item.id) !== -1}
            />))}           
        </div>)}
    </div>
);
}

const mapStateToProps = state => {
    return {
        userFavorites: state.user.userFavorites
    }
}

export default connect(mapStateToProps, null)(Itemslist);