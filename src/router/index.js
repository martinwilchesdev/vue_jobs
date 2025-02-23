import { createRouter, createWebHistory } from 'vue-router'

import NotFoundView from '@/views/NotFoundView.vue'
import EditJobView from '@/views/EditJobView.vue'
import AddJobView from '@/views/AddJobView.vue'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import JobView from '@/views/JobView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobView
        },
        {
            path: '/:catchAll(.*)', // captura todos los accesos a las rutas que no han sido definidas
            name: 'not-found',
            component: NotFoundView
        }
    ]
})

export default router