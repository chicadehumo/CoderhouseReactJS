import { useContext, useEffect } from 'react';
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    
    <Link to='/cart' style={{textDecoration: "none"}} className="cartNav" uk-icon="icon:cart; ratio:1.5"><span className="uk-badge quantify">{test.calcItemsQty()}</span>
    </Link>
    
  )
}

export default CartWidget;