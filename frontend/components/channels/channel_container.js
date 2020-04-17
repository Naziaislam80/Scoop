import { connect } from "react-redux";
import Channel from "./channel";
import { fetchChannelMessages, receiveMessage, receiveMessages } from "../../actions/message_actions";
import { fetchChannels, fetchChannel, createChannel, destroyChannel } from "../../actions/channel_actions";
import { fetchMessages } from '../../actions/message_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => { 
    // debugger
    return {
        channelId: ownProps.match.params.channelId,
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels, 
        channel: state.entities.channels[ownProps.match.params.channelId],
        messages: Object.values(state.entities.messages)
        // // users: state.entities.users,
        // // channel: state.entities.channels[ownProps.match.params.channelId],
        // // currentUserId: state.session.id

        // currentUser: state.entities.users[state.session.id],
        // channel: state.entities.channels[ownProps.match.params.channelId], //update to fetch all the channel
        // messages: Object.values(state.entities.messages)
    }; 
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        fetchChannels: () => dispatch(fetchChannels()),

        fetchChannelMessages: (channelId) => {
            return (dispatch(fetchChannelMessages(channelId)))
        },
        receiveMessage: (message) => {
            return (dispatch(receiveMessage(message)))
        },
        receiveMessages: (message) => {
            return (dispatch(receiveMessages(message)))
        },
        // fetchMessages: () => dispatch(fetchMessages()),
        destroyChannel: (id) => dispatch(destroyChannel(id))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));