// import axios from "axios";
// import {CREATE_TASK, DELETE_TASK, FETCH_TASKS, UPDATE_TASK} from "../../store/actions/types";
//
// const baseURL = 'http://localhost:8081';
//
// export default class ApiClient {
//     constructor(baseURL) {
//         this.baseURL = baseURL;
//     }
//
//     // Users
//     async getUsers() {
//         const response = await axios.get(`${this.baseURL}/users`);
//         return response.data;
//     }
//
//     async createUser(data) {
//         const response = await axios.post(`${this.baseURL}/users`, data);
//         return response.data;
//     }
//
//     async deleteUser(id) {
//         const response = await axios.delete(`${this.baseURL}/users/${id}`);
//         return response.data;
//     }
//
//     async updateUser(id, data) {
//         const response = await axios.put(`${this.baseURL}/users/${id}`, data);
//         return response.data;
//     }
//
//     // Teams
//     async getTeams() {
//         const response = await axios.get(`${this.baseURL}/teams`);
//         return response.data;
//     }
//
//     async createTeam(data) {
//         const response = await axios.post(`${this.baseURL}/teams`, data);
//         return response.data;
//     }
//
//     async deleteTeam(id) {
//         const response = await axios.delete(`${this.baseURL}/teams/${id}`);
//         return response.data;
//     }
//
//     async updateTeam(id, data) {
//         const response = await axios.put(`${this.baseURL}/teams/${id}`, data);
//         return response.data;
//     }
//
//     // Boards
//     async getBoards() {
//         const response = await axios.get(`${this.baseURL}/boards`);
//         return response.data;
//     }
//
//     async createBoard(data) {
//         const response = await axios.post(`${this.baseURL}/boards`, data);
//         return response.data;
//     }
//
//     async deleteBoard(id) {
//         const response = await axios.delete(`${this.baseURL}/boards/${id}`);
//         return response.data;
//     }
//
//     async updateBoard(id, data) {
//         const response = await axios.put(`${this.baseURL}/boards/${id}`, data);
//         return response.data;
//     }
//
//     // Tasks
//     async getTasks() {
//         const response = await axios.get(`${this.baseURL}/tasks`);
//         return response.data;
//     }
//
//     // async createTask(data) {
//     //     const response = await axios.post(`${this.baseURL}/tasks`, data);
//     //     return response.data;
//     // }
//
//
//     async deleteTask(id) {
//         const response = await axios.delete(`${this.baseURL}/tasks/${id}`);
//         return response.data;
//     }
//
//     async updateTask(id, data) {
//         const response = await axios.put(`${this.baseURL}/tasks/${id}`, data);
//         return response.data;
//     }
// }
//
//
// export const fetchTasks = () => async (dispatch) => {
//     try {
//         const response = await axios.get(`${baseURL}/tasks`);
//         console.log(response)
//         console.log(response.data)
//         dispatch({ type: FETCH_TASKS, payload: response.data });
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//     }
// };
//
// export const fetchTask = (id) => async (dispatch) => {
//     try {
//         const response = await axios.get(`${baseURL}/tasks/${id}`);
//         dispatch({ type: FETCH_TASKS, payload: response.data });
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//     }
// };
//
// export const deleteTask = (id) => async (dispatch) => {
//     try {
//         const response = await axios.delete(`${baseURL}/tasks/${id}`);
//         dispatch({ type: DELETE_TASK, payload: id });
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//     }
// };
//
// export const updateTasks = (data) => async (dispatch) => {
//     try {
//         const response = await axios.put(`${baseURL}/tasks/${data.id}`, data);
//         dispatch({ type: UPDATE_TASK, payload: data });
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//     }
// };
//
// export const createTask = (data) => async (dispatch) => {
//     try {
//         const response = await axios.post(`${baseURL}/tasks`, data);
//         dispatch({ type: CREATE_TASK, payload: data });
//     } catch (error) {
//         console.error('Error creating task:', error);
//     }
// };
//
