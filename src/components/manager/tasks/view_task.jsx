import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ColorMenu from "./color_menu";
import Unclick from "../../UI/unclick";
import Color_menu_big from "./color_menu_big";
import ColorMenuBig from "./color_menu_big";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, updateTasks} from "../../API/db_api";

const ViewTask = ({setTasks, ...props}) => {
    const params = useParams();
    const route = useNavigate();

    const dispatch = useDispatch();
    let task = useSelector(state => state.tasks.filter(task => task.id.toString() === params.id)[0]);
    console.log(task);
    const getAllTasks = useSelector(state => state.tasks)


    const delTask = () => {
        dispatch(deleteTask(task.id));
        route('/')
    }

    const [showColorMenu, setShowColorMenu] = useState(false);

    const handleColorChange = (color) => {
        let curtask = task;
        curtask.bg = color;
        dispatch(updateTasks(curtask));
    };

    const tdTask = (e) => {
        let t1 = task;
        t1.status = 1
        dispatch(updateTasks(t1));

    }
    const ipTask = (e) => {
        let t1 = task;
        t1.status = 2
        dispatch(updateTasks(t1));

    }
    const doneTask = (e) => {
        let t1 = task;
        t1.status = 3
        dispatch(updateTasks(t1));

    }

    function GetNavigationTD(task) {
        if(task.props.status !== 1) {
            return <button className='btn btn-warning btn-sm' onClick={e => tdTask(e)}>To Do</button>
        }
        return <button className='btn btn-secondary btn-sm disabled' disabled onClick={e => tdTask(e)}>To Do ✓</button>;
    }
    function GetNavigationIP(task) {
        if(task.props.status !== 2) {
            return <button className='btn btn-primary btn-sm' onClick={e => ipTask(e)}>In Progress</button>
        }
        return <button className='btn btn-secondary btn-sm disabled' disabled onClick={e => ipTask(e)}>In Progress ✓</button>;
    }
    function GetNavigationDN(task) {
        if(task.props.status !== 3) {
            return <button className='btn btn-success btn-sm' onClick={e => doneTask(e)}>Done</button>
        }
        return <button className='btn btn-secondary btn-sm disable' disabled onClick={e => doneTask(e)}>Done ✓</button>;
    }

    return (
        <div style={{padding:'3rem 18rem'}}>
            <button className='btn btn-primary' style={{margin:'0 0 1rem 0'}} onClick={() => route(-1)}>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className='container-task'>
                <div className="two" style={{backgroundColor: task.bg, padding: '2rem'}}>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex justify-content-end px-3 pt-1"><i
                                    className="mdi mdi-star-outline pr-1 star"></i><i
                                    className="mdi mdi-dots-horizontal dot"></i></div>
                                <div className="px-3 pt-3">
                                    <h3 className="name">{task.title}</h3>
                                    <p className="quote2">{task.description}</p>
                                </div>
                                <div className="d-flex justify-content-start px-3 align-items-center">
                                    <i className="mdi mdi-view-comfy task"></i>
                                    <span className="quote2 pl-2">Executor: {task.owner}</span>
                                </div>
                                <div className="d-flex justify-content-between  px-3 align-items-center pb-3">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="mdi mdi-calendar-clock date"></i>
                                        <span className="quote2 pl-2">Create date: {task.createdate}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <h5>Change status</h5>
                                <div className="btn-group-vertical pt-2  justify-content-end" role="group"
                                     aria-label="Vertical button group">
                                    <GetNavigationTD props={task}/>
                                    <GetNavigationIP props={task}/>
                                    <GetNavigationDN props={task}/>
                                </div>
                                {/*<div className=' pt-2'>*/}
                                    <button className='btn btn-danger m-2  btn-sm ' onClick={e => delTask(e)}>DELETE
                                    </button>
                                {/*</div>*/}
                            </div>


                            <div className="col-3">
                            <ColorMenuBig handleColorChange={handleColorChange} props={props}>
                                    </ColorMenuBig>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewTask;