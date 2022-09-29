(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{372:function(r,t,e){"use strict";e.r(t);var n=e(45),a=Object(n.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[r._v("#")]),r._v(" 介绍")]),r._v(" "),e("p",[e("code",[r._v("起源微前端框架")]),r._v("是一个基于"),e("a",{attrs:{href:"https://qiankun.umijs.org/zh/guide",target:"_blank",rel:"noopener noreferrer"}},[r._v("qiankun2.0"),e("OutboundLink")],1),r._v("微前端库，"),e("a",{attrs:{href:"https://github.com/vuejs/vue",target:"_blank",rel:"noopener noreferrer"}},[r._v("vue2.7"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("typescript"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("webpack5"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[r._v("element-ui"),e("OutboundLink")],1),r._v("的微前端后台集成方案。内置了动态路由，权限验证，单点登录和基础结构组件和工具类，开箱即用，可以用来作为微前端项目的启动模版。它可以帮助你快速搭建企业级中后台产品原型，也可以作为一个示例，用于学习。")]),r._v(" "),e("p",[r._v("微前端作为基础架构有着很高的适应性需求，所以在设计之初就要求要兼容IE10+。目前已经实现。")]),r._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[r._v("建议")]),r._v(" "),e("p",[e("code",[r._v("起源微前端框架")]),r._v("的设计和开发初心，是针对构建"),e("code",[r._v("基于微服务架构的大型web应用")]),r._v("所服务的前端架构。与当下许多主要利用微前端技术去迭代现有的老项目的目标理念是不吻合的。它依然拥有子应用逐步迭代而不影响主体使用的优势，但这个框架集成和融合了完善的页面结构、单点登录和权限管理等组件。这对老项目的改造是多余且危险的。")])]),r._v(" "),e("h2",{attrs:{id:"微前端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微前端"}},[r._v("#")]),r._v(" 微前端")]),r._v(" "),e("p",[r._v("随着web应用技术的发展，应用项目越来越庞大和复杂。与之而来的微服务的架构理念被更多人所接受，微前端借鉴了微服务的架构理念，将一个庞大的前端应用拆分为多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用联合为一个完整的应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。更多微前端的介绍推荐阅读"),e("a",{attrs:{href:"https://qiankun.umijs.org/zh/guide#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BE%AE%E5%89%8D%E7%AB%AF",target:"_blank",rel:"noopener noreferrer"}},[r._v("什么是微前端"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("现如今，主流微前端的实现库有许多，其中京东的"),e("a",{attrs:{href:"http://cangdu.org/micro-app/docs.html#/",target:"_blank",rel:"noopener noreferrer"}},[r._v("MicroApp"),e("OutboundLink")],1),r._v("、腾讯的"),e("a",{attrs:{href:"https://wujie-micro.github.io/doc/wujie/",target:"_blank",rel:"noopener noreferrer"}},[r._v("WUJIE"),e("OutboundLink")],1),r._v("、阿里的"),e("a",{attrs:{href:"https://qiankun.umijs.org/zh/guide",target:"_blank",rel:"noopener noreferrer"}},[r._v("qiankun"),e("OutboundLink")],1),r._v("是目前国内热度最高，生态最完善的几个微前端实现库。其中MicoApp是2020年末开源这个项目，而WUJIE更是在2022年7月才开源这个项目。二者对微前端的构建都吸取了很多qiankun的思路进行优化。也使用了诸如WebComponent和shadowDom等新的浏览器Api。但也正因为如此，使得以上两者的使用成本过高。毕竟对于大多数ToB的企业，IE是绕不开的坎。")]),r._v(" "),e("p",[r._v("相比于新发布的几个实现库，qiankun有着更多实现案例。已知许多大型的web项目使用了该框架。也使得我们在使用的过程有了更多底气，另外使用者更多社区也更完善。最重要的是，使用single-spa来实现微前端的qiankun能兼容IE。这也是为什么我选择qiankun。")]),r._v(" "),e("h2",{attrs:{id:"前序准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前序准备"}},[r._v("#")]),r._v(" 前序准备")]),r._v(" "),e("p",[r._v("你需要在本地安装"),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[r._v("node"),e("OutboundLink")],1),r._v("和"),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("git"),e("OutboundLink")],1),r._v("。本项目技术栈基于"),e("a",{attrs:{href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("ES2015+"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("typescript4"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://cn.vuejs.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("vue2.7"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://vuex.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[r._v("vuex"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[r._v("vue-router"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[r._v("axios"),e("OutboundLink")],1),r._v("和"),e("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[r._v("element-ui"),e("OutboundLink")],1),r._v("，所有的请求数据都使用"),e("a",{attrs:{href:"https://github.com/nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"}},[r._v("Mock.js"),e("OutboundLink")],1),r._v("进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。")]),r._v(" "),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[r._v("#")]),r._v(" 功能")]),r._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[r._v("- 模拟的单点登录/退出\n\n- 权限验证\n  - 页面权限\n  - 按钮权限\n  - 权限配置\n\n- 内置标签页控件\n\n- 快捷脚本\n\n- 可选保活\n")])])]),e("h2",{attrs:{id:"项目结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[r._v("#")]),r._v(" 项目结构")]),r._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[r._v(".")]),r._v("\n├── mian "),e("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# 主应用")]),r._v("\n├── npmScript "),e("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# 快捷脚本配置")]),r._v("\n├── apps "),e("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# 子应用目录")]),r._v("\n    ├── MicoAppOne "),e("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# 范例子应用1")]),r._v("\n    └── MicoAppTwo "),e("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# 范例子应用2")]),r._v("\n\n")])])]),e("h2",{attrs:{id:"浏览器支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持"}},[r._v("#")]),r._v(" 浏览器支持")]),r._v(" "),e("p",[r._v("现代浏览器和 Internet Explorer 10+。")]),r._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("a",{attrs:{href:"https://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"IE / Edge",width:"24px",height:"24px"}}),e("OutboundLink")],1),e("br"),r._v("IE / Edge")]),r._v(" "),e("th",[e("a",{attrs:{href:"https://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"}}),e("OutboundLink")],1),e("br"),r._v("Firefox")]),r._v(" "),e("th",[e("a",{attrs:{href:"https://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"}}),e("OutboundLink")],1),e("br"),r._v("Chrome")]),r._v(" "),e("th",[e("a",{attrs:{href:"https://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"}}),e("OutboundLink")],1),e("br"),r._v("Safari")])])]),r._v(" "),e("tbody",[e("tr",[e("td",[r._v("IE10, IE11, Edge")]),r._v(" "),e("td",[r._v("last 2 versions")]),r._v(" "),e("td",[r._v("last 2 versions")]),r._v(" "),e("td",[r._v("last 2 versions")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);