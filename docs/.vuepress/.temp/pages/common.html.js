import comp from "/home/j/Works/Press/vuepress-starter/docs/.vuepress/.temp/pages/common.html.vue"
const data = JSON.parse("{\"path\":\"/common.html\",\"title\":\"Common\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Common\"},\"headers\":[{\"level\":3,\"title\":\"Что такое двухстороннее связывание?\",\"slug\":\"что-такое-двухстороннее-связывание\",\"link\":\"#что-такое-двухстороннее-связывание\",\"children\":[]},{\"level\":3,\"title\":\"Что такое интерполяция?\",\"slug\":\"что-такое-интерполяция\",\"link\":\"#что-такое-интерполяция\",\"children\":[]}],\"git\":{\"updatedTime\":1728898579000,\"contributors\":[{\"name\":\"Alexander_721\",\"email\":\"alexander3post@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"common.md\"}")
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
