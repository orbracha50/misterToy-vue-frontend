import  toyService  from "@/services/toy/toy.service"

export const toy = {
    state: {
        toys: null,
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy({ toys }, { toyId }) {
            const idx = toys.findIndex(toy => toy._id === toyId)
            toys.splice(idx, 1)
        },
        updateSpeed({ toys }, { toyToEdit }) {
            const idx = toys.findIndex(toy => toy._id === toyToEdit._id)
            toys.splice(idx, 1, toyToEdit)
        },
    },
    actions: {
        async loadToys({ commit },{filterBy}) {
            console.log(filterBy)
            try {
                console.log('hi')
                const toys = await toyService.queryToys(filterBy)
                commit({ type: 'setToys', toys })
            } catch (err) {
                console.log(err)                
                throw err
            }
        },
        async removeToy({ commit }, { toyId }) {
            await toyService.remove(toyId)
            commit({ type: 'removeToy', toyId })
        },
        async updateSpeed({ commit }, { toyToEdit }) {
            await toyService.save(toyToEdit)
            commit({ type: 'updateSpeed', toyToEdit })
        },
    },
    getters: {
        toys(state) {
            return state.toys
        }
    }
}