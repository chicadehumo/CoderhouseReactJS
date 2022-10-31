const SectionContainer = (content) => {
    return (
      <>
        <section className="uk-section">
        <div className="uk-container">
          <div className="uk-flex uk-grid-large uk-grid" uk-grid>
            <div className="uk-width-1-2@m">
              <h1 className="primeTitle">{content.greeting}</h1>
            </div>
            <div className="uk-width-1-2@m">
              <picture>
                <source srcset="/images/tienda_maitri.jpg" type="image/svg+xml" />
                <img src="images/tienda_maitri.jpg" alt="Tienda" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}
  
export default SectionContainer;