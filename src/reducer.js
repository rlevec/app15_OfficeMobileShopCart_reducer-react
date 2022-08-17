const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if(action.type === 'REMOVE_ITEM') {
        let itemFilter = state.cart.filter((cartItem) => cartItem.id !== action.payload)
        return {...state, cart: itemFilter}
    }
    if(action.type === 'INCREASE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) return {...cartItem, amount: cartItem.amount + 1}
            return cartItem
        })
        return {...state, cart: tempCart}
    }
    if(action.type === 'DECREASE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) return {...cartItem, amount: cartItem.amount - 1}
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart: tempCart}
    }
    if(action.type === 'GET_TOTAL_AMOUNTS') {
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, amount} = cartItem
            const itemTotal = price * amount
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        }, {
            total: 0,
            amount: 0
        })

        total = parseFloat(total.toFixed(2))
        
        return {...state, total, amount}
    }
    return state
}

export default reducer