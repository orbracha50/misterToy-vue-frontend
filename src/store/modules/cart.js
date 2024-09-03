import  cartService  from "@/services/cart/cart.service"

export const cart = {
    state: {
        cart: null,
    },
    mutations: {
        setCarts(state, { carts }) {
            state.carts = carts
        },
        removeCart({ carts }, { cartId }) {
            const idx = carts.findIndex(cart => cart._id === cartId)
            carts.splice(idx, 1)
        },
        updateSpeed({ carts }, { cartToEdit }) {
            const idx = carts.findIndex(cart => cart._id === cartToEdit._id)
            carts.splice(idx, 1, cartToEdit)
        },
    },
    actions: {
        async loadCarts({ commit },{filterBy}) {
            console.log(filterBy)
            try {
                console.log('hi')
                const carts = await cartService.queryCarts(filterBy)
                commit({ type: 'setCarts', carts })
            } catch (err) {
                console.log(err)                
                throw err
            }
        },
        async removeCart({ commit }, { cartId }) {
            await cartService.remove(cartId)
            commit({ type: 'removeCart', cartId })
        },
        async updateSpeed({ commit }, { cartToEdit }) {
            await cartService.save(cartToEdit)
            commit({ type: 'updateSpeed', cartToEdit })
        },
    },
    getters: {
        carts(state) {
            return state.carts
        }
    }
}