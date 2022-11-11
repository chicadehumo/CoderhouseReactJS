const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
    <div className="uk-margin-bottom">   
      <div className="uk-card uk-card-small uk-card-default">
        <div className="uk-card-media-top">
            <img src={pictureUrl} alt={title} width="100%" />
        </div>
        <div class="uk-card-body">
            <h3 className="uk-card-title">{title}</h3>
            <p className="uk-text-meta">Stock: {stock} | Precio: {price}</p>
            <p className="uk-text-meta">Id de producto: {id}</p>
            <p><a href={`/item/${id}`} className="uk-button uk-button-default">Conocer más</a></p>
        </div>
      </div>
    </div>     
    );
}

export default Item;