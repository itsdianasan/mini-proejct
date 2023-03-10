!function t(e, n, r) {
    function o(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var u = "function" == typeof require && require;
                if (!a && u)
                    return u(s, !0);
                if (i)
                    return i(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var f = n[s] = {
                exports: {}
            };
            e[s][0].call(f.exports, (function(t) {
                return o(e[s][1][t] || t)
            }
            ), f, f.exports, t, e, n, r)
        }
        return n[s].exports
    }
    for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)
        o(r[s]);
    return o
}({
    1: [function(t, e, n) {
        "use strict";
        var r = t(3)("mask-image", "linear-gradient(#000, #fff)");
        e.exports = r
    }
    , {
        3: 3
    }],
    2: [function(t, e, n) {
        "use strict";
        var r = {
            "css-mask": t(1)
        };
        e.exports = r
    }
    , {
        1: 1
    }],
    3: [function(t, e, n) {
        "use strict";
        var r = t(20)
          , o = t(19)
          , i = t(6);
        function s(t, e) {
            return void 0 !== e ? !!r(t, e) : !!o(t)
        }
        e.exports = i(s),
        e.exports.original = s
    }
    , {
        19: 19,
        20: 20,
        6: 6
    }],
    4: [function(t, e, n) {
        "use strict";
        e.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return document
            },
            getNavigator: function() {
                return navigator
            }
        }
    }
    , {}],
    5: [function(t, e, n) {
        "use strict";
        var r = t(4)
          , o = t(7);
        function i() {
            var t = r.getWindow()
              , e = r.getDocument()
              , n = r.getNavigator();
            return !!("ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch || n.maxTouchPoints > 0 || n.msMaxTouchPoints > 0)
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        4: 4,
        7: 7
    }],
    6: [function(t, e, n) {
        "use strict";
        var r = function() {
            var t, e = "";
            for (t = 0; t < arguments.length; t++)
                t > 0 && (e += ","),
                e += arguments[t];
            return e
        };
        e.exports = function(t, e) {
            e = e || r;
            var n = function n() {
                var r = arguments
                  , o = e.apply(this, r);
                return o in n.cache || (n.cache[o] = t.apply(this, r)),
                n.cache[o]
            };
            return n.cache = {},
            n
        }
    }
    , {}],
    7: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)),
                e
            }
        }
    }
    , {}],
    8: [function(t, e, n) {}
    , {}],
    9: [function(t, e, n) {
        "use strict";
        var r = function(t, e) {
            this._target = t,
            this._tests = {},
            this.addTests(e)
        }
          , o = r.prototype;
        o.addTests = function(t) {
            this._tests = Object.assign(this._tests, t)
        }
        ,
        o._supports = function(t) {
            return void 0 !== this._tests[t] && ("function" == typeof this._tests[t] && (this._tests[t] = this._tests[t]()),
            this._tests[t])
        }
        ,
        o._addClass = function(t, e) {
            e = e || "no-",
            this._supports(t) ? this._target.classList.add(t) : this._target.classList.add(e + t)
        }
        ,
        o.htmlClass = function() {
            var t;
            for (t in this._target.classList.remove("no-js"),
            this._target.classList.add("js"),
            this._tests)
                this._tests.hasOwnProperty(t) && this._addClass(t)
        }
        ,
        e.exports = r
    }
    , {}],
    10: [function(t, e, n) {
        "use strict";
        function r(t, e) {
            this._target = t || document.body,
            this._attr = e || "data-focus-method",
            this._focusMethod = this._lastFocusMethod = !1,
            this._onKeyDown = this._onKeyDown.bind(this),
            this._onMouseDown = this._onMouseDown.bind(this),
            this._onTouchStart = this._onTouchStart.bind(this),
            this._onFocus = this._onFocus.bind(this),
            this._onBlur = this._onBlur.bind(this),
            this._onWindowBlur = this._onWindowBlur.bind(this),
            this._bindEvents()
        }
        var o = r.prototype;
        o._bindEvents = function() {
            this._target.addEventListener("keydown", this._onKeyDown, !0),
            this._target.addEventListener("mousedown", this._onMouseDown, !0),
            this._target.addEventListener("touchstart", this._onTouchStart, !0),
            this._target.addEventListener("focus", this._onFocus, !0),
            this._target.addEventListener("blur", this._onBlur, !0),
            window.addEventListener("blur", this._onWindowBlur)
        }
        ,
        o._onKeyDown = function(t) {
            this._focusMethod = "key"
        }
        ,
        o._onMouseDown = function(t) {
            "touch" !== this._focusMethod && (this._focusMethod = "mouse")
        }
        ,
        o._onTouchStart = function(t) {
            this._focusMethod = "touch"
        }
        ,
        o._onFocus = function(t) {
            this._focusMethod || (this._focusMethod = this._lastFocusMethod),
            t.target.setAttribute(this._attr, this._focusMethod),
            this._lastFocusMethod = this._focusMethod,
            this._focusMethod = !1
        }
        ,
        o._onBlur = function(t) {
            t.target.removeAttribute(this._attr)
        }
        ,
        o._onWindowBlur = function(t) {
            this._focusMethod = !1
        }
        ,
        e.exports = r
    }
    , {}],
    11: [function(t, e, n) {
        "use strict";
        t(8);
        var r = t(9)
          , o = t(12);
        e.exports = new r(document.documentElement,o),
        e.exports.FeatureDetect = r;
        var i = t(10);
        document.addEventListener && document.addEventListener("DOMContentLoaded", (function() {
            new i
        }
        ))
    }
    , {
        10: 10,
        12: 12,
        8: 8,
        9: 9
    }],
    12: [function(t, e, n) {
        "use strict";
        var r = t(5);
        e.exports = {
            touch: r,
            "progressive-image": !0
        }
    }
    , {
        5: 5
    }],
    13: [function(t, e, n) {
        "use strict";
        e.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }
    , {}],
    14: [function(t, e, n) {
        "use strict";
        e.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(t) {
                    return t.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === t.ua
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && -1 === t.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(t) {
                    return t.ua.indexOf("Safari") > -1 && t.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(t) {
                    return t.ua.indexOf("IE") > -1 || t.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var t = !1;
                    return document.documentMode && (t = parseInt(document.documentMode, 10)),
                    t
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }],
            os: [{
                name: "windows",
                test: function(t) {
                    return t.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(t) {
                    return t.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function(t) {
                    return t.ua.indexOf("iPhone") > -1 || t.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(t) {
                    return (t.ua.indexOf("Linux") > -1 || t.platform.indexOf("Linux") > -1) && -1 === t.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function(t) {
                    return t.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }
    , {}],
    15: [function(t, e, n) {
        "use strict";
        var r = t(13)
          , o = t(14);
        function i(t, e) {
            if ("function" == typeof t.parseVersion)
                return t.parseVersion(e);
            var n, r = t.version || t.userAgent;
            "string" == typeof r && (r = [r]);
            for (var o, i = r.length, s = 0; s < i; s++)
                if ((o = e.match((n = r[s],
                new RegExp(n + "[a-zA-Z\\s/:]+([0-9_.]+)","i")))) && o.length > 1)
                    return o[1].replace(/_/g, ".");
            return !1
        }
        function s(t, e, n) {
            for (var r, o, s = t.length, a = 0; a < s; a++)
                if ("function" == typeof t[a].test ? !0 === t[a].test(n) && (r = t[a].name) : n.ua.indexOf(t[a].userAgent) > -1 && (r = t[a].name),
                r) {
                    if (e[r] = !0,
                    "string" == typeof (o = i(t[a], n.ua))) {
                        var u = o.split(".");
                        e.version.string = o,
                        u && u.length > 0 && (e.version.major = parseInt(u[0] || 0),
                        e.version.minor = parseInt(u[1] || 0),
                        e.version.patch = parseInt(u[2] || 0))
                    } else
                        "edge" === r && (e.version.string = "12.0.0",
                        e.version.major = "12",
                        e.version.minor = "0",
                        e.version.patch = "0");
                    return "function" == typeof t[a].parseDocumentMode && (e.version.documentMode = t[a].parseDocumentMode()),
                    e
                }
            return e
        }
        e.exports = function(t) {
            var e = {};
            return e.browser = s(o.browser, r.browser, t),
            e.os = s(o.os, r.os, t),
            e
        }
    }
    , {
        13: 13,
        14: 14
    }],
    16: [function(t, e, n) {
        "use strict";
        var r = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        e.exports = t(15)(r)
    }
    , {
        15: 15
    }],
    17: [function(t, e, n) {
        "use strict";
        var r = t(11)
          , o = t(16)
          , i = t(2)
          , s = window.matchMedia("(prefers-reduced-motion)").matches;
        e.exports = function() {
            return r.addTests({
                "reduced-motion": s,
                edge: o.browser.edge,
                ie: o.browser.ie,
                "css-mask": i
            }),
            r.htmlClass(),
            r
        }
    }
    , {
        11: 11,
        16: 16,
        2: 2
    }],
    18: [function(t, e, n) {
        "use strict";
        var r = t(27)
          , o = t(21)
          , i = t(26)
          , s = t(23)
          , a = {};
        e.exports = function t(e, n) {
            var u, c, f;
            if (n = n || "div",
            e = e.toLowerCase(),
            n in a || (a[n] = {}),
            e in (c = a[n]))
                return c[e];
            if (r(e, n))
                return c[e] = e;
            if (e in o)
                for (f = 0; f < o[e].length; f++)
                    if (u = o[e][f],
                    r(u.toLowerCase(), n))
                        return c[e] = u;
            for (f = 0; f < s.evt.length; f++)
                if (u = s.evt[f] + e,
                r(u, n))
                    return s.reduce(f),
                    c[e] = u;
            return "window" !== n && i.indexOf(e) ? c[e] = t(e, "window") : c[e] = !1
        }
    }
    , {
        21: 21,
        23: 23,
        26: 26,
        27: 27
    }],
    19: [function(t, e, n) {
        "use strict";
        var r = t(24)
          , o = t(22)
          , i = t(28)
          , s = t(29)
          , a = t(23)
          , u = function(t, e) {
            var n = i(t)
              , o = !1 !== e && i(e);
            return r[t] = r[e] = r[n] = r[o] = {
                dom: e,
                css: o
            },
            e
        };
        e.exports = function(t) {
            var e, n, i, c;
            if ((t += "")in r)
                return r[t].dom;
            for (i = o(),
            n = (t = s(t)).charAt(0).toUpperCase() + t.substring(1),
            e = "filter" === t ? ["WebkitFilter", "filter"] : (t + " " + a.dom.join(n + " ") + n).split(" "),
            c = 0; c < e.length; c++)
                if (void 0 !== i.style[e[c]])
                    return 0 !== c && a.reduce(c - 1),
                    u(t, e[c]);
            return u(t, !1)
        }
    }
    , {
        22: 22,
        23: 23,
        24: 24,
        28: 28,
        29: 29
    }],
    20: [function(t, e, n) {
        "use strict";
        var r = t(19)
          , o = t(25)
          , i = t(23)
          , s = t(24)
          , a = {}
          , u = /(\([^\)]+\))/gi
          , c = /([^ ,;\(]+(\([^\)]+\))?)/gi;
        e.exports = function(t, e) {
            var n;
            return e += "",
            !!(t = r(t)) && (o(t, e) ? e : (n = s[t].css,
            "" !== (e = (e = e.replace(c, (function(e) {
                var r, s, c, f;
                if ("#" === e[0] || !isNaN(e[0]))
                    return e;
                if (s = e.replace(u, ""),
                (c = n + ":" + s)in a)
                    return !1 === a[c] ? "" : e.replace(s, a[c]);
                for (r = i.css.map((function(t) {
                    return t + e
                }
                )),
                r = [e].concat(r),
                f = 0; f < r.length; f++)
                    if (o(t, r[f]))
                        return 0 !== f && i.reduce(f - 1),
                        a[c] = r[f].replace(u, ""),
                        r[f];
                return a[c] = !1,
                ""
            }
            ))).trim()) && e))
        }
    }
    , {
        19: 19,
        23: 23,
        24: 24,
        25: 25
    }],
    21: [function(t, e, n) {
        "use strict";
        e.exports = {
            transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
            animationstart: ["webkitAnimationStart", "MSAnimationStart"],
            animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
            animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
            fullscreenchange: ["MSFullscreenChange"],
            fullscreenerror: ["MSFullscreenError"]
        }
    }
    , {}],
    22: [function(t, e, n) {
        "use strict";
        var r;
        e.exports = function() {
            return r ? (r.style.cssText = "",
            r.removeAttribute("style")) : r = document.createElement("_"),
            r
        }
        ,
        e.exports.resetElement = function() {
            r = null
        }
    }
    , {}],
    23: [function(t, e, n) {
        "use strict";
        var r = ["-webkit-", "-moz-", "-ms-"]
          , o = ["Webkit", "Moz", "ms"]
          , i = ["webkit", "moz", "ms"]
          , s = function() {
            this.initialize()
        }
          , a = s.prototype;
        a.initialize = function() {
            this.reduced = !1,
            this.css = r,
            this.dom = o,
            this.evt = i
        }
        ,
        a.reduce = function(t) {
            this.reduced || (this.reduced = !0,
            this.css = [this.css[t]],
            this.dom = [this.dom[t]],
            this.evt = [this.evt[t]])
        }
        ,
        e.exports = new s
    }
    , {}],
    24: [function(t, e, n) {
        "use strict";
        e.exports = {}
    }
    , {}],
    25: [function(t, e, n) {
        "use strict";
        var r, o, i = t(24), s = t(22), a = !1;
        e.exports = function(t, e) {
            var n, u;
            if (function() {
                var t;
                if (!a) {
                    a = !0,
                    r = "CSS"in window && "supports"in window.CSS,
                    o = !1,
                    t = s();
                    try {
                        t.style.width = "invalid"
                    } catch (t) {
                        o = !0
                    }
                }
            }(),
            r)
                return t = i[t].css,
                CSS.supports(t, e);
            if (n = (u = s()).style[t],
            o)
                try {
                    u.style[t] = e
                } catch (t) {
                    return !1
                }
            else
                u.style[t] = e;
            return u.style[t] && u.style[t] !== n
        }
        ,
        e.exports.resetFlags = function() {
            a = !1
        }
    }
    , {
        22: 22,
        24: 24
    }],
    26: [function(t, e, n) {
        "use strict";
        e.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
    }
    , {}],
    27: [function(t, e, n) {
        "use strict";
        var r = {
            window: window,
            document: document
        };
        e.exports = function(t, e) {
            var n;
            return t = "on" + t,
            e in r || (r[e] = document.createElement(e)),
            t in (n = r[e]) || "setAttribute"in n && (n.setAttribute(t, "return;"),
            "function" == typeof n[t])
        }
    }
    , {}],
    28: [function(t, e, n) {
        "use strict";
        var r = /^(webkit|moz|ms)/gi;
        e.exports = function(t) {
            return "cssfloat" === t.toLowerCase() ? "float" : (r.test(t) && (t = "-" + t),
            t.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase())
        }
    }
    , {}],
    29: [function(t, e, n) {
        "use strict";
        var r = /-([a-z])/g;
        e.exports = function(t) {
            return "float" === t.toLowerCase() ? "cssFloat" : ("Ms" === (t = t.replace(r, (function(t, e) {
                return e.toUpperCase()
            }
            ))).substr(0, 2) && (t = "ms" + t.substring(2)),
            t)
        }
    }
    , {}],
    30: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54)
          , i = function() {
            var t = r.getDocument().createElement("canvas");
            return !("function" != typeof t.getContext || !t.getContext("2d"))
        };
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    31: [function(t, e, n) {
        "use strict";
        var r = t(58)
          , o = t(51).original
          , i = t(54);
        function s() {
            return !o() || r.os.ios && r.os.version.major >= 8 || r.browser.chrome
        }
        e.exports = i(s),
        e.exports.original = s
    }
    , {
        51: 51,
        54: 54,
        58: 58
    }],
    32: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54);
        function i() {
            var t = !1
              , e = r.getDocument()
              , n = r.getNavigator();
            try {
                "cookie"in e && n.cookieEnabled && (e.cookie = "ac_feature_cookie=1",
                t = -1 !== e.cookie.indexOf("ac_feature_cookie"),
                e.cookie = "ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")
            } catch (t) {}
            return t
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    33: [function(t, e, n) {
        "use strict";
        var r = t(20)
          , o = t(54);
        function i() {
            return ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"].some((function(t) {
                return !!r("background-image", t)
            }
            ))
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        20: 20,
        54: 54
    }],
    34: [function(t, e, n) {
        "use strict";
        var r = t(20)
          , o = t(19)
          , i = t(53);
        function s(t, e) {
            return void 0 !== e ? !!r(t, e) : !!o(t)
        }
        e.exports = i(s),
        e.exports.original = s
    }
    , {
        19: 19,
        20: 20,
        53: 53
    }],
    35: [function(t, e, n) {
        "use strict";
        var r = t(20)
          , o = t(54);
        function i() {
            return !!r("margin", "1vw 1vh")
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        20: 20,
        54: 54
    }],
    36: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(53);
        function i(t, e) {
            return e = e || "div",
            t in r.getDocument().createElement(e)
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        53: 53
    }],
    37: [function(t, e, n) {
        "use strict";
        var r = t(18)
          , o = t(53);
        function i(t, e) {
            return !!r(t, e)
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        18: 18,
        53: 53
    }],
    38: [function(t, e, n) {
        "use strict";
        e.exports = {
            canvasAvailable: t(30),
            continuousScrollEventsAvailable: t(31),
            cookiesAvailable: t(32),
            cssLinearGradientAvailable: t(33),
            cssPropertyAvailable: t(34),
            cssViewportUnitsAvailable: t(35),
            elementAttributeAvailable: t(36),
            eventTypeAvailable: t(37),
            isDesktop: t(40),
            isHandheld: t(41),
            isRetina: t(42),
            isTablet: t(43),
            localStorageAvailable: t(44),
            mediaElementsAvailable: t(45),
            mediaQueriesAvailable: t(46),
            prefersReducedMotion: t(47),
            sessionStorageAvailable: t(48),
            svgAvailable: t(49),
            threeDTransformsAvailable: t(50),
            touchAvailable: t(51),
            webGLAvailable: t(52)
        }
    }
    , {
        30: 30,
        31: 31,
        32: 32,
        33: 33,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
        40: 40,
        41: 41,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        49: 49,
        50: 50,
        51: 51,
        52: 52
    }],
    39: [function(t, e, n) {
        "use strict";
        e.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return document
            },
            getNavigator: function() {
                return navigator
            }
        }
    }
    , {}],
    40: [function(t, e, n) {
        "use strict";
        var r = t(58).os
          , o = t(51).original
          , i = t(39)
          , s = t(54);
        function a() {
            var t = i.getWindow();
            return !o() && !t.orientation || r.windows
        }
        e.exports = s(a),
        e.exports.original = a
    }
    , {
        39: 39,
        51: 51,
        54: 54,
        58: 58
    }],
    41: [function(t, e, n) {
        "use strict";
        var r = t(40).original
          , o = t(43).original
          , i = t(54);
        function s() {
            return !r() && !o()
        }
        e.exports = i(s),
        e.exports.original = s
    }
    , {
        40: 40,
        43: 43,
        54: 54
    }],
    42: [function(t, e, n) {
        "use strict";
        var r = t(39);
        e.exports = function() {
            var t = r.getWindow();
            return "devicePixelRatio"in t && t.devicePixelRatio >= 1.5
        }
    }
    , {
        39: 39
    }],
    43: [function(t, e, n) {
        "use strict";
        var r = t(40).original
          , o = t(39)
          , i = t(54);
        function s() {
            var t = o.getWindow()
              , e = t.screen.width;
            return t.orientation && t.screen.height < e && (e = t.screen.height),
            !r() && e >= 600
        }
        e.exports = i(s),
        e.exports.original = s
    }
    , {
        39: 39,
        40: 40,
        54: 54
    }],
    44: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54);
        function i() {
            var t = r.getWindow()
              , e = !1;
            try {
                e = !(!t.localStorage || null === t.localStorage.non_existent)
            } catch (t) {}
            return e
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    45: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54);
        function i() {
            return "HTMLMediaElement"in r.getWindow()
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    46: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54);
        function i() {
            var t = r.getWindow().matchMedia("only all");
            return !(!t || !t.matches)
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    47: [function(t, e, n) {
        "use strict";
        var r = t(39);
        e.exports = function() {
            var t = r.getWindow().matchMedia("(prefers-reduced-motion)");
            return !(!t || !t.matches)
        }
    }
    , {
        39: 39
    }],
    48: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54);
        function i() {
            var t = r.getWindow()
              , e = !1;
            try {
                "sessionStorage"in t && "function" == typeof t.sessionStorage.setItem && (t.sessionStorage.setItem("ac_feature", "test"),
                e = !0,
                t.sessionStorage.removeItem("ac_feature", "test"))
            } catch (t) {}
            return e
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    49: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54);
        function i() {
            return !!r.getDocument().implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    50: [function(t, e, n) {
        "use strict";
        var r = t(20)
          , o = t(54);
        function i() {
            return !(!r("perspective", "1px") || !r("transform", "translateZ(0)"))
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        20: 20,
        54: 54
    }],
    51: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54);
        function i() {
            var t = r.getWindow()
              , e = r.getDocument()
              , n = r.getNavigator();
            return !!("ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch || n.maxTouchPoints > 0 || n.msMaxTouchPoints > 0)
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    52: [function(t, e, n) {
        "use strict";
        var r = t(39)
          , o = t(54);
        function i() {
            var t = r.getDocument().createElement("canvas");
            return "function" == typeof t.getContext && !(!t.getContext("webgl") && !t.getContext("experimental-webgl"))
        }
        e.exports = o(i),
        e.exports.original = i
    }
    , {
        39: 39,
        54: 54
    }],
    53: [function(t, e, n) {
        "use strict";
        var r = function() {
            var t, e = "";
            for (t = 0; t < arguments.length; t++)
                t > 0 && (e += ","),
                e += arguments[t];
            return e
        };
        e.exports = function(t, e) {
            e = e || r;
            var n = function n() {
                var r = arguments
                  , o = e.apply(this, r);
                return o in n.cache || (n.cache[o] = t.apply(this, r)),
                n.cache[o]
            };
            return n.cache = {},
            n
        }
    }
    , {}],
    54: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)),
                e
            }
        }
    }
    , {}],
    55: [function(t, e, n) {
        "use strict";
        e.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                edgeChromium: !1,
                samsung: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }
    , {}],
    56: [function(t, e, n) {
        "use strict";
        e.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(t) {
                    return t.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === t.ua
                }
            }, {
                name: "edgeChromium",
                userAgent: "Edge",
                version: ["rv", "Edg"],
                test: function(t) {
                    return t.ua.indexOf("Edg") > -1 && -1 === t.ua.indexOf("Edge")
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && -1 === t.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(t) {
                    return t.ua.indexOf("Safari") > -1 && t.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(t) {
                    return t.ua.indexOf("IE") > -1 || t.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var t = !1;
                    return document.documentMode && (t = parseInt(document.documentMode, 10)),
                    t
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }, {
                name: "samsung",
                userAgent: "SamsungBrowser"
            }],
            os: [{
                name: "windows",
                test: function(t) {
                    return t.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(t) {
                    return t.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function(t) {
                    return t.ua.indexOf("iPhone") > -1 || t.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(t) {
                    return (t.ua.indexOf("Linux") > -1 || t.platform.indexOf("Linux") > -1) && -1 === t.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function(t) {
                    return t.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }
    , {}],
    57: [function(t, e, n) {
        "use strict";
        var r = t(55)
          , o = t(56);
        function i(t, e) {
            if ("function" == typeof t.parseVersion)
                return t.parseVersion(e);
            var n, r = t.version || t.userAgent;
            "string" == typeof r && (r = [r]);
            for (var o, i = r.length, s = 0; s < i; s++)
                if ((o = e.match((n = r[s],
                new RegExp(n + "[a-zA-Z\\s/:]+([0-9_.]+)","i")))) && o.length > 1)
                    return o[1].replace(/_/g, ".");
            return !1
        }
        function s(t, e, n) {
            for (var r, o, s = t.length, a = 0; a < s; a++)
                if ("function" == typeof t[a].test ? !0 === t[a].test(n) && (r = t[a].name) : n.ua.indexOf(t[a].userAgent) > -1 && (r = t[a].name),
                r) {
                    if (e[r] = !0,
                    "string" == typeof (o = i(t[a], n.ua))) {
                        var u = o.split(".");
                        e.version.string = o,
                        u && u.length > 0 && (e.version.major = parseInt(u[0] || 0),
                        e.version.minor = parseInt(u[1] || 0),
                        e.version.patch = parseInt(u[2] || 0))
                    } else
                        "edge" === r && (e.version.string = "12.0.0",
                        e.version.major = "12",
                        e.version.minor = "0",
                        e.version.patch = "0");
                    return "function" == typeof t[a].parseDocumentMode && (e.version.documentMode = t[a].parseDocumentMode()),
                    e
                }
            return e
        }
        e.exports = function(t) {
            var e = {};
            return e.browser = s(o.browser, r.browser, t),
            e.os = s(o.os, r.os, t),
            e
        }
    }
    , {
        55: 55,
        56: 56
    }],
    58: [function(t, e, n) {
        "use strict";
        var r = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        e.exports = t(57)(r)
    }
    , {
        57: 57
    }],
    59: [function(t, e, n) {
        "use strict";
        var r = t(17)();
        t(60)(r)
    }
    , {
        17: 17,
        60: 60
    }],
    60: [function(t, e, n) {
        "use strict";
        var r = t(58)
          , o = t(38)
          , i = t(40)
          , s = t(41)
          , a = t(43);
        e.exports = function(t) {
            const e = document.documentElement.classList.contains("aow")
              , n = document.documentElement.classList.contains("reduced-motion")
              , u = r.browser.edge
              , c = document.documentElement.classList.contains("aow")
              , f = r.os.android && r.browser.chrome;
            var d = function() {
                const t = r.os.ios && s && r.os.version.major < 9
                  , n = r.os.ios && a && r.os.version.major < 8
                  , o = r.os.android && r.os.version.major < 8;
                return !(t || n || o || e)
            }() && !t._tests["reduced-motion"];
            t.addTests({
                "inline-video": d,
                desktop: i(),
                retina: o.isRetina,
                safari: r.browser.safari,
                "old-safari": r.browser.safari && r.browser.version.major <= 12,
                chrome: r.browser.chrome,
                ios: r.os.ios,
                ipad: r.os.osx && navigator.maxTouchPoints > 1,
                android: r.os.android,
                firefox: r.browser.firefox,
                fallback: n || e || u,
                aow: c,
                edge: r.browser.edge,
                windows: r.os.windows,
                "enhanced-layout": !n && !r.browser.ie && !r.browser.edge && !c || f && !c,
                tablet: a
            }),
            t.htmlClass()
        }
    }
    , {
        38: 38,
        40: 40,
        41: 41,
        43: 43,
        58: 58
    }]
}, {}, [59]);
