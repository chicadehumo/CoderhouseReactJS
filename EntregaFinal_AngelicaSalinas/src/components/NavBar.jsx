import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <>
      <header className="header"  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <div className="uk-panel main-nav">
        <nav className="uk-container uk-navbar-container uk-navbar-transparent uk-light" uk-navbar="dropbar:false;">
          <div className="uk-navbar-left">
            <div className="uk-navbar-item uk-logo">
            <Link to='/'><figure><img src="/images/logo_maitri_white.png" alt="Maitri, espacio para el alma" width="186" height="28" loading="lazy" decoding="async" /></figure></Link>
            </div>
          </div>
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav uk-visible@l uk-flex-middle">
              <li>
                <Link to='/category/rituales' title='Rituales y Danzas' >Rituales</Link>
              </li>
              <li><Link to='/category/cero-waste' title="Cero waste" >Cero waste</Link></li>
              <li><Link to="/category/jardin" title="Verde" >Jardinería</Link></li>
              <li><Link to="/category/yoga" title="Yoga" >Yoga</Link></li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-flex-middle">
            <li><Link to='https://www.instagram.com/maitri.soul/'><span uk-icon="icon:instagram; ratio:1.5"></span></Link></li>
            <li>
              <CartWidget />
            </li>
            </ul>
          </div>
            <Link to='#offCanvas' className="uk-navbar-toggle main-menu uk-hidden@l" uk-toggle="true; target: #offcanvas-nav"><span uk-icon="icon:menu; ratio:1.5"></span></Link>
        </nav>
        </div>
      </header>

      </>
    )
  }

  export default NavBar;