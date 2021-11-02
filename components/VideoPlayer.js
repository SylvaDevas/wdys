import React from 'react'
import ReactPlayer from 'react-player/lazy'

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      videoKey: 1
    }
    this.video_urls = {
      1: "https://www.youtube.com/watch?v=xSJjFDHRLGE",
      2: "https://www.youtube.com/watch?v=0XfmmihjRoY",
      3: "https://www.youtube.com/watch?v=f9_DyDOrVgs",
      4: "https://www.youtube.com/watch?v=bx-LCfyu1eg",
      5: "https://youtu.be/84RGIJrhMRY"
    }
  }

  changeVideo = (key) => {
    this.setState({videoKey: key})
  }

  currentVideo = (key) => {
    if(key === this.state.videoKey) {
      return "current"
    } else {
      return "not-current"
    }
  }

  render() {
    return (
      <>
        <div className="video">
          <ReactPlayer className="react-player" width="100%" height="100%" url={this.video_urls[this.state.videoKey]} />
        </div>
        <div className="video-thumbnails">
          <ul>
            <li onClick={() => this.changeVideo(1)} className={this.currentVideo(1)}><img src="/img/video_thumb_1.jpg" alt="Ona thumbnail 1"/></li>
            <li onClick={() => this.changeVideo(2)} className={this.currentVideo(2)}><img src="/img/video_thumb_2.jpg" alt="Ona thumbnail 2"/></li>
            <li onClick={() => this.changeVideo(3)} className={this.currentVideo(3)}><img src="/img/video_thumb_3.jpg" alt="Ona thumbnail 3"/></li>
            <li onClick={() => this.changeVideo(4)} className={this.currentVideo(4)}><img src="/img/video_thumb_4.jpg" /></li>
            <li onClick={() => this.changeVideo(5)} className={this.currentVideo(5)}><img src="/img/video_thumb_5.jpg" /></li>
          </ul>
        </div>

        <style jsx>{`
          .video {
            position: relative;
            width: 100%;
            padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
            filter: drop-shadow(0 2px 5px rgba(0,0,0,0.6));
          }
          .video-thumbnails {
            padding-top: 1.5rem;
          }
          .video-thumbnails,
          .video-thumbnails ul {
            width: 100%;
          }
          .video-thumbnails ul {
            display: flex;
          }
          .video-thumbnails ul li {
            flex-basis: auto;
            transition-duration: 0.2s;
          }
          .not-current {
            opacity: 0.5;
          }
          .video-thumbnails ul li:hover {
            opacity: 1;
          }
          .video-thumbnails img {
            width: 100%;
          }

   


        `}</style>
      </>
    )
  }
}

export default VideoPlayer