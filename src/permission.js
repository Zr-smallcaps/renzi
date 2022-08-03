import router  from "./router";
import store from '@/store'
// 路由（全局）前置守卫
// 会在所有路由进入之前触发
// 路由（全局）前置守卫
// 会在所有的路由跳转之前触发
const whiteList = ['/login','/404']
router.beforeEach((to,from,next)=>{
    // 如果用户已经登录
    if(store.state.user.token){
        // 如果有token 但是没有用户有信息的话就获取用户信息
        if(!store.state.user.userInfo.userId){
            store.dispatch('user/getUserInfo')
        }
        // 是否进入登录页
        if(to.path==='/login'){
            // 1.1  是 跳到首页
            next('/')
        }else{
            // 1.2 不是 直接进入
            next()
        }
    }else{
        // 2. 未登录
        // 访问的是白名单（未登录也能访问的页面）
        const isincludes = whiteList.includes(to.path)
        if(isincludes){
            // 2.1 在白名单 放行
            next()
        }else{
            // 2.2 不在白名单 就跳到登录页面
            next('/login')
        }
    }
  })
  