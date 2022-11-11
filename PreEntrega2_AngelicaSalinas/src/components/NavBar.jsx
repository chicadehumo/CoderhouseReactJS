import CartWidget from './CartWidget.jsx'

const NavBar = (content) => {
    return (
      <>
      <header className="header"  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <div className="uk-panel main-nav">
        <nav className="uk-container uk-navbar-container uk-navbar-transparent uk-light" uk-navbar="dropbar:false;">
          <div className="uk-navbar-left">
            <div className="uk-navbar-item uk-logo">
              <a href='/'><figure><img src="/images/logo_maitri_white.png" alt="Maitri, espacio para el alma" width="186" height="28" loading="lazy" decoding="async" /></figure></a>
            </div>
          </div>
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav uk-visible@l uk-flex-middle">
              <li>
                <a href="/category/333" title="Rituales y Danzas" >Rituales</a>
              </li>
              <li><a href="/category/222" title="Cero waste" >Cero waste</a></li>
              <li><a href="/category/444" title="Jardineria" >Jardinería</a></li>
              <li><a href="/category/111" title="Talleres" >Talleres</a></li>
              <li><a href="/category/333" title="Yoga" >Yoga</a></li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-flex-middle">
            <li><a href='https://www.instagram.com/maitri.soul/'><span uk-icon="icon:instagram; ratio:1.5"></span></a></li>
            <li>
              <CartWidget />
            </li>
            </ul>
          </div>
          <a className="uk-navbar-toggle main-menu uk-hidden@l" href="#offCanvas" uk-toggle><span uk-icon="icon:menu; ratio:1.5"></span></a>
        </nav>
        </div>
      </header>
      </>
    )
  }

  export default NavBar;