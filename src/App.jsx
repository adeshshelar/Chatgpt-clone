import './App.css'
import gptLogo from './assets/chatgptLogo.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImg from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai.js';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");

  const handleSend = async() => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (
    <div className="App">
     
      <div className="sidebar">

        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className='brand'>ChatGPT</span>
          </div>
          <button className='midBtn'><img src={addBtn} alt="" className='addBtn'/>New Chat</button>
          <div className="upperSideBottom">
            <button className='query'><img src={msgIcon} alt="Query" />What is Programming</button>
            <button className='query'><img src={msgIcon} alt="Query" />How to use an API</button>
          </div>
        </div>

        <div className="lowerSide">
            <div className="listItems"><img src={home} alt="" className="listitemsImg" />Home</div>
            <div className="listItems"><img src={saved} alt="" className="listitemsImg" />Saved</div>
            <div className="listItems"><img src={rocket} alt="" className="listitemsImg" />Upgrade to Pro</div>
        </div>  
      </div>

      <div className="main">
        <div className="chats">
            <div className="chat">
              <img className='chatImg' src={userIcon} alt="" /><p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam, molestiae quae blanditiis dolores libero eum ducimus ratione earum iusto?</p>
            </div>
            <div className="chat bot">
              <img className='chatImg' src={gptImg} alt="" /><p className='txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, saepe ipsam. Itaque velit maxime voluptas similique dolore fugit libero omnis, mollitia praesentium unde architecto, adipisci, cumque suscipit dolores minima ullam minus? Optio modi consectetur cupiditate numquam sit saepe adipisci ex. Aliquam itaque asperiores unde quas nulla quaerat assumenda quis hic deserunt aliquid, dolorum cumque alias laboriosam excepturi beatae ab reprehenderit eius laudantium est odit. Commodi reprehenderit repellat placeat fugit, laudantium numquam totam fugiat, suscipit accusamus iste sint voluptas dolorem animi cumque error voluptates dignissimos molestias impedit nulla cum. Ipsam optio libero quaerat voluptatibus maxime odit debitis beatae nostrum accusantium voluptas.</p>
            </div>

            <div className="chat">
              <img className='chatImg' src={userIcon} alt="" /><p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam, molestiae quae blanditiis dolores libero eum ducimus ratione earum iusto?</p>
            </div>
            <div className="chat bot">
              <img className='chatImg' src={gptImg} alt="" /><p className='txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, saepe ipsam. Itaque velit maxime voluptas similique dolore fugit libero omnis, mollitia praesentium unde architecto, adipisci, cumque suscipit dolores minima ullam minus? Optio modi consectetur cupiditate numquam sit saepe adipisci ex. Aliquam itaque asperiores unde quas nulla quaerat assumenda quis hic deserunt aliquid, dolorum cumque alias laboriosam excepturi beatae ab reprehenderit eius laudantium est odit. Commodi reprehenderit repellat placeat fugit, laudantium numquam totam fugiat, suscipit accusamus iste sint voluptas dolorem animi cumque error voluptates dignissimos molestias impedit nulla cum. Ipsam optio libero quaerat voluptatibus maxime odit debitis beatae nostrum accusantium voluptas.</p>
            </div>

            <div className="chat">
              <img className='chatImg' src={userIcon} alt="" /><p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam, molestiae quae blanditiis dolores libero eum ducimus ratione earum iusto?</p>
            </div>
            <div className="chat bot">
              <img className='chatImg' src={gptImg} alt="" /><p className='txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, saepe ipsam. Itaque velit maxime voluptas similique dolore fugit libero omnis, mollitia praesentium unde architecto, adipisci, cumque suscipit dolores minima ullam minus? Optio modi consectetur cupiditate numquam sit saepe adipisci ex. Aliquam itaque asperiores unde quas nulla quaerat assumenda quis hic deserunt aliquid, dolorum cumque alias laboriosam excepturi beatae ab reprehenderit eius laudantium est odit. Commodi reprehenderit repellat placeat fugit, laudantium numquam totam fugiat, suscipit accusamus iste sint voluptas dolorem animi cumque error voluptates dignissimos molestias impedit nulla cum. Ipsam optio libero quaerat voluptatibus maxime odit debitis beatae nostrum accusantium voluptas.</p>
            </div>
        </div>
        
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a Message' value={input} onChange={(e) => {setInput(e.target.value)}} /><button className='send' onClick={handleSend}><img src={sendBtn} alt="send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people ,places or facts. ChatGPT August 20 version</p>
        </div>

      </div>
    </div>
  )
}

export default App
