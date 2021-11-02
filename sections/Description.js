import Title from '../components/Title'
import TextBlock from '../components/TextBlock'
import Button from '../components/Button'
import VideoPlayer from '../components/VideoPlayer'

const Description = (props) => {

  return (
    <section>
      <div className="max-width-wrapper">

     
        <Title name="description">Intro</Title>
        <div className="wrapper">
        <p className="intro-text2">universal<br/>interactive<br/>virtual journey<br/>to discover the quest<br/>of our humanity.</p>

          <div className="left">
    
       

           <div className="button_small">
              <Button type="gold" href="#downloads" target="_blank">DOWNLOAD DEMO</Button>
            </div> 
            
            <div className="paragraph">

              
              <TextBlock fontSize="0.9em" firstLetter={true}>
              <p className="descript"><span className="subtitle" >ONA </span>is an exploration game<br/>    
that invites us to a hypnotic<br/>journey around the world.<br/>
</p>
<p className="ecart">In search of meaning, discover <br />the universal quest of our humanity.</p><br/>
           
 {/*<span style={{fontSize: "1.4em", letterSpacing: "0.1em"}}>UNIVERSAL QUEST?</span><br />   */}

                <ul className="liste1">
<li>A journey around the world</li>
<li>Immersive atmospheres</li>
<li>Meaningful messages</li>
<li>Realistic visuals</li>
<li>New genre</li>
<li>Soft puzzle games</li>
<li>Replayable experience</li>
<li>Secrets doors to discover</li>
<li>A potential infinite creation</li>


                </ul><br/>
              
                <p className="voila2" >
          
          An experimental art piece <br />in constant evolution,<br />
          between a video game <br />and a universal exploration.

           </p>
           <div className="button-starter"><br />
                <Button type="starter" target="_blank" href="https://www.kickstarter.com/projects/maeone/ona"></Button>
              </div>



                {/*
                An initiatory journey with the purpose to better<br />
                understand the meaning of the world in which we live.<br />
                <br />
                Choose one of the paths, enlighten your different<br />
                aspirations and discover the quest for your humanity.<br />
                <br />
                ONA, designed to bring out deep languages,<br className="only-pc" />
                is built as a journey to be taken according<br className="only-pc" />
                to your choices and aspirations.<br />

                */}

               
              </TextBlock>
            </div>
                 {/*
            <div className="paragraph">
              <TextBlock fontSize="0.9em" firstLetter={true}>
                <span style={{fontSize: "1.1em", letterSpacing: "0.1em"}}>“A NEVER ENDING STORY?”</span>              </TextBlock>
<br />
                <br />              <TextBlock fontSize="0.9em" firstLetter={true}>



              
                Through ONA, explore countries and solve puzzles.<br />
                Meet the wise men of various civilizations and with them,<br className="only-pc" />
                discover revelations hidden until today.<br />
                <br />
                Different paths can be explored, and each of your visits<br />
can offer you new secrets and discoveries.<br /><br />
Can you unlock all the secret doors?
  


              </TextBlock>
            </div>
      */}

<div className="button">
              <Button type="gold" href="#downloads" target="_blank">DOWNLOAD DEMO</Button>
            </div> 
    
          </div>

          <div className="right">
            <div className="right-inner">
              <div className="video">
                <VideoPlayer />
              </div>
              <div className="video-caption">
            
               <p className="voila" >
          
               An experimental art piece in constant evolution,<br />
               between a video game and a universal exploration.

                </p>
           
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <style jsx>{`
        .wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 4rem;
        }
        .liste1{

          padding-left:25px;
        }
        .liste1 li{
          //list-style-type: circle;
          list-style-image: url('img/puce.png');
          font-size:1.2em;
        }


  


        .descript{
          font-size:1.2em;
          padding-left:5px;

        }
        .ecart{
          font-size:1.2em;
          padding-left:5px;
          padding-top:15px;
        }
        .subtitle{
          font-variant:small-caps;
          font-size:1.1em;

        }

        .left {
          min-width: 28rem;
        }
        .paragraph {
          padding-bottom: 0em;
          letter-spacing:2em;
        }
        .button {
          margin-top: 0.6rem;
          margin-left: 0rem;
        }
        .button_small {
  display:none;
        }
        .right {
          // width: 52%;
        }
        b {
          font-weight: bold;
        }
        .button-starter{
          display:none;
                }

        .video-caption {
          text-align: center;
          padding-top: 1rem;
        }
        .voila{
font-size:1.4em;
font-variant: small-caps;
//color:#44220C;
letter-spacing:0.02em;

        }
        .voila2{
          display:none;
        }
        .intro-text2 {
          
     display:none;
         }

        @media (max-width: 900px) {

          .intro-text2 {
          display:block;
           // color:#44220C;
            font-weight: normal;
            letter-spacing:0.08em;
            //font-weight: bold;
            font-size:28px;
            //letter-spacing:1.4px;
            font-variant: small-caps;
            margin:0 auto;
            text-align:center;
            line-height:24px;
           }
          .descript{
            font-size:1.2em;
            padding-left:5px;
  
          }
          .ecart{
            font-size:1.2em;
            padding-left:5px;
            padding-top:15px;
          }
          .subtitle{
            //font-variant:small-caps;
            font-size:1.2em;
  
          }
          .max-width-wrapper{
            margin-top:-2em;
          }
          .button-starter {
            display:block;
            position: relative;
            width: auto;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
            padding-bottom:20px;
            //display:none;
          
          }
          .only-pc {
            display: none;
          }
          .voila{
            font-size:1.4em;
            font-variant: small-caps;
            //color:#44220C;
            letter-spacing:0em;
            display:none;

                    }
                    .voila2{
                      font-size:1.5em;
                      font-variant: small-caps;
                      //color:#44220C;
                      letter-spacing:0.03em;
                      display:block;
                      margin-left:4px;
                      text-align:center;
          
                              }
          .wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: initial;
            width: 100%;

            padding: 1rem 1rem 2rem;
          }
          .left,
          .right {
            position: relative;
            display: block;
            min-width: initial;
            min-height: 0;
            width: 100%;
            margin-top:10px;
          }
          .right {
            order:1;
          }
          .left {
            padding-top: 2rem;
            order: 2;
          }
          .button {
        display:none;
          }
          
          .button_small {
    display:block;
    margin-left: -2rem;
    display: inline-block;
    margin-top:12px;
    margin-bottom:35px;
    width: 100vw;
    text-align: center;
    overflow: hidden;
          }

          .right-inner {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }
          .right .video {
            order: 2;
          }
          .right .video-thumbnails {
            order: 3;
          }
          .right .video-caption {
            order: 1;
          }
          .video-caption {
            position: relative;
            font-size: 0.9rem;
            padding: 0 0 1rem 0;
            width: 100%;
            font-weight:bold;
          }
          
        }
      `}</style>

      <style jsx global>{`
        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </section>
  )
}

export default Description