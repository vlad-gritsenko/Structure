"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : undefined, function (e, t) {
  "use strict";
  function n(e, t) {
    t = t || ne;var n = t.createElement("script");n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
  }function i(e) {
    var t = !!e && "length" in e && e.length,
        n = ve.type(e);return "function" !== n && !ve.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }function r(e, t, n) {
    return ve.isFunction(t) ? ve.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? ve.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? ve.grep(e, function (e) {
      return ae.call(t, e) > -1 !== n;
    }) : Ce.test(t) ? ve.filter(t, e, n) : (t = ve.filter(t, e), ve.grep(e, function (e) {
      return ae.call(t, e) > -1 !== n && 1 === e.nodeType;
    }));
  }function s(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }function a(e) {
    var t = {};return ve.each(e.match(De) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }function l(e) {
    return e;
  }function c(e) {
    throw e;
  }function d(e, t, n, i) {
    var o;try {
      e && ve.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && ve.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }function u() {
    ne.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), ve.ready();
  }function p() {
    this.expando = ve.expando + p.uid++;
  }function f(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Me.test(e) ? JSON.parse(e) : e);
  }function h(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = f(n);
      } catch (e) {}qe.set(e, t, n);
    } else n = void 0;return n;
  }function v(e, t, n, i) {
    var o,
        r = 1,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return ve.css(e, t, "");
    },
        l = a(),
        c = n && n[3] || (ve.cssNumber[t] ? "" : "px"),
        d = (ve.cssNumber[t] || "px" !== c && +l) && ze.exec(ve.css(e, t));if (d && d[3] !== c) {
      c = c || d[3], n = n || [], d = +l || 1;do {
        r = r || ".5", d /= r, ve.style(e, t, d + c);
      } while (r !== (r = a() / l) && 1 !== r && --s);
    }return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o;
  }function g(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        o = Ue[i];return o || (t = n.body.appendChild(n.createElement(i)), o = ve.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ue[i] = o, o);
  }function y(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++) {
      i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = Pe.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Re(i) && (o[r] = g(i))) : "none" !== n && (o[r] = "none", Pe.set(i, "display", n)));
    }for (r = 0; r < s; r++) {
      null != o[r] && (e[r].style.display = o[r]);
    }return e;
  }function m(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? ve.merge([e], n) : n;
  }function w(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      Pe.set(e[n], "globalEval", !t || Pe.get(t[n], "globalEval"));
    }
  }function b(e, t, n, i, o) {
    for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) {
      if ((r = e[f]) || 0 === r) if ("object" === ve.type(r)) ve.merge(p, r.nodeType ? [r] : r);else if (Ge.test(r)) {
        for (s = s || u.appendChild(t.createElement("div")), a = (_e.exec(r) || ["", ""])[1].toLowerCase(), l = Ve[a] || Ve._default, s.innerHTML = l[1] + ve.htmlPrefilter(r) + l[2], d = l[0]; d--;) {
          s = s.lastChild;
        }ve.merge(p, s.childNodes), s = u.firstChild, s.textContent = "";
      } else p.push(t.createTextNode(r));
    }for (u.textContent = "", f = 0; r = p[f++];) {
      if (i && ve.inArray(r, i) > -1) o && o.push(r);else if (c = ve.contains(r.ownerDocument, r), s = m(u.appendChild(r), "script"), c && w(s), n) for (d = 0; r = s[d++];) {
        Ye.test(r.type || "") && n.push(r);
      }
    }return u;
  }function x() {
    return !0;
  }function T() {
    return !1;
  }function k() {
    try {
      return ne.activeElement;
    } catch (e) {}
  }function S(e, t, n, i, o, r) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      "string" != typeof n && (i = i || n, n = void 0);for (a in t) {
        S(e, a, n, i, t[a], r);
      }return e;
    }if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = T;else if (!o) return e;return 1 === r && (s = o, o = function o(e) {
      return ve().off(e), s.apply(this, arguments);
    }, o.guid = s.guid || (s.guid = ve.guid++)), e.each(function () {
      ve.event.add(this, t, o, i, n);
    });
  }function C(e, t) {
    return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? ve(">tbody", e)[0] || e : e;
  }function $(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function A(e) {
    var t = it.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function E(e, t) {
    var n, i, o, r, s, a, l, c;if (1 === t.nodeType) {
      if (Pe.hasData(e) && (r = Pe.access(e), s = Pe.set(t, r), c = r.events)) {
        delete s.handle, s.events = {};for (o in c) {
          for (n = 0, i = c[o].length; n < i; n++) {
            ve.event.add(t, o, c[o][n]);
          }
        }
      }qe.hasData(e) && (a = qe.access(e), l = ve.extend({}, a), qe.set(t, l));
    }
  }function j(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function D(e, t, i, o) {
    t = re.apply([], t);var r,
        s,
        a,
        l,
        c,
        d,
        u = 0,
        p = e.length,
        f = p - 1,
        h = t[0],
        v = ve.isFunction(h);if (v || p > 1 && "string" == typeof h && !fe.checkClone && nt.test(h)) return e.each(function (n) {
      var r = e.eq(n);v && (t[0] = h.call(this, n, r.html())), D(r, t, i, o);
    });if (p && (r = b(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
      for (a = ve.map(m(r, "script"), $), l = a.length; u < p; u++) {
        c = r, u !== f && (c = ve.clone(c, !0, !0), l && ve.merge(a, m(c, "script"))), i.call(e[u], c, u);
      }if (l) for (d = a[a.length - 1].ownerDocument, ve.map(a, A), u = 0; u < l; u++) {
        c = a[u], Ye.test(c.type || "") && !Pe.access(c, "globalEval") && ve.contains(d, c) && (c.src ? ve._evalUrl && ve._evalUrl(c.src) : n(c.textContent.replace(ot, ""), d));
      }
    }return e;
  }function H(e, t, n) {
    for (var i, o = t ? ve.filter(t, e) : e, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || ve.cleanData(m(i)), i.parentNode && (n && ve.contains(i.ownerDocument, i) && w(m(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }function N(e, t, n) {
    var i,
        o,
        r,
        s,
        a = e.style;return n = n || at(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || ve.contains(e.ownerDocument, e) || (s = ve.style(e, t)), !fe.pixelMarginRight() && st.test(s) && rt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
  }function L(e, t) {
    return { get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      } };
  }function O(e) {
    if (e in ft) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;) {
      if ((e = pt[n] + t) in ft) return e;
    }
  }function P(e) {
    var t = ve.cssProps[e];return t || (t = ve.cssProps[e] = O(e) || e), t;
  }function q(e, t, n) {
    var i = ze.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function M(e, t, n, i, o) {
    var r,
        s = 0;for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) {
      "margin" === n && (s += ve.css(e, n + We[r], !0, o)), i ? ("content" === n && (s -= ve.css(e, "padding" + We[r], !0, o)), "margin" !== n && (s -= ve.css(e, "border" + We[r] + "Width", !0, o))) : (s += ve.css(e, "padding" + We[r], !0, o), "padding" !== n && (s += ve.css(e, "border" + We[r] + "Width", !0, o)));
    }return s;
  }function F(e, t, n) {
    var i,
        o = at(e),
        r = N(e, t, o),
        s = "border-box" === ve.css(e, "boxSizing", !1, o);return st.test(r) ? r : (i = s && (fe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + M(e, t, n || (s ? "border" : "content"), i, o) + "px");
  }function I(e, t, n, i, o) {
    return new I.prototype.init(e, t, n, i, o);
  }function z() {
    vt && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, ve.fx.interval), ve.fx.tick());
  }function W() {
    return e.setTimeout(function () {
      ht = void 0;
    }), ht = ve.now();
  }function R(e, t) {
    var n,
        i = 0,
        o = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      n = We[i], o["margin" + n] = o["padding" + n] = e;
    }return t && (o.opacity = o.width = e), o;
  }function B(e, t, n) {
    for (var i, o = (_.tweeners[t] || []).concat(_.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
      if (i = o[r].call(n, t, e)) return i;
    }
  }function U(e, t, n) {
    var i,
        o,
        r,
        s,
        a,
        l,
        c,
        d,
        u = "width" in t || "height" in t,
        p = this,
        f = {},
        h = e.style,
        v = e.nodeType && Re(e),
        g = Pe.get(e, "fxshow");n.queue || (s = ve._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
      s.unqueued || a();
    }), s.unqueued++, p.always(function () {
      p.always(function () {
        s.unqueued--, ve.queue(e, "fx").length || s.empty.fire();
      });
    }));for (i in t) {
      if (o = t[i], gt.test(o)) {
        if (delete t[i], r = r || "toggle" === o, o === (v ? "hide" : "show")) {
          if ("show" !== o || !g || void 0 === g[i]) continue;v = !0;
        }f[i] = g && g[i] || ve.style(e, i);
      }
    }if ((l = !ve.isEmptyObject(t)) || !ve.isEmptyObject(f)) {
      u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = g && g.display, null == c && (c = Pe.get(e, "display")), d = ve.css(e, "display"), "none" === d && (c ? d = c : (y([e], !0), c = e.style.display || c, d = ve.css(e, "display"), y([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === ve.css(e, "float") && (l || (p.done(function () {
        h.display = c;
      }), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), l = !1;for (i in f) {
        l || (g ? "hidden" in g && (v = g.hidden) : g = Pe.access(e, "fxshow", { display: c }), r && (g.hidden = !v), v && y([e], !0), p.done(function () {
          v || y([e]), Pe.remove(e, "fxshow");for (i in f) {
            ve.style(e, i, f[i]);
          }
        })), l = B(v ? g[i] : 0, i, p), i in g || (g[i] = l.start, v && (l.end = l.start, l.start = 0));
      }
    }
  }function X(e, t) {
    var n, i, o, r, s;for (n in e) {
      if (i = ve.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = ve.cssHooks[i]) && "expand" in s) {
        r = s.expand(r), delete e[i];for (n in r) {
          n in e || (e[n] = r[n], t[n] = o);
        }
      } else t[i] = o;
    }
  }function _(e, t, n) {
    var i,
        o,
        r = 0,
        s = _.prefilters.length,
        a = ve.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;for (var t = ht || W(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++) {
        c.tweens[s].run(r);
      }return a.notifyWith(e, [c, r, n]), r < 1 && l ? n : (l || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({ elem: e, props: ve.extend({}, t), opts: ve.extend(!0, { specialEasing: {}, easing: ve.easing._default }, n), originalProperties: t, originalOptions: n, startTime: ht || W(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = ve.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;if (o) return this;for (o = !0; n < i; n++) {
          c.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      } }),
        d = c.props;for (X(d, c.opts.specialEasing); r < s; r++) {
      if (i = _.prefilters[r].call(c, e, d, c.opts)) return ve.isFunction(i.stop) && (ve._queueHooks(c.elem, c.opts.queue).stop = ve.proxy(i.stop, i)), i;
    }return ve.map(d, B, c), ve.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ve.fx.timer(ve.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c;
  }function Y(e) {
    return (e.match(De) || []).join(" ");
  }function V(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function G(e, t, n, i) {
    var o;if (Array.isArray(t)) ve.each(t, function (t, o) {
      n || At.test(e) ? i(e, o) : G(e + "[" + ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && null != o ? t : "") + "]", o, n, i);
    });else if (n || "object" !== ve.type(t)) i(e, t);else for (o in t) {
      G(e + "[" + o + "]", t[o], n, i);
    }
  }function Q(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          o = 0,
          r = t.toLowerCase().match(De) || [];if (ve.isFunction(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function J(e, t, n, i) {
    function o(a) {
      var l;return r[a] = !0, ve.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1);
      }), l;
    }var r = {},
        s = e === It;return o(t.dataTypes[0]) || !r["*"] && o("*");
  }function K(e, t) {
    var n,
        i,
        o = ve.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && ve.extend(!0, e, i), e;
  }function Z(e, t, n) {
    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
      l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (i) for (o in a) {
      if (a[o] && a[o].test(i)) {
        l.unshift(o);break;
      }
    }if (l[0] in n) r = l[0];else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          r = o;break;
        }s || (s = o);
      }r = r || s;
    }if (r) return r !== l[0] && l.unshift(r), n[r];
  }function ee(e, t, n, i) {
    var o,
        r,
        s,
        a,
        l,
        c = {},
        d = e.dataTypes.slice();if (d[1]) for (s in e.converters) {
      c[s.toLowerCase()] = e.converters[s];
    }for (r = d.shift(); r;) {
      if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
        if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) {
          if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));break;
          }
        }if (!0 !== s) if (s && e.throws) t = s(t);else try {
          t = s(t);
        } catch (e) {
          return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
        }
      }
    }return { state: "success", data: t };
  }var te = [],
      ne = e.document,
      ie = Object.getPrototypeOf,
      oe = te.slice,
      re = te.concat,
      se = te.push,
      ae = te.indexOf,
      le = {},
      ce = le.toString,
      de = le.hasOwnProperty,
      ue = de.toString,
      pe = ue.call(Object),
      fe = {},
      he = "3.2.1",
      ve = function ve(e, t) {
    return new ve.fn.init(e, t);
  },
      ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ye = /^-ms-/,
      me = /-([a-z])/g,
      we = function we(e, t) {
    return t.toUpperCase();
  };ve.fn = ve.prototype = { jquery: he, constructor: ve, length: 0, toArray: function toArray() {
      return oe.call(this);
    }, get: function get(e) {
      return null == e ? oe.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = ve.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return ve.each(this, e);
    }, map: function map(e) {
      return this.pushStack(ve.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(oe.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: se, sort: te.sort, splice: te.splice }, ve.extend = ve.fn.extend = function () {
    var e,
        t,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || ve.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], i = e[t], s !== i && (c && i && (ve.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && ve.isPlainObject(n) ? n : {}, s[t] = ve.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      }
    }return s;
  }, ve.extend({ expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isFunction: function isFunction(e) {
      return "function" === ve.type(e);
    }, isWindow: function isWindow(e) {
      return null != e && e === e.window;
    }, isNumeric: function isNumeric(e) {
      var t = ve.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== ce.call(e)) && (!(t = ie(e)) || "function" == typeof (n = de.call(t, "constructor") && t.constructor) && ue.call(n) === pe);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, type: function type(e) {
      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }, globalEval: function globalEval(e) {
      n(e);
    }, camelCase: function camelCase(e) {
      return e.replace(ye, "ms-").replace(me, we);
    }, each: function each(e, t) {
      var n,
          o = 0;if (i(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++) {} else for (o in e) {
        if (!1 === t.call(e[o], o, e[o])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(ge, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (i(Object(e)) ? ve.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : ae.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) {
        e[o++] = t[i];
      }return e.length = o, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) {
        !t(e[o], o) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var o,
          r,
          s = 0,
          a = [];if (i(e)) for (o = e.length; s < o; s++) {
        null != (r = t(e[s], s, n)) && a.push(r);
      } else for (s in e) {
        null != (r = t(e[s], s, n)) && a.push(r);
      }return re.apply([], a);
    }, guid: 1, proxy: function proxy(e, t) {
      var n, i, o;if ("string" == typeof t && (n = e[t], t = e, e = n), ve.isFunction(e)) return i = oe.call(arguments, 2), o = function o() {
        return e.apply(t || this, i.concat(oe.call(arguments)));
      }, o.guid = e.guid = e.guid || ve.guid++, o;
    }, now: Date.now, support: fe }), "function" == typeof Symbol && (ve.fn[Symbol.iterator] = te[Symbol.iterator]), ve.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    le["[object " + t + "]"] = t.toLowerCase();
  });var be = function (e) {
    function t(e, t, n, i) {
      var o,
          r,
          s,
          a,
          l,
          c,
          d,
          p = t && t.ownerDocument,
          h = t ? t.nodeType : 9;if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;if (!i && ((t ? t.ownerDocument || t : W) !== L && N(t), t = t || L, P)) {
        if (11 !== h && (l = ye.exec(e))) if (o = l[1]) {
          if (9 === h) {
            if (!(s = t.getElementById(o))) return n;if (s.id === o) return n.push(s), n;
          } else if (p && (s = p.getElementById(o)) && I(t, s) && s.id === o) return n.push(s), n;
        } else {
          if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;if ((o = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n;
        }if (T.qsa && !_[e + " "] && (!q || !q.test(e))) {
          if (1 !== h) p = t, d = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(xe, Te) : t.setAttribute("id", a = z), c = $(e), r = c.length; r--;) {
              c[r] = "#" + a + " " + f(c[r]);
            }d = c.join(","), p = me.test(e) && u(t.parentNode) || t;
          }if (d) try {
            return K.apply(n, p.querySelectorAll(d)), n;
          } catch (e) {} finally {
            a === z && t.removeAttribute("id");
          }
        }
      }return E(e.replace(ae, "$1"), t, n, i);
    }function n() {
      function e(n, i) {
        return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i;
      }var t = [];return e;
    }function i(e) {
      return e[z] = !0, e;
    }function o(e) {
      var t = L.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function r(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) {
        k.attrHandle[n[i]] = t;
      }
    }function s(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function a(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function c(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function d(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var o, r = e([], n.length, t), s = r.length; s--;) {
            n[o = r[s]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }function u(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }function p() {}function f(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function h(e, t, n) {
      var i = t.dir,
          o = t.next,
          r = o || i,
          s = n && "parentNode" === r,
          a = B++;return t.first ? function (t, n, o) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, o);
        }return !1;
      } : function (t, n, l) {
        var c,
            d,
            u,
            p = [R, a];if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || s) if (u = t[z] || (t[z] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((c = d[r]) && c[0] === R && c[1] === a) return p[2] = c[2];if (d[r] = p, p[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function v(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var o = e.length; o--;) {
          if (!e[o](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function g(e, n, i) {
      for (var o = 0, r = n.length; o < r; o++) {
        t(e, n[o], i);
      }return i;
    }function y(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
      }return s;
    }function m(e, t, n, o, r, s) {
      return o && !o[z] && (o = m(o)), r && !r[z] && (r = m(r, s)), i(function (i, s, a, l) {
        var c,
            d,
            u,
            p = [],
            f = [],
            h = s.length,
            v = i || g(t || "*", a.nodeType ? [a] : a, []),
            m = !e || !i && t ? v : y(v, p, e, a, l),
            w = n ? r || (i ? e : h || o) ? [] : s : m;if (n && n(m, w, a, l), o) for (c = y(w, f), o(c, [], a, l), d = c.length; d--;) {
          (u = c[d]) && (w[f[d]] = !(m[f[d]] = u));
        }if (i) {
          if (r || e) {
            if (r) {
              for (c = [], d = w.length; d--;) {
                (u = w[d]) && c.push(m[d] = u);
              }r(null, w = [], c, l);
            }for (d = w.length; d--;) {
              (u = w[d]) && (c = r ? ee(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u));
            }
          }
        } else w = y(w === s ? w.splice(h, w.length) : w), r ? r(null, s, w, l) : K.apply(s, w);
      });
    }function w(e) {
      for (var t, n, i, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = h(function (e) {
        return e === t;
      }, s, !0), c = h(function (e) {
        return ee(t, e) > -1;
      }, s, !0), d = [function (e, n, i) {
        var o = !r && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));return t = null, o;
      }]; a < o; a++) {
        if (n = k.relative[e[a].type]) d = [h(v(d), n)];else {
          if (n = k.filter[e[a].type].apply(null, e[a].matches), n[z]) {
            for (i = ++a; i < o && !k.relative[e[i].type]; i++) {}return m(a > 1 && v(d), a > 1 && f(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(ae, "$1"), n, a < i && w(e.slice(a, i)), i < o && w(e = e.slice(i)), i < o && f(e));
          }d.push(n);
        }
      }return v(d);
    }function b(e, n) {
      var o = n.length > 0,
          r = e.length > 0,
          s = function s(i, _s, a, l, c) {
        var d,
            u,
            p,
            f = 0,
            h = "0",
            v = i && [],
            g = [],
            m = j,
            w = i || r && k.find.TAG("*", c),
            b = R += null == m ? 1 : Math.random() || .1,
            x = w.length;for (c && (j = _s === L || _s || c); h !== x && null != (d = w[h]); h++) {
          if (r && d) {
            for (u = 0, _s || d.ownerDocument === L || (N(d), a = !P); p = e[u++];) {
              if (p(d, _s || L, a)) {
                l.push(d);break;
              }
            }c && (R = b);
          }o && ((d = !p && d) && f--, i && v.push(d));
        }if (f += h, o && h !== f) {
          for (u = 0; p = n[u++];) {
            p(v, g, _s, a);
          }if (i) {
            if (f > 0) for (; h--;) {
              v[h] || g[h] || (g[h] = Q.call(l));
            }g = y(g);
          }K.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l);
        }return c && (R = b, j = m), v;
      };return o ? i(s) : s;
    }var x,
        T,
        k,
        S,
        C,
        $,
        A,
        E,
        j,
        D,
        H,
        N,
        L,
        O,
        P,
        q,
        M,
        F,
        I,
        z = "sizzle" + 1 * new Date(),
        W = e.document,
        R = 0,
        B = 0,
        U = n(),
        X = n(),
        _ = n(),
        Y = function Y(e, t) {
      return e === t && (H = !0), 0;
    },
        V = {}.hasOwnProperty,
        G = [],
        Q = G.pop,
        J = G.push,
        K = G.push,
        Z = G.slice,
        ee = function ee(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
        re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
        se = new RegExp(ne + "+", "g"),
        ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        le = new RegExp("^" + ne + "*," + ne + "*"),
        ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        ue = new RegExp(re),
        pe = new RegExp("^" + ie + "$"),
        fe = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + re), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
        he = /^(?:input|select|textarea|button)$/i,
        ve = /^h\d$/i,
        ge = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        me = /[+~]/,
        we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        be = function be(e, t, n) {
      var i = "0x" + t - 65536;return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Te = function Te(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        ke = function ke() {
      N();
    },
        Se = h(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      K.apply(G = Z.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType;
    } catch (e) {
      K = { apply: G.length ? function (e, t) {
          J.apply(e, Z.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }T = t.support = {}, C = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, N = t.setDocument = function (e) {
      var t,
          n,
          i = e ? e.ownerDocument || e : W;return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, O = L.documentElement, P = !C(L), W !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), T.attributes = o(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), T.getElementsByTagName = o(function (e) {
        return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length;
      }), T.getElementsByClassName = ge.test(L.getElementsByClassName), T.getById = o(function (e) {
        return O.appendChild(e).id = z, !L.getElementsByName || !L.getElementsByName(z).length;
      }), T.getById ? (k.filter.ID = function (e) {
        var t = e.replace(we, be);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, k.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && P) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (k.filter.ID = function (e) {
        var t = e.replace(we, be);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, k.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && P) {
          var n,
              i,
              o,
              r = t.getElementById(e);if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];for (o = t.getElementsByName(e), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            }
          }return [];
        }
      }), k.find.TAG = T.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            o = 0,
            r = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return r;
      }, k.find.CLASS = T.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && P) return t.getElementsByClassName(e);
      }, M = [], q = [], (T.qsa = ge.test(L.querySelectorAll)) && (o(function (e) {
        O.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || q.push(".#.+[+~]");
      }), o(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = L.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:");
      })), (T.matchesSelector = ge.test(F = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (e) {
        T.disconnectedMatch = F.call(e, "*"), F.call(e, "[s!='']:x"), M.push("!=", re);
      }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(O.compareDocumentPosition), I = t || ge.test(O.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, Y = t ? function (e, t) {
        if (e === t) return H = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === W && I(W, e) ? -1 : t === L || t.ownerDocument === W && I(W, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return H = !0, 0;var n,
            i = 0,
            o = e.parentNode,
            r = t.parentNode,
            a = [e],
            l = [t];if (!o || !r) return e === L ? -1 : t === L ? 1 : o ? -1 : r ? 1 : D ? ee(D, e) - ee(D, t) : 0;if (o === r) return s(e, t);for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }for (n = t; n = n.parentNode;) {
          l.unshift(n);
        }for (; a[i] === l[i];) {
          i++;
        }return i ? s(a[i], l[i]) : a[i] === W ? -1 : l[i] === W ? 1 : 0;
      }, L) : L;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== L && N(e), n = n.replace(de, "='$1']"), T.matchesSelector && P && !_[n + " "] && (!M || !M.test(n)) && (!q || !q.test(n))) try {
        var i = F.call(e, n);if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return t(n, L, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== L && N(e), I(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== L && N(e);var n = k.attrHandle[t.toLowerCase()],
          i = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;return void 0 !== i ? i : T.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }, t.escape = function (e) {
      return (e + "").replace(xe, Te);
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          o = 0;if (H = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(Y), H) {
        for (; t = e[o++];) {
          t === e[o] && (i = n.push(o));
        }for (; i--;) {
          e.splice(n[i], 1);
        }
      }return D = null, e;
    }, S = t.getText = function (e) {
      var t,
          n = "",
          i = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += S(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += S(t);
      }return n;
    }, k = t.selectors = { cacheLength: 50, createPseudo: i, match: fe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = $(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(we, be).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = U[e + " "];return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, n, i) {
          return function (o) {
            var r = t.attr(o, e);return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var c,
                d,
                u,
                p,
                f,
                h,
                v = r !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                y = a && t.nodeName.toLowerCase(),
                m = !l && !a,
                w = !1;if (g) {
              if (r) {
                for (; v;) {
                  for (p = t; p = p[v];) {
                    if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  }h = v = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [s ? g.firstChild : g.lastChild], s && m) {
                for (p = g, u = p[z] || (p[z] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === R && c[1], w = f && c[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (w = f = 0) || h.pop();) {
                  if (1 === p.nodeType && ++w && p === t) {
                    d[e] = [R, f, w];break;
                  }
                }
              } else if (m && (p = t, u = p[z] || (p[z] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === R && c[1], w = f), !1 === w) for (; (p = ++f && p && p[v] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++w || (m && (u = p[z] || (p[z] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [R, w]), p !== t));) {}return (w -= o) === i || w % i == 0 && w / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, n) {
          var o,
              r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return r[z] ? r(n) : r.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, o = r(e, n), s = o.length; s--;) {
              i = ee(e, o[s]), e[i] = !(t[i] = o[s]);
            }
          }) : function (e) {
            return r(e, 0, o);
          }) : r;
        } }, pseudos: { not: i(function (e) {
          var t = [],
              n = [],
              o = A(e.replace(ae, "$1"));return o[z] ? i(function (e, t, n, i) {
            for (var r, s = o(e, null, i, []), a = e.length; a--;) {
              (r = s[a]) && (e[a] = !(t[a] = r));
            }
          }) : function (e, i, r) {
            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop();
          };
        }), has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }), contains: i(function (e) {
          return e = e.replace(we, be), function (t) {
            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1;
          };
        }), lang: i(function (e) {
          return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(), function (t) {
            var n;do {
              if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === O;
        }, focus: function focus(e) {
          return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: c(!1), disabled: c(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !k.pseudos.empty(e);
        }, header: function header(e) {
          return ve.test(e.nodeName);
        }, input: function input(e) {
          return he.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: d(function () {
          return [0];
        }), last: d(function (e, t) {
          return [t - 1];
        }), eq: d(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: d(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: d(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: d(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: d(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }, k.pseudos.nth = k.pseudos.eq;for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      k.pseudos[x] = a(x);
    }for (x in { submit: !0, reset: !0 }) {
      k.pseudos[x] = l(x);
    }return p.prototype = k.filters = k.pseudos, k.setFilters = new p(), $ = t.tokenize = function (e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d = X[e + " "];if (d) return n ? 0 : d.slice(0);for (a = e, l = [], c = k.preFilter; a;) {
        i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({ value: i, type: o[0].replace(ae, " ") }), a = a.slice(i.length));for (s in k.filter) {
          !(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({ value: i, type: s, matches: o }), a = a.slice(i.length));
        }if (!i) break;
      }return n ? a.length : a ? t.error(e) : X(e, l).slice(0);
    }, A = t.compile = function (e, t) {
      var n,
          i = [],
          o = [],
          r = _[e + " "];if (!r) {
        for (t || (t = $(e)), n = t.length; n--;) {
          r = w(t[n]), r[z] ? i.push(r) : o.push(r);
        }r = _(e, b(o, i)), r.selector = e;
      }return r;
    }, E = t.select = function (e, t, n, i) {
      var o,
          r,
          s,
          a,
          l,
          c = "function" == typeof e && e,
          d = !i && $(e = c.selector || e);if (n = n || [], 1 === d.length) {
        if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && P && k.relative[r[1].type]) {
          if (!(t = (k.find.ID(s.matches[0].replace(we, be), t) || [])[0])) return n;c && (t = t.parentNode), e = e.slice(r.shift().value.length);
        }for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);) {
          if ((l = k.find[a]) && (i = l(s.matches[0].replace(we, be), me.test(r[0].type) && u(t.parentNode) || t))) {
            if (r.splice(o, 1), !(e = i.length && f(r))) return K.apply(n, i), n;break;
          }
        }
      }return (c || A(e, d))(i, t, !P, n, !t || me.test(e) && u(t.parentNode) || t), n;
    }, T.sortStable = z.split("").sort(Y).join("") === z, T.detectDuplicates = !!H, N(), T.sortDetached = o(function (e) {
      return 1 & e.compareDocumentPosition(L.createElement("fieldset"));
    }), o(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || r("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), T.attributes && o(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || r("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), o(function (e) {
      return null == e.getAttribute("disabled");
    }) || r(te, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), t;
  }(e);ve.find = be, ve.expr = be.selectors, ve.expr[":"] = ve.expr.pseudos, ve.uniqueSort = ve.unique = be.uniqueSort, ve.text = be.getText, ve.isXMLDoc = be.isXML, ve.contains = be.contains, ve.escapeSelector = be.escape;var xe = function xe(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (o && ve(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      Te = function Te(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      ke = ve.expr.match.needsContext,
      Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      Ce = /^.[^:#\[\.,]*$/;ve.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ve.find.matchesSelector(i, e) ? [i] : [] : ve.find.matches(e, ve.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ve.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          o = this;if ("string" != typeof e) return this.pushStack(ve(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (ve.contains(o[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        ve.find(e, o[t], n);
      }return i > 1 ? ve.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(r(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(r(this, e || [], !0));
    }, is: function is(e) {
      return !!r(this, "string" == typeof e && ke.test(e) ? ve(e) : e || [], !1).length;
    } });var $e,
      Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ve.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || $e, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof ve ? t[0] : t, ve.merge(this, ve.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Se.test(i[1]) && ve.isPlainObject(t)) for (i in t) {
          ve.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return o = ne.getElementById(i[2]), o && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : ve.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ve) : ve.makeArray(e, this);
  }).prototype = ve.fn, $e = ve(ne);var Ee = /^(?:parents|prev(?:Until|All))/,
      je = { children: !0, contents: !0, next: !0, prev: !0 };ve.fn.extend({ has: function has(e) {
      var t = ve(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (ve.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && ve(e);if (!ke.test(e)) for (; i < o; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ve.find.matchesSelector(n, e))) {
            r.push(n);break;
          }
        }
      }return this.pushStack(r.length > 1 ? ve.uniqueSort(r) : r);
    }, index: function index(e) {
      return e ? "string" == typeof e ? ae.call(ve(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(ve.uniqueSort(ve.merge(this.get(), ve(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), ve.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return xe(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return xe(e, "parentNode", n);
    }, next: function next(e) {
      return s(e, "nextSibling");
    }, prev: function prev(e) {
      return s(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return xe(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return xe(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return xe(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return xe(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return Te((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return Te(e.firstChild);
    }, contents: function contents(e) {
      return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), ve.merge([], e.childNodes));
    } }, function (e, t) {
    ve.fn[e] = function (n, i) {
      var o = ve.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ve.filter(i, o)), this.length > 1 && (je[e] || ve.uniqueSort(o), Ee.test(e) && o.reverse()), this.pushStack(o);
    };
  });var De = /[^\x20\t\r\n\f]+/g;ve.Callbacks = function (e) {
    e = "string" == typeof e ? a(e) : ve.extend({}, e);var t,
        n,
        i,
        o,
        r = [],
        s = [],
        l = -1,
        c = function c() {
      for (o = o || e.once, i = t = !0; s.length; l = -1) {
        for (n = s.shift(); ++l < r.length;) {
          !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
    },
        d = { add: function add() {
        return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
          ve.each(n, function (n, i) {
            ve.isFunction(i) ? e.unique && d.has(i) || r.push(i) : i && i.length && "string" !== ve.type(i) && t(i);
          });
        }(arguments), n && !t && c()), this;
      }, remove: function remove() {
        return ve.each(arguments, function (e, t) {
          for (var n; (n = ve.inArray(t, r, n)) > -1;) {
            r.splice(n, 1), n <= l && l--;
          }
        }), this;
      }, has: function has(e) {
        return e ? ve.inArray(e, r) > -1 : r.length > 0;
      }, empty: function empty() {
        return r && (r = []), this;
      }, disable: function disable() {
        return o = s = [], r = n = "", this;
      }, disabled: function disabled() {
        return !r;
      }, lock: function lock() {
        return o = s = [], n || t || (r = n = ""), this;
      }, locked: function locked() {
        return !!o;
      }, fireWith: function fireWith(e, n) {
        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this;
      }, fire: function fire() {
        return d.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return d;
  }, ve.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", ve.Callbacks("memory"), ve.Callbacks("memory"), 2], ["resolve", "done", ve.Callbacks("once memory"), ve.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ve.Callbacks("once memory"), ve.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = { state: function state() {
          return i;
        }, always: function always() {
          return r.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return o.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return ve.Deferred(function (t) {
            ve.each(n, function (n, i) {
              var o = ve.isFunction(e[i[4]]) && e[i[4]];r[i[1]](function () {
                var e = o && o.apply(this, arguments);e && ve.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, o) {
          function r(t, n, i, o) {
            return function () {
              var a = this,
                  d = arguments,
                  u = function u() {
                var e, u;if (!(t < s)) {
                  if ((e = i.apply(a, d)) === n.promise()) throw new TypeError("Thenable self-resolution");u = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, ve.isFunction(u) ? o ? u.call(e, r(s, n, l, o), r(s, n, c, o)) : (s++, u.call(e, r(s, n, l, o), r(s, n, c, o), r(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, d = [e]), (o || n.resolveWith)(a, d));
                }
              },
                  p = o ? u : function () {
                try {
                  u();
                } catch (e) {
                  ve.Deferred.exceptionHook && ve.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = void 0, d = [e]), n.rejectWith(a, d));
                }
              };t ? p() : (ve.Deferred.getStackHook && (p.stackTrace = ve.Deferred.getStackHook()), e.setTimeout(p));
            };
          }var s = 0;return ve.Deferred(function (e) {
            n[0][3].add(r(0, e, ve.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, ve.isFunction(t) ? t : l)), n[2][3].add(r(0, e, ve.isFunction(i) ? i : c));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? ve.extend(e, o) : o;
        } },
          r = {};return ve.each(n, function (e, t) {
        var s = t[2],
            a = t[5];o[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function () {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[t[0] + "With"] = s.fireWith;
      }), o.promise(r), t && t.call(r, r), r;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          o = oe.call(arguments),
          r = ve.Deferred(),
          s = function s(e) {
        return function (n) {
          i[e] = this, o[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || r.resolveWith(i, o);
        };
      };if (t <= 1 && (d(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || ve.isFunction(o[n] && o[n].then))) return r.then();for (; n--;) {
        d(o[n], s(n), r.reject);
      }return r.promise();
    } });var He = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ve.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && He.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, ve.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var Ne = ve.Deferred();ve.fn.ready = function (e) {
    return Ne.then(e).catch(function (e) {
      ve.readyException(e);
    }), this;
  }, ve.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --ve.readyWait : ve.isReady) || (ve.isReady = !0, !0 !== e && --ve.readyWait > 0 || Ne.resolveWith(ne, [ve]));
    } }), ve.ready.then = Ne.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ve.ready) : (ne.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));var Le = function Le(e, t, n, i, o, r, s) {
    var a = 0,
        l = e.length,
        c = null == n;if ("object" === ve.type(n)) {
      o = !0;for (a in n) {
        Le(e, t, a, n[a], !0, r, s);
      }
    } else if (void 0 !== i && (o = !0, ve.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
      return c.call(ve(e), n);
    })), t)) for (; a < l; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
  },
      Oe = function Oe(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };p.uid = 1, p.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          o = this.cache(e);if ("string" == typeof t) o[ve.camelCase(t)] = n;else for (i in t) {
        o[ve.camelCase(i)] = t[i];
      }return o;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ve.camelCase(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          Array.isArray(t) ? t = t.map(ve.camelCase) : (t = ve.camelCase(t), t = t in i ? [t] : t.match(De) || []), n = t.length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || ve.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !ve.isEmptyObject(t);
    } };var Pe = new p(),
      qe = new p(),
      Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Fe = /[A-Z]/g;ve.extend({ hasData: function hasData(e) {
      return qe.hasData(e) || Pe.hasData(e);
    }, data: function data(e, t, n) {
      return qe.access(e, t, n);
    }, removeData: function removeData(e, t) {
      qe.remove(e, t);
    }, _data: function _data(e, t, n) {
      return Pe.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      Pe.remove(e, t);
    } }), ve.fn.extend({ data: function data(e, t) {
      var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;if (void 0 === e) {
        if (this.length && (o = qe.get(r), 1 === r.nodeType && !Pe.get(r, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ve.camelCase(i.slice(5)), h(r, i, o[i])));
          }Pe.set(r, "hasDataAttrs", !0);
        }return o;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        qe.set(this, e);
      }) : Le(this, function (t) {
        var n;if (r && void 0 === t) {
          if (void 0 !== (n = qe.get(r, e))) return n;if (void 0 !== (n = h(r, e))) return n;
        } else this.each(function () {
          qe.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        qe.remove(this, e);
      });
    } }), ve.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = Pe.get(e, t), n && (!i || Array.isArray(n) ? i = Pe.access(e, t, ve.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = ve.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = ve._queueHooks(e, t),
          s = function s() {
        ve.dequeue(e, t);
      };"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return Pe.get(e, n) || Pe.access(e, n, { empty: ve.Callbacks("once memory").add(function () {
          Pe.remove(e, [t + "queue", n]);
        }) });
    } }), ve.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ve.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = ve.queue(this, e, t);ve._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ve.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        ve.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          o = ve.Deferred(),
          r = this,
          s = this.length,
          a = function a() {
        --i || o.resolveWith(r, [r]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = Pe.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), o.promise(t);
    } });var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ze = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
      We = ["Top", "Right", "Bottom", "Left"],
      Re = function Re(e, t) {
    return e = t || e, "none" === e.style.display || "" === e.style.display && ve.contains(e.ownerDocument, e) && "none" === ve.css(e, "display");
  },
      Be = function Be(e, t, n, i) {
    var o,
        r,
        s = {};for (r in t) {
      s[r] = e.style[r], e.style[r] = t[r];
    }o = n.apply(e, i || []);for (r in t) {
      e.style[r] = s[r];
    }return o;
  },
      Ue = {};ve.fn.extend({ show: function show() {
      return y(this, !0);
    }, hide: function hide() {
      return y(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Re(this) ? ve(this).show() : ve(this).hide();
      });
    } });var Xe = /^(?:checkbox|radio)$/i,
      _e = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Ye = /^$|\/(?:java|ecma)script/i,
      Ve = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;var Ge = /<|&#?\w+;/;!function () {
    var e = ne.createDocumentFragment(),
        t = e.appendChild(ne.createElement("div")),
        n = ne.createElement("input");n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
  }();var Qe = ne.documentElement,
      Je = /^key/,
      Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ze = /^([^.]*)(?:\.(.+)|)/;ve.event = { global: {}, add: function add(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h,
          v,
          g = Pe.get(e);if (g) for (n.handler && (r = n, n = r.handler, o = r.selector), o && ve.find.matchesSelector(Qe, o), n.guid || (n.guid = ve.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== ve && ve.event.triggered !== t.type ? ve.event.dispatch.apply(e, arguments) : void 0;
      }), t = (t || "").match(De) || [""], c = t.length; c--;) {
        a = Ze.exec(t[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f && (u = ve.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = ve.event.special[f] || {}, d = ve.extend({ type: f, origType: v, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && ve.expr.match.needsContext.test(o), namespace: h.join(".") }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ve.event.global[f] = !0);
      }
    }, remove: function remove(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h,
          v,
          g = Pe.hasData(e) && Pe.get(e);if (g && (l = g.events)) {
        for (t = (t || "").match(De) || [""], c = t.length; c--;) {
          if (a = Ze.exec(t[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f) {
            for (u = ve.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) {
              d = p[r], !o && v !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
            }s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || ve.removeEvent(e, f, g.handle), delete l[f]);
          } else for (f in l) {
            ve.event.remove(e, f + t[c], n, i, !0);
          }
        }ve.isEmptyObject(l) && Pe.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a = ve.event.fix(e),
          l = new Array(arguments.length),
          c = (Pe.get(this, "events") || {})[a.type] || [],
          d = ve.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
        for (s = ve.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((ve.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return d.postDispatch && d.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          o,
          r,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
          for (r = [], s = {}, n = 0; n < l; n++) {
            i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? ve(o, this).index(c) > -1 : ve.find(o, this, null, [c]).length), s[o] && r.push(i);
          }r.length && a.push({ elem: c, handlers: r });
        }
      }return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(ve.Event.prototype, e, { enumerable: !0, configurable: !0, get: ve.isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[ve.expando] ? e : new ve.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== k() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === k() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return o(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, ve.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ve.Event = function (e, t) {
    if (!(this instanceof ve.Event)) return new ve.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ve.extend(this, t), this.timeStamp = e && e.timeStamp || ve.now(), this[ve.expando] = !0;
  }, ve.Event.prototype = { constructor: ve.Event, isDefaultPrevented: T, isPropagationStopped: T, isImmediatePropagationStopped: T, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, ve.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, ve.event.addProp), ve.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    ve.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = this,
            o = e.relatedTarget,
            r = e.handleObj;return o && (o === i || ve.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
      } };
  }), ve.fn.extend({ on: function on(e, t, n, i) {
      return S(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return S(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ve(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (o in e) {
          this.off(o, t, e[o]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function () {
        ve.event.remove(this, e, n, t);
      });
    } });var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      tt = /<script|<style|<link/i,
      nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      it = /^true\/(.*)/,
      ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ve.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(et, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          o,
          r,
          s,
          a = e.cloneNode(!0),
          l = ve.contains(e.ownerDocument, e);if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ve.isXMLDoc(e))) for (s = m(a), r = m(e), i = 0, o = r.length; i < o; i++) {
        j(r[i], s[i]);
      }if (t) if (n) for (r = r || m(e), s = s || m(a), i = 0, o = r.length; i < o; i++) {
        E(r[i], s[i]);
      } else E(e, a);return s = m(a, "script"), s.length > 0 && w(s, !l && m(e, "script")), a;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, o = ve.event.special, r = 0; void 0 !== (n = e[r]); r++) {
        if (Oe(n)) {
          if (t = n[Pe.expando]) {
            if (t.events) for (i in t.events) {
              o[i] ? ve.event.remove(n, i) : ve.removeEvent(n, i, t.handle);
            }n[Pe.expando] = void 0;
          }n[qe.expando] && (n[qe.expando] = void 0);
        }
      }
    } }), ve.fn.extend({ detach: function detach(e) {
      return H(this, e, !0);
    }, remove: function remove(e) {
      return H(this, e);
    }, text: function text(e) {
      return Le(this, function (e) {
        return void 0 === e ? ve.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return D(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          C(this, e).appendChild(e);
        }
      });
    }, prepend: function prepend() {
      return D(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = C(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return D(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return D(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (ve.cleanData(m(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ve.clone(this, e, t);
      });
    }, html: function html(e) {
      return Le(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !tt.test(e) && !Ve[(_e.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ve.htmlPrefilter(e);try {
            for (; n < i; n++) {
              t = this[n] || {}, 1 === t.nodeType && (ve.cleanData(m(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return D(this, arguments, function (t) {
        var n = this.parentNode;ve.inArray(this, e) < 0 && (ve.cleanData(m(this)), n && n.replaceChild(t, this));
      }, e);
    } }), ve.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    ve.fn[e] = function (e) {
      for (var n, i = [], o = ve(e), r = o.length - 1, s = 0; s <= r; s++) {
        n = s === r ? this : this.clone(!0), ve(o[s])[t](n), se.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var rt = /^margin/,
      st = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
      at = function at(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  };!function () {
    function t() {
      if (a) {
        a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(s);var t = e.getComputedStyle(a);n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Qe.removeChild(s), a = null;
      }
    }var n,
        i,
        o,
        r,
        s = ne.createElement("div"),
        a = ne.createElement("div");a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ve.extend(fe, { pixelPosition: function pixelPosition() {
        return t(), n;
      }, boxSizingReliable: function boxSizingReliable() {
        return t(), i;
      }, pixelMarginRight: function pixelMarginRight() {
        return t(), o;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), r;
      } }));
  }();var lt = /^(none|table(?!-c[ea]).+)/,
      ct = /^--/,
      dt = { position: "absolute", visibility: "hidden", display: "block" },
      ut = { letterSpacing: "0", fontWeight: "400" },
      pt = ["Webkit", "Moz", "ms"],
      ft = ne.createElement("div").style;ve.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = N(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            r,
            s,
            a = ve.camelCase(t),
            l = ct.test(t),
            c = e.style;if (l || (t = P(a)), s = ve.cssHooks[t] || ve.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];r = typeof n === "undefined" ? "undefined" : _typeof(n), "string" === r && (o = ze.exec(n)) && o[1] && (n = v(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (ve.cssNumber[a] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var o,
          r,
          s,
          a = ve.camelCase(t);return ct.test(t) || (t = P(a)), s = ve.cssHooks[t] || ve.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = N(e, t, i)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    } }), ve.each(["height", "width"], function (e, t) {
    ve.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !lt.test(ve.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : Be(e, dt, function () {
          return F(e, t, i);
        });
      }, set: function set(e, n, i) {
        var o,
            r = i && at(e),
            s = i && M(e, t, i, "border-box" === ve.css(e, "boxSizing", !1, r), r);return s && (o = ze.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ve.css(e, t)), q(e, n, s);
      } };
  }), ve.cssHooks.marginLeft = L(fe.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), ve.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    ve.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[e + We[i] + t] = r[i] || r[i - 2] || r[0];
        }return o;
      } }, rt.test(e) || (ve.cssHooks[e + t].set = q);
  }), ve.fn.extend({ css: function css(e, t) {
      return Le(this, function (e, t, n) {
        var i,
            o,
            r = {},
            s = 0;if (Array.isArray(t)) {
          for (i = at(e), o = t.length; s < o; s++) {
            r[t[s]] = ve.css(e, t[s], !1, i);
          }return r;
        }return void 0 !== n ? ve.style(e, t, n) : ve.css(e, t);
      }, e, t, arguments.length > 1);
    } }), ve.Tween = I, I.prototype = { constructor: I, init: function init(e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || ve.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ve.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = I.propHooks[this.prop];return e && e.get ? e.get(this) : I.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = I.propHooks[this.prop];return this.options.duration ? this.pos = t = ve.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this;
    } }, I.prototype.init.prototype = I.prototype, I.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ve.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
      }, set: function set(e) {
        ve.fx.step[e.prop] ? ve.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ve.cssProps[e.prop]] && !ve.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ve.style(e.elem, e.prop, e.now + e.unit);
      } } }, I.propHooks.scrollTop = I.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, ve.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, ve.fx = I.prototype.init, ve.fx.step = {};var ht,
      vt,
      gt = /^(?:toggle|show|hide)$/,
      yt = /queueHooks$/;ve.Animation = ve.extend(_, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return v(n.elem, e, ze.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      ve.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);for (var n, i = 0, o = e.length; i < o; i++) {
        n = e[i], _.tweeners[n] = _.tweeners[n] || [], _.tweeners[n].unshift(t);
      }
    }, prefilters: [U], prefilter: function prefilter(e, t) {
      t ? _.prefilters.unshift(e) : _.prefilters.push(e);
    } }), ve.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? ve.extend({}, e) : { complete: n || !n && t || ve.isFunction(e) && e, duration: e, easing: n && t || t && !ve.isFunction(t) && t };return ve.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ve.fx.speeds ? i.duration = ve.fx.speeds[i.duration] : i.duration = ve.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      ve.isFunction(i.old) && i.old.call(this), i.queue && ve.dequeue(this, i.queue);
    }, i;
  }, ve.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(Re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var o = ve.isEmptyObject(e),
          r = ve.speed(t, n, i),
          s = function s() {
        var t = _(this, ve.extend({}, e), r);(o || Pe.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            r = ve.timers,
            s = Pe.get(this);if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
          s[o] && s[o].stop && yt.test(o) && i(s[o]);
        }for (o = r.length; o--;) {
          r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
        }!t && n || ve.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Pe.get(this),
            i = n[e + "queue"],
            o = n[e + "queueHooks"],
            r = ve.timers,
            s = i ? i.length : 0;for (n.finish = !0, ve.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) {
          r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        }for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), ve.each(["toggle", "show", "hide"], function (e, t) {
    var n = ve.fn[t];ve.fn[t] = function (e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, o);
    };
  }), ve.each({ slideDown: R("show"), slideUp: R("hide"), slideToggle: R("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    ve.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), ve.timers = [], ve.fx.tick = function () {
    var e,
        t = 0,
        n = ve.timers;for (ht = ve.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || ve.fx.stop(), ht = void 0;
  }, ve.fx.timer = function (e) {
    ve.timers.push(e), ve.fx.start();
  }, ve.fx.interval = 13, ve.fx.start = function () {
    vt || (vt = !0, z());
  }, ve.fx.stop = function () {
    vt = null;
  }, ve.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ve.fn.delay = function (t, n) {
    return t = ve.fx ? ve.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
      var o = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(o);
      };
    });
  }, function () {
    var e = ne.createElement("input"),
        t = ne.createElement("select"),
        n = t.appendChild(ne.createElement("option"));e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value;
  }();var mt,
      wt = ve.expr.attrHandle;ve.fn.extend({ attr: function attr(e, t) {
      return Le(this, ve.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        ve.removeAttr(this, e);
      });
    } }), ve.extend({ attr: function attr(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? ve.prop(e, t, n) : (1 === r && ve.isXMLDoc(e) || (o = ve.attrHooks[t.toLowerCase()] || (ve.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ve.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = ve.find.attr(e, t), null == i ? void 0 : i));
    }, attrHooks: { type: { set: function set(e, t) {
          if (!fe.radioValue && "radio" === t && o(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          o = t && t.match(De);if (o && 1 === e.nodeType) for (; n = o[i++];) {
        e.removeAttribute(n);
      }
    } }), mt = { set: function set(e, t, n) {
      return !1 === t ? ve.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, ve.each(ve.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = wt[t] || ve.find.attr;wt[t] = function (e, t, i) {
      var o,
          r,
          s = t.toLowerCase();return i || (r = wt[s], wt[s] = o, o = null != n(e, t, i) ? s : null, wt[s] = r), o;
    };
  });var bt = /^(?:input|select|textarea|button)$/i,
      xt = /^(?:a|area)$/i;ve.fn.extend({ prop: function prop(e, t) {
      return Le(this, ve.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[ve.propFix[e] || e];
      });
    } }), ve.extend({ prop: function prop(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ve.isXMLDoc(e) || (t = ve.propFix[t] || t, o = ve.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = ve.find.attr(e, "tabindex");return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), fe.optSelected || (ve.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), ve.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ve.propFix[this.toLowerCase()] = this;
  }), ve.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (ve.isFunction(e)) return this.each(function (t) {
        ve(this).addClass(e.call(this, t, V(this)));
      });if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[l++];) {
        if (o = V(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
          for (s = 0; r = t[s++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }a = Y(i), o !== a && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (ve.isFunction(e)) return this.each(function (t) {
        ve(this).removeClass(e.call(this, t, V(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[l++];) {
        if (o = V(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
          for (s = 0; r = t[s++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }a = Y(i), o !== a && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ve.isFunction(e) ? this.each(function (n) {
        ve(this).toggleClass(e.call(this, n, V(this), t), t);
      }) : this.each(function () {
        var t, i, o, r;if ("string" === n) for (i = 0, o = ve(this), r = e.match(De) || []; t = r[i++];) {
          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== n || (t = V(this), t && Pe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Pe.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + Y(V(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var Tt = /\r/g;ve.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          o = this[0];{
        if (arguments.length) return i = ve.isFunction(e), this.each(function (n) {
          var o;1 === this.nodeType && (o = i ? e.call(this, n, ve(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = ve.map(o, function (e) {
            return null == e ? "" : e + "";
          })), (t = ve.valHooks[this.type] || ve.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
        });if (o) return (t = ve.valHooks[o.type] || ve.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n);
      }
    } }), ve.extend({ valHooks: { option: { get: function get(e) {
          var t = ve.find.attr(e, "value");return null != t ? t : Y(ve.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              r = e.options,
              s = e.selectedIndex,
              a = "select-one" === e.type,
              l = a ? null : [],
              c = a ? s + 1 : r.length;for (i = s < 0 ? c : a ? s : 0; i < c; i++) {
            if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
              if (t = ve(n).val(), a) return t;l.push(t);
            }
          }return l;
        }, set: function set(e, t) {
          for (var n, i, o = e.options, r = ve.makeArray(t), s = o.length; s--;) {
            i = o[s], (i.selected = ve.inArray(ve.valHooks.option.get(i), r) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), r;
        } } } }), ve.each(["radio", "checkbox"], function () {
    ve.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = ve.inArray(ve(e).val(), t) > -1;
      } }, fe.checkOn || (ve.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });var kt = /^(?:focusinfocus|focusoutblur)$/;ve.extend(ve.event, { trigger: function trigger(t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          d,
          u,
          p = [i || ne],
          f = de.call(t, "type") ? t.type : t,
          h = de.call(t, "namespace") ? t.namespace.split(".") : [];if (s = a = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !kt.test(f + ve.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[ve.expando] ? t : new ve.Event(f, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ve.makeArray(n, [t]), u = ve.event.special[f] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
        if (!o && !u.noBubble && !ve.isWindow(i)) {
          for (l = u.delegateType || f, kt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) {
            p.push(s), a = s;
          }a === (i.ownerDocument || ne) && p.push(a.defaultView || a.parentWindow || e);
        }for (r = 0; (s = p[r++]) && !t.isPropagationStopped();) {
          t.type = r > 1 ? l : u.bindType || f, d = (Pe.get(s, "events") || {})[t.type] && Pe.get(s, "handle"), d && d.apply(s, n), (d = c && s[c]) && d.apply && Oe(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
        }return t.type = f, o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), n) || !Oe(i) || c && ve.isFunction(i[f]) && !ve.isWindow(i) && (a = i[c], a && (i[c] = null), ve.event.triggered = f, i[f](), ve.event.triggered = void 0, a && (i[c] = a)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = ve.extend(new ve.Event(), n, { type: e, isSimulated: !0 });ve.event.trigger(i, null, t);
    } }), ve.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        ve.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return ve.event.trigger(e, t, n, !0);
    } }), ve.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    ve.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), ve.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), fe.focusin = "onfocusin" in e, fe.focusin || ve.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      ve.event.simulate(t, e.target, ve.event.fix(e));
    };ve.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            o = Pe.access(i, t);o || i.addEventListener(e, n, !0), Pe.access(i, t, (o || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = Pe.access(i, t) - 1;o ? Pe.access(i, t, o) : (i.removeEventListener(e, n, !0), Pe.remove(i, t));
      } };
  });var St = e.location,
      Ct = ve.now(),
      $t = /\?/;ve.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || ve.error("Invalid XML: " + t), n;
  };var At = /\[\]$/,
      Et = /\r?\n/g,
      jt = /^(?:submit|button|image|reset|file)$/i,
      Dt = /^(?:input|select|textarea|keygen)/i;ve.param = function (e, t) {
    var n,
        i = [],
        o = function o(e, t) {
      var n = ve.isFunction(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !ve.isPlainObject(e)) ve.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) {
      G(n, e[n], t, o);
    }return i.join("&");
  }, ve.fn.extend({ serialize: function serialize() {
      return ve.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = ve.prop(this, "elements");return e ? ve.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !ve(this).is(":disabled") && Dt.test(this.nodeName) && !jt.test(e) && (this.checked || !Xe.test(e));
      }).map(function (e, t) {
        var n = ve(this).val();return null == n ? null : Array.isArray(n) ? ve.map(n, function (e) {
          return { name: t.name, value: e.replace(Et, "\r\n") };
        }) : { name: t.name, value: n.replace(Et, "\r\n") };
      }).get();
    } });var Ht = /%20/g,
      Nt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      qt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      Ft = {},
      It = {},
      zt = "*/".concat("*"),
      Wt = ne.createElement("a");Wt.href = St.href, ve.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: St.href, type: "GET", isLocal: Pt.test(St.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ve.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? K(K(e, ve.ajaxSettings), t) : K(ve.ajaxSettings, e);
    }, ajaxPrefilter: Q(Ft), ajaxTransport: Q(It), ajax: function ajax(t, n) {
      function i(t, n, i, a) {
        var c,
            p,
            f,
            b,
            x,
            T = n;d || (d = !0, l && e.clearTimeout(l), o = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = Z(h, k, i)), b = ee(h, b, k, c), c ? (h.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (ve.lastModified[r] = x), (x = k.getResponseHeader("etag")) && (ve.etag[r] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, f = b.error, c = !f)) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", c ? y.resolveWith(v, [p, T, k]) : y.rejectWith(v, [k, T, f]), k.statusCode(w), w = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? p : f]), m.fireWith(v, [k, T]), u && (g.trigger("ajaxComplete", [k, h]), --ve.active || ve.event.trigger("ajaxStop")));
      }"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var o,
          r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h = ve.ajaxSetup({}, n),
          v = h.context || h,
          g = h.context && (v.nodeType || v.jquery) ? ve(v) : ve.event,
          y = ve.Deferred(),
          m = ve.Callbacks("once memory"),
          w = h.statusCode || {},
          b = {},
          x = {},
          T = "canceled",
          k = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (d) {
            if (!a) for (a = {}; t = Ot.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return d ? s : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == d && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (d) k.always(e[k.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || T;return o && o.abort(t), i(0, t), this;
        } };if (y.promise(k), h.url = ((t || h.url || St.href) + "").replace(Mt, St.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [""], null == h.crossDomain) {
        c = ne.createElement("a");try {
          c.href = h.url, c.href = c.href, h.crossDomain = Wt.protocol + "//" + Wt.host != c.protocol + "//" + c.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = ve.param(h.data, h.traditional)), J(Ft, h, n, k), d) return k;u = ve.event && h.global, u && 0 == ve.active++ && ve.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qt.test(h.type), r = h.url.replace(Nt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (f = h.url.slice(r.length), h.data && (r += ($t.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Lt, "$1"), f = ($t.test(r) ? "&" : "?") + "_=" + Ct++ + f), h.url = r + f), h.ifModified && (ve.lastModified[r] && k.setRequestHeader("If-Modified-Since", ve.lastModified[r]), ve.etag[r] && k.setRequestHeader("If-None-Match", ve.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
        k.setRequestHeader(p, h.headers[p]);
      }if (h.beforeSend && (!1 === h.beforeSend.call(v, k, h) || d)) return k.abort();if (T = "abort", m.add(h.complete), k.done(h.success), k.fail(h.error), o = J(It, h, n, k)) {
        if (k.readyState = 1, u && g.trigger("ajaxSend", [k, h]), d) return k;h.async && h.timeout > 0 && (l = e.setTimeout(function () {
          k.abort("timeout");
        }, h.timeout));try {
          d = !1, o.send(b, i);
        } catch (e) {
          if (d) throw e;i(-1, e);
        }
      } else i(-1, "No Transport");return k;
    }, getJSON: function getJSON(e, t, n) {
      return ve.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return ve.get(e, void 0, t, "script");
    } }), ve.each(["get", "post"], function (e, t) {
    ve[t] = function (e, n, i, o) {
      return ve.isFunction(n) && (o = o || i, i = n, n = void 0), ve.ajax(ve.extend({ url: e, type: t, dataType: o, data: n, success: i }, ve.isPlainObject(e) && e));
    };
  }), ve._evalUrl = function (e) {
    return ve.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, ve.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (ve.isFunction(e) && (e = e.call(this[0])), t = ve(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return ve.isFunction(e) ? this.each(function (t) {
        ve(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = ve(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = ve.isFunction(e);return this.each(function (n) {
        ve(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        ve(this).replaceWith(this.childNodes);
      }), this;
    } }), ve.expr.pseudos.hidden = function (e) {
    return !ve.expr.pseudos.visible(e);
  }, ve.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, ve.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Rt = { 0: 200, 1223: 204 },
      Bt = ve.ajaxSettings.xhr();fe.cors = !!Bt && "withCredentials" in Bt, fe.ajax = Bt = !!Bt, ve.ajaxTransport(function (t) {
    var _n, i;if (fe.cors || Bt && !t.crossDomain) return { send: function send(o, r) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");for (s in o) {
          a.setRequestHeader(s, o[s]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), ve.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), ve.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return ve.globalEval(e), e;
      } } }), ve.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), ve.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;return { send: function send(i, o) {
          t = ve("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), ne.head.appendChild(t[0]);
        }, abort: function abort() {
          _n2 && _n2();
        } };
    }
  });var Ut = [],
      Xt = /(=)\?(?=&|$)|\?\?/;ve.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Ut.pop() || ve.expando + "_" + Ct++;return this[e] = !0, e;
    } }), ve.ajaxPrefilter("json jsonp", function (t, n, i) {
    var o,
        r,
        s,
        a = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = ve.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Xt, "$1" + o) : !1 !== t.jsonp && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return s || ve.error(o + " was not called"), s[0];
    }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === r ? ve(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ut.push(o)), s && ve.isFunction(r) && r(s[0]), s = r = void 0;
    }), "script";
  }), fe.createHTMLDocument = function () {
    var e = ne.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), ve.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, r;return t || (fe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), o = Se.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && ve(r).remove(), ve.merge([], o.childNodes));
  }, ve.fn.load = function (e, t, n) {
    var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");return a > -1 && (i = Y(e.slice(a)), e = e.slice(0, a)), ve.isFunction(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (o = "POST"), s.length > 0 && ve.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function (e) {
      r = arguments, s.html(i ? ve("<div>").append(ve.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, r || [e.responseText, t, e]);
      });
    }), this;
  }, ve.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ve.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ve.expr.pseudos.animated = function (e) {
    return ve.grep(ve.timers, function (t) {
      return e === t.elem;
    }).length;
  }, ve.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d = ve.css(e, "position"),
          u = ve(e),
          p = {};"static" === d && (e.style.position = "relative"), a = u.offset(), r = ve.css(e, "top"), l = ve.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, c ? (i = u.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ve.isFunction(t) && (t = t.call(e, n, ve.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p);
    } }, ve.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        ve.offset.setOffset(this, e, t);
      });var t,
          n,
          i,
          o,
          r = this[0];if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, { top: i.top + o.pageYOffset - n.clientTop, left: i.left + o.pageXOffset - n.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };return "fixed" === ve.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (i = e.offset()), i = { top: i.top + ve.css(e[0], "borderTopWidth", !0), left: i.left + ve.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - ve.css(n, "marginTop", !0), left: t.left - i.left - ve.css(n, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === ve.css(e, "position");) {
          e = e.offsetParent;
        }return e || Qe;
      });
    } }), ve.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;ve.fn[e] = function (i) {
      return Le(this, function (e, i, o) {
        var r;if (ve.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
      }, e, i, arguments.length);
    };
  }), ve.each(["top", "left"], function (e, t) {
    ve.cssHooks[t] = L(fe.pixelPosition, function (e, n) {
      if (n) return n = N(e, t), st.test(n) ? ve(e).position()[t] + "px" : n;
    });
  }), ve.each({ Height: "height", Width: "width" }, function (e, t) {
    ve.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      ve.fn[i] = function (o, r) {
        var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");return Le(this, function (t, n, o) {
          var r;return ve.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? ve.css(t, n, a) : ve.style(t, n, o, a);
        }, t, s ? o : void 0, s);
      };
    });
  }), ve.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), ve.holdReady = function (e) {
    e ? ve.readyWait++ : ve.ready(!0);
  }, ve.isArray = Array.isArray, ve.parseJSON = JSON.parse, ve.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ve;
  });var _t = e.jQuery,
      Yt = e.$;return ve.noConflict = function (t) {
    return e.$ === ve && (e.$ = Yt), t && e.jQuery === ve && (e.jQuery = _t), ve;
  }, t || (e.jQuery = e.$ = ve), ve;
}), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";
  var t = window.Slick || {};(t = function () {
    var t = 0;return function (n, i) {
      var o,
          r = this;r.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: e(n), appendDots: e(n), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(t, n) {
          return e('<button type="button" />').text(n + 1);
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
    var o = this;if ("boolean" == typeof n) i = n, n = null;else if (n < 0 || n >= o.slideCount) return !1;o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
      e(n).attr("data-slick-index", t);
    }), o.$slidesCache = o.$slides, o.reinit();
  }, t.prototype.animateHeight = function () {
    var e = this;if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({ height: t }, e.options.speed);
    }
  }, t.prototype.animateSlide = function (t, n) {
    var i = {},
        o = this;o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({ animStart: o.currentLeft }).animate({ animStart: t }, { duration: o.options.speed, easing: o.options.easing, step: function step(e) {
        e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i));
      }, complete: function complete() {
        n && n.call();
      } })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
      o.disableTransition(), n.call();
    }, o.options.speed));
  }, t.prototype.getNavTarget = function () {
    var t = this,
        n = t.options.asNavFor;return n && null !== n && (n = e(n).not(t.$slider)), n;
  }, t.prototype.asNavFor = function (t) {
    var n = this.getNavTarget();null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n.each(function () {
      var n = e(this).slick("getSlick");n.unslicked || n.slideHandler(t, !0);
    });
  }, t.prototype.applyTransition = function (e) {
    var t = this,
        n = {};!1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
  }, t.prototype.autoPlay = function () {
    var e = this;e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
  }, t.prototype.autoPlayClear = function () {
    var e = this;e.autoPlayTimer && clearInterval(e.autoPlayTimer);
  }, t.prototype.autoPlayIterator = function () {
    var e = this,
        t = e.currentSlide + e.options.slidesToScroll;e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
  }, t.prototype.buildArrows = function () {
    var t = this;!0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, t.prototype.buildDots = function () {
    var t,
        n,
        i = this;if (!0 === i.options.dots) {
      for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) {
        n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
      }i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active");
    }
  }, t.prototype.buildOut = function () {
    var t = this;t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
      e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "");
    }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable");
  }, t.prototype.buildRows = function () {
    var e,
        t,
        n,
        i,
        o,
        r,
        s,
        a = this;if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
      for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
        var l = document.createElement("div");for (t = 0; t < a.options.rows; t++) {
          var c = document.createElement("div");for (n = 0; n < a.options.slidesPerRow; n++) {
            var d = e * s + (t * a.options.slidesPerRow + n);r.get(d) && c.appendChild(r.get(d));
          }l.appendChild(c);
        }i.appendChild(l);
      }a.$slider.empty().append(i), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, t.prototype.checkResponsive = function (t, n) {
    var i,
        o,
        r,
        s = this,
        a = !1,
        l = s.$slider.width(),
        c = window.innerWidth || e(window).width();if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
      o = null;for (i in s.breakpoints) {
        s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
      }null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
    }
  }, t.prototype.changeSlide = function (t, n) {
    var i,
        o,
        r,
        s = this,
        a = e(t.currentTarget);switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {case "previous":
        o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);break;case "next":
        o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);break;case "index":
        var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");break;default:
        return;}
  }, t.prototype.checkNavigable = function (e) {
    var t, n;if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];else for (var i in t) {
      if (e < t[i]) {
        e = n;break;
      }n = t[i];
    }return e;
  }, t.prototype.cleanUpEvents = function () {
    var t = this;t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
  }, t.prototype.cleanUpSlideEvents = function () {
    var t = this;t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
  }, t.prototype.cleanUpRows = function () {
    var e,
        t = this;t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
  }, t.prototype.clickHandler = function (e) {
    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
  }, t.prototype.destroy = function (t) {
    var n = this;n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      e(this).attr("style", e(this).data("originalStyling"));
    }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n]);
  }, t.prototype.disableTransition = function (e) {
    var t = this,
        n = {};n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
  }, t.prototype.fadeSlide = function (e, t) {
    var n = this;!1 === n.cssTransitions ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }), t && setTimeout(function () {
      n.disableTransition(e), t.call();
    }, n.options.speed));
  }, t.prototype.fadeSlideOut = function (e) {
    var t = this;!1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
  }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
    var t = this;null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
  }, t.prototype.focusHandler = function () {
    var t = this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
      n.stopImmediatePropagation();var i = e(this);setTimeout(function () {
        t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay());
      }, 0);
    });
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, t.prototype.getDotCount = function () {
    var e = this,
        t = 0,
        n = 0,
        i = 0;if (!0 === e.options.infinite) {
      if (e.slideCount <= e.options.slidesToShow) ++i;else for (; t < e.slideCount;) {
        ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      }
    } else if (!0 === e.options.centerMode) i = e.slideCount;else if (e.options.asNavFor) for (; t < e.slideCount;) {
      ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    } else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);return i - 1;
  }, t.prototype.getLeft = function (e) {
    var t,
        n,
        i,
        o,
        r = this,
        s = 0;return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t;
  }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
    return this.options[e];
  }, t.prototype.getNavigableIndexes = function () {
    var e,
        t = this,
        n = 0,
        i = 0,
        o = [];for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) {
      o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    }return o;
  }, t.prototype.getSlick = function () {
    return this;
  }, t.prototype.getSlideCount = function () {
    var t,
        n,
        i = this;return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
      if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1;
    }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll;
  }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
    this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
  }, t.prototype.init = function (t) {
    var n = this;e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay());
  }, t.prototype.initADA = function () {
    var t = this,
        n = Math.ceil(t.slideCount / t.options.slidesToShow),
        i = t.getNavigableIndexes().filter(function (e) {
      return e >= 0 && e < t.slideCount;
    });t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
      var o = i.indexOf(n);e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1 }), -1 !== o && e(this).attr({ "aria-describedby": "slick-slide-control" + t.instanceUid + o });
    }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
      var r = i[o];e(this).attr({ role: "presentation" }), e(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + t.instanceUid + o, "aria-controls": "slick-slide" + t.instanceUid + r, "aria-label": o + 1 + " of " + n, "aria-selected": null, tabindex: "-1" });
    }).eq(t.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) {
      t.$slides.eq(o).attr("tabindex", 0);
    }t.activateADA();
  }, t.prototype.initArrowEvents = function () {
    var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
  }, t.prototype.initDotEvents = function () {
    var t = this;!0 === t.options.dots && (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
  }, t.prototype.initSlideEvents = function () {
    var t = this;t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
  }, t.prototype.initializeEvents = function () {
    var t = this;t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition);
  }, t.prototype.initUI = function () {
    var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
  }, t.prototype.keyHandler = function (e) {
    var t = this;e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
  }, t.prototype.lazyLoad = function () {
    function t(t) {
      e("img[data-lazy]", t).each(function () {
        var t = e(this),
            n = e(this).attr("data-lazy"),
            i = e(this).attr("data-srcset"),
            o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            s = document.createElement("img");s.onload = function () {
          t.animate({ opacity: 0 }, 100, function () {
            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({ opacity: 1 }, 200, function () {
              t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), r.$slider.trigger("lazyLoaded", [r, t, n]);
          });
        }, s.onerror = function () {
          t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]);
        }, s.src = n;
      });
    }var n,
        i,
        o,
        r = this;if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)), n = r.$slider.find(".slick-slide").slice(i, o), "anticipated" === r.options.lazyLoad) for (var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) {
      s < 0 && (s = r.slideCount - 1), n = (n = n.add(l.eq(s))).add(l.eq(a)), s--, a++;
    }t(n), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
  }, t.prototype.loadSlider = function () {
    var e = this;e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
  }, t.prototype.next = t.prototype.slickNext = function () {
    this.changeSlide({ data: { message: "next" } });
  }, t.prototype.orientationChange = function () {
    var e = this;e.checkResponsive(), e.setPosition();
  }, t.prototype.pause = t.prototype.slickPause = function () {
    var e = this;e.autoPlayClear(), e.paused = !0;
  }, t.prototype.play = t.prototype.slickPlay = function () {
    var e = this;e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
  }, t.prototype.postSlide = function (t) {
    var n = this;n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
  }, t.prototype.prev = t.prototype.slickPrev = function () {
    this.changeSlide({ data: { message: "previous" } });
  }, t.prototype.preventDefault = function (e) {
    e.preventDefault();
  }, t.prototype.progressiveLazyLoad = function (t) {
    t = t || 1;var n,
        i,
        o,
        r,
        s,
        a = this,
        l = e("img[data-lazy]", a.$slider);l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
      o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad();
    }, s.onerror = function () {
      t < 3 ? setTimeout(function () {
        a.progressiveLazyLoad(t + 1);
      }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
    }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a]);
  }, t.prototype.refresh = function (t) {
    var n,
        i,
        o = this;i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, { currentSlide: n }), o.init(), t || o.changeSlide({ data: { message: "index", index: n } }, !1);
  }, t.prototype.registerBreakpoints = function () {
    var t,
        n,
        i,
        o = this,
        r = o.options.responsive || null;if ("array" === e.type(r) && r.length) {
      o.respondTo = o.options.respondTo || "window";for (t in r) {
        if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
          for (n = r[t].breakpoint; i >= 0;) {
            o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
          }o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings;
        }
      }o.breakpoints.sort(function (e, t) {
        return o.options.mobileFirst ? e - t : t - e;
      });
    }
  }, t.prototype.reinit = function () {
    var t = this;t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]);
  }, t.prototype.resize = function () {
    var t = this;e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
      t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
    }, 50));
  }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
    var i = this;if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit();
  }, t.prototype.setCSS = function (e) {
    var t,
        n,
        i = this,
        o = {};!0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)));
  }, t.prototype.setDimensions = function () {
    var e = this;!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
  }, t.prototype.setFade = function () {
    var t,
        n = this;n.$slides.each(function (i, o) {
      t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(o).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
    }), n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
  }, t.prototype.setHeight = function () {
    var e = this;if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height", t);
    }
  }, t.prototype.setOption = t.prototype.slickSetOption = function () {
    var t,
        n,
        i,
        o,
        r,
        s = this,
        a = !1;if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;else if ("multiple" === r) e.each(i, function (e, t) {
      s.options[e] = t;
    });else if ("responsive" === r) for (n in o) {
      if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];else {
        for (t = s.options.responsive.length - 1; t >= 0;) {
          s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
        }s.options.responsive.push(o[n]);
      }
    }a && (s.unload(), s.reinit());
  }, t.prototype.setPosition = function () {
    var e = this;e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
  }, t.prototype.setProps = function () {
    var e = this,
        t = document.body.style;e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
  }, t.prototype.setSlideClasses = function (e) {
    var t,
        n,
        i,
        o,
        r = this;if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
      var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center");
    } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));"ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad();
  }, t.prototype.setupInfinite = function () {
    var t,
        n,
        i,
        o = this;if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
      for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) {
        n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
      }for (t = 0; t < i + o.slideCount; t += 1) {
        n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
      }o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        e(this).attr("id", "");
      });
    }
  }, t.prototype.interrupt = function (e) {
    var t = this;e || t.autoPlay(), t.interrupted = e;
  }, t.prototype.selectHandler = function (t) {
    var n = this,
        i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
        o = parseInt(i.attr("data-slick-index"));o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
  }, t.prototype.slideHandler = function (e, t, n) {
    var i,
        o,
        r,
        s,
        a,
        l = null,
        c = this;if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
      c.postSlide(i);
    }) : c.postSlide(i));else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
      c.postSlide(i);
    }) : c.postSlide(i));else {
      if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
        c.postSlide(o);
      })) : c.postSlide(o), void c.animateHeight();!0 !== n ? c.animateSlide(l, function () {
        c.postSlide(o);
      }) : c.postSlide(o);
    }
  }, t.prototype.startLoad = function () {
    var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading");
  }, t.prototype.swipeDirection = function () {
    var e,
        t,
        n,
        i,
        o = this;return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical";
  }, t.prototype.swipeEnd = function (e) {
    var t,
        n,
        i = this;if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
      switch (n = i.swipeDirection()) {case "left":case "down":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;break;case "right":case "up":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1;}"vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]));
    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
  }, t.prototype.swipeHandler = function (e) {
    var t = this;if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {case "start":
        t.swipeStart(e);break;case "move":
        t.swipeMove(e);break;case "end":
        t.swipeEnd(e);}
  }, t.prototype.swipeMove = function (e) {
    var t,
        n,
        i,
        o,
        r,
        s,
        a = this;return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))));
  }, t.prototype.swipeStart = function (e) {
    var t,
        n = this;if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0;
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
    var e = this;null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
  }, t.prototype.unload = function () {
    var t = this;e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, t.prototype.unslick = function (e) {
    var t = this;t.$slider.trigger("unslick", [t, e]), t.destroy();
  }, t.prototype.updateArrows = function () {
    var e = this;Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, t.prototype.updateDots = function () {
    var e = this;null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"));
  }, t.prototype.visibility = function () {
    var e = this;e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
  }, e.fn.slick = function () {
    var e,
        n,
        i = this,
        o = arguments[0],
        r = Array.prototype.slice.call(arguments, 1),
        s = i.length;for (e = 0; e < s; e++) {
      if ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
    }return i;
  };
});