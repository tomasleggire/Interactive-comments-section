import React, {useState} from "react";
import '../CSS/Comment.css';
import '../CSS/Replies.css';
import {FaPlus} from "react-icons/fa";
import {FaMinus} from "react-icons/fa";
import {FaReply} from "react-icons/fa";
import {FaPen} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";

export default function Replies({YOUname, YOUimg, user, date, contador, msg, img, Sumar, Restar, userName, userMsg}) {

    const [replyModalValue, setReplyModalValue] = useState(false);
    
    return (
        <div className="main replies-child">
        <div className="main-comment">
            <div className="main-comment-contador">
                <div className="contador">
                    <button className="btn-contador" onClick={()=> Sumar(2, msg, userMsg, userName)}><FaPlus /></button>
                    <span className="span-contador">{contador}</span>
                    <button className="btn-contador" onClick={()=> Restar(2, msg, contador, userMsg, userName)}><FaMinus /></button>
                </div>
                <div className="user-reply mobile">
                    <FaReply className="reply-icon"/>
                    <p className="reply-p" onClick={()=> setReplyModalValue(true)}>Reply</p>
                </div>
            </div>
            <div className="main-comment-info">
                <div className="main-comment-info-user">
                    <div className='user-photo'>
                        <img src={img} />
                    </div>
                    <p className="user-name">{user}</p>
                    {(user === YOUname) && <p className="you">you</p>}
                    <p className="user-date">{date}</p>
                    {user === YOUname ? 
                    (<div className="desktop you-btn-main">    
                        <div className="you-btn btn-delete">
                            <FaTrash className="reply-icon"/>
                            <p className="reply-p">Delete</p>
                        </div>
                        <div className="you-btn btn-edit">
                            <FaPen className="reply-icon"/>
                            <p className="reply-p">Edit</p>
                        </div>
                    </div>
                    ) 
                    : 
                    (<div className="user-reply desktop">    
                    <FaReply className="reply-icon"/>
                    <p className="reply-p" onClick={()=> setReplyModalValue(true)}>Reply</p>
                    </div>)
                    }
                </div>
                <div className="main-comment-info-msg">
                    <p className="msg">{msg}</p>
                </div>
            </div>
        </div>

        {replyModalValue && (
            <form className="main-reply">
                <div className='photo-reply'>
                        <img src={YOUimg} />
                </div>
                <textarea type='text' className="input-reply" placeholder="Add a comment..." autoFocus='on'/>
                <div className="main-reply-btn">
                  <button type="button" className="btn-reply">REPLY</button>
                  <button type="button" className="btn-cancel" onClick={()=> setReplyModalValue(false)}>Cancel</button>
                </div>
            </form>
        )}
        </div>
    )
}