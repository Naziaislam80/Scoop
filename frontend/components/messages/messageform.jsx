import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "", channel_id: this.props.currentChannelId, user_id: this.props.currentUser.id};
        this.currentChannel = "";
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    update(field) { 
        // debugger
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    componentDidMount() {
        this.currentChannel = this.props.currentChannelId
    }
    
    handleKeyPress(e) {
        // debugger
        // e.preventDefault();
        // debugger
        // App.currentChannel({ message: this.state.body });
        // this.setState({ body: "" });
        if (e.key === "Enter") {
            // debugger 
            this.props.createMessage(this.state)
                .then(() => this.setState({ body: "", channel_id: this.currentChannel }));
            window.location.reload();
        }
    }


    render() {
        let name;
        this.props.channel ? name = this.props.channel.title : null
        // let title = "";
        // if  (this.props.channel) {
        //     name = `#${this.props.channel.title}`;

        // } else if ()

        return (
            <div className="outer-messageform-div">
                <form

                    
                    className="messageform"
                >
                    <input 
                        onKeyPress={this.handleKeyPress}
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder={`Message #${name}`}
                        className="message-box"
                        
                    />
                    <input type="submit" className="messageform-submit" />
                </form>
            </div>
        );
    }
}

export default MessageForm;