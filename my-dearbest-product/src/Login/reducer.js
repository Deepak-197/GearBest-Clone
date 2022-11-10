export const reducer = (state, action) => {
    
    switch(action.type){
        case "LOGIN_REQUEST":
            return {...state, isLoading: true}
        case "LOGIN_SUCCESS":
            return {...state, isLoading:false, isAuth: true, token:action.payload}
       case "LOGIN_FAILURE":
           return {...state, isLoading: false, isError: true}
        case "GET_PRODUCT_REQUEST":
            return {...state, isDataLoading : true}
        case "GET_PRODUCT_SUCCESS":
            return {...state, isDataLoading : false, data: action.payload}
        case "GET_PRODUCT_FAILURE":
            return {...state, isError: true, isLoading:false}
    }
        
}