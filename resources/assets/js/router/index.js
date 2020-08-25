import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Brand from '../components/brands/Home'
import New from '../components/brands/New'
import Edit from '../components/brands/Edit'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/brand',
        name: 'brand',
        component: Brand
    },
    {
        path: '/new',
        name: 'new',
        component: New
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit
    }
];

const router = new VueRouter({
    routes
});

export default router;
