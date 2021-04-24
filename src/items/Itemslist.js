import { connect } from 'react-redux'
import React, { useState } from "react";
import ItemBlockView from "./item-blockview";
import ItemListView from "./item-listview";

const Itemslist = (props) =>  {
    const [mode, setMode] = useState(0);
        // useEffect(() => {
    //   props.filterStore();
    // }, [props.selectedFilters])

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
        userFavorites: state.user.userFavorites,
        selectedFilters: state.clothes.selectedFilters
    }
}

export default connect(mapStateToProps, null)(Itemslist);