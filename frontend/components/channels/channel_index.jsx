import React from 'react';
import ChannelIndexItem from './channel_index_item';
import DmIndexItem from './dm_index_item';
import { Link } from 'react-router-dom';


class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserChannels(this.props.currentUser.id);
        
    }


    toggleChannelForm(e) {
        const modalEle = document.getElementsByClassName("channel-form")[0];
        if (modalEle) {
            if (!modalEle.classList.contains("active-modal")) {
                modalEle.classList.add("active-modal");
            } else {
                modalEle.classList.remove("active-modal");
            }
        }
    }

    toggleDmForm(e) {
        const modalEle = document.getElementsByClassName("channel-form")[0];
        if (modalEle) {
            if (!modalEle.classList.contains("active-modal")) {
                modalEle.classList.add("active-modal");
            } else {
                modalEle.classList.remove("active-modal");
            }
        }
    }
    deleteChannel(channelId) {
       const destroyC = this.props.destroyChannel
       return (e => {
        e.preventDefault() 
        destroyC(channelId)
       })
    }
    render() {
        let channels = [];
        let channelList;
        let dmList;
        
        if (this.props.channels) {
            channels = this.props.channels;
            
            channelList = Object.values(channels).map((channel) => {
                if (["Mike", 'Joe', 'Emily', 'Steven'].includes(channel.title)) return;
                // console.log(channel.id)
                if ((channel.title === "General")) {
                    return (
                        <ChannelIndexItem
                            key={channel.id}
                            channelId={channel.id}

                            channel={channel}
                            currentUser={this.props.currentUser}

                        // deleteChannel={this.props.destroyChannel(channel.id)}
                        />

                    )
                }
                return (
                    <>

                    <ChannelIndexItem
                        key={channel.id}
                        channelId={channel.id}
            
                        channel={channel}
                        currentUser={this.props.currentUser}
                        
                        // deleteChannel={this.props.destroyChannel(channel.id)}
                    />
                    <div>
                            <button id="x-Btn" onClick={this.deleteChannel(channel.id)}>
                                <img
                                    src="https://image.flaticon.com/icons/png/512/1617/1617296.png"
                                    className="thread-img"
                                />
                            </button>
                    </div>
                    </>
                );
            });
        }
        if (this.props.channels) {
            channels = this.props.channels;

            dmList = Object.values(channels).map((channel) => {
                if (!["Mike", 'Joe', 'Emily', 'Steven'].includes(channel.title)) return;
                return (
                    <DmIndexItem
                        key={channel.id}
                        channel={channel}
                        currentUser={this.props.currentUser}
                        deleteChannel={this.props.destroyChannel}
                    />
                );
            });
        }
        

        return (
            <div>
                <div className="thread">
                    <img
                        src="https://image.flaticon.com/icons/svg/2810/2810945.svg"
                        className="thread-img"
                    /> 
                    <h1>Threads</h1>
                    

                </div>
                <div className="title-create">
                    {/* <div className="create-channel-form"> */}
                    <h3 className="channel-title">
                        <img
                            className="drop-button"
                            src="https://image.flaticon.com/icons/svg/60/60995.svg"
                        />
                        Channels
                    </h3>
                    <Link className="create-link" to="/main/channels/create">
                        <img
                            className="create-button"
                            src="https://ya-webdesign.com/images600_/png-white-plus-sign-6.png"
                            onClick={this.toggleChannelForm}
                        />
                    </Link>
                    {/* </div> */}
                </div>
                <div className="channel-title-div">
                <ul className="channelname-ul">{channelList}</ul>
                {/* <div className="whole-placeholder"> */}
                    <ul className="channeltitle-ul">
                        {/* <li className="channel-placeholder"># friends</li>
                        <li className="channel-placeholder"># Circle</li>  */}
                     </ul> 
                </div>
                    <div className="dm-title">
                        <h3 className="channel-title">Direct Messages</h3>
                        {/* <Link className="create-link" to="/main/channels/create">
                        <img
                            className="create-button"
                            src="https://ya-webdesign.com/images600_/png-white-plus-sign-6.png"
                            onClick={this.toggleDmForm}
                        />
                        </Link> */}
                        {/* <Link className="create-link" to="/main/channels/create">
                        <img
                            className="create-button"
                            src="https://ya-webdesign.com/images600_/png-white-plus-sign-6.png"
                            onClick={this.toggleDmForm}
                        />
                        </Link> */}
                        {/* <img
                            className="dm-button"
                            src="https://ya-webdesign.com/images600_/png-white-plus-sign-6.png"
                        /> */}
                        
                    </div>
                    <div className="dm-content">
                    <ul className="dmname-ul">
                        <li className="dm-placeholder">
                            {/* <img
                                    src="https://image.flaticon.com/icons/svg/319/319873.svg"
                            className="button-img"
                            /> 
                                Scoop */}
                                {dmList}

                        </li>
                        {/* <li className="dm-placeholder">
                            <img
                                    src="https://image.flaticon.com/icons/svg/319/319873.svg"
                                className="button-img"
                            /> 
                                Mike
                        </li>
                        <li className="dm-placeholder">
                            <img
                                    src="https://image.flaticon.com/icons/svg/319/319873.svg"
                                className="button-img"
                            /> 
                                Adam
                        </li>
                        <li className="dm-placeholder">
                            <img
                                    src="https://image.flaticon.com/icons/svg/319/319873.svg"
                                className="button-img"
                            /> 
                                Steven
                        </li>
                        <li className="dm-placeholder">
                            <img
                                    src="https://image.flaticon.com/icons/svg/319/319873.svg"
                                className="button-img"
                            /> 
                                Emily
                        </li>
                        <li className="dm-placeholder">
                            <img
                                    src="https://image.flaticon.com/icons/svg/319/319873.svg"
                                className="button-img"
                            /> 
                                Satomi
                        </li>
                        <li className="dm-placeholder">
                            <img
                                    src="https://image.flaticon.com/icons/svg/319/319873.svg"
                                className="button-img"
                            /> 
                                Christian
                        </li> */}
                    </ul>
                </div>
                </div>
            // </div>
        );
    }
};

export default ChannelIndex;