import { ADD_TO_CART, UPDATE_CART_ITEM, DELETE_CART_ITEM } from './actionTypes';

// 장바구니에 상품 추가
export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: {
            itemId: product.itemId,
            itemName: product.itemName,
            itemPrice: product.itemPrice,
            itemDesc: product.itemDesc,
            qty: product.qty
        }
    };
};

// 장바구니 상품 수량 업데이트
export const updateCartItem = (itemId, qty) => {
    return {
        type: UPDATE_CART_ITEM,
        payload: {
            itemId,
            qty
        }
    };
};

// 장바구니에서 상품 삭제
export const deleteCartItem = (itemId) => {
    return {
        type: DELETE_CART_ITEM,
        payload: {
            itemId
        }
    };
}; 