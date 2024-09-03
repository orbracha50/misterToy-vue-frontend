

export const cart = {
    state: {
        cart: null,
    },
    mutations: {
        setCart(state, { cart }) {
            state.carts = cart
        },
        removeFromCart({ cart }, { prouductId }) {
            const idx = cart.findIndex(product => product._id === prouductId)
            cart.splice(idx, 1)
        },
    },
    actions: {
        async removeFromCart({ commit }, { cartId }) {
            await cartService.remove(cartId)
            commit({ type: 'removeCart', cartId })
        },
    },
    getters: {
        cart(state) {
            return state.cart
        }
    }
}