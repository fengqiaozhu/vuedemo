import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Index from '../view/index.vue'; 例:从view文件夹中加载单页面组件
//components文件夹中存放可复用组件


var routes=[
    // {path:"/search",component:Search},//路由的读取顺序是自上而下的，当找到符合条件的路由时就直接跳转，不会继续往下找，所以如果是一个单独的跳转，非嵌套路由，直接写在上面    

    // {
    //     path:"/",
    //     component:Index,
    //     children:[//使用children来加载多级嵌套路由
    //         {path:"/home",component:Home}
    //     ]
    // }
]

var router = new VueRouter({
    // mode:'history',//mode可以选择history,也可以选择hashhistory等，这个选择暂时没理解
    routes
})

export default router;