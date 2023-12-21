import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ColorMenu from "./color_menu";
import Unclick from "../../UI/unclick";

const ViewTask = ({settasks, ...props}) => {
    const params = useParams();
    const route = useNavigate();

    let task = props.tasks.filter(p => p.id.toString() === params.id)[0];
    console.log(params.id)
    console.log(task);


    const delTask = () => {
        props.settasks(props.tasks.filter(p => p.id !== task.id))
    }

    const [showColorMenu, setShowColorMenu] = useState(false);
    // const [selectedColor, setSelectedColor] = useState(task.bg);

    const handleColorChange = (color) => {
        console.log(props.tasks)
        let curtask = task;
        curtask.bg = color;
        console.log({...props.tasks.filter(p => p.id !== task.id), curtask})

        settasks([...props.tasks.filter(p => p.id !== task.id), curtask])

        console.log('ok')
        // setSelectedColor(color);
        // setShowColorMenu(false);
    };

    const tdTask = (e) => {
        let t1 = task;
        t1.status = 'To Do'
        let l1 = props.tasks.filter(p => p.id !== task.id)
        settasks([...l1, t1])
    }
    const ipTask = (e) => {
        let t1 = task;
        t1.status = 'In Progress'
        let l1 = props.tasks.filter(p => p.id !== task.id)
        settasks([...l1, t1])
    }
    const doneTask = (e) => {
        let t1 = task;
        t1.status = 'Done'
        let l1 = props.tasks.filter(p => p.id !== task.id)
        settasks([...l1, t1])
    }

    function GetNavigationTD(task) {
        if(task.props.status !== 'To Do') {
            return <button className='btn btn-warning btn-sm' onClick={e => tdTask(e)}>TD</button>
        }
        return <div></div>;
    }
    function GetNavigationIP(task) {
        if(task.props.status !== 'In Progress') {
            return <button className='btn btn-primary btn-sm' onClick={e => ipTask(e)}>IP</button>
        }
        return <div></div>;
    }
    function GetNavigationDN(task) {
        if(task.props.status !== 'Done') {
            return <button className='btn btn-success btn-sm' onClick={e => doneTask(e)}>DN</button>
        }
        return <div></div>;
    }

    return (
        <div style={{padding:'3rem 18rem'}}>
            <button className='btn btn-primary' style={{margin:'0 0 1rem 0'}} onClick={() => route(-1)}>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className='container-task'>
                <div className="two" style={{backgroundColor: task.bg}}>
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
                                        <span className="quote2 pl-2">Create date: {task.createDate}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">

                                {/*<button className='btn btn-secondary-outline  btn-sm' style={{margin: '1rem'}}*/}
                                {/*        onClick={() => route('/task/' + task.id)}>*/}
                                {/*    <span className="material-symbols-outlined"> settings</span>*/}
                                {/*</button>*/}
                                {/*<button className='btn btn-secondary-outline  btn-sm' style={{margin: '1rem'}}*/}
                                {/*        onClick={e => delTask(e)}>*/}
                                {/*    <span className="material-symbols-outlined"> delete</span>*/}
                                {/*</button>*/}

                                <div className="btn-group-vertical pt-2  justify-content-end" role="group"
                                     aria-label="Vertical button group">
                                    <button className='btn btn-danger  btn-sm' onClick={e => delTask(e)}>DEL</button>
                                    <GetNavigationTD props={task}/>
                                    <GetNavigationIP props={task}/>
                                    <GetNavigationDN props={task}/>
                                </div>


                                <div className="col-3">
                                    <button
                                        className='btn btn-secondary-outline btn-sm'
                                        style={{margin: '1rem'}}
                                        onClick={() => setShowColorMenu(!showColorMenu)}>
                                        <span className="material-symbols-outlined">palette</span>
                                    </button>
                                </div>


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

        </div>
    );
};

export default ViewTask;