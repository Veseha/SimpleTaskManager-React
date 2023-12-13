import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Task from "./task";

const Column = (props) => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{props.args.title}</Card.Title>
                    <table className="table">
                        <tbody>
                            {props.tasks
                                .filter(task => task.status === props.args.title)
                                .map(task =>
                                <tr key={task.id}>
                                    <td>
                                        <Task task={task}  settasks={props.settasks} tasks={props.tasks}/>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Column;