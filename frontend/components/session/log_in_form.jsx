import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }
    render() {
        return (
            <div className='login-form'>
                <h2>Log In!</h2>
                <form>
                    <label>Email:
                <input
                            type='text'
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                <input
                            type='password'
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        );

    }
};

export default LogInForm;