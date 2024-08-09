import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoComponent from '@/components/VideoComponent.vue'
import ImagemComponent from '@/components/ImagemComponent.vue'
import TabelaComponent from '@/components/TabelaComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
     path: '/videos',
     name: 'videos',
     component: VideoComponent,
    },
    {
     path: '/imagens',
     name: 'imagens',
     component: ImagemComponent,
    },
    {
     path: '/tabela',
     name: 'tabela',
     component: TabelaComponent,
    },
  ]
})

export default router
