import { createRouter, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const routers = createRouter({ 
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutPage,
    },
    {
      path: '/:PathMatch(.*)*',
      component: NotFound,
    }
  ],
})

export default routers;
