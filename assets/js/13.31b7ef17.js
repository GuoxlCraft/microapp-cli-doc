(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{374:function(s,t,a){"use strict";a.r(t);var e=a(45),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("本项目需要"),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),a("OutboundLink")],1),s._v("版本>=14")])]),s._v(" "),a("h2",{attrs:{id:"代码获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码获取"}},[s._v("#")]),s._v(" 代码获取")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clone 代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/GuoxlCraft/microapp-cli.git\n")])])]),a("h3",{attrs:{id:"安装-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js"}},[s._v("#")]),s._v(" 安装 Node.js")]),s._v(" "),a("p",[s._v("如果您电脑未安装"),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),a("OutboundLink")],1),s._v("，请安装它。")]),s._v(" "),a("h4",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 出现相应npm版本即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 出现相应node版本即可")]),s._v("\nnode -v\n")])])]),a("h2",{attrs:{id:"快速启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速启动"}},[s._v("#")]),s._v(" 快速启动")]),s._v(" "),a("p",[s._v("分别进入根目录下的main目录和apps下的各个子应用所在的目录安装依赖")]),s._v(" "),a("p",[s._v("推荐使用"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/125604620",target:"_blank",rel:"noopener noreferrer"}},[s._v("cnpm"),a("OutboundLink")],1),s._v("进行依赖安装。")]),s._v(" "),a("p",[s._v("在项目对应的目录下，打开命令窗口执行，耐心等待安装完成即可")]),s._v(" "),a("h3",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[s._v("#")]),s._v(" 安装依赖")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\ncnpm i\n")])])]),a("p",[s._v("另外，您也可以在根目录下使用脚本命令为主应用和所有子应用安装依赖。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主应用和当前子应用安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run all:install\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("目前脚本命令只是服务于现有的目录，在开发过程中应当根据具体的项目结构修改脚本命令。具体的配置方法将在进阶栏目说明。")])]),s._v(" "),a("h3",{attrs:{id:"运行项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行项目"}},[s._v("#")]),s._v(" 运行项目")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行项目")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run serve\n")])])]),a("p",[s._v("另外，您也可以在根目录下使用脚本命令快速开启主应用和所有子应用的本地服务。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主应用和当前子应用安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run all:start\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("目前脚本命令只是服务于现有的目录，在开发过程中应当根据具体的项目结构修改脚本命令。具体的配置方法将在进阶栏目说明。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);