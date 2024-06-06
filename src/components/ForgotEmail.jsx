import { Link } from "react-router-dom";

const ForgotEmail = () => {
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
                <h3>Enter registered Email</h3>
                <input type="text" placeholder="Enter Email" />
                <div className="options">
                  <Link to="/forgot">
                    <p>Get OPT via phone number</p>
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

export default ForgotEmail;
