
import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchUserChannels, destroyChannel, createChannel } from '../../actions/channel_actions';
import { fetchMessages } from '../../actions/message_actions';
const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // channelId: ownProps.match.params.channelId,
        // currentChannel: ownProps.match.params.channelId,
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels,
        general_channel: state.entities.users.channelId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannel: id => dispatch(fetchChannel(id)),
        fetchUserChannels: userId => dispatch(fetchUserChannels(userId)),
        destroyChannel: id => dispatch(destroyChannel(id)),
        createChannel: channel => dispatch(createChannel(channel)),
        fetchMessages: () => dispatch(fetchMessages())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);