// import Head from 'next/head'
import { NextSeo } from 'next-seo';
import GoogleFonts from 'next-google-fonts'

import MenuSP from '../components/MenuSP'

import Intro from '../sections/Intro'
import Description from '../sections/Description'
import Downloads from '../sections/Downloads'
import Support from '../sections/Support'
import About from '../sections/About'
import Others from '../sections/Others'
import Footer from '../components/Footer'

import Base64Bg from '../components/Base64Bg'

// export default function Home() {
class Home extends React.Component {

  config = {
    mail_address: "test@example.com",
    kickstarter_url: "aa",
    kickstarter_campain_end: {Y: 2021, M: 4, D: 4}
  }

  componentDidMount = () => {
    const html = document.getElementsByTagName('body')[0]
    html.className += ' mounted'
  }

  render() {
    return (
      <div className="container" style={{
        backgroundImage: "url('" + Base64Bg + "')"
      }}alt="Ona Background">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap" />
        {/* <Head>
          <title>ONA</title>
          <link rel="icon" href="/favicon.ico" />
          
          <meta name="ONA Video Game" content="The ONA Video Game is a Mystical Art Experience Around the World. Download the ONA Game to Travel and Explore a Mystical World in a Quest for our Humanity.
"/>
        </Head> */}
        <NextSeo
          title="ONA - A Mystical Art Experience"
          description="Travel and explore an interactive and mystical world in search of our humanity."
          canonical="https://whatdoyousee.net/"
        />

        <main>
          <MenuSP config={this.config} />
          <Intro config={this.config} />
          <Description />
          <Downloads />
          <About config={this.config} />

          <Support config={this.config} />
          <Others />
          <Footer />
        </main>

        <style jsx>{`
          
        `}</style>

        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          
          body {
            font-family: 'EB Garamond', serif;
            color: #191919;
            overflow-y: scroll;
            height: 100%;

            // background-image: url("/img/bg.jpg");
          }
          .container {
            background-size: 100% auto;
          }
          body {
            //font-size: 18px;

            font-size: 20px;
            opacity: 0;
            transition-delay: 0.3s;
            transition-duration: 0.3s;
          }
          body.mounted {
            opacity: 1;
          }

          section {
            position: relative;
            display: block;
            width: 100%;
            min-height: 100%;
          }
          .max-width-wrapper {
            position: relative;
            display: block;
            max-width: 1500px;
            margin: 0 auto;
          }

          a, a:visited {
            color: #191919;
            text-decoration: none;
            cursor: pointer;
          }

          ul {
            list-style: none;
          }

          @media (max-width: 900px) {
            body {
              //background-size: 400% auto;
              background-position: center top;
              //overflow-x: hidden;
            }
            
            html,main,section {
              height: 100%;
            }
            section {
              min-height: -webkit-fill-available;
            }
          }

          @media (max-width: 350px) {
          }
        `}</style>
      </div>
    )
  }
}

export default Home
// Get a web site config here.
// Check /pages/api/config.js for edit config.
// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/config')
//   const config = await res.json()

//   return {
//     props: {
//       config,
//     },
//   }
// }