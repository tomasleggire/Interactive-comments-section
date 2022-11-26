import React, {useState} from 'react';
import Comment from './COMPONENTS/Comment';
import amyrobsonIMG from './IMAGES/image-amyrobson.png';
import juliusomoIMG from './IMAGES/image-juliusomo.png';
import maxblagunIMG from './IMAGES/image-maxblagun.png';
import ramsesmironIMG from './IMAGES/image-ramsesmiron.png';
import './CSS/App.css';

const YOU = {
  name: 'juliusomo',
  img: juliusomoIMG,
};

function App() {

  const [newPostMsg, setNewPostMsg] = useState('');

  const [state, setState] = useState([
    {
      user: 'amyrobson',
      date: '1 month ago',
      contador: 12,
      msg: `Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.`,
      img: amyrobsonIMG,
      replies: [], 
    },
    {
      user: 'maxblagun',
      date: '2 weeks ago',
      contador: 5,
      msg: `Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!`,
      img: maxblagunIMG,
      replies: [
        {
          user: 'ramsesmiron',
          date: '1 week ago',
          contador: 4,
          msg: `If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.`,
          img: ramsesmironIMG,
        },
        {
          user: 'juliusomo',
          date: '2 days ago',
          contador: 2,
          msg: `I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.`,
          img: juliusomoIMG,
        }
      ], 
    }
  ])

  const Sumar = (typeNum, msg, userMsg, userName) => {
    if(typeNum === 1) {
      let index = state.findIndex((user) => user.msg === msg);
      let newListado = [...state];
      newListado[index].contador = newListado[index].contador + 1;
      console.log(newListado[index].contador);
      setState(newListado);
    } else {
      let newListado = [...state];
      let index = state.findIndex((user) => user.msg === userMsg);
      let indexReply = newListado[index].replies.findIndex((user) => user.msg === userName.msg);
      newListado[index].replies[indexReply].contador = newListado[index].replies[indexReply].contador + 1;
      console.log(newListado[index].replies[indexReply].contador);
      setState(newListado);
    }
  }

  const Restar = (typeNum, msg, contador, userMsg, userName) => {
    if(typeNum === 1 && contador) {
      let index = state.findIndex((user) => user.msg === msg);
      let newListado = [...state];
      newListado[index].contador = newListado[index].contador - 1;
      console.log(newListado[index].contador);
      setState(newListado);
    } else if (typeNum === 2 && contador) {
      let newListado = [...state];
      let index = state.findIndex((user) => user.msg === userMsg);
      let indexReply = newListado[index].replies.findIndex((user) => user.msg === userName.msg);
      newListado[index].replies[indexReply].contador = newListado[index].replies[indexReply].contador - 1;
      console.log(newListado[index].replies[indexReply].contador);
      setState(newListado);
    }
  }

  const newPost = (msg) => {
    const post = {
      user: YOU.name,
      date: 'Now',
      contador: 0,
      msg: msg,
      img: YOU.img,
      replies: [],
    }
    let newListado = [...state];
    if (msg) {
      newListado.unshift(post);
      setState(newListado);
    }
  }

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
          />
        )
      })}
      <form className="main-reply">
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
