import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dreams from '../views/Dreams.vue'
import Nightmares from '../views/Nightmares.vue'
import CreateStory from '../views/CreateStory.vue'
import Story from '../views/Story.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/dreams',
    name: 'Dreams',
    component: Dreams
  },

  {
    path: '/nightmares',
    name: 'Nightmares',
    component: Nightmares
  },

  {
    path: '/:story_slug',
    name: 'Story',
    component: Story
  },

  {
    path: '/create',
    name: 'CreateStory',
    component: CreateStory
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
