import { connect } from 'react-redux';
import MessageIndex from './message_index'
import { fetchMessages } from '../../actions/message_actions';
const mSTP = (state, ownProps) => {
    let messageIds;

    if (ownProps.channel) {
        messageIds = ownProps.channel.message_ids
    }
   
    return {
        messages: state.entities.messages,
        messageIds
    };
};

const mDTP = dispatch => {
   
    return {
        fetchMessages: (messageIds) => dispatch(fetchMessages(messageIds))
    };
};


export default connect(mSTP, mDTP)(MessageIndex);