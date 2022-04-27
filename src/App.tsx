import { Login } from "views/login";
import { Register } from "views/register";
import "./App.less";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ResetPass } from "views/resetPass.tsx";

function App() {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/reset" element={<ResetPass></ResetPass>}></Route>
          <Route index element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
