import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Forgot from "./components/Forgot";
import ForgotEmail from "./components/ForgotEmail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route exact path="/forgot" element={<Forgot />} />
        </Routes>
        <Routes>
          <Route exact path="/forgot-email" element={<ForgotEmail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
