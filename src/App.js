import './components/style/App.css';
import React, {useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import Navbar from "./components/basic/navbar";
import Column from "./components/manager/column";
import Kanban from "./components/manager/kanban";
import Task from "./components/manager/task";
import Addtask from "./components/manager/addtask";

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title:'Test1', description:'Test in app', owner:'Seva', createDate:'2023-12-01', status: 'To Do', type:'task', priority:'common', epic:'React-app', bg:'white'},
        {id: 2, title:'Test2', description:'Test in app', owner:'Miras', createDate:'2023-12-04', status: 'In Progress', type:'task', priority:'common', epic:'React-app', bg:'white'},
        {id: 3, title:'Test3', description:'Test in app', owner:'Seva', createDate:'2023-12-03', status: 'To Do', type:'task', priority:'common', epic:'React-app', bg:'white'},
        {id: 4, title:'Test4', description:'Test in app', owner:'Ahmed', createDate:'2023-12-02', status: 'Done', type:'task', priority:'common', epic:'React-app', bg:'white'}
    ])

    // console.log(tasks);

    return (
    <div className="App">
        <Navbar/>
        <Kanban tasks={tasks} settasks={setTasks}/>
        <Addtask tasks={tasks} settasks={setTasks}/>
    </div>
  );
}

export default App;
