import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import VehiclesView from "@/views/VehiclesView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProfileView from "@/views/ProfileView.vue";
import EditProfile from "@/components/PVPages/EditProfile.vue";
import SingUp from "@/components/Sign/SingUp.vue";
import SignIn from "@/components/Sign/SignIn.vue";
import ForgotPassword from "@/components/Sign/ForgotPassword.vue";
import CartPage from "@/components/OrderPages/CartPage.vue";
import OrderView from "@/views/OrderView.vue";

const routes = [
  {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SingUp,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/vehicles',
    name: 'vehicles',
    component: VehiclesView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile/edit',
    name: 'editprofile',
    component: EditProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;