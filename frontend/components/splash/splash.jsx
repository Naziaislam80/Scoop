import React from 'react';
import { Link } from 'react-router-dom';
class SplashContainer extends React.Component {
    constructor(props) {
        super(props);
        this.loginDemo = this.loginDemo.bind(this)
    }

    loginDemo(e) {
        e.preventDefault();
        const demo = {

            email: 'test@aol.com',
            password: 'password'
        }

        this.props.login(demo)
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
                    <Link className="try-demo-link" to="/login">
                        TRY DEMO
                    </Link>
                </ul>
                    <span className="already">Need to create a workspace? <Link className="already-link" to='/login'>Get started</Link>.</span>
            </div>
                <div className="main-img-container">
                <img
                    src={mainURL}
                    className="main-img"
                />
                </div>
            </div>
            <div className="homepage-2-div">
                <h2 className="break-text">Break out of the inbox</h2>
                <p className="working-text">
                    Working in channels gives everyone on your team a shared view of
                    progress and purpose.
                </p>
                <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/FhW01ljEVH4"
                
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="slackvideo"
                className="slackvid"
                />
                </div>

            </div>
                <div className="homepage-3-div">
                    <div className="features-div">
                        <img
                            src={squareURL}
                            className="square-img"
                        />
                        <h3>Conversations, organized</h3>
                        <p>
                            Instead of a single overstuffed inbox,<br /> conversations in Scoop
                            happen in dedicated<br /> spaces called channels.
                        </p>
                    </div>
                    <div className="features-div">
                        <img
                            src={newsURL}
                            className="news-img"
                        />
                        <h3>Get looped in, not out</h3>
                        <p>
                            Scoop makes it simple to follow conversations or<br /> find important
                            information in an easily<br /> searchable archive.
                        </p>
                    </div>
                    <div className="features-div">
                        <img
                            src="https://image.flaticon.com/icons/svg/651/651781.svg"
                            className="hand-img"
                        />
                        <h3>Give focus a chance</h3>
                        <p>
                            Unlike email, Scoop lets you choose which<br /> conversations are
                            most important — and which<br /> can wait.
                        </p>
                    </div>
                </div>
                <div className="homepage-5">
                    <section className='splash section-3'>
                        <div className='div3 first'>
                            <div className="splash3-content first">
                                <h2>Make the change to channels</h2>
                                <p>
                                    Productive teamwork happens in channels
                                    — organized<br /> spaces for everything
                                    related to a project, topic or team.
                            </p>
                            </div>
                            <video className='video1-tag' autoPlay loop muted>
                                <source src={video1URL} type='video/mp4' />
                            </video>
                        </div>
                    </section>
                </div>
                <div className="homepage-6">
                    <section className='splash section-4'>
                        <div className='div3 second'>
                            <video className='video2-tag' autoPlay loop muted>
                                <source src={video2URL} type='video/mp4' />
                            </video>
                            <div className="splash3-content1 second">
                                <h2>Shared channels bring companies together</h2>
                                <p>
                                    Now channels can help you work as closely
                                    with external<br /> partners and clients as you
                                    do with teams down the hall.
                            </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="homepage-7-div">
                    <p className="better-text">Choose a better way to work</p>
                    <ul className="homepage-link">
                        <Link className="try-s-link-bottom" to="/signup">
                            TRY SCOOP
                        </Link>
                        <Link className="try-demo-link-bottom" to="/login">
                            TRY DEMO
                        </Link>
                        {/* <a
                            className="try-demo-link-bottom"
                            onClick={this.loginDemo}
                        >
                            TRY DEMO
                        </a> */}
                    </ul>
                </div>
                <footer className="homepage-4-div">
                    <a
                        href="https://github.com/Naziaislam80"
                        className="github-link"
                        target="_blank"
                    >
                        <img
                            src="https://image.flaticon.com/icons/svg/2111/2111432.svg"
                            className="github-img"
                        />
                    </a>
                    <a
                        href="https://naziaislam80.github.io/"
                        className="portfolio"
                        target="_blank"
                    >
                        About Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nazia-islam-2374951a9/"
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