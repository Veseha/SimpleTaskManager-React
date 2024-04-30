import {CREATE_TASK, DELETE_TASK, FETCH_TASK, FETCH_TASKS, UPDATE_TASK} from "./actions/types";


// const initialState = {
//     tasks: 1,
// };

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return action.payload;
        case FETCH_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case CREATE_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case DELETE_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case UPDATE_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        default:
            return state;
    }
};

export default taskReducer;