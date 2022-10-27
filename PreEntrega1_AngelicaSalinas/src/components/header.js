const Header = (content) => {
    return (
      <>
      <header className="header"  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <div class="uk-panel main-nav">
        <nav className="uk-container uk-navbar-container uk-navbar-transparent uk-light" uk-navbar="dropbar:false;">
          <div className="uk-navbar-left">
            <div className="uk-navbar-item uk-logo">
              <figure><img src={content.logo} alt="Maitri, espacio para el alma" width="186" height="28" loading="lazy" decoding="async" /></figure>
            </div>
          </div>
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav uk-visible@l uk-flex-middle">
              <li>{content.menu1}</li>
              <li>{content.menu2}</li>
              <li>{content.menu3}</li>
              <li>{content.menu4}</li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-flex-middle">
            <li><span uk-icon="icon:instagram; ratio:1.5"></span></li>
            <li><span uk-icon="icon:cart; ratio:1.5"></span></li>
            </ul>
          </div>
          <span class="uk-navbar-toggle main-menu uk-hidden@l" href="#offCanvas" role="button" uk-toggle><span uk-icon="icon:menu; ratio:1.5"></span></span>
        </nav>
        </div>
      </header>
      </>
    )
  }

  export default Header;