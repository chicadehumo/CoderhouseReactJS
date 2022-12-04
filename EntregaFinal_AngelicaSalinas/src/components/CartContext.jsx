import { useState,createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    ItemQuantitySelector: qty,
                    categoryItem: item.categoryId
                }
            ]);
        } else {
            found.ItemQuantitySelector += qty;
            setCartList([
                ...cartList
            ]);
        }
    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].ItemQuantitySelector;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.16;
    }

    const calcTotal = () => {
        return calcSubTotal() + calcTaxes();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.ItemQuantitySelector);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem, 
            calcTotalPerItem, 
            calcSubTotal, 
            calcTaxes, 
            calcTotal,
            calcItemsQty
            }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;