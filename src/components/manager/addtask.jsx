import React, {useRef, useState} from 'react';
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';


const Addtask = (props) => {

    const addNewTask = (e) => {
        e.preventDefault();
        console.log('ok');
        const newTask =  {
                id: Date.now(),
                title: name,
                description: desc,
                owner: owner,
                createDate: date,
                status: status,
                type:'task',
                priority:'common',
                epic:'React-app',
                bg:'white'}
        props.settasks([...props.tasks, newTask])

        // setStatus('')
        // setDate('')
        // setName('')
        // setOwner('')
        // setDesc('')
        // console.log(props.tasks)
    }
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [owner, setOwner] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');



    return (
        <div>
            <div className="modal fade" id="addtask" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <div className="mb-1">
                                    <label htmlFor="name_addtask" className="form-label">Task name</label>
                                    <input
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        type="text" className="form-control" id="name_addtask"/>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="desc_addtask" className="form-label">Description</label>
                                    <input
                                        value={desc}
                                        onChange={e => setDesc(e.target.value)}
                                        type="text" className="form-control" id="desc_addtask"/>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="owner_addtask" className="form-label">Owner
                                        <label className="form-text m-1">
                                            First name and Last name
                                        </label>
                                    </label>
                                    <input
                                        value={owner}
                                        onChange={e => setOwner(e.target.value)}
                                        type="text" className="form-control" id="owner_addtask"/>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="date_addtask" className="form-label">Start date</label>
                                    <input
                                        value={date}
                                        onChange={e => setDate(e.target.value)}
                                        type="date" className="form-control" id="date_addtask"/>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="status_addtask" className="form-label">Status</label>
                                    <select
                                        value={status}
                                        onChange={e => setStatus(e.target.value)}
                                        className="form-select" aria-label="Default select example" id="status_addtask">
                                        <option ></option>
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                    <button onClick={addNewTask} className="btn btn-primary">Save changes</button>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Addtask;