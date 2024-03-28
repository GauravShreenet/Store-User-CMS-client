import { addToCart, clearCart, updateCartItem } from "./cartSlice"

const findCartItemIndex = (cartItems, item) => {
    return cartItems.findIndex(cartItem =>
        cartItem._id === item._id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
    );
};

export const addItemToCart = (item) => (dispatch, getState) => {
    const { cartItems } = getState().cartInfo;
    const existingItemsIndex = findCartItemIndex(cartItems, item);

    if (existingItemsIndex !== -1) {
        const existingItem = cartItems[existingItemsIndex];
        const updatedQuantity = parseInt(existingItem.qty) + item.qty;
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemsIndex] = { ...existingItem, qty: updatedQuantity };
        dispatch(updateCartItem(updatedCartItems));
    } else {
        dispatch(addToCart(item));
    }
};

export const updatedCartQty = (item) => (dispatch, getState) => {
    const { cartItems } = getState().cartInfo;
    const existingItemsIndex = findCartItemIndex(cartItems, item);

    if (existingItemsIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemsIndex] = { ...cartItems[existingItemsIndex], qty: item.qty };
        dispatch(updateCartItem(updatedCartItems));
    }
};

export const removeItem = (item) => (dispatch, getState) => {
    const { cartItems } = getState().cartInfo;
    const selectedItemIndex = findCartItemIndex(cartItems, item);

    if(selectedItemIndex !== -1) {
        const removeCartItem = [...cartItems];
        removeCartItem.splice(selectedItemIndex, 1);
        dispatch(updateCartItem(removeCartItem))
    }

}

export const clearAllItems = () => (dispatch) => {
    dispatch(clearCart())
}