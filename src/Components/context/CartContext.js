import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    totalItem: () => {},
    increaseQty: () => {},
    itemQty: "",
    addItem: () => {},
    removeItem: () => {},
    totalAmt: () => {},
    totalAmount: "",
    totalOrder: () => {},
    reset: () => {}
})

const CartContextProvider = (props) => {
    const [userOrder, setUserOrder] = useState([])
    const [itemQty, setItemQty] = useState();
    const [totalOrder, setTotalOrder] = useState();

    const increaseItemQty = () => {
        setItemQty(prev => prev + 1)
    }

    const removeItemHandler = (id) => {
        setUserOrder(prev => {
            return prev.filter(item => item.id !== id)
        })
        totalItem();
    }

    const resetCart = () => {
        setUserOrder([]);
    }

    const totalItem = () => {
        let qtyArray = [];

        for(const item of userOrder) {
            qtyArray.push(item.quantity);
        }

        const quantityArray = qtyArray.reduce((prevVal, curVal) => {
            return prevVal + curVal
        }, 0);

        return quantityArray;
    }

    const totalOrderChangeHandler = () => {
        let amountArray = [];

        for(const item of userOrder) {
            amountArray.push(item.total)
        }

        let quantityArray = amountArray.reduce((prevVal, curVal) => {
            return prevVal + curVal
        }, 0)

        setTotalOrder(quantityArray);
    }

    const addItemHandler = (item, id, newQty) => {
        const existingItem = userOrder.find(item => item.id === id);

        if(existingItem) {
            existingItem.quantity += newQty
            existingItem.total = existingItem.quantity * existingItem.amount;
            return;
        } else {
            setUserOrder(prev => {
                return prev.concat(item)
            })
        }
    }

    const context = {
        items: userOrder,
        itemTotal: totalItem,
        totalItem: totalItem(),
        increaseQty: increaseItemQty,
        itemQty: itemQty,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        totalOrder: totalOrderChangeHandler,
        total: totalOrder,
        reset: resetCart
    }

    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;
