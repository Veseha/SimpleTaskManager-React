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

    const [tasks1, setTasks1] = [tasks, setTasks];

    return (
        <div className="App">
            <Kanban tasks={tasks1} settasks={setTasks1}/>
            <Addtask tasks={tasks1} settasks={setTasks1}/>
        </div>
    );
};

export default MainBoard;
