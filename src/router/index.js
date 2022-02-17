import Vue from "vue";
import VueRouter from 'vue-router';
import Home from "../views/Home.vue";
import Smoothies from "../views/Smoothies.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/smoothies",
    name: "Smoothies",
    component: Smoothies,
    meta: {
      title: 'Smoothies'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: 'ForgotPassword'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes, 
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} |  Smoothie`;
  next();
});

export default router;