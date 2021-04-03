const checkout = (state = [], action) => {
    switch(action.type) {
        case "CHECK_OUT":
            return [
                ...state,
                action.payload
            ]
        default: 
         return state;
    }
}

export default checkout;
