import { createRouter, createWebHistory } from "vue-router";

const ProductList = () => import ('@/components/ProductList.vue');
const CartComponent = () => import ('@/components/CartComponent.vue');

const routes = [
    { path: '/', name: 'products', component: ProductList },
    { path: '/cart', name: 'cart', component: CartComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;