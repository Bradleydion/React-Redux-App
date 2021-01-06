const initialState = {
    title: "Take a look at our featured Author!",
    author:"",
    isFetching: false,
    error:""
};

export const appReducer = (state = initialState, action) =>{
    switch (action.type){
        case "FETCHING_AUTHOR_START":
            return{
                ...state,
                isFetching: true
            }
        case "FETCHING_AUTHOR_SUCCESS":
            return{
                ...state,
                isFetching: false,
                error:"",
                author: action.payload
            }
        case "FETCHING_AUTHOR_ERROR":
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}