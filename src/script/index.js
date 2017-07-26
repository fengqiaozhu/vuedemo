import Vue from "vue";
import router from "./router.js";
import Vuex from "vuex";
import store from "./vuex/store.js";
Vue.use(Vuex);   //使用vuex

var vm = new Vue({
    el:"#app",
    router,//vuex注入路由
    store,//注入数据
    computed:{

    },
    methods:{

    },
     beforeMount(){},
     mounted(){},
     beforeUpdate(){},
     updated(){},
     //.......
})