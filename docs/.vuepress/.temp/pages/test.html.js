import comp from "/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/test.html.vue"
const data = JSON.parse("{\"path\":\"/test.html\",\"title\":\"Test\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Test\"},\"headers\":[{\"level\":3,\"title\":\"test\",\"slug\":\"test\",\"link\":\"#test\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"test.md\"}")
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