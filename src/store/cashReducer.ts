interface State {
    cash: number;
}

interface Action {
    type: string;
    payload: number;
}

const defaultState: State = {
    cash: 0,
}

export const cashReducer = (state: State = defaultState, action: Action): State => {
    switch (action.type){
        case "ACTION_1":
            return {...state, cash: state.cash + action.payload}
        case "ACTION_2":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
