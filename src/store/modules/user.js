import  userService  from "@/services/user/user.service"

export const user = {
    state: {
        user: null,
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    actions: {
        async loadUser({ commit }) {
            try {
                const user = await userService.getLoggedinUser()
                if(user){

                    commit({ type: 'setUser', user })
                }
            } catch (err) {
                console.log(err)                
                throw err
            }
        },
    },
    getters: {
        user(state) {
            return state.user
        }
    }
}