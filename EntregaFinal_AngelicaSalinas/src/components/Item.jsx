import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
    <div className="uk-margin-bottom">   
      <div className="uk-card uk-card-small uk-card-default">
        <div className="uk-card-media-top">
            <img src={pictureUrl} alt={title} width="100%" />
        </div>
        <div className="uk-card-body">
            <h3 className="uk-card-title">{title}</h3>
            <p>Stock: {stock} | Precio: ${price}</p>
            <p className="uk-text-meta">Id de producto: {id}</p>
            <p>
              <Link to={`/item/${id}`} className="uk-button uk-button-default">Conocer más</Link>
            </p>
        </div>
      </div>
    </div>     
    );
}

export default Item;