//store是数据集散中心
// store 存储应用所需的数据。所有组件都从 store 中读取数据
// 把state 和 mutations 和 action  注入 到 store

import actions from "./action.js";
import state from "./state.js";
import mutations from "./mutation.js";


import Vue from  "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(Vuex);


// 把state action mutations 注入到 store
var store = new Vuex.Store({
	state,
	actions,
	mutations
});


export default store;