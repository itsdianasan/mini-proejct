(function(rt) {
    typeof define == "function" && define.amd ? define(rt) : rt()
}
)(function() {
    "use strict";
    function rt(e, t) {
        return t.forEach(function(s) {
            s && typeof s != "string" && !Array.isArray(s) && Object.keys(s).forEach(function(n) {
                if (n !== "default" && !(n in e)) {
                    var a = Object.getOwnPropertyDescriptor(s, n);
                    Object.defineProperty(e, n, a.get ? a : {
                        enumerable: !0,
                        get: function() {
                            return s[n]
                        }
                    })
                }
            })
        }),
        Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }))
    }
    var Ze, N, jt, Gt, ze, Zt, zt, lt = {}, Kt = [], Sn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function ge(e, t) {
        for (var s in t)
            e[s] = t[s];
        return e
    }
    function Qt(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function Ke(e, t, s) {
        var n, a, i, l = {};
        for (i in t)
            i == "key" ? n = t[i] : i == "ref" ? a = t[i] : l[i] = t[i];
        if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ze.call(arguments, 2) : s),
        typeof e == "function" && e.defaultProps != null)
            for (i in e.defaultProps)
                l[i] === void 0 && (l[i] = e.defaultProps[i]);
        return Qe(e, l, n, a, null)
    }
    function Qe(e, t, s, n, a) {
        var i = {
            type: e,
            props: t,
            key: s,
            ref: n,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: a == null ? ++jt : a
        };
        return a == null && N.vnode != null && N.vnode(i),
        i
    }
    function En() {
        return {
            current: null
        }
    }
    function Q(e) {
        return e.children
    }
    function pe(e, t) {
        this.props = e,
        this.context = t
    }
    function Ye(e, t) {
        if (t == null)
            return e.__ ? Ye(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var s; t < e.__k.length; t++)
            if ((s = e.__k[t]) != null && s.__e != null)
                return s.__e;
        return typeof e.type == "function" ? Ye(e) : null
    }
    function Yt(e) {
        var t, s;
        if ((e = e.__) != null && e.__c != null) {
            for (e.__e = e.__c.base = null,
            t = 0; t < e.__k.length; t++)
                if ((s = e.__k[t]) != null && s.__e != null) {
                    e.__e = e.__c.base = s.__e;
                    break
                }
            return Yt(e)
        }
    }
    function St(e) {
        (!e.__d && (e.__d = !0) && ze.push(e) && !ct.__r++ || Zt !== N.debounceRendering) && ((Zt = N.debounceRendering) || setTimeout)(ct)
    }
    function ct() {
        for (var e; ct.__r = ze.length; )
            e = ze.sort(function(t, s) {
                return t.__v.__b - s.__v.__b
            }),
            ze = [],
            e.some(function(t) {
                var s, n, a, i, l, u;
                t.__d && (l = (i = (s = t).__v).__e,
                (u = s.__P) && (n = [],
                (a = ge({}, i)).__v = i.__v + 1,
                Et(u, i, a, s.__n, u.ownerSVGElement !== void 0, i.__h != null ? [l] : null, n, l == null ? Ye(i) : l, i.__h),
                is(n, i),
                i.__e != l && Yt(i)))
            })
    }
    function Jt(e, t, s, n, a, i, l, u, c, d) {
        var r, g, _, o, f, w, T, A = n && n.__k || Kt, b = A.length;
        for (s.__k = [],
        r = 0; r < t.length; r++)
            if ((o = s.__k[r] = (o = t[r]) == null || typeof o == "boolean" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" ? Qe(null, o, null, null, o) : Array.isArray(o) ? Qe(Q, {
                children: o
            }, null, null, null) : o.__b > 0 ? Qe(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null) {
                if (o.__ = s,
                o.__b = s.__b + 1,
                (_ = A[r]) === null || _ && o.key == _.key && o.type === _.type)
                    A[r] = void 0;
                else
                    for (g = 0; g < b; g++) {
                        if ((_ = A[g]) && o.key == _.key && o.type === _.type) {
                            A[g] = void 0;
                            break
                        }
                        _ = null
                    }
                Et(e, o, _ = _ || lt, a, i, l, u, c, d),
                f = o.__e,
                (g = o.ref) && _.ref != g && (T || (T = []),
                _.ref && T.push(_.ref, null, o),
                T.push(g, o.__c || f, o)),
                f != null ? (w == null && (w = f),
                typeof o.type == "function" && o.__k === _.__k ? o.__d = c = Xt(o, c, e) : c = es(e, o, _, A, f, c),
                typeof s.type == "function" && (s.__d = c)) : c && _.__e == c && c.parentNode != e && (c = Ye(_))
            }
        for (s.__e = w,
        r = b; r--; )
            A[r] != null && os(A[r], A[r]);
        if (T)
            for (r = 0; r < T.length; r++)
                as(T[r], T[++r], T[++r])
    }
    function Xt(e, t, s) {
        for (var n, a = e.__k, i = 0; a && i < a.length; i++)
            (n = a[i]) && (n.__ = e,
            t = typeof n.type == "function" ? Xt(n, t, s) : es(s, n, n, a, n.__e, t));
        return t
    }
    function Je(e, t) {
        return t = t || [],
        e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(s) {
            Je(s, t)
        }) : t.push(e)),
        t
    }
    function es(e, t, s, n, a, i) {
        var l, u, c;
        if (t.__d !== void 0)
            l = t.__d,
            t.__d = void 0;
        else if (s == null || a != i || a.parentNode == null)
            e: if (i == null || i.parentNode !== e)
                e.appendChild(a),
                l = null;
            else {
                for (u = i,
                c = 0; (u = u.nextSibling) && c < n.length; c += 2)
                    if (u == a)
                        break e;
                e.insertBefore(a, i),
                l = i
            }
        return l !== void 0 ? l : a.nextSibling
    }
    function Nn(e, t, s, n, a) {
        var i;
        for (i in s)
            i === "children" || i === "key" || i in t || ut(e, i, null, s[i], n);
        for (i in t)
            a && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || s[i] === t[i] || ut(e, i, t[i], s[i], n)
    }
    function ts(e, t, s) {
        t[0] === "-" ? e.setProperty(t, s) : e[t] = s == null ? "" : typeof s != "number" || Sn.test(t) ? s : s + "px"
    }
    function ut(e, t, s, n, a) {
        var i;
        e: if (t === "style")
            if (typeof s == "string")
                e.style.cssText = s;
            else {
                if (typeof n == "string" && (e.style.cssText = n = ""),
                n)
                    for (t in n)
                        s && t in s || ts(e.style, t, "");
                if (s)
                    for (t in s)
                        n && s[t] === n[t] || ts(e.style, t, s[t])
            }
        else if (t[0] === "o" && t[1] === "n")
            i = t !== (t = t.replace(/Capture$/, "")),
            t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
            e.l || (e.l = {}),
            e.l[t + i] = s,
            s ? n || e.addEventListener(t, i ? ns : ss, i) : e.removeEventListener(t, i ? ns : ss, i);
        else if (t !== "dangerouslySetInnerHTML") {
            if (a)
                t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
                try {
                    e[t] = s == null ? "" : s;
                    break e
                } catch {}
            typeof s == "function" || (s == null || s === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, s))
        }
    }
    function ss(e) {
        this.l[e.type + !1](N.event ? N.event(e) : e)
    }
    function ns(e) {
        this.l[e.type + !0](N.event ? N.event(e) : e)
    }
    function Et(e, t, s, n, a, i, l, u, c) {
        var d, r, g, _, o, f, w, T, A, b, S, E, O, R, V, q = t.type;
        if (t.constructor !== void 0)
            return null;
        s.__h != null && (c = s.__h,
        u = t.__e = s.__e,
        t.__h = null,
        i = [u]),
        (d = N.__b) && d(t);
        try {
            e: if (typeof q == "function") {
                if (T = t.props,
                A = (d = q.contextType) && n[d.__c],
                b = d ? A ? A.props.value : d.__ : n,
                s.__c ? w = (r = t.__c = s.__c).__ = r.__E : ("prototype"in q && q.prototype.render ? t.__c = r = new q(T,b) : (t.__c = r = new pe(T,b),
                r.constructor = q,
                r.render = Ln),
                A && A.sub(r),
                r.props = T,
                r.state || (r.state = {}),
                r.context = b,
                r.__n = n,
                g = r.__d = !0,
                r.__h = [],
                r._sb = []),
                r.__s == null && (r.__s = r.state),
                q.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = ge({}, r.__s)),
                ge(r.__s, q.getDerivedStateFromProps(T, r.__s))),
                _ = r.props,
                o = r.state,
                g)
                    q.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(),
                    r.componentDidMount != null && r.__h.push(r.componentDidMount);
                else {
                    if (q.getDerivedStateFromProps == null && T !== _ && r.componentWillReceiveProps != null && r.componentWillReceiveProps(T, b),
                    !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(T, r.__s, b) === !1 || t.__v === s.__v) {
                        for (r.props = T,
                        r.state = r.__s,
                        t.__v !== s.__v && (r.__d = !1),
                        r.__v = t,
                        t.__e = s.__e,
                        t.__k = s.__k,
                        t.__k.forEach(function(U) {
                            U && (U.__ = t)
                        }),
                        S = 0; S < r._sb.length; S++)
                            r.__h.push(r._sb[S]);
                        r._sb = [],
                        r.__h.length && l.push(r);
                        break e
                    }
                    r.componentWillUpdate != null && r.componentWillUpdate(T, r.__s, b),
                    r.componentDidUpdate != null && r.__h.push(function() {
                        r.componentDidUpdate(_, o, f)
                    })
                }
                if (r.context = b,
                r.props = T,
                r.__v = t,
                r.__P = e,
                E = N.__r,
                O = 0,
                "prototype"in q && q.prototype.render) {
                    for (r.state = r.__s,
                    r.__d = !1,
                    E && E(t),
                    d = r.render(r.props, r.state, r.context),
                    R = 0; R < r._sb.length; R++)
                        r.__h.push(r._sb[R]);
                    r._sb = []
                } else
                    do
                        r.__d = !1,
                        E && E(t),
                        d = r.render(r.props, r.state, r.context),
                        r.state = r.__s;
                    while (r.__d && ++O < 25);
                r.state = r.__s,
                r.getChildContext != null && (n = ge(ge({}, n), r.getChildContext())),
                g || r.getSnapshotBeforeUpdate == null || (f = r.getSnapshotBeforeUpdate(_, o)),
                V = d != null && d.type === Q && d.key == null ? d.props.children : d,
                Jt(e, Array.isArray(V) ? V : [V], t, s, n, a, i, l, u, c),
                r.base = t.__e,
                t.__h = null,
                r.__h.length && l.push(r),
                w && (r.__E = r.__ = null),
                r.__e = !1
            } else
                i == null && t.__v === s.__v ? (t.__k = s.__k,
                t.__e = s.__e) : t.__e = wn(s.__e, t, s, n, a, i, l, c);
            (d = N.diffed) && d(t)
        } catch (U) {
            t.__v = null,
            (c || i != null) && (t.__e = u,
            t.__h = !!c,
            i[i.indexOf(u)] = null),
            N.__e(U, t, s)
        }
    }
    function is(e, t) {
        N.__c && N.__c(t, e),
        e.some(function(s) {
            try {
                e = s.__h,
                s.__h = [],
                e.some(function(n) {
                    n.call(s)
                })
            } catch (n) {
                N.__e(n, s.__v)
            }
        })
    }
    function wn(e, t, s, n, a, i, l, u) {
        var c, d, r, g = s.props, _ = t.props, o = t.type, f = 0;
        if (o === "svg" && (a = !0),
        i != null) {
            for (; f < i.length; f++)
                if ((c = i[f]) && "setAttribute"in c == !!o && (o ? c.localName === o : c.nodeType === 3)) {
                    e = c,
                    i[f] = null;
                    break
                }
        }
        if (e == null) {
            if (o === null)
                return document.createTextNode(_);
            e = a ? document.createElementNS("http://www.w3.org/2000/svg", o) : document.createElement(o, _.is && _),
            i = null,
            u = !1
        }
        if (o === null)
            g === _ || u && e.data === _ || (e.data = _);
        else {
            if (i = i && Ze.call(e.childNodes),
            d = (g = s.props || lt).dangerouslySetInnerHTML,
            r = _.dangerouslySetInnerHTML,
            !u) {
                if (i != null)
                    for (g = {},
                    f = 0; f < e.attributes.length; f++)
                        g[e.attributes[f].name] = e.attributes[f].value;
                (r || d) && (r && (d && r.__html == d.__html || r.__html === e.innerHTML) || (e.innerHTML = r && r.__html || ""))
            }
            if (Nn(e, _, g, a, u),
            r)
                t.__k = [];
            else if (f = t.props.children,
            Jt(e, Array.isArray(f) ? f : [f], t, s, n, a && o !== "foreignObject", i, l, i ? i[0] : s.__k && Ye(s, 0), u),
            i != null)
                for (f = i.length; f--; )
                    i[f] != null && Qt(i[f]);
            u || ("value"in _ && (f = _.value) !== void 0 && (f !== e.value || o === "progress" && !f || o === "option" && f !== g.value) && ut(e, "value", f, g.value, !1),
            "checked"in _ && (f = _.checked) !== void 0 && f !== e.checked && ut(e, "checked", f, g.checked, !1))
        }
        return e
    }
    function as(e, t, s) {
        try {
            typeof e == "function" ? e(t) : e.current = t
        } catch (n) {
            N.__e(n, s)
        }
    }
    function os(e, t, s) {
        var n, a;
        if (N.unmount && N.unmount(e),
        (n = e.ref) && (n.current && n.current !== e.__e || as(n, null, t)),
        (n = e.__c) != null) {
            if (n.componentWillUnmount)
                try {
                    n.componentWillUnmount()
                } catch (i) {
                    N.__e(i, t)
                }
            n.base = n.__P = null,
            e.__c = void 0
        }
        if (n = e.__k)
            for (a = 0; a < n.length; a++)
                n[a] && os(n[a], t, s || typeof e.type != "function");
        s || e.__e == null || Qt(e.__e),
        e.__ = e.__e = e.__d = void 0
    }
    function Ln(e, t, s) {
        return this.constructor(e, s)
    }
    function rs(e, t, s) {
        var n, a, i;
        N.__ && N.__(e, t),
        a = (n = typeof s == "function") ? null : s && s.__k || t.__k,
        i = [],
        Et(t, e = (!n && s || t).__k = Ke(Q, null, [e]), a || lt, lt, t.ownerSVGElement !== void 0, !n && s ? [s] : a ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !n && s ? s : a ? a.__e : t.firstChild, n),
        is(i, e)
    }
    function Nt(e, t) {
        rs(e, t, Nt)
    }
    function Cn(e, t, s) {
        var n, a, i, l = ge({}, e.props);
        for (i in t)
            i == "key" ? n = t[i] : i == "ref" ? a = t[i] : l[i] = t[i];
        return arguments.length > 2 && (l.children = arguments.length > 3 ? Ze.call(arguments, 2) : s),
        Qe(e.type, l, n || e.key, a || e.ref, null)
    }
    function ht(e, t) {
        var s = {
            __c: t = "__cC" + zt++,
            __: e,
            Consumer: function(n, a) {
                return n.children(a)
            },
            Provider: function(n) {
                var a, i;
                return this.getChildContext || (a = [],
                (i = {})[t] = this,
                this.getChildContext = function() {
                    return i
                }
                ,
                this.shouldComponentUpdate = function(l) {
                    this.props.value !== l.value && a.some(St)
                }
                ,
                this.sub = function(l) {
                    a.push(l);
                    var u = l.componentWillUnmount;
                    l.componentWillUnmount = function() {
                        a.splice(a.indexOf(l), 1),
                        u && u.call(l)
                    }
                }
                ),
                n.children
            }
        };
        return s.Provider.__ = s.Consumer.contextType = s
    }
    Ze = Kt.slice,
    N = {
        __e: function(e, t, s, n) {
            for (var a, i, l; t = t.__; )
                if ((a = t.__c) && !a.__)
                    try {
                        if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(e)),
                        l = a.__d),
                        a.componentDidCatch != null && (a.componentDidCatch(e, n || {}),
                        l = a.__d),
                        l)
                            return a.__E = a
                    } catch (u) {
                        e = u
                    }
            throw e
        }
    },
    jt = 0,
    Gt = function(e) {
        return e != null && e.constructor === void 0
    }
    ,
    pe.prototype.setState = function(e, t) {
        var s;
        s = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ge({}, this.state),
        typeof e == "function" && (e = e(ge({}, s), this.props)),
        e && ge(s, e),
        e != null && this.__v && (t && this._sb.push(t),
        St(this))
    }
    ,
    pe.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0,
        e && this.__h.push(e),
        St(this))
    }
    ,
    pe.prototype.render = Q,
    ze = [],
    ct.__r = 0,
    zt = 0;
    var An = Object.freeze(Object.defineProperty({
        __proto__: null,
        Component: pe,
        Fragment: Q,
        cloneElement: Cn,
        createContext: ht,
        createElement: Ke,
        createRef: En,
        h: Ke,
        hydrate: Nt,
        get isValidElement() {
            return Gt
        },
        get options() {
            return N
        },
        render: rs,
        toChildArray: Je
    }, Symbol.toStringTag, {
        value: "Module"
    })), ve, P, wt, ls, Pe = 0, cs = [], mt = [], us = N.__b, hs = N.__r, ms = N.diffed, ds = N.__c, ps = N.unmount;
    function Fe(e, t) {
        N.__h && N.__h(P, e, Pe || t),
        Pe = 0;
        var s = P.__H || (P.__H = {
            __: [],
            __h: []
        });
        return e >= s.__.length && s.__.push({
            __V: mt
        }),
        s.__[e]
    }
    function X(e) {
        return Pe = 1,
        fs(bs, e)
    }
    function fs(e, t, s) {
        var n = Fe(ve++, 2);
        if (n.t = e,
        !n.__c && (n.__ = [s ? s(t) : bs(void 0, t), function(i) {
            var l = n.__N ? n.__N[0] : n.__[0]
              , u = n.t(l, i);
            l !== u && (n.__N = [u, n.__[1]],
            n.__c.setState({}))
        }
        ],
        n.__c = P,
        !P.u)) {
            P.u = !0;
            var a = P.shouldComponentUpdate;
            P.shouldComponentUpdate = function(i, l, u) {
                if (!n.__c.__H)
                    return !0;
                var c = n.__c.__H.__.filter(function(r) {
                    return r.__c
                });
                if (c.every(function(r) {
                    return !r.__N
                }))
                    return !a || a.call(this, i, l, u);
                var d = !1;
                return c.forEach(function(r) {
                    if (r.__N) {
                        var g = r.__[0];
                        r.__ = r.__N,
                        r.__N = void 0,
                        g !== r.__[0] && (d = !0)
                    }
                }),
                !(!d && n.__c.props === i) && (!a || a.call(this, i, l, u))
            }
        }
        return n.__N || n.__
    }
    function he(e, t) {
        var s = Fe(ve++, 3);
        !N.__s && At(s.__H, t) && (s.__ = e,
        s.i = t,
        P.__H.__h.push(s))
    }
    function _s(e, t) {
        var s = Fe(ve++, 4);
        !N.__s && At(s.__H, t) && (s.__ = e,
        s.i = t,
        P.__h.push(s))
    }
    function Y(e) {
        return Pe = 5,
        Lt(function() {
            return {
                current: e
            }
        }, [])
    }
    function kn(e, t, s) {
        Pe = 6,
        _s(function() {
            return typeof e == "function" ? (e(t()),
            function() {
                return e(null)
            }
            ) : e ? (e.current = t(),
            function() {
                return e.current = null
            }
            ) : void 0
        }, s == null ? s : s.concat(e))
    }
    function Lt(e, t) {
        var s = Fe(ve++, 7);
        return At(s.__H, t) ? (s.__V = e(),
        s.i = t,
        s.__h = e,
        s.__V) : s.__
    }
    function gs(e, t) {
        return Pe = 8,
        Lt(function() {
            return e
        }, t)
    }
    function Xe(e) {
        var t = P.context[e.__c]
          , s = Fe(ve++, 9);
        return s.c = e,
        t ? (s.__ == null && (s.__ = !0,
        t.sub(P)),
        t.props.value) : e.__
    }
    function Mn(e, t) {
        N.useDebugValue && N.useDebugValue(t ? t(e) : e)
    }
    function $n(e) {
        var t = Fe(ve++, 10)
          , s = X();
        return t.__ = e,
        P.componentDidCatch || (P.componentDidCatch = function(n, a) {
            t.__ && t.__(n, a),
            s[1](n)
        }
        ),
        [s[0], function() {
            s[1](void 0)
        }
        ]
    }
    function Tn() {
        var e = Fe(ve++, 11);
        return e.__ || (e.__ = "P" + function(t) {
            for (var s = 0, n = t.length; n > 0; )
                s = (s << 5) - s + t.charCodeAt(--n) | 0;
            return s
        }(P.__v.__m) + ve),
        e.__
    }
    function On() {
        for (var e; e = cs.shift(); )
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(dt),
                    e.__H.__h.forEach(Ct),
                    e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [],
                    N.__e(t, e.__v)
                }
    }
    N.__b = function(e) {
        typeof e.type != "function" || e.__m || e.__ === null ? e.__m || (e.__m = e.__ && e.__.__m ? e.__.__m : "") : e.__m = (e.__ && e.__.__m ? e.__.__m : "") + (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0),
        P = null,
        us && us(e)
    }
    ,
    N.__r = function(e) {
        hs && hs(e),
        ve = 0;
        var t = (P = e.__c).__H;
        t && (wt === P ? (t.__h = [],
        P.__h = [],
        t.__.forEach(function(s) {
            s.__N && (s.__ = s.__N),
            s.__V = mt,
            s.__N = s.i = void 0
        })) : (t.__h.forEach(dt),
        t.__h.forEach(Ct),
        t.__h = [])),
        wt = P
    }
    ,
    N.diffed = function(e) {
        ms && ms(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (cs.push(t) !== 1 && ls === N.requestAnimationFrame || ((ls = N.requestAnimationFrame) || Fn)(On)),
        t.__H.__.forEach(function(s) {
            s.i && (s.__H = s.i),
            s.__V !== mt && (s.__ = s.__V),
            s.i = void 0,
            s.__V = mt
        })),
        wt = P = null
    }
    ,
    N.__c = function(e, t) {
        t.some(function(s) {
            try {
                s.__h.forEach(dt),
                s.__h = s.__h.filter(function(n) {
                    return !n.__ || Ct(n)
                })
            } catch (n) {
                t.some(function(a) {
                    a.__h && (a.__h = [])
                }),
                t = [],
                N.__e(n, s.__v)
            }
        }),
        ds && ds(e, t)
    }
    ,
    N.unmount = function(e) {
        ps && ps(e);
        var t, s = e.__c;
        s && s.__H && (s.__H.__.forEach(function(n) {
            try {
                dt(n)
            } catch (a) {
                t = a
            }
        }),
        s.__H = void 0,
        t && N.__e(t, s.__v))
    }
    ;
    var vs = typeof requestAnimationFrame == "function";
    function Fn(e) {
        var t, s = function() {
            clearTimeout(n),
            vs && cancelAnimationFrame(t),
            setTimeout(e)
        }, n = setTimeout(s, 100);
        vs && (t = requestAnimationFrame(s))
    }
    function dt(e) {
        var t = P
          , s = e.__c;
        typeof s == "function" && (e.__c = void 0,
        s()),
        P = t
    }
    function Ct(e) {
        var t = P;
        e.__c = e.__(),
        P = t
    }
    function At(e, t) {
        return !e || e.length !== t.length || t.some(function(s, n) {
            return s !== e[n]
        })
    }
    function bs(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    var In = Object.freeze(Object.defineProperty({
        __proto__: null,
        useCallback: gs,
        useContext: Xe,
        useDebugValue: Mn,
        useEffect: he,
        useErrorBoundary: $n,
        useId: Tn,
        useImperativeHandle: kn,
        useLayoutEffect: _s,
        useMemo: Lt,
        useReducer: fs,
        useRef: Y,
        useState: X
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function xn(e) {
        return e.split("-").map((t,s)=>s === 0 ? t.toLowerCase() : t.charAt(0).toUpperCase() + t.slice(1)).join("")
    }
    function ys(e, t) {
        const s = {}
          , n = {};
        return e.forEach(a=>{
            const {name: i, content: l} = a
              , u = xn(i.replace(t, ""))
              , c = Bn(l)
              , d = u.match(/\[(.*)\]$/i);
            if (d !== null) {
                const r = u.replace(d[0], "")
                  , g = d[1];
                n[g] = c,
                s[r] = n
            } else
                s[u] = c
        }
        ),
        s
    }
    function Bn(e) {
        return e === "true" || e === "false" ? e === "true" : e
    }
    const kt = ht(null)
      , Rn = kt.Provider
      , Pn = kt.Consumer
      , Ss = "data-segment-code"
      , Es = "globalmessage-segment-visible"
      , Ns = "ac-gn-segmentbar-visible"
      , Mt = (e,t)=>{
        var s, n;
        e.showBanner ? (t(!0),
        (s = document.querySelector("html")) == null || s.classList.add(`${Es}`, `${Ns}`),
        document.documentElement.setAttribute(`${Ss}`, e.segmentCode.toLowerCase())) : (t(!1),
        (n = document.querySelector("html")) == null || n.classList.remove(`${Es}`, `${Ns}`),
        document.documentElement.removeAttribute(`${Ss}`))
    }
    ;
    var Dn = 0;
    function h(e, t, s, n, a) {
        var i, l, u = {};
        for (l in t)
            l == "ref" ? i = t[l] : u[l] = t[l];
        var c = {
            type: e,
            props: u,
            key: s,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: --Dn,
            __source: a,
            __self: n
        };
        if (typeof e == "function" && (i = e.defaultProps))
            for (l in i)
                u[l] === void 0 && (u[l] = i[l]);
        return N.vnode && N.vnode(c),
        c
    }
    const Wn = "/shop/goto/home"
      , Hn = "/shop/goto/exitstore"
      , Un = (e,t)=>t in e && e[t] !== "" ? e[t] : (Object.keys(e).forEach(n=>{
        if (t !== void 0 && t.indexOf(`${n}-`) === 0 && e[n] !== "")
            return e[n]
    }
    ),
    e.other);
    function Vn({view: e, segments: t, exit: s, exitRedirect: n=!1, wwwDomain: a, storeUrlPath: i}) {
        const l = Xe(kt)
          , u = Y(null)
          , [c,d] = X("")
          , [r,g] = X(!1)
          , _ = `https://${a}${i}${Wn}`
          , o = `https://${a}${i}${Hn}`;
        he(()=>{
            var w, T;
            if (((w = u.current) == null ? void 0 : w.dataset.strings) !== void 0) {
                const A = JSON.parse(String((T = u.current) == null ? void 0 : T.dataset.strings));
                l == null || l.getStorefront().then(b=>{
                    if (b.name !== void 0 && b.name !== "") {
                        const S = A.view.replace("{%STOREFRONT%}", b.name);
                        d(S)
                    } else {
                        const S = Un(A.segments, b.segmentCode);
                        d(S)
                    }
                    Mt(b, g)
                }
                , ()=>{}
                ),
                l == null || l.on("storefrontChange", b=>{
                    Mt(b, g)
                }
                )
            }
        }
        , [l]);
        const f = (w,T)=>{
            l == null || l.exitStorefront(w),
            w || (T.preventDefault(),
            l == null || l.getStorefront().then(A=>{
                Mt(A, g)
            }
            , ()=>{}
            )),
            window.dispatchEvent(new CustomEvent("resize")),
            window.dispatchEvent(new CustomEvent("segmentExit"))
        }
        ;
        return h(Q, {
            children: h("ul", {
                class: "globalmessage-segment-content",
                "data-strings": JSON.stringify({
                    view: e,
                    segments: t,
                    exit: s
                }),
                ref: u,
                children: r && h(Q, {
                    children: [h("li", {
                        class: "globalmessage-segment-item",
                        children: h("a", {
                            href: _,
                            class: "globalmessage-segment-link globalmessage-segment-view",
                            children: c
                        })
                    }), h("li", {
                        class: "globalmessage-segment-item",
                        children: h("a", {
                            href: o,
                            class: "globalmessage-segment-link globalmessage-segment-exit",
                            onClick: w=>f(n, w),
                            children: s
                        })
                    })]
                })
            })
        })
    }
    function qn({locale: e="en-US", textDirection: t="ltr", dataStrings: s, exitRedirect: n=!1, wwwDomain: a, storeUrlPath: i}) {
        return h("aside", {
            id: "globalmessage-segment",
            className: "globalmessage-segment",
            lang: e,
            dir: t,
            children: h(Vn, {
                ...s,
                exitRedirect: n,
                wwwDomain: a,
                storeUrlPath: i
            })
        })
    }
    function jn({segmentData: e, isoLocale: t, textDirection: s="ltr", wwwDomain: n, storeUrlPath: a}) {
        const i = Y(!1);
        return he(()=>{
            const l = document.querySelectorAll('meta[name^="globalmessage-"]')
              , u = Array.from(l)
              , c = ys(u, "globalmessage-");
            i.current = c.segmentRedirect
        }
        , []),
        h(Q, {
            children: e !== void 0 && a !== void 0 && h(qn, {
                locale: t,
                textDirection: s,
                exitRedirect: i.current,
                dataStrings: e.dataStrings,
                wwwDomain: n,
                storeUrlPath: a
            })
        })
    }
    var No = ""
      , Gn = {
        _attachEvents() {
            for (let e of this.events)
                Object.defineProperty(this.options.ref, e, {
                    value: (...t)=>this.__triggerEvent(e, ...t),
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                })
        },
        _attachMethods() {
            for (let e of this.mixinsList)
                for (let t in e) {
                    const s = Object.getOwnPropertyDescriptor(e, t);
                    switch (!0) {
                    case (typeof e[t] == "function" && !this.events.includes(t)):
                        Object.defineProperty(this.options.ref, t, {
                            value: (...n)=>this.__triggerMethod(t, ...n),
                            enumerable: t[0] !== "_",
                            configurable: !0,
                            writable: !0
                        });
                        break;
                    case !!s.set:
                        Object.defineProperty(this.options.ref, t, {
                            set: n=>this._enabledMixins.includes(e) && s.set.call(this.options.ref, n)
                        });
                        break;
                    case !!s.get:
                        Object.defineProperty(this.options.ref, t, {
                            get: ()=>this._enabledMixins.includes(e) && s.get.call(this.options.ref)
                        });
                        break
                    }
                }
        },
        _attachDefaultMethods(e) {
            for (let t in e)
                this.options.ref[t] = (...s)=>e[t].call(this, ...s)
        }
    }
      , Zn = {
        _destroy() {
            if (this.isDestroyed = !0,
            this.options.ref._viewportInfo = null,
            this.options.viewportEvents) {
                for (const e of this.options.breakpoints)
                    e.viewportQuery.removeEventListener("change", e._viewportChangeHandler);
                this.orientationQuery.removeEventListener("change", this._orientationChangeHandler),
                this.retinaQuery.removeEventListener("change", this._retinaChangeHandler)
            }
        }
    }
      , zn = {
        _proxifyReference(e, t=[]) {
            for (let[s,n] of Object.entries(e))
                if (n && typeof n == "object" && !Array.isArray(n) && !n.nodeType) {
                    const i = t.concat([s]);
                    Object.defineProperty(n, "__isProxy", {
                        value: !0
                    }),
                    Object.defineProperty(n, "__path", {
                        value: i
                    }),
                    e[s] = new Proxy(n,this._proxyHandler()),
                    this._proxifyReference(n, i)
                }
            return Object.defineProperty(e, "__isProxy", {
                value: !0
            }),
            Object.defineProperty(e, "__path", {
                value: t
            }),
            new Proxy(e,this._proxyHandler())
        },
        _proxyHandler() {
            return {
                get: (e,t,s)=>{
                    if (this.currentMixin) {
                        const n = e.__path ? e.__path.concat(t).join(".") : t;
                        this.autoWatchedProps[n] = [...new Set(this.autoWatchedProps[n] ? this.autoWatchedProps[n].concat(this.currentMixin) : [this.currentMixin])]
                    }
                    return Reflect.get(e, t, s)
                }
                ,
                set: (e,t,s)=>{
                    const n = e[t];
                    if (n !== s) {
                        const a = s && typeof s == "object" && !Array.isArray(s) && !s.nodeType && !s instanceof NodeList && !s.__isProxy
                          , i = e.__path ? e.__path.concat(t).join(".") : t;
                        Reflect.set(e, t, a ? this._proxifyReference(s, i.split(".")) : s),
                        Object.keys(this.autoWatchedProps).includes(i) && this._toggleMixins(i),
                        Object.keys(this.options.watch).includes(i) && this.__triggerEvent(this.options.watch[i], {
                            from: n,
                            to: s
                        })
                    }
                    return !0
                }
            }
        }
    }
      , Kn = {
        _toggleMixins(e) {
            const t = []
              , s = [];
            for (let n of e ? this.autoWatchedProps[e] || [] : this.mixinsList) {
                this.currentMixin = n;
                const a = !n.isEnabledWhen || n.isEnabledWhen.call(this.options.ref) === !0;
                switch (this.currentMixin = null,
                !0) {
                case (n._isEnabled === !1 && a):
                    t.push(n),
                    n._isEnabled = !0;
                    break;
                case (n._isEnabled === !0 && !a):
                    s.push(n),
                    n._isEnabled = !1;
                    break;
                default:
                    n._isEnabled = a;
                    break
                }
            }
            for (let n of s.reverse())
                n.destroy && n.destroy.call(this.options.ref);
            this._enabledMixins = this._getEnabledMixins();
            for (let n of t) {
                n._isEnabled = !0;
                for (let a of this.options.setupEvents)
                    n[a] && n[a].call(this.options.ref)
            }
        },
        _getEnabledMixins() {
            const e = [];
            if (this.isDestroyed)
                return e;
            const t = this.mixinsList.length;
            for (let s = 0; s < t; s++)
                this.mixinsList[s]._isEnabled && e.push(this.mixinsList[s]);
            return e
        }
    }
      , Qn = {
        __triggerEvent(e, ...t) {
            if (this.isDestroyed)
                return this.options.ref;
            for (this.queue.unshift({
                event: e,
                data: t
            }); this.queue.length; ) {
                const {event: s, data: n} = this.queue[0];
                this.queue.shift();
                const a = this._enabledMixins.length;
                for (let i = 0; i < a; i++) {
                    const l = this._enabledMixins[i][s];
                    l && l.call(this.options.ref, ...n)
                }
            }
            return e == "destroy" && this._destroy(),
            this.options.ref
        },
        __triggerMethod(e, ...t) {
            if (this.isDestroyed)
                return;
            let s = {
                [e]: ()=>{}
            };
            for (let n = this._enabledMixins.length - 1; n >= 0; n--)
                if (this._enabledMixins[n][e]) {
                    s = this._enabledMixins[n];
                    break
                }
            return s[e].call(this.options.ref, ...t)
        }
    }
      , Yn = {
        _setupViewportEvents(e, t, s) {
            if (!!this.options.viewportEvents) {
                this.events = [...new Set(this.events.concat(e))],
                this.options.ref._viewportInfo = {};
                for (const n of this.options.breakpoints) {
                    const {name: a, mediaQuery: i} = n;
                    n.viewportQuery = window.matchMedia(i),
                    n.viewportQuery.matches && (this.options.ref._viewportInfo.viewport = a),
                    n._viewportChangeHandler = this._viewportChangeHandler.bind(this, a),
                    n.viewportQuery.addEventListener("change", n._viewportChangeHandler)
                }
                this.retinaQuery = window.matchMedia(s),
                this.orientationQuery = window.matchMedia(t),
                this.options.ref._viewportInfo.retina = this.retinaQuery.matches,
                this.options.ref._viewportInfo.orientation = this.orientationQuery.matches ? "portrait" : "landscape",
                this._retinaChangeHandler = this._retinaChangeHandler.bind(this),
                this._orientationChangeHandler = this._orientationChangeHandler.bind(this),
                this.retinaQuery.addEventListener("change", this._retinaChangeHandler),
                this.orientationQuery.addEventListener("change", this._orientationChangeHandler)
            }
        },
        _viewportChangeHandler(e, {matches: t}) {
            if (!t)
                return;
            const s = {
                type: "viewport",
                from: this.options.ref._viewportInfo.viewport,
                to: e
            };
            this.options.ref._viewportInfo.viewport = e,
            this.options.ref.onViewportChange(s),
            this.options.ref.onScreenChange(s)
        },
        _orientationChangeHandler({matches: e}) {
            const t = e ? "portrait" : "landscape";
            this.options.ref._viewportInfo.orientation = t;
            const s = {
                type: "orientation",
                orientation: t
            };
            this.options.ref.onOrientationChange(s),
            this.options.ref.onScreenChange(s)
        },
        _retinaChangeHandler({matches: e}) {
            this.options.ref._viewportInfo.retina = e;
            const t = {
                type: "retina",
                retina: e
            };
            this.options.ref.onRetinaChange(t),
            this.options.ref.onScreenChange(t)
        }
    };
    function Jn(...e) {
        this.events = [...new Set(this.events.concat(...e))],
        this._attachEvents()
    }
    function Xn(e) {
        this._toggleMixins(e)
    }
    const ei = [{
        name: "S",
        mediaQuery: "only screen and (max-width: 734px)"
    }, {
        name: "M",
        mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)"
    }, {
        name: "L",
        mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)"
    }, {
        name: "X",
        mediaQuery: "only screen and (min-width: 1441px)"
    }]
      , ti = "only screen and (orientation: portrait)"
      , si = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)"
      , ni = {
        breakpoints: ei,
        events: [],
        ref: {},
        setupEvents: [],
        viewportEvents: !1,
        watch: {}
    }
      , ii = ["destroy"]
      , ai = ["onViewportChange", "onOrientationChange", "onRetinaChange", "onScreenChange"]
      , oi = {
        __addEvents: Jn,
        __forceUpdate: Xn
    };
    class $t {
        constructor(t, ...s) {
            return Object.assign($t.prototype, zn, Yn, Qn, Gn, Kn, Zn),
            this.options = Object.assign({}, ni, t),
            this.events = [...new Set(this.options.events.concat(Object.values(this.options.watch), ii))],
            this.mixinsList = [...new Set(s.flat(9999).map(n=>n.default && n.default() || typeof n == "function" && n() || n))],
            this.isDestroyed = !1,
            this.queue = [],
            this.autoWatchedProps = {},
            this.currentMixin = null,
            this._enabledMixins = [],
            this._setupViewportEvents(ai, ti, si),
            this._attachEvents(),
            this._attachMethods(),
            this._attachDefaultMethods(oi),
            this.options.ref = this._proxifyReference(this.options.ref, []),
            this._toggleMixins(),
            this.options.ref
        }
    }
    var ri = {
        onViewportChange(e) {
            this._isLayoutChange(e) && this.onLayoutChange(this._isBreakpointWithMenu(), e)
        },
        _isLayoutChange(e) {
            return this._isBreakpointWithMenu(e.from) != this._isBreakpointWithMenu(e.to)
        },
        _isBreakpointWithMenu(e=this._viewportInfo.viewport) {
            return this._viewportsWithMenu.includes(e)
        },
        _getCurrentLayout() {
            return this._isBreakpointWithMenu() ? "compact" : "regular"
        },
        _isTouch() {
            return document.documentElement.classList.contains("touch")
        }
    }
      , li = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function ci(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    function ws(e) {
        if (e.__esModule)
            return e;
        var t = Object.defineProperty({}, "__esModule", {
            value: !0
        });
        return Object.keys(e).forEach(function(s) {
            var n = Object.getOwnPropertyDescriptor(e, s);
            Object.defineProperty(t, s, n.get ? n : {
                enumerable: !0,
                get: function() {
                    return e[s]
                }
            })
        }),
        t
    }
    var ui = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CONTROL: 17,
        ALT: 18,
        COMMAND: 91,
        CAPSLOCK: 20,
        ESCAPE: 27,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_ZERO: 96,
        NUMPAD_ONE: 97,
        NUMPAD_TWO: 98,
        NUMPAD_THREE: 99,
        NUMPAD_FOUR: 100,
        NUMPAD_FIVE: 101,
        NUMPAD_SIX: 102,
        NUMPAD_SEVEN: 103,
        NUMPAD_EIGHT: 104,
        NUMPAD_NINE: 105,
        NUMPAD_ASTERISK: 106,
        NUMPAD_PLUS: 107,
        NUMPAD_DASH: 109,
        NUMPAD_DOT: 110,
        NUMPAD_SLASH: 111,
        NUMPAD_EQUALS: 187,
        TICK: 192,
        LEFT_BRACKET: 219,
        RIGHT_BRACKET: 221,
        BACKSLASH: 220,
        SEMICOLON: 186,
        APOSTRAPHE: 222,
        APOSTROPHE: 222,
        SPACEBAR: 32,
        CLEAR: 12,
        COMMA: 188,
        DOT: 190,
        SLASH: 191
    }
      , be = ui
      , hi = {
        selectors: ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "[tabindex]", "[contenteditable]"].join(","),
        nodeName: {
            INPUT: "input",
            SELECT: "select",
            TEXTAREA: "textarea",
            BUTTON: "button",
            OPTGROUP: "optgroup",
            OPTION: "option",
            MENUITEM: "menuitem",
            FIELDSET: "fieldset",
            OBJECT: "object",
            A: "a"
        }
    }
      , Ls = hi
      , Cs = function() {
        this.focusableSelectors = Ls.selectors
    }
      , et = Cs.prototype;
    et.isFocusableElement = function(e, t, s) {
        if (t && !this._isDisplayed(e))
            return !1;
        var n = Ls.nodeName[e.nodeName];
        return n ? !e.disabled : e.contentEditable ? (s = s || parseFloat(e.getAttribute("tabindex")),
        !isNaN(s)) : !0
    }
    ,
    et.isTabbableElement = function(e, t) {
        if (t && !this._isDisplayed(e))
            return !1;
        var s = e.getAttribute("tabindex");
        return s = parseFloat(s),
        isNaN(s) ? this.isFocusableElement(e, t, s) : s >= 0
    }
    ,
    et._isDisplayed = function(e) {
        var t = e.getBoundingClientRect();
        return t.top === 0 && t.left === 0 && t.width === 0 && t.height === 0 ? !1 : window.getComputedStyle(e).visibility !== "hidden"
    }
    ,
    et.getTabbableElements = function(e, t) {
        for (var s = e.querySelectorAll(this.focusableSelectors), n = s.length, a = [], i = 0; i < n; i++)
            this.isTabbableElement(s[i], t) && a.push(s[i]);
        return a
    }
    ,
    et.getFocusableElements = function(e, t) {
        for (var s = e.querySelectorAll(this.focusableSelectors), n = s.length, a = [], i = 0; i < n; i++)
            this.isFocusableElement(s[i], t) && a.push(s[i]);
        return a
    }
    ;
    var Tt = new Cs
      , As = {
        AUTOCOMPLETE: "aria-autocomplete",
        CHECKED: "aria-checked",
        DISABLED: "aria-disabled",
        EXPANDED: "aria-expanded",
        HASPOPUP: "aria-haspopup",
        HIDDEN: "aria-hidden",
        INVALID: "aria-invalid",
        LABEL: "aria-label",
        LEVEL: "aria-level",
        MULTILINE: "aria-multiline",
        MULTISELECTABLE: "aria-multiselectable",
        ORIENTATION: "aria-orientation",
        PRESSED: "aria-pressed",
        READONLY: "aria-readonly",
        REQUIRED: "aria-required",
        SELECTED: "aria-selected",
        SORT: "aria-sort",
        VALUEMAX: "aria-valuemax",
        VALUEMIN: "aria-valuemin",
        VALUENOW: "aria-valuenow",
        VALUETEXT: "aria-valuetext",
        ATOMIC: "aria-atomic",
        BUSY: "aria-busy",
        LIVE: "aria-live",
        RELEVANT: "aria-relevant",
        DROPEFFECT: "aria-dropeffect",
        GRABBED: "aria-grabbed",
        ACTIVEDESCENDANT: "aria-activedescendant",
        CONTROLS: "aria-controls",
        DESCRIBEDBY: "aria-describedby",
        FLOWTO: "aria-flowto",
        LABELLEDBY: "aria-labelledby",
        OWNS: "aria-owns",
        POSINSET: "aria-posinset",
        SETSIZE: "aria-setsize"
    }
      , ks = As
      , Ms = Tt
      , $s = "data-original-"
      , pt = "tabindex"
      , Ot = function(e, t) {
        var s = e.getAttribute($s + t);
        s || (s = e.getAttribute(t) || "",
        e.setAttribute($s + t, s))
    }
      , mi = function(t, s) {
        if (Ms.isFocusableElement(t, s))
            Ot(t, pt),
            t.setAttribute(pt, "-1");
        else
            for (var n = Ms.getTabbableElements(t, s), a = n.length; a--; )
                Ot(n[a], pt),
                n[a].setAttribute(pt, "-1");
        Ot(t, ks.HIDDEN),
        t.setAttribute(ks.HIDDEN, "true")
    }
      , Ts = mi
      , di = function e(t, s, n) {
        s = s || document.body;
        for (var a = t, i = t; a = a.previousElementSibling; )
            Ts(a, n);
        for (; i = i.nextElementSibling; )
            Ts(i, n);
        t.parentElement && t.parentElement !== s && e(t.parentElement, s, n)
    }
      , pi = function(e, t) {
        let s;
        e instanceof NodeList ? s = e : s = [].concat(e),
        t = Array.isArray(t) ? t : [].concat(t),
        s.forEach(n=>{
            t.forEach(a=>{
                n.removeAttribute(a)
            }
            )
        }
        )
    }
      , fi = pi
      , Os = fi
      , _i = As
      , Ft = "data-original-"
      , It = "tabindex"
      , xt = function(e, t) {
        var s = e.getAttribute(Ft + t);
        s !== null && (s === "" ? Os(e, t) : e.setAttribute(t, s),
        Os(e, Ft + t))
    }
      , gi = function(t) {
        xt(t, It),
        xt(t, _i.HIDDEN);
        for (var s = t.querySelectorAll(`[${Ft + It}]`), n = s.length; n--; )
            xt(s[n], It)
    }
      , Fs = gi
      , vi = function e(t, s) {
        s = s || document.body;
        for (var n = t, a = t; n = n.previousElementSibling; )
            Fs(n);
        for (; a = a.nextElementSibling; )
            Fs(a);
        t.parentElement && t.parentElement !== s && e(t.parentElement, s)
    }
      , bi = Tt
      , yi = di
      , Si = vi
      , Is = function(e, t) {
        t = t || {},
        this._tabbables = null,
        this._excludeHidden = t.excludeHidden,
        this._firstTabbableElement = t.firstFocusElement,
        this._lastTabbableElement = null,
        this._relatedTarget = null,
        this.el = e,
        this._handleOnFocus = this._handleOnFocus.bind(this)
    }
      , tt = Is.prototype;
    tt.start = function(e) {
        this.updateTabbables(),
        yi(this.el, null, this._excludeHidden);
        let t = document.activeElement;
        this._firstTabbableElement ? !this.el.contains(document.activeElement) && !e && (this._firstTabbableElement.focus(),
        t = this._firstTabbableElement) : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."),
        this._relatedTarget = t,
        document.addEventListener("focus", this._handleOnFocus, !0)
    }
    ,
    tt.stop = function() {
        Si(this.el),
        document.removeEventListener("focus", this._handleOnFocus, !0)
    }
    ,
    tt.updateTabbables = function() {
        this._tabbables = bi.getTabbableElements(this.el, this._excludeHidden),
        this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0],
        this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
    }
    ,
    tt._handleOnFocus = function(e) {
        if (this.el.contains(e.target))
            this._relatedTarget = e.target;
        else {
            if (e.preventDefault(),
            this.updateTabbables(),
            this._relatedTarget === this._lastTabbableElement || this._relatedTarget === null) {
                this._firstTabbableElement.focus(),
                this._relatedTarget = this._firstTabbableElement;
                return
            }
            if (this._relatedTarget === this._firstTabbableElement && this._lastTabbableElement) {
                this._lastTabbableElement.focus(),
                this._relatedTarget = this._lastTabbableElement;
                return
            }
        }
    }
    ,
    tt.destroy = function() {
        this.stop(),
        this.el = null,
        this._tabbables = null,
        this._firstTabbableElement = null,
        this._lastTabbableElement = null,
        this._relatedTarget = null,
        this._handleOnFocus = null
    }
    ;
    var Ei = Is
      , Ni = function(t, s) {
        return t === s ? !1 : "contains"in t ? t.contains(s) : !!(t.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY)
    }
      , st = {
        onLayoutChange() {
            const {_currentFlyout: e, curtain: t} = this;
            this._setFlyoutHeights(),
            e && (this.el.classList.add(this.classNames.blockTransitions),
            t.classList.add(this.classNames.blockTransitions),
            this.onFlyoutWillClose(e, !1).onFlyoutClose(e),
            requestAnimationFrame(()=>{
                this.el.classList.remove(this.classNames.blockTransitions),
                t.classList.remove(this.classNames.blockTransitions)
            }
            ))
        },
        created() {
            this._currentFlyout = null,
            this._lastFlyoutTrigger = null,
            this._flyoutTimeouts = [],
            this.menuButton = this.menuButton || this.el.querySelector(`.${this.classNames.menuButton}`)
        },
        mounted() {
            this.initiateElements(),
            this.initiateFlyouts(),
            this.el.addEventListener("focusout", this._onTopNavFocusOut),
            this.el.classList.remove(this.classNames.blockTransitions)
        },
        onMenuItemMouseLeave() {
            this._isBreakpointWithMenu() || this._preventFlyoutClose === !0 || this.closeFlyout(this._currentFlyout)
        },
        onFlyoutWillOpen(e, t) {
            var s;
            this.el.addEventListener("mouseleave", this.onMenuItemMouseLeave, {
                once: !0
            }),
            this._currentFlyout = e,
            this._lastFlyoutTrigger = this._getFlyoutItem(e).trigger ? this._getFlyoutItem(e).trigger[this._getCurrentLayout()] : null,
            this.flyoutAbortController = new AbortController,
            this.flyoutAbortControllerSignal = {
                signal: this.flyoutAbortController.signal
            },
            this.el.classList.add(this.classNames.animating),
            document.documentElement.setAttribute(`data-${this.classNames.el}-flyout-open`, "true"),
            t ? e.classList.add(this.classNames.itemFlyoutChangeNext) : (e.classList.add(this.classNames.itemFlyoutOpen),
            this.el.classList.add(this.classNames.withFlyoutOpen),
            document.addEventListener("keydown", this._onFlyoutDocumentKeyDown, this.flyoutAbortControllerSignal),
            !this._isBreakpointWithMenu() && !this._isTouch() && document.addEventListener("scroll", ()=>this.closeFlyout(this._currentFlyout), this.flyoutAbortControllerSignal),
            this.curtain.addEventListener("click", this._onFlyoutCurtainClick, this.flyoutAbortControllerSignal)),
            this._isBreakpointWithMenu() ? (this._setFlyoutHeight(e),
            this.el.classList.contains(this.classNames.withMenuOpen) || (this.menuButtonAnimation.open.top.beginElement(),
            this.menuButtonAnimation.open.bottom.beginElement()),
            this._flyoutTimeouts.push(setTimeout(()=>{
                this.content.setAttribute("role", "dialog"),
                this.content.setAttribute("aria-modal", "true"),
                this.content.setAttribute("tabindex", "-1"),
                this.content.setAttribute("aria-label", e.getAttribute("data-topnav-flyout-label"))
            }
            , 300))) : (s = this._lastFlyoutTrigger) == null || s.setAttribute("aria-expanded", !0)
        },
        onFlyoutWillClose(e, t) {
            var s, n, a, i, l;
            this.el.classList.add(this.classNames.withFlyoutClosing, this.classNames.animating),
            e.classList.add(this.classNames.itemFlyoutClosing),
            e.classList.remove(this.classNames.itemFlyoutOpen),
            t ? e.classList.add(this.classNames.itemFlyoutChangePrevious) : (this.el.classList.remove(this.classNames.withFlyoutOpen),
            this.flyoutAbortController && this.flyoutAbortController.abort(),
            document.documentElement.removeAttribute(`data-${this.classNames.el}-flyout-open`),
            this._currentFlyout = null),
            this._flyoutTimeouts.push(setTimeout(()=>{
                this.content.removeAttribute("role"),
                this.content.removeAttribute("aria-modal"),
                this.content.removeAttribute("tabindex"),
                this.content.removeAttribute("aria-label")
            }
            , 300)),
            this._isBreakpointWithMenu() || (s = this._lastFlyoutTrigger) == null || s.setAttribute("aria-expanded", !1),
            t || (!this._isBreakpointWithMenu() && this._getFlyout(e).classList.remove(this.classNames.flyoutShort),
            (a = (n = this.menuButtonAnimation.close.top).beginElement) == null || a.call(n),
            (l = (i = this.menuButtonAnimation.close.bottom).beginElement) == null || l.call(i)),
            this.circTab.stop()
        },
        onFlyoutOpen(e, t) {
            this.el.classList.remove(this.classNames.animating),
            t && (e.classList.add(this.classNames.itemFlyoutOpen),
            e.classList.remove(this.classNames.itemFlyoutChangeNext)),
            this._isBreakpointWithMenu() ? this.circTab.start() : requestAnimationFrame(()=>this._checkFlyoutHeight(e)),
            addEventListener("beforeunload", this._onWindowBeforeUnload, {
                once: !0
            })
        },
        onFlyoutClose(e, t) {
            const s = this._getFlyoutItem(e);
            s.scrollContainer && (s.scrollContainer.scrollTop = 0),
            this.el.classList.remove(this.classNames.withFlyoutClosing, this.classNames.animating),
            e.classList.remove(this.classNames.itemFlyoutClosing),
            t && (s.flyout.classList.remove(this.classNames.flyoutShort),
            e.classList.remove(this.classNames.itemFlyoutChangePrevious, this.classNames.itemFlyoutOpen))
        },
        onTextZoomResize() {
            this._setFlyoutHeights()
        },
        openFlyout(e) {
            const t = this.flyouts.find(i=>i.item === e);
            let s, n, a;
            if (this._currentFlyout) {
                const {_currentFlyout: i} = this
                  , l = this.flyouts.find(u=>u.item === i);
                this._handleCompactMenuChangeTriggers(l, t),
                this.el.style.setProperty(this.cssVariables.flyoutNextHeight, getComputedStyle(this._getFlyout(e)).getPropertyValue(this.cssVariables.flyoutHeight)),
                this.el.style.setProperty(this.cssVariables.flyoutPreviousHeight, getComputedStyle(this._getFlyout(i)).getPropertyValue(this.cssVariables.flyoutHeight)),
                this.onFlyoutWillClose(i, !0),
                this.onFlyoutWillOpen(e, !0),
                n = "animationend",
                a = e,
                s = u=>{
                    this.onFlyoutOpen(u, !0),
                    this.onFlyoutClose(i, !0)
                }
            } else
                this._handleCompactMenuChangeTriggers(t),
                this.onFlyoutWillOpen(e),
                n = "transitionend",
                a = this._isBreakpointWithMenu() ? this.content : e,
                s = i=>{
                    this.onFlyoutOpen(i)
                }
                ;
            this._listenForAnimationChangeEnd(e, a, n, s)
        },
        closeFlyout(e=this._currentFlyout) {
            e !== this._currentFlyout || !this._currentFlyout || (this.onFlyoutWillClose(e),
            this._listenForAnimationChangeEnd(e, this._isBreakpointWithMenu() ? this.content : e, "transitionend", ()=>this.onFlyoutClose(e)))
        },
        initiateElements() {
            this.curtain = this.curtain || this.el.querySelector(`.${this.classNames.curtain}`),
            this.content = this.content || this.el.querySelector(`.${this.classNames.content}`),
            this.menuButton = this.menuButton || this.el.querySelector(`.${this.classNames.menuButton}`),
            this.menuButtonAnimation = {
                open: {
                    top: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-top-open`),
                    bottom: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-bottom-open`)
                },
                close: {
                    top: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-top-close`),
                    bottom: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-bottom-close`)
                }
            }
        },
        initiateFlyouts() {
            var t, s, n;
            this.flyouts = [];
            const e = [...this.el.querySelectorAll(`.${this.classNames.flyout}`)].map(a=>a.parentNode);
            for (const a of e) {
                let i = {};
                i.item = a,
                i.flyout = (t = i.item) == null ? void 0 : t.querySelector(`.${this.classNames.flyout}`),
                i.scrollContainer = (s = i.flyout) == null ? void 0 : s.querySelector(`:scope > .${this.classNames.flyoutScrollContainer}`),
                i.content = (n = i.scrollContainer) == null ? void 0 : n.querySelector(`:scope > .${this.classNames.flyoutContent}`),
                i.trigger = i.content && {
                    regular: a.querySelector("[data-topnav-flyout-trigger-regular]"),
                    compact: a.querySelector("[data-topnav-flyout-trigger-compact]")
                },
                this.flyouts.push(i)
            }
            this.setFlyoutItems(),
            this._setFlyoutHeights(),
            this.circTab = new Ei(this.el)
        },
        setFlyoutItems() {
            const e = (t,s=0)=>{
                const n = t.querySelectorAll(`.${this.classNames.flyoutItem}`);
                n.forEach((a,i)=>{
                    a.style.setProperty(this.cssVariables.flyoutItemNumber, i)
                }
                ),
                t.style.setProperty(this.cssVariables.flyoutItemTotal, n.length),
                t.style.setProperty(this.cssVariables.flyoutGroupNumber, s)
            }
            ;
            this.flyouts.forEach(t=>{
                const {flyout: s} = t
                  , n = s.querySelectorAll(`.${this.classNames.flyoutItemGroup}`);
                n.length ? n.forEach(e) : e(s)
            }
            )
        },
        destroy() {
            this.closeFlyout(),
            this._destroyTimeouts(),
            this.flyoutAbortController && this.flyoutAbortController.abort(),
            this.el.removeEventListener("focusout", this._onTopNavFocusOut)
        },
        _checkFlyoutHeight(e) {
            var u;
            const t = this._getFlyoutItem(e)
              , {flyout: s, scrollContainer: n} = t
              , a = parseInt(getComputedStyle(this.el).getPropertyValue(this.cssVariables.flyoutSpacing))
              , i = parseInt(getComputedStyle(s).getPropertyValue(this.cssVariables.flyoutHeight))
              , l = window.innerWidth - n.clientWidth;
            window.innerHeight - a < i ? (s.classList.add(this.classNames.flyoutShort),
            (u = this.flyoutAbortController) == null || u.abort()) : s.classList.remove(this.classNames.flyoutShort),
            s.style.setProperty(this.cssVariables.scrollbarWidth, `${l}px`)
        },
        _listenForAnimationChangeEnd(e, t, s, n) {
            const a = new AbortController
              , i = a.signal
              , l = this.flyouts.find(c=>c.item === e)
              , u = ({animationName: c, propertyName: d})=>{
                [c === `${this.options.className}-scrim-height-change`, c === `${this.options.className}-flyout-slide-forward-next`, c === `${this.options.className}-flyout-slide-back-next`, d === "height" && l, d === "height" && t === this.content].some(g=>!!g) && (a.abort(),
                n(e))
            }
            ;
            t.addEventListener(s, u, {
                signal: i
            }),
            t.addEventListener("transitioncancel", u, {
                signal: i
            }),
            t.addEventListener("animationcancel", u, {
                signal: i
            })
        },
        _handleCompactMenuChangeTriggers(e, t) {
            if (!this._isBreakpointWithMenu())
                return;
            const s = n=>{
                const a = Tt.getFocusableElements(n)
                  , i = a[0];
                i && !a.includes(document.activeElement) && i.focus()
            }
            ;
            this._listenForAnimationChangeEnd(e.flyout, this.content, `${t ? "animation" : "transition"}start`, n=>{
                setTimeout(s.bind(this, n), 300)
            }
            ),
            t && this._listenForAnimationChangeEnd(t.flyout, this.content, "animationstart", n=>{
                var i;
                n.classList.contains(this.classNames.subMenu) ? s(n) : e.trigger && ((i = e.trigger[this._getCurrentLayout()]) == null || i.focus())
            }
            )
        },
        _destroyTimeouts() {
            this._flyoutTimeouts.forEach(e=>clearTimeout(e))
        },
        _getFlyout(e) {
            return this._getFlyoutItem(e).flyout
        },
        _getFlyoutItem(e) {
            return this.flyouts.find(t=>t.item === e)
        },
        _setFlyoutHeight(e, t=0) {
            const s = n=>`${Math.min(480, Math.max(240, parseInt(n) / 2))}ms`;
            if (this._isBreakpointWithMenu()) {
                const n = this.content
                  , a = window.innerHeight
                  , i = s(a);
                n.style.setProperty(this.cssVariables.flyoutRateOfChange, i)
            } else {
                const n = this._getFlyoutItem(e)
                  , {content: a, flyout: i} = n;
                if (a) {
                    const l = parseInt(getComputedStyle(a).height)
                      , u = parseInt(getComputedStyle(this.el).getPropertyValue(this.cssVariables.topnavHeight));
                    i.style.setProperty(this.cssVariables.flyoutHeight, `${l + u + t}px`),
                    i.style.setProperty(this.cssVariables.flyoutRateOfChange, s(l + t))
                }
            }
        },
        _setFlyoutHeights() {
            var e;
            (e = this.flyouts) == null || e.forEach(t=>this._setFlyoutHeight(t.item))
        },
        _getFlyoutAnimationDuration(e) {
            const s = (this._isBreakpointWithMenu() ? this.content : this._getFlyout(e || this._currentFlyout)).style.getPropertyValue(this.cssVariables.flyoutRateOfChange);
            return parseInt(s)
        },
        _isFlyoutOpen(e) {
            return this._currentFlyout === e
        },
        _onFlyoutDocumentKeyDown(e) {
            var n, a;
            const {keyCode: t, target: s} = e;
            switch (t) {
            case be.ESCAPE:
                const i = this._lastFlyoutTrigger
                  , l = (n = s.closest) == null ? void 0 : n.call(s, `.${this.classNames.flyout}`)
                  , u = (a = this.flyouts.find(c=>c.trigger && c.trigger[this._getCurrentLayout()] === i)) == null ? void 0 : a.flyout;
                this.closeFlyout(),
                l === u && this._flyoutTimeouts.push(setTimeout(()=>{
                    i.focus()
                }
                , 300));
                break
            }
        },
        _onFlyoutCurtainClick(e) {
            this.closeFlyout()
        },
        _onTopNavFocusOut(e) {
            e.relatedTarget && this._currentFlyout && (Ni(this.el, e.relatedTarget) || this.closeFlyout())
        },
        _onWindowBeforeUnload(e) {
            const {_currentFlyout: t} = this;
            !t || (this.el.classList.add(this.classNames.blockTransitions),
            this.onFlyoutWillClose(t).onFlyoutClose(t),
            this.el.classList.remove(this.classNames.blockTransitions))
        }
    }
      , wi = [st, {
        onLayoutChange(e) {
            this.el.classList.contains(this.classNames.withMenuOpen) && this.closeMenu(),
            this._updateMenuListenersForViewport(e),
            this._updateMenuAttributesForViewport(e)
        },
        created() {
            this.list = this.el.querySelector(`.${this.classNames.list}`),
            this.menuList = this.el.querySelector(`.${this.classNames.menuList}`),
            this.scrim = document.querySelector(`.${this.classNames.el}.${this.classNames.scrim}`),
            this.curtain = document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`),
            this.menu = this.el.querySelector(`.${this.classNames.menu}`),
            this.menuButton = this.el.querySelector(`.${this.classNames.menuButton}`),
            this.menuBackButton = this.el.querySelector(`.${this.classNames.menuBackButton}`),
            this.menuFlyout = this.el.querySelector('[data-topnav-flyout-item="menu"]'),
            this.menuLabels = {
                open: this.menuButton.dataset.topnavMenuLabelOpen,
                close: this.menuButton.dataset.topnavMenuLabelClose
            }
        },
        onMenuButtonClick() {
            if (this.el.classList.contains(this.classNames.withMenuOpen))
                this.closeMenu();
            else if (this.el.classList.contains(this.classNames.withFlyoutOpen)) {
                this.menuButton.blur(),
                this._flyoutFocusTimeout = setTimeout(()=>{
                    this._lastFlyoutTrigger.focus()
                }
                , 300);
                return
            } else
                this.openMenu()
        },
        beforeMount() {
            !this.options.curtainBlur && this.removeCurtainBlur(),
            !this.options.scrimBlur && this.removeScrimBlur()
        },
        mounted() {
            this._updateMenuListenersForViewport(this._isBreakpointWithMenu()),
            this._updateMenuAttributesForViewport(this._isBreakpointWithMenu()),
            this._setItemNumbers()
        },
        onFlyoutWillOpen(e) {
            if (this._isBreakpointWithMenu() && e.dataset.topnavFlyoutItem === "menu" && !this.el.classList.contains(this.classNames.withMenuOpen)) {
                const s = e.querySelector(`.${this.classNames.menuList}`);
                s.scrollTop = 0
            }
        },
        onFlyoutOpen(e) {
            this._isBreakpointWithMenu() && this.menuButton.setAttribute("aria-label", this.menuLabels.close)
        },
        onFlyoutWillClose() {
            this.menuButton.setAttribute("aria-label", this.menuLabels.open)
        },
        openMenu() {
            this._isBreakpointWithMenu() && this._setFlyoutHeight(this.menuFlyout),
            this.openFlyout(this.menuFlyout),
            this.el.classList.add(this.classNames.withMenuOpen),
            document.addEventListener("keydown", this._onMenuDocumentKeyDown)
        },
        closeMenu() {
            this.el.classList.remove(this.classNames.withMenuOpen),
            this.closeFlyout(),
            document.removeEventListener("keydown", this._onMenuDocumentKeyDown)
        },
        toggleMenu() {
            this.el.classList.contains(this.classNames.menuOpen) ? this.closeMenu() : this.openMenu()
        },
        destroy() {
            this._removeMenuEvents()
        },
        addCurtainBlur() {
            this.curtain && this.curtain.classList.remove(this.classNames.curtainNoBlur)
        },
        removeCurtainBlur() {
            this.curtain && this.curtain.classList.add(this.classNames.curtainNoBlur)
        },
        addScrimBlur() {
            this.scrim && this.scrim.classList.remove(this.classNames.scrimNoBlur)
        },
        removeScrimBlur() {
            this.scrim && this.scrim.classList.add(this.classNames.scrimNoBlur)
        },
        _addMenuEvents() {
            this.menuButton.addEventListener("click", this.onMenuButtonClick),
            this.menuBackButton.addEventListener("click", this.onMenuBackButtonClick)
        },
        _removeMenuEvents() {
            this.menuButton.removeEventListener("click", this.onMenuButtonClick),
            this.menuBackButton.removeEventListener("click", this.onMenuBackButtonClick)
        },
        _updateMenuListenersForViewport(e) {
            e ? this._addMenuEvents() : this._removeMenuEvents()
        },
        _updateMenuAttributesForViewport(e) {
            e ? (this.list.setAttribute("role", "none"),
            this.menuList.setAttribute("role", "list"),
            [...this.menuList.children].forEach(t=>t.setAttribute("role", "listitem"))) : (this.menu.removeAttribute("role"),
            this.list.removeAttribute("role"),
            this.menuList.removeAttribute("role"),
            [...this.menuList.children].forEach(t=>t.removeAttribute("role")))
        },
        _setItemNumbers() {
            let e = 0;
            this.menuList.querySelectorAll(`.${this.classNames.itemMenu}:not(.${this.classNames.search}, .${this.options.className}-hidden)`).forEach((t,s)=>{
                t.style.setProperty(this.cssVariables.flyoutItemNumber, s),
                ++e
            }
            ),
            this.menuList.style.setProperty(this.cssVariables.flyoutItemTotal, e)
        },
        _onMenuDocumentKeyDown(e) {
            const {keyCode: t, target: s} = e;
            switch (t) {
            case be.SPACEBAR:
                s.hasAttribute("data-topnav-flyout-trigger-compact") && (e.preventDefault(),
                s.click());
                break;
            case be.ESCAPE:
                e.preventDefault(),
                this.closeMenu(),
                this._flyoutFocusTimeout = setTimeout(()=>{
                    this.menuButton.focus()
                }
                , 300);
                break
            }
        }
    }]
      , Li = [st, {
        isEnabledWhen() {
            const e = this.submenuEnabled !== !1;
            return e ? this.el.classList.remove(this.classNames.subMenusDisabled) : this.el.classList.add(this.classNames.subMenusDisabled),
            e
        },
        onLayoutChange() {
            this.el.classList.remove(this.classNames.withSubMenuOpen),
            this._updateSubMenuListenersForViewport(this._isBreakpointWithMenu()),
            this._updateSubMenuAttributesForViewport(this._isBreakpointWithMenu()),
            this._setSubMenuItemCounts()
        },
        mounted() {
            this._findTopNavList(),
            this.initiateSubMenus()
        },
        onMenuBackButtonClick() {
            this.openFlyout(this.menuFlyout)
        },
        onFlyoutWillClose(e, t) {
            this.subMenuEls.includes(e) && this.el.classList.remove(this.classNames.withSubMenuOpen)
        },
        onHiddenMenuItemClick(e) {
            const t = e.target.closest(`.${this.classNames.itemSubMenu}`)
              , s = this.flyouts.map(n=>n.item);
            this._isFlyoutOpen(t) || (e.preventDefault(),
            s.includes(t) && this.openFlyout(t))
        },
        onMenuItemMouseOver({target: e}) {
            if (this._usesTouchEvents)
                return;
            const t = e.closest(`.${this.classNames.item}`)
              , s = 120;
            clearTimeout(this._currentSubMenuMouseOverTimeout),
            this._currentSubMenuMouseOverTimeout = setTimeout(()=>{
                t && t !== this._currentFlyout && t !== this.menuFlyout && (this.subMenuEls.includes(t) ? this.openFlyout(t) : this.closeFlyout(this._currentFlyout))
            }
            , s),
            this._flyoutTimeouts.push(this._currentSubMenuMouseOverTimeout)
        },
        onMenuItemButtonClick(e) {
            var a;
            const {target: t} = e
              , s = !!t.closest(`.${this.classNames.subMenuTriggerGroup}`);
            if (!!t.closest(`.${this.classNames.subMenuTriggerButton}`) || s && this._usesTouchEvents) {
                const i = t.closest(`.${this.classNames.itemSubMenu}`)
                  , l = this._isFlyoutOpen(i)
                  , u = t.closest(`.${this.classNames.item}`)
                  , c = (a = this._currentFlyout) == null ? void 0 : a.closest(`.${this.classNames.item}`);
                u !== c && e.preventDefault(),
                l ? this.closeFlyout(this._currentFlyout) : this.openFlyout(i)
            }
        },
        onNavListTouchStart(e) {
            this._usesTouchEvents = !0
        },
        onMenuItemMouseLeave() {
            clearTimeout(this._currentSubMenuMouseOverTimeout)
        },
        initiateSubMenus() {
            this.submenus = this.flyouts.filter(e=>e.item.classList.contains(this.classNames.itemSubMenu)).map(e=>{
                const {item: t} = e
                  , s = t.querySelector(`.${this.classNames.subMenuContent}`)
                  , n = t.querySelector(`.${this.classNames.subMenuTriggerGroup}`)
                  , a = t.querySelector(`.${this.classNames.subMenuTriggerLink}`)
                  , i = a.getAttribute("aria-label")
                  , l = t.querySelector(`.${this.classNames.subMenuTriggerButton}`)
                  , u = l.getAttribute("aria-label")
                  , c = {
                    group: n,
                    link: a,
                    linkLabel: i,
                    button: l,
                    buttonLabel: u
                }
                  , d = [...t.querySelectorAll(`.${this.classNames.subMenuGroup}`)].map(r=>{
                    const g = r.classList.contains(this.classNames.subMenuGroupElevated)
                      , _ = r.querySelector(`.${this.classNames.subMenuHeader}`)
                      , o = r.querySelector(`.${this.classNames.subMenuList}`);
                    return {
                        isElevated: g,
                        group: r,
                        header: _,
                        list: o
                    }
                }
                );
                return {
                    ...e,
                    trigger: c,
                    content: s,
                    groups: d
                }
            }
            ),
            this._findSubMenus(),
            this._setSubMenuItemCounts(),
            this._updateSubMenuListenersForViewport(this._isBreakpointWithMenu()),
            this._updateSubMenuAttributesForViewport(this._isBreakpointWithMenu())
        },
        onFlyoutWillOpen(e) {
            !this.subMenuEls.includes(e) || this.el.classList.add(this.classNames.withSubMenuOpen)
        },
        destroy() {
            this.closeFlyout(this._currentFlyout),
            this._removeSubMenuEvents(),
            clearTimeout(this._compactSubMenuItemFocus)
        },
        _getSubMenu(e) {
            return [...e.children].find(t=>t.classList.contains(this.classNames.subMenu))
        },
        _findTopNavList() {
            return this.topNavList = this.el.querySelector(`.${this.classNames.list}`),
            this.topNavList
        },
        _findSubMenus() {
            return this.subMenuEls = [...this.el.querySelectorAll(`.${this.classNames.itemSubMenu}`)],
            this.subMenuEls
        },
        _setSubMenuItemCounts(e) {
            const t = this._isBreakpointWithMenu();
            this.submenus.forEach(s=>{
                const {content: n, groups: a} = s;
                let i = 0
                  , l = 0
                  , u = 0;
                t || (l = 0),
                a.forEach((c,d)=>{
                    const {isElevated: r, header: g, list: _, group: o} = c;
                    o.style.setProperty(this.cssVariables.flyoutGroupNumber, d),
                    t || (u = 0),
                    [g, ..._.children].forEach((f,w)=>{
                        f.style.setProperty(this.cssVariables.flyoutItemNumber, ++u),
                        (!d || t) && ++l
                    }
                    ),
                    r && ++i
                }
                ),
                n.style.setProperty(this.cssVariables.flyoutElevatedGroupCount, i),
                n.style.setProperty(this.cssVariables.flyoutGroupTotal, a.length - 1),
                n.style.setProperty(this.cssVariables.flyoutItemTotal, l)
            }
            )
        },
        _addSubMenuEvents() {
            this.topNavList.addEventListener("touchstart", this.onNavListTouchStart, {
                once: !0
            }),
            this.topNavList.addEventListener("mouseover", this.onMenuItemMouseOver),
            this.topNavList.addEventListener("click", this.onMenuItemButtonClick);
            for (let e of this.subMenuEls)
                e.removeEventListener("click", this.onHiddenMenuItemClick)
        },
        _removeSubMenuEvents() {
            this.topNavList.removeEventListener("touchstart", this.onNavListTouchStart),
            this.topNavList.removeEventListener("mouseover", this.onMenuItemMouseOver),
            this.topNavList.removeEventListener("click", this.onMenuItemButtonClick);
            for (let e of this.subMenuEls)
                e.addEventListener("click", this.onHiddenMenuItemClick)
        },
        _updateSubMenuListenersForViewport(e) {
            e ? this._removeSubMenuEvents() : this._addSubMenuEvents()
        },
        _updateSubMenuAttributesForViewport(e) {
            this.submenus.forEach(({trigger: t})=>{
                e ? (t.group.setAttribute("role", "none"),
                t.link.setAttribute("role", "button"),
                t.buttonLabel && t.link.setAttribute("aria-label", t.buttonLabel)) : (t.group.removeAttribute("role"),
                t.link.removeAttribute("role"),
                t.linkLabel && t.link.setAttribute("aria-label", t.linkLabel))
            }
            )
        }
    }]
      , Ci = {
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
      , Ai = {
        browser: [{
            name: "edge",
            userAgent: "Edge",
            version: ["rv", "Edge"],
            test: function(e) {
                return e.ua.indexOf("Edge") > -1 || e.ua === "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            }
        }, {
            name: "edgeChromium",
            userAgent: "Edge",
            version: ["rv", "Edg"],
            test: function(e) {
                return e.ua.indexOf("Edg") > -1 && e.ua.indexOf("Edge") === -1
            }
        }, {
            name: "chrome",
            userAgent: "Chrome"
        }, {
            name: "firefox",
            test: function(e) {
                return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Opera") === -1
            },
            version: "Firefox"
        }, {
            name: "android",
            userAgent: "Android"
        }, {
            name: "safari",
            test: function(e) {
                return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
            },
            version: "Version"
        }, {
            name: "ie",
            test: function(e) {
                return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
            },
            version: ["MSIE", "rv"],
            parseDocumentMode: function() {
                var e = !1;
                return document.documentMode && (e = parseInt(document.documentMode, 10)),
                e
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
            test: function(e) {
                return e.ua.indexOf("Windows") > -1
            },
            version: "Windows NT"
        }, {
            name: "osx",
            userAgent: "Mac",
            test: function(e) {
                return e.ua.indexOf("Macintosh") > -1
            }
        }, {
            name: "ios",
            test: function(e) {
                return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
            },
            version: ["iPhone OS", "CPU OS"]
        }, {
            name: "linux",
            userAgent: "Linux",
            test: function(e) {
                return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && e.ua.indexOf("Android") === -1
            }
        }, {
            name: "fireos",
            test: function(e) {
                return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
            },
            version: "rv"
        }, {
            name: "android",
            userAgent: "Android",
            test: function(e) {
                return e.ua.indexOf("Android") > -1
            }
        }, {
            name: "chromeos",
            userAgent: "CrOS"
        }]
    }
      , xs = Ci
      , Bs = Ai;
    function ki(e) {
        return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)","i")
    }
    function Mi(e, t) {
        if (typeof e.parseVersion == "function")
            return e.parseVersion(t);
        var s = e.version || e.userAgent;
        typeof s == "string" && (s = [s]);
        for (var n = s.length, a, i = 0; i < n; i++)
            if (a = t.match(ki(s[i])),
            a && a.length > 1)
                return a[1].replace(/_/g, ".");
        return !1
    }
    function Rs(e, t, s) {
        for (var n = e.length, a, i, l = 0; l < n; l++)
            if (typeof e[l].test == "function" ? e[l].test(s) === !0 && (a = e[l].name) : s.ua.indexOf(e[l].userAgent) > -1 && (a = e[l].name),
            a) {
                if (t[a] = !0,
                i = Mi(e[l], s.ua),
                typeof i == "string") {
                    var u = i.split(".");
                    t.version.string = i,
                    u && u.length > 0 && (t.version.major = parseInt(u[0] || 0),
                    t.version.minor = parseInt(u[1] || 0),
                    t.version.patch = parseInt(u[2] || 0))
                } else
                    a === "edge" && (t.version.string = "12.0.0",
                    t.version.major = "12",
                    t.version.minor = "0",
                    t.version.patch = "0");
                return typeof e[l].parseDocumentMode == "function" && (t.version.documentMode = e[l].parseDocumentMode()),
                t
            }
        return t
    }
    function $i(e) {
        var t = {};
        return t.browser = Rs(Bs.browser, xs.browser, e),
        t.os = Rs(Bs.os, xs.os, e),
        t
    }
    var Ti = $i
      , Oi = {
        ua: window.navigator.userAgent,
        platform: window.navigator.platform,
        vendor: window.navigator.vendor
    }
      , Fi = Ti(Oi);
    let Bt;
    var Ii = function() {
        return Bt || (Bt = Fi),
        Bt
    }
      , xi = {
        created() {
            this.viewportMeta = document.querySelector("meta[name=viewport]"),
            this.DISABLE_ZOOM_TOKEN = ", maximum-scale=1, user-scalable=0"
        },
        onLayoutChange() {
            this.scrollSwitchUnlock()
        },
        onFlyoutWillOpen(e, t) {
            this._isBreakpointWithMenu() && !t && this.scrollSwitchLock()
        },
        onFlyoutWillClose(e, t) {
            this._isBreakpointWithMenu() && !t && this.scrollSwitchUnlock()
        },
        scrollSwitchLock() {
            const e = window.innerWidth - document.documentElement.clientWidth
              , t = Boolean(e);
            document.documentElement.style.setProperty(this.cssVariables.scrollbarWidth, `${e}px`),
            document.documentElement.classList.add(this.classNames.noScroll),
            document.documentElement.classList.toggle(this.classNames.noScrollLong, t),
            this._shouldManageZoom() && this.viewportMeta.setAttribute("content", `${this.viewportMeta.getAttribute("content")}${this.DISABLE_ZOOM_TOKEN}`)
        },
        scrollSwitchUnlock() {
            document.documentElement.style.removeProperty(this.cssVariables.scrollbarWidth),
            document.documentElement.classList.remove(this.classNames.noScroll),
            document.documentElement.classList.remove(this.classNames.noScrollLong),
            this._shouldManageZoom() && this.viewportMeta.setAttribute("content", this.viewportMeta.getAttribute("content").replace(this.DISABLE_ZOOM_TOKEN, ""))
        },
        _shouldManageZoom() {
            return !(!Ii().browser.android || !this.viewportMeta)
        }
    }
      , Bi = {
        created() {
            this.textZoom = {}
        },
        mounted() {
            this.textZoom.topNavStyles = getComputedStyle(this.el),
            this.textZoom.topNavBaseFontSize = parseInt(this.textZoom.topNavStyles.getPropertyValue(this.cssVariables.fontSize)),
            this._createfontSizeObserverElement(),
            this._createfontSizeObserver()
        },
        _createfontSizeObserverElement() {
            this.textZoom.fontSizeObserverElement = document.createElement("span"),
            this.textZoom.fontSizeObserverElement.innerHTML = "&nbsp;",
            this.textZoom.fontSizeObserverElement.style.visibility = "hidden",
            this.textZoom.fontSizeObserverElement.style.position = "absolute",
            this.textZoom.fontSizeObserverElement.style.top = "0",
            this.textZoom.fontSizeObserverElement.style.zIndex = "-1",
            this.el.appendChild(this.textZoom.fontSizeObserverElement)
        },
        _createfontSizeObserver() {
            this.textZoom.fontSizeObserver = new ResizeObserver(this.onTextZoomResize),
            this.textZoom.fontSizeObserver.observe(this.textZoom.fontSizeObserverElement)
        },
        onTextZoomResize(e) {
            const s = parseInt(this.textZoom.topNavStyles.fontSize) / this.textZoom.topNavBaseFontSize;
            this.el.classList[s <= 1 ? "remove" : "add"](this.classNames.textZoomIn),
            this.el.style.setProperty(this.cssVariables.textZoomScale, s)
        },
        destroy() {
            this.textZoom.fontSizeObserver.unobserve(this.textZoom.fontSizeObserverElement),
            this.el.removeChild(this.textZoom.fontSizeObserverElement),
            this.textZoom = null
        }
    }
      , Ri = Object.prototype.hasOwnProperty
      , Pi = function e(t) {
        if (typeof t != "object" || t === null)
            throw new TypeError("object-utils.deepClone : Invalid parameter - expected object");
        var s = Array.isArray(t) ? [] : {};
        for (var n in t)
            Ri.call(t, n) && (typeof t[n] == "object" && t[n] !== null ? s[n] = e(t[n]) : s[n] = t[n]);
        return s
    };
    function Rt(e, t, s, n) {
        return e ? {
            key: t ? "[" + t + "]" : "",
            val1: s,
            val2: n
        } : !1
    }
    var Di = function e(t, s, n) {
        var a;
        if (!t || !s || typeof t != "object" || typeof s != "object") {
            var i = t === s;
            return i || Rt(n, a, t, s)
        }
        var l = Object.keys(t)
          , u = l.length
          , c = Object.keys(s)
          , d = c.length;
        if (u !== d)
            return Rt(n, a, t, s);
        for (var r = 0; r < u; r++) {
            a = l[r];
            var g = t[a]
              , _ = s[a];
            if (typeof g == "object" && typeof _ == "object") {
                var o = e(g, _, n);
                if (typeof o != "boolean" && (o.key = "[" + a + "]" + o.key),
                o !== !0)
                    return o
            } else if (g !== _)
                return Rt(n, a, g, _)
        }
        return !0
    }
      , Wi = Object.prototype.hasOwnProperty
      , Hi = function(t) {
        if (typeof t != "object")
            throw new TypeError("object-utils.isEmpty : Invalid parameter - expected object");
        for (var s in t)
            if (Wi.call(t, s))
                return !1;
        return !0
    }
      , Ps = {
        deepClone: Pi,
        isDeepEqual: Di,
        isEmpty: Hi
    }
      , Ui = [st, {
        isEnabledWhen() {
            return this.searchEnabled !== !1
        },
        created() {
            this.search = {},
            this.search.state = {
                isOpening: !1,
                activeState: 0,
                isAnimating: !1,
                lastAnimatedItem: null,
                count: {
                    textContent: ""
                }
            },
            this.search.elements = {
                results: {},
                initialResults: null
            },
            this.search.templateFunction = this._createSearchResultsTemplate,
            this.curtain = this.curtain || document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`),
            this.topNavList = this.topNavList || this.el.querySelector(`.${this.classNames.list}`)
        },
        mounted() {
            this._setupSearchElements(),
            this._addSearchEvents()
        },
        destroy() {
            this.closeSearch(),
            this._removeSearchEvents()
        },
        onFlyoutWillOpen(e) {
            e === this.search.elements.el && (this.search.state.isOpening = !0,
            this.search.state.activeState = 0,
            this.search.elements.initialResults ? this._renderSearchResults(this.search.templateFunction(this.search.initialResults)) : this.onSearchUpdate(),
            this._addSearchAnimationEvents())
        },
        onFlyoutOpen(e) {
            e === this.search.elements.el && (this.search.elements.input.focus(),
            this._getFlyoutItem(e).scrollContainer.scrollTop = 0,
            this.search.state.isOpening = !1)
        },
        onFlyoutWillClose(e) {
            e === this.search.elements.el && this.el.classList.remove(this.classNames.withSearchOpen)
        },
        onFlyoutClose(e) {
            if (this.shouldDelaySearchOpen) {
                this.shouldDelaySearchOpen && this.openSearch(),
                this.shouldDelaySearchOpen = !1;
                return
            }
            if (e !== this.search.elements.el)
                return;
            this.clearSearch();
            const t = (s,n)=>{
                n.substr(0, 5) === "shift" && s.classList.remove(n)
            }
            ;
            this.search.elements.results.innerHTML = "",
            this.search.elements.el.classList.forEach(t.bind(this, this.search.elements.el)),
            this._preventFlyoutClose = !1,
            this._removeSearchAnimationEvents()
        },
        onMenuButtonClick() {
            this._currentFlyout === this.search.elements.el && this.closeSearch()
        },
        onSearchMenuClick(e) {
            e.preventDefault(),
            this._isFlyoutOpen(this.search.elements.el) ? this.closeSearch() : (this.shouldDelaySearchOpen = this.el.classList.contains(this.classNames.animating),
            !this.shouldDelaySearchOpen && this.openSearch())
        },
        onSearchMouseMove(e) {
            this._preventFlyoutClose = !1
        },
        onSearchFocusIn(e) {
            const {target: t} = e;
            t === this.search.elements.input && this.addSearchInputFocusEvents(),
            this.search.elements.link.addEventListener("keydown", this.onSearchLinkKeyDown)
        },
        onSearchFocusOut(e) {
            const {target: t} = e;
            t === this.search.elements.input && this.removeSearchInputFocusEvents(),
            this.search.elements.link.removeEventListener("keydown", this.onSearchLinkKeyDown)
        },
        onSearchLinkKeyDown(e) {
            const {keyCode: t} = e;
            t === be.SPACEBAR && this.onSearchMenuClick(e)
        },
        onSearchInputKeyDown(e) {
            const {keyCode: t} = e;
            switch (t) {
            case be.ARROW_UP:
                e.preventDefault(),
                this.search.selectionController.active >= 0 && (--this.search.selectionController.active,
                this._highlightSearchSelection());
                break;
            case be.ARROW_DOWN:
                e.preventDefault(),
                this.search.selectionController.active < this.search.selectionController.links.length - 1 && (++this.search.selectionController.active,
                this._highlightSearchSelection());
                break;
            case be.ENTER:
                this.search.elements.input.value.trim() === "" && this.search.selectionController.active === -1 ? (e.preventDefault(),
                e.stopPropagation()) : this.search.selectionController.active > -1 && this.search.selectionController.links[this.search.selectionController.active].click();
                break;
            case be.ESCAPE:
                e.preventDefault();
                break;
            default:
                this._preventFlyoutClose = !0,
                this.search.elements.input.addEventListener("keyup", this.onSearchInputChange.bind(this, e), {
                    once: !0
                })
            }
        },
        onSearchInputChange(e) {
            var n, a;
            const t = ((a = (n = e.target) == null ? void 0 : n.value) == null ? void 0 : a.trim()) || "";
            if (t.length < 2 && !this.search.previousSearchTerm || this.search.previousSearchTerm === t) {
                this._updateSearchFieldButtons();
                return
            }
            this.search.previousSearchTerm = t,
            clearTimeout(this.search._debounceTimeout),
            this.search._debounceTimeout = setTimeout(()=>{
                this.onSearchUpdate(e)
            }
            , 100),
            this._flyoutTimeouts.push(this.search._debounceTimeout)
        },
        onSearchResultsRendered() {
            var a, i;
            const {value: e} = this.search.elements.input
              , t = (a = this.search.elements.results) == null ? void 0 : a.querySelectorAll(`.${this.classNames.searchResultsCurrent} .${this.classNames.searchResultsContainer}`).length;
            let n = `${(i = this.search.elements.results) == null ? void 0 : i.querySelectorAll(`.${this.classNames.searchResultsCurrent} .${this.classNames.searchResultsListItem}`).length} ${this.search.resultsLabel}`;
            this.search.state.count.textContent = n,
            this.search.elements.countTimeoutId = setTimeout(()=>{
                this.search.state.count.textContent = ""
            }
            , this.search.countDelayTime),
            this._flyoutTimeouts.push(this.search.countTimeoutId),
            this._updateSearchFieldButtons(),
            this.search.elements.el.classList[e.length > 1 ? "add" : "remove"](this.classNames.searchWithResults),
            this.search.elements.el.classList[t ? "remove" : "add"](this.classNames.searchNoResults),
            this._setFlyoutHeight(this.search.elements.el, this._getSearchFlyoutHeightOffset())
        },
        blurSearchInput(e) {
            const t = e.type === "touchmove"
              , s = this.search.elements.form.contains(e.target);
            this.menuButton.contains(e.target) || (!s || t) && (this.search.elements.input.blur(),
            e.preventDefault())
        },
        addSearchInputFocusEvents() {
            this.content.addEventListener("touchstart", this.blurSearchInput, {
                once: !0
            }),
            this.content.addEventListener("touchmove", this.blurSearchInput, {
                once: !0
            })
        },
        removeSearchInputFocusEvents() {
            this.content.removeEventListener("touchstart", this.blurSearchInput),
            this.content.removeEventListener("touchmove", this.blurSearchInput)
        },
        onSearchResetClick(e) {
            e.preventDefault(),
            this.clearSearch(),
            this.search.elements.input.focus(),
            this.onSearchUpdate()
        },
        openSearch() {
            this.openFlyout(this.search.elements.el),
            this.el.classList.add(this.classNames.withSearchOpen)
        },
        closeSearch() {
            this.closeFlyout(this.search.elements.el)
        },
        clearSearch() {
            this.search.elements.formButtons.forEach(e=>e.setAttribute("tabindex", "-1")),
            this.search.elements.input.value = "",
            clearTimeout(this.search.elements.countTimeoutId)
        },
        setInitialSearchResults(e) {
            this.search.initialResults = e,
            this._renderSearchResults(this.search.templateFunction(this.search.initialResults))
        },
        setSearchResults(e=[]) {
            var n, a, i;
            const t = Ps.isDeepEqual(e, this.search.elements.initialResults)
              , s = Ps.isDeepEqual(e, this.search.elements.cachedResults);
            if (t && !this.search.elements.cachedResults) {
                this._updateSearchFieldButtons();
                return
            } else if (!e.length && this.search.elements.cachedResults) {
                this.search.elements.el.classList.add(this.classNames.searchResultsOverrideHighlight),
                this._updateSearchFieldButtons();
                return
            } else if (s) {
                const {cachedSearchValue: l} = this.search
                  , {value: u} = this.search.elements.input
                  , c = !(l.includes(u) || u.includes(l));
                this.search.elements.el.classList[c ? "add" : "remove"](this.classNames.searchResultsOverrideHighlight)
            } else
                this.search.elements.cachedResults = ((a = (n = this.search.elements.input) == null ? void 0 : n.value) == null ? void 0 : a.length) > 1 ? e : null,
                this.search.elements.el.classList.remove(this.classNames.searchResultsOverrideHighlight);
            this.search.cachedSearchValue = (i = this.search.elements.input) == null ? void 0 : i.value,
            this._renderSearchResults(this.search.templateFunction(e), s)
        },
        _addSearchEvents() {
            this.search.elements.el.addEventListener("focusin", this.onSearchFocusIn),
            this.search.elements.el.addEventListener("focusout", this.onSearchFocusOut),
            this.search.elements.flyout.addEventListener("mousemove", this.onSearchMouseMove),
            this.search.elements.link.addEventListener("click", this.onSearchMenuClick),
            this.search.elements.reset.addEventListener("click", this.onSearchResetClick),
            this.search.elements.input.addEventListener("keydown", this.onSearchInputKeyDown)
        },
        _removeSearchEvents() {
            this.search.elements.el.removeEventListener("focusin", this.onSearchFocusIn),
            this.search.elements.el.removeEventListener("focusout", this.onSearchFocusOut),
            this.search.elements.flyout.removeEventListener("mousemove", this.onSearchMouseMove),
            this.search.elements.link.removeEventListener("click", this.onSearchMenuClick),
            this.search.elements.reset.removeEventListener("click", this.onSearchResetClick),
            this.search.elements.input.removeEventListener("keydown", this.onSearchInputKeyDown)
        },
        _addSearchAnimationEvents() {
            this.el.addEventListener("transitionstart", this._onFlyoutTransitionStart),
            this.el.addEventListener("transitionend", this._onFlyoutTransitionEnd),
            this.search.elements.results.addEventListener("animationstart", this._onResultsAnimationStart),
            this.search.elements.results.addEventListener("animationend", this._onResultsAnimationEnd)
        },
        _removeSearchAnimationEvents() {
            this.el.removeEventListener("transitionstart", this._onFlyoutTransitionStart),
            this.el.removeEventListener("transitionend", this._onFlyoutTransitionEnd),
            this.search.elements.results.removeEventListener("animationstart", this._onResultsAnimationStart),
            this.search.elements.results.removeEventListener("animationend", this._onResultsAnimationEnd)
        },
        _onSearchAnimationEnd() {
            var e;
            this.search.state.activeState || this.search.elements.results.container.remove(),
            (e = this.search.elements.results.containerPrevious) == null || e.remove(),
            this.el.classList.remove(this.classNames.animating),
            this.search.state.isAnimating = !1,
            this.search.state.lastAnimatedItem = null
        },
        _onResultsAnimationStart({animationName: e, target: t}) {
            e.includes("-search-") && (this.search.state.lastAnimatedItem = t)
        },
        _onResultsAnimationEnd({animationName: e, elapsedTime: t, target: s}) {
            e.includes("-search-") && !!t && s === this.search.state.lastAnimatedItem && !this.search.state.isAnimating && this._onSearchAnimationEnd()
        },
        _onFlyoutTransitionStart({propertyName: e, target: t}) {
            const s = this._isBreakpointWithMenu() ? this.content : this.search.elements.flyout;
            t === s && e === "height" && (this.search.state.isAnimating = !0)
        },
        _onFlyoutTransitionEnd({propertyName: e, target: t}) {
            const s = this._isBreakpointWithMenu() ? this.content : this.search.elements.flyout;
            t === s && e === "height" && this._onSearchAnimationEnd()
        },
        _getSearchFlyoutHeightOffset() {
            const {marginTop: e} = getComputedStyle(this.search.elements.results)
              , t = this.search.elements.el.classList.contains(this.classNames.searchNoResults);
            let s = 0;
            return t && (s = parseInt(e) * -1),
            s
        },
        _setSearchItemNumbers(e) {
            const t = e || this.search.elements.flyout
              , s = t.querySelector(`.${this.classNames.searchResultsCurrent}`)
              , n = t.querySelector(`.${this.classNames.searchResultsPrevious}`)
              , a = s != null && s.children.length ? s : n;
            if (!a)
                return;
            const i = [`.${this.classNames.searchResultsHeader}`, `.${this.classNames.searchResultsListItem}`]
              , l = [...a.querySelectorAll(`.${this.classNames.searchResultsContainer}`)]
              , u = [...a.querySelectorAll(i.join(", "))];
            l.forEach((c,d)=>c.style.setProperty(this.cssVariables.flyoutGroupNumber, d)),
            u.forEach((c,d)=>c.style.setProperty(this.cssVariables.flyoutItemNumber, d)),
            this.search.elements.flyout.style.setProperty(this.cssVariables.flyoutItemTotal, u.length - 1)
        },
        _setupSearchElements() {
            this.search.elements.el = this.topNavList.querySelector(`.${this.classNames.search}`),
            this.search.elements.link = this.search.elements.el.querySelector(`.${this.classNames.linkSearch}`),
            this.search.elements.flyout = this.search.elements.el.querySelector(`.${this.classNames.subMenu}`),
            this.search.elements.form = this.search.elements.flyout.querySelector(`.${this.classNames.searchForm}`),
            this.search.elements.input = this.search.elements.flyout.querySelector(`.${this.classNames.searchInput}`),
            this.search.elements.submit = this.search.elements.flyout.querySelector(`.${this.classNames.searchSubmit}`),
            this.search.elements.reset = this.search.elements.flyout.querySelector(`.${this.classNames.searchReset}`),
            this.search.elements.results = this.search.elements.flyout.querySelector(`.${this.classNames.searchResults}`),
            this.search.elements.count = this.search.elements.flyout.querySelector(`.${this.classNames.searchResultsCount}`),
            this.search.elements.resultsLabel = this.search.elements.count.getAttribute("data-topnav-searchresults-label"),
            this.search.elements.resultsListText = Array.from(this.search.elements.flyout.querySelectorAll(`.${this.classNames.searchResultsListText}`)),
            this.search.elements.formButtons = [this.search.elements.submit, this.search.elements.reset],
            this.search.elements.currentResults = null,
            this.search.elements.countTimeoutId = null,
            this.search.state.countDelayTime = 3e3
        },
        _updateSearchFieldButtons() {
            const {value: e} = this.search.elements.input;
            this.search.elements.formButtons.forEach(t=>{
                e ? (t.setAttribute("tabindex", "0"),
                t.removeAttribute("disabled"),
                t.removeAttribute("aria-hidden")) : (t.setAttribute("tabindex", "-1"),
                t.setAttribute("disabled", ""),
                t.setAttribute("aria-hidden", "true"))
            }
            )
        },
        _highlightSearchSelection() {
            this.search.selectionController,
            this.search.selectionController.links.forEach((e,t)=>{
                e.classList[t === this.search.selectionController.active ? "add" : "remove"](this.classNames.searchResultsHover)
            }
            )
        },
        _initSearchResultsSelectionController() {
            var e;
            this.search.selectionController = {},
            this.search.selectionController.links = [],
            this.search.selectionController.active = -1,
            this.search.selectionController.links = ((e = this.search.elements.results.container) == null ? void 0 : e.querySelectorAll(`.${this.classNames.searchResultsListLink}`)) || []
        },
        _createSearchResultsTemplate(e) {
            const t = this._getCurrentLayout()
              , s = {
                width: t === "compact" ? 13 : 9,
                height: t === "compact" ? 25 : 16
            };
            return `${e.map(n=>{
                const {title: a, results: i, icon: l} = n;
                return `
				<div class="${this.classNames.searchResultsContainer}">
					<h2 class="${this.classNames.searchResultsHeader}">${a}</h2>
					<ul class="${this.classNames.searchResultsList}">

						${i.map(u=>{
                    const {url: c, highlight: d} = u;
                    let {label: r} = u;
                    if (d) {
                        const [g,_] = Object.entries(d)[0]
                          , o = Number(g) + Number(_)
                          , f = r.slice(0, g)
                          , w = r.slice(g, o)
                          , T = r.slice(o)
                          , {searchResultsTextHighlight: A} = this.classNames;
                        r = `${f}<span class="${A}">${w}</span>${T}`
                    }
                    return `
								<li class="${this.classNames.searchResultsListItem}">
									<a class="${this.classNames.searchResultsListLink}" href="${c}">
										<span class="${this.classNames.searchResultsListIcon}">
											<svg width="${s.width}" height="${s.height}"><use href="#${this.options.className}-list-icon-${l}-${t}" /></svg>
										</span>
										<span class="${this.classNames.searchResultsListText}">${r}</span>
									</a>
								</li>`
                }
                ).join("")}
					</ul>
				</div>`
            }
            ).join("")}`
        },
        _appendSearchResultsContent(e) {
            const t = document.createElement("div");
            return t.classList.add(this.classNames.searchResultsCurrent),
            t.innerHTML = e,
            this.search.elements.currentResults = t,
            t
        },
        _renderSearchResults(e, t=!1) {
            var i, l, u;
            const s = this.search.elements.el.querySelector(`.${this.classNames.searchResults}`)
              , n = this._appendSearchResultsContent(e)
              , a = this.search.elements.currentResults.querySelectorAll(`.${this.classNames.searchResultsContainer}`);
            if (this.el.classList.contains(this.classNames.withSearchOpen) && !t && this.el.classList.add(this.classNames.animating),
            (i = this.search.elements.results.containerPrevious) == null || i.remove(),
            this.search.elements.results.containerPrevious = this.search.elements.results.container,
            (l = this.search.elements.results.containerPrevious) == null || l.classList.remove(`${this.classNames.searchResultsCurrent}`),
            (u = this.search.elements.results.containerPrevious) == null || u.classList.add(`${this.classNames.searchResultsPrevious}`),
            s.appendChild(n),
            this.search.elements.results.container = n,
            this._initSearchResultsSelectionController(),
            this.search.previousState = this.search.state.activeState || 0,
            this.search.state.activeState = a.length,
            this.search.previousShift = this.search.currentShift,
            this.search.currentShift = `shift-${this.search.previousState}-${this.search.state.activeState}`,
            this.search.previousState === 2 && this.search.state.activeState === 1) {
                const c = [...this.search.elements.results.containerPrevious.querySelectorAll(`.${this.classNames.searchResultsHeader}`), ...this.search.elements.results.container.querySelectorAll(`.${this.classNames.searchResultsHeader}`)]
                  , [d,r,g] = c;
                r.textContent === g.textContent && (this.search.currentShift += "-slide")
            }
            if (this.search.state.activeState === 2) {
                const [c,d] = this.search.elements.results.container.querySelectorAll(`.${this.classNames.searchResultsContainer}`)
                  , r = c.scrollHeight
                  , {marginTop: g} = getComputedStyle(d)
                  , _ = parseInt(g);
                this.search.elements.flyout.style.setProperty(this.cssVariables.searchSuggestedLinksHeight, `${r + _}px`)
            }
            this.search.elements.el.classList.remove(this.search.previousShift),
            requestAnimationFrame(()=>{
                this.search.elements.el.classList.add(this.search.currentShift),
                this._setFlyoutHeight(this.search.elements.el, this._getSearchFlyoutHeightOffset()),
                this._setSearchItemNumbers(),
                this.onSearchResultsRendered(),
                t && this._onSearchAnimationEnd()
            }
            )
        }
    }];
    const Vi = {
        className: "topnav",
        mixins: [],
        curtainBlur: !0,
        scrimBlur: !0
    };
    class qi {
        constructor(t, s={}) {
            this.el = t,
            this.options = Object.assign({}, Vi, s),
            this._viewportsWithMenu = ["xsmall", "small", "medium"];
            const n = {
                ref: this,
                events: ["beforeCreate", "created", "beforeMount", "mounted", "destroy", "onLayoutChange", "onTextZoomResize", "onMenuTransitionEnd", "onMenuWillOpen", "onMenuWillClose", "onMenuOpen", "onMenuClose", "onFlyoutWillOpen", "onFlyoutWillClose", "onFlyoutOpen", "onFlyoutClose", "onMenuButtonClick", "onMenuBackButtonClick", "onHiddenMenuItemClick", "onMenuItemMouseOver", "onMenuItemMouseLeave", "onSearchUpdate", "onSearchResultsRendered"],
                viewportEvents: !0,
                breakpoints: [{
                    name: "xsmall",
                    mediaQuery: "only screen and (max-width: 480px)"
                }, {
                    name: "small",
                    mediaQuery: "only screen and (min-width: 481px) and (max-width: 640px)"
                }, {
                    name: "medium",
                    mediaQuery: "only screen and (min-width: 641px) and (max-width: 833px)"
                }, {
                    name: "large",
                    mediaQuery: "only screen and (min-width: 834px)"
                }],
                setupEvents: ["beforeCreate", "created", "beforeMount", "mounted"]
            };
            return this.classNames = {
                el: this.options.className,
                content: `${this.options.className}-content`,
                list: `${this.options.className}-list`,
                link: `${this.options.className}-link`,
                linkSearch: `${this.options.className}-link-search`,
                curtain: `${this.options.className}-curtain`,
                curtainNoBlur: `${this.options.className}-curtain-noblur`,
                scrim: `${this.options.className}-scrim`,
                scrimNoBlur: `${this.options.className}-scrim-noblur`,
                animating: `${this.options.className}-animating`,
                menuButton: `${this.options.className}-menutrigger-button`,
                menuBackButton: `${this.options.className}-menuback-button`,
                withMenuOpen: `${this.options.className}-with-menu-open`,
                menu: `${this.options.className}-menu`,
                menuList: `${this.options.className}-menu-list`,
                item: `${this.options.className}-item`,
                itemMenu: `${this.options.className}-item-menu`,
                itemSubMenu: `${this.options.className}-item-submenu`,
                itemFlyoutOpen: `${this.options.className}-item-flyout-open`,
                itemFlyoutChangePrevious: `${this.options.className}-item-flyout-change-previous`,
                itemFlyoutChangeNext: `${this.options.className}-item-flyout-change-next`,
                itemFlyoutClosing: `${this.options.className}-item-flyout-closing`,
                withFlyoutOpen: `${this.options.className}-with-flyout-open`,
                withFlyoutClosing: `${this.options.className}-with-flyout-closing`,
                flyout: `${this.options.className}-flyout`,
                flyoutContent: `${this.options.className}-flyout-content`,
                flyoutScrollContainer: `${this.options.className}-flyout-scroll-container`,
                flyoutShort: `${this.options.className}-flyout-short`,
                flyoutItem: `${this.options.className}-flyout-item`,
                flyoutItemGroup: `${this.options.className}-flyout-item-group`,
                withSubMenuOpen: `${this.options.className}-with-submenu-open`,
                withSearchOpen: `${this.options.className}-with-search-open`,
                subMenu: `${this.options.className}-submenu`,
                subMenuShort: `${this.options.className}-submenu-short`,
                subMenuLink: `${this.options.className}-submenu-link`,
                subMenuContent: `${this.options.className}-submenu-content`,
                subMenuTriggerGroup: `${this.options.className}-submenu-trigger-group`,
                subMenuTriggerLink: `${this.options.className}-submenu-trigger-link`,
                subMenuTriggerButton: `${this.options.className}-submenu-trigger-button`,
                subMenuGroup: `${this.options.className}-submenu-group`,
                subMenuGroupElevated: `${this.options.className}-submenu-group-elevated`,
                subMenuHeader: `${this.options.className}-submenu-header`,
                subMenuList: `${this.options.className}-submenu-list`,
                subMenusDisabled: `${this.options.className}-submenus-disabled`,
                blockTransitions: `${this.options.className}-block-transitions`,
                noScroll: `${this.options.className}-noscroll`,
                noScrollLong: `${this.options.className}-noscroll-long`,
                search: `${this.options.className}-search`,
                searchForm: `${this.options.className}-searchfield`,
                searchInput: `${this.options.className}-searchfield-input`,
                searchSubmit: `${this.options.className}-searchfield-submit`,
                searchReset: `${this.options.className}-searchfield-reset`,
                searchResults: `${this.options.className}-searchresults`,
                searchResultsCount: `${this.options.className}-searchresults-count`,
                searchResultsCurrent: `${this.options.className}-searchresults-current`,
                searchResultsPrevious: `${this.options.className}-searchresults-previous`,
                searchResultsContainer: `${this.options.className}-searchresults-container`,
                searchResultsHeader: `${this.options.className}-searchresults-header`,
                searchResultsList: `${this.options.className}-searchresults-list`,
                searchResultsListLink: `${this.options.className}-searchresults-list-link`,
                searchResultsListIcon: `${this.options.className}-searchresults-list-icon`,
                searchResultsListItem: `${this.options.className}-searchresults-list-item`,
                searchResultsListText: `${this.options.className}-searchresults-list-text`,
                searchResultsHover: `${this.options.className}-searchresults-hover`,
                searchResultsTextHighlight: `${this.options.className}-searchresults-list-text-highlight`,
                searchWithResults: `${this.options.className}-search-with-results`,
                searchNoResults: `${this.options.className}-search-no-results`,
                searchResultsOverrideHighlight: `${this.options.className}-searchresults-override-highlight`,
                textZoomIn: `${this.options.className}-text-zoom-in`
            },
            this.cssVariables = {
                topnavHeight: `--r-${this.options.className}-height`,
                flyoutItemNumber: `--r-${this.options.className}-flyout-item-number`,
                flyoutItemTotal: `--r-${this.options.className}-flyout-item-total`,
                flyoutGroupNumber: `--r-${this.options.className}-flyout-group-number`,
                flyoutGroupTotal: `--r-${this.options.className}-flyout-group-total`,
                flyoutElevatedGroupCount: `--r-${this.options.className}-flyout-elevated-group-count`,
                flyoutSpacing: `--r-${this.options.className}-flyout-spacing`,
                flyoutHeight: `--r-${this.options.className}-flyout-height`,
                flyoutPreviousHeight: `--r-${this.options.className}-previous-flyout-height`,
                flyoutNextHeight: `--r-${this.options.className}-next-flyout-height`,
                flyoutRateOfChange: `--r-${this.options.className}-flyout-rate`,
                flyoutCloseDelay: `--r-${this.options.className}-flyout-close-delay`,
                scrollbarWidth: `--r-${this.options.className}-scrollbar-width`,
                textZoomScale: `--r-${this.options.className}-text-zoom-scale`,
                fontSize: `--r-${this.options.className}-font-size`,
                searchSuggestedLinksHeight: `--r-${this.options.className}-suggested-links-height`
            },
            new $t(n,ri,...this.options.mixins),
            this.options.manuallyInitLifecycles ? this : this.beforeCreate().created().beforeMount().mounted()
        }
    }
    const Ds = ht(null)
      , ji = Ds.Provider
      , Pt = ht(null)
      , Gi = Pt.Provider
      , Zi = "data-focus-method"
      , Ws = "touch"
      , zi = "mouse"
      , Ki = "key";
    function Qi(e, t) {
        t.current = Ki
    }
    function Yi(e, t) {
        t.current !== Ws && (t.current = zi)
    }
    function Ji(e, t) {
        t.current = Ws
    }
    function Xi(e, t, s, n) {
        const a = e.target;
        s.current == null && (s.current = n.current),
        a.setAttribute(t, s.current),
        n.current = s.current,
        s.current = null
    }
    function ea(e, t) {
        e.target.removeAttribute(t)
    }
    function ta(e) {
        e.current = null
    }
    const sa = (e,t)=>{
        const s = Y(null)
          , n = Y(null);
        he(()=>{
            const a = e == null ? void 0 : e.current
              , i = a != null ? a : document.body
              , l = t != null ? t : Zi
              , u = {
                keydown: function(d) {
                    return Qi(d, n)
                },
                mousedown: function(d) {
                    return Yi(d, n)
                },
                touchstart: function(d) {
                    return Ji(d, n)
                },
                focus: function(d) {
                    return Xi(d, l, n, s)
                },
                blur: function(d) {
                    return ea(d, l)
                },
                windowBlur: function() {
                    return ta(n)
                }
            };
            return a !== null && (Object.entries(u).forEach(([c,d])=>{
                i.addEventListener(`${c}`, d, {
                    capture: !0,
                    passive: !0
                })
            }
            ),
            window.addEventListener("blur", u.windowBlur)),
            ()=>{
                a !== null && (Object.entries(u).forEach(([c,d])=>{
                    i.removeEventListener(`${c}`, d)
                }
                ),
                window.removeEventListener("blur", u.windowBlur))
            }
        }
        , [t, e])
    }
      , ye = e=>{
        if (typeof e != "undefined")
            return e.reduce((t,s)=>(t[s.name] = s.value,
            t), {})
    }
      , re = (e,t)=>{
        typeof t != "undefined" && typeof e != "undefined" && t.forEach(({name: s, value: n})=>{
            e.setAttribute(s, n)
        }
        )
    }
      , ft = (e,t)=>{
        typeof t != "undefined" && typeof e != "undefined" && t.forEach(({name: s, value: n})=>{
            e.removeAttribute(s)
        }
        )
    }
    ;
    async function na({searchLocale: e, apiRequestDomain: t, apiRequestURL: s, searchSrc: n}) {
        const a = await fetch(`${t}${s}?src=${n}&locale=${e}`);
        return a.ok ? await a.json() : await Promise.reject(new Error("no default links"))
    }
    async function ia({query: e, id: t, searchLocale: s, apiRequestDomain: n, apiRequestURL: a, searchSrc: i}) {
        const l = await fetch(`${n}${a}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: e,
                src: i,
                id: t,
                locale: s
            })
        });
        return l.ok ? await l.json() : await Promise.reject(new Error("no default links"))
    }
    var aa = {
        isEnabledWhen() {
            return this.searchEnabled !== !1
        },
        created() {
            this.amlSearch = {},
            this.amlSearch.requestId = "",
            this.amlSearch.requestType = "",
            this.amlSearch.apiRequestDomain = this.options.amlSearch.hasAbsoluteUrls ? `https://${this.options.amlSearch.wwwDomain}` : "",
            this.amlSearch.locale = this.options.amlSearch.searchSettings.searchFieldLocale || this.options.amlSearch.locale,
            this.options.amlSearch.searchSettings.searchSuggestionsEnabled !== !1 ? this.search.templateFunction = this._createAMLSearchTemplate : this.search.templateFunction = this._createAMLSearchDisabledTemplate
        },
        mounted() {
            const e = this.options.amlSearch.searchSettings.analyticsAttributes.map(t=>t.name === "data-analytics-region" ? {
                name: "data-analytics-region",
                value: `global nav - ${t.value}`
            } : t);
            re(this.search.elements.el, this.options.amlSearch.searchSettings.analyticsAttributes),
            re(this.search.elements.el, e),
            ft(this.search.elements.el, this.options.amlSearch.searchSettings.open.analyticsAttributes),
            this.options.amlSearch.searchSettings.searchSuggestionsEnabled !== !1 ? na({
                searchLocale: this.amlSearch.locale,
                apiRequestDomain: this.amlSearch.apiRequestDomain,
                apiRequestURL: this.options.amlSearch.searchSettings.defaultLinksApiUrl,
                searchSrc: this.options.amlSearch.searchSettings.searchFieldSrc
            }).then(t=>{
                const {id: s, results: n} = t;
                this.amlSearch.requestId = s;
                const a = this._transformData(n, {
                    quickLinks: this.options.amlSearch.searchSettings.defaultLinks
                });
                this.setInitialSearchResults(a),
                this._setPlaceHolderText(),
                re(this.search.elements.link, this.options.amlSearch.searchSettings.open.analyticsAttributes)
            }
            ).catch(()=>{}
            ) : this.setInitialSearchResults()
        },
        onLayoutChange() {
            re(this.search.elements.link, this.options.amlSearch.searchSettings.open.analyticsAttributes),
            this._setPlaceHolderText()
        },
        onFlyoutOpen() {
            ft(this.search.elements.link, this.options.amlSearch.searchSettings.open.analyticsAttributes),
            this._isBreakpointWithMenu() && this.menuButton.setAttribute("aria-label", this.options.amlSearch.searchSettings.close.ariaLabel)
        },
        onFlyoutClose() {
            re(this.search.elements.link, this.options.amlSearch.searchSettings.open.analyticsAttributes),
            this.search.elements.form.setAttribute("action", this.options.amlSearch.searchSettings.searchFieldAction)
        },
        onSearchUpdate() {
            if (this.options.amlSearch.searchSettings.searchSuggestionsEnabled === !1)
                return;
            const {value: e} = this.search.elements.input;
            e.length >= 2 ? (this.amlSearch.requestType = "suggestions",
            ia({
                query: e,
                id: this.amlSearch.requestId,
                searchLocale: this.amlSearch.locale,
                apiRequestDomain: this.amlSearch.apiRequestDomain,
                apiRequestURL: this.options.amlSearch.searchSettings.suggestionsApiUrl,
                searchSrc: this.options.amlSearch.searchSettings.searchFieldSrc
            }).then(t=>{
                const {results: s} = t
                  , n = this._transformData(s, {
                    quickLinks: this.options.amlSearch.searchSettings.suggestedLinks,
                    suggestions: this.options.amlSearch.searchSettings.suggestedSearches
                });
                this.setSearchResults(n)
            }
            ).catch(()=>{}
            )) : (this.amlSearch.requestType = "defaultlinks",
            this.setSearchResults(this.search.initialResults))
        },
        _setPlaceHolderText() {
            this._isBreakpointWithMenu() ? this.search.elements.input.setAttribute("placeholder", this.options.amlSearch.searchSettings.searchFieldPlaceholderCompact) : this.search.elements.input.setAttribute("placeholder", this.options.amlSearch.searchSettings.searchFieldPlaceholderRegular)
        },
        _transformData(e, t) {
            const s = [];
            for (const n of e) {
                if (!n.sectionResults.length)
                    continue;
                const a = t[n.sectionName]
                  , i = {
                    title: a.title,
                    icon: a.images,
                    sectionName: n.sectionName,
                    analyticsAttributes: a.analyticsAttributes,
                    results: n.sectionResults
                };
                n.sectionName === "quickLinks" ? s.unshift(i) : s.push(i)
            }
            return s
        },
        _createAMLSearchTemplate(e) {
            const t = {
                quickLinks: {
                    label: "defaultlinks",
                    event: 50
                },
                suggestedLinks: {
                    label: "quicklinks",
                    event: 38
                },
                suggestedSearches: {
                    label: "suggestions",
                    event: 39
                }
            };
            return `${e.map(s=>{
                const {title: n, icon: a, analyticsAttributes: i, results: l} = s
                  , u = this.amlSearch.requestType === "defaultlinks" ? "quickLinks" : s.sectionName === "quickLinks" ? "suggestedLinks" : "suggestedSearches"
                  , c = i.map(d=>d.name === "data-analytics-region" ? `${d.name}="global nav - ${d.value}"` : d).join("");
                return `<div
					class="${this.classNames.searchResultsContainer}"
					${c}
				>
					<h2 class="${this.classNames.searchResultsHeader}">${n}</h2>
					<ul class="${this.classNames.searchResultsList}" role="list">

						${l.map((d,r)=>{
                    const {url: g, highlight: _} = d
                      , o = _ !== void 0 && Object.keys(_).length > 0;
                    let {label: f} = d;
                    if (o) {
                        const [A,b] = Object.entries(_)[0]
                          , S = Number(A) + Number(b)
                          , E = f.slice(0, A)
                          , O = f.slice(A, S)
                          , R = f.slice(S)
                          , {searchResultsTextHighlight: V} = this.classNames;
                        f = `${E}<span class="${V}">${O}</span>${R}`
                    }
                    const w = t[u].label
                      , T = [{
                        name: "query",
                        value: this.search.elements.input.value || "no keyword"
                    }, {
                        name: "section",
                        value: w
                    }, {
                        name: "items",
                        value: l.length
                    }, {
                        name: "index",
                        value: r
                    }, {
                        name: "label",
                        value: d.label
                    }];
                    return `
								<li class="${this.classNames.searchResultsListItem}" role="listitem">
									<a
										class="${this.classNames.searchResultsListLink}"
										href="${g}"
										${T.map(({name: A, value: b})=>`data-${A}="${b}"`).join(" ")}
										data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},
											events:event${t[u].event}"
									>
										<span class="${this.classNames.searchResultsListIcon}">

										${a.map(A=>{
                        const {name: b, assetInline: S} = A;
                        return `<span class="globalnav-image-${b} globalnav-link-image">${S}</span>`
                    }
                    ).join("")}


										</span>
										<span class="${this.classNames.searchResultsListText}">${f}</span>
									</a>
								</li>`
                }
                ).join("")}
					</ul>
				</div>`
            }
            ).join("")}`
        },
        _createAMLSearchDisabledTemplate() {
            return `<div class="${this.classNames.searchResultsContainer}"><div>`
        }
    }
      , oa = [st, {
        isEnabledWhen() {
            return this.bagEnabled !== !1
        },
        created() {
            this.bag = {},
            this.classNames.withBagOpen = "globalnav-with-bag-open",
            this.classNames.bag = "globalnav-bag",
            this.classNames.linkBag = "globalnav-link-bag",
            this.classNames.bagBadge = "globalnav-bag-badge",
            this.bindedOnBagLinkKeyDown = this.onBagLinkKeyDown.bind(this)
        },
        mounted() {
            this._setupBagElements(),
            this._addBagEvents();
            const t = this.bag.link.getAttribute("href").replace(this.options.bagData.bagHref, this.options.bagData.data.open.url);
            this.bag.link.setAttribute("href", t)
        },
        destroy() {
            this.closeBag(),
            this._removeBagEvents()
        },
        onLayoutChange() {
            this.el.classList.contains(this.classNames.withBagOpen) && this.closeBag(),
            this._isBreakpointWithMenu() && ft(this.menuButton, this.options.bagData.data.close.analyticsAttributes),
            this.bag.link.setAttribute("aria-label", this.options.bagData.data.open.ariaLabel),
            re(this.bag.link, this.options.bagData.data.open.analyticsAttributes),
            re(this.bag.bagBadge, this.options.bagData.data.open.analyticsAttributes)
        },
        onFlyoutWillOpen(e) {
            e === this.bag.el && (this.bag.isOpening = !0)
        },
        onFlyoutOpen(e) {
            e === this.bag.el && (this.bag.link.setAttribute("aria-label", this.options.bagData.data.close.ariaLabel),
            re(this.bag.link, this.options.bagData.data.close.analyticsAttributes),
            re(this.bag.bagBadge, this.options.bagData.data.close.analyticsAttributes),
            this._isBreakpointWithMenu() && (this.menuButton.setAttribute("aria-label", this.options.bagData.data.close.ariaLabel),
            re(this.menuButton, this.options.bagData.data.close.analyticsAttributes)),
            this.bag.isOpening = !1)
        },
        onFlyoutClose(e) {
            e === this.bag.el && (this.bag.link.setAttribute("aria-label", this.options.bagData.data.open.ariaLabel),
            re(this.bag.link, this.options.bagData.data.open.analyticsAttributes),
            re(this.bag.bagBadge, this.options.bagData.data.open.analyticsAttributes),
            this._isBreakpointWithMenu() && ft(this.menuButton, this.options.bagData.data.close.analyticsAttributes))
        },
        onFlyoutWillClose(e) {
            e === this.bag.el && this.el.classList.remove(this.classNames.withBagOpen)
        },
        onMenuButtonClick() {
            this._currentFlyout === this.bag.el && this.closeBag()
        },
        onBagMenuClick(e) {
            e.preventDefault(),
            this._isFlyoutOpen(this.bag.el) ? this.closeBag() : this.openBag(),
            e.target.dispatchEvent(new window.CustomEvent("clickbag",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    originalTarget: e.target
                }
            }))
        },
        onBagFocusIn() {
            this.bag.el.addEventListener("keydown", this.bindedOnBagLinkKeyDown)
        },
        onBagFocusOut() {
            this.bag.el.removeEventListener("keydown", this.bindedOnBagLinkKeyDown)
        },
        onBagLinkKeyDown(e) {
            const {keyCode: t} = e;
            switch (t) {
            case be.SPACEBAR:
                this.onBagMenuClick(e);
                break
            }
        },
        openBag() {
            this.openFlyout(this.bag.el),
            this.el.classList.add(this.classNames.withBagOpen)
        },
        closeBag() {
            this.closeFlyout(this.bag.el)
        },
        _addBagEvents() {
            this.bag.el.addEventListener("focusin", this.onBagFocusIn),
            this.bag.el.addEventListener("focusout", this.onBagFocusOut),
            this.bag.el.addEventListener("focusout", this.onMenuItemFocusOut),
            this.bag.link.addEventListener("click", this.onBagMenuClick)
        },
        _removeBagEvents() {
            this.bag.el.removeEventListener("focusin", this.onBagFocusIn),
            this.bag.el.removeEventListener("focusout", this.onBagFocusOut),
            this.bag.el.removeEventListener("focusout", this.onMenuItemFocusOut),
            this.bag.link.removeEventListener("click", this.onBagMenuClick)
        },
        _setupBagElements() {
            this.bag.el = this.topNavList.querySelector(`.${this.classNames.bag}`),
            this.bag.link = this.bag.el.querySelector(`.${this.classNames.linkBag}`),
            this.bag.flyout = this.bag.el.querySelector(`.${this.classNames.subMenu}`),
            this.bag.bagBadge = this.bag.el.querySelector(`.${this.classNames.bagBadge}`)
        }
    }]
      , ra = {
        mounted() {
            window.dispatchEvent(new window.CustomEvent("globalnav:mounted",{
                detail: {
                    target: this.el
                }
            }))
        },
        onFlyoutWillOpen(e) {
            this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutWillOpen",{
                detail: {
                    target: e,
                    layout: this._isBreakpointWithMenu() ? "compact" : "regular"
                }
            }))
        },
        onFlyoutOpen(e) {
            this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutOpen",{
                detail: {
                    target: e,
                    layout: this._isBreakpointWithMenu() ? "compact" : "regular"
                }
            }))
        },
        onFlyoutWillClose(e) {
            this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutWillClose",{
                detail: {
                    target: e,
                    layout: this._isBreakpointWithMenu() ? "compact" : "regular"
                }
            }))
        },
        onFlyoutClose(e) {
            this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutClose",{
                detail: {
                    target: e,
                    layout: this._isBreakpointWithMenu() ? "compact" : "regular"
                }
            }))
        }
    }
      , la = [st, {
        mounted() {
            this.menuButton.setAttribute("aria-label", this.options.menuData.data.open.ariaLabel)
        },
        onFlyoutOpen(e) {
            this._isBreakpointWithMenu() && this.menuButton.setAttribute("aria-label", this.options.menuData.data.close.ariaLabel)
        },
        onFlyoutClose(e) {
            this._isBreakpointWithMenu() && this.menuButton.setAttribute("aria-label", this.options.menuData.data.open.ariaLabel)
        }
    }];
    function Le(e, t) {
        return e.match(/^http[s]?/) != null ? e : t !== void 0 && e.startsWith("/") ? `https://${t}${e}` : e
    }
    const ca = ["consumer"]
      , Dt = (e,t,s)=>{
        e.segmentCode !== void 0 && !ca.includes(e.segmentCode) && t(!1),
        e.segmentCode === void 0 && s !== !1 && t(!0)
    }
    ;
    function Hs(e, t) {
        for (var s in t)
            e[s] = t[s];
        return e
    }
    function Us(e, t) {
        for (var s in e)
            if (s !== "__source" && !(s in t))
                return !0;
        for (var n in t)
            if (n !== "__source" && e[n] !== t[n])
                return !0;
        return !1
    }
    function Vs(e) {
        this.props = e
    }
    (Vs.prototype = new pe).isPureReactComponent = !0,
    Vs.prototype.shouldComponentUpdate = function(e, t) {
        return Us(this.props, e) || Us(this.state, t)
    }
    ;
    var qs = N.__b;
    N.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
        e.ref = null),
        qs && qs(e)
    }
    ;
    var ua = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    function js(e) {
        function t(s) {
            var n = Hs({}, s);
            return delete n.ref,
            e(n, s.ref || null)
        }
        return t.$$typeof = ua,
        t.render = t,
        t.prototype.isReactComponent = t.__f = !0,
        t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
        t
    }
    var ha = N.__e;
    N.__e = function(e, t, s, n) {
        if (e.then) {
            for (var a, i = t; i = i.__; )
                if ((a = i.__c) && a.__c)
                    return t.__e == null && (t.__e = s.__e,
                    t.__k = s.__k),
                    a.__c(e, t)
        }
        ha(e, t, s, n)
    }
    ;
    var Gs = N.unmount;
    function Zs(e, t, s) {
        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
            typeof n.__c == "function" && n.__c()
        }),
        e.__c.__H = null),
        (e = Hs({}, e)).__c != null && (e.__c.__P === s && (e.__c.__P = t),
        e.__c = null),
        e.__k = e.__k && e.__k.map(function(n) {
            return Zs(n, t, s)
        })),
        e
    }
    function zs(e, t, s) {
        return e && (e.__v = null,
        e.__k = e.__k && e.__k.map(function(n) {
            return zs(n, t, s)
        }),
        e.__c && e.__c.__P === t && (e.__e && s.insertBefore(e.__e, e.__d),
        e.__c.__e = !0,
        e.__c.__P = s)),
        e
    }
    function Wt() {
        this.__u = 0,
        this.t = null,
        this.__b = null
    }
    function Ks(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e)
    }
    function _t() {
        this.u = null,
        this.o = null
    }
    N.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(),
        t && e.__h === !0 && (e.type = null),
        Gs && Gs(e)
    }
    ,
    (Wt.prototype = new pe).__c = function(e, t) {
        var s = t.__c
          , n = this;
        n.t == null && (n.t = []),
        n.t.push(s);
        var a = Ks(n.__v)
          , i = !1
          , l = function() {
            i || (i = !0,
            s.__R = null,
            a ? a(u) : u())
        };
        s.__R = l;
        var u = function() {
            if (!--n.__u) {
                if (n.state.__a) {
                    var d = n.state.__a;
                    n.__v.__k[0] = zs(d, d.__c.__P, d.__c.__O)
                }
                var r;
                for (n.setState({
                    __a: n.__b = null
                }); r = n.t.pop(); )
                    r.forceUpdate()
            }
        }
          , c = t.__h === !0;
        n.__u++ || c || n.setState({
            __a: n.__b = n.__v.__k[0]
        }),
        e.then(l, l)
    }
    ,
    Wt.prototype.componentWillUnmount = function() {
        this.t = []
    }
    ,
    Wt.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var s = document.createElement("div")
                  , n = this.__v.__k[0].__c;
                this.__v.__k[0] = Zs(this.__b, s, n.__O = n.__P)
            }
            this.__b = null
        }
        var a = t.__a && Ke(Q, null, e.fallback);
        return a && (a.__h = null),
        [Ke(Q, null, t.__a ? null : e.children), a]
    }
    ;
    var Qs = function(e, t, s) {
        if (++s[1] === s[0] && e.o.delete(t),
        e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
            for (s = e.u; s; ) {
                for (; s.length > 3; )
                    s.pop()();
                if (s[1] < s[0])
                    break;
                e.u = s = s[2]
            }
    };
    (_t.prototype = new pe).__a = function(e) {
        var t = this
          , s = Ks(t.__v)
          , n = t.o.get(e);
        return n[0]++,
        function(a) {
            var i = function() {
                t.props.revealOrder ? (n.push(a),
                Qs(t, e, n)) : a()
            };
            s ? s(i) : i()
        }
    }
    ,
    _t.prototype.render = function(e) {
        this.u = null,
        this.o = new Map;
        var t = Je(e.children);
        e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
        for (var s = t.length; s--; )
            this.o.set(t[s], this.u = [1, 0, this.u]);
        return e.children
    }
    ,
    _t.prototype.componentDidUpdate = _t.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach(function(t, s) {
            Qs(e, s, t)
        })
    }
    ;
    var ma = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103
      , da = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
      , pa = typeof document != "undefined"
      , fa = function(e) {
        return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
    pe.prototype.isReactComponent = {},
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
        Object.defineProperty(pe.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    });
    var Ys = N.event;
    function _a() {}
    function ga() {
        return this.cancelBubble
    }
    function va() {
        return this.defaultPrevented
    }
    N.event = function(e) {
        return Ys && (e = Ys(e)),
        e.persist = _a,
        e.isPropagationStopped = ga,
        e.isDefaultPrevented = va,
        e.nativeEvent = e
    }
    ;
    var Js = {
        configurable: !0,
        get: function() {
            return this.class
        }
    }
      , Xs = N.vnode;
    N.vnode = function(e) {
        var t = e.type
          , s = e.props
          , n = s;
        if (typeof t == "string") {
            var a = t.indexOf("-") === -1;
            for (var i in n = {},
            s) {
                var l = s[i];
                pa && i === "children" && t === "noscript" || i === "value" && "defaultValue"in s && l == null || (i === "defaultValue" && "value"in s && s.value == null ? i = "value" : i === "download" && l === !0 ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !fa(s.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : a && da.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : l === null && (l = void 0),
                /^oninput$/i.test(i) && (i = i.toLowerCase(),
                n[i] && (i = "oninputCapture")),
                n[i] = l)
            }
            t == "select" && n.multiple && Array.isArray(n.value) && (n.value = Je(s.children).forEach(function(u) {
                u.props.selected = n.value.indexOf(u.props.value) != -1
            })),
            t == "select" && n.defaultValue != null && (n.value = Je(s.children).forEach(function(u) {
                u.props.selected = n.multiple ? n.defaultValue.indexOf(u.props.value) != -1 : n.defaultValue == u.props.value
            })),
            e.props = n,
            s.class != s.className && (Js.enumerable = "className"in s,
            s.className != null && (n.class = s.className),
            Object.defineProperty(n, "className", Js))
        }
        e.$$typeof = ma,
        Xs && Xs(e)
    }
    ;
    var en = N.__r;
    N.__r = function(e) {
        en && en(e),
        e.__c
    }
    ;
    const Ht = ({children: e})=>h("div", {
        className: "globalnav-flyout-content globalnav-submenu-content",
        children: e
    })
      , tn = ({children: e})=>h(Q, {
        children: h("div", {
            class: "globalnav-flyout-scroll-container",
            children: e
        })
    });
    function ba({analyticsAttributes: e, count: t, unit: s}) {
        const n = ye(e);
        return h("span", {
            class: "globalnav-bag-badge",
            "aria-hidden": "true",
            ...n,
            children: [h("span", {
                class: "globalnav-bag-badge-separator"
            }), h("span", {
                class: "globalnav-bag-badge-number",
                children: t
            }), h("span", {
                class: "globalnav-bag-badge-unit",
                children: s
            })]
        })
    }
    const ya = ({children: e})=>h("div", {
        id: "globalnav-submenu-bag",
        class: "globalnav-flyout globalnav-submenu",
        "aria-labelledby": "globalnav-menubutton-link-bag",
        children: e
    });
    var Sa = js(({children: e, count: t, analyticsAttributes: s},n)=>h("li", {
        class: t > 0 ? "globalnav-item globalnav-bag with-badge" : "globalnav-item globalnav-bag",
        id: "globalnav-bag",
        ref: n,
        ...ye(s),
        children: e
    }));
    const sn = ({images: e})=>h(Q, {
        children: e == null ? void 0 : e.map(t=>{
            const {name: s, assetInline: n} = t;
            return h("span", {
                className: `globalnav-image-${s}`,
                dangerouslySetInnerHTML: {
                    __html: n
                }
            })
        }
        )
    })
      , Ea = ({href: e, ariaLabel: t, images: s, analyticsAttributes: n})=>{
        const a = ye(n);
        return h("a", {
            role: "button",
            id: "globalnav-menubutton-link-bag",
            className: "globalnav-link globalnav-link-bag",
            href: e,
            "aria-label": t,
            "data-globalnav-item-name": "bag",
            "data-topnav-flyout-trigger-regular": !0,
            "data-topnav-flyout-trigger-compact": !0,
            ...a,
            children: h(sn, {
                images: s
            })
        })
    }
      , Na = ({children: e})=>h("div", {
        className: "globalnav-bag-wrapper",
        children: e
    });
    var wa = js(({href: e, bag: t, bagFlyout: s, badgeCount: n},a)=>{
        const [i,l] = X("")
          , u = "{%BAGITEMCOUNT%}"
          , c = 99
          , d = "+";
        function r(_) {
            return _ > c ? c : _
        }
        function g(_) {
            return (_ > c ? `${c}${d}` : _).toString()
        }
        return l(r(n) !== 0 ? `${t.badge.ariaLabel.replace(u, g(n))}` : `${t.open.ariaLabel}`),
        h(Q, {
            children: h(Sa, {
                ref: a,
                count: n,
                analyticsAttributes: t.analyticsAttributes,
                children: [h(Na, {
                    children: [h(Ea, {
                        href: e,
                        ariaLabel: i,
                        images: t.open.images,
                        analyticsAttributes: t.open.analyticsAttributes
                    }), h(ba, {
                        count: r(n),
                        unit: d,
                        analyticsAttributes: t.open.analyticsAttributes
                    })]
                }), h(ya, {
                    children: h(tn, {
                        children: h(Ht, {
                            children: s
                        })
                    })
                })]
            })
        })
    }
    );
    const La = ({id: e, title: t})=>h("h2", {
        class: "globalnav-submenu-header",
        id: e,
        children: t
    })
      , Ca = ({text: e, url: t, analyticsAttributes: s, ariaLabel: n})=>{
        const a = Xe(Pt)
          , i = ye(s)
          , l = n !== "" ? n : null;
        return h("a", {
            href: Le(t, (a == null ? void 0 : a.hasAbsoluteUrls) === !0 ? a.wwwDomain : void 0),
            className: "globalnav-submenu-link",
            ...i,
            "aria-label": l,
            children: e
        })
    }
      , nn = ({type: e, text: t, url: s, ariaLabel: n, analyticsAttributes: a})=>h("li", {
        className: `globalnav-submenu-list-item${e !== void 0 ? "-" + e : ""}`,
        children: h(Ca, {
            text: t,
            url: s,
            ariaLabel: n,
            analyticsAttributes: a
        })
    })
      , Aa = ({data: e})=>{
        var t, s;
        return h("ul", {
            class: "globalnav-submenu-list",
            "aria-labelledby": e.id,
            children: [(t = e.elevatedLinks) == null ? void 0 : t.map(({id: n, text: a, url: i, ariaLabel: l, analyticsAttributes: u})=>h(nn, {
                type: "elevated",
                text: a,
                url: i,
                ariaLabel: l,
                analyticsAttributes: u
            }, n)), (s = e.baseLinks) == null ? void 0 : s.map(({id: n, text: a, url: i, ariaLabel: l, analyticsAttributes: u})=>h(nn, {
                text: a,
                url: i,
                ariaLabel: l,
                analyticsAttributes: u
            }, n))]
        })
    }
      , an = ({data: e})=>{
        const [t,s] = X([]);
        he(()=>{
            const i = e.analyticsAttributes.map(l=>l.name === "data-analytics-region" ? {
                name: "data-analytics-region",
                value: `global nav - ${l.value}`
            } : l);
            s(i)
        }
        , [e.analyticsAttributes]);
        const n = e.elevatedLinks != null && e.elevatedLinks.length > 0
          , a = ye(t);
        return h("div", {
            className: `globalnav-submenu-group ${n ? "globalnav-submenu-group-elevated" : ""}`,
            ...a,
            children: [h(La, {
                id: e.id,
                title: e.title
            }), h(Aa, {
                data: e
            })]
        })
    }
      , ka = ({name: e, elevatedGroups: t, baseGroups: s})=>h("div", {
        id: `globalnav-submenu-link-${e}`,
        className: "globalnav-flyout globalnav-submenu",
        "aria-labelledby": `globalnav-menubutton-link-${e}`,
        children: h("div", {
            class: "globalnav-flyout-scroll-container",
            children: h(Ht, {
                children: [t == null ? void 0 : t.map(n=>{
                    const {id: a} = n;
                    return h(an, {
                        data: n
                    }, a)
                }
                ), s == null ? void 0 : s.map(n=>{
                    const {id: a} = n;
                    return h(an, {
                        data: n
                    }, a)
                }
                )]
            })
        })
    })
      , Ma = ({name: e, text: t, url: s, submenuChevron: n, isMenuItem: a, hasSubMenu: i=!1, analyticsAttributes: l, ariaLabel: u, submenuAriaLabel: c, images: d})=>{
        const r = Xe(Pt)
          , g = d.filter(o=>a ? o.name === "regular" : o)
          , _ = ye(l);
        return a ? h("ul", {
            class: "globalnav-submenu-trigger-group",
            role: "none",
            children: [h("li", {
                class: "globalnav-submenu-trigger-item",
                children: h("a", {
                    className: `globalnav-link globalnav-submenu-trigger-link globalnav-link-${e}`,
                    href: Le(s, (r == null ? void 0 : r.hasAbsoluteUrls) === !0 ? r.wwwDomain : void 0),
                    "data-globalnav-item-name": e,
                    "data-topnav-flyout-trigger-compact": !0,
                    ..._,
                    "aria-label": u,
                    children: [h("span", {
                        class: "globalnav-link-text-container",
                        children: [g.map(o=>h("span", {
                            className: `globalnav-image-${o.name} globalnav-link-image`,
                            dangerouslySetInnerHTML: {
                                __html: o.assetInline
                            }
                        })), h("span", {
                            className: "globalnav-link-text",
                            children: t
                        })]
                    }), i && h("span", {
                        class: "globalnav-link-chevron",
                        children: h("svg", {
                            height: "48",
                            viewBox: "0 0 9 48",
                            width: "9",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: h("path", {
                                d: "m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z"
                            })
                        })
                    })]
                })
            }), i && h("li", {
                class: "globalnav-submenu-trigger-item",
                children: h("button", {
                    id: `globalnav-menubutton-link-${e}`,
                    class: "globalnav-submenu-trigger-button",
                    "aria-expanded": "false",
                    "aria-controls": `globalnav-submenu-link-${e}`,
                    "aria-label": c,
                    "data-topnav-flyout-trigger-regular": !0,
                    children: n == null ? void 0 : n.open.images.map(o=>h("span", {
                        className: `globalnav-image-${o.name} globalnav-submenu-button-icon`,
                        dangerouslySetInnerHTML: {
                            __html: o.assetInline
                        }
                    }))
                })
            })]
        }) : h("a", {
            className: `globalnav-link globalnav-link-${e}`,
            href: Le(s, (r == null ? void 0 : r.hasAbsoluteUrls) === !0 ? r.wwwDomain : void 0),
            "data-globalnav-item-name": e,
            ..._,
            "aria-label": t,
            children: [g.map(o=>h("span", {
                className: `globalnav-image-${o.name} globalnav-link-image`,
                dangerouslySetInnerHTML: {
                    __html: o.assetInline
                }
            })), h("span", {
                className: "globalnav-link-text",
                children: t
            })]
        })
    }
      , on = ({id: e, isMenuItem: t, name: s, text: n, url: a, images: i, submenuChevron: l, ariaLabel: u, submenuAriaLabel: c, analyticsAttributes: d, linksData: r})=>{
        var o, f;
        const g = ((o = r == null ? void 0 : r.baseGroups) == null ? void 0 : o.length) != null || ((f = r == null ? void 0 : r.elevatedGroups) == null ? void 0 : f.length) != null;
        return h(t ? "div" : "li", {
            className: `
				globalnav-item
				globalnav-item-${s}
				${t ? "globalnav-item-menu" : ""}
				${g ? "globalnav-item-submenu" : ""}
			`,
            "data-analytics-element-engagement": `globalnav hover - ${s}`,
            children: [h(Ma, {
                name: s,
                isMenuItem: t,
                text: n,
                url: a,
                submenuChevron: l,
                hasSubMenu: g,
                ariaLabel: u,
                submenuAriaLabel: c,
                analyticsAttributes: d,
                images: i
            }), g && h(ka, {
                name: r.name,
                elevatedGroups: r.elevatedGroups,
                baseGroups: r.baseGroups
            }, e)]
        })
    }
      , $a = ["apple", "search", "bag"];
    async function Ta(e, t) {
        return await (await fetch(`${t}?locale=${e}`)).json()
    }
    const rn = (e,t)=>{
        let s;
        return Array.isArray(t) && (s = t.find(n=>n.name === e ? n : !1)),
        s
    }
    ;
    async function Oa(e) {
        let t = e;
        try {
            let {AosLinkReplacer: s} = await Promise.resolve().then(function() {
                return mn
            });
            s.shouldReplaceSubMenuLinks() && (t = await s.replaceSubMenuLinks(e))
        } catch {
            t = e
        }
        return t
    }
    const Fa = ({links: e, submenuChevron: t, locale: s, submenuApiUrl: n, subMenuData: a=[], submenusEnabled: i=!0})=>{
        var r, g;
        const [l,u] = X([])
          , c = Xe(Ds)
          , d = e == null ? void 0 : e.reduce((_,o)=>($a.includes(o.name) ? _.nonMenuItems.push(o) : _.menuItems.push(o),
        _), {
            nonMenuItems: [],
            menuItems: []
        });
        return he(()=>{
            let _ = !1;
            return Ta(s, n).then(Oa).then(o=>{
                _ || u(o)
            }
            ).catch(()=>{}
            ),
            ()=>{
                _ = !0
            }
        }
        , []),
        he(()=>{
            Object.keys(l).length > 0 && (c == null || c.initiateFlyouts(),
            c == null || c.initiateSubMenus()),
            c !== null && (c.submenuEnabled = i)
        }
        , [c, l, i]),
        h(Q, {
            children: [(r = d == null ? void 0 : d.nonMenuItems) == null ? void 0 : r.map(_=>{
                const {id: o, name: f, text: w, url: T, images: A, analyticsAttributes: b} = _
                  , S = rn(f, l);
                return h(on, {
                    id: o,
                    isMenuItem: !1,
                    name: f,
                    linksData: S,
                    text: w,
                    url: T,
                    images: A,
                    analyticsAttributes: b
                })
            }
            ), h("li", {
                class: "globalnav-item globalnav-menu",
                "data-topnav-flyout-item": "menu",
                "data-topnav-flyout-label": "Menu",
                role: "none",
                children: h("div", {
                    class: "globalnav-flyout",
                    "data-topnav-flyout": "menu",
                    children: h("div", {
                        class: "globalnav-menu-list",
                        children: (g = d == null ? void 0 : d.menuItems) == null ? void 0 : g.map(_=>{
                            const {id: o, name: f, text: w, url: T, ariaLabel: A, submenuAriaLabel: b, images: S, analyticsAttributes: E} = _
                              , O = rn(f, l);
                            return h(on, {
                                id: o,
                                isMenuItem: !0,
                                name: f,
                                linksData: O,
                                submenuChevron: t,
                                text: w,
                                url: T,
                                ariaLabel: A,
                                submenuAriaLabel: b,
                                images: S,
                                analyticsAttributes: E
                            })
                        }
                        )
                    })
                })
            })]
        })
    }
    ;
    function Ia({openLabel: e="Menu", closeLabel: t="Close"}) {
        return h("div", {
            class: "globalnav-menutrigger",
            children: h("button", {
                id: "globalnav-menutrigger-button",
                class: "globalnav-menutrigger-button",
                "aria-controls": "globalnav-list",
                "aria-label": e,
                "data-topnav-menu-label-open": e,
                "data-topnav-menu-label-close": t,
                "data-topnav-flyout-trigger-compact": "menu",
                children: h("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    children: [h("polyline", {
                        id: "globalnav-menutrigger-bread-bottom",
                        class: "globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        points: "2 12, 16 12",
                        children: [h("animate", {
                            id: "globalnav-anim-menutrigger-bread-bottom-open",
                            attributeName: "points",
                            keyTimes: "0;0.5;1",
                            dur: "0.24s",
                            begin: "indefinite",
                            fill: "freeze",
                            calcMode: "spline",
                            keySplines: "0.42, 0, 1, 1;0, 0, 0.58, 1",
                            values: " 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                        }), h("animate", {
                            id: "globalnav-anim-menutrigger-bread-bottom-close",
                            attributeName: "points",
                            keyTimes: "0;0.5;1",
                            dur: "0.24s",
                            begin: "indefinite",
                            fill: "freeze",
                            calcMode: "spline",
                            keySplines: "0.42, 0, 1, 1;0, 0, 0.58, 1",
                            values: " 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                        })]
                    }), h("polyline", {
                        id: "globalnav-menutrigger-bread-top",
                        class: "globalnav-menutrigger-bread globalnav-menutrigger-bread-top",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        points: "2 5, 16 5",
                        children: [h("animate", {
                            id: "globalnav-anim-menutrigger-bread-top-open",
                            attributeName: "points",
                            keyTimes: "0;0.5;1",
                            dur: "0.24s",
                            begin: "indefinite",
                            fill: "freeze",
                            calcMode: "spline",
                            keySplines: "0.42, 0, 1, 1;0, 0, 0.58, 1",
                            values: " 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                        }), h("animate", {
                            id: "globalnav-anim-menutrigger-bread-top-close",
                            attributeName: "points",
                            keyTimes: "0;0.5;1",
                            dur: "0.24s",
                            begin: "indefinite",
                            fill: "freeze",
                            calcMode: "spline",
                            keySplines: "0.42, 0, 1, 1;0, 0, 0.58, 1",
                            values: " 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                        })]
                    })]
                })
            })
        })
    }
    function xa({placeholder: e, name: t, ariaLabel: s, onInput: n=l=>{}
    , onBlur: a=l=>{}
    , onFocus: i=l=>{}
    }) {
        return h("input", {
            class: "globalnav-searchfield-input",
            placeholder: e,
            name: t,
            "aria-label": s,
            autoCorrect: "off",
            autoCapitalize: "off",
            autoComplete: "off",
            spellCheck: !1,
            onInput: l=>n(l),
            onBlur: l=>a(l),
            onFocus: l=>i(l)
        })
    }
    function Ba(e, t, s) {
        const n = e.target
          , {value: a} = n;
        let i = encodeURIComponent(a.replace(/\s+/g, "-"));
        i.startsWith(" ") && i.trim(),
        i.startsWith("-") && (i = i.replace("-", ""));
        const u = `${t}${i !== "" ? "/" : ""}${i}`;
        s(u)
    }
    function Ra({ariaLabel: e, resultsAriaLabel: t, action: s, input: n, placeholder: a, submit: i, reset: l, src: u, name: c, type: d, page: r, locale: g, onInput: _=w=>{}
    , onBlur: o=w=>{}
    , onFocus: f=w=>{}
    }) {
        var S, E;
        const w = Y(null)
          , [T,A] = X(s)
          , b = O=>{
            O.preventDefault(),
            A(s)
        }
        ;
        return he(()=>{
            A(s)
        }
        , [s]),
        h("form", {
            class: "globalnav-searchfield",
            action: T,
            ref: w,
            method: "get",
            children: [h("div", {
                class: "globalnav-searchfield-wrapper",
                children: [h(xa, {
                    placeholder: a,
                    ariaLabel: e,
                    name: c,
                    onInput: O=>{
                        c === void 0 && (Ba(O, s, A),
                        _(O))
                    }
                    ,
                    onBlur: O=>o(O),
                    onFocus: O=>f(O),
                    autocapitalize: "off",
                    autocomplete: "off",
                    autocorrect: "off",
                    spellcheck: "false",
                    "aria-label": n.ariaLabel
                }), h("input", {
                    id: "globalnav-searchfield-src",
                    type: "hidden",
                    name: "src",
                    value: u
                }), d !== void 0 && h("input", {
                    type: "hidden",
                    name: "type",
                    value: d
                }), r !== void 0 && h("input", {
                    type: "hidden",
                    name: "page",
                    value: r
                }), g !== void 0 && h("input", {
                    type: "hidden",
                    name: "locale",
                    value: g
                }), h("button", {
                    class: "globalnav-searchfield-reset",
                    "aria-label": l.ariaLabel,
                    tabIndex: -1,
                    type: "button",
                    onClick: b,
                    children: (S = l.images) == null ? void 0 : S.map(O=>{
                        const {name: R, assetInline: V} = O;
                        return h("span", {
                            className: `globalnav-image-${R}`,
                            dangerouslySetInnerHTML: {
                                __html: V
                            }
                        })
                    }
                    )
                }), h("button", {
                    class: "globalnav-searchfield-submit",
                    "aria-label": i.ariaLabel,
                    tabIndex: -1,
                    "aria-hidden": "true",
                    type: "submit",
                    children: (E = i.images) == null ? void 0 : E.map(O=>{
                        const {name: R, assetInline: V} = O;
                        return h("span", {
                            className: `globalnav-image-${R}`,
                            dangerouslySetInnerHTML: {
                                __html: V
                            }
                        })
                    }
                    )
                })]
            }), h("div", {
                class: "globalnav-searchresults-count",
                role: "status",
                "aria-live": "polite",
                "data-topnav-searchresults-label": t
            })]
        })
    }
    const Pa = ({ariaLabel: e, href: t, analyticsAttributes: s, images: n})=>h(Q, {
        children: h("a", {
            role: "button",
            id: "globalnav-menubutton-link-search",
            class: "globalnav-link globalnav-link-search",
            href: t,
            "data-topnav-flyout-trigger-regular": !0,
            "data-topnav-flyout-trigger-compact": !0,
            "aria-label": e,
            ...ye(s),
            children: h(sn, {
                images: n
            })
        })
    })
      , Da = ()=>h("div", {
        class: "globalnav-searchresults"
    })
      , Wa = ({children: e})=>h(Q, {
        children: h("div", {
            id: "globalnav-submenu-search",
            class: "globalnav-flyout globalnav-submenu",
            "aria-labelledby": "globalnav-menubutton-link-search",
            children: e
        })
    })
      , Ha = ({ariaLabel: e, analyticsAttributes: t, children: s})=>h(Q, {
        children: h("li", {
            class: "globalnav-item globalnav-search",
            "data-topnav-flyout-label": e,
            ...ye(t),
            children: s
        })
    });
    function Ua({ariaLabel: e, resultsAriaLabel: t, analyticsAttributes: s, href: n, images: a, suggestionsApiUrl: i, defaultLinksApiUrl: l, input: u, placeholder: c, submit: d, reset: r, action: g, src: _, name: o, type: f, page: w, locale: T}) {
        return h(Q, {
            children: h(Ha, {
                ariaLabel: e,
                analyticsAttributes: s,
                children: [h(Pa, {
                    ariaLabel: e,
                    href: n,
                    analyticsAttributes: s,
                    images: a
                }), h(Wa, {
                    children: h(tn, {
                        children: h(Ht, {
                            children: [h(Ra, {
                                ariaLabel: e,
                                resultsAriaLabel: t,
                                suggestionsApiUrl: i,
                                defaultLinksApiUrl: l,
                                input: u,
                                placeholder: c,
                                submit: d,
                                reset: r,
                                action: g,
                                src: _,
                                name: o,
                                type: f,
                                page: w,
                                locale: T
                            }), h(Da, {})]
                        })
                    })
                })]
            })
        })
    }
    const Va = "bagitem-adding"
      , qa = "bagitem-removing"
      , nt = "with-bag-count"
      , ja = "with-bag-count-onload"
      , Ga = `${nt}-double`
      , Za = `${nt}-triple`;
    function za({locale: e="en_US", textDirection: t="ltr", ariaLabel: s, bag: n, menu: a, links: i, submenu: l, submenuApiUrl: u, search: c, storeUrlPath: d, analyticsAttributes: r, analyticsType: g, wwwDomain: _="www.apple.com", hasAbsoluteUrls: o=!1, hasShopRedirectUrls: f=!0, subMenuData: w, setAcStoreInstance: T}) {
        var C;
        typeof o == "string" && (o = o === "true");
        const A = Y(null)
          , b = Y(null)
          , S = Y(void 0)
          , E = Y(void 0)
          , O = Y(void 0)
          , R = Y("")
          , V = Y(void 0)
          , q = Y("")
          , U = Y("")
          , F = Y("")
          , ee = Y("")
          , fe = Y(void 0)
          , Ie = Y(void 0)
          , [ie,Se] = X(null)
          , [Ce,De] = X()
          , [Ae,le] = X(!0)
          , [me,Ee] = X(0)
          , [it,_e] = X("")
          , [Ne,We] = X("")
          , [at,ke] = X("")
          , [ot,Me] = X(!1)
          , $e = gs(()=>{
            ie !== null && (ie.setFlyoutItems(),
            ie._setFlyoutHeight(ie.bag.el))
        }
        , [ie])
          , vt = e.replace("_", "-");
        let ce = d == null ? void 0 : d.replace("/", "");
        e === "zh_CN" && (ce = "cn");
        const xe = ((C = c == null ? void 0 : c.open) == null ? void 0 : C.url) != null && (c == null ? void 0 : c.suggestionsApiUrl) != null && (c == null ? void 0 : c.defaultLinksApiUrl) != null
          , Te = n !== void 0 && d !== void 0;
        sa(A),
        he(()=>{
            var we, K, Ue, Re, Oe, Ve, Z, ne;
            const j = document.querySelectorAll('meta[name^="globalnav-"]')
              , te = Array.from(j)
              , G = ys(te, "globalnav-");
            O.current = (we = G.searchField) == null ? void 0 : we.action,
            R.current = ((K = G.searchField) == null ? void 0 : K.src) !== void 0 ? G.searchField.src : "globalnav",
            ee.current = ((Ue = G.searchField) == null ? void 0 : Ue.placeholder) !== void 0 ? (Re = G.searchField) == null ? void 0 : Re.placeholder : "",
            V.current = (Oe = G.searchField) == null ? void 0 : Oe.name,
            q.current = (Ve = G.searchField) == null ? void 0 : Ve.type,
            U.current = (Z = G.searchField) == null ? void 0 : Z.page,
            F.current = (ne = G.searchField) == null ? void 0 : ne.locale,
            E.current = G.storeKey,
            S.current = G.bagFlyoutEnabled;
            const Be = G.submenusEnabled;
            fe.current = G.submenusEnabled,
            Ie.current = G.searchSuggestionsEnabled,
            le(Be)
        }
        , []),
        he(()=>{
            const j = A == null ? void 0 : A.current
              , te = {
                className: "globalnav",
                mixins: [wi, Li, xi, Bi, ra, la],
                amlSearch: {},
                bagData: {},
                menuData: {
                    data: a
                }
            };
            xe && (te.mixins.push(Ui, aa),
            c.searchFieldSrc = R.current,
            c.searchFieldAction = O.current !== void 0 ? O.current : Le(c.open.url, o === !0 ? _ : void 0),
            c.searchFieldLocale = F.current,
            c.searchFieldPlaceholderRegular = ee.current !== "" ? ee.current : c.input.placeholderTextRegular,
            c.searchFieldPlaceholderCompact = c.input.placeholderTextCompact,
            c.searchAriaLabel = ee.current !== "" ? ee.current : c.open.ariaLabel,
            c.searchSuggestionsEnabled = Ie.current !== void 0 ? Ie.current : void 0,
            te.amlSearch = {
                searchSettings: c,
                locale: e,
                wwwDomain: _,
                hasAbsoluteUrls: o
            }),
            Te && E.current !== void 0 && S.current !== !1 && (te.mixins.push(oa),
            te.bagData = {
                data: n,
                bagHref: `${d}/shop/goto${n.open.url}`
            });
            const G = new qi(j,te);
            return Se(G),
            j !== null && Me(!0),
            ()=>{
                j !== null && (Me(!1),
                G.destroy(),
                Se(null))
            }
        }
        , [n, o, Te, xe, e, a, c, _]),
        he(()=>{
            const j = A == null ? void 0 : A.current
              , te = b == null ? void 0 : b.current
              , G = K=>{
                me === 0 && K !== 0 && We(ja)
            }
              , Be = K=>{
                K === 0 ? _e("") : K > 0 && K < 10 ? _e(nt) : K >= 10 && K < 100 ? _e(`${nt} ${Ga}`) : K >= 100 && _e(`${nt} ${Za}`)
            }
              , we = K=>{
                We(""),
                K > 0 && me === 0 ? ke(Va) : me > 0 && K === 0 ? ke(qa) : ke("")
            }
            ;
            return te !== null && E.current !== void 0 && S.current !== !1 && Promise.all([Promise.resolve().then(function() {
                return mn
            })]).then(K=>{
                let[{AcStore: Ue, AcBagFlyout: Re}] = K;
                const Oe = j == null ? void 0 : j.dataset.storeApi
                  , Ve = Oe == null ? void 0 : Oe.replace("[storefront]", String(ce))
                  , Z = new Ue(te,ce,E.current,Ve);
                window.acStore = Z,
                T(Z),
                De(h(Pn, {
                    children: ne=>h(Re, {
                        acStoreInstance: ne,
                        globalNavEl: j,
                        onFlyoutContentUpdate: $e
                    })
                })),
                Z.getStoreState().then(ne=>{
                    Z == null || Z.getItemCount().then(ae=>{
                        G(ae),
                        Be(ae),
                        Ee(ae)
                    }
                    ),
                    Z == null || Z.on("itemCountChange", ae=>{
                        we(ae),
                        Be(ae),
                        Ee(ae)
                    }
                    )
                }
                , ne=>{
                    A.current !== null && (A == null || A.current.addEventListener("clickbag", ae=>{
                        const bt = ae.detail.originalTarget.href;
                        bt !== "" && (window.location.href = bt)
                    }
                    ))
                }
                ),
                Z == null || Z.getStorefront().then(ne=>{
                    Dt(ne, le, fe.current)
                }
                , ()=>{}
                ),
                Z.on("storefrontChange", ne=>{
                    Dt(ne, le, fe.current)
                }
                ),
                A.current !== null && window.addEventListener("segmentExit", ne=>{
                    Z == null || Z.getStorefront().then(ae=>{
                        Dt(ae, le, fe.current)
                    }
                    , ()=>{}
                    )
                }
                )
            }
            ).catch(K=>{}
            ),
            ()=>{
                j !== null && window.removeEventListener("segmentExit", K=>{}
                )
            }
        }
        , [me, E, d, ce, $e, T]);
        const He = ()=>ot ? "js" : "no-js"
          , Ut = ye(r);
        return h(ji, {
            value: ie,
            children: [h("nav", {
                id: "globalnav",
                className: `globalnav ${He()} ${Ne} ${it} ${at}`,
                lang: vt,
                dir: t,
                ref: A,
                "aria-label": s,
                "data-analytics-element-engagement-start": "globalnav:onFlyoutOpen",
                "data-analytics-element-engagement-end": "globalnav:onFlyoutClose",
                "data-store-api": n !== void 0 ? Le(n.storeApiUrl, o ? _ : void 0) : null,
                ...Ut,
                children: h("div", {
                    className: "globalnav-content",
                    children: [h("div", {
                        class: "globalnav-item globalnav-menuback",
                        children: h("button", {
                            class: "globalnav-menuback-button",
                            "aria-label": a.back.ariaLabel,
                            children: a.back.images.map(({name: j, assetInline: te})=>j === "compact" ? h("span", {
                                class: "globalnav-chevron-icon",
                                dangerouslySetInnerHTML: {
                                    __html: te
                                }
                            }) : null)
                        })
                    }), h("ul", {
                        id: "globalnav-list",
                        class: "globalnav-list",
                        children: [h(Gi, {
                            value: {
                                hasAbsoluteUrls: o,
                                wwwDomain: _
                            },
                            children: h(Fa, {
                                links: i,
                                locale: e,
                                submenuChevron: l,
                                submenuApiUrl: u,
                                subMenuData: w,
                                submenusEnabled: Ae
                            })
                        }), xe && h(Ua, {
                            href: O.current !== void 0 ? O.current : Le(c.open.url, o ? _ : void 0),
                            ariaLabel: c.searchAriaLabel !== void 0 ? c.searchAriaLabel : c.open.ariaLabel,
                            analyticsAttributes: c.open.analyticsAttributes,
                            resultsAriaLabel: c.results.ariaLabel,
                            images: c.open.images,
                            action: O.current !== void 0 ? O.current : Le(c.open.url, o ? _ : void 0),
                            input: c.input,
                            placeholder: c.searchFieldPlaceholderRegular !== void 0 ? c.searchFieldPlaceholderRegular : c.input.placeholderTextRegular,
                            submit: c.submit,
                            reset: c.reset,
                            src: R.current,
                            name: V.current,
                            type: q.current,
                            page: U.current,
                            locale: F.current,
                            suggestionsApiUrl: c.suggestionsApiUrl,
                            defaultLinksApiUrl: c.defaultLinksApiUrl
                        }), Te && h(wa, {
                            ref: b,
                            bag: n,
                            bagFlyout: Ce,
                            badgeCount: me,
                            href: Le(`${d}/shop/goto${n.open.url}`, o ? _ : void 0)
                        })]
                    }), h(Ia, {})]
                })
            }), h("div", {
                id: "globalnav-curtain",
                class: "globalnav-curtain"
            }), h("div", {
                id: "globalnav-placeholder",
                class: "globalnav-placeholder"
            })]
        })
    }
    function Ka({globalNavData: e, subMenuData: t}) {
        const [s,n] = X(null)
          , a = e.locale !== void 0 ? e.locale.replace("_", "-") : "en-US";
        return h(Q, {
            children: h(Rn, {
                value: s,
                children: [h(jn, {
                    isoLocale: a,
                    textDirection: e.textDirection !== void 0 ? e.textDirection : "ltr",
                    segmentData: e.segmentbar,
                    wwwDomain: e.wwwDomain,
                    storeUrlPath: e.storeUrlPath
                }), h(za, {
                    ...e,
                    subMenuData: t,
                    setAcStoreInstance: n
                })]
            })
        })
    }
    const Qa = e=>{
        var s;
        const t = (s = e == null ? void 0 : e.props) == null ? void 0 : s.globalNavData;
        typeof (t == null ? void 0 : t.hasAbsoluteUrls) == "string" && (t.hasAbsoluteUrls = t.hasAbsoluteUrls === "true")
    }
      , ln = "globalheader"
      , cn = document.getElementById(ln);
    if (cn === null)
        throw new Error(`Could not find root node ID: ${ln}`);
    const un = document.getElementById("__ACGH_DATA__");
    if (un === null)
        throw new Error("Can't find the data globalheaderDataElement");
    const hn = JSON.parse(un.textContent);
    Qa(hn);
    const {props: Ya} = hn;
    Nt(h(Ka, {
        ...Ya
    }), cn);
    var gt = {
        exports: {}
    }
      , Ja = ws(An)
      , Xa = ws(In);
    (function(e, t) {
        var s = Object.defineProperty
          , n = Object.defineProperties
          , a = Object.getOwnPropertyDescriptors
          , i = Object.getOwnPropertySymbols
          , l = Object.prototype.hasOwnProperty
          , u = Object.prototype.propertyIsEnumerable
          , c = (b,S,E)=>S in b ? s(b, S, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: E
        }) : b[S] = E
          , d = (b,S)=>{
            for (var E in S || (S = {}))
                l.call(S, E) && c(b, E, S[E]);
            if (i)
                for (var E of i(S))
                    u.call(S, E) && c(b, E, S[E]);
            return b
        }
          , r = (b,S)=>n(b, a(S))
          , g = (b,S,E)=>(c(b, typeof S != "symbol" ? S + "" : S, E),
        E)
          , _ = (b,S,E)=>{
            if (!S.has(b))
                throw TypeError("Cannot " + E)
        }
          , o = (b,S,E)=>(_(b, S, "read from private field"),
        E ? E.call(b) : S.get(b))
          , f = (b,S,E)=>{
            if (S.has(b))
                throw TypeError("Cannot add the same private member more than once");
            S instanceof WeakSet ? S.add(b) : S.set(b, E)
        }
          , w = (b,S,E,O)=>(_(b, S, "write to private field"),
        O ? O.call(b, E) : S.set(b, E),
        E)
          , T = (b,S,E,O)=>({
            set _(R) {
                w(b, S, R, E)
            },
            get _() {
                return o(b, S, O)
            }
        })
          , A = (b,S,E)=>new Promise((O,R)=>{
            var V = F=>{
                try {
                    U(E.next(F))
                } catch (ee) {
                    R(ee)
                }
            }
              , q = F=>{
                try {
                    U(E.throw(F))
                } catch (ee) {
                    R(ee)
                }
            }
              , U = F=>F.done ? O(F.value) : Promise.resolve(F.value).then(V, q);
            U((E = E.apply(b, S)).next())
        }
        );
        (function(b, S) {
            S(t, Ja, Xa)
        }
        )(li, function(b, S, E) {
            var O, R, V, q, U, F, ee, fe, Ie, ie, Se, Ce, De, Ae, le, me, Ee, it, _e, Ne, We, at, ke, ot, Me, $e, vt, ce, xe, Te, He, Ut = 0;
            function C(p, m, v, y, L) {
                var x, D, k = {};
                for (D in m)
                    D == "ref" ? x = m[D] : k[D] = m[D];
                var M = {
                    type: p,
                    props: k,
                    key: v,
                    ref: x,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: --Ut,
                    __source: L,
                    __self: y
                };
                if (typeof p == "function" && (x = p.defaultProps))
                    for (D in x)
                        k[D] === void 0 && (k[D] = x[D]);
                return S.options.vnode && S.options.vnode(M),
                M
            }
            const j = {
                FLYOUT_WILL_OPEN: "globalnav:onFlyoutWillOpen",
                FLYOUT_OPEN: "globalnav:onFlyoutOpen",
                FLYOUT_WILL_CLOSE: "globalnav:onFlyoutWillClose",
                FLYOUT_CLOSE: "globalnav:onFlyoutClose"
            }
              , te = {
                isOpen: !1,
                isLoading: !1,
                showCovers: !1,
                flyoutItemClass: "",
                data: null
            }
              , G = S.createContext(te)
              , Be = ({acStoreInstance: p, globalNavEl: m, onFlyoutContentUpdate: v, children: y})=>{
                const [L,x] = E.useState(te.isOpen)
                  , [D,k] = E.useState(te.isLoading)
                  , [M,I] = E.useState(te.data)
                  , B = E.useRef(!1)
                  , $ = {
                    isOpen: L,
                    isClosed: !L,
                    isLoading: D,
                    showCovers: Boolean(M && M.message && M.message.type === "covers"),
                    flyoutItemClass: "globalnav-flyout-item",
                    data: M
                }
                  , z = E.useCallback(()=>A(this, null, function*() {
                    B.current = !0,
                    k(!0);
                    try {
                        const se = yield p.updateBagFlyout();
                        if (se) {
                            const {bagContent: ue} = se;
                            I(ue)
                        }
                    } catch {}
                    B.current = !1,
                    k(!1)
                }), [k, p, I])
                  , W = E.useCallback(se=>A(this, [se], function*({event: ue, callback: bn}) {
                    const {detail: {target: Eo}} = ue;
                    if (Eo === p.getDomElement()) {
                        if (bn)
                            try {
                                yield bn()
                            } catch {}
                        x(yn=>!yn)
                    }
                }), [p, x])
                  , J = E.useCallback(se=>{
                    B.current || W({
                        event: se,
                        callback: z
                    })
                }
                , [W, z])
                  , H = E.useCallback(se=>{
                    W({
                        event: se
                    })
                }
                , [W]);
                return E.useEffect(()=>{
                    if (m)
                        return m.addEventListener(j.FLYOUT_WILL_OPEN, J),
                        m.addEventListener(j.FLYOUT_OPEN, J),
                        m.addEventListener(j.FLYOUT_WILL_CLOSE, H),
                        m.addEventListener(j.FLYOUT_CLOSE, H),
                        ()=>{
                            m.removeEventListener(j.FLYOUT_WILL_OPEN, J),
                            m.removeEventListener(j.FLYOUT_OPEN, J),
                            m.removeEventListener(j.FLYOUT_WILL_CLOSE, H),
                            m.removeEventListener(j.FLYOUT_CLOSE, H)
                        }
                }
                , [m, J, H]),
                E.useEffect(v),
                C(G.Provider, {
                    value: $,
                    children: y
                })
            }
            ;
            Be.defaultProps = {
                onFlyoutContentUpdate: ()=>{}
            };
            const we = ()=>E.useContext(G)
              , K = '<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="gear_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M15.6094,12.3252a.5142.5142,0,0,0-.2959-.2959l-.5972-.2324a6.6665,6.6665,0,0,0-.16-.917l.4809-.42a.5172.5172,0,0,0-.3291-.9073l-.6372-.0136c-.0654-.1377-.1343-.2784-.2139-.4151s-.1635-.2636-.2519-.3935l.3076-.5576a.517.517,0,0,0-.62-.7393l-.6035.2051a6.68,6.68,0,0,0-.7134-.5977l.0986-.6328a.5172.5172,0,0,0-.43-.5918.54.54,0,0,0-.4052.1084l-.5015.4033A6.911,6.911,0,0,0,9.87,6.01l-.124-.6328a.5178.5178,0,0,0-.9512-.167l-.333.5507a7.2576,7.2576,0,0,0-.92.0039L7.2056,5.207a.518.518,0,0,0-.9512.167l-.125.6377a6.6192,6.6192,0,0,0-.8652.31l-.501-.4063a.5176.5176,0,0,0-.8364.4834l.0991.6358a6.6073,6.6073,0,0,0-.7017.5947L2.71,7.417a.5173.5173,0,0,0-.6211.7392l.3134.5694a6.7192,6.7192,0,0,0-.4653.7959l-.6421.0117a.516.516,0,0,0-.5083.5264.52.52,0,0,0,.1763.38l.4849.4238a6.8261,6.8261,0,0,0-.16.9111l-.6006.23a.5176.5176,0,0,0-.001.9658l.5972.2324a6.6665,6.6665,0,0,0,.16.917l-.4809.419a.5184.5184,0,0,0-.05.7314.52.52,0,0,0,.3789.1758l.6367.0137c.063.1318.1333.2754.2144.416.0673.1172.143.2246.2163.3281l.04.0566-.312.5664a.5176.5176,0,0,0,.2036.7032.52.52,0,0,0,.416.0361l.5967-.2031a6.82,6.82,0,0,0,.7207.5937l-.0991.6348a.5153.5153,0,0,0,.0933.3857.5187.5187,0,0,0,.7421.0977l.5064-.4082a6.6137,6.6137,0,0,0,.8628.3193l.1245.6358a.5139.5139,0,0,0,.22.33.53.53,0,0,0,.3877.0782.5193.5193,0,0,0,.3433-.24l.3388-.56.0577.0049a4.8076,4.8076,0,0,0,.7871.0019l.0669-.0058.3383.5625a.518.518,0,0,0,.9512-.167l.1245-.6348a6.6152,6.6152,0,0,0,.8589-.3193l.5088.4131a.5176.5176,0,0,0,.8364-.4834l-.0991-.6358a6.6173,6.6173,0,0,0,.7017-.5947l.6142.2119a.5174.5174,0,0,0,.6211-.7392l-.3135-.5694a6.6548,6.6548,0,0,0,.4649-.7959l.6421-.0117a.5168.5168,0,0,0,.5088-.5264.5166.5166,0,0,0-.1768-.38l-.4849-.4238a6.6694,6.6694,0,0,0,.16-.9111l.6006-.2315a.5177.5177,0,0,0,.2969-.6689ZM6.4941,13.9043,4.7666,16.8926a5.4449,5.4449,0,0,1,.0044-8.792L6.5,11.0986A2.0525,2.0525,0,0,0,6.4941,13.9043Zm2.1646-1.7822a.7608.7608,0,1,1-.4609-.3555A.7543.7543,0,0,1,8.6587,12.1221ZM7.54,10.499,5.8154,7.5068A5.4579,5.4579,0,0,1,7.9907,7.041h.0239a5.4693,5.4693,0,0,1,5.4068,4.8633l-3.457-.0029a2.0363,2.0363,0,0,0-.18-.43A2.0586,2.0586,0,0,0,7.54,10.499Zm-.0058,4.0049a2.0556,2.0556,0,0,0,2.435-1.4023l3.4512.0029a5.4455,5.4455,0,0,1-7.6147,4.3877Z" fill="6E6E73"/></g></svg>'
              , Ue = '<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="shippingbox_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M14.5146,9.5234a2.56,2.56,0,0,0-1.11-1.4228l-4.25-2.3975a2.3909,2.3909,0,0,0-2.31,0l-4.25,2.3975a2.2971,2.2971,0,0,0-.6025.5107A2.2684,2.2684,0,0,0,1.4,10.1475v4.705a2.3546,2.3546,0,0,0,1.1953,2.0469l4.25,2.3975a2.3541,2.3541,0,0,0,2.31,0l4.25-2.3975A2.3546,2.3546,0,0,0,14.6,14.8525v-4.705A2.3322,2.3322,0,0,0,14.5146,9.5234ZM7.4,12.9453v5.2871L3.1851,15.8545a1.153,1.153,0,0,1-.585-1.002L2.603,10.24Zm.6-1.04L3.147,9.17a.4347.4347,0,0,1,.0385-.0244l1.7623-.9941,4.895,2.7158Zm5.4-1.666v4.6132a1.153,1.153,0,0,1-.585,1.002L8.6,18.2324V12.9453ZM8.5649,6.748l4.25,2.3975a.4347.4347,0,0,1,.0385.0244l-1.7842,1.0059L6.1733,7.46l1.2618-.712A1.1731,1.1731,0,0,1,8.5649,6.748Z" fill="6E6E73"/></g></svg>'
              , Re = '<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="person.crop.circle_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z" fill="6E6E73"/></g></svg>'
              , Oe = {
                account: K,
                orders: Ue,
                signIn: Re,
                signOut: Re,
                yoursaves: `<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="bookmark_compact"><rect id="box_" width="16" height="25" fill="none"/>
<path id="art_" d="M10.3,5.15H5.7a2.3022,2.3022,0,0,0-2.3,2.3V19.0381a.8642.8642,0,0,0,.19.5869.67.67,0,0,0,.5313.2246.7441.7441,0,0,0,.438-.1465,4.8685,4.8685,0,0,0,.5366-.4765l2.8931-2.8858,2.9165,2.8867a6.4062,6.4062,0,0,0,.5307.4717.7286.7286,0,0,0,.4429.15.6684.6684,0,0,0,.5308-.2246.8619.8619,0,0,0,.19-.5869V7.45A2.3022,2.3022,0,0,0,10.3,5.15ZM4.6,7.45A1.102,1.102,0,0,1,5.7,6.35h4.6A1.102,1.102,0,0,1,11.4,7.45l-.0005,10.5781L8.832,15.4863a1.186,1.186,0,0,0-1.665.001L4.6,18.0293Z" fill="6E6E73"/></g></svg>`,
                favorites: '<?xml version="1.0" encoding="UTF-8"?><svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="heart-regular"><path id="art_" d="M8,19.125c-.2673,0-.5174-.1035-.7053-.2922L1.4688,12.9838c-.8266-.8295-1.2699-1.9824-1.2141-3.162,.0558-1.1765,.6055-2.281,1.5093-3.0312,1.6382-1.3631,4.1641-1.185,5.7497,.407l.4863,.4874,.4863-.488c1.5834-1.5904,4.1104-1.7695,5.7497-.4064,.9039,.7502,1.4535,1.8548,1.5093,3.0312,.0558,1.1797-.3875,2.3325-1.2141,3.1626l-5.8259,5.8485c-.1879,.1887-.438,.2922-.7053,.2922ZM4.3544,7.0801c-.657,0-1.3011,.2102-1.8174,.6392-.6572,.5459-1.0391,1.3196-1.0743,2.1771-.0371,.9032,.393,1.7639,1.0313,2.4046l5.4234,5.4445c.0456,.0458,.1198,.0458,.1653,0l5.4227-5.4433c.6385-.641,1.0689-1.5019,1.032-2.4054-.0351-.8577-.4169-1.6315-1.0743-2.1775h0c-1.1637-.9663-2.9725-.8204-4.1201,.3298l-1.1871,1.1921c-.0859,.0863-.2257,.0863-.3117,0l-1.1871-1.1916c-.6377-.6402-1.4804-.9695-2.3027-.9695Z" fill="6E6E73"/></g></svg>'
            }
              , Ve = ({url: p, text: m, type: v, analyticsValue: y, flyoutItemClass: L})=>{
                const x = Oe[v];
                return C("li", {
                    className: `${L} ac-gn-bagview-nav-item ac-gn-bagview-nav-item-${v}`,
                    children: C("a", {
                        href: p,
                        "data-evar1": `[pageName] | global nav | ${y}`,
                        "data-analytics-activitymap-link-id": y,
                        "data-analytics-title": y,
                        className: `ac-gn-bagview-nav-link ac-gn-bagview-nav-link-${v.toLowerCase()}`,
                        "data-ac-autom": `gn-bagview-link-${v}`,
                        children: [C("span", {
                            dangerouslySetInnerHTML: {
                                __html: x
                            }
                        }), C("span", {
                            children: m
                        })]
                    })
                })
            }
              , Z = (p={},m={})=>{
                const v = m ? Object.assign(p, m) : p;
                return Object.keys(v).map(y=>`${encodeURIComponent(y)}=${encodeURIComponent(v[y])}`).join("&").replace(/^/, "?")
            }
              , ne = (p="")=>{
                if (!p)
                    return null;
                const m = {};
                return p.split("&").forEach(v=>{
                    const [y,L=""] = v.split("=")
                      , x = decodeURIComponent(L.replace(/\+/g, " "));
                    m[y] = x
                }
                ),
                m
            }
              , ae = p=>{
                let m = null;
                if (!p)
                    return m;
                const v = (document.cookie || "").split(";");
                for (let y = 0; y < v.length; y += 1) {
                    const L = (v[y] || "").trim();
                    if (L.substring(0, p.length + 1) === `${p}=`) {
                        m = decodeURIComponent(L.substring(p.length + 1));
                        break
                    }
                }
                if (m && m.match(/^\s*\{/))
                    try {
                        m = JSON.parse(m)
                    } catch (y) {
                        console.log("Error", y)
                    }
                return m
            }
              , bt = ()=>{
                const p = ae("pxro");
                return (p ? parseInt(p, 10) : 2) >= 2
            }
              , to = (p="",m,v)=>{
                if (!p)
                    return {};
                const [y,L] = p.split("?")
                  , x = ne(L)
                  , D = ne(m)
                  , k = ne(v)
                  , M = v ? y.concat(L.replace(/^/, "?")) : y.concat(Z(x, D))
                  , I = m ? y.concat(L.replace(/^/, "?")) : y.concat(Z(x, k));
                return {
                    imgSrc: bt() ? I : M,
                    srcSet: M || I ? `${M}, ${I} 2x` : null
                }
            }
              , so = ({src: p, width: m, height: v, alt: y, scaleParams1: L, scaleParams2: x})=>{
                const {imgSrc: D="", srcSet: k=""} = to(p, L, x);
                return C("img", {
                    src: p || D,
                    srcSet: k,
                    width: m,
                    height: v,
                    alt: y,
                    className: "ac-gn-bagview-bagitem-picture"
                })
            }
              , no = ({name: p, qty: m})=>C(S.Fragment, {
                children: [p, m > 1 && C("span", {
                    className: "ac-gn-bagview-bagitem-qty",
                    children: m
                })]
            })
              , io = ({url: p, text: m, type: v, onClick: y, flyoutItemClass: L})=>C("a", {
                onClick: y,
                href: p,
                className: `${L} ac-gn-bagview-button ac-gn-bagview-button-pill`,
                "data-ac-autom": `gn-bagview-button-${v}`,
                "data-autom": "globalnav-reviewBag",
                "data-evar1": "[pageName] | | bag overlay | | Review Bag",
                children: m
            })
              , ao = ()=>C("div", {
                className: "ac-gn-loading-indicator",
                children: C("div", {
                    "data-progress-indicator": "",
                    className: "progress-indicator progress-indicator-indeterminate progress-indicator-curtain progress-indicator-visible ac-gn-progress-indicator-curtain",
                    "aria-label": "aria-label-from-constructor",
                    children: C("svg", {
                        className: "progress-indicator-icon",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 56 56",
                        "aria-hidden": "true",
                        children: C("g", {
                            className: "progress-indicator-spokes",
                            children: [C("path", {
                                className: "progress-indicator-spoke",
                                d: "M28,8.5A2.5,2.5,0,0,1,30.5,11v7a2.5,2.5,0,0,1-5,0V11A2.5,2.5,0,0,1,28,8.5Z"
                            }), C("path", {
                                className: "progress-indicator-spoke",
                                d: "M41.79,14.21a2.52,2.52,0,0,1,0,3.54L36.84,22.7a2.5,2.5,0,0,1-3.54-3.54l5-4.95A2.52,2.52,0,0,1,41.79,14.21Z"
                            }), C("path", {
                                className: "progress-indicator-spoke",
                                d: "M47.5,28A2.5,2.5,0,0,1,45,30.5H38a2.5,2.5,0,0,1,0-5h7A2.5,2.5,0,0,1,47.5,28Z"
                            }), C("path", {
                                className: "progress-indicator-spoke",
                                d: "M41.79,41.79a2.52,2.52,0,0,1-3.54,0l-5-4.95a2.5,2.5,0,0,1,3.54-3.54l4.95,5A2.52,2.52,0,0,1,41.79,41.79Z"
                            }), C("path", {
                                className: "progress-indicator-spoke",
                                d: "M28,47.5A2.5,2.5,0,0,1,25.5,45V38a2.5,2.5,0,0,1,5,0v7A2.5,2.5,0,0,1,28,47.5Z"
                            }), C("path", {
                                className: "progress-indicator-spoke",
                                d: "M14.21,41.79a2.52,2.52,0,0,1,0-3.54l4.95-5a2.5,2.5,0,0,1,3.54,3.54l-4.95,4.95A2.52,2.52,0,0,1,14.21,41.79Z"
                            }), C("path", {
                                className: "progress-indicator-spoke",
                                d: "M8.5,28A2.5,2.5,0,0,1,11,25.5h7a2.5,2.5,0,0,1,0,5H11A2.5,2.5,0,0,1,8.5,28Z"
                            }), C("path", {
                                className: "progress-indicator-spoke",
                                d: "M14.21,14.21a2.52,2.52,0,0,1,3.54,0l4.95,4.95a2.5,2.5,0,0,1-3.54,3.54l-4.95-4.95A2.52,2.52,0,0,1,14.21,14.21Z"
                            })]
                        })
                    })
                })
            })
              , oo = ()=>{
                const {data: {message: {text: p}}} = we();
                return C("h2", {
                    className: "ac-gn-bagview-header",
                    children: p
                })
            }
              , ro = ({header: p, subHeader: m, lineMessage: v, product: y, flyoutButtons: L, flyoutItemClass: x})=>{
                const D = L && L.length > 0;
                return C("div", {
                    className: "ac-bag-flyout-content",
                    "data-analytics-region": "bag items",
                    children: [C("div", {
                        className: "ac-bag-flyout-content-left",
                        children: [C("h2", {
                            className: `${x} ac-gn-bagview-header`,
                            children: p
                        }), m && C("div", {
                            className: `${x} ac-gn-bagview-subheader`,
                            dangerouslySetInnerHTML: {
                                __html: m
                            }
                        }), y && C("div", {
                            className: "ac-gn-bagview-bagitem-wrapper",
                            children: y
                        }), v && C("div", {
                            className: `${x} ac-gn-bagview-message`,
                            children: C("span", {
                                className: "ac-gn-bagview-message-text",
                                children: v
                            })
                        })]
                    }), D && C("div", {
                        className: "ac-bag-flyout-content-right",
                        children: L
                    })]
                })
            }
              , lo = ({name: p, productUrl: m, imageProps: v, qty: y, index: L, flyoutItemClass: x})=>C("li", {
                className: `${x} ac-gn-bagview-bagitem`,
                children: C("a", {
                    className: "ac-gn-bagview-bagitem-link",
                    href: m,
                    "data-analytics-title": p,
                    children: [C("span", {
                        className: "ac-gn-bagview-bagitem-column1",
                        children: C(so, d({}, v))
                    }), C("span", {
                        className: "ac-gn-bagview-bagitem-column2",
                        "data-ac-autom": `gn-bagview-itemname-${L}`,
                        children: C(no, {
                            name: p,
                            qty: y
                        })
                    })]
                })
            }, p)
              , co = ()=>{
                const {data: p, flyoutItemClass: m} = we()
                  , {bag: {items: v, extraItemsMsg: y, emptyBagMsg: L, title: x, subHeader: D}, buttons: k} = p
                  , M = L || x
                  , I = Boolean(v.length) && v.map(($,z)=>{
                    const {name: W, productUrl: J, productImg: H={}, qty: se} = $
                      , ue = H && {
                        src: H.src,
                        width: H.width,
                        height: H.height,
                        alt: H.alt,
                        scaleParams1: H.scaleParams1,
                        scaleParams2: H.scaleParams2
                    };
                    return C(lo, {
                        name: W,
                        productUrl: J,
                        imageProps: ue,
                        qty: se,
                        index: z,
                        flyoutItemClass: m
                    }, W)
                }
                )
                  , B = k.map($=>C(io, {
                    url: $.url,
                    text: $.text,
                    type: $.type,
                    flyoutItemClass: m
                }, $.url));
                return C(ro, {
                    header: M,
                    subHeader: D,
                    lineMessage: y,
                    product: I,
                    flyoutButtons: B,
                    flyoutItemClass: m
                })
            }
              , uo = ({linksHeader: p, menuLinks: m, flyoutItemClass: v})=>C("div", {
                className: "ac-gn-bagview-nav-item-wrapper",
                "data-analytics-region": "my profile",
                children: [C("h3", {
                    className: `${v} ac-gn-bagview-nav-item-header`,
                    children: p
                }), C("ul", {
                    children: m
                })]
            })
              , ho = ()=>{
                const {flyoutItemClass: p, data: {linksHeader: m, links: v}} = we()
                  , y = v.filter(({type: L})=>L !== "bag").map(L=>C(Ve, {
                    text: L.text,
                    url: L.url,
                    type: L.type,
                    analyticsValue: L.type === "yoursaves" ? "saved items" : L.type,
                    flyoutItemClass: p
                }, L.url));
                return C(uo, {
                    linksHeader: m,
                    menuLinks: y,
                    flyoutItemClass: p
                })
            }
              , mo = ()=>C(S.Fragment, {
                children: [C(co, {}), C(ho, {})]
            });
            function po() {
                const {data: p, showCovers: m} = we();
                return p ? C("div", {
                    className: "ac-bag-flyout-container ac-gn-bagview-content",
                    "data-autom": "ac-gn-bagview",
                    children: m ? C(oo, {}) : C(mo, {})
                }) : C(ao, {})
            }
            function fo({acStoreInstance: p, globalNavEl: m, onFlyoutContentUpdate: v}) {
                return C(Be, {
                    acStoreInstance: p,
                    globalNavEl: m,
                    onFlyoutContentUpdate: v,
                    children: C(po, {})
                })
            }
            function dn() {
                this._events = {}
            }
            var qe = dn.prototype;
            qe.on = function(p, m) {
                this._events[p] = this._events[p] || [],
                this._events[p].unshift(m)
            }
            ,
            qe.once = function(p, m) {
                var v = this;
                function y(L) {
                    v.off(p, y),
                    L !== void 0 ? m(L) : m()
                }
                this.on(p, y)
            }
            ,
            qe.off = function(p, m) {
                if (this.has(p)) {
                    if (arguments.length === 1) {
                        this._events[p] = null,
                        delete this._events[p];
                        return
                    }
                    var v = this._events[p].indexOf(m);
                    v !== -1 && this._events[p].splice(v, 1)
                }
            }
            ,
            qe.trigger = function(p, m) {
                if (this.has(p))
                    for (var v = this._events[p].length - 1; v >= 0; v--)
                        m !== void 0 ? this._events[p][v](m) : this._events[p][v]()
            }
            ,
            qe.has = function(p) {
                return !(!(p in this._events) || this._events[p].length === 0)
            }
            ,
            qe.destroy = function() {
                for (var p in this._events)
                    this._events[p] = null;
                this._events = null
            }
            ;
            var _o = dn
              , go = {
                EventEmitterMicro: _o
            };
            const vo = "string"
              , {localStorage: Vt, JSON: pn} = window
              , je = {
                getItem: p=>{
                    let m = null;
                    try {
                        m = Vt.getItem(p);
                        try {
                            m = pn.parse(m)
                        } catch {}
                    } catch {}
                    return m
                }
                ,
                setItem: (p,m)=>{
                    try {
                        return typeof m !== vo && (m = pn.stringify(m)),
                        Vt.setItem(p, m),
                        !0
                    } catch {
                        return !1
                    }
                }
                ,
                removeItem: p=>{
                    try {
                        return Vt.removeItem(p),
                        !0
                    } catch {
                        return !1
                    }
                }
            }
              , qt = "as_"
              , fn = ["", "_stag", "_ce01", "_ce02", "_ce03", "_ce04", "_xe01", "_xe02", "_xe03", "_xe04", "_xe01aws", "_xe02aws", "_xe03aws", "_xe04aws", "_dev01"]
              , de = {
                get: p=>{
                    const {document: {cookie: m}} = window;
                    let v = "";
                    try {
                        const y = encodeURIComponent(p).replace(/[-.+*]/g, "\\$&")
                          , L = new RegExp(`(?:(?:^|.*;)\\s*${y}\\s*\\=\\s*([^;]*).*$)|^.*$`);
                        v = decodeURIComponent(m.replace(L, "$1"))
                    } catch {}
                    return v
                }
                ,
                getPrefixedAs: p=>{
                    const {cookieMap: m={}} = window
                      , v = m[`as_${p}`];
                    let y;
                    if (v)
                        y = de.get(v);
                    else
                        for (const L of fn)
                            if (y = de.get(`${qt}${p}${L}`),
                            y)
                                break;
                    return y
                }
                ,
                has: p=>{
                    const {document: {cookie: m}} = window;
                    let v = !1;
                    if (p)
                        try {
                            const y = encodeURIComponent(p).replace(/[-.+*]/g, "\\$&");
                            v = new RegExp(`(?:^|;\\s*)${y}\\s*\\=`).test(m)
                        } catch {}
                    return v
                }
                ,
                remove: (p,m,v)=>{
                    const {document: y} = window
                      , L = v ? `; domain=${v}` : ""
                      , x = v ? `; path=${m}` : "";
                    let D = !1;
                    return de.has(p) && (y.cookie = `${encodeURIComponent(p)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${L}${x}`,
                    D = !0),
                    D
                }
                ,
                removePrefixedAs: (p,m,v)=>{
                    const {envCookieSuffix: y} = window;
                    let L;
                    if (y)
                        L = de.remove(`${qt}${p}${y}`, m, v);
                    else {
                        for (const x of fn)
                            de.remove(`${qt}${p}${x}`, m, v);
                        L = !0
                    }
                    return L
                }
            }
              , _n = class extends Error {
                constructor(p, m) {
                    super(p),
                    this.type = m,
                    this.name = _n.name
                }
            }
            ;
            let oe = _n;
            g(oe, "name", "AcStoreError"),
            g(oe, "Types", {
                BAD_JSON_RESPONSE: 0,
                MISSING_API_ADD_TO_BAG: 1,
                MISSING_API_FLYOUT: 2,
                ITEM_NOT_ADDED: 3
            });
            const bo = "ac-globalnav"
              , Ge = "ac-store-cache"
              , gn = {
                FAVORITE_ADDED: "favoriteAdded",
                STATE_CHANGE: "Change"
            }
              , vn = ()=>{}
            ;
            class yt extends go.EventEmitterMicro {
                constructor(m, v, y, L) {
                    super(),
                    f(this, O, void 0),
                    f(this, R, void 0),
                    f(this, V, void 0),
                    f(this, q, void 0),
                    f(this, U, null),
                    f(this, F, null),
                    f(this, ee, null),
                    f(this, fe, 0),
                    f(this, Ie, 200),
                    f(this, ie, {
                        storeState: {
                            bag: null,
                            segmentNav: null,
                            covers: null
                        },
                        itemCount: -1,
                        storefront: {},
                        bagContent: o(this, U)
                    }),
                    f(this, Se, null),
                    f(this, Ce, !1),
                    f(this, De, /([^/]*)\/\/([^/]*)\/.*/),
                    f(this, Ae, void 0),
                    f(this, le, (k,M)=>{
                        const I = o(this, ie)[k];
                        let B = I !== M;
                        if (B && typeof I == "object" && typeof M == "object") {
                            B = !1;
                            for (const $ in M)
                                if (B = M[$] !== I[$],
                                B)
                                    break;
                            if (!B) {
                                for (const $ in I)
                                    if (B = !($in M),
                                    B)
                                        break
                            }
                        }
                        B && (o(this, ie)[k] = M,
                        this.trigger(`${k}${gn.STATE_CHANGE}`, M))
                    }
                    ),
                    f(this, me, (k,M,I,B)=>{
                        let$ = k;
                        const z = $.indexOf("?") === -1 ? "?" : "&";
                        I = I || {};
                        for (const W in M) {
                            const J = new RegExp(`(%5B|\\[)${W}(%5D|\\])`,"g");
                            $ = $.replace(J, encodeURIComponent(M[W]))
                        }
                        $ = $.indexOf("//") === 0 ? window.location.protocol + $ : $,
                        $ += `${z}apikey=${encodeURIComponent(o(this, V))}`,
                        $ += B ? `&l=${encodeURIComponent(`${window.location}`)}` : "";
                        for (const W in I)
                            $ += W && I[W] ? `&${W}=${encodeURIComponent(I[W])}` : "";
                        return new Promise((W,J)=>{
                            const H = new XMLHttpRequest;
                            H.onreadystatechange = ()=>{
                                if (H.readyState === 4)
                                    try {
                                        const se = JSON.parse(H.responseText);
                                        W(se)
                                    } catch {
                                        J(new oe("Response is not JSON.",oe.Types.BAD_JSON_RESPONSE))
                                    }
                            }
                            ,
                            H.open("GET", $),
                            H.withCredentials = !0,
                            H.send()
                        }
                        )
                    }
                    ),
                    f(this, Ee, ()=>{
                        const k = window.decodeURIComponent(window.escape(window.atob(de.getPrefixedAs("sfa")))).split("|")
                          , [M,I,B] = k
                          , $ = z=>{
                            if (M === "2") {
                                if (z === 9)
                                    return B;
                                if (z > 1)
                                    return k[z + 1]
                            }
                            return k[z]
                        }
                        ;
                        return o(this, ee) || w(this, ee, {
                            version: $(0),
                            storefront: $(1),
                            name: $(2),
                            locale: $(3),
                            segmentCode: $(4),
                            channelCode: $(5),
                            showBanner: $(6) === "1" || $(6) === "true",
                            persistBanner: $(7) === "1" || $(7) === "true",
                            bagEnabled: $(8) !== "0" && $(8) !== "false",
                            consumerStorefront: $(9)
                        }),
                        o(this, ee)
                    }
                    ),
                    f(this, it, ()=>de.get("as_atb").split("|").slice(2).join("")),
                    f(this, _e, ()=>new Promise(k=>{
                        const M = o(this, Ee).call(this);
                        o(this, le).call(this, "storefront", M),
                        k(M)
                    }
                    )),
                    f(this, Ne, ()=>{
                        const k = new Date().getTime();
                        let M = !1
                          , I = null
                          , B = !0
                          , $ = !0;
                        return o(this, Se) || w(this, Se, o(this, _e).call(this).then(z=>{
                            const W = de.getPrefixedAs("cn")
                              , J = z.storefront || o(this, R)
                              , H = `${document.location}`.replace(o(this, De), "$2");
                            if (w(this, F, o(this, F) || je.getItem(Ge)),
                            B = z.bagEnabled,
                            $ = z.showBanner,
                            o(this, F) && (M = o(this, Ce) && o(this, F).ttl === 0 || k < o(this, F).ttl && W === o(this, F).cn && o(this, V) === o(this, F).key && J === o(this, F).sfLoc && (!o(this, Ae) || o(this, Ae) === H)),
                            w(this, Ae, H),
                            M)
                                return Promise.resolve();
                            const se = {
                                storefront: J
                            };
                            return o(this, me).call(this, o(this, q), se, {}, !1).then(ue=>{
                                I = isNaN(parseInt(ue.items, 10)),
                                w(this, F, {
                                    ttl: parseInt(ue.ttl, 10) * 1e3 + k || 0,
                                    items: I ? 0 : parseInt(ue.items, 10),
                                    cn: W,
                                    api: ue.api,
                                    key: o(this, V),
                                    sfLoc: J
                                }),
                                je.setItem(Ge, o(this, F)),
                                w(this, Ce, !!ue.api && !ue.disabled)
                            }
                            )
                        }
                        ).then(vn, vn).then(()=>new Promise((z,W)=>{
                            const J = B && (M || o(this, Ce));
                            o(this, le).call(this, "storeState", {
                                bag: J,
                                segmentNav: $,
                                covers: I
                            });
                            const H = J && o(this, F) && o(this, F).items || 0;
                            o(this, le).call(this, "itemCount", H),
                            w(this, Se, null),
                            J ? z() : W()
                        }
                        ))),
                        o(this, Se)
                    }
                    ),
                    f(this, We, ()=>{
                        const k = window.location.host;
                        return k.slice(k.indexOf("."))
                    }
                    ),
                    f(this, at, k=>new Promise(M=>{
                        setTimeout(M, k)
                    }
                    )),
                    f(this, ke, (k,M)=>o(this, _e).call(this).then(I=>{
                        const B = o(this, F) && o(this, F).api && o(this, F).api.addToBag;
                        if (!B)
                            throw new oe("No add to bag API URL on page.",oe.Types.MISSING_API_ADD_TO_BAG);
                        const $ = {
                            storefront: I.storefront || o(this, R),
                            part: k
                        }
                          , z = r(d({}, M), {
                            atbtoken: o(this, it).call(this)
                        });
                        return o(this, me).call(this, B, $, z, !1)
                    }
                    ).then(I=>{
                        const {addedToBag: B, bagQuantity: $, errorCode: z, message: W} = I;
                        return B ? (this.__setItemCount($ || 0),
                        this.clearBagCache(),
                        Promise.resolve(W)) : z === "CSRF_TOKEN_EXPIRED" && o(this, fe) > 0 ? (T(this, fe)._--,
                        o(this, at).call(this, o(this, Ie)).then(()=>o(this, ke).call(this, k, M))) : Promise.reject(new oe(W,oe.Types.ITEM_NOT_ADDED))
                    }
                    )),
                    g(this, "getDomElement", ()=>o(this, O)),
                    g(this, "getState", ()=>({
                        storeState: o(this, ie).storeState,
                        bagContent: typeof o(this, U) == "object" ? o(this, U) : null
                    })),
                    g(this, "getStoreState", ()=>o(this, Ne).call(this).then(()=>o(this, ie).storeState)),
                    g(this, "getItemCount", ()=>o(this, Ne).call(this).then(()=>o(this, ie).itemCount)),
                    g(this, "__setItemCount", k=>{
                        w(this, U, null),
                        o(this, le).call(this, "itemCount", k),
                        o(this, F) && (o(this, F).items = k,
                        je.setItem(Ge, o(this, F)))
                    }
                    ),
                    g(this, "getStorefront", ()=>new Promise(k=>{
                        const M = o(this, Ee).call(this);
                        o(this, le).call(this, "storefront", M),
                        k(M)
                    }
                    )),
                    g(this, "exitStorefront", (k=!1)=>{
                        const M = document.getElementById(bo);
                        if (M && M.getAttribute("data-store-locale") === "cn") {
                            const I = o(this, We).call(this);
                            de.removePrefixedAs("sfa", "/", I),
                            de.remove("as_sfa", "/", ".apple.com.cn")
                        } else
                            de.removePrefixedAs("sfa", "/", ".apple.com");
                        je.removeItem(Ge),
                        w(this, F, null),
                        w(this, ee, null),
                        o(this, Ee).call(this),
                        k || o(this, Ne).call(this)
                    }
                    ),
                    g(this, "addItem", (k,M,I)=>new Promise(B=>{
                        w(this, fe, M || 1);
                        const $ = I || {};
                        B(o(this, ke).call(this, k, $))
                    }
                    )),
                    g(this, "addFavorite", k=>new Promise(M=>{
                        this.trigger(gn.FAVORITE_ADDED),
                        M()
                    }
                    )),
                    g(this, "updateBagFlyout", ()=>new Promise(k=>{
                        o(this, U) === null ? (w(this, U, !0),
                        (o(this, F) && o(this, F).api ? Promise.resolve() : o(this, Ne).call(this)).then(o(this, _e)).then(M=>{
                            const I = o(this, F) && o(this, F).api && o(this, F).api.flyout
                              , B = {
                                storefront: M.storefront || o(this, R)
                            };
                            if (!I)
                                throw new oe("No flyout API URL on page.",oe.Types.MISSING_API_FLYOUT);
                            return o(this, me).call(this, I, B, {}, !0)
                        }
                        ).then(M=>{
                            w(this, U, M)
                        }
                        , ()=>{
                            w(this, U, null)
                        }
                        ).finally(()=>{
                            k(this.getState())
                        }
                        )) : k(this.getState())
                    }
                    )),
                    g(this, "clearCache", (k=!1)=>{
                        if (!k || !o(this, Ce))
                            return je.removeItem(Ge),
                            w(this, F, null),
                            w(this, ee, null),
                            o(this, Ne).call(this)
                    }
                    ),
                    g(this, "clearBagCache", ()=>{
                        w(this, U, null)
                    }
                    );
                    const x = Object.getPrototypeOf(this);
                    x.AcStoreError = oe,
                    w(this, O, m),
                    w(this, R, v),
                    w(this, V, y),
                    w(this, q, L),
                    w(this, Ae, window.document.referrer.replace(o(this, De), "$2"));
                    const D = o(this, Ee).call(this).consumerStorefront;
                    !!D && !!v && D !== v && this.exitStorefront(!0)
                }
            }
            O = new WeakMap,
            R = new WeakMap,
            V = new WeakMap,
            q = new WeakMap,
            U = new WeakMap,
            F = new WeakMap,
            ee = new WeakMap,
            fe = new WeakMap,
            Ie = new WeakMap,
            ie = new WeakMap,
            Se = new WeakMap,
            Ce = new WeakMap,
            De = new WeakMap,
            Ae = new WeakMap,
            le = new WeakMap,
            me = new WeakMap,
            Ee = new WeakMap,
            it = new WeakMap,
            _e = new WeakMap,
            Ne = new WeakMap,
            We = new WeakMap,
            at = new WeakMap,
            ke = new WeakMap,
            g(yt, "name", "AcStore"),
            g(yt, "AcStoreError", oe),
            g(yt, "staticClearCache", ()=>je.removeItem(Ge));
            class yo {
                constructor() {
                    f(this, ot, "aos-gn-links"),
                    f(this, Me, null),
                    f(this, $e, null),
                    f(this, vt, "AosLinkReplacer"),
                    f(this, ce, ({message: m="", type: v="log", data: y})=>{}
                    ),
                    f(this, xe, m=>{
                        for (const [v,y] of Object.entries(o(this, Me))) {
                            const L = new RegExp(`${v}$`);
                            if (m.match(L))
                                return o(this, ce).call(this, {
                                    type: "info",
                                    message: "replaced with AOS value",
                                    data: {
                                        marcomUrl: m,
                                        aosUrl: y
                                    }
                                }),
                                y
                        }
                        return m
                    }
                    ),
                    f(this, Te, m=>{
                        const {url: v} = m;
                        m.url = o(this, xe).call(this, v)
                    }
                    ),
                    f(this, He, ({baseLinks: m, elevatedLinks: v})=>{
                        m && m.forEach(o(this, Te)),
                        v && v.forEach(o(this, Te))
                    }
                    ),
                    g(this, "shouldReplaceSubMenuLinks", ()=>{
                        let m = !1;
                        const v = document.getElementById(o(this, ot));
                        if (v)
                            try {
                                w(this, Me, JSON.parse(v.innerHTML)),
                                o(this, ce).call(this, {
                                    message: "AOS Replacement map loaded.",
                                    type: "info",
                                    data: o(this, Me)
                                }),
                                m = !0
                            } catch (y) {
                                o(this, ce).call(this, {
                                    message: y.message,
                                    type: "warn",
                                    data: y
                                }),
                                m = !1
                            }
                        return m
                    }
                    ),
                    g(this, "replaceSubMenuLinks", m=>new Promise(v=>{
                        let y;
                        try {
                            if (!this.shouldReplaceSubMenuLinks())
                                throw new Error("AOS URL replacement map is not defined.");
                            w(this, $e, JSON.parse(JSON.stringify(m))),
                            o(this, $e).forEach(({baseGroups: L, elevatedGroups: x})=>{
                                Array.isArray(L) && L.forEach(o(this, He)),
                                Array.isArray(x) && x.forEach(o(this, He))
                            }
                            ),
                            y = o(this, $e),
                            o(this, ce).call(this, {
                                message: "replacement completed",
                                type: "info",
                                data: y
                            })
                        } catch (L) {
                            y = m,
                            o(this, ce).call(this, {
                                message: "replacement failed",
                                type: "warn",
                                data: {
                                    result: y,
                                    error: L
                                }
                            })
                        } finally {
                            v(y)
                        }
                    }
                    ))
                }
            }
            ot = new WeakMap,
            Me = new WeakMap,
            $e = new WeakMap,
            vt = new WeakMap,
            ce = new WeakMap,
            xe = new WeakMap,
            Te = new WeakMap,
            He = new WeakMap;
            const So = new yo;
            b.AcBagFlyout = fo,
            b.AcStore = yt,
            b.AcStoreError = oe,
            b.AosLinkReplacer = So,
            Object.defineProperties(b, {
                __esModule: {
                    value: !0
                },
                [Symbol.toStringTag]: {
                    value: "Module"
                }
            })
        }})
    }
    )(gt, gt.exports);
    var eo = ci(gt.exports)
      , mn = rt({
        __proto__: null,
        default: eo
    }, [gt.exports])
});
/*!
preact@10.10.6
https://preactjs.com
Licensed under MIT

The MIT License (MIT)

Copyright (c) 2015-present Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

/*! 7.0.6 | ..:: AOS Capture ::.. | Tue Feb 14 2023 18:19:34 GMT-0800 (Pacific Standard Time) */
