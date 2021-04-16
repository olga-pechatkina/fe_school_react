export const handleAction = (action, payload, ...val) =>{
    return ({type: action, payload: payload, val: val})
}