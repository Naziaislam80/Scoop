import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSelect = this.toggleSelect.bind(this);
        this.prevId;
        this.removeChannel = this.removeChannel.bind(this);
        this.state = { channel: this.props.channel };
    }

    toggleSelect() {
        let selected = document.getElementById(this.props.channel.title);
        selected.setAttribute("id", "selected");
        if (this.state.channel.id !== this.props.match.params.channelId) {
            this.props.history.push(`/main/channels/${this.state.channel.id}`)
        }
    } 

    removeChannel(e) {
        e.preventDefault();
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
        this.props

    }



    componentDidMount() {
        let modal = document.getElementById("myModal");
        let btn = document.getElementById("myBtn");
        let span = document.getElementsByClassName("close")[0];
        let yes = document.getElementsByClassName("modal-yes")[0];
        if (btn) {
            btn.onclick = function () {
                modal.style.display = "block";
            };
        };

        if (span) {
            span.onclick = function () {
                modal.style.display = "none";
            };
        }
        if (yes) {
            yes.onclick = this.removeChannel;
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

    render() {
        // debugger

        let canDelete;
        let channelId = this.props.channel.id;
        if (this.props.currentUser.id === this.props.channel.user_id) {
            canDelete =
                <>
                    <button id="myBtn">X</button>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <p className="modal-text">Confirm channel deletion:</p>
                            <button className="modal-yes">Yes</button>
                            <span className="close">No</span>
                        </div>
                    </div>
                </>
        }

        return (
            <div className="channelli-outer" id={this.props.channel.title}>
                <Link
                    to={`/main/channels/${this.props.channel.id}`}
                    onClick={this.toggleSelect}
                >
                    <li className="channelname-li" id={this.props.channel.title}>
                        # {this.props.channel.title}
                    </li>
                </Link>
                {canDelete}
            </div>
        );
    }
};
export default withRouter(ChannelIndexItem);