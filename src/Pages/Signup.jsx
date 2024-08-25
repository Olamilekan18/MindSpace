import React, { useState } from 'react';
// import '../Signup.css'
import '../App.css'
const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
        } else {
            console.log('Form submitted successfully', formData);
            // You can add form submission logic here
        }
    };

    return (
        <div className="registration-container">
            <main Name="container">
        <h2>Login</h2>
        <form action="">
            <div className="input-field">
                <input type="text"
                 name="username" 
                 id="username"
                    placeholder="Enter Your Username"
                    value={formData.username}
                       onChange={handleChange}
                      required/>
                <div className="underline"></div>
            </div>
            <div className="input-field">
                <input type="password"
                 name="password" 
                 id="password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                        onChange={handleChange}
                        required/>
                <div className="underline"></div>
            </div>

            <input type="submit" value="Continue"/>
        </form>

        <div className="footer">
            <span>Or Connect With Social Media</span>
            <div className="social-fields">
                <div className="social-field twitter">
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                        Sign in with Twitter
                    </a>
                </div>
                <div className="social-field facebook">
                    <a href="#">
                        <i className="fab fa-facebook-f"></i>
                        Sign in with Google
                    </a>
                </div>
            </div>
        </div>
    </main>
        </div>
    );
};

export default Registration;

// import React, { useState } from 'react';
// import { auth } from '../firebaseConfig';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//             navigate('/home');
//         } catch (error) {
//             console.error('Error signing up:', error.message);
//         }
// value={formData.password}
//                         onChange={handleChange}
//                         required
// //     };

//     return (
//         <div>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSignup}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;
