import React from 'react';
import './App.css';
import Chatbox from './components/Chatbox';
import {Link} from 'react-router-dom';
import firebase from './firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.message !== ''){
      const chatRef = firebase.database().ref('general');
      const chat = {
        message: this.state.message,
        user: this.props.user.displayName,
        timestamp: new Date().getTime()
      }
      chatRef.push(chat);
      this.setState({message: ''});
    }
  };

  render() {
    return (
      <div className="App ">
        {this.props.user && 
          <div className="allow-chat">
            <Chatbox />
            <form className='message-form bg-[#0d0d0d] flex justify-stretch max-w-[930px] rounded-b-3xl p-6 mx-auto text-white' onSubmit={this.onSubmit}>
              <input 
              type="text"
              name="message"
              id="message"
              value={this.state.message}
              placeholder="Enter a message..." 
              onChange={this.onChange}
              className="mt-1 block px-3 py-3 w-full bg-[#0D0D0D] border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-[#078C03] focus:ring-1 focus:ring-[#078C03]"
              />
              <button className="ml-6 font-bold">Send</button>
            </form>
          </div>
        }
        {!this.props.user &&
          <div className="disallow-chat bg-cover bg-center bg-hero flex flex-col justify-end max-w-[930px] min-h-[80vh] rounded-3xl p-8 mx-auto mt-8  text-white">
              <h1 className="w-full text-left  text-3xl px-4 font-display">Wanna talk about why Käärijä should've won?</h1>
              <h3 className="w-full text-left text-2xl font-display px-4">We've got you</h3>
              <p className="w-5/6 text-left flex-end p-4">In an earnest effort to enhance the visual appeal of the landing page, I proactively devised relevant content to prevent any sense of emptiness. <br/> Please feel free to engage in discussions pertaining to your interests, as I hold no particular preference in the matter. However, I kindly request that all discourse maintains a civil and respectful tone. </p>
              <p className="p">
                <Link to="/login" className="bg-[#0D0D0D] text-lg font-bold text-[#0ABF04] m-1 px-6 py-2 rounded-2xl hover:drop-shadow-md">Login</Link> or <Link to="/register" className="bg-[#F2F2F2] text-lg font-bold text-[#0D0D0D] m-1 px-6 py-2 rounded-2xl hover:drop-shadow-md">Register</Link><br/><br/> to start chatting!
              </p>
          </div>
        }
      </div>
    );
  }
}

export default App;