import React from 'react';
import logo from '../style/logo.png'
import Addtask from "../manager/addtask";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Bootstrap" width="35" height="35"/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link disable" aria-current="page" href="#">View all</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#addtask">Add task</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disable" aria-current="page" href="#">Switch interface</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;