// ref: https://umijs.org/config/
export default {
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: '@/pages/login/index', // 登录页
      title: '登录',
    },
    {
      path: '/',
      component: '@/layouts/main',
      routes: [
        {
          path: '/',
          component: '@/pages/index/index',
          routes: [
            {
              path: '/home',
              component: '@/pages/home/index',
              title: '首页',
            },
            {
              path: '/dashboard/analysis',
              component: '@/pages/dashboard/analysis/index',
              title: '分析页',
            },
            {
              path: '/control/organization',
              component: '@/pages/control/organization/index',
              title: '组织管理',
            },
            {
              path: '/control/project',
              component: '@/pages/control/project/index',
              title: '项目管理',
            },
            {
              path: '/control/application',
              component: '@/pages/control/application/index',
              title: '应用管理',
            },
            {
              path: '/control/store',
              title: '仓库管理',
              routes: [
                {
                  path: '/control/store/code',
                  component: '@/pages/control/store/code/index',
                  title: '代码库',
                },
              ],
            },
            {
              path: '/control/server',
              component: '@/pages/control/server/index',
              title: '服务器管理',
            },
          ],
        },
      ],
    },
  ],
  request: {
    dataField: 'result',
  },
  favicon: '/assets/favicon.ico',
};
