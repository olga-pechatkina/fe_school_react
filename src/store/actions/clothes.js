export const handleAction = (action, payload) =>{
    return ({type: action, payload: payload})
}