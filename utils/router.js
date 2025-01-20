import Home from "../Pages/Home/Home";
import Barcelona from "../Pages/Barcelona/Barcelona";
import Sevilla from "../Pages/Sevilla/Sevilla";
import Malaga from "../Pages/Malaga/Malaga";
import Granada from "../Pages/Granada/Granada";
import Madrid from "../Pages/Madrid/Madrid";
import North from "../Pages/North/North";

const routes = [
    {
        path: "/",
        page: Home,
    },
    {
        path:"/barcelona",
        page: Barcelona
    },
    {
      path: "/sevilla",
      page: Sevilla,
    },
    {
      path:"/malaga",
      page: Malaga
  },
  {
    path: "/granada",
    page: Granada,
  },
  {
    path:"/madrid",
    page: Madrid
},
{
  path: "/north",
  page: North,
},
];



export const router = () => {
    const path = window.location.pathname;
    console.log(path)
    const route = routes.find((route) => route.path === path) || {};
    if (route.page) {
        route.page();
    }
    window.addEventListener("popstate", router);
    window.addEventListener("DOMContentLoaded", router);
}

export const navListeners = () => {
    const navLinks = document.querySelectorAll("#tourList li a");
    for (const link of navLinks) {
      link.addEventListener("click", (ev) => {
        ev.preventDefault();
        console.log(link)
        for (const el of navLinks) {
          el.classList.remove("active")
        }

        const path = ev.target.pathname;
        history.pushState(null, null, path);
        
        if (ev.target.pathname === window.location.pathname) {
          link.classList.add("active");
        }
        router();
      });
    }
  };