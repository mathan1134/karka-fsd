import React, { useState } from "react";

const Chat = () => {
    const [message, setMessage] = useState("");
    const [messagePairs, setMessagePairs] = useState([]);

    const handleMessage = (e) => {
        e.preventDefault();
        if (message.trim() !== "") {
            let response = "";
            if (message === "hi") {
                response = "hi user";
            } else if (message === "good morning") {
                response = "good morning user";
            }  else if (message === "bye") {
                response = "Thank you to spend the time with me";
            }
            else {
                response = "i could't understand ur message";
            }
            const newMessagePairs = [...messagePairs, { userMessage: message, response }];
            setMessagePairs(newMessagePairs);
            setMessage('');
        }
    };

    return (
        <div style={{top:"0px"}} className="chat_head">
        <div className="chat_main">
            <div style={{padding:"15px", position:"sticky",top:"0",borderBottom: '1px solid #ccc' ,backgroundColor:" rgb(119, 23, 197)",color:"white"}}>
            <h2 style={{ marginLeft: "30%" }}>Random Chat</h2>
            </div>
            <div  className="chat_line"></div>
                {messagePairs.map((pair, index) => (
                    <div key={index} className="chat_message_pair">
                        <div className="chat_inputuser">{pair.userMessage}</div>
                        <div className="chat_response">{pair.response}</div>
                    </div>
                ))}

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
        </div>
    );
};

export default Chat;
