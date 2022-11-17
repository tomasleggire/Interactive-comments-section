import React, {useState} from "react";
import '../CSS/Comment.css';
import {FaPlus} from "react-icons/fa";
import {FaMinus} from "react-icons/fa";

export default function Comment({YOU, user, date, contador, msg, img, replies}) {


    return (
        <div className="main-comment">
            <div className="main-comment-contador">
                <div className="contador">
                    <button className="btn-contador"><FaPlus /></button>
                    <span className="span-contador">{contador}</span>
                    <button className="btn-contador"><FaMinus /></button>
                </div>
            </div>
            <div className="main-comment-info">
            </div>
        </div>
    )
}