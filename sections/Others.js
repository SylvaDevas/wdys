import Title from '../components/Title'

const Others = () => {

    return (
        <section>
            <div className="max-width-wrapper">
                <div className="wrapper">
                    <div className="inner">
                        <Title name="others">Others</Title>
                        <a href="https://wildmessages.org/" target="_blank">
                            <img className="logo-wm" src="/img/logo_wm6.png" alt="Wild Messages"/>
                            <p>Discover the other projects<br/>...</p>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .wrapper {
                    display: table;
                    width: 100%;
                    height: 100vh;
                }

                .inner {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                }

                .logo-wm {
                    margin: 2rem 0 1.5rem;
                    opacity: 1;
                    transition-duration: 0.3s;
                }

                a:hover .logo-wm {
                    opacity: 0.6;
                }
            `}</style>
        </section>
    )
}

export default Others
