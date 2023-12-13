import React from 'react';
import Column from "./column";
import '../style/kanban.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Kanban = (props) => {
    return (
        <div>
            <div className="container text-center kanban" >
                <div className="row">
                    <div className="col">
                        <Column args={{id: 1, title: 'To Do'}} tasks={props.tasks} settasks={props.settasks} key={1}/>
                    </div>
                    <div className="col">
                        <Column args={{id: 2, title: 'In Progress'}} tasks={props.tasks} settasks={props.settasks} key={2}/>
                    </div>
                    <div className="col">
                        <Column args={{id: 3, title: 'Done'}} tasks={props.tasks} settasks={props.settasks} key={3}/>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Kanban;