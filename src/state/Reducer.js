const Reducer = (state, action) => {
    switch (action.type){
        case "setBearerToken":
            return {
                ...state,bearerToken: action.payload
            }
        case "setIsAuthenticated":
            return {
                ...state,isAuthenticated: action.payload
            }
    }
}
export default Reducer