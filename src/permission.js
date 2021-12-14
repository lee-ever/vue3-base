import router from './router'
import store from './store'

const whiteList = ['login']

router.beforeEach(async (to, from, next) => {
  console.log(!store.getters.hasUserInfo, whiteList.indexOf(to.path))
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否获取
      // 若不存在用户信息，则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
