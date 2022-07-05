import { createStore } from 'vuex'

export default createStore({
  state: {
    u_name: Number,
    u_surname: String,
    email: String,
    brand_name: String,
    city: String,
    rccm: String,
    adress: String,
    tel: Number,
    iban: Number,
    ifu: Number,
  },
  getters: {
    getUserData:(state)=>(prop) =>{
      return state[prop];
    }
  },
  mutations: {
    UPDATE_USER(state, arr) {
      state[arr.el_name] = arr.value;
    },
  },
  actions: {},
  modules: {},
});
