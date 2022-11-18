import React, {useState} from 'react';
import Comment from './COMPONENTS/Comment';
import amyrobsonIMG from './IMAGES/image-amyrobson.png';
import juliusomoIMG from './IMAGES/image-juliusomo.png';
import './CSS/App.css';

const YOU = {
  name: 'juliusomo',
  img: juliusomoIMG,
};

function App() {

  const [state, setState] = useState([
    {
      user: 'amyrobson',
      date: '1 month ago',
      contador: 12,
      msg: `Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.`,
      img: amyrobsonIMG,
      replies: [], 
    },
    // {
    //   user: 'maxblagun',
    //   date: '2 weeks ago',
    //   contador: 5,
    //   msg: `Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!`,
    //   img: './IMAGES/image-maxblagun.png',
    //   replies: [
    //     {
    //       user: 'ramsesmiron',
    //       date: '1 week ago',
    //       contador: 4,
    //       msg: `If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.`,
    //       img: './IMAGES/image-ramsesmiron.png',
    //     },
    //     {
    //       user: 'juliusomo',
    //       date: '2 days ago',
    //       contador: 2,
    //       msg: `I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.`,
    //       img: './IMAGES/image-juliusomo.png',
    //     }
    //   ], 
    // }
  ])

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
          />
        )
      })}
    </div>
  );
}

export default App;
