import comp from "/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/reactivity.html.vue"
const data = JSON.parse("{\"path\":\"/reactivity.html\",\"title\":\"Reactivity\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Reactivity\"},\"headers\":[{\"level\":3,\"title\":\"Что такое реактивность?\",\"slug\":\"что-такое-реактивность\",\"link\":\"#что-такое-реактивность\",\"children\":[]},{\"level\":3,\"title\":\"ref()\",\"slug\":\"ref\",\"link\":\"#ref\",\"children\":[]},{\"level\":3,\"title\":\"reactive()\",\"slug\":\"reactive\",\"link\":\"#reactive\",\"children\":[]},{\"level\":3,\"title\":\"Чем отличаются ref от reactie?\",\"slug\":\"чем-отличаются-ref-от-reactie\",\"link\":\"#чем-отличаются-ref-от-reactie\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"reactivity.md\"}")
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
