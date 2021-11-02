import Title from '../components/Title'
import TextBlock from '../components/TextBlock'
import Button from '../components/Button'

const Support = (props) => {

    // make left Days until Kickstarter Campain End
    // check /pages/index.js's config for edit the date of campain end.
    const now_unix_time = new Date().getTime() // current Unix time

    const campain_end = props.config.kickstarter_campain_end;
    const campain_end_unix_time = new Date(campain_end.Y,
        campain_end.M - 1,
        campain_end.D,
        23, 59, 59).getTime() // campain end Unix time

    const diff_unix_time = campain_end_unix_time - now_unix_time
    const diff_days = Math.ceil(diff_unix_time / (1000 * 60 * 60 * 24)) // diff by date

    return (
        <>
            <section>
                <div className={props.config.kickstarter_url.length > 0 ? "with-kickstarter" : "no-kickstarter"}>
                    <div className="wrapper">
                        <br/><br/>
                        <Title name="support">Support</Title>
                        <div className="inner max-width-wrapper">
                            <div className="left">

                                {/*  <p className="text-with-key">
                  <span>
                    Create secret doors to explore.<br />
                    Get involved, join the initiative.
                  </span>
                </p>
                */}
                                <div className="text-below-key">
                                    <TextBlock firstLetter={true} fontSize="1em">
                                        ONA - A MYSTICAL ART EXPERIENCE<br/>

                                        Support the creation and receive a special access key.<br/>
                                        It allows you to discover some of the hidden features!<br/>
                                        <br/>
                                        ONA's KickStarter campaign is coming soon.<br/>

                                        Exclusive gifts will be provided.<br/>
                                        <br/>
                                        Every bit of support helps us create the soul of this quest...<br/>
                                        With your help, we can turn this journey into an epic and endless story.<br/>

                                        <br/>
                                        The adventure has only just begun.<br/>
                                        In advance, thank you very much for all your support!<br/>

                                        <a href="http://eepurl.com/hff1jf" target="_blank"
                                           style={{color: "#357ac0", fontWeight: "bold"}}>Subscribe to our
                                            Newsletter </a> to keep an eye on the release.
                                    </TextBlock>
                                    <br/>
                                    {/*<p className="only-pc">Discover special features ...</p>*/}
                                    <div className="kickstarter-button">
                                        <div className="kickstarter-button-wrapper">
                                            <Button href="https://www.kickstarter.com/projects/maeone/ona"
                                                    target="_blank" type="kickstarter" alt="Ona Kickstarter"></Button>


                                            {<p className="campain-countdown"
                                                style={diff_days >= 31 ? {} : {display: "none"}}>
                                                STARTS IN <span>{diff_days}</span> DAYS!
                                            </p>
                                            }
                                            <p className="campain-countdown">
                                            </p>
                                            <div className="heart only-sp">
                                                <img src="/img/ona_heart.png" alt="Ona heart"/>
                                                <br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="heart">


                                    {/* <p class="End">
</p>*/}
                                    <img className="only-pc" src="/img/ona_heart.png" alt="Ona heart"/>
                                </div>
                                <br/><br/><br/>

                                {/* <div className="patreon-button">
                  <Button type="petreon"></Button>
                </div> */}
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .wrapper {
                    width: 100%;
                    background-color: rgba(255, 255, 255, 0.48);
                    padding-top: 2rem;
                    border-bottom: 1px solid #191919;

                }

                .inner {
                    width: 100%;
                    padding: 4rem;
                }

                .with-kickstarter .inner {
                    display: flex;
                    justify-content: space-between;
                }

                .left {
                    text-align: center;

                    margin: 0 auto;

                }

                .text-with-key {
                    display: table;
                    background-image: url("/img/key.png");
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: left top 0.4rem;

                    height: 6rem;
                    margin-left: -1.8rem;
                    margin-bottom: 1rem;
                }

                .text-with-key span {
                    display: table-cell;
                    vertical-align: middle;
                    padding-left: 7.5rem;

                    font-size: 1.1em;
                    letter-spacing: 0.1em;
                    line-height: 1.4em;
                }

                .heart {
                    text-align: center;
                    margin-top: 0.4rem;
                    display: inline-block;
                    // margin-left:4.5em;
                }

                .heart p {
                    font-size: 1.4rem;
                    letter-spacing: 0.1em;
                    margin-top: -10px;
                }

                .heart img {
                    margin-top: 1rem;
                    width: 4rem;
                }

                .right {
                    position: relative;
                    text-align: center;
                }

                .right-inner {
                    // margin-top: calc(50% + 2.5rem);
                    margin-top: calc(50%);
                    //margin-left: calc(-34%);
                }

                .kickstarter-button {
                    //margin-top: -6.8rem;
                    // margin-bottom: -1.6rem;
                }

                .campain-countdown {
                    //font-family: "Verdana", sans-serif;
                    font-size: 1.2rem;
                    letter-spacing: 0.1em;
                    margin-left: 24px;
                    margin-top: -20px;
                }

                .campain-countdown span {
                    font-weight: bold;
                    font-style: italic;
                    font-size: 1.2rem;
                }

                .no-kickstarter .left {
                    max-width: 40rem;
                    margin: 0 auto;
                    text-align: center;
                }

                .no-kickstarter .text-with-key {
                    margin: 0 auto 2rem;
                    transform: translateX(-1.8rem);
                }

                .no-kickstarter .right {
                    display: none;
                }

                .only-sp {
                    display: none;
                }

                @media (max-width: 900px) {
                    .only-pc {
                        display: none;
                    }

                    .only-sp {
                        display: block;
                    }

                    .wrapper {
                        background-color: initial;
                        padding-top: 0;
                    }

                    .inner,
                    .with-kickstarter .inner {
                        display: block;
                        justify-content: initial;
                        padding: 2rem;
                    }

                    .left,
                    .right {
                        width: 100%;
                    }

                    .left {
                        text-align: left;


                    }

                    .text-with-key,
                    .text-with-key span {
                        display: block;
                    }

                    .text-with-key {
                        display: block;
                        background-size: 7rem;
                        background-position: center top;
                        margin: 0 auto;
                        height: auto;

                        transform: translateX(-1rem);
                    }

                    .text-with-key span {
                        display: block;
                        padding-left: 0;
                        padding-top: 6rem;
                        font-size: 1em;
                        white-space: nowrap;
                        text-align: center;

                        transform: translateX(1rem);
                    }

                    .text-below-key {
                        display: block;
                        margin-top: 2rem;
                        font-size: 1em;
                    }

                    .heart p {
                        font-size: 1.1rem;
                        // white-space: nowrap;
                    }

                    .right-inner {
                        margin-top: 1rem;
                    }

                    .kickstarter-button {
                        margin-top: 0;
                        margin-bottom: -1rem;
                        //width: 100vw;
                        margin-left: -1em;
                        text-align: center;
                        //display:none;
                    }

                    .kickstarter-button-wrapper {

                    }

                    .no-kickstarter .left {
                        max-width: initial;
                        margin: 0 auto;
                        text-align: left;
                    }

                    .no-kickstarter .text-with-key {
                        margin: 0 auto 2rem;
                        transform: translateX(-1rem);
                    }

                    .no-kickstarter .heart .only-pc {
                        display: inline-block;
                    }
                }
            `}</style>
        </>
    )
}

export default Support
