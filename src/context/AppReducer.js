export default (state, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return{
                ...state,
                user: action.payload
            }
        case "ADD_GLN":
            return{
                ...state,
                gln: action.payload
            }
        case "ADD_GTIN":
            return{
                ...state,
                gtin: action.payload
            }
        default:
            return state;
    }
}