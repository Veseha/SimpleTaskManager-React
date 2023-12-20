import React, {useState} from 'react';
import Search from "./search";
import Sort from "./sort";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const FilterManager = ({param, selectedSort, setSelectedSort, sortedTasks, searchQuery, setSearchQuery, sortTask, ...props}) => {
    // const [selectedSort, setSelectedSort] = useState('')
    // const [searchQuery, setSearchQuery] = useState('')
    // const sortedTasks =[...param.tasks].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    //
    // const sortTask = (sort) =>{
    //
    //     setSelectedSort(sort);
    //     // param.settasks([...param.tasks].sort((a, b) => a[sort].localeCompare(b[sort])))
    //     // console.log(sort);
    // }


    return (
        <div>

            <Card>
                {/*<Card.Body>*/}
                    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#FFFFFF"}}>
                        <div className="container-fluid">

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                                    <li className="nav-item dropdown">

                                        <Sort
                                            value={selectedSort}
                                            onChange={sortTask}
                                            defaultValue='Sort By'
                                            options={[
                                                {value: 'title', name: 'By title'},
                                                {value: 'owner', name: 'By executor'},
                                                {value: 'createDate', name: 'By date'}
                                            ]}></Sort>
                                    </li>

                                </ul>
                                <form className="d-flex" role="search">
                                    <Search placeholder='Search...'
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}>

                                    </Search>
                                    {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}
                                </form>
                            </div>
                        </div>
                    </nav>


                {/*</Card.Body>*/}
            </Card>
        </div>
    );
};

export default FilterManager;