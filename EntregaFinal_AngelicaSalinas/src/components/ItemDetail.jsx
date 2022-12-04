import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const AddItemButton = (qty) => {
        alert("Has agregado " + qty + " productos al carrito.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <div className="uk-card uk-card-default uk-grid uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title uk-margin-remove-bottom">{item.name}</h3>
                        <p className="uk-text-meta uk-margin-remove-top">Id de producto: {item.id}</p>
                        <p>{item.description}</p>
                        <p>Stock: {item.stock} | Precio: ${item.cost}</p>
                        <p className="uk-text-meta">Categoría: {item.categoryId}</p>
                        {
                            itemCount === 0
                            ? <ItemCount stock={item.stock} initial={itemCount} AddItemButton={AddItemButton} />
                            : <Link to='/cart' style={{textDecoration: "none"}}><button variant="contained" className='uk-button uk-button-primary'>Ir al carrito</button></Link>
                        }
                    </div>
                </div>
                <div className="uk-card-media-right uk-cover-container uk-text-center uk-height">
                    <img className="uk-cover" src={item.image[0]} alt={item.name} uk-cover="true" />
                </div>
            </div>  
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;