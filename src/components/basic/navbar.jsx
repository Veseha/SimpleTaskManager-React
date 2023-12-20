import React from 'react';
import logo from '../style/logo.png'
import Addtask from "../manager/addtask";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Bootstrap" width="35" height="35"/>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link disable" aria-current="page" to="#">View all</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#" data-bs-toggle="modal"
                                   data-bs-target="#addtask">Add task</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disable" aria-current="page" to="#">Switch interface</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link disable">Temperature in Almaty:</a>

                                </li>
                                <li>
                                    <a className="nav-link disable">{props.weather}</a>
                                </li>

                            </ul>
                        </div>

                        <button className="btn btn-outline-success" onClick={()=> props.change()}>Refresh</button>
                    </div>

                </div>
            </nav>

        </div>
    );
};

export default Navbar;