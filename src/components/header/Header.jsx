import '../../styles/Header.css';
import { NavBar } from './NavBar';
import { Search } from './Search';  

export const Header = () => {
    return (
        <>
            {/* quisiera un header con un logo a la izquierda con un texto, otro texto centrado, y otro texto con un logo en la parte derecha (todo en una sola fila)*/}
            <header className='header-section'>
                <div className="header">
                    <div className="header__logo">
                        <img className='logo' src="/img/logo-unmsm.png" alt="logo" />
                        <p>UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS</p>
                    </div>
                    <div className="header__text">
                        <p>CENTRO DE RESPONSABILIDAD SOCIAL UNIVERSITARIA</p>
                    </div>
                    <div className="header__logo">
                        <p>FACULTAD DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
                        <img className='logo' src="/img/logo-fisi.png" alt="logo" />
                    </div>
                </div>

                <NavBar />
                <Search></Search>
            </header>
        </>
    )
}
