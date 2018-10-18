(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{187:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("为了避免用户胡乱输入就通过验证，很多时候我们都会采用正则表达式来验证一下用户输入的信息是否符合规范。这部分的内容基本上是在网上收集来的，这里跟大家一起分享一下，有需要的可以记在自己的有道云笔记里面。")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("验证的方式当然是很多了，这里推荐采用"),a("a",{attrs:{href:"http://www.w3school.com.cn/js/jsref_test_regexp.asp",target:"_blank",rel:"noopener noreferrer"}},[s._v("test()"),a("OutboundLink")],1),s._v("方法来验证。")]),s._v(" "),s._m(2),s._m(3),s._v(" "),a("p",[s._v("第一代身份证只有 15 位数，第二代身份证有 18 位数，各位按照需求来选择表达式。")]),s._v(" "),s._m(4),s._m(5),s._v(" "),a("p",[s._v("时间截止为：2018 年 1 月 11 日")]),s._v(" "),a("p",[s._v("移动号段：134 135 136 137 138 139 147 148 150 151 152 157 158 159 172 178 182 183 184 187 188 198")]),s._v(" "),a("p",[s._v("联通号段：130 131 132 145 146 155 156 166 171 175 176 185 186")]),s._v(" "),a("p",[s._v("电信号段：133 149 153 173 174 177 180 181 189 199")]),s._v(" "),a("p",[s._v("虚拟运营商：170")]),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._m(9),s._v(" "),s._m(10),s._m(11),s._v(" "),a("p",[s._v("密码正则，以字母开头，长度在 6~18 之间，只能包含字母、数字和下划线")]),s._v(" "),s._m(12),a("p",[s._v("强密码正则，最少 6 位，包括至少 1 个大写字母，1 个小写字母，1 个数字，1 个特殊字符")]),s._v(" "),s._m(13),s._m(14),s._v(" "),s._m(15),s._m(16),s._v(" "),s._m(17),s._m(18),s._v(" "),s._m(19),s._m(20),s._v(" "),s._m(21),s._m(22),s._v(" "),s._m(23),s._m(24),s._v(" "),s._m(25),s._v(" "),s._m(26),s._v(" "),s._m(27),s._m(28),s._v(" "),s._m(29),s._m(30),s._v(" "),s._m(31),s._m(32),s._v(" "),s._m(33),s._m(34),s._v(" "),s._m(35),a("p",[s._v("常用的正则表达式大概就是上面这些了，如果大家还有其他干货的话，欢迎关注我的"),a("a",{attrs:{href:"https://user-gold-cdn.xitu.io/2018/5/1/1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317",target:"_blank",rel:"noopener noreferrer"}},[s._v("公众号"),a("OutboundLink")],1),s._v("给我留言。")])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"常见正则表达式合集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见正则表达式合集","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见正则表达式合集")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"如何验证？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何验证？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何验证？")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" RegExpObject"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("test")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token comment"}},[s._v("// RegExpObject为正则 string是要检测的字符串")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false。")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isTrue"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token comment"}},[s._v("//验证成功 do something")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("elseP"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token comment"}},[s._v("//验证失败")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"身份证号码正则表达式："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#身份证号码正则表达式：","aria-hidden":"true"}},[this._v("#")]),this._v(" 身份证号码正则表达式：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("//第二代身份证号码正则")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//第一代身份证正则表达式(15位)")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"手机号码正则表达式："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手机号码正则表达式：","aria-hidden":"true"}},[this._v("#")]),this._v(" 手机号码正则表达式：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"邮箱正则表达式："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#邮箱正则表达式：","aria-hidden":"true"}},[this._v("#")]),this._v(" 邮箱正则表达式：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^([A-Za-z0-9_\\-\\.\\u4e00-\\u9fa5])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,8})$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"用户名正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户名正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 用户名正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("////用户名正则，4到16位（字母，数字，下划线，减号）")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^[a-zA-Z0-9_-]{4,16}$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"密码正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#密码正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 密码正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v("^")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("zA"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token constant"}},[s._v("Z")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\\w"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("17")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("$"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^.*(?=.{6,})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"qq-号码正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qq-号码正则","aria-hidden":"true"}},[this._v("#")]),this._v(" QQ 号码正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^[1-9][0-9]{4,10}$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"微信号码正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信号码正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 微信号码正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("//微信号正则，6至20位，以字母开头，字母，数字，减号，下划线")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"特殊字符检测正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符检测正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 特殊字符检测正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/[\"'<>%;)(&+]+-!！@#$~/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"域名正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 域名正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("zA"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token constant"}},[s._v("Z0")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("9")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("a"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("zA"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token constant"}},[s._v("Z0")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("9")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("62")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token regex"}},[s._v("/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token operator"}},[s._v("?")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"车牌号码正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#车牌号码正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 车牌号码正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"包含中文正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包含中文正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 包含中文正则:")])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",[t("code",[this._v("let isTrue = /[\\u4E00-\\u9FA5]/;\n//这个可以用于验证用户的真实姓名。\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"护照正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#护照正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 护照正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^(P\\d{7}|G\\d{7,8}|TH\\d{7,8}|S\\d{7,8}|A\\d{7,8}|L\\d{7,8}|\\d{9}|D\\d+|1[4,5]\\d{7})$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"固定电话正则："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#固定电话正则：","aria-hidden":"true"}},[this._v("#")]),this._v(" 固定电话正则：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\d"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("4")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\\"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\\d"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("4")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\\s"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("?")]),s._v("\\d"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token number"}},[s._v("8")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"ip-地址正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址正则","aria-hidden":"true"}},[this._v("#")]),this._v(" IP 地址正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("\\d"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),s._v("\\"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\d"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),s._v("\\"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\d"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),s._v("\\"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\d"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"邮政编码正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#邮政编码正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 邮政编码正则:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("9")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\d"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"经纬度正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#经纬度正则","aria-hidden":"true"}},[this._v("#")]),this._v(" 经纬度正则")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("//经度正则")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^(\\-|\\+)?(((\\d|[1-9]\\d|1[0-7]\\d|0{1,3})\\.\\d{0,6})|(\\d|[1-9]\\d|1[0-7]\\d|0{1,3})|180\\.0{0,6}|180)$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//纬度正则")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isTrue "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token regex"}},[s._v("/^(\\-|\\+)?([0-8]?\\d{1}\\.\\d{0,6}|90\\.0{0,6}|[0-8]?\\d{1}|90)$/")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])}],!1,null,null,null);e.options.__file="正则表达式收集.md";t.default=e.exports}}]);