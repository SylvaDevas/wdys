const TextBlock = (props) => {

  let fontSize = "1.12rem"
  if("fontSize" in props) {
    fontSize = props.fontSize
  }
  let lineHeight = "1.5em"
  if("lineHeight" in props) {
    lineHeight = props.lineHeight
  }

  let textAlign = ""
  if("textAlign" in props) {
    textAlign = props.textAlign
  }

  let fontFamily = ""
  if("fontFamily" in props) {
    fontFamily = props.fontFamily
  }

  let letterSpacing = ""
  if("letterSpacing" in props) {
    letterSpacing = props.letterSpacing
  }

  let fontWeight = ""
  if("fontWeight" in props) {
    fontWeight = props.fontWeight
  }

  return (
      <div>
        <p style={{fontSize: fontSize, 
                   lineHeight: lineHeight,
                   textAlign: textAlign,
                   fontFamily: fontFamily,
                   letterSpacing: letterSpacing,
                   fontWeight: fontWeight}}
           data-first-letter={props.firstLetter === true ? "on" : ""}
           data-upper={props.upper === true ? "on" : ""}>
          {props.children}
        </p>

        <style jsx>{`
          p {
            font-family: 'EB Garamond', serif;
            color: #191919;
            letter-spacing: 0.07em;
          }
          p[data-first-letter='on']:first-letter {
            font-size: 1.3em;
          }

          p[data-upper='on'] {
            text-transform: uppercase;
          }
        `}</style>
      </div>
  )
}

export default TextBlock