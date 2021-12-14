import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import installIcons from '@/icons'
import store from './store'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import './permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)

app.use(store).use(router).mount('#app')
