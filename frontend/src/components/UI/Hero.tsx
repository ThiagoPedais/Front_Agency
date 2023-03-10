import '../../styles/hero.css'
import heroDarkImg from '../../images/hero-img.png'

import lightImg from '../../images/light-hero-bg.jpg'

type Props = {
    theme: string
}

export const Hero = ({ theme }: Props) => {
    return (
        <section className="hero__section" id="home">
            <div className="container">
                <div className="hero__wrapper">

                    <div className="hero__content">
                        <div>
                            <h2>Estamos Criando</h2>
                            <h2>Produtos Digitais Perfeitos Para</h2>
                            <h2 className="highlight">Promover Sua Marca</h2>
                        </div>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas deserunt, sit, non id ducimus consequuntur quibusdam perspiciatis numquam laudantium quia provident perferendis incidunt odio repellat ea dicta, earum magni qui.
                        </p>
                        <div className="hero__btns">
                            <button className="primary__btn">Comece Agora</button>
                            <button className="secondary__btn">Saiba Mais</button>
                        </div>                        
                    </div>

                    <div className="hero__img">
                        <img src={theme === 'light-theme' ? lightImg : heroDarkImg } alt="hero-img" />
                    </div>

                </div>
            </div>
        </section>
    )
}
