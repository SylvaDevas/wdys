import MenuButton from '../components/MenuButton'

const MenuPC = (props) => {
    return (
        <>
          <div className="wrapper">
            <ul className="left">
                <li className={props.config.kickstarter_url.length > 0 ? "" : "hide"}><MenuButton href={props.config.kickstarter_url} position="left" kickstarter={true} target="_blank">KICKSTARTER CAMPAIN!</MenuButton></li>
                <li><MenuButton href="#intro" position="left">INTRO</MenuButton></li>
                <li><MenuButton href="#description" position="left">DESCRIPTION</MenuButton></li>
            </ul>
            <ul className="right">
                <li><MenuButton href="#downloads" position="right">DOWNLOADS</MenuButton></li>
                <li><MenuButton href="#support" position="right">SUPPORT</MenuButton></li>
                <li><MenuButton href="#about" position="right">ABOUT</MenuButton></li>
                <li><MenuButton href="#others" position="right">OTHERS</MenuButton></li>
            </ul>
          </div>

          <style jsx>{`
            .wrapper {
              width: 100%;
              display: flex;
              justify-content: space-between;
              display:none;
            }
            .left {
              margin-left: 1.4rem;
              padding-left: 0;
            }
            .right {
              margin-right: 1.4rem;
              transform: translateY(-4.1rem);
              padding-right: 0;
            }
            .right li {
              text-align: right;
            }
            .hide {
              display: none;
            }
            @media (max-width: 900px) {
              .wrapper {
                display: none;
              }
            }
          `}</style>
        </>
    )
}

export default MenuPC