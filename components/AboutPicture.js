import React from 'react'

class AboutPicture extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
      //   pictureChange: false
      // }
  }

  // togglePicture = () => {
  //   const new_bool = ! this.state.pictureChange
  //   this.setState({pictureChange: new_bool})

  //   if(new_bool === true) {
  //     // back it to original image after few seconds
  //     setTimeout(() => {
  //       this.setState({pictureChange: false})
  //     }, 5000);
  //   }
  // }

  render() {
    return (
      <>
        <div className="wrapper"
            //  onClick={this.togglePicture}
            //  data-hover-flg={this.state.pictureChange ? "hover" : "normal"}>
        >
          <div className="picture picture-cat">

            <img src="/img/picture_cat.png" />
          </div>
          <div className="picture picture-sylva">
            <img src="/img/picture_sylva4.png" />
          </div>
        </div>

        <style jsx>{`
          .wrapper {
            position: relative;
            filter: drop-shadow(0 2px 5px rgba(0,0,0,0.6));
          }

          .picture {
            position: absolute;
            width: 100%;
            padding: 0rem 2rem;

            transition-duration: 3s;
          }
          .picture-cat {
            opacity: 1;
          }
          .picture-sylva {
            opacity: 0;
          }
          .wrapper:hover .picture-cat,
          .wrapper[data-hover-flg='hover'] .picture-cat {
            opacity: 0;
          }
          .wrapper:hover .picture-sylva,
          .wrapper[data-hover-flg='hover'] .picture-sylva {
            opacity: 1;
          }
          .picture img {
            width: 100%;
          }
          @media (max-width: 900px) {
            .picture {
              padding: 0;
            }
            .wrapper[data-hover-flg='hover'] .picture-cat {
              opacity: 0;
            }
          }
        `}</style>
      </>
    )
  }
}

export default AboutPicture
