try {
(function(e) {
if (/msie 6/i.test(navigator.userAgent)) {
window.location = "/cgi-bin/readtemplate?t=err/noie6_tmpl";
return;
}
window.console || (window.console = {
log: function() {},
error: function() {},
info: function() {}
}), function() {
function e() {
var e = {};
$("#menuBar").find(".menu").each(function() {
var t = $(this), n = t.attr("id"), r = n.substr("menu_".length);
t.hasClass("closed") || (e[r] = !0);
});
var t = wx.data.uin + ":" + Cookies.stringify(e);
Cookies.set("menu_status", t);
}
$("#menuBar").on("click", "dt", function() {
$(this).parent().hasClass("closed") ? $(this).parent().removeClass("closed") : $(this).parent().addClass("closed"), e();
}), $("#menuBar").on("selectstart", function() {
return !1;
}), wx.selectMenu = function(t) {
var n = "selected";
$("#menuBar .menu").removeClass(n), $("#menuBar .menu_item").removeClass(n);
var r = window.Cookies.get("menu_status");
r = r ? Cookies.parse(r) : {}, r = r[wx.data.uin] || {};
var i = $("#menu_" + t).addClass(n), s = i.parent().filter(".menu").addClass(n);
$.isEmptyObject(r) && s.removeClass("closed"), e();
};
}(), e.wx = e.wx || {}, wx.T = function(e, t) {
return template.compile(e)(t);
}, wx.url = function(e) {
if (e.startsWith("javasript:")) return e;
var t = wx.data.param;
return e.indexOf("?") != -1 ? e + t : e + "?1=1" + t;
}, wx.getUrl = function(e) {
var t = (window.location + "&").match(new RegExp("(?:\\?|\\&)" + e + "=(.*?)\\&"));
if (t && t[1]) return String(t[1]).html(!0);
}, function() {
function t(e, t) {
if (t.indexOf("ueditor") != -1 || t.indexOf("media/appmsg_edit") != -1) return;
jQuery.ajax({
url: "/cgi-bin/jslog?1=1" + wx.data.param,
data: {
content: t,
id: e,
level: "error"
},
type: "POST"
});
}
var e = {
fakeid: wx.data.uin,
userAgent: window.navigator.userAgent,
url: location.href
};
window.onerror = function(n, r, i) {
n != "Script error." && t(3, "[fakeid={fakeid}] [runtime] [url={url}] [useragent={userAgent}] [line={line}] [msg={msg}]".format(e).format({
msg: n,
url: r,
line: i
}));
}, jQuery("img").error(function() {
t(1, "[fakeid={fakeid}] [img] [url={url}] [useragent={userAgent}] [src={0}]".format(e).format([ jQuery(this).src || "" ]));
}), jQuery("script").error(function() {
t(2, "[fakeid={fakeid}] [script] [url={url}] [useragent={userAgent}] [src={0}]".format(e).format([ jQuery(this).src || "" ]));
}), wx.jslog = function(n, r, i) {
i = i || 3, n = jQuery.extend(n, e);
var s = [];
!r || jQuery.each([ "message", "stack", "lineNumber" ], function(e, t) {
s.push(t + ":" + (r[t] || ""));
}), n.e = s.join(";");
var o = "[fakeid={fakeid}] [script] [url={url}] [useragent={userAgent}] [src={src}] [exception={e}]".format(n);
throw t(i, o), r;
};
}(), setTimeout(function() {
seajs.use("common/lib/store.js", function(e) {
var t = $("#logout");
t.click(function() {
function r() {
var t = e.get(n);
return new Date - t > 864e5;
}
e.remove("hasNotice"), e.remove("templateClassStatus"), e.remove("templateClassStatusTime");
var t = "__draft__" + wx.data.uin, n = "__draft__time__" + wx.data.uin;
r() && (e.remove(t), e.remove(n));
});
});
}, 5e3), wx.resPath = location.hostname == "mp.weixin.qq.com" ? "https://res.wx.qq.com" : "";
})(window);
} catch (e) {
wx.jslog({
src: "wx/wx.js"
}, m);
};;//样式居中
$.fn.extend({
center: function() {
this.css("position", "absolute"), this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px"), this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
}
});;$.fn.disable = function(e) {
e = e || "btn_disabled";
var t = this.hasClass("btn_input") ? this.find("button") : this;
return t.attr("disabled", "disabled"), e && this.addClass(e), this.parent().filter(".btn_input").addClass(e), this;
}, $.fn.enable = function(e) {
e = e || "btn_disabled";
var t = this.hasClass("btn_input") ? this.find("button") : this;
return t.attr("disabled", !1), e && this.removeClass(e), this.parent().filter(".btn_input").removeClass(e), this;
}, function() {
var e = function(e) {
e = e || "btn_loading";
var t = this.hasClass("btn_input") ? this.find("button") : this;
return t.prepend("<i></i>"), this.disable(e), this;
}, t = function(e) {
e = e || "btn_loading";
var t = this.hasClass("btn_input") ? this.find("button") : this;
return t.find("i:first-child").remove(), this.enable(e), this;
};
$.fn.btn = function(n, r) {
return n ? t.call(this, r) : e.call(this, r);
};
}();;//滚屏延迟加载
$.fn.scrollLoading = function(e) {
function r(t) {
return t.offset().top > $(window).scrollTop() && t.offset().top + t.height() < $(window).scrollTop() + $(window).height() + e.pre;
}
function i() {
$.each(n, function(t, n) {
var i = r($(n.obj));
i && (n.src && n.tag.toLowerCase() == "img" && (n.obj.src = n.src, n.obj.data_src = n.src = ""), $.isFunction(e.callback) ? e.callback.apply(n.obj) : "");
});
}
var t = {
callback: $.noop,
pre: 100,
context: window
};
e = $.extend({}, t, e || {});
var n = [];
$(this).each(function() {
var e = this.nodeName;
if (!e) return;
n.push({
obj: this,
src: $(this).data("src"),
tag: e.toLowerCase()
});
}), i(), e.context.unbind("scroll", i), e.context.bind("scroll", i);
}, $.fn.fixed = function() {
var e = this, t = e.offset().top;
$(document).on("scroll", function(n) {
$(window).scrollTop() < t ? e.css("position", "static") : e.css("position", "fixed").css("top", 0);
});
};;//定义快捷操作
(function(e) {
var t = function() {};
"placeholder" in document.createElement("input") || (t = function() {
var t = e(this), n = t.attr("placeholder");
n && (t.focus(function() {
this.value === n && (this.value = ""), t.removeClass("placeholder");
}).blur(function() {
this.value === "" && (this.value = n, t.addClass("placeholder"));
}), t.val() === "" && t.addClass("placeholder"), t.val() || t.val(n));
}), e.fn.placeholder = t;
})(jQuery);;//控制台输出
$.extend({
log: function(e) {
console && console.log(e);
}
});;$.fn.extend({
serializeObject: function() {
var e = this.serializeArray(), t = {};
return $(e).each(function(e, n) {
t[n.name] = n.value;
}), t;
}
});;(function() {
function u(e, t) {
for (var n in t) e[n] = t[n];
return e;
}
function a(e, t) {
if (t === !0) {
var n;
if (Object.isArray(e)) {
n = [];
for (var r in e) e.hasOwnProperty(r) && (Object.isObject(e[r]) ? n.push(Object.clone(e[r], !0)) : n.push(e[r]));
} else {
n = {};
for (var r in e) e.hasOwnProperty(r) && (Object.isObject(e[r]) ? n[r] = Object.clone(e[r], !0) : n[r] = e[r]);
}
return n;
}
return u({}, e);
}
function f(e) {
return !!this && e.nodeType == 1;
}
function l(e) {
return Object.prototype.toString.call(e) === s;
}
function c(e) {
return Object.prototype.toString.call(e) === i;
}
function h(t) {
return Object.prototype.toString.call(t) === e;
}
function p(e) {
return Object.prototype.toString.call(e) === r;
}
function d(e) {
return Object.prototype.toString.call(e) === n;
}
function v(e) {
return Object.prototype.toString.call(e) === o;
}
function m(e) {
return typeof e == "undefined";
}
function g(e, t) {
var n = [];
for (var r in e) e.hasOwnProperty(r) && (t === !0 ? n.push([ encodeURIComponent(r), "=", encodeURIComponent(e[r]), "&" ].join("")) : n.push([ r, "=", e[r], "&" ].join("")));
return n.join("").slice(0, -1);
}
function y(e, t) {
if (typeof t == "undefined") return;
for (var n in e) if (e.hasOwnProperty(n) && t(e[n], n) === !1) break;
}
var e = "[object Function]", t = "[object Boolean]", n = "[object Number]", r = "[object String]", i = "[object Array]", s = "[object Object]", o = "[object Date]";
u(Object, {
extend: u,
clone: a,
isObject: l,
isElement: f,
isArray: c,
isFunction: h,
isString: p,
isNumber: d,
isDate: v,
isUndefined: m,
param: g,
each: y
});
})(), Object.extend(String.prototype, function() {
function e(e) {
return this.replace(/\{(\w+)\}/g, function(t, n) {
return e[n] !== undefined ? e[n] : t;
});
}
function t() {
return this.replace(/[^\x00-\xff]/g, "**").length;
}
function n(e, t) {
return e = e || 30, t = Object.isUndefined(t) ? "..." : t, this.length > e ? this.slice(0, e - t.length) + t : String(this);
}
function r(e) {
return e === !0 ? this.replace(/^\s+/, "") : e === !1 ? this.replace(/\s+$/, "") : this.replace(/^\s+/, "").replace(/\s+$/, "");
}
function s(e) {
var t = [ "&", "&amp;", "<", "&lt;", ">", "&gt;", " ", "&nbsp;", '"', "&quot;", "'", "&#39;" ];
e === !1 && t.reverse();
for (var n = 0, r = this; n < t.length; n += 2) r = r.replace(new RegExp(t[n], "g"), t[1 + n]);
return r;
}
function o(e) {
return this.indexOf(e) > -1;
}
function u(e) {
return this.lastIndexOf(e, 0) === 0;
}
function a(e) {
var t = this.length - e.length;
return t >= 0 && this.indexOf(e, t) === t;
}
function f() {
return this == "";
}
function l() {
return this.replace(/<\/?[^>]*\/?>/g, "");
}
function c() {
return /^\s*$/.test(this);
}
function h() {
var e, t = this, n, r, i = arguments.length;
if (i < 1) return l;
e = 0;
while (e < i) t = t.replace(/%s/, "{#" + e++ + "#}");
t.replace("%s", ""), e = 0;
while ((n = arguments[e]) !== undefined) r = new RegExp("{#" + e + "#}", "g"), t = t.replace(r, n), e++;
return t;
}
function p() {
var e = this, t = 0, n, r = 0;
while (n = e.charAt(t++)) r += n.charCodeAt().toString(16).length / 2;
return r;
}
var i = document.createElement("div");
return {
format: e,
sprintf: h,
text: l,
len: t,
truncate: n,
trim: String.prototype.trim || r,
html: s,
has: o,
startsWith: u,
endsWith: a,
empty: f,
blank: c,
bytes: p
};
}()), Object.extend(Function.prototype, function() {
function t(e, t) {
var n = e.length, r = t.length;
while (r--) e[n + r] = t[r];
return e;
}
function n(n, r) {
return n = e.call(n, 0), t(n, r);
}
function r(t) {
if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
var r = this, i = e.call(arguments, 1);
return function() {
var e = n(i, arguments);
return r.apply(t, e);
};
}
function i(t) {
var n = this, r = e.call(arguments, 1);
return t *= 1e3, window.setTimeout(function() {
return n.apply(n, r);
}, t);
}
function s() {
var e = t([ .01 ], arguments);
return this.delay.apply(this, e);
}
function o(e) {
var t = this;
return function() {
return e.apply(this, arguments) === !1 ? !1 : t.apply(this, arguments);
};
}
function u(e) {
var n = this;
return function() {
var r = n.apply(this, arguments), i = t([ r ], arguments);
return e.apply(this, i), r;
};
}
function a(e) {
var n = this;
return function() {
var r = t([ n.bind(this) ], arguments);
return e.apply(this, r);
};
}
var e = Array.prototype.slice;
return {
bind: r,
delay: i,
defer: s,
before: o,
after: u,
wrap: a
};
}()), function() {
function n(e, t) {
for (var n = 0, r = this.length >>> 0; n < r; n++) n in this && e.call(t, this[n], n, this);
}
function r() {
return this[this.length - 1];
}
function i(e) {
return e === !0 ? Object.clone.apply(this, arguments) : t.call(this, 0);
}
function s(e) {
var t = [];
return this.each(function(n, r) {
t.push(e(n, r));
}), t;
}
function o(e) {
var t = -1;
return this.each(function(n, r) {
if (e == n) return t = r, !1;
}), t;
}
var e = Array.prototype, t = e.slice;
Object.extend(e, {
each: Array.prototype.forEach || n,
indexOf: Array.prototype.indexOf || o,
last: r,
clone: i,
map: s
});
}();;define("common/qq/Class.js", [], function(e, t, n) {
try {
"use strict", t.create = function(e) {
var t = function() {
this.construct && this.construct.apply(this, arguments);
};
return e.apply(t.prototype, arguments), t;
}, function() {
function e(e) {
for (var t = 1, n = arguments.length; t < n; t++) for (var r in arguments[t]) e[r] = arguments[t][r];
return e;
}
function n() {
return this.__instance__ || (this.__instance__ = new this(arguments[0], arguments[1], arguments[2]));
}
function r(e) {
var t = i.call(this, e);
return t.prototype.parent = this, t;
}
function i(t) {
var i = typeof this == "function" ? this : function() {}, s = function() {
function n(e, r) {
e.Super && n(e.Super, r), e.init && e.init.apply(r, t);
}
var e = this, t = arguments;
e.Root = i.__base__, e.Super = i.prototype, n(e, e);
};
return e(s.prototype, i.prototype || {}, t), s.__base__ = i.__base__ || s.prototype, s.GetStaticInstance = n, s.Inherit = s.inherit = r, s;
}
t.declare = i;
}();
} catch (r) {
wx.jslog({
src: "common/qq/Class.js"
}, r);
}
});;(function(e) {
function r(e) {
return e >= 49 && e <= 90;
}
function i(e) {
return (e || "").toLowerCase().split("+").sort().join("").replace(/\s/ig, "");
}
function s(e) {
var t = e.type;
return t == "mousewheel" || t == "DOMMouseScroll";
}
function o(e) {
return e.wheelDelta > 0 || e.detail < 0 ? "mousewheelup" : "mousewheeldown";
}
function u(e) {
var i = e.keyCode, u = t[i], a = !u && r(i) && String.fromCharCode(i).toLowerCase() || s(e) && o(e), f = e.ctrlKey, l = e.shiftKey, c = e.altKey, h = l && (n[a] || n[u]), p = [];
return !f && !c && h && (u = h, l = a = null), f && p.push("ctrl"), l && p.push("shift"), c && p.push("alt"), u && p.push(u), a && p.push(a), p.join("+");
}
function a(e, t) {
return i(u(e)) == i(t);
}
var t = {
27: "esc",
9: "tab",
32: "space",
13: "enter",
8: "backspace",
145: "scroll",
20: "capslock",
144: "numlock",
19: "pause",
45: "insert",
36: "home",
46: "del",
35: "end",
33: "pageup",
34: "pagedown",
37: "left",
38: "up",
39: "right",
40: "down",
107: "=",
109: "-",
112: "f1",
113: "f2",
114: "f3",
115: "f4",
116: "f5",
117: "f6",
118: "f7",
119: "f8",
120: "f9",
121: "f10",
122: "f11",
123: "f12",
188: "<",
190: ">",
191: "/",
192: "`",
219: "[",
220: "\\",
221: "]",
222: "'"
}, n = {
"`": "~",
"1": "!",
"2": "@",
"3": "#",
"4": "$",
"5": "%",
"6": "^",
"7": "&",
"8": "*",
"9": "(",
"0": ")",
"-": "_",
"=": "+",
";": ":",
"'": '"',
",": "<",
".": ">",
"/": "?",
"\\": "|"
};
e.wx = e.wx || {}, e.wx.hotkeyStr = u, e.wx.isHotkey = a;
})(window);;define("common/wx/Tips.js", [], function(e, t, n) {
try {
"use strict";
var r = t, i = {
errMsg: "系统发生错误，请稍后重试",
sucMsg: "操作成功",
delay: 2
}, s;
function o(e, t, n) {
$(".JS_TIPS").remove(), s = $(template.compile('<div class="JS_TIPS page_tips {type}" id="wxTips_' + (new Date).getTime() + '"><div class="inner">{=msg}</div></div>')({
type: e || "error",
msg: t
})).appendTo("body").fadeIn(), u.delay(n || i.delay, s);
}
function u(e) {
e.length > 0 && e.fadeOut({
complete: function() {
e.remove();
}
});
}
r.err = function(e, t) {
o("error", e || i.errMsg, t);
}, r.suc = function(e, t) {
o("success", e || i.sucMsg, t);
};
} catch (a) {
wx.jslog({
src: "common/wx/Tips.js"
}, a);
}
});;define("common/wx/Cgi.js", [ "common/qq/mask.js", "common/wx/dialog.js", "common/wx/Tips.js" ], function(e, t, n) {
try {
"use strict";
var r = e("common/qq/mask.js"), i = e("common/wx/dialog.js"), s = e("common/wx/Tips.js"), o = {
dataType: "json",
mask: !1,
timeout: 2e4,
error: $.noop,
mock: !1
};
t.get = function(e, t, n) {
return u("get", e, t || $.noop, n);
}, t.post = function(e, t, n) {
return u("post", e, t || $.noop, n);
};
function u(t, n, i, u) {
typeof n == "string" && n.length > 0 && (n = {
url: n
}), u === !0 && (n.debug = !0);
var f = (n.url || "").split("?");
n.url = f[0];
var c = {
token: a.t,
lang: a.lang,
random: Math.random() + "",
f: "json",
ajax: "1"
};
if (f.length > 1) {
var h = f[1].split("&");
$.each(h, function(e, t) {
t = t.split("="), t[0] !== undefined && t[1] !== undefined && (c[t[0]] = t[1]);
});
}
i = n.success || i, n = $.extend(!0, {}, o, n, {
type: t,
data: c,
success: function(e) {
n.mask && r.hide();
try {
i(e);
} catch (t) {
console.log(t);
}
}
});
var p = n.error || null;
n.error = function(e, t, i) {
n.mask && r.hide();
if (n.errReport === !1) return;
$.ajax({
url: "/cgi-bin/jslog?1=1",
data: {
content: "[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={userAgent}] [page={page}]".format({
uin: a.uin,
useragent: window.navigator.userAgent,
page: location.href,
url: n.url,
param: $.param(n.data),
info: t
}),
id: 3,
level: "error"
},
type: "POST"
}), p && typeof p == "function" && p(e, t, i);
if (t == "timeout") {
s.err("你的网络环境较差，请稍后重试");
if (!n.handlerTimeout) return;
}
p = null;
};
if (!n.mock && !n.debug) return !n.mask || ($.isPlainObject(n.mask) ? r.show(n.mask) : r.show()), l = n.url, $.ajax(n);
e.async("common/lib/MockJax", function() {
return n.mock === !0 ? n.mock = {
responseText: {
ret: 0,
data: {},
url: n.url,
param: n.data
}
} : n.mock && !n.mock.responseText && !n.mock.response && (n.mock = {
responseText: n.mock
}), n.mock.url = n.mock.url || n.url, $.mockjax(n.mock), n.mask && r.show(), l = n.url, $.ajax(n);
});
}
var a = $.extend(!0, {}, wx.data, {
msg: {
"0": "恭喜你，操作成功！",
"-1": "系统错误，请稍后尝试。",
"-2": "参数错误，请核对参数后重试。",
"-3": "登录态超时，请重新登录。",
"-4": "请求页面的域名没有授权。",
"-5": "请求方式错误，请确认请求方式后重试。",
"-6": "表单名称验证出错，请核对表单名称后重试。",
"-7": "对不起，你没有权限访问目标请求。"
}
}), f = {}, l = "";
t.addShow = function(e) {
$.each(e, function(e, t) {
f[t.url] || (f[t.url] = {}), f[t.url][t.ret] = t.msg;
});
}, t.show = function(e, t) {
var n = e.base_resp.ret, r = "";
l ? (r = f[l] && f[l][n], r || (r = a.msg[n] || "系统繁忙，请稍后尝试！")) : r = a.msg[n] || "系统繁忙，请稍后尝试！";
if (n == 0) {
t ? i.show({
type: "succ",
msg: "系统提示|" + r
}) : s.succ(r);
return;
}
t ? i.show("系统错误|" + r) : s.err(r);
};
} catch (c) {
wx.jslog({
src: "common/wx/Cgi.js"
}, c);
}
});;define("common/wx/dialog.js", [ "common/lib/jquery.ui.draggable.js", "tpl/dialog.html.js" ], function(e, t, n) {
try {
"use strict", e("common/lib/jquery.ui.draggable.js");
var r = {
title: "温馨提示",
type: "warn",
msg: "错误信息|对不起，系统繁忙请稍后尝试。",
buttons: [ {
text: "确定",
click: function(e) {
this.remove(e);
}
} ],
width: 720,
height: 0,
draggable: !0,
mask: !0
}, i = {
uid: 0,
uiName: "wxDialog",
iconClass: {
succ: "success",
err: "error",
warn: "warn"
},
btTypes: {
primary: "btn_primary",
normal: "btn_default",
disabled: "btn_disabled"
}
};
i.html = e("tpl/dialog.html.js");
function s(e) {
var t = this;
typeof e == "string" && (e = {
msg: e
}), e = $.extend(!0, {}, r, e), t.id = e.id = [ i.uiName, "_", ++i.uid ].join(""), e.icon = i.iconClass[e.type || "warn"];
var n = [];
n = e.msg.split("|"), n[0] ? n[1] ? e.msg = {
title: n[0],
text: n[1],
msgClass: ""
} : e.msg = {
title: e.msg,
msgClass: "single_line"
} : e.msg = {
text: n[1],
msgClass: "single_line"
}, $.each(e.buttons, function(e, t) {
t.type = i.btTypes[t.type || "primary"];
}), t.opt = e, $(template.compile(i.html)(e)).appendTo("body"), t.dom = $("#" + this.id).parent(), t.dom.css("margin-left", -1 * t.dom.outerWidth() / 2).css("margin-top", -1 * t.dom.outerHeight() / 2), t.dom.fadeIn(), e.draggable && t.dom.draggable(), function() {
$.each($("#" + t.id + " .js_btn"), function(n, r) {
e.buttons[n].click && $(r).click(function() {
e.buttons[n].click.apply(t);
});
}), $("#" + t.id + " .pop_closed").click(function() {
if (e.close && typeof e.close == "function") {
e.close() && t.remove();
return;
}
t.remove();
});
}();
}
s.prototype = {
hide: function() {
this.opt.mask && this.dom.next().remove(), this.dom.fadeOut();
},
remove: function() {
this.opt.mask && this.dom.next().remove(), this.dom.remove();
}
}, t.show = function(e) {
return new s(e);
};
} catch (o) {
wx.jslog({
src: "common/wx/dialog.js"
}, o);
}
});;define("common/wx/popup.js", [ "common/wx/widgetBridge.js", "tpl/popup.html.js" ], function(e, t, n) {
try {
"use strict", e("common/wx/widgetBridge.js");
var r = e("tpl/popup.html.js"), i = template.compile(r), s = {
disabled: "btn_disabled",
primary: "btn_primary",
"default": "btn_default"
};
$.widgetBridge("popup", {
$dialogWrp: null,
options: {
title: "温馨提示",
width: 726,
height: null,
template: template.compile,
data: {},
buttons: [],
onHide: null,
onShow: null,
onOK: null,
onCancel: null,
mask: !0,
autoShow: !0
},
_create: function() {
var e = this, t = $.extend(!0, {}, this.options), n = function() {
e.hide();
};
t.buttons && !$.isArray(t.buttons) && (t.buttons = [ t.buttons ]), !t.buttons.length && t.onOK && (t.buttons = [ {
text: "确定",
type: "primary",
click: function() {
var e = t.onOK && t.onOK.call(this);
!e && n();
}
}, {
text: "取消",
click: function() {
var e = t.onCancel && t.onCancel.call(this);
!e && n();
}
} ]), $.each(t.buttons, function(e, t) {
t.type = s[t.type || "default"];
});
var r;
if (this.element.is("script[type=text/html]")) r = this.element.html(), this.options.data && this.options.template && (r = this.options.template(r)(this.options.data)); else {
var o = $("<div></div>").append(this.element.clone()), r = o.html();
this.options.data && this.options.template && (r = this.options.template(r)(this.options.data));
}
return t.content = r, this.$dialogWrp = $(i(t)).appendTo("body"), this.$dialogWrp.find(".dialog_bd").children(":first").show(), t.autoShow || this.$dialogWrp.hide(), this.$dialogWrp.find(".pop_closed").click(t.onClose || n), this.$dialogWrp.find(".js_btn").each(function(n, r) {
var i = t.buttons[n].click, s = i ? function(t) {
i.call(e, t);
} : function() {};
$(this).click(s);
}), this.resetPosition(), this.get();
},
show: function() {
var e = this, t = e.options.onShow, n;
this.$dialogWrp.fadeIn(function() {
n && (typeof t == "function" && t.call(e), n = !1);
});
},
resetPosition: function() {
$(this.$dialogWrp.get(0)).css({
"margin-left": -1 * this.$dialogWrp.outerWidth() / 2,
"margin-top": -1 * this.$dialogWrp.outerHeight() / 2
});
},
get: function() {
return this.$dialogWrp.filter(".dialog_wrp");
},
hide: function() {
var e = this, t = e.options.onHide || e.options.close, n = !0;
this.$dialogWrp.fadeOut(function() {
n && (typeof t == "function" && t.call(e), n = !1);
});
},
remove: function() {
this.destroy(), this.$dialogWrp.remove();
}
});
} catch (o) {
wx.jslog({
src: "common/wx/popup.js"
}, o);
}
});;