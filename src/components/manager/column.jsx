import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Task from "./task";
import '../style/column.css'
import Sort from "./sort";
import {isCursorAtStart} from "@testing-library/user-event/dist/utils";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Column = (props) => {
    // const onDragEnd = (result) => {
    //     const { destination, source, draggableId } = result;
    //
    //     if (!destination) {
    //         return;
    //     }
    //
    //     if (
    //         destination.droppableId !== source.droppableId ||
    //         destination.index !== source.index
    //     ) {
    //         const updatedTasks = Array.from(props.tasks);
    //         const task = updatedTasks.find((task) => task.id === parseInt(draggableId, 10));
    //
    //         task.status = props.columns[destination.droppableId].title;
    //
    //         props.settasks(updatedTasks);
    //     }
    // };

    return (

            <Droppable droppableId={props.args.id}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Card>
                            <table className="table">
                                <tbody>
                                {props.tasks
                                    .filter((task) => task.status === props.args.title)
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
                                                    <td>
                                                        <Task
                                                            task={task}
                                                            settasks={props.settasks}
                                                            tasks={props.tasks}
                                                        />
                                                    </td>
                                                </tr>
                                            )}
                                        </Draggable>
                                    ))}
                                </tbody>
                            </table>
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
//                             {props.tasks.filter(task => task.status === props.args.title).length !== 0
//                                 ? props.tasks
//                                 .filter(task => task.status === props.args.title)
//                                 .map(task =>
//                                 <tr key={task.id}>
//                                     <td>
//                                         <Task task={task}  settasks={props.settasks} tasks={props.tasks}/>
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