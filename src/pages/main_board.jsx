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
import {delay} from "q";


const MainBoard = ({tasks, setTasks, ...props}) => {


    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     delay(10);
    //     console.log('fetchAllTaskss');
    //     dispatch(fetchTasks());
    // }, [dispatch]);
    //
    // const getAllTasks = useSelector(state => state)
    //
    //
    const [tasks1, setTasks1] = [tasks, setTasks];

    return (
        <div className="App">
            <Kanban  settasks={setTasks1}/>

        </div>
    );
};

export default MainBoard;
