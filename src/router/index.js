import { createRouter, createWebHistory} from "vue-router";
import Login from '@/views/Login.vue';
import Main from '@/views/Main.vue';
import Home from '@/views/Home.vue';
import CampusList from '@/views/CampusList.vue';
import Map from '@/views/Map.vue';
import TravelNotes from '@/views/TravelNotes.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            component: Main,
            redirect:'/home',
            children:[
                {
                    path:'home',
                    name: 'Home',
                    component: Home,
                },
                {
                    path:'Map',
                    component: Map,
                },
                {
                    path:'CampusList',
                    component:CampusList,
                },
                {
                    path:'TravelNotes',
                    component: TravelNotes,
                }
            ],
        },
        {
            path:'/login',
            component: Login
        }
    ]
})

export default router
