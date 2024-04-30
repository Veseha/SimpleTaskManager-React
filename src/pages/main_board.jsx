import '../components/style/App.css';
import React, {useEffect, useState} from 'react';
import Counter from "../components/counter";
import ClassCounter from "../components/ClassCounter";
import Navbar from "../components/basic/navbar";
import Column from "../components/manager/kanban/column";
import Kanban from "../components/manager/kanban/kanban";
import Task from "../components/manager/task";
import Addtask from "../components/manager/addtask";
import axios from "axios";
import Weather from "../components/API/weather";
import {useDispatch, useSelector} from "react-redux";
import {createTask, deleteTask, fetchTask, fetchTasks} from "../components/API/db_api";
import {FETCH_TASKS} from "../store/actions/types";


const MainBoard = ({tasks, setTasks, ...props}) => {

    // const [tasks, setTasks] = useState([
    //     {id: 1, title:'Test1', description:'Test in app', owner:'Seva', createDate:'2023-12-01', status: 'To Do', type:'task', priority:'common', epic:'React-app', bg:'lightblue'},
    //     {id: 2, title:'Test2', description:'Test in app', owner:'Miras', createDate:'2023-12-04', status: 'In Progress', type:'task', priority:'common', epic:'React-app', bg:'white'},
    //     {id: 3, title:'Test3', description:'Test in app', owner:'Seva', createDate:'2023-12-03', status: 'To Do', type:'task', priority:'common', epic:'React-app', bg:'white'},
    //     {id: 4, title:'Test4', description:'Test in app', owner:'Ahmed', createDate:'2023-12-02', status: 'Done', type:'task', priority:'common', epic:'React-app', bg:'white'}
    // ])
    console.log(props);
    console.log(tasks);
    console.log(setTasks);

    // const dispatch = useDispatch()
    // const tasks2 = useSelector(state => state.tasks.tasks)
    // const getTasks = () => {
    //     dispatch({FETCH_TASKS})
    // }
    // const TaskList = ({ tasks, fetchTasks }) => {
    //     useEffect(() => {
    //         fetchTasks();
    //     }, []);
    //
    //
    //     const getTasks = () => {
    //   dispatch({type:FETCH_TASKS})
    // }

    // const tasks2 = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);


    const [tasks1, setTasks1] = [tasks, setTasks];

    return (
        <div className="App">
            <div>
                <h1>Task List</h1>
                {/*<button onClick={getTasks()}>Create New Task</button>*/}

                <ul>
                    {dispatch(fetchTasks())}
                    {/*{tasks2.map(task => (*/}
                    {/*    <li key={task.task_id}>*/}
                    {/*        <strong>{task.task_name}</strong>*/}
                    {/*        <p>{task.task_desc}</p>*/}
                    {/*        /!* Other task properties *!/*/}
                    {/*        /!*<button onClick={() => handleDeleteTask(task.task_id)}>Delete</button>*!/*/}
                    {/*    </li>*/}
                    {/*))}*/}
                </ul>
            </div>
            <Kanban tasks={tasks1} settasks={setTasks1}/>

        </div>
    );
};

export default MainBoard;
