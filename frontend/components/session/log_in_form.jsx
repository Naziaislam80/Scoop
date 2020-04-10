import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
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

    loginDemo(e) {
        e.preventDefault();
        const demo = {
            email: 'test@aol.com',
            password: 'password'
        }

        this.props.processForm(demo)
    };

    componentWillUnmount() {
        if (this.props.errors.length) {
            this.props.clearErrors();
        }
    };


    renderErrors() {
        let errors = null;
        if (this.props.errors.length > 0) { 
            errors = (
                <div className="error-msg">
                        <img
                            src={errorURL}
                            className="error-img" />
                <ul className="errors-list">
                    {this.props.errors.map((error, i) => {
                        return <li key={`error-${i}`}>{error}</li>;
                    })}
                </ul>
                </div>
            );
        }
        return errors;
    }
    render() {
        return (
            <div className='login-form'>
                <div className="outer-form-div"></div>
                <h2 className="form-title-name">Sign in to your workspace</h2>
                
                <h2 className="title">Enter your email and password.</h2>
                <form>
                    <label>
                    <input
                            className="login-input"
                            type='email'
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>
                    <input
                            className="login-input"
                            type='password'
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    
                    {this.renderErrors()}
                    <button className="login-button" onClick={this.handleSubmit}>Continue</button>
                </form>
                
                <div className="demo">
                    <p>
                        Try out Scoop as a&nbsp;
                        <Link to="/dashboard" className="demo-link" onClick={this.loginDemo}>
                            Demo User
                        </Link>
                    </p>
                </div>

            </div>
            
        );

    }
};

export default LogInForm;