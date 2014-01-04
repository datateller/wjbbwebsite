define("tpl/dialog.html.js", [], function(e, t, n) {
return '<div class="dialog_wrp" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      <a href="javascript:;" class="pop_closed">关闭</a>\n    </div>\n    <div class="dialog_bd">\n      <div class="page_msg simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if}\n          </div>\n        </div>\n      </div>\n    </div> \n    <div class="dialog_ft">\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn">{bt.text}</a>\n      {/each}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n';
});define("common/lib/jquery.ui.draggable.js", [], function(e, t, n) {
try {
(function(e, t) {
function n(t, n) {
var i, s, o, u = t.nodeName.toLowerCase();
return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + s + "]")[0], !!o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t);
}
function r(t) {
return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
return e.css(this, "visibility") === "hidden";
}).length;
}
var i = 0, s = /^ui-id-\d+$/;
e.ui = e.ui || {}, e.extend(e.ui, {
version: "1.10.3"
}), e.fn.extend({
focus: function(t) {
return function(n, r) {
return typeof n == "number" ? this.each(function() {
var t = this;
setTimeout(function() {
e(t).focus(), r && r.call(t);
}, n);
}) : t.apply(this, arguments);
};
}(e.fn.focus),
scrollParent: function() {
var t;
return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0) : t = this.parents().filter(function() {
return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
},
zIndex: function(n) {
if (n !== t) return this.css("zIndex", n);
if (this.length) {
var r = e(this[0]), i, s;
while (r.length && r[0] !== document) {
i = r.css("position");
if (i === "absolute" || i === "relative" || i === "fixed") {
s = parseInt(r.css("zIndex"), 10);
if (!isNaN(s) && s !== 0) return s;
}
r = r.parent();
}
}
return 0;
},
uniqueId: function() {
return this.each(function() {
this.id || (this.id = "ui-id-" + ++i);
});
},
removeUniqueId: function() {
return this.each(function() {
s.test(this.id) && e(this).removeAttr("id");
});
}
}), e.extend(e.expr[":"], {
data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
return function(n) {
return !!e.data(n, t);
};
}) : function(t, n, r) {
return !!e.data(t, r[3]);
},
focusable: function(t) {
return n(t, !isNaN(e.attr(t, "tabindex")));
},
tabbable: function(t) {
var r = e.attr(t, "tabindex"), i = isNaN(r);
return (i || r >= 0) && n(t, !i);
}
}), e.extend(e.ui, {
plugin: {
add: function(t, n, r) {
var i, s = e.ui[t].prototype;
for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([ n, r[i] ]);
},
call: function(e, t, n) {
var r, i = e.plugins[t];
if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n);
}
},
hasScroll: function(t, n) {
if (e(t).css("overflow") === "hidden") return !1;
var r = n && n === "left" ? "scrollLeft" : "scrollTop", i = !1;
return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i);
}
});
})(jQuery), function(e, t) {
var n = 0, r = Array.prototype.slice, i = e.cleanData;
e.cleanData = function(t) {
for (var n = 0, r; (r = t[n]) != null; n++) try {
e(r).triggerHandler("remove");
} catch (s) {}
i(t);
}, e.widget = function(t, n, r) {
var i, s, o, u, a = {}, f = t.split(".")[0];
t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
return !!e.data(t, i);
}, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
if (!this._createWidget) return new o(e, t);
arguments.length && this._createWidget(e, t);
}, e.extend(o, s, {
version: r.version,
_proto: e.extend({}, r),
_childConstructors: []
}), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
if (!e.isFunction(r)) {
a[t] = r;
return;
}
a[t] = function() {
var e = function() {
return n.prototype[t].apply(this, arguments);
}, i = function(e) {
return n.prototype[t].apply(this, e);
};
return function() {
var t = this._super, n = this._superApply, s;
return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s;
};
}();
}), o.prototype = e.widget.extend(u, {
widgetEventPrefix: s ? u.widgetEventPrefix : t
}, a, {
constructor: o,
namespace: f,
widgetName: t,
widgetFullName: i
}), s ? (e.each(s._childConstructors, function(t, n) {
var r = n.prototype;
e.widget(r.namespace + "." + r.widgetName, o, n._proto);
}), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o);
}, e.widget.extend = function(n) {
var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
for (; s < o; s++) for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
return n;
}, e.widget.bridge = function(n, i) {
var s = i.prototype.widgetFullName || n;
e.fn[n] = function(o) {
var u = typeof o == "string", a = r.call(arguments, 1), f = this;
return o = !u && a.length ? e.widget.extend.apply(null, [ o ].concat(a)) : o, u ? this.each(function() {
var r, i = e.data(this, s);
if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
r = i[o].apply(i, a);
if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1;
}) : this.each(function() {
var t = e.data(this, s);
t ? t.option(o || {})._init() : e.data(this, s, new i(o, this));
}), f;
};
}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
widgetName: "widget",
widgetEventPrefix: "",
defaultElement: "<div>",
options: {
disabled: !1,
create: null
},
_createWidget: function(t, r) {
r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
remove: function(e) {
e.target === r && this.destroy();
}
}), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
},
_getCreateOptions: e.noop,
_getCreateEventData: e.noop,
_create: e.noop,
_init: e.noop,
destroy: function() {
this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
},
_destroy: e.noop,
widget: function() {
return this.element;
},
option: function(n, r) {
var i = n, s, o, u;
if (arguments.length === 0) return e.widget.extend({}, this.options);
if (typeof n == "string") {
i = {}, s = n.split("."), n = s.shift();
if (s.length) {
o = i[n] = e.widget.extend({}, this.options[n]);
for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
n = s.pop();
if (r === t) return o[n] === t ? null : o[n];
o[n] = r;
} else {
if (r === t) return this.options[n] === t ? null : this.options[n];
i[n] = r;
}
}
return this._setOptions(i), this;
},
_setOptions: function(e) {
var t;
for (t in e) this._setOption(t, e[t]);
return this;
},
_setOption: function(e, t) {
return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
},
enable: function() {
return this._setOption("disabled", !1);
},
disable: function() {
return this._setOption("disabled", !0);
},
_on: function(t, n, r) {
var i, s = this;
typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
function u() {
if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
return (typeof o == "string" ? s[o] : o).apply(s, arguments);
}
typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
var a = r.match(/^(\w+)\s*(.*)$/), f = a[1] + s.eventNamespace, l = a[2];
l ? i.delegate(l, f, u) : n.bind(f, u);
});
},
_off: function(e, t) {
t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t);
},
_delay: function(e, t) {
function n() {
return (typeof e == "string" ? r[e] : e).apply(r, arguments);
}
var r = this;
return setTimeout(n, t || 0);
},
_hoverable: function(t) {
this.hoverable = this.hoverable.add(t), this._on(t, {
mouseenter: function(t) {
e(t.currentTarget).addClass("ui-state-hover");
},
mouseleave: function(t) {
e(t.currentTarget).removeClass("ui-state-hover");
}
});
},
_focusable: function(t) {
this.focusable = this.focusable.add(t), this._on(t, {
focusin: function(t) {
e(t.currentTarget).addClass("ui-state-focus");
},
focusout: function(t) {
e(t.currentTarget).removeClass("ui-state-focus");
}
});
},
_trigger: function(t, n, r) {
var i, s, o = this.options[t];
r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
if (s) for (i in s) i in n || (n[i] = s[i]);
return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [ n ].concat(r)) === !1 || n.isDefaultPrevented());
}
}, e.each({
show: "fadeIn",
hide: "fadeOut"
}, function(t, n) {
e.Widget.prototype["_" + t] = function(r, i, s) {
typeof i == "string" && (i = {
effect: i
});
var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
i = i || {}, typeof i == "number" && (i = {
duration: i
}), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
e(this)[t](), s && s.call(r[0]), n();
});
};
});
}(jQuery), function(e, t) {
var n = !1;
e(document).mouseup(function() {
n = !1;
}), e.widget("ui.mouse", {
version: "1.10.3",
options: {
cancel: "input,textarea,button,select,option",
distance: 1,
delay: 0
},
_mouseInit: function() {
var t = this;
this.element.bind("mousedown." + this.widgetName, function(e) {
return t._mouseDown(e);
}).bind("click." + this.widgetName, function(n) {
if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1;
}), this.started = !1;
},
_mouseDestroy: function() {
this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
},
_mouseDown: function(t) {
if (n) return;
this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
var r = this, i = t.which === 1, s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
if (!i || s || !this._mouseCapture(t)) return !0;
this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
r.mouseDelayMet = !0;
}, this.options.delay));
if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
this._mouseStarted = this._mouseStart(t) !== !1;
if (!this._mouseStarted) return t.preventDefault(), !0;
}
return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
return r._mouseMove(e);
}, this._mouseUpDelegate = function(e) {
return r._mouseUp(e);
}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0;
},
_mouseMove: function(t) {
return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
},
_mouseUp: function(t) {
return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1;
},
_mouseDistanceMet: function(e) {
return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
},
_mouseDelayMet: function() {
return this.mouseDelayMet;
},
_mouseStart: function() {},
_mouseDrag: function() {},
_mouseStop: function() {},
_mouseCapture: function() {
return !0;
}
});
}(jQuery), function(e, t) {
e.widget("ui.draggable", e.ui.mouse, {
version: "1.10.3",
widgetEventPrefix: "drag",
options: {
addClasses: !0,
appendTo: "parent",
axis: !1,
connectToSortable: !1,
containment: !1,
cursor: "auto",
cursorAt: !1,
grid: !1,
handle: !1,
helper: "original",
iframeFix: !1,
opacity: !1,
refreshPositions: !1,
revert: !1,
revertDuration: 500,
scope: "default",
scroll: !0,
scrollSensitivity: 20,
scrollSpeed: 20,
snap: !1,
snapMode: "both",
snapTolerance: 20,
stack: !1,
zIndex: !1,
drag: null,
start: null,
stop: null
},
_create: function() {
this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit();
},
_destroy: function() {
this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy();
},
_mouseCapture: function(t) {
var n = this.options;
return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
width: this.offsetWidth + "px",
height: this.offsetHeight + "px",
position: "absolute",
opacity: "0.001",
zIndex: 1e3
}).css(e(this).offset()).appendTo("body");
}), !0) : !1);
},
_mouseStart: function(t) {
var n = this.options;
return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
top: this.offset.top - this.margins.top,
left: this.offset.left - this.margins.left
}, this.offset.scroll = !1, e.extend(this.offset, {
click: {
left: t.pageX - this.offset.left,
top: t.pageY - this.offset.top
},
parent: this._getParentOffset(),
relative: this._getRelativeOffset()
}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
},
_mouseDrag: function(t, n) {
this.offsetParentCssPosition === "fixed" && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
if (!n) {
var r = this._uiHash();
if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
this.position = r.position;
}
if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
},
_mouseStop: function(t) {
var n = this, r = !1;
return e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), this.options.helper === "original" && !e.contains(this.element[0].ownerDocument, this.element[0]) ? !1 : (this.options.revert === "invalid" && !r || this.options.revert === "valid" && r || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
n._trigger("stop", t) !== !1 && n._clear();
}) : this._trigger("stop", t) !== !1 && this._clear(), !1);
},
_mouseUp: function(t) {
return e("div.ui-draggable-iframeFix").each(function() {
this.parentNode.removeChild(this);
}), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t);
},
cancel: function() {
return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
},
_getHandle: function(t) {
return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
},
_createHelper: function(t) {
var n = this.options, r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [ t ])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
return r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r;
},
_adjustOffsetFromHelper: function(t) {
typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
left: +t[0],
top: +t[1] || 0
}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
},
_getParentOffset: function() {
var t = this.offsetParent.offset();
this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
top: 0,
left: 0
};
return {
top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
};
},
_getRelativeOffset: function() {
if (this.cssPosition === "relative") {
var e = this.element.position();
return {
top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
};
}
return {
top: 0,
left: 0
};
},
_cacheMargins: function() {
this.margins = {
left: parseInt(this.element.css("marginLeft"), 10) || 0,
top: parseInt(this.element.css("marginTop"), 10) || 0,
right: parseInt(this.element.css("marginRight"), 10) || 0,
bottom: parseInt(this.element.css("marginBottom"), 10) || 0
};
},
_cacheHelperProportions: function() {
this.helperProportions = {
width: this.helper.outerWidth(),
height: this.helper.outerHeight()
};
},
_setContainment: function() {
var t, n, r, i = this.options;
if (!i.containment) {
this.containment = null;
return;
}
if (i.containment === "window") {
this.containment = [ e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
return;
}
if (i.containment === "document") {
this.containment = [ 0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
return;
}
if (i.containment.constructor === Array) {
this.containment = i.containment;
return;
}
i.containment === "parent" && (i.containment = this.helper[0].parentNode), n = e(i.containment), r = n[0];
if (!r) return;
t = n.css("overflow") !== "hidden", this.containment = [ (parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], this.relative_container = n;
},
_convertPositionTo: function(t, n) {
n || (n = this.position);
var r = t === "absolute" ? 1 : -1, i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
return this.offset.scroll || (this.offset.scroll = {
top: i.scrollTop(),
left: i.scrollLeft()
}), {
top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
};
},
_generatePosition: function(t) {
var n, r, i, s, o = this.options, u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = t.pageX, f = t.pageY;
return this.offset.scroll || (this.offset.scroll = {
top: u.scrollTop(),
left: u.scrollLeft()
}), this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [ this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top ]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)), {
top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
};
},
_clear: function() {
this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
},
_trigger: function(t, n, r) {
return r = r || this._uiHash(), e.ui.plugin.call(this, t, [ n, r ]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r);
},
plugins: {},
_uiHash: function() {
return {
helper: this.helper,
position: this.position,
originalPosition: this.originalPosition,
offset: this.positionAbs
};
}
}), e.ui.plugin.add("draggable", "connectToSortable", {
start: function(t, n) {
var r = e(this).data("ui-draggable"), i = r.options, s = e.extend({}, n, {
item: r.element
});
r.sortables = [], e(i.connectToSortable).each(function() {
var n = e.data(this, "ui-sortable");
n && !n.options.disabled && (r.sortables.push({
instance: n,
shouldRevert: n.options.revert
}), n.refreshPositions(), n._trigger("activate", t, s));
});
},
stop: function(t, n) {
var r = e(this).data("ui-draggable"), i = e.extend({}, n, {
item: r.element
});
e.each(r.sortables, function() {
this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
top: "auto",
left: "auto"
})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i));
});
},
drag: function(t, n) {
var r = e(this).data("ui-draggable"), i = this;
e.each(r.sortables, function() {
var s = !1, o = this;
this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function() {
return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s;
})), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
return n.helper[0];
}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1);
});
}
}), e.ui.plugin.add("draggable", "cursor", {
start: function() {
var t = e("body"), n = e(this).data("ui-draggable").options;
t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor);
},
stop: function() {
var t = e(this).data("ui-draggable").options;
t._cursor && e("body").css("cursor", t._cursor);
}
}), e.ui.plugin.add("draggable", "opacity", {
start: function(t, n) {
var r = e(n.helper), i = e(this).data("ui-draggable").options;
r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity);
},
stop: function(t, n) {
var r = e(this).data("ui-draggable").options;
r._opacity && e(n.helper).css("opacity", r._opacity);
}
}), e.ui.plugin.add("draggable", "scroll", {
start: function() {
var t = e(this).data("ui-draggable");
t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset());
},
drag: function(t) {
var n = e(this).data("ui-draggable"), r = n.options, i = !1;
if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
if (!r.axis || r.axis !== "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
if (!r.axis || r.axis !== "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed);
} else {
if (!r.axis || r.axis !== "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
if (!r.axis || r.axis !== "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed));
}
i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t);
}
}), e.ui.plugin.add("draggable", "snap", {
start: function() {
var t = e(this).data("ui-draggable"), n = t.options;
t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
var n = e(this), r = n.offset();
this !== t.element[0] && t.snapElements.push({
item: this,
width: n.outerWidth(),
height: n.outerHeight(),
top: r.top,
left: r.left
});
});
},
drag: function(t, n) {
var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"), d = p.options, v = d.snapTolerance, m = n.offset.left, g = m + p.helperProportions.width, y = n.offset.top, b = y + p.helperProportions.height;
for (c = p.snapElements.length - 1; c >= 0; c--) {
u = p.snapElements[c].left, a = u + p.snapElements[c].width, f = p.snapElements[c].top, l = f + p.snapElements[c].height;
if (g < u - v || m > a + v || b < f - v || y > l + v || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item)) {
p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
snapItem: p.snapElements[c].item
})), p.snapElements[c].snapping = !1;
continue;
}
d.snapMode !== "inner" && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo("relative", {
top: f - p.helperProportions.height,
left: 0
}).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
top: l,
left: 0
}).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: u - p.helperProportions.width
}).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: a
}).left - p.margins.left)), h = r || i || s || o, d.snapMode !== "outer" && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo("relative", {
top: f,
left: 0
}).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
top: l - p.helperProportions.height,
left: 0
}).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: u
}).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: a - p.helperProportions.width
}).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
snapItem: p.snapElements[c].item
})), p.snapElements[c].snapping = r || i || s || o || h;
}
}
}), e.ui.plugin.add("draggable", "stack", {
start: function() {
var t, n = this.data("ui-draggable").options, r = e.makeArray(e(n.stack)).sort(function(t, n) {
return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0);
});
if (!r.length) return;
t = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(n) {
e(this).css("zIndex", t + n);
}), this.css("zIndex", t + r.length);
}
}), e.ui.plugin.add("draggable", "zIndex", {
start: function(t, n) {
var r = e(n.helper), i = e(this).data("ui-draggable").options;
r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex);
},
stop: function(t, n) {
var r = e(this).data("ui-draggable").options;
r._zIndex && e(n.helper).css("zIndex", r._zIndex);
}
});
}(jQuery);
} catch (r) {
wx.jslog({
src: "common/lib/jquery.ui.draggable.js"
}, r);
}
});define("common/lib/spin.js", [], function(e, t, n) {
try {
var r = function() {
function e(e, t) {
var n = ~~((e[a] - 1) / 2);
for (var r = 1; r <= n; r++) t(e[r * 2 - 1], e[r * 2]);
}
function t(t) {
var n = document.createElement(t || "div");
return e(arguments, function(e, t) {
n[e] = t;
}), n;
}
function n(e, t, r) {
return r && !r[x] && n(e, r), e.insertBefore(t, r || null), e;
}
function r(e, t) {
var n = [ p, t, ~~(e * 100) ].join("-"), r = "{" + p + ":" + e + "}", i;
if (!H[n]) {
for (i = 0; i < P[a]; i++) try {
j.insertRule("@" + (P[i] && "-" + P[i].toLowerCase() + "-" || "") + "keyframes " + n + "{0%{" + p + ":1}" + t + "%" + r + "to" + r + "}", j.cssRules[a]);
} catch (s) {}
H[n] = 1;
}
return n;
}
function i(e, t) {
var n = e[m], r, i;
if (n[t] !== undefined) return t;
t = t.charAt(0).toUpperCase() + t.slice(1);
for (i = 0; i < P[a]; i++) {
r = P[i] + t;
if (n[r] !== undefined) return r;
}
}
function s(t) {
return e(arguments, function(e, n) {
t[m][i(t, e) || e] = n;
}), t;
}
function o(t) {
return e(arguments, function(e, n) {
t[e] === undefined && (t[e] = n);
}), t;
}
var u = "width", a = "length", f = "radius", l = "lines", c = "trail", h = "color", p = "opacity", d = "speed", v = "shadow", m = "style", g = "height", y = "left", b = "top", w = "px", E = "childNodes", S = "firstChild", x = "parentNode", T = "position", N = "relative", C = "absolute", k = "animation", L = "transform", A = "Origin", O = "Timeout", M = "coord", _ = "#000", D = m + "Sheets", P = "webkit0Moz0ms0O".split(0), H = {}, B;
n(document.getElementsByTagName("head")[0], t(m));
var j = document[D][document[D][a] - 1], F = function(e) {
this.opts = o(e || {}, l, 12, c, 100, a, 7, u, 5, f, 10, h, _, p, .25, d, 1);
}, I = F.prototype = {
spin: function(e) {
var t = this, r = t.el = t[l](t.opts);
e && n(e, s(r, y, ~~(e.offsetWidth / 2) + w, b, ~~(e.offsetHeight / 2) + w), e[S]);
if (!B) {
var i = t.opts, o = 0, u = 20 / i[d], a = (1 - i[p]) / (u * i[c] / 100), f = u / i[l];
(function h() {
o++;
for (var e = i[l]; e; e--) {
var n = Math.max(1 - (o + e * f) % u * a, i[p]);
t[p](r, i[l] - e, n, i);
}
t[O] = t.el && window["set" + O](h, 50);
})();
}
return t;
},
stop: function() {
var e = this, t = e.el;
return window["clear" + O](e[O]), t && t[x] && t[x].removeChild(t), e.el = undefined, e;
}
};
I[l] = function(e) {
function i(n, r) {
return s(t(), T, C, u, e[a] + e[u] + w, g, e[u] + w, "background", n, "boxShadow", r, L + A, y, L, "rotate(" + ~~(360 / e[l] * E) + "deg) translate(" + e[f] + w + ",0)", "borderRadius", "100em");
}
var o = s(t(), T, N), m = r(e[p], e[c]), E = 0, S;
for (; E < e[l]; E++) S = s(t(), T, C, b, 1 + ~(e[u] / 2) + w, L, "translate3d(0,0,0)", k, m + " " + 1 / e[d] + "s linear infinite " + (1 / e[l] / e[d] * E - 1 / e[d]) + "s"), e[v] && n(S, s(i(_, "0 0 4px " + _), b, 2 + w)), n(o, n(S, i(e[h], "0 0 1px rgba(0,0,0,.1)")));
return o;
}, I[p] = function(e, t, n) {
e[E][t][m][p] = n;
};
var q = "behavior", R = "url(#default#VML)", U = "group0roundrect0fill0stroke".split(0);
return function() {
var e = s(t(U[0]), q, R), r;
if (!i(e, L) && e.adj) {
for (r = 0; r < U[a]; r++) j.addRule(U[r], q + ":" + R);
I[l] = function() {
function e() {
return s(t(U[0], M + "size", c + " " + c, M + A, -o + " " + -o), u, c, g, c);
}
function r(r, a, c) {
n(d, n(s(e(), "rotation", 360 / i[l] * r + "deg", y, ~~a), n(s(t(U[1], "arcsize", 1), u, o, g, i[u], y, i[f], b, -i[u] / 2, "filter", c), t(U[2], h, i[h], p, i[p]), t(U[3], p, 0))));
}
var i = this.opts, o = i[a] + i[u], c = 2 * o, d = e(), m = ~(i[a] + i[f] + i[u]) + w, E;
if (i[v]) for (E = 1; E <= i[l]; E++) r(E, -2, "progid:DXImage" + L + ".Microsoft.Blur(pixel" + f + "=2,make" + v + "=1," + v + p + "=.3)");
for (E = 1; E <= i[l]; E++) r(E);
return n(s(t(), "margin", m + " 0 0 " + m, T, N), d);
}, I[p] = function(e, t, n, r) {
r = r[v] && r[l] || 0, e[S][E][t + r][S][S][p] = n;
};
} else B = i(e, k);
}(), F;
}();
$.fn.spin = function(e, t) {
return this.each(function() {
var n = $(this), i = n.data();
i.spinner && (i.spinner.stop(), delete i.spinner), e !== !1 && (e = $.extend({
color: t || n.css("color")
}, $.fn.spin.presets[e] || e), i.spinner = (new r(e)).spin(this));
});
}, $.fn.spin.presets = {
tiny: {
lines: 8,
length: 2,
width: 2,
radius: 3
},
small: {
lines: 8,
length: 4,
width: 3,
radius: 5
},
large: {
lines: 10,
length: 8,
width: 4,
radius: 8
}
};
} catch (i) {
wx.jslog({
src: "common/lib/spin.js"
}, i);
}
});define("common/qq/mask.js", [ "common/lib/spin.js" ], function(e, t, n) {
try {
"use strict", e("common/lib/spin.js");
var r = 0, i = '<div class="mask"></div>';
function s(e) {
if (this.mask) this.mask.show(); else {
var t = "body";
e && !!e.parent && (t = $(e.parent)), this.mask = $(i).appendTo(t), this.mask.id = "wxMask_" + ++r;
}
if (e) {
if (e.spin === !1) return this;
this.mask.spin(e.spin || "flower");
}
return this;
}
s.prototype = {
show: function() {
this.mask.show();
},
hide: function() {
this.mask.hide();
},
remove: function() {
this.mask.remove();
}
}, t.show = function(e) {
return new s(e);
}, t.hide = function() {
$(".mask").hide();
}, t.remove = function() {
$(".mask").remove();
};
} catch (o) {
wx.jslog({
src: "common/qq/mask.js"
}, o);
}
});define("common/lib/highcharts.js", [], function(e, t, n) {
return function() {
function e(e, t) {
var n;
e || (e = {});
for (n in t) e[n] = t[n];
return e;
}
function t() {
var e, t = arguments.length, n = {}, r = function(e, t) {
var n, i;
for (i in t) t.hasOwnProperty(i) && (n = t[i], typeof e != "object" && (e = {}), e[i] = n && typeof n == "object" && Object.prototype.toString.call(n) !== "[object Array]" && typeof n.nodeType != "number" ? r(e[i] || {}, n) : t[i]);
return e;
};
for (e = 0; e < t; e++) n = r(n, arguments[e]);
return n;
}
function n(e, t) {
return parseInt(e, t || 10);
}
function r(e) {
return typeof e == "string";
}
function i(e) {
return typeof e == "object";
}
function s(e) {
return Object.prototype.toString.call(e) === "[object Array]";
}
function o(e) {
return typeof e == "number";
}
function u(e) {
return X.log(e) / X.LN10;
}
function a(e) {
return X.pow(10, e);
}
function f(e, t) {
for (var n = e.length; n--; ) if (e[n] === t) {
e.splice(n, 1);
break;
}
}
function l(e) {
return e !== U && e !== null;
}
function c(e, t, n) {
var s, o;
if (r(t)) l(n) ? e.setAttribute(t, n) : e && e.getAttribute && (o = e.getAttribute(t)); else if (l(t) && i(t)) for (s in t) e.setAttribute(s, t[s]);
return o;
}
function h(e) {
return s(e) ? e : [ e ];
}
function p() {
var e = arguments, t, n, r = e.length;
for (t = 0; t < r; t++) if (n = e[t], typeof n != "undefined" && n !== null) return n;
}
function d(t, n) {
it && n && n.opacity !== U && (n.filter = "alpha(opacity=" + n.opacity * 100 + ")"), e(t.style, n);
}
function v(t, n, r, i, s) {
return t = z.createElement(t), n && e(t, n), s && d(t, {
padding: 0,
border: Ct,
margin: 0
}), r && d(t, r), i && i.appendChild(t), t;
}
function m(t, n) {
var r = function() {};
return r.prototype = new t, e(r.prototype, n), r;
}
function g(e, t, r, i) {
var s = yt.lang, o = t === -1 ? ((e || 0).toString().split(".")[1] || "").length : isNaN(t = G(t)) ? 2 : t, t = r === void 0 ? s.decimalPoint : r, i = i === void 0 ? s.thousandsSep : i, s = e < 0 ? "-" : "", r = String(n(e = G(+e || 0).toFixed(o))), u = r.length > 3 ? r.length % 3 : 0;
return s + (u ? r.substr(0, u) + i : "") + r.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + i) + (o ? t + G(e - r).toFixed(o).slice(2) : "");
}
function y(e, t) {
return Array((t || 2) + 1 - String(e).length).join(0) + e;
}
function b(e, t) {
for (var n = "{", r = !1, i, s, o, u, a, f = []; (n = e.indexOf(n)) !== -1; ) {
i = e.slice(0, n);
if (r) {
s = i.split(":"), o = s.shift().split("."), a = o.length, i = t;
for (u = 0; u < a; u++) i = i[o[u]];
s.length && (s = s.join(":"), o = /\.([0-9])/, u = yt.lang, a = void 0, /f$/.test(s) ? (a = (a = s.match(o)) ? a[1] : -1, i = g(i, a, u.decimalPoint, s.indexOf(",") > -1 ? u.thousandsSep : "")) : i = bt(s, i));
}
f.push(i), e = e.slice(n + 1), n = (r = !r) ? "}" : "{";
}
return f.push(e), f.join("");
}
function w(e, t, n, r) {
var i, n = p(n, 1);
i = e / n, t || (t = [ 1, 2, 2.5, 5, 10 ], r && r.allowDecimals === !1 && (n === 1 ? t = [ 1, 2, 5, 10 ] : n <= .1 && (t = [ 1 / n ])));
for (r = 0; r < t.length; r++) if (e = t[r], i <= (t[r] + (t[r + 1] || t[r])) / 2) break;
return e *= n, e;
}
function E(e, t) {
var n = t || [ [ Lt, [ 1, 2, 5, 10, 20, 25, 50, 100, 200, 500 ] ], [ At, [ 1, 2, 5, 10, 15, 30 ] ], [ Ot, [ 1, 2, 5, 10, 15, 30 ] ], [ Mt, [ 1, 2, 3, 4, 6, 8, 12 ] ], [ _t, [ 1, 2 ] ], [ Dt, [ 1, 2 ] ], [ Pt, [ 1, 2, 3, 4, 6 ] ], [ Ht, null ] ], r = n[n.length - 1], i = St[r[0]], s = r[1], o;
for (o = 0; o < n.length; o++) if (r = n[o], i = St[r[0]], s = r[1], n[o + 1] && e <= (i * s[s.length - 1] + St[n[o + 1][0]]) / 2) break;
return i === St[Ht] && e < 5 * i && (s = [ 1, 2, 5 ]), i === St[Ht] && e < 5 * i && (s = [ 1, 2, 5 ]), n = w(e / i, s), {
unitRange: i,
count: n,
unitName: r[0]
};
}
function S(t, n, r, i) {
var s = [], o = {}, u = yt.global.useUTC, a, f = new Date(n), c = t.unitRange, h = t.count;
if (l(n)) {
c >= St[At] && (f.setMilliseconds(0), f.setSeconds(c >= St[Ot] ? 0 : h * $(f.getSeconds() / h))), c >= St[Ot] && f[Wt](c >= St[Mt] ? 0 : h * $(f[Ft]() / h)), c >= St[Mt] && f[Xt](c >= St[_t] ? 0 : h * $(f[It]() / h)), c >= St[_t] && f[Vt](c >= St[Pt] ? 1 : h * $(f[Rt]() / h)), c >= St[Pt] && (f[$t](c >= St[Ht] ? 0 : h * $(f[Ut]() / h)), a = f[zt]()), c >= St[Ht] && (a -= a % h, f[Jt](a)), c === St[Dt] && f[Vt](f[Rt]() - f[qt]() + p(i, 1)), n = 1, a = f[zt]();
for (var i = f.getTime(), d = f[Ut](), v = f[Rt](), f = u ? 0 : (864e5 + f.getTimezoneOffset() * 6e4) % 864e5; i < r; ) s.push(i), c === St[Ht] ? i = jt(a + n * h, 0) : c === St[Pt] ? i = jt(a, d + n * h) : !!u || c !== St[_t] && c !== St[Dt] ? (c <= St[Mt] && i % St[_t] === f && (o[i] = _t), i += c * h) : i = jt(a, d, v + n * h * (c === St[_t] ? 1 : 7)), n++;
s.push(i);
}
return s.info = e(t, {
higherRanks: o,
totalRange: c * h
}), s;
}
function x() {
this.symbol = this.color = 0;
}
function T(e, t) {
var n = e.length, r, i;
for (i = 0; i < n; i++) e[i].ss_i = i;
e.sort(function(e, n) {
return r = t(e, n), r === 0 ? e.ss_i - n.ss_i : r;
});
for (i = 0; i < n; i++) delete e[i].ss_i;
}
function N(e) {
for (var t = e.length, n = e[0]; t--; ) e[t] < n && (n = e[t]);
return n;
}
function C(e) {
for (var t = e.length, n = e[0]; t--; ) e[t] > n && (n = e[t]);
return n;
}
function k(e, t) {
for (var n in e) e[n] && e[n] !== t && e[n].destroy && e[n].destroy(), delete e[n];
}
function L(e) {
gt || (gt = v(Nt)), e && gt.appendChild(e), gt.innerHTML = "";
}
function A(e, t) {
var n = "Highcharts error #" + e + ": www.highcharts.com/errors/" + e;
if (t) throw n;
W.console && console.log(n);
}
function O(e) {
return parseFloat(e.toPrecision(14));
}
function M(e, t) {
wt = p(e, t.animation);
}
function _() {
var e = yt.global.useUTC, t = e ? "getUTC" : "get", n = e ? "setUTC" : "set";
jt = e ? Date.UTC : function(e, t, n, r, i, s) {
return (new Date(e, t, p(n, 1), p(r, 0), p(i, 0), p(s, 0))).getTime();
}, Ft = t + "Minutes", It = t + "Hours", qt = t + "Day", Rt = t + "Date", Ut = t + "Month", zt = t + "FullYear", Wt = n + "Minutes", Xt = n + "Hours", Vt = n + "Date", $t = n + "Month", Jt = n + "FullYear";
}
function D() {}
function P(e, t, n, r) {
this.axis = e, this.pos = t, this.type = n || "", this.isNew = !0, !n && !r && this.addLabel();
}
function H(e, t) {
this.axis = e, t && (this.options = t, this.id = t.id);
}
function B(e, t, n, r, i, s) {
var o = e.chart.inverted;
this.axis = e, this.isNegative = n, this.options = t, this.x = r, this.stack = i, this.percent = s === "percent", this.alignOptions = {
align: t.align || (o ? n ? "left" : "right" : "center"),
verticalAlign: t.verticalAlign || (o ? "middle" : n ? "bottom" : "top"),
y: p(t.y, o ? 4 : n ? 14 : -6),
x: p(t.x, o ? n ? -6 : 6 : 0)
}, this.textAlign = t.textAlign || (o ? n ? "right" : "left" : "center");
}
function j() {
this.init.apply(this, arguments);
}
function F() {
this.init.apply(this, arguments);
}
function I(e, t) {
this.init(e, t);
}
function q(e, t) {
this.init(e, t);
}
function R() {
this.init.apply(this, arguments);
}
var U, z = document, W = window, X = Math, V = X.round, $ = X.floor, J = X.ceil, K = X.max, Q = X.min, G = X.abs, Y = X.cos, Z = X.sin, et = X.PI, tt = et * 2 / 360, nt = navigator.userAgent, rt = W.opera, it = /msie/i.test(nt) && !rt, st = z.documentMode === 8, ot = /AppleWebKit/.test(nt), ut = /Firefox/.test(nt), at = /(Mobile|Android|Windows Phone)/.test(nt), ft = "http://www.w3.org/2000/svg", lt = !!z.createElementNS && !!z.createElementNS(ft, "svg").createSVGRect, ct = ut && parseInt(nt.split("Firefox/")[1], 10) < 4, ht = !lt && !it && !!z.createElement("canvas").getContext, pt, dt = z.documentElement.ontouchstart !== U, vt = {}, mt = 0, gt, yt, bt, wt, Et, St, xt = function() {}, Tt = [], Nt = "div", Ct = "none", kt = "rgba(192,192,192," + (lt ? 1e-4 : .002) + ")", Lt = "millisecond", At = "second", Ot = "minute", Mt = "hour", _t = "day", Dt = "week", Pt = "month", Ht = "year", Bt = "stroke-width", jt, Ft, It, qt, Rt, Ut, zt, Wt, Xt, Vt, $t, Jt, Kt = {};
W.Highcharts = W.Highcharts ? A(16, !0) : {}, bt = function(t, n, r) {
if (!l(n) || isNaN(n)) return "Invalid date";
var t = p(t, "%Y-%m-%d %H:%M:%S"), i = new Date(n), s, o = i[It](), u = i[qt](), a = i[Rt](), f = i[Ut](), c = i[zt](), h = yt.lang, d = h.weekdays, i = e({
a: d[u].substr(0, 3),
A: d[u],
d: y(a),
e: a,
b: h.shortMonths[f],
B: h.months[f],
m: y(f + 1),
y: c.toString().substr(2, 2),
Y: c,
H: y(o),
I: y(o % 12 || 12),
l: o % 12 || 12,
M: y(i[Ft]()),
p: o < 12 ? "AM" : "PM",
P: o < 12 ? "am" : "pm",
S: y(i.getSeconds()),
L: y(V(n % 1e3), 3)
}, Highcharts.dateFormats);
for (s in i) for (; t.indexOf("%" + s) !== -1; ) t = t.replace("%" + s, typeof i[s] == "function" ? i[s](n) : i[s]);
return r ? t.substr(0, 1).toUpperCase() + t.substr(1) : t;
}, x.prototype = {
wrapColor: function(e) {
this.color >= e && (this.color = 0);
},
wrapSymbol: function(e) {
this.symbol >= e && (this.symbol = 0);
}
}, St = function() {
for (var e = 0, t = arguments, n = t.length, r = {}; e < n; e++) r[t[e++]] = t[e];
return r;
}(Lt, 1, At, 1e3, Ot, 6e4, Mt, 36e5, _t, 864e5, Dt, 6048e5, Pt, 26784e5, Ht, 31556952e3), Et = {
init: function(e, t, n) {
var t = t || "", r = e.shift, i = t.indexOf("C") > -1, s = i ? 7 : 3, o, t = t.split(" "), n = [].concat(n), u, a, f = function(e) {
for (o = e.length; o--; ) e[o] === "M" && e.splice(o + 1, 0, e[o + 1], e[o + 2], e[o + 1], e[o + 2]);
};
i && (f(t), f(n)), e.isArea && (u = t.splice(t.length - 6, 6), a = n.splice(n.length - 6, 6));
if (r <= n.length / s) for (; r--; ) n = [].concat(n).splice(0, s).concat(n);
e.shift = 0;
if (t.length) for (e = n.length; t.length < e; ) r = [].concat(t).splice(t.length - s, s), i && (r[s - 6] = r[s - 2], r[s - 5] = r[s - 1]), t = t.concat(r);
return u && (t = t.concat(u), n = n.concat(a)), [ t, n ];
},
step: function(e, t, n, r) {
var i = [], s = e.length;
if (n === 1) i = r; else if (s === t.length && n < 1) for (; s--; ) r = parseFloat(e[s]), i[s] = isNaN(r) ? e[s] : n * parseFloat(t[s] - r) + r; else i = t;
return i;
}
}, function(t) {
W.HighchartsAdapter = W.HighchartsAdapter || t && {
init: function(e) {
var n = t.fx, i = n.step, s, o = t.Tween, u = o && o.propHooks;
t.extend(t.easing, {
easeOutQuad: function(e, t, n, r, i) {
return -r * (t /= i) * (t - 2) + n;
}
}), t.each([ "cur", "_default", "width", "height", "opacity" ], function(e, t) {
var r = i, s, a;
t === "cur" ? r = n.prototype : t === "_default" && o && (r = u[t], t = "set"), (s = r[t]) && (r[t] = function(n) {
return n = e ? n : this, a = n.elem, a.attr ? a.attr(n.prop, t === "cur" ? U : n.now) : s.apply(this, arguments);
});
}), s = function(t) {
var n = t.elem, r;
t.started || (r = e.init(n, n.d, n.toD), t.start = r[0], t.end = r[1], t.started = !0), n.attr("d", e.step(t.start, t.end, t.pos, n.toD));
}, o ? u.d = {
set: s
} : i.d = s, this.each = Array.prototype.forEach ? function(e, t) {
return Array.prototype.forEach.call(e, t);
} : function(e, t) {
for (var n = 0, r = e.length; n < r; n++) if (t.call(e[n], e[n], n, e) === !1) return n;
}, t.fn.highcharts = function() {
var e = "Chart", t = arguments, n, i;
return r(t[0]) && (e = t[0], t = Array.prototype.slice.call(t, 1)), n = t[0], n !== U && (n.chart = n.chart || {}, n.chart.renderTo = this[0], new Highcharts[e](n, t[1]), i = this), n === U && (i = Tt[c(this[0], "data-highcharts-chart")]), i;
};
},
getScript: t.getScript,
inArray: t.inArray,
adapterRun: function(e, n) {
return t(e)[n]();
},
grep: t.grep,
map: function(e, t) {
for (var n = [], r = 0, i = e.length; r < i; r++) n[r] = t.call(e[r], e[r], r, e);
return n;
},
offset: function(e) {
return t(e).offset();
},
addEvent: function(e, n, r) {
t(e).bind(n, r);
},
removeEvent: function(e, n, r) {
var i = z.removeEventListener ? "removeEventListener" : "detachEvent";
z[i] && e && !e[i] && (e[i] = function() {}), t(e).unbind(n, r);
},
fireEvent: function(n, r, i, s) {
var o = t.Event(r), u = "detached" + r, a;
!it && i && (delete i.layerX, delete i.layerY), e(o, i), n[r] && (n[u] = n[r], n[r] = null), t.each([ "preventDefault", "stopPropagation" ], function(e, t) {
var n = o[t];
o[t] = function() {
try {
n.call(o);
} catch (e) {
t === "preventDefault" && (a = !0);
}
};
}), t(n).trigger(o), n[u] && (n[r] = n[u], n[u] = null), s && !o.isDefaultPrevented() && !a && s(o);
},
washMouseEvent: function(e) {
var t = e.originalEvent || e;
return t.pageX === U && (t.pageX = e.pageX, t.pageY = e.pageY), t;
},
animate: function(e, n, r) {
var i = t(e);
n.d && (e.toD = n.d, n.d = 1), i.stop(), n.opacity !== U && e.attr && (n.opacity += "px"), i.animate(n, r);
},
stop: function(e) {
t(e).stop();
}
};
}(W.jQuery);
var Qt = W.HighchartsAdapter, Gt = Qt || {};
Qt && Qt.init.call(Qt, Et);
var Yt = Gt.adapterRun, Zt = Gt.getScript, en = Gt.inArray, tn = Gt.each, nn = Gt.grep, rn = Gt.offset, sn = Gt.map, on = Gt.addEvent, un = Gt.removeEvent, an = Gt.fireEvent, fn = Gt.washMouseEvent, ln = Gt.animate, cn = Gt.stop, Gt = {
enabled: !0,
align: "center",
x: 0,
y: 15,
style: {
color: "#666",
cursor: "default",
fontSize: "11px",
lineHeight: "14px"
}
};
yt = {
colors: "#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","),
symbols: [ "circle", "diamond", "square", "triangle", "triangle-down" ],
lang: {
loading: "Loading...",
months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
decimalPoint: ".",
numericSymbols: "k,M,G,T,P,E".split(","),
resetZoom: "Reset zoom",
resetZoomTitle: "Reset zoom level 1:1",
thousandsSep: ","
},
global: {
useUTC: !0,
canvasToolsURL: "http://code.highcharts.com/3.0.1/modules/canvas-tools.js",
VMLRadialGradientURL: "http://code.highcharts.com/3.0.1/gfx/vml-radial-gradient.png"
},
chart: {
borderColor: "#4572A7",
borderRadius: 5,
defaultSeriesType: "line",
ignoreHiddenSeries: !0,
spacingTop: 10,
spacingRight: 10,
spacingBottom: 15,
spacingLeft: 10,
style: {
fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
fontSize: "12px"
},
backgroundColor: "#FFFFFF",
plotBorderColor: "#C0C0C0",
resetZoomButton: {
theme: {
zIndex: 20
},
position: {
align: "right",
x: -10,
y: 10
}
}
},
title: {
text: "Chart title",
align: "center",
y: 15,
style: {
color: "#274b6d",
fontSize: "16px"
}
},
subtitle: {
text: "",
align: "center",
y: 30,
style: {
color: "#4d759e"
}
},
plotOptions: {
line: {
allowPointSelect: !1,
showCheckbox: !1,
animation: {
duration: 1e3
},
events: {},
lineWidth: 2,
marker: {
enabled: !0,
lineWidth: 0,
radius: 4,
lineColor: "#FFFFFF",
states: {
hover: {
enabled: !0
},
select: {
fillColor: "#FFFFFF",
lineColor: "#000000",
lineWidth: 2
}
}
},
point: {
events: {}
},
dataLabels: t(Gt, {
enabled: !1,
formatter: function() {
return this.y;
},
verticalAlign: "bottom",
y: 0
}),
cropThreshold: 300,
pointRange: 0,
showInLegend: !0,
states: {
hover: {
marker: {}
},
select: {
marker: {}
}
},
stickyTracking: !0
}
},
labels: {
style: {
position: "absolute",
color: "#3E576F"
}
},
legend: {
enabled: !0,
align: "center",
layout: "horizontal",
labelFormatter: function() {
return this.name;
},
borderWidth: 1,
borderColor: "#909090",
borderRadius: 5,
navigation: {
activeColor: "#274b6d",
inactiveColor: "#CCC"
},
shadow: !1,
itemStyle: {
cursor: "pointer",
color: "#274b6d",
fontSize: "12px"
},
itemHoverStyle: {
color: "#000"
},
itemHiddenStyle: {
color: "#CCC"
},
itemCheckboxStyle: {
position: "absolute",
width: "13px",
height: "13px"
},
symbolWidth: 16,
symbolPadding: 5,
verticalAlign: "bottom",
x: 0,
y: 0,
title: {
style: {
fontWeight: "bold"
}
}
},
loading: {
labelStyle: {
fontWeight: "bold",
position: "relative",
top: "1em"
},
style: {
position: "absolute",
backgroundColor: "white",
opacity: .5,
textAlign: "center"
}
},
tooltip: {
enabled: !0,
animation: lt,
backgroundColor: "rgba(255, 255, 255, .85)",
borderWidth: 1,
borderRadius: 3,
dateTimeLabelFormats: {
millisecond: "%A, %b %e, %H:%M:%S.%L",
second: "%A, %b %e, %H:%M:%S",
minute: "%A, %b %e, %H:%M",
hour: "%A, %b %e, %H:%M",
day: "%A, %b %e, %Y",
week: "Week from %A, %b %e, %Y",
month: "%B %Y",
year: "%Y"
},
headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
shadow: !0,
snap: at ? 25 : 10,
style: {
color: "#333333",
cursor: "default",
fontSize: "12px",
padding: "8px",
whiteSpace: "nowrap"
}
},
credits: {
enabled: !0,
text: "Highcharts.com",
href: "http://www.highcharts.com",
position: {
align: "right",
x: -10,
verticalAlign: "bottom",
y: -5
},
style: {
cursor: "pointer",
color: "#909090",
fontSize: "9px"
}
}
};
var hn = yt.plotOptions, Qt = hn.line;
_();
var pn = function(e) {
var r = [], i, s;
return function(e) {
e && e.stops ? s = sn(e.stops, function(e) {
return pn(e[1]);
}) : (i = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(e)) ? r = [ n(i[1]), n(i[2]), n(i[3]), parseFloat(i[4], 10) ] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) ? r = [ n(i[1], 16), n(i[2], 16), n(i[3], 16), 1 ] : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) && (r = [ n(i[1]), n(i[2]), n(i[3]), 1 ]);
}(e), {
get: function(n) {
var i;
return s ? (i = t(e), i.stops = [].concat(i.stops), tn(s, function(e, t) {
i.stops[t] = [ i.stops[t][0], e.get(n) ];
})) : i = r && !isNaN(r[0]) ? n === "rgb" ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : n === "a" ? r[3] : "rgba(" + r.join(",") + ")" : e, i;
},
brighten: function(e) {
if (s) tn(s, function(t) {
t.brighten(e);
}); else if (o(e) && e !== 0) {
var t;
for (t = 0; t < 3; t++) r[t] += n(e * 255), r[t] < 0 && (r[t] = 0), r[t] > 255 && (r[t] = 255);
}
return this;
},
rgba: r,
setOpacity: function(e) {
return r[3] = e, this;
}
};
};
D.prototype = {
init: function(e, t) {
this.element = t === "span" ? v(t) : z.createElementNS(ft, t), this.renderer = e, this.attrSetters = {};
},
opacity: 1,
animate: function(e, n, r) {
n = p(n, wt, !0), cn(this), n ? (n = t(n), r && (n.complete = r), ln(this, e, n)) : (this.attr(e), r && r());
},
attr: function(e, t) {
var i, s, o, u, a = this.element, f = a.nodeName.toLowerCase(), h = this.renderer, p, d = this.attrSetters, v = this.shadows, m, g, y = this;
r(e) && l(t) && (i = e, e = {}, e[i] = t);
if (r(e)) i = e, f === "circle" ? i = {
x: "cx",
y: "cy"
}[i] || i : i === "strokeWidth" && (i = "stroke-width"), y = c(a, i) || this[i] || 0, i !== "d" && i !== "visibility" && (y = parseFloat(y)); else {
for (i in e) if (p = !1, s = e[i], o = d[i] && d[i].call(this, s, i), o !== !1) {
o !== U && (s = o);
if (i === "d") s && s.join && (s = s.join(" ")), /(NaN| {2}|^$)/.test(s) && (s = "M 0 0"); else if (i === "x" && f === "text") for (o = 0; o < a.childNodes.length; o++) u = a.childNodes[o], c(u, "x") === c(a, "x") && c(u, "x", s); else if (!this.rotation || i !== "x" && i !== "y") if (i === "fill") s = h.color(s, a, i); else if (f !== "circle" || i !== "x" && i !== "y") if (f === "rect" && i === "r") c(a, {
rx: s,
ry: s
}), p = !0; else if (i === "translateX" || i === "translateY" || i === "rotation" || i === "verticalAlign" || i === "scaleX" || i === "scaleY") p = g = !0; else if (i === "stroke") s = h.color(s, a, i); else if (i === "dashstyle") {
if (i = "stroke-dasharray", s = s && s.toLowerCase(), s === "solid") s = Ct; else if (s) {
s = s.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
for (o = s.length; o--; ) s[o] = n(s[o]) * e["stroke-width"];
s = s.join(",");
}
} else i === "width" ? s = n(s) : i === "align" ? (i = "text-anchor", s = {
left: "start",
center: "middle",
right: "end"
}[s]) : i === "title" && (o = a.getElementsByTagName("title")[0], o || (o = z.createElementNS(ft, "title"), a.appendChild(o)), o.textContent = s); else i = {
x: "cx",
y: "cy"
}[i] || i; else g = !0;
i === "strokeWidth" && (i = "stroke-width");
if (i === "stroke-width" || i === "stroke") this[i] = s, this.stroke && this["stroke-width"] ? (c(a, "stroke", this.stroke), c(a, "stroke-width", this["stroke-width"]), this.hasStroke = !0) : i === "stroke-width" && s === 0 && this.hasStroke && (a.removeAttribute("stroke"), this.hasStroke = !1), p = !0;
this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(i) && (m || (this.symbolAttr(e), m = !0), p = !0);
if (v && /^(width|height|visibility|x|y|d|transform)$/.test(i)) for (o = v.length; o--; ) c(v[o], i, i === "height" ? K(s - (v[o].cutHeight || 0), 0) : s);
(i === "width" || i === "height") && f === "rect" && s < 0 && (s = 0), this[i] = s, i === "text" ? (s !== this.textStr && delete this.bBox, this.textStr = s, this.added && h.buildText(this)) : p || c(a, i, s);
}
g && this.updateTransform();
}
return y;
},
addClass: function(e) {
return c(this.element, "class", c(this.element, "class") + " " + e), this;
},
symbolAttr: function(e) {
var t = this;
tn("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(n) {
t[n] = p(e[n], t[n]);
}), t.attr({
d: t.renderer.symbols[t.symbolName](t.x, t.y, t.width, t.height, t)
});
},
clip: function(e) {
return this.attr("clip-path", e ? "url(" + this.renderer.url + "#" + e.id + ")" : Ct);
},
crisp: function(e, t, n, r, i) {
var s, o = {}, u = {}, a, e = e || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
a = V(e) % 2 / 2, u.x = $(t || this.x || 0) + a, u.y = $(n || this.y || 0) + a, u.width = $((r || this.width || 0) - 2 * a), u.height = $((i || this.height || 0) - 2 * a), u.strokeWidth = e;
for (s in u) this[s] !== u[s] && (this[s] = o[s] = u[s]);
return o;
},
css: function(t) {
var n = this.element, n = t && t.width && n.nodeName.toLowerCase() === "text", r, i = "", s = function(e, t) {
return "-" + t.toLowerCase();
};
t && t.color && (t.fill = t.color), this.styles = t = e(this.styles, t), ht && n && delete t.width;
if (it && !lt) n && delete t.width, d(this.element, t); else {
for (r in t) i += r.replace(/([A-Z])/g, s) + ":" + t[r] + ";";
this.attr({
style: i
});
}
return n && this.added && this.renderer.buildText(this), this;
},
on: function(e, t) {
return dt && e === "click" && (this.element.ontouchstart = function(e) {
e.preventDefault(), t();
}), this.element["on" + e] = t, this;
},
setRadialReference: function(e) {
return this.element.radialReference = e, this;
},
translate: function(e, t) {
return this.attr({
translateX: e,
translateY: t
});
},
invert: function() {
return this.inverted = !0, this.updateTransform(), this;
},
htmlCss: function(t) {
var n = this.element;
if (n = t && n.tagName === "SPAN" && t.width) delete t.width, this.textWidth = n, this.updateTransform();
return this.styles = e(this.styles, t), d(this.element, t), this;
},
htmlGetBBox: function() {
var e = this.element, t = this.bBox;
return t || (e.nodeName === "text" && (e.style.position = "absolute"), t = this.bBox = {
x: e.offsetLeft,
y: e.offsetTop,
width: e.offsetWidth,
height: e.offsetHeight
}), t;
},
htmlUpdateTransform: function() {
if (this.added) {
var e = this.renderer, t = this.element, r = this.translateX || 0, i = this.translateY || 0, s = this.x || 0, o = this.y || 0, u = this.textAlign || "left", a = {
left: 0,
center: .5,
right: 1
}[u], f = u && u !== "left", c = this.shadows;
if (r || i) d(t, {
marginLeft: r,
marginTop: i
}), c && tn(c, function(e) {
d(e, {
marginLeft: r + 1,
marginTop: i + 1
});
});
this.inverted && tn(t.childNodes, function(n) {
e.invertChild(n, t);
});
if (t.tagName === "SPAN") {
var h, v, c = this.rotation, m, g = 0, y = 1, g = 0, b;
m = n(this.textWidth);
var w = this.xCorr || 0, E = this.yCorr || 0, S = [ c, u, t.innerHTML, this.textWidth ].join(",");
h = {}, S !== this.cTT && (l(c) && (e.isSVG ? (w = it ? "-ms-transform" : ot ? "-webkit-transform" : ut ? "MozTransform" : rt ? "-o-transform" : "", h[w] = h.transform = "rotate(" + c + "deg)") : (g = c * tt, y = Y(g), g = Z(g), h.filter = c ? [ "progid:DXImageTransform.Microsoft.Matrix(M11=", y, ", M12=", -g, ", M21=", g, ", M22=", y, ", sizingMethod='auto expand')" ].join("") : Ct), d(t, h)), h = p(this.elemWidth, t.offsetWidth), v = p(this.elemHeight, t.offsetHeight), h > m && /[ \-]/.test(t.textContent || t.innerText) && (d(t, {
width: m + "px",
display: "block",
whiteSpace: "normal"
}), h = m), m = e.fontMetrics(t.style.fontSize).b, w = y < 0 && -h, E = g < 0 && -v, b = y * g < 0, w += g * m * (b ? 1 - a : a), E -= y * m * (c ? b ? a : 1 - a : 1), f && (w -= h * a * (y < 0 ? -1 : 1), c && (E -= v * a * (g < 0 ? -1 : 1)), d(t, {
textAlign: u
})), this.xCorr = w, this.yCorr = E), d(t, {
left: s + w + "px",
top: o + E + "px"
}), ot && (v = t.offsetHeight), this.cTT = S;
}
} else this.alignOnAdd = !0;
},
updateTransform: function() {
var e = this.translateX || 0, t = this.translateY || 0, n = this.scaleX, r = this.scaleY, i = this.inverted, s = this.rotation, o = [];
i && (e += this.attr("width"), t += this.attr("height")), (e || t) && o.push("translate(" + e + "," + t + ")"), i ? o.push("rotate(90) scale(-1,1)") : s && o.push("rotate(" + s + " " + (this.x || 0) + " " + (this.y || 0) + ")"), (l(n) || l(r)) && o.push("scale(" + p(n, 1) + " " + p(r, 1) + ")"), o.length && c(this.element, "transform", o.join(" "));
},
toFront: function() {
var e = this.element;
return e.parentNode.appendChild(e), this;
},
align: function(e, t, n) {
var i, s, o, u, a = {};
s = this.renderer, o = s.alignedObjects;
if (e) {
if (this.alignOptions = e, this.alignByTranslate = t, !n || r(n)) this.alignTo = i = n || "renderer", f(o, this), o.push(this), n = null;
} else e = this.alignOptions, t = this.alignByTranslate, i = this.alignTo;
n = p(n, s[i], s), i = e.align, s = e.verticalAlign, o = (n.x || 0) + (e.x || 0), u = (n.y || 0) + (e.y || 0);
if (i === "right" || i === "center") o += (n.width - (e.width || 0)) / {
right: 1,
center: 2
}[i];
a[t ? "translateX" : "x"] = V(o);
if (s === "bottom" || s === "middle") u += (n.height - (e.height || 0)) / ({
bottom: 1,
middle: 2
}[s] || 1);
return a[t ? "translateY" : "y"] = V(u), this[this.placed ? "animate" : "attr"](a), this.placed = !0, this.alignAttr = a, this;
},
getBBox: function() {
var t = this.bBox, n = this.renderer, r, i = this.rotation;
r = this.element;
var s = this.styles, o = i * tt;
if (!t) {
if (r.namespaceURI === ft || n.forExport) {
try {
t = r.getBBox ? e({}, r.getBBox()) : {
width: r.offsetWidth,
height: r.offsetHeight
};
} catch (u) {}
if (!t || t.width < 0) t = {
width: 0,
height: 0
};
} else t = this.htmlGetBBox();
n.isSVG && (n = t.width, r = t.height, it && s && s.fontSize === "11px" && r.toPrecision(3) === "22.7" && (t.height = r = 14), i && (t.width = G(r * Z(o)) + G(n * Y(o)), t.height = G(r * Y(o)) + G(n * Z(o)))), this.bBox = t;
}
return t;
},
show: function() {
return this.attr({
visibility: "visible"
});
},
hide: function() {
return this.attr({
visibility: "hidden"
});
},
fadeOut: function(e) {
var t = this;
t.animate({
opacity: 0
}, {
duration: e || 150,
complete: function() {
t.hide();
}
});
},
add: function(e) {
var t = this.renderer, r = e || t, i = r.element || t.box, s = i.childNodes, o = this.element, u = c(o, "zIndex"), a;
e && (this.parentGroup = e), this.parentInverted = e && e.inverted, this.textStr !== void 0 && t.buildText(this), u && (r.handleZ = !0, u = n(u));
if (r.handleZ) for (r = 0; r < s.length; r++) if (e = s[r], t = c(e, "zIndex"), e !== o && (n(t) > u || !l(u) && l(t))) {
i.insertBefore(o, e), a = !0;
break;
}
return a || i.appendChild(o), this.added = !0, an(this, "add"), this;
},
safeRemoveChild: function(e) {
var t = e.parentNode;
t && t.removeChild(e);
},
destroy: function() {
var e = this, t = e.element || {}, n = e.shadows, r, i;
t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null, cn(e), e.clipPath && (e.clipPath = e.clipPath.destroy());
if (e.stops) {
for (i = 0; i < e.stops.length; i++) e.stops[i] = e.stops[i].destroy();
e.stops = null;
}
e.safeRemoveChild(t), n && tn(n, function(t) {
e.safeRemoveChild(t);
}), e.alignTo && f(e.renderer.alignedObjects, e);
for (r in e) delete e[r];
return null;
},
shadow: function(e, t, n) {
var r = [], i, s, o = this.element, u, a, f, l;
if (e) {
a = p(e.width, 3), f = (e.opacity || .15) / a, l = this.parentInverted ? "(-1,-1)" : "(" + p(e.offsetX, 1) + ", " + p(e.offsetY, 1) + ")";
for (i = 1; i <= a; i++) s = o.cloneNode(0), u = a * 2 + 1 - 2 * i, c(s, {
isShadow: "true",
stroke: e.color || "black",
"stroke-opacity": f * i,
"stroke-width": u,
transform: "translate" + l,
fill: Ct
}), n && (c(s, "height", K(c(s, "height") - u, 0)), s.cutHeight = u), t ? t.element.appendChild(s) : o.parentNode.insertBefore(s, o), r.push(s);
this.shadows = r;
}
return this;
}
};
var dn = function() {
this.init.apply(this, arguments);
};
dn.prototype = {
Element: D,
init: function(e, t, n, r) {
var i = location, s;
s = this.createElement("svg").attr({
xmlns: ft,
version: "1.1"
}), e.appendChild(s.element), this.isSVG = !0, this.box = s.element, this.boxWrapper = s, this.alignedObjects = [], this.url = (ut || ot) && z.getElementsByTagName("base").length ? i.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(z.createTextNode("Created with Highcharts 3.0.1")), this.defs = this.createElement("defs").add(), this.forExport = r, this.gradients = {}, this.setSize(t, n, !1);
var o;
ut && e.getBoundingClientRect && (this.subPixelFix = t = function() {
d(e, {
left: 0,
top: 0
}), o = e.getBoundingClientRect(), d(e, {
left: J(o.left) - o.left + "px",
top: J(o.top) - o.top + "px"
});
}, t(), on(W, "resize", t));
},
isHidden: function() {
return !this.boxWrapper.getBBox().width;
},
destroy: function() {
var e = this.defs;
return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), k(this.gradients || {}), this.gradients = null, e && (this.defs = e.destroy()), this.subPixelFix && un(W, "resize", this.subPixelFix), this.alignedObjects = null;
},
createElement: function(e) {
var t = new this.Element;
return t.init(this, e), t;
},
draw: function() {},
buildText: function(e) {
for (var t = e.element, r = this, i = r.forExport, s = p(e.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), o = t.childNodes, u = /style="([^"]+)"/, a = /href="([^"]+)"/, f = c(t, "x"), l = e.styles, h = l && l.width && n(l.width), v = l && l.lineHeight, m = o.length; m--; ) t.removeChild(o[m]);
h && !e.added && this.box.appendChild(t), s[s.length - 1] === "" && s.pop(), tn(s, function(n, s) {
var o, p = 0, n = n.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
o = n.split("|||"), tn(o, function(n) {
if (n !== "" || o.length === 1) {
var m = {}, g = z.createElementNS(ft, "tspan"), y;
u.test(n) && (y = n.match(u)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), c(g, "style", y)), a.test(n) && !i && (c(g, "onclick", 'location.href="' + n.match(a)[1] + '"'), d(g, {
cursor: "pointer"
})), n = (n.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), g.appendChild(z.createTextNode(n)), p ? m.dx = 0 : m.x = f, c(g, m), !p && s && (!lt && i && d(g, {
display: "block"
}), c(g, "dy", v || r.fontMetrics(/px$/.test(g.style.fontSize) ? g.style.fontSize : l.fontSize).h, ot && g.offsetHeight)), t.appendChild(g), p++;
if (h) for (var n = n.replace(/([^\^])-/g, "$1- ").split(" "), b, w = []; n.length || w.length; ) delete e.bBox, b = e.getBBox().width, m = b > h, !m || n.length === 1 ? (n = w, w = [], n.length && (g = z.createElementNS(ft, "tspan"), c(g, {
dy: v || 16,
x: f
}), y && c(g, "style", y), t.appendChild(g), b > h && (h = b))) : (g.removeChild(g.firstChild), w.unshift(n.pop())), n.length && g.appendChild(z.createTextNode(n.join(" ").replace(/- /g, "-")));
}
});
});
},
button: function(n, r, i, s, o, u, a) {
var f = this.label(n, r, i, null, null, null, null, null, "button"), l = 0, c, h, p, d, v, n = {
x1: 0,
y1: 0,
x2: 0,
y2: 1
}, o = t({
"stroke-width": 1,
stroke: "#CCCCCC",
fill: {
linearGradient: n,
stops: [ [ 0, "#FEFEFE" ], [ 1, "#F6F6F6" ] ]
},
r: 2,
padding: 5,
style: {
color: "black"
}
}, o);
return p = o.style, delete o.style, u = t(o, {
stroke: "#68A",
fill: {
linearGradient: n,
stops: [ [ 0, "#FFF" ], [ 1, "#ACF" ] ]
}
}, u), d = u.style, delete u.style, a = t(o, {
stroke: "#68A",
fill: {
linearGradient: n,
stops: [ [ 0, "#9BD" ], [ 1, "#CDF" ] ]
}
}, a), v = a.style, delete a.style, on(f.element, "mouseenter", function() {
f.attr(u).css(d);
}), on(f.element, "mouseleave", function() {
c = [ o, u, a ][l], h = [ p, d, v ][l], f.attr(c).css(h);
}), f.setState = function(e) {
(l = e) ? e === 2 && f.attr(a).css(v) : f.attr(o).css(p);
}, f.on("click", function() {
s.call(f);
}).attr(o).css(e({
cursor: "default"
}, p));
},
crispLine: function(e, t) {
return e[1] === e[4] && (e[1] = e[4] = V(e[1]) - t % 2 / 2), e[2] === e[5] && (e[2] = e[5] = V(e[2]) + t % 2 / 2), e;
},
path: function(t) {
var n = {
fill: Ct
};
return s(t) ? n.d = t : i(t) && e(n, t), this.createElement("path").attr(n);
},
circle: function(e, t, n) {
return e = i(e) ? e : {
x: e,
y: t,
r: n
}, this.createElement("circle").attr(e);
},
arc: function(e, t, n, r, s, o) {
return i(e) && (t = e.y, n = e.r, r = e.innerR, s = e.start, o = e.end, e = e.x), this.symbol("arc", e || 0, t || 0, n || 0, n || 0, {
innerR: r || 0,
start: s || 0,
end: o || 0
});
},
rect: function(e, t, n, r, s, o) {
return s = i(e) ? e.r : s, s = this.createElement("rect").attr({
rx: s,
ry: s,
fill: Ct
}), s.attr(i(e) ? e : s.crisp(o, e, t, K(n, 0), K(r, 0)));
},
setSize: function(e, t, n) {
var r = this.alignedObjects, i = r.length;
this.width = e, this.height = t;
for (this.boxWrapper[p(n, !0) ? "animate" : "attr"]({
width: e,
height: t
}); i--; ) r[i].align();
},
g: function(e) {
var t = this.createElement("g");
return l(e) ? t.attr({
"class": "highcharts-" + e
}) : t;
},
image: function(t, n, r, i, s) {
var o = {
preserveAspectRatio: Ct
};
return arguments.length > 1 && e(o, {
x: n,
y: r,
width: i,
height: s
}), o = this.createElement("image").attr(o), o.element.setAttributeNS ? o.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : o.element.setAttribute("hc-svg-href", t), o;
},
symbol: function(t, n, r, i, s, o) {
var u, a = this.symbols[t], a = a && a(V(n), V(r), i, s, o), f = /^url\((.*?)\)$/, l, c;
return a ? (u = this.path(a), e(u, {
symbolName: t,
x: n,
y: r,
width: i,
height: s
}), o && e(u, o)) : f.test(t) && (c = function(e, t) {
e.element && (e.attr({
width: t[0],
height: t[1]
}), e.alignByTranslate || e.translate(V((i - t[0]) / 2), V((s - t[1]) / 2)));
}, l = t.match(f)[1], t = vt[l], u = this.image(l).attr({
x: n,
y: r
}), u.isImg = !0, t ? c(u, t) : (u.attr({
width: 0,
height: 0
}), v("img", {
onload: function() {
c(u, vt[l] = [ this.width, this.height ]);
},
src: l
}))), u;
},
symbols: {
circle: function(e, t, n, r) {
var i = .166 * n;
return [ "M", e + n / 2, t, "C", e + n + i, t, e + n + i, t + r, e + n / 2, t + r, "C", e - i, t + r, e - i, t, e + n / 2, t, "Z" ];
},
square: function(e, t, n, r) {
return [ "M", e, t, "L", e + n, t, e + n, t + r, e, t + r, "Z" ];
},
triangle: function(e, t, n, r) {
return [ "M", e + n / 2, t, "L", e + n, t + r, e, t + r, "Z" ];
},
"triangle-down": function(e, t, n, r) {
return [ "M", e, t, "L", e + n, t, e + n / 2, t + r, "Z" ];
},
diamond: function(e, t, n, r) {
return [ "M", e + n / 2, t, "L", e + n, t + r / 2, e + n / 2, t + r, e, t + r / 2, "Z" ];
},
arc: function(e, t, n, r, i) {
var s = i.start, n = i.r || n || r, o = i.end - .001, r = i.innerR, u = i.open, a = Y(s), f = Z(s), l = Y(o), o = Z(o), i = i.end - s < et ? 0 : 1;
return [ "M", e + n * a, t + n * f, "A", n, n, 0, i, 1, e + n * l, t + n * o, u ? "M" : "L", e + r * l, t + r * o, "A", r, r, 0, i, 0, e + r * a, t + r * f, u ? "" : "Z" ];
}
},
clipRect: function(e, t, n, r) {
var i = "highcharts-" + mt++, s = this.createElement("clipPath").attr({
id: i
}).add(this.defs), e = this.rect(e, t, n, r, 0).add(s);
return e.id = i, e.clipPath = s, e;
},
color: function(e, n, r) {
var i = this, o, u = /^rgba/, a, f, h, p, d, v, m, g = [];
e && e.linearGradient ? a = "linearGradient" : e && e.radialGradient && (a = "radialGradient");
if (a) {
r = e[a], f = i.gradients, p = e.stops, n = n.radialReference, s(r) && (e[a] = r = {
x1: r[0],
y1: r[1],
x2: r[2],
y2: r[3],
gradientUnits: "userSpaceOnUse"
}), a === "radialGradient" && n && !l(r.gradientUnits) && (r = t(r, {
cx: n[0] - n[2] / 2 + r.cx * n[2],
cy: n[1] - n[2] / 2 + r.cy * n[2],
r: r.r * n[2],
gradientUnits: "userSpaceOnUse"
}));
for (m in r) m !== "id" && g.push(m, r[m]);
for (m in p) g.push(p[m]);
return g = g.join(","), f[g] ? e = f[g].id : (r.id = e = "highcharts-" + mt++, f[g] = h = i.createElement(a).attr(r).add(i.defs), h.stops = [], tn(p, function(e) {
u.test(e[1]) ? (o = pn(e[1]), d = o.get("rgb"), v = o.get("a")) : (d = e[1], v = 1), e = i.createElement("stop").attr({
offset: e[0],
"stop-color": d,
"stop-opacity": v
}).add(h), h.stops.push(e);
})), "url(" + i.url + "#" + e + ")";
}
return u.test(e) ? (o = pn(e), c(n, r + "-opacity", o.get("a")), o.get("rgb")) : (n.removeAttribute(r + "-opacity"), e);
},
text: function(e, t, n, r) {
var i = yt.chart.style, s = ht || !lt && this.forExport;
return r && !this.forExport ? this.html(e, t, n) : (t = V(p(t, 0)), n = V(p(n, 0)), e = this.createElement("text").attr({
x: t,
y: n,
text: e
}).css({
fontFamily: i.fontFamily,
fontSize: i.fontSize
}), s && e.css({
position: "absolute"
}), e.x = t, e.y = n, e);
},
html: function(t, n, r) {
var i = yt.chart.style, s = this.createElement("span"), o = s.attrSetters, u = s.element, a = s.renderer;
return o.text = function(e) {
return e !== u.innerHTML && delete this.bBox, u.innerHTML = e, !1;
}, o.x = o.y = o.align = function(e, t) {
return t === "align" && (t = "textAlign"), s[t] = e, s.htmlUpdateTransform(), !1;
}, s.attr({
text: t,
x: V(n),
y: V(r)
}).css({
position: "absolute",
whiteSpace: "nowrap",
fontFamily: i.fontFamily,
fontSize: i.fontSize
}), s.css = s.htmlCss, a.isSVG && (s.add = function(t) {
var n, r = a.box.parentNode, i = [];
if (t) {
if (n = t.div, !n) {
for (; t; ) i.push(t), t = t.parentGroup;
tn(i.reverse(), function(t) {
var i;
n = t.div = t.div || v(Nt, {
className: c(t.element, "class")
}, {
position: "absolute",
left: (t.translateX || 0) + "px",
top: (t.translateY || 0) + "px"
}, n || r), i = n.style, e(t.attrSetters, {
translateX: function(e) {
i.left = e + "px";
},
translateY: function(e) {
i.top = e + "px";
},
visibility: function(e, t) {
i[t] = e;
}
});
});
}
} else n = r;
return n.appendChild(u), s.added = !0, s.alignOnAdd && s.htmlUpdateTransform(), s;
}), s;
},
fontMetrics: function(e) {
var e = n(e || 11), e = e < 24 ? e + 4 : V(e * 1.2), t = V(e * .8);
return {
h: e,
b: t
};
},
label: function(n, r, i, s, o, u, a, f, c) {
function h() {
var e, n;
e = y.element.style, w = (T === void 0 || N === void 0 || g.styles.textAlign) && y.getBBox(), g.width = (T || w.width || 0) + 2 * S + x, g.height = (N || w.height || 0) + 2 * S, O = S + m.fontMetrics(e && e.fontSize).b, M && (b || (e = V(-E * S), n = f ? -O : 0, g.box = b = s ? m.symbol(s, e, n, g.width, g.height) : m.rect(e, n, g.width, g.height, 0, A[Bt]), b.add(g)), b.isImg || b.attr(t({
width: g.width,
height: g.height
}, A)), A = null);
}
function p() {
var e = g.styles, e = e && e.textAlign, t = x + S * (1 - E), n;
n = f ? 0 : O, l(T) && (e === "center" || e === "right") && (t += {
center: .5,
right: 1
}[e] * (T - w.width)), (t !== y.x || n !== y.y) && y.attr({
x: t,
y: n
}), y.x = t, y.y = n;
}
function d(e, t) {
b ? b.attr(e, t) : A[e] = t;
}
function v() {
y.add(g), g.attr({
text: n,
x: r,
y: i
}), b && l(o) && g.attr({
anchorX: o,
anchorY: u
});
}
var m = this, g = m.g(c), y = m.text("", 0, 0, a).attr({
zIndex: 1
}), b, w, E = 0, S = 3, x = 0, T, N, C, k, L = 0, A = {}, O, a = g.attrSetters, M;
on(g, "add", v), a.width = function(e) {
return T = e, !1;
}, a.height = function(e) {
return N = e, !1;
}, a.padding = function(e) {
return l(e) && e !== S && (S = e, p()), !1;
}, a.paddingLeft = function(e) {
return l(e) && e !== x && (x = e, p()), !1;
}, a.align = function(e) {
return E = {
left: 0,
center: .5,
right: 1
}[e], !1;
}, a.text = function(e, t) {
return y.attr(t, e), h(), p(), !1;
}, a[Bt] = function(e, t) {
return M = !0, L = e % 2 / 2, d(t, e), !1;
}, a.stroke = a.fill = a.r = function(e, t) {
return t === "fill" && (M = !0), d(t, e), !1;
}, a.anchorX = function(e, t) {
return o = e, d(t, e + L - C), !1;
}, a.anchorY = function(e, t) {
return u = e, d(t, e - k), !1;
}, a.x = function(e) {
return g.x = e, e -= E * ((T || w.width) + S), C = V(e), g.attr("translateX", C), !1;
}, a.y = function(e) {
return k = g.y = V(e), g.attr("translateY", k), !1;
};
var _ = g.css;
return e(g, {
css: function(e) {
if (e) {
var n = {}, e = t(e);
tn("fontSize,fontWeight,fontFamily,color,lineHeight,width".split(","), function(t) {
e[t] !== U && (n[t] = e[t], delete e[t]);
}), y.css(n);
}
return _.call(g, e);
},
getBBox: function() {
return {
width: w.width + 2 * S,
height: w.height + 2 * S,
x: w.x - S,
y: w.y - S
};
},
shadow: function(e) {
return b && b.shadow(e), g;
},
destroy: function() {
un(g, "add", v), un(g.element, "mouseenter"), un(g.element, "mouseleave"), y && (y = y.destroy()), b && (b = b.destroy()), D.prototype.destroy.call(g), g = m = h = p = d = v = null;
}
});
}
}, pt = dn;
var vn;
if (!lt && !ht) {
Highcharts.VMLElement = vn = {
init: function(e, t) {
var n = [ "<", t, ' filled="f" stroked="f"' ], r = [ "position: ", "absolute", ";" ], i = t === Nt;
(t === "shape" || i) && r.push("left:0;top:0;width:1px;height:1px;"), r.push("visibility: ", i ? "hidden" : "visible"), n.push(' style="', r.join(""), '"/>'), t && (n = i || t === "span" || t === "img" ? n.join("") : e.prepVML(n), this.element = v(n)), this.renderer = e, this.attrSetters = {};
},
add: function(e) {
var t = this.renderer, n = this.element, r = t.box, r = e ? e.element || e : r;
return e && e.inverted && t.invertChild(n, r), r.appendChild(n), this.added = !0, this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(), an(this, "add"), this;
},
updateTransform: D.prototype.htmlUpdateTransform,
attr: function(e, t) {
var n, i, s, u = this.element || {}, a = u.style, f = u.nodeName, h = this.renderer, p = this.symbolName, d, m = this.shadows, g, y = this.attrSetters, b = this;
r(e) && l(t) && (n = e, e = {}, e[n] = t);
if (r(e)) n = e, b = n === "strokeWidth" || n === "stroke-width" ? this.strokeweight : this[n]; else for (n in e) if (i = e[n], g = !1, s = y[n] && y[n].call(this, i, n), s !== !1 && i !== null) {
s !== U && (i = s);
if (p && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(n)) d || (this.symbolAttr(e), d = !0), g = !0; else if (n === "d") {
i = i || [], this.d = i.join(" "), s = i.length, g = [];
for (var w; s--; ) if (o(i[s])) g[s] = V(i[s] * 10) - 5; else if (i[s] === "Z") g[s] = "x"; else if (g[s] = i[s], i.isArc && (i[s] === "wa" || i[s] === "at")) w = i[s] === "wa" ? 1 : -1, g[s + 5] === g[s + 7] && (g[s + 7] -= w), g[s + 6] === g[s + 8] && (g[s + 8] -= w);
i = g.join(" ") || "x", u.path = i;
if (m) for (s = m.length; s--; ) m[s].path = m[s].cutOff ? this.cutOffPath(i, m[s].cutOff) : i;
g = !0;
} else if (n === "visibility") {
if (m) for (s = m.length; s--; ) m[s].style[n] = i;
f === "DIV" && (i = i === "hidden" ? "-999em" : 0, st || (a[n] = i ? "visible" : "hidden"), n = "top"), a[n] = i, g = !0;
} else n === "zIndex" ? (i && (a[n] = i), g = !0) : en(n, [ "x", "y", "width", "height" ]) !== -1 ? (this[n] = i, n === "x" || n === "y" ? n = {
x: "left",
y: "top"
}[n] : i = K(0, i), this.updateClipping ? (this[n] = i, this.updateClipping()) : a[n] = i, g = !0) : n === "class" && f === "DIV" ? u.className = i : n === "stroke" ? (i = h.color(i, u, n), n = "strokecolor") : n === "stroke-width" || n === "strokeWidth" ? (u.stroked = i ? !0 : !1, n = "strokeweight", this[n] = i, o(i) && (i += "px")) : n === "dashstyle" ? ((u.getElementsByTagName("stroke")[0] || v(h.prepVML([ "<stroke/>" ]), null, null, u))[n] = i || "solid", this.dashstyle = i, g = !0) : n === "fill" ? f === "SPAN" ? a.color = i : f !== "IMG" && (u.filled = i !== Ct ? !0 : !1, i = h.color(i, u, n, this), n = "fillcolor") : n === "opacity" ? g = !0 : f === "shape" && n === "rotation" ? (this[n] = i, u.style.left = -V(Z(i * tt) + 1) + "px", u.style.top = V(Y(i * tt)) + "px") : n === "translateX" || n === "translateY" || n === "rotation" ? (this[n] = i, this.updateTransform(), g = !0) : n === "text" && (this.bBox = null, u.innerHTML = i, g = !0);
g || (st ? u[n] = i : c(u, n, i));
}
return b;
},
clip: function(e) {
var t = this, n;
return e ? (n = e.members, f(n, t), n.push(t), t.destroyClip = function() {
f(n, t);
}, e = e.getCSS(t)) : (t.destroyClip && t.destroyClip(), e = {
clip: st ? "inherit" : "rect(auto)"
}), t.css(e);
},
css: D.prototype.htmlCss,
safeRemoveChild: function(e) {
e.parentNode && L(e);
},
destroy: function() {
return this.destroyClip && this.destroyClip(), D.prototype.destroy.apply(this);
},
on: function(e, t) {
return this.element["on" + e] = function() {
var e = W.event;
e.target = e.srcElement, t(e);
}, this;
},
cutOffPath: function(e, t) {
var r, e = e.split(/[ ,]/);
r = e.length;
if (r === 9 || r === 11) e[r - 4] = e[r - 2] = n(e[r - 2]) - 10 * t;
return e.join(" ");
},
shadow: function(e, t, r) {
var i = [], s, o = this.element, u = this.renderer, a, f = o.style, l, c = o.path, h, d, m, g;
c && typeof c.value != "string" && (c = "x"), d = c;
if (e) {
m = p(e.width, 3), g = (e.opacity || .15) / m;
for (s = 1; s <= 3; s++) h = m * 2 + 1 - 2 * s, r && (d = this.cutOffPath(c.value, h + .5)), l = [ '<shape isShadow="true" strokeweight="', h, '" filled="false" path="', d, '" coordsize="10 10" style="', o.style.cssText, '" />' ], a = v(u.prepVML(l), null, {
left: n(f.left) + p(e.offsetX, 1),
top: n(f.top) + p(e.offsetY, 1)
}), r && (a.cutOff = h + 1), l = [ '<stroke color="', e.color || "black", '" opacity="', g * s, '"/>' ], v(u.prepVML(l), null, null, a), t ? t.element.appendChild(a) : o.parentNode.insertBefore(a, o), i.push(a);
this.shadows = i;
}
return this;
}
}, vn = m(D, vn);
var mn = {
Element: vn,
isIE8: nt.indexOf("MSIE 8.0") > -1,
init: function(e, t, n) {
var r, i;
this.alignedObjects = [], r = this.createElement(Nt), i = r.element, i.style.position = "relative", e.appendChild(r.element), this.isVML = !0, this.box = i, this.boxWrapper = r, this.setSize(t, n, !1), z.namespaces.hcv || (z.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), z.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ");
},
isHidden: function() {
return !this.box.offsetWidth;
},
clipRect: function(t, n, r, s) {
var o = this.createElement(), u = i(t);
return e(o, {
members: [],
left: u ? t.x : t,
top: u ? t.y : n,
width: u ? t.width : r,
height: u ? t.height : s,
getCSS: function(t) {
var n = t.element, r = n.nodeName, t = t.inverted, i = this.top - (r === "shape" ? n.offsetTop : 0), s = this.left, n = s + this.width, o = i + this.height, i = {
clip: "rect(" + V(t ? s : i) + "px," + V(t ? o : n) + "px," + V(t ? n : o) + "px," + V(t ? i : s) + "px)"
};
return !t && st && r === "DIV" && e(i, {
width: n + "px",
height: o + "px"
}), i;
},
updateClipping: function() {
tn(o.members, function(e) {
e.css(o.getCSS(e));
});
}
});
},
color: function(e, t, n, r) {
var i = this, s, o = /^rgba/, u, a, f = Ct;
e && e.linearGradient ? a = "gradient" : e && e.radialGradient && (a = "pattern");
if (a) {
var l, c, h = e.linearGradient || e.radialGradient, p, d, m, g, y, b = "", e = e.stops, w, E = [], S = function() {
u = [ '<fill colors="' + E.join(",") + '" opacity="', m, '" o:opacity2="', d, '" type="', a, '" ', b, 'focus="100%" method="any" />' ], v(i.prepVML(u), null, null, t);
};
p = e[0], w = e[e.length - 1], p[0] > 0 && e.unshift([ 0, p[1] ]), w[0] < 1 && e.push([ 1, w[1] ]), tn(e, function(e, t) {
o.test(e[1]) ? (s = pn(e[1]), l = s.get("rgb"), c = s.get("a")) : (l = e[1], c = 1), E.push(e[0] * 100 + "% " + l), t ? (m = c, g = l) : (d = c, y = l);
});
if (n === "fill") if (a === "gradient") n = h.x1 || h[0] || 0, e = h.y1 || h[1] || 0, p = h.x2 || h[2] || 0, h = h.y2 || h[3] || 0, b = 'angle="' + (90 - X.atan((h - e) / (p - n)) * 180 / et) + '"', S(); else {
var f = h.r, x = f * 2, T = f * 2, N = h.cx, C = h.cy, k = t.radialReference, L, f = function() {
k && (L = r.getBBox(), N += (k[0] - L.x) / L.width - .5, C += (k[1] - L.y) / L.height - .5, x *= k[2] / L.width, T *= k[2] / L.height), b = 'src="' + yt.global.VMLRadialGradientURL + '" size="' + x + "," + T + '" origin="0.5,0.5" position="' + N + "," + C + '" color2="' + y + '" ', S();
};
r.added ? f() : on(r, "add", f), f = g;
} else f = l;
} else o.test(e) && t.tagName !== "IMG" ? (s = pn(e), u = [ "<", n, ' opacity="', s.get("a"), '"/>' ], v(this.prepVML(u), null, null, t), f = s.get("rgb")) : (f = t.getElementsByTagName(n), f.length && (f[0].opacity = 1, f[0].type = "solid"), f = e);
return f;
},
prepVML: function(e) {
var t = this.isIE8, e = e.join("");
return t ? (e = e.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), e = e.indexOf('style="') === -1 ? e.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : e.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : e = e.replace("<", "<hcv:"), e;
},
text: dn.prototype.html,
path: function(t) {
var n = {
coordsize: "10 10"
};
return s(t) ? n.d = t : i(t) && e(n, t), this.createElement("shape").attr(n);
},
circle: function(e, t, n) {
return i(e) && (n = e.r, t = e.y, e = e.x), this.symbol("circle").attr({
x: e - n,
y: t - n,
width: 2 * n,
height: 2 * n
});
},
g: function(e) {
var t;
return e && (t = {
className: "highcharts-" + e,
"class": "highcharts-" + e
}), this.createElement(Nt).attr(t);
},
image: function(e, t, n, r, i) {
var s = this.createElement("img").attr({
src: e
});
return arguments.length > 1 && s.attr({
x: t,
y: n,
width: r,
height: i
}), s;
},
rect: function(e, t, n, r, s, o) {
i(e) && (t = e.y, n = e.width, r = e.height, o = e.strokeWidth, e = e.x);
var u = this.symbol("rect");
return u.r = s, u.attr(u.crisp(o, e, t, K(n, 0), K(r, 0)));
},
invertChild: function(e, t) {
var r = t.style;
d(e, {
flip: "x",
left: n(r.width) - 1,
top: n(r.height) - 1,
rotation: -90
});
},
symbols: {
arc: function(e, t, n, r, i) {
var s = i.start, o = i.end, u = i.r || n || r, n = i.innerR, r = Y(s), a = Z(s), f = Y(o), l = Z(o);
return o - s === 0 ? [ "x" ] : (s = [ "wa", e - u, t - u, e + u, t + u, e + u * r, t + u * a, e + u * f, t + u * l ], i.open && !n && s.push("e", "M", e, t), s.push("at", e - n, t - n, e + n, t + n, e + n * f, t + n * l, e + n * r, t + n * a, "x", "e"), s.isArc = !0, s);
},
circle: function(e, t, n, r) {
return [ "wa", e, t, e + n, t + r, e + n, t + r / 2, e + n, t + r / 2, "e" ];
},
rect: function(e, t, n, r, i) {
var s = e + n, o = t + r, u;
return !l(i) || !i.r ? s = dn.prototype.symbols.square.apply(0, arguments) : (u = Q(i.r, n, r), s = [ "M", e + u, t, "L", s - u, t, "wa", s - 2 * u, t, s, t + 2 * u, s - u, t, s, t + u, "L", s, o - u, "wa", s - 2 * u, o - 2 * u, s, o, s, o - u, s - u, o, "L", e + u, o, "wa", e, o - 2 * u, e + 2 * u, o, e + u, o, e, o - u, "L", e, t + u, "wa", e, t, e + 2 * u, t + 2 * u, e, t + u, e + u, t, "x", "e" ]), s;
}
}
};
Highcharts.VMLRenderer = vn = function() {
this.init.apply(this, arguments);
}, vn.prototype = t(dn.prototype, mn), pt = vn;
}
var gn;
ht && (Highcharts.CanVGRenderer = vn = function() {
ft = "http://www.w3.org/1999/xhtml";
}, vn.prototype.symbols = {}, gn = function() {
function e() {
var e = t.length, n;
for (n = 0; n < e; n++) t[n]();
t = [];
}
var t = [];
return {
push: function(n, r) {
t.length === 0 && Zt(r, e), t.push(n);
}
};
}(), pt = vn), P.prototype = {
addLabel: function() {
var t = this.axis, n = t.options, r = t.chart, i = t.horiz, s = t.categories, u = t.series[0] && t.series[0].names, f = this.pos, c = n.labels, h = t.tickPositions, i = i && s && !c.step && !c.staggerLines && !c.rotation && r.plotWidth / h.length || !i && (r.optionsMarginLeft || r.plotWidth / 2), d = f === h[0], v = f === h[h.length - 1], u = s ? p(s[f], u && u[f], f) : f, s = this.label, h = h.info, m;
t.isDatetimeAxis && h && (m = n.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]), this.isFirst = d, this.isLast = v, n = t.labelFormatter.call({
axis: t,
chart: r,
isFirst: d,
isLast: v,
dateTimeLabelFormat: m,
value: t.isLog ? O(a(u)) : u
}), f = i && {
width: K(1, V(i - 2 * (c.padding || 10))) + "px"
}, f = e(f, c.style), l(s) ? s && s.attr({
text: n
}).css(f) : (i = {
align: c.align
}, o(c.rotation) && (i.rotation = c.rotation), this.label = l(n) && c.enabled ? r.renderer.text(n, 0, 0, c.useHTML).attr(i).css(f).add(t.labelGroup) : null);
},
getLabelSize: function() {
var e = this.label, t = this.axis;
return e ? (this.labelBBox = e.getBBox())[t.horiz ? "height" : "width"] : 0;
},
getLabelSides: function() {
var e = this.axis.options.labels, t = this.labelBBox.width, e = t * {
left: 0,
center: .5,
right: 1
}[e.align] - e.x;
return [ -e, t - e ];
},
handleOverflow: function(e, t) {
var n = !0, r = this.axis, i = r.chart, s = this.isFirst, o = this.isLast, u = t.x, a = r.reversed, f = r.tickPositions;
if (s || o) {
var l = this.getLabelSides(), c = l[0], l = l[1], i = i.plotLeft, h = i + r.len, f = (r = r.ticks[f[e + (s ? 1 : -1)]]) && r.label.xy && r.label.xy.x + r.getLabelSides()[s ? 0 : 1];
s && !a || o && a ? u + c < i && (u = i - c, r && u + l > f && (n = !1)) : u + l > h && (u = h - l, r && u + c < f && (n = !1)), t.x = u;
}
return n;
},
getPosition: function(e, t, n, r) {
var i = this.axis, s = i.chart, o = r && s.oldChartHeight || s.chartHeight;
return {
x: e ? i.translate(t + n, null, null, r) + i.transB : i.left + i.offset + (i.opposite ? (r && s.oldChartWidth || s.chartWidth) - i.right - i.left : 0),
y: e ? o - i.bottom + i.offset - (i.opposite ? i.height : 0) : o - i.translate(t + n, null, null, r) - i.transB
};
},
getLabelPosition: function(e, t, r, i, s, o, u, a) {
var f = this.axis, c = f.transA, h = f.reversed, f = f.staggerLines, e = e + s.x - (o && i ? o * c * (h ? -1 : 1) : 0), t = t + s.y - (o && !i ? o * c * (h ? 1 : -1) : 0);
return l(s.y) || (t += n(r.styles.lineHeight) * .9 - r.getBBox().height / 2), f && (t += u / (a || 1) % f * 16), {
x: e,
y: t
};
},
getMarkPath: function(e, t, n, r, i, s) {
return s.crispLine([ "M", e, t, "L", e + (i ? 0 : -n), t + (i ? n : 0) ], r);
},
render: function(e, t, n) {
var r = this.axis, i = r.options, s = r.chart.renderer, o = r.horiz, u = this.type, a = this.label, f = this.pos, l = i.labels, c = this.gridLine, h = u ? u + "Grid" : "grid", d = u ? u + "Tick" : "tick", v = i[h + "LineWidth"], m = i[h + "LineColor"], g = i[h + "LineDashStyle"], y = i[d + "Length"], h = i[d + "Width"] || 0, b = i[d + "Color"], w = i[d + "Position"], d = this.mark, E = l.step, S = !0, x = r.tickmarkOffset, T = this.getPosition(o, f, x, t), N = T.x, T = T.y, C = o && N === r.pos || !o && T === r.pos + r.len ? -1 : 1, k = r.staggerLines;
this.isActive = !0, v && (f = r.getPlotLinePath(f + x, v * C, t, !0), c === U && (c = {
stroke: m,
"stroke-width": v
}, g && (c.dashstyle = g), u || (c.zIndex = 1), t && (c.opacity = 0), this.gridLine = c = v ? s.path(f).attr(c).add(r.gridGroup) : null), !t && c && f && c[this.isNew ? "attr" : "animate"]({
d: f,
opacity: n
})), h && y && (w === "inside" && (y = -y), r.opposite && (y = -y), t = this.getMarkPath(N, T, y, h * C, o, s), d ? d.animate({
d: t,
opacity: n
}) : this.mark = s.path(t).attr({
stroke: b,
"stroke-width": h,
opacity: n
}).add(r.axisGroup)), a && !isNaN(N) && (a.xy = T = this.getLabelPosition(N, T, a, o, l, x, e, E), this.isFirst && !p(i.showFirstLabel, 1) || this.isLast && !p(i.showLastLabel, 1) ? S = !1 : !k && o && l.overflow === "justify" && !this.handleOverflow(e, T) && (S = !1), E && e % E && (S = !1), S && !isNaN(T.y) ? (T.opacity = n, a[this.isNew ? "attr" : "animate"](T), this.isNew = !1) : a.attr("y", -9999));
},
destroy: function() {
k(this, this.axis);
}
}, H.prototype = {
render: function() {
var e = this, n = e.axis, r = n.horiz, i = (n.pointRange || 0) / 2, s = e.options, o = s.label, a = e.label, f = s.width, c = s.to, h = s.from, d = l(h) && l(c), v = s.value, m = s.dashStyle, g = e.svgElem, y = [], b, w = s.color, E = s.zIndex, S = s.events, x = n.chart.renderer;
n.isLog && (h = u(h), c = u(c), v = u(v));
if (f) {
if (y = n.getPlotLinePath(v, f), i = {
stroke: w,
"stroke-width": f
}, m) i.dashstyle = m;
} else {
if (!d) return;
if (h = K(h, n.min - i), c = Q(c, n.max + i), y = n.getPlotBandPath(h, c, s), i = {
fill: w
}, s.borderWidth) i.stroke = s.borderColor, i["stroke-width"] = s.borderWidth;
}
l(E) && (i.zIndex = E);
if (g) y ? g.animate({
d: y
}, null, g.onGetPath) : (g.hide(), g.onGetPath = function() {
g.show();
}); else if (y && y.length && (e.svgElem = g = x.path(y).attr(i).add(), S)) for (b in s = function(t) {
g.on(t, function(n) {
S[t].apply(e, [ n ]);
});
}, S) s(b);
return o && l(o.text) && y && y.length && n.width > 0 && n.height > 0 ? (o = t({
align: r && d && "center",
x: r ? !d && 4 : 10,
verticalAlign: !r && d && "middle",
y: r ? d ? 16 : 10 : d ? 6 : -4,
rotation: r && !d && 90
}, o), a || (e.label = a = x.text(o.text, 0, 0).attr({
align: o.textAlign || o.align,
rotation: o.rotation,
zIndex: E
}).css(o.style).add()), n = [ y[1], y[4], p(y[6], y[1]) ], y = [ y[2], y[5], p(y[7], y[2]) ], r = N(n), d = N(y), a.align(o, !1, {
x: r,
y: d,
width: C(n) - r,
height: C(y) - d
}), a.show()) : a && a.hide(), e;
},
destroy: function() {
f(this.axis.plotLinesAndBands, this), k(this, this.axis);
}
}, B.prototype = {
destroy: function() {
k(this, this.axis);
},
setTotal: function(e) {
this.cum = this.total = e;
},
render: function(e) {
var t = this.options, n = t.formatter.call(this);
this.label ? this.label.attr({
text: n,
visibility: "hidden"
}) : this.label = this.axis.chart.renderer.text(n, 0, 0, t.useHTML).css(t.style).attr({
align: this.textAlign,
rotation: t.rotation,
visibility: "hidden"
}).add(e);
},
setOffset: function(e, t) {
var n = this.axis, r = n.chart, i = r.inverted, s = this.isNegative, o = n.translate(this.percent ? 100 : this.total, 0, 0, 0, 1), n = n.translate(0), n = G(o - n), u = r.xAxis[0].translate(this.x) + e, a = r.plotHeight, s = {
x: i ? s ? o : o - n : u,
y: i ? a - u - t : s ? a - o - n : a - o,
width: i ? n : t,
height: i ? t : n
};
if (i = this.label) i.align(this.alignOptions, null, s), s = i.alignAttr, i.attr({
visibility: this.options.crop === !1 || r.isInsidePlot(s.x, s.y) ? lt ? "inherit" : "visible" : "hidden"
});
}
}, j.prototype = {
defaultOptions: {
dateTimeLabelFormats: {
millisecond: "%H:%M:%S.%L",
second: "%H:%M:%S",
minute: "%H:%M",
hour: "%H:%M",
day: "%e. %b",
week: "%e. %b",
month: "%b '%y",
year: "%Y"
},
endOnTick: !1,
gridLineColor: "#C0C0C0",
labels: Gt,
lineColor: "#C0D0E0",
lineWidth: 1,
minPadding: .01,
maxPadding: .01,
minorGridLineColor: "#E0E0E0",
minorGridLineWidth: 1,
minorTickColor: "#A0A0A0",
minorTickLength: 2,
minorTickPosition: "outside",
startOfWeek: 1,
startOnTick: !1,
tickColor: "#C0D0E0",
tickLength: 5,
tickmarkPlacement: "between",
tickPixelInterval: 100,
tickPosition: "outside",
tickWidth: 1,
title: {
align: "middle",
style: {
color: "#4d759e",
fontWeight: "bold"
}
},
type: "linear"
},
defaultYAxisOptions: {
endOnTick: !0,
gridLineWidth: 1,
tickPixelInterval: 72,
showLastLabel: !0,
labels: {
align: "right",
x: -8,
y: 3
},
lineWidth: 0,
maxPadding: .05,
minPadding: .05,
startOnTick: !0,
tickWidth: 0,
title: {
rotation: 270,
text: "Values"
},
stackLabels: {
enabled: !1,
formatter: function() {
return this.total;
},
style: Gt.style
}
},
defaultLeftAxisOptions: {
labels: {
align: "right",
x: -8,
y: null
},
title: {
rotation: 270
}
},
defaultRightAxisOptions: {
labels: {
align: "left",
x: 8,
y: null
},
title: {
rotation: 90
}
},
defaultBottomAxisOptions: {
labels: {
align: "center",
x: 0,
y: 14
},
title: {
rotation: 0
}
},
defaultTopAxisOptions: {
labels: {
align: "center",
x: 0,
y: -5
},
title: {
rotation: 0
}
},
init: function(e, t) {
var n = t.isX;
this.horiz = e.inverted ? !n : n, this.xOrY = (this.isXAxis = n) ? "x" : "y", this.opposite = t.opposite, this.side = this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3, this.setOptions(t);
var r = this.options, i = r.type;
this.labelFormatter = r.labels.formatter || this.defaultLabelFormatter, this.staggerLines = this.horiz && r.labels.staggerLines, this.userOptions = t, this.minPixelPadding = 0, this.chart = e, this.reversed = r.reversed, this.zoomEnabled = r.zoomEnabled !== !1, this.categories = r.categories || i === "category", this.isLog = i === "logarithmic", this.isDatetimeAxis = i === "datetime", this.isLinked = l(r.linkedTo), this.tickmarkOffset = this.categories && r.tickmarkPlacement === "between" ? .5 : 0, this.ticks = {}, this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = r.minRange || r.maxZoom, this.range = r.range, this.offset = r.offset || 0, this.stacks = {}, this._stacksTouched = 0, this.min = this.max = null;
var s, r = this.options.events;
en(this, e.axes) === -1 && (e.axes.push(this), e[n ? "xAxis" : "yAxis"].push(this)), this.series = this.series || [], e.inverted && n && this.reversed === U && (this.reversed = !0), this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
for (s in r) on(this, s, r[s]);
this.isLog && (this.val2lin = u, this.lin2val = a);
},
setOptions: function(e) {
this.options = t(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [ this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions ][this.side], t(yt[this.isXAxis ? "xAxis" : "yAxis"], e));
},
update: function(e, n) {
var r = this.chart, e = r.options[this.xOrY + "Axis"][this.options.index] = t(this.userOptions, e);
this.destroy(), this._addedPlotLB = !1, this.init(r, e), r.isDirtyBox = !0, p(n, !0) && r.redraw();
},
remove: function(e) {
var t = this.chart, n = this.xOrY + "Axis";
tn(this.series, function(e) {
e.remove(!1);
}), f(t.axes, this), f(t[n], this), t.options[n].splice(this.options.index, 1), this.destroy(), t.isDirtyBox = !0, p(e, !0) && t.redraw();
},
defaultLabelFormatter: function() {
var e = this.axis, t = this.value, n = e.categories, r = this.dateTimeLabelFormat, i = yt.lang.numericSymbols, s = i && i.length, o, u = e.options.labels.format, e = e.isLog ? t : e.tickInterval;
if (u) o = b(u, this); else if (n) o = t; else if (r) o = bt(r, t); else if (s && e >= 1e3) for (; s-- && o === U; ) n = Math.pow(1e3, s + 1), e >= n && i[s] !== null && (o = g(t / n, -1) + i[s]);
return o === U && (o = t >= 1e3 ? g(t, 0) : g(t, -1)), o;
},
getSeriesExtremes: function() {
var e = this, t = e.chart, n = e.stacks, r = [], i = [], s = e._stacksTouched += 1, o, u;
e.hasVisibleSeries = !1, e.dataMin = e.dataMax = null, tn(e.series, function(o) {
if (o.visible || !t.options.chart.ignoreHiddenSeries) {
var a = o.options, f, c, h, d, v, m, g, y, b, w = a.threshold, E, S = [], x = 0;
e.hasVisibleSeries = !0, e.isLog && w <= 0 && (w = a.threshold = null);
if (e.isXAxis) {
if (a = o.xData, a.length) e.dataMin = Q(p(e.dataMin, a[0]), N(a)), e.dataMax = K(p(e.dataMax, a[0]), C(a));
} else {
var T, k, L, A = o.cropped, M = o.xAxis.getExtremes(), _ = !!o.modifyValue;
f = a.stacking, e.usePercentage = f === "percent", f && (v = a.stack, d = o.type + p(v, ""), m = "-" + d, o.stackKey = d, c = r[d] || [], r[d] = c, h = i[m] || [], i[m] = h), e.usePercentage && (e.dataMin = 0, e.dataMax = 99), a = o.processedXData, g = o.processedYData, E = g.length;
for (u = 0; u < E; u++) {
y = a[u], b = g[u], f && (k = (T = b < w) ? h : c, L = T ? m : d, l(k[y]) ? (k[y] = O(k[y] + b), b = [ b, k[y] ]) : k[y] = b, n[L] || (n[L] = {}), n[L][y] || (n[L][y] = new B(e, e.options.stackLabels, T, y, v, f)), n[L][y].setTotal(k[y]), n[L][y].touched = s);
if (b !== null && b !== U && (!e.isLog || b.length || b > 0)) if (_ && (b = o.modifyValue(b)), o.getExtremesFromAll || A || (a[u + 1] || y) >= M.min && (a[u - 1] || y) <= M.max) if (y = b.length) for (; y--; ) b[y] !== null && (S[x++] = b[y]); else S[x++] = b;
}
!e.usePercentage && S.length && (o.dataMin = f = N(S), o.dataMax = o = C(S), e.dataMin = Q(p(e.dataMin, f), f), e.dataMax = K(p(e.dataMax, o), o)), l(w) && (e.dataMin >= w ? (e.dataMin = w, e.ignoreMinPadding = !0) : e.dataMax < w && (e.dataMax = w, e.ignoreMaxPadding = !0));
}
}
});
for (o in n) for (u in n[o]) n[o][u].touched < s && (n[o][u].destroy(), delete n[o][u]);
},
translate: function(e, t, n, r, i, s) {
var o = this.len, u = 1, a = 0, f = r ? this.oldTransA : this.transA, r = r ? this.oldMin : this.min, l = this.minPixelPadding, i = (this.options.ordinal || this.isLog && i) && this.lin2val;
return f || (f = this.transA), n && (u *= -1, a = o), this.reversed && (u *= -1, a -= u * o), t ? (e = e * u + a, e -= l, e = e / f + r, i && (e = this.lin2val(e))) : (i && (e = this.val2lin(e)), e = u * (e - r) * f + a + u * l + (s ? f * this.pointRange / 2 : 0)), e;
},
toPixels: function(e, t) {
return this.translate(e, !1, !this.horiz, null, !0) + (t ? 0 : this.pos);
},
toValue: function(e, t) {
return this.translate(e - (t ? 0 : this.pos), !0, !this.horiz, null, !0);
},
getPlotLinePath: function(e, t, n, r) {
var i = this.chart, s = this.left, o = this.top, u, a, f, e = this.translate(e, null, null, n), l = n && i.oldChartHeight || i.chartHeight, c = n && i.oldChartWidth || i.chartWidth, h;
u = this.transB, n = a = V(e + u), u = f = V(l - e - u);
if (isNaN(e)) h = !0; else if (this.horiz) {
if (u = o, f = l - this.bottom, n < s || n > s + this.width) h = !0;
} else if (n = s, a = c - this.right, u < o || u > o + this.height) h = !0;
return h && !r ? null : i.renderer.crispLine([ "M", n, u, "L", a, f ], t || 0);
},
getPlotBandPath: function(e, t) {
var n = this.getPlotLinePath(t), r = this.getPlotLinePath(e);
return r && n ? r.push(n[4], n[5], n[1], n[2]) : r = null, r;
},
getLinearTickPositions: function(e, t, n) {
for (var r, t = O($(t / e) * e), n = O(J(n / e) * e), i = []; t <= n; ) {
i.push(t), t = O(t + e);
if (t === r) break;
r = t;
}
return i;
},
getLogTickPositions: function(e, t, n, r) {
var i = this.options, s = this.len, o = [];
r || (this._minorAutoInterval = null);
if (e >= .5) e = V(e), o = this.getLinearTickPositions(e, t, n); else if (e >= .08) for (var s = $(t), f, l, c, h, d, i = e > .3 ? [ 1, 2, 4 ] : e > .15 ? [ 1, 2, 4, 6, 8 ] : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; s < n + 1 && !d; s++) {
l = i.length;
for (f = 0; f < l && !d; f++) c = u(a(s) * i[f]), c > t && (!r || h <= n) && o.push(h), h > n && (d = !0), h = c;
} else if (t = a(t), n = a(n), e = i[r ? "minorTickInterval" : "tickInterval"], e = p(e === "auto" ? null : e, this._minorAutoInterval, (n - t) * (i.tickPixelInterval / (r ? 5 : 1)) / ((r ? s / this.tickPositions.length : s) || 1)), e = w(e, null, X.pow(10, $(X.log(e) / X.LN10))), o = sn(this.getLinearTickPositions(e, t, n), u), !r) this._minorAutoInterval = e / 5;
return r || (this.tickInterval = e), o;
},
getMinorTickPositions: function() {
var e = this.options, t = this.tickPositions, n = this.minorTickInterval, r = [], i;
if (this.isLog) {
i = t.length;
for (e = 1; e < i; e++) r = r.concat(this.getLogTickPositions(n, t[e - 1], t[e], !0));
} else if (this.isDatetimeAxis && e.minorTickInterval === "auto") r = r.concat(S(E(n), this.min, this.max, e.startOfWeek)), r[0] < this.min && r.shift(); else for (t = this.min + (t[0] - this.min) % n; t <= this.max; t += n) r.push(t);
return r;
},
adjustForMinRange: function() {
var e = this.options, t = this.min, n = this.max, r, i = this.dataMax - this.dataMin >= this.minRange, s, o, u, a, f;
this.isXAxis && this.minRange === U && !this.isLog && (l(e.min) || l(e.max) ? this.minRange = null : (tn(this.series, function(e) {
a = e.xData;
for (o = f = e.xIncrement ? 1 : a.length - 1; o > 0; o--) if (u = a[o] - a[o - 1], s === U || u < s) s = u;
}), this.minRange = Q(s * 5, this.dataMax - this.dataMin)));
if (n - t < this.minRange) {
var c = this.minRange;
r = (c - n + t) / 2, r = [ t - r, p(e.min, t - r) ], i && (r[2] = this.dataMin), t = C(r), n = [ t + c, p(e.max, t + c) ], i && (n[2] = this.dataMax), n = N(n), n - t < c && (r[0] = n - c, r[1] = p(e.min, n - c), t = C(r));
}
this.min = t, this.max = n;
},
setAxisTranslation: function(e) {
var t = this.max - this.min, n = 0, r, i = 0, s = 0, o = this.linkedParent, u = this.transA;
this.isXAxis && (o ? (i = o.minPointOffset, s = o.pointRangePadding) : tn(this.series, function(e) {
var o = e.pointRange, u = e.options.pointPlacement, a = e.closestPointRange;
o > t && (o = 0), n = K(n, o), i = K(i, u ? 0 : o / 2), s = K(s, u === "on" ? 0 : o), !e.noSharedTooltip && l(a) && (r = l(r) ? Q(r, a) : a);
}), o = this.ordinalSlope ? this.ordinalSlope / r : 1, this.minPointOffset = i *= o, this.pointRangePadding = s *= o, this.pointRange = Q(n, t), this.closestPointRange = r), e && (this.oldTransA = u), this.translationSlope = this.transA = u = this.len / (t + s || 1), this.transB = this.horiz ? this.left : this.bottom, this.minPixelPadding = u * i;
},
setTickPositions: function(e) {
var t = this, n = t.chart, r = t.options, i = t.isLog, s = t.isDatetimeAxis, o = t.isXAxis, a = t.isLinked, f = t.options.tickPositioner, c = r.maxPadding, h = r.minPadding, d = r.tickInterval, v = r.minTickInterval, m = r.tickPixelInterval, g = t.categories;
a ? (t.linkedParent = n[o ? "xAxis" : "yAxis"][r.linkedTo], n = t.linkedParent.getExtremes(), t.min = p(n.min, n.dataMin), t.max = p(n.max, n.dataMax), r.type !== t.linkedParent.options.type && A(11, 1)) : (t.min = p(t.userMin, r.min, t.dataMin), t.max = p(t.userMax, r.max, t.dataMax)), i && (!e && Q(t.min, p(t.dataMin, t.min)) <= 0 && A(10, 1), t.min = O(u(t.min)), t.max = O(u(t.max))), t.range && (t.userMin = t.min = K(t.min, t.max - t.range), t.userMax = t.max, e) && (t.range = null), t.beforePadding && t.beforePadding(), t.adjustForMinRange(), !g && !t.usePercentage && !a && l(t.min) && l(t.max) && (n = t.max - t.min) && (!l(r.min) && !l(t.userMin) && h && (t.dataMin < 0 || !t.ignoreMinPadding) && (t.min -= n * h), !l(r.max) && !l(t.userMax) && c && (t.dataMax > 0 || !t.ignoreMaxPadding) && (t.max += n * c)), t.tickInterval = t.min === t.max || t.min === void 0 || t.max === void 0 ? 1 : a && !d && m === t.linkedParent.options.tickPixelInterval ? t.linkedParent.tickInterval : p(d, g ? 1 : (t.max - t.min) * m / (t.len || 1)), o && !e && tn(t.series, function(e) {
e.processData(t.min !== t.oldMin || t.max !== t.oldMax);
}), t.setAxisTranslation(!0), t.beforeSetTickPositions && t.beforeSetTickPositions(), t.postProcessTickInterval && (t.tickInterval = t.postProcessTickInterval(t.tickInterval)), !d && t.tickInterval < v && (t.tickInterval = v), !s && !i && (e = X.pow(10, $(X.log(t.tickInterval) / X.LN10)), !d) && (t.tickInterval = w(t.tickInterval, null, e, r)), t.minorTickInterval = r.minorTickInterval === "auto" && t.tickInterval ? t.tickInterval / 5 : r.minorTickInterval, t.tickPositions = f = r.tickPositions ? [].concat(r.tickPositions) : f && f.apply(t, [ t.min, t.max ]), f || (f = s ? (t.getNonLinearTimeTicks || S)(E(t.tickInterval, r.units), t.min, t.max, r.startOfWeek, t.ordinalPositions, t.closestPointRange, !0) : i ? t.getLogTickPositions(t.tickInterval, t.min, t.max) : t.getLinearTickPositions(t.tickInterval, t.min, t.max), t.tickPositions = f), a || (i = f[0], s = f[f.length - 1], a = t.minPointOffset || 0, r.startOnTick ? t.min = i : t.min - a > i && f.shift(), r.endOnTick ? t.max = s : t.max + a < s && f.pop(), f.length === 1 && (t.min -= .001, t.max += .001));
},
setMaxTicks: function() {
var e = this.chart, t = e.maxTicks || {}, n = this.tickPositions, r = this._maxTicksKey = [ this.xOrY, this.pos, this.len ].join("-");
!this.isLinked && !this.isDatetimeAxis && n && n.length > (t[r] || 0) && this.options.alignTicks !== !1 && (t[r] = n.length), e.maxTicks = t;
},
adjustTickAmount: function() {
var e = this._maxTicksKey, t = this.tickPositions, n = this.chart.maxTicks;
if (n && n[e] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1) {
var r = this.tickAmount, i = t.length;
this.tickAmount = e = n[e];
if (i < e) {
for (; t.length < e; ) t.push(O(t[t.length - 1] + this.tickInterval));
this.transA *= (i - 1) / (e - 1), this.max = t[t.length - 1];
}
l(r) && e !== r && (this.isDirty = !0);
}
},
setScale: function() {
var e = this.stacks, t, n, r, i;
this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), i = this.len !== this.oldAxisLength, tn(this.series, function(e) {
if (e.isDirtyData || e.isDirty || e.xAxis.isDirty) r = !0;
});
if (i || r || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) if (this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickPositions(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty = i || this.min !== this.oldMin || this.max !== this.oldMax;
if (!this.isXAxis) for (t in e) for (n in e[t]) e[t][n].cum = e[t][n].total;
this.setMaxTicks();
},
setExtremes: function(t, n, r, i, s) {
var o = this, u = o.chart, r = p(r, !0), s = e(s, {
min: t,
max: n
});
an(o, "setExtremes", s, function() {
o.userMin = t, o.userMax = n, o.isDirtyExtremes = !0, r && u.redraw(i);
});
},
zoom: function(e, t) {
return this.allowZoomOutside || (e <= this.dataMin && (e = U), t >= this.dataMax && (t = U)), this.displayBtn = e !== U || t !== U, this.setExtremes(e, t, !1, U, {
trigger: "zoom"
}), !0;
},
setAxisSize: function() {
var e = this.chart, t = this.options, n = t.offsetLeft || 0, r = t.offsetRight || 0, i = this.horiz, s, o;
this.left = o = p(t.left, e.plotLeft + n), this.top = s = p(t.top, e.plotTop), this.width = n = p(t.width, e.plotWidth - n + r), this.height = t = p(t.height, e.plotHeight), this.bottom = e.chartHeight - t - s, this.right = e.chartWidth - n - o, this.len = K(i ? n : t, 0), this.pos = i ? o : s;
},
getExtremes: function() {
var e = this.isLog;
return {
min: e ? O(a(this.min)) : this.min,
max: e ? O(a(this.max)) : this.max,
dataMin: this.dataMin,
dataMax: this.dataMax,
userMin: this.userMin,
userMax: this.userMax
};
},
getThreshold: function(e) {
var t = this.isLog, n = t ? a(this.min) : this.min, t = t ? a(this.max) : this.max;
return n > e || e === null ? e = n : t < e && (e = t), this.translate(e, 0, 1, 0, 1);
},
addPlotBand: function(e) {
this.addPlotBandOrLine(e, "plotBands");
},
addPlotLine: function(e) {
this.addPlotBandOrLine(e, "plotLines");
},
addPlotBandOrLine: function(e, t) {
var n = (new H(this, e)).render(), r = this.userOptions;
return t && (r[t] = r[t] || [], r[t].push(e)), this.plotLinesAndBands.push(n), n;
},
getOffset: function() {
var e = this, t = e.chart, n = t.renderer, r = e.options, i = e.tickPositions, s = e.ticks, o = e.horiz, u = e.side, a = t.inverted ? [ 1, 0, 3, 2 ][u] : u, f, c = 0, h, d = 0, v = r.title, m = r.labels, g = 0, y = t.axisOffset, b = t.clipOffset, w = [ -1, 1, 1, -1 ][u], E;
e.hasData = t = e.hasVisibleSeries || l(e.min) && l(e.max) && !!i, e.showAxis = f = t || p(r.showEmpty, !0), e.axisGroup || (e.gridGroup = n.g("grid").attr({
zIndex: r.gridZIndex || 1
}).add(), e.axisGroup = n.g("axis").attr({
zIndex: r.zIndex || 2
}).add(), e.labelGroup = n.g("axis-labels").attr({
zIndex: m.zIndex || 7
}).add());
if (t || e.isLinked) tn(i, function(t) {
s[t] ? s[t].addLabel() : s[t] = new P(e, t);
}), tn(i, function(e) {
if (u === 0 || u === 2 || {
1: "left",
3: "right"
}[u] === m.align) g = K(s[e].getLabelSize(), g);
}), e.staggerLines && (g += (e.staggerLines - 1) * 16); else for (E in s) s[E].destroy(), delete s[E];
v && v.text && v.enabled !== !1 && (e.axisTitle || (e.axisTitle = n.text(v.text, 0, 0, v.useHTML).attr({
zIndex: 7,
rotation: v.rotation || 0,
align: v.textAlign || {
low: "left",
middle: "center",
high: "right"
}[v.align]
}).css(v.style).add(e.axisGroup), e.axisTitle.isNew = !0), f && (c = e.axisTitle.getBBox()[o ? "height" : "width"], d = p(v.margin, o ? 5 : 10), h = v.offset), e.axisTitle[f ? "show" : "hide"]()), e.offset = w * p(r.offset, y[u]), e.axisTitleMargin = p(h, g + d + (u !== 2 && g && w * r.labels[o ? "y" : "x"])), y[u] = K(y[u], e.axisTitleMargin + c + w * e.offset), b[a] = K(b[a], r.lineWidth);
},
getLinePath: function(e) {
var t = this.chart, n = this.opposite, r = this.offset, i = this.horiz, s = this.left + (n ? this.width : 0) + r;
return this.lineTop = r = t.chartHeight - this.bottom - (n ? this.height : 0) + r, n || (e *= -1), t.renderer.crispLine([ "M", i ? this.left : s, i ? r : this.top, "L", i ? t.chartWidth - this.right : s, i ? r : t.chartHeight - this.bottom ], e);
},
getTitlePosition: function() {
var e = this.horiz, t = this.left, r = this.top, i = this.len, s = this.options.title, o = e ? t : r, u = this.opposite, a = this.offset, f = n(s.style.fontSize || 12), i = {
low: o + (e ? 0 : i),
middle: o + i / 2,
high: o + (e ? i : 0)
}[s.align], t = (e ? r + this.height : t) + (e ? 1 : -1) * (u ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? f : 0);
return {
x: e ? i : t + (u ? this.width : 0) + a + (s.x || 0),
y: e ? t - (u ? this.height : 0) + a : i + (s.y || 0)
};
},
render: function() {
var e = this, t = e.chart, n = t.renderer, r = e.options, i = e.isLog, s = e.isLinked, o = e.tickPositions, u = e.axisTitle, f = e.stacks, c = e.ticks, h = e.minorTicks, p = e.alternateBands, d = r.stackLabels, v = r.alternateGridColor, m = e.tickmarkOffset, g = r.lineWidth, y, b = t.hasRendered && l(e.oldMin) && !isNaN(e.oldMin);
y = e.hasData;
var w = e.showAxis, E, S;
tn([ c, h, p ], function(e) {
for (var t in e) e[t].isActive = !1;
});
if (y || s) if (e.minorTickInterval && !e.categories && tn(e.getMinorTickPositions(), function(t) {
h[t] || (h[t] = new P(e, t, "minor")), b && h[t].isNew && h[t].render(null, !0), h[t].render(null, !1, 1);
}), o.length && (tn(o.slice(1).concat([ o[0] ]), function(t, n) {
n = n === o.length - 1 ? 0 : n + 1;
if (!s || t >= e.min && t <= e.max) c[t] || (c[t] = new P(e, t)), b && c[t].isNew && c[t].render(n, !0), c[t].render(n, !1, 1);
}), m && e.min === 0 && (c[-1] || (c[-1] = new P(e, -1, null, !0)), c[-1].render(-1))), v && tn(o, function(t, n) {
n % 2 === 0 && t < e.max && (p[t] || (p[t] = new H(e)), E = t + m, S = o[n + 1] !== U ? o[n + 1] + m : e.max, p[t].options = {
from: i ? a(E) : E,
to: i ? a(S) : S,
color: v
}, p[t].render(), p[t].isActive = !0);
}), !e._addedPlotLB) tn((r.plotLines || []).concat(r.plotBands || []), function(t) {
e.addPlotBandOrLine(t);
}), e._addedPlotLB = !0;
tn([ c, h, p ], function(e) {
var n, r, i = [], s = wt ? wt.duration || 500 : 0, o = function() {
for (r = i.length; r--; ) e[i[r]] && !e[i[r]].isActive && (e[i[r]].destroy(), delete e[i[r]]);
};
for (n in e) e[n].isActive || (e[n].render(n, !1, 0), e[n].isActive = !1, i.push(n));
e === p || !t.hasRendered || !s ? o() : s && setTimeout(o, s);
}), g && (y = e.getLinePath(g), e.axisLine ? e.axisLine.animate({
d: y
}) : e.axisLine = n.path(y).attr({
stroke: r.lineColor,
"stroke-width": g,
zIndex: 7
}).add(e.axisGroup), e.axisLine[w ? "show" : "hide"]()), u && w && (u[u.isNew ? "attr" : "animate"](e.getTitlePosition()), u.isNew = !1);
if (d && d.enabled) {
var x, T, r = e.stackTotalGroup;
r || (e.stackTotalGroup = r = n.g("stack-labels").attr({
visibility: "visible",
zIndex: 6
}).add()), r.translate(t.plotLeft, t.plotTop);
for (x in f) for (T in n = f[x], n) n[T].render(r);
}
e.isDirty = !1;
},
removePlotBandOrLine: function(e) {
for (var t = this.plotLinesAndBands, n = t.length; n--; ) t[n].id === e && t[n].destroy();
},
setTitle: function(e, t) {
this.update({
title: e
}, t);
},
redraw: function() {
var e = this.chart.pointer;
e.reset && e.reset(!0), this.render(), tn(this.plotLinesAndBands, function(e) {
e.render();
}), tn(this.series, function(e) {
e.isDirty = !0;
});
},
setCategories: function(e, t) {
this.update({
categories: e
}, t);
},
destroy: function() {
var e = this, t = e.stacks, n;
un(e);
for (n in t) k(t[n]), t[n] = null;
tn([ e.ticks, e.minorTicks, e.alternateBands, e.plotLinesAndBands ], function(e) {
k(e);
}), tn("stackTotalGroup,axisLine,axisGroup,gridGroup,labelGroup,axisTitle".split(","), function(t) {
e[t] && (e[t] = e[t].destroy());
});
}
}, F.prototype = {
init: function(e, t) {
var r = t.borderWidth, i = t.style, s = n(i.padding);
this.chart = e, this.options = t, this.crosshairs = [], this.now = {
x: 0,
y: 0
}, this.isHidden = !0, this.label = e.renderer.label("", 0, 0, t.shape, null, null, t.useHTML, null, "tooltip").attr({
padding: s,
fill: t.backgroundColor,
"stroke-width": r,
r: t.borderRadius,
zIndex: 8
}).css(i).css({
padding: 0
}).hide().add(), ht || this.label.shadow(t.shadow), this.shared = t.shared;
},
destroy: function() {
tn(this.crosshairs, function(e) {
e && e.destroy();
}), this.label && (this.label = this.label.destroy());
},
move: function(t, n, r, i) {
var s = this, o = s.now, u = s.options.animation !== !1 && !s.isHidden;
e(o, {
x: u ? (2 * o.x + t) / 3 : t,
y: u ? (o.y + n) / 2 : n,
anchorX: u ? (2 * o.anchorX + r) / 3 : r,
anchorY: u ? (o.anchorY + i) / 2 : i
}), s.label.attr(o), u && (G(t - o.x) > 1 || G(n - o.y) > 1) && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
s && s.move(t, n, r, i);
}, 32));
},
hide: function() {
var e = this, t;
this.isHidden || (t = this.chart.hoverPoints, this.hideTimer = setTimeout(function() {
e.label.fadeOut(), e.isHidden = !0;
}, p(this.options.hideDelay, 500)), t && tn(t, function(e) {
e.setState();
}), this.chart.hoverPoints = null);
},
hideCrosshairs: function() {
tn(this.crosshairs, function(e) {
e && e.hide();
});
},
getAnchor: function(e, t) {
var n, r = this.chart, i = r.inverted, s = r.plotTop, o = 0, u = 0, a, e = h(e);
return n = e[0].tooltipPos, this.followPointer && t && (t.chartX === U && (t = r.pointer.normalize(t)), n = [ t.chartX - r.plotLeft, t.chartY - s ]), n || (tn(e, function(e) {
a = e.series.yAxis, o += e.plotX, u += (e.plotLow ? (e.plotLow + e.plotHigh) / 2 : e.plotY) + (!i && a ? a.top - s : 0);
}), o /= e.length, u /= e.length, n = [ i ? r.plotWidth - u : o, this.shared && !i && e.length > 1 && t ? t.chartY - s : i ? r.plotHeight - o : u ]), sn(n, V);
},
getPosition: function(e, t, n) {
var r = this.chart, i = r.plotLeft, s = r.plotTop, o = r.plotWidth, u = r.plotHeight, a = p(this.options.distance, 12), f = n.plotX, n = n.plotY, r = f + i + (r.inverted ? a : -e - a), l = n - t + s + 15, c;
return r < 7 && (r = i + K(f, 0) + a), r + e > i + o && (r -= r + e - (i + o), l = n - t + s - a, c = !0), l < s + 5 && (l = s + 5, c && n >= l && n <= l + t && (l = n + s + a)), l + t > s + u && (l = K(s, s + u - t - a)), {
x: r,
y: l
};
},
defaultFormatter: function(e) {
var t = this.points || h(this), n = t[0].series, r;
return r = [ n.tooltipHeaderFormatter(t[0]) ], tn(t, function(e) {
n = e.series, r.push(n.tooltipFormatter && n.tooltipFormatter(e) || e.point.tooltipFormatter(n.tooltipOptions.pointFormat));
}), r.push(e.options.footerFormat || ""), r.join("");
},
refresh: function(e, t) {
var n = this.chart, r = this.label, i = this.options, s, o, a, f = {}, l, c = [];
l = i.formatter || this.defaultFormatter;
var f = n.hoverPoints, d, v = i.crosshairs;
a = this.shared, clearTimeout(this.hideTimer), this.followPointer = h(e)[0].series.tooltipOptions.followPointer, o = this.getAnchor(e, t), s = o[0], o = o[1], a && (!e.series || !e.series.noSharedTooltip) ? (n.hoverPoints = e, f && tn(f, function(e) {
e.setState();
}), tn(e, function(e) {
e.setState("hover"), c.push(e.getLabelConfig());
}), f = {
x: e[0].category,
y: e[0].y
}, f.points = c, e = e[0]) : f = e.getLabelConfig(), l = l.call(f, this), f = e.series, a = a || !f.isCartesian || f.tooltipOutsidePlot || n.isInsidePlot(s, o), l === !1 || !a ? this.hide() : (this.isHidden && (cn(r), r.attr("opacity", 1).show()), r.attr({
text: l
}), d = i.borderColor || e.color || f.color || "#606060", r.attr({
stroke: d
}), this.updatePosition({
plotX: s,
plotY: o
}), this.isHidden = !1);
if (v) {
v = h(v);
for (r = v.length; r--; ) if (i = e.series[r ? "yAxis" : "xAxis"], v[r] && i) (a = r ? p(e.stackY, e.y) : e.x, i.isLog && (a = u(a)), i = i.getPlotLinePath(a, 1), this.crosshairs[r]) ? this.crosshairs[r].attr({
d: i,
visibility: "visible"
}) : (a = {
"stroke-width": v[r].width || 1,
stroke: v[r].color || "#C0C0C0",
zIndex: v[r].zIndex || 2
}, v[r].dashStyle && (a.dashstyle = v[r].dashStyle), this.crosshairs[r] = n.renderer.path(i).attr(a).add());
}
an(n, "tooltipRefresh", {
text: l,
x: s + n.plotLeft,
y: o + n.plotTop,
borderColor: d
});
},
updatePosition: function(e) {
var t = this.chart, n = this.label, n = (this.options.positioner || this.getPosition).call(this, n.width, n.height, e);
this.move(V(n.x), V(n.y), e.plotX + t.plotLeft, e.plotY + t.plotTop);
}
}, I.prototype = {
init: function(e, t) {
var n = ht ? "" : t.chart.zoomType, r = e.inverted, i;
this.options = t, this.chart = e, this.zoomX = i = /x/.test(n), this.zoomY = n = /y/.test(n), this.zoomHor = i && !r || n && r, this.zoomVert = n && !r || i && r, this.pinchDown = [], this.lastValidTouch = {}, t.tooltip.enabled && (e.tooltip = new F(e, t.tooltip)), this.setDOMEvents();
},
normalize: function(t) {
var n, r, i, t = t || W.event;
return t.target || (t.target = t.srcElement), t = fn(t), i = t.touches ? t.touches.item(0) : t, this.chartPosition = n = rn(this.chart.container), i.pageX === U ? (r = t.x, n = t.y) : (r = i.pageX - n.left, n = i.pageY - n.top), e(t, {
chartX: V(r),
chartY: V(n)
});
},
getCoordinates: function(e) {
var t = {
xAxis: [],
yAxis: []
};
return tn(this.chart.axes, function(n) {
t[n.isXAxis ? "xAxis" : "yAxis"].push({
axis: n,
value: n.toValue(e[n.horiz ? "chartX" : "chartY"])
});
}), t;
},
getIndex: function(e) {
var t = this.chart;
return t.inverted ? t.plotHeight + t.plotTop - e.chartY : e.chartX - t.plotLeft;
},
runPointActions: function(e) {
var t = this.chart, n = t.series, r = t.tooltip, i, s = t.hoverPoint, o = t.hoverSeries, u, a, f = t.chartWidth, l = this.getIndex(e);
if (r && this.options.tooltip.shared && (!o || !o.noSharedTooltip)) {
i = [], u = n.length;
for (a = 0; a < u; a++) n[a].visible && n[a].options.enableMouseTracking !== !1 && !n[a].noSharedTooltip && n[a].tooltipPoints.length && (t = n[a].tooltipPoints[l], t.series) && (t._dist = G(l - t.clientX), f = Q(f, t._dist), i.push(t));
for (u = i.length; u--; ) i[u]._dist > f && i.splice(u, 1);
i.length && i[0].clientX !== this.hoverX && (r.refresh(i, e), this.hoverX = i[0].clientX);
}
o && o.tracker ? (t = o.tooltipPoints[l]) && t !== s && t.onMouseOver(e) : r && r.followPointer && !r.isHidden && (e = r.getAnchor([ {} ], e), r.updatePosition({
plotX: e[0],
plotY: e[1]
}));
},
reset: function(e) {
var t = this.chart, n = t.hoverSeries, r = t.hoverPoint, i = t.tooltip, t = i && i.shared ? t.hoverPoints : r;
(e = e && i && t) && h(t)[0].plotX === U && (e = !1), e ? i.refresh(t) : (r && r.onMouseOut(), n && n.onMouseOut(), i && (i.hide(), i.hideCrosshairs()), this.hoverX = null);
},
scaleGroups: function(e, t) {
var n = this.chart;
tn(n.series, function(r) {
r.xAxis.zoomEnabled && (r.group.attr(e), r.markerGroup && (r.markerGroup.attr(e), r.markerGroup.clip(t ? n.clipRect : null)), r.dataLabelsGroup && r.dataLabelsGroup.attr(e));
}), n.clipRect.attr(t || n.clipBox);
},
pinchTranslateDirection: function(e, t, n, r, i, s, o) {
var u = this.chart, a = e ? "x" : "y", f = e ? "X" : "Y", l = "chart" + f, c = e ? "width" : "height", h = u["plot" + (e ? "Left" : "Top")], p, d, v = 1, m = u.inverted, g = u.bounds[e ? "h" : "v"], y = t.length === 1, b = t[0][l], w = n[0][l], E = !y && t[1][l], S = !y && n[1][l], x, n = function() {
!y && G(b - E) > 20 && (v = G(w - S) / G(b - E)), d = (h - w) / v + b, p = u["plot" + (e ? "Width" : "Height")] / v;
};
n(), t = d, t < g.min ? (t = g.min, x = !0) : t + p > g.max && (t = g.max - p, x = !0), x ? (w -= .8 * (w - o[a][0]), y || (S -= .8 * (S - o[a][1])), n()) : o[a] = [ w, S ], m || (s[a] = d - h, s[c] = p), s = m ? 1 / v : v, i[c] = p, i[a] = t, r[m ? e ? "scaleY" : "scaleX" : "scale" + f] = v, r["translate" + f] = s * h + (w - s * b);
},
pinch: function(t) {
var n = this, r = n.chart, i = n.pinchDown, s = r.tooltip.options.followTouchMove, o = t.touches, u = o.length, a = n.lastValidTouch, f = n.zoomHor || n.pinchHor, l = n.zoomVert || n.pinchVert, c = f || l, h = n.selectionMarker, p = {}, d = {};
t.type === "touchstart" && s && (n.inClass(t.target, "highcharts-tracker") ? (!r.runTrackerClick || u > 1) && t.preventDefault() : (!r.runChartClick || u > 1) && t.preventDefault()), sn(o, function(e) {
return n.normalize(e);
}), t.type === "touchstart" ? (tn(o, function(e, t) {
i[t] = {
chartX: e.chartX,
chartY: e.chartY
};
}), a.x = [ i[0].chartX, i[1] && i[1].chartX ], a.y = [ i[0].chartY, i[1] && i[1].chartY ], tn(r.axes, function(e) {
if (e.zoomEnabled) {
var t = r.bounds[e.horiz ? "h" : "v"], n = e.minPixelPadding, i = e.toPixels(e.dataMin), s = e.toPixels(e.dataMax), o = Q(i, s), i = K(i, s);
t.min = Q(e.pos, o - n), t.max = K(e.pos + e.len, i + n);
}
})) : i.length && (h || (n.selectionMarker = h = e({
destroy: xt
}, r.plotBox)), f && n.pinchTranslateDirection(!0, i, o, p, h, d, a), l && n.pinchTranslateDirection(!1, i, o, p, h, d, a), n.hasPinched = c, n.scaleGroups(p, d), !c && s && u === 1 && this.runPointActions(n.normalize(t)));
},
dragStart: function(e) {
var t = this.chart;
t.mouseIsDown = e.type, t.cancelClick = !1, t.mouseDownX = this.mouseDownX = e.chartX, this.mouseDownY = e.chartY;
},
drag: function(e) {
var t = this.chart, n = t.options.chart, r = e.chartX, e = e.chartY, i = this.zoomHor, s = this.zoomVert, o = t.plotLeft, u = t.plotTop, a = t.plotWidth, f = t.plotHeight, l, c = this.mouseDownX, h = this.mouseDownY;
r < o ? r = o : r > o + a && (r = o + a), e < u ? e = u : e > u + f && (e = u + f), this.hasDragged = Math.sqrt(Math.pow(c - r, 2) + Math.pow(h - e, 2)), this.hasDragged > 10 && (l = t.isInsidePlot(c - o, h - u), t.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !this.selectionMarker && (this.selectionMarker = t.renderer.rect(o, u, i ? 1 : a, s ? 1 : f, 0).attr({
fill: n.selectionMarkerFill || "rgba(69,114,167,0.25)",
zIndex: 7
}).add()), this.selectionMarker && i && (i = r - c, this.selectionMarker.attr({
width: G(i),
x: (i > 0 ? 0 : i) + c
})), this.selectionMarker && s && (i = e - h, this.selectionMarker.attr({
height: G(i),
y: (i > 0 ? 0 : i) + h
})), l && !this.selectionMarker && n.panning && t.pan(r));
},
drop: function(t) {
var n = this.chart, r = this.hasPinched;
if (this.selectionMarker) {
var i = {
xAxis: [],
yAxis: [],
originalEvent: t.originalEvent || t
}, s = this.selectionMarker, o = s.x, u = s.y, a;
if (this.hasDragged || r) tn(n.axes, function(e) {
if (e.zoomEnabled) {
var t = e.horiz, n = e.minPixelPadding, r = e.toValue((t ? o : u) + n), t = e.toValue((t ? o + s.width : u + s.height) - n);
!isNaN(r) && !isNaN(t) && (i[e.xOrY + "Axis"].push({
axis: e,
min: Q(r, t),
max: K(r, t)
}), a = !0);
}
}), a && an(n, "selection", i, function(t) {
n.zoom(e(t, r ? {
animation: !1
} : null));
});
this.selectionMarker = this.selectionMarker.destroy(), r && this.scaleGroups({
translateX: n.plotLeft,
translateY: n.plotTop,
scaleX: 1,
scaleY: 1
});
}
n && (d(n.container, {
cursor: n._cursor
}), n.cancelClick = this.hasDragged, n.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
},
onContainerMouseDown: function(e) {
e = this.normalize(e), e.preventDefault && e.preventDefault(), this.dragStart(e);
},
onDocumentMouseUp: function(e) {
this.drop(e);
},
onDocumentMouseMove: function(e) {
var t = this.chart, n = this.chartPosition, r = t.hoverSeries, e = fn(e);
n && r && r.isCartesian && !t.isInsidePlot(e.pageX - n.left - t.plotLeft, e.pageY - n.top - t.plotTop) && this.reset();
},
onContainerMouseLeave: function() {
this.reset(), this.chartPosition = null;
},
onContainerMouseMove: function(e) {
var t = this.chart, e = this.normalize(e);
e.returnValue = !1, t.mouseIsDown === "mousedown" && this.drag(e), t.isInsidePlot(e.chartX - t.plotLeft, e.chartY - t.plotTop) && this.runPointActions(e);
},
inClass: function(e, t) {
for (var n; e; ) {
if (n = c(e, "class")) {
if (n.indexOf(t) !== -1) return !0;
if (n.indexOf("highcharts-container") !== -1) return !1;
}
e = e.parentNode;
}
},
onTrackerMouseOut: function(e) {
var t = this.chart.hoverSeries;
t && !t.options.stickyTracking && !this.inClass(e.toElement || e.relatedTarget, "highcharts-tooltip") && t.onMouseOut();
},
onContainerClick: function(t) {
var n = this.chart, r = n.hoverPoint, i = n.plotLeft, s = n.plotTop, o = n.inverted, u, a, f, t = this.normalize(t);
t.cancelBubble = !0, n.cancelClick || (r && this.inClass(t.target, "highcharts-tracker") ? (u = this.chartPosition, a = r.plotX, f = r.plotY, e(r, {
pageX: u.left + i + (o ? n.plotWidth - f : a),
pageY: u.top + s + (o ? n.plotHeight - a : f)
}), an(r.series, "click", e(t, {
point: r
})), r.firePointEvent("click", t)) : (e(t, this.getCoordinates(t)), n.isInsidePlot(t.chartX - i, t.chartY - s) && an(n, "click", t)));
},
onContainerTouchStart: function(e) {
var t = this.chart;
e.touches.length === 1 ? (e = this.normalize(e), t.isInsidePlot(e.chartX - t.plotLeft, e.chartY - t.plotTop) && (this.runPointActions(e), this.pinch(e))) : e.touches.length === 2 && this.pinch(e);
},
onContainerTouchMove: function(e) {
(e.touches.length === 1 || e.touches.length === 2) && this.pinch(e);
},
onDocumentTouchEnd: function(e) {
this.drop(e);
},
setDOMEvents: function() {
var e = this, t = e.chart.container, n;
this._events = n = [ [ t, "onmousedown", "onContainerMouseDown" ], [ t, "onmousemove", "onContainerMouseMove" ], [ t, "onclick", "onContainerClick" ], [ t, "mouseleave", "onContainerMouseLeave" ], [ z, "mousemove", "onDocumentMouseMove" ], [ z, "mouseup", "onDocumentMouseUp" ] ], dt && n.push([ t, "ontouchstart", "onContainerTouchStart" ], [ t, "ontouchmove", "onContainerTouchMove" ], [ z, "touchend", "onDocumentTouchEnd" ]), tn(n, function(t) {
e["_" + t[2]] = function(n) {
e[t[2]](n);
}, t[1].indexOf("on") === 0 ? t[0][t[1]] = e["_" + t[2]] : on(t[0], t[1], e["_" + t[2]]);
});
},
destroy: function() {
var e = this;
tn(e._events, function(t) {
t[1].indexOf("on") === 0 ? t[0][t[1]] = null : un(t[0], t[1], e["_" + t[2]]);
}), delete e._events, clearInterval(e.tooltipTimeout);
}
}, q.prototype = {
init: function(e, r) {
var i = this, s = r.itemStyle, o = p(r.padding, 8), u = r.itemMarginTop || 0;
this.options = r, r.enabled && (i.baseline = n(s.fontSize) + 3 + u, i.itemStyle = s, i.itemHiddenStyle = t(s, r.itemHiddenStyle), i.itemMarginTop = u, i.padding = o, i.initialItemX = o, i.initialItemY = o - 5, i.maxItemWidth = 0, i.chart = e, i.itemHeight = 0, i.lastLineHeight = 0, i.render(), on(i.chart, "endResize", function() {
i.positionCheckboxes();
}));
},
colorizeItem: function(e, t) {
var n = this.options, r = e.legendItem, i = e.legendLine, s = e.legendSymbol, o = this.itemHiddenStyle.color, n = t ? n.itemStyle.color : o, u = t ? e.color : o, o = e.options && e.options.marker, a = {
stroke: u,
fill: u
}, f;
r && r.css({
fill: n,
color: n
}), i && i.attr({
stroke: u
});
if (s) {
if (o) for (f in o = e.convertAttribs(o), o) r = o[f], r !== U && (a[f] = r);
s.attr(a);
}
},
positionItem: function(e) {
var t = this.options, n = t.symbolPadding, t = !t.rtl, r = e._legendItemPos, i = r[0], r = r[1], s = e.checkbox;
e.legendGroup && e.legendGroup.translate(t ? i : this.legendWidth - i - 2 * n - 4, r), s && (s.x = i, s.y = r);
},
destroyItem: function(e) {
var t = e.checkbox;
tn([ "legendItem", "legendLine", "legendSymbol", "legendGroup" ], function(t) {
e[t] && e[t].destroy();
}), t && L(e.checkbox);
},
destroy: function() {
var e = this.group, t = this.box;
t && (this.box = t.destroy()), e && (this.group = e.destroy());
},
positionCheckboxes: function(e) {
var t = this.group.alignAttr, n, r = this.clipHeight || this.legendHeight;
t && (n = t.translateY, tn(this.allItems, function(i) {
var s = i.checkbox, o;
s && (o = n + s.y + (e || 0) + 3, d(s, {
left: t.translateX + i.legendItemWidth + s.x - 20 + "px",
top: o + "px",
display: o > n - 6 && o < n + r - 6 ? "" : Ct
}));
}));
},
renderTitle: function() {
var e = this.padding, t = this.options.title, n = 0;
t.text && (this.title || (this.title = this.chart.renderer.label(t.text, e - 3, e - 4, null, null, null, null, null, "legend-title").attr({
zIndex: 1
}).css(t.style).add(this.group)), n = this.title.getBBox().height, this.contentGroup.attr({
translateY: n
})), this.titleHeight = n;
},
renderItem: function(e) {
var n, r = this, i = r.chart, s = i.renderer, o = r.options, u = o.layout === "horizontal", a = o.symbolWidth, f = o.symbolPadding, l = r.itemStyle, c = r.itemHiddenStyle, h = r.padding, p = !o.rtl, d = o.width, m = o.itemMarginBottom || 0, g = r.itemMarginTop, y = r.initialItemX, w = e.legendItem, E = e.series || e, S = E.options, x = S.showCheckbox, T = o.useHTML;
!w && (e.legendGroup = s.g("legend-item").attr({
zIndex: 1
}).add(r.scrollGroup), E.drawLegendSymbol(r, e), e.legendItem = w = s.text(o.labelFormat ? b(o.labelFormat, e) : o.labelFormatter.call(e), p ? a + f : -f, r.baseline, T).css(t(e.visible ? l : c)).attr({
align: p ? "left" : "right",
zIndex: 2
}).add(e.legendGroup), (T ? w : e.legendGroup).on("mouseover", function() {
e.setState("hover"), w.css(r.options.itemHoverStyle);
}).on("mouseout", function() {
w.css(e.visible ? l : c), e.setState();
}).on("click", function(t) {
var n = function() {
e.setVisible();
}, t = {
browserEvent: t
};
e.firePointEvent ? e.firePointEvent("legendItemClick", t, n) : an(e, "legendItemClick", t, n);
}), r.colorizeItem(e, e.visible), S && x) && (e.checkbox = v("input", {
type: "checkbox",
checked: e.selected,
defaultChecked: e.selected
}, o.itemCheckboxStyle, i.container), on(e.checkbox, "click", function(t) {
an(e, "checkboxClick", {
checked: t.target.checked
}, function() {
e.select();
});
})), s = w.getBBox(), n = e.legendItemWidth = o.itemWidth || a + f + s.width + h + (x ? 20 : 0), o = n, r.itemHeight = a = s.height, u && r.itemX - y + o > (d || i.chartWidth - 2 * h - y) && (r.itemX = y, r.itemY += g + r.lastLineHeight + m, r.lastLineHeight = 0), r.maxItemWidth = K(r.maxItemWidth, o), r.lastItemY = g + r.itemY + m, r.lastLineHeight = K(a, r.lastLineHeight), e._legendItemPos = [ r.itemX, r.itemY ], u ? r.itemX += o : (r.itemY += g + a + m, r.lastLineHeight = a), r.offsetWidth = d || K(u ? r.itemX - y : o, r.offsetWidth);
},
render: function() {
var t = this, n = t.chart, r = n.renderer, i = t.group, s, o, u, a, f = t.box, c = t.options, h = t.padding, p = c.borderWidth, d = c.backgroundColor;
t.itemX = t.initialItemX, t.itemY = t.initialItemY, t.offsetWidth = 0, t.lastItemY = 0, i || (t.group = i = r.g("legend").attr({
zIndex: 7
}).add(), t.contentGroup = r.g().attr({
zIndex: 1
}).add(i), t.scrollGroup = r.g().add(t.contentGroup), t.clipRect = r.clipRect(0, 0, 9999, n.chartHeight), t.contentGroup.clip(t.clipRect)), t.renderTitle(), s = [], tn(n.series, function(e) {
var t = e.options;
t.showInLegend && !l(t.linkedTo) && (s = s.concat(e.legendItems || (t.legendType === "point" ? e.data : e)));
}), T(s, function(e, t) {
return (e.options && e.options.legendIndex || 0) - (t.options && t.options.legendIndex || 0);
}), c.reversed && s.reverse(), t.allItems = s, t.display = o = !!s.length, tn(s, function(e) {
t.renderItem(e);
}), u = c.width || t.offsetWidth, a = t.lastItemY + t.lastLineHeight + t.titleHeight, a = t.handleOverflow(a);
if (p || d) u += h, a += h, f ? u > 0 && a > 0 && (f[f.isNew ? "attr" : "animate"](f.crisp(null, null, null, u, a)), f.isNew = !1) : (t.box = f = r.rect(0, 0, u, a, c.borderRadius, p || 0).attr({
stroke: c.borderColor,
"stroke-width": p || 0,
fill: d || Ct
}).add(i).shadow(c.shadow), f.isNew = !0), f[o ? "show" : "hide"]();
t.legendWidth = u, t.legendHeight = a, tn(s, function(e) {
t.positionItem(e);
}), o && i.align(e({
width: u,
height: a
}, c), !0, "spacingBox"), n.isResizing || this.positionCheckboxes();
},
handleOverflow: function(e) {
var t = this, n = this.chart, r = n.renderer, i = this.options, s = i.y, s = n.spacingBox.height + (i.verticalAlign === "top" ? -s : s) - this.padding, o = i.maxHeight, u = this.clipRect, a = i.navigation, f = p(a.animation, !0), l = a.arrowSize || 12, c = this.nav;
return i.layout === "horizontal" && (s /= 2), o && (s = Q(s, o)), e > s && !i.useHTML ? (this.clipHeight = n = s - 20 - this.titleHeight, this.pageCount = J(e / n), this.currentPage = p(this.currentPage, 1), this.fullHeight = e, u.attr({
height: n
}), c || (this.nav = c = r.g().attr({
zIndex: 1
}).add(this.group), this.up = r.symbol("triangle", 0, 0, l, l).on("click", function() {
t.scroll(-1, f);
}).add(c), this.pager = r.text("", 15, 10).css(a.style).add(c), this.down = r.symbol("triangle-down", 0, 0, l, l).on("click", function() {
t.scroll(1, f);
}).add(c)), t.scroll(0), e = s) : c && (u.attr({
height: n.chartHeight
}), c.hide(), this.scrollGroup.attr({
translateY: 1
}), this.clipHeight = 0), e;
},
scroll: function(e, t) {
var n = this.pageCount, r = this.currentPage + e, i = this.clipHeight, s = this.options.navigation, o = s.activeColor, u = s.inactiveColor, s = this.pager, a = this.padding;
r > n && (r = n), r > 0 && (t !== U && M(t, this.chart), this.nav.attr({
translateX: a,
translateY: i + 7 + this.titleHeight,
visibility: "visible"
}), this.up.attr({
fill: r === 1 ? u : o
}).css({
cursor: r === 1 ? "default" : "pointer"
}), s.attr({
text: r + "/" + this.pageCount
}), this.down.attr({
x: 18 + this.pager.getBBox().width,
fill: r === n ? u : o
}).css({
cursor: r === n ? "default" : "pointer"
}), i = -Q(i * (r - 1), this.fullHeight - i + a) + 1, this.scrollGroup.animate({
translateY: i
}), s.attr({
text: r + "/" + n
}), this.currentPage = r, this.positionCheckboxes(i));
}
}, R.prototype = {
init: function(e, n) {
var r, s = e.series;
e.series = null, r = t(yt, e), r.series = e.series = s;
var s = r.chart, o = s.margin, o = i(o) ? o : [ o, o, o, o ];
this.optionsMarginTop = p(s.marginTop, o[0]), this.optionsMarginRight = p(s.marginRight, o[1]), this.optionsMarginBottom = p(s.marginBottom, o[2]), this.optionsMarginLeft = p(s.marginLeft, o[3]), this.runChartClick = (o = s.events) && !!o.click, this.bounds = {
h: {},
v: {}
}, this.callback = n, this.isResizing = 0, this.options = r, this.axes = [], this.series = [], this.hasCartesianSeries = s.showAxes;
var u = this, a;
u.index = Tt.length, Tt.push(u), s.reflow !== !1 && on(u, "load", function() {
u.initReflow();
});
if (o) for (a in o) on(u, a, o[a]);
u.xAxis = [], u.yAxis = [], u.animation = ht ? !1 : p(s.animation, !0), u.pointCount = 0, u.counters = new x, u.firstRender();
},
initSeries: function(e) {
var t = this.options.chart;
return (t = Kt[e.type || t.type || t.defaultSeriesType]) || A(17, !0), t = new t, t.init(this, e), t;
},
addSeries: function(e, t, n) {
var r, i = this;
return e && (t = p(t, !0), an(i, "addSeries", {
options: e
}, function() {
r = i.initSeries(e), i.isDirtyLegend = !0, t && i.redraw(n);
})), r;
},
addAxis: function(e, n, r, i) {
var n = n ? "xAxis" : "yAxis", s = this.options;
new j(this, t(e, {
index: this[n].length
})), s[n] = h(s[n] || {}), s[n].push(e), p(r, !0) && this.redraw(i);
},
isInsidePlot: function(e, t, n) {
var r = n ? t : e, e = n ? e : t;
return r >= 0 && r <= this.plotWidth && e >= 0 && e <= this.plotHeight;
},
adjustTickAmounts: function() {
this.options.chart.alignTicks !== !1 && tn(this.axes, function(e) {
e.adjustTickAmount();
}), this.maxTicks = null;
},
redraw: function(e) {
var t = this.axes, n = this.series, r = this.pointer, i = this.legend, s = this.isDirtyLegend, o, u = this.isDirtyBox, a = n.length, f = a, l = this.renderer, c = l.isHidden(), h = [];
M(e, this);
for (c && this.cloneRenderTo(); f--; ) if (e = n[f], e.isDirty && e.options.stacking) {
o = !0;
break;
}
if (o) for (f = a; f--; ) if (e = n[f], e.options.stacking) e.isDirty = !0;
tn(n, function(e) {
e.isDirty && e.options.legendType === "point" && (s = !0);
}), s && i.options.enabled && (i.render(), this.isDirtyLegend = !1), this.hasCartesianSeries && (this.isResizing || (this.maxTicks = null, tn(t, function(e) {
e.setScale();
})), this.adjustTickAmounts(), this.getMargins(), tn(t, function(e) {
e.isDirtyExtremes && (e.isDirtyExtremes = !1, h.push(function() {
an(e, "afterSetExtremes", e.getExtremes());
}));
if (e.isDirty || u || o) e.redraw(), u = !0;
})), u && this.drawChartBox(), tn(n, function(e) {
e.isDirty && e.visible && (!e.isCartesian || e.xAxis) && e.redraw();
}), r && r.reset && r.reset(!0), l.draw(), an(this, "redraw"), c && this.cloneRenderTo(!0), tn(h, function(e) {
e.call();
});
},
showLoading: function(t) {
var n = this.options, r = this.loadingDiv, i = n.loading;
r || (this.loadingDiv = r = v(Nt, {
className: "highcharts-loading"
}, e(i.style, {
zIndex: 10,
display: Ct
}), this.container), this.loadingSpan = v("span", null, i.labelStyle, r)), this.loadingSpan.innerHTML = t || n.lang.loading, this.loadingShown || (d(r, {
opacity: 0,
display: "",
left: this.plotLeft + "px",
top: this.plotTop + "px",
width: this.plotWidth + "px",
height: this.plotHeight + "px"
}), ln(r, {
opacity: i.style.opacity
}, {
duration: i.showDuration || 0
}), this.loadingShown = !0);
},
hideLoading: function() {
var e = this.options, t = this.loadingDiv;
t && ln(t, {
opacity: 0
}, {
duration: e.loading.hideDuration || 100,
complete: function() {
d(t, {
display: Ct
});
}
}), this.loadingShown = !1;
},
get: function(e) {
var t = this.axes, n = this.series, r, i;
for (r = 0; r < t.length; r++) if (t[r].options.id === e) return t[r];
for (r = 0; r < n.length; r++) if (n[r].options.id === e) return n[r];
for (r = 0; r < n.length; r++) {
i = n[r].points || [];
for (t = 0; t < i.length; t++) if (i[t].id === e) return i[t];
}
return null;
},
getAxes: function() {
var e = this, t = this.options, n = t.xAxis = h(t.xAxis || {}), t = t.yAxis = h(t.yAxis || {});
tn(n, function(e, t) {
e.index = t, e.isX = !0;
}), tn(t, function(e, t) {
e.index = t;
}), n = n.concat(t), tn(n, function(t) {
new j(e, t);
}), e.adjustTickAmounts();
},
getSelectedPoints: function() {
var e = [];
return tn(this.series, function(t) {
e = e.concat(nn(t.points || [], function(e) {
return e.selected;
}));
}), e;
},
getSelectedSeries: function() {
return nn(this.series, function(e) {
return e.selected;
});
},
showResetZoom: function() {
var e = this, t = yt.lang, n = e.options.chart.resetZoomButton, r = n.theme, i = r.states, s = n.relativeTo === "chart" ? null : "plotBox";
this.resetZoomButton = e.renderer.button(t.resetZoom, null, null, function() {
e.zoomOut();
}, r, i && i.hover).attr({
align: n.position.align,
title: t.resetZoomTitle
}).add().align(n.position, !1, s);
},
zoomOut: function() {
var e = this;
an(e, "selection", {
resetSelection: !0
}, function() {
e.zoom();
});
},
zoom: function(e) {
var t, n = this.pointer, r = !1, s;
!e || e.resetSelection ? tn(this.axes, function(e) {
t = e.zoom();
}) : tn(e.xAxis.concat(e.yAxis), function(e) {
var i = e.axis, s = i.isXAxis;
if (n[s ? "zoomX" : "zoomY"] || n[s ? "pinchX" : "pinchY"]) t = i.zoom(e.min, e.max), i.displayBtn && (r = !0);
}), s = this.resetZoomButton, r && !s ? this.showResetZoom() : !r && i(s) && (this.resetZoomButton = s.destroy()), t && this.redraw(p(this.options.chart.animation, e && e.animation, this.pointCount < 100));
},
pan: function(e) {
var t = this.xAxis[0], n = this.mouseDownX, r = t.pointRange / 2, i = t.getExtremes(), s = t.translate(n - e, !0) + r, n = t.translate(n + this.plotWidth - e, !0) - r;
(r = this.hoverPoints) && tn(r, function(e) {
e.setState();
}), t.series.length && s > Q(i.dataMin, i.min) && n < K(i.dataMax, i.max) && t.setExtremes(s, n, !0, !1, {
trigger: "pan"
}), this.mouseDownX = e, d(this.container, {
cursor: "move"
});
},
setTitle: function(e, n) {
var r, i = this, s = i.options, o;
o = s.title = t(s.title, e), r = s.subtitle = t(s.subtitle, n), s = r, tn([ [ "title", e, o ], [ "subtitle", n, s ] ], function(e) {
var t = e[0], n = i[t], r = e[1], e = e[2];
n && r && (i[t] = n = n.destroy()), e && e.text && !n && (i[t] = i.renderer.text(e.text, 0, 0, e.useHTML).attr({
align: e.align,
"class": "highcharts-" + t,
zIndex: e.zIndex || 4
}).css(e.style).add().align(e, !1, "spacingBox"));
});
},
getChartSize: function() {
var e = this.options.chart, t = this.renderToClone || this.renderTo;
this.containerWidth = Yt(t, "width"), this.containerHeight = Yt(t, "height"), this.chartWidth = K(0, e.width || this.containerWidth || 600), this.chartHeight = K(0, p(e.height, this.containerHeight > 19 ? this.containerHeight : 400));
},
cloneRenderTo: function(e) {
var t = this.renderToClone, n = this.container;
e ? t && (this.renderTo.appendChild(n), L(t), delete this.renderToClone) : (n && this.renderTo.removeChild(n), this.renderToClone = t = this.renderTo.cloneNode(0), d(t, {
position: "absolute",
top: "-9999px",
display: "block"
}), z.body.appendChild(t), n && t.appendChild(n));
},
getContainer: function() {
var t, i = this.options.chart, s, o, u;
this.renderTo = t = i.renderTo, u = "highcharts-" + mt++, r(t) && (this.renderTo = t = z.getElementById(t)), t || A(13, !0), s = n(c(t, "data-highcharts-chart")), !isNaN(s) && Tt[s] && Tt[s].destroy(), c(t, "data-highcharts-chart", this.index), t.innerHTML = "", t.offsetWidth || this.cloneRenderTo(), this.getChartSize(), s = this.chartWidth, o = this.chartHeight, this.container = t = v(Nt, {
className: "highcharts-container" + (i.className ? " " + i.className : ""),
id: u
}, e({
position: "relative",
overflow: "hidden",
width: s + "px",
height: o + "px",
textAlign: "left",
lineHeight: "normal",
zIndex: 0
}, i.style), this.renderToClone || t), this._cursor = t.style.cursor, this.renderer = i.forExport ? new dn(t, s, o, !0) : new pt(t, s, o), ht && this.renderer.create(this, t, s, o);
},
getMargins: function() {
var e = this.options.chart, t = e.spacingTop, n = e.spacingRight, r = e.spacingBottom, e = e.spacingLeft, i, s = this.legend, o = this.optionsMarginTop, u = this.optionsMarginLeft, a = this.optionsMarginRight, f = this.optionsMarginBottom, c = this.options.title, h = this.options.subtitle, d = this.options.legend, v = p(d.margin, 10), m = d.x, g = d.y, y = d.align, b = d.verticalAlign;
this.resetMargins(), i = this.axisOffset, (this.title || this.subtitle) && !l(this.optionsMarginTop) && (h = K(this.title && !c.floating && !c.verticalAlign && c.y || 0, this.subtitle && !h.floating && !h.verticalAlign && h.y || 0)) && (this.plotTop = K(this.plotTop, h + p(c.margin, 15) + t)), s.display && !d.floating && (y === "right" ? l(a) || (this.marginRight = K(this.marginRight, s.legendWidth - m + v + n)) : y === "left" ? l(u) || (this.plotLeft = K(this.plotLeft, s.legendWidth + m + v + e)) : b === "top" ? l(o) || (this.plotTop = K(this.plotTop, s.legendHeight + g + v + t)) : b === "bottom" && !l(f) && (this.marginBottom = K(this.marginBottom, s.legendHeight - g + v + r))), this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin), this.extraTopMargin && (this.plotTop += this.extraTopMargin), this.hasCartesianSeries && tn(this.axes, function(e) {
e.getOffset();
}), l(u) || (this.plotLeft += i[3]), l(o) || (this.plotTop += i[0]), l(f) || (this.marginBottom += i[2]), l(a) || (this.marginRight += i[1]), this.setChartSize();
},
initReflow: function() {
function e(e) {
var s = n.width || Yt(r, "width"), o = n.height || Yt(r, "height"), e = e ? e.target : W;
if (!t.hasUserSize && s && o && (e === W || e === z)) {
if (s !== t.containerWidth || o !== t.containerHeight) clearTimeout(i), t.reflowTimeout = i = setTimeout(function() {
t.container && (t.setSize(s, o, !1), t.hasUserSize = null);
}, 100);
t.containerWidth = s, t.containerHeight = o;
}
}
var t = this, n = t.options.chart, r = t.renderTo, i;
on(W, "resize", e), on(t, "destroy", function() {
un(W, "resize", e);
});
},
setSize: function(e, t, n) {
var r = this, i, s, o;
r.isResizing += 1, o = function() {
r && an(r, "endResize", null, function() {
r.isResizing -= 1;
});
}, M(n, r), r.oldChartHeight = r.chartHeight, r.oldChartWidth = r.chartWidth, l(e) && (r.chartWidth = i = K(0, V(e)), r.hasUserSize = !!i), l(t) && (r.chartHeight = s = K(0, V(t))), d(r.container, {
width: i + "px",
height: s + "px"
}), r.setChartSize(!0), r.renderer.setSize(i, s, n), r.maxTicks = null, tn(r.axes, function(e) {
e.isDirty = !0, e.setScale();
}), tn(r.series, function(e) {
e.isDirty = !0;
}), r.isDirtyLegend = !0, r.isDirtyBox = !0, r.getMargins(), r.redraw(n), r.oldChartHeight = null, an(r, "resize"), wt === !1 ? o() : setTimeout(o, wt && wt.duration || 500);
},
setChartSize: function(e) {
var t = this.inverted, n = this.renderer, r = this.chartWidth, i = this.chartHeight, s = this.options.chart, o = s.spacingTop, u = s.spacingRight, a = s.spacingBottom, f = s.spacingLeft, l = this.clipOffset, c, h, p, d;
this.plotLeft = c = V(this.plotLeft), this.plotTop = h = V(this.plotTop), this.plotWidth = p = K(0, V(r - c - this.marginRight)), this.plotHeight = d = K(0, V(i - h - this.marginBottom)), this.plotSizeX = t ? d : p, this.plotSizeY = t ? p : d, this.plotBorderWidth = t = s.plotBorderWidth || 0, this.spacingBox = n.spacingBox = {
x: f,
y: o,
width: r - f - u,
height: i - o - a
}, this.plotBox = n.plotBox = {
x: c,
y: h,
width: p,
height: d
}, n = J(K(t, l[3]) / 2), r = J(K(t, l[0]) / 2), this.clipBox = {
x: n,
y: r,
width: $(this.plotSizeX - K(t, l[1]) / 2 - n),
height: $(this.plotSizeY - K(t, l[2]) / 2 - r)
}, e || tn(this.axes, function(e) {
e.setAxisSize(), e.setAxisTranslation();
});
},
resetMargins: function() {
var e = this.options.chart, t = e.spacingRight, n = e.spacingBottom, r = e.spacingLeft;
this.plotTop = p(this.optionsMarginTop, e.spacingTop), this.marginRight = p(this.optionsMarginRight, t), this.marginBottom = p(this.optionsMarginBottom, n), this.plotLeft = p(this.optionsMarginLeft, r), this.axisOffset = [ 0, 0, 0, 0 ], this.clipOffset = [ 0, 0, 0, 0 ];
},
drawChartBox: function() {
var e = this.options.chart, t = this.renderer, n = this.chartWidth, r = this.chartHeight, i = this.chartBackground, s = this.plotBackground, o = this.plotBorder, u = this.plotBGImage, a = e.borderWidth || 0, f = e.backgroundColor, l = e.plotBackgroundColor, c = e.plotBackgroundImage, h = e.plotBorderWidth || 0, p, d = this.plotLeft, v = this.plotTop, m = this.plotWidth, g = this.plotHeight, y = this.plotBox, b = this.clipRect, w = this.clipBox;
p = a + (e.shadow ? 8 : 0);
if (a || f) i ? i.animate(i.crisp(null, null, null, n - p, r - p)) : (i = {
fill: f || Ct
}, a && (i.stroke = e.borderColor, i["stroke-width"] = a), this.chartBackground = t.rect(p / 2, p / 2, n - p, r - p, e.borderRadius, a).attr(i).add().shadow(e.shadow));
l && (s ? s.animate(y) : this.plotBackground = t.rect(d, v, m, g, 0).attr({
fill: l
}).add().shadow(e.plotShadow)), c && (u ? u.animate(y) : this.plotBGImage = t.image(c, d, v, m, g).add()), b ? b.animate({
width: w.width,
height: w.height
}) : this.clipRect = t.clipRect(w), h && (o ? o.animate(o.crisp(null, d, v, m, g)) : this.plotBorder = t.rect(d, v, m, g, 0, h).attr({
stroke: e.plotBorderColor,
"stroke-width": h,
zIndex: 1
}).add()), this.isDirtyBox = !1;
},
propFromSeries: function() {
var e = this, t = e.options.chart, n, r = e.options.series, i, s;
tn([ "inverted", "angular", "polar" ], function(o) {
n = Kt[t.type || t.defaultSeriesType], s = e[o] || t[o] || n && n.prototype[o];
for (i = r && r.length; !s && i--; ) (n = Kt[r[i].type]) && n.prototype[o] && (s = !0);
e[o] = s;
});
},
render: function() {
var t = this, r = t.axes, i = t.renderer, s = t.options, o = s.labels, u = s.credits, a;
t.setTitle(), t.legend = new q(t, s.legend), tn(r, function(e) {
e.setScale();
}), t.getMargins(), t.maxTicks = null, tn(r, function(e) {
e.setTickPositions(!0), e.setMaxTicks();
}), t.adjustTickAmounts(), t.getMargins(), t.drawChartBox(), t.hasCartesianSeries && tn(r, function(e) {
e.render();
}), t.seriesGroup || (t.seriesGroup = i.g("series-group").attr({
zIndex: 3
}).add()), tn(t.series, function(e) {
e.translate(), e.setTooltipPoints(), e.render();
}), o.items && tn(o.items, function(r) {
var s = e(o.style, r.style), u = n(s.left) + t.plotLeft, a = n(s.top) + t.plotTop + 12;
delete s.left, delete s.top, i.text(r.html, u, a).attr({
zIndex: 2
}).css(s).add();
}), u.enabled && !t.credits && (a = u.href, t.credits = i.text(u.text, 0, 0).on("click", function() {
a && (location.href = a);
}).attr({
align: u.position.align,
zIndex: 8
}).css(u.style).add().align(u.position)), t.hasRendered = !0;
},
destroy: function() {
var e = this, t = e.axes, n = e.series, r = e.container, i, s = r && r.parentNode;
an(e, "destroy"), Tt[e.index] = U, e.renderTo.removeAttribute("data-highcharts-chart"), un(e);
for (i = t.length; i--; ) t[i] = t[i].destroy();
for (i = n.length; i--; ) n[i] = n[i].destroy();
tn("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(t) {
var n = e[t];
n && n.destroy && (e[t] = n.destroy());
}), r && (r.innerHTML = "", un(r), s && L(r));
for (i in e) delete e[i];
},
isReadyToRender: function() {
var e = this;
return !lt && W == W.top && z.readyState !== "complete" || ht && !W.canvg ? (ht ? gn.push(function() {
e.firstRender();
}, e.options.global.canvasToolsURL) : z.attachEvent("onreadystatechange", function() {
z.detachEvent("onreadystatechange", e.firstRender), z.readyState === "complete" && e.firstRender();
}), !1) : !0;
},
firstRender: function() {
var e = this, t = e.options, n = e.callback;
e.isReadyToRender() && (e.getContainer(), an(e, "init"), e.resetMargins(), e.setChartSize(), e.propFromSeries(), e.getAxes(), tn(t.series || [], function(t) {
e.initSeries(t);
}), an(e, "beforeRender"), e.pointer = new I(e, t), e.render(), e.renderer.draw(), n && n.apply(e, [ e ]), tn(e.callbacks, function(t) {
t.apply(e, [ e ]);
}), e.cloneRenderTo(!0), an(e, "load"));
}
}, R.prototype.callbacks = [];
var yn = function() {};
yn.prototype = {
init: function(e, t, n) {
return this.series = e, this.applyOptions(t, n), this.pointAttr = {}, e.options.colorByPoint && (t = e.options.colors || e.chart.options.colors, this.color = this.color || t[e.colorCounter++], e.colorCounter === t.length) && (e.colorCounter = 0), e.chart.pointCount++, this;
},
applyOptions: function(t, n) {
var r = this.series, i = r.pointValKey, t = yn.prototype.optionsToObject.call(this, t);
return e(this, t), this.options = this.options ? e(this.options, t) : t, i && (this.y = this[i]), this.x === U && r && (this.x = n === U ? r.autoIncrement() : n), this;
},
optionsToObject: function(e) {
var t, n = this.series, r = n.pointArrayMap || [ "y" ], i = r.length, o = 0, u = 0;
if (typeof e == "number" || e === null) t = {
y: e
}; else if (s(e)) {
t = {}, e.length > i && (n = typeof e[0], n === "string" ? t.name = e[0] : n === "number" && (t.x = e[0]), o++);
for (; u < i; ) t[r[u++]] = e[o++];
} else typeof e == "object" && (t = e, e.dataLabels && (n._hasPointLabels = !0), e.marker && (n._hasPointMarkers = !0));
return t;
},
destroy: function() {
var e = this.series.chart, t = e.hoverPoints, n;
e.pointCount--, t && (this.setState(), f(t, this), !t.length) && (e.hoverPoints = null), this === e.hoverPoint && this.onMouseOut();
if (this.graphic || this.dataLabel) un(this), this.destroyElements();
this.legendItem && e.legend.destroyItem(this);
for (n in this) this[n] = null;
},
destroyElements: function() {
for (var e = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","), t, n = 6; n--; ) t = e[n], this[t] && (this[t] = this[t].destroy());
},
getLabelConfig: function() {
return {
x: this.category,
y: this.y,
key: this.name || this.category,
series: this.series,
point: this,
percentage: this.percentage,
total: this.total || this.stackTotal
};
},
select: function(e, t) {
var n = this, r = n.series, i = r.chart, e = p(e, !n.selected);
n.firePointEvent(e ? "select" : "unselect", {
accumulate: t
}, function() {
n.selected = n.options.selected = e, r.options.data[en(n, r.data)] = n.options, n.setState(e && "select"), t || tn(i.getSelectedPoints(), function(e) {
e.selected && e !== n && (e.selected = e.options.selected = !1, r.options.data[en(e, r.data)] = e.options, e.setState(""), e.firePointEvent("unselect"));
});
});
},
onMouseOver: function(e) {
var t = this.series, n = t.chart, r = n.tooltip, i = n.hoverPoint;
i && i !== this && i.onMouseOut(), this.firePointEvent("mouseOver"), r && (!r.shared || t.noSharedTooltip) && r.refresh(this, e), this.setState("hover"), n.hoverPoint = this;
},
onMouseOut: function() {
var e = this.series.chart, t = e.hoverPoints;
if (!t || en(this, t) === -1) this.firePointEvent("mouseOut"), this.setState(), e.hoverPoint = null;
},
tooltipFormatter: function(e) {
var t = this.series, n = t.tooltipOptions, r = p(n.valueDecimals, ""), i = n.valuePrefix || "", s = n.valueSuffix || "";
return tn(t.pointArrayMap || [ "y" ], function(t) {
t = "{point." + t;
if (i || s) e = e.replace(t + "}", i + t + "}" + s);
e = e.replace(t + "}", t + ":,." + r + "f}");
}), b(e, {
point: this,
series: this.series
});
},
update: function(e, t, n) {
var r = this, s = r.series, o = r.graphic, u, a = s.data, f = s.chart, t = p(t, !0);
r.firePointEvent("update", {
options: e
}, function() {
r.applyOptions(e), i(e) && (s.getAttribs(), o && o.attr(r.pointAttr[s.state])), u = en(r, a), s.xData[u] = r.x, s.yData[u] = s.toYData ? s.toYData(r) : r.y, s.zData[u] = r.z, s.options.data[u] = r.options, s.isDirty = !0, s.isDirtyData = !0, t && f.redraw(n);
});
},
remove: function(e, t) {
var n = this, r = n.series, i = r.chart, s, o = r.data;
M(t, i), e = p(e, !0), n.firePointEvent("remove", null, function() {
s = en(n, o), o.splice(s, 1), r.options.data.splice(s, 1), r.xData.splice(s, 1), r.yData.splice(s, 1), r.zData.splice(s, 1), n.destroy(), r.isDirty = !0, r.isDirtyData = !0, e && i.redraw();
});
},
firePointEvent: function(e, t, n) {
var r = this, i = this.series.options;
(i.point.events[e] || r.options && r.options.events && r.options.events[e]) && this.importEvents(), e === "click" && i.allowPointSelect && (n = function(e) {
r.select(null, e.ctrlKey || e.metaKey || e.shiftKey);
}), an(this, e, t, n);
},
importEvents: function() {
if (!this.hasImportedEvents) {
var e = t(this.series.options.point, this.options).events, n;
this.events = e;
for (n in e) on(this, n, e[n]);
this.hasImportedEvents = !0;
}
},
setState: function(e) {
var n = this.plotX, r = this.plotY, i = this.series, s = i.options.states, o = hn[i.type].marker && i.options.marker, u = o && !o.enabled, a = o && o.states[e], f = a && a.enabled === !1, l = i.stateMarkerGraphic, c = this.marker || {}, h = i.chart, p = this.pointAttr, e = e || "";
e === this.state || this.selected && e !== "select" || s[e] && s[e].enabled === !1 || e && (f || u && !a.enabled) || (this.graphic ? (s = o && this.graphic.symbolName && p[e].r, this.graphic.attr(t(p[e], s ? {
x: n - s,
y: r - s,
width: 2 * s,
height: 2 * s
} : {}))) : (e && a && (s = a.radius, c = c.symbol || i.symbol, l && l.currentSymbol !== c && (l = l.destroy()), l ? l.attr({
x: n - s,
y: r - s
}) : (i.stateMarkerGraphic = l = h.renderer.symbol(c, n - s, r - s, 2 * s, 2 * s).attr(p[e]).add(i.markerGroup), l.currentSymbol = c)), l && l[e && h.isInsidePlot(n, r) ? "show" : "hide"]()), this.state = e);
}
};
var bn = function() {};
bn.prototype = {
isCartesian: !0,
type: "line",
pointClass: yn,
sorted: !0,
requireSorting: !0,
pointAttrToOptions: {
stroke: "lineColor",
"stroke-width": "lineWidth",
fill: "fillColor",
r: "radius"
},
colorCounter: 0,
init: function(t, n) {
var i, s, o = t.series;
this.chart = t, this.options = n = this.setOptions(n), this.bindAxes(), e(this, {
name: n.name,
state: "",
pointAttr: {},
visible: n.visible !== !1,
selected: n.selected === !0
}), ht && (n.animation = !1), s = n.events;
for (i in s) on(this, i, s[i]);
if (s && s.click || n.point && n.point.events && n.point.events.click || n.allowPointSelect) t.runTrackerClick = !0;
this.getColor(), this.getSymbol(), this.setData(n.data, !1), this.isCartesian && (t.hasCartesianSeries = !0), o.push(this), this._i = o.length - 1, T(o, function(e, t) {
return p(e.options.index, e._i) - p(t.options.index, e._i);
}), tn(o, function(e, t) {
e.index = t, e.name = e.name || "Series " + (t + 1);
}), i = n.linkedTo, this.linkedSeries = [], r(i) && (i = i === ":previous" ? o[this.index - 1] : t.get(i)) && (i.linkedSeries.push(this), this.linkedParent = i);
},
bindAxes: function() {
var e = this, t = e.options, n = e.chart, r;
e.isCartesian && tn([ "xAxis", "yAxis" ], function(i) {
tn(n[i], function(n) {
r = n.options;
if (t[i] === r.index || t[i] !== U && t[i] === r.id || t[i] === U && r.index === 0) n.series.push(e), e[i] = n, n.isDirty = !0;
}), e[i] || A(17, !0);
});
},
autoIncrement: function() {
var e = this.options, t = this.xIncrement, t = p(t, e.pointStart, 0);
return this.pointInterval = p(this.pointInterval, e.pointInterval, 1), this.xIncrement = t + this.pointInterval, t;
},
getSegments: function() {
var e = -1, t = [], n, r = this.points, i = r.length;
if (i) if (this.options.connectNulls) {
for (n = i; n--; ) r[n].y === null && r.splice(n, 1);
r.length && (t = [ r ]);
} else tn(r, function(n, s) {
n.y === null ? (s > e + 1 && t.push(r.slice(e + 1, s)), e = s) : s === i - 1 && t.push(r.slice(e + 1, s + 1));
});
this.segments = t;
},
setOptions: function(e) {
var n = this.chart.options, r = n.plotOptions, i = r[this.type];
return this.userOptions = e, e = t(i, r.series, e), this.tooltipOptions = t(n.tooltip, e.tooltip), i.marker === null && delete e.marker, e;
},
getColor: function() {
var e = this.options, t = this.userOptions, n = this.chart.options.colors, r = this.chart.counters, i;
i = e.color || hn[this.type].color, !i && !e.colorByPoint && (l(t._colorIndex) ? e = t._colorIndex : (t._colorIndex = r.color, e = r.color++), i = n[e]), this.color = i, r.wrapColor(n.length);
},
getSymbol: function() {
var e = this.userOptions, t = this.options.marker, n = this.chart, r = n.options.symbols, n = n.counters;
this.symbol = t.symbol, this.symbol || (l(e._symbolIndex) ? e = e._symbolIndex : (e._symbolIndex = n.symbol, e = n.symbol++), this.symbol = r[e]), /^url/.test(this.symbol) && (t.radius = 0), n.wrapSymbol(r.length);
},
drawLegendSymbol: function(e) {
var t = this.options, n = t.marker, r = e.options.symbolWidth, i = this.chart.renderer, s = this.legendGroup, e = e.baseline, o;
t.lineWidth && (o = {
"stroke-width": t.lineWidth
}, t.dashStyle && (o.dashstyle = t.dashStyle), this.legendLine = i.path([ "M", 0, e - 4, "L", r, e - 4 ]).attr(o).add(s)), n && n.enabled && (t = n.radius, this.legendSymbol = i.symbol(this.symbol, r / 2 - t, e - 4 - t, 2 * t, 2 * t).add(s));
},
addPoint: function(e, t, n, r) {
var i = this.options, s = this.data, o = this.graph, u = this.area, a = this.chart, f = this.xData, l = this.yData, c = this.zData, h = this.names, d = o && o.shift || 0, v = i.data;
M(r, a), o && n && (o.shift = d + 1), u && (n && (u.shift = d + 1), u.isArea = !0), t = p(t, !0), r = {
series: this
}, this.pointClass.prototype.applyOptions.apply(r, [ e ]), f.push(r.x), l.push(this.toYData ? this.toYData(r) : r.y), c.push(r.z), h && (h[r.x] = r.name), v.push(e), i.legendType === "point" && this.generatePoints(), n && (s[0] && s[0].remove ? s[0].remove(!1) : (s.shift(), f.shift(), l.shift(), c.shift(), v.shift())), this.getAttribs(), this.isDirtyData = this.isDirty = !0, t && a.redraw();
},
setData: function(e, t) {
var n = this.points, i = this.options, u = this.chart, a = null, f = this.xAxis, l = f && f.categories && !f.categories.length ? [] : null, c;
this.xIncrement = null, this.pointRange = f && f.categories ? 1 : i.pointRange, this.colorCounter = 0;
var h = [], d = [], v = [], m = e ? e.length : [], g = (c = this.pointArrayMap) && c.length, y = !!this.toYData;
if (m > (i.turboThreshold || 1e3)) {
for (c = 0; a === null && c < m; ) a = e[c], c++;
if (o(a)) {
a = p(i.pointStart, 0), i = p(i.pointInterval, 1);
for (c = 0; c < m; c++) h[c] = a, d[c] = e[c], a += i;
this.xIncrement = a;
} else if (s(a)) if (g) for (c = 0; c < m; c++) i = e[c], h[c] = i[0], d[c] = i.slice(1, g + 1); else for (c = 0; c < m; c++) i = e[c], h[c] = i[0], d[c] = i[1];
} else for (c = 0; c < m; c++) e[c] !== U && (i = {
series: this
}, this.pointClass.prototype.applyOptions.apply(i, [ e[c] ]), h[c] = i.x, d[c] = y ? this.toYData(i) : i.y, v[c] = i.z, l && i.name) && (l[c] = i.name);
this.requireSorting && h.length > 1 && h[1] < h[0] && A(15), r(d[0]) && A(14, !0), this.data = [], this.options.data = e, this.xData = h, this.yData = d, this.zData = v, this.names = l;
for (c = n && n.length || 0; c--; ) n[c] && n[c].destroy && n[c].destroy();
f && (f.minRange = f.userMinRange), this.isDirty = this.isDirtyData = u.isDirtyBox = !0, p(t, !0) && u.redraw(!1);
},
remove: function(e, t) {
var n = this, r = n.chart, e = p(e, !0);
n.isRemoving || (n.isRemoving = !0, an(n, "remove", null, function() {
n.destroy(), r.isDirtyLegend = r.isDirtyBox = !0, e && r.redraw(t);
})), n.isRemoving = !1;
},
processData: function(e) {
var t = this.xData, n = this.yData, r = t.length, i = 0, s = r, o, u, a = this.xAxis, f = this.options, l = f.cropThreshold, c = this.isCartesian;
if (c && !this.isDirty && !a.isDirty && !this.yAxis.isDirty && !e) return !1;
if (c && this.sorted && (!l || r > l || this.forceCrop)) if (e = a.getExtremes(), a = e.min, l = e.max, t[r - 1] < a || t[0] > l) t = [], n = []; else if (t[0] < a || t[r - 1] > l) {
for (e = 0; e < r; e++) if (t[e] >= a) {
i = K(0, e - 1);
break;
}
for (; e < r; e++) if (t[e] > l) {
s = e + 1;
break;
}
t = t.slice(i, s), n = n.slice(i, s), o = !0;
}
for (e = t.length - 1; e > 0; e--) if (r = t[e] - t[e - 1], r > 0 && (u === U || r < u)) u = r;
this.cropped = o, this.cropStart = i, this.processedXData = t, this.processedYData = n, f.pointRange === null && (this.pointRange = u || 1), this.closestPointRange = u;
},
generatePoints: function() {
var e = this.options.data, t = this.data, n, r = this.processedXData, i = this.processedYData, s = this.pointClass, o = r.length, u = this.cropStart || 0, a, f = this.hasGroupedData, l, c = [], p;
!t && !f && (t = [], t.length = e.length, t = this.data = t);
for (p = 0; p < o; p++) a = u + p, f ? c[p] = (new s).init(this, [ r[p] ].concat(h(i[p]))) : (t[a] ? l = t[a] : e[a] !== U && (t[a] = l = (new s).init(this, e[a], r[p])), c[p] = l);
if (t && (o !== (n = t.length) || f)) for (p = 0; p < n; p++) if (p === u && !f && (p += o), t[p]) t[p].destroyElements(), t[p].plotX = U;
this.data = t, this.points = c;
},
translate: function() {
this.processedXData || this.processData(), this.generatePoints();
for (var e = this.options, t = e.stacking, n = this.xAxis, r = n.categories, i = this.yAxis, s = this.points, o = s.length, u = !!this.modifyValue, a, f = i.series, c = f.length, h = e.pointPlacement === "between", e = e.threshold; c--; ) if (f[c].visible) {
f[c] === this && (a = !0);
break;
}
for (c = 0; c < o; c++) {
var f = s[c], d = f.x, v = f.y, m = f.low, g = i.stacks[(v < e ? "-" : "") + this.stackKey];
i.isLog && v <= 0 && (f.y = v = null), f.plotX = n.translate(d, 0, 0, 0, 1, h), t && this.visible && g && g[d] && (m = g[d], g = m.total, m.cum = m = m.cum - v, v = m + v, a && (m = p(e, i.min)), i.isLog && m <= 0 && (m = null), t === "percent" && (m = g ? m * 100 / g : 0, v = g ? v * 100 / g : 0), f.percentage = g ? f.y * 100 / g : 0, f.total = f.stackTotal = g, f.stackY = v), f.yBottom = l(m) ? i.translate(m, 0, 1, 0, 1) : null, u && (v = this.modifyValue(v, f)), f.plotY = typeof v == "number" && v !== Infinity ? V(i.translate(v, 0, 1, 0, 1) * 10) / 10 : U, f.clientX = h ? n.translate(d, 0, 0, 0, 1) : f.plotX, f.negative = f.y < (e || 0), f.category = r && r[f.x] !== U ? r[f.x] : f.x;
}
this.getSegments();
},
setTooltipPoints: function(e) {
var t = [], n, r, i = (n = this.xAxis) ? n.tooltipLen || n.len : this.chart.plotSizeX, s, o, u = [];
if (this.options.enableMouseTracking !== !1) {
e && (this.tooltipPoints = null), tn(this.segments || this.points, function(e) {
t = t.concat(e);
}), n && n.reversed && (t = t.reverse()), e = t.length;
for (o = 0; o < e; o++) {
s = t[o], n = t[o - 1] ? r + 1 : 0;
for (r = t[o + 1] ? K(0, $((s.clientX + (t[o + 1] ? t[o + 1].clientX : i)) / 2)) : i; n >= 0 && n <= r; ) u[n++] = s;
}
this.tooltipPoints = u;
}
},
tooltipHeaderFormatter: function(e) {
var t = this.tooltipOptions, n = t.xDateFormat, r = this.xAxis, i = r && r.options.type === "datetime", s = t.headerFormat, u;
if (i && !n) for (u in St) if (St[u] >= r.closestPointRange) {
n = t.dateTimeLabelFormats[u];
break;
}
return i && n && o(e.key) && (s = s.replace("{point.key}", "{point.key:" + n + "}")), b(s, {
point: e,
series: this
});
},
onMouseOver: function() {
var e = this.chart, t = e.hoverSeries;
t && t !== this && t.onMouseOut(), this.options.events.mouseOver && an(this, "mouseOver"), this.setState("hover"), e.hoverSeries = this;
},
onMouseOut: function() {
var e = this.options, t = this.chart, n = t.tooltip, r = t.hoverPoint;
r && r.onMouseOut(), this && e.events.mouseOut && an(this, "mouseOut"), n && !e.stickyTracking && (!n.shared || this.noSharedTooltip) && n.hide(), this.setState(), t.hoverSeries = null;
},
animate: function(t) {
var n = this, r = n.chart, s = r.renderer, o;
o = n.options.animation;
var u = r.clipBox, a = r.inverted, f;
o && !i(o) && (o = hn[n.type].animation), f = "_sharedClip" + o.duration + o.easing;
if (t) t = r[f], o = r[f + "m"], t || (r[f] = t = s.clipRect(e(u, {
width: 0
})), r[f + "m"] = o = s.clipRect(-99, a ? -r.plotLeft : -r.plotTop, 99, a ? r.chartWidth : r.chartHeight)), n.group.clip(t), n.markerGroup.clip(o), n.sharedClipKey = f; else {
if (t = r[f]) t.animate({
width: r.plotSizeX
}, o), r[f + "m"].animate({
width: r.plotSizeX + 99
}, o);
n.animate = null, n.animationTimeout = setTimeout(function() {
n.afterAnimate();
}, o.duration);
}
},
afterAnimate: function() {
var e = this.chart, t = this.sharedClipKey, n = this.group;
n && this.options.clip !== !1 && (n.clip(e.clipRect), this.markerGroup.clip()), setTimeout(function() {
t && e[t] && (e[t] = e[t].destroy(), e[t + "m"] = e[t + "m"].destroy());
}, 100);
},
drawPoints: function() {
var t, n = this.points, r = this.chart, i, s, o, u, a, f, l, c, h = this.options.marker, d, v = this.markerGroup;
if (h.enabled || this._hasPointMarkers) for (o = n.length; o--; ) (u = n[o], i = u.plotX, s = u.plotY, c = u.graphic, f = u.marker || {}, t = h.enabled && f.enabled === U || f.enabled, d = r.isInsidePlot(i, s, r.inverted), t && s !== U && !isNaN(s) && u.y !== null) ? (t = u.pointAttr[u.selected ? "select" : ""], a = t.r, f = p(f.symbol, this.symbol), l = f.indexOf("url") === 0, c) ? c.attr({
visibility: d ? lt ? "inherit" : "visible" : "hidden"
}).animate(e({
x: i - a,
y: s - a
}, c.symbolName ? {
width: 2 * a,
height: 2 * a
} : {})) : d && (a > 0 || l) && (u.graphic = r.renderer.symbol(f, i - a, s - a, 2 * a, 2 * a).attr(t).add(v)) : c && (u.graphic = c.destroy());
},
convertAttribs: function(e, t, n, r) {
var i = this.pointAttrToOptions, s, o, u = {}, e = e || {}, t = t || {}, n = n || {}, r = r || {};
for (s in i) o = i[s], u[s] = p(e[o], t[s], n[s], r[s]);
return u;
},
getAttribs: function() {
var t = this, n = t.options, r = hn[t.type].marker ? n.marker : n, i = r.states, s = i.hover, o, u = t.color, a = {
stroke: u,
fill: u
}, f = t.points || [], c = [], h, p = t.pointAttrToOptions, d = n.negativeColor, v;
n.marker ? (s.radius = s.radius || r.radius + 2, s.lineWidth = s.lineWidth || r.lineWidth + 1) : s.color = s.color || pn(s.color || u).brighten(s.brightness).get(), c[""] = t.convertAttribs(r, a), tn([ "hover", "select" ], function(e) {
c[e] = t.convertAttribs(i[e], c[""]);
}), t.pointAttr = c;
for (u = f.length; u--; ) {
a = f[u], (r = a.options && a.options.marker || a.options) && r.enabled === !1 && (r.radius = 0), a.negative && d && (a.color = a.fillColor = d), o = n.colorByPoint || a.color;
if (a.options) for (v in p) l(r[p[v]]) && (o = !0);
o ? (r = r || {}, h = [], i = r.states || {}, o = i.hover = i.hover || {}, n.marker || (o.color = pn(o.color || a.color).brighten(o.brightness || s.brightness).get()), h[""] = t.convertAttribs(e({
color: a.color
}, r), c[""]), h.hover = t.convertAttribs(i.hover, c.hover, h[""]), h.select = t.convertAttribs(i.select, c.select, h[""]), a.negative && n.marker && (h[""].fill = h.hover.fill = h.select.fill = t.convertAttribs({
fillColor: d
}).fill)) : h = c, a.pointAttr = h;
}
},
update: function(n, r) {
var i = this.chart, s = this.type, n = t(this.userOptions, {
animation: !1,
index: this.index,
pointStart: this.xData[0]
}, n);
this.remove(!1), e(this, Kt[n.type || s].prototype), this.init(i, n), p(r, !0) && i.redraw(!1);
},
destroy: function() {
var e = this, t = e.chart, n = /AppleWebKit\/533/.test(nt), r, i, s = e.data || [], o, u, a;
an(e, "destroy"), un(e), tn([ "xAxis", "yAxis" ], function(t) {
if (a = e[t]) f(a.series, e), a.isDirty = a.forceRedraw = !0;
}), e.legendItem && e.chart.legend.destroyItem(e);
for (i = s.length; i--; ) (o = s[i]) && o.destroy && o.destroy();
e.points = null, clearTimeout(e.animationTimeout), tn("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function(t) {
e[t] && (r = n && t === "group" ? "hide" : "destroy", e[t][r]());
}), t.hoverSeries === e && (t.hoverSeries = null), f(t.series, e);
for (u in e) delete e[u];
},
drawDataLabels: function() {
var e = this, n = e.options.dataLabels, r = e.points, i, s, o, u;
if (n.enabled || e._hasPointLabels) e.dlProcessOptions && e.dlProcessOptions(n), u = e.plotGroup("dataLabelsGroup", "data-labels", e.visible ? "visible" : "hidden", n.zIndex || 6), s = n, tn(r, function(r) {
var a, f = r.dataLabel, c, h, d = r.connector, v = !0;
i = r.options && r.options.dataLabels, a = s.enabled || i && i.enabled;
if (f && !a) r.dataLabel = f.destroy(); else if (a) {
a = n.rotation, n = t(s, i), c = r.getLabelConfig(), o = n.format ? b(n.format, c) : n.formatter.call(c, n), n.style.color = p(n.color, n.style.color, e.color, "black");
if (f) {
if (l(o)) f.attr({
text: o
}), v = !1; else if (r.dataLabel = f = f.destroy(), d) r.connector = d.destroy();
} else if (l(o)) {
f = {
fill: n.backgroundColor,
stroke: n.borderColor,
"stroke-width": n.borderWidth,
r: n.borderRadius || 0,
rotation: a,
padding: n.padding,
zIndex: 1
};
for (h in f) f[h] === U && delete f[h];
f = r.dataLabel = e.chart.renderer[a ? "text" : "label"](o, 0, -999, null, null, null, n.useHTML).attr(f).css(n.style).add(u).shadow(n.shadow);
}
f && e.alignDataLabel(r, f, n, null, v);
}
});
},
alignDataLabel: function(t, n, r, i, s) {
var o = this.chart, u = o.inverted, a = p(t.plotX, -999), t = p(t.plotY, -999), f = n.getBBox(), i = e({
x: u ? o.plotWidth - t : a,
y: V(u ? o.plotHeight - a : t),
width: 0,
height: 0
}, i);
e(r, {
width: f.width,
height: f.height
}), r.rotation ? (i = {
align: r.align,
x: i.x + r.x + i.width / 2,
y: i.y + r.y + i.height / 2
}, n[s ? "attr" : "animate"](i)) : n.align(r, null, i), n.attr({
visibility: r.crop === !1 || o.isInsidePlot(a, t, u) ? o.renderer.isSVG ? "inherit" : "visible" : "hidden"
});
},
getSegmentPath: function(e) {
var t = this, n = [], r = t.options.step;
return tn(e, function(i, s) {
var o = i.plotX, u = i.plotY, a;
t.getPointSpline ? n.push.apply(n, t.getPointSpline(e, i, s)) : (n.push(s ? "L" : "M"), r && s && (a = e[s - 1], r === "right" ? n.push(a.plotX, u) : r === "center" ? n.push((a.plotX + o) / 2, a.plotY, (a.plotX + o) / 2, u) : n.push(o, a.plotY)), n.push(i.plotX, i.plotY));
}), n;
},
getGraphPath: function() {
var e = this, t = [], n, r = [];
return tn(e.segments, function(i) {
n = e.getSegmentPath(i), i.length > 1 ? t = t.concat(n) : r.push(i[0]);
}), e.singlePoints = r, e.graphPath = t;
},
drawGraph: function() {
var e = this, t = this.options, n = [ [ "graph", t.lineColor || this.color ] ], r = t.lineWidth, i = t.dashStyle, s = this.getGraphPath(), o = t.negativeColor;
o && n.push([ "graphNeg", o ]), tn(n, function(n, o) {
var u = n[0], a = e[u];
a ? (cn(a), a.animate({
d: s
})) : r && s.length && (a = {
stroke: n[1],
"stroke-width": r,
zIndex: 1
}, i && (a.dashstyle = i), e[u] = e.chart.renderer.path(s).attr(a).add(e.group).shadow(!o && t.shadow));
});
},
clipNeg: function() {
var e = this.options, t = this.chart, n = t.renderer, r = e.negativeColor, i, s = this.posClip, o = this.negClip;
i = t.chartWidth;
var u = t.chartHeight, a = K(i, u);
r && this.graph && (r = J(this.yAxis.len - this.yAxis.translate(e.threshold || 0)), e = {
x: 0,
y: 0,
width: a,
height: r
}, a = {
x: 0,
y: r,
width: a,
height: a - r
}, t.inverted && n.isVML && (e = {
x: t.plotWidth - r - t.plotLeft,
y: 0,
width: i,
height: u
}, a = {
x: r + t.plotLeft - i,
y: 0,
width: t.plotLeft + r,
height: i
}), this.yAxis.reversed ? (t = a, i = e) : (t = e, i = a), s ? (s.animate(t), o.animate(i)) : (this.posClip = s = n.clipRect(t), this.graph.clip(s), this.negClip = o = n.clipRect(i), this.graphNeg.clip(o), this.area && (this.area.clip(s), this.areaNeg.clip(o))));
},
invertGroups: function() {
function e() {
var e = {
width: t.yAxis.len,
height: t.xAxis.len
};
tn([ "group", "markerGroup" ], function(n) {
t[n] && t[n].attr(e).invert();
});
}
var t = this, n = t.chart;
on(n, "resize", e), on(t, "destroy", function() {
un(n, "resize", e);
}), e(), t.invertGroups = e;
},
plotGroup: function(e, t, n, r, i) {
var s = this[e], o = !s, u = this.chart, a = this.xAxis, f = this.yAxis;
return o && (this[e] = s = u.renderer.g(t).attr({
visibility: n,
zIndex: r || .1
}).add(i)), s[o ? "attr" : "animate"]({
translateX: a ? a.left : u.plotLeft,
translateY: f ? f.top : u.plotTop,
scaleX: 1,
scaleY: 1
}), s;
},
render: function() {
var e = this.chart, t, n = this.options, r = n.animation && !!this.animate && e.renderer.isSVG, i = this.visible ? "visible" : "hidden", s = n.zIndex, o = this.hasRendered, u = e.seriesGroup;
t = this.plotGroup("group", "series", i, s, u), this.markerGroup = this.plotGroup("markerGroup", "markers", i, s, u), r && this.animate(!0), this.getAttribs(), t.inverted = e.inverted, this.drawGraph && (this.drawGraph(), this.clipNeg()), this.drawDataLabels(), this.drawPoints(), this.options.enableMouseTracking !== !1 && this.drawTracker(), e.inverted && this.invertGroups(), n.clip !== !1 && !this.sharedClipKey && !o && t.clip(e.clipRect), r ? this.animate() : o || this.afterAnimate(), this.isDirty = this.isDirtyData = !1, this.hasRendered = !0;
},
redraw: function() {
var e = this.chart, t = this.isDirtyData, n = this.group, r = this.xAxis, i = this.yAxis;
n && (e.inverted && n.attr({
width: e.plotWidth,
height: e.plotHeight
}), n.animate({
translateX: p(r && r.left, e.plotLeft),
translateY: p(i && i.top, e.plotTop)
})), this.translate(), this.setTooltipPoints(!0), this.render(), t && an(this, "updatedData");
},
setState: function(e) {
var t = this.options, n = this.graph, r = this.graphNeg, i = t.states, t = t.lineWidth, e = e || "";
this.state !== e && (this.state = e, i[e] && i[e].enabled === !1 || (e && (t = i[e].lineWidth || t + 1), n && !n.dashstyle && (e = {
"stroke-width": t
}, n.attr(e), r && r.attr(e))));
},
setVisible: function(e, t) {
var n = this, r = n.chart, i = n.legendItem, s, o = r.options.chart.ignoreHiddenSeries, u = n.visible;
s = (n.visible = e = n.userOptions.visible = e === U ? !u : e) ? "show" : "hide", tn([ "group", "dataLabelsGroup", "markerGroup", "tracker" ], function(e) {
n[e] && n[e][s]();
}), r.hoverSeries === n && n.onMouseOut(), i && r.legend.colorizeItem(n, e), n.isDirty = !0, n.options.stacking && tn(r.series, function(e) {
e.options.stacking && e.visible && (e.isDirty = !0);
}), tn(n.linkedSeries, function(t) {
t.setVisible(e, !1);
}), o && (r.isDirtyBox = !0), t !== !1 && r.redraw(), an(n, s);
},
show: function() {
this.setVisible(!0);
},
hide: function() {
this.setVisible(!1);
},
select: function(e) {
this.selected = e = e === U ? !this.selected : e, this.checkbox && (this.checkbox.checked = e), an(this, e ? "select" : "unselect");
},
drawTracker: function() {
var e = this, t = e.options, n = t.trackByArea, r = [].concat(n ? e.areaPath : e.graphPath), i = r.length, s = e.chart, o = s.pointer, u = s.renderer, a = s.options.tooltip.snap, f = e.tracker, l = t.cursor, l = l && {
cursor: l
}, c = e.singlePoints, h, p = function() {
s.hoverSeries !== e && e.onMouseOver();
};
if (i && !n) for (h = i + 1; h--; ) r[h] === "M" && r.splice(h + 1, 0, r[h + 1] - a, r[h + 2], "L"), (h && r[h] === "M" || h === i) && r.splice(h, 0, "L", r[h - 2] + a, r[h - 1]);
for (h = 0; h < c.length; h++) i = c[h], r.push("M", i.plotX - a, i.plotY, "L", i.plotX + a, i.plotY);
f ? f.attr({
d: r
}) : (e.tracker = f = u.path(r).attr({
"class": "highcharts-tracker",
"stroke-linejoin": "round",
visibility: e.visible ? "visible" : "hidden",
stroke: kt,
fill: n ? kt : Ct,
"stroke-width": t.lineWidth + (n ? 0 : 2 * a),
zIndex: 2
}).addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function(e) {
o.onTrackerMouseOut(e);
}).css(l).add(e.markerGroup), dt) && f.on("touchstart", p);
}
}, Gt = m(bn), Kt.line = Gt, hn.area = t(Qt, {
threshold: 0
}), Gt = m(bn, {
type: "area",
getSegments: function() {
var e = [], t = [], n = [], r = this.xAxis, i = this.yAxis, s = i.stacks[this.stackKey], o = {}, u, a, f = this.points, l, c;
if (this.options.stacking && !this.cropped) {
for (l = 0; l < f.length; l++) o[f[l].x] = f[l];
for (c in s) n.push(+c);
n.sort(function(e, t) {
return e - t;
}), tn(n, function(e) {
o[e] ? t.push(o[e]) : (u = r.translate(e), a = i.toPixels(s[e].cum, !0), t.push({
y: null,
plotX: u,
clientX: u,
plotY: a,
yBottom: a,
onMouseOver: xt
}));
}), t.length && e.push(t);
} else bn.prototype.getSegments.call(this), e = this.segments;
this.segments = e;
},
getSegmentPath: function(e) {
var t = bn.prototype.getSegmentPath.call(this, e), n = [].concat(t), r, i = this.options;
t.length === 3 && n.push("L", t[1], t[2]);
if (i.stacking && !this.closedStacks) for (r = e.length - 1; r >= 0; r--) r < e.length - 1 && i.step && n.push(e[r + 1].plotX, e[r].yBottom), n.push(e[r].plotX, e[r].yBottom); else this.closeSegment(n, e);
return this.areaPath = this.areaPath.concat(n), t;
},
closeSegment: function(e, t) {
var n = this.yAxis.getThreshold(this.options.threshold);
e.push("L", t[t.length - 1].plotX, n, "L", t[0].plotX, n);
},
drawGraph: function() {
this.areaPath = [], bn.prototype.drawGraph.apply(this);
var e = this, t = this.areaPath, n = this.options, r = [ [ "area", this.color, n.fillColor ] ];
n.negativeColor && r.push([ "areaNeg", n.negativeColor, n.negativeFillColor ]), tn(r, function(r) {
var i = r[0], s = e[i];
s ? s.animate({
d: t
}) : e[i] = e.chart.renderer.path(t).attr({
fill: p(r[2], pn(r[1]).setOpacity(n.fillOpacity || .75).get()),
zIndex: 0
}).add(e.group);
});
},
drawLegendSymbol: function(e, t) {
t.legendSymbol = this.chart.renderer.rect(0, e.baseline - 11, e.options.symbolWidth, 12, 2).attr({
zIndex: 3
}).add(t.legendGroup);
}
}), Kt.area = Gt, hn.spline = t(Qt), vn = m(bn, {
type: "spline",
getPointSpline: function(e, t, n) {
var r = t.plotX, i = t.plotY, s = e[n - 1], o = e[n + 1], u, a, f, l;
if (s && o) {
e = s.plotY, f = o.plotX;
var o = o.plotY, c;
u = (1.5 * r + s.plotX) / 2.5, a = (1.5 * i + e) / 2.5, f = (1.5 * r + f) / 2.5, l = (1.5 * i + o) / 2.5, c = (l - a) * (f - r) / (f - u) + i - l, a += c, l += c, a > e && a > i ? (a = K(e, i), l = 2 * i - a) : a < e && a < i && (a = Q(e, i), l = 2 * i - a), l > o && l > i ? (l = K(o, i), a = 2 * i - l) : l < o && l < i && (l = Q(o, i), a = 2 * i - l), t.rightContX = f, t.rightContY = l;
}
return n ? (t = [ "C", s.rightContX || s.plotX, s.rightContY || s.plotY, u || r, a || i, r, i ], s.rightContX = s.rightContY = null) : t = [ "M", r, i ], t;
}
}), Kt.spline = vn, hn.areaspline = t(hn.area), mn = Gt.prototype, vn = m(vn, {
type: "areaspline",
closedStacks: !0,
getSegmentPath: mn.getSegmentPath,
closeSegment: mn.closeSegment,
drawGraph: mn.drawGraph
}), Kt.areaspline = vn, hn.column = t(Qt, {
borderColor: "#FFFFFF",
borderWidth: 1,
borderRadius: 0,
groupPadding: .2,
marker: null,
pointPadding: .1,
minPointLength: 0,
cropThreshold: 50,
pointRange: null,
states: {
hover: {
brightness: .1,
shadow: !1
},
select: {
color: "#C0C0C0",
borderColor: "#000000",
shadow: !1
}
},
dataLabels: {
align: null,
verticalAlign: null,
y: null
},
stickyTracking: !1,
threshold: 0
}), vn = m(bn, {
type: "column",
tooltipOutsidePlot: !0,
requireSorting: !1,
pointAttrToOptions: {
stroke: "borderColor",
"stroke-width": "borderWidth",
fill: "color",
r: "borderRadius"
},
trackerGroups: [ "group", "dataLabelsGroup" ],
init: function() {
bn.prototype.init.apply(this, arguments);
var e = this, t = e.chart;
t.hasRendered && tn(t.series, function(t) {
t.type === e.type && (t.isDirty = !0);
});
},
getColumnMetrics: function() {
var e = this, t = e.chart, n = e.options, r = this.xAxis, i = r.reversed, s, o = {}, u, a = 0;
n.grouping === !1 ? a = 1 : tn(t.series, function(t) {
var n = t.options;
t.type === e.type && t.visible && e.options.group === n.group && (n.stacking ? (s = t.stackKey, o[s] === U && (o[s] = a++), u = o[s]) : n.grouping !== !1 && (u = a++), t.columnIndex = u);
});
var t = Q(G(r.transA) * (r.ordinalSlope || n.pointRange || r.closestPointRange || 1), r.len), r = t * n.groupPadding, f = (t - 2 * r) / a, c = n.pointWidth, n = l(c) ? (f - c) / 2 : f * n.pointPadding, c = p(c, f - 2 * n);
return e.columnMetrics = {
width: c,
offset: n + (r + ((i ? a - (e.columnIndex || 0) : e.columnIndex) || 0) * f - t / 2) * (i ? -1 : 1)
};
},
translate: function() {
var e = this, t = e.chart, n = e.options, r = n.stacking, i = n.borderWidth, s = e.yAxis, o = e.translatedThreshold = s.getThreshold(n.threshold), u = p(n.minPointLength, 5), n = e.getColumnMetrics(), a = n.width, f = J(K(a, 1 + 2 * i)), l = n.offset;
bn.prototype.translate.apply(e), tn(e.points, function(n) {
var c = Q(K(-999, n.plotY), s.len + 999), h = p(n.yBottom, o), d = n.plotX + l, v = J(Q(c, h)), c = J(K(c, h) - v), m = s.stacks[(n.y < 0 ? "-" : "") + e.stackKey];
r && e.visible && m && m[n.x] && m[n.x].setOffset(l, f), G(c) < u && u && (c = u, v = G(v - o) > u ? h - u : o - (s.translate(n.y, 0, 1, 0, 1) <= o ? u : 0)), n.barX = d, n.pointWidth = a, n.shapeType = "rect", n.shapeArgs = n = t.renderer.Element.prototype.crisp.call(0, i, d, v, f, c), i % 2 && (n.y -= 1, n.height += 1);
});
},
getSymbol: xt,
drawLegendSymbol: Gt.prototype.drawLegendSymbol,
drawGraph: xt,
drawPoints: function() {
var e = this, n = e.options, r = e.chart.renderer, i;
tn(e.points, function(s) {
var o = s.plotY, u = s.graphic;
o !== U && !isNaN(o) && s.y !== null ? (i = s.shapeArgs, u ? (cn(u), u.animate(t(i))) : s.graphic = r[s.shapeType](i).attr(s.pointAttr[s.selected ? "select" : ""]).add(e.group).shadow(n.shadow, null, n.stacking && !n.borderRadius)) : u && (s.graphic = u.destroy());
});
},
drawTracker: function() {
var e = this, t = e.chart.pointer, n = e.options.cursor, r = n && {
cursor: n
}, i = function(t) {
var n = t.target, r;
for (e.onMouseOver(); n && !r; ) r = n.point, n = n.parentNode;
r !== U && r.onMouseOver(t);
};
tn(e.points, function(e) {
e.graphic && (e.graphic.element.point = e), e.dataLabel && (e.dataLabel.element.point = e);
}), e._hasTracking ? e._hasTracking = !0 : tn(e.trackerGroups, function(n) {
e[n] && (e[n].addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function(e) {
t.onTrackerMouseOut(e);
}).css(r), dt) && e[n].on("touchstart", i);
});
},
alignDataLabel: function(e, n, r, i, s) {
var o = this.chart, u = o.inverted, a = e.dlBox || e.shapeArgs, f = e.below || e.plotY > p(this.translatedThreshold, o.plotSizeY), l = p(r.inside, !!this.options.stacking);
a && (i = t(a), u && (i = {
x: o.plotWidth - i.y - i.height,
y: o.plotHeight - i.x - i.width,
width: i.height,
height: i.width
}), !l) && (u ? (i.x += f ? 0 : i.width, i.width = 0) : (i.y += f ? i.height : 0, i.height = 0)), r.align = p(r.align, !u || l ? "center" : f ? "right" : "left"), r.verticalAlign = p(r.verticalAlign, u || l ? "middle" : f ? "top" : "bottom"), bn.prototype.alignDataLabel.call(this, e, n, r, i, s);
},
animate: function(e) {
var t = this.yAxis, n = this.options, r = this.chart.inverted, i = {};
lt && (e ? (i.scaleY = .001, e = Q(t.pos + t.len, K(t.pos, t.toPixels(n.threshold))), r ? i.translateX = e - t.len : i.translateY = e, this.group.attr(i)) : (i.scaleY = 1, i[r ? "translateX" : "translateY"] = t.pos, this.group.animate(i, this.options.animation), this.animate = null));
},
remove: function() {
var e = this, t = e.chart;
t.hasRendered && tn(t.series, function(t) {
t.type === e.type && (t.isDirty = !0);
}), bn.prototype.remove.apply(e, arguments);
}
}), Kt.column = vn, hn.bar = t(hn.column), mn = m(vn, {
type: "bar",
inverted: !0
}), Kt.bar = mn, hn.scatter = t(Qt, {
lineWidth: 0,
tooltip: {
headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',
pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
followPointer: !0
},
stickyTracking: !1
}), mn = m(bn, {
type: "scatter",
sorted: !1,
requireSorting: !1,
noSharedTooltip: !0,
trackerGroups: [ "markerGroup" ],
drawTracker: vn.prototype.drawTracker,
setTooltipPoints: xt
}), Kt.scatter = mn, hn.pie = t(Qt, {
borderColor: "#FFFFFF",
borderWidth: 1,
center: [ null, null ],
clip: !1,
colorByPoint: !0,
dataLabels: {
distance: 30,
enabled: !0,
formatter: function() {
return this.point.name;
}
},
ignoreHiddenPoint: !0,
legendType: "point",
marker: null,
size: null,
showInLegend: !1,
slicedOffset: 10,
states: {
hover: {
brightness: .1,
shadow: !1
}
},
stickyTracking: !1,
tooltip: {
followPointer: !0
}
}), Qt = {
type: "pie",
isCartesian: !1,
pointClass: m(yn, {
init: function() {
yn.prototype.init.apply(this, arguments);
var t = this, n;
return t.y < 0 && (t.y = null), e(t, {
visible: t.visible !== !1,
name: p(t.name, "Slice")
}), n = function() {
t.slice();
}, on(t, "select", n), on(t, "unselect", n), t;
},
setVisible: function(e) {
var t = this, n = t.series, r = n.chart, i;
t.visible = t.options.visible = e = e === U ? !t.visible : e, n.options.data[en(t, n.data)] = t.options, i = e ? "show" : "hide", tn([ "graphic", "dataLabel", "connector", "shadowGroup" ], function(e) {
t[e] && t[e][i]();
}), t.legendItem && r.legend.colorizeItem(t, e), !n.isDirty && n.options.ignoreHiddenPoint && (n.isDirty = !0, r.redraw());
},
slice: function(e, t, n) {
var r = this.series;
M(n, r.chart), p(t, !0), this.sliced = this.options.sliced = e = l(e) ? e : !this.sliced, r.options.data[en(this, r.data)] = this.options, e = e ? this.slicedTranslation : {
translateX: 0,
translateY: 0
}, this.graphic.animate(e), this.shadowGroup && this.shadowGroup.animate(e);
}
}),
requireSorting: !1,
noSharedTooltip: !0,
trackerGroups: [ "group", "dataLabelsGroup" ],
pointAttrToOptions: {
stroke: "borderColor",
"stroke-width": "borderWidth",
fill: "color"
},
getColor: xt,
animate: function(e) {
var t = this, n = t.points, r = t.startAngleRad;
e || (tn(n, function(e) {
var n = e.graphic, e = e.shapeArgs;
n && (n.attr({
r: t.center[3] / 2,
start: r,
end: r
}), n.animate({
r: e.r,
start: e.start,
end: e.end
}, t.options.animation));
}), t.animate = null);
},
setData: function(e, t) {
bn.prototype.setData.call(this, e, !1), this.processData(), this.generatePoints(), p(t, !0) && this.chart.redraw();
},
getCenter: function() {
var e = this.options, t = this.chart, r = 2 * (e.slicedOffset || 0), i, s = t.plotWidth - 2 * r, o = t.plotHeight - 2 * r, t = e.center, e = [ p(t[0], "50%"), p(t[1], "50%"), e.size || "100%", e.innerSize || 0 ], u = Q(s, o), a;
return sn(e, function(e, t) {
return a = /%$/.test(e), i = t < 2 || t === 2 && a, (a ? [ s, o, u, u ][t] * n(e) / 100 : e) + (i ? r : 0);
});
},
translate: function(e) {
this.generatePoints();
var t = 0, n = 0, r = this.options, i = r.slicedOffset, s = i + r.borderWidth, o, u, a, f = this.startAngleRad = et / 180 * ((r.startAngle || 0) % 360 - 90), l = this.points, c = 2 * et, h = r.dataLabels.distance, p = r.ignoreHiddenPoint, d, v = l.length, m;
e || (this.center = e = this.getCenter()), this.getX = function(t, n) {
return a = X.asin((t - e[1]) / (e[2] / 2 + h)), e[0] + (n ? -1 : 1) * Y(a) * (e[2] / 2 + h);
};
for (d = 0; d < v; d++) m = l[d], t += p && !m.visible ? 0 : m.y;
for (d = 0; d < v; d++) {
m = l[d], r = t ? m.y / t : 0, o = V((f + n * c) * 1e3) / 1e3;
if (!p || m.visible) n += r;
u = V((f + n * c) * 1e3) / 1e3, m.shapeType = "arc", m.shapeArgs = {
x: e[0],
y: e[1],
r: e[2] / 2,
innerR: e[3] / 2,
start: o,
end: u
}, a = (u + o) / 2, a > .75 * c && (a -= 2 * et), m.slicedTranslation = {
translateX: V(Y(a) * i),
translateY: V(Z(a) * i)
}, o = Y(a) * e[2] / 2, u = Z(a) * e[2] / 2, m.tooltipPos = [ e[0] + o * .7, e[1] + u * .7 ], m.half = a < c / 4 ? 0 : 1, m.angle = a, s = Q(s, h / 2), m.labelPos = [ e[0] + o + Y(a) * h, e[1] + u + Z(a) * h, e[0] + o + Y(a) * s, e[1] + u + Z(a) * s, e[0] + o, e[1] + u, h < 0 ? "center" : m.half ? "right" : "left", a ], m.percentage = r * 100, m.total = t;
}
this.setTooltipPoints();
},
drawGraph: null,
drawPoints: function() {
var t = this, n = t.chart.renderer, r, i, s = t.options.shadow, o, u;
s && !t.shadowGroup && (t.shadowGroup = n.g("shadow").add(t.group)), tn(t.points, function(a) {
i = a.graphic, u = a.shapeArgs, o = a.shadowGroup, s && !o && (o = a.shadowGroup = n.g("shadow").add(t.shadowGroup)), r = a.sliced ? a.slicedTranslation : {
translateX: 0,
translateY: 0
}, o && o.attr(r), i ? i.animate(e(u, r)) : a.graphic = i = n.arc(u).setRadialReference(t.center).attr(a.pointAttr[a.selected ? "select" : ""]).attr({
"stroke-linejoin": "round"
}).attr(r).add(t.group).shadow(s, o), a.visible === !1 && a.setVisible(!1);
});
},
drawDataLabels: function() {
var e = this, t = e.data, n, r = e.chart, i = e.options.dataLabels, s = p(i.connectorPadding, 10), o = p(i.connectorWidth, 1), u = r.plotWidth, r = r.plotHeight, a, f, l = p(i.softConnector, !0), c = i.distance, h = e.center, d = h[2] / 2, v = h[1], m = c > 0, g, y, b, w, E = [ [], [] ], S, x, T, N, k, L = [ 0, 0, 0, 0 ], A = function(e, t) {
return t.y - e.y;
}, O = function(e, t) {
e.sort(function(e, n) {
return e.angle !== void 0 && (n.angle - e.angle) * t;
});
};
if (i.enabled || e._hasPointLabels) {
bn.prototype.drawDataLabels.apply(e), tn(t, function(e) {
e.dataLabel && E[e.half].push(e);
});
for (N = 0; !w && t[N]; ) w = t[N] && t[N].dataLabel && (t[N].dataLabel.getBBox().height || 21), N++;
for (N = 2; N--; ) {
var t = [], M = [], _ = E[N], D = _.length, P;
O(_, N - .5);
if (c > 0) {
for (k = v - d - c; k <= v + d + c; k += w) t.push(k);
y = t.length;
if (D > y) {
n = [].concat(_), n.sort(A);
for (k = D; k--; ) n[k].rank = k;
for (k = D; k--; ) _[k].rank >= y && _.splice(k, 1);
D = _.length;
}
for (k = 0; k < D; k++) {
n = _[k], b = n.labelPos, n = 9999;
var H, B;
for (B = 0; B < y; B++) H = G(t[B] - b[1]), H < n && (n = H, P = B);
if (P < k && t[k] !== null) P = k; else for (y < D - k + P && t[k] !== null && (P = y - D + k); t[P] === null; ) P++;
M.push({
i: P,
y: t[P]
}), t[P] = null;
}
M.sort(A);
}
for (k = 0; k < D; k++) {
n = _[k], b = n.labelPos, g = n.dataLabel, T = n.visible === !1 ? "hidden" : "visible", n = b[1];
if (c > 0) {
if (y = M.pop(), P = y.i, x = y.y, n > x && t[P + 1] !== null || n < x && t[P - 1] !== null) x = n;
} else x = n;
S = i.justify ? h[0] + (N ? -1 : 1) * (d + c) : e.getX(P === 0 || P === t.length - 1 ? n : x, N), g._attr = {
visibility: T,
align: b[6]
}, g._pos = {
x: S + i.x + ({
left: s,
right: -s
}[b[6]] || 0),
y: x + i.y - 10
}, g.connX = S, g.connY = x, this.options.size === null && (y = g.width, S - y < s ? L[3] = K(V(y - S + s), L[3]) : S + y > u - s && (L[1] = K(V(S + y - u + s), L[1])), x - w / 2 < 0 ? L[0] = K(V(-x + w / 2), L[0]) : x + w / 2 > r && (L[2] = K(V(x + w / 2 - r), L[2])));
}
}
if (C(L) === 0 || this.verifyDataLabelOverflow(L)) this.placeDataLabels(), m && o && tn(this.points, function(t) {
a = t.connector, b = t.labelPos, (g = t.dataLabel) && g._pos ? (S = g.connX, x = g.connY, f = l ? [ "M", S + (b[6] === "left" ? 5 : -5), x, "C", S, x, 2 * b[2] - b[4], 2 * b[3] - b[5], b[2], b[3], "L", b[4], b[5] ] : [ "M", S + (b[6] === "left" ? 5 : -5), x, "L", b[2], b[3], "L", b[4], b[5] ], a ? (a.animate({
d: f
}), a.attr("visibility", T)) : t.connector = a = e.chart.renderer.path(f).attr({
"stroke-width": o,
stroke: i.connectorColor || t.color || "#606060",
visibility: T
}).add(e.group)) : a && (t.connector = a.destroy());
});
}
},
verifyDataLabelOverflow: function(e) {
var t = this.center, n = this.options, r = n.center, i = n = n.minSize || 80, s;
return r[0] !== null ? i = K(t[2] - K(e[1], e[3]), n) : (i = K(t[2] - e[1] - e[3], n), t[0] += (e[3] - e[1]) / 2), r[1] !== null ? i = K(Q(i, t[2] - K(e[0], e[2])), n) : (i = K(Q(i, t[2] - e[0] - e[2]), n), t[1] += (e[0] - e[2]) / 2), i < t[2] ? (t[2] = i, this.translate(t), tn(this.points, function(e) {
e.dataLabel && (e.dataLabel._pos = null);
}), this.drawDataLabels()) : s = !0, s;
},
placeDataLabels: function() {
tn(this.points, function(e) {
var e = e.dataLabel, t;
e && ((t = e._pos) ? (e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({
y: -999
}));
});
},
alignDataLabel: xt,
drawTracker: vn.prototype.drawTracker,
drawLegendSymbol: Gt.prototype.drawLegendSymbol,
getSymbol: xt
}, Qt = m(bn, Qt), Kt.pie = Qt, e(Highcharts, {
Axis: j,
Chart: R,
Color: pn,
Legend: q,
Pointer: I,
Point: yn,
Tick: P,
Tooltip: F,
Renderer: pt,
Series: bn,
SVGElement: D,
SVGRenderer: dn,
arrayMin: N,
arrayMax: C,
charts: Tt,
dateFormat: bt,
format: b,
pathAnim: Et,
getOptions: function() {
return yt;
},
hasBidiBug: ct,
isTouchDevice: at,
numberFormat: g,
seriesTypes: Kt,
setOptions: function(e) {
return yt = t(yt, e), _(), yt;
},
addEvent: on,
removeEvent: un,
createElement: v,
discardElement: L,
css: d,
each: tn,
extend: e,
map: sn,
merge: t,
pick: p,
splat: h,
extendClass: m,
pInt: n,
wrap: function(e, t, n) {
var r = e[t];
e[t] = function() {
var e = Array.prototype.slice.call(arguments);
return e.unshift(r), n.apply(this, e);
};
},
svg: lt,
canvas: ht,
vml: !lt && !ht,
product: "Highcharts",
version: "3.0.1"
});
}(), Highcharts.create = function(e) {
return new Highcharts.Chart({
chart: {
renderTo: e.id,
zoomType: "xy",
type: "areaspline",
backgroundColor: e.bcolor || "#F3F3F3"
},
title: {
text: e.xTitle || ""
},
credits: {
enabled: !1
},
xAxis: [ {
labels: {
formatter: function() {
return this.value;
},
style: {
color: "#000"
}
},
title: {
text: "",
style: {
color: "#7eafdd"
}
},
categories: e.xcat,
lineColor: "#8E8E8F",
lineWidth: 2
} ],
yAxis: [ {
title: {
text: e.yTitle || ""
},
labels: {
formatter: function() {
return (e.yText || "").sprintf(this.value);
},
style: {
color: "#666",
fontFamily: "Microsoft yahei"
}
},
gridLineColor: "#D2D1D1",
allowDecimals: !1
} ],
plotOptions: {
areaspline: {
fillColor: e.fillColor || "rgba(193,223,195,0.7)"
}
},
legend: {
enabled: !1
},
tooltip: {
backgroundColor: "#525253",
borderColor: "#000",
style: {
color: "#fff"
},
headerFormat: "",
pointFormat: '<b style="font-family:Microsoft yahei">{point.y}%s</b>'.sprintf(e.yTip)
},
series: [ {
name: "",
color: e.color || "#3A864E",
lineWidth: 3,
marker: {
lineWidth: 2,
lineColor: "#fff"
},
data: e.ydata
} ],
exporting: {
enabled: !1
}
});
}, Highcharts;
});define("home/index.js", [ "common/lib/highcharts.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
"use strict";
var r = template.render, i = e("common/lib/highcharts.js"), s = e("common/wx/Cgi.js"), o = wx.cgiData;
(function() {
var e = "hasNotice";
seajs.use("common/lib/store.js", function(t) {
if (!!t.get(e)) return;
s.get({
mask: !1,
url: wx.url("/cgi-bin/sysnotify?f=json&begin=0&count=5")
}, function(n) {
if (n.BaseResp.Ret == 0 && n.Count) {
var r = [], i = n.List, s = n.Count, o = function(e, t) {
var n = {
1: "你的群发",
2: "你的开发者申请",
3: "你的头像更改",
4: "你的昵称修改",
5: "你的功能介绍更改",
6: "你的信息登记",
7: "你的信息登记",
8: "你的信息登记",
9: "你的信息登记",
10: "你的信息登记",
11: "你的自定义菜单申请",
12: "你的商户功能权限申请",
14: "微信支付",
15: "微信支付",
16: "微信支付",
18: "微信认证",
19: "微信认证",
22: "商户功能初审",
23: "模板消息申请",
24: "商品购买测试链接",
26: "修改商户功能设置"
}, r = "";
return t == 3 ? r = "已经通过审核" : t == 2 && (r = "审核不通过"), typeof n[e] != "undefined" ? n[e] + r : "";
};
for (var u = 0; u < s; ++u) {
var a = i[u];
r.push({
text: a.NotifyMsgType == 1 ? o(a.CheckType, a.CheckStatus) : a.Title,
url: wx.url("/cgi-bin/frame?t=notification/index_frame&selectid=" + a.Id)
});
}
seajs.use("common/wx/noticeBox", function(n) {
new n({
container: "#accountArea",
list: r
}), $("#accountArea .btn_inbox_closed").click(function() {
t.set(e, 1), $("#accountArea").unbind("mouseover").removeClass("on").find(".account_message_box").remove();
});
});
}
});
});
})();
} catch (u) {
wx.jslog({
src: "home/index.js"
}, u);
}
});