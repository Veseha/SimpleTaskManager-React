import React from 'react';
// import '/color_menu.css'
import Color from "./color";


const ColorMenuBig = ({handleColorChange, ...props}) => {
    return (
        <div>
            <div className="color-menu-big popover">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            Color
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Color color={'white'} handleColorChange={handleColorChange}></Color>
                        </div>
                        <div className="col">
                            <Color color={'lightyellow'} handleColorChange={handleColorChange}></Color>

                        </div>
                        <div className="col">
                            <Color color={'#DDDDDD'} handleColorChange={handleColorChange}></Color>

                        </div>
                        <div className="col">
                            <Color color={'#BBBBBB'} handleColorChange={handleColorChange}></Color>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Color color={'#CCCCFF'} handleColorChange={handleColorChange}></Color>
                        </div>
                        <div className="col">
                            <Color color={'lightblue'} handleColorChange={handleColorChange}></Color>

                        </div>
                        <div className="col">
                            <Color color={'#AACCCC'} handleColorChange={handleColorChange}></Color>

                        </div>
                        <div className="col">
                            <Color color={'#CCCCAA'} handleColorChange={handleColorChange}></Color>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Color color={'pink'} handleColorChange={handleColorChange}></Color>
                        </div>
                        <div className="col">
                            <Color color={'peachpuff'} handleColorChange={handleColorChange}></Color>

                        </div>
                        <div className="col">
                            <Color color={'#CCFFAA'} handleColorChange={handleColorChange}></Color>

                        </div>
                        <div className="col">
                            <Color color={'#EECCCC'} handleColorChange={handleColorChange}></Color>

                        </div>
                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="col">*/}
                    {/*        <input type="color" color={'#EECCCC'} handleColorChange={handleColorChange} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default ColorMenuBig;