import { useContext, useEffect } from 'react';
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';

import FormatNumber from "../utils/FormatNumber";

import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);
    
    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
        id: item.idItem,
        title: item.nameItem,
        price: item.costItem
        }));
    
        test.cartList.forEach(async (item) => {
        const itemRef = doc(db, "products", item.idItem);
        await updateDoc(itemRef, {
            stock: increment(-item.ItemQuantitySelector)
        });
        });
    
        let order = {
        buyer: {
            name: "Carola Dominguez",
            email: "carolguez@hotmail.com",
            phone: "(+52)5545409830"
        },
        total: test.calcTotal(),
        items: itemsForDB,
        date: serverTimestamp()
        };
    
        console.log(order);
        
        const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
        }
    
        createOrderInFirestore()
        .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
    
        test.removeList();
    
    }
    return (
        <>
          <section className="uk-section">
            <div className="uk-container">
                <h1>Este es tu carrito de compras </h1>
                <hr />
                <div className='uk-margin-bottom'>
                <Link to="/" className="uk-button uk-button-secondary">Seguir comprando</Link>
                {
                    (test.cartList.length > 0)
                    ? <button type="filled" onClick={test.removeList} className="uk-button uk-button-default uk-margin-left">Eliminar todos los productos</button>
                    : <p>Tu carrito esta vacío</p>
                }
                </div>


                <div className='' uk-grid="true" >
                    <div className='uk-width-1-2@s uk-width-2-3@m'>
                        <div>
                        {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <div className="uk-card uk-card-default uk-grid uk-child-width-1-2@s uk-margin">
                                <div className="uk-card-body">
                                    <h3 className="uk-card-title">{item.nameItem}</h3>
                                    <p>{item.description}</p>
                                    <p>Precio unitario: $ {item.costItem}</p>
                                    <p className="uk-text-meta">Id de producto: {item.idItem} + {item.nameItem}</p>
                                    <p>{item.ItemQuantitySelector} pieza(s)</p>
                                    <p>$ {test.calcTotalPerItem(item.idItem)} </p>
                                    <button className="uk-button uk-button-primary" onClick={() => test.deleteItem(item.idItem)}>Eliminar</button>
                                </div>
                                <div className="uk-card-media-right uk-cover-container">
                                    <img className="uk-cover" src={item.imgItem} alt={item.nameItem} uk-cover="true" />
                                </div>
                            </div>
                            )
                        }
                        </div>
                    </div>
                    <div className='uk-width-1-2@s uk-width-1-3@m'>
                        <div>
                        {
                        test.cartList.length > 0 &&
                            <div className="uk-card uk-card-body uk-card-secondary">
                                <h4 className='uk-text-lead uk-text-uppercase'>Resumen de compra</h4>
                                <div>
                                    <p className='uk-text-bold uk-margin-remove-bottom'>Subtotal</p>
                                    <p className='uk-margin-remove-top'><FormatNumber number={test.calcSubTotal()} /></p>
                                </div>
                                <div>
                                    <p className='uk-text-bold uk-margin-remove-bottom'>I.V.A.</p>
                                    <p className='uk-margin-remove-top'><FormatNumber number={test.calcTaxes()} /></p>
                                </div>
                                <div className="total">
                                    <p className='uk-text-big uk-text-bold uk-margin-remove-bottom'>Total</p>
                                    <p className='uk-text-lead uk-text-bold uk-margin-remove-top'><FormatNumber number={test.calcTotal()} /></p>
                                </div>
                                <button className="uk-button uk-button-secondary" onClick={createOrder}>Realizar compra</button>
                            </div>
                        }
                        </div>
                    </div>
                </div>

                
                
            </div>
          </section>
        </>
    );
}

export default Cart;