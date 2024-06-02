import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [showPass, setshowPass] = useState(false);
    return (
        <div className="login-page">
            <div className="left"></div>
            <div className="right">
            <div className="card">
            <div className="login-details">
                <div className="heading">
                    <h1>Login</h1>
                </div>
                <div className="fields">
                <form >
                    <label>
                        <h3>Email</h3>
                        <input type="email" placeholder="Enter email"/>
                    </label>
                    <label>
                        <h3>Password</h3>
                        <div className="password-field">
                            <input type={showPass?"text":"password"} placeholder="Enter password"/>
                            <button type="button" onClick={()=>{setshowPass(!showPass)}}><img style={{width: "2vw",}} src={showPass?require("./utils/hide.png"):require("./utils/visibility.png")} alt="" /></button>
                        </div>
                        <div className="options">
                        <Link to="/signup"><p>Don't have an account? Sign Up</p></Link>
                        <Link to="/forgot"><p>Forgot password ?</p></Link>
                        </div>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default Login;