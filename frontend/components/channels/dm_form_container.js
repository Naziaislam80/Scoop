import { connect } from 'react-redux';
import DmForm from './dm_form';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        channel: {
            title: "",
        },
        formType: 'Create'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createChannel: (channel) => dispatch(createChannel(channel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DmForm);