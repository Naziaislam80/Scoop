import { connect } from "react-redux";
import MessageForm from "./messageform";
import { withRouter } from "react-router-dom";
import { createMessage } from "../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        currentChannelId: ownProps.match.params.channelId,
        currentUser: state.entities.users[state.session.id],

        channel: state.entities.channels[ownProps.match.params.channelId]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (message) => dispatch(createMessage(message))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));


