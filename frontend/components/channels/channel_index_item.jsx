import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class ChannelIndexItem extends React.Component {
    constructor(props) {

        super(props);
        this.toggleSelect = this.toggleSelect.bind(this);
        this.prevId;

        // this.removeChannel = this.removeChannel.bind(this);
        // this.openForm = this.openForm.bind(this);
        // this.noForm = this.noForm.bind(this);
        this.state = { 
            channel: this.props.channel
            
        };
        
    }
    // componentDidMount() {
    //     // fetchUserChannels
    //     this.props.fetchUserChannels(this.props.currentUser.id);
    //     // console.log(this.props);

    // }

    toggleSelect() {
        // debugger
        let selected = document.getElementById(this.props.channel.title);
        selected.setAttribute("id", "selected");
        if (this.state.channel.id !== this.props.match.params.channelId) {
            this.props.history.push(`/main/channels/${this.state.channel.id}`)
            window.location.reload();
            // let btn = document.getElementById("x-Btn");
            // btn.style.display = "flex";
            // debugger
            // this.props.fetchUserChannels(this.props.currentUser.id);
        }
        
        // this.props.fetchChannel(this.state.channel.id);
        // debugger
    }

    // removeChannel(e) {
    //     // debugger
    //     e.preventDefault();
    //     let modal = document.getElementById("DeleteModal");
    //     modal.style.display = "none";
    //     this.props
    //         .deleteChannel(this.props.channelId)
    // }
    
    // openForm(e) {
    //     e.preventDefault();
    //     let modal = document.getElementById("DeleteModal");
    //     modal.style.display = "block";
    // }
    // noForm(e) {
    //     e.preventDefault();
    //     let modal = document.getElementById("DeleteModal");
    //     modal.style.display = "none";
    
    // }



    // componentDidMount() {
    //     let modal = document.getElementById("DeleteModal");
    //     let btn = document.getElementById("x-Btn");
    //     let no = document.getElementsByClassName("modal-option2")[0];
    //     let yes = document.getElementsByClassName("modal-option1")[0];
    //     if (btn) {
    //         btn.onClick = function () {
    //             debugger
    //             modal.style.display = "block";
    //         };
    //     };

    //     if (no) {
    //         no.onClick = function () {
    //             modal.style.display = "none";
    //         };
    //     }
    //     if (yes) {
    //         yes.onClick = this.removeChannel;
    //     }

    //     window.onClick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }
    //     };
    // }

    render() {

        // debugger
        // let optionDelete;
        // let channelId = this.props.channel.id;
        // let general_channel = this.props.general_channel;
        // let isSelected = document.getElementById("selected")
        // if (channelId !== general_channel) {

        // // if (channelId) {
        //     optionDelete =
        //         <>
        //             <button id="x-Btn" onClick={this.openForm}>

        //                 <img
        //                     src="https://image.flaticon.com/icons/png/512/1617/1617296.png"
        //                     className="thread-img"
        //                 />
        //             </button>
        //             <div id="DeleteModal" className="modal">
        //                 <div className="modal-info">
        //                     <p className="modal-header">Are you sure you want to delete this channel?</p>
        //                 <button className="modal-option1" onClick={this.removeChannel}>Yes</button>
        //                 <button className="modal-option2" onClick={this.noForm}>No</button>
        //                 </div>
        //             </div>
        //         </>
        // }
        return (
            <div className="channelli-outer" id={this.props.channel.title}>
                <Link
                    to={`/main/channels/${this.props.channel.id}`}
                    onClick={this.toggleSelect}
                >
                    <li className="channelname-li" id={this.props.channel.title}>
                        # {this.props.channel.title}
                        {/* {optionDelete} */}

                    </li>
                </Link>
            </div>
        );
    }
};
export default withRouter(ChannelIndexItem);
