import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  AddItemButton }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className='count'>
                <button className="uk-button uk-button-default" onClick={increment} type="button"><span uk-icon="icon: plus"></span></button>
                <span> {count} </span>
                <button className="uk-button uk-button-default" onClick={decrement} type="button"><span uk-icon="icon: minus"></span></button>
                {
                    stock && count
                    ? <button variant="contained" className="uk-button uk-button-primary" onClick={() => AddItemButton(count)}>Agregar al carrito</button>
                    : <button variant="contained" className="uk-button uk-button-default" disabled>Agregar al carrito</button>
                }
            </div>
        </>
    );
}

export default ItemCount;