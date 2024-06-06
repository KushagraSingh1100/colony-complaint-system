import "./Forgot.css";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className="forgot-page">
      <div className="left"></div>
      <div className="right">
        <div className="card">
          <div className="heading">
            <h1>Forgot Password</h1>
          </div>
          <div className="fields">
            <form>
              <label>
                <h3>Enter registered phone number</h3>
                <input type="text" placeholder="Enter phone number" />
                <div className="options">
                  <Link to="/forgot-email">
                    <p>Get OPT via Email</p>
                  </Link>
                  <Link to="/">
                    <p>Try Login</p>
                  </Link>
                </div>
              </label>
              <button className="login-btn" type="submit">
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
