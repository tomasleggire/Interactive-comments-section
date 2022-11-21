import React, {useState} from "react";
import '../CSS/Comment.css';
import {FaPlus} from "react-icons/fa";
import {FaMinus} from "react-icons/fa";
import {FaReply} from "react-icons/fa";
import Replies from "./Replies";


export default function Comment({YOUname, YOUimg, user, date, contador, msg, img, replies, Sumar, Restar}) {

    const [replyModalValue, setReplyModalValue] = useState(false);


    return (
        <div className="main">
        <div className="main-comment">
            <div className="main-comment-contador">
                <div className="contador">
                    <button className="btn-contador" onClick={()=> Sumar(1, msg, contador)}><FaPlus /></button>
                    <span className="span-contador">{contador}</span>
                    <button className="btn-contador" onClick={()=> Restar(1, msg, contador)}><FaMinus /></button>
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
                    <p className="user-date">{date}</p>
                    <div className="user-reply desktop">
                        <FaReply className="reply-icon"/>
                        <p className="reply-p" onClick={()=> setReplyModalValue(true)}>Reply</p>
                    </div>
                </div>
                <div className="main-comment-info-msg">
                    <p className="msg">{msg}</p>
                </div>
            </div>
        </div>

        {!!replies.length && (
          <div className="replies-main">
            <div className="replies-main-bar">
                <div className="bar"></div>
            </div>
            <div className="replies-main-list">
              {replies.map(function(user) {
                return (
                    <Replies
                        user={user.user}
                        date={user.date}
                        contador={user.contador}
                        msg={user.msg}
                        img={user.img}
                        Sumar={Sumar}
                        Restar={Restar}
                        YOUimg={YOUimg}
                        YOUname={YOUname}
                    />
                )
              })}
            </div>
          </div>
        )}

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