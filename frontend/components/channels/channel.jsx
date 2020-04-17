import React from "react";
import SideBar from "../sidebar/sidebar_container";
import MessageContainer from "../messages/message_container";
import MessageFormContainer from "../messages/messageform_container";
import MessageForm from "../messages/messageform";



class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentChannel: this.props.channel,
            channelMessages: {},
            currentId: null
        }
        this.getCurrentChannel = this.getCurrentChannel.bind(this);
        this.bottom = React.createRef();


    }

    //     this.channelId = parseInt(props.match.params.channelId);
    //     let channelMessages = this.props.fetchChannelMessages(this.channelId);
    //     this.getCurrentChannel = this.getCurrentChannel.bind(this);
    //     this.bottom = React.createRef();
    // }


    getCurrentChannel(channelId) {
        if (App.currentChannel) {
            App.currentChannel.unsubscribe();
        }
        const { receiveMessage, receiveMessages } = this.props;
        App.currentChannel = App.cable.subscriptions.create(
            { channel: "ChatChannel", id: `${channelId}` },
            // { channel: "ChatChannel", id: channelId },
            {
                received: data => {
                    // debugger
                    switch (data.type) {
                        case "message":
                            receiveMessage(data.message); 
                            break;
                        case "messages":
                            receiveMessages(data.messages);
                            break;

                        //     receiveMessage(JSON.parse(data.message)); //passing incoming
                        //     break;
                        // case "messages":
                        //     receiveMessages(JSON.parse(data.messages));
                        //     break;
                    }
                },
                speak: function (data) {
                    return this.perform("speak", data);
                },
                load: function () {
                    return this.perform("load");
                }
            }
        );
    }

    componentDidMount() {
    //   debugger
      const { channelId } = this.props;
      
    //   this.props.fetchChannels()
    //   debugger
        // this.state.currentChannel = this.props.channel[0];
        // debugger
        if (channelId) {

            this.props.fetchChannel(channelId)
                .then(res => {
                    this.props.fetchChannelMessages(Object.keys(res.channel)[0]);
                })


            // debugger

            // this.props.fetchChannelMessages(this.state.currentChannelId);
        }
//   debugger
    }
    //     const { fetchChannelMessages } = this.props;
    //     // const channelId = this.props.match.params.channelId;
    //     this.getCurrentChannel(this.channelId);
    //     fetchChannelMessages(this.channelId);
    // }


    componentDidUpdate(prevProps) {
        const stuff = this.props.match.params.channelId;
        if (this.bottom.current) {
            this.bottom.current.scrollIntoView();
        }
        if (this.state.currentId !== this.props.match.params.channelId) {
            this.setState({ currentId: this.props.match.params.channelId }, () => {
                this.props.fetchChannelMessages(stuff)
            })

        }
        // const channelId = this.props.match.params.channelId;
        // this.props.fetchChannelMessages(channelId)
    }

    render() {
        let messageList;
        let channelTitle;
        let channelSubscribers;
        const { messages,  channel } = this.props;
        // debugger
        if (channel) {
            channelTitle = channel.title;
        }
        //     // debugger
        //     // channelSubscribers = channel_subscribers.users
        //     // channelSubscribers = channel_subscribers.users.length;
        // }
        //  debugger
        messageList = messages.map(message => {
            // debugger
            // if (message.channel_id == channel) {
            // if (message.channel_id === this.channelId) {
                // debugger
                return <MessageContainer key={Math.random()} message={message} />;
            // }
        });
        return (
            <div className="channelfull-div">
            <div className="channel-div">
               
                <div className="outer-info">
                    <div className="topinfo-nav">
                        <div className="name-star">
                        <p className="channelName-p">#{channelTitle}
                            <img
                                src="https://image.flaticon.com/icons/svg/2087/2087983.svg"
                                className="star-img"
                            />
                        </p>
                        </div>
                        <div className="icons">
                            <div className="amount-p">
                            <p className="amoutpeople">
                                <img
                                    src="https://image.flaticon.com/icons/svg/2089/2089773.svg"
                                    className="person-img"
                                />
                            
                            </p>
                            </div>
                            <span className="the-line">|</span>
                                <div className="pin-amount">
                                <p className="pinamout">
                                <img
                                    src="https://image.flaticon.com/icons/svg/659/659771.svg"
                                    className="pin-img"
                                />
                                
                                </p>
                            </div>
                            </div>
                            {/* {channelSubscribers} */}
                        
                    </div>
                </div>
         
            <div className="messageandform-div">
                <ul className="whole-messagelist">{messageList}</ul>
                    <div ref={this.bottom}></div>
            </div>
            <MessageFormContainer channel={this.props.channel} />    
        </div>
        </div>
    
        );
    }
};

export default Channel;






