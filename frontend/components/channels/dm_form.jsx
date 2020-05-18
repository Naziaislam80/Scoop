import React from "react";

class DmForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.channel;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelCreate = this.cancelCreate.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props
            .createChannel(this.state)
            .then((res) => {
                // debugger
                this.props.history.push(`/main/channels/${Object.keys(res.channel)[0]}`)
            });
    }

    cancelCreate(e) {
        e.preventDefault();
        this.props.history.push(`/main/channels/1`);
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

    render() {
        return (
            <div
                className="channel-form"
                onClick={this.toggleDmForm}
            >
                <form
                    // className="channel-form"
                    onClick={(e) => e.stopPropagation()}
                    onSubmit={this.handleSubmit}
                >
                    <div className="x-button-container">
                        <p className="x-button" onClick={this.cancelCreate}>
                            <img
                                src="https://image.flaticon.com/icons/svg/786/786662.svg"
                                className="x-img"
                                onClick={this.toggleDmForm}
                            />
                        </p>
                    </div>
                    <div className="create-header">
                        <h2 className="create-title">Direct Message</h2>
                    </div>

                    <div className="create-form-info">
                        <p className="create-detail-info">
                            Start a conversation
                        </p>
                    </div>

                    <label className="input-label">
                        {/* <p className="input-info title">Channel Name</p> */}
                        <input
                            className="create-input create-input-field"
                            type="text"
                            value={this.state.title}
                            placeholder="channel name"
                            onChange={this.update("title")}
                        />
                    </label>

                    <button className="form-button">{this.props.formType}</button>
                </form>
            </div>
        );
    }
}

export default DmForm;