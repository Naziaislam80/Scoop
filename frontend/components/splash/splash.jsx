import React from 'react';
import { Link } from 'react-router-dom';
class SplashContainer extends React.Component {
    constructor(props) {
        super(props);
        this.loginDemo = this.loginDemo.bind(this)
    }

    loginDemo() {
        const demo = {
            email: 'demo@scoop.com',
            password: 'winner1'
        }

        this.props.login(demo).then(
            () => this.props.history.push('/home')
        );
    };
    render() {
        return (
            
        <div className="homepage-whole-div">
            <div className="homepage-baby-div">
                <div className="homepage-header">
                    <h1 className="homepage-main-text">
                    WORK FROM HOME
                    </h1>
                    <p className="homepage-p-text">
                    Scoop brings the team together, wherever you are
                </p>
                <p className="homepage-text">
                    With all of your communication and tools in one place, remote teams will stay productive
                    no matter where you are working from. 
                </p>
                <ul className="homepage-link">
                    <Link className="try-scoop-link" to="/signup">
                        TRY SCOOP
                </Link>
                    <a className="try-demo-link" onClick={this.handleDemoUser}>
                        TRY DEMO
                </a>
                </ul>
                <span className="already">Already a member of Scoop? <Link className="already-link" to='login'>Sign in</Link>.</span>
            </div>
                <img
                    src={mainURL}
                    className="main-img"
                />
            </div>
            <div className="homepage-2-div">
                <h2 className="break-text">Break out of the inbox</h2>
                <p className="working-text">
                    Working in channels gives everyone on your team a shared view of
                    progress and purpose.
                </p>
                <iframe
                width="560" 
                height="315"
                    src="https://www.youtube.com/embed/FhW01ljEVH4"
                
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="slackvideo"
                className="slackvid"
                />

            </div>
                <div className="homepage-3-div">
                    <div className="features-div">
                        <img
                            src={squareURL}
                            className="square-img"
                        />
                        <h3>Conversations, organized</h3>
                        <p>
                            Instead of a single overstuffed inbox, conversations in Scoop
                            happen in dedicated spaces called channels.
                </p>
                    </div>
                    <div className="features-div">
                        <img
                            src={newsURL}
                            className="news-img"
                        />
                        <h3>Get looped in, not out</h3>
                        <p>
                            Scoop makes it simple to follow conversations or find important
                            information in an easily searchable archive.
                </p>
                    </div>
                    <div className="features-div">
                        <img
                            src="https://image.flaticon.com/icons/svg/651/651781.svg"
                            className="hand-img"
                        />
                        <h3>Give focus a chance</h3>
                        <p>
                            Unlike email, Scoop lets you choose which conversations are
                            most important — and which can wait.
                </p>
                    </div>
                    <section className='splash section-3'>
                        <div className='div3 first'>
                            <div className="splash3-content first">
                                <h2>Make the change to channels</h2>
                                <p>
                                    Productive teamwork happens in channels
                                    — organized spaces for everything
                                    related to a project, topic or team.
                            </p>
                            </div>
                            <video className='video1-tag' autoPlay loop muted>
                                <source src={video1URL} type='video/mp4' />
                            </video>
                        </div>
                        <div className='div3 second'>
                            <video className='video2-tag' autoPlay loop muted>
                                <source src={video2URL} type='video/mp4' />
                            </video>
                            <div className="splash3-content second">
                                <h2>Shared channels bring companies together</h2>
                                <p>
                                    Now channels can help you work as closely
                                    with external partners and clients as you
                                    do with teams down the hall.
                            </p>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="homepage-4-div">
                    <a
                        href=""
                        className="github-link"
                        target="_blank"
                    >
                        <img
                            src="https://image.flaticon.com/icons/svg/2111/2111432.svg"
                            className="github-img"
                        />
                    </a>

                    <a
                        href=""
                        className="linkedin-link"
                        target="_blank"
                    >
                        <img
                            src="https://image.flaticon.com/icons/svg/174/174857.svg"
                            className="linkedin-img"
                        />
                    </a>
                </footer>
        </div>   
        )
    }
};

export default SplashContainer;