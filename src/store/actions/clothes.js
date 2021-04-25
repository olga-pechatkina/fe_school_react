export const handleAction = (action, payload, ...val) =>{
    return ({type: action, payload: payload, val: val})
}

export const handleFilter = (store, name, value) => {
    return ({ type: 'HANDLE_FILTER', store: store, name: name, value: value });
}

export const handleFilterNum = (store, name, value) => {
    return ({ type: 'HANDLE_FILTER_NUM', store: store, name: name, value: value });
}