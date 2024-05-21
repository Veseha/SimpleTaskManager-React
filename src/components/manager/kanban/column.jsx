import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Task from "../task";
import '../../style/column.css'
import Sort from "../tasks_filter/sort";
// import {isCursorAtStart} from "@testing-library/user-event/dist/utils";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useDispatch, useSelector} from "react-redux";

const Column = (props) => {
    const dispatch = useDispatch();
    const getAllTasks = useSelector(state => state.tasks)


    return (

            <Droppable droppableId={props.args.id}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Card>
                            <Card.Body>
                            <Card.Title>{props.args.title}</Card.Title>
                            <table className="table">
                                <tbody>
                                {getAllTasks.filter(task => task.status === props.args.id).length !== 0
                                    ?
                                    getAllTasks
                                        .filter((task) => task.status === props.args.id)
                                        .map((task, index) => (
                                            <Draggable
                                                key={task.id}
                                                draggableId={task.id.toString()}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <tr
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <td style={{backgroundColor: 'transparent'}}    >
                                                            <Task
                                                                id={task.id}
                                                                // task={task}
                                                                settasks={props.settasks}
                                                                // tasks={getAllTasks}
                                                            />
                                                        </td>
                                                    </tr>
                                                )}
                                            </Draggable>
                                        ))
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
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
    );
};

export default Column;





// const Column = (props) => {
//
//
//     return (
//         <div>
//             <Card>
//                 <Card.Body>
//                     <Card.Title>{props.args.title}</Card.Title>
//
//                     <table className="table">
//                         <tbody>
//                             {getAllTasks.tasks_filter(task => task.status === props.args.title).length !== 0
//                                 ? getAllTasks
//                                 .tasks_filter(task => task.status === props.args.title)
//                                 .map(task =>
//                                 <tr key={task.id}>
//                                     <td>
//                                         <Task task={task}  settasks={props.settasks} tasks={getAllTasks}/>
//                                     </td>
//                                 </tr>
//                                 )
//                             : <div><div><div>
//                                         <h2 className='no-found'> No tasks</h2>
//                             </div></div></div>
//                             }
//                         </tbody>
//                     </table>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// };
//
// export default Column;