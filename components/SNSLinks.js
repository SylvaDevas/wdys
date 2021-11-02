const SNSLinks = () => {
  return (
    <>
      <ul>
      <li>
          <a href="https://twitter.com/experienceona" target="_blank">
            <img src="/img/icon_external_twitter.png" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/wizardmotion" target="_blank">
            <img src="/img/icon_external_instagram.png" alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCY_znQP5Gda0m5i0e5h1BTA" target="_blank">
            <img src="/img/icon_external_youtube.png" alt="YouTube" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/whatdoyouseebe" target="_blank">
            <img src="/img/icon_external_facebook.png" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://discord.gg/CCjvmhpSAA" target="_blank">
            <img src="/img/icon_external_discord.png" alt="Discord" />
          </a>
        </li>
        <li>
          <a href="https://www.whatdoyousee.net/press/sheet.php?p=ona-a-mystical-art-experience" target="_blank">
          <img src="/img/presskit3.png" alt="PressKit" />
          </a>
        </li>
      </ul>
      <style jsx>{`
        li {
          display: inline-block;
          margin-right: 0.5rem;
        }
        li img {
          height: 1.2rem;
          opacity: 1;
          transition-duration: 0.2s;
        }
 
        li img:hover {
          opacity: 0.6;
        }


      `}</style>
    </>
  )
}

export default SNSLinks