import React, { useState } from "react";

const Chat = () => {
    const [message, setMessage] = useState("");
    const [messagesList, setMessagesList] = useState([])
    const [list,newList]=useState([])


    const handleMessage = (e) => {
        e.preventDefault();
        if (message.trim() !== "") {
            setMessagesList([...messagesList,message] )
            if (message === "hi") {
                setMessagesList([...messagesList, "hi user"])
            }if(message === "goodmorning")(
                setMessagesList([...messagesList,"goodmorning user"])
            )
        }
        if(message.trim()!==""){
            newList([...list,message])
        }
    }

    return (
        <div className="chat_main">
            <div>
                {list.map((usr,index)=>(
                    <div className="chat_inputuser" key={index}>{usr}</div>
                ))}
            </div>
            <div className="chat_responses">
                {messagesList.map((msg, index) => (
                    <div key={index} className="chat_response">{msg}</div>
                ))}
            </div>
            <form className="chat_form" onSubmit={handleMessage}>
                <input
                    className="chat_input"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="chat_button" type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
