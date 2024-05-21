import React, {useEffect, useState} from 'react';
import '../style/card.css'
import ColorMenu from "./tasks/color_menu";
import Unclick from "../UI/unclick";
import {useNavigate} from "react-router-dom";
import ApiClient, {updateTasks} from "../API/db_api";
import {useDispatch, useSelector} from "react-redux";


const Task = ({settasks, ...props}) => {
    const dispatch = useDispatch();

    const selectedTask = useSelector(state => state.tasks.filter(task => task.id === props.id)[0]);
    const getAllTasks = useSelector(state => state.tasks);
    console.log(selectedTask);

    const delTask = () => {
        dispatch(updateTasks(selectedTask.id));
    }

    const route = useNavigate();
    const [showColorMenu, setShowColorMenu] = useState(false);

    const handleColorChange = (color) => {
        let curtask = selectedTask;
        curtask.bg = color;
        dispatch(updateTasks(curtask));
    };



    return (
        <div className='container-task'>
            <div className="two" style={{backgroundColor: selectedTask.bg }}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-end px-3 pt-1"><i
                                className="mdi mdi-star-outline pr-1 star"></i><i
                                className="mdi mdi-dots-horizontal dot"></i></div>
                            <div className="px-3 pt-3">
                                <h3 className="name">{selectedTask.title}</h3>
                                <p className="quote2">{selectedTask.description}</p>
                            </div>
                            <div className="d-flex justify-content-start px-3 align-items-center">
                                <i className="mdi mdi-view-comfy task"></i>
                                <span className="quote2 pl-2">Executor: {selectedTask.owner}</span>
                            </div>
                            <div className="d-flex justify-content-between  px-3 align-items-center pb-3">
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="mdi mdi-calendar-clock date"></i>
                                    <span className="quote2 pl-2">Create date: {selectedTask.createdate}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">

                            <button className='btn btn-secondary-outline  btn-sm' style={{margin: '1rem'}}
                                    onClick={() => route('/task/'+selectedTask.id)}>
                                <span className="material-symbols-outlined"> settings</span>
                            </button>
                            <button
                                className='btn btn-secondary-outline btn-sm'
                                // data-bs-toggle="modal" data-bs-target={"#colormenu" + selectedTask.id}
                                style={{margin: '1rem'}}
                                onClick={() => setShowColorMenu(!showColorMenu)}
                            >
                                <span className="material-symbols-outlined">palette</span>
                            </button>


                        </div>
                    </div>
                </div>
            </div>
            {showColorMenu && (
                <ColorMenu handleColorChange={handleColorChange} props={props}>

                </ColorMenu>

            )}
            {showColorMenu && (
                <Unclick func={setShowColorMenu}>

                </Unclick>

            )}
        </div>
    );
};

export default Task;