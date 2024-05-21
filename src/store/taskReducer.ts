import {CREATE_TASK, DELETE_TASK, FETCH_TASK, FETCH_TASKS, UPDATE_TASK} from "./actions/types";

interface Action {
    type: string;
    payload: any;
}


const taskReducer = (state: ITask[] = [], action: Action): ITask[] => {
    switch (action.type) {
        case FETCH_TASKS:
            console.log('FETCH_TASK')
            console.log(action.payload);
            console.log(action);
            console.log(state);
            console.log(state.tasks);
            return action.payload;
        case 'GET_ALL':
            console.log('GET_ALL_TASK')
            return { ...state.tasks }
        case FETCH_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case CREATE_TASK:
            return [...state, action.payload] ;
        case DELETE_TASK:
            const tasks_del_upd = state.filter(task => task.id !== action.payload);
            return [...tasks_del_upd];
        case UPDATE_TASK:
            console.log('UPDATE_TASK')
            const tasks_fil = state.filter(task => task.id !== action.payload.id);
            return [...tasks_fil, action.payload];
        default:
            return state;
    }
};

export default taskReducer;
