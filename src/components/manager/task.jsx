import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../style/card.css'

const Task = ({settasks, ...props}) => {
    const delTask = (e) => {
        // settasks(props.tasks.splice(props.tasks.indexOf(e.target.value), 1))
        settasks(props.tasks.filter(p => p.id !== props.task.id))
    }
    const tdTask = (e) => {
        let t1 = props.task;
        t1.status = 'To Do'
        let l1 = props.tasks.filter(p => p.id !== props.task.id)
        settasks([...l1, t1])
    }
    const ipTask = (e) => {
        let t1 = props.task;
        t1.status = 'In Progress'
        let l1 = props.tasks.filter(p => p.id !== props.task.id)
        settasks([...l1, t1])
    }
    const doneTask = (e) => {
        let t1 = props.task;
        t1.status = 'Done'
        let l1 = props.tasks.filter(p => p.id !== props.task.id)
        settasks([...l1, t1])
    }

    // function GetNavigation(task) {
    //     let res = '<button className=\'btn btn-danger  btn-sm\' onClick={e => delTask(e)}>DEL</button>';
    //     if(task.status !== 'To Do') {
    //         res += '<button className=\'btn btn-warning btn-sm\' onClick={e => tdTask(e)}>TD</button>'
    //         return <button className='btn btn-danger  btn-sm' onClick={e => delTask(e)}>DEL</button>
    //         <button className='btn btn-warning btn-sm' onClick={e => tdTask(e)}>TD</button>
    //         <button className='btn btn-primary btn-sm' onClick={e => ipTask(e)}>IP</button>
    //         <button className='btn btn-success btn-sm' onClick={e => doneTask(e)}>DN</button>
    //     }
    //     if (task.status !== 'in Progress') {
    //         res += '<button className=\'btn btn-primary btn-sm\' onClick={e => ipTask(e)}>IP</button>'
    //     }
    //     if (task.status !== 'Done') {
    //         res += '<button className=\'btn btn-success btn-sm\' onClick={e => doneTask(e)}>DN</button>'
    //     }
    //     return res;
    // }
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
        <div>
            <div className="two">
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
                            <div className="btn-group-vertical pt-2  justify-content-end" role="group" aria-label="Vertical button group">


                                <button className='btn btn-danger  btn-sm' onClick={e => delTask(e)}>DEL</button>
                                <GetNavigationTD props={props.task}/>
                                <GetNavigationIP props={props.task}/>
                                <GetNavigationDN props={props.task}/>

                                {/*<button className='btn btn-warning btn-sm' onClick={e => tdTask(e)}>TD</button>*/}

                                {/*<button className='btn btn-primary btn-sm' onClick={e => ipTask(e)}>IP</button>*/}

                                {/*<button className='btn btn-success btn-sm' onClick={e => doneTask(e)}>DN</button>*/}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Task;