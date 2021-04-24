//check is we need in selected props.selected
const FilterItem = (props) => {

    return (
        <div className = "catalog-filters-item">
            <div className = "catalog-filters-box_top">
                <span className = "catalog-filters-box_name">{props.items.name}</span>
            </div>
            <div className = "catalog-filters-box_content">
            {props.items.data.map((item, index) => 
                <label key={index.toString() + '--' + index} className ="catalog-filters_check">
                    <span className = "catalog-filters_check--left">
                        <span className = "catalog-filters_check--block">
                            <input 
                            type = "checkbox" 
                            className = "catalog-filters_check--input"
                            selected = {props.selected.includes(item)} 
                            onChange={() => {props.onChange(item)}}
                            />
                            <span className = "catalog-filters_check--label">{item}</span>
                        </span>
                    </span>
                </label>
            )}
            </div>
        </div>
    )
}

export default FilterItem;