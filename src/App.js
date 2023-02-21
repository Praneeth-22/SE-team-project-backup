import "./App.css";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Login from "./Components/LoginFeature/Login";
import MainPage from "./Components/MainPage";
import Category from "./Components/Caterogy";
import SignUp from "./Components/LoginFeature/SignUp";
import Chat from "./Components/Chat/Chatpage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
