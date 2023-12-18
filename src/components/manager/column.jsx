import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Task from "./task";
import '../style/column.css'
import Sort from "./sort";
import {isCursorAtStart} from "@testing-library/user-event/dist/utils";


const Column = (props) => {


    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{props.args.title}</Card.Title>

                    <table className="table">
                        <tbody>
                            {props.tasks.filter(task => task.status === props.args.title).length !== 0
                                ? props.tasks
                                .filter(task => task.status === props.args.title)
                                .map(task =>
                                <tr key={task.id}>
                                    <td>
                                        <Task task={task}  settasks={props.settasks} tasks={props.tasks}/>
                                    </td>
                                </tr>
                                )
                            : <div><div><div>
                                        <h2 className='no-found'> No tasks</h2>
                            </div></div></div>
                            }
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Column;