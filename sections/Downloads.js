import Title from '../components/Title'
import TextBlock from '../components/TextBlock'
import Button from '../components/Button'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Description = () => {

    const url = "https://whatdoyousee.us2.list-manage.com/subscribe/post?u=0fc8d3e98681655893865ab22&amp;id=a9ba5307cd";
// a basic form
    const CustomForm = ({status, onValidated}) => {
        let email;
        const submit = () =>
            email &&
            email.value.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email.value
            });

        return (
            <div
                style={{
                    borderRadius: 2,
                    paddingTop: 10,
                    marginTop: 10,
                    display: "inline-block",
                }}
            >
                {status === "sending" && <div style={{color: "blue"}}>sending...</div>}
                {status === "error" && (
                    <div
                        style={{color: "red"}}>Time out, please try with another browser.</div>

                )}
                {status === "success" && (
                    <div
                        style={{
                            color: "darkgreen",
                            fontVariant: "small-caps",
                            fontSize: "1.4em",
                            fontWeight: "normal",
                            lineHeight: "1.2em",
                        }}><span style={{color: "darkgreen", fontSize: "1.2em", lineHeight: "1.2em",}}>Thank you.</span>
                        <br/>
                        An email will be sent to you with the download link in a few minutes.<br/>
                        <span style={{color: "brown", fontSize: "0.9em", lineHeight: "1.2em",}}>(Check the Promotions tab in your mailbox)</span><br/>
                        <br/>

                        <span style={{color: "darkgreen", fontSize: "0.9em", lineHeight: "1.2em",}}>While waiting for the email, you can visit our social media pages.</span>
                        <br/> <br/>

                        <ul>


                            <li style={{display: 'inline-block', marginRight: "0.5rem"}}>
                                <a href="https://twitter.com/experienceona" target="_blank">
                                    <img src="/img/icon_external_twitter.png" alt="Twitter"/>
                                </a>
                            </li>
                            <li style={{display: 'inline-block', marginRight: "0.5rem"}}>
                                <a href="https://instagram.com/wizardmotion" target="_blank">
                                    <img src="/img/icon_external_instagram.png" alt="Instagram"/>
                                </a>
                            </li>

                            <li style={{display: 'inline-block', marginRight: "0.5rem"}}>
                                <a href="https://www.facebook.com/whatdoyouseebe" target="_blank">
                                    <img src="/img/icon_external_facebook.png" alt="Facebook"/>
                                </a>
                            </li>


                        </ul>
                        <br/>
                        <span style={{color: "darkgreen", fontSize: "0.9em", lineHeight: "1.2em",}}>And if you want to support ONA,<br/>here is the Kickstarter page.</span>
                        <br/>
                        <div className="kickstarter-button">
                            <div className="kickstarter-button-wrapper">
                                <Button href="https://www.kickstarter.com/projects/maeone/ona" target="_blank"
                                        type="kickstarter" alt="Ona Kickstarter"></Button>

                            </div>
                        </div>
                    </div>


                )} <br/> <br/>
                <input
                    style={{
                        fontFamily: "EB Garamond, serif",
                        color: "#191919",
                        fontSize: "1em",
                        padding: "8px 22px",
                        borderRadius: 5,
                        borderWidth: 1,
                        marginTop: 8

                    }}
                    ref={node => (email = node)}
                    type="email"
                    placeholder="Your email address..."
                />
                <br/>
                <button style={{
                    fontFamily: "EB Garamond, serif",
                    color: "#fff",
                    background: "linear-gradient(#f79923,  #E27526)",
                    fontSize: "1.4em",
                    padding: "10px 50px",
                    marginTop: 7,
                    borderRadius: 5,
                    borderWidth: 1
                }}
                        onClick={submit}>
                    DOWNLOAD
                </button>
            </div>
        );
    };


    return (
        <section>
            <div className="wrapper wrapper-white-bg">
                <div className="max-width-wrapper">
                    <br/><br/><br/>
                    <Title name="downloads">Download</Title>
                    <div className="text only-pc">
                        <TextBlock textAlign="center" fontSize="1.4rem">
                            <br/>
                            FREE DEMO AVAILABLE<br/>
                            MAC/PC<br/>
                            {/*Visit time: ∼15 min.<br />*/}


                            {/*File size: 1,2 Go
                    {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
              */}
                        </TextBlock>
                    </div>
                    <div className="text only-sp">

                        <div className="app-store-icons">
                            {/*
              <div className="inner">
                <a className="google-play" target="_blank"><img src="/img/icon_google_play.png" /></a>
                <a className="apple-app-store" target="_blank"><img src="/img/icon_app_store.png" /></a>
              </div>
              */}
                            <div className="text">
                                {/*
                <TextBlock textAlign="center" upper={true} firstLetter={true} fontSize="0.6rem" letterSpacing="0.1rem">
                  Android version still in developpment<br />
                  Please connect to a computer
                </TextBlock>
                 */}
                                <p className="text-for-free-demo">
                                    <TextBlock textAlign="center" upper={true} fontSize="1.4rem" letterSpacing="0.1rem">

                                        FREE DEMO AVAILABLE<br/>
                                        PC/MAC<br/>
                                    </TextBlock>
                                    <TextBlock textAlign="center" upper={true} fontSize="0.8rem" letterSpacing="0.04rem"
                                               lineHeight="60px">

                                        (Android version still in developpment)
                                    </TextBlock>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="bottom">
                            <div className="bottom-text">
                                {/*<div className="double-line2 only-pc"></div>*/}
                                <br/>
                                <span className="order">Enter your email to receive the demo.</span> <br/>

                                <div className="mailchimp-form">
                                    <MailchimpSubscribe
                                        url={url}
                                        render={({subscribe, status, message}) => (
                                            <CustomForm
                                                status={status}
                                                message={message}
                                                onValidated={formData => subscribe(formData)}
                                            />
                                        )}
                                    />
                                </div>
                                <br/> <br/>
                                <div className="double-line2 only-pc"></div>
                                <br/>
                                <span className="order">Demo also available via our Discord channel.</span><br/><br/>

                                <a href="https://discord.gg/CCjvmhpSAA" target="_blank">
                                    <img src="/img/discord4.png" alt="Discord"/>
                                    <br/> <br/> <br/>
                                </a>
                                <div className="double-line2 only-pc"></div>

                                <br/><br/>

                                {/* <span className="order">Curious about the final release of ONA?<br/> You can visit our Steam page.</span><br/><br/>*/}
                                <div className="btn_steam">
                                    <Button type="silver"
                                            href="https://store.steampowered.com/app/1426930/ONA__A_Mystical_Art_Experience/"
                                            target="_blank">Wishlist on Steam</Button>
                                </div>
                                <br/>
                                {/*<div className="double-line2 only-pc"></div>*/}

                                {/*}
                    <TextBlock fontSize="0.8rem" lineHeight="0.6rem">Subscribe to be notified<span className="only-sp"><br /> </span>when the final game <span className="only-sp"><br /> </span>is released.</TextBlock>
                  */}
                            </div>
                            {/*} <div className="bottom-buttons">
                <span data-type="steam">
                  <ButtonSimple type="steam" href="https://store.steampowered.com/app/1426930/What_Do_You_See">Wishlist<br />Steam</ButtonSimple>
                </span>
                <span data-type="newsletter">
                  <ButtonSimple type="newsletter" href="http://eepurl.com/hff1jf">Subscribe<br />Newsletter</ButtonSimple>
                </span>
              </div>
            */}

                        </div>
                        {/*  <div className="top only-pc">
              {/*
              <Button type="gold" href="https://store.steampowered.com/app/1426930/What_Do_You_See">ONA: WISHLIST STEAM </Button>
             <Button type="gold" href="http://eepurl.com/hff1jf">SUBSCRIBE NEWSLETTER </Button>
            </div>
            <div className="double-line only-pc"></div>
            <div className="middle only-pc">
              <Button type="gold" notActive={true}>ONA: Full Download</Button>
              <div className="middle-text" style={{ paddingBottom: "10rem"}}>
                {/*<TextBlock upper={true} fontSize="0.8rem">Option Not Yet Available</TextBlock>
                <br/><br/>
              </div>
            </div>
*/}

                    </div>
                </div>
            </div>

            {/*
      <div className="wrapper wrapper-transparent-bg only-pc">
        <div className="max-width-wrapper">
          <div className="system-requirement-wrapper">
            <div className="system-requirement-title">
              <p>System Requirements</p>
            </div>
            <p className="minimum">Minimum :</p>
            <div className="system-requirement">
              Exploitation system : Windows 7 64-bit, 8.1 64-bit or Mac<br />
              Processeur : Intel core i3-2100T @ 2.5GHz/AMD FX 6100, or better<br />
              Mémoire vive : 8 GB de mémoire<br />
              Graphiques : NVIDIA GeForce GTX 650Ti 2GB, AMD Radeon HD 7750 2GB<br />
              Espace disque : 3,4 GB d'espace disque disponible
            </div>
          </div>
        </div>
      </div>
*/}


            <style jsx>{`

                .listmedia {
                    display: inline-block;
                    margin-right: 0.5rem;
                    display: none;
                }

                li img {
                    height: 1.2rem;
                    opacity: 1;
                    transition-duration: 0.2s;
                }

                li img:hover {
                    opacity: 0.6;
                }


                .btn_steam {
                    padding-left: 35px;
                }

                .only-sp {
                    display: none;
                }

                .wrapper {
                    width: 100%;
                }

                .wrapper-white-bg,
                .wrapper-transparent-bg {
                    border-bottom: 1px solid #191919;
                }

                .wrapper-white-bg {
                    background-color: rgba(255, 255, 255, 0.7);
                }

                .text {
                    padding: 1rem 0 1.8rem;
                }

                .double-line {
                    width: 30rem;
                    height: 5px;
                    border-top: 0px solid #525151;
                    border-bottom: 0px solid #525151;
                    margin: 0.8rem auto 1.8rem;
                }

                .double-line2 {
                    width: 30rem;
                    height: 5px;
                    border-top: 1px solid #525151;
                    border-bottom: 1px solid #525151;
                    margin: 0.8rem auto 1.8rem;
                }

                .middle-text {
                    margin-top: -1rem;
                }

                .buttons .top {
                    display: flex;
                    justify-content: center;
                }

                .buttons .middle {
                    text-align: center;
                }

                .bottom {
                    text-align: center;
                    margin: 0rem 0 2rem;
                }

                .bottom-text {
                    padding-top: 0rem;

                }

                .order {
                    font-size: 1.8rem;


                }

                .order2 {

                    line-height: 1.4em;
                    font-size: 1.2rem;
                    color: grey;
                }

                .system-requirement-wrapper {
                    width: 100%;
                    padding: 1.5rem 5rem;
                    font-size: 0.9rem;

                    font-family: "Verdana", sans-serif;
                }

                .system-requirement-title {
                    text-transform: uppercase;
                }

                .minimum {
                    padding: 0.8rem 0 0.8rem 0.3rem;
                    font-weight: bold;
                    font-size: 0.8rem;
                }

                .system-requirement {
                    font-size: 0.8rem;
                    line-height: 1.4em;
                    padding-left: 2rem;
                }

                @media (max-width: 900px) {
                    .only-pc {
                        display: none !important;
                    }

                    .only-sp {
                        display: block;
                    }

                    .order {
                        font-size: 1.4rem;


                    }

                    .wrapper-white-bg {
                        padding-bottom: 1rem;
                        border-bottom: none;
                    }

                    .app-store-icons .inner {
                        display: block;
                        padding: 0 2rem;
                        margin: 0 auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .app-store-icons .inner a {
                        // display: inline-block;
                        // vertical-align: middle;
                        opacity: 0.7;
                    }

                    .google-play {
                        margin-right: 0.5rem;
                    }

                    .google-play img {
                        width: 80%;
                    }

                    .apple-app-store img {
                        width: 80%;
                    }

                    .text-for-free-demo {
                        margin-top: 0.2rem;
                    }

                    .bottom {
                        margin-top: -1.5rem;
                    }

                    .bottom-buttons {
                        display: flex;
                        flex-direction: column;
                    }

                    .bottom-buttons span {
                        display: block;
                        margin: 0 auto 0.5rem;
                    }

                    .buttom-buttons span[data-type='newsletter'] {
                        order: 1;
                    }

                    .bottom-buttons span[data-type='steam'] {
                        order: 2;
                    }

                    .bottom-text {
                    }
                }
            `}</style>
        </section>
    )

}

export default Description
