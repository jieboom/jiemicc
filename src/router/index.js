import Vue from 'vue';
import VueRouter from 'vue-router';
import DemoMobile from '@/views/demo_mobile/Main.vue';
import DemoFrame from '@/components/common/DemoFrame.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/doc_pc/Main.vue'),
  },
  {
    path: '/mobile',
    component: DemoMobile,
  },
  {
    path: '/mobile/:componentName',
    component: DemoFrame,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
