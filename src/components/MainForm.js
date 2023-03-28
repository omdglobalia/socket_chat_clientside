import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainForm = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    room: "",
  });

  const handleChange = (e) => {
    setError("");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!data.name) {
      setError("Enter your name");
      return false;
    }
    if (!data.room) {
      setError("Select your room");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      navigate(`/chat/${data.room}`, { state: data });
    }
  };

  return (
    <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <h2 className="text-warning mb-4">Welcome to Chat Club</h2>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control bg-light"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <select
            className="form-select bg-light"
            name="room"
            onChange={handleChange}
          >
            <option value="">Select Room</option>
            <option value="gaming">Gaming Room</option>
            <option value="coding">Coding Room</option>
            <option value="social-media">Social Media Room</option>
          </select>
        </div>
        <button type="submit" className="btn btn-warning w-100 mb-2">
          Submit
        </button>
        {error && <small className="text-danger">{error}</small>}
      </form>
    </div>
  );
};

export default MainForm;
