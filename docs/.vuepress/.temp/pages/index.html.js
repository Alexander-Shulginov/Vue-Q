import comp from "/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"actions\":[{\"text\":\"Directives\",\"link\":\"/directives.html\",\"type\":\"secondary\"},{\"text\":\"Common\",\"link\":\"/common.html\",\"type\":\"secondary\"},{\"text\":\"Performance\",\"link\":\"/common.html\",\"type\":\"secondary\"},{\"text\":\"Reactive\",\"link\":\"/reactivity.html\",\"type\":\"secondary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1729414472000,\"contributors\":[{\"name\":\"Alexander_721\",\"email\":\"alexander3post@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
