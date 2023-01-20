import "../../styles/about.css"

import aboutImg from "../../images/about-us.jpg"


const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'Primeiro processo de trabalho',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae ipsa laboriosam blanditiis sequi. Facere, minima laborum cum in quae.'
    },
    {
        icon: 'ri-team-line',
        title: 'Time dedicado',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae ipsa laboriosam blanditiis sequi. Facere, minima laborum cum in quae.'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 horas de suporte',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae ipsa laboriosam blanditiis sequi. Facere, minima laborum cum in quae.'
    }
]

export const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <h6 className="subtitle">Por que nos escolher</h6>
                        <h2>Especialista em assessorar clientes </h2>
                        <h2 className="highlight">em desafios financeiros</h2>
                        <p className="description about__content-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum maxime culpa minus amet? Voluptatum, aperiam nemo nostrum vero deleniti aspernatur necessitatibus ut rerum quisquam quia voluptatem eius magnam velit!
                        </p>

                        <div className="choose__item-wrapper">
                            {
                                chooseData.map((item, index) => (
                                    <div className="choose__us-item" key={index}> 
                                        <span className="choose__us-icon">
                                            <i className={item.icon}></i>
                                        </span>

                                        <div>
                                            <h4 className="choose__us-title">{item.title}</h4>
                                            <p className="description">
                                                {item.description}
                                            </p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="about__img">
                        <img src={aboutImg} alt="about-img" />
                    </div>

                </div>
            </div>
        </section>
    )
}
