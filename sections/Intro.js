import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import SNSLinks from '../components/SNSLinks2'
import MenuPC from '../components/MenuPC'
import Button from '../components/Button'

import Base64Logo from '../components/Base64Logo'
import Base64VideoStillPC from '../components/Base64VideoStillPC'


class Intro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            window_height: "",
            window_width: 0
        }
    }

    window_height = ""
    componentDidMount = () => {
        this.updateWindowHeight()
        window.addEventListener('resize', this.updateWindowHeight)

        this.transitionShow()
    }

    updateWindowHeight = () => {
        if (window.innerWidth !== this.state.window_width) {
            this.setState({window_height: window.innerHeight + "px"})
            this.setState({window_width: window.innerWidth})
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowHeight);
    }

    transitionShow() {
        setTimeout(() => {
            const logo = document.getElementById('intro_logo')
            logo.className += ' mounted'
        }, 100);

        setTimeout(() => {
            const elems = document.getElementsByClassName('show-later')

            for (const elm of elems) {
                elm.className += ' mounted'
            }
        }, 100);

        setTimeout(() => {
            const enter_button = document.getElementById('button_enter')
            enter_button.className += ' mounted'
        }, 100);
    }

    render() {
        return (
            <>
                <section>

                    <div className="wrapper" style={{minHeight: this.state.window_height}}>

                        <div className="button-starter2">
                            <Button type="starter2" target="_blank"
                                    href="https://www.kickstarter.com/projects/maeone/ona"></Button>
                        </div>
                        <div className="max-width-wrapper">

                            <div id="intro"></div>

                            <div className="sns-links show-later">
                                <SNSLinks/>
                            </div>

                            <div className="menu-pc show-later">

                                <div className="menu-pc-inner">

                                    <MenuPC config={this.props.config}/>


                                </div>
                            </div>
                            <div id="intro_logo" className="intro-logo">

                                <div className="intro-logo-inner">
                                    {/* <img src="/img/logo_wdys.png" alt="What do you see?" /> */}
                                    <img src={Base64Logo} alt="Ona Logo"/>

                                    <p className="intro-text">MYSTICAL ART EXPERIENCE</p><br/>
                                    <p className="intro-text2">universal interactive virtual journey<br/>to discover the
                                        quest of our humanity
                                        <br/>


                                    </p>


                                </div>
                                {/*
                <div className="intro-video-bg" style={{
                  backgroundImage: "url('" + Base64VideoStillPC + "')"
                } }alt="Ona Video"></div>*/}
                            </div>
                        </div>

                        <div id="button_enter" className="intro-enter-button show-later">

                            <div className="button-enter">
                                <Button type="enter" href="#description">Discover ONA</Button>
                                <span className="line"></span>
                            </div>


                            <AnchorLink href="#description">
                                <img className="arrow" src="/img/ona_arrow.png" alt="Ona Arrow"/>
                            </AnchorLink>
                        </div>
                    </div>
                </section>

                <style jsx>{`



                    .kicklink {
                        background: url(img/kickbanner3.png) repeat-x;
                        position: absolute;
                        z-index: 2;
                        height: 142px; /* Or however high you want it */
                        width: 180px;
                        right: 0px;
                    }

                    .kicklink2 {

                        display: none
                    }

                    .button-starter2 {
                        background: url(img/kickbanner3.png) repeat-x;
                        position: absolute;
                        z-index: 1023;

                        right: 0px;

                    }

                    #intro_logo {
                        opacity: 0;
                        // transition-delay: 0.3s;
                        transition-duration: 2.4s;
                    }

                    #intro_logo.mounted {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    #intro_logo .intro-logo-inner {
                        transition-duration: 2.4s;
                        transform: translateY(3%);
                    }

                    #intro_logo.mounted .intro-logo-inner {
                        transform: translateY(0);
                    }

                    .show-later {
                        opacity: 0;
                        transition-delay: 1s;
                        transition-duration: 1.5s;
                    }

                    .show-later.mounted {
                        opacity: 1;
                    }

                    .show-last {
                        opacity: 0;
                    }

                    .show-last.mounted {
                        opacity: 1;
                        transition-delay: 2s;
                        transition-duration: 1s;
                    }

                    .wrapper {
                        position: relative;
                        display: block;
                        width: 100%;
                        height: 100%;
                    }

                    .sns-links {
                        position: absolute;
                        top: 2rem;
                        left: 3.2rem;

                        z-index: 1100;
                    }

                    .intro-text {

                        //color: #755b44;
                        color: #44220C;
                        letter-spacing: 0.1em;
                        //font-size:40em;
                        font-weight: normal;
                        word-spacing: 0.04em;
                        font-variant: small-caps;
                        line-height: 0.8em;

                    }

                    .intro-text2 {

                        //color: #755b44;
                        color: #44220C;
                        letter-spacing: 0.1em;
                        //font-size:40em;
                        font-weight: normal;
                        word-spacing: 0.04em;
                        font-variant: small-caps;
                        line-height: 0.8em;

                    }

                    .menu-pc {
                        position: absolute;
                        top: -1rem;
                        left: 0;
                        width: 100%;
                        height: 100vh;
                        margin: 0;

                        display: table;
                        z-index: 1000;
                    }

                    .menu-pc-inner {
                        display: table-cell;
                        vertical-align: middle;
                        padding: 134px 0;
                    }

                    .intro-logo {
                        position: absolute;
                        display: block;
                        top: -2rem;
                        left: 0;
                        width: 100%;
                        height: 100vh;
                        text-align: center;
                        display: table;
                    }

                    .intro-logo-inner {
                        position: relative;
                        display: table-cell;
                        vertical-align: middle;

                        z-index: 20;
                    }

                    .intro-logo-inner img {
                        max-width: 40%;
                        max-height: 60vh;
                    }

                    .intro-logo-inner p {
                        font-size: 1.8rem;
                    }

                    .intro-video-bg {
                        position: absolute;
                        display: block;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        // background-image: url("/img/picture_intro_video_still.png");
                        background-size: 80% 80%;
                        background-repeat: no-repeat;
                        background-position: center center;
                        opacity: 0.1;

                        z-index: 10;
                    }

                    #button_enter {

                    }

                    .intro-enter-button {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        text-align: center;
                        z-index: 1100;
                    }

                    .button-enter {
                        position: relative;
                        width: auto;
                        margin: 0 auto;
                        text-align: center;
                        overflow: hidden;
                    }

                    .button-starter {
                        display: none;
                    }

                    .line {
                        position: absolute;
                        width: 100vw;
                        height: 0;
                        top: 2.1rem;
                        left: 0;
                        border-top: 2px solid #fff;
                        z-index: -100;
                        opacity: 0.6;
                    }

                    .arrow {
                        width: 1.5rem;
                        margin: 1.5vw 0;
                    }

                    @media (min-width: 1550px) {
                        .arrow {
                            margin: 1vw 0;
                        }
                    }

                    @media (max-width: 900px) {

                        .kicklink {
                            display: none;

                        }

                        .button-starter2 {
                            display: none;

                        }


                        .button-starter {
                            display: block;
                            position: relative;
                            width: auto;
                            margin: 0 auto;
                            text-align: center;
                            overflow: hidden;
                            padding-bottom: 20px;
                            display: none;
                        }


                        section {
                            overflow: hidden;
                        }

                        .sns-links {
                            top: 0.9rem;
                            left: 1rem;
                            //opacity:0;
                        }

                        .intro-logo {
                            top: -8vh;
                        }

                        .intro-text {

                            color: #44220C;
                            font-weight: normal;
                            letter-spacing: 0.1em;
                            //font-weight: bold;
                            font-size: 22px;
                            font-variant: small-caps;
                            letter-spacing: 1.8px;
                        }

                        .intro-text2 {

                            //color:#44220C;
                            // font-weight: normal;
                            //letter-spacing:0.08em;
                            //font-weight: bold;
                            //font-size:19px;
                            //font-variant: small-caps;
                            display: none;
                        }

                        .intro-logo-inner img {
                            max-width: 80%;
                            max-height: 50vh;
                            margin-top: -60px;

                        }

                        .intro-logo-inner p {
                            font-size: 1.34rem;
                            letter-spacing: 1.2px;
                        }

                        .intro-video-bg {
                            background-image: url("/img/picture_intro_video_still_sp.png");
                            background-size: 110% 110%;
                            opacity: 0.1;
                        }

                        .intro-enter-button {
                            //bottom: 4.5rem;
                            margin-bottom: 50px;
                        }
                    }
                `}</style>
            </>
        )
    }
}

export default Intro
