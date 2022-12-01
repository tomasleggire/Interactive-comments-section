import React, {useState} from 'react';
import Comment from './COMPONENTS/Comment';
import useComment from './HOOKS/useComment';
import './CSS/App.css';

function App() {

  const [newPostMsg, setNewPostMsg, YOU, state, Sumar, Restar, newPost, newPostReply, deletePost, editPost] = useComment();

  return (
    <div className='main-app'>
      {state.map(function(user) {
        return (
          <Comment
            YOUname={YOU.name}
            YOUimg={YOU.img}
            user={user.user}
            date={user.date}
            contador={user.contador}
            msg={user.msg}
            img={user.img}
            replies={user.replies}
            Sumar={Sumar}
            Restar={Restar}
            newPostReply={newPostReply}
            deletePost={deletePost}
            editPost={editPost}
          />
        )
      })}
      <form className="main-reply new-post">
        <div className='photo-reply'>
          <img src={YOU.img} />
        </div>
        <textarea type='text' className="input-reply" placeholder="Add a comment..." onChange={(e) => setNewPostMsg(e.target.value)} value={newPostMsg}/>
        <div className="main-reply-btn">
          <button type="button" className="btn-reply" onClick={() => {
            newPost(newPostMsg);
            setNewPostMsg('');
          }}>SEND</button>
        </div>
      </form>
    </div>
  );
}

export default App;
