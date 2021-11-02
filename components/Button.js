import AnchorLink from 'react-anchor-link-smooth-scroll'

const Button = (props) => {

  let href= ""
  if("href" in props) {
    href = props.href
  }

  let target = ""
  if("target" in props) {
    target = props.target
  }

  let type = "silver"
  if("type" in props) {
    type = props.type
  }

  let notActive = ""
  if("notActive" in props) {
    notActive = "on"
  }

  return (
      <>
        {
          href.indexOf("#") === -1 ?
            // external link
            <a className="button" data-type={type} data-not-active={notActive} href={props.href} target={target}>
              <div className="button-inner">
                <span className={type}>{props.children}</span>
                <img className="enter" src="/img/button_frame_enter3.png" style={type === "enter" ? {} : {display: 'none'}} />
                <img className="starter" src="/img/button_frame_starter3.png" style={type === "starter" ? {} : {display: 'none'}} />
                <img className="starter" src="/img/kickbanner3.png" style={type === "starter2" ? {} : {display: 'none'}} />

                <img className="silver" src="/img/button_frame_silver2.png" style={type === "silver" ? {} : {display: 'none'}} />
                <img className="gold" src="/img/button_frame_gold5.png" style={type === "gold" ? {} : {display: 'none'}} />
                <img className="patreon" src="/img/button_frame_patreon.png" style={type === "patreon" ? {} : {display: 'none'}} />
                <img className="kickstarter" src="/img/ona_kickstarter.png" style={type === "kickstarter" ? {} : {display: 'none'}} />
              </div>
            </a>
            :
            // anchor link
            <AnchorLink href={props.href}>
              <div className="button" data-type={type} data-not-active={notActive}>
                <div className="button-inner">
                  <span className={type}>{props.children}</span>
                  <img className="enter" src="/img/button_frame_enter3.png" style={type === "enter" ? {} : {display: 'none'}} />
                  <img className="starter" src="/img/button_frame_starter3.png" style={type === "starter" ? {} : {display: 'none'}} />
                  <img className="starter2" src="/img/kickbanner3.png" style={type === "starter2" ? {} : {display: 'none'}} />


                  <img className="silver" src="/img/button_frame_silver2.png" style={type === "silver" ? {} : {display: 'none'}} />
                  <img className="gold" src="/img/button_frame_gold17.png" style={type === "gold" ? {} : {display: 'none'}} />
                  <img className="patreon" src="/img/button_frame_patreon.png" style={type === "patreon" ? {} : {display: 'none'}} />
                  <img className="kickstarter" src="/img/ona_kickstarter.png" style={type === "kickstarter" ? {} : {display: 'none'}} />
                </div>
              </div>
            </AnchorLink>
        }

        <style jsx>{`
            .button {
              display: inline-block;
              opacity: 0.88;
              transition-duration: 0.3s;
            }
            .button:hover {
              opacity: 1;
              cursor: pointer;
            }
            .button[data-not-active='on'],
            .button[data-not-active='on']:hover {
              opacity: 0.6;
            }
            .button[data-not-active='on']:hover {
              cursor: not-allowed;
            }
            .button-inner {
              position: relative;
            }
            span {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              white-space: nowrap;
              text-transform: uppercase;

              color: #fff;
              font-weight: bold;
              letter-spacing: 0.1rem;
              opacity: 0.9;
            }
            span enter{
              font-weight: normal;


            }
            img {
              width: 100%;
            }
            .button[data-type='enter'] { width: 20rem; }
            .button[data-type='enter'] span { font-size: 1.2rem; line-height: 4.2rem; color: #fcead9;  }
            .button[data-type='silver'] { width: 25rem; margin-left:-38px;}
            .button[data-type='silver'] span { font-size: 1.2rem; line-height: 5.4rem;color: #fcead9; }
            .button[data-type='gold'] { width: 23rem; }
            .button[data-type='gold'] span {
              color: #fcead9;
              font-size: 1.2rem;
              line-height: 5.1rem;
            }
            .button[data-type='kickstarter'] { width: 34rem; }
            .button[data-type='kickstarter'] span { display: none; }

            @media (max-width: 900px) {
              .button[data-type='enter'] { width: 20rem; }
              .button[data-type='enter'] span { font-size: 1.2rem; line-height: 4.2rem; color: #fcead9; }
              .button[data-type='silver'] { width: 20rem; }
              .button[data-type='silver'] span { font-size: 1.1rem; line-height: 4.4rem; color: #fcead9;}
              .button[data-type='gold'] { width: 23rem; }
              .button[data-type='gold'] span {
                color: #fcead9;
                font-size: 1.2rem;
                line-height: 5.1rem;
              }
              .button[data-type='kickstarter'] { width: 22rem; }
              .button[data-type='kickstarter'] span { display: none; }
            }

            @media (max-width: 350px) {
              .button[data-type='kickstarter'] { width: 16rem; }
              .button[data-type='gold'] { width: 20rem; }
              .button[data-type='gold'] span {
                color: #fcead9;
                font-size: 1.2rem;
                line-height: 4.4rem;
              }

       
            }
          `}</style>
      </>
  )
}

export default Button