// Vue.js spa 路由
import VueRouter from 'vue-router';
// 引入 Home, Hello 模板
import Home from './pages/Home';
import Hello from './pages/Hello';

// 設定 url
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/hello',
        name: 'hello',
        component: Hello
    }
]

export default new VueRouter({
    // 使用 history 模式，url 不會顯示 /#/
    mode: 'history',
    routes
});

