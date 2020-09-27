const login = () => import('../components/login.vue')
const siginUp = () => import('../components/siginUp.vue')
const home = () => import('../components/home.vue')

export const routes = [
        {
            path: "/siginUp",
            name: "siginUp",
            component: siginUp
        },
        {
            path: "/",
            name: "login",
            component: login
        },
        {
            path: "/home",
            name: "home",
            component: home
        }

    ]
