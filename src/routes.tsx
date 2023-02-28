import HomeView from "./views/admin/home/Home";
import UsersView from "./views/admin/users/Users";

const routes = [
    {
        upgrade: false,
        path: "/home",
        name: "Home",
        icon: "nc-icon nc-alien-33",
        component: HomeView,
        layout: "/admin"
    },{
        upgrade: false,
        path: "/users",
        name: "Usuarios",
        icon: "nc-icon nc-alien-33",
        component: UsersView,
        layout: "/admin"
    },
];

export default routes;