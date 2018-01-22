webpackJsonp([41],{

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f06eaf64_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_drawer_md__ = __webpack_require__(395);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f06eaf64_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_drawer_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("Drawer 抽屉")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" {Drawer} "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\nVue.component(Drawer.name, Drawer);\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  data() {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("drawerStyle")]),_vm._v(": {\n      },\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("contentStyle")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'text-align'")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'center'")]),_vm._v(",\n        "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'padding-top'")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'50px'")]),_vm._v("\n      },\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("sidebarStyle")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'background-color'")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#fff'")]),_vm._v("\n      },\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("posList")]),_vm._v(": ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'left'")]),_vm._v(","),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'top'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'right'")]),_vm._v(","),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'bottom'")]),_vm._v("],\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("position")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("docked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("open")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n    onOpenChange() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".open = !"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".open;\n    },\n    onPositionChange() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".open = "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(";\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".position = ++"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".position % "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(";\n      setTimeout("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("_this")]),_vm._v(") ")]),_vm._v("{\n        _this.onOpenChange();\n      }, "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("300")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(");\n    },\n    onDockedChange() {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".open = "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(";\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".docked = !"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".docked;\n      setTimeout("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("_this")]),_vm._v(") ")]),_vm._v("{\n        _this.onOpenChange();\n      }, "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("300")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(");\n    },\n    clickAlert(info) {\n      alert(info);\n    }\n  }\n}\n")])]),_vm._v(" "),_c('h4',[_vm._v("基本用法")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-drawer")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":docked")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"docked\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":position")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"posList[position]\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"open\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":content-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"contentStyle\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":sidebar-style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sidebarStyle\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@open-change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onOpenChange\"")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"drawer-content-main\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-nav-bar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":icon")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"open?'left':'right'\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@icon-click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onOpenChange\"")]),_vm._v(">")]),_vm._v("Basic"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-nav-bar")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onPositionChange\"")]),_vm._v(">")]),_vm._v("Position: {{posList[position]}}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onDockedChange\"")]),_vm._v(">")]),_vm._v("Docked: {{docked}}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("Click upper button to change"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sidebar\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"drawer-sidebar-ul\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-for")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"n in 10\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"n\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"clickAlert(`list-item-${n}`)\"")]),_vm._v(">")]),_vm._v("\n    {{`list-item-${n}`}}\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-drawer")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("position")]),_vm._v(" "),_c('td',[_vm._v("抽屉所在位置")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("left")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("left")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("right")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("top")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("bottom")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("open")]),_vm._v(" "),_c('td',[_vm._v("抽屉是否展开")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td')]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("docked")]),_vm._v(" "),_c('td',[_vm._v("抽屉是否嵌入文档")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td')]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("sidebar-style")]),_vm._v(" "),_c('td',[_vm._v("侧边栏样式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("Object")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("overlay-style")]),_vm._v(" "),_c('td',[_vm._v("遮罩层样式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("Object")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("content-style")]),_vm._v(" "),_c('td',[_vm._v("抽屉内容样式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("Object")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("forbid-click")]),_vm._v(" "),_c('td',[_vm._v("禁止背景点击")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_vm._v(" "),_c('td',[_vm._v("-")])])])]),_vm._v(" "),_c('p',[_vm._v("更多 API 可查看 "),_c('a',{attrs:{"href":"https://www.npmjs.com/package/v-drawer"}},[_vm._v("v-drawer")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});