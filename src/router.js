import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/View/Home/HomePage.vue"
import LoginPage from '@/components/View/LoginPage/LoginPage.vue'
import Peacfulpianolist from '@/components/View/Playlist/Peaceful Piano/Peacfulpianolist'
import Deepfocus from '@/components/View/Playlist/DeepFocus/Deepfocus'
import SignUp from '@/components/View/SignUpPage/SignUp'
import StudySelect from '@/components/View/Playlist/StudyRelex/StudySelect'
import SadSongPalylist from '@/components/View/Playlist/SadSongs/SadSongPalylist'
import LoveList from '@/components/View/Playlist/Love/LoveList'
import Mommentslist from '@/components/View/Playlist/Momments/Mommentslist'
import ReadingRelexlist from '@/components/View/Playlist/ReadingRelex/ReadingRelexlist'
import HomePlaylist from '@/components/View/Home/HomePlaylist'
const routes = [
    {
        path: "/",
        name: "Home-page",
        component: Home
    },
    {
        path: "/Home",
        name: "Home-list",
        component: HomePlaylist
    },
    {
        path: "/reading/relex/list",
        name: "ReadingRelexlist-page",
        component: ReadingRelexlist
    },
    {
        path: "/love/list",
        name: "love-page",
        component: LoveList
    },
    {
        path: "/moment/list",
        name: "Momment-page",
        component: Mommentslist
    },
    {
        path: "/sad/hindi/playlist",
        name: "sad-page",
        component: SadSongPalylist
    },
    {
        path: "/study/playlist",
        name: "study-page",
        component: StudySelect
    },
    {
        path:'/login',
        name:"Login-page",
        component:LoginPage
    },
    {
        path: '/signup',
        name: "SignUp-page",
        component: SignUp
    },
    {
        path: '/Peacfulpianolist',
        name: "piano-list",
        component: Peacfulpianolist,
       
       
    },
            { path: '/deepfocus/:slug', name: 'Playlist', component: Deepfocus },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.inAuth && !localStorage.getItem("user-name",this.email)) {

        next('/login')
    }
    else {
        next();
    }
})
export default router;
