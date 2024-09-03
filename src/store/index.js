import { createStore } from 'vuex'
import { toy } from './modules/toy.js'
import { user } from './modules/user.js'
import { cart } from './modules/cart.js'
const options = {
    strict: true,
	state: {
	},

	mutations: {
	},
    actions: {
    },
    getters: {
    },
    modules: {
        toy,
        user,
        cart
    }
}

const store = createStore(options)
export default store