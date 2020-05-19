import Vue from 'vue'
import VueX from 'vuex'
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueX)
Vue.use(VueAxios, axios)

export default new VueX.Store({
  state: {
    users: []
  },
  actions: {
    async getUsers({commit}){
      try{
        const pages = (await Vue.axios.get("https://reqres.in/api/users")).data.total_pages
        const users = []
        for (let i = 0; i < pages; i++){
          const response = await Vue.axios.get(`https://reqres.in/api/users?page=${i+1}`)
          users.push(...response.data.data)
        }
        commit("setUsers", users)
      }catch(e){}
    }
  },
  mutations: {
    setUsers(state, users){
      state.users = users
    }
  },
  getters: {
    userData: state => userId =>{
      return state.users.find(user=>{
        return user.id.toString() === userId.toString()
      })
    }
  },
  modules: {}
})
