import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import firebase, {auth, provider} from './firebase';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: null}
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({user});
      }
    })
  }
  logOutUser = () => {
    firebase.auth().signOut()
    .then(window.location = "/");
  }
  render() {
    return (
      <Router>
        <div className="app ">
          <div className='w-fit mx-auto'>
            <nav className="main-nav flex flex-col justify-center items-center bg-[#0D0D0D] p-12  rounded-full ">
            <Link to="/"><h1 className=' text-lg font-display text-[#F2F2F2] text-center'>CHA CHA CHAT-APP</h1></Link><br/>
              {this.state.user &&
                <a href='#!' onClick={this.logOutUser} className="text-[#ff0000]">Log out</a>
              }
              
            </nav>
          </div>
          
        </div>
        <Switch>
          <Route path="/" exact render={() => <App user={this.state.user}/>} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
