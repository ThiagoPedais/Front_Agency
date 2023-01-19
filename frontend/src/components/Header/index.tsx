import './styles.css'


const nav__links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'Sobre'
    },
    {
        path: '#service',
        display: 'Serviço'
    },
    {
        path: '#project',
        display: 'Projetos'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>Thigency</h2>
                    {/* <p>Cresça com nós</p> */}
                </div>

                {/* ================= navigation ========================= */}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav__links.map((item, index) => (
                                <li className="menu__item">
                                    <a href={item.path} className="menu__link">
                                        {item.display}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* ================= light mode ========================= */}
                <div className="light__mode">
                    <span><i className="ri-sun-line"></i>Light mode</span>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header