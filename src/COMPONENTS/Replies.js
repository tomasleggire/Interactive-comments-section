import React, {useState} from "react";
import '../CSS/Comment.css';
import '../CSS/Replies.css';
import {FaPlus} from "react-icons/fa";
import {FaMinus} from "react-icons/fa";
import {FaReply} from "react-icons/fa";
import {FaPen} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";
import DeleteModal from "./DeleteModal";

export default function Replies({YOUname, YOUimg, user, date, contador, msg, img, Sumar, Restar, userName, userMsg, newPostReply, deletePost, editPost}) {

    const [replyModalValue, setReplyModalValue] = useState(false);
    const [msgReply, setMsgReply] = useState('');
    const [deleteModalValue, setDeleteModalValue] = useState(false);

    const [editModalValue, setEditModalValue] = useState(false);
    const [editMsgValue, setEditMsgValue] = useState(msg);

    const deleteConfirmation = () => {
        deletePost(2, msg, userMsg);
        setDeleteModalValue(false);
    }
    
    return (
        <div className="main replies-child">
        <div className="main-comment">
            <div className="main-comment-contador">
                <div className="contador">
                    <button className="btn-contador" onClick={()=> Sumar(2, msg, userMsg, userName)}><FaPlus /></button>
                    <span className="span-contador">{contador}</span>
                    <button className="btn-contador" onClick={()=> Restar(2, msg, contador, userMsg, userName)}><FaMinus /></button>
                </div>
                {!(user === YOUname) && (
                    <div className="user-reply mobile">
                    <FaReply className="reply-icon"/>
                    <p className="reply-p" onClick={()=> setReplyModalValue(true)}>Reply</p>
                    </div>
                )}
                {(user === YOUname) && (
                    <div className="desktop you-btn-main mobile-you">
                    <div className="you-btn btn-delete">
                        <FaTrash className="reply-icon"/>
                        <p className="reply-p" onClick={() => setDeleteModalValue(true)}>Delete</p>
                    </div>
                    <div className="you-btn btn-edit">
                        <FaPen className="reply-icon"/>
                        <p className="reply-p" onClick={() => {
                            setEditMsgValue(msg);
                            setEditModalValue(true);
                        }}>Edit</p>
                    </div>
                </div>
                )}
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
                    (<div className="desktop you-btn-main desktop-you">
                        <div className="you-btn btn-delete">
                            <FaTrash className="reply-icon"/>
                            <p className="reply-p" onClick={() => setDeleteModalValue(true)}>Delete</p>
                        </div>
                        <div className="you-btn btn-edit">
                            <FaPen className="reply-icon"/>
                            <p className="reply-p" onClick={() => {
                            setEditMsgValue(msg);
                            setEditModalValue(true);
                        }}>Edit</p>
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
                    {editModalValue ? (
                        <textarea autoFocus='true' value={editMsgValue} className='msg-text' onChange={(e) => setEditMsgValue(e.target.value)}></textarea>
                    ) : (
                        <p className="msg">{msg}</p>
                    )}
                </div>
                {!!editModalValue && (
                    <div className="edit-btn-main">
                        <button className="edit-btn edit-btn-update" onClick={() => {
                            if (editMsgValue) {
                              editPost(2, editMsgValue, msg, userMsg);
                              setEditModalValue(false);
                            }
                        }}>UPDATE</button>
                        <button className="edit-btn edit-btn-cancel" onClick={() => {
                            setEditModalValue(false);
                            setEditMsgValue(msg);
                        }}>Cancel</button>
                    </div>
                )}
            </div>
        </div>

        {replyModalValue && (
            <form className="main-reply">
                <div className='photo-reply'>
                    <img src={YOUimg} />
                </div>
                <textarea type='text' className="input-reply" placeholder="Add a comment..." autoFocus='on' value={msgReply} onChange={(e) => setMsgReply(e.target.value)}/>
                <div className="main-reply-btn">
                  <button type="button" className="btn-reply" onClick={() => {
                    if (msgReply) {
                      newPostReply(2, msgReply, userMsg, userName);
                      setMsgReply('');
                      setReplyModalValue(false);
                    } else return;
                  }}>REPLY</button>
                  <button type="button" className="btn-cancel" onClick={()=> setReplyModalValue(false)}>Cancel</button>
                </div>
            </form>
        )}

        {!!deleteModalValue && <DeleteModal setDeleteModalValue={setDeleteModalValue} deleteConfirmation={deleteConfirmation}/>}

        </div>
    )
}