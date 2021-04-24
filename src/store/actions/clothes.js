export const handleAction = (action, payload, ...val) =>{
    return ({type: action, payload: payload, val: val})
}

export const handleFilter = (name, value) => {
    return ({ type: 'HANDLE_FILTER', name: name, value: value });
}