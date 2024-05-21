import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { CREATE_TASK, DELETE_TASK, FETCH_TASKS, UPDATE_TASK } from "../../store/actions/types";

const baseURL = 'http://localhost:8081';

interface IUser {
    id: number;
    first_name: string;
    second_name: string;
    email: string;
    create_date: Date;
    role: string;
    team_id: number;
    password: string;
}

interface ITeam {
    team_id: number;
    team_name: string;
}

interface IBoard {
    board_id: number;
    board_name: string;
    team_id: number;
}

interface ITask {
    id: number;
    title: string;
    description: string;
    owner: string;
    createDate: Date;
    status: number;
    type: string;
    priority: string;
    epic: string;
    bg: string;
    creator_user_id: number;
    executor_user_id: number;
    board_id: number;
}

export default class ApiClient {
    baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    // Users
    async getUsers(): Promise<IUser[]> {
        const response: AxiosResponse<IUser[]> = await axios.get(`${this.baseURL}/users`);
        return response.data;
    }

    async createUser(data: Partial<IUser>): Promise<IUser> {
        const response: AxiosResponse<IUser> = await axios.post(`${this.baseURL}/users`, data);
        return response.data;
    }

    async deleteUser(id: number): Promise<void> {
        const response: AxiosResponse<void> = await axios.delete(`${this.baseURL}/users/${id}`);
        return response.data;
    }

    async updateUser(id: number, data: Partial<IUser>): Promise<IUser> {
        const response: AxiosResponse<IUser> = await axios.put(`${this.baseURL}/users/${id}`, data);
        return response.data;
    }

    // Teams
    async getTeams(): Promise<ITeam[]> {
        const response: AxiosResponse<ITeam[]> = await axios.get(`${this.baseURL}/teams`);
        return response.data;
    }

    async createTeam(data: Partial<ITeam>): Promise<ITeam> {
        const response: AxiosResponse<ITeam> = await axios.post(`${this.baseURL}/teams`, data);
        return response.data;
    }

    async deleteTeam(id: number): Promise<void> {
        const response: AxiosResponse<void> = await axios.delete(`${this.baseURL}/teams/${id}`);
        return response.data;
    }

    async updateTeam(id: number, data: Partial<ITeam>): Promise<ITeam> {
        const response: AxiosResponse<ITeam> = await axios.put(`${this.baseURL}/teams/${id}`, data);
        return response.data;
    }

    // Boards
    async getBoards(): Promise<IBoard[]> {
        const response: AxiosResponse<IBoard[]> = await axios.get(`${this.baseURL}/boards`);
        return response.data;
    }

    async createBoard(data: Partial<IBoard>): Promise<IBoard> {
        const response: AxiosResponse<IBoard> = await axios.post(`${this.baseURL}/boards`, data);
        return response.data;
    }

    async deleteBoard(id: number): Promise<void> {
        const response: AxiosResponse<void> = await axios.delete(`${this.baseURL}/boards/${id}`);
        return response.data;
    }

    async updateBoard(id: number, data: Partial<IBoard>): Promise<IBoard> {
        const response: AxiosResponse<IBoard> = await axios.put(`${this.baseURL}/boards/${id}`, data);
        return response.data;
    }

    // Tasks
    async getTasks(): Promise<ITask[]> {
        const response: AxiosResponse<ITask[]> = await axios.get(`${this.baseURL}/tasks`);
        return response.data;
    }

    async deleteTask(id: number): Promise<void> {
        const response: AxiosResponse<void> = await axios.delete(`${this.baseURL}/tasks/${id}`);
        return response.data;
    }

    async updateTask(id: number, data: Partial<ITask>): Promise<ITask> {
        const response: AxiosResponse<ITask> = await axios.put(`${this.baseURL}/tasks/${id}`, data);
        return response.data;
    }
}

export const fetchTasks = () => async (dispatch: Dispatch): Promise<void> => {
    try {
        const response: AxiosResponse<ITask[]> = await axios.get(`${baseURL}/tasks`);
        console.log(response);
        console.log(response.data);
        dispatch({ type: FETCH_TASKS, payload: response.data });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};

export const fetchTask = (id: number) => async (dispatch: Dispatch): Promise<void> => {
    try {
        const response: AxiosResponse<ITask> = await axios.get(`${baseURL}/tasks/${id}`);
        dispatch({ type: FETCH_TASKS, payload: response.data });
    } catch (error) {
        console.error('Error fetching task:', error);
    }
};

export const deleteTask = (id: number) => async (dispatch: Dispatch): Promise<void> => {
    try {
        await axios.delete(`${baseURL}/tasks/${id}`);
        dispatch({ type: DELETE_TASK, payload: id });
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};

export const updateTasks = (data: Partial<ITask>) => async (dispatch: Dispatch): Promise<void> => {
    try {
        const response: AxiosResponse<ITask> = await axios.put(`${baseURL}/tasks/${data.id}`, data);
        console.log(response.data, '------')

        dispatch({ type: UPDATE_TASK, payload: data });
    } catch (error) {
        console.error('Error updating task:', error);
    }
};

export const createTask = (data: Partial<ITask>) => async (dispatch: Dispatch): Promise<void> => {
    try {
        const response: AxiosResponse<ITask> = await axios.post(`${baseURL}/tasks`, data);
        dispatch({ type: CREATE_TASK, payload: data });
    } catch (error) {
        console.error('Error creating task:', error);
    }
};
