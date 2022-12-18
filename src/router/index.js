import Vue from "vue";
import Router from "vue-router";
import { Home, Article, Resume, Works, Diary,Index,ArticleDetails,CategoryArticle } from "../view/index";

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default new Router({
  routes: [
    {
      path: "/",
      component: Index,
      children: [
        {
          path: "/",
          component: Home
        },
        {
          path: "/articles",
          component: Article
        },
        {
          path: "/resume",
          component: Resume
        },

        {
          path: "/diary",
          component: Diary
        },
        {
          path: "/works",
          component: Works
        },
        {
          path: "/categoryarticle",
          component: CategoryArticle
        }
      ]
    },
    {
      path: "/articledetails/:id",
      component:ArticleDetails
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
});
