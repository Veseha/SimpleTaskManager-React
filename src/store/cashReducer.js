const defaultState = {
    cash: 0,
}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type){
        case "ACTION_1":
            return {...state, cash: state.cash + action.payload}
        case "ACTION_2":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}