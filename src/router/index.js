import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    }, {
      path: '/Shouye',
      name: 'Shouye',
      component: () => import('../views/Shouye.vue'),
      children: [
        {
          path: '/shou',
          name: 'shou',
          component: () => import('../views/shou.vue')
        }, {
          path: '/course',
          name: 'course',
          component: () => import('../views/Course.vue')
        }, {
          path: '/Order',
          name: 'Order',
          component: () => import('../views/Order.vue')
        }, {
          path: '/refund',
          name: 'refund',
          component: () => import('../views/refund.vue')
        }, {
          path: '/student',
          name: 'student',
          component: () => import('../views/student.vue')
        }, {
          path: '/lecturer',
          name: 'lecturer',
          component: () => import('../views/lecturer.vue')
        }
        , {
          path: '/slideshow',
          name: 'slideshow',
          component: () => import('../views/slideshow.vue')
        }, {
          path: '/article',
          name: 'article',
          component: () => import('../views/article.vue')
        }, {
          path: '/seckill',
          name: 'seckill',
          component: () => import('../views/seckill.vue')
        }, {
          path: '/coupon',
          name: 'coupon',
          component: () => import('../views/coupon.vue')
        }, {
          path: '/course2',
          name: 'course2',
          component: () => import('../components/course2.vue')
        }, {
          path: '/examine',
          name: 'examine',
          component: () => import('../components/examine.vue')
        }, {
          path: '/compile',
          name: 'compile',
          component: () => import('../components/compile.vue')
        }, {
          path: '/slideshow2',
          name: 'slideshow2',
          component: () => import('../components/slideshow2.vue')
        }, {
          path: '/article2',
          name: 'article2',
          component: () => import('../components/article2.vue')
        }, {
          path: '/seckill2',
          name: 'seckill2',
          component: () => import('../components/seckill2.vue')
        }, {
          path: '/Curriculum',
          name: 'Curriculum',
          component: () => import('../components/Curriculum.vue')
        }, {
          path: '/coupon2',
          name: 'coupon2',
          component: () => import('../components/coupon2.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  // 排除登录页面
  if (to.path === '/') {
    next();
    return;
  }

  // 检查token是否存在
  if (!token) {
    // 未设置token，跳转到登录页面
    next('/');
    return;
  }

  // 其他情况下放行
  next();
});
export default router
