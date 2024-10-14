import comp from "/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/base/base.html.vue"
const data = JSON.parse("{\"path\":\"/base/base.html\",\"title\":\"base\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"base\"},\"headers\":[{\"level\":3,\"title\":\"base h1\",\"slug\":\"base-h1\",\"link\":\"#base-h1\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"base/base.md\"}")
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
