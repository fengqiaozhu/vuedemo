// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// action 是一种专门用来被 component (页面) 调用的函数。action 函数能够通过分发相应的 mutation 函数，
// 来触发对 store 的更新。action 也可以先从 HTTP 后端或 store 中读取其他数据之后再分发更新事件。
//  dispatch 和 store 都是被vuex自动注入
export default{
    
}