import "../../styles/service.css"


const serviceData = [
    {
        icon: "ri-apps-line",
        title: "App Development",
        description: "Lorem ipsum dolor sit amet consectetur adipis ipsam, orem ipsum dolor sit amet consectetur adipis ipsamorem ipsum dolor sit amet consectetur adipis ipsams"

    },
    {
        icon: "ri-code-s-slash-fill",
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet consectetur adipis ipsam, orem ipsum dolor sit amet consectetur adipis ipsamorem ipsum dolor sit amet consectetur adipis ipsams"

    },
    {
        icon: "ri-landscape-line",
        title: "Graphic Development",
        description: "Lorem ipsum dolor sit amet consectetur adipis ipsam, orem ipsum dolor sit amet consectetur adipis ipsamorem ipsum dolor sit amet consectetur adipis ipsams"

    },
    {
        icon: "ri-rocket-line",
        title: "Digital Marketing",
        description: "Lorem ipsum dolor sit amet consectetur adipis ipsam, orem ipsum dolor sit amet consectetur adipis ipsamorem ipsum dolor sit amet consectetur adipis ipsams"

    },
]


export const Service = () => {
    return (
        <section id="service">
            <div className="container">
                <div className="services__top-content">
                    <h6 className="subtitle">Nossos Serviços</h6>
                    <h2>Economize tempo gerenciando seu negócio com</h2>
                    <h2 className="highlight">nossos melhores serviços</h2>
                </div>

                <div className="service__item-wrapper">

                    {
                        serviceData.map((item, index) => (
                            <div className="services__item" key={index}>
                                <span className="service__icon">
                                    <i className={item.icon}></i>
                                </span>
                                <h3 className="service__title">{item.title}</h3>
                                <p className="description">
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
