import React from "react";
import firebase from "../firebase.js";
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            error: null,
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const {email, username, password, error} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({error});
            });
    }

    render() {
        const {email, username, password, error} = this.state;
        return (
            <div className="auth-container bg-[#0d0d0d] flex flex-col justify-centre max-w-[930px] min-h-[80vh] rounded-3xl py-24 mx-auto mt-8  text-white">
                <h1 className="w-full text-center text-3xl px-4 font-display">Login</h1>
                {error && <p className="error-message">{error.message}</p>}
                <form onSubmit={this.handleSubmit} className="flex flex-col justify-centre p-8 mx-auto mt-2">
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" id="email" value={email} onChange={this.handleChange}
                        class="mt-1 block px-3 py-2 bg-[#0D0D0D] border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-[#078C03] focus:ring-1 focus:ring-[#078C03]
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-red-500 invalid:text-red-600
                        focus:invalid:border-red-500 focus:invalid:ring-red-500">    
                    </input>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password" 
                        value={password}
                        class="mt-1 block px-3 py-2 bg-[#0D0D0D] border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-[#078C03] focus:ring-1 focus:ring-[#078C03]
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-red-500 invalid:text-red-600
                        focus:invalid:border-red-500 focus:invalid:ring-red-500"
                        onChange={this.handleChange}
                        >
                    </input>
                    <button className="submit border border-[#0ABF04] bg-[#0d0d0d] font-bold text-[#0ABF04] px-4 py-2 m-4 rounded-2xl hover:drop-shadow-md">Login</button>
                    <p className="my-4">Don't have an account?  <Link to="/register" className="login-btn bg-[#F2F2F2] text-[#0D0D0D] px-4 py-2 rounded-2xl hover:drop-shadow-md">Register Here</Link></p>
                </form>
            </div>
        );
    }
}

export default Login;