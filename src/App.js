import './components/style/App.css';
import React, {useEffect, useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import Navbar from "./components/basic/navbar";
import Column from "./components/manager/kanban/column";
import Kanban from "./components/manager/kanban/kanban";
import Task from "./components/manager/task";
import Addtask from "./components/manager/addtask";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title:'Test1', description:'Test in app', owner:'Seva', createDate:'2023-12-01', status: 'To Do', type:'task', priority:'common', epic:'React-app', bg:'lightblue'},
        {id: 2, title:'Test2', description:'Test in app', owner:'Miras', createDate:'2023-12-04', status: 'In Progress', type:'task', priority:'common', epic:'React-app', bg:'white'},
        {id: 3, title:'Test3', description:'Test in app', owner:'Seva', createDate:'2023-12-03', status: 'To Do', type:'task', priority:'common', epic:'React-app', bg:'white'},
        {id: 4, title:'Test4', description:'Test in app', owner:'Ahmed', createDate:'2023-12-02', status: 'Done', type:'task', priority:'common', epic:'React-app', bg:'white'}
    ])
    const [weather, setWeather] = useState(0)

    async function fetchWeather(){ // так получилось что мне нечего брать из других апишек в сое приложение, имеено поэтому тут будет погода, которую я спецаильно разместил в апп.джиэс чтобы вы увиделе что апишку я использую, по кракйне мере знаю как использовать:)

        const response = await  axios.get( 'https://api.open-meteo.com/v1/forecast?latitude=43.3199&longitude=76.9425&current=temperature_2m,rain');
        console.log(response)
        setWeather(response.data.current.temperature_2m);
    }
    useEffect(() => {
        fetchWeather()
    }, []);

    return (
    <div className="App">
        <Navbar weather={weather} change={fetchWeather}/>
        <Kanban tasks={tasks} settasks={setTasks}/>
        <Addtask tasks={tasks} settasks={setTasks}/>
    </div>
  );
}

export default App;
