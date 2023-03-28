import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import MainForm from "./components/MainForm";

function App() {
  return (
    <div
      className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Routes>
        <Route index element={<MainForm/>} />
        <Route path="/chat/:roomName" element={<ChatRoom/>} />
        <Route path="*" element={<h1>404 not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
