import './components/style/App.css';
import React, {useEffect, useState} from 'react';
import Navbar       from "./components/basic/navbar";
import axios        from "axios";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About        from "./pages/about";
import MainBoard    from "./pages/main_board";
import ViewTask     from "./components/manager/tasks/view_task";
import TaskList     from "./components/manager/tasks_list/task_list";
import Addtask      from "./components/manager/addtask";
import ApiClient    from "./components/API/db_api";
import {useDispatch, useSelector} from "react-redux";
import {cashReducer} from "./store/cashReducer";

// const apiClient = new ApiClient('localhost:3001');



function App() {
    // const dispatch = useDispatch()
    // const cash = useSelector(state => state.cash.cash)

    // const addCash = (cash) => {
    //   dispatch({type:"ACTION_1", payload: cash})
    // }

    // const [tasks, setTasks] = useState([]);
    const [weather, setWeather] = useState('')
    async function fetchWeather(){ // так получилось что мне нечего брать из других апишек в сое приложение, имеено поэтому тут будет погода, которую я спецаильно разместил в апп.джиэс чтобы вы увиделе что апишку я использую, по кракйне мере знаю как использовать:)
        try{
            const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=43.3199&longitude=76.9425&current=temperature_2m,rain');
            console.log(response)
            console.log(response.data.current.temperature_2m.toString() + response.data.current_units.temperature_2m)
            setWeather(response.data.current.temperature_2m.toString() + response.data.current_units.temperature_2m);
        }
        catch (e){
            console.log(e)
        }

    }
    useEffect(() => {
        fetchWeather();

    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            fetchWeather();
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    // useEffect(() => {
    //     const fetchTasks = async () => {
    //         const data = await apiClient.getTasks();
    //         setTasks(data);
    //     };
    //
    //     fetchTasks();
    // }, []);


    const [tasks, setTasks] = useState([
        {id: 1, title:'Test1', description:'Test in app', owner:'Seva', createDate:'2023-12-01', status: 'To Do', type:'task', priority:'common', epic:'React-app', bg:'lightblue'},
        {id: 2, title:'Test2', description:'Test in app', owner:'Miras', createDate:'2023-12-04', status: 'In Progress', type:'task', priority:'common', epic:'React-app', bg:'white'},
        {id: 3, title:'Test3', description:'Test in app', owner:'Seva', createDate:'2023-12-03', status: 'To Do', type:'task', priority:'common', epic:'React-app', bg:'white'},
        {id: 4, title:'Test4', description:'Test in app', owner:'Ahmed', createDate:'2023-12-02', status: 'Done', type:'task', priority:'common', epic:'React-app', bg:'white'}
    ])

    return (
            <BrowserRouter asename={window.location.pathname || ''}>
                <Navbar weather={weather} change={fetchWeather}/>
                <Addtask tasks={tasks} settasks={setTasks}/>
                <Routes>
                    <Route path="/about"    element={<About/>}/>
                    <Route path="/"         element={<MainBoard  tasks={tasks} setTasks={setTasks}/>}/>
                    <Route path="*"         element={<Navigate to="/" replace />}/>
                    <Route path="/task/:id" element={<ViewTask tasks={tasks} setTasks={setTasks}/>}/>
                    <Route path="/list"     element={<TaskList  tasks={tasks} setTasks={setTasks}/>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default App;
