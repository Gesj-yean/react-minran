import { Login } from "views/login/login";
import { Register } from "views/login/register";
import "./App.less";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ResetPass } from "views/login/reset";
import { HomeIndex } from "views/home";

function App() {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/reset" element={<ResetPass></ResetPass>}></Route>
          <Route path="/home/*" element={<HomeIndex></HomeIndex>}></Route>
          <Route index element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
