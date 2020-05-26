import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class DmIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSelect = this.toggleSelect.bind(this);
        this.prevId;
        // this.removeChannel = this.removeChannel.bind(this);
        this.state = { channel: this.props.channel };
    }

    toggleSelect() {
        let selected = document.getElementById(this.props.channel.title);
        selected.setAttribute("id", "selected");
        if (this.state.channel.id !== this.props.match.params.channelId) {
            this.props.history.push(`/main/channels/${this.state.channel.id}`)
            window.location.reload();
        }
    }

    // removeChannel(e) {
    //     e.preventDefault();
    //     let modal = document.getElementById("deleteModal");
    //     modal.style.display = "none";
    //     this.props
    //         .deleteChannel(this.props.channel.id)


    // }


    // componentDidMount() {
    //     let modal = document.getElementById("deleteModal");
    //     let btn = document.getElementById("x-Btn");
    //     let span = document.getElementsByClassName("modal-option2")[0];
    //     let yes = document.getElementsByClassName("modal-option1")[0];
    //     if (btn) {
    //         btn.onclick = function () {
    //             modal.style.display = "block";
    //         };
    //     };

    //     if (span) {
    //         span.onclick = function () {
    //             modal.style.display = "none";
    //         };
    //     }
    //     if (yes) {
    //         yes.onclick = this.removeChannel;
    //     }

    //     window.onclick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }
    //     };
    // }


    render() {
        // // debugger
        // let optionDelete;
        // let channelId = this.props.channel.id;
        // if (channelId = this.props.channel.id) {
        //     optionDelete =
        //         <>
        //             <button id="x-Btn">
        //                 <img
        //                     src="https://image.flaticon.com/icons/svg/2810/2810945.svg"
        //                     className="thread-img"
        //                 />
        //             </button>
        //             <div id="DeleteModal" className="modal">
        //                 <div className="modal-info">
        //                     <p className="modal-header">Are you sure you want to delete this channel?</p>
        //                     <button className="modal-option1">Yes</button>
        //                     <span className="modal-option2">No</span>
        //                 </div>
        //             </div>
        //         </>
        // }

        return (
           <div className="dmli-outer" id={this.props.channel.title}>
                    <Link
                        to={`/main/channels/${this.props.channel.id}`}
                        onClick={this.toggleSelect}
                    >
                        <li className="dmname-li" id={this.props.channel.title}>
                            <img
                                src="https://image.flaticon.com/icons/svg/319/319873.svg"
                                className="button-img"
                            /> {this.props.channel.title}
                        </li>
                    </Link>
            </div>

        );
    }
};
export default withRouter(DmIndexItem);