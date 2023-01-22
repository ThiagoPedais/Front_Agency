import { SyntheticEvent, useEffect, useRef } from 'react'

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
type Props = {
    theme: string,
    toggleTheme: () => void
}




const Header = ({ theme, toggleTheme }: Props) => {

    const headerRef = useRef(document.createElement("className"))
    const menuRef = useRef<HTMLDivElement>(null)

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header__shrink')
        }
        else {
            headerRef.current.classList.remove('header__shrink')
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFunc)

        return () => window.removeEventListener("scroll", headerFunc)
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, Event>) => {
        e.preventDefault();

        const targetAttr = (e.currentTarget as HTMLAnchorElement).hash;
        const selectedElement = document.querySelector(targetAttr);

        if (!(selectedElement instanceof HTMLElement)) return;
        
        const location = selectedElement.offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 80
        });
    }

    const toggleMenu = () => {
        if (menuRef.current) {
          menuRef.current.classList.toggle('menu__active')
        }
      }
    // const toggleMenu = () => menuRef.current.classList.toggle('menu__active')

    return (
        <header className="header" ref={headerRef} >
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <h2>Thiagency</h2>
                        {/* <p>Cresça com nós</p> */}
                    </div>

                    {/* ================= navigation ========================= */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu">
                            {
                                nav__links.map((item, index) => (
                                    <li className="menu__item" key={index}>
                                        <a href={item.path} className="menu__link" onClick={handleClick}>
                                            {item.display}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* ================= light mode ========================= */}
                    <div className="light__mode">
                        <span onClick={toggleTheme}>
                            {
                                theme === 'light-theme'
                                    ?
                                    <span><i className="ri-moon-line"></i>Dark mode</span>
                                    :
                                    <span><i className="ri-sun-line"></i>Light mode</span>

                            }

                        </span>
                    </div>

                    <span className="mobile__menu" onClick={toggleMenu}>
                        <i className='ri-menu-line'></i>
                    </span>

                </div>
            </div>
        </header>
    )
}

export default Header