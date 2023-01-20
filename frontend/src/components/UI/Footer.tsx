import '../../styles/footer.css'


const quickLinks01 = [
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Análise'
    },
    {
        path: '#',
        display: 'Comércio'
    },
]

const quickLinks02 = [
    {
        path: '#',
        display: 'Preços'
    },
    {
        path: '#',
        display: 'Documentação'
    },
    {
        path: '#',
        display: 'Guias'
    },
]

const quickLinks03 = [
    {
        path: '#about',
        display: 'Sobre'
    },
    {
        path: '#',
        display: 'Trabalho'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]

export const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <h2>Thiagency</h2>
                        <p className="description">Cresça conosco</p>
                        <p className="small__text description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum suscipit inventore ut fugit totam fugiat expedita, officiis quidem omnis ratione, pariatur rem eos libero, ex quaerat qui enim maiores!
                        </p>
                    </div>

                    <div className="footer__quick-links">
                        <h3 className="quick__links-title">Soluções</h3>
                        <ul className="quick__links">
                            {
                                quickLinks01.map((item, index) => (
                                    <li className="quick__link-item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer__quick-links">
                        <h3 className="quick__links-title">Suporte</h3>
                        <ul className="quick__links">
                            {
                                quickLinks02.map((item, index) => (
                                    <li className="quick__link-item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer__quick-links">
                        <h3 className="quick__links-title">Empresa</h3>
                        <ul className="quick__links">
                            {
                                quickLinks03.map((item, index) => (
                                    <li className="quick__link-item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>

                <p className="copyrigth">Todos direitos reservado. Copyright, {year}</p>
            </div>
        </footer>
    )
}
