declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'highlight.js/lib/core'
declare module 'highlight.js/lib/languages/javascript'
declare module 'highlight.js/lib/languages/java'
declare module 'highlight.js/lib/languages/css'
declare module 'highlight.js/lib/languages/less'
declare module 'highlight.js/lib/languages/json'
declare module 'highlight.js/lib/languages/go'
declare module 'highlight.js/lib/languages/markdown'
declare module 'highlight.js/lib/languages/php'
declare module 'highlight.js/lib/languages/python'
declare module 'highlight.js/lib/languages/ruby'
declare module 'highlight.js/lib/languages/rust'
declare module 'highlight.js/lib/languages/stylus'
declare module 'highlight.js/lib/languages/typescript'
declare module 'highlight.js/lib/languages/xml'
