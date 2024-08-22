import { createStore } from 'vuex'
import { toy } from './modules/toy.js'

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
    }
}

const store = createStore(options)
export default store