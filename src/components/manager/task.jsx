import React, {useEffect, useState} from 'react';
import '../style/card.css'
import ColorMenu from "./tasks/color_menu";
import Unclick from "../UI/unclick";
import {useNavigate} from "react-router-dom";
import ApiClient from "../API/db_api";


const Task = ({settasks, ...props}) => {


    const delTask = () => {
        // settasks(props.tasks.splice(props.tasks.indexOf(e.target.value), 1))
        settasks(props.tasks.filter(p => p.id !== props.task.id))
    }

    const route = useNavigate();


    const [showColorMenu, setShowColorMenu] = useState(false);
    // const [selectedColor, setSelectedColor] = useState(props.task.bg);

    const handleColorChange = (color) => {
        console.log(props.tasks)
        let curtask = props.task;
        curtask.bg = color;
        console.log({...props.tasks.filter(p => p.id !== props.task.id), curtask})

        settasks([...props.tasks.filter(p => p.id !== props.task.id), curtask])

        console.log('ok')
        // setSelectedColor(color);
        // setShowColorMenu(false);
    };



    return (
        <div className='container-task'>
            <div className="two" style={{backgroundColor: props.task.bg }}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-end px-3 pt-1"><i
                                className="mdi mdi-star-outline pr-1 star"></i><i
                                className="mdi mdi-dots-horizontal dot"></i></div>
                            <div className="px-3 pt-3">
                                <h3 className="name">{props.task.title}</h3>
                                <p className="quote2">{props.task.description}</p>
                            </div>
                            <div className="d-flex justify-content-start px-3 align-items-center">
                                <i className="mdi mdi-view-comfy task"></i>
                                <span className="quote2 pl-2">Executor: {props.task.owner}</span>
                            </div>
                            <div className="d-flex justify-content-between  px-3 align-items-center pb-3">
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="mdi mdi-calendar-clock date"></i>
                                    <span className="quote2 pl-2">Create date: {props.task.createDate}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">

                            <button className='btn btn-secondary-outline  btn-sm' style={{margin: '1rem'}}
                                    onClick={() => route('/task/'+props.task.id)}>
                                <span className="material-symbols-outlined"> settings</span>
                            </button>
                            {/*<button className='btn btn-secondary-outline  btn-sm' style={{margin: '1rem'}}*/}
                            {/*        onClick={e => delTask(e)}>*/}
                            {/*    <span className="material-symbols-outlined"> delete</span>*/}
                            {/*</button>*/}

                            {/*<div className="btn-group-vertical pt-2  justify-content-end" role="group"*/}
                            {/*     aria-label="Vertical button group">*/}
                            {/*    <button className='btn btn-danger  btn-sm' onClick={e => delTask(e)}>DEL</button>*/}
                            {/*    <GetNavigationTD props={props.task}/>*/}
                            {/*    <GetNavigationIP props={props.task}/>*/}
                            {/*    <GetNavigationDN props={props.task}/>*/}
                            {/*</div>*/}
                            {/*</div>*/}


                            {/*<div className="col-3">*/}
                            <button
                                className='btn btn-secondary-outline btn-sm'
                                // data-bs-toggle="modal" data-bs-target={"#colormenu" + props.task.id}
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