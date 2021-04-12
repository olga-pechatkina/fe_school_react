//check is we need in selected props.selected
const FilterItem = (props) => {

    function _onChange (index){
        props.onChange(index);
    }

    return (
        <div className = "catalog-filters-item">
        <div className = "catalog-filters-box_top">
        <span className = "catalog-filters-box_name">{props.items.name}</span>
        </div>
        {/* желательно сделать компонент Filter, внутрь ему сложить эту разметку, передать тип (checkbox/radio) и хэндлер на onChange.
        см. https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input/radio
        Сами методы для onChange можно реализовать в FilterPanel*/}
        <div className = "catalog-filters-box_content">
        {props.items.data.map((item, index) => 
            <label key={index.toString() + '--' + index} className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input"
                    selected = {props.selected && props.selected[index]} onChange={() => {_onChange(index)}}/>
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