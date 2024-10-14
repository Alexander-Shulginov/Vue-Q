export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/common.html", { loader: () => import(/* webpackChunkName: "common.html" */"/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/common.html.js"), meta: {"title":"Common"} }],
  ["/directives.html", { loader: () => import(/* webpackChunkName: "directives.html" */"/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/directives.html.js"), meta: {"title":"Directives"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
