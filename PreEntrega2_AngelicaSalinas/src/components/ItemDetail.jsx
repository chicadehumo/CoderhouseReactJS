import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src={item.image[0]} alt={item.name} uk-cover />
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="uk-text-meta">Stock: {item.stock} | Precio: {item.cost}</p>
                        <p className="uk-text-meta">Id de producto: {item.id} + {item.name}</p>
                        {
                            itemCount === 0
                            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                            : <Link to='/cart' style={{textDecoration: "none"}}><button variant="contained" color="secondary">Agregar al carrito</button></Link>
                        }
                    </div>
                </div>
            </div>  
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;