import React, {useEffect, useMemo, useState} from 'react';
import Column from "./column";
import '../../style/kanban.css'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Sort from "../tasks_filter/sort";
import Search from "../tasks_filter/search";
import FilterManager from "../tasks_filter/filter_manager";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks, updateTasks} from "../../API/db_api";
import {delay} from "q";
const Kanban = (props) => {
    const dispatch = useDispatch();
    const getAllTasks = useSelector(state => state.tasks)
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const sortedTasks = useMemo( () => {
        if(selectedSort){
            console.log(selectedSort);
            return [...getAllTasks].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return getAllTasks;
    }, [selectedSort, getAllTasks]);
    useEffect(() => {
        console.log('fetchAllTaskss');
        dispatch(fetchTasks());
    }, [dispatch]);


    const sortedSearchedTasks = useMemo(()=>{
        // return sortedTasks.tasks_filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
        console.log(sortedTasks);
        return sortedTasks.filter(task =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase()) //||
            // task.createdate.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, sortedTasks])

    const sortTask = (sort) =>{
        setSelectedSort(sort);
    }

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId !== source.droppableId ||
            destination.index !== source.index
        ) {
            const updatedTasks = Array.from(getAllTasks);
            console.log('ok');
            console.log(updatedTasks);
            const task = updatedTasks.find((task) => task.id === parseInt(draggableId, 10));
            const columnsInfo = {
                '1': { title: 'To Do' },
                '2': { title: 'In Progress' },
                '3': { title: 'Done' }
            };
            task.status = destination.droppableId;
            console.log(task);
            console.log(task.status);
            dispatch(updateTasks(task));
            dispatch(fetchTasks());

            // task.status = props.columns[destination.droppableId].title;

            props.settasks(updatedTasks);
        }
    };

    return (

        <div>
            {/*<div>*/}
            {/*    /!* Any time `myData` changes, this component will re-render with the new data *!/*/}
            {/*    {getAllTasks.map(item => (*/}
            {/*        <p key={item.id}>{item.title}, {item.status}</p>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="container text-center kanban" >
                <div className='row'>
                    <div className='col sort-col'>
                        <FilterManager param={props} selectedSort={selectedSort} setSelectedSort={setSelectedSort} searchQuery={searchQuery}
                                       setSearchQuery={setSearchQuery} sortedTasks={sortedTasks} sortTask={sortTask}>

                        </FilterManager>

                    </div>
                </div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="row">
                        <div className="col">
                            <Column args={{id: 1, title: 'To Do'}} settasks={props.settasks} key={1}/>
                        </div>
                        <div className="col">
                            <Column args={{id: 2, title: 'In Progress'}}  settasks={props.settasks} key={2}/>
                        </div>
                        <div className="col">
                            <Column args={{id: 3, title: 'Done'}}  settasks={props.settasks} key={3}/>
                        </div>
                    </div>
                </DragDropContext>
            </div>



        </div>
    );
};

export default Kanban;