import React, {useState, useEffect} from "react";
import amyrobsonIMG from '../IMAGES/image-amyrobson.png';
import juliusomoIMG from '../IMAGES/image-juliusomo.png';
import maxblagunIMG from '../IMAGES/image-maxblagun.png';
import ramsesmironIMG from '../IMAGES/image-ramsesmiron.png';

export default function useComment() {
  const [newPostMsg, setNewPostMsg] = useState('');

  const YOU = {
    name: 'juliusomo',
    img: juliusomoIMG,
  };

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('list')) || [
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
      ]
  )

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
      newListado.push(post);
      setState(newListado);
    }
  }

  const newPostReply = (typeNum, msg, userMsg, userName) => {
    if (msg && typeNum === 1) {
      let index = state.findIndex((user) => user.msg === userMsg);
      let newListado = [...state];
      let newReply = {
        user: YOU.name,
        date: 'Now',
        contador: 0,
        msg: msg,
        img: YOU.img,
      }
      newListado[index].replies.push(newReply);
      setState(newListado);
    } else if (msg && typeNum === 2) {
      let index = state.findIndex((user) => user.msg === userMsg);
      let newListado = [...state];
      let indexReply = newListado[index].replies.findIndex((user) => user.msg === userName.msg);
      let newReply = {
        user: YOU.name,
        date: 'Now',
        contador: 0,
        msg: msg,
        img: YOU.img,
      }
      newListado[index].replies.splice(indexReply + 1, 0, newReply);
      setState(newListado);
    } else return;
  }

  const deletePost = (typeNum, msg, userMsg) => {
    if (typeNum === 1) {
      let index = state.findIndex((user) => user.msg === msg);
      let newListado = [...state];
      newListado.splice(index, 1);
      setState(newListado);
    } else {
      let index = state.findIndex((user) => user.msg === userMsg);
      let newListado = [...state];
      let indexReply = newListado[index].replies.findIndex((user) => user.msg === msg);
      newListado[index].replies.splice(indexReply, 1);
      setState(newListado);
    }
  }

  const editPost = (typeNum, newMsg, userMsg, msg) => {
    if (typeNum === 1) {
      let index = state.findIndex((user) => user.msg === userMsg);
      let newListado = [...state];
      newListado[index].msg = newMsg;
      setState(newListado);
    } else {
      let index = state.findIndex((user) => user.msg === msg);
      let newListado = [...state];
      let indexReply = newListado[index].replies.findIndex((user) => user.msg === userMsg);
      newListado[index].replies[indexReply].msg = newMsg;
      setState(newListado);
    }
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state));
  }, [state]);

  return [newPostMsg, setNewPostMsg, YOU, state, Sumar, Restar, newPost, newPostReply, deletePost, editPost];

}