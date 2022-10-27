const Card = (content) => {
    let mensajito
    if (content.logued) {
        mensajito = "Bienvenido"
    } else {
        mensajito = "Necesitas loguearte"
    }
    return (
      <>
      <div>
        <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">{content.title}</h3>
            <p>{content.desc}</p>
            <p>{mensajito}</p>
        </div>
      </div>
      </>
    )
}
  
export default Card;