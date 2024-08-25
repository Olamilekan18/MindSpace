import React, { useEffect } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCoffee, faHome, faLock } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  return (
    <body>
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
           <i> <FontAwesomeIcon icon={faUser} /></i>
              <input type="text" placeholder="Username"required />
            </div>
            <div className="input-field">
           <i> <FontAwesomeIcon icon={faLock} /></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" required/>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
            <a href="#" className="social-icon">
      <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faDiscord} />
  </a>
            </div>
          </form>

          <form className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
            <i> <FontAwesomeIcon icon={faUser} /></i>
              <input type="text" placeholder="Username"required /><input type="text" placeholder="Username" required/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required/>
            </div>
            <div className="input-field">
            <i> <FontAwesomeIcon icon={faLock} /></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" required/>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.
            </p>
            <button className="btn transparent" id="sign-up-btn">Sign Up</button>
          </div>
          <img src="src\assets\log.svg" className="image" alt="log" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.
            </p>
            <button className="btn transparent" id="sign-in-btn">Sign In</button>
          </div>
          <img src="src\assets\register.svg" className="image" alt="register" />
        </div>
      </div>
    </div>
    </body>
  );
};

export default Login;
