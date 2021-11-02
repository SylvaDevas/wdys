const ButtonSimple = (props) => {

  let href= ""
  if("href" in props) {
    href = props.href
  }

  let target = "_blank"
  if("target" in props) {
    target = props.target
  }

  let type = ""
  if("type" in props) {
    type = props.type
  }

  return (
      <>
        <a className="simple-button" data-type={type} href={href} target={target}>
          <div className="inner">
            <span>{props.children}</span>
          </div>
        </a>

        <style jsx>{`
            .simple-button {
              display: inline-block;
              width: 10rem;
              height: 3rem;
              border: 1px solid #b4b2b2;
              background-color: #fff;
    
              transition-duration: 0.1s;
            }
            .simple-button:hover {
              cursor: pointer;
              background-color: #f58719;
              border-color: #191919;
            }
            .simple-button[data-type='steam'] {
              margin-right: 0.5rem;
            }
            .simple-button .inner {
              display: table;
              width: 100%;
              height: 100%;
            }
            .simple-button span {
              display: table-cell;
              vertical-align: middle;
              width: 100%;
              height: 100%;
              padding-left: 3rem;
    
              font-size: 0.7rem;
              font-weight: bold;
              letter-spacing: 0.1rem;
              text-align: center;
              line-height: 1.2em;
              text-transform: uppercase;
    
              background-repeat: no-repeat;
              background-size: 2rem;
              background-position: left 0.8rem center; 
            }
            .simple-button[data-type='steam'] span {
              background-image: url("/img/icon_steam_logo.png");
            }
            .simple-button[data-type='newsletter'] span {
              background-image: url("/img/icon_newsletter.png");
            }

            @media (max-width: 900px) {
              .simple-button {
                width: 14rem;
                height: 4.2rem;
              }
              .simple-button span {
                padding-left: 4rem;
    
                font-size: 0.9rem;
                letter-spacing: 0.15rem;
                line-height: 1.25em;
                background-size: 3rem;
                background-position: left 1.1rem center; 
              }
              .simple-button[data-type='steam'] {
                margin-right: 0;
              }
            }

            @media (max-width: 350px) {
              .simple-button {
                transform: scale(0.8);
              }
            }
          `}</style>
      </>
  )
}

export default ButtonSimple