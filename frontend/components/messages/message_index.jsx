import React from 'react';

class MessageIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMessages(this.props.messageIds)
    }

    render() {
        return (<h1> message index component</h1>);
    }
}

export default MessageIndex;