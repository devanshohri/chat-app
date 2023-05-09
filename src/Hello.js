import React from "react";

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