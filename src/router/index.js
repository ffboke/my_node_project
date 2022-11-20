import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminView"
import JoinView from "@/views/JoinView";
import AddressView from "@/views/AddressView";
import HobbyView from "@/views/HobbyView";
import UserInfoView from "@/views/UserInfoView";

const routes = [
  {
    // 首页（加入我们）
    path: "/",
    name: "join",
    component: JoinView,
  },
  {
    // 本站通讯录
    path: "/address",
    name: "address",
    component: AddressView,
  },
  {
    //兴趣爱好
    path: "/hobby",
    name: "hobby",
    component: HobbyView,
  },
  {
    // 我的信息
    path: "/userinfo",
    name: "userinfo",
    component: UserInfoView,
  },
  {
    // 后台管理
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
