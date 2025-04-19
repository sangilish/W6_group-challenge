import { ADD_TO_CART, UPDATE_CART_ITEM, DELETE_CART_ITEM } from './actionTypes';

// 초기 상태 정의
const initialState = {
    cartItems: []
};

// 장바구니 리듀서
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };

        case UPDATE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.itemId === action.payload.itemId
                        ? { ...item, qty: action.payload.qty }
                        : item
                )
            };

        case DELETE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => 
                    item.itemId !== action.payload.itemId
                )
            };

        default:
            return state;
    }
};

export default cartReducer; 