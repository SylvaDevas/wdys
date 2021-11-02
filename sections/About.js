import Title from '../components/Title'
import TextBlock from '../components/TextBlock'
import SNSLinks from '../components/SNSLinks'
import AboutPicture from '../components/AboutPicture'

const About = () => {

    return (
        <>
            <section>
                <div className="max-width-wrapper">
                    <br/>
                    <br/>

                    <Title name="about">Contact</Title>
                    <div className="wrapper">
                        <div className="left">

                            <div className="pictures">

                                <AboutPicture/>

                            </div>

                        </div>

                        <div className="right">
                            <TextBlock>
                                My name is Sylvain De Vreese and I’m a video artist, <br/>storyteller and independent
                                game developer.<br/>
                                <br/>
                                Ten years ago, an idea came to me, create a game<br/> that
                                could inspire open-mindedness among people.<br/>
                                <br/>
                                {/*
                I began young and determined, designing multiple experimental artistic video games.
                <br />
                Year after year, my point of view broadened with each successful project.<br />
          */}


                                With the purpose of creation in mind, I began to travel around the world in search of
                                evidence.<br/>
                                {/* During this journey, I continually collected incredible images of fascinating sacred places.<br /> */}
                                My intention was to combine all the images into a unique experience inspired by my inner
                                progression.<br/>
                                <br/>
                                Little by little, the concept of this creation evolved, and my ability to create it also
                                grew.<br/>
                                The day is now coming when this dream comes true, and the doors of this game can finally
                                be opened.<br/>
                                <br/>
                                {/* 'ONA - A Mystical Art Experience' is the first creation of its kind.<br /><br /> */}
                                {/*  <Button type="silver" href="https://store.steampowered.com/app/1426930/ONA__A_Mystical_Art_Experience/" target="_blank">Wishlist on Steam</Button>*/}

                            </TextBlock>

                            <div className="bottom-text">
                                <TextBlock firstletter={true} upper={true}>
                                    You can follow me on these platforms:
                                </TextBlock>
                            </div>
                            <SNSLinks/>
                            <div className="bottom-text">
                                <TextBlock firstletter={true} upper={true}>
                                    And send me an Email:
                                </TextBlock>
                            </div>
                            {/*} <a href={"mailto:" + props.config.mail_address}>
*/}

                            <img className="letter-icon" src="/img/ona_letter6.png"/>
                            {/* </a>*/}

                            <br/><br/>

                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .wrapper {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding: 4rem 2rem;
                }

                .left {
                    position: relative;
                    width: 40%;
                    text-align: center;
                }

                .right {
                    position: relative;
                    padding-left: 2rem;
                    width: 60%;
                    padding-top: 10px;
                }

                .pictures {
                    position: relative;
                    display: inline-block;
                    width: 80%;
                }

                .bottom-text {
                    margin: 1rem 0;
                }

                .letter-icon {
                    // width: 2.4rem;
                    margin-top: -15px;
                    margin-left: -40px;
                }

                @media (max-width: 900px) {
                    .only-pc {
                        display: none;
                    }

                    section {
                        background-color: rgba(255, 255, 255, 0.48);
                    }

                    .wrapper {
                        display: block;
                        justify-content: initial;
                        padding: 0 2rem 4rem;
                    }

                    .left,
                    .right {
                        display: block;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                    }

                    .left {
                        margin-top: 0.5rem;
                        height: 60vw;
                    }

                    .pictures {
                        width: 60%;
                        padding: 0;
                    }

                    .picture {
                        padding: 0;
                    }

                }
            `}</style>
        </>
    )
}

export default About
