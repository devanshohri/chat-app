import React from "react";
import firebase from "../firebase";
import 'firebase/compat/database';

class Chatbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: []
        };
    }
    componentDidMount(){
        const chatRef = firebase.database().ref('general');
        chatRef.on('value', snapshot => {
            const getChats = snapshot.val();
            let ascChats = [];
            for (let chat in getChats){
                if(getChats[chat].message !== ''){
                    ascChats.push({
                        id: chat,
                        message: getChats[chat].message,
                        user: getChats[chat].user,
                        date: getChats[chat].timestamp,
                    });
                }
            }
            const chats = ascChats;
            this.setState({chats});
        });
    }
    render() {
        return(
            <div className="chatbox bg-[#0d0d0d] flex justify-stretch max-w-[930px] min-h-[60vh] rounded-t-3xl p-6 mx-auto mb-0 mt-8  text-white">
                <ul className="chat-list list-none list-outside text-align: left ">
                    {this.state.chats.map(chat => {
                        const postDate = new Date(chat.date);
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
                        const d = new Date();

                        return(
                            <li key={chat.id} className="flex text-left px-4 py-2 rounded-lg rounded-br-none bg-[#0d0d0d] border-2 border-[#078C03] text-white space-y-2 text-sm max-w-xs m-5  order-1 items-end">
                                <em className="font-display">{postDate.getDate() + monthNames[d.getMonth()]+ ' ' +(postDate.getHours())+':'+(postDate.getMinutes())}</em>&nbsp;
                                <strong className="text-[#F066F2] font-display">{chat.user}:</strong> &nbsp; &nbsp;
                                {chat.message}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Chatbox;