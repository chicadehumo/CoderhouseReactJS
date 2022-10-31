import CartWidget from './CartWidget.js'

const NavBar = (content) => {
    return (
      <>
      <header className="header"  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <div className="uk-panel main-nav">
        <nav className="uk-container uk-navbar-container uk-navbar-transparent uk-light" uk-navbar="dropbar:false;">
          <div className="uk-navbar-left">
            <div className="uk-navbar-item uk-logo">
              <figure><img src={content.logo} alt="Maitri, espacio para el alma" width="186" height="28" loading="lazy" decoding="async" /></figure>
            </div>
          </div>
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav uk-visible@l uk-flex-middle">
              <li>
                <a href="#menu1" title="" >{content.menu1}</a>
              </li>
              <li><a href="#menu2" title="{content.menu2}" >{content.menu2}</a></li>
              <li><a href="#menu3" title="{content.menu3}" >{content.menu3}</a></li>
              <li><a href="#menu4" title="{content.menu4}" >{content.menu4}</a></li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-flex-middle">
            <li><span href='https://www.instagram.com/maitri.soul/' uk-icon="icon:instagram; ratio:1.5"></span></li>
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