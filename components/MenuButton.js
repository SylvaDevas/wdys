import AnchorLink from 'react-anchor-link-smooth-scroll'

const MenuButton = (props) => {
  let target = ""
  if("target" in props) {
    target = props.target
  }

  let position = "left"
  if("position" in props) {
    position = props.position
  }

  return (
    <div className={position}>
      {
        props.kickstarter || props.href === "/" ?
          <a href={props.href} target={target}>
            <p className={props.kickstarter ? "kickstarter" : ""}>
                <span>{props.children}</span>
            </p>
      
          </a>
          :
          <AnchorLink href={props.href}>
            <p>
              <span>{props.children}</span>
            </p>
          </AnchorLink>
      }
      <style jsx>{`
        div {
          display: inline-block;
          font-weight: bold;
        }

        p {
          display: block;
          height: 4rem;
          line-height: 4rem;

          background-image: url("/img/menu_sphere.png");
          background-repeat: no-repeat;
          background-size: 4.5rem;

          letter-spacing: 0.1rem;
          font-size: 0.8rem;
        }
        p.kickstarter {
          background-image: url("/img/menu_sphere_kickstarter.png");
        }
  

        p:hover {
          font-size: 1rem;
          background-size: 5rem;
        }

        .left p {
          padding-left: 4.2rem;
          background-position: 0.25rem center;
        }
        .left p:hover {
          background-position: left center;
        }
        
        .right p {
          padding-right: 4.2rem;
          background-position: right 0.25rem center;

          text-align: right;
        }
        .right p:hover {
          background-position: right center;
        }
      `}</style>
    </div>
  )
}

export default MenuButton