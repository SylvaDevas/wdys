const Title = (props) => {
  return (
      <h1 id={props.name}>
        <span>{props.children}</span>

        <style jsx>{`
          h1 {
            text-align: center;
            padding-top: 2.8rem;
          }
          h1 span {
            font-size: 3rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
          }

          @media (max-width: 900px) {
            h1 span {
              font-size: 2.7rem;
              
            }
          }
        `}</style>
      </h1>
  )
}

export default Title