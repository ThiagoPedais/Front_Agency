import '../../styles/newsletter.css'

export const Newsletter = () => {
    return (
        <section id="newsletter" className='newsletter'>
            <div className="container">
                <div className="newsletter__wrapper">
                    <div className="newsletter__content">
                        <h6 className="subtitle">Ao trabalho</h6>
                        <h2>Explore mais as ideias <span className="highlight">escondidas</span></h2>
                    </div>
                    <div className="newsletter__form">
                        <input type="email" placeholder='Email' />
                        <button className='secondary__btn subscribe__btn' >Inscreva-se</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
