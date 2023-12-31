import Vue from 'vue'
import Router from 'vue-router'
// import BlogPage from '@/components/pages/BlogPage.vue'
import BlogDetails from '@/components/pages/BlogDetails.vue'
import ProjectsPage from '@/components/pages/ProjectsPage.vue'
import NotFound from '@/components/pages/NotFound.vue'
import HomePage from '@/components/pages/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectsPage
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogDetails // нужно перенести страницу blogs
    },
    {
      path: '/blog-details',
      name: 'blog-details',
      component: BlogDetails
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
