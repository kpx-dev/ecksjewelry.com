import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Home from "./views/Home.vue";
import Pendants from "./views/Pendants.vue";
import Rings from "./views/Rings.vue";
import Cufflinks from "./views/Cufflinks.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Retail from "./views/Retail.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/pendants",
      name: "pendants",
      components: {
        header: AppHeader,
        default: Pendants,
        footer: AppFooter
      }
    },
    {
      path: "/rings",
      name: "rings",
      components: {
        header: AppHeader,
        default: Rings,
        footer: AppFooter
      }
    },
    {
      path: "/cufflinks",
      name: "cufflinks",
      components: {
        header: AppHeader,
        default: Cufflinks,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/retail",
      name: "retail",
      components: {
        header: AppHeader,
        default: Retail,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
