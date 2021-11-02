import React from 'react'
import MenuButton from './MenuButton'

class MenuSP extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openStatus: false
    }
  }

  componentDidMount = () => {
    this.transitionShow()
  }
  
  openStatusByText = () => {
    return this.state.openStatus ? "open" : "close"
  }

  toggleMenuOpen = () => {
    this.setState({openStatus: ! this.state.openStatus})
  }

  closeMenu = () => {
    this.setState({openStatus: false})
  }

  transitionShow() {
    setTimeout(() => {
      const elems = document.getElementsByClassName('show-later')

      for (const elm of elems) {
        elm.className += ' mounted'
      }
    }, 100);
  }

  render() {
    return (
      <>
        <div className="wrapper" data-menu-open-status={this.openStatusByText()}>
          <div className="menu">
            <div className="menu-inner">
              <ul>
                <li onClick={this.closeMenu} className={this.props.config.kickstarter_url.length > 0 ? "" : "hide"}>
                  <MenuButton href="https://www.kickstarter.com/projects/maeone/ona" target="_blank" kickstarter={true}>KICKSTARTER CAMPAIN!</MenuButton>
                </li>
                <li onClick={this.closeMenu}>
                  <MenuButton href="#intro">HOME</MenuButton>
                </li>
                <li onClick={this.closeMenu}>
                  <MenuButton href="#description">INTRODUCTION</MenuButton>
                </li>
                <li onClick={this.closeMenu}>
                  <MenuButton href="#downloads">DOWNLOAD</MenuButton>
                </li>
                <li onClick={this.closeMenu}>
                  <MenuButton href="#about">CONTACT</MenuButton>
                </li>
                <li onClick={this.closeMenu}>
                  <MenuButton href="#support">SUPPORT</MenuButton>
                </li>
            
                <li onClick={this.closeMenu}>
                  <MenuButton href="#others">OTHERS</MenuButton>
                </li>

                <li onClick={this.closeMenu} className={this.props.config.kickstarter_url.length > 0 ? "" : "hide"}>
                  <MenuButton href="https://www.whatdoyousee.net/press/sheet.php?p=ona-a-mystical-art-experience" target="_blank" >---PRESS KIT---</MenuButton>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-toggle-menu show-later" onClick={this.toggleMenuOpen}>
            <div className="button button-open">
              <img src="/img/icon_hamburger.png" />
            </div>
            <div className="button button-close">
              <img src="/img/icon_close.png" />
            </div>
          </div>
        </div>

        <style jsx>{`
          .show-later {
            opacity: 0;
            transition-delay: 1s;
            transition-duration: 1.5s;
          }
          .show-later.mounted {
            opacity: 1;
          }
          @media (min-width: 900px) {
            div {
                display: none;
            }
          }
          .wrapper {
            overflow: hidden;
          }
          .menu {
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;

            display: block;
            
            padding: 0;
            background-color: #fff;

            opacity: 1;
            transition-duration: 0.1s;

            z-index: 3000;
          }
          .menu-inner {
            // display: table-cell;
            // text-align: left;
            // padding-left: 2rem;
            // vertical-align: top;
            display: block;
            padding-left: 2rem;
            margin-top: 3rem;
          }
          ul {
            display: inline-block;
            text-align: left;
            
          }
          li {
            margin-left: -1.5rem;
            margin-bottom: 0;
          }
          .button-toggle-menu {
            position: fixed;
            top: -1.9rem;
            right: -1rem;
            width: 100%;

            z-index: 3100;
          }
          .button {
            position: absolute;
            top: 0;
            right: 0;
            margin-top: -0.2rem;
            padding: 2rem;
            line-height: 3rem;

            opacity: 1;
          }
          .button img {
            display: inline-block;
            vertical-align: middle;
            
            width: 2rem;
          }
          .button-close img {
            margin-top: 0.25rem;
            margin-right: 0.25rem;
            width: 1.5rem;
          }
          .wrapper[data-menu-open-status='close'] .button-close {
            opacity: 0;
          }
          .wrapper[data-menu-open-status='close'] .menu {
            opacity: 0;
            z-index: 0;
          }
          .wrapper[data-menu-open-status='open'] .button-open {
            opacity: 0;
          }
          .wrapper[data-menu-open-status='open'] .menu {
            opacity: 0.9;
          }

          .hide {
            display: none;
          }
        `}</style>
      </>
    )
  }
}

export default MenuSP