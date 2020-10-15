import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },

  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    // { path: "/user",component: "user",wrappers: ['@/wrappers/auth']},
    // { exact: true, path: '/', redirect: '/list',component: '@/pages/list' },
    { path: '/list',component: '@/pages/list' },
  ],
  layout: {

  },
});
