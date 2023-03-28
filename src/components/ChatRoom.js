import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { SendIcon } from "./common/icons/index";

const ChatRoom = () => {
  const { state } = useLocation();

  const [message, setMessage] = useState("");
  const [allMessages, setAllMassages] = useState([]);

  const randomId = function (length = 6) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const newMsg = {
      timeStamp: new Date(),
      msgId: randomId(10),
      message,
      name: state?.name,
    };

    setAllMassages([...allMessages, newMsg]);
  };

  return (
    <div className="py-4 m-5 w-50 shadow bg-white text-dark border rounded container">
      <div className="text-center px-3 mb-4 text-capitalize">
        <h1 className="text-warning mb-4">{`${
          (state?.room).charAt(0).toUpperCase() + state?.room.slice(1).replace("-", " ")
        } Chat Room`}</h1>
      </div>
      <div
        className="bg-light boredr rounded p-3 mb-4"
        style={{ height: "450px", overflow: "scroll" }}
      >
        {allMessages.map((msg, index) => {
          return state?.name === msg.name ? (
            <div key={index} className="row justify-content-end pl-5">
              <div className="d-flex flex-column align-item-end m-2 shadow p-2 bg-info border rounded w-auto">
                <div>
                  <strong className="m-1">{msg?.name}</strong>
                  <small className="text-muted">2 minutes ago</small>
                </div>
                <h4 className="m-1">{msg?.message}</h4>
              </div>
            </div>
          ) : (
            <div className="row justify-content-start">
              <div className="d-flex flex-column m-2 p-2 shadow bg-white border rounded w-auto">
                <div>
                  <strong className="m-1">Raj</strong>
                  <small className="text-muted m-1">2 minutes ago</small>
                </div>
                <h4 className="m-1">Hello there</h4>
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control bg-light"
            name="message"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="btn btn-warning mx-2">
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;
