import React from "react";
import { FaUser } from "react-icons/fa";

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.bottom = React.createRef();
        this.state = { channel_id: this.props.currentChannelId };

    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.match.params.channelId !== this.state.channel_id) {
            this.props.fetchChannelMessages(this.state.channel_id)
                .then(() => {
                    // debugger;
                    // this.props.fetchUsers();
                })
                .then(() => {
                });
            window.location.reload();
        }
    };

    render() {
        const { message, user, fetchUsers, fetchUser } = this.props;

        const displayName = (user && user.username) ? user.username : message.username;

        let createdAt = message.created_at;


        return (
            <div className="message-div">
                <div className={"who-div user" + (message.user_id)}>
                    <FaUser />
                </div>
                <div className="messageinfo-div">
                    <div className="author-time">
                        <p className="message-author">{displayName}</p>
                        <p className="message-date">{createdAt}</p>
                    </div>
                    <p className="message-text">{message.body}</p>
                </div>
                <div ref={this.bottom}></div>
            </div>
        );
    }
}

export default Message;