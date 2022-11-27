import React, {useState} from "react";
import '../CSS/Comment.css';
import {FaPlus} from "react-icons/fa";
import {FaMinus} from "react-icons/fa";
import {FaReply} from "react-icons/fa";
import {FaPen} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";
import Replies from "./Replies";


export default function Comment({YOUname, YOUimg, user, date, contador, msg, img, replies, Sumar, Restar, newPostReply}) {

    const [replyModalValue, setReplyModalValue] = useState(false);
    const [msgReply, setMsgReply] = useState('');


    return (
        <div className="main">
        <div className="main-comment">
            <div className="main-comment-contador">
                <div className="contador">
                    <button className="btn-contador" onClick={()=> Sumar(1, msg)}><FaPlus /></button>
                    <span className="span-contador">{contador}</span>
                    <button className="btn-contador" onClick={()=> Restar(1, msg, contador)}><FaMinus /></button>
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
                        <p className="reply-p">Delete</p>
                    </div>
                    <div className="you-btn btn-edit">
                        <FaPen className="reply-icon"/>
                        <p className="reply-p">Edit</p>
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
                <textarea type='text' className="input-reply" placeholder="Add a comment..." autoFocus='on' value={msgReply} onChange={(e) => setMsgReply(e.target.value)}/>
                <div className="main-reply-btn">
                  <button type="button" className="btn-reply" onClick={() => {
                    if (msgReply) {
                      newPostReply(1,msgReply, msg);
                      setMsgReply('');
                      setReplyModalValue(false);
                    } else return;
                  }}>REPLY</button>
                  <button type="button" className="btn-cancel" onClick={()=> setReplyModalValue(false)}>Cancel</button>
                </div>
            </form>
        )}

        {!!replies.length && (
          <div className="replies-main">
            <div className="replies-main-bar">
                <div className="bar"></div>
            </div>
            <div className="replies-main-list">
              {replies.map(function(user) {
                return (
                    <Replies
                        userName={user}
                        userMsg={msg}
                        user={user.user}
                        date={user.date}
                        contador={user.contador}
                        msg={user.msg}
                        img={user.img}
                        Sumar={Sumar}
                        Restar={Restar}
                        YOUimg={YOUimg}
                        YOUname={YOUname}
                        newPostReply={newPostReply}
                    />
                )
              })}
            </div>
          </div>
        )}
        </div>
    )
}