import React from "react";
//import firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello {this.props.name} {this.props.surname}!</p>
            </div>
        );
    }
}

export default Hello;