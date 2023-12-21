import React from 'react';
import {Card} from "react-bootstrap";
import {Draggable} from "react-beautiful-dnd";
import Task from "../task";
import TaskListElement from "./task_list_element";

const TaskList = (props) => {
    return (
        <div style={{padding:'3rem 18rem'}}>
            <Card>
                <Card.Body>

                    <table className="table">
                        <tbody>
                        {props.tasks.length !== 0
                            ? props.tasks
                                // .filter(task => task.status === props.args.title)
                                .map(task =>
                                    <tr key={task.id}>
                                        <td>
                                            <TaskListElement task={task} settasks={props.settasks} tasks={props.tasks}/>
                                        </td>
                                    </tr>
                                )
                            : <div>
                                <div>
                                    <div>
                                        <h2 className='no-found'> No tasks</h2>
                                    </div>
                                </div>
                            </div>
                        }
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TaskList;