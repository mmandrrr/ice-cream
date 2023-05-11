import logo from '../../assets/logo/Logo.svg'
import Button from '../ServiceElements/Button'

const Header = () => {
    return(
        <header className="header">
            <div className="header__container container">
                <a href="#" className="header__logo">
                    <img src={logo} alt="Logo" />
                </a>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item"><a href="#" className="header__menu-link">Home</a></li>
                        <li className="header__menu-item"><a href="#" className="header__menu-link">How it’s made?</a></li>
                        <li className="header__menu-item"><a href="#" className="header__menu-link">Our products</a></li>
                        <li className="header__menu-item"><a href="#" className="header__menu-link">Contact</a></li>
                    </ul>
                </nav>
                <Button 
                    text='Buy now'
                    className='btn_yellow-bg'
                    img={true}
                />
            </div>
        </header>
    )
}

export default Header