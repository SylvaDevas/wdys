const Footer = (props) => {

const date = new Date()

  return (
      <>
        <div>
          {/* <span className="developer max-width-wrapper">
            <a href="https://kenjioi.com" target="_blank">Web Programmed by <span>Kenji Oi</span></a>
          </span> */}
          <div className="footer-with-bg">
            <p>© {date.getFullYear()} Wizard Motion All Rights Reserved.</p>
          </div>
        </div>

        <style jsx>{`
          .footer-with-bg {
            width: 100%;
            height: 2rem;
            background-image: url(/img/bg_footer.jpg);
          }
          .footer-with-bg p {
            font-family: "Verdana", sans-serif;
            font-size: 0.5rem;
            font-weight: bold;
            color: #fff;
            text-align: center;
            line-height: 2rem;
            text-transform: uppercase;
          }
          .developer {
            text-align: right;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .developer a {
            font-family: "Verdana", sans-serif;
            padding: 0.2rem 0.6rem 0.3rem;
            font-size: 0.6rem;
            line-height: 1.2rem;
            font-weight: normal;
            border-radius: 0.3rem;

            background: rgba(255,255,255,0.3);
            transition-duration: 0.2s;
          }
          .developer a:hover {
            background: rgba(255,255,255,0.6);
            color: gray;
          }
        `}</style>
      </>
  )
}

export default Footer