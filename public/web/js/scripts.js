/*!
 * jQuery v3.5.1
 */
function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function Jt(e, t, n) {
    t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    })
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        a = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        o = n.push,
        s = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        d = u.toString,
        p = d.call(Object),
        f = {},
        h = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        g = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, i, a = (n = n || g).createElement("script");
        if (a.text = e, t)
            for (r in v)(i = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, i);
        n.head.appendChild(a).parentNode.removeChild(a)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var w = "3.5.1",
        x = function(e, t) {
            return new x.fn.init(e, t)
        };

    function S(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !h(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return t % 2
            })))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: n.sort,
        splice: n.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, n, r, i, a, o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || h(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && o !== r && (c && r && (x.isPlainObject(r) || (i = Array.isArray(r))) ? (n = o[t], a = i && !Array.isArray(n) ? [] : i || x.isPlainObject(n) ? n : {}, i = !1, o[t] = x.extend(c, a, r)) : void 0 !== r && (o[t] = r));
        return o
    }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = r(e)) && ("function" != typeof(n = u.call(t, "constructor") && t.constructor) || d.call(n) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (S(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (S(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, a = e.length, o = !n; i < a; i++) !t(e[i], i) !== o && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (S(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a(s)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var E = function(e) {
        var t, n, r, i, a, o, s, l, c, u, d, p, f, h, m, g, v, y, b, w = "sizzle" + 1 * new Date,
            x = e.document,
            S = 0,
            E = 0,
            T = le(),
            C = le(),
            _ = le(),
            D = le(),
            A = function(e, t) {
                return e === t && (d = !0), 0
            },
            L = {}.hasOwnProperty,
            M = [],
            k = M.pop,
            I = M.push,
            P = M.push,
            O = M.slice,
            j = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            $ = "\\[" + R + "*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]",
            H = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            z = new RegExp(R + "+", "g"),
            q = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            B = new RegExp("^" + R + "*," + R + "*"),
            W = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            V = new RegExp(R + "|>"),
            G = new RegExp(H),
            X = new RegExp("^" + F + "$"),
            U = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ae = function() {
                p()
            },
            oe = we((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(M = O.call(x.childNodes), x.childNodes), M[x.childNodes.length].nodeType
        } catch (t) {
            P = {
                apply: M.length ? function(e, t) {
                    I.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var a, s, c, u, d, h, v, y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
            if (!i && (p(t), t = t || f, m)) {
                if (11 !== x && (d = Z.exec(e)))
                    if (a = d[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(a))) return r;
                            if (c.id === a) return r.push(c), r
                        } else if (y && (c = y.getElementById(a)) && b(t, c) && c.id === a) return r.push(c), r
                    } else {
                        if (d[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                        if ((a = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(a)), r
                    } if (n.qsa && !D[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === x && (V.test(e) || W.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = w)), s = (h = o(e)).length; s--;) h[s] = (u ? "#" + u : ":scope") + " " + be(h[s]);
                        v = h.join(",")
                    }
                    try {
                        return P.apply(r, y.querySelectorAll(v)), r
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        u === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(q, "$1"), t, r, i)
        }

        function le() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ce(e) {
            return e[w] = !0, e
        }

        function ue(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function me(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return ce((function(t) {
                return t = +t, ce((function(n, r) {
                    for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                }))
            }))
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, a = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, p = se.setDocument = function(e) {
                var t, i, o = e ? e.ownerDocument || e : x;
                return o != f && 9 === o.nodeType && o.documentElement && (h = (f = o).documentElement, m = !a(f), x != f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ae, !1) : i.attachEvent && i.attachEvent("onunload", ae)), n.scope = ue((function(e) {
                    return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = ue((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ue((function(e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = ue((function(e) {
                    return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                })), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, r, i, a = t.getElementById(e);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                            for (i = t.getElementsByName(e), r = 0; a = i[r++];)
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return a
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = Q.test(f.querySelectorAll)) && (ue((function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), ue((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", H)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        a = t.parentNode,
                        o = [e],
                        s = [t];
                    if (!i || !a) return e == f ? -1 : t == f ? 1 : i ? -1 : a ? 1 : u ? j(u, e) - j(u, t) : 0;
                    if (i === a) return pe(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; o[r] === s[r];) r++;
                    return r ? pe(o[r], s[r]) : o[r] == x ? -1 : s[r] == x ? 1 : 0
                }), f
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (p(e), n.matchesSelector && m && !D[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    D(t, !0)
                }
                return 0 < se(t, f, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != f && p(e), b(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != f && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    a = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    a = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) {
                    for (; t = e[a++];) t === e[a] && (i = r.push(a));
                    for (; i--;) e.splice(r[i], 1)
                }
                return u = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === a || 4 === a) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && T(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(z, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var a = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, p, f, h, m = a !== o ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (g) {
                                if (a) {
                                    for (; m;) {
                                        for (p = t; p = p[m];)
                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (b = (f = (c = (u = (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === S && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            u[e] = [S, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (c = (u = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === S && c[1]), !1 === b)
                                    for (;
                                        (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [S, b]), p !== t)););
                                return (b -= i) === r || b % r == 0 && 0 <= b / r
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[w] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                            for (var r, a = i(e, t), o = a.length; o--;) e[r = j(e, a[o])] = !(n[r] = a[o])
                        })) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ce((function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(q, "$1"));
                        return r[w] ? ce((function(e, t, n, i) {
                            for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                        })) : function(e, i, a) {
                            return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: ce((function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    })),
                    contains: ce((function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || i(t)).indexOf(e)
                            }
                    })),
                    lang: ce((function(e) {
                        return X.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    })),
                    last: ge((function(e, t) {
                        return [t - 1]
                    })),
                    eq: ge((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: ge((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: ge((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    })),
                    gt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    }))
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = he(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function we(e, t, n) {
            var r = t.dir,
                i = t.next,
                a = i || r,
                o = n && "parentNode" === a,
                s = E++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var c, u, d, p = [S, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = u[a]) && c[0] === S && c[1] === s) return p[2] = c[2];
                                if ((u[a] = p)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Se(e, t, n, r, i) {
            for (var a, o = [], s = 0, l = e.length, c = null != t; s < l; s++)(a = e[s]) && (n && !n(a, r, i) || (o.push(a), c && t.push(s)));
            return o
        }

        function Ee(e, t, n, r, i, a) {
            return r && !r[w] && (r = Ee(r)), i && !i[w] && (i = Ee(i, a)), ce((function(a, o, s, l) {
                var c, u, d, p = [],
                    f = [],
                    h = o.length,
                    m = a || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !a && t ? m : Se(m, p, e, s, l),
                    v = n ? i || (a ? e : h || r) ? [] : o : g;
                if (n && n(g, v, s, l), r)
                    for (c = Se(v, f), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                if (a) {
                    if (i || e) {
                        if (i) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                            i(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && -1 < (c = i ? j(a, d) : p[u]) && (a[c] = !(o[c] = d))
                    }
                } else v = Se(v === o ? v.splice(h, v.length) : v), i ? i(null, o, v, l) : P.apply(o, v)
            }))
        }

        function Te(e) {
            for (var t, n, i, a = e.length, o = r.relative[e[0].type], s = o || r.relative[" "], l = o ? 1 : 0, u = we((function(e) {
                    return e === t
                }), s, !0), d = we((function(e) {
                    return -1 < j(t, e)
                }), s, !0), p = [function(e, n, r) {
                    var i = !o && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                    return t = null, i
                }]; l < a; l++)
                if (n = r.relative[e[l].type]) p = [we(xe(p), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (i = ++l; i < a && !r.relative[e[i].type]; i++);
                        return Ee(1 < l && xe(p), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), n, l < i && Te(e.slice(l, i)), i < a && Te(e = e.slice(i)), i < a && be(e))
                    }
                    p.push(n)
                } return xe(p)
        }
        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, o = se.tokenize = function(e, t) {
            var n, i, a, o, s, l, c, u = C[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = r.preFilter; s;) {
                for (o in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(a = [])), n = !1, (i = W.exec(s)) && (n = i.shift(), a.push({
                        value: n,
                        type: i[0].replace(q, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = U[o].exec(s)) || c[o] && !(i = c[o](i)) || (n = i.shift(), a.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : C(e, l).slice(0)
        }, s = se.compile = function(e, t) {
            var n, i, a, s, l, u, d = [],
                h = [],
                g = _[e + " "];
            if (!g) {
                for (t || (t = o(e)), n = t.length; n--;)(g = Te(t[n]))[w] ? d.push(g) : h.push(g);
                (g = _(e, (i = h, s = 0 < (a = d).length, l = 0 < i.length, u = function(e, t, n, o, u) {
                    var d, h, g, v = 0,
                        y = "0",
                        b = e && [],
                        w = [],
                        x = c,
                        E = e || l && r.find.TAG("*", u),
                        T = S += null == x ? 1 : Math.random() || .1,
                        C = E.length;
                    for (u && (c = t == f || t || u); y !== C && null != (d = E[y]); y++) {
                        if (l && d) {
                            for (h = 0, t || d.ownerDocument == f || (p(d), n = !m); g = i[h++];)
                                if (g(d, t || f, n)) {
                                    o.push(d);
                                    break
                                } u && (S = T)
                        }
                        s && ((d = !g && d) && v--, e && b.push(d))
                    }
                    if (v += y, s && y !== v) {
                        for (h = 0; g = a[h++];) g(b, w, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || w[y] || (w[y] = k.call(o));
                            w = Se(w)
                        }
                        P.apply(o, w), u && !e && 0 < w.length && 1 < v + a.length && se.uniqueSort(o)
                    }
                    return u && (S = T, c = x), b
                }, s ? ce(u) : u))).selector = e
            }
            return g
        }, l = se.select = function(e, t, n, i) {
            var a, l, c, u, d, p = "function" == typeof e && e,
                f = !i && o(e = p.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (a = U.needsContext.test(e) ? 0 : l.length; a-- && (c = l[a], !r.relative[u = c.type]);)
                    if ((d = r.find[u]) && (i = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(a, 1), !(e = i.length && be(l))) return P.apply(n, i), n;
                        break
                    }
            }
            return (p || s(e, f))(i, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = ue((function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        })), ue((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || de("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ue((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || de("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ue((function(e) {
            return null == e.getAttribute("disabled")
        })) || de(N, (function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        })), se
    }(e);
    x.find = E, x.expr = E.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = E.uniqueSort, x.text = E.getText, x.isXMLDoc = E.isXML, x.contains = E.contains, x.escapeSelector = E.escape;
    var T = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && x(e).is(n)) break;
                    r.push(e)
                } return r
        },
        C = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        _ = x.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(e, t, n) {
        return h(t) ? x.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        })) : t.nodeType ? x.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? x.grep(e, (function(e) {
            return -1 < s.call(t, e) !== n
        })) : x.filter(t, e, n)
    }
    x.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, x.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
                for (t = 0; t < r; t++)
                    if (x.contains(i[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < r; t++) x.find(e, i[t], n);
            return 1 < r ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(L(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(L(this, e || [], !0))
        },
        is: function(e) {
            return !!L(this, "string" == typeof e && _.test(e) ? x(e) : e || [], !1).length
        }
    });
    var M, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || M, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), A.test(r[1]) && x.isPlainObject(t))
                    for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = g.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, M = x(g);
    var I = /^(?:parents|prev(?:Until|All))/,
        P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                a = [],
                o = "string" != typeof e && x(e);
            if (!_.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        } return this.pushStack(1 < a.length ? x.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(x(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, (function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), 1 < this.length && (P[e] || x.uniqueSort(i), I.test(e) && i.reverse()), this.pushStack(i)
        }
    }));
    var j = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function F(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, x.each(t.match(j) || [], (function(e, t) {
            n[t] = !0
        })), n) : x.extend({}, e);
        var r, i, a, o, s = [],
            l = [],
            c = -1,
            u = function() {
                for (o = o || e.once, a = r = !0; l.length; c = -1)
                    for (i = l.shift(); ++c < s.length;) !1 === s[c].apply(i[0], i[1]) && e.stopOnFalse && (c = s.length, i = !1);
                e.memory || (i = !1), r = !1, o && (s = i ? [] : "")
            },
            d = {
                add: function() {
                    return s && (i && !r && (c = s.length - 1, l.push(i)), function t(n) {
                        x.each(n, (function(n, r) {
                            h(r) ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== b(r) && t(r)
                        }))
                    }(arguments), i && !r && u()), this
                },
                remove: function() {
                    return x.each(arguments, (function(e, t) {
                        for (var n; - 1 < (n = x.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
                    })), this
                },
                has: function(e) {
                    return e ? -1 < x.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = l = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = l = [], i || r || (s = i = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return d
    }, x.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred((function(t) {
                            x.each(n, (function(n, r) {
                                var i = h(e[r[4]]) && e[r[4]];
                                a[r[1]]((function() {
                                    var e = i && i.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, r, i) {
                        var a = 0;

                        function o(t, n, r, i) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < a)) {
                                            if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, h(c) ? i ? c.call(e, o(a, n, N, i), o(a, n, R, i)) : (a++, c.call(e, o(a, n, N, i), o(a, n, R, i), o(a, n, N, n.notifyWith))) : (r !== N && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                        }
                                    },
                                    u = i ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), a <= t + 1 && (r !== R && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return x.Deferred((function(e) {
                            n[0][3].add(o(0, e, h(i) ? i : N, e.notifyWith)), n[1][3].add(o(0, e, h(t) ? t : N)), n[2][3].add(o(0, e, h(r) ? r : R))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, i) : i
                    }
                },
                a = {};
            return x.each(n, (function(e, t) {
                var o = t[2],
                    s = t[5];
                i[t[1]] = o.add, s && o.add((function() {
                    r = s
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = o.fireWith
            })), i.promise(a), t && t.call(a, a), a
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                a = i.call(arguments),
                o = x.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, a[e] = 1 < arguments.length ? i.call(arguments) : n, --t || o.resolveWith(r, a)
                    }
                };
            if (t <= 1 && (F(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || h(a[n] && a[n].then))) return o.then();
            for (; n--;) F(a[n], s(n), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && $.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, x.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var H = x.Deferred();

    function z() {
        g.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), x.ready()
    }
    x.fn.ready = function(e) {
        return H.then(e).catch((function(e) {
            x.readyException(e)
        })), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || H.resolveWith(g, [x])
        }
    }), x.ready.then = H.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));
    var q = function(e, t, n, r, i, a, o) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (s in i = !0, n) q(e, t, s, n[s], !0, a, o);
            else if (void 0 !== r && (i = !0, h(r) || (o = !0), c && (o ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(x(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : a
        },
        B = /^-ms-/,
        W = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(B, "ms-").replace(W, V)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function U() {
        this.expando = x.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(j) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || x.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var Y = new U,
        J = new U,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return J.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), x.fn.extend({
        data: function(e, t) {
            var n, r, i, a = this[0],
                o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (i = J.get(a), 1 === a.nodeType && !Y.get(a, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && 0 === (r = o[n].name).indexOf("data-") && (r = G(r.slice(5)), Z(a, r, i[r]));
                    Y.set(a, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                J.set(this, e)
            })) : q(this, (function(t) {
                var n;
                if (a && void 0 === t) return void 0 !== (n = J.get(a, e)) || void 0 !== (n = Z(a, e)) ? n : void 0;
                this.each((function() {
                    J.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                J.remove(this, e)
            }))
        }
    }), x.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, x.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                a = x._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, (function() {
                x.dequeue(e, t)
            }), a)), !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: x.Callbacks("once memory").add((function() {
                    Y.remove(e, [t + "queue", n])
                }))
            })
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                x.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = x.Deferred(),
                a = this,
                o = this.length,
                s = function() {
                    --r || i.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = Y.get(a[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = g.documentElement,
        ie = function(e) {
            return x.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var oe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === x.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, a, o = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; o--;) x.style(e, t, u + c), (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (o = 0), u /= a;
            u *= 2, x.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
    }
    var le = {};

    function ce(e, t) {
        for (var n, r, i, a, o, s, l, c = [], u = 0, d = e.length; u < d; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (c[u] = Y.get(r, "display") || null, c[u] || (r.style.display = "")), "" === r.style.display && oe(r) && (c[u] = (l = o = a = void 0, o = (i = r).ownerDocument, s = i.nodeName, (l = le[s]) || (a = o.body.appendChild(o.createElement(s)), l = x.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), le[s] = l)))) : "none" !== n && (c[u] = "none", Y.set(r, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    x.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                oe(this) ? x(this).show() : x(this).hide()
            }))
        }
    });
    var ue, de, pe = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ue = g.createDocumentFragment().appendChild(g.createElement("div")), (de = g.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), ue.appendChild(de), f.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = "<option></option>", f.option = !!ue.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? x.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, f.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, r, i) {
        for (var a, o, s, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((a = e[f]) || 0 === a)
                if ("object" === b(a)) x.merge(p, a.nodeType ? [a] : a);
                else if (ye.test(a)) {
            for (o = o || d.appendChild(t.createElement("div")), s = (fe.exec(a) || ["", ""])[1].toLowerCase(), l = me[s] || me._default, o.innerHTML = l[1] + x.htmlPrefilter(a) + l[2], u = l[0]; u--;) o = o.lastChild;
            x.merge(p, o.childNodes), (o = d.firstChild).textContent = ""
        } else p.push(t.createTextNode(a));
        for (d.textContent = "", f = 0; a = p[f++];)
            if (r && -1 < x.inArray(a, r)) i && i.push(a);
            else if (c = ie(a), o = ge(d.appendChild(a), "script"), c && ve(o), n)
            for (u = 0; a = o[u++];) he.test(a.type || "") && n.push(a);
        return d
    }
    var we = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Se = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return g.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function _e(e, t, n, r, i, a) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) _e(e, s, n, r, t[s], a);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === a && (o = i, (i = function(e) {
            return x().off(e), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = x.guid++)), e.each((function() {
            x.event.add(this, t, i, r, n)
        }))
    }

    function De(e, t, n) {
        n ? (Y.set(e, t, !1), x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, a, o = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (o.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (o = i.call(arguments), Y.set(this, t, o), r = n(this, t), this[t](), o !== (a = Y.get(this, t)) || r ? Y.set(this, t, !1) : a = {}, o !== a) return e.stopImmediatePropagation(), e.preventDefault(), a.value
                } else o.length && (Y.set(this, t, {
                    value: x.event.trigger(x.extend(o[0], x.Event.prototype), o.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && x.event.add(e, t, Ee)
    }
    x.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var a, o, s, l, c, u, d, p, f, h, m, g = Y.get(e);
            if (X(e))
                for (n.handler && (n = (a = n).handler, i = a.selector), i && x.find.matchesSelector(re, i), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(j) || [""]).length; c--;) f = m = (s = Se.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), f && (d = x.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = x.event.special[f] || {}, u = x.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && x.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, a), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, o) || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), x.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var a, o, s, l, c, u, d, p, f, h, m, g = Y.hasData(e) && Y.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--;)
                    if (f = m = (s = Se.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = x.event.special[f] || {}, p = l[f = (r ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = p.length; a--;) u = p[a], !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        o && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || x.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) x.event.remove(e, f + t[c], n, r, !0);
                x.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, a, o, s = new Array(arguments.length),
                l = x.event.fix(e),
                c = (Y.get(this, "events") || Object.create(null))[l.type] || [],
                u = x.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (o = x.event.handlers.call(this, l, c), t = 0;
                    (i = o[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = i.elem, n = 0;
                        (a = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== a.namespace && !l.rnamespace.test(a.namespace) || (l.handleObj = a, l.data = a.data, void 0 !== (r = ((x.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, a, o, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (a = [], o = {}, n = 0; n < l; n++) void 0 === o[i = (r = t[n]).selector + " "] && (o[i] = r.needsContext ? -1 < x(i, this).index(c) : x.find(i, this, null, [c]).length), o[i] && a.push(r);
                        a.length && s.push({
                            elem: c,
                            handlers: a
                        })
                    } return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && D(t, "input") && De(t, "click", Ee), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && D(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && D(t, "input") && Y.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp), x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        x.event.special[e] = {
            setup: function() {
                return De(this, e, Ce), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    })), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || x.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), x.fn.extend({
        on: function(e, t, n, r) {
            return _e(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return _e(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each((function() {
                x.event.remove(this, e, n, t)
            }))
        }
    });
    var Ae = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ke(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, a, o, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) x.event.add(t, i, s[i][n]);
            J.hasData(e) && (a = J.access(e), o = x.extend({}, a), J.set(t, o))
        }
    }

    function je(e, t, n, r) {
        t = a(t);
        var i, o, s, l, c, u, d = 0,
            p = e.length,
            m = p - 1,
            g = t[0],
            v = h(g);
        if (v || 1 < p && "string" == typeof g && !f.checkClone && Le.test(g)) return e.each((function(i) {
            var a = e.eq(i);
            v && (t[0] = g.call(this, i, a.html())), je(a, t, n, r)
        }));
        if (p && (o = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (l = (s = x.map(ge(i, "script"), Ie)).length; d < p; d++) c = i, d !== m && (c = x.clone(c, !0, !0), l && x.merge(s, ge(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument, x.map(s, Pe), d = 0; d < l; d++) c = s[d], he.test(c.type || "") && !Y.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, u) : y(c.textContent.replace(Me, ""), c, u))
        }
        return e
    }

    function Ne(e, t, n) {
        for (var r, i = t ? x.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || x.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, a, o, s, l, c, u = e.cloneNode(!0),
                d = ie(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (o = ge(u), r = 0, i = (a = ge(e)).length; r < i; r++) s = a[r], "input" === (c = (l = o[r]).nodeName.toLowerCase()) && pe.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (a = a || ge(e), o = o || ge(u), r = 0, i = a.length; r < i; r++) Oe(a[r], o[r]);
                else Oe(e, u);
            return 0 < (o = ge(u, "script")).length && ve(o, !d && ge(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, r, i = x.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (X(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return Ne(this, e, !0)
        },
        remove: function(e) {
            return Ne(this, e)
        },
        text: function(e) {
            return q(this, (function(e) {
                return void 0 === e ? x.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return je(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return je(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return je(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return je(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return x.clone(this, e, t)
            }))
        },
        html: function(e) {
            return q(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !me[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return je(this, arguments, (function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(ge(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        x.fn[e] = function(e) {
            for (var n, r = [], i = x(e), a = i.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), x(i[s])[t](n), o.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Fe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        $e = function(e, t, n) {
            var r, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = a[i];
            return r
        },
        He = new RegExp(ne.join("|"), "i");

    function ze(e, t, n) {
        var r, i, a, o, s = e.style;
        return (n = n || Fe(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || ie(e) || (o = x.style(e, t)), !f.pixelBoxStyles() && Re.test(o) && He.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 !== o ? o + "" : o
    }

    function qe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", o = 36 === n(t.right), i = 36 === n(t.width), u.style.position = "absolute", a = 12 === n(u.offsetWidth / 3), re.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, a, o, s, l, c = g.createElement("div"),
            u = g.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(f, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), o
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), a
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = g.createElement("table"), n = g.createElement("tr"), r = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", re.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = 3 < parseInt(i.height), re.removeChild(t)), s
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        We = g.createElement("div").style,
        Ve = {};

    function Ge(e) {
        return x.cssProps[e] || Ve[e] || (e in We ? e : Ve[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;)
                if ((e = Be[n] + t) in We) return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Ue = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ke(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, a) {
        var o = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === n && (l += x.css(e, n + ne[o], !0, i)), r ? ("content" === n && (l -= x.css(e, "padding" + ne[o], !0, i)), "margin" !== n && (l -= x.css(e, "border" + ne[o] + "Width", !0, i))) : (l += x.css(e, "padding" + ne[o], !0, i), "padding" !== n ? l += x.css(e, "border" + ne[o] + "Width", !0, i) : s += x.css(e, "border" + ne[o] + "Width", !0, i));
        return !r && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - .5)) || 0), l
    }

    function Ze(e, t, n) {
        var r = Fe(e),
            i = (!f.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, r),
            a = i,
            o = ze(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return (!f.boxSizingReliable() && i || !f.reliableTrDimensions() && D(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === x.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === x.css(e, "boxSizing", !1, r), (a = s in e) && (o = e[s])), (o = parseFloat(o) || 0) + Qe(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ze(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, o, s = G(t),
                    l = Ue.test(t),
                    c = e.style;
                if (l || (t = Ge(s)), o = x.cssHooks[t] || x.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : c[t];
                "string" == (a = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), a = "number"), null != n && n == n && ("number" !== a || l || (n += i && i[3] || (x.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, a, o, s = G(t);
            return Ue.test(t) || (t = Ge(s)), (o = x.cssHooks[t] || x.cssHooks[s]) && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (a = parseFloat(i), !0 === n || isFinite(a) ? a || 0 : i) : i
        }
    }), x.each(["height", "width"], (function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Xe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : $e(e, Ye, (function() {
                    return Ze(e, t, r)
                }))
            },
            set: function(e, n, r) {
                var i, a = Fe(e),
                    o = !f.scrollboxSize() && "absolute" === a.position,
                    s = (o || r) && "border-box" === x.css(e, "boxSizing", !1, a),
                    l = r ? Qe(e, t, r, s, a) : 0;
                return s && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Qe(e, t, "border", !1, a) - .5)), l && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Ke(0, n, l)
            }
        }
    })), x.cssHooks.marginLeft = qe(f.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = a[r] || a[r - 2] || a[0];
                return i
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Ke)
    })), x.fn.extend({
        css: function(e, t) {
            return q(this, (function(e, t, n) {
                var r, i, a = {},
                    o = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; o < i; o++) a[t[o]] = x.css(e, t[o], !1, r);
                    return a
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((x.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, a) {
            this.elem = e, this.prop = n, this.easing = i || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = et.prototype.init, x.fx.step = {};
    var tt, nt, rt, it, at = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function st() {
        nt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, x.fx.interval), x.fx.tick())
    }

    function lt() {
        return e.setTimeout((function() {
            tt = void 0
        })), tt = Date.now()
    }

    function ct(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), a = 0, o = i.length; a < o; a++)
            if (r = i[a].call(n, t, e)) return r
    }

    function dt(e, t, n) {
        var r, i, a = 0,
            o = dt.prefilters.length,
            s = x.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (i) return !1;
                for (var t = tt || lt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), a = 0, o = c.tweens.length; a < o; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && o ? n : (o || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, r, i, a, o;
                for (n in e)
                    if (i = t[r = G(n)], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (o = x.cssHooks[r]) && "expand" in o)
                        for (n in a = o.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = i);
                    else t[r] = i
            }(u, c.opts.specialEasing); a < o; a++)
            if (r = dt.prefilters[a].call(c, e, u, c.opts)) return h(r.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
        return x.map(u, ut, c), h(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    x.Animation = x.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            h(e) ? (t = e, e = ["*"]) : e = e.match(j);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, a, o, s, l, c, u, d = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                m = e.nodeType && oe(e),
                g = Y.get(e, "fxshow");
            for (r in n.queue || (null == (o = x._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || s()
                }), o.unqueued++, p.always((function() {
                    p.always((function() {
                        o.unqueued--, x.queue(e, "fx").length || o.empty.fire()
                    }))
                }))), t)
                if (i = t[r], at.test(i)) {
                    if (delete t[r], a = a || "toggle" === i, i === (m ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        m = !0
                    }
                    f[r] = g && g[r] || x.style(e, r)
                } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
                for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = Y.get(e, "display")), "none" === (u = x.css(e, "display")) && (c ? u = c : (ce([e], !0), c = e.style.display || c, u = x.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (p.done((function() {
                        h.display = c
                    })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    }))), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", {
                    display: c
                }), a && (g.hidden = !m), m && ce([e], !0), p.done((function() {
                    for (r in m || ce([e]), Y.remove(e, "fxshow"), f) x.style(e, r, f[r])
                }))), l = ut(m ? g[r] : 0, r, p), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return x.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            h(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                a = x.speed(t, n, r),
                o = function() {
                    var t = dt(this, x.extend({}, e), a);
                    (i || Y.get(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    a = x.timers,
                    o = Y.get(this);
                if (i) o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && ot.test(i) && r(o[i]);
                for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                !t && n || x.dequeue(this, e)
            }))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each((function() {
                var t, n = Y.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    a = x.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }))
        }
    }), x.each(["toggle", "show", "hide"], (function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i)
        }
    })), x.each({
        slideDown: ct("show"),
        slideUp: ct("hide"),
        slideToggle: ct("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    })), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            n = x.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), tt = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        nt || (nt = !0, st())
    }, x.fx.stop = function() {
        nt = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(t, n) {
        return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        }))
    }, rt = g.createElement("input"), it = g.createElement("select").appendChild(g.createElement("option")), rt.type = "checkbox", f.checkOn = "" !== rt.value, f.optSelected = it.selected, (rt = g.createElement("input")).value = "t", rt.type = "radio", f.radioValue = "t" === rt.value;
    var pt, ft = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return q(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                x.removeAttr(this, e)
            }))
        }
    }), x.extend({
        attr: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === a && x.isXMLDoc(e) || (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = x.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(j);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = ft[t] || x.find.attr;
        ft[t] = function(e, t, r) {
            var i, a, o = t.toLowerCase();
            return r || (a = ft[o], ft[o] = i, i = null != n(e, t, r) ? o : null, ft[o] = a), i
        }
    }));
    var ht = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;

    function gt(e) {
        return (e.match(j) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function yt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return q(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[x.propFix[e] || e]
            }))
        }
    }), x.extend({
        prop: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && x.isXMLDoc(e) || (t = x.propFix[t] || t, i = x.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        x.propFix[this.toLowerCase()] = this
    })), x.fn.extend({
        addClass: function(e) {
            var t, n, r, i, a, o, s, l = 0;
            if (h(e)) return this.each((function(t) {
                x(this).addClass(e.call(this, t, vt(this)))
            }));
            if ((t = yt(e)).length)
                for (; n = this[l++];)
                    if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                        for (o = 0; a = t[o++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        i !== (s = gt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, a, o, s, l = 0;
            if (h(e)) return this.each((function(t) {
                x(this).removeClass(e.call(this, t, vt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = yt(e)).length)
                for (; n = this[l++];)
                    if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                        for (o = 0; a = t[o++];)
                            for (; - 1 < r.indexOf(" " + a + " ");) r = r.replace(" " + a + " ", " ");
                        i !== (s = gt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                x(this).toggleClass(e.call(this, n, vt(this), t), t)
            })) : this.each((function() {
                var t, i, a, o;
                if (r)
                    for (i = 0, a = x(this), o = yt(e); t = o[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + gt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e), this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, x(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = x.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }))) : i ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : gt(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        a = e.selectedIndex,
                        o = "select-one" === e.type,
                        s = o ? null : [],
                        l = o ? a + 1 : i.length;
                    for (r = a < 0 ? l : o ? a : 0; r < l; r++)
                        if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, a = x.makeArray(t), o = i.length; o--;)((r = i[o]).selected = -1 < x.inArray(x.valHooks.option.get(r), a)) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), x.each(["radio", "checkbox"], (function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        }, f.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), f.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function(t, n, r, i) {
            var a, o, s, l, c, d, p, f, v = [r || g],
                y = u.call(t, "type") ? t.type : t,
                b = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = f = s = r = r || g, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(y + x.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), p = x.event.special[y] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!i && !p.noBubble && !m(r)) {
                    for (l = p.delegateType || y, wt.test(l + y) || (o = o.parentNode); o; o = o.parentNode) v.push(o), s = o;
                    s === (r.ownerDocument || g) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (a = 0;
                    (o = v[a++]) && !t.isPropagationStopped();) f = o, t.type = 1 < a ? l : p.bindType || y, (d = (Y.get(o, "events") || Object.create(null))[t.type] && Y.get(o, "handle")) && d.apply(o, n), (d = c && o[c]) && d.apply && X(o) && (t.result = d.apply(o, n), !1 === t.result && t.preventDefault());
                return t.type = y, i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !X(r) || c && h(r[y]) && !m(r) && ((s = r[c]) && (r[c] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, xt), r[y](), t.isPropagationStopped() && f.removeEventListener(y, xt), x.event.triggered = void 0, s && (r[c] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(r, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                x.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), f.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    i = Y.access(r, t);
                i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    i = Y.access(r, t) - 1;
                i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
            }
        }
    }));
    var St = e.location,
        Et = {
            guid: Date.now()
        },
        Tt = /\?/;
    x.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), n
    };
    var Ct = /\[\]$/,
        _t = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function Lt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) x.each(t, (function(t, i) {
            n || Ct.test(e) ? r(e, i) : Lt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== b(t)) r(e, t);
        else
            for (i in t) Lt(e + "[" + i + "]", t[i], n, r)
    }
    x.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = h(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() {
            i(this.name, this.value)
        }));
        else
            for (n in e) Lt(n, e[n], t, i);
        return r.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && At.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            })).map((function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(_t, "\r\n")
                }
            })).get()
        }
    });
    var Mt = /%20/g,
        kt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Nt = {},
        Rt = {},
        Ft = "*/".concat("*"),
        $t = g.createElement("a");

    function Ht(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                a = t.toLowerCase().match(j) || [];
            if (h(n))
                for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function zt(e, t, n, r) {
        var i = {},
            a = e === Rt;

        function o(s) {
            var l;
            return i[s] = !0, x.each(e[s] || [], (function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || i[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            })), l
        }
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function qt(e, t) {
        var n, r, i = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r), e
    }
    $t.href = St.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qt(qt(e, x.ajaxSettings), t) : qt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Nt),
        ajaxTransport: Ht(Rt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, i, a, o, s, l, c, u, d, p, f = x.ajaxSetup({}, n),
                h = f.context || f,
                m = f.context && (h.nodeType || h.jquery) ? x(h) : x.event,
                v = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = f.statusCode || {},
                w = {},
                S = {},
                E = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!o)
                                for (o = {}; t = Pt.exec(a);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = o[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || E;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (v.promise(T), f.url = ((t || f.url || St.href) + "").replace(jt, St.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
                l = g.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), zt(Nt, f, n, T), c) return T;
            for (d in (u = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), i = f.url.replace(kt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Mt, "+")) : (p = f.url.slice(i.length), f.data && (f.processData || "string" == typeof f.data) && (i += (Tt.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (i = i.replace(It, "$1"), p = (Tt.test(i) ? "&" : "?") + "_=" + Et.guid++ + p), f.url = i + p), f.ifModified && (x.lastModified[i] && T.setRequestHeader("If-Modified-Since", x.lastModified[i]), x.etag[i] && T.setRequestHeader("If-None-Match", x.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || c)) return T.abort();
            if (E = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), r = zt(Rt, f, n, T)) {
                if (T.readyState = 1, u && m.trigger("ajaxSend", [T, f]), c) return T;
                f.async && 0 < f.timeout && (s = e.setTimeout((function() {
                    T.abort("timeout")
                }), f.timeout));
                try {
                    c = !1, r.send(w, C)
                } catch (t) {
                    if (c) throw t;
                    C(-1, t)
                }
            } else C(-1, "No Transport");

            function C(t, n, o, l) {
                var d, p, g, w, S, E = n;
                c || (c = !0, s && e.clearTimeout(s), r = void 0, a = l || "", T.readyState = 0 < t ? 4 : 0, d = 200 <= t && t < 300 || 304 === t, o && (w = function(e, t, n) {
                    for (var r, i, a, o, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            } if (l[0] in n) a = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                a = i;
                                break
                            }
                            o || (o = i)
                        }
                        a = a || o
                    }
                    if (a) return a !== l[0] && l.unshift(a), n[a]
                }(f, T, o)), !d && -1 < x.inArray("script", f.dataTypes) && (f.converters["text script"] = function() {}), w = function(e, t, n, r) {
                    var i, a, o, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                    for (a = u.shift(); a;)
                        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(o = c[l + " " + a] || c["* " + a]))
                            for (i in c)
                                if ((s = i.split(" "))[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === o ? o = c[i] : !0 !== c[i] && (a = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== o)
                            if (o && e.throws) t = o(t);
                            else try {
                                t = o(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, T, d), d ? (f.ifModified && ((S = T.getResponseHeader("Last-Modified")) && (x.lastModified[i] = S), (S = T.getResponseHeader("etag")) && (x.etag[i] = S)), 204 === t || "HEAD" === f.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = w.state, p = w.data, d = !(g = w.error))) : (g = E, !t && E || (E = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || E) + "", d ? v.resolveWith(h, [p, E, T]) : v.rejectWith(h, [T, E, g]), T.statusCode(b), b = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [T, f, d ? p : g]), y.fireWith(h, [T, E]), u && (m.trigger("ajaxComplete", [T, f]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], (function(e, t) {
        x[t] = function(e, n, r, i) {
            return h(n) && (i = i || r, r = n, n = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, x.isPlainObject(e) && e))
        }
    })), x.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), x._evalUrl = function(e, t, n) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                x.globalEval(e, t, n)
            }
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                x(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                x(this).replaceWith(this.childNodes)
            })), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        Wt = x.ajaxSettings.xhr();
    f.cors = !!Wt && "withCredentials" in Wt, f.ajax = Wt = !!Wt, x.ajaxTransport((function(t) {
        var n, r;
        if (f.cors || Wt && !t.crossDomain) return {
            send: function(i, a) {
                var o, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) s[o] = t.xhrFields[o];
                for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(o, i[o]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout((function() {
                        n && r()
                    }))
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (i) {
                    if (n) throw i
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), x.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), x.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, i) {
                t = x("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), g.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Vt, Gt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || x.expando + "_" + Et.guid++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, a, o, s = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, "$1" + i) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || x.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
            o = arguments
        }, r.always((function() {
            void 0 === a ? x(e).removeProp(i) : e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, Gt.push(i)), o && h(a) && a(o[0]), o = a = void 0
        })), "script"
    })), f.createHTMLDocument = ((Vt = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((r = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(r)) : t = g), a = !n && [], (i = A.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, a), a && a.length && x(a).remove(), x.merge([], i.childNodes)));
        var r, i, a
    }, x.fn.load = function(e, t, n) {
        var r, i, a, o = this,
            s = e.indexOf(" ");
        return -1 < s && (r = gt(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < o.length && x.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            a = arguments, o.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
        })).always(n && function(e, t) {
            o.each((function() {
                n.apply(this, a || [e.responseText, t, e])
            }))
        }), this
    }, x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, (function(t) {
            return e === t.elem
        })).length
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r, i, a, o, s, l, c = x.css(e, "position"),
                u = x(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), a = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (a + l).indexOf("auto") ? (o = (r = u.position()).top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), h(t) && (t = t.call(e, n, x.extend({}, s))), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
        }
    }, x.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                x.offset.setOffset(this, e, t)
            }));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = x(e).offset()).top += x.css(e, "borderTopWidth", !0), i.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - x.css(r, "marginTop", !0),
                    left: t.left - i.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || re
            }))
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(r) {
            return q(this, (function(e, r, i) {
                var a;
                if (m(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === i) return a ? a[t] : e[r];
                a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i
            }), e, r, arguments.length)
        }
    })), x.each(["top", "left"], (function(e, t) {
        x.cssHooks[t] = qe(f.pixelPosition, (function(e, n) {
            if (n) return n = ze(e, t), Re.test(n) ? x(e).position()[t] + "px" : n
        }))
    })), x.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            x.fn[r] = function(i, a) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === a ? "margin" : "border");
                return q(this, (function(t, n, i) {
                    var a;
                    return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? x.css(t, n, s) : x.style(t, n, i, s)
                }), t, o ? i : void 0, o)
            }
        }))
    })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        x.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    x.proxy = function(e, t) {
        var n, r, a;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = i.call(arguments, 2), (a = function() {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, a
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = D, x.isFunction = h, x.isWindow = m, x.camelCase = G, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, x.trim = function(e) {
        return null == e ? "" : (e + "").replace(Ut, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return x
    }));
    var Yt = e.jQuery,
        Jt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Jt), t && e.jQuery === x && (e.jQuery = Yt), x
    }, void 0 === t && (e.jQuery = e.$ = x), x
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Flowbite", [], t) : "object" == typeof exports ? exports.Flowbite = t() : e.Flowbite = t()
}(self, (function() {
    return function() {
        "use strict";
        var e = {
                647: function(e, t, n) {
                    n.r(t)
                },
                853: function(e, t, n) {
                    n.r(t), n.d(t, {
                        afterMain: function() {
                            return S
                        },
                        afterRead: function() {
                            return b
                        },
                        afterWrite: function() {
                            return C
                        },
                        applyStyles: function() {
                            return I
                        },
                        arrow: function() {
                            return Q
                        },
                        auto: function() {
                            return s
                        },
                        basePlacements: function() {
                            return l
                        },
                        beforeMain: function() {
                            return w
                        },
                        beforeRead: function() {
                            return v
                        },
                        beforeWrite: function() {
                            return E
                        },
                        bottom: function() {
                            return i
                        },
                        clippingParents: function() {
                            return d
                        },
                        computeStyles: function() {
                            return ne
                        },
                        createPopper: function() {
                            return Ie
                        },
                        createPopperBase: function() {
                            return ke
                        },
                        createPopperLite: function() {
                            return Pe
                        },
                        detectOverflow: function() {
                            return ye
                        },
                        end: function() {
                            return u
                        },
                        eventListeners: function() {
                            return ie
                        },
                        flip: function() {
                            return be
                        },
                        hide: function() {
                            return Se
                        },
                        left: function() {
                            return o
                        },
                        main: function() {
                            return x
                        },
                        modifierPhases: function() {
                            return _
                        },
                        offset: function() {
                            return Ee
                        },
                        placements: function() {
                            return g
                        },
                        popper: function() {
                            return f
                        },
                        popperGenerator: function() {
                            return Me
                        },
                        popperOffsets: function() {
                            return Te
                        },
                        preventOverflow: function() {
                            return Ce
                        },
                        read: function() {
                            return y
                        },
                        reference: function() {
                            return h
                        },
                        right: function() {
                            return a
                        },
                        start: function() {
                            return c
                        },
                        top: function() {
                            return r
                        },
                        variationPlacements: function() {
                            return m
                        },
                        viewport: function() {
                            return p
                        },
                        write: function() {
                            return T
                        }
                    });
                    var r = "top",
                        i = "bottom",
                        a = "right",
                        o = "left",
                        s = "auto",
                        l = [r, i, a, o],
                        c = "start",
                        u = "end",
                        d = "clippingParents",
                        p = "viewport",
                        f = "popper",
                        h = "reference",
                        m = l.reduce((function(e, t) {
                            return e.concat([t + "-" + c, t + "-" + u])
                        }), []),
                        g = [].concat(l, [s]).reduce((function(e, t) {
                            return e.concat([t, t + "-" + c, t + "-" + u])
                        }), []),
                        v = "beforeRead",
                        y = "read",
                        b = "afterRead",
                        w = "beforeMain",
                        x = "main",
                        S = "afterMain",
                        E = "beforeWrite",
                        T = "write",
                        C = "afterWrite",
                        _ = [v, y, b, w, x, S, E, T, C];

                    function D(e) {
                        return e ? (e.nodeName || "").toLowerCase() : null
                    }

                    function A(e) {
                        if (null == e) return window;
                        if ("[object Window]" !== e.toString()) {
                            var t = e.ownerDocument;
                            return t && t.defaultView || window
                        }
                        return e
                    }

                    function L(e) {
                        return e instanceof A(e).Element || e instanceof Element
                    }

                    function M(e) {
                        return e instanceof A(e).HTMLElement || e instanceof HTMLElement
                    }

                    function k(e) {
                        return "undefined" != typeof ShadowRoot && (e instanceof A(e).ShadowRoot || e instanceof ShadowRoot)
                    }
                    var I = {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    i = t.elements[e];
                                M(i) && D(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            i = t.attributes[e] || {},
                                            a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        M(r) && D(r) && (Object.assign(r.style, a), Object.keys(i).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    };

                    function P(e) {
                        return e.split("-")[0]
                    }
                    var O = Math.max,
                        j = Math.min,
                        N = Math.round;

                    function R() {
                        var e = navigator.userAgentData;
                        return null != e && e.brands ? e.brands.map((function(e) {
                            return e.brand + "/" + e.version
                        })).join(" ") : navigator.userAgent
                    }

                    function F() {
                        return !/^((?!chrome|android).)*safari/i.test(R())
                    }

                    function $(e, t, n) {
                        void 0 === t && (t = !1), void 0 === n && (n = !1);
                        var r = e.getBoundingClientRect(),
                            i = 1,
                            a = 1;
                        t && M(e) && (i = e.offsetWidth > 0 && N(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && N(r.height) / e.offsetHeight || 1);
                        var o = (L(e) ? A(e) : window).visualViewport,
                            s = !F() && n,
                            l = (r.left + (s && o ? o.offsetLeft : 0)) / i,
                            c = (r.top + (s && o ? o.offsetTop : 0)) / a,
                            u = r.width / i,
                            d = r.height / a;
                        return {
                            width: u,
                            height: d,
                            top: c,
                            right: l + u,
                            bottom: c + d,
                            left: l,
                            x: l,
                            y: c
                        }
                    }

                    function H(e) {
                        var t = $(e),
                            n = e.offsetWidth,
                            r = e.offsetHeight;
                        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                            x: e.offsetLeft,
                            y: e.offsetTop,
                            width: n,
                            height: r
                        }
                    }

                    function z(e, t) {
                        var n = t.getRootNode && t.getRootNode();
                        if (e.contains(t)) return !0;
                        if (n && k(n)) {
                            var r = t;
                            do {
                                if (r && e.isSameNode(r)) return !0;
                                r = r.parentNode || r.host
                            } while (r)
                        }
                        return !1
                    }

                    function q(e) {
                        return A(e).getComputedStyle(e)
                    }

                    function B(e) {
                        return ["table", "td", "th"].indexOf(D(e)) >= 0
                    }

                    function W(e) {
                        return ((L(e) ? e.ownerDocument : e.document) || window.document).documentElement
                    }

                    function V(e) {
                        return "html" === D(e) ? e : e.assignedSlot || e.parentNode || (k(e) ? e.host : null) || W(e)
                    }

                    function G(e) {
                        return M(e) && "fixed" !== q(e).position ? e.offsetParent : null
                    }

                    function X(e) {
                        for (var t = A(e), n = G(e); n && B(n) && "static" === q(n).position;) n = G(n);
                        return n && ("html" === D(n) || "body" === D(n) && "static" === q(n).position) ? t : n || function(e) {
                            var t = /firefox/i.test(R());
                            if (/Trident/i.test(R()) && M(e) && "fixed" === q(e).position) return null;
                            var n = V(e);
                            for (k(n) && (n = n.host); M(n) && ["html", "body"].indexOf(D(n)) < 0;) {
                                var r = q(n);
                                if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                                n = n.parentNode
                            }
                            return null
                        }(e) || t
                    }

                    function U(e) {
                        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
                    }

                    function Y(e, t, n) {
                        return O(e, j(t, n))
                    }

                    function J(e) {
                        return Object.assign({}, {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, e)
                    }

                    function K(e, t) {
                        return t.reduce((function(t, n) {
                            return t[n] = e, t
                        }), {})
                    }
                    var Q = {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                s = e.name,
                                c = e.options,
                                u = n.elements.arrow,
                                d = n.modifiersData.popperOffsets,
                                p = P(n.placement),
                                f = U(p),
                                h = [o, a].indexOf(p) >= 0 ? "height" : "width";
                            if (u && d) {
                                var m = function(e, t) {
                                        return J("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                            placement: t.placement
                                        })) : e) ? e : K(e, l))
                                    }(c.padding, n),
                                    g = H(u),
                                    v = "y" === f ? r : o,
                                    y = "y" === f ? i : a,
                                    b = n.rects.reference[h] + n.rects.reference[f] - d[f] - n.rects.popper[h],
                                    w = d[f] - n.rects.reference[f],
                                    x = X(u),
                                    S = x ? "y" === f ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
                                    E = b / 2 - w / 2,
                                    T = m[v],
                                    C = S - g[h] - m[y],
                                    _ = S / 2 - g[h] / 2 + E,
                                    D = Y(T, _, C),
                                    A = f;
                                n.modifiersData[s] = ((t = {})[A] = D, t.centerOffset = D - _, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && z(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    };

                    function Z(e) {
                        return e.split("-")[1]
                    }
                    var ee = {
                        top: "auto",
                        right: "auto",
                        bottom: "auto",
                        left: "auto"
                    };

                    function te(e) {
                        var t, n = e.popper,
                            s = e.popperRect,
                            l = e.placement,
                            c = e.variation,
                            d = e.offsets,
                            p = e.position,
                            f = e.gpuAcceleration,
                            h = e.adaptive,
                            m = e.roundOffsets,
                            g = e.isFixed,
                            v = d.x,
                            y = void 0 === v ? 0 : v,
                            b = d.y,
                            w = void 0 === b ? 0 : b,
                            x = "function" == typeof m ? m({
                                x: y,
                                y: w
                            }) : {
                                x: y,
                                y: w
                            };
                        y = x.x, w = x.y;
                        var S = d.hasOwnProperty("x"),
                            E = d.hasOwnProperty("y"),
                            T = o,
                            C = r,
                            _ = window;
                        if (h) {
                            var D = X(n),
                                L = "clientHeight",
                                M = "clientWidth";
                            D === A(n) && "static" !== q(D = W(n)).position && "absolute" === p && (L = "scrollHeight", M = "scrollWidth"), (l === r || (l === o || l === a) && c === u) && (C = i, w -= (g && D === _ && _.visualViewport ? _.visualViewport.height : D[L]) - s.height, w *= f ? 1 : -1), l !== o && (l !== r && l !== i || c !== u) || (T = a, y -= (g && D === _ && _.visualViewport ? _.visualViewport.width : D[M]) - s.width, y *= f ? 1 : -1)
                        }
                        var k, I = Object.assign({
                                position: p
                            }, h && ee),
                            P = !0 === m ? function(e) {
                                var t = e.x,
                                    n = e.y,
                                    r = window.devicePixelRatio || 1;
                                return {
                                    x: N(t * r) / r || 0,
                                    y: N(n * r) / r || 0
                                }
                            }({
                                x: y,
                                y: w
                            }) : {
                                x: y,
                                y: w
                            };
                        return y = P.x, w = P.y, f ? Object.assign({}, I, ((k = {})[C] = E ? "0" : "", k[T] = S ? "0" : "", k.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + w + "px)" : "translate3d(" + y + "px, " + w + "px, 0)", k)) : Object.assign({}, I, ((t = {})[C] = E ? w + "px" : "", t[T] = S ? y + "px" : "", t.transform = "", t))
                    }
                    var ne = {
                            name: "computeStyles",
                            enabled: !0,
                            phase: "beforeWrite",
                            fn: function(e) {
                                var t = e.state,
                                    n = e.options,
                                    r = n.gpuAcceleration,
                                    i = void 0 === r || r,
                                    a = n.adaptive,
                                    o = void 0 === a || a,
                                    s = n.roundOffsets,
                                    l = void 0 === s || s,
                                    c = {
                                        placement: P(t.placement),
                                        variation: Z(t.placement),
                                        popper: t.elements.popper,
                                        popperRect: t.rects.popper,
                                        gpuAcceleration: i,
                                        isFixed: "fixed" === t.options.strategy
                                    };
                                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, te(Object.assign({}, c, {
                                    offsets: t.modifiersData.popperOffsets,
                                    position: t.options.strategy,
                                    adaptive: o,
                                    roundOffsets: l
                                })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, te(Object.assign({}, c, {
                                    offsets: t.modifiersData.arrow,
                                    position: "absolute",
                                    adaptive: !1,
                                    roundOffsets: l
                                })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                    "data-popper-placement": t.placement
                                })
                            },
                            data: {}
                        },
                        re = {
                            passive: !0
                        },
                        ie = {
                            name: "eventListeners",
                            enabled: !0,
                            phase: "write",
                            fn: function() {},
                            effect: function(e) {
                                var t = e.state,
                                    n = e.instance,
                                    r = e.options,
                                    i = r.scroll,
                                    a = void 0 === i || i,
                                    o = r.resize,
                                    s = void 0 === o || o,
                                    l = A(t.elements.popper),
                                    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                                return a && c.forEach((function(e) {
                                        e.addEventListener("scroll", n.update, re)
                                    })), s && l.addEventListener("resize", n.update, re),
                                    function() {
                                        a && c.forEach((function(e) {
                                            e.removeEventListener("scroll", n.update, re)
                                        })), s && l.removeEventListener("resize", n.update, re)
                                    }
                            },
                            data: {}
                        },
                        ae = {
                            left: "right",
                            right: "left",
                            bottom: "top",
                            top: "bottom"
                        };

                    function oe(e) {
                        return e.replace(/left|right|bottom|top/g, (function(e) {
                            return ae[e]
                        }))
                    }
                    var se = {
                        start: "end",
                        end: "start"
                    };

                    function le(e) {
                        return e.replace(/start|end/g, (function(e) {
                            return se[e]
                        }))
                    }

                    function ce(e) {
                        var t = A(e);
                        return {
                            scrollLeft: t.pageXOffset,
                            scrollTop: t.pageYOffset
                        }
                    }

                    function ue(e) {
                        return $(W(e)).left + ce(e).scrollLeft
                    }

                    function de(e) {
                        var t = q(e),
                            n = t.overflow,
                            r = t.overflowX,
                            i = t.overflowY;
                        return /auto|scroll|overlay|hidden/.test(n + i + r)
                    }

                    function pe(e) {
                        return ["html", "body", "#document"].indexOf(D(e)) >= 0 ? e.ownerDocument.body : M(e) && de(e) ? e : pe(V(e))
                    }

                    function fe(e, t) {
                        var n;
                        void 0 === t && (t = []);
                        var r = pe(e),
                            i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                            a = A(r),
                            o = i ? [a].concat(a.visualViewport || [], de(r) ? r : []) : r,
                            s = t.concat(o);
                        return i ? s : s.concat(fe(V(o)))
                    }

                    function he(e) {
                        return Object.assign({}, e, {
                            left: e.x,
                            top: e.y,
                            right: e.x + e.width,
                            bottom: e.y + e.height
                        })
                    }

                    function me(e, t, n) {
                        return t === p ? he(function(e, t) {
                            var n = A(e),
                                r = W(e),
                                i = n.visualViewport,
                                a = r.clientWidth,
                                o = r.clientHeight,
                                s = 0,
                                l = 0;
                            if (i) {
                                a = i.width, o = i.height;
                                var c = F();
                                (c || !c && "fixed" === t) && (s = i.offsetLeft, l = i.offsetTop)
                            }
                            return {
                                width: a,
                                height: o,
                                x: s + ue(e),
                                y: l
                            }
                        }(e, n)) : L(t) ? function(e, t) {
                            var n = $(e, !1, "fixed" === t);
                            return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
                        }(t, n) : he(function(e) {
                            var t, n = W(e),
                                r = ce(e),
                                i = null == (t = e.ownerDocument) ? void 0 : t.body,
                                a = O(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                                o = O(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                                s = -r.scrollLeft + ue(e),
                                l = -r.scrollTop;
                            return "rtl" === q(i || n).direction && (s += O(n.clientWidth, i ? i.clientWidth : 0) - a), {
                                width: a,
                                height: o,
                                x: s,
                                y: l
                            }
                        }(W(e)))
                    }

                    function ge(e, t, n, r) {
                        var i = "clippingParents" === t ? function(e) {
                                var t = fe(V(e)),
                                    n = ["absolute", "fixed"].indexOf(q(e).position) >= 0 && M(e) ? X(e) : e;
                                return L(n) ? t.filter((function(e) {
                                    return L(e) && z(e, n) && "body" !== D(e)
                                })) : []
                            }(e) : [].concat(t),
                            a = [].concat(i, [n]),
                            o = a[0],
                            s = a.reduce((function(t, n) {
                                var i = me(e, n, r);
                                return t.top = O(i.top, t.top), t.right = j(i.right, t.right), t.bottom = j(i.bottom, t.bottom), t.left = O(i.left, t.left), t
                            }), me(e, o, r));
                        return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
                    }

                    function ve(e) {
                        var t, n = e.reference,
                            s = e.element,
                            l = e.placement,
                            d = l ? P(l) : null,
                            p = l ? Z(l) : null,
                            f = n.x + n.width / 2 - s.width / 2,
                            h = n.y + n.height / 2 - s.height / 2;
                        switch (d) {
                            case r:
                                t = {
                                    x: f,
                                    y: n.y - s.height
                                };
                                break;
                            case i:
                                t = {
                                    x: f,
                                    y: n.y + n.height
                                };
                                break;
                            case a:
                                t = {
                                    x: n.x + n.width,
                                    y: h
                                };
                                break;
                            case o:
                                t = {
                                    x: n.x - s.width,
                                    y: h
                                };
                                break;
                            default:
                                t = {
                                    x: n.x,
                                    y: n.y
                                }
                        }
                        var m = d ? U(d) : null;
                        if (null != m) {
                            var g = "y" === m ? "height" : "width";
                            switch (p) {
                                case c:
                                    t[m] = t[m] - (n[g] / 2 - s[g] / 2);
                                    break;
                                case u:
                                    t[m] = t[m] + (n[g] / 2 - s[g] / 2)
                            }
                        }
                        return t
                    }

                    function ye(e, t) {
                        void 0 === t && (t = {});
                        var n = t,
                            o = n.placement,
                            s = void 0 === o ? e.placement : o,
                            c = n.strategy,
                            u = void 0 === c ? e.strategy : c,
                            m = n.boundary,
                            g = void 0 === m ? d : m,
                            v = n.rootBoundary,
                            y = void 0 === v ? p : v,
                            b = n.elementContext,
                            w = void 0 === b ? f : b,
                            x = n.altBoundary,
                            S = void 0 !== x && x,
                            E = n.padding,
                            T = void 0 === E ? 0 : E,
                            C = J("number" != typeof T ? T : K(T, l)),
                            _ = w === f ? h : f,
                            D = e.rects.popper,
                            A = e.elements[S ? _ : w],
                            M = ge(L(A) ? A : A.contextElement || W(e.elements.popper), g, y, u),
                            k = $(e.elements.reference),
                            I = ve({
                                reference: k,
                                element: D,
                                strategy: "absolute",
                                placement: s
                            }),
                            P = he(Object.assign({}, D, I)),
                            O = w === f ? P : k,
                            j = {
                                top: M.top - O.top + C.top,
                                bottom: O.bottom - M.bottom + C.bottom,
                                left: M.left - O.left + C.left,
                                right: O.right - M.right + C.right
                            },
                            N = e.modifiersData.offset;
                        if (w === f && N) {
                            var R = N[s];
                            Object.keys(j).forEach((function(e) {
                                var t = [a, i].indexOf(e) >= 0 ? 1 : -1,
                                    n = [r, i].indexOf(e) >= 0 ? "y" : "x";
                                j[e] += R[n] * t
                            }))
                        }
                        return j
                    }
                    var be = {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                u = e.name;
                            if (!t.modifiersData[u]._skip) {
                                for (var d = n.mainAxis, p = void 0 === d || d, f = n.altAxis, h = void 0 === f || f, v = n.fallbackPlacements, y = n.padding, b = n.boundary, w = n.rootBoundary, x = n.altBoundary, S = n.flipVariations, E = void 0 === S || S, T = n.allowedAutoPlacements, C = t.options.placement, _ = P(C), D = v || (_ !== C && E ? function(e) {
                                        if (P(e) === s) return [];
                                        var t = oe(e);
                                        return [le(e), t, le(t)]
                                    }(C) : [oe(C)]), A = [C].concat(D).reduce((function(e, n) {
                                        return e.concat(P(n) === s ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                i = n.boundary,
                                                a = n.rootBoundary,
                                                o = n.padding,
                                                s = n.flipVariations,
                                                c = n.allowedAutoPlacements,
                                                u = void 0 === c ? g : c,
                                                d = Z(r),
                                                p = d ? s ? m : m.filter((function(e) {
                                                    return Z(e) === d
                                                })) : l,
                                                f = p.filter((function(e) {
                                                    return u.indexOf(e) >= 0
                                                }));
                                            0 === f.length && (f = p);
                                            var h = f.reduce((function(t, n) {
                                                return t[n] = ye(e, {
                                                    placement: n,
                                                    boundary: i,
                                                    rootBoundary: a,
                                                    padding: o
                                                })[P(n)], t
                                            }), {});
                                            return Object.keys(h).sort((function(e, t) {
                                                return h[e] - h[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: b,
                                            rootBoundary: w,
                                            padding: y,
                                            flipVariations: E,
                                            allowedAutoPlacements: T
                                        }) : n)
                                    }), []), L = t.rects.reference, M = t.rects.popper, k = new Map, I = !0, O = A[0], j = 0; j < A.length; j++) {
                                    var N = A[j],
                                        R = P(N),
                                        F = Z(N) === c,
                                        $ = [r, i].indexOf(R) >= 0,
                                        H = $ ? "width" : "height",
                                        z = ye(t, {
                                            placement: N,
                                            boundary: b,
                                            rootBoundary: w,
                                            altBoundary: x,
                                            padding: y
                                        }),
                                        q = $ ? F ? a : o : F ? i : r;
                                    L[H] > M[H] && (q = oe(q));
                                    var B = oe(q),
                                        W = [];
                                    if (p && W.push(z[R] <= 0), h && W.push(z[q] <= 0, z[B] <= 0), W.every((function(e) {
                                            return e
                                        }))) {
                                        O = N, I = !1;
                                        break
                                    }
                                    k.set(N, W)
                                }
                                if (I)
                                    for (var V = function(e) {
                                            var t = A.find((function(t) {
                                                var n = k.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return O = t, "break"
                                        }, G = E ? 3 : 1; G > 0 && "break" !== V(G); G--);
                                t.placement !== O && (t.modifiersData[u]._skip = !0, t.placement = O, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    };

                    function we(e, t, n) {
                        return void 0 === n && (n = {
                            x: 0,
                            y: 0
                        }), {
                            top: e.top - t.height - n.y,
                            right: e.right - t.width + n.x,
                            bottom: e.bottom - t.height + n.y,
                            left: e.left - t.width - n.x
                        }
                    }

                    function xe(e) {
                        return [r, a, i, o].some((function(t) {
                            return e[t] >= 0
                        }))
                    }
                    var Se = {
                            name: "hide",
                            enabled: !0,
                            phase: "main",
                            requiresIfExists: ["preventOverflow"],
                            fn: function(e) {
                                var t = e.state,
                                    n = e.name,
                                    r = t.rects.reference,
                                    i = t.rects.popper,
                                    a = t.modifiersData.preventOverflow,
                                    o = ye(t, {
                                        elementContext: "reference"
                                    }),
                                    s = ye(t, {
                                        altBoundary: !0
                                    }),
                                    l = we(o, r),
                                    c = we(s, i, a),
                                    u = xe(l),
                                    d = xe(c);
                                t.modifiersData[n] = {
                                    referenceClippingOffsets: l,
                                    popperEscapeOffsets: c,
                                    isReferenceHidden: u,
                                    hasPopperEscaped: d
                                }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                    "data-popper-reference-hidden": u,
                                    "data-popper-escaped": d
                                })
                            }
                        },
                        Ee = {
                            name: "offset",
                            enabled: !0,
                            phase: "main",
                            requires: ["popperOffsets"],
                            fn: function(e) {
                                var t = e.state,
                                    n = e.options,
                                    i = e.name,
                                    s = n.offset,
                                    l = void 0 === s ? [0, 0] : s,
                                    c = g.reduce((function(e, n) {
                                        return e[n] = function(e, t, n) {
                                            var i = P(e),
                                                s = [o, r].indexOf(i) >= 0 ? -1 : 1,
                                                l = "function" == typeof n ? n(Object.assign({}, t, {
                                                    placement: e
                                                })) : n,
                                                c = l[0],
                                                u = l[1];
                                            return c = c || 0, u = (u || 0) * s, [o, a].indexOf(i) >= 0 ? {
                                                x: u,
                                                y: c
                                            } : {
                                                x: c,
                                                y: u
                                            }
                                        }(n, t.rects, l), e
                                    }), {}),
                                    u = c[t.placement],
                                    d = u.x,
                                    p = u.y;
                                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += p), t.modifiersData[i] = c
                            }
                        },
                        Te = {
                            name: "popperOffsets",
                            enabled: !0,
                            phase: "read",
                            fn: function(e) {
                                var t = e.state,
                                    n = e.name;
                                t.modifiersData[n] = ve({
                                    reference: t.rects.reference,
                                    element: t.rects.popper,
                                    strategy: "absolute",
                                    placement: t.placement
                                })
                            },
                            data: {}
                        },
                        Ce = {
                            name: "preventOverflow",
                            enabled: !0,
                            phase: "main",
                            fn: function(e) {
                                var t = e.state,
                                    n = e.options,
                                    s = e.name,
                                    l = n.mainAxis,
                                    u = void 0 === l || l,
                                    d = n.altAxis,
                                    p = void 0 !== d && d,
                                    f = n.boundary,
                                    h = n.rootBoundary,
                                    m = n.altBoundary,
                                    g = n.padding,
                                    v = n.tether,
                                    y = void 0 === v || v,
                                    b = n.tetherOffset,
                                    w = void 0 === b ? 0 : b,
                                    x = ye(t, {
                                        boundary: f,
                                        rootBoundary: h,
                                        padding: g,
                                        altBoundary: m
                                    }),
                                    S = P(t.placement),
                                    E = Z(t.placement),
                                    T = !E,
                                    C = U(S),
                                    _ = "x" === C ? "y" : "x",
                                    D = t.modifiersData.popperOffsets,
                                    A = t.rects.reference,
                                    L = t.rects.popper,
                                    M = "function" == typeof w ? w(Object.assign({}, t.rects, {
                                        placement: t.placement
                                    })) : w,
                                    k = "number" == typeof M ? {
                                        mainAxis: M,
                                        altAxis: M
                                    } : Object.assign({
                                        mainAxis: 0,
                                        altAxis: 0
                                    }, M),
                                    I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                                    N = {
                                        x: 0,
                                        y: 0
                                    };
                                if (D) {
                                    if (u) {
                                        var R, F = "y" === C ? r : o,
                                            $ = "y" === C ? i : a,
                                            z = "y" === C ? "height" : "width",
                                            q = D[C],
                                            B = q + x[F],
                                            W = q - x[$],
                                            V = y ? -L[z] / 2 : 0,
                                            G = E === c ? A[z] : L[z],
                                            J = E === c ? -L[z] : -A[z],
                                            K = t.elements.arrow,
                                            Q = y && K ? H(K) : {
                                                width: 0,
                                                height: 0
                                            },
                                            ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                left: 0
                                            },
                                            te = ee[F],
                                            ne = ee[$],
                                            re = Y(0, A[z], Q[z]),
                                            ie = T ? A[z] / 2 - V - re - te - k.mainAxis : G - re - te - k.mainAxis,
                                            ae = T ? -A[z] / 2 + V + re + ne + k.mainAxis : J + re + ne + k.mainAxis,
                                            oe = t.elements.arrow && X(t.elements.arrow),
                                            se = oe ? "y" === C ? oe.clientTop || 0 : oe.clientLeft || 0 : 0,
                                            le = null != (R = null == I ? void 0 : I[C]) ? R : 0,
                                            ce = q + ae - le,
                                            ue = Y(y ? j(B, q + ie - le - se) : B, q, y ? O(W, ce) : W);
                                        D[C] = ue, N[C] = ue - q
                                    }
                                    if (p) {
                                        var de, pe = "x" === C ? r : o,
                                            fe = "x" === C ? i : a,
                                            he = D[_],
                                            me = "y" === _ ? "height" : "width",
                                            ge = he + x[pe],
                                            ve = he - x[fe],
                                            be = -1 !== [r, o].indexOf(S),
                                            we = null != (de = null == I ? void 0 : I[_]) ? de : 0,
                                            xe = be ? ge : he - A[me] - L[me] - we + k.altAxis,
                                            Se = be ? he + A[me] + L[me] - we - k.altAxis : ve,
                                            Ee = y && be ? function(e, t, n) {
                                                var r = Y(e, t, n);
                                                return r > n ? n : r
                                            }(xe, he, Se) : Y(y ? xe : ge, he, y ? Se : ve);
                                        D[_] = Ee, N[_] = Ee - he
                                    }
                                    t.modifiersData[s] = N
                                }
                            },
                            requiresIfExists: ["offset"]
                        };

                    function _e(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, i, a = M(t),
                            o = M(t) && function(e) {
                                var t = e.getBoundingClientRect(),
                                    n = N(t.width) / e.offsetWidth || 1,
                                    r = N(t.height) / e.offsetHeight || 1;
                                return 1 !== n || 1 !== r
                            }(t),
                            s = W(t),
                            l = $(e, o, n),
                            c = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = {
                                x: 0,
                                y: 0
                            };
                        return (a || !a && !n) && (("body" !== D(t) || de(s)) && (c = (r = t) !== A(r) && M(r) ? {
                            scrollLeft: (i = r).scrollLeft,
                            scrollTop: i.scrollTop
                        } : ce(r)), M(t) ? ((u = $(t, !0)).x += t.clientLeft, u.y += t.clientTop) : s && (u.x = ue(s))), {
                            x: l.left + c.scrollLeft - u.x,
                            y: l.top + c.scrollTop - u.y,
                            width: l.width,
                            height: l.height
                        }
                    }

                    function De(e) {
                        var t = new Map,
                            n = new Set,
                            r = [];

                        function i(e) {
                            n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                                if (!n.has(e)) {
                                    var r = t.get(e);
                                    r && i(r)
                                }
                            })), r.push(e)
                        }
                        return e.forEach((function(e) {
                            t.set(e.name, e)
                        })), e.forEach((function(e) {
                            n.has(e.name) || i(e)
                        })), r
                    }
                    var Ae = {
                        placement: "bottom",
                        modifiers: [],
                        strategy: "absolute"
                    };

                    function Le() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return !t.some((function(e) {
                            return !(e && "function" == typeof e.getBoundingClientRect)
                        }))
                    }

                    function Me(e) {
                        void 0 === e && (e = {});
                        var t = e,
                            n = t.defaultModifiers,
                            r = void 0 === n ? [] : n,
                            i = t.defaultOptions,
                            a = void 0 === i ? Ae : i;
                        return function(e, t, n) {
                            void 0 === n && (n = a);
                            var i, o, s = {
                                    placement: "bottom",
                                    orderedModifiers: [],
                                    options: Object.assign({}, Ae, a),
                                    modifiersData: {},
                                    elements: {
                                        reference: e,
                                        popper: t
                                    },
                                    attributes: {},
                                    styles: {}
                                },
                                l = [],
                                c = !1,
                                u = {
                                    state: s,
                                    setOptions: function(n) {
                                        var i = "function" == typeof n ? n(s.options) : n;
                                        d(), s.options = Object.assign({}, a, s.options, i), s.scrollParents = {
                                            reference: L(e) ? fe(e) : e.contextElement ? fe(e.contextElement) : [],
                                            popper: fe(t)
                                        };
                                        var o = function(e) {
                                            var t = De(e);
                                            return _.reduce((function(e, n) {
                                                return e.concat(t.filter((function(e) {
                                                    return e.phase === n
                                                })))
                                            }), [])
                                        }(function(e) {
                                            var t = e.reduce((function(e, t) {
                                                var n = e[t.name];
                                                return e[t.name] = n ? Object.assign({}, n, t, {
                                                    options: Object.assign({}, n.options, t.options),
                                                    data: Object.assign({}, n.data, t.data)
                                                }) : t, e
                                            }), {});
                                            return Object.keys(t).map((function(e) {
                                                return t[e]
                                            }))
                                        }([].concat(r, s.options.modifiers)));
                                        return s.orderedModifiers = o.filter((function(e) {
                                            return e.enabled
                                        })), s.orderedModifiers.forEach((function(e) {
                                            var t = e.name,
                                                n = e.options,
                                                r = void 0 === n ? {} : n,
                                                i = e.effect;
                                            if ("function" == typeof i) {
                                                var a = i({
                                                    state: s,
                                                    name: t,
                                                    instance: u,
                                                    options: r
                                                });
                                                l.push(a || function() {})
                                            }
                                        })), u.update()
                                    },
                                    forceUpdate: function() {
                                        if (!c) {
                                            var e = s.elements,
                                                t = e.reference,
                                                n = e.popper;
                                            if (Le(t, n)) {
                                                s.rects = {
                                                    reference: _e(t, X(n), "fixed" === s.options.strategy),
                                                    popper: H(n)
                                                }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) {
                                                    return s.modifiersData[e.name] = Object.assign({}, e.data)
                                                }));
                                                for (var r = 0; r < s.orderedModifiers.length; r++)
                                                    if (!0 !== s.reset) {
                                                        var i = s.orderedModifiers[r],
                                                            a = i.fn,
                                                            o = i.options,
                                                            l = void 0 === o ? {} : o,
                                                            d = i.name;
                                                        "function" == typeof a && (s = a({
                                                            state: s,
                                                            options: l,
                                                            name: d,
                                                            instance: u
                                                        }) || s)
                                                    } else s.reset = !1, r = -1
                                            }
                                        }
                                    },
                                    update: (i = function() {
                                        return new Promise((function(e) {
                                            u.forceUpdate(), e(s)
                                        }))
                                    }, function() {
                                        return o || (o = new Promise((function(e) {
                                            Promise.resolve().then((function() {
                                                o = void 0, e(i())
                                            }))
                                        }))), o
                                    }),
                                    destroy: function() {
                                        d(), c = !0
                                    }
                                };
                            if (!Le(e, t)) return u;

                            function d() {
                                l.forEach((function(e) {
                                    return e()
                                })), l = []
                            }
                            return u.setOptions(n).then((function(e) {
                                !c && n.onFirstUpdate && n.onFirstUpdate(e)
                            })), u
                        }
                    }
                    var ke = Me(),
                        Ie = Me({
                            defaultModifiers: [ie, Te, ne, I, Ee, be, Ce, Q, Se]
                        }),
                        Pe = Me({
                            defaultModifiers: [ie, Te, ne, I]
                        })
                },
                902: function(e, t) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, n.apply(this, arguments)
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initAccordions = void 0;
                    var r = {
                            alwaysOpen: !1,
                            activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
                            inactiveClasses: "text-gray-500 dark:text-gray-400",
                            onOpen: function() {},
                            onClose: function() {},
                            onToggle: function() {}
                        },
                        i = function() {
                            function e(e, t) {
                                void 0 === e && (e = []), void 0 === t && (t = r), this._items = e, this._options = n(n({}, r), t), this._init()
                            }
                            return e.prototype._init = function() {
                                var e = this;
                                this._items.length && this._items.map((function(t) {
                                    t.active && e.open(t.id), t.triggerEl.addEventListener("click", (function() {
                                        e.toggle(t.id)
                                    }))
                                }))
                            }, e.prototype.getItem = function(e) {
                                return this._items.filter((function(t) {
                                    return t.id === e
                                }))[0]
                            }, e.prototype.open = function(e) {
                                var t, n, r = this,
                                    i = this.getItem(e);
                                this._options.alwaysOpen || this._items.map((function(e) {
                                    var t, n;
                                    e !== i && ((t = e.triggerEl.classList).remove.apply(t, r._options.activeClasses.split(" ")), (n = e.triggerEl.classList).add.apply(n, r._options.inactiveClasses.split(" ")), e.targetEl.classList.add("hidden"), e.triggerEl.setAttribute("aria-expanded", "false"), e.active = !1, e.iconEl && e.iconEl.classList.remove("rotate-180"))
                                })), (t = i.triggerEl.classList).add.apply(t, this._options.activeClasses.split(" ")), (n = i.triggerEl.classList).remove.apply(n, this._options.inactiveClasses.split(" ")), i.triggerEl.setAttribute("aria-expanded", "true"), i.targetEl.classList.remove("hidden"), i.active = !0, i.iconEl && i.iconEl.classList.add("rotate-180"), this._options.onOpen(this, i)
                            }, e.prototype.toggle = function(e) {
                                var t = this.getItem(e);
                                t.active ? this.close(e) : this.open(e), this._options.onToggle(this, t)
                            }, e.prototype.close = function(e) {
                                var t, n, r = this.getItem(e);
                                (t = r.triggerEl.classList).remove.apply(t, this._options.activeClasses.split(" ")), (n = r.triggerEl.classList).add.apply(n, this._options.inactiveClasses.split(" ")), r.targetEl.classList.add("hidden"), r.triggerEl.setAttribute("aria-expanded", "false"), r.active = !1, r.iconEl && r.iconEl.classList.remove("rotate-180"), this._options.onClose(this, r)
                            }, e
                        }();
                    "undefined" != typeof window && (window.Accordion = i), t.initAccordions = function() {
                        document.querySelectorAll("[data-accordion]").forEach((function(e) {
                            var t = e.getAttribute("data-accordion"),
                                n = e.getAttribute("data-active-classes"),
                                a = e.getAttribute("data-inactive-classes"),
                                o = [];
                            e.querySelectorAll("[data-accordion-target]").forEach((function(e) {
                                var t = {
                                    id: e.getAttribute("data-accordion-target"),
                                    triggerEl: e,
                                    targetEl: document.querySelector(e.getAttribute("data-accordion-target")),
                                    iconEl: e.querySelector("[data-accordion-icon]"),
                                    active: "true" === e.getAttribute("aria-expanded")
                                };
                                o.push(t)
                            })), new i(o, {
                                alwaysOpen: "open" === t,
                                activeClasses: n || r.activeClasses,
                                inactiveClasses: a || r.inactiveClasses
                            })
                        }))
                    }, t.default = i
                },
                33: function(e, t) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, n.apply(this, arguments)
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initCarousels = void 0;
                    var r = {
                            defaultPosition: 0,
                            indicators: {
                                items: [],
                                activeClasses: "bg-white dark:bg-gray-800",
                                inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                            },
                            interval: 3e3,
                            onNext: function() {},
                            onPrev: function() {},
                            onChange: function() {}
                        },
                        i = function() {
                            function e(e, t) {
                                void 0 === e && (e = []), void 0 === t && (t = r), this._items = e, this._options = n(n(n({}, r), t), {
                                    indicators: n(n({}, r.indicators), t.indicators)
                                }), this._activeItem = this.getItem(this._options.defaultPosition), this._indicators = this._options.indicators.items, this._intervalDuration = this._options.interval, this._intervalInstance = null, this._init()
                            }
                            return e.prototype._init = function() {
                                var e = this;
                                this._items.map((function(e) {
                                    e.el.classList.add("absolute", "inset-0", "transition-transform", "transform")
                                })), this._getActiveItem() ? this.slideTo(this._getActiveItem().position) : this.slideTo(0), this._indicators.map((function(t, n) {
                                    t.el.addEventListener("click", (function() {
                                        e.slideTo(n)
                                    }))
                                }))
                            }, e.prototype.getItem = function(e) {
                                return this._items[e]
                            }, e.prototype.slideTo = function(e) {
                                var t = this._items[e],
                                    n = {
                                        left: 0 === t.position ? this._items[this._items.length - 1] : this._items[t.position - 1],
                                        middle: t,
                                        right: t.position === this._items.length - 1 ? this._items[0] : this._items[t.position + 1]
                                    };
                                this._rotate(n), this._setActiveItem(t), this._intervalInstance && (this.pause(), this.cycle()), this._options.onChange(this)
                            }, e.prototype.next = function() {
                                var e, t = this._getActiveItem();
                                e = t.position === this._items.length - 1 ? this._items[0] : this._items[t.position + 1], this.slideTo(e.position), this._options.onNext(this)
                            }, e.prototype.prev = function() {
                                var e, t = this._getActiveItem();
                                e = 0 === t.position ? this._items[this._items.length - 1] : this._items[t.position - 1], this.slideTo(e.position), this._options.onPrev(this)
                            }, e.prototype._rotate = function(e) {
                                this._items.map((function(e) {
                                    e.el.classList.add("hidden")
                                })), e.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"), e.left.el.classList.add("-translate-x-full", "z-10"), e.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10"), e.middle.el.classList.add("translate-x-0", "z-20"), e.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"), e.right.el.classList.add("translate-x-full", "z-10")
                            }, e.prototype.cycle = function() {
                                var e = this;
                                "undefined" != typeof window && (this._intervalInstance = window.setInterval((function() {
                                    e.next()
                                }), this._intervalDuration))
                            }, e.prototype.pause = function() {
                                clearInterval(this._intervalInstance)
                            }, e.prototype._getActiveItem = function() {
                                return this._activeItem
                            }, e.prototype._setActiveItem = function(e) {
                                var t, n, r = this;
                                this._activeItem = e;
                                var i = e.position;
                                this._indicators.length && (this._indicators.map((function(e) {
                                    var t, n;
                                    e.el.setAttribute("aria-current", "false"), (t = e.el.classList).remove.apply(t, r._options.indicators.activeClasses.split(" ")), (n = e.el.classList).add.apply(n, r._options.indicators.inactiveClasses.split(" "))
                                })), (t = this._indicators[i].el.classList).add.apply(t, this._options.indicators.activeClasses.split(" ")), (n = this._indicators[i].el.classList).remove.apply(n, this._options.indicators.inactiveClasses.split(" ")), this._indicators[i].el.setAttribute("aria-current", "true"))
                            }, e
                        }();
                    "undefined" != typeof window && (window.Carousel = i), t.initCarousels = function() {
                        document.querySelectorAll("[data-carousel]").forEach((function(e) {
                            var t = e.getAttribute("data-carousel-interval"),
                                n = "slide" === e.getAttribute("data-carousel"),
                                a = [],
                                o = 0;
                            e.querySelectorAll("[data-carousel-item]").length && Array.from(e.querySelectorAll("[data-carousel-item]")).map((function(e, t) {
                                a.push({
                                    position: t,
                                    el: e
                                }), "active" === e.getAttribute("data-carousel-item") && (o = t)
                            }));
                            var s = [];
                            e.querySelectorAll("[data-carousel-slide-to]").length && Array.from(e.querySelectorAll("[data-carousel-slide-to]")).map((function(e) {
                                s.push({
                                    position: parseInt(e.getAttribute("data-carousel-slide-to")),
                                    el: e
                                })
                            }));
                            var l = new i(a, {
                                defaultPosition: o,
                                indicators: {
                                    items: s
                                },
                                interval: t || r.interval
                            });
                            n && l.cycle();
                            var c = e.querySelector("[data-carousel-next]"),
                                u = e.querySelector("[data-carousel-prev]");
                            c && c.addEventListener("click", (function() {
                                l.next()
                            })), u && u.addEventListener("click", (function() {
                                l.prev()
                            }))
                        }))
                    }, t.default = i
                },
                922: function(e, t) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, n.apply(this, arguments)
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initCollapses = void 0;
                    var r = {
                            onCollapse: function() {},
                            onExpand: function() {},
                            onToggle: function() {}
                        },
                        i = function() {
                            function e(e, t, i) {
                                void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = r), this._targetEl = e, this._triggerEl = t, this._options = n(n({}, r), i), this._visible = !1, this._init()
                            }
                            return e.prototype._init = function() {
                                var e = this;
                                this._triggerEl && (this._triggerEl.hasAttribute("aria-expanded") ? this._visible = "true" === this._triggerEl.getAttribute("aria-expanded") : this._visible = !this._targetEl.classList.contains("hidden"), this._triggerEl.addEventListener("click", (function() {
                                    e.toggle()
                                })))
                            }, e.prototype.collapse = function() {
                                this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), this._visible = !1, this._options.onCollapse(this)
                            }, e.prototype.expand = function() {
                                this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), this._visible = !0, this._options.onExpand(this)
                            }, e.prototype.toggle = function() {
                                this._visible ? this.collapse() : this.expand(), this._options.onToggle(this)
                            }, e
                        }();
                    "undefined" != typeof window && (window.Collapse = i), t.initCollapses = function() {
                        document.querySelectorAll("[data-collapse-toggle]").forEach((function(e) {
                            var t = e.getAttribute("data-collapse-toggle"),
                                n = document.getElementById(t);
                            n ? new i(n, e) : console.error('The target element with id "'.concat(t, '" does not exist. Please check the data-collapse-toggle attribute.'))
                        }))
                    }, t.default = i
                },
                556: function(e, t) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, n.apply(this, arguments)
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initDials = void 0;
                    var r = {
                            triggerType: "hover",
                            onShow: function() {},
                            onHide: function() {},
                            onToggle: function() {}
                        },
                        i = function() {
                            function e(e, t, i, a) {
                                void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === a && (a = r), this._parentEl = e, this._triggerEl = t, this._targetEl = i, this._options = n(n({}, r), a), this._visible = !1, this._init()
                            }
                            return e.prototype._init = function() {
                                var e = this;
                                if (this._triggerEl) {
                                    var t = this._getTriggerEventTypes(this._options.triggerType);
                                    t.showEvents.forEach((function(t) {
                                        e._triggerEl.addEventListener(t, (function() {
                                            e.show()
                                        })), e._targetEl.addEventListener(t, (function() {
                                            e.show()
                                        }))
                                    })), t.hideEvents.forEach((function(t) {
                                        e._parentEl.addEventListener(t, (function() {
                                            e._parentEl.matches(":hover") || e.hide()
                                        }))
                                    }))
                                }
                            }, e.prototype.hide = function() {
                                this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), this._visible = !1, this._options.onHide(this)
                            }, e.prototype.show = function() {
                                this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), this._visible = !0, this._options.onShow(this)
                            }, e.prototype.toggle = function() {
                                this._visible ? this.hide() : this.show()
                            }, e.prototype.isHidden = function() {
                                return !this._visible
                            }, e.prototype.isVisible = function() {
                                return this._visible
                            }, e.prototype._getTriggerEventTypes = function(e) {
                                switch (e) {
                                    case "hover":
                                    default:
                                        return {
                                            showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"]
                                        };
                                    case "click":
                                        return {
                                            showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"]
                                        };
                                    case "none":
                                        return {
                                            showEvents: [], hideEvents: []
                                        }
                                }
                            }, e
                        }();
                    "undefined" != typeof window && (window.Dial = i), t.initDials = function() {
                        document.querySelectorAll("[data-dial-init]").forEach((function(e) {
                            var t = e.querySelector("[data-dial-toggle]");
                            if (t) {
                                var n = t.getAttribute("data-dial-toggle"),
                                    a = document.getElementById(n);
                                if (a) {
                                    var o = t.getAttribute("data-dial-trigger");
                                    new i(e, t, a, {
                                        triggerType: o || r.triggerType
                                    })
                                } else console.error("Dial with id ".concat(n, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))
                            } else console.error("Dial with id ".concat(e.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))
                        }))
                    }, t.default = i
                },
                791: function(e, t) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, n.apply(this, arguments)
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initDismisses = void 0;
                    var r = {
                            transition: "transition-opacity",
                            duration: 300,
                            timing: "ease-out",
                            onHide: function() {}
                        },
                        i = function() {
                            function e(e, t, i) {
                                void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = r), this._targetEl = e, this._triggerEl = t, this._options = n(n({}, r), i), this._init()
                            }
                            return e.prototype._init = function() {
                                var e = this;
                                this._triggerEl && this._triggerEl.addEventListener("click", (function() {
                                    e.hide()
                                }))
                            }, e.prototype.hide = function() {
                                var e = this;
                                this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0"), setTimeout((function() {
                                    e._targetEl.classList.add("hidden")
                                }), this._options.duration), this._options.onHide(this, this._targetEl)
                            }, e
                        }();
                    "undefined" != typeof window && (window.Dismiss = i), t.initDismisses = function() {
                        document.querySelectorAll("[data-dismiss-target]").forEach((function(e) {
                            var t = e.getAttribute("data-dismiss-target"),
                                n = document.querySelector(t);
                            n ? new i(n, e) : console.error('The dismiss element with id "'.concat(t, '" does not exist. Please check the data-dismiss-target attribute.'))
                        }))
                    }, t.default = i
                },
                340: function(e, t) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, n.apply(this, arguments)
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initDrawers = void 0;
                    var r = {
                            placement: "left",
                            bodyScrolling: !1,
                            backdrop: !0,
                            edge: !1,
                            edgeOffset: "bottom-[60px]",
                            backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
                            onShow: function() {},
                            onHide: function() {},
                            onToggle: function() {}
                        },
                        i = function() {
                            function e(e, t) {
                                void 0 === e && (e = null), void 0 === t && (t = r), this._targetEl = e, this._options = n(n({}, r), t), this._visible = !1, this._init()
                            }
                            return e.prototype._init = function() {
                                var e = this;
                                this._targetEl && (this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.classList.add("transition-transform")), this._getPlacementClasses(this._options.placement).base.map((function(t) {
                                    e._targetEl.classList.add(t)
                                })), document.addEventListener("keydown", (function(t) {
                                    "Escape" === t.key && e.isVisible() && e.hide()
                                }))
                            }, e.prototype.hide = function() {
                                var e = this;
                                this._options.edge ? (this._getPlacementClasses(this._options.placement + "-edge").active.map((function(t) {
                                    e._targetEl.classList.remove(t)
                                })), this._getPlacementClasses(this._options.placement + "-edge").inactive.map((function(t) {
                                    e._targetEl.classList.add(t)
                                }))) : (this._getPlacementClasses(this._options.placement).active.map((function(t) {
                                    e._targetEl.classList.remove(t)
                                })), this._getPlacementClasses(this._options.placement).inactive.map((function(t) {
                                    e._targetEl.classList.add(t)
                                }))), this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.removeAttribute("aria-modal"), this._targetEl.removeAttribute("role"), this._options.bodyScrolling || document.body.classList.remove("overflow-hidden"), this._options.backdrop && this._destroyBackdropEl(), this._visible = !1, this._options.onHide(this)
                            }, e.prototype.show = function() {
                                var e = this;
                                this._options.edge ? (this._getPlacementClasses(this._options.placement + "-edge").active.map((function(t) {
                                    e._targetEl.classList.add(t)
                                })), this._getPlacementClasses(this._options.placement + "-edge").inactive.map((function(t) {
                                    e._targetEl.classList.remove(t)
                                }))) : (this._getPlacementClasses(this._options.placement).active.map((function(t) {
                                    e._targetEl.classList.add(t)
                                })), this._getPlacementClasses(this._options.placement).inactive.map((function(t) {
                                    e._targetEl.classList.remove(t)
                                }))), this._targetEl.setAttribute("aria-modal", "true"), this._targetEl.setAttribute("role", "dialog"), this._targetEl.removeAttribute("aria-hidden"), this._options.bodyScrolling || document.body.classList.add("overflow-hidden"), this._options.backdrop && this._createBackdrop(), this._visible = !0, this._options.onShow(this)
                            }, e.prototype.toggle = function() {
                                this.isVisible() ? this.hide() : this.show()
                            }, e.prototype._createBackdrop = function() {
                                var e, t = this;
                                if (!this._visible) {
                                    var n = document.createElement("div");
                                    n.setAttribute("drawer-backdrop", ""), (e = n.classList).add.apply(e, this._options.backdropClasses.split(" ")), document.querySelector("body").append(n), n.addEventListener("click", (function() {
                                        t.hide()
                                    }))
                                }
                            }, e.prototype._destroyBackdropEl = function() {
                                this._visible && document.querySelector("[drawer-backdrop]").remove()
                            }, e.prototype._getPlacementClasses = function(e) {
                                switch (e) {
                                    case "top":
                                        return {
                                            base: ["top-0", "left-0", "right-0"], active: ["transform-none"], inactive: ["-translate-y-full"]
                                        };
                                    case "right":
                                        return {
                                            base: ["right-0", "top-0"], active: ["transform-none"], inactive: ["translate-x-full"]
                                        };
                                    case "bottom":
                                        return {
                                            base: ["bottom-0", "left-0", "right-0"], active: ["transform-none"], inactive: ["translate-y-full"]
                                        };
                                    case "left":
                                    default:
                                        return {
                                            base: ["left-0", "top-0"], active: ["transform-none"], inactive: ["-translate-x-full"]
                                        };
                                    case "bottom-edge":
                                        return {
                                            base: ["left-0", "top-0"], active: ["transform-none"], inactive: ["translate-y-full", this._options.edgeOffset]
                                        }
                                }
                            }, e.prototype.isHidden = function() {
                                return !this._visible
                            }, e.prototype.isVisible = function() {
                                return this._visible
                            }, e
                        }();
                    "undefined" != typeof window && (window.Drawer = i);
                    var a = function(e, t) {
                        if (t.some((function(t) {
                                return t.id === e
                            }))) return t.find((function(t) {
                            return t.id === e
                        }))
                    };
                    t.initDrawers = function() {
                        var e = [];
                        document.querySelectorAll("[data-drawer-target]").forEach((function(t) {
                            var n = t.getAttribute("data-drawer-target"),
                                o = document.getElementById(n);
                            if (o) {
                                var s = t.getAttribute("data-drawer-placement"),
                                    l = t.getAttribute("data-drawer-body-scrolling"),
                                    c = t.getAttribute("data-drawer-backdrop"),
                                    u = t.getAttribute("data-drawer-edge"),
                                    d = t.getAttribute("data-drawer-edge-offset");
                                a(n, e) || e.push({
                                    id: n,
                                    object: new i(o, {
                                        placement: s || r.placement,
                                        bodyScrolling: l ? "true" === l : r.bodyScrolling,
                                        backdrop: c ? "true" === c : r.backdrop,
                                        edge: u ? "true" === u : r.edge,
                                        edgeOffset: d || r.edgeOffset
                                    })
                                })
                            } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))
                        })), document.querySelectorAll("[data-drawer-toggle]").forEach((function(t) {
                            var n = t.getAttribute("data-drawer-toggle");
                            if (document.getElementById(n)) {
                                var r = a(n, e);
                                r ? t.addEventListener("click", (function() {
                                    r.object.toggle()
                                })) : console.error("Drawer with id ".concat(n, " has not been initialized. Please initialize it using the data-drawer-target attribute."))
                            } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))
                        })), document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach((function(t) {
                            var n = t.getAttribute("data-drawer-dismiss") ? t.getAttribute("data-drawer-dismiss") : t.getAttribute("data-drawer-hide");
                            if (document.getElementById(n)) {
                                var r = a(n, e);
                                r ? t.addEventListener("click", (function() {
                                    r.object.hide()
                                })) : console.error("Drawer with id ".concat(n, " has not been initialized. Please initialize it using the data-drawer-target attribute."))
                            } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))
                        })), document.querySelectorAll("[data-drawer-show]").forEach((function(t) {
                            var n = t.getAttribute("data-drawer-show");
                            if (document.getElementById(n)) {
                                var r = a(n, e);
                                r ? t.addEventListener("click", (function() {
                                    r.object.show()
                                })) : console.error("Drawer with id ".concat(n, " has not been initialized. Please initialize it using the data-drawer-target attribute."))
                            } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))
                        }))
                    }, t.default = i
                },
                316: function(e, t, n) {
                    var r = this && this.__assign || function() {
                            return r = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }, r.apply(this, arguments)
                        },
                        i = this && this.__spreadArray || function(e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initDropdowns = void 0;
                    var a = n(853),
                        o = {
                            placement: "bottom",
                            triggerType: "click",
                            offsetSkidding: 0,
                            offsetDistance: 10,
                            delay: 300,
                            onShow: function() {},
                            onHide: function() {},
                            onToggle: function() {}
                        },
                        s = function() {
                            function e(e, t, n) {
                                void 0 === e && (e = null), void 0 === t && (t = null), void 0 === n && (n = o), this._targetEl = e, this._triggerEl = t, this._options = r(r({}, o), n), this._popperInstance = this._createPopperInstance(), this._visible = !1, this._init()
                            }
                            return e.prototype._init = function() {
                                this._triggerEl && this._setupEventListeners()
                            }, e.prototype._setupEventListeners = function() {
                                var e = this,
                                    t = this._getTriggerEvents();
                                "click" === this._options.triggerType && t.showEvents.forEach((function(t) {
                                    e._triggerEl.addEventListener(t, (function() {
                                        e.toggle()
                                    }))
                                })), "hover" === this._options.triggerType && (t.showEvents.forEach((function(t) {
                                    e._triggerEl.addEventListener(t, (function() {
                                        "click" === t ? e.toggle() : setTimeout((function() {
                                            e.show()
                                        }), e._options.delay)
                                    })), e._targetEl.addEventListener(t, (function() {
                                        e.show()
                                    }))
                                })), t.hideEvents.forEach((function(t) {
                                    e._triggerEl.addEventListener(t, (function() {
                                        setTimeout((function() {
                                            e._targetEl.matches(":hover") || e.hide()
                                        }), e._options.delay)
                                    })), e._targetEl.addEventListener(t, (function() {
                                        setTimeout((function() {
                                            e._triggerEl.matches(":hover") || e.hide()
                                        }), e._options.delay)
                                    }))
                                })))
                            }, e.prototype._createPopperInstance = function() {
                                return (0, a.createPopper)(this._triggerEl, this._targetEl, {
                                    placement: this._options.placement,
                                    modifiers: [{
                                        name: "offset",
                                        options: {
                                            offset: [this._options.offsetSkidding, this._options.offsetDistance]
                                        }
                                    }]
                                })
                            }, e.prototype._setupClickOutsideListener = function() {
                                var e = this;
                                this._clickOutsideEventListener = function(t) {
                                    e._handleClickOutside(t, e._targetEl)
                                }, document.body.addEventListener("click", this._clickOutsideEventListener, !0)
                            }, e.prototype._removeClickOutsideListener = function() {
                                document.body.removeEventListener("click", this._clickOutsideEventListener, !0)
                            }, e.prototype._handleClickOutside = function(e, t) {
                                var n = e.target;
                                n === t || t.contains(n) || this._triggerEl.contains(n) || !this.isVisible() || this.hide()
                            }, e.prototype._getTriggerEvents = function() {
                                switch (this._options.triggerType) {
                                    case "hover":
                                        return {
                                            showEvents: ["mouseenter", "click"], hideEvents: ["mouseleave"]
                                        };
                                    case "click":
                                    default:
                                        return {
                                            showEvents: ["click"], hideEvents: []
                                        };
                                    case "none":
                                        return {
                                            showEvents: [], hideEvents: []
                                        }
                                }
                            }, e.prototype.toggle = function() {
                                this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this)
                            }, e.prototype.isVisible = function() {
                                return this._visible
                            }, e.prototype.show = function() {
                                this._targetEl.classList.remove("hidden"), this._targetEl.classList.add("block"), this._popperInstance.setOptions((function(e) {
                                    return r(r({}, e), {
                                        modifiers: i(i([], e.modifiers, !0), [{
                                            name: "eventListeners",
                                            enabled: !0
                                        }], !1)
                                    })
                                })), this._setupClickOutsideListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this)
                            }, e.prototype.hide = function() {
                                this._targetEl.classList.remove("block"), this._targetEl.classList.add("hidden"), this._popperInstance.setOptions((function(e) {
                                    return r(r({}, e), {
                                        modifiers: i(i([], e.modifiers, !0), [{
                                            name: "eventListeners",
                                            enabled: !1
                                        }], !1)
                                    })
                                })), this._visible = !1, this._removeClickOutsideListener(), this._options.onHide(this)
                            }, e
                        }();
                    "undefined" != typeof window && (window.Dropdown = s), t.initDropdowns = function() {
                        document.querySelectorAll("[data-dropdown-toggle]").forEach((function(e) {
                            var t = e.getAttribute("data-dropdown-toggle"),
                                n = document.getElementById(t);
                            if (n) {
                                var r = e.getAttribute("data-dropdown-placement"),
                                    i = e.getAttribute("data-dropdown-offset-skidding"),
                                    a = e.getAttribute("data-dropdown-offset-distance"),
                                    l = e.getAttribute("data-dropdown-trigger"),
                                    c = e.getAttribute("data-dropdown-delay");
                                new s(n, e, {
                                    placement: r || o.placement,
                                    triggerType: l || o.triggerType,
                                    offsetSkidding: i ? parseInt(i) : o.offsetSkidding,
                                    offsetDistance: a ? parseInt(a) : o.offsetDistance,
                                    delay: c ? parseInt(c) : o.delay
                                })
                            } else console.error('The dropdown element with id "'.concat(t, '" does not exist. Please check the data-dropdown-toggle attribute.'))
                        }))
                    }, t.default = s
                },
                16: function(e, t) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, n.apply(this, arguments)
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initModals = void 0;
                    var r = {
                            placement: "center",
                            backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
                            backdrop: "dynamic",
                            closable: !0,
                            onHide: function() {},
                            onShow: function() {},
                            onToggle: function() {}
                        },
                        i = function() {
                            function e(e, t) {
                                void 0 === e && (e = null), void 0 === t && (t = r), this._targetEl = e, this._options = n(n({}, r), t), this._isHidden = !0, this._backdropEl = null, this._init()
                            }
                            return e.prototype._init = function() {
                                var e = this;
                                this._targetEl && this._getPlacementClasses().map((function(t) {
                                    e._targetEl.classList.add(t)
                                }))
                            }, e.prototype._createBackdrop = function() {
                                var e;
                                if (this._isHidden) {
                                    var t = document.createElement("div");
                                    t.setAttribute("modal-backdrop", ""), (e = t.classList).add.apply(e, this._options.backdropClasses.split(" ")), document.querySelector("body").append(t), this._backdropEl = t
                                }
                            }, e.prototype._destroyBackdropEl = function() {
                                this._isHidden || document.querySelector("[modal-backdrop]").remove()
                            }, e.prototype._setupModalCloseEventListeners = function() {
                                var e = this;
                                "dynamic" === this._options.backdrop && (this._clickOutsideEventListener = function(t) {
                                    e._handleOutsideClick(t.target)
                                }, this._targetEl.addEventListener("click", this._clickOutsideEventListener, !0)), this._keydownEventListener = function(t) {
                                    "Escape" === t.key && e.hide()
                                }, document.body.addEventListener("keydown", this._keydownEventListener, !0)
                            }, e.prototype._removeModalCloseEventListeners = function() {
                                "dynamic" === this._options.backdrop && this._targetEl.removeEventListener("click", this._clickOutsideEventListener, !0), document.body.removeEventListener("keydown", this._keydownEventListener, !0)
                            }, e.prototype._handleOutsideClick = function(e) {
                                (e === this._targetEl || e === this._backdropEl && this.isVisible()) && this.hide()
                            }, e.prototype._getPlacementClasses = function() {
                                switch (this._options.placement) {
                                    case "top-left":
                                        return ["justify-start", "items-start"];
                                    case "top-center":
                                        return ["justify-center", "items-start"];
                                    case "top-right":
                                        return ["justify-end", "items-start"];
                                    case "center-left":
                                        return ["justify-start", "items-center"];
                                    case "center":
                                    default:
                                        return ["justify-center", "items-center"];
                                    case "center-right":
                                        return ["justify-end", "items-center"];
                                    case "bottom-left":
                                        return ["justify-start", "items-end"];
                                    case "bottom-center":
                                        return ["justify-center", "items-end"];
                                    case "bottom-right":
                                        return ["justify-end", "items-end"]
                                }
                            }, e.prototype.toggle = function() {
                                this._isHidden ? this.show() : this.hide(), this._options.onToggle(this)
                            }, e.prototype.show = function() {
                                this.isHidden && (this._targetEl.classList.add("flex"), this._targetEl.classList.remove("hidden"), this._targetEl.setAttribute("aria-modal", "true"), this._targetEl.setAttribute("role", "dialog"), this._targetEl.removeAttribute("aria-hidden"), this._createBackdrop(), this._isHidden = !1, document.body.classList.add("overflow-hidden"), this._options.closable && this._setupModalCloseEventListeners(), this._options.onShow(this))
                            }, e.prototype.hide = function() {
                                this.isVisible && (this._targetEl.classList.add("hidden"), this._targetEl.classList.remove("flex"), this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.removeAttribute("aria-modal"), this._targetEl.removeAttribute("role"), this._destroyBackdropEl(), this._isHidden = !0, document.body.classList.remove("overflow-hidden"), this._options.closable && this._removeModalCloseEventListeners(), this._options.onHide(this))
                            }, e.prototype.isVisible = function() {
                                return !this._isHidden
                            }, e.prototype.isHidden = function() {
                                return this._isHidden
                            }, e
                        }();
                    "undefined" != typeof window && (window.Modal = i);
                    var a = function(e, t) {
                        return t.some((function(t) {
                            return t.id === e
                        })) ? t.find((function(t) {
                            return t.id === e
                        })) : null
                    };
                    t.initModals = function() {
                        var e = [];
                        document.querySelectorAll("[data-modal-target]").forEach((function(t) {
                            var n = t.getAttribute("data-modal-target"),
                                o = document.getElementById(n);
                            if (o) {
                                var s = o.getAttribute("data-modal-placement"),
                                    l = o.getAttribute("data-modal-backdrop");
                                a(n, e) || e.push({
                                    id: n,
                                    object: new i(o, {
                                        placement: s || r.placement,
                                        backdrop: l || r.backdrop
                                    })
                                })
                            } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))
                        })), document.querySelectorAll("[data-modal-toggle]").forEach((function(t) {
                            var n = t.getAttribute("data-modal-toggle"),
                                o = document.getElementById(n);
                            if (o) {
                                var s = o.getAttribute("data-modal-placement"),
                                    l = o.getAttribute("data-modal-backdrop"),
                                    c = a(n, e);
                                c || (c = {
                                    id: n,
                                    object: new i(o, {
                                        placement: s || r.placement,
                                        backdrop: l || r.backdrop
                                    })
                                }, e.push(c)), t.addEventListener("click", (function() {
                                    c.object.toggle()
                                }))
                            } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))
                        })), document.querySelectorAll("[data-modal-show]").forEach((function(t) {
                            var n = t.getAttribute("data-modal-show");
                            if (document.getElementById(n)) {
                                var r = a(n, e);
                                r ? t.addEventListener("click", (function() {
                                    r.object.isHidden && r.object.show()
                                })) : console.error("Modal with id ".concat(n, " has not been initialized. Please initialize it using the data-modal-target attribute."))
                            } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))
                        })), document.querySelectorAll("[data-modal-hide]").forEach((function(t) {
                            var n = t.getAttribute("data-modal-hide");
                            if (document.getElementById(n)) {
                                var r = a(n, e);
                                r ? t.addEventListener("click", (function() {
                                    r.object.isVisible && r.object.hide()
                                })) : console.error("Modal with id ".concat(n, " has not been initialized. Please initialize it using the data-modal-target attribute."))
                            } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))
                        }))
                    }, t.default = i
                },
                903: function(e, t, n) {
                    var r = this && this.__assign || function() {
                            return r = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }, r.apply(this, arguments)
                        },
                        i = this && this.__spreadArray || function(e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initPopovers = void 0;
                    var a = n(853),
                        o = {
                            placement: "top",
                            offset: 10,
                            triggerType: "hover",
                            onShow: function() {},
                            onHide: function() {},
                            onToggle: function() {}
                        },
                        s = function() {
                            function e(e, t, n) {
                                void 0 === e && (e = null), void 0 === t && (t = null), void 0 === n && (n = o), this._targetEl = e, this._triggerEl = t, this._options = r(r({}, o), n), this._popperInstance = this._createPopperInstance(), this._visible = !1, this._init()
                            }
                            return e.prototype._init = function() {
                                this._triggerEl && this._setupEventListeners()
                            }, e.prototype._setupEventListeners = function() {
                                var e = this,
                                    t = this._getTriggerEvents();
                                t.showEvents.forEach((function(t) {
                                    e._triggerEl.addEventListener(t, (function() {
                                        e.show()
                                    })), e._targetEl.addEventListener(t, (function() {
                                        e.show()
                                    }))
                                })), t.hideEvents.forEach((function(t) {
                                    e._triggerEl.addEventListener(t, (function() {
                                        setTimeout((function() {
                                            e._targetEl.matches(":hover") || e.hide()
                                        }), 100)
                                    })), e._targetEl.addEventListener(t, (function() {
                                        setTimeout((function() {
                                            e._triggerEl.matches(":hover") || e.hide()
                                        }), 100)
                                    }))
                                }))
                            }, e.prototype._createPopperInstance = function() {
                                return (0, a.createPopper)(this._triggerEl, this._targetEl, {
                                    placement: this._options.placement,
                                    modifiers: [{
                                        name: "offset",
                                        options: {
                                            offset: [0, this._options.offset]
                                        }
                                    }]
                                })
                            }, e.prototype._getTriggerEvents = function() {
                                switch (this._options.triggerType) {
                                    case "hover":
                                    default:
                                        return {
                                            showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"]
                                        };
                                    case "click":
                                        return {
                                            showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"]
                                        };
                                    case "none":
                                        return {
                                            showEvents: [], hideEvents: []
                                        }
                                }
                            }, e.prototype._setupKeydownListener = function() {
                                var e = this;
                                this._keydownEventListener = function(t) {
                                    "Escape" === t.key && e.hide()
                                }, document.body.addEventListener("keydown", this._keydownEventListener, !0)
                            }, e.prototype._removeKeydownListener = function() {
                                document.body.removeEventListener("keydown", this._keydownEventListener, !0)
                            }, e.prototype._setupClickOutsideListener = function() {
                                var e = this;
                                this._clickOutsideEventListener = function(t) {
                                    e._handleClickOutside(t, e._targetEl)
                                }, document.body.addEventListener("click", this._clickOutsideEventListener, !0)
                            }, e.prototype._removeClickOutsideListener = function() {
                                document.body.removeEventListener("click", this._clickOutsideEventListener, !0)
                            }, e.prototype._handleClickOutside = function(e, t) {
                                var n = e.target;
                                n === t || t.contains(n) || this._triggerEl.contains(n) || !this.isVisible() || this.hide()
                            }, e.prototype.isVisible = function() {
                                return this._visible
                            }, e.prototype.toggle = function() {
                                this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this)
                            }, e.prototype.show = function() {
                                this._targetEl.classList.remove("opacity-0", "invisible"), this._targetEl.classList.add("opacity-100", "visible"), this._popperInstance.setOptions((function(e) {
                                    return r(r({}, e), {
                                        modifiers: i(i([], e.modifiers, !0), [{
                                            name: "eventListeners",
                                            enabled: !0
                                        }], !1)
                                    })
                                })), this._setupClickOutsideListener(), this._setupKeydownListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this)
                            }, e.prototype.hide = function() {
                                this._targetEl.classList.remove("opacity-100", "visible"), this._targetEl.classList.add("opacity-0", "invisible"), this._popperInstance.setOptions((function(e) {
                                    return r(r({}, e), {
                                        modifiers: i(i([], e.modifiers, !0), [{
                                            name: "eventListeners",
                                            enabled: !1
                                        }], !1)
                                    })
                                })), this._removeClickOutsideListener(), this._removeKeydownListener(), this._visible = !1, this._options.onHide(this)
                            }, e
                        }();
                    "undefined" != typeof window && (window.Popover = s), t.initPopovers = function() {
                        document.querySelectorAll("[data-popover-target]").forEach((function(e) {
                            var t = e.getAttribute("data-popover-target"),
                                n = document.getElementById(t);
                            if (n) {
                                var r = e.getAttribute("data-popover-trigger"),
                                    i = e.getAttribute("data-popover-placement"),
                                    a = e.getAttribute("data-popover-offset");
                                new s(n, e, {
                                    placement: i || o.placement,
                                    offset: a ? parseInt(a) : o.offset,
                                    triggerType: r || o.triggerType
                                })
                            } else console.error('The popover element with id "'.concat(t, '" does not exist. Please check the data-popover-target attribute.'))
                        }))
                    }, t.default = s
                },
                247: function(e, t) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, n.apply(this, arguments)
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initTabs = void 0;
                    var r = {
                            defaultTabId: null,
                            activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
                            inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
                            onShow: function() {}
                        },
                        i = function() {
                            function e(e, t) {
                                void 0 === e && (e = []), void 0 === t && (t = r), this._items = e, this._activeTab = t ? this.getTab(t.defaultTabId) : null, this._options = n(n({}, r), t), this._init()
                            }
                            return e.prototype._init = function() {
                                var e = this;
                                this._items.length && (this._activeTab || this._setActiveTab(this._items[0]), this.show(this._activeTab.id, !0), this._items.map((function(t) {
                                    t.triggerEl.addEventListener("click", (function() {
                                        e.show(t.id)
                                    }))
                                })))
                            }, e.prototype.getActiveTab = function() {
                                return this._activeTab
                            }, e.prototype._setActiveTab = function(e) {
                                this._activeTab = e
                            }, e.prototype.getTab = function(e) {
                                return this._items.filter((function(t) {
                                    return t.id === e
                                }))[0]
                            }, e.prototype.show = function(e, t) {
                                var n, r, i = this;
                                void 0 === t && (t = !1);
                                var a = this.getTab(e);
                                (a !== this._activeTab || t) && (this._items.map((function(e) {
                                    var t, n;
                                    e !== a && ((t = e.triggerEl.classList).remove.apply(t, i._options.activeClasses.split(" ")), (n = e.triggerEl.classList).add.apply(n, i._options.inactiveClasses.split(" ")), e.targetEl.classList.add("hidden"), e.triggerEl.setAttribute("aria-selected", "false"))
                                })), (n = a.triggerEl.classList).add.apply(n, this._options.activeClasses.split(" ")), (r = a.triggerEl.classList).remove.apply(r, this._options.inactiveClasses.split(" ")), a.triggerEl.setAttribute("aria-selected", "true"), a.targetEl.classList.remove("hidden"), this._setActiveTab(a), this._options.onShow(this, a))
                            }, e
                        }();
                    "undefined" != typeof window && (window.Tabs = i), t.initTabs = function() {
                        document.querySelectorAll("[data-tabs-toggle]").forEach((function(e) {
                            var t = [],
                                n = null;
                            e.querySelectorAll('[role="tab"]').forEach((function(e) {
                                var r = "true" === e.getAttribute("aria-selected"),
                                    i = {
                                        id: e.getAttribute("data-tabs-target"),
                                        triggerEl: e,
                                        targetEl: document.querySelector(e.getAttribute("data-tabs-target"))
                                    };
                                t.push(i), r && (n = i.id)
                            })), new i(t, {
                                defaultTabId: n
                            })
                        }))
                    }, t.default = i
                },
                671: function(e, t, n) {
                    var r = this && this.__assign || function() {
                            return r = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }, r.apply(this, arguments)
                        },
                        i = this && this.__spreadArray || function(e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initTooltips = void 0;
                    var a = n(853),
                        o = {
                            placement: "top",
                            triggerType: "hover",
                            onShow: function() {},
                            onHide: function() {},
                            onToggle: function() {}
                        },
                        s = function() {
                            function e(e, t, n) {
                                void 0 === e && (e = null), void 0 === t && (t = null), void 0 === n && (n = o), this._targetEl = e, this._triggerEl = t, this._options = r(r({}, o), n), this._popperInstance = this._createPopperInstance(), this._visible = !1, this._init()
                            }
                            return e.prototype._init = function() {
                                this._triggerEl && this._setupEventListeners()
                            }, e.prototype._setupEventListeners = function() {
                                var e = this,
                                    t = this._getTriggerEvents();
                                t.showEvents.forEach((function(t) {
                                    e._triggerEl.addEventListener(t, (function() {
                                        e.show()
                                    }))
                                })), t.hideEvents.forEach((function(t) {
                                    e._triggerEl.addEventListener(t, (function() {
                                        e.hide()
                                    }))
                                }))
                            }, e.prototype._createPopperInstance = function() {
                                return (0, a.createPopper)(this._triggerEl, this._targetEl, {
                                    placement: this._options.placement,
                                    modifiers: [{
                                        name: "offset",
                                        options: {
                                            offset: [0, 8]
                                        }
                                    }]
                                })
                            }, e.prototype._getTriggerEvents = function() {
                                switch (this._options.triggerType) {
                                    case "hover":
                                    default:
                                        return {
                                            showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"]
                                        };
                                    case "click":
                                        return {
                                            showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"]
                                        };
                                    case "none":
                                        return {
                                            showEvents: [], hideEvents: []
                                        }
                                }
                            }, e.prototype._setupKeydownListener = function() {
                                var e = this;
                                this._keydownEventListener = function(t) {
                                    "Escape" === t.key && e.hide()
                                }, document.body.addEventListener("keydown", this._keydownEventListener, !0)
                            }, e.prototype._removeKeydownListener = function() {
                                document.body.removeEventListener("keydown", this._keydownEventListener, !0)
                            }, e.prototype._setupClickOutsideListener = function() {
                                var e = this;
                                this._clickOutsideEventListener = function(t) {
                                    e._handleClickOutside(t, e._targetEl)
                                }, document.body.addEventListener("click", this._clickOutsideEventListener, !0)
                            }, e.prototype._removeClickOutsideListener = function() {
                                document.body.removeEventListener("click", this._clickOutsideEventListener, !0)
                            }, e.prototype._handleClickOutside = function(e, t) {
                                var n = e.target;
                                n === t || t.contains(n) || this._triggerEl.contains(n) || !this.isVisible() || this.hide()
                            }, e.prototype.isVisible = function() {
                                return this._visible
                            }, e.prototype.toggle = function() {
                                this.isVisible() ? this.hide() : this.show()
                            }, e.prototype.show = function() {
                                this._targetEl.classList.remove("opacity-0", "invisible"), this._targetEl.classList.add("opacity-100", "visible"), this._popperInstance.setOptions((function(e) {
                                    return r(r({}, e), {
                                        modifiers: i(i([], e.modifiers, !0), [{
                                            name: "eventListeners",
                                            enabled: !0
                                        }], !1)
                                    })
                                })), this._setupClickOutsideListener(), this._setupKeydownListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this)
                            }, e.prototype.hide = function() {
                                this._targetEl.classList.remove("opacity-100", "visible"), this._targetEl.classList.add("opacity-0", "invisible"), this._popperInstance.setOptions((function(e) {
                                    return r(r({}, e), {
                                        modifiers: i(i([], e.modifiers, !0), [{
                                            name: "eventListeners",
                                            enabled: !1
                                        }], !1)
                                    })
                                })), this._removeClickOutsideListener(), this._removeKeydownListener(), this._visible = !1, this._options.onHide(this)
                            }, e
                        }();
                    "undefined" != typeof window && (window.Tooltip = s), t.initTooltips = function() {
                        document.querySelectorAll("[data-tooltip-target]").forEach((function(e) {
                            var t = e.getAttribute("data-tooltip-target"),
                                n = document.getElementById(t);
                            if (n) {
                                var r = e.getAttribute("data-tooltip-trigger"),
                                    i = e.getAttribute("data-tooltip-placement");
                                new s(n, e, {
                                    placement: i || o.placement,
                                    triggerType: r || o.triggerType
                                })
                            } else console.error('The tooltip element with id "'.concat(t, '" does not exist. Please check the data-tooltip-target attribute.'))
                        }))
                    }, t.default = s
                },
                947: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t) {
                            void 0 === t && (t = []), this._eventType = e, this._eventFunctions = t
                        }
                        return e.prototype.init = function() {
                            var e = this;
                            this._eventFunctions.forEach((function(t) {
                                "undefined" != typeof window && window.addEventListener(e._eventType, t)
                            }))
                        }, e
                    }();
                    t.default = n
                }
            },
            t = {};

        function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var a = t[r] = {
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.exports
        }
        n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        };
        var r = {};
        return function() {
            var e = r;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n(647);
            var t = n(902),
                i = n(33),
                a = n(922),
                o = n(556),
                s = n(791),
                l = n(340),
                c = n(316),
                u = n(16),
                d = n(903),
                p = n(247),
                f = n(671),
                h = n(947);
            new h.default("load", [t.initAccordions, a.initCollapses, i.initCarousels, s.initDismisses, c.initDropdowns, u.initModals, l.initDrawers, p.initTabs, f.initTooltips, d.initPopovers, o.initDials]).init(), e.default = {
                Accordion: t.default,
                Carousel: i.default,
                Collapse: a.default,
                Dial: o.default,
                Drawer: l.default,
                Dismiss: s.default,
                Dropdown: c.default,
                Modal: u.default,
                Popover: d.default,
                Tabs: p.default,
                Tooltip: f.default,
                Events: h.default
            }
        }(), r
    }()
})),
function(e) {
    "use strict";
    var t;
    "function" == typeof define && define.amd ? define(["jquery"], (function(t) {
        return e(t, window, document)
    })) : "object" == typeof exports ? (t = require("jquery"), "undefined" != typeof window ? module.exports = function(n, r) {
        return n = n || window, r = r || t(n), e(r, n, n.document)
    } : e(t, window, window.document)) : window.DataTable = e(jQuery, window, document)
}((function(e, t, n, r) {
    "use strict";

    function i(e) {
        var t = parseInt(e, 10);
        return !isNaN(t) && isFinite(e) ? t : null
    }

    function a(e, t, n) {
        var r = typeof e,
            i = "string" == r;
        return "number" == r || "bigint" == r || !!x(e) || (t && i && (e = S(e, t)), n && i && (e = e.replace(w, "")), !isNaN(parseFloat(e)) && isFinite(e))
    }

    function o(e, t, n) {
        var r;
        return !!x(e) || (x(r = e) || "string" == typeof r) && !!a(e.replace(v, ""), t, n) || null
    }

    function s(e, t, n, i) {
        var a = [],
            o = 0,
            s = t.length;
        if (i !== r)
            for (; o < s; o++) e[t[o]][n] && a.push(e[t[o]][n][i]);
        else
            for (; o < s; o++) a.push(e[t[o]][n]);
        return a
    }

    function l(e, t) {
        var n, i = [];
        t === r ? (t = 0, n = e) : (n = t, t = e);
        for (var a = t; a < n; a++) i.push(a);
        return i
    }

    function c(e) {
        for (var t = [], n = 0, r = e.length; n < r; n++) e[n] && t.push(e[n]);
        return t
    }

    function u(e, t) {
        return -1 !== this.indexOf(e, t = t === r ? 0 : t)
    }
    var d, p, f, h = function(t, n) {
            if (h.factory(t, n)) return h;
            if (this instanceof h) return e(t).DataTable(n);
            n = t, this.$ = function(e, t) {
                return this.api(!0).$(e, t)
            }, this._ = function(e, t) {
                return this.api(!0).rows(e, t).data()
            }, this.api = function(e) {
                return new Ct(e ? ot(this[d.iApiIndex]) : this)
            }, this.fnAddData = function(t, n) {
                var i = this.api(!0);
                t = (Array.isArray(t) && (Array.isArray(t[0]) || e.isPlainObject(t[0])) ? i.rows : i.row).add(t);
                return n !== r && !n || i.draw(), t.flatten().toArray()
            }, this.fnAdjustColumnSizing = function(e) {
                var t = this.api(!0).columns.adjust(),
                    n = t.settings()[0],
                    i = n.oScroll;
                e === r || e ? t.draw(!1) : "" === i.sX && "" === i.sY || ze(n)
            }, this.fnClearTable = function(e) {
                var t = this.api(!0).clear();
                e !== r && !e || t.draw()
            }, this.fnClose = function(e) {
                this.api(!0).row(e).child.hide()
            }, this.fnDeleteRow = function(e, t, n) {
                var i = this.api(!0),
                    a = (e = i.rows(e)).settings()[0],
                    o = a.aoData[e[0][0]];
                return e.remove(), t && t.call(this, a, o), n !== r && !n || i.draw(), o
            }, this.fnDestroy = function(e) {
                this.api(!0).destroy(e)
            }, this.fnDraw = function(e) {
                this.api(!0).draw(e)
            }, this.fnFilter = function(e, t, n, i, a, o) {
                var s = this.api(!0);
                (null === t || t === r ? s : s.column(t)).search(e, n, i, o), s.draw()
            }, this.fnGetData = function(e, t) {
                var n, i = this.api(!0);
                return e !== r ? (n = e.nodeName ? e.nodeName.toLowerCase() : "", t !== r || "td" == n || "th" == n ? i.cell(e, t).data() : i.row(e).data() || null) : i.data().toArray()
            }, this.fnGetNodes = function(e) {
                var t = this.api(!0);
                return e !== r ? t.row(e).node() : t.rows().nodes().flatten().toArray()
            }, this.fnGetPosition = function(e) {
                var t = this.api(!0),
                    n = e.nodeName.toUpperCase();
                return "TR" == n ? t.row(e).index() : "TD" == n || "TH" == n ? [(n = t.cell(e).index()).row, n.columnVisible, n.column] : null
            }, this.fnIsOpen = function(e) {
                return this.api(!0).row(e).child.isShown()
            }, this.fnOpen = function(e, t, n) {
                return this.api(!0).row(e).child(t, n).show().child()[0]
            }, this.fnPageChange = function(e, t) {
                e = this.api(!0).page(e), t !== r && !t || e.draw(!1)
            }, this.fnSetColumnVis = function(e, t, n) {
                e = this.api(!0).column(e).visible(t), n !== r && !n || e.columns.adjust().draw()
            }, this.fnSettings = function() {
                return ot(this[d.iApiIndex])
            }, this.fnSort = function(e) {
                this.api(!0).order(e).draw()
            }, this.fnSortListener = function(e, t, n) {
                this.api(!0).order.listener(e, t, n)
            }, this.fnUpdate = function(e, t, n, i, a) {
                var o = this.api(!0);
                return (n === r || null === n ? o.row(t) : o.cell(t, n)).data(e), a !== r && !a || o.columns.adjust(), i !== r && !i || o.draw(), 0
            }, this.fnVersionCheck = d.fnVersionCheck;
            var i, a = this,
                o = n === r,
                s = this.length;
            for (i in o && (n = {}), this.oApi = this.internal = d.internal, h.ext.internal) i && (this[i] = Vt(i));
            return this.each((function() {
                var t = 1 < s ? ct({}, n, !0) : n,
                    i = 0,
                    l = this.getAttribute("id"),
                    c = !1,
                    u = h.defaults,
                    d = e(this);
                if ("table" != this.nodeName.toLowerCase()) st(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    M(u), k(u.column), D(u, u, !0), D(u.column, u.column, !0), D(u, e.extend(t, d.data()), !0);
                    for (var p = h.settings, f = (i = 0, p.length); i < f; i++) {
                        var m = p[i];
                        if (m.nTable == this || m.nTHead && m.nTHead.parentNode == this || m.nTFoot && m.nTFoot.parentNode == this) {
                            var g = (t.bRetrieve !== r ? t : u).bRetrieve,
                                v = (t.bDestroy !== r ? t : u).bDestroy;
                            if (o || g) return m.oInstance;
                            if (v) {
                                m.oInstance.fnDestroy();
                                break
                            }
                            return void st(m, 0, "Cannot reinitialise DataTable", 3)
                        }
                        if (m.sTableId == this.id) {
                            p.splice(i, 1);
                            break
                        }
                    }
                    null !== l && "" !== l || (l = "DataTables_Table_" + h.ext._unique++, this.id = l);
                    var y, b, w = e.extend(!0, {}, h.models.oSettings, {
                            sDestroyWidth: d[0].style.width,
                            sInstance: l,
                            sTableId: l
                        }),
                        x = (w.nTable = this, w.oApi = a.internal, w.oInit = t, p.push(w), w.oInstance = 1 === a.length ? a : d.dataTable(), M(t), A(t.oLanguage), t.aLengthMenu && !t.iDisplayLength && (t.iDisplayLength = (Array.isArray(t.aLengthMenu[0]) ? t.aLengthMenu[0] : t.aLengthMenu)[0]), t = ct(e.extend(!0, {}, u), t), lt(w.oFeatures, t, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), lt(w, t, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                            ["oSearch", "oPreviousSearch"],
                            ["aoSearchCols", "aoPreSearchCols"],
                            ["iDisplayLength", "_iDisplayLength"]
                        ]), lt(w.oScroll, t, [
                            ["sScrollX", "sX"],
                            ["sScrollXInner", "sXInner"],
                            ["sScrollY", "sY"],
                            ["bScrollCollapse", "bCollapse"]
                        ]), lt(w.oLanguage, t, "fnInfoCallback"), dt(w, "aoDrawCallback", t.fnDrawCallback, "user"), dt(w, "aoServerParams", t.fnServerParams, "user"), dt(w, "aoStateSaveParams", t.fnStateSaveParams, "user"), dt(w, "aoStateLoadParams", t.fnStateLoadParams, "user"), dt(w, "aoStateLoaded", t.fnStateLoaded, "user"), dt(w, "aoRowCallback", t.fnRowCallback, "user"), dt(w, "aoRowCreatedCallback", t.fnCreatedRow, "user"), dt(w, "aoHeaderCallback", t.fnHeaderCallback, "user"), dt(w, "aoFooterCallback", t.fnFooterCallback, "user"), dt(w, "aoInitComplete", t.fnInitComplete, "user"), dt(w, "aoPreDrawCallback", t.fnPreDrawCallback, "user"), w.rowIdFn = J(t.rowId), I(w), w.oClasses),
                        S = (e.extend(x, h.ext.classes, t.oClasses), d.addClass(x.sTable), w.iInitDisplayStart === r && (w.iInitDisplayStart = t.iDisplayStart, w._iDisplayStart = t.iDisplayStart), null !== t.iDeferLoading && (w.bDeferLoading = !0, l = Array.isArray(t.iDeferLoading), w._iRecordsDisplay = l ? t.iDeferLoading[0] : t.iDeferLoading, w._iRecordsTotal = l ? t.iDeferLoading[1] : t.iDeferLoading), w.oLanguage),
                        E = (l = (e.extend(!0, S, t.oLanguage), S.sUrl ? (e.ajax({
                            dataType: "json",
                            url: S.sUrl,
                            success: function(t) {
                                D(u.oLanguage, t), A(t), e.extend(!0, S, t, w.oInit.oLanguage), pt(w, null, "i18n", [w]), Ie(w)
                            },
                            error: function() {
                                Ie(w)
                            }
                        }), c = !0) : pt(w, null, "i18n", [w]), null === t.asStripeClasses && (w.asStripeClasses = [x.sStripeOdd, x.sStripeEven]), w.asStripeClasses), d.children("tbody").find("tr").eq(0)),
                        T = (-1 !== e.inArray(!0, e.map(l, (function(e, t) {
                            return E.hasClass(e)
                        }))) && (e("tbody tr", this).removeClass(l.join(" ")), w.asDestroyStripes = l.slice()), []);
                    if (0 !== (l = this.getElementsByTagName("thead")).length && (ue(w.aoHeader, l[0]), T = de(w)), null === t.aoColumns)
                        for (y = [], i = 0, f = T.length; i < f; i++) y.push(null);
                    else y = t.aoColumns;
                    for (i = 0, f = y.length; i < f; i++) O(w, T ? T[i] : null);
                    q(w, t.aoColumnDefs, y, (function(e, t) {
                        j(w, e, t)
                    })), E.length && (b = function(e, t) {
                        return null !== e.getAttribute("data-" + t) ? t : null
                    }, e(E[0]).children("th, td").each((function(e, t) {
                        var n, i = w.aoColumns[e];
                        i || st(w, 0, "Incorrect column count", 18), i.mData === e && (n = b(t, "sort") || b(t, "order"), t = b(t, "filter") || b(t, "search"), null === n && null === t || (i.mData = {
                            _: e + ".display",
                            sort: null !== n ? e + ".@data-" + n : r,
                            type: null !== n ? e + ".@data-" + n : r,
                            filter: null !== t ? e + ".@data-" + t : r
                        }, i._isArrayHost = !0, j(w, e)))
                    })));
                    var C = w.oFeatures;
                    l = function() {
                        if (t.aaSorting === r) {
                            var n = w.aaSorting;
                            for (i = 0, f = n.length; i < f; i++) n[i][1] = w.aoColumns[i].asSorting[0]
                        }
                        tt(w), C.bSort && dt(w, "aoDrawCallback", (function() {
                            var t, n;
                            w.bSorted && (t = Je(w), n = {}, e.each(t, (function(e, t) {
                                n[t.src] = t.dir
                            })), pt(w, null, "order", [w, t, n]), Qe(w))
                        })), dt(w, "aoDrawCallback", (function() {
                            (w.bSorted || "ssp" === mt(w) || C.bDeferRender) && tt(w)
                        }), "sc");
                        var a, o = d.children("caption").each((function() {
                                this._captionSide = e(this).css("caption-side")
                            })),
                            s = (0 === (a = d.children("thead")).length && (a = e("<thead/>").appendTo(d)), w.nTHead = a[0], d.children("tbody"));
                        if (0 === (a = 0 === (a = (0 === s.length && (s = e("<tbody/>").insertAfter(a)), w.nTBody = s[0], d.children("tfoot"))).length && 0 < o.length && ("" !== w.oScroll.sX || "" !== w.oScroll.sY) ? e("<tfoot/>").appendTo(d) : a).length || 0 === a.children().length ? d.addClass(x.sNoFooter) : 0 < a.length && (w.nTFoot = a[0], ue(w.aoFooter, w.nTFoot)), t.aaData)
                            for (i = 0; i < t.aaData.length; i++) B(w, t.aaData[i]);
                        else !w.bDeferLoading && "dom" != mt(w) || W(w, e(w.nTBody).children("tr"));
                        w.aiDisplay = w.aiDisplayMaster.slice(), !(w.bInitialised = !0) === c && Ie(w)
                    };
                    dt(w, "aoDrawCallback", rt, "state_save"), t.bStateSave ? (C.bStateSave = !0, it(w, 0, l)) : l()
                }
            })), a = null, this
        },
        m = {},
        g = /[\r\n\u2028]/g,
        v = /<.*?>/g,
        y = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        b = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
        w = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        x = function(e) {
            return !e || !0 === e || "-" === e
        },
        S = function(e, t) {
            return m[t] || (m[t] = new RegExp(Ee(t), "g")), "string" == typeof e && "." !== t ? e.replace(/\./g, "").replace(m[t], ".") : e
        },
        E = function(e, t, n) {
            var i = [],
                a = 0,
                o = e.length;
            if (n !== r)
                for (; a < o; a++) e[a] && e[a][t] && i.push(e[a][t][n]);
            else
                for (; a < o; a++) e[a] && i.push(e[a][t]);
            return i
        },
        T = function(e) {
            if (function(e) {
                    if (!(e.length < 2))
                        for (var t = e.slice().sort(), n = t[0], r = 1, i = t.length; r < i; r++) {
                            if (t[r] === n) return !1;
                            n = t[r]
                        }
                    return !0
                }(e)) return e.slice();
            var t, n, r, i = [],
                a = e.length,
                o = 0;
            e: for (n = 0; n < a; n++) {
                for (t = e[n], r = 0; r < o; r++)
                    if (i[r] === t) continue e;
                i.push(t), o++
            }
            return i
        },
        C = function(e, t) {
            if (Array.isArray(t))
                for (var n = 0; n < t.length; n++) C(e, t[n]);
            else e.push(t);
            return e
        };

    function _(t) {
        var n, r, i = {};
        e.each(t, (function(e, a) {
            (n = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (r = e.replace(n[0], n[2].toLowerCase()), i[r] = e, "o" === n[1]) && _(t[e])
        })), t._hungarianMap = i
    }

    function D(t, n, i) {
        var a;
        t._hungarianMap || _(t), e.each(n, (function(o, s) {
            (a = t._hungarianMap[o]) === r || !i && n[a] !== r || ("o" === a.charAt(0) ? (n[a] || (n[a] = {}), e.extend(!0, n[a], n[o]), D(t[a], n[a], i)) : n[a] = n[o])
        }))
    }

    function A(e) {
        var t, n = h.defaults.oLanguage,
            r = n.sDecimal;
        r && jt(r), e && (t = e.sZeroRecords, !e.sEmptyTable && t && "No data available in table" === n.sEmptyTable && lt(e, e, "sZeroRecords", "sEmptyTable"), !e.sLoadingRecords && t && "Loading..." === n.sLoadingRecords && lt(e, e, "sZeroRecords", "sLoadingRecords"), e.sInfoThousands && (e.sThousands = e.sInfoThousands), t = e.sDecimal) && r !== t && jt(t)
    }
    Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }), Array.prototype.includes || (Array.prototype.includes = u), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }), String.prototype.includes || (String.prototype.includes = u), h.util = {
        throttle: function(e, t) {
            var n, i, a = t !== r ? t : 200;
            return function() {
                var t = this,
                    o = +new Date,
                    s = arguments;
                n && o < n + a ? (clearTimeout(i), i = setTimeout((function() {
                    n = r, e.apply(t, s)
                }), a)) : (n = o, e.apply(t, s))
            }
        },
        escapeRegex: function(e) {
            return e.replace(b, "\\$1")
        },
        set: function(t) {
            var n;
            return e.isPlainObject(t) ? h.util.set(t._) : null === t ? function() {} : "function" == typeof t ? function(e, n, r) {
                t(e, "set", n, r)
            } : "string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(") ? function(e, n) {
                e[t] = n
            } : (n = function(e, t, i) {
                for (var a, o, s, l, c = Y(i), u = (i = c[c.length - 1], 0), d = c.length - 1; u < d; u++) {
                    if ("__proto__" === c[u] || "constructor" === c[u]) throw new Error("Cannot set prototype values");
                    if (a = c[u].match(X), o = c[u].match(U), a) {
                        if (c[u] = c[u].replace(X, ""), e[c[u]] = [], (a = c.slice()).splice(0, u + 1), l = a.join("."), Array.isArray(t))
                            for (var p = 0, f = t.length; p < f; p++) n(s = {}, t[p], l), e[c[u]].push(s);
                        else e[c[u]] = t;
                        return
                    }
                    o && (c[u] = c[u].replace(U, ""), e = e[c[u]](t)), null !== e[c[u]] && e[c[u]] !== r || (e[c[u]] = {}), e = e[c[u]]
                }
                i.match(U) ? e[i.replace(U, "")](t) : e[i.replace(X, "")] = t
            }, function(e, r) {
                return n(e, r, t)
            })
        },
        get: function(t) {
            var n, i;
            return e.isPlainObject(t) ? (n = {}, e.each(t, (function(e, t) {
                t && (n[e] = h.util.get(t))
            })), function(e, t, i, a) {
                var o = n[t] || n._;
                return o !== r ? o(e, t, i, a) : e
            }) : null === t ? function(e) {
                return e
            } : "function" == typeof t ? function(e, n, r, i) {
                return t(e, n, r, i)
            } : "string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(") ? function(e, n) {
                return e[t]
            } : (i = function(e, t, n) {
                var a, o, s;
                if ("" !== n)
                    for (var l = Y(n), c = 0, u = l.length; c < u; c++) {
                        if (f = l[c].match(X), a = l[c].match(U), f) {
                            if (l[c] = l[c].replace(X, ""), "" !== l[c] && (e = e[l[c]]), o = [], l.splice(0, c + 1), s = l.join("."), Array.isArray(e))
                                for (var d = 0, p = e.length; d < p; d++) o.push(i(e[d], t, s));
                            var f = f[0].substring(1, f[0].length - 1);
                            e = "" === f ? o : o.join(f);
                            break
                        }
                        if (a) l[c] = l[c].replace(U, ""), e = e[l[c]]();
                        else {
                            if (null === e || e[l[c]] === r) return r;
                            e = e[l[c]]
                        }
                    }
                return e
            }, function(e, n) {
                return i(e, n, t)
            })
        }
    };
    var L = function(e, t, n) {
        e[t] !== r && (e[n] = e[t])
    };

    function M(e) {
        L(e, "ordering", "bSort"), L(e, "orderMulti", "bSortMulti"), L(e, "orderClasses", "bSortClasses"), L(e, "orderCellsTop", "bSortCellsTop"), L(e, "order", "aaSorting"), L(e, "orderFixed", "aaSortingFixed"), L(e, "paging", "bPaginate"), L(e, "pagingType", "sPaginationType"), L(e, "pageLength", "iDisplayLength"), L(e, "searching", "bFilter"), "boolean" == typeof e.sScrollX && (e.sScrollX = e.sScrollX ? "100%" : ""), "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : "");
        var t = e.aoSearchCols;
        if (t)
            for (var n = 0, r = t.length; n < r; n++) t[n] && D(h.models.oSearch, t[n])
    }

    function k(e) {
        L(e, "orderable", "bSortable"), L(e, "orderData", "aDataSort"), L(e, "orderSequence", "asSorting"), L(e, "orderDataType", "sortDataType");
        var t = e.aDataSort;
        "number" != typeof t || Array.isArray(t) || (e.aDataSort = [t])
    }

    function I(n) {
        var r, i, a, o;
        h.__browser || (h.__browser = r = {}, o = (a = (i = e("<div/>").css({
            position: "fixed",
            top: 0,
            left: -1 * e(t).scrollLeft(),
            height: 1,
            width: 1,
            overflow: "hidden"
        }).append(e("<div/>").css({
            position: "absolute",
            top: 1,
            left: 1,
            width: 100,
            overflow: "scroll"
        }).append(e("<div/>").css({
            width: "100%",
            height: 10
        }))).appendTo("body")).children()).children(), r.barWidth = a[0].offsetWidth - a[0].clientWidth, r.bScrollOversize = 100 === o[0].offsetWidth && 100 !== a[0].clientWidth, r.bScrollbarLeft = 1 !== Math.round(o.offset().left), r.bBounding = !!i[0].getBoundingClientRect().width, i.remove()), e.extend(n.oBrowser, h.__browser), n.oScroll.iBarWidth = h.__browser.barWidth
    }

    function P(e, t, n, i, a, o) {
        var s, l = i,
            c = !1;
        for (n !== r && (s = n, c = !0); l !== a;) e.hasOwnProperty(l) && (s = c ? t(s, e[l], l, e) : e[l], c = !0, l += o);
        return s
    }

    function O(t, r) {
        var i = h.defaults.column,
            a = t.aoColumns.length;
        i = e.extend({}, h.models.oColumn, i, {
            nTh: r || n.createElement("th"),
            sTitle: i.sTitle || (r ? r.innerHTML : ""),
            aDataSort: i.aDataSort || [a],
            mData: i.mData || a,
            idx: a
        });
        (i = (t.aoColumns.push(i), t.aoPreSearchCols))[a] = e.extend({}, h.models.oSearch, i[a]), j(t, a, e(r).data())
    }

    function j(t, n, i) {
        function a(e) {
            return "string" == typeof e && -1 !== e.indexOf("@")
        }
        n = t.aoColumns[n];
        var o = t.oClasses,
            s = e(n.nTh),
            l = (!n.sWidthOrig && (n.sWidthOrig = s.attr("width") || null, d = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/)) && (n.sWidthOrig = d[1]), i !== r && null !== i && (k(i), D(h.defaults.column, i, !0), i.mDataProp === r || i.mData || (i.mData = i.mDataProp), i.sType && (n._sManualType = i.sType), i.className && !i.sClass && (i.sClass = i.className), i.sClass && s.addClass(i.sClass), d = n.sClass, e.extend(n, i), lt(n, i, "sWidth", "sWidthOrig"), d !== n.sClass && (n.sClass = d + " " + n.sClass), i.iDataSort !== r && (n.aDataSort = [i.iDataSort]), lt(n, i, "aDataSort")), n.mData),
            c = J(l),
            u = n.mRender ? J(n.mRender) : null,
            d = (n._bAttrSrc = e.isPlainObject(l) && (a(l.sort) || a(l.type) || a(l.filter)), n._setter = null, n.fnGetData = function(e, t, n) {
                var i = c(e, t, r, n);
                return u && t ? u(i, t, e, n) : i
            }, n.fnSetData = function(e, t, n) {
                return K(l)(e, t, n)
            }, "number" == typeof l || n._isArrayHost || (t._rowReadObject = !0), t.oFeatures.bSort || (n.bSortable = !1, s.addClass(o.sSortableNone)), -1 !== e.inArray("asc", n.asSorting));
        i = -1 !== e.inArray("desc", n.asSorting);
        n.bSortable && (d || i) ? d && !i ? (n.sSortingClass = o.sSortableAsc, n.sSortingClassJUI = o.sSortJUIAscAllowed) : !d && i ? (n.sSortingClass = o.sSortableDesc, n.sSortingClassJUI = o.sSortJUIDescAllowed) : (n.sSortingClass = o.sSortable, n.sSortingClassJUI = o.sSortJUI) : (n.sSortingClass = o.sSortableNone, n.sSortingClassJUI = "")
    }

    function N(e) {
        if (!1 !== e.oFeatures.bAutoWidth) {
            var t = e.aoColumns;
            We(e);
            for (var n = 0, r = t.length; n < r; n++) t[n].nTh.style.width = t[n].sWidth
        }
        var i = e.oScroll;
        "" === i.sY && "" === i.sX || ze(e), pt(e, null, "column-sizing", [e])
    }

    function R(e, t) {
        return "number" == typeof(e = H(e, "bVisible"))[t] ? e[t] : null
    }

    function F(t, n) {
        return t = H(t, "bVisible"), -1 !== (n = e.inArray(n, t)) ? n : null
    }

    function $(t) {
        var n = 0;
        return e.each(t.aoColumns, (function(t, r) {
            r.bVisible && "none" !== e(r.nTh).css("display") && n++
        })), n
    }

    function H(t, n) {
        var r = [];
        return e.map(t.aoColumns, (function(e, t) {
            e[n] && r.push(t)
        })), r
    }

    function z(e) {
        for (var t, n, i, a, o, s, l, c = e.aoColumns, u = e.aoData, d = h.ext.type.detect, p = 0, f = c.length; p < f; p++)
            if (l = [], !(o = c[p]).sType && o._sManualType) o.sType = o._sManualType;
            else if (!o.sType) {
            for (t = 0, n = d.length; t < n; t++) {
                for (i = 0, a = u.length; i < a && (l[i] === r && (l[i] = V(e, i, p, "type")), (s = d[t](l[i], e)) || t === d.length - 1) && ("html" !== s || x(l[i])); i++);
                if (s) {
                    o.sType = s;
                    break
                }
            }
            o.sType || (o.sType = "string")
        }
    }

    function q(t, n, i, a) {
        var o, s, l, c, u = t.aoColumns;
        if (n)
            for (o = n.length - 1; 0 <= o; o--)
                for (var d, p = (d = n[o]).target !== r ? d.target : d.targets !== r ? d.targets : d.aTargets, f = 0, h = (p = Array.isArray(p) ? p : [p]).length; f < h; f++)
                    if ("number" == typeof p[f] && 0 <= p[f]) {
                        for (; u.length <= p[f];) O(t);
                        a(p[f], d)
                    } else if ("number" == typeof p[f] && p[f] < 0) a(u.length + p[f], d);
        else if ("string" == typeof p[f])
            for (l = 0, c = u.length; l < c; l++) "_all" != p[f] && !e(u[l].nTh).hasClass(p[f]) || a(l, d);
        if (i)
            for (o = 0, s = i.length; o < s; o++) a(o, i[o])
    }

    function B(t, n, i, a) {
        for (var o = t.aoData.length, s = e.extend(!0, {}, h.models.oRow, {
                src: i ? "dom" : "data",
                idx: o
            }), l = (s._aData = n, t.aoData.push(s), t.aoColumns), c = 0, u = l.length; c < u; c++) l[c].sType = null;
        return t.aiDisplayMaster.push(o), (n = t.rowIdFn(n)) !== r && (t.aIds[n] = s), !i && t.oFeatures.bDeferRender || re(t, o, i, a), o
    }

    function W(t, n) {
        var r;
        return (n = n instanceof e ? n : e(n)).map((function(e, n) {
            return r = ne(t, n), B(t, r.data, n, r.cells)
        }))
    }

    function V(e, t, n, i) {
        "search" === i ? i = "filter" : "order" === i && (i = "sort");
        var a = e.iDraw,
            o = e.aoColumns[n],
            s = e.aoData[t]._aData,
            l = o.sDefaultContent,
            c = o.fnGetData(s, i, {
                settings: e,
                row: t,
                col: n
            });
        if (c === r) return e.iDrawError != a && null === l && (st(e, 0, "Requested unknown parameter " + ("function" == typeof o.mData ? "{function}" : "'" + o.mData + "'") + " for row " + t + ", column " + n, 4), e.iDrawError = a), l;
        if (c !== s && null !== c || null === l || i === r) {
            if ("function" == typeof c) return c.call(s)
        } else c = l;
        return null === c && "display" === i ? "" : "filter" === i && (t = h.ext.type.search)[o.sType] ? t[o.sType](c) : c
    }

    function G(e, t, n, r) {
        var i = e.aoColumns[n],
            a = e.aoData[t]._aData;
        i.fnSetData(a, r, {
            settings: e,
            row: t,
            col: n
        })
    }
    var X = /\[.*?\]$/,
        U = /\(\)$/;

    function Y(t) {
        return e.map(t.match(/(\\.|[^\.])+/g) || [""], (function(e) {
            return e.replace(/\\\./g, ".")
        }))
    }
    var J = h.util.get,
        K = h.util.set;

    function Q(e) {
        return E(e.aoData, "_aData")
    }

    function Z(e) {
        e.aoData.length = 0, e.aiDisplayMaster.length = 0, e.aiDisplay.length = 0, e.aIds = {}
    }

    function ee(e, t, n) {
        for (var i = -1, a = 0, o = e.length; a < o; a++) e[a] == t ? i = a : e[a] > t && e[a]--; - 1 != i && n === r && e.splice(i, 1)
    }

    function te(e, t, n, i) {
        function a(n, r) {
            for (; n.childNodes.length;) n.removeChild(n.firstChild);
            n.innerHTML = V(e, t, r, "display")
        }
        var o, s, l = e.aoData[t];
        if ("dom" !== n && (n && "auto" !== n || "dom" !== l.src)) {
            var c = l.anCells;
            if (c)
                if (i !== r) a(c[i], i);
                else
                    for (o = 0, s = c.length; o < s; o++) a(c[o], o)
        } else l._aData = ne(e, l, i, i === r ? r : l._aData).data;
        l._aSortData = null, l._aFilterData = null;
        var u = e.aoColumns;
        if (i !== r) u[i].sType = null;
        else {
            for (o = 0, s = u.length; o < s; o++) u[o].sType = null;
            ie(e, l)
        }
    }

    function ne(e, t, n, i) {
        function a(e, t) {
            var n;
            "string" == typeof e && -1 !== (n = e.indexOf("@")) && (n = e.substring(n + 1), K(e)(i, t.getAttribute(n)))
        }

        function o(e) {
            n !== r && n !== p || (l = f[p], c = e.innerHTML.trim(), l && l._bAttrSrc ? (K(l.mData._)(i, c), a(l.mData.sort, e), a(l.mData.type, e), a(l.mData.filter, e)) : h ? (l._setter || (l._setter = K(l.mData)), l._setter(i, c)) : i[p] = c), p++
        }
        var s, l, c, u = [],
            d = t.firstChild,
            p = 0,
            f = e.aoColumns,
            h = e._rowReadObject;
        if (i = i !== r ? i : h ? {} : [], d)
            for (; d;) "TD" != (s = d.nodeName.toUpperCase()) && "TH" != s || (o(d), u.push(d)), d = d.nextSibling;
        else
            for (var m = 0, g = (u = t.anCells).length; m < g; m++) o(u[m]);
        return (t = t.firstChild ? t : t.nTr) && (t = t.getAttribute("id")) && K(e.rowId)(i, t), {
            data: i,
            cells: u
        }
    }

    function re(t, r, i, a) {
        var o, s, l, c, u, d, p = t.aoData[r],
            f = p._aData,
            h = [];
        if (null === p.nTr) {
            for (o = i || n.createElement("tr"), p.nTr = o, p.anCells = h, o._DT_RowIndex = r, ie(t, p), c = 0, u = t.aoColumns.length; c < u; c++) l = t.aoColumns[c], (s = (d = !i) ? n.createElement(l.sCellType) : a[c]) || st(t, 0, "Incorrect column count", 18), s._DT_CellIndex = {
                row: r,
                column: c
            }, h.push(s), !d && (!l.mRender && l.mData === c || e.isPlainObject(l.mData) && l.mData._ === c + ".display") || (s.innerHTML = V(t, r, c, "display")), l.sClass && (s.className += " " + l.sClass), l.bVisible && !i ? o.appendChild(s) : !l.bVisible && i && s.parentNode.removeChild(s), l.fnCreatedCell && l.fnCreatedCell.call(t.oInstance, s, V(t, r, c), f, r, c);
            pt(t, "aoRowCreatedCallback", null, [o, f, r, h])
        }
    }

    function ie(t, n) {
        var r = n.nTr,
            i = n._aData;
        r && ((t = t.rowIdFn(i)) && (r.id = t), i.DT_RowClass && (t = i.DT_RowClass.split(" "), n.__rowc = n.__rowc ? T(n.__rowc.concat(t)) : t, e(r).removeClass(n.__rowc.join(" ")).addClass(i.DT_RowClass)), i.DT_RowAttr && e(r).attr(i.DT_RowAttr), i.DT_RowData) && e(r).data(i.DT_RowData)
    }

    function ae(t) {
        var n, r, i, a = t.nTHead,
            o = t.nTFoot,
            s = 0 === e("th, td", a).length,
            l = t.oClasses,
            c = t.aoColumns;
        for (s && (r = e("<tr/>").appendTo(a)), d = 0, p = c.length; d < p; d++) i = c[d], n = e(i.nTh).addClass(i.sClass), s && n.appendTo(r), t.oFeatures.bSort && (n.addClass(i.sSortingClass), !1 !== i.bSortable) && (n.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), et(t, i.nTh, d)), i.sTitle != n[0].innerHTML && n.html(i.sTitle), ht(t, "header")(t, n, i, l);
        if (s && ue(t.aoHeader, a), e(a).children("tr").children("th, td").addClass(l.sHeaderTH), e(o).children("tr").children("th, td").addClass(l.sFooterTH), null !== o)
            for (var u = t.aoFooter[0], d = 0, p = u.length; d < p; d++)(i = c[d]) ? (i.nTf = u[d].cell, i.sClass && e(i.nTf).addClass(i.sClass)) : st(t, 0, "Incorrect column count", 18)
    }

    function oe(t, n, i) {
        var a, o, s, l, c, u, d, p, f, h = [],
            m = [],
            g = t.aoColumns.length;
        if (n) {
            for (i === r && (i = !1), a = 0, o = n.length; a < o; a++) {
                for (h[a] = n[a].slice(), h[a].nTr = n[a].nTr, s = g - 1; 0 <= s; s--) t.aoColumns[s].bVisible || i || h[a].splice(s, 1);
                m.push([])
            }
            for (a = 0, o = h.length; a < o; a++) {
                if (d = h[a].nTr)
                    for (; u = d.firstChild;) d.removeChild(u);
                for (s = 0, l = h[a].length; s < l; s++)
                    if (f = p = 1, m[a][s] === r) {
                        for (d.appendChild(h[a][s].cell), m[a][s] = 1; h[a + p] !== r && h[a][s].cell == h[a + p][s].cell;) m[a + p][s] = 1, p++;
                        for (; h[a][s + f] !== r && h[a][s].cell == h[a][s + f].cell;) {
                            for (c = 0; c < p; c++) m[a + c][s + f] = 1;
                            f++
                        }
                        e(h[a][s].cell).attr("rowspan", p).attr("colspan", f)
                    }
            }
        }
    }

    function se(t, n) {
        i = "ssp" == mt(u = t), (c = u.iInitDisplayStart) !== r && -1 !== c && (u._iDisplayStart = !i && c >= u.fnRecordsDisplay() ? 0 : c, u.iInitDisplayStart = -1);
        var i = pt(t, "aoPreDrawCallback", "preDraw", [t]);
        if (-1 !== e.inArray(!1, i)) $e(t, !1);
        else {
            var a = [],
                o = 0,
                s = t.asStripeClasses,
                l = s.length,
                c = t.oLanguage,
                u = "ssp" == mt(t),
                d = t.aiDisplay,
                p = (i = t._iDisplayStart, t.fnDisplayEnd());
            if (t.bDrawing = !0, t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++, $e(t, !1);
            else if (u) {
                if (!t.bDestroying && !n) return void fe(t)
            } else t.iDraw++;
            if (0 !== d.length)
                for (var f = u ? t.aoData.length : p, h = u ? 0 : i; h < f; h++) {
                    var m, g = d[h],
                        v = t.aoData[g],
                        y = (null === v.nTr && re(t, g), v.nTr);
                    0 !== l && (m = s[o % l], v._sRowStripe != m) && (e(y).removeClass(v._sRowStripe).addClass(m), v._sRowStripe = m), pt(t, "aoRowCallback", null, [y, v._aData, o, h, g]), a.push(y), o++
                } else n = c.sZeroRecords, 1 == t.iDraw && "ajax" == mt(t) ? n = c.sLoadingRecords : c.sEmptyTable && 0 === t.fnRecordsTotal() && (n = c.sEmptyTable), a[0] = e("<tr/>", {
                    class: l ? s[0] : ""
                }).append(e("<td />", {
                    valign: "top",
                    colSpan: $(t),
                    class: t.oClasses.sRowEmpty
                }).html(n))[0];
            pt(t, "aoHeaderCallback", "header", [e(t.nTHead).children("tr")[0], Q(t), i, p, d]), pt(t, "aoFooterCallback", "footer", [e(t.nTFoot).children("tr")[0], Q(t), i, p, d]), (u = e(t.nTBody)).children().detach(), u.append(e(a)), pt(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
        }
    }

    function le(e, t) {
        var n = (r = e.oFeatures).bSort,
            r = r.bFilter;
        n && Ke(e), r ? ye(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice(), !0 !== t && (e._iDisplayStart = 0), e._drawHold = t, se(e), e._drawHold = !1
    }

    function ce(t) {
        for (var n, r, i, a, o, s, l, c = t.oClasses, u = e(t.nTable), d = (u = e("<div/>").insertBefore(u), t.oFeatures), p = e("<div/>", {
                id: t.sTableId + "_wrapper",
                class: c.sWrapper + (t.nTFoot ? "" : " " + c.sNoFooter)
            }), f = (t.nHolding = u[0], t.nTableWrapper = p[0], t.nTableReinsertBefore = t.nTable.nextSibling, t.sDom.split("")), m = 0; m < f.length; m++) {
            if (n = null, "<" == (r = f[m])) {
                if (i = e("<div/>")[0], "'" == (a = f[m + 1]) || '"' == a) {
                    for (o = "", s = 2; f[m + s] != a;) o += f[m + s], s++;
                    "H" == o ? o = c.sJUIHeader : "F" == o && (o = c.sJUIFooter), -1 != o.indexOf(".") ? (l = o.split("."), i.id = l[0].substr(1, l[0].length - 1), i.className = l[1]) : "#" == o.charAt(0) ? i.id = o.substr(1, o.length - 1) : i.className = o, m += s
                }
                p.append(i), p = e(i)
            } else if (">" == r) p = p.parent();
            else if ("l" == r && d.bPaginate && d.bLengthChange) n = je(t);
            else if ("f" == r && d.bFilter) n = ve(t);
            else if ("r" == r && d.bProcessing) n = Fe(t);
            else if ("t" == r) n = He(t);
            else if ("i" == r && d.bInfo) n = Le(t);
            else if ("p" == r && d.bPaginate) n = Ne(t);
            else if (0 !== h.ext.feature.length)
                for (var g = h.ext.feature, v = 0, y = g.length; v < y; v++)
                    if (r == g[v].cFeature) {
                        n = g[v].fnInit(t);
                        break
                    } n && ((l = t.aanFeatures)[r] || (l[r] = []), l[r].push(n), p.append(n))
        }
        u.replaceWith(p), t.nHolding = null
    }

    function ue(t, n) {
        var r, i, a, o, s, l, c, u, d, p, f = e(n).children("tr");
        for (t.splice(0, t.length), a = 0, l = f.length; a < l; a++) t.push([]);
        for (a = 0, l = f.length; a < l; a++)
            for (i = (r = f[a]).firstChild; i;) {
                if ("TD" == i.nodeName.toUpperCase() || "TH" == i.nodeName.toUpperCase())
                    for (u = (u = +i.getAttribute("colspan")) && 0 != u && 1 != u ? u : 1, d = (d = +i.getAttribute("rowspan")) && 0 != d && 1 != d ? d : 1, c = function(e, t, n) {
                            for (var r = e[t]; r[n];) n++;
                            return n
                        }(t, a, 0), p = 1 == u, s = 0; s < u; s++)
                        for (o = 0; o < d; o++) t[a + o][c + s] = {
                            cell: i,
                            unique: p
                        }, t[a + o].nTr = r;
                i = i.nextSibling
            }
    }

    function de(e, t, n) {
        var r = [];
        n || (n = e.aoHeader, t && ue(n = [], t));
        for (var i = 0, a = n.length; i < a; i++)
            for (var o = 0, s = n[i].length; o < s; o++) !n[i][o].unique || r[o] && e.bSortCellsTop || (r[o] = n[i][o].cell);
        return r
    }

    function pe(t, n, r) {
        function i(e) {
            var n = t.jqXHR ? t.jqXHR.status : null;
            (null === e || "number" == typeof n && 204 == n) && ge(t, e = {}, []), (n = e.error || e.sError) && st(t, 0, n), t.json = e, pt(t, null, "xhr", [t, e, t.jqXHR]), r(e)
        }
        pt(t, "aoServerParams", "serverParams", [n]), n && Array.isArray(n) && (a = {}, o = /(.*?)\[\]$/, e.each(n, (function(e, t) {
            var n = t.name.match(o);
            n ? (n = n[0], a[n] || (a[n] = []), a[n].push(t.value)) : a[t.name] = t.value
        })), n = a);
        var a, o, s, l = t.ajax,
            c = t.oInstance,
            u = (e.isPlainObject(l) && l.data && (u = "function" == typeof(s = l.data) ? s(n, t) : s, n = "function" == typeof s && u ? u : e.extend(!0, n, u), delete l.data), {
                data: n,
                success: i,
                dataType: "json",
                cache: !1,
                type: t.sServerMethod,
                error: function(n, r, i) {
                    var a = pt(t, null, "xhr", [t, null, t.jqXHR]); - 1 === e.inArray(!0, a) && ("parsererror" == r ? st(t, 0, "Invalid JSON response", 1) : 4 === n.readyState && st(t, 0, "Ajax error", 7)), $e(t, !1)
                }
            });
        t.oAjaxData = n, pt(t, null, "preXhr", [t, n]), t.fnServerData ? t.fnServerData.call(c, t.sAjaxSource, e.map(n, (function(e, t) {
            return {
                name: t,
                value: e
            }
        })), i, t) : t.sAjaxSource || "string" == typeof l ? t.jqXHR = e.ajax(e.extend(u, {
            url: l || t.sAjaxSource
        })) : "function" == typeof l ? t.jqXHR = l.call(c, n, i, t) : (t.jqXHR = e.ajax(e.extend(u, l)), l.data = s)
    }

    function fe(e) {
        e.iDraw++, $e(e, !0), pe(e, he(e), (function(t) {
            me(e, t)
        }))
    }

    function he(t) {
        for (var n, r, i, a = t.aoColumns, o = a.length, s = t.oFeatures, l = t.oPreviousSearch, c = t.aoPreSearchCols, u = [], d = Je(t), p = t._iDisplayStart, f = !1 !== s.bPaginate ? t._iDisplayLength : -1, m = function(e, t) {
                u.push({
                    name: e,
                    value: t
                })
            }, g = (m("sEcho", t.iDraw), m("iColumns", o), m("sColumns", E(a, "sName").join(",")), m("iDisplayStart", p), m("iDisplayLength", f), {
                draw: t.iDraw,
                columns: [],
                order: [],
                start: p,
                length: f,
                search: {
                    value: l.sSearch,
                    regex: l.bRegex
                }
            }), v = 0; v < o; v++) r = a[v], i = c[v], n = "function" == typeof r.mData ? "function" : r.mData, g.columns.push({
            data: n,
            name: r.sName,
            searchable: r.bSearchable,
            orderable: r.bSortable,
            search: {
                value: i.sSearch,
                regex: i.bRegex
            }
        }), m("mDataProp_" + v, n), s.bFilter && (m("sSearch_" + v, i.sSearch), m("bRegex_" + v, i.bRegex), m("bSearchable_" + v, r.bSearchable)), s.bSort && m("bSortable_" + v, r.bSortable);
        return s.bFilter && (m("sSearch", l.sSearch), m("bRegex", l.bRegex)), s.bSort && (e.each(d, (function(e, t) {
            g.order.push({
                column: t.col,
                dir: t.dir
            }), m("iSortCol_" + e, t.col), m("sSortDir_" + e, t.dir)
        })), m("iSortingCols", d.length)), null === (p = h.ext.legacy.ajax) ? t.sAjaxSource ? u : g : p ? u : g
    }

    function me(e, t) {
        function n(e, n) {
            return t[e] !== r ? t[e] : t[n]
        }
        var i = ge(e, t),
            a = n("sEcho", "draw"),
            o = n("iTotalRecords", "recordsTotal"),
            s = n("iTotalDisplayRecords", "recordsFiltered");
        if (a !== r) {
            if (+a < e.iDraw) return;
            e.iDraw = +a
        }
        i = i || [], Z(e), e._iRecordsTotal = parseInt(o, 10), e._iRecordsDisplay = parseInt(s, 10);
        for (var l = 0, c = i.length; l < c; l++) B(e, i[l]);
        e.aiDisplay = e.aiDisplayMaster.slice(), se(e, !0), e._bInitComplete || Pe(e, t), $e(e, !1)
    }

    function ge(t, n, i) {
        if (t = e.isPlainObject(t.ajax) && t.ajax.dataSrc !== r ? t.ajax.dataSrc : t.sAjaxDataProp, !i) return "data" === t ? n.aaData || n[t] : "" !== t ? J(t)(n) : n;
        K(t)(n, i)
    }

    function ve(t) {
        function r(e) {
            l.f;
            var n = this.value || "";
            s.return && "Enter" !== e.key || n != s.sSearch && (ye(t, {
                sSearch: n,
                bRegex: s.bRegex,
                bSmart: s.bSmart,
                bCaseInsensitive: s.bCaseInsensitive,
                return: s.return
            }), t._iDisplayStart = 0, se(t))
        }
        var i = t.oClasses,
            a = t.sTableId,
            o = t.oLanguage,
            s = t.oPreviousSearch,
            l = t.aanFeatures,
            c = '<input type="search" class="' + i.sFilterInput + '"/>',
            u = (u = o.sSearch).match(/_INPUT_/) ? u.replace("_INPUT_", c) : u + c,
            d = (c = e("<div/>", {
                id: l.f ? null : a + "_filter",
                class: i.sFilter
            }).append(e("<label/>").append(u)), i = null !== t.searchDelay ? t.searchDelay : "ssp" === mt(t) ? 400 : 0, e("input", c).val(s.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", i ? Ve(r, i) : r).on("mouseup", (function(e) {
                setTimeout((function() {
                    r.call(d[0], e)
                }), 10)
            })).on("keypress.DT", (function(e) {
                if (13 == e.keyCode) return !1
            })).attr("aria-controls", a));
        return e(t.nTable).on("search.dt.DT", (function(e, r) {
            if (t === r) try {
                d[0] !== n.activeElement && d.val(s.sSearch)
            } catch (e) {}
        })), c[0]
    }

    function ye(e, t, n) {
        function i(e) {
            o.sSearch = e.sSearch, o.bRegex = e.bRegex, o.bSmart = e.bSmart, o.bCaseInsensitive = e.bCaseInsensitive, o.return = e.return
        }

        function a(e) {
            return e.bEscapeRegex !== r ? !e.bEscapeRegex : e.bRegex
        }
        var o = e.oPreviousSearch,
            s = e.aoPreSearchCols;
        if (z(e), "ssp" != mt(e)) {
            xe(e, t.sSearch, n, a(t), t.bSmart, t.bCaseInsensitive, t.return), i(t);
            for (var l = 0; l < s.length; l++) we(e, s[l].sSearch, l, a(s[l]), s[l].bSmart, s[l].bCaseInsensitive);
            be(e)
        } else i(t);
        e.bFiltered = !0, pt(e, null, "search", [e])
    }

    function be(t) {
        for (var n, r, i = h.ext.search, a = t.aiDisplay, o = 0, s = i.length; o < s; o++) {
            for (var l = [], c = 0, u = a.length; c < u; c++) r = a[c], n = t.aoData[r], i[o](t, n._aFilterData, r, n._aData, c) && l.push(r);
            a.length = 0, e.merge(a, l)
        }
    }

    function we(e, t, n, r, i, a) {
        if ("" !== t) {
            for (var o, s = [], l = e.aiDisplay, c = Se(t, r, i, a), u = 0; u < l.length; u++) o = e.aoData[l[u]]._aFilterData[n], c.test(o) && s.push(l[u]);
            e.aiDisplay = s
        }
    }

    function xe(e, t, n, r, i, a) {
        var o, s, l, c = Se(t, r, i, a),
            u = (i = e.oPreviousSearch.sSearch, a = e.aiDisplayMaster, []);
        if (0 !== h.ext.search.length && (n = !0), s = _e(e), t.length <= 0) e.aiDisplay = a.slice();
        else {
            for ((s || n || r || i.length > t.length || 0 !== t.indexOf(i) || e.bSorted) && (e.aiDisplay = a.slice()), o = e.aiDisplay, l = 0; l < o.length; l++) c.test(e.aoData[o[l]]._sFilterRow) && u.push(o[l]);
            e.aiDisplay = u
        }
    }

    function Se(t, n, r, i) {
        return t = n ? t : Ee(t), r && (t = "^(?=.*?" + e.map(t.match(/"[^"]+"|[^ ]+/g) || [""], (function(e) {
            var t;
            return (e = '"' === e.charAt(0) && (t = e.match(/^"(.*)"$/)) ? t[1] : e).replace('"', "")
        })).join(")(?=.*?") + ").*$"), new RegExp(t, i ? "i" : "")
    }
    var Ee = h.util.escapeRegex,
        Te = e("<div>")[0],
        Ce = Te.textContent !== r;

    function _e(e) {
        for (var t, n, r, i, a, o = e.aoColumns, s = !1, l = 0, c = e.aoData.length; l < c; l++)
            if (!(a = e.aoData[l])._aFilterData) {
                for (r = [], t = 0, n = o.length; t < n; t++) o[t].bSearchable ? "string" != typeof(i = null === (i = V(e, l, t, "filter")) ? "" : i) && i.toString && (i = i.toString()) : i = "", i.indexOf && -1 !== i.indexOf("&") && (Te.innerHTML = i, i = Ce ? Te.textContent : Te.innerText), i.replace && (i = i.replace(/[\r\n\u2028]/g, "")), r.push(i);
                a._aFilterData = r, a._sFilterRow = r.join("  "), s = !0
            } return s
    }

    function De(e) {
        return {
            search: e.sSearch,
            smart: e.bSmart,
            regex: e.bRegex,
            caseInsensitive: e.bCaseInsensitive
        }
    }

    function Ae(e) {
        return {
            sSearch: e.search,
            bSmart: e.smart,
            bRegex: e.regex,
            bCaseInsensitive: e.caseInsensitive
        }
    }

    function Le(t) {
        var n = t.sTableId,
            r = t.aanFeatures.i,
            i = e("<div/>", {
                class: t.oClasses.sInfo,
                id: r ? null : n + "_info"
            });
        return r || (t.aoDrawCallback.push({
            fn: Me,
            sName: "information"
        }), i.attr("role", "status").attr("aria-live", "polite"), e(t.nTable).attr("aria-describedby", n + "_info")), i[0]
    }

    function Me(t) {
        var n, r, i, a, o, s, l = t.aanFeatures.i;
        0 !== l.length && (s = t.oLanguage, n = t._iDisplayStart + 1, r = t.fnDisplayEnd(), i = t.fnRecordsTotal(), o = (a = t.fnRecordsDisplay()) ? s.sInfo : s.sInfoEmpty, a !== i && (o += " " + s.sInfoFiltered), o = ke(t, o += s.sInfoPostFix), null !== (s = s.fnInfoCallback) && (o = s.call(t.oInstance, t, n, r, i, a, o)), e(l).html(o))
    }

    function ke(e, t) {
        var n = e.fnFormatNumber,
            r = e._iDisplayStart + 1,
            i = e._iDisplayLength,
            a = e.fnRecordsDisplay(),
            o = -1 === i;
        return t.replace(/_START_/g, n.call(e, r)).replace(/_END_/g, n.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, n.call(e, e.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(e, a)).replace(/_PAGE_/g, n.call(e, o ? 1 : Math.ceil(r / i))).replace(/_PAGES_/g, n.call(e, o ? 1 : Math.ceil(a / i)))
    }

    function Ie(e) {
        var t, n, r, i = e.iInitDisplayStart,
            a = e.aoColumns,
            o = e.oFeatures,
            s = e.bDeferLoading;
        if (e.bInitialised) {
            for (ce(e), ae(e), oe(e, e.aoHeader), oe(e, e.aoFooter), $e(e, !0), o.bAutoWidth && We(e), t = 0, n = a.length; t < n; t++)(r = a[t]).sWidth && (r.nTh.style.width = Ye(r.sWidth));
            pt(e, null, "preInit", [e]), le(e), "ssp" == (o = mt(e)) && !s || ("ajax" == o ? pe(e, [], (function(n) {
                var r = ge(e, n);
                for (t = 0; t < r.length; t++) B(e, r[t]);
                e.iInitDisplayStart = i, le(e), $e(e, !1), Pe(e, n)
            })) : ($e(e, !1), Pe(e)))
        } else setTimeout((function() {
            Ie(e)
        }), 200)
    }

    function Pe(e, t) {
        e._bInitComplete = !0, (t || e.oInit.aaData) && N(e), pt(e, null, "plugin-init", [e, t]), pt(e, "aoInitComplete", "init", [e, t])
    }

    function Oe(e, t) {
        t = parseInt(t, 10), e._iDisplayLength = t, ft(e), pt(e, null, "length", [e, t])
    }

    function je(t) {
        for (var n = t.oClasses, r = t.sTableId, i = t.aLengthMenu, a = Array.isArray(i[0]), o = a ? i[0] : i, s = a ? i[1] : i, l = e("<select/>", {
                name: r + "_length",
                "aria-controls": r,
                class: n.sLengthSelect
            }), c = 0, u = o.length; c < u; c++) l[0][c] = new Option("number" == typeof s[c] ? t.fnFormatNumber(s[c]) : s[c], o[c]);
        var d = e("<div><label/></div>").addClass(n.sLength);
        return t.aanFeatures.l || (d[0].id = r + "_length"), d.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)), e("select", d).val(t._iDisplayLength).on("change.DT", (function(n) {
            Oe(t, e(this).val()), se(t)
        })), e(t.nTable).on("length.dt.DT", (function(n, r, i) {
            t === r && e("select", d).val(i)
        })), d[0]
    }

    function Ne(t) {
        function n(e) {
            se(e)
        }
        var r = t.sPaginationType,
            i = h.ext.pager[r],
            a = "function" == typeof i,
            o = (r = e("<div/>").addClass(t.oClasses.sPaging + r)[0], t.aanFeatures);
        return a || i.fnInit(t, r, n), o.p || (r.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
            fn: function(e) {
                if (a)
                    for (var t = e._iDisplayStart, r = e._iDisplayLength, s = e.fnRecordsDisplay(), l = -1 === r, c = l ? 0 : Math.ceil(t / r), u = l ? 1 : Math.ceil(s / r), d = i(c, u), p = 0, f = o.p.length; p < f; p++) ht(e, "pageButton")(e, o.p[p], p, d, c, u);
                else i.fnUpdate(e, n)
            },
            sName: "pagination"
        })), r
    }

    function Re(e, t, n) {
        var r = e._iDisplayStart,
            i = e._iDisplayLength,
            a = (0 === (a = e.fnRecordsDisplay()) || -1 === i ? r = 0 : "number" == typeof t ? a < (r = t * i) && (r = 0) : "first" == t ? r = 0 : "previous" == t ? (r = 0 <= i ? r - i : 0) < 0 && (r = 0) : "next" == t ? r + i < a && (r += i) : "last" == t ? r = Math.floor((a - 1) / i) * i : st(e, 0, "Unknown paging action: " + t, 5), e._iDisplayStart !== r);
        return e._iDisplayStart = r, a ? (pt(e, null, "page", [e]), n && se(e)) : pt(e, null, "page-nc", [e]), a
    }

    function Fe(t) {
        return e("<div/>", {
            id: t.aanFeatures.r ? null : t.sTableId + "_processing",
            class: t.oClasses.sProcessing,
            role: "status"
        }).html(t.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(t.nTable)[0]
    }

    function $e(t, n) {
        t.oFeatures.bProcessing && e(t.aanFeatures.r).css("display", n ? "block" : "none"), pt(t, null, "processing", [t, n])
    }

    function He(t) {
        var n, r, i, a, o, s, l, c, u, d, p, f, h = e(t.nTable),
            m = t.oScroll;
        return "" === m.sX && "" === m.sY ? t.nTable : (n = m.sX, r = m.sY, i = t.oClasses, o = (a = h.children("caption")).length ? a[0]._captionSide : null, c = e(h[0].cloneNode(!1)), s = e(h[0].cloneNode(!1)), u = function(e) {
            return e ? Ye(e) : null
        }, (l = h.children("tfoot")).length || (l = null), c = e(p = "<div/>", {
            class: i.sScrollWrapper
        }).append(e(p, {
            class: i.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: n ? u(n) : "100%"
        }).append(e(p, {
            class: i.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: m.sXInner || "100%"
        }).append(c.removeAttr("id").css("margin-left", 0).append("top" === o ? a : null).append(h.children("thead"))))).append(e(p, {
            class: i.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: u(n)
        }).append(h)), l && c.append(e(p, {
            class: i.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: n ? u(n) : "100%"
        }).append(e(p, {
            class: i.sScrollFootInner
        }).append(s.removeAttr("id").css("margin-left", 0).append("bottom" === o ? a : null).append(h.children("tfoot"))))), u = c.children(), d = u[0], p = u[1], f = l ? u[2] : null, n && e(p).on("scroll.DT", (function(e) {
            var t = this.scrollLeft;
            d.scrollLeft = t, l && (f.scrollLeft = t)
        })), e(p).css("max-height", r), m.bCollapse || e(p).css("height", r), t.nScrollHead = d, t.nScrollBody = p, t.nScrollFoot = f, t.aoDrawCallback.push({
            fn: ze,
            sName: "scrolling"
        }), c[0])
    }

    function ze(n) {
        function i(e) {
            (e = e.style).paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
        }
        var a, o, s, l, c, u = (f = n.oScroll).sX,
            d = f.sXInner,
            p = f.sY,
            f = f.iBarWidth,
            h = e(n.nScrollHead),
            m = h[0].style,
            g = (v = h.children("div"))[0].style,
            v = v.children("table"),
            y = n.nScrollBody,
            b = e(y),
            w = y.style,
            x = e(n.nScrollFoot).children("div"),
            S = x.children("table"),
            T = e(n.nTHead),
            C = e(n.nTable),
            _ = C[0],
            D = _.style,
            A = n.nTFoot ? e(n.nTFoot) : null,
            L = n.oBrowser,
            M = L.bScrollOversize,
            k = (E(n.aoColumns, "nTh"), []),
            I = [],
            P = [],
            O = [],
            j = y.scrollHeight > y.clientHeight;
        n.scrollBarVis !== j && n.scrollBarVis !== r ? (n.scrollBarVis = j, N(n)) : (n.scrollBarVis = j, C.children("thead, tfoot").remove(), A && (j = A.clone().prependTo(C), c = A.find("tr"), o = j.find("tr"), j.find("[id]").removeAttr("id")), j = T.clone().prependTo(C), T = T.find("tr"), a = j.find("tr"), j.find("th, td").removeAttr("tabindex"), j.find("[id]").removeAttr("id"), u || (w.width = "100%", h[0].style.width = "100%"), e.each(de(n, j), (function(e, t) {
            s = R(n, e), t.style.width = n.aoColumns[s].sWidth
        })), A && qe((function(e) {
            e.style.width = ""
        }), o), h = C.outerWidth(), "" === u ? (D.width = "100%", M && (C.find("tbody").height() > y.offsetHeight || "scroll" == b.css("overflow-y")) && (D.width = Ye(C.outerWidth() - f)), h = C.outerWidth()) : "" !== d && (D.width = Ye(d), h = C.outerWidth()), qe(i, a), qe((function(n) {
            var r = t.getComputedStyle ? t.getComputedStyle(n).width : Ye(e(n).width());
            P.push(n.innerHTML), k.push(r)
        }), a), qe((function(e, t) {
            e.style.width = k[t]
        }), T), e(a).css("height", 0), A && (qe(i, o), qe((function(t) {
            O.push(t.innerHTML), I.push(Ye(e(t).css("width")))
        }), o), qe((function(e, t) {
            e.style.width = I[t]
        }), c), e(o).height(0)), qe((function(e, t) {
            e.innerHTML = '<div class="dataTables_sizing">' + P[t] + "</div>", e.childNodes[0].style.height = "0", e.childNodes[0].style.overflow = "hidden", e.style.width = k[t]
        }), a), A && qe((function(e, t) {
            e.innerHTML = '<div class="dataTables_sizing">' + O[t] + "</div>", e.childNodes[0].style.height = "0", e.childNodes[0].style.overflow = "hidden", e.style.width = I[t]
        }), o), Math.round(C.outerWidth()) < Math.round(h) ? (l = y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y") ? h + f : h, M && (y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y")) && (D.width = Ye(l - f)), "" !== u && "" === d || st(n, 1, "Possible column misalignment", 6)) : l = "100%", w.width = Ye(l), m.width = Ye(l), A && (n.nScrollFoot.style.width = Ye(l)), p || M && (w.height = Ye(_.offsetHeight + f)), j = C.outerWidth(), v[0].style.width = Ye(j), g.width = Ye(j), T = C.height() > y.clientHeight || "scroll" == b.css("overflow-y"), g[c = "padding" + (L.bScrollbarLeft ? "Left" : "Right")] = T ? f + "px" : "0px", A && (S[0].style.width = Ye(j), x[0].style.width = Ye(j), x[0].style[c] = T ? f + "px" : "0px"), C.children("colgroup").insertBefore(C.children("thead")), b.trigger("scroll"), !n.bSorted && !n.bFiltered || n._drawHold || (y.scrollTop = 0))
    }

    function qe(e, t, n) {
        for (var r, i, a = 0, o = 0, s = t.length; o < s;) {
            for (r = t[o].firstChild, i = n ? n[o].firstChild : null; r;) 1 === r.nodeType && (n ? e(r, i, a) : e(r, a), a++), r = r.nextSibling, i = n ? i.nextSibling : null;
            o++
        }
    }
    var Be = /<.*?>/g;

    function We(n) {
        var r, i, a = n.nTable,
            o = n.aoColumns,
            s = (c = n.oScroll).sY,
            l = c.sX,
            c = c.sXInner,
            u = o.length,
            d = H(n, "bVisible"),
            p = e("th", n.nTHead),
            f = a.getAttribute("width"),
            h = a.parentNode,
            m = !1,
            g = n.oBrowser,
            v = g.bScrollOversize;
        for ((b = a.style.width) && -1 !== b.indexOf("%") && (f = b), E = 0; E < d.length; E++) null !== (r = o[d[E]]).sWidth && (r.sWidth = Ge(r.sWidthOrig, h), m = !0);
        if (v || !m && !l && !s && u == $(n) && u == p.length)
            for (E = 0; E < u; E++) {
                var y = R(n, E);
                null !== y && (o[y].sWidth = Ye(p.eq(E).width()))
            } else {
                var b, w = ((b = e(a).clone().css("visibility", "hidden").removeAttr("id")).find("tbody tr").remove(), e("<tr/>").appendTo(b.find("tbody")));
                for (b.find("thead, tfoot").remove(), b.append(e(n.nTHead).clone()).append(e(n.nTFoot).clone()), b.find("tfoot th, tfoot td").css("width", ""), p = de(n, b.find("thead")[0]), E = 0; E < d.length; E++) r = o[d[E]], p[E].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? Ye(r.sWidthOrig) : "", r.sWidthOrig && l && e(p[E]).append(e("<div/>").css({
                    width: r.sWidthOrig,
                    margin: 0,
                    padding: 0,
                    border: 0,
                    height: 1
                }));
                if (n.aoData.length)
                    for (E = 0; E < d.length; E++) r = o[i = d[E]], e(Xe(n, i)).clone(!1).append(r.sContentPadding).appendTo(w);
                e("[name]", b).removeAttr("name");
                for (var x = e("<div/>").css(l || s ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 1,
                        right: 0,
                        overflow: "hidden"
                    } : {}).append(b).appendTo(h), S = (l && c ? b.width(c) : l ? (b.css("width", "auto"), b.removeAttr("width"), b.width() < h.clientWidth && f && b.width(h.clientWidth)) : s ? b.width(h.clientWidth) : f && b.width(f), 0), E = 0; E < d.length; E++) {
                    var T, C = (T = e(p[E])).outerWidth() - T.width();
                    S += T = g.bBounding ? Math.ceil(p[E].getBoundingClientRect().width) : T.outerWidth(), o[d[E]].sWidth = Ye(T - C)
                }
                a.style.width = Ye(S), x.remove()
            }
        f && (a.style.width = Ye(f)), !f && !l || n._reszEvt || (c = function() {
            e(t).on("resize.DT-" + n.sInstance, Ve((function() {
                N(n)
            })))
        }, v ? setTimeout(c, 1e3) : c(), n._reszEvt = !0)
    }
    var Ve = h.util.throttle;

    function Ge(t, r) {
        return t ? (r = (t = e("<div/>").css("width", Ye(t)).appendTo(r || n.body))[0].offsetWidth, t.remove(), r) : 0
    }

    function Xe(t, n) {
        var r, i = Ue(t, n);
        return i < 0 ? null : (r = t.aoData[i]).nTr ? r.anCells[n] : e("<td/>").html(V(t, i, n, "display"))[0]
    }

    function Ue(e, t) {
        for (var n, r = -1, i = -1, a = 0, o = e.aoData.length; a < o; a++)(n = (n = (n = V(e, a, t, "display") + "").replace(Be, "")).replace(/&nbsp;/g, " ")).length > r && (r = n.length, i = a);
        return i
    }

    function Ye(e) {
        return null === e ? "0px" : "number" == typeof e ? e < 0 ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e
    }

    function Je(t) {
        function n(t) {
            t.length && !Array.isArray(t[0]) ? g.push(t) : e.merge(g, t)
        }
        var i, a, o, s, l, c, u, d = [],
            p = t.aoColumns,
            f = t.aaSortingFixed,
            m = e.isPlainObject(f),
            g = [];
        for (Array.isArray(f) && n(f), m && f.pre && n(f.pre), n(t.aaSorting), m && f.post && n(f.post), i = 0; i < g.length; i++)
            for (o = (s = p[u = g[i][a = 0]].aDataSort).length; a < o; a++) c = p[l = s[a]].sType || "string", g[i]._idx === r && (g[i]._idx = e.inArray(g[i][1], p[l].asSorting)), d.push({
                src: u,
                col: l,
                dir: g[i][1],
                index: g[i]._idx,
                type: c,
                formatter: h.ext.type.order[c + "-pre"]
            });
        return d
    }

    function Ke(e) {
        var t, n, r, i, a, o = [],
            s = h.ext.type.order,
            l = e.aoData,
            c = (e.aoColumns, 0),
            u = e.aiDisplayMaster;
        for (z(e), t = 0, n = (a = Je(e)).length; t < n; t++)(i = a[t]).formatter && c++, nt(e, i.col);
        if ("ssp" != mt(e) && 0 !== a.length) {
            for (t = 0, r = u.length; t < r; t++) o[u[t]] = t;
            c === a.length ? u.sort((function(e, t) {
                for (var n, r, i, s, c = a.length, u = l[e]._aSortData, d = l[t]._aSortData, p = 0; p < c; p++)
                    if (0 != (i = (n = u[(s = a[p]).col]) < (r = d[s.col]) ? -1 : r < n ? 1 : 0)) return "asc" === s.dir ? i : -i;
                return (n = o[e]) < (r = o[t]) ? -1 : r < n ? 1 : 0
            })) : u.sort((function(e, t) {
                for (var n, r, i, c = a.length, u = l[e]._aSortData, d = l[t]._aSortData, p = 0; p < c; p++)
                    if (n = u[(i = a[p]).col], r = d[i.col], 0 !== (i = (s[i.type + "-" + i.dir] || s["string-" + i.dir])(n, r))) return i;
                return (n = o[e]) < (r = o[t]) ? -1 : r < n ? 1 : 0
            }))
        }
        e.bSorted = !0
    }

    function Qe(e) {
        for (var t = e.aoColumns, n = Je(e), r = e.oLanguage.oAria, i = 0, a = t.length; i < a; i++) {
            var o = t[i],
                s = o.asSorting,
                l = o.ariaTitle || o.sTitle.replace(/<.*?>/g, ""),
                c = o.nTh;
            c.removeAttribute("aria-sort"), o = o.bSortable ? l + ("asc" === (0 < n.length && n[0].col == i && (c.setAttribute("aria-sort", "asc" == n[0].dir ? "ascending" : "descending"), s[n[0].index + 1]) || s[0]) ? r.sSortAscending : r.sSortDescending) : l, c.setAttribute("aria-label", o)
        }
    }

    function Ze(t, n, i, a) {
        function o(t, n) {
            var i = t._idx;
            return (i = i === r ? e.inArray(t[1], u) : i) + 1 < u.length ? i + 1 : n ? null : 0
        }
        var s, l = t.aoColumns[n],
            c = t.aaSorting,
            u = l.asSorting;
        "number" == typeof c[0] && (c = t.aaSorting = [c]), i && t.oFeatures.bSortMulti ? -1 !== (l = e.inArray(n, E(c, "0"))) ? null === (s = null === (s = o(c[l], !0)) && 1 === c.length ? 0 : s) ? c.splice(l, 1) : (c[l][1] = u[s], c[l]._idx = s) : (c.push([n, u[0], 0]), c[c.length - 1]._idx = 0) : c.length && c[0][0] == n ? (s = o(c[0]), c.length = 1, c[0][1] = u[s], c[0]._idx = s) : (c.length = 0, c.push([n, u[0]]), c[0]._idx = 0), le(t), "function" == typeof a && a(t)
    }

    function et(e, t, n, r) {
        var i = e.aoColumns[n];
        ut(t, {}, (function(t) {
            !1 !== i.bSortable && (e.oFeatures.bProcessing ? ($e(e, !0), setTimeout((function() {
                Ze(e, n, t.shiftKey, r), "ssp" !== mt(e) && $e(e, !1)
            }), 0)) : Ze(e, n, t.shiftKey, r))
        }))
    }

    function tt(t) {
        var n, r, i, a = t.aLastSort,
            o = t.oClasses.sSortColumn,
            s = Je(t),
            l = t.oFeatures;
        if (l.bSort && l.bSortClasses) {
            for (n = 0, r = a.length; n < r; n++) i = a[n].src, e(E(t.aoData, "anCells", i)).removeClass(o + (n < 2 ? n + 1 : 3));
            for (n = 0, r = s.length; n < r; n++) i = s[n].src, e(E(t.aoData, "anCells", i)).addClass(o + (n < 2 ? n + 1 : 3))
        }
        t.aLastSort = s
    }

    function nt(e, t) {
        for (var n, r, i, a = e.aoColumns[t], o = h.ext.order[a.sSortDataType], s = (o && (n = o.call(e.oInstance, e, t, F(e, t))), h.ext.type.order[a.sType + "-pre"]), l = 0, c = e.aoData.length; l < c; l++)(r = e.aoData[l])._aSortData || (r._aSortData = []), r._aSortData[t] && !o || (i = o ? n[l] : V(e, l, t, "sort"), r._aSortData[t] = s ? s(i) : i)
    }

    function rt(t) {
        var n;
        t._bLoadingState || (n = {
            time: +new Date,
            start: t._iDisplayStart,
            length: t._iDisplayLength,
            order: e.extend(!0, [], t.aaSorting),
            search: De(t.oPreviousSearch),
            columns: e.map(t.aoColumns, (function(e, n) {
                return {
                    visible: e.bVisible,
                    search: De(t.aoPreSearchCols[n])
                }
            }))
        }, t.oSavedState = n, pt(t, "aoStateSaveParams", "stateSaveParams", [t, n]), t.oFeatures.bStateSave && !t.bDestroying && t.fnStateSaveCallback.call(t.oInstance, t, n))
    }

    function it(e, t, n) {
        var i;
        if (e.oFeatures.bStateSave) return (i = e.fnStateLoadCallback.call(e.oInstance, e, (function(t) {
            at(e, t, n)
        }))) !== r && at(e, i, n), !0;
        n()
    }

    function at(t, n, i) {
        var a, o, s = t.aoColumns,
            l = (t._bLoadingState = !0, t._bInitComplete ? new h.Api(t) : null);
        if (n && n.time) {
            var c = pt(t, "aoStateLoadParams", "stateLoadParams", [t, n]);
            if (-1 !== e.inArray(!1, c)) t._bLoadingState = !1;
            else if (0 < (c = t.iStateDuration) && n.time < +new Date - 1e3 * c) t._bLoadingState = !1;
            else if (n.columns && s.length !== n.columns.length) t._bLoadingState = !1;
            else {
                if (t.oLoadedState = e.extend(!0, {}, n), n.length !== r && (l ? l.page.len(n.length) : t._iDisplayLength = n.length), n.start !== r && (null === l ? (t._iDisplayStart = n.start, t.iInitDisplayStart = n.start) : Re(t, n.start / t._iDisplayLength)), n.order !== r && (t.aaSorting = [], e.each(n.order, (function(e, n) {
                        t.aaSorting.push(n[0] >= s.length ? [0, n[1]] : n)
                    }))), n.search !== r && e.extend(t.oPreviousSearch, Ae(n.search)), n.columns) {
                    for (a = 0, o = n.columns.length; a < o; a++) {
                        var u = n.columns[a];
                        u.visible !== r && (l ? l.column(a).visible(u.visible, !1) : s[a].bVisible = u.visible), u.search !== r && e.extend(t.aoPreSearchCols[a], Ae(u.search))
                    }
                    l && l.columns.adjust()
                }
                t._bLoadingState = !1, pt(t, "aoStateLoaded", "stateLoaded", [t, n])
            }
        } else t._bLoadingState = !1;
        i()
    }

    function ot(t) {
        var n = h.settings;
        return -1 !== (t = e.inArray(t, E(n, "nTable"))) ? n[t] : null
    }

    function st(e, n, r, i) {
        if (r = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + r, i && (r += ". For more information about this error, please see http://datatables.net/tn/" + i), n) t.console && console.log && console.log(r);
        else if (n = (n = h.ext).sErrMode || n.errMode, e && pt(e, null, "error", [e, i, r]), "alert" == n) alert(r);
        else {
            if ("throw" == n) throw new Error(r);
            "function" == typeof n && n(e, i, r)
        }
    }

    function lt(t, n, i, a) {
        Array.isArray(i) ? e.each(i, (function(e, r) {
            Array.isArray(r) ? lt(t, n, r[0], r[1]) : lt(t, n, r)
        })) : (a === r && (a = i), n[i] !== r && (t[a] = n[i]))
    }

    function ct(t, n, r) {
        var i, a;
        for (a in n) n.hasOwnProperty(a) && (i = n[a], e.isPlainObject(i) ? (e.isPlainObject(t[a]) || (t[a] = {}), e.extend(!0, t[a], i)) : r && "data" !== a && "aaData" !== a && Array.isArray(i) ? t[a] = i.slice() : t[a] = i);
        return t
    }

    function ut(t, n, r) {
        e(t).on("click.DT", n, (function(n) {
            e(t).trigger("blur"), r(n)
        })).on("keypress.DT", n, (function(e) {
            13 === e.which && (e.preventDefault(), r(e))
        })).on("selectstart.DT", (function() {
            return !1
        }))
    }

    function dt(e, t, n, r) {
        n && e[t].push({
            fn: n,
            sName: r
        })
    }

    function pt(t, n, r, i) {
        var a = [];
        return n && (a = e.map(t[n].slice().reverse(), (function(e, n) {
            return e.fn.apply(t.oInstance, i)
        }))), null !== r && (n = e.Event(r + ".dt"), (r = e(t.nTable)).trigger(n, i), 0 === r.parents("body").length && e("body").trigger(n, i), a.push(n.result)), a
    }

    function ft(e) {
        var t = e._iDisplayStart,
            n = e.fnDisplayEnd(),
            r = e._iDisplayLength;
        n <= t && (t = n - r), t -= t % r, e._iDisplayStart = t = -1 === r || t < 0 ? 0 : t
    }

    function ht(t, n) {
        t = t.renderer;
        var r = h.ext.renderer[n];
        return e.isPlainObject(t) && t[n] ? r[t[n]] || r._ : "string" == typeof t && r[t] || r._
    }

    function mt(e) {
        return e.oFeatures.bServerSide ? "ssp" : e.ajax || e.sAjaxSource ? "ajax" : "dom"
    }

    function gt(t, n) {
        var r;
        return Array.isArray(t) ? e.map(t, (function(e) {
            return gt(e, n)
        })) : "number" == typeof t ? [n[t]] : (r = e.map(n, (function(e, t) {
            return e.nTable
        })), e(r).filter(t).map((function(t) {
            var i = e.inArray(this, r);
            return n[i]
        })).toArray())
    }

    function vt(e, t, n) {
        var r, i;
        n && (r = new Ct(e)).one("draw", (function() {
            n(r.ajax.json())
        })), "ssp" == mt(e) ? le(e, t) : ($e(e, !0), (i = e.jqXHR) && 4 !== i.readyState && i.abort(), pe(e, [], (function(n) {
            Z(e);
            for (var r = ge(e, n), i = 0, a = r.length; i < a; i++) B(e, r[i]);
            le(e, t), $e(e, !1)
        })))
    }

    function yt(e, t, n, i, a) {
        for (var o, s, l, c, u = [], p = typeof t, f = 0, h = (t = t && "string" != p && "function" != p && t.length !== r ? t : [t]).length; f < h; f++)
            for (l = 0, c = (s = t[f] && t[f].split && !t[f].match(/[\[\(:]/) ? t[f].split(",") : [t[f]]).length; l < c; l++)(o = n("string" == typeof s[l] ? s[l].trim() : s[l])) && o.length && (u = u.concat(o));
        var m = d.selector[e];
        if (m.length)
            for (f = 0, h = m.length; f < h; f++) u = m[f](i, a, u);
        return T(u)
    }

    function bt(t) {
        return (t = t || {}).filter && t.search === r && (t.search = t.filter), e.extend({
            search: "none",
            order: "current",
            page: "all"
        }, t)
    }

    function wt(e) {
        for (var t = 0, n = e.length; t < n; t++)
            if (0 < e[t].length) return e[0] = e[t], e[0].length = 1, e.length = 1, e.context = [e.context[t]], e;
        return e.length = 0, e
    }

    function xt(t, n) {
        var r = t.context;
        if (r.length && t.length && (o = r[0].aoData[t[0]])._details) {
            (o._detailsShow = n) ? (o._details.insertAfter(o.nTr), e(o.nTr).addClass("dt-hasChild")) : (o._details.detach(), e(o.nTr).removeClass("dt-hasChild")), pt(r[0], null, "childRow", [n, t.row(t[0])]);
            var i = r[0],
                a = new Ct(i),
                o = (n = "draw" + (o = ".dt.DT_details"), t = "column-sizing" + o, "destroy" + o),
                s = i.aoData;
            a.off(n + " " + t + " " + o), E(s, "_details").length > 0 && (a.on(n, (function(e, t) {
                i === t && a.rows({
                    page: "current"
                }).eq(0).each((function(e) {
                    var t = s[e];
                    t._detailsShow && t._details.insertAfter(t.nTr)
                }))
            })), a.on(t, (function(e, t, n, r) {
                if (i === t)
                    for (var a, o = $(t), l = 0, c = s.length; l < c; l++)(a = s[l])._details && a._details.children("td[colspan]").attr("colspan", o)
            })), a.on(o, (function(e, t) {
                if (i === t)
                    for (var n = 0, r = s.length; n < r; n++) s[n]._details && At(a, n)
            }))), Dt(r)
        }
    }

    function St(e, t, n, r, i) {
        for (var a = [], o = 0, s = i.length; o < s; o++) a.push(V(e, i[o], t));
        return a
    }
    var Et = [],
        Tt = Array.prototype,
        Ct = function(t, n) {
            if (!(this instanceof Ct)) return new Ct(t, n);

            function r(t) {
                var n, r, a, o;
                a = h.settings, o = e.map(a, (function(e, t) {
                    return e.nTable
                })), (t = t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? -1 !== (n = e.inArray(t, o)) ? [a[n]] : null : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? r = e(t) : t instanceof e && (r = t), r ? r.map((function(t) {
                    return -1 !== (n = e.inArray(this, o)) ? a[n] : null
                })).toArray() : void 0) : []) && i.push.apply(i, t)
            }
            var i = [];
            if (Array.isArray(t))
                for (var a = 0, o = t.length; a < o; a++) r(t[a]);
            else r(t);
            this.context = T(i), n && e.merge(this, n), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Ct.extend(this, this, Et)
        },
        _t = (h.Api = Ct, e.extend(Ct.prototype, {
            any: function() {
                return 0 !== this.count()
            },
            concat: Tt.concat,
            context: [],
            count: function() {
                return this.flatten().length
            },
            each: function(e) {
                for (var t = 0, n = this.length; t < n; t++) e.call(this, this[t], t, this);
                return this
            },
            eq: function(e) {
                var t = this.context;
                return t.length > e ? new Ct(t[e], this[e]) : null
            },
            filter: function(e) {
                var t = [];
                if (Tt.filter) t = Tt.filter.call(this, e, this);
                else
                    for (var n = 0, r = this.length; n < r; n++) e.call(this, this[n], n, this) && t.push(this[n]);
                return new Ct(this.context, t)
            },
            flatten: function() {
                var e = [];
                return new Ct(this.context, e.concat.apply(e, this.toArray()))
            },
            join: Tt.join,
            indexOf: Tt.indexOf || function(e, t) {
                for (var n = t || 0, r = this.length; n < r; n++)
                    if (this[n] === e) return n;
                return -1
            },
            iterator: function(e, t, n, i) {
                var a, o, s, l, c, u, d, p, f = [],
                    h = this.context,
                    m = this.selector;
                for ("string" == typeof e && (i = n, n = t, t = e, e = !1), o = 0, s = h.length; o < s; o++) {
                    var g = new Ct(h[o]);
                    if ("table" === t)(a = n.call(g, h[o], o)) !== r && f.push(a);
                    else if ("columns" === t || "rows" === t)(a = n.call(g, h[o], this[o], o)) !== r && f.push(a);
                    else if ("column" === t || "column-rows" === t || "row" === t || "cell" === t)
                        for (d = this[o], "column-rows" === t && (u = _t(h[o], m.opts)), l = 0, c = d.length; l < c; l++) p = d[l], (a = "cell" === t ? n.call(g, h[o], p.row, p.column, o, l) : n.call(g, h[o], p, o, l, u)) !== r && f.push(a)
                }
                return f.length || i ? ((e = (i = new Ct(h, e ? f.concat.apply([], f) : f)).selector).rows = m.rows, e.cols = m.cols, e.opts = m.opts, i) : this
            },
            lastIndexOf: Tt.lastIndexOf || function(e, t) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(e) {
                var t = [];
                if (Tt.map) t = Tt.map.call(this, e, this);
                else
                    for (var n = 0, r = this.length; n < r; n++) t.push(e.call(this, this[n], n));
                return new Ct(this.context, t)
            },
            pluck: function(e) {
                var t = h.util.get(e);
                return this.map((function(e) {
                    return t(e)
                }))
            },
            pop: Tt.pop,
            push: Tt.push,
            reduce: Tt.reduce || function(e, t) {
                return P(this, e, t, 0, this.length, 1)
            },
            reduceRight: Tt.reduceRight || function(e, t) {
                return P(this, e, t, this.length - 1, -1, -1)
            },
            reverse: Tt.reverse,
            selector: null,
            shift: Tt.shift,
            slice: function() {
                return new Ct(this.context, this)
            },
            sort: Tt.sort,
            splice: Tt.splice,
            toArray: function() {
                return Tt.slice.call(this)
            },
            to$: function() {
                return e(this)
            },
            toJQuery: function() {
                return e(this)
            },
            unique: function() {
                return new Ct(this.context, T(this))
            },
            unshift: Tt.unshift
        }), Ct.extend = function(e, t, n) {
            if (n.length && t && (t instanceof Ct || t.__dt_wrapper))
                for (var r, i = 0, a = n.length; i < a; i++) t[(r = n[i]).name] = "function" === r.type ? function(e, t, n) {
                    return function() {
                        var r = t.apply(e, arguments);
                        return Ct.extend(r, r, n.methodExt), r
                    }
                }(e, r.val, r) : "object" === r.type ? {} : r.val, t[r.name].__dt_wrapper = !0, Ct.extend(e, t[r.name], r.propExt)
        }, Ct.register = p = function(t, n) {
            if (Array.isArray(t))
                for (var r = 0, i = t.length; r < i; r++) Ct.register(t[r], n);
            else
                for (var a = t.split("."), o = Et, s = 0, l = a.length; s < l; s++) {
                    var c, u, d = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n].name === t) return e[n];
                        return null
                    }(o, u = (c = -1 !== a[s].indexOf("()")) ? a[s].replace("()", "") : a[s]);
                    d || o.push(d = {
                        name: u,
                        val: {},
                        methodExt: [],
                        propExt: [],
                        type: "object"
                    }), s === l - 1 ? (d.val = n, d.type = "function" == typeof n ? "function" : e.isPlainObject(n) ? "object" : "other") : o = c ? d.methodExt : d.propExt
                }
        }, Ct.registerPlural = f = function(e, t, n) {
            Ct.register(e, n), Ct.register(t, (function() {
                var e = n.apply(this, arguments);
                return e === this ? this : e instanceof Ct ? e.length ? Array.isArray(e[0]) ? new Ct(e.context, e[0]) : e[0] : r : e
            }))
        }, p("tables()", (function(e) {
            return e !== r && null !== e ? new Ct(gt(e, this.context)) : this
        })), p("table()", (function(e) {
            var t = (e = this.tables(e)).context;
            return t.length ? new Ct(t[0]) : e
        })), f("tables().nodes()", "table().node()", (function() {
            return this.iterator("table", (function(e) {
                return e.nTable
            }), 1)
        })), f("tables().body()", "table().body()", (function() {
            return this.iterator("table", (function(e) {
                return e.nTBody
            }), 1)
        })), f("tables().header()", "table().header()", (function() {
            return this.iterator("table", (function(e) {
                return e.nTHead
            }), 1)
        })), f("tables().footer()", "table().footer()", (function() {
            return this.iterator("table", (function(e) {
                return e.nTFoot
            }), 1)
        })), f("tables().containers()", "table().container()", (function() {
            return this.iterator("table", (function(e) {
                return e.nTableWrapper
            }), 1)
        })), p("draw()", (function(e) {
            return this.iterator("table", (function(t) {
                "page" === e ? se(t) : le(t, !1 === (e = "string" == typeof e ? "full-hold" !== e : e))
            }))
        })), p("page()", (function(e) {
            return e === r ? this.page.info().page : this.iterator("table", (function(t) {
                Re(t, e)
            }))
        })), p("page.info()", (function(e) {
            var t, n, i, a, o;
            return 0 === this.context.length ? r : (n = (t = this.context[0])._iDisplayStart, i = t.oFeatures.bPaginate ? t._iDisplayLength : -1, a = t.fnRecordsDisplay(), {
                page: (o = -1 === i) ? 0 : Math.floor(n / i),
                pages: o ? 1 : Math.ceil(a / i),
                start: n,
                end: t.fnDisplayEnd(),
                length: i,
                recordsTotal: t.fnRecordsTotal(),
                recordsDisplay: a,
                serverSide: "ssp" === mt(t)
            })
        })), p("page.len()", (function(e) {
            return e === r ? 0 !== this.context.length ? this.context[0]._iDisplayLength : r : this.iterator("table", (function(t) {
                Oe(t, e)
            }))
        })), p("ajax.json()", (function() {
            var e = this.context;
            if (0 < e.length) return e[0].json
        })), p("ajax.params()", (function() {
            var e = this.context;
            if (0 < e.length) return e[0].oAjaxData
        })), p("ajax.reload()", (function(e, t) {
            return this.iterator("table", (function(n) {
                vt(n, !1 === t, e)
            }))
        })), p("ajax.url()", (function(t) {
            var n = this.context;
            return t === r ? 0 === n.length ? r : (n = n[0]).ajax ? e.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource : this.iterator("table", (function(n) {
                e.isPlainObject(n.ajax) ? n.ajax.url = t : n.ajax = t
            }))
        })), p("ajax.url().load()", (function(e, t) {
            return this.iterator("table", (function(n) {
                vt(n, !1 === t, e)
            }))
        })), function(t, n) {
            var r, i = [],
                a = t.aiDisplay,
                o = t.aiDisplayMaster,
                s = n.search,
                c = n.order;
            n = n.page;
            if ("ssp" == mt(t)) return "removed" === s ? [] : l(0, o.length);
            if ("current" == n)
                for (d = t._iDisplayStart, p = t.fnDisplayEnd(); d < p; d++) i.push(a[d]);
            else if ("current" == c || "applied" == c) {
                if ("none" == s) i = o.slice();
                else if ("applied" == s) i = a.slice();
                else if ("removed" == s) {
                    for (var u = {}, d = 0, p = a.length; d < p; d++) u[a[d]] = null;
                    i = e.map(o, (function(e) {
                        return u.hasOwnProperty(e) ? null : e
                    }))
                }
            } else if ("index" == c || "original" == c)
                for (d = 0, p = t.aoData.length; d < p; d++)("none" == s || -1 === (r = e.inArray(d, a)) && "removed" == s || 0 <= r && "applied" == s) && i.push(d);
            return i
        }),
        Dt = (p("rows()", (function(t, n) {
            t === r ? t = "" : e.isPlainObject(t) && (n = t, t = ""), n = bt(n);
            var a = this.iterator("table", (function(a) {
                return yt("row", t, (function(t) {
                    var n = i(t),
                        a = o.aoData;
                    if (null !== n && !l) return [n];
                    if (u = u || _t(o, l), null !== n && -1 !== e.inArray(n, u)) return [n];
                    if (null === t || t === r || "" === t) return u;
                    if ("function" == typeof t) return e.map(u, (function(e) {
                        var n = a[e];
                        return t(e, n._aData, n.nTr) ? e : null
                    }));
                    if (t.nodeName) return n = t._DT_RowIndex, d = t._DT_CellIndex, n !== r ? a[n] && a[n].nTr === t ? [n] : [] : d ? a[d.row] && a[d.row].nTr === t.parentNode ? [d.row] : [] : (n = e(t).closest("*[data-dt-row]")).length ? [n.data("dt-row")] : [];
                    if ("string" == typeof t && "#" === t.charAt(0)) {
                        var d = o.aIds[t.replace(/^#/, "")];
                        if (d !== r) return [d.idx]
                    }
                    return n = c(s(o.aoData, u, "nTr")), e(n).filter(t).map((function() {
                        return this._DT_RowIndex
                    })).toArray()
                }), o = a, l = n);
                var o, l, u
            }), 1);
            return a.selector.rows = t, a.selector.opts = n, a
        })), p("rows().nodes()", (function() {
            return this.iterator("row", (function(e, t) {
                return e.aoData[t].nTr || r
            }), 1)
        })), p("rows().data()", (function() {
            return this.iterator(!0, "rows", (function(e, t) {
                return s(e.aoData, t, "_aData")
            }), 1)
        })), f("rows().cache()", "row().cache()", (function(e) {
            return this.iterator("row", (function(t, n) {
                return t = t.aoData[n], "search" === e ? t._aFilterData : t._aSortData
            }), 1)
        })), f("rows().invalidate()", "row().invalidate()", (function(e) {
            return this.iterator("row", (function(t, n) {
                te(t, n, e)
            }))
        })), f("rows().indexes()", "row().index()", (function() {
            return this.iterator("row", (function(e, t) {
                return t
            }), 1)
        })), f("rows().ids()", "row().id()", (function(e) {
            for (var t = [], n = this.context, r = 0, i = n.length; r < i; r++)
                for (var a = 0, o = this[r].length; a < o; a++) {
                    var s = n[r].rowIdFn(n[r].aoData[this[r][a]]._aData);
                    t.push((!0 === e ? "#" : "") + s)
                }
            return new Ct(n, t)
        })), f("rows().remove()", "row().remove()", (function() {
            var e = this;
            return this.iterator("row", (function(t, n, i) {
                var a, o, s, l, c, u, d = t.aoData,
                    p = d[n];
                for (d.splice(n, 1), a = 0, o = d.length; a < o; a++)
                    if (u = (c = d[a]).anCells, null !== c.nTr && (c.nTr._DT_RowIndex = a), null !== u)
                        for (s = 0, l = u.length; s < l; s++) u[s]._DT_CellIndex.row = a;
                ee(t.aiDisplayMaster, n), ee(t.aiDisplay, n), ee(e[i], n, !1), 0 < t._iRecordsDisplay && t._iRecordsDisplay--, ft(t), (i = t.rowIdFn(p._aData)) !== r && delete t.aIds[i]
            })), this.iterator("table", (function(e) {
                for (var t = 0, n = e.aoData.length; t < n; t++) e.aoData[t].idx = t
            })), this
        })), p("rows.add()", (function(t) {
            var n = this.iterator("table", (function(e) {
                    for (var n, r = [], i = 0, a = t.length; i < a; i++)(n = t[i]).nodeName && "TR" === n.nodeName.toUpperCase() ? r.push(W(e, n)[0]) : r.push(B(e, n));
                    return r
                }), 1),
                r = this.rows(-1);
            return r.pop(), e.merge(r, n), r
        })), p("row()", (function(e, t) {
            return wt(this.rows(e, t))
        })), p("row().data()", (function(e) {
            var t, n = this.context;
            return e === r ? n.length && this.length ? n[0].aoData[this[0]]._aData : r : ((t = n[0].aoData[this[0]])._aData = e, Array.isArray(e) && t.nTr && t.nTr.id && K(n[0].rowId)(e, t.nTr.id), te(n[0], this[0], "data"), this)
        })), p("row().node()", (function() {
            var e = this.context;
            return e.length && this.length && e[0].aoData[this[0]].nTr || null
        })), p("row.add()", (function(t) {
            t instanceof e && t.length && (t = t[0]);
            var n = this.iterator("table", (function(e) {
                return t.nodeName && "TR" === t.nodeName.toUpperCase() ? W(e, t)[0] : B(e, t)
            }));
            return this.row(n[0])
        })), e(n).on("plugin-init.dt", (function(t, n) {
            var r = new Ct(n),
                i = "stateSaveParams." + (o = "on-plugin-init"),
                a = "destroy. " + o,
                o = (r.on(i, (function(e, t, n) {
                    for (var r = t.rowIdFn, i = t.aoData, a = [], o = 0; o < i.length; o++) i[o]._detailsShow && a.push("#" + r(i[o]._aData));
                    n.childRows = a
                })), r.on(a, (function() {
                    r.off(i + " " + a)
                })), r.state.loaded());
            o && o.childRows && r.rows(e.map(o.childRows, (function(e) {
                return e.replace(/:/g, "\\:")
            }))).every((function() {
                pt(n, null, "requestChild", [this])
            }))
        })), h.util.throttle((function(e) {
            rt(e[0])
        }), 500)),
        At = function(t, n) {
            var i = t.context;
            i.length && (n = i[0].aoData[n !== r ? n : t[0]]) && n._details && (n._details.remove(), n._detailsShow = r, n._details = r, e(n.nTr).removeClass("dt-hasChild"), Dt(i))
        },
        Lt = "row().child",
        Mt = Lt + "()",
        kt = (p(Mt, (function(t, n) {
            var i = this.context;
            return t === r ? i.length && this.length ? i[0].aoData[this[0]]._details : r : (!0 === t ? this.child.show() : !1 === t ? At(this) : i.length && this.length && function(t, n, r, i) {
                var a = [];
                (function n(r, i) {
                    var o;
                    if (Array.isArray(r) || r instanceof e)
                        for (var s = 0, l = r.length; s < l; s++) n(r[s], i);
                    else r.nodeName && "tr" === r.nodeName.toLowerCase() ? a.push(r) : (o = e("<tr><td></td></tr>").addClass(i), e("td", o).addClass(i).html(r)[0].colSpan = $(t), a.push(o[0]))
                })(r, i), n._details && n._details.detach(), n._details = e(a), n._detailsShow && n._details.insertAfter(n.nTr)
            }(i[0], i[0].aoData[this[0]], t, n), this)
        })), p([Lt + ".show()", Mt + ".show()"], (function(e) {
            return xt(this, !0), this
        })), p([Lt + ".hide()", Mt + ".hide()"], (function() {
            return xt(this, !1), this
        })), p([Lt + ".remove()", Mt + ".remove()"], (function() {
            return At(this), this
        })), p(Lt + ".isShown()", (function() {
            var e = this.context;
            return e.length && this.length && e[0].aoData[this[0]]._detailsShow || !1
        })), /^([^:]+):(name|visIdx|visible)$/),
        It = (p("columns()", (function(t, n) {
            t === r ? t = "" : e.isPlainObject(t) && (n = t, t = ""), n = bt(n);
            var a = this.iterator("table", (function(r) {
                return o = t, s = n, c = (a = r).aoColumns, u = E(c, "sName"), d = E(c, "nTh"), yt("column", o, (function(t) {
                    var n, r = i(t);
                    if ("" === t) return l(c.length);
                    if (null !== r) return [0 <= r ? r : c.length + r];
                    if ("function" == typeof t) return n = _t(a, s), e.map(c, (function(e, r) {
                        return t(r, St(a, r, 0, 0, n), d[r]) ? r : null
                    }));
                    var o = "string" == typeof t ? t.match(kt) : "";
                    if (o) switch (o[2]) {
                        case "visIdx":
                        case "visible":
                            var p, f = parseInt(o[1], 10);
                            return f < 0 ? [(p = e.map(c, (function(e, t) {
                                return e.bVisible ? t : null
                            })))[p.length + f]] : [R(a, f)];
                        case "name":
                            return e.map(u, (function(e, t) {
                                return e === o[1] ? t : null
                            }));
                        default:
                            return []
                    }
                    return t.nodeName && t._DT_CellIndex ? [t._DT_CellIndex.column] : (r = e(d).filter(t).map((function() {
                        return e.inArray(this, d)
                    })).toArray()).length || !t.nodeName ? r : (r = e(t).closest("*[data-dt-column]")).length ? [r.data("dt-column")] : []
                }), a, s);
                var a, o, s, c, u, d
            }), 1);
            return a.selector.cols = t, a.selector.opts = n, a
        })), f("columns().header()", "column().header()", (function(e, t) {
            return this.iterator("column", (function(e, t) {
                return e.aoColumns[t].nTh
            }), 1)
        })), f("columns().footer()", "column().footer()", (function(e, t) {
            return this.iterator("column", (function(e, t) {
                return e.aoColumns[t].nTf
            }), 1)
        })), f("columns().data()", "column().data()", (function() {
            return this.iterator("column-rows", St, 1)
        })), f("columns().dataSrc()", "column().dataSrc()", (function() {
            return this.iterator("column", (function(e, t) {
                return e.aoColumns[t].mData
            }), 1)
        })), f("columns().cache()", "column().cache()", (function(e) {
            return this.iterator("column-rows", (function(t, n, r, i, a) {
                return s(t.aoData, a, "search" === e ? "_aFilterData" : "_aSortData", n)
            }), 1)
        })), f("columns().nodes()", "column().nodes()", (function() {
            return this.iterator("column-rows", (function(e, t, n, r, i) {
                return s(e.aoData, i, "anCells", t)
            }), 1)
        })), f("columns().visible()", "column().visible()", (function(t, n) {
            var i = this,
                a = this.iterator("column", (function(n, i) {
                    if (t === r) return n.aoColumns[i].bVisible;
                    var a, o, s = i,
                        l = (i = t, n.aoColumns),
                        c = l[s],
                        u = n.aoData;
                    if (i === r) c.bVisible;
                    else if (c.bVisible !== i) {
                        if (i)
                            for (var d = e.inArray(!0, E(l, "bVisible"), s + 1), p = 0, f = u.length; p < f; p++) o = u[p].nTr, a = u[p].anCells, o && o.insertBefore(a[s], a[d] || null);
                        else e(E(n.aoData, "anCells", s)).detach();
                        c.bVisible = i
                    }
                }));
            return t !== r && this.iterator("table", (function(a) {
                oe(a, a.aoHeader), oe(a, a.aoFooter), a.aiDisplay.length || e(a.nTBody).find("td[colspan]").attr("colspan", $(a)), rt(a), i.iterator("column", (function(e, r) {
                    pt(e, null, "column-visibility", [e, r, t, n])
                })), n !== r && !n || i.columns.adjust()
            })), a
        })), f("columns().indexes()", "column().index()", (function(e) {
            return this.iterator("column", (function(t, n) {
                return "visible" === e ? F(t, n) : n
            }), 1)
        })), p("columns.adjust()", (function() {
            return this.iterator("table", (function(e) {
                N(e)
            }), 1)
        })), p("column.index()", (function(e, t) {
            var n;
            if (0 !== this.context.length) return n = this.context[0], "fromVisible" === e || "toData" === e ? R(n, t) : "fromData" === e || "toVisible" === e ? F(n, t) : void 0
        })), p("column()", (function(e, t) {
            return wt(this.columns(e, t))
        })), p("cells()", (function(t, n, i) {
            var a, o, l, u, d, p, f;
            return e.isPlainObject(t) && (t.row === r ? (i = t, t = null) : (i = n, n = null)), e.isPlainObject(n) && (i = n, n = null), null === n || n === r ? this.iterator("table", (function(n) {
                return a = n, n = t, o = bt(i), g = a.aoData, v = _t(a, o), y = c(s(g, v, "anCells")), b = e(C([], y)), w = a.aoColumns.length, yt("cell", n, (function(t) {
                    var n, i = "function" == typeof t;
                    if (null === t || t === r || i) {
                        for (u = [], d = 0, p = v.length; d < p; d++)
                            for (l = v[d], f = 0; f < w; f++) h = {
                                row: l,
                                column: f
                            }, (!i || (m = g[l], t(h, V(a, l, f), m.anCells ? m.anCells[f] : null))) && u.push(h);
                        return u
                    }
                    return e.isPlainObject(t) ? t.column !== r && t.row !== r && -1 !== e.inArray(t.row, v) ? [t] : [] : (n = b.filter(t).map((function(e, t) {
                        return {
                            row: t._DT_CellIndex.row,
                            column: t._DT_CellIndex.column
                        }
                    })).toArray()).length || !t.nodeName ? n : (m = e(t).closest("*[data-dt-row]")).length ? [{
                        row: m.data("dt-row"),
                        column: m.data("dt-column")
                    }] : []
                }), a, o);
                var a, o, l, u, d, p, f, h, m, g, v, y, b, w
            })) : (f = i ? {
                page: i.page,
                order: i.order,
                search: i.search
            } : {}, a = this.columns(n, f), o = this.rows(t, f), f = this.iterator("table", (function(e, t) {
                var n = [];
                for (l = 0, u = o[t].length; l < u; l++)
                    for (d = 0, p = a[t].length; d < p; d++) n.push({
                        row: o[t][l],
                        column: a[t][d]
                    });
                return n
            }), 1), f = i && i.selected ? this.cells(f, i) : f, e.extend(f.selector, {
                cols: n,
                rows: t,
                opts: i
            }), f)
        })), f("cells().nodes()", "cell().node()", (function() {
            return this.iterator("cell", (function(e, t, n) {
                return (e = e.aoData[t]) && e.anCells ? e.anCells[n] : r
            }), 1)
        })), p("cells().data()", (function() {
            return this.iterator("cell", (function(e, t, n) {
                return V(e, t, n)
            }), 1)
        })), f("cells().cache()", "cell().cache()", (function(e) {
            return e = "search" === e ? "_aFilterData" : "_aSortData", this.iterator("cell", (function(t, n, r) {
                return t.aoData[n][e][r]
            }), 1)
        })), f("cells().render()", "cell().render()", (function(e) {
            return this.iterator("cell", (function(t, n, r) {
                return V(t, n, r, e)
            }), 1)
        })), f("cells().indexes()", "cell().index()", (function() {
            return this.iterator("cell", (function(e, t, n) {
                return {
                    row: t,
                    column: n,
                    columnVisible: F(e, n)
                }
            }), 1)
        })), f("cells().invalidate()", "cell().invalidate()", (function(e) {
            return this.iterator("cell", (function(t, n, r) {
                te(t, n, e, r)
            }))
        })), p("cell()", (function(e, t, n) {
            return wt(this.cells(e, t, n))
        })), p("cell().data()", (function(e) {
            var t = this.context,
                n = this[0];
            return e === r ? t.length && n.length ? V(t[0], n[0].row, n[0].column) : r : (G(t[0], n[0].row, n[0].column, e), te(t[0], n[0].row, "data", n[0].column), this)
        })), p("order()", (function(e, t) {
            var n = this.context;
            return e === r ? 0 !== n.length ? n[0].aaSorting : r : ("number" == typeof e ? e = [
                [e, t]
            ] : e.length && !Array.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", (function(t) {
                t.aaSorting = e.slice()
            })))
        })), p("order.listener()", (function(e, t, n) {
            return this.iterator("table", (function(r) {
                et(r, e, t, n)
            }))
        })), p("order.fixed()", (function(t) {
            var n;
            return t ? this.iterator("table", (function(n) {
                n.aaSortingFixed = e.extend(!0, {}, t)
            })) : (n = (n = this.context).length ? n[0].aaSortingFixed : r, Array.isArray(n) ? {
                pre: n
            } : n)
        })), p(["columns().order()", "column().order()"], (function(t) {
            var n = this;
            return this.iterator("table", (function(r, i) {
                var a = [];
                e.each(n[i], (function(e, n) {
                    a.push([n, t])
                })), r.aaSorting = a
            }))
        })), p("search()", (function(t, n, i, a) {
            var o = this.context;
            return t === r ? 0 !== o.length ? o[0].oPreviousSearch.sSearch : r : this.iterator("table", (function(r) {
                r.oFeatures.bFilter && ye(r, e.extend({}, r.oPreviousSearch, {
                    sSearch: t + "",
                    bRegex: null !== n && n,
                    bSmart: null === i || i,
                    bCaseInsensitive: null === a || a
                }), 1)
            }))
        })), f("columns().search()", "column().search()", (function(t, n, i, a) {
            return this.iterator("column", (function(o, s) {
                var l = o.aoPreSearchCols;
                if (t === r) return l[s].sSearch;
                o.oFeatures.bFilter && (e.extend(l[s], {
                    sSearch: t + "",
                    bRegex: null !== n && n,
                    bSmart: null === i || i,
                    bCaseInsensitive: null === a || a
                }), ye(o, o.oPreviousSearch, 1))
            }))
        })), p("state()", (function() {
            return this.context.length ? this.context[0].oSavedState : null
        })), p("state.clear()", (function() {
            return this.iterator("table", (function(e) {
                e.fnStateSaveCallback.call(e.oInstance, e, {})
            }))
        })), p("state.loaded()", (function() {
            return this.context.length ? this.context[0].oLoadedState : null
        })), p("state.save()", (function() {
            return this.iterator("table", (function(e) {
                rt(e)
            }))
        })), h.use = function(r, i) {
            "lib" === i || r.fn ? e = r : "win" != i && !r.document || (n = (t = r).document)
        }, h.factory = function(r, i) {
            var a = !1;
            return r && r.document && (n = (t = r).document), i && i.fn && i.fn.jquery && (e = i, a = !0), a
        }, h.versionCheck = h.fnVersionCheck = function(e) {
            for (var t, n, r = h.version.split("."), i = e.split("."), a = 0, o = i.length; a < o; a++)
                if ((t = parseInt(r[a], 10) || 0) !== (n = parseInt(i[a], 10) || 0)) return n < t;
            return !0
        }, h.isDataTable = h.fnIsDataTable = function(t) {
            var n = e(t).get(0),
                r = !1;
            return t instanceof h.Api || (e.each(h.settings, (function(t, i) {
                var a = i.nScrollHead ? e("table", i.nScrollHead)[0] : null,
                    o = i.nScrollFoot ? e("table", i.nScrollFoot)[0] : null;
                i.nTable !== n && a !== n && o !== n || (r = !0)
            })), r)
        }, h.tables = h.fnTables = function(t) {
            var n = !1,
                r = (e.isPlainObject(t) && (n = t.api, t = t.visible), e.map(h.settings, (function(n) {
                    if (!t || e(n.nTable).is(":visible")) return n.nTable
                })));
            return n ? new Ct(r) : r
        }, h.camelToHungarian = D, p("$()", (function(t, n) {
            return n = this.rows(n).nodes(), n = e(n), e([].concat(n.filter(t).toArray(), n.find(t).toArray()))
        })), e.each(["on", "one", "off"], (function(t, n) {
            p(n + "()", (function() {
                var t = Array.prototype.slice.call(arguments),
                    r = (t[0] = e.map(t[0].split(/\s/), (function(e) {
                        return e.match(/\.dt\b/) ? e : e + ".dt"
                    })).join(" "), e(this.tables().nodes()));
                return r[n].apply(r, t), this
            }))
        })), p("clear()", (function() {
            return this.iterator("table", (function(e) {
                Z(e)
            }))
        })), p("settings()", (function() {
            return new Ct(this.context, this.context)
        })), p("init()", (function() {
            var e = this.context;
            return e.length ? e[0].oInit : null
        })), p("data()", (function() {
            return this.iterator("table", (function(e) {
                return E(e.aoData, "_aData")
            })).flatten()
        })), p("destroy()", (function(n) {
            return n = n || !1, this.iterator("table", (function(r) {
                var i, a = r.oClasses,
                    o = r.nTable,
                    s = r.nTBody,
                    l = r.nTHead,
                    c = r.nTFoot,
                    u = e(o),
                    d = (s = e(s), e(r.nTableWrapper)),
                    p = e.map(r.aoData, (function(e) {
                        return e.nTr
                    }));
                r.bDestroying = !0, pt(r, "aoDestroyCallback", "destroy", [r]), n || new Ct(r).columns().visible(!0), d.off(".DT").find(":not(tbody *)").off(".DT"), e(t).off(".DT-" + r.sInstance), o != l.parentNode && (u.children("thead").detach(), u.append(l)), c && o != c.parentNode && (u.children("tfoot").detach(), u.append(c)), r.aaSorting = [], r.aaSortingFixed = [], tt(r), e(p).removeClass(r.asStripeClasses.join(" ")), e("th, td", l).removeClass(a.sSortable + " " + a.sSortableAsc + " " + a.sSortableDesc + " " + a.sSortableNone), s.children().detach(), s.append(p), c = r.nTableWrapper.parentNode, u[l = n ? "remove" : "detach"](), d[l](), !n && c && (c.insertBefore(o, r.nTableReinsertBefore), u.css("width", r.sDestroyWidth).removeClass(a.sTable), i = r.asDestroyStripes.length) && s.children().each((function(t) {
                    e(this).addClass(r.asDestroyStripes[t % i])
                })), p = e.inArray(r, h.settings); - 1 !== p && h.settings.splice(p, 1)
            }))
        })), e.each(["column", "row", "cell"], (function(e, t) {
            p(t + "s().every()", (function(e) {
                var n = this.selector.opts,
                    i = this;
                return this.iterator(t, (function(a, o, s, l, c) {
                    e.call(i[t](o, "cell" === t ? s : n, "cell" === t ? n : r), o, s, l, c)
                }))
            }))
        })), p("i18n()", (function(t, n, i) {
            var a = this.context[0];
            return (t = J(t)(a.oLanguage)) === r && (t = n), (t = i !== r && e.isPlainObject(t) ? t[i] !== r ? t[i] : t._ : t).replace("%d", i)
        })), h.version = "1.13.4", h.settings = [], h.models = {}, h.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0,
            return: !1
        }, h.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null,
            idx: -1
        }, h.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, h.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(e) {
                try {
                    return JSON.parse((-1 === e.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + e.sInstance + "_" + location.pathname))
                } catch (e) {
                    return {}
                }
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(e, t) {
                try {
                    (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + e.sInstance + "_" + location.pathname, JSON.stringify(t))
                } catch (e) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: e.extend({}, h.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId"
        }, _(h.defaults), h.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, _(h.defaults.column), h.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1,
                bBounding: !1,
                barWidth: 0
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            jqXHR: null,
            json: r,
            oAjaxData: r,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == mt(this) ? +this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return "ssp" == mt(this) ? +this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                var e = this._iDisplayLength,
                    t = this._iDisplayStart,
                    n = t + e,
                    r = this.aiDisplay.length,
                    i = this.oFeatures,
                    a = i.bPaginate;
                return i.bServerSide ? !1 === a || -1 === e ? t + r : Math.min(t + e, this._iRecordsDisplay) : !a || r < n || -1 === e ? r : n
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null
        }, h.ext = d = {
            buttons: {},
            classes: {},
            builder: "-source-",
            errMode: "alert",
            feature: [],
            search: [],
            selector: {
                cell: [],
                column: [],
                row: []
            },
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: h.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: h.version
        }, e.extend(d, {
            afnFiltering: d.search,
            aTypes: d.type.detect,
            ofnSearch: d.type.search,
            oSort: d.type.order,
            afnSortData: d.order,
            aoFeatures: d.feature,
            oApi: d.internal,
            oStdClasses: d.classes,
            oPagination: d.pager
        }), e.extend(h.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_desc_disabled",
            sSortableDesc: "sorting_asc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        }), h.ext.pager);

    function Pt(e, t) {
        var n = [],
            r = It.numbers_length,
            i = Math.floor(r / 2);
        return t <= r ? n = l(0, t) : e <= i ? ((n = l(0, r - 2)).push("ellipsis"), n.push(t - 1)) : ((t - 1 - i <= e ? n = l(t - (r - 2), t) : ((n = l(e - i + 2, e + i - 1)).push("ellipsis"), n.push(t - 1), n)).splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
    }

    function Ot(e, t, n, r) {
        var i;
        return 0 === e || e && "-" !== e ? "number" == (i = typeof e) || "bigint" == i ? e : +(e = (e = t ? S(e, t) : e).replace && (n && (e = e.replace(n, "")), r) ? e.replace(r, "") : e) : -1 / 0
    }

    function jt(t) {
        e.each({
            num: function(e) {
                return Ot(e, t)
            },
            "num-fmt": function(e) {
                return Ot(e, t, w)
            },
            "html-num": function(e) {
                return Ot(e, t, v)
            },
            "html-num-fmt": function(e) {
                return Ot(e, t, v, w)
            }
        }, (function(e, n) {
            d.type.order[e + t + "-pre"] = n, e.match(/^html\-/) && (d.type.search[e + t] = d.type.search.html)
        }))
    }

    function Nt(e) {
        return "string" == typeof(e = Array.isArray(e) ? e.join(",") : e) ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e
    }

    function Rt(e, n, r, i, a) {
        return t.moment ? e[n](a) : t.luxon ? e[r](a) : i ? e[i](a) : e
    }
    e.extend(It, {
        simple: function(e, t) {
            return ["previous", "next"]
        },
        full: function(e, t) {
            return ["first", "previous", "next", "last"]
        },
        numbers: function(e, t) {
            return [Pt(e, t)]
        },
        simple_numbers: function(e, t) {
            return ["previous", Pt(e, t), "next"]
        },
        full_numbers: function(e, t) {
            return ["first", "previous", Pt(e, t), "next", "last"]
        },
        first_last_numbers: function(e, t) {
            return ["first", Pt(e, t), "last"]
        },
        _numbers: Pt,
        numbers_length: 7
    }), e.extend(!0, h.ext.renderer, {
        pageButton: {
            _: function(t, i, a, o, s, l) {
                var c, u, d, p = t.oClasses,
                    f = t.oLanguage.oPaginate,
                    h = t.oLanguage.oAria.paginate || {};
                try {
                    d = e(i).find(n.activeElement).data("dt-idx")
                } catch (i) {}(function n(r, i) {
                    for (var o, d, m, g = p.sPageButtonDisabled, v = function(e) {
                            Re(t, e.data.action, !0)
                        }, y = 0, b = i.length; y < b; y++)
                        if (o = i[y], Array.isArray(o)) {
                            var w = e("<" + (o.DT_el || "div") + "/>").appendTo(r);
                            n(w, o)
                        } else {
                            switch (c = null, u = o, d = t.iTabIndex, o) {
                                case "ellipsis":
                                    r.append('<span class="ellipsis">&#x2026;</span>');
                                    break;
                                case "first":
                                    c = f.sFirst, 0 === s && (d = -1, u += " " + g);
                                    break;
                                case "previous":
                                    c = f.sPrevious, 0 === s && (d = -1, u += " " + g);
                                    break;
                                case "next":
                                    c = f.sNext, 0 !== l && s !== l - 1 || (d = -1, u += " " + g);
                                    break;
                                case "last":
                                    c = f.sLast, 0 !== l && s !== l - 1 || (d = -1, u += " " + g);
                                    break;
                                default:
                                    c = t.fnFormatNumber(o + 1), u = s === o ? p.sPageButtonActive : ""
                            }
                            null !== c && (w = t.oInit.pagingTag || "a", m = -1 !== u.indexOf(g), ut(e("<" + w + ">", {
                                class: p.sPageButton + " " + u,
                                "aria-controls": t.sTableId,
                                "aria-disabled": m ? "true" : null,
                                "aria-label": h[o],
                                "aria-role": "link",
                                "aria-current": u === p.sPageButtonActive ? "page" : null,
                                "data-dt-idx": o,
                                tabindex: d,
                                id: 0 === a && "string" == typeof o ? t.sTableId + "_" + o : null
                            }).html(c).appendTo(r), {
                                action: o
                            }, v))
                        }
                })(e(i).empty(), o), d !== r && e(i).find("[data-dt-idx=" + d + "]").trigger("focus")
            }
        }
    }), e.extend(h.ext.type.detect, [function(e, t) {
        return a(e, t = t.oLanguage.sDecimal) ? "num" + t : null
    }, function(e, t) {
        var n;
        return (!e || e instanceof Date || y.test(e)) && (null !== (n = Date.parse(e)) && !isNaN(n) || x(e)) ? "date" : null
    }, function(e, t) {
        return a(e, t = t.oLanguage.sDecimal, !0) ? "num-fmt" + t : null
    }, function(e, t) {
        return o(e, t = t.oLanguage.sDecimal) ? "html-num" + t : null
    }, function(e, t) {
        return o(e, t = t.oLanguage.sDecimal, !0) ? "html-num-fmt" + t : null
    }, function(e, t) {
        return x(e) || "string" == typeof e && -1 !== e.indexOf("<") ? "html" : null
    }]), e.extend(h.ext.type.search, {
        html: function(e) {
            return x(e) ? e : "string" == typeof e ? e.replace(g, " ").replace(v, "") : ""
        },
        string: function(e) {
            return x(e) || "string" != typeof e ? e : e.replace(g, " ")
        }
    }), e.extend(d.type.order, {
        "date-pre": function(e) {
            return e = Date.parse(e), isNaN(e) ? -1 / 0 : e
        },
        "html-pre": function(e) {
            return x(e) ? "" : e.replace ? e.replace(/<.*?>/g, "").toLowerCase() : e + ""
        },
        "string-pre": function(e) {
            return x(e) ? "" : "string" == typeof e ? e.toLowerCase() : e.toString ? e.toString() : ""
        },
        "string-asc": function(e, t) {
            return e < t ? -1 : t < e ? 1 : 0
        },
        "string-desc": function(e, t) {
            return e < t ? 1 : t < e ? -1 : 0
        }
    }), jt(""), e.extend(!0, h.ext.renderer, {
        header: {
            _: function(t, n, r, i) {
                e(t.nTable).on("order.dt.DT", (function(e, a, o, s) {
                    t === a && (a = r.idx, n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass("asc" == s[a] ? i.sSortAsc : "desc" == s[a] ? i.sSortDesc : r.sSortingClass))
                }))
            },
            jqueryui: function(t, n, r, i) {
                e("<div/>").addClass(i.sSortJUIWrapper).append(n.contents()).append(e("<span/>").addClass(i.sSortIcon + " " + r.sSortingClassJUI)).appendTo(n), e(t.nTable).on("order.dt.DT", (function(e, a, o, s) {
                    t === a && (a = r.idx, n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass("asc" == s[a] ? i.sSortAsc : "desc" == s[a] ? i.sSortDesc : r.sSortingClass), n.find("span." + i.sSortIcon).removeClass(i.sSortJUIAsc + " " + i.sSortJUIDesc + " " + i.sSortJUI + " " + i.sSortJUIAscAllowed + " " + i.sSortJUIDescAllowed).addClass("asc" == s[a] ? i.sSortJUIAsc : "desc" == s[a] ? i.sSortJUIDesc : r.sSortingClassJUI))
                }))
            }
        }
    });
    var Ft = !1;

    function $t(e, n, r) {
        var i;
        if (t.moment) {
            if (!(i = t.moment.utc(e, n, r, !0)).isValid()) return null
        } else if (t.luxon) {
            if (!(i = n && "string" == typeof e ? t.luxon.DateTime.fromFormat(e, n) : t.luxon.DateTime.fromISO(e)).isValid) return null;
            i.setLocale(r)
        } else n ? (Ft || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), Ft = !0) : i = new Date(e);
        return i
    }

    function Ht(e) {
        return function(t, n, i, a) {
            0 === arguments.length ? (i = "en", t = n = null) : 1 === arguments.length ? (i = "en", n = t, t = null) : 2 === arguments.length && (i = n, n = t, t = null);
            var o = "datetime-" + n;
            return h.ext.type.order[o] || (h.ext.type.detect.unshift((function(e) {
                    return e === o && o
                })), h.ext.type.order[o + "-asc"] = function(e, t) {
                    return (e = e.valueOf()) === (t = t.valueOf()) ? 0 : e < t ? -1 : 1
                }, h.ext.type.order[o + "-desc"] = function(e, t) {
                    return (e = e.valueOf()) === (t = t.valueOf()) ? 0 : t < e ? -1 : 1
                }),
                function(s, l) {
                    var c;
                    return null !== s && s !== r || (s = "--now" === a ? (c = new Date, new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds()))) : ""), "type" === l ? o : "" === s ? "sort" !== l ? "" : $t("0000-01-01 00:00:00", null, i) : (null === n || t !== n || "sort" === l || "type" === l || s instanceof Date) && null !== (c = $t(s, t, i)) ? "sort" === l ? c : (s = null === n ? Rt(c, "toDate", "toJSDate", "")[e]() : Rt(c, "format", "toFormat", "toISOString", n), "display" === l ? Nt(s) : s) : s
                }
        }
    }
    var zt = ",",
        qt = ".";
    if (Intl) try {
        for (var Bt = (new Intl.NumberFormat).formatToParts(100000.1), Wt = 0; Wt < Bt.length; Wt++) "group" === Bt[Wt].type ? zt = Bt[Wt].value : "decimal" === Bt[Wt].type && (qt = Bt[Wt].value)
    } catch (f) {}

    function Vt(e) {
        return function() {
            var t = [ot(this[h.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return h.ext.internal[e].apply(this, t)
        }
    }
    return h.datetime = function(e, t) {
        var n = "datetime-detect-" + e;
        t = t || "en", h.ext.type.order[n] || (h.ext.type.detect.unshift((function(r) {
            var i = $t(r, e, t);
            return !("" !== r && !i) && n
        })), h.ext.type.order[n + "-pre"] = function(n) {
            return $t(n, e, t) || 0
        })
    }, h.render = {
        date: Ht("toLocaleDateString"),
        datetime: Ht("toLocaleString"),
        time: Ht("toLocaleTimeString"),
        number: function(e, t, n, i, a) {
            return null !== e && e !== r || (e = zt), null !== t && t !== r || (t = qt), {
                display: function(r) {
                    if ("number" != typeof r && "string" != typeof r) return r;
                    if ("" === r || null === r) return r;
                    var o = r < 0 ? "-" : "",
                        s = parseFloat(r);
                    return isNaN(s) ? Nt(r) : (s = s.toFixed(n), r = Math.abs(s), s = parseInt(r, 10), r = n ? t + (r - s).toFixed(n).substring(2) : "", (o = 0 === s && 0 === parseFloat(r) ? "" : o) + (i || "") + s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e) + r + (a || ""))
                }
            }
        },
        text: function() {
            return {
                display: Nt,
                filter: Nt
            }
        }
    }, e.extend(h.ext.internal, {
        _fnExternApiFunc: Vt,
        _fnBuildAjax: pe,
        _fnAjaxUpdate: fe,
        _fnAjaxParameters: he,
        _fnAjaxUpdateDraw: me,
        _fnAjaxDataSrc: ge,
        _fnAddColumn: O,
        _fnColumnOptions: j,
        _fnAdjustColumnSizing: N,
        _fnVisibleToColumnIndex: R,
        _fnColumnIndexToVisible: F,
        _fnVisbleColumns: $,
        _fnGetColumns: H,
        _fnColumnTypes: z,
        _fnApplyColumnDefs: q,
        _fnHungarianMap: _,
        _fnCamelToHungarian: D,
        _fnLanguageCompat: A,
        _fnBrowserDetect: I,
        _fnAddData: B,
        _fnAddTr: W,
        _fnNodeToDataIndex: function(e, t) {
            return t._DT_RowIndex !== r ? t._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function(t, n, r) {
            return e.inArray(r, t.aoData[n].anCells)
        },
        _fnGetCellData: V,
        _fnSetCellData: G,
        _fnSplitObjNotation: Y,
        _fnGetObjectDataFn: J,
        _fnSetObjectDataFn: K,
        _fnGetDataMaster: Q,
        _fnClearTable: Z,
        _fnDeleteIndex: ee,
        _fnInvalidate: te,
        _fnGetRowElements: ne,
        _fnCreateTr: re,
        _fnBuildHead: ae,
        _fnDrawHead: oe,
        _fnDraw: se,
        _fnReDraw: le,
        _fnAddOptionsHtml: ce,
        _fnDetectHeader: ue,
        _fnGetUniqueThs: de,
        _fnFeatureHtmlFilter: ve,
        _fnFilterComplete: ye,
        _fnFilterCustom: be,
        _fnFilterColumn: we,
        _fnFilter: xe,
        _fnFilterCreateSearch: Se,
        _fnEscapeRegex: Ee,
        _fnFilterData: _e,
        _fnFeatureHtmlInfo: Le,
        _fnUpdateInfo: Me,
        _fnInfoMacros: ke,
        _fnInitialise: Ie,
        _fnInitComplete: Pe,
        _fnLengthChange: Oe,
        _fnFeatureHtmlLength: je,
        _fnFeatureHtmlPaginate: Ne,
        _fnPageChange: Re,
        _fnFeatureHtmlProcessing: Fe,
        _fnProcessingDisplay: $e,
        _fnFeatureHtmlTable: He,
        _fnScrollDraw: ze,
        _fnApplyToChildren: qe,
        _fnCalculateColumnWidths: We,
        _fnThrottle: Ve,
        _fnConvertToWidth: Ge,
        _fnGetWidestNode: Xe,
        _fnGetMaxLenString: Ue,
        _fnStringToCss: Ye,
        _fnSortFlatten: Je,
        _fnSort: Ke,
        _fnSortAria: Qe,
        _fnSortListener: Ze,
        _fnSortAttachListener: et,
        _fnSortingClasses: tt,
        _fnSortData: nt,
        _fnSaveState: rt,
        _fnLoadState: it,
        _fnImplementState: at,
        _fnSettingsFromNode: ot,
        _fnLog: st,
        _fnMap: lt,
        _fnBindAction: ut,
        _fnCallbackReg: dt,
        _fnCallbackFire: pt,
        _fnLengthOverflow: ft,
        _fnRenderer: ht,
        _fnDataSource: mt,
        _fnRowAttributes: ie,
        _fnExtend: ct,
        _fnCalculateEnd: function() {}
    }), ((e.fn.dataTable = h).$ = e).fn.dataTableSettings = h.settings, e.fn.dataTableExt = h.ext, e.fn.DataTable = function(t) {
        return e(this).dataTable(t).api()
    }, e.each(h, (function(t, n) {
        e.fn.DataTable[t] = n
    })), h
})),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    "use strict";

    function t(e) {
        return e && (0 === e.offsetWidth || 0 === e.offsetHeight || !1 === e.open)
    }

    function n(e) {
        for (var n = [], r = e.parentNode; t(r);) n.push(r), r = r.parentNode;
        return n
    }

    function r(e, t) {
        function r(e) {
            void 0 !== e.open && (e.open = !e.open)
        }
        var i = n(e),
            a = i.length,
            o = [],
            s = e[t];
        if (a) {
            for (var l = 0; l < a; l++) o[l] = i[l].style.cssText, i[l].style.setProperty ? i[l].style.setProperty("display", "block", "important") : i[l].style.cssText += ";display: block !important", i[l].style.height = "0", i[l].style.overflow = "hidden", i[l].style.visibility = "hidden", r(i[l]);
            s = e[t];
            for (var c = 0; c < a; c++) i[c].style.cssText = o[c], r(i[c])
        }
        return s
    }

    function i(e, t) {
        var n = parseFloat(e);
        return Number.isNaN(n) ? t : n
    }

    function a(e) {
        return e.charAt(0).toUpperCase() + e.substr(1)
    }

    function o(t, n) {
        if (this.$window = e(window), this.$document = e(document), this.$element = e(t), this.options = e.extend({}, u, n), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = d.orientation[this.orientation].dimension, this.DIRECTION = d.orientation[this.orientation].direction, this.DIRECTION_STYLE = d.orientation[this.orientation].directionStyle, this.COORDINATE = d.orientation[this.orientation].coordinate, this.polyfill && c) return !1;
        this.identifier = "js-" + s + "-" + l++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = e('<div class="' + this.options.fillClass + '" />'), this.$handle = e('<div class="' + this.options.handleClass + '" />'), this.$range = e('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: "0"
        }), this.handleDown = e.proxy(this.handleDown, this), this.handleMove = e.proxy(this.handleMove, this), this.handleEnd = e.proxy(this.handleEnd, this), this.init();
        var r = this;
        this.$window.on("resize." + this.identifier, function(e, t) {
            return t = t || 100,
                function() {
                    if (!e.debouncing) {
                        var n = Array.prototype.slice.apply(arguments);
                        e.lastReturnVal = e.apply(window, n), e.debouncing = !0
                    }
                    return clearTimeout(e.debounceTimeout), e.debounceTimeout = setTimeout((function() {
                        e.debouncing = !1
                    }), t), e.lastReturnVal
                }
        }((function() {
            ! function(e, t) {
                var n = Array.prototype.slice.call(arguments, 2);
                setTimeout((function() {
                    return e.apply(null, n)
                }), t)
            }((function() {
                r.update(!1, !1)
            }), 300)
        }), 20)), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, (function(e, t) {
            if (!t || t.origin !== r.identifier) {
                var n = e.target.value,
                    i = r.getPositionFromValue(n);
                r.setPosition(i)
            }
        }))
    }
    Number.isNaN = Number.isNaN || function(e) {
        return "number" == typeof e && e != e
    };
    var s = "rangeslider",
        l = 0,
        c = function() {
            var e = document.createElement("input");
            return e.setAttribute("type", "range"), "text" !== e.type
        }(),
        u = {
            polyfill: !0,
            orientation: "horizontal",
            rangeClass: "rangeslider",
            disabledClass: "rangeslider--disabled",
            activeClass: "rangeslider--active",
            horizontalClass: "rangeslider--horizontal",
            verticalClass: "rangeslider--vertical",
            fillClass: "rangeslider__fill",
            handleClass: "rangeslider__handle",
            startEvent: ["mousedown", "touchstart", "pointerdown"],
            moveEvent: ["mousemove", "touchmove", "pointermove"],
            endEvent: ["mouseup", "touchend", "pointerup"]
        },
        d = {
            orientation: {
                horizontal: {
                    dimension: "width",
                    direction: "left",
                    directionStyle: "left",
                    coordinate: "x"
                },
                vertical: {
                    dimension: "height",
                    direction: "top",
                    directionStyle: "bottom",
                    coordinate: "y"
                }
            }
        };
    return o.prototype.init = function() {
        this.update(!0, !1), this.onInit && "function" == typeof this.onInit && this.onInit()
    }, o.prototype.update = function(e, t) {
        (e = e || !1) && (this.min = i(this.$element[0].getAttribute("min"), 0), this.max = i(this.$element[0].getAttribute("max"), 100), this.value = i(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2)), this.step = i(this.$element[0].getAttribute("step"), 1)), this.handleDimension = r(this.$handle[0], "offset" + a(this.DIMENSION)), this.rangeDimension = r(this.$range[0], "offset" + a(this.DIMENSION)), this.maxHandlePos = this.rangeDimension - this.handleDimension, this.grabPos = this.handleDimension / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position, t)
    }, o.prototype.handleDown = function(e) {
        if (e.preventDefault(), !(e.button && 0 !== e.button || (this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), this.$range.addClass(this.options.activeClass), (" " + e.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1))) {
            var t = this.getRelativePosition(e),
                n = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                r = this.getPositionFromNode(this.$handle[0]) - n,
                i = "vertical" === this.orientation ? this.maxHandlePos - (t - this.grabPos) : t - this.grabPos;
            this.setPosition(i), t >= r && t < r + this.handleDimension && (this.grabPos = t - r)
        }
    }, o.prototype.handleMove = function(e) {
        e.preventDefault();
        var t = this.getRelativePosition(e),
            n = "vertical" === this.orientation ? this.maxHandlePos - (t - this.grabPos) : t - this.grabPos;
        this.setPosition(n)
    }, o.prototype.handleEnd = function(e) {
        e.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$range.removeClass(this.options.activeClass), this.$element.trigger("change", {
            origin: this.identifier
        }), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
    }, o.prototype.cap = function(e, t, n) {
        return e < t ? t : e > n ? n : e
    }, o.prototype.setPosition = function(e, t) {
        var n, r;
        void 0 === t && (t = !0), n = this.getValueFromPosition(this.cap(e, 0, this.maxHandlePos)), r = this.getPositionFromValue(n), this.$fill[0].style[this.DIMENSION] = r + this.grabPos + "px", this.$handle[0].style[this.DIRECTION_STYLE] = r + "px", this.setValue(n), this.position = r, this.value = n, t && this.onSlide && "function" == typeof this.onSlide && this.onSlide(r, n)
    }, o.prototype.getPositionFromNode = function(e) {
        for (var t = 0; null !== e;) t += e.offsetLeft, e = e.offsetParent;
        return t
    }, o.prototype.getRelativePosition = function(e) {
        var t = a(this.COORDINATE),
            n = this.$range[0].getBoundingClientRect()[this.DIRECTION],
            r = 0;
        return void 0 !== e.originalEvent["client" + t] ? r = e.originalEvent["client" + t] : e.originalEvent.touches && e.originalEvent.touches[0] && void 0 !== e.originalEvent.touches[0]["client" + t] ? r = e.originalEvent.touches[0]["client" + t] : e.currentPoint && void 0 !== e.currentPoint[this.COORDINATE] && (r = e.currentPoint[this.COORDINATE]), r - n
    }, o.prototype.getPositionFromValue = function(e) {
        var t;
        return t = (e - this.min) / (this.max - this.min), Number.isNaN(t) ? 0 : t * this.maxHandlePos
    }, o.prototype.getValueFromPosition = function(e) {
        var t, n;
        return t = e / (this.maxHandlePos || 1), n = this.step * Math.round(t * (this.max - this.min) / this.step) + this.min, Number(n.toFixed(this.toFixed))
    }, o.prototype.setValue = function(e) {
        e === this.value && "" !== this.$element[0].value || this.$element.val(e).trigger("input", {
            origin: this.identifier
        })
    }, o.prototype.destroy = function() {
        this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + s), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
    }, e.fn[s] = function(t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each((function() {
            var r = e(this),
                i = r.data("plugin_" + s);
            i || r.data("plugin_" + s, i = new o(this, t)), "string" == typeof t && i[t].apply(i, n)
        }))
    }, "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
}));
var Swiper = function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(n, r) {
        void 0 === n && (n = {}), void 0 === r && (r = {}), Object.keys(r).forEach((i => {
            void 0 === n[i] ? n[i] = r[i] : e(r[i]) && e(n[i]) && Object.keys(r[i]).length > 0 && t(n[i], r[i])
        }))
    }
    const n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function r() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, n), e
    }
    const i = {
        document: n,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function a() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }

    function o(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function s() {
        return Date.now()
    }

    function l(e, t) {
        void 0 === t && (t = "x");
        const n = a();
        let r, i, o;
        const s = function(e) {
            const t = a();
            let n;
            return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
        }(e);
        return n.WebKitCSSMatrix ? (i = s.transform || s.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), o = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = o.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? o.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (i = n.WebKitCSSMatrix ? o.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), i || 0
    }

    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function u() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
            const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
            if (null != i && (n = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                const n = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, r = n.length; t < r; t += 1) {
                    const r = n[t],
                        a = Object.getOwnPropertyDescriptor(i, r);
                    void 0 !== a && a.enumerable && (c(e[r]) && c(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : u(e[r], i[r]) : !c(e[r]) && c(i[r]) ? (e[r] = {}, i[r].__swiper__ ? e[r] = i[r] : u(e[r], i[r])) : e[r] = i[r])
                }
            }
        }
        var n;
        return e
    }

    function d(e, t, n) {
        e.style.setProperty(t, n)
    }

    function p(e) {
        let {
            swiper: t,
            targetPosition: n,
            side: r
        } = e;
        const i = a(),
            o = -t.translate;
        let s, l = null;
        const c = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const u = n > o ? "next" : "prev",
            d = (e, t) => "next" === u && e >= t || "prev" === u && e <= t,
            p = () => {
                s = (new Date).getTime(), null === l && (l = s);
                const e = Math.max(Math.min((s - l) / c, 1), 0),
                    a = .5 - Math.cos(e * Math.PI) / 2;
                let u = o + a * (n - o);
                if (d(u, n) && (u = n), t.wrapperEl.scrollTo({
                        [r]: u
                    }), d(u, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [r]: u
                    })
                })), void i.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = i.requestAnimationFrame(p)
            };
        p()
    }

    function f(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
    }

    function h(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
    }

    function m(e, t) {
        void 0 === t && (t = []);
        const n = document.createElement(e);
        return n.classList.add(...Array.isArray(t) ? t : [t]), n
    }

    function g(e) {
        const t = a(),
            n = r(),
            i = e.getBoundingClientRect(),
            o = n.body,
            s = e.clientTop || o.clientTop || 0,
            l = e.clientLeft || o.clientLeft || 0,
            c = e === t ? t.scrollY : e.scrollTop,
            u = e === t ? t.scrollX : e.scrollLeft;
        return {
            top: i.top + c - s,
            left: i.left + u - l
        }
    }

    function v(e, t) {
        return a().getComputedStyle(e, null).getPropertyValue(t)
    }

    function y(e) {
        let t, n = e;
        if (n) {
            for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
            return t
        }
    }

    function b(e, t) {
        const n = [];
        let r = e.parentElement;
        for (; r;) t ? r.matches(t) && n.push(r) : n.push(r), r = r.parentElement;
        return n
    }

    function w(e, t) {
        t && e.addEventListener("transitionend", (function n(r) {
            r.target === e && (t.call(e, r), e.removeEventListener("transitionend", n))
        }))
    }

    function x(e, t, n) {
        const r = a();
        return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }
    let S, E, T;

    function C() {
        return S || (S = function() {
            const e = a(),
                t = r();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()), S
    }

    function _(e) {
        return void 0 === e && (e = {}), E || (E = function(e) {
            let {
                userAgent: t
            } = void 0 === e ? {} : e;
            const n = C(),
                r = a(),
                i = r.navigator.platform,
                o = t || r.navigator.userAgent,
                s = {
                    ios: !1,
                    android: !1
                },
                l = r.screen.width,
                c = r.screen.height,
                u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = o.match(/(iPad).*OS\s([\d_]+)/);
            const p = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
            let m = "MacIntel" === i;
            return !d && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (d = o.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), m = !1), u && !h && (s.os = "android", s.android = !0), (d || f || p) && (s.os = "ios", s.ios = !0), s
        }(e)), E
    }

    function D() {
        return T || (T = function() {
            const e = a();
            let t = !1;

            function n() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (n()) {
                const n = String(e.navigator.userAgent);
                if (n.includes("Version/")) {
                    const [e, r] = n.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                    t = e < 16 || 16 === e && r < 2
                }
            }
            return {
                isSafari: t || n(),
                needPerspectiveFix: t,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), T
    }
    var A = {
        on(e, t, n) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" != typeof t) return r;
            const i = n ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
            })), r
        },
        once(e, t, n) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" != typeof t) return r;

            function i() {
                r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                t.apply(r, a)
            }
            return i.__emitterProxy = t, r.on(e, i, n)
        },
        onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const r = t ? "unshift" : "push";
            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
        },
        off(e, t) {
            const n = this;
            return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((r, i) => {
                    (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                }))
            })), n) : n
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, n, r;
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], n = a.slice(1, a.length), r = e) : (t = a[0].events, n = a[0].data, r = a[0].context || e), n.unshift(r), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(r, [t, ...n])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(r, n)
                }))
            })), e
        }
    };
    const L = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const n = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (n) {
                let t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove()
            }
        },
        M = (e, t) => {
            if (!e.slides[t]) return;
            const n = e.slides[t].querySelector('[loading="lazy"]');
            n && n.removeAttribute("loading")
        },
        k = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const n = e.slides.length;
            if (!n || !t || t < 0) return;
            t = Math.min(t, n);
            const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                i = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const n = i,
                    a = [n - t];
                return a.push(...Array.from({
                    length: t
                }).map(((e, t) => n + r + t))), void e.slides.forEach(((t, n) => {
                    a.includes(t.column) && M(e, n)
                }))
            }
            const a = i + r - 1;
            if (e.params.rewind || e.params.loop)
                for (let r = i - t; r <= a + t; r += 1) {
                    const t = (r % n + n) % n;
                    (t < i || t > a) && M(e, t)
                } else
                    for (let r = Math.max(i - t, 0); r <= Math.min(a + t, n - 1); r += 1) r !== i && (r > a || r < i) && M(e, r)
        };
    var I = {
            updateSize: function() {
                const e = this;
                let t, n;
                const r = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(v(r, "padding-left") || 0, 10) - parseInt(v(r, "padding-right") || 0, 10), n = n - parseInt(v(r, "padding-top") || 0, 10) - parseInt(v(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            },
            updateSlides: function() {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    } [t]
                }

                function n(e, n) {
                    return parseFloat(e.getPropertyValue(t(n)) || 0)
                }
                const r = e.params,
                    {
                        wrapperEl: i,
                        slidesEl: a,
                        size: o,
                        rtlTranslate: s,
                        wrongRTL: l
                    } = e,
                    c = e.virtual && r.virtual.enabled,
                    u = c ? e.virtual.slides.length : e.slides.length,
                    p = h(a, `.${e.params.slideClass}, swiper-slide`),
                    f = c ? e.virtual.slides.length : p.length;
                let m = [];
                const g = [],
                    y = [];
                let b = r.slidesOffsetBefore;
                "function" == typeof b && (b = r.slidesOffsetBefore.call(e));
                let w = r.slidesOffsetAfter;
                "function" == typeof w && (w = r.slidesOffsetAfter.call(e));
                const S = e.snapGrid.length,
                    E = e.slidesGrid.length;
                let T = r.spaceBetween,
                    C = -b,
                    _ = 0,
                    D = 0;
                if (void 0 === o) return;
                "string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * o : "string" == typeof T && (T = parseFloat(T)), e.virtualSize = -T, p.forEach((e => {
                    s ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), r.centeredSlides && r.cssMode && (d(i, "--swiper-centered-offset-before", ""), d(i, "--swiper-centered-offset-after", ""));
                const A = r.grid && r.grid.rows > 1 && e.grid;
                let L;
                A && e.grid.initSlides(f);
                const M = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
                for (let i = 0; i < f; i += 1) {
                    let a;
                    if (L = 0, p[i] && (a = p[i]), A && e.grid.updateSlide(i, a, f, t), !p[i] || "none" !== v(a, "display")) {
                        if ("auto" === r.slidesPerView) {
                            M && (p[i].style[t("width")] = "");
                            const o = getComputedStyle(a),
                                s = a.style.transform,
                                l = a.style.webkitTransform;
                            if (s && (a.style.transform = "none"), l && (a.style.webkitTransform = "none"), r.roundLengths) L = e.isHorizontal() ? x(a, "width", !0) : x(a, "height", !0);
                            else {
                                const e = n(o, "width"),
                                    t = n(o, "padding-left"),
                                    r = n(o, "padding-right"),
                                    i = n(o, "margin-left"),
                                    s = n(o, "margin-right"),
                                    l = o.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) L = e + i + s;
                                else {
                                    const {
                                        clientWidth: n,
                                        offsetWidth: o
                                    } = a;
                                    L = e + t + r + i + s + (o - n)
                                }
                            }
                            s && (a.style.transform = s), l && (a.style.webkitTransform = l), r.roundLengths && (L = Math.floor(L))
                        } else L = (o - (r.slidesPerView - 1) * T) / r.slidesPerView, r.roundLengths && (L = Math.floor(L)), p[i] && (p[i].style[t("width")] = `${L}px`);
                        p[i] && (p[i].swiperSlideSize = L), y.push(L), r.centeredSlides ? (C = C + L / 2 + _ / 2 + T, 0 === _ && 0 !== i && (C = C - o / 2 - T), 0 === i && (C = C - o / 2 - T), Math.abs(C) < .001 && (C = 0), r.roundLengths && (C = Math.floor(C)), D % r.slidesPerGroup == 0 && m.push(C), g.push(C)) : (r.roundLengths && (C = Math.floor(C)), (D - Math.min(e.params.slidesPerGroupSkip, D)) % e.params.slidesPerGroup == 0 && m.push(C), g.push(C), C = C + L + T), e.virtualSize += L + T, _ = L, D += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, o) + w, s && l && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = `${e.virtualSize+T}px`), r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize+T}px`), A && e.grid.updateWrapperSize(L, m, t), !r.centeredSlides) {
                    const t = [];
                    for (let n = 0; n < m.length; n += 1) {
                        let i = m[n];
                        r.roundLengths && (i = Math.floor(i)), m[n] <= e.virtualSize - o && t.push(i)
                    }
                    m = t, Math.floor(e.virtualSize - o) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - o)
                }
                if (c && r.loop) {
                    const t = y[0] + T;
                    if (r.slidesPerGroup > 1) {
                        const n = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                            i = t * r.slidesPerGroup;
                        for (let e = 0; e < n; e += 1) m.push(m[m.length - 1] + i)
                    }
                    for (let n = 0; n < e.virtual.slidesBefore + e.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && m.push(m[m.length - 1] + t), g.push(g[g.length - 1] + t), e.virtualSize += t
                }
                if (0 === m.length && (m = [0]), 0 !== T) {
                    const n = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
                    p.filter(((e, t) => !(r.cssMode && !r.loop) || t !== p.length - 1)).forEach((e => {
                        e.style[n] = `${T}px`
                    }))
                }
                if (r.centeredSlides && r.centeredSlidesBounds) {
                    let e = 0;
                    y.forEach((t => {
                        e += t + (T || 0)
                    })), e -= T;
                    const t = e - o;
                    m = m.map((e => e <= 0 ? -b : e > t ? t + w : e))
                }
                if (r.centerInsufficientSlides) {
                    let e = 0;
                    if (y.forEach((t => {
                            e += t + (T || 0)
                        })), e -= T, e < o) {
                        const t = (o - e) / 2;
                        m.forEach(((e, n) => {
                            m[n] = e - t
                        })), g.forEach(((e, n) => {
                            g[n] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                        slides: p,
                        snapGrid: m,
                        slidesGrid: g,
                        slidesSizesGrid: y
                    }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                    d(i, "--swiper-centered-offset-before", -m[0] + "px"), d(i, "--swiper-centered-offset-after", e.size / 2 - y[y.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0],
                        n = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                }
                if (f !== u && e.emit("slidesLengthChange"), m.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== E && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), !(c || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
                    const t = `${r.containerModifierClass}backface-hidden`,
                        n = e.el.classList.contains(t);
                    f <= r.maxBackfaceHiddenSlides ? n || e.el.classList.add(t) : n && e.el.classList.remove(t)
                }
            },
            updateAutoHeight: function(e) {
                const t = this,
                    n = [],
                    r = t.virtual && t.params.virtual.enabled;
                let i, a = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const o = e => r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                        n.push(e)
                    }));
                    else
                        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length && !r) break;
                            n.push(o(e))
                        } else n.push(o(t.activeIndex));
                for (i = 0; i < n.length; i += 1)
                    if (void 0 !== n[i]) {
                        const e = n[i].offsetHeight;
                        a = e > a ? e : a
                    }(a || 0 === a) && (t.wrapperEl.style.height = `${a}px`)
            },
            updateSlidesOffset: function() {
                const e = this,
                    t = e.slides,
                    n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this,
                    n = t.params,
                    {
                        slides: r,
                        rtlTranslate: i,
                        snapGrid: a
                    } = t;
                if (0 === r.length) return;
                void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                let o = -e;
                i && (o = e), r.forEach((e => {
                    e.classList.remove(n.slideVisibleClass)
                })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let s = n.spaceBetween;
                "string" == typeof s && s.indexOf("%") >= 0 ? s = parseFloat(s.replace("%", "")) / 100 * t.size : "string" == typeof s && (s = parseFloat(s));
                for (let e = 0; e < r.length; e += 1) {
                    const l = r[e];
                    let c = l.swiperSlideOffset;
                    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
                    const u = (o + (n.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + s),
                        d = (o - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + s),
                        p = -(o - c),
                        f = p + t.slidesSizesGrid[e];
                    (p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), r[e].classList.add(n.slideVisibleClass)), l.progress = i ? -u : u, l.originalProgress = i ? -d : d
                }
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params,
                    r = t.maxTranslate() - t.minTranslate();
                let {
                    progress: i,
                    isBeginning: a,
                    isEnd: o,
                    progressLoop: s
                } = t;
                const l = a,
                    c = o;
                if (0 === r) i = 0, a = !0, o = !0;
                else {
                    i = (e - t.minTranslate()) / r;
                    const n = Math.abs(e - t.minTranslate()) < 1,
                        s = Math.abs(e - t.maxTranslate()) < 1;
                    a = n || i <= 0, o = s || i >= 1, n && (i = 0), s && (i = 1)
                }
                if (n.loop) {
                    const n = t.getSlideIndexByData(0),
                        r = t.getSlideIndexByData(t.slides.length - 1),
                        i = t.slidesGrid[n],
                        a = t.slidesGrid[r],
                        o = t.slidesGrid[t.slidesGrid.length - 1],
                        l = Math.abs(e);
                    s = l >= i ? (l - i) / o : (l + o - a) / o, s > 1 && (s -= 1)
                }
                Object.assign(t, {
                    progress: i,
                    progressLoop: s,
                    isBeginning: a,
                    isEnd: o
                }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), o && !c && t.emit("reachEnd toEdge"), (l && !a || c && !o) && t.emit("fromEdge"), t.emit("progress", i)
            },
            updateSlidesClasses: function() {
                const e = this,
                    {
                        slides: t,
                        params: n,
                        slidesEl: r,
                        activeIndex: i
                    } = e,
                    a = e.virtual && n.virtual.enabled,
                    o = e => h(r, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
                let s;
                if (t.forEach((e => {
                        e.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
                    })), a)
                    if (n.loop) {
                        let t = i - e.virtual.slidesBefore;
                        t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), s = o(`[data-swiper-slide-index="${t}"]`)
                    } else s = o(`[data-swiper-slide-index="${i}"]`);
                else s = t[i];
                if (s) {
                    s.classList.add(n.slideActiveClass);
                    let e = function(e, t) {
                        const n = [];
                        for (; e.nextElementSibling;) {
                            const r = e.nextElementSibling;
                            t ? r.matches(t) && n.push(r) : n.push(r), e = r
                        }
                        return n
                    }(s, `.${n.slideClass}, swiper-slide`)[0];
                    n.loop && !e && (e = t[0]), e && e.classList.add(n.slideNextClass);
                    let r = function(e, t) {
                        const n = [];
                        for (; e.previousElementSibling;) {
                            const r = e.previousElementSibling;
                            t ? r.matches(t) && n.push(r) : n.push(r), e = r
                        }
                        return n
                    }(s, `.${n.slideClass}, swiper-slide`)[0];
                    n.loop && 0 === !r && (r = t[t.length - 1]), r && r.classList.add(n.slidePrevClass)
                }
                e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this,
                    n = t.rtlTranslate ? t.translate : -t.translate,
                    {
                        snapGrid: r,
                        params: i,
                        activeIndex: a,
                        realIndex: o,
                        snapIndex: s
                    } = t;
                let l, c = e;
                const u = e => {
                    let n = e - t.virtual.slidesBefore;
                    return n < 0 && (n = t.virtual.slides.length + n), n >= t.virtual.slides.length && (n -= t.virtual.slides.length), n
                };
                if (void 0 === c && (c = function(e) {
                        const {
                            slidesGrid: t,
                            params: n
                        } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                        let i;
                        for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : r >= t[e] && r < t[e + 1] && (i = e + 1) : r >= t[e] && (i = e);
                        return n.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
                    }(t)), r.indexOf(n) >= 0) l = r.indexOf(n);
                else {
                    const e = Math.min(i.slidesPerGroupSkip, c);
                    l = e + Math.floor((c - e) / i.slidesPerGroup)
                }
                if (l >= r.length && (l = r.length - 1), c === a) return l !== s && (t.snapIndex = l, t.emit("snapIndexChange")), void(t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = u(c)));
                let d;
                d = t.virtual && i.virtual.enabled && i.loop ? u(c) : t.slides[c] ? parseInt(t.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c, Object.assign(t, {
                    previousSnapIndex: s,
                    snapIndex: l,
                    previousRealIndex: o,
                    realIndex: d,
                    previousIndex: a,
                    activeIndex: c
                }), t.initialized && k(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== d && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this,
                    n = t.params,
                    r = e.closest(`.${n.slideClass}, swiper-slide`);
                let i, a = !1;
                if (r)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === r) {
                            a = !0, i = e;
                            break
                        } if (!r || !a) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = i, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        P = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const {
                    params: t,
                    rtlTranslate: n,
                    translate: r,
                    wrapperEl: i
                } = this;
                if (t.virtualTranslate) return n ? -r : r;
                if (t.cssMode) return r;
                let a = l(i, e);
                return a += this.cssOverflowAdjustment(), n && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
                const n = this,
                    {
                        rtlTranslate: r,
                        params: i,
                        wrapperEl: a,
                        progress: o
                    } = n;
                let s, l = 0,
                    c = 0;
                n.isHorizontal() ? l = r ? -e : e : c = e, i.roundLengths && (l = Math.floor(l), c = Math.floor(c)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : c, i.cssMode ? a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c : i.virtualTranslate || (n.isHorizontal() ? l -= n.cssOverflowAdjustment() : c -= n.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
                const u = n.maxTranslate() - n.minTranslate();
                s = 0 === u ? 0 : (e - n.minTranslate()) / u, s !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, n, r, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = !0);
                const a = this,
                    {
                        params: o,
                        wrapperEl: s
                    } = a;
                if (a.animating && o.preventInteractionOnTransition) return !1;
                const l = a.minTranslate(),
                    c = a.maxTranslate();
                let u;
                if (u = r && e > l ? l : r && e < c ? c : e, a.updateProgress(u), o.cssMode) {
                    const e = a.isHorizontal();
                    if (0 === t) s[e ? "scrollLeft" : "scrollTop"] = -u;
                    else {
                        if (!a.support.smoothScroll) return p({
                            swiper: a,
                            targetPosition: -u,
                            side: e ? "left" : "top"
                        }), !0;
                        s.scrollTo({
                            [e ? "left" : "top"]: -u,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (a.setTransition(0), a.setTranslate(u), n && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(u), n && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, n && a.emit("transitionEnd"))
                }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
        };

    function O(e) {
        let {
            swiper: t,
            runCallbacks: n,
            direction: r,
            step: i
        } = e;
        const {
            activeIndex: a,
            previousIndex: o
        } = t;
        let s = r;
        if (s || (s = a > o ? "next" : a < o ? "prev" : "reset"), t.emit(`transition${i}`), n && a !== o) {
            if ("reset" === s) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === s ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var j = {
            slideTo: function(e, t, n, r, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                const a = this;
                let o = e;
                o < 0 && (o = 0);
                const {
                    params: s,
                    snapGrid: l,
                    slidesGrid: c,
                    previousIndex: u,
                    activeIndex: d,
                    rtlTranslate: f,
                    wrapperEl: h,
                    enabled: m
                } = a;
                if (a.animating && s.preventInteractionOnTransition || !m && !r && !i) return !1;
                const g = Math.min(a.params.slidesPerGroupSkip, o);
                let v = g + Math.floor((o - g) / a.params.slidesPerGroup);
                v >= l.length && (v = l.length - 1);
                const y = -l[v];
                if (s.normalizeSlideIndex)
                    for (let e = 0; e < c.length; e += 1) {
                        const t = -Math.floor(100 * y),
                            n = Math.floor(100 * c[e]),
                            r = Math.floor(100 * c[e + 1]);
                        void 0 !== c[e + 1] ? t >= n && t < r - (r - n) / 2 ? o = e : t >= n && t < r && (o = e + 1) : t >= n && (o = e)
                    }
                if (a.initialized && o !== d) {
                    if (!a.allowSlideNext && (f ? y > a.translate && y > a.minTranslate() : y < a.translate && y < a.minTranslate())) return !1;
                    if (!a.allowSlidePrev && y > a.translate && y > a.maxTranslate() && (d || 0) !== o) return !1
                }
                let b;
                if (o !== (u || 0) && n && a.emit("beforeSlideChangeStart"), a.updateProgress(y), b = o > d ? "next" : o < d ? "prev" : "reset", f && -y === a.translate || !f && y === a.translate) return a.updateActiveIndex(o), s.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== s.effect && a.setTranslate(y), "reset" !== b && (a.transitionStart(n, b), a.transitionEnd(n, b)), !1;
                if (s.cssMode) {
                    const e = a.isHorizontal(),
                        n = f ? y : -y;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            h[e ? "scrollLeft" : "scrollTop"] = n
                        }))) : h[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                            a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                        }))
                    } else {
                        if (!a.support.smoothScroll) return p({
                            swiper: a,
                            targetPosition: n,
                            side: e ? "left" : "top"
                        }), !0;
                        h.scrollTo({
                            [e ? "left" : "top"]: n,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return a.setTransition(t), a.setTranslate(y), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, r), a.transitionStart(n, b), 0 === t ? a.transitionEnd(n, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, b))
                }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
            },
            slideToLoop: function(e, t, n, r) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                const i = this;
                let a = e;
                return i.params.loop && (i.virtual && i.params.virtual.enabled ? a += i.virtual.slidesBefore : a = i.getSlideIndexByData(a)), i.slideTo(a, t, n, r)
            },
            slideNext: function(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const r = this,
                    {
                        enabled: i,
                        params: a,
                        animating: o
                    } = r;
                if (!i) return r;
                let s = a.slidesPerGroup;
                "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (s = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                const l = r.activeIndex < a.slidesPerGroupSkip ? 1 : s,
                    c = r.virtual && a.virtual.enabled;
                if (a.loop) {
                    if (o && !c && a.loopPreventsSliding) return !1;
                    r.loopFix({
                        direction: "next"
                    }), r._clientLeft = r.wrapperEl.clientLeft
                }
                return a.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
            },
            slidePrev: function(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const r = this,
                    {
                        params: i,
                        snapGrid: a,
                        slidesGrid: o,
                        rtlTranslate: s,
                        enabled: l,
                        animating: c
                    } = r;
                if (!l) return r;
                const u = r.virtual && i.virtual.enabled;
                if (i.loop) {
                    if (c && !u && i.loopPreventsSliding) return !1;
                    r.loopFix({
                        direction: "prev"
                    }), r._clientLeft = r.wrapperEl.clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const p = d(s ? r.translate : -r.translate),
                    f = a.map((e => d(e)));
                let h = a[f.indexOf(p) - 1];
                if (void 0 === h && i.cssMode) {
                    let e;
                    a.forEach(((t, n) => {
                        p >= t && (e = n)
                    })), void 0 !== e && (h = a[e > 0 ? e - 1 : e])
                }
                let m = 0;
                if (void 0 !== h && (m = o.indexOf(h), m < 0 && (m = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - r.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && r.isBeginning) {
                    const i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                    return r.slideTo(i, e, t, n)
                }
                return r.slideTo(m, e, t, n)
            },
            slideReset: function(e, t, n) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
            },
            slideToClosest: function(e, t, n, r) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === r && (r = .5);
                const i = this;
                let a = i.activeIndex;
                const o = Math.min(i.params.slidesPerGroupSkip, a),
                    s = o + Math.floor((a - o) / i.params.slidesPerGroup),
                    l = i.rtlTranslate ? i.translate : -i.translate;
                if (l >= i.snapGrid[s]) {
                    const e = i.snapGrid[s];
                    l - e > (i.snapGrid[s + 1] - e) * r && (a += i.params.slidesPerGroup)
                } else {
                    const e = i.snapGrid[s - 1];
                    l - e <= (i.snapGrid[s] - e) * r && (a -= i.params.slidesPerGroup)
                }
                return a = Math.max(a, 0), a = Math.min(a, i.slidesGrid.length - 1), i.slideTo(a, e, t, n)
            },
            slideToClickedSlide: function() {
                const e = this,
                    {
                        params: t,
                        slidesEl: n
                    } = e,
                    r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, a = e.clickedIndex;
                const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating) return;
                    i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - r / 2 || a > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), a = e.getSlideIndex(h(n, `${s}[data-swiper-slide-index="${i}"]`)[0]), o((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a) : a > e.slides.length - r ? (e.loopFix(), a = e.getSlideIndex(h(n, `${s}[data-swiper-slide-index="${i}"]`)[0]), o((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a)
                } else e.slideTo(a)
            }
        },
        N = {
            loopCreate: function(e) {
                const t = this,
                    {
                        params: n,
                        slidesEl: r
                    } = t;
                !n.loop || t.virtual && t.params.virtual.enabled || (h(r, `.${n.slideClass}, swiper-slide`).forEach(((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t)
                })), t.loopFix({
                    slideRealIndex: e,
                    direction: n.centeredSlides ? void 0 : "next"
                }))
            },
            loopFix: function(e) {
                let {
                    slideRealIndex: t,
                    slideTo: n = !0,
                    direction: r,
                    setTranslate: i,
                    activeSlideIndex: a,
                    byController: o,
                    byMousewheel: s
                } = void 0 === e ? {} : e;
                const l = this;
                if (!l.params.loop) return;
                l.emit("beforeLoopFix");
                const {
                    slides: c,
                    allowSlidePrev: u,
                    allowSlideNext: d,
                    slidesEl: p,
                    params: f
                } = l;
                if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) return n && (f.centeredSlides || 0 !== l.snapIndex ? f.centeredSlides && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = u, l.allowSlideNext = d, void l.emit("loopFix");
                const h = "auto" === f.slidesPerView ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(f.slidesPerView, 10));
                let m = f.loopedSlides || h;
                m % f.slidesPerGroup != 0 && (m += f.slidesPerGroup - m % f.slidesPerGroup), l.loopedSlides = m;
                const g = [],
                    v = [];
                let y = l.activeIndex;
                void 0 === a ? a = l.getSlideIndex(l.slides.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : y = a;
                const b = "next" === r || !r,
                    w = "prev" === r || !r;
                let x = 0,
                    S = 0;
                if (a < m) {
                    x = Math.max(m - a, f.slidesPerGroup);
                    for (let e = 0; e < m - a; e += 1) {
                        const t = e - Math.floor(e / c.length) * c.length;
                        g.push(c.length - t - 1)
                    }
                } else if (a > l.slides.length - 2 * m) {
                    S = Math.max(a - (l.slides.length - 2 * m), f.slidesPerGroup);
                    for (let e = 0; e < S; e += 1) {
                        const t = e - Math.floor(e / c.length) * c.length;
                        v.push(t)
                    }
                }
                if (w && g.forEach((e => {
                        l.slides[e].swiperLoopMoveDOM = !0, p.prepend(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                    })), b && v.forEach((e => {
                        l.slides[e].swiperLoopMoveDOM = !0, p.append(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                    })), l.recalcSlides(), "auto" === f.slidesPerView && l.updateSlides(), f.watchSlidesProgress && l.updateSlidesOffset(), n)
                    if (g.length > 0 && w)
                        if (void 0 === t) {
                            const e = l.slidesGrid[y],
                                t = l.slidesGrid[y + x] - e;
                            s ? l.setTranslate(l.translate - t) : (l.slideTo(y + x, 0, !1, !0), i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                        } else i && (l.slideToLoop(t, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate);
                else if (v.length > 0 && b)
                    if (void 0 === t) {
                        const e = l.slidesGrid[y],
                            t = l.slidesGrid[y - S] - e;
                        s ? l.setTranslate(l.translate - t) : (l.slideTo(y - S, 0, !1, !0), i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                    } else l.slideToLoop(t, 0, !1, !0);
                if (l.allowSlidePrev = u, l.allowSlideNext = d, l.controller && l.controller.control && !o) {
                    const e = {
                        slideRealIndex: t,
                        direction: r,
                        setTranslate: i,
                        activeSlideIndex: a,
                        byController: !0
                    };
                    Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({
                            ...e,
                            slideTo: t.params.slidesPerView === f.slidesPerView && n
                        })
                    })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
                        ...e,
                        slideTo: l.controller.control.params.slidesPerView === f.slidesPerView && n
                    })
                }
                l.emit("loopFix")
            },
            loopDestroy: function() {
                const e = this,
                    {
                        params: t,
                        slidesEl: n
                    } = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const r = [];
                e.slides.forEach((e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    r[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), r.forEach((e => {
                    n.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
        };

    function R(e) {
        const t = this,
            n = r(),
            i = a(),
            o = t.touchEventsData;
        o.evCache.push(e);
        const {
            params: l,
            touches: c,
            enabled: u
        } = t;
        if (!u) return;
        if (!l.simulateTouch && "mouse" === e.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let d = e;
        d.originalEvent && (d = d.originalEvent);
        let p = d.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
        if ("which" in d && 3 === d.which) return;
        if ("button" in d && d.button > 0) return;
        if (o.isTouched && o.isMoved) return;
        const f = !!l.noSwipingClass && "" !== l.noSwipingClass,
            h = e.composedPath ? e.composedPath() : e.path;
        f && d.target && d.target.shadowRoot && h && (p = h[0]);
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            g = !(!d.target || !d.target.shadowRoot);
        if (l.noSwiping && (g ? function(e, t) {
                return void 0 === t && (t = this),
                    function t(n) {
                        if (!n || n === r() || n === a()) return null;
                        n.assignedSlot && (n = n.assignedSlot);
                        const i = n.closest(e);
                        return i || n.getRootNode ? i || t(n.getRootNode().host) : null
                    }(t)
            }(m, p) : p.closest(m))) return void(t.allowClick = !0);
        if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
        c.currentX = d.pageX, c.currentY = d.pageY;
        const v = c.currentX,
            y = c.currentY,
            b = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            w = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (b && (v <= w || v >= i.innerWidth - w)) {
            if ("prevent" !== b) return;
            e.preventDefault()
        }
        Object.assign(o, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), c.startX = v, c.startY = y, o.touchStartTime = s(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (o.allowThresholdMove = !1);
        let x = !0;
        p.matches(o.focusableElements) && (x = !1, "SELECT" === p.nodeName && (o.isTouched = !1)), n.activeElement && n.activeElement.matches(o.focusableElements) && n.activeElement !== p && n.activeElement.blur();
        const S = x && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !S || p.isContentEditable || d.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", d)
    }

    function F(e) {
        const t = r(),
            n = this,
            i = n.touchEventsData,
            {
                params: a,
                touches: o,
                rtlTranslate: l,
                enabled: c
            } = n;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let u = e;
        if (u.originalEvent && (u = u.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", u));
        const d = i.evCache.findIndex((e => e.pointerId === u.pointerId));
        d >= 0 && (i.evCache[d] = u);
        const p = i.evCache.length > 1 ? i.evCache[0] : u,
            f = p.pageX,
            h = p.pageY;
        if (u.preventedByNestedSwiper) return o.startX = f, void(o.startY = h);
        if (!n.allowTouchMove) return u.target.matches(i.focusableElements) || (n.allowClick = !1), void(i.isTouched && (Object.assign(o, {
            startX: f,
            startY: h,
            prevX: n.touches.currentX,
            prevY: n.touches.currentY,
            currentX: f,
            currentY: h
        }), i.touchStartTime = s()));
        if (a.touchReleaseOnEdges && !a.loop)
            if (n.isVertical()) {
                if (h < o.startY && n.translate <= n.maxTranslate() || h > o.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (f < o.startX && n.translate <= n.maxTranslate() || f > o.startX && n.translate >= n.minTranslate()) return;
        if (t.activeElement && u.target === t.activeElement && u.target.matches(i.focusableElements)) return i.isMoved = !0, void(n.allowClick = !1);
        if (i.allowTouchCallbacks && n.emit("touchMove", u), u.targetTouches && u.targetTouches.length > 1) return;
        o.currentX = f, o.currentY = h;
        const m = o.currentX - o.startX,
            g = o.currentY - o.startY;
        if (n.params.threshold && Math.sqrt(m ** 2 + g ** 2) < n.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            n.isHorizontal() && o.currentY === o.startY || n.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : m * m + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, i.isScrolling = n.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (i.isScrolling && n.emit("touchMoveOpposite", u), void 0 === i.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (i.startMoving = !0)), i.isScrolling || n.zoom && n.params.zoom && n.params.zoom.enabled && i.evCache.length > 1) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        n.allowClick = !1, !a.cssMode && u.cancelable && u.preventDefault(), a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let v = n.isHorizontal() ? m : g,
            y = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        a.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), y = Math.abs(y) * (l ? 1 : -1)), o.diff = v, v *= a.touchRatio, l && (v = -v, y = -y);
        const b = n.touchesDirection;
        n.swipeDirection = v > 0 ? "prev" : "next", n.touchesDirection = y > 0 ? "prev" : "next";
        const w = n.params.loop && !a.cssMode;
        if (!i.isMoved) {
            if (w && n.loopFix({
                    direction: n.swipeDirection
                }), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0
                });
                n.wrapperEl.dispatchEvent(e)
            }
            i.allowMomentumBounce = !1, !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", u)
        }
        let x;
        i.isMoved && b !== n.touchesDirection && w && Math.abs(v) >= 1 && (n.loopFix({
            direction: n.swipeDirection,
            setTranslate: !0
        }), x = !0), n.emit("sliderMove", u), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
        let S = !0,
            E = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (E = 0), v > 0 ? (w && !x && i.currentTranslate > (a.centeredSlides ? n.minTranslate() - n.size / 2 : n.minTranslate()) && n.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), i.currentTranslate > n.minTranslate() && (S = !1, a.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + v) ** E))) : v < 0 && (w && !x && i.currentTranslate < (a.centeredSlides ? n.maxTranslate() + n.size / 2 : n.maxTranslate()) && n.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: n.slides.length - ("auto" === a.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
            }), i.currentTranslate < n.maxTranslate() && (S = !1, a.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - v) ** E))), S && (u.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
            if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, void(o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && n.freeMode || a.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
    }

    function $(e) {
        const t = this,
            n = t.touchEventsData,
            r = n.evCache.findIndex((t => t.pointerId === e.pointerId));
        if (r >= 0 && n.evCache.splice(r, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type) && (!["pointercancel", "contextmenu"].includes(e.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        const {
            params: i,
            touches: a,
            rtlTranslate: l,
            slidesGrid: c,
            enabled: u
        } = t;
        if (!u) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", d), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = s(),
            f = p - n.touchStartTime;
        if (t.allowClick) {
            const e = d.path || d.composedPath && d.composedPath();
            t.updateClickedSlide(e && e[0] || d.target), t.emit("tap click", d), f < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)
        }
        if (n.lastClickTime = s(), o((() => {
                t.destroyed || (t.allowClick = !0)
            })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === a.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        let h;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, h = i.followFinger ? l ? t.translate : -t.translate : -n.currentTranslate, i.cssMode) return;
        if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0,
            g = t.slidesSizesGrid[0];
        for (let e = 0; e < c.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
            const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== c[e + t] ? h >= c[e] && h < c[e + t] && (m = e, g = c[e + t] - c[e]) : h >= c[e] && (m = e, g = c[c.length - 1] - c[c.length - 2])
        }
        let v = null,
            y = null;
        i.rewind && (t.isBeginning ? y = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
        const b = (h - c[m]) / g,
            w = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (f > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (b >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : m + w) : t.slideTo(m)), "prev" === t.swipeDirection && (b > 1 - i.longSwipesRatio ? t.slideTo(m + w) : null !== y && b < 0 && Math.abs(b) > i.longSwipesRatio ? t.slideTo(y) : t.slideTo(m))
        } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + w), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : m)) : d.target === t.navigation.nextEl ? t.slideTo(m + w) : t.slideTo(m)
        }
    }

    function H() {
        const e = this,
            {
                params: t,
                el: n
            } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: r,
            allowSlidePrev: i,
            snapGrid: a
        } = e, o = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const s = o && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || s ? e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
    }

    function z(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function q() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: n,
                enabled: r
            } = e;
        if (!r) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    function B(e) {
        const t = this;
        L(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }
    let W = !1;

    function V() {}
    const G = (e, t) => {
            const n = r(),
                {
                    params: i,
                    el: a,
                    wrapperEl: o,
                    device: s
                } = e,
                l = !!i.nested,
                c = "on" === t ? "addEventListener" : "removeEventListener",
                u = t;
            a[c]("pointerdown", e.onTouchStart, {
                passive: !1
            }), n[c]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: l
            }), n[c]("pointerup", e.onTouchEnd, {
                passive: !0
            }), n[c]("pointercancel", e.onTouchEnd, {
                passive: !0
            }), n[c]("pointerout", e.onTouchEnd, {
                passive: !0
            }), n[c]("pointerleave", e.onTouchEnd, {
                passive: !0
            }), n[c]("contextmenu", e.onTouchEnd, {
                passive: !0
            }), (i.preventClicks || i.preventClicksPropagation) && a[c]("click", e.onClick, !0), i.cssMode && o[c]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e[u]("observerUpdate", H, !0), a[c]("load", e.onLoad, {
                capture: !0
            })
        },
        X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var U = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function Y(e, t) {
        return function(n) {
            void 0 === n && (n = {});
            const r = Object.keys(n)[0],
                i = n[r];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === e[r] && (e[r] = {
                auto: !0
            }), r in e && "enabled" in i ? (!0 === e[r] && (e[r] = {
                enabled: !0
            }), "object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
                enabled: !1
            }), u(t, n)) : u(t, n)) : u(t, n)
        }
    }
    const J = {
            eventsEmitter: A,
            update: I,
            translate: P,
            transition: {
                setTransition: function(e, t) {
                    const n = this;
                    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`, n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), n.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const n = this,
                        {
                            params: r
                        } = n;
                    r.cssMode || (r.autoHeight && n.updateAutoHeight(), O({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const n = this,
                        {
                            params: r
                        } = n;
                    n.animating = !1, r.cssMode || (n.setTransition(0), O({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: j,
            loop: N,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                        t.__preventObserver__ = !1
                    }))
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                        e.__preventObserver__ = !1
                    })))
                }
            },
            events: {
                attachEvents: function() {
                    const e = this,
                        t = r(),
                        {
                            params: n
                        } = e;
                    e.onTouchStart = R.bind(e), e.onTouchMove = F.bind(e), e.onTouchEnd = $.bind(e), n.cssMode && (e.onScroll = q.bind(e)), e.onClick = z.bind(e), e.onLoad = B.bind(e), W || (t.addEventListener("touchstart", V), W = !0), G(e, "on")
                },
                detachEvents: function() {
                    G(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            realIndex: t,
                            initialized: n,
                            params: r,
                            el: i
                        } = e,
                        a = r.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const s = (o in a ? a[o] : void 0) || e.originalParams,
                        l = X(e, r),
                        c = X(e, s),
                        d = r.enabled;
                    l && !c ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && c && (i.classList.add(`${r.containerModifierClass}grid`), (s.grid.fill && "column" === s.grid.fill || !s.grid.fill && "column" === r.grid.fill) && i.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        if (void 0 === s[t]) return;
                        const n = r[t] && r[t].enabled,
                            i = s[t] && s[t].enabled;
                        n && !i && e[t].disable(), !n && i && e[t].enable()
                    }));
                    const p = s.direction && s.direction !== r.direction,
                        f = r.loop && (s.slidesPerView !== r.slidesPerView || p);
                    p && n && e.changeDirection(), u(e.params, s);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), d && !h ? e.disable() : !d && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", s), f && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", s)
                },
                getBreakpoint: function(e, t, n) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                    let r = !1;
                    const i = a(),
                        o = "window" === t ? i.innerHeight : n.clientHeight,
                        s = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: o * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    s.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < s.length; e += 1) {
                        const {
                            point: a,
                            value: o
                        } = s[e];
                        "window" === t ? i.matchMedia(`(min-width: ${o}px)`).matches && (r = a) : o <= n.clientWidth && (r = a)
                    }
                    return r || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: n
                        } = e,
                        {
                            slidesOffsetBefore: r
                        } = n;
                    if (r) {
                        const t = e.slides.length - 1,
                            n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                        e.isLocked = e.size > n
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: n,
                            rtl: r,
                            el: i,
                            device: a
                        } = e,
                        o = function(e, t) {
                            const n = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((r => {
                                    e[r] && n.push(t + r)
                                })) : "string" == typeof e && n.push(t + e)
                            })), n
                        }(["initialized", n.direction, {
                            "free-mode": e.params.freeMode && n.freeMode.enabled
                        }, {
                            autoheight: n.autoHeight
                        }, {
                            rtl: r
                        }, {
                            grid: n.grid && n.grid.rows > 1
                        }, {
                            "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
                        }, {
                            android: a.android
                        }, {
                            ios: a.ios
                        }, {
                            "css-mode": n.cssMode
                        }, {
                            centered: n.cssMode && n.centeredSlides
                        }, {
                            "watch-progress": n.watchSlidesProgress
                        }], n.containerModifierClass);
                    t.push(...o), i.classList.add(...t), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        el: e,
                        classNames: t
                    } = this;
                    e.classList.remove(...t), this.emitContainerClasses()
                }
            }
        },
        K = {};
    class Q {
        constructor() {
            let e, t;
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = u({}, t), e && !t.el && (t.el = e);
            const o = r();
            if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
                const e = [];
                return o.querySelectorAll(t.el).forEach((n => {
                    const r = u({}, t, {
                        el: n
                    });
                    e.push(new Q(r))
                })), e
            }
            const s = this;
            s.__swiper__ = !0, s.support = C(), s.device = _({
                userAgent: t.userAgent
            }), s.browser = D(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
            const l = {};
            s.modules.forEach((e => {
                e({
                    params: t,
                    swiper: s,
                    extendParams: Y(t, l),
                    on: s.on.bind(s),
                    once: s.once.bind(s),
                    off: s.off.bind(s),
                    emit: s.emit.bind(s)
                })
            }));
            const c = u({}, U, l);
            return s.params = u({}, c, K, t), s.originalParams = u({}, s.params), s.passedParams = u({}, t), s.params && s.params.on && Object.keys(s.params.on).forEach((e => {
                s.on(e, s.params.on[e])
            })), s.params && s.params.onAny && s.onAny(s.params.onAny), Object.assign(s, {
                enabled: s.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === s.params.direction,
                isVertical: () => "vertical" === s.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: s.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), s.emit("_swiper"), s.params.init && s.init(), s
        }
        getSlideIndex(e) {
            const {
                slidesEl: t,
                params: n
            } = this, r = y(h(t, `.${n.slideClass}, swiper-slide`)[0]);
            return y(e) - r
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
            const {
                slidesEl: e,
                params: t
            } = this;
            this.slides = h(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const n = this;
            e = Math.min(Math.max(e, 0), 1);
            const r = n.minTranslate(),
                i = (n.maxTranslate() - r) * e + r;
            n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((n => {
                const r = e.getSlideClasses(n);
                t.push({
                    slideEl: n,
                    classNames: r
                }), e.emit("_slideClass", n, r)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: n,
                slides: r,
                slidesGrid: i,
                slidesSizesGrid: a,
                size: o,
                activeIndex: s
            } = this;
            let l = 1;
            if (n.centeredSlides) {
                let e, t = r[s] ? r[s].swiperSlideSize : 0;
                for (let n = s + 1; n < r.length; n += 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > o && (e = !0));
                for (let n = s - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > o && (e = !0))
            } else if ("current" === e)
                for (let e = s + 1; e < r.length; e += 1)(t ? i[e] + a[e] - i[s] < o : i[e] - i[s] < o) && (l += 1);
            else
                for (let e = s - 1; e >= 0; e -= 1) i[s] - i[e] < o && (l += 1);
            return l
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: n
            } = e;

            function r() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            if (n.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && L(e, t)
                })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), n.freeMode && n.freeMode.enabled && !n.cssMode) r(), n.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === n.slidesPerView || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
                    const t = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t.length - 1, 0, !1, !0)
                } else i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || r()
            }
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const n = this,
                r = n.params.direction;
            return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.el.classList.remove(`${n.params.containerModifierClass}${r}`), n.el.classList.add(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.forEach((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), n.emit("changeDirection"), t && n.update()), n
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let n = e || t.params.el;
            if ("string" == typeof n && (n = document.querySelector(n)), !n) return !1;
            n.swiper = t, n.parentNode && n.parentNode.host && "SWIPER-CONTAINER" === n.parentNode.host.nodeName && (t.isElement = !0);
            const r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let i = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(r()) : h(n, r())[0];
            return !i && t.params.createElements && (i = m("div", t.params.wrapperClass), n.append(i), h(n, `.${t.params.slideClass}`).forEach((e => {
                i.append(e)
            }))), Object.assign(t, {
                el: n,
                wrapperEl: i,
                slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : i,
                hostEl: t.isElement ? n.parentNode.host : n,
                mounted: !0,
                rtl: "rtl" === n.dir.toLowerCase() || "rtl" === v(n, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === v(n, "direction")),
                wrongRTL: "-webkit-box" === v(i, "display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            if (!1 === t.mount(e)) return t;
            t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
            const n = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((e => {
                e.complete ? L(t, e) : e.addEventListener("load", (e => {
                    L(t, e.target)
                }))
            })), k(t), t.initialized = !0, k(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const n = this,
                {
                    params: r,
                    el: i,
                    wrapperEl: a,
                    slides: o
                } = n;
            return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttribute("style"), a.removeAttribute("style"), o && o.length && o.forEach((e => {
                e.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
            }))), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                n.off(e)
            })), !1 !== e && (n.el.swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(n)), n.destroyed = !0), null
        }
        static extendDefaults(e) {
            u(K, e)
        }
        static get extendedDefaults() {
            return K
        }
        static get defaults() {
            return U
        }
        static installModule(e) {
            Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
            const t = Q.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => Q.installModule(e))), Q) : (Q.installModule(e), Q)
        }
    }

    function Z(e, t, n, r) {
        return e.params.createElements && Object.keys(r).forEach((i => {
            if (!n[i] && !0 === n.auto) {
                let a = h(e.el, `.${r[i]}`)[0];
                a || (a = m("div", r[i]), a.className = r[i], e.el.append(a)), n[i] = a, t[i] = a
            }
        })), n
    }

    function ee(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function te(e) {
        const t = this,
            {
                params: n,
                slidesEl: r
            } = t;
        n.loop && t.loopDestroy();
        const i = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e, r.append(t.children[0]), t.innerHTML = ""
            } else r.append(e)
        };
        if ("object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
        else i(e);
        t.recalcSlides(), n.loop && t.loopCreate(), n.observer && !t.isElement || t.update()
    }

    function ne(e) {
        const t = this,
            {
                params: n,
                activeIndex: r,
                slidesEl: i
            } = t;
        n.loop && t.loopDestroy();
        let a = r + 1;
        const o = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = ""
            } else i.prepend(e)
        };
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && o(e[t]);
            a = r + e.length
        } else o(e);
        t.recalcSlides(), n.loop && t.loopCreate(), n.observer && !t.isElement || t.update(), t.slideTo(a, 0, !1)
    }

    function re(e, t) {
        const n = this,
            {
                params: r,
                activeIndex: i,
                slidesEl: a
            } = n;
        let o = i;
        r.loop && (o -= n.loopedSlides, n.loopDestroy(), n.recalcSlides());
        const s = n.slides.length;
        if (e <= 0) return void n.prependSlide(t);
        if (e >= s) return void n.appendSlide(t);
        let l = o > e ? o + 1 : o;
        const c = [];
        for (let t = s - 1; t >= e; t -= 1) {
            const e = n.slides[t];
            e.remove(), c.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            l = o > e ? o + t.length : o
        } else a.append(t);
        for (let e = 0; e < c.length; e += 1) a.append(c[e]);
        n.recalcSlides(), r.loop && n.loopCreate(), r.observer && !n.isElement || n.update(), r.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
    }

    function ie(e) {
        const t = this,
            {
                params: n,
                activeIndex: r
            } = t;
        let i = r;
        n.loop && (i -= t.loopedSlides, t.loopDestroy());
        let a, o = i;
        if ("object" == typeof e && "length" in e) {
            for (let n = 0; n < e.length; n += 1) a = e[n], t.slides[a] && t.slides[a].remove(), a < o && (o -= 1);
            o = Math.max(o, 0)
        } else a = e, t.slides[a] && t.slides[a].remove(), a < o && (o -= 1), o = Math.max(o, 0);
        t.recalcSlides(), n.loop && t.loopCreate(), n.observer && !t.isElement || t.update(), n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
    }

    function ae() {
        const e = this,
            t = [];
        for (let n = 0; n < e.slides.length; n += 1) t.push(n);
        e.removeSlide(t)
    }

    function oe(e) {
        const {
            effect: t,
            swiper: n,
            on: r,
            setTranslate: i,
            setTransition: a,
            overwriteParams: o,
            perspective: s,
            recreateShadows: l,
            getEffectParams: c
        } = e;
        let u;
        r("beforeInit", (() => {
            if (n.params.effect !== t) return;
            n.classNames.push(`${n.params.containerModifierClass}${t}`), s && s() && n.classNames.push(`${n.params.containerModifierClass}3d`);
            const e = o ? o() : {};
            Object.assign(n.params, e), Object.assign(n.originalParams, e)
        })), r("setTranslate", (() => {
            n.params.effect === t && i()
        })), r("setTransition", ((e, r) => {
            n.params.effect === t && a(r)
        })), r("transitionEnd", (() => {
            if (n.params.effect === t && l) {
                if (!c || !c().slideShadows) return;
                n.slides.forEach((e => {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                })), l()
            }
        })), r("virtualUpdate", (() => {
            n.params.effect === t && (n.slides.length || (u = !0), requestAnimationFrame((() => {
                u && n.slides && n.slides.length && (i(), u = !1)
            })))
        }))
    }

    function se(e, t) {
        const n = f(t);
        return n !== t && (n.style.backfaceVisibility = "hidden", n.style["-webkit-backface-visibility"] = "hidden"), n
    }

    function le(e) {
        let {
            swiper: t,
            duration: n,
            transformElements: r,
            allSlides: i
        } = e;
        const {
            activeIndex: a
        } = t;
        if (t.params.virtualTranslate && 0 !== n) {
            let e, n = !1;
            e = i ? r : r.filter((e => {
                const n = e.classList.contains("swiper-slide-transform") ? (e => e.parentElement ? e.parentElement : t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0])(e) : e;
                return t.getSlideIndex(n) === a
            })), e.forEach((e => {
                w(e, (() => {
                    if (n) return;
                    if (!t || t.destroyed) return;
                    n = !0, t.animating = !1;
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.wrapperEl.dispatchEvent(e)
                }))
            }))
        }
    }

    function ce(e, t, n) {
        const r = `swiper-slide-shadow${n?`-${n}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
            i = f(t);
        let a = i.querySelector(`.${r.split(" ").join(".")}`);
        return a || (a = m("div", r.split(" ")), i.append(a)), a
    }
    Object.keys(J).forEach((e => {
        Object.keys(J[e]).forEach((t => {
            Q.prototype[t] = J[e][t]
        }))
    })), Q.use([function(e) {
        let {
            swiper: t,
            on: n,
            emit: r
        } = e;
        const i = a();
        let o = null,
            s = null;
        const l = () => {
                t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
            },
            c = () => {
                t && !t.destroyed && t.initialized && r("orientationchange")
            };
        n("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (o = new ResizeObserver((e => {
                s = i.requestAnimationFrame((() => {
                    const {
                        width: n,
                        height: r
                    } = t;
                    let i = n,
                        a = r;
                    e.forEach((e => {
                        let {
                            contentBoxSize: n,
                            contentRect: r,
                            target: o
                        } = e;
                        o && o !== t.el || (i = r ? r.width : (n[0] || n).inlineSize, a = r ? r.height : (n[0] || n).blockSize)
                    })), i === n && a === r || l()
                }))
            })), o.observe(t.el)) : (i.addEventListener("resize", l), i.addEventListener("orientationchange", c))
        })), n("destroy", (() => {
            s && i.cancelAnimationFrame(s), o && o.unobserve && t.el && (o.unobserve(t.el), o = null), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", c)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r,
            emit: i
        } = e;
        const o = [],
            s = a(),
            l = function(e, n) {
                void 0 === n && (n = {});
                const r = new(s.MutationObserver || s.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const n = function() {
                        i("observerUpdate", e[0])
                    };
                    s.requestAnimationFrame ? s.requestAnimationFrame(n) : s.setTimeout(n, 0)
                }));
                r.observe(e, {
                    attributes: void 0 === n.attributes || n.attributes,
                    childList: void 0 === n.childList || n.childList,
                    characterData: void 0 === n.characterData || n.characterData
                }), o.push(r)
            };
        n({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), r("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = b(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) l(e[t])
                }
                l(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }), l(t.wrapperEl, {
                    attributes: !1
                })
            }
        })), r("destroy", (() => {
            o.forEach((e => {
                e.disconnect()
            })), o.splice(0, o.length)
        }))
    }]);
    const ue = [function(e) {
        let t, {
            swiper: n,
            extendParams: i,
            on: a,
            emit: o
        } = e;
        i({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        const s = r();
        n.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const l = s.createElement("div");

        function c(e, t) {
            const r = n.params.virtual;
            if (r.cache && n.virtual.cache[t]) return n.virtual.cache[t];
            let i;
            return r.renderSlide ? (i = r.renderSlide.call(n, e, t), "string" == typeof i && (l.innerHTML = i, i = l.children[0])) : i = n.isElement ? m("swiper-slide") : m("div", n.params.slideClass), i.setAttribute("data-swiper-slide-index", t), r.renderSlide || (i.innerHTML = e), r.cache && (n.virtual.cache[t] = i), i
        }

        function u(e) {
            const {
                slidesPerView: t,
                slidesPerGroup: r,
                centeredSlides: i,
                loop: a
            } = n.params, {
                addSlidesBefore: s,
                addSlidesAfter: l
            } = n.params.virtual, {
                from: u,
                to: d,
                slides: p,
                slidesGrid: f,
                offset: m
            } = n.virtual;
            n.params.cssMode || n.updateActiveIndex();
            const g = n.activeIndex || 0;
            let v, y, b;
            v = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top", i ? (y = Math.floor(t / 2) + r + l, b = Math.floor(t / 2) + r + s) : (y = t + (r - 1) + l, b = (a ? t : r) + s);
            let w = g - b,
                x = g + y;
            a || (w = Math.max(w, 0), x = Math.min(x, p.length - 1));
            let S = (n.slidesGrid[w] || 0) - (n.slidesGrid[0] || 0);

            function E() {
                n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), o("virtualUpdate")
            }
            if (a && g >= b ? (w -= b, i || (S += n.slidesGrid[0])) : a && g < b && (w = -b, i && (S += n.slidesGrid[0])), Object.assign(n.virtual, {
                    from: w,
                    to: x,
                    offset: S,
                    slidesGrid: n.slidesGrid,
                    slidesBefore: b,
                    slidesAfter: y
                }), u === w && d === x && !e) return n.slidesGrid !== f && S !== m && n.slides.forEach((e => {
                e.style[v] = S - Math.abs(n.cssOverflowAdjustment()) + "px"
            })), n.updateProgress(), void o("virtualUpdate");
            if (n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, {
                offset: S,
                from: w,
                to: x,
                slides: function() {
                    const e = [];
                    for (let t = w; t <= x; t += 1) e.push(p[t]);
                    return e
                }()
            }), void(n.params.virtual.renderExternalUpdate ? E() : o("virtualUpdate"));
            const T = [],
                C = [],
                _ = e => {
                    let t = e;
                    return e < 0 ? t = p.length + e : t >= p.length && (t -= p.length), t
                };
            if (e) n.slidesEl.querySelectorAll(`.${n.params.slideClass}, swiper-slide`).forEach((e => {
                e.remove()
            }));
            else
                for (let e = u; e <= d; e += 1)
                    if (e < w || e > x) {
                        const t = _(e);
                        n.slidesEl.querySelectorAll(`.${n.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach((e => {
                            e.remove()
                        }))
                    } const D = a ? -p.length : 0,
                A = a ? 2 * p.length : p.length;
            for (let t = D; t < A; t += 1)
                if (t >= w && t <= x) {
                    const n = _(t);
                    void 0 === d || e ? C.push(n) : (t > d && C.push(n), t < u && T.push(n))
                } if (C.forEach((e => {
                    n.slidesEl.append(c(p[e], e))
                })), a)
                for (let e = T.length - 1; e >= 0; e -= 1) {
                    const t = T[e];
                    n.slidesEl.prepend(c(p[t], t))
                } else T.sort(((e, t) => t - e)), T.forEach((e => {
                    n.slidesEl.prepend(c(p[e], e))
                }));
            h(n.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                e.style[v] = S - Math.abs(n.cssOverflowAdjustment()) + "px"
            })), E()
        }
        a("beforeInit", (() => {
            if (!n.params.virtual.enabled) return;
            let e;
            if (void 0 === n.passedParams.virtual.slides) {
                const t = [...n.slidesEl.children].filter((e => e.matches(`.${n.params.slideClass}, swiper-slide`)));
                t && t.length && (n.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t), n.virtual.cache[t] = e, e.remove()
                })))
            }
            e || (n.virtual.slides = n.params.virtual.slides), n.classNames.push(`${n.params.containerModifierClass}virtual`), n.params.watchSlidesProgress = !0, n.originalParams.watchSlidesProgress = !0, n.params.initialSlide || u()
        })), a("setTranslate", (() => {
            n.params.virtual.enabled && (n.params.cssMode && !n._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                u()
            }), 100)) : u())
        })), a("init update resize", (() => {
            n.params.virtual.enabled && n.params.cssMode && d(n.wrapperEl, "--swiper-virtual-size", `${n.virtualSize}px`)
        })), Object.assign(n.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (let t = 0; t < e.length; t += 1) e[t] && n.virtual.slides.push(e[t]);
                else n.virtual.slides.push(e);
                u(!0)
            },
            prependSlide: function(e) {
                const t = n.activeIndex;
                let r = t + 1,
                    i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && n.virtual.slides.unshift(e[t]);
                    r = t + e.length, i = e.length
                } else n.virtual.slides.unshift(e);
                if (n.params.virtual.cache) {
                    const e = n.virtual.cache,
                        t = {};
                    Object.keys(e).forEach((n => {
                        const r = e[n],
                            a = r.getAttribute("data-swiper-slide-index");
                        a && r.setAttribute("data-swiper-slide-index", parseInt(a, 10) + i), t[parseInt(n, 10) + i] = r
                    })), n.virtual.cache = t
                }
                u(!0), n.slideTo(r, 0)
            },
            removeSlide: function(e) {
                if (null == e) return;
                let t = n.activeIndex;
                if (Array.isArray(e))
                    for (let r = e.length - 1; r >= 0; r -= 1) n.virtual.slides.splice(e[r], 1), n.params.virtual.cache && delete n.virtual.cache[e[r]], e[r] < t && (t -= 1), t = Math.max(t, 0);
                else n.virtual.slides.splice(e, 1), n.params.virtual.cache && delete n.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                u(!0), n.slideTo(t, 0)
            },
            removeAllSlides: function() {
                n.virtual.slides = [], n.params.virtual.cache && (n.virtual.cache = {}), u(!0), n.slideTo(0, 0)
            },
            update: u
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: i,
            emit: o
        } = e;
        const s = r(),
            l = a();

        function c(e) {
            if (!t.enabled) return;
            const {
                rtlTranslate: n
            } = t;
            let r = e;
            r.originalEvent && (r = r.originalEvent);
            const i = r.keyCode || r.charCode,
                a = t.params.keyboard.pageUpDown,
                c = a && 33 === i,
                u = a && 34 === i,
                d = 37 === i,
                p = 39 === i,
                f = 38 === i,
                h = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && p || t.isVertical() && h || u)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && d || t.isVertical() && f || c)) return !1;
            if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || s.activeElement && s.activeElement.nodeName && ("input" === s.activeElement.nodeName.toLowerCase() || "textarea" === s.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (c || u || d || p || f || h)) {
                    let e = !1;
                    if (b(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === b(t.el, `.${t.params.slideActiveClass}`).length) return;
                    const r = t.el,
                        i = r.clientWidth,
                        a = r.clientHeight,
                        o = l.innerWidth,
                        s = l.innerHeight,
                        c = g(r);
                    n && (c.left -= r.scrollLeft);
                    const u = [
                        [c.left, c.top],
                        [c.left + i, c.top],
                        [c.left, c.top + a],
                        [c.left + i, c.top + a]
                    ];
                    for (let t = 0; t < u.length; t += 1) {
                        const n = u[t];
                        if (n[0] >= 0 && n[0] <= o && n[1] >= 0 && n[1] <= s) {
                            if (0 === n[0] && 0 === n[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((c || u || d || p) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((u || p) && !n || (c || d) && n) && t.slideNext(), ((c || d) && !n || (u || p) && n) && t.slidePrev()) : ((c || u || f || h) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (u || h) && t.slideNext(), (c || f) && t.slidePrev()), o("keyPress", i)
            }
        }

        function u() {
            t.keyboard.enabled || (s.addEventListener("keydown", c), t.keyboard.enabled = !0)
        }

        function d() {
            t.keyboard.enabled && (s.removeEventListener("keydown", c), t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        }, n({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), i("init", (() => {
            t.params.keyboard.enabled && u()
        })), i("destroy", (() => {
            t.keyboard.enabled && d()
        })), Object.assign(t.keyboard, {
            enable: u,
            disable: d
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r,
            emit: i
        } = e;
        const l = a();
        let c;
        n({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        }), t.mousewheel = {
            enabled: !1
        };
        let u, d = s();
        const p = [];

        function f() {
            t.enabled && (t.mouseEntered = !0)
        }

        function h() {
            t.enabled && (t.mouseEntered = !1)
        }

        function m(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && s() - d < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && s() - d < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), d = (new l.Date).getTime(), 1))
        }

        function g(e) {
            let n = e,
                r = !0;
            if (!t.enabled) return;
            if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
            const a = t.params.mousewheel;
            t.params.cssMode && n.preventDefault();
            let l = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (l = document.querySelector(t.params.mousewheel.eventsTarget));
            const d = l && l.contains(n.target);
            if (!t.mouseEntered && !d && !a.releaseOnEdges) return !0;
            n.originalEvent && (n = n.originalEvent);
            let f = 0;
            const h = t.rtlTranslate ? -1 : 1,
                g = function(e) {
                    let t = 0,
                        n = 0,
                        r = 0,
                        i = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, i = 10 * n, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = i, i = 0), (r || i) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, i *= 40) : (r *= 800, i *= 800)), r && !t && (t = r < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: r,
                        pixelY: i
                    }
                }(n);
            if (a.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                    f = -g.pixelX * h
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                    f = -g.pixelY
                }
            else f = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
            if (0 === f) return !0;
            a.invert && (f = -f);
            let v = t.getTranslate() + f * a.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), r = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), r && t.params.nested && n.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                        time: s(),
                        delta: Math.abs(f),
                        direction: Math.sign(f)
                    },
                    r = u && e.time < u.time + 500 && e.delta <= u.delta && e.direction === u.direction;
                if (!r) {
                    u = void 0;
                    let s = t.getTranslate() + f * a.sensitivity;
                    const l = t.isBeginning,
                        d = t.isEnd;
                    if (s >= t.minTranslate() && (s = t.minTranslate()), s <= t.maxTranslate() && (s = t.maxTranslate()), t.setTransition(0), t.setTranslate(s), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!l && t.isBeginning || !d && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                            direction: e.direction < 0 ? "next" : "prev",
                            byMousewheel: !0
                        }), t.params.freeMode.sticky) {
                        clearTimeout(c), c = void 0, p.length >= 15 && p.shift();
                        const n = p.length ? p[p.length - 1] : void 0,
                            r = p[0];
                        if (p.push(e), n && (e.delta > n.delta || e.direction !== n.direction)) p.splice(0);
                        else if (p.length >= 15 && e.time - r.time < 500 && r.delta - e.delta >= 1 && e.delta <= 6) {
                            const n = f > 0 ? .8 : .2;
                            u = e, p.splice(0), c = o((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, n)
                            }), 0)
                        }
                        c || (c = o((() => {
                            u = e, p.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (r || i("scroll", n), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), a.releaseOnEdges && (s === t.minTranslate() || s === t.maxTranslate())) return !0
                }
            } else {
                const n = {
                    time: s(),
                    delta: Math.abs(f),
                    direction: Math.sign(f),
                    raw: e
                };
                p.length >= 2 && p.shift();
                const r = p.length ? p[p.length - 1] : void 0;
                if (p.push(n), r ? (n.direction !== r.direction || n.delta > r.delta || n.time > r.time + 150) && m(n) : m(n), function(e) {
                        const n = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
                        return !1
                    }(n)) return !0
            }
            return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
        }

        function v(e) {
            let n = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget)), n[e]("mouseenter", f), n[e]("mouseleave", h), n[e]("wheel", g)
        }

        function y() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
        }
        r("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && y()
        })), r("destroy", (() => {
            t.params.cssMode && y(), t.mousewheel.enabled && b()
        })), Object.assign(t.mousewheel, {
            enable: y,
            disable: b
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r,
            emit: i
        } = e;
        n({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {
            nextEl: null,
            prevEl: null
        };
        const a = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

        function o(e) {
            let n;
            return e && "string" == typeof e && t.isElement && (n = t.el.querySelector(e), n) ? n : (e && ("string" == typeof e && (n = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && n.length > 1 && 1 === t.el.querySelectorAll(e).length && (n = t.el.querySelector(e))), e && !n ? e : n)
        }

        function s(e, n) {
            const r = t.params.navigation;
            (e = a(e)).forEach((e => {
                e && (e.classList[n ? "add" : "remove"](...r.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = n), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass))
            }))
        }

        function l() {
            const {
                nextEl: e,
                prevEl: n
            } = t.navigation;
            if (t.params.loop) return s(n, !1), void s(e, !1);
            s(n, t.isBeginning && !t.params.rewind), s(e, t.isEnd && !t.params.rewind)
        }

        function c(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function u(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function d() {
            const e = t.params.navigation;
            if (t.params.navigation = Z(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
            let n = o(e.nextEl),
                r = o(e.prevEl);
            Object.assign(t.navigation, {
                nextEl: n,
                prevEl: r
            }), n = a(n), r = a(r);
            const i = (n, r) => {
                n && n.addEventListener("click", "next" === r ? u : c), !t.enabled && n && n.classList.add(...e.lockClass.split(" "))
            };
            n.forEach((e => i(e, "next"))), r.forEach((e => i(e, "prev")))
        }

        function p() {
            let {
                nextEl: e,
                prevEl: n
            } = t.navigation;
            e = a(e), n = a(n);
            const r = (e, n) => {
                e.removeEventListener("click", "next" === n ? u : c), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
            };
            e.forEach((e => r(e, "next"))), n.forEach((e => r(e, "prev")))
        }
        r("init", (() => {
            !1 === t.params.navigation.enabled ? f() : (d(), l())
        })), r("toEdge fromEdge lock unlock", (() => {
            l()
        })), r("destroy", (() => {
            p()
        })), r("enable disable", (() => {
            let {
                nextEl: e,
                prevEl: n
            } = t.navigation;
            e = a(e), n = a(n), [...e, ...n].filter((e => !!e)).forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.navigation.lockClass)))
        })), r("click", ((e, n) => {
            let {
                nextEl: r,
                prevEl: o
            } = t.navigation;
            r = a(r), o = a(o);
            const s = n.target;
            if (t.params.navigation.hideOnClick && !o.includes(s) && !r.includes(s)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === s || t.pagination.el.contains(s))) return;
                let e;
                r.length ? e = r[0].classList.contains(t.params.navigation.hiddenClass) : o.length && (e = o[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...r, ...o].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
            }
        }));
        const f = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), d(), l()
            },
            disable: f,
            update: l,
            init: d,
            destroy: p
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r,
            emit: i
        } = e;
        const a = "swiper-pagination";
        let o;
        n({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${a}-bullet`,
                bulletActiveClass: `${a}-bullet-active`,
                modifierClass: `${a}-`,
                currentClass: `${a}-current`,
                totalClass: `${a}-total`,
                hiddenClass: `${a}-hidden`,
                progressbarFillClass: `${a}-progressbar-fill`,
                progressbarOppositeClass: `${a}-progressbar-opposite`,
                clickableClass: `${a}-clickable`,
                lockClass: `${a}-lock`,
                horizontalClass: `${a}-horizontal`,
                verticalClass: `${a}-vertical`,
                paginationDisabledClass: `${a}-disabled`
            }
        }), t.pagination = {
            el: null,
            bullets: []
        };
        let s = 0;
        const l = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

        function c() {
            return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function u(e, n) {
            const {
                bulletActiveClass: r
            } = t.params.pagination;
            e && (e = e[("prev" === n ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${r}-${n}`), (e = e[("prev" === n ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${r}-${n}-${n}`))
        }

        function d(e) {
            const n = e.target.closest(ee(t.params.pagination.bulletClass));
            if (!n) return;
            e.preventDefault();
            const r = y(n) * t.params.slidesPerGroup;
            if (t.params.loop) {
                if (t.realIndex === r) return;
                const e = t.realIndex,
                    n = t.getSlideIndexByData(r),
                    i = t.getSlideIndexByData(t.realIndex);
                if (n > t.slides.length - t.loopedSlides) {
                    const r = t.activeIndex;
                    t.loopFix({
                        direction: n > i ? "next" : "prev",
                        activeSlideIndex: n,
                        slideTo: !1
                    }), r === t.activeIndex && t.slideToLoop(e, 0, !1, !0)
                }
                t.slideToLoop(r)
            } else t.slideTo(r)
        }

        function p() {
            const e = t.rtl,
                n = t.params.pagination;
            if (c()) return;
            let r, a, d = t.pagination.el;
            d = l(d);
            const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                f = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (a = t.previousRealIndex || 0, r = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (r = t.snapIndex, a = t.previousSnapIndex) : (a = t.previousIndex || 0, r = t.activeIndex || 0), "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const i = t.pagination.bullets;
                let l, c, p;
                if (n.dynamicBullets && (o = x(i[0], t.isHorizontal() ? "width" : "height", !0), d.forEach((e => {
                        e.style[t.isHorizontal() ? "width" : "height"] = o * (n.dynamicMainBullets + 4) + "px"
                    })), n.dynamicMainBullets > 1 && void 0 !== a && (s += r - (a || 0), s > n.dynamicMainBullets - 1 ? s = n.dynamicMainBullets - 1 : s < 0 && (s = 0)), l = Math.max(r - s, 0), c = l + (Math.min(i.length, n.dynamicMainBullets) - 1), p = (c + l) / 2), i.forEach((e => {
                        const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                        e.classList.remove(...t)
                    })), d.length > 1) i.forEach((e => {
                    const i = y(e);
                    i === r ? e.classList.add(...n.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), n.dynamicBullets && (i >= l && i <= c && e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")), i === l && u(e, "prev"), i === c && u(e, "next"))
                }));
                else {
                    const e = i[r];
                    if (e && e.classList.add(...n.bulletActiveClass.split(" ")), t.isElement && i.forEach(((e, t) => {
                            e.setAttribute("part", t === r ? "bullet-active" : "bullet")
                        })), n.dynamicBullets) {
                        const e = i[l],
                            t = i[c];
                        for (let e = l; e <= c; e += 1) i[e] && i[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));
                        u(e, "prev"), u(t, "next")
                    }
                }
                if (n.dynamicBullets) {
                    const r = Math.min(i.length, n.dynamicMainBullets + 4),
                        a = (o * r - o) / 2 - p * o,
                        s = e ? "right" : "left";
                    i.forEach((e => {
                        e.style[t.isHorizontal() ? s : "top"] = `${a}px`
                    }))
                }
            }
            d.forEach(((e, a) => {
                if ("fraction" === n.type && (e.querySelectorAll(ee(n.currentClass)).forEach((e => {
                        e.textContent = n.formatFractionCurrent(r + 1)
                    })), e.querySelectorAll(ee(n.totalClass)).forEach((e => {
                        e.textContent = n.formatFractionTotal(f)
                    }))), "progressbar" === n.type) {
                    let i;
                    i = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const a = (r + 1) / f;
                    let o = 1,
                        s = 1;
                    "horizontal" === i ? o = a : s = a, e.querySelectorAll(ee(n.progressbarFillClass)).forEach((e => {
                        e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${s})`, e.style.transitionDuration = `${t.params.speed}ms`
                    }))
                }
                "custom" === n.type && n.renderCustom ? (e.innerHTML = n.renderCustom(t, r + 1, f), 0 === a && i("paginationRender", e)) : (0 === a && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](n.lockClass)
            }))
        }

        function f() {
            const e = t.params.pagination;
            if (c()) return;
            const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
            let r = t.pagination.el;
            r = l(r);
            let a = "";
            if ("bullets" === e.type) {
                let r = t.params.loop ? Math.ceil(n / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && r > n && (r = n);
                for (let n = 0; n < r; n += 1) e.renderBullet ? a += e.renderBullet.call(t, n, e.bulletClass) : a += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
            }
            "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], r.forEach((n => {
                "custom" !== e.type && (n.innerHTML = a || ""), "bullets" === e.type && t.pagination.bullets.push(...n.querySelectorAll(ee(e.bulletClass)))
            })), "custom" !== e.type && i("paginationRender", r[0])
        }

        function h() {
            t.params.pagination = Z(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el) return;
            let n;
            "string" == typeof e.el && t.isElement && (n = t.el.querySelector(e.el)), n || "string" != typeof e.el || (n = [...document.querySelectorAll(e.el)]), n || (n = e.el), n && 0 !== n.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(n) && n.length > 1 && (n = [...t.el.querySelectorAll(e.el)], n.length > 1 && (n = n.filter((e => b(e, ".swiper")[0] === t.el))[0])), Array.isArray(n) && 1 === n.length && (n = n[0]), Object.assign(t.pagination, {
                el: n
            }), n = l(n), n.forEach((n => {
                "bullets" === e.type && e.clickable && n.classList.add(...(e.clickableClass || "").split(" ")), n.classList.add(e.modifierClass + e.type), n.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (n.classList.add(`${e.modifierClass}${e.type}-dynamic`), s = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.classList.add(e.progressbarOppositeClass), e.clickable && n.addEventListener("click", d), t.enabled || n.classList.add(e.lockClass)
            })))
        }

        function m() {
            const e = t.params.pagination;
            if (c()) return;
            let n = t.pagination.el;
            n && (n = l(n), n.forEach((n => {
                n.classList.remove(e.hiddenClass), n.classList.remove(e.modifierClass + e.type), n.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (n.classList.remove(...(e.clickableClass || "").split(" ")), n.removeEventListener("click", d))
            }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        r("changeDirection", (() => {
            if (!t.pagination || !t.pagination.el) return;
            const e = t.params.pagination;
            let {
                el: n
            } = t.pagination;
            n = l(n), n.forEach((n => {
                n.classList.remove(e.horizontalClass, e.verticalClass), n.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }))
        })), r("init", (() => {
            !1 === t.params.pagination.enabled ? g() : (h(), f(), p())
        })), r("activeIndexChange", (() => {
            void 0 === t.snapIndex && p()
        })), r("snapIndexChange", (() => {
            p()
        })), r("snapGridLengthChange", (() => {
            f(), p()
        })), r("destroy", (() => {
            m()
        })), r("enable disable", (() => {
            let {
                el: e
            } = t.pagination;
            e && (e = l(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), r("lock unlock", (() => {
            p()
        })), r("click", ((e, n) => {
            const r = n.target,
                a = l(t.pagination.el);
            if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !r.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && r === t.navigation.nextEl || t.navigation.prevEl && r === t.navigation.prevEl)) return;
                const e = a[0].classList.contains(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), a.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
            }
        }));
        const g = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let {
                el: e
            } = t.pagination;
            e && (e = l(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), m()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                let {
                    el: e
                } = t.pagination;
                e && (e = l(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), h(), f(), p()
            },
            disable: g,
            render: f,
            update: p,
            init: h,
            destroy: m
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: i,
            emit: a
        } = e;
        const s = r();
        let l, c, u, d, p = !1,
            f = null,
            h = null;

        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e,
                rtlTranslate: n
            } = t, {
                dragEl: r,
                el: i
            } = e, a = t.params.scrollbar, o = t.params.loop ? t.progressLoop : t.progress;
            let s = c,
                l = (u - c) * o;
            n ? (l = -l, l > 0 ? (s = c - l, l = 0) : -l + c > u && (s = u + l)) : l < 0 ? (s = c + l, l = 0) : l + c > u && (s = u - l), t.isHorizontal() ? (r.style.transform = `translate3d(${l}px, 0, 0)`, r.style.width = `${s}px`) : (r.style.transform = `translate3d(0px, ${l}px, 0)`, r.style.height = `${s}px`), a.hide && (clearTimeout(f), i.style.opacity = 1, f = setTimeout((() => {
                i.style.opacity = 0, i.style.transitionDuration = "400ms"
            }), 1e3))
        }

        function y() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e
            } = t, {
                dragEl: n,
                el: r
            } = e;
            n.style.width = "", n.style.height = "", u = t.isHorizontal() ? r.offsetWidth : r.offsetHeight, d = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? u * d : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? n.style.width = `${c}px` : n.style.height = `${c}px`, r.style.display = d >= 1 ? "none" : "", t.params.scrollbar.hide && (r.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
        }

        function b(e) {
            return t.isHorizontal() ? e.clientX : e.clientY
        }

        function w(e) {
            const {
                scrollbar: n,
                rtlTranslate: r
            } = t, {
                el: i
            } = n;
            let a;
            a = (b(e) - g(i)[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : c / 2)) / (u - c), a = Math.max(Math.min(a, 1), 0), r && (a = 1 - a);
            const o = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
            t.updateProgress(o), t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const n = t.params.scrollbar,
                {
                    scrollbar: r,
                    wrapperEl: i
                } = t,
                {
                    el: o,
                    dragEl: s
                } = r;
            p = !0, l = e.target === s ? b(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", s.style.transitionDuration = "100ms", w(e), clearTimeout(h), o.style.transitionDuration = "0ms", n.hide && (o.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), a("scrollbarDragStart", e)
        }

        function S(e) {
            const {
                scrollbar: n,
                wrapperEl: r
            } = t, {
                el: i,
                dragEl: o
            } = n;
            p && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, w(e), r.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", o.style.transitionDuration = "0ms", a("scrollbarDragMove", e))
        }

        function E(e) {
            const n = t.params.scrollbar,
                {
                    scrollbar: r,
                    wrapperEl: i
                } = t,
                {
                    el: s
                } = r;
            p && (p = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), n.hide && (clearTimeout(h), h = o((() => {
                s.style.opacity = 0, s.style.transitionDuration = "400ms"
            }), 1e3)), a("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
        }

        function T(e) {
            const {
                scrollbar: n,
                params: r
            } = t, i = n.el;
            if (!i) return;
            const a = i,
                o = !!r.passiveListeners && {
                    passive: !1,
                    capture: !1
                },
                l = !!r.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
            if (!a) return;
            const c = "on" === e ? "addEventListener" : "removeEventListener";
            a[c]("pointerdown", x, o), s[c]("pointermove", S, o), s[c]("pointerup", E, l)
        }

        function C() {
            const {
                scrollbar: e,
                el: n
            } = t;
            t.params.scrollbar = Z(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const r = t.params.scrollbar;
            if (!r.el) return;
            let i, a;
            "string" == typeof r.el && t.isElement && (i = t.el.querySelector(r.el)), i || "string" != typeof r.el ? i || (i = r.el) : i = s.querySelectorAll(r.el), t.params.uniqueNavElements && "string" == typeof r.el && i.length > 1 && 1 === n.querySelectorAll(r.el).length && (i = n.querySelector(r.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? r.horizontalClass : r.verticalClass), i && (a = i.querySelector(`.${t.params.scrollbar.dragClass}`), a || (a = m("div", t.params.scrollbar.dragClass), i.append(a))), Object.assign(e, {
                el: i,
                dragEl: a
            }), r.draggable && t.params.scrollbar.el && t.scrollbar.el && T("on"), i && i.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass)
        }

        function _() {
            const e = t.params.scrollbar,
                n = t.scrollbar.el;
            n && n.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && T("off")
        }
        n({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {
            el: null,
            dragEl: null
        }, i("init", (() => {
            !1 === t.params.scrollbar.enabled ? D() : (C(), y(), v())
        })), i("update resize observerUpdate lock unlock", (() => {
            y()
        })), i("setTranslate", (() => {
            v()
        })), i("setTransition", ((e, n) => {
            ! function(e) {
                t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
            }(n)
        })), i("enable disable", (() => {
            const {
                el: e
            } = t.scrollbar;
            e && e.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass)
        })), i("destroy", (() => {
            _()
        }));
        const D = () => {
            t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), _()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), C(), y(), v()
            },
            disable: D,
            updateSize: y,
            setTranslate: v,
            init: C,
            destroy: _
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            parallax: {
                enabled: !1
            }
        });
        const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
            a = (e, n) => {
                const {
                    rtl: r
                } = t, i = r ? -1 : 1, a = e.getAttribute("data-swiper-parallax") || "0";
                let o = e.getAttribute("data-swiper-parallax-x"),
                    s = e.getAttribute("data-swiper-parallax-y");
                const l = e.getAttribute("data-swiper-parallax-scale"),
                    c = e.getAttribute("data-swiper-parallax-opacity"),
                    u = e.getAttribute("data-swiper-parallax-rotate");
                if (o || s ? (o = o || "0", s = s || "0") : t.isHorizontal() ? (o = a, s = "0") : (s = a, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * n * i + "%" : o * n * i + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * n + "%" : s * n + "px", null != c) {
                    const t = c - (c - 1) * (1 - Math.abs(n));
                    e.style.opacity = t
                }
                let d = `translate3d(${o}, ${s}, 0px)`;
                null != l && (d += ` scale(${l-(l-1)*(1-Math.abs(n))})`), u && null != u && (d += ` rotate(${u*n*-1}deg)`), e.style.transform = d
            },
            o = () => {
                const {
                    el: e,
                    slides: n,
                    progress: r,
                    snapGrid: o,
                    isElement: s
                } = t, l = h(e, i);
                t.isElement && l.push(...h(t.hostEl, i)), l.forEach((e => {
                    a(e, r)
                })), n.forEach(((e, n) => {
                    let s = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (s += Math.ceil(n / 2) - r * (o.length - 1)), s = Math.min(Math.max(s, -1), 1), e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e => {
                        a(e, s)
                    }))
                }))
            };
        r("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), r("init", (() => {
            t.params.parallax.enabled && o()
        })), r("setTranslate", (() => {
            t.params.parallax.enabled && o()
        })), r("setTransition", ((e, n) => {
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {
                    el: n,
                    hostEl: r
                } = t, a = [...n.querySelectorAll(i)];
                t.isElement && a.push(...r.querySelectorAll(i)), a.forEach((t => {
                    let n = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (n = 0), t.style.transitionDuration = `${n}ms`
                }))
            }(n)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r,
            emit: i
        } = e;
        const o = a();
        n({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {
            enabled: !1
        };
        let s, c, u = 1,
            d = !1;
        const p = [],
            f = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3
            },
            m = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            v = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let y = 1;

        function w() {
            if (p.length < 2) return 1;
            const e = p[0].pageX,
                t = p[0].pageY,
                n = p[1].pageX,
                r = p[1].pageY;
            return Math.sqrt((n - e) ** 2 + (r - t) ** 2)
        }

        function x(e) {
            const n = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
            return !!e.target.matches(n) || t.slides.filter((t => t.contains(e.target))).length > 0
        }

        function S(e) {
            if ("mouse" === e.pointerType && p.splice(0, p.length), !x(e)) return;
            const n = t.params.zoom;
            if (s = !1, c = !1, p.push(e), !(p.length < 2)) {
                if (s = !0, f.scaleStart = w(), !f.slideEl) {
                    f.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), f.slideEl || (f.slideEl = t.slides[t.activeIndex]);
                    let r = f.slideEl.querySelector(`.${n.containerClass}`);
                    if (r && (r = r.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), f.imageEl = r, f.imageWrapEl = r ? b(f.imageEl, `.${n.containerClass}`)[0] : void 0, !f.imageWrapEl) return void(f.imageEl = void 0);
                    f.maxRatio = f.imageWrapEl.getAttribute("data-swiper-zoom") || n.maxRatio
                }
                if (f.imageEl) {
                    const [e, t] = function() {
                        if (p.length < 2) return {
                            x: null,
                            y: null
                        };
                        const e = f.imageEl.getBoundingClientRect();
                        return [(p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - e.x) / u, (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - e.y) / u]
                    }();
                    f.originX = e, f.originY = t, f.imageEl.style.transitionDuration = "0ms"
                }
                d = !0
            }
        }

        function E(e) {
            if (!x(e)) return;
            const n = t.params.zoom,
                r = t.zoom,
                i = p.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && (p[i] = e), p.length < 2 || (c = !0, f.scaleMove = w(), f.imageEl && (r.scale = f.scaleMove / f.scaleStart * u, r.scale > f.maxRatio && (r.scale = f.maxRatio - 1 + (r.scale - f.maxRatio + 1) ** .5), r.scale < n.minRatio && (r.scale = n.minRatio + 1 - (n.minRatio - r.scale + 1) ** .5), f.imageEl.style.transform = `translate3d(0,0,0) scale(${r.scale})`))
        }

        function T(e) {
            if (!x(e)) return;
            if ("mouse" === e.pointerType && "pointerout" === e.type) return;
            const n = t.params.zoom,
                r = t.zoom,
                i = p.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && p.splice(i, 1), s && c && (s = !1, c = !1, f.imageEl && (r.scale = Math.max(Math.min(r.scale, f.maxRatio), n.minRatio), f.imageEl.style.transitionDuration = `${t.params.speed}ms`, f.imageEl.style.transform = `translate3d(0,0,0) scale(${r.scale})`, u = r.scale, d = !1, r.scale > 1 && f.slideEl ? f.slideEl.classList.add(`${n.zoomedSlideClass}`) : r.scale <= 1 && f.slideEl && f.slideEl.classList.remove(`${n.zoomedSlideClass}`), 1 === r.scale && (f.originX = 0, f.originY = 0, f.slideEl = void 0)))
        }

        function C(e) {
            if (!x(e) || ! function(e) {
                    const n = `.${t.params.zoom.containerClass}`;
                    return !!e.target.matches(n) || [...t.hostEl.querySelectorAll(n)].filter((t => t.contains(e.target))).length > 0
                }(e)) return;
            const n = t.zoom;
            if (!f.imageEl) return;
            if (!m.isTouched || !f.slideEl) return;
            m.isMoved || (m.width = f.imageEl.offsetWidth, m.height = f.imageEl.offsetHeight, m.startX = l(f.imageWrapEl, "x") || 0, m.startY = l(f.imageWrapEl, "y") || 0, f.slideWidth = f.slideEl.offsetWidth, f.slideHeight = f.slideEl.offsetHeight, f.imageWrapEl.style.transitionDuration = "0ms");
            const r = m.width * n.scale,
                i = m.height * n.scale;
            if (r < f.slideWidth && i < f.slideHeight) return;
            if (m.minX = Math.min(f.slideWidth / 2 - r / 2, 0), m.maxX = -m.minX, m.minY = Math.min(f.slideHeight / 2 - i / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = p.length > 0 ? p[0].pageX : e.pageX, m.touchesCurrent.y = p.length > 0 ? p[0].pageY : e.pageY, Math.max(Math.abs(m.touchesCurrent.x - m.touchesStart.x), Math.abs(m.touchesCurrent.y - m.touchesStart.y)) > 5 && (t.allowClick = !1), !m.isMoved && !d) {
                if (t.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void(m.isTouched = !1);
                if (!t.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void(m.isTouched = !1)
            }
            e.cancelable && e.preventDefault(), e.stopPropagation(), m.isMoved = !0;
            const a = (n.scale - u) / (f.maxRatio - t.params.zoom.minRatio),
                {
                    originX: o,
                    originY: s
                } = f;
            m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX + a * (m.width - 2 * o), m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY + a * (m.height - 2 * s), m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8), v.prevPositionX || (v.prevPositionX = m.touchesCurrent.x), v.prevPositionY || (v.prevPositionY = m.touchesCurrent.y), v.prevTime || (v.prevTime = Date.now()), v.x = (m.touchesCurrent.x - v.prevPositionX) / (Date.now() - v.prevTime) / 2, v.y = (m.touchesCurrent.y - v.prevPositionY) / (Date.now() - v.prevTime) / 2, Math.abs(m.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0), Math.abs(m.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0), v.prevPositionX = m.touchesCurrent.x, v.prevPositionY = m.touchesCurrent.y, v.prevTime = Date.now(), f.imageWrapEl.style.transform = `translate3d(${m.currentX}px, ${m.currentY}px,0)`
        }

        function _() {
            const e = t.zoom;
            f.slideEl && t.activeIndex !== t.slides.indexOf(f.slideEl) && (f.imageEl && (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), f.imageWrapEl && (f.imageWrapEl.style.transform = "translate3d(0,0,0)"), f.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, u = 1, f.slideEl = void 0, f.imageEl = void 0, f.imageWrapEl = void 0, f.originX = 0, f.originY = 0)
        }

        function D(e) {
            const n = t.zoom,
                r = t.params.zoom;
            if (!f.slideEl) {
                e && e.target && (f.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), f.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? f.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : f.slideEl = t.slides[t.activeIndex]);
                let n = f.slideEl.querySelector(`.${r.containerClass}`);
                n && (n = n.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), f.imageEl = n, f.imageWrapEl = n ? b(f.imageEl, `.${r.containerClass}`)[0] : void 0
            }
            if (!f.imageEl || !f.imageWrapEl) return;
            let i, a, s, l, c, d, p, v, y, w, x, S, E, T, C, _, D, A;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), f.slideEl.classList.add(`${r.zoomedSlideClass}`), void 0 === m.touchesStart.x && e ? (i = e.pageX, a = e.pageY) : (i = m.touchesStart.x, a = m.touchesStart.y);
            const L = "number" == typeof e ? e : null;
            1 === u && L && (i = void 0, a = void 0), n.scale = L || f.imageWrapEl.getAttribute("data-swiper-zoom") || r.maxRatio, u = L || f.imageWrapEl.getAttribute("data-swiper-zoom") || r.maxRatio, !e || 1 === u && L ? (p = 0, v = 0) : (D = f.slideEl.offsetWidth, A = f.slideEl.offsetHeight, s = g(f.slideEl).left + o.scrollX, l = g(f.slideEl).top + o.scrollY, c = s + D / 2 - i, d = l + A / 2 - a, y = f.imageEl.offsetWidth, w = f.imageEl.offsetHeight, x = y * n.scale, S = w * n.scale, E = Math.min(D / 2 - x / 2, 0), T = Math.min(A / 2 - S / 2, 0), C = -E, _ = -T, p = c * n.scale, v = d * n.scale, p < E && (p = E), p > C && (p = C), v < T && (v = T), v > _ && (v = _)), L && 1 === n.scale && (f.originX = 0, f.originY = 0), f.imageWrapEl.style.transitionDuration = "300ms", f.imageWrapEl.style.transform = `translate3d(${p}px, ${v}px,0)`, f.imageEl.style.transitionDuration = "300ms", f.imageEl.style.transform = `translate3d(0,0,0) scale(${n.scale})`
        }

        function A() {
            const e = t.zoom,
                n = t.params.zoom;
            if (!f.slideEl) {
                t.params.virtual && t.params.virtual.enabled && t.virtual ? f.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : f.slideEl = t.slides[t.activeIndex];
                let e = f.slideEl.querySelector(`.${n.containerClass}`);
                e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), f.imageEl = e, f.imageWrapEl = e ? b(f.imageEl, `.${n.containerClass}`)[0] : void 0
            }
            f.imageEl && f.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, u = 1, f.imageWrapEl.style.transitionDuration = "300ms", f.imageWrapEl.style.transform = "translate3d(0,0,0)", f.imageEl.style.transitionDuration = "300ms", f.imageEl.style.transform = "translate3d(0,0,0) scale(1)", f.slideEl.classList.remove(`${n.zoomedSlideClass}`), f.slideEl = void 0, f.originX = 0, f.originY = 0)
        }

        function L(e) {
            const n = t.zoom;
            n.scale && 1 !== n.scale ? A() : D(e)
        }

        function M() {
            return {
                passiveListener: !!t.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.params.passiveListeners || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function k() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const {
                passiveListener: n,
                activeListenerWithCapture: r
            } = M();
            t.wrapperEl.addEventListener("pointerdown", S, n), t.wrapperEl.addEventListener("pointermove", E, r), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.addEventListener(e, T, n)
            })), t.wrapperEl.addEventListener("pointermove", C, r)
        }

        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            e.enabled = !1;
            const {
                passiveListener: n,
                activeListenerWithCapture: r
            } = M();
            t.wrapperEl.removeEventListener("pointerdown", S, n), t.wrapperEl.removeEventListener("pointermove", E, r), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.removeEventListener(e, T, n)
            })), t.wrapperEl.removeEventListener("pointermove", C, r)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => y,
            set(e) {
                if (y !== e) {
                    const t = f.imageEl,
                        n = f.slideEl;
                    i("zoomChange", e, t, n)
                }
                y = e
            }
        }), r("init", (() => {
            t.params.zoom.enabled && k()
        })), r("destroy", (() => {
            I()
        })), r("touchStart", ((e, n) => {
            t.zoom.enabled && function(e) {
                const n = t.device;
                if (!f.imageEl) return;
                if (m.isTouched) return;
                n.android && e.cancelable && e.preventDefault(), m.isTouched = !0;
                const r = p.length > 0 ? p[0] : e;
                m.touchesStart.x = r.pageX, m.touchesStart.y = r.pageY
            }(n)
        })), r("touchEnd", ((e, n) => {
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!f.imageEl) return;
                if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void(m.isMoved = !1);
                m.isTouched = !1, m.isMoved = !1;
                let n = 300,
                    r = 300;
                const i = v.x * n,
                    a = m.currentX + i,
                    o = v.y * r,
                    s = m.currentY + o;
                0 !== v.x && (n = Math.abs((a - m.currentX) / v.x)), 0 !== v.y && (r = Math.abs((s - m.currentY) / v.y));
                const l = Math.max(n, r);
                m.currentX = a, m.currentY = s;
                const c = m.width * e.scale,
                    u = m.height * e.scale;
                m.minX = Math.min(f.slideWidth / 2 - c / 2, 0), m.maxX = -m.minX, m.minY = Math.min(f.slideHeight / 2 - u / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), f.imageWrapEl.style.transitionDuration = `${l}ms`, f.imageWrapEl.style.transform = `translate3d(${m.currentX}px, ${m.currentY}px,0)`
            }()
        })), r("doubleTap", ((e, n) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && L(n)
        })), r("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && _()
        })), r("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && _()
        })), Object.assign(t.zoom, {
            enable: k,
            disable: I,
            in: D,
            out: A,
            toggle: L
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;

        function i(e, t) {
            const n = function() {
                let e, t, n;
                return (r, i) => {
                    for (t = -1, e = r.length; e - t > 1;) n = e + t >> 1, r[n] <= i ? t = n : e = n;
                    return e
                }
            }();
            let r, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (i = n(this.x, e), r = i - 1, (e - this.x[r]) * (this.y[i] - this.y[r]) / (this.x[i] - this.x[r]) + this.y[r]) : 0
            }, this
        }

        function a() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        n({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {
            control: void 0
        }, r("beforeInit", (() => {
            if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                const e = document.querySelector(t.params.controller.control);
                if (e && e.swiper) t.controller.control = e.swiper;
                else if (e) {
                    const n = r => {
                        t.controller.control = r.detail[0], t.update(), e.removeEventListener("init", n)
                    };
                    e.addEventListener("init", n)
                }
            } else t.controller.control = t.params.controller.control
        })), r("update", (() => {
            a()
        })), r("resize", (() => {
            a()
        })), r("observerUpdate", (() => {
            a()
        })), r("setTranslate", ((e, n, r) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(n, r)
        })), r("setTransition", ((e, n, r) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(n, r)
        })), Object.assign(t.controller, {
            setTranslate: function(e, n) {
                const r = t.controller.control;
                let a, o;
                const s = t.constructor;

                function l(e) {
                    if (e.destroyed) return;
                    const n = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (function(e) {
                        t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid)
                    }(e), o = -t.controller.spline.interpolate(-n)), o && "container" !== t.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(a) && Number.isFinite(a) || (a = 1), o = (n - t.minTranslate()) * a + e.minTranslate()), t.params.controller.inverse && (o = e.maxTranslate() - o), e.updateProgress(o), e.setTranslate(o, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (let e = 0; e < r.length; e += 1) r[e] !== n && r[e] instanceof s && l(r[e]);
                else r instanceof s && n !== r && l(r)
            },
            setTransition: function(e, n) {
                const r = t.constructor,
                    i = t.controller.control;
                let a;

                function s(n) {
                    n.destroyed || (n.setTransition(e, t), 0 !== e && (n.transitionStart(), n.params.autoHeight && o((() => {
                        n.updateAutoHeight()
                    })), w(n.wrapperEl, (() => {
                        i && n.transitionEnd()
                    }))))
                }
                if (Array.isArray(i))
                    for (a = 0; a < i.length; a += 1) i[a] !== n && i[a] instanceof r && s(i[a]);
                else i instanceof r && n !== i && s(i)
            }
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), t.a11y = {
            clicked: !1
        };
        let i = null;

        function a(e) {
            const t = i;
            0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
        }
        const o = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

        function s(e) {
            (e = o(e)).forEach((e => {
                e.setAttribute("tabIndex", "0")
            }))
        }

        function l(e) {
            (e = o(e)).forEach((e => {
                e.setAttribute("tabIndex", "-1")
            }))
        }

        function c(e, t) {
            (e = o(e)).forEach((e => {
                e.setAttribute("role", t)
            }))
        }

        function u(e, t) {
            (e = o(e)).forEach((e => {
                e.setAttribute("aria-roledescription", t)
            }))
        }

        function d(e, t) {
            (e = o(e)).forEach((e => {
                e.setAttribute("aria-label", t)
            }))
        }

        function p(e) {
            (e = o(e)).forEach((e => {
                e.setAttribute("aria-disabled", !0)
            }))
        }

        function f(e) {
            (e = o(e)).forEach((e => {
                e.setAttribute("aria-disabled", !1)
            }))
        }

        function h(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const n = t.params.a11y,
                r = e.target;
            t.pagination && t.pagination.el && (r === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(ee(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && r === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? a(n.lastSlideMessage) : a(n.nextSlideMessage)), t.navigation && t.navigation.prevEl && r === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? a(n.firstSlideMessage) : a(n.prevSlideMessage)), t.pagination && r.matches(ee(t.params.pagination.bulletClass)) && r.click())
        }

        function g() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function v() {
            return g() && t.params.pagination.clickable
        }
        const b = (e, t, n) => {
                s(e), "BUTTON" !== e.tagName && (c(e, "button"), e.addEventListener("keydown", h)), d(e, n),
                    function(e, t) {
                        (e = o(e)).forEach((e => {
                            e.setAttribute("aria-controls", t)
                        }))
                    }(e, t)
            },
            w = () => {
                t.a11y.clicked = !0
            },
            x = () => {
                requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t.destroyed || (t.a11y.clicked = !1)
                    }))
                }))
            },
            S = e => {
                if (t.a11y.clicked) return;
                const n = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                if (!n || !t.slides.includes(n)) return;
                const r = t.slides.indexOf(n) === t.activeIndex,
                    i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(n);
                r || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(n), 0))
            },
            E = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && u(t.slides, e.itemRoleDescriptionMessage), e.slideRole && c(t.slides, e.slideRole);
                const n = t.slides.length;
                e.slideLabelMessage && t.slides.forEach(((r, i) => {
                    const a = t.params.loop ? parseInt(r.getAttribute("data-swiper-slide-index"), 10) : i;
                    d(r, e.slideLabelMessage.replace(/\{\{index\}\}/, a + 1).replace(/\{\{slidesLength\}\}/, n))
                }))
            };
        r("beforeInit", (() => {
            i = m("span", t.params.a11y.notificationClass), i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true")
        })), r("afterInit", (() => {
            t.params.a11y.enabled && (() => {
                const e = t.params.a11y;
                t.el.append(i);
                const n = t.el;
                e.containerRoleDescriptionMessage && u(n, e.containerRoleDescriptionMessage), e.containerMessage && d(n, e.containerMessage);
                const r = t.wrapperEl,
                    a = e.id || r.getAttribute("id") || `swiper-wrapper-${s=16,void 0===s&&(s=16),"x".repeat(s).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                var s;
                const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var c;
                c = a, o(r).forEach((e => {
                        e.setAttribute("id", c)
                    })),
                    function(e, t) {
                        (e = o(e)).forEach((e => {
                            e.setAttribute("aria-live", t)
                        }))
                    }(r, l), E();
                let {
                    nextEl: p,
                    prevEl: f
                } = t.navigation ? t.navigation : {};
                p = o(p), f = o(f), p && p.forEach((t => b(t, a, e.nextSlideMessage))), f && f.forEach((t => b(t, a, e.prevSlideMessage))), v() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
                    e.addEventListener("keydown", h)
                })), t.el.addEventListener("focus", S, !0), t.el.addEventListener("pointerdown", w, !0), t.el.addEventListener("pointerup", x, !0)
            })()
        })), r("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && E()
        })), r("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {
                    nextEl: e,
                    prevEl: n
                } = t.navigation;
                n && (t.isBeginning ? (p(n), l(n)) : (f(n), s(n))), e && (t.isEnd ? (p(e), l(e)) : (f(e), s(e)))
            }()
        })), r("paginationUpdate", (() => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                g() && t.pagination.bullets.forEach((n => {
                    t.params.pagination.clickable && (s(n), t.params.pagination.renderBullet || (c(n, "button"), d(n, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(n) + 1)))), n.matches(ee(t.params.pagination.bulletActiveClass)) ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current")
                }))
            }()
        })), r("destroy", (() => {
            t.params.a11y.enabled && function() {
                i && i.remove();
                let {
                    nextEl: e,
                    prevEl: n
                } = t.navigation ? t.navigation : {};
                e = o(e), n = o(n), e && e.forEach((e => e.removeEventListener("keydown", h))), n && n.forEach((e => e.removeEventListener("keydown", h))), v() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
                    e.removeEventListener("keydown", h)
                })), t.el.removeEventListener("focus", S, !0), t.el.removeEventListener("pointerdown", w, !0), t.el.removeEventListener("pointerup", x, !0)
            }()
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1,
            o = {};
        const s = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            l = e => {
                const t = a();
                let n;
                n = e ? new URL(e) : t.location;
                const r = n.pathname.slice(1).split("/").filter((e => "" !== e)),
                    i = r.length;
                return {
                    key: r[i - 2],
                    value: r[i - 1]
                }
            },
            c = (e, n) => {
                const r = a();
                if (!i || !t.params.history.enabled) return;
                let o;
                o = t.params.url ? new URL(t.params.url) : r.location;
                const l = t.slides[n];
                let c = s(l.getAttribute("data-history"));
                if (t.params.history.root.length > 0) {
                    let n = t.params.history.root;
                    "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)), c = `${n}/${e?`${e}/`:""}${c}`
                } else o.pathname.includes(e) || (c = `${e?`${e}/`:""}${c}`);
                t.params.history.keepQuery && (c += o.search);
                const u = r.history.state;
                u && u.value === c || (t.params.history.replaceState ? r.history.replaceState({
                    value: c
                }, null, c) : r.history.pushState({
                    value: c
                }, null, c))
            },
            u = (e, n, r) => {
                if (n)
                    for (let i = 0, a = t.slides.length; i < a; i += 1) {
                        const a = t.slides[i];
                        if (s(a.getAttribute("data-history")) === n) {
                            const n = t.getSlideIndex(a);
                            t.slideTo(n, e, r)
                        }
                    } else t.slideTo(0, e, r)
            },
            d = () => {
                o = l(t.params.url), u(t.params.speed, o.value, !1)
            };
        r("init", (() => {
            t.params.history.enabled && (() => {
                const e = a();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                    i = !0, o = l(t.params.url), o.key || o.value ? (u(0, o.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", d)) : t.params.history.replaceState || e.addEventListener("popstate", d)
                }
            })()
        })), r("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = a();
                t.params.history.replaceState || e.removeEventListener("popstate", d)
            })()
        })), r("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && c(t.params.history.key, t.activeIndex)
        })), r("slideChange", (() => {
            i && t.params.cssMode && c(t.params.history.key, t.activeIndex)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            emit: i,
            on: o
        } = e, s = !1;
        const l = r(),
            c = a();
        n({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex(e, n) {
                    if (t.virtual && t.params.virtual.enabled) {
                        const e = t.slides.filter((e => e.getAttribute("data-hash") === n))[0];
                        return e ? parseInt(e.getAttribute("data-swiper-slide-index"), 10) : 0
                    }
                    return t.getSlideIndex(h(t.slidesEl, `.${t.params.slideClass}[data-hash="${n}"], swiper-slide[data-hash="${n}"]`)[0])
                }
            }
        });
        const u = () => {
                i("hashChange");
                const e = l.location.hash.replace("#", ""),
                    n = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
                if (e !== (n ? n.getAttribute("data-hash") : "")) {
                    const n = t.params.hashNavigation.getSlideIndex(t, e);
                    if (void 0 === n || Number.isNaN(n)) return;
                    t.slideTo(n)
                }
            },
            d = () => {
                if (!s || !t.params.hashNavigation.enabled) return;
                const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
                    n = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                t.params.hashNavigation.replaceState && c.history && c.history.replaceState ? (c.history.replaceState(null, null, `#${n}` || ""), i("hashSet")) : (l.location.hash = n || "", i("hashSet"))
            };
        o("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                s = !0;
                const e = l.location.hash.replace("#", "");
                if (e) {
                    const n = 0,
                        r = t.params.hashNavigation.getSlideIndex(t, e);
                    t.slideTo(r || 0, n, t.params.runCallbacksOnInit, !0)
                }
                t.params.hashNavigation.watchState && c.addEventListener("hashchange", u)
            })()
        })), o("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && c.removeEventListener("hashchange", u)
        })), o("transitionEnd _freeModeNoMomentumRelease", (() => {
            s && d()
        })), o("slideChange", (() => {
            s && t.params.cssMode && d()
        }))
    }, function(e) {
        let t, n, {
            swiper: i,
            extendParams: a,
            on: o,
            emit: s,
            params: l
        } = e;
        i.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        }, a({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let c, u, d, p, f, h, m, g = l && l.autoplay ? l.autoplay.delay : 3e3,
            v = l && l.autoplay ? l.autoplay.delay : 3e3,
            y = (new Date).getTime;

        function b(e) {
            i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", b), C())
        }
        const w = () => {
                if (i.destroyed || !i.autoplay.running) return;
                i.autoplay.paused ? u = !0 : u && (v = c, u = !1);
                const e = i.autoplay.paused ? c : y + v - (new Date).getTime();
                i.autoplay.timeLeft = e, s("autoplayTimeLeft", e, e / g), n = requestAnimationFrame((() => {
                    w()
                }))
            },
            x = e => {
                if (i.destroyed || !i.autoplay.running) return;
                cancelAnimationFrame(n), w();
                let r = void 0 === e ? i.params.autoplay.delay : e;
                g = i.params.autoplay.delay, v = i.params.autoplay.delay;
                const a = (() => {
                    let e;
                    if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex], e) return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                })();
                !Number.isNaN(a) && a > 0 && void 0 === e && (r = a, g = a, v = a), c = r;
                const o = i.params.speed,
                    l = () => {
                        i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(o, !0, !0), s("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, o, !0, !0), s("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(o, !0, !0), s("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, o, !0, !0), s("autoplay")), i.params.cssMode && (y = (new Date).getTime(), requestAnimationFrame((() => {
                            x()
                        }))))
                    };
                return r > 0 ? (clearTimeout(t), t = setTimeout((() => {
                    l()
                }), r)) : requestAnimationFrame((() => {
                    l()
                })), r
            },
            S = () => {
                i.autoplay.running = !0, x(), s("autoplayStart")
            },
            E = () => {
                i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(n), s("autoplayStop")
            },
            T = (e, n) => {
                if (i.destroyed || !i.autoplay.running) return;
                clearTimeout(t), e || (m = !0);
                const r = () => {
                    s("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", b) : C()
                };
                if (i.autoplay.paused = !0, n) return h && (c = i.params.autoplay.delay), h = !1, void r();
                const a = c || i.params.autoplay.delay;
                c = a - ((new Date).getTime() - y), i.isEnd && c < 0 && !i.params.loop || (c < 0 && (c = 0), r())
            },
            C = () => {
                i.isEnd && c < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (y = (new Date).getTime(), m ? (m = !1, x(c)) : x(), i.autoplay.paused = !1, s("autoplayResume"))
            },
            _ = () => {
                if (i.destroyed || !i.autoplay.running) return;
                const e = r();
                "hidden" === e.visibilityState && (m = !0, T(!0)), "visible" === e.visibilityState && C()
            },
            D = e => {
                "mouse" === e.pointerType && (m = !0, i.animating || i.autoplay.paused || T(!0))
            },
            A = e => {
                "mouse" === e.pointerType && i.autoplay.paused && C()
            };
        o("init", (() => {
            i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", D), i.el.addEventListener("pointerleave", A)), r().addEventListener("visibilitychange", _), y = (new Date).getTime(), S())
        })), o("destroy", (() => {
            i.el.removeEventListener("pointerenter", D), i.el.removeEventListener("pointerleave", A), r().removeEventListener("visibilitychange", _), i.autoplay.running && E()
        })), o("beforeTransitionStart", ((e, t, n) => {
            !i.destroyed && i.autoplay.running && (n || !i.params.autoplay.disableOnInteraction ? T(!0, !0) : E())
        })), o("sliderFirstMove", (() => {
            !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? E() : (d = !0, p = !1, m = !1, f = setTimeout((() => {
                m = !0, p = !0, T(!0)
            }), 200)))
        })), o("touchEnd", (() => {
            if (!i.destroyed && i.autoplay.running && d) {
                if (clearTimeout(f), clearTimeout(t), i.params.autoplay.disableOnInteraction) return p = !1, void(d = !1);
                p && i.params.cssMode && C(), p = !1, d = !1
            }
        })), o("slideChange", (() => {
            !i.destroyed && i.autoplay.running && (h = !0)
        })), Object.assign(i.autoplay, {
            start: S,
            stop: E,
            pause: T,
            resume: C
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: i
        } = e;
        n({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let a = !1,
            o = !1;

        function s() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const n = e.clickedIndex,
                r = e.clickedSlide;
            if (r && r.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == n) return;
            let i;
            i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : n, t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
        }

        function l() {
            const {
                thumbs: e
            } = t.params;
            if (a) return !1;
            a = !0;
            const n = t.constructor;
            if (e.swiper instanceof n) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), t.thumbs.swiper.update();
            else if (c(e.swiper)) {
                const r = Object.assign({}, e.swiper);
                Object.assign(r, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper = new n(r), o = !0
            }
            return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", s), !0
        }

        function u(e) {
            const n = t.thumbs.swiper;
            if (!n || n.destroyed) return;
            const r = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
            let i = 1;
            const a = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), n.slides.forEach((e => e.classList.remove(a))), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                for (let e = 0; e < i; e += 1) h(n.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
                    e.classList.add(a)
                }));
            else
                for (let e = 0; e < i; e += 1) n.slides[t.realIndex + e] && n.slides[t.realIndex + e].classList.add(a);
            const o = t.params.thumbs.autoScrollOffset,
                s = o && !n.params.loop;
            if (t.realIndex !== n.realIndex || s) {
                const i = n.activeIndex;
                let a, l;
                if (n.params.loop) {
                    const e = n.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                    a = n.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else a = t.realIndex, l = a > t.previousIndex ? "next" : "prev";
                s && (a += "next" === l ? o : -1 * o), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(a) < 0 && (n.params.centeredSlides ? a = a > i ? a - Math.floor(r / 2) + 1 : a + Math.floor(r / 2) - 1 : a > i && n.params.slidesPerGroup, n.slideTo(a, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        }, i("beforeInit", (() => {
            const {
                thumbs: e
            } = t.params;
            if (e && e.swiper)
                if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                    const n = r(),
                        i = () => {
                            const r = "string" == typeof e.swiper ? n.querySelector(e.swiper) : e.swiper;
                            if (r && r.swiper) e.swiper = r.swiper, l(), u(!0);
                            else if (r) {
                                const n = i => {
                                    e.swiper = i.detail[0], r.removeEventListener("init", n), l(), u(!0), e.swiper.update(), t.update()
                                };
                                r.addEventListener("init", n)
                            }
                            return r
                        },
                        a = () => {
                            t.destroyed || i() || requestAnimationFrame(a)
                        };
                    requestAnimationFrame(a)
                } else l(), u(!0)
        })), i("slideChange update resize observerUpdate", (() => {
            u()
        })), i("setTransition", ((e, n) => {
            const r = t.thumbs.swiper;
            r && !r.destroyed && r.setTransition(n)
        })), i("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && o && e.destroy()
        })), Object.assign(t.thumbs, {
            init: l,
            update: u
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            emit: r,
            once: i
        } = e;
        n({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    if (t.params.cssMode) return;
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    if (t.params.cssMode) return;
                    const {
                        touchEventsData: e,
                        touches: n
                    } = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: n[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({
                        position: n[t.isHorizontal() ? "currentX" : "currentY"],
                        time: s()
                    })
                },
                onTouchEnd: function(e) {
                    let {
                        currentPos: n
                    } = e;
                    if (t.params.cssMode) return;
                    const {
                        params: a,
                        wrapperEl: o,
                        rtlTranslate: l,
                        snapGrid: c,
                        touchEventsData: u
                    } = t, d = s() - u.touchStartTime;
                    if (n < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (n > -t.maxTranslate()) t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (a.freeMode.momentum) {
                            if (u.velocities.length > 1) {
                                const e = u.velocities.pop(),
                                    n = u.velocities.pop(),
                                    r = e.position - n.position,
                                    i = e.time - n.time;
                                t.velocity = r / i, t.velocity /= 2, Math.abs(t.velocity) < a.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || s() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= a.freeMode.momentumVelocityRatio, u.velocities.length = 0;
                            let e = 1e3 * a.freeMode.momentumRatio;
                            const n = t.velocity * e;
                            let d = t.translate + n;
                            l && (d = -d);
                            let p, f = !1;
                            const h = 20 * Math.abs(t.velocity) * a.freeMode.momentumBounceRatio;
                            let m;
                            if (d < t.maxTranslate()) a.freeMode.momentumBounce ? (d + t.maxTranslate() < -h && (d = t.maxTranslate() - h), p = t.maxTranslate(), f = !0, u.allowMomentumBounce = !0) : d = t.maxTranslate(), a.loop && a.centeredSlides && (m = !0);
                            else if (d > t.minTranslate()) a.freeMode.momentumBounce ? (d - t.minTranslate() > h && (d = t.minTranslate() + h), p = t.minTranslate(), f = !0, u.allowMomentumBounce = !0) : d = t.minTranslate(), a.loop && a.centeredSlides && (m = !0);
                            else if (a.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < c.length; t += 1)
                                    if (c[t] > -d) {
                                        e = t;
                                        break
                                    } d = Math.abs(c[e] - d) < Math.abs(c[e - 1] - d) || "next" === t.swipeDirection ? c[e] : c[e - 1], d = -d
                            }
                            if (m && i("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-d - t.translate) / t.velocity) : Math.abs((d - t.translate) / t.velocity), a.freeMode.sticky) {
                                    const n = Math.abs((l ? -d : d) - t.translate),
                                        r = t.slidesSizesGrid[t.activeIndex];
                                    e = n < r ? a.speed : n < 2 * r ? 1.5 * a.speed : 2.5 * a.speed
                                }
                            } else if (a.freeMode.sticky) return void t.slideToClosest();
                            a.freeMode.momentumBounce && f ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating = !0, w(o, (() => {
                                t && !t.destroyed && u.allowMomentumBounce && (r("momentumBounce"), t.setTransition(a.speed), setTimeout((() => {
                                    t.setTranslate(p), w(o, (() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (r("_freeModeNoMomentumRelease"), t.updateProgress(d), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, w(o, (() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(d), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (a.freeMode.sticky) return void t.slideToClosest();
                            a.freeMode && r("_freeModeNoMomentumRelease")
                        }(!a.freeMode.momentum || d >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function(e) {
        let t, n, r, {
            swiper: i,
            extendParams: a
        } = e;
        a({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        const o = () => {
            let e = i.params.spaceBetween;
            return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * i.size : "string" == typeof e && (e = parseFloat(e)), e
        };
        i.grid = {
            initSlides: e => {
                const {
                    slidesPerView: a
                } = i.params, {
                    rows: o,
                    fill: s
                } = i.params.grid;
                r = Math.floor(e / o), t = Math.floor(e / o) === e / o ? e : Math.ceil(e / o) * o, "auto" !== a && "row" === s && (t = Math.max(t, a * o)), n = t / o
            },
            updateSlide: (e, a, s, l) => {
                const {
                    slidesPerGroup: c
                } = i.params, u = o(), {
                    rows: d,
                    fill: p
                } = i.params.grid;
                let f, h, m;
                if ("row" === p && c > 1) {
                    const n = Math.floor(e / (c * d)),
                        r = e - d * c * n,
                        i = 0 === n ? c : Math.min(Math.ceil((s - n * d * c) / d), c);
                    m = Math.floor(r / i), h = r - m * i + n * c, f = h + m * t / d, a.style.order = f
                } else "column" === p ? (h = Math.floor(e / d), m = e - h * d, (h > r || h === r && m === d - 1) && (m += 1, m >= d && (m = 0, h += 1))) : (m = Math.floor(e / n), h = e - m * n);
                a.row = m, a.column = h, a.style[l("margin-top")] = 0 !== m ? u && `${u}px` : ""
            },
            updateWrapperSize: (e, n, r) => {
                const {
                    centeredSlides: a,
                    roundLengths: s
                } = i.params, l = o(), {
                    rows: c
                } = i.params.grid;
                if (i.virtualSize = (e + l) * t, i.virtualSize = Math.ceil(i.virtualSize / c) - l, i.wrapperEl.style[r("width")] = `${i.virtualSize+l}px`, a) {
                    const e = [];
                    for (let t = 0; t < n.length; t += 1) {
                        let r = n[t];
                        s && (r = Math.floor(r)), n[t] < i.virtualSize + n[0] && e.push(r)
                    }
                    n.splice(0, n.length), n.push(...e)
                }
            }
        }
    }, function(e) {
        let {
            swiper: t
        } = e;
        Object.assign(t, {
            appendSlide: te.bind(t),
            prependSlide: ne.bind(t),
            addSlide: re.bind(t),
            removeSlide: ie.bind(t),
            removeAllSlides: ae.bind(t)
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            fadeEffect: {
                crossFade: !1
            }
        }), oe({
            effect: "fade",
            swiper: t,
            on: r,
            setTranslate: () => {
                const {
                    slides: e
                } = t;
                t.params.fadeEffect;
                for (let n = 0; n < e.length; n += 1) {
                    const e = t.slides[n];
                    let r = -e.swiperSlideOffset;
                    t.params.virtualTranslate || (r -= t.translate);
                    let i = 0;
                    t.isHorizontal() || (i = r, r = 0);
                    const a = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                        o = se(0, e);
                    o.style.opacity = a, o.style.transform = `translate3d(${r}px, ${i}px, 0px)`
                }
            },
            setTransition: e => {
                const n = t.slides.map((e => f(e)));
                n.forEach((t => {
                    t.style.transitionDuration = `${e}ms`
                })), le({
                    swiper: t,
                    duration: e,
                    transformElements: n,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e, t, n) => {
            let r = n ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = n ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            r || (r = m("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (n ? "left" : "top")).split(" ")), e.append(r)), i || (i = m("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (n ? "right" : "bottom")).split(" ")), e.append(i)), r && (r.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0))
        };
        oe({
            effect: "cube",
            swiper: t,
            on: r,
            setTranslate: () => {
                const {
                    el: e,
                    wrapperEl: n,
                    slides: r,
                    width: a,
                    height: o,
                    rtlTranslate: s,
                    size: l,
                    browser: c
                } = t, u = t.params.cubeEffect, d = t.isHorizontal(), p = t.virtual && t.params.virtual.enabled;
                let f, h = 0;
                u.shadow && (d ? (f = t.wrapperEl.querySelector(".swiper-cube-shadow"), f || (f = m("div", "swiper-cube-shadow"), t.wrapperEl.append(f)), f.style.height = `${a}px`) : (f = e.querySelector(".swiper-cube-shadow"), f || (f = m("div", "swiper-cube-shadow"), e.append(f))));
                for (let e = 0; e < r.length; e += 1) {
                    const t = r[e];
                    let n = e;
                    p && (n = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
                    let a = 90 * n,
                        o = Math.floor(a / 360);
                    s && (a = -a, o = Math.floor(-a / 360));
                    const c = Math.max(Math.min(t.progress, 1), -1);
                    let f = 0,
                        m = 0,
                        g = 0;
                    n % 4 == 0 ? (f = 4 * -o * l, g = 0) : (n - 1) % 4 == 0 ? (f = 0, g = 4 * -o * l) : (n - 2) % 4 == 0 ? (f = l + 4 * o * l, g = l) : (n - 3) % 4 == 0 && (f = -l, g = 3 * l + 4 * l * o), s && (f = -f), d || (m = f, f = 0);
                    const v = `rotateX(${d?0:-a}deg) rotateY(${d?a:0}deg) translate3d(${f}px, ${m}px, ${g}px)`;
                    c <= 1 && c > -1 && (h = 90 * n + 90 * c, s && (h = 90 * -n - 90 * c)), t.style.transform = v, u.slideShadows && i(t, c, d)
                }
                if (n.style.transformOrigin = `50% 50% -${l/2}px`, n.style["-webkit-transform-origin"] = `50% 50% -${l/2}px`, u.shadow)
                    if (d) f.style.transform = `translate3d(0px, ${a/2+u.shadowOffset}px, ${-a/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`;
                    else {
                        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            n = u.shadowScale,
                            r = u.shadowScale / t,
                            i = u.shadowOffset;
                        f.style.transform = `scale3d(${n}, 1, ${r}) translate3d(0px, ${o/2+i}px, ${-o/2/r}px) rotateX(-90deg)`
                    } const g = (c.isSafari || c.isWebView) && c.needPerspectiveFix ? -l / 2 : 0;
                n.style.transform = `translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`, n.style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {
                    el: n,
                    slides: r
                } = t;
                if (r.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                    const t = n.querySelector(".swiper-cube-shadow");
                    t && (t.style.transitionDuration = `${e}ms`)
                }
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.forEach((t => {
                    const n = Math.max(Math.min(t.progress, 1), -1);
                    i(t, n, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        });
        const i = (e, n) => {
            let r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            r || (r = ce("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = ce("flip", e, t.isHorizontal() ? "right" : "bottom")), r && (r.style.opacity = Math.max(-n, 0)), i && (i.style.opacity = Math.max(n, 0))
        };
        oe({
            effect: "flip",
            swiper: t,
            on: r,
            setTranslate: () => {
                const {
                    slides: e,
                    rtlTranslate: n
                } = t, r = t.params.flipEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const o = e[a];
                    let s = o.progress;
                    t.params.flipEffect.limitRotation && (s = Math.max(Math.min(o.progress, 1), -1));
                    const l = o.swiperSlideOffset;
                    let c = -180 * s,
                        u = 0,
                        d = t.params.cssMode ? -l - t.translate : -l,
                        p = 0;
                    t.isHorizontal() ? n && (c = -c) : (p = d, d = 0, u = -c, c = 0), o.style.zIndex = -Math.abs(Math.round(s)) + e.length, r.slideShadows && i(o, s);
                    const f = `translate3d(${d}px, ${p}px, 0px) rotateX(${u}deg) rotateY(${c}deg)`;
                    se(0, o).style.transform = f
                }
            },
            setTransition: e => {
                const n = t.slides.map((e => f(e)));
                n.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), le({
                    swiper: t,
                    duration: e,
                    transformElements: n
                })
            },
            recreateShadows: () => {
                t.params.flipEffect, t.slides.forEach((e => {
                    let n = e.progress;
                    t.params.flipEffect.limitRotation && (n = Math.max(Math.min(e.progress, 1), -1)), i(e, n)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        }), oe({
            effect: "coverflow",
            swiper: t,
            on: r,
            setTranslate: () => {
                const {
                    width: e,
                    height: n,
                    slides: r,
                    slidesSizesGrid: i
                } = t, a = t.params.coverflowEffect, o = t.isHorizontal(), s = t.translate, l = o ? e / 2 - s : n / 2 - s, c = o ? a.rotate : -a.rotate, u = a.depth;
                for (let e = 0, t = r.length; e < t; e += 1) {
                    const t = r[e],
                        n = i[e],
                        s = (l - t.swiperSlideOffset - n / 2) / n,
                        d = "function" == typeof a.modifier ? a.modifier(s) : s * a.modifier;
                    let p = o ? c * d : 0,
                        f = o ? 0 : c * d,
                        h = -u * Math.abs(d),
                        m = a.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(a.stretch) / 100 * n);
                    let g = o ? 0 : m * d,
                        v = o ? m * d : 0,
                        y = 1 - (1 - a.scale) * Math.abs(d);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0), Math.abs(f) < .001 && (f = 0), Math.abs(y) < .001 && (y = 0);
                    const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${f}deg) rotateY(${p}deg) scale(${y})`;
                    if (se(0, t).style.transform = b, t.style.zIndex = 1 - Math.abs(Math.round(d)), a.slideShadows) {
                        let e = o ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
                            n = o ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                        e || (e = ce("coverflow", t, o ? "left" : "top")), n || (n = ce("coverflow", t, o ? "right" : "bottom")), e && (e.style.opacity = d > 0 ? d : 0), n && (n.style.opacity = -d > 0 ? -d : 0)
                    }
                }
            },
            setTransition: e => {
                t.slides.map((e => f(e))).forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                }))
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        oe({
            effect: "creative",
            swiper: t,
            on: r,
            setTranslate: () => {
                const {
                    slides: e,
                    wrapperEl: n,
                    slidesSizesGrid: r
                } = t, a = t.params.creativeEffect, {
                    progressMultiplier: o
                } = a, s = t.params.centeredSlides;
                if (s) {
                    const e = r[0] / 2 - t.params.slidesOffsetBefore || 0;
                    n.style.transform = `translateX(calc(50% - ${e}px))`
                }
                for (let n = 0; n < e.length; n += 1) {
                    const r = e[n],
                        l = r.progress,
                        c = Math.min(Math.max(r.progress, -a.limitProgress), a.limitProgress);
                    let u = c;
                    s || (u = Math.min(Math.max(r.originalProgress, -a.limitProgress), a.limitProgress));
                    const d = r.swiperSlideOffset,
                        p = [t.params.cssMode ? -d - t.translate : -d, 0, 0],
                        f = [0, 0, 0];
                    let h = !1;
                    t.isHorizontal() || (p[1] = p[0], p[0] = 0);
                    let m = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    c < 0 ? (m = a.next, h = !0) : c > 0 && (m = a.prev, h = !0), p.forEach(((e, t) => {
                        p[t] = `calc(${e}px + (${i(m.translate[t])} * ${Math.abs(c*o)}))`
                    })), f.forEach(((e, t) => {
                        f[t] = m.rotate[t] * Math.abs(c * o)
                    })), r.style.zIndex = -Math.abs(Math.round(l)) + e.length;
                    const g = p.join(", "),
                        v = `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`,
                        y = u < 0 ? `scale(${1+(1-m.scale)*u*o})` : `scale(${1-(1-m.scale)*u*o})`,
                        b = u < 0 ? 1 + (1 - m.opacity) * u * o : 1 - (1 - m.opacity) * u * o,
                        w = `translate3d(${g}) ${v} ${y}`;
                    if (h && m.shadow || !h) {
                        let e = r.querySelector(".swiper-slide-shadow");
                        if (!e && m.shadow && (e = ce("creative", r)), e) {
                            const t = a.shadowPerProgress ? c * (1 / a.limitProgress) : c;
                            e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const x = se(0, r);
                    x.style.transform = w, x.style.opacity = b, m.origin && (x.style.transformOrigin = m.origin)
                }
            },
            setTransition: e => {
                const n = t.slides.map((e => f(e)));
                n.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), le({
                    swiper: t,
                    duration: e,
                    transformElements: n,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: n,
            on: r
        } = e;
        n({
            cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }), oe({
            effect: "cards",
            swiper: t,
            on: r,
            setTranslate: () => {
                const {
                    slides: e,
                    activeIndex: n,
                    rtlTranslate: r
                } = t, i = t.params.cardsEffect, {
                    startTranslate: a,
                    isTouched: o
                } = t.touchEventsData, s = r ? -t.translate : t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const c = e[l],
                        u = c.progress,
                        d = Math.min(Math.max(u, -4), 4);
                    let p = c.swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let f = t.params.cssMode ? -p - t.translate : -p,
                        h = 0;
                    const m = -100 * Math.abs(d);
                    let g = 1,
                        v = -i.perSlideRotate * d,
                        y = i.perSlideOffset - .75 * Math.abs(d);
                    const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                        w = (b === n || b === n - 1) && d > 0 && d < 1 && (o || t.params.cssMode) && s < a,
                        x = (b === n || b === n + 1) && d < 0 && d > -1 && (o || t.params.cssMode) && s > a;
                    if (w || x) {
                        const e = (1 - Math.abs((Math.abs(d) - .5) / .5)) ** .5;
                        v += -28 * d * e, g += -.5 * e, y += 96 * e, h = -25 * e * Math.abs(d) + "%"
                    }
                    if (f = d < 0 ? `calc(${f}px ${r?"-":"+"} (${y*Math.abs(d)}%))` : d > 0 ? `calc(${f}px ${r?"-":"+"} (-${y*Math.abs(d)}%))` : `${f}px`, !t.isHorizontal()) {
                        const e = h;
                        h = f, f = e
                    }
                    const S = d < 0 ? "" + (1 + (1 - g) * d) : "" + (1 - (1 - g) * d),
                        E = `\n        translate3d(${f}, ${h}, ${m}px)\n        rotateZ(${i.rotate?r?-v:v:0}deg)\n        scale(${S})\n      `;
                    if (i.slideShadows) {
                        let e = c.querySelector(".swiper-slide-shadow");
                        e || (e = ce("cards", c)), e && (e.style.opacity = Math.min(Math.max((Math.abs(d) - .5) / .5, 0), 1))
                    }
                    c.style.zIndex = -Math.abs(Math.round(u)) + e.length, se(0, c).style.transform = E
                }
            },
            setTransition: e => {
                const n = t.slides.map((e => f(e)));
                n.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), le({
                    swiper: t,
                    duration: e,
                    transformElements: n
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }];
    return Q.use(ue), Q
}();
/*!
 * @pqina/flip v1.7.7
 */
! function() {
    "use strict";

    function e(e) {
        return "function" == typeof e || "[object Function]" === n.call(e)
    }

    function t(e) {
        var t, n = (t = Number(e), isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t)) : t);
        return Math.min(Math.max(n, 0), r)
    }
    var n, r, i, a, o, s;
    Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
        value: function(e) {
            if (null == this) throw new TypeError("this is null or not defined");
            for (var t = Object(this), n = t.length >>> 0, r = arguments[1] >> 0, i = r < 0 ? Math.max(n + r, 0) : Math.min(r, n), a = arguments[2], o = void 0 === a ? n : a >> 0, s = o < 0 ? Math.max(n + o, 0) : Math.min(o, n); i < s;) t[i] = e, i++;
            return t
        }
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var t = Object(this), n = t.length >>> 0, r = arguments[1], i = 0; i !== n; i++)
                if (e.call(r, this[i], i, t)) return this[i]
        }
    }), Array.from || (Array.from = (n = Object.prototype.toString, r = Math.pow(2, 53) - 1, function(n, r, i) {
        var a = Object(n);
        if (null == n) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var o, s = 1 < arguments.length ? r : void 0;
        if (void 0 !== s) {
            if (!e(s)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            2 < arguments.length && (o = i)
        }
        for (var l, c = t(a.length), u = e(this) ? Object(new this(c)) : new Array(c), d = 0; d < c;) l = a[d], u[d] = s ? void 0 === o ? s(l, d) : s.call(o, l, d) : l, d += 1;
        return u.length = c, u
    })), Array.prototype.includes = Array.prototype.includes || function(e, t) {
        if (!this) throw new TypeError("Array.prototype.includes called on null or undefined");
        if (void 0 === t) {
            for (var n = this.length; n--;)
                if (this[n] === e) return !0
        } else {
            n = t;
            for (var r = this.length; n++ !== r;)
                if (this[n] === e) return !0
        }
        return !1
    }, "function" != typeof Object.assign && (Object.assign = function(e, t) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(e), r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            if (null != i)
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a])
        }
        return n
    }), Object.keys || (Object.keys = (i = Object.prototype.hasOwnProperty, a = !{
        toString: null
    }.propertyIsEnumerable("toString"), s = (o = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(e) {
        if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
        var t, n, r = [];
        for (t in e) i.call(e, t) && r.push(t);
        if (a)
            for (n = 0; n < s; n++) i.call(e, o[n]) && r.push(o[n]);
        return r
    }))
}(),
function(e) {
    "use strict";
    e.Tick || (e.Tick = []), e.Tick.push(["view", "flip", function() {
        if (!e) var e = {};

        function t(e) {
            this.value = e
        }

        function n(e) {
            var n, r;

            function i(n, r) {
                try {
                    var o = e[n](r),
                        s = o.value;
                    s instanceof t ? Promise.resolve(s.value).then((function(e) {
                        i("next", e)
                    }), (function(e) {
                        i("throw", e)
                    })) : a(o.done ? "return" : "normal", o.value)
                } catch (n) {
                    a("throw", n)
                }
            }

            function a(e, t) {
                switch (e) {
                    case "return":
                        n.resolve({
                            value: t,
                            done: !0
                        });
                        break;
                    case "throw":
                        n.reject(t);
                        break;
                    default:
                        n.resolve({
                            value: t,
                            done: !1
                        })
                }(n = n.next) ? i(n.key, n.arg): r = null
            }
            this._invoke = function(e, t) {
                return new Promise((function(a, o) {
                    var s = {
                        key: e,
                        arg: t,
                        resolve: a,
                        reject: o,
                        next: null
                    };
                    r ? r = r.next = s : (n = r = s, i(e, t))
                }))
            }, "function" != typeof e.return && (this.return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (n.prototype[Symbol.asyncIterator] = function() {
            return this
        }), n.prototype.next = function(e) {
            return this._invoke("next", e)
        }, n.prototype.throw = function(e) {
            return this._invoke("throw", e)
        }, n.prototype.return = function(e) {
            return this._invoke("return", e)
        };
        var r = function(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        };

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return e.exports = function(e) {
            function t(e) {
                if (e.isInitialValue()) {
                    e.root.textContent = "", e.spacer = n.create("span", "tick-flip-spacer"), e.root.appendChild(e.spacer);
                    var t = n.create("span", "tick-flip-shadow-top tick-flip-shadow tick-flip-front"),
                        r = n.create("span", "tick-flip-shadow-bottom tick-flip-shadow tick-flip-back");
                    e.root.appendChild(t), e.root.appendChild(r), e.shadowCard = n.create("span", "tick-flip-card-shadow"), e.root.appendChild(e.shadowCard)
                }
                if (e.spacer.textContent = e.value, e.isInitialValue() || n.visible(e.root)) {
                    var o = e.cards[e.cards.length - 1];
                    if (o && (o.waiting = !1, o.offset = a(), o.back = e.value), e.isInitialValue()) {
                        var s = new h;
                        s.back = e.value, s.offset = null, s.progress = 1, e.root.insertBefore(s.root, e.root.firstChild), e.cards.push(s)
                    }
                    var l = new h;
                    if (l.offset = null, l.progress = 0, l.visual_progress = 0, l.waiting = !0, l.front = e.value, l.rotate(0), e.root.insertBefore(l.root, e.root.firstChild), e.cards.push(l), !e.animating) {
                        e.animating = !0;
                        var c = i.getExtension(i.Type.EASING_FUNCTION, e.style.flipEasing);
                        ! function t() {
                            var r = e.cards.filter((function(e) {
                                return !e.done && !e.waiting
                            }));
                            if (0 !== r.length) {
                                r.forEach((function(t) {
                                    null !== t.offset && (t.progress = (a() - t.offset) / e.style.flipDuration), 1 <= t.progress && (t.progress = 1, t.done = !0), t.visual_progress = c(t.progress)
                                })), r.reverse().forEach((function(e, t) {
                                    var n = r[t - 1];
                                    n && e.visual_progress <= n.visual_progress && (e.visual_progress = n.visual_progress + .01)
                                })), r.reverse(), e.cards.forEach((function(t, n) {
                                    var r = 1 - 2 * Math.abs(t.visual_progress - .5),
                                        i = 1 - (t.visual_progress - .5) / .5;
                                    t.shadowFront = r, t.highlightBack = i;
                                    var a = e.cards[n + 1];
                                    a && .5 < t.visual_progress && 0 < t.visual_progress && (t.shadowBack = p(a.visual_progress))
                                })), r.forEach((function(e, t) {
                                    var n = e.visual_progress;
                                    .5 < n && !e.done ? e.root.style.zIndex = 10 + t : e.root.style.removeProperty("z-index"), e.rotate(-180 * n)
                                }));
                                var i = 0,
                                    o = 1;
                                r.forEach((function(e) {
                                    var t = Math.abs(e.visual_progress - .5);
                                    t < o && (o = t, i = e.visual_progress)
                                }));
                                var s = f(i < .5 ? i / .5 : (1 - i) / .5);
                                e.shadowCard.style.opacity = s, n.transform(e.shadowCard, "scaleY", s), e.cards.filter((function(e) {
                                    return e.done
                                })).slice(0, -1).forEach((function(t) {
                                    e.cards = e.cards.filter((function(e) {
                                        return e !== t
                                    })), t.root.parentNode && e.root.removeChild(t.root)
                                })), requestAnimationFrame(t)
                            } else e.animating = !1
                        }()
                    }
                } else e.cards.forEach((function(t) {
                    t.back = e.value, t.front = e.value
                }))
            }
            var n = e.DOM,
                i = (e.Animation.animate, e.Extension),
                a = e.Date.performance,
                o = e.View,
                s = o.rooter,
                l = o.destroyer,
                c = o.drawer,
                u = o.updater,
                d = o.styler,
                p = i.getExtension(i.Type.EASING_FUNCTION, "ease-out-cubic"),
                f = i.getExtension(i.Type.EASING_FUNCTION, "ease-out-sine"),
                h = (r(m, [{
                    key: "rotate",
                    value: function(e) {
                        this._front.style.transform = "rotateX(" + e + "deg)", this._back.style.transform = "rotateX(" + (-180 + e) + "deg)"
                    }
                }, {
                    key: "root",
                    get: function() {
                        return this._root
                    }
                }, {
                    key: "front",
                    set: function(e) {
                        this._frontValue = e, this._textFront.textContent = e
                    },
                    get: function() {
                        return this._frontValue
                    }
                }, {
                    key: "back",
                    set: function(e) {
                        this._backValue = e, this._textBack.textContent = e
                    },
                    get: function() {
                        return this._backValue
                    }
                }, {
                    key: "highlightBack",
                    set: function(e) {
                        this._highlightBack.style.opacity = e
                    }
                }, {
                    key: "shadowBack",
                    set: function(e) {
                        this._shadowBack.style.opacity = e
                    }
                }, {
                    key: "shadowFront",
                    set: function(e) {
                        this._shadowFront.style.opacity = e
                    }
                }]), m);

            function m() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, m), this._root = n.create("span", "tick-flip-card");
                var e = n.create("span", "tick-flip-panel-front tick-flip-front tick-flip-panel"),
                    t = n.create("span", "tick-flip-panel-front-text"),
                    r = n.create("span", "tick-flip-panel-text-wrapper");
                t.appendChild(r);
                var i = n.create("span", "tick-flip-panel-front-shadow");
                e.appendChild(t), e.appendChild(i);
                var a = n.create("span", "tick-flip-panel-back tick-flip-back tick-flip-panel"),
                    o = n.create("span", "tick-flip-panel-back-text"),
                    s = n.create("span", "tick-flip-panel-text-wrapper");
                o.appendChild(s);
                var l = n.create("span", "tick-flip-panel-back-highlight"),
                    c = n.create("span", "tick-flip-panel-back-shadow");
                a.appendChild(o), a.appendChild(l), a.appendChild(c), this._root.appendChild(e), this._root.appendChild(a), this._front = e, this._back = a, this._shadowFront = i, this._shadowBack = c, this._highlightBack = l, this._textBack = s, this._textFront = r, this._frontValue = null, this._backValue = null
            }
            return function(e) {
                var n = {
                    cards: [],
                    lastCard: null,
                    initialCard: null,
                    shadowAbove: null,
                    shadowBelow: null,
                    shadowCard: null,
                    currentValue: null,
                    lastValue: null,
                    front: null,
                    back: null
                };
                return Object.assign({}, s(n, e, "flip"), u(n), d(n, {
                    flipDuration: 800,
                    flipEasing: "ease-out-bounce"
                }), c(n, t), l(n))
            }
        }, e.exports.identifier = {
            name: "flip",
            type: "view"
        }, e.exports
    }()])
}(window),
function(e, t, n) {
    "use strict";
    if (e && "MutationObserver" in e && "requestAnimationFrame" in e) {
        var r = function() {
            if (!e) var e = {};
            var t = {
                    FONT: "font",
                    VIEW: "view",
                    TRANSFORM: "transform",
                    EASING_FUNCTION: "easing-function",
                    TRANSITION: "transition"
                },
                r = {};

            function i(e, t) {
                if (r[e])
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            if (r[e][n]) return;
                            r[e][n] = t[n]
                        }
            }

            function a(e, t, n) {
                if (!r[e]) throw "Can't add extension with type of \"" + e + '", "' + e + '" is not a valid extension type. The following types are valid: ' + Tt(r);
                if (!/^[-a-z]+$/.test(t)) throw "Can't add extension with name \"" + t + '", "' + t + '" is contains invalid characters. Only lowercase alphabetical characters and dashes are allowed.';
                if (r[e][t]) throw "Can't add extension with name \"" + t + '", "' + t + '" is already added.';
                r[e][t] = n
            }

            function o(e, t) {
                if (!r[e]) throw "Can't get extension with type of \"" + e + '", "' + e + '" is not a valid extension type. The following types are available: ' + Tt(r);
                if (!r[e][t]) throw "Can't get extension with name \"" + t + '", "' + t + '" is not available. The following extensions are available: ' + Tt(r[e]);
                return r[e][t]
            }
            r[t.FONT] = {}, r[t.VIEW] = {}, r[t.TRANSFORM] = {}, r[t.EASING_FUNCTION] = {}, r[t.TRANSITION] = {};
            var s = {
                    Week: 6048e5,
                    Day: 864e5,
                    Hour: 36e5,
                    Minute: 6e4,
                    Second: 1e3,
                    Millisecond: 1,
                    Month: 2628e6,
                    Year: 31536e6
                },
                l = ["Januari", "Februari", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            for (var c in s)
                if (s.hasOwnProperty(c)) {
                    var u = s[c];
                    1 === u ? (s.mi = u, s.ms = u) : 2628e6 === u ? s.M = u : s[c.charAt(0).toLowerCase()] = u, s[c.toLowerCase()] = u, s[c.toLowerCase() + "s"] = u
                }
            function d(e) {
                return e instanceof Date
            }

            function p(e, t) {
                var n = t - e.getDay();
                return e.setDate(e.getDate() + n), e
            }

            function f(e, t) {
                var n = M(e.getMonth() + 1, e.getFullYear());
                return t = "last" === t ? n : Math.max(1, Math.min(n, t)), e.setDate(t), e
            }

            function h(e, t) {
                return e.setMonth(l.map((function(e) {
                    return e.toLowerCase()
                })).indexOf(t)), e
            }

            function m(e) {
                return new Date(Date.now() + e)
            }

            function g(e, t) {
                return e.toDateString() === t.toDateString()
            }

            function v(e) {
                return e.match(/(Z)|([+\-][0-9]{2}:?[0-9]*$)/g) ? new Date(e) : (e += -1 !== e.indexOf("T") ? "Z" : "", k(new Date(e)))
            }

            function y(e, t) {
                return t.map((function(t) {
                    var n = s[t],
                        r = Math.max(0, Math.floor(e / n));
                    return e %= n, r
                }))
            }

            function b(e, t, n) {
                var r = t - e,
                    i = !1;
                if (r < 0) {
                    r = e - t;
                    var a = [t, e];
                    e = a[0], t = a[1], i = !0
                }
                var o = (n = n || ["d", "h", "m"]).indexOf("m");
                0 <= o && ("y" === n[o - 1] || "d" === n[o + 1]) && (n[o].key = "M");
                var l = void 0,
                    c = void 0,
                    u = void 0,
                    d = n.includes("y"),
                    p = n.includes("M");
                (p || d) && (l = new Date(e.valueOf() + r), c = O(l, e), u = p ? Math.floor(c) : 12 * Math.floor(c / 12), r = l.valueOf() - P(I(e), u).valueOf());
                var f = n.map((function(e) {
                    if ("y" === e || "M" === e) {
                        var t = Math.max(0, Math.floor(c / L[e]));
                        return c -= t * L[e], t
                    }
                    var n = s[e],
                        i = Math.max(0, Math.floor(r / n));
                    return r %= n, i
                }));
                return i ? f.map((function(e) {
                    return 0 < e ? -e : e
                })) : f
            }

            function w() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                if ("number" != typeof t[0] || "string" != typeof t[1]) return d(t[0]) ? b.apply(n, t) : "number" == typeof t[0] && Array.isArray(t[1]) ? y.apply(n, t) : null;
                if (!s[t[1]]) throw '"' + t[1] + '" is not a valid amount.';
                return t[0] * s[t[1]]
            }

            function x() {
                return new Date
            }

            function S(e) {
                return {
                    destroy: function() {
                        e.destroyed = !0, e.frame && cancelAnimationFrame(e.frame), e.styleObserver && e.styleObserver.disconnect(), e.didResizeWindow && window.removeEventListener("resize", e.didResizeWindow), e.root && e.root.parentNode && e.root.parentNode.removeChild(e.root)
                    }
                }
            }

            function E(e) {
                var t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : document.createElement("span"),
                    r = 2 < arguments.length && arguments[2] !== n ? arguments[2] : null;
                return e.root = t, e.aligned = null, e.destroyed = !1, t && r && (e.root.classList.add("tick-" + r), e.root.setAttribute("data-view", r)), t && t.dataset.layout && (e.align = (t.dataset.layout.match(/left|right|center/) || [])[0] || "left"), {
                    appendTo: function(t, r) {
                        var i = 1 < arguments.length && r !== n ? r : "last";
                        !e.root || e.root && e.root.parentNode || ("last" !== i ? ("first" === i && (0 === t.childNodes.length ? t.appendChild(e.root) : 0 === t.children.length && t.childNodes.length ? t.insertBefore(e.root, t.childNodes[t.childNodes.length - 1]) : t.insertBefore(e.root, t.children[0])), "string" != typeof i && t.insertBefore(e.root, i)) : t.childNodes.length && t.childNodes[t.childNodes.length - 1].nodeType === Node.TEXT_NODE ? t.insertBefore(e.root, t.childNodes[t.childNodes.length - 1]) : t.appendChild(e.root))
                    }
                }
            }

            function T(e, t) {
                return e.definition = t, {
                    setDefinition: function(t) {
                        e.definition = t
                    }
                }
            }

            function C(e, t, n, r) {
                return {
                    draw: function() {
                        return e.dirty ? (t(e, r), j(e), !(e.dirty = !1)) : (n && n(e) && j(e), !1)
                    }
                }
            }

            function _(e) {
                return e.dirty = !0, e.value = null, e.valueUpdateCount = 0, e.isInitialValue = function() {
                    return e.valueUpdateCount <= 1
                }, {
                    reset: function() {
                        e.dirty = !0, e.value = null, e.valueUpdateCount = 0
                    },
                    update: function(t) {
                        wt(e.value, t) || (e.value = t, e.valueUpdateCount++, e.dirty = !0)
                    }
                }
            }

            function D(e) {
                e.didResizeWindow = function() {
                    e.dirty = !0
                }, window.addEventListener("resize", e.didResizeWindow)
            }
            var A = {
                    Monday: 1,
                    Tuesday: 2,
                    Wednesday: 3,
                    Thursday: 4,
                    Friday: 5,
                    Saturday: 6,
                    Sunday: 0
                },
                L = {
                    M: 1,
                    y: 12
                },
                M = function(e, t) {
                    return new Date(t, e, 0).getDate()
                },
                k = function(e) {
                    return new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
                },
                I = function(e) {
                    return new Date(e.valueOf())
                },
                P = function(e, t) {
                    return e.setMonth(e.getMonth() + t), e
                },
                O = function(e, t) {
                    var n = 12 * (t.getFullYear() - e.getFullYear()) + (t.getMonth() - e.getMonth()),
                        r = P(I(e), n);
                    return -(n + (t - r < 0 ? (t - r) / (r - P(I(e), n - 1)) : (t - r) / (P(I(e), 1 + n) - r)))
                },
                j = function(e) {
                    if (!e.fit) {
                        if (!e.root || !(e.root.getAttribute("data-layout") || "").match(/fit/)) return void(e.fit = !1);
                        var t = window.getComputedStyle(e.root, null);
                        e.fit = !0, e.fitInfo = {
                            currentFontSize: parseInt(t.getPropertyValue("font-size"), 10)
                        }
                    }
                    e.fitInfo.availableWidth = e.root.parentNode.clientWidth, e.fitInfo.currentWidth = e.root.scrollWidth;
                    var n = Math.min(Math.max(4, e.fitInfo.availableWidth / e.fitInfo.currentWidth * e.fitInfo.currentFontSize), 1024);
                    Math.abs(n - e.fitInfo.currentFontSize) <= 1 || (e.fitInfo.currentFontSize = n, e.root.style.fontSize = e.fitInfo.currentFontSize + "px")
                },
                N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };

            function R(e) {
                this.value = e
            }

            function F(e) {
                var t, r;

                function i(t, n) {
                    try {
                        var r = e[t](n),
                            o = r.value;
                        o instanceof R ? Promise.resolve(o.value).then((function(e) {
                            i("next", e)
                        }), (function(e) {
                            i("throw", e)
                        })) : a(r.done ? "return" : "normal", r.value)
                    } catch (t) {
                        a("throw", t)
                    }
                }

                function a(e, n) {
                    switch (e) {
                        case "return":
                            t.resolve({
                                value: n,
                                done: !0
                            });
                            break;
                        case "throw":
                            t.reject(n);
                            break;
                        default:
                            t.resolve({
                                value: n,
                                done: !1
                            })
                    }(t = t.next) ? i(t.key, t.arg): r = null
                }
                this._invoke = function(e, n) {
                    return new Promise((function(a, o) {
                        var s = {
                            key: e,
                            arg: n,
                            resolve: a,
                            reject: o,
                            next: null
                        };
                        r ? r = r.next = s : (t = r = s, i(e, n))
                    }))
                }, "function" != typeof e.return && (this.return = n)
            }
            "function" == typeof Symbol && Symbol.asyncIterator && (F.prototype[Symbol.asyncIterator] = function() {
                return this
            }), F.prototype.next = function(e) {
                return this._invoke("next", e)
            }, F.prototype.throw = function(e) {
                return this._invoke("throw", e)
            }, F.prototype.return = function(e) {
                return this._invoke("return", e)
            };

            function $(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function H(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }

            function z(e, t) {
                var r = (e.definition || []).concat();
                "right" === e.align && r.reverse();
                var i = Array.isArray(e.value) ? e.value.concat() : "object" === N(e.value) ? gt(e.value) : e.value;
                r.forEach((function(n) {
                    if (!n.presenter) {
                        if (e.update = t(n), !n.presenter) return;
                        n.presenter.appendTo(e.root)
                    }
                })), r.filter((function(e) {
                    return e.presenter !== n
                })).forEach((function(t) {
                    Array.isArray(i) && e.valueMapping ? e.update(t, "indexes" === e.valueMapping ? "right" === e.align ? i.pop() : i.shift() : i) : t.key && i[t.key] !== n ? e.update(t, i[t.key]) : e.update(t, i)
                })), e.views = r, ie(e)
            }

            function q(e, t) {
                var n = vt(Array.isArray(e.value) ? e.value : (e.value + "").split(""));
                if ("right" === e.align && n.reverse(), e.definitions.length > n.length)
                    for (; e.definitions.length > n.length;) e.definitions.pop().presenter.destroy();
                n.forEach((function(n, r) {
                    var i = e.definitions[r];
                    i || (i = e.definitions[r] = Ze(e.definition), e.update = t(i), i.presenter.appendTo(e.root, "right" === e.align ? "first" : "last"))
                })), n.forEach((function(t, n) {
                    return e.update(e.definitions[n], t)
                })), e.views = n, ae(e)
            }

            function B(e, t) {
                var n = document.createElement(e);
                return t && (n.className = t), n
            }

            function W(e, t, n) {
                var r = new MutationObserver((function(r) {
                    t.forEach((function(i) {
                        r.filter((function(e) {
                            return t.includes(e.attributeName)
                        })).length && n(e.getAttribute(i))
                    }))
                }));
                return r.observe(e, {
                    attributes: !0
                }), r
            }

            function V(e) {
                return e instanceof HTMLElement
            }

            function G(e, t, r, i) {
                var a = 3 < arguments.length && i !== n ? i : "";
                e.transforms || (e.transforms = []);
                var o = e.transforms.find((function(e) {
                    return e.name === t
                }));
                o ? o.value = r : e.transforms.push({
                    name: t,
                    value: r,
                    unit: a
                }), se(e, e.transforms)
            }

            function X(e) {
                var t = e.getBoundingClientRect();
                return !(t.bottom < 0 || t.top > window.scrollY + window.innerHeight)
            }

            function U(e) {
                return e.trim()
            }

            function Y(e, t) {
                var n = t.toString();
                return le[n] || (le[n] = {}), le[n][e] || (le[n][e] = t(e)), le[n][e]
            }

            function J(e) {
                return e ? parseFloat(e) * (/ms$/.test(e) ? 1 : 1e3) : 0
            }

            function K(e) {
                return e.match(/[a-z]+(?:\(.*?\))?\s?(?:origin\(.*?\))?\s?(?:[a-z]+\(.*?\))?[ .a-z-0-9]*/g).map(ye)
            }

            function Q(e) {
                var t = e.match(/follow-gradient|horizontal-gradient|vertical-gradient/)[0];
                return {
                    type: t,
                    colors: e.substr(t.length).match(/(?:transparent|rgb\(.*?\)|hsl\(.*?\)|hsla\(.*?\)|rgba\(.*?\)|[a-z]+|#[abcdefABCDEF\d]+)\s?(?:[\d]{1,3}%?)?/g).map(we)
                }
            }

            function Z(e) {
                return "string" != typeof e ? e : e.match(/([-.\d]+(?:%|ms|s|deg|cm|em|ch|ex|q|in|mm|pc|pt|px|vh|vw|vmin|vmax)?)|[%#A-Za-z0-9,.()]+/g)
            }

            function ee(e) {
                var t, n, r, i, a = e.split(":").map(U),
                    o = function(e) {
                        return e.trim().split("-").map((function(e, t) {
                            return 0 < t ? (n = e).charAt(0).toUpperCase() + n.slice(1) : e;
                            var n
                        })).join("")
                    }(a[0]),
                    s = (t = a[1], n = a[0], ue.test(t) ? "string" == typeof(r = t) ? "true" === r : r : ce.test(t) ? parseInt(t, 10) : de.test(t) ? parseFloat(t) : ve.test(t) ? 1 === (i = t.match(/url\((.*?)\)/g).map((function(e) {
                        return e.substring(4, e.length - 1)
                    }))).length ? i[0] : i : pe.test(n) ? he.test(t) ? Y(t, Q) : Y(t, Ee) : fe.test(n) ? Y(t, Z) : ge.test(n) && "none" !== t ? Y(t, K) : t);
                return o && null != s ? {
                    property: o,
                    value: s
                } : null
            }

            function te(e) {
                return e
            }

            function ne(e) {
                return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
            }
            var re = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                ie = function(e) {
                    var t = !1;
                    return e.views.filter((function(e) {
                        return e.presenter !== n
                    })).forEach((function(e) {
                        e.presenter.draw() && (t = !0)
                    })), t
                },
                ae = function(e) {
                    var t = !1;
                    return e.views.forEach((function(n, r) {
                        e.definitions[r].presenter.draw() && (t = !0)
                    })), t
                },
                oe = "undefined" == typeof document ? null : function() {
                    for (var e = ["webkit", "Moz", "ms", "O"], t = 0, n = e.length, r = document.createElement("div").style; t < n; t++)
                        if (e[t] + "Transform" in r) return e[t];
                    return null
                }(),
                se = function(e, t) {
                    e.style.transform = t.map((function(e) {
                        return e.name + "(" + e.value + e.unit + ")"
                    })).join(" ")
                },
                le = {},
                ce = new RegExp("^[0-9]+$"),
                ue = new RegExp("^(true|false)$"),
                de = new RegExp("^[0-9.]+$"),
                pe = new RegExp("color"),
                fe = new RegExp("shadow"),
                he = new RegExp("^(follow-gradient|horizontal-gradient|vertical-gradient)"),
                me = new RegExp("^[.0-9]+(?:ms|s){1}$"),
                ge = new RegExp("^transition-?(?:in|out)?$"),
                ve = new RegExp("^url\\("),
                ye = function(e) {
                    var t = e.match(/([a-z]+(?:\(.*?\))?)\s?(?:origin\((.*?)\))?\s?([a-z]+(?:\(.*?\))?)?\s?(?:([.0-9ms]+)?\s?(?:(ease-[a-z-]+))?\s?([.0-9ms]+)?)?/),
                        r = it(t[1]),
                        i = n,
                        a = n,
                        o = n,
                        s = n,
                        l = n;
                    return t.slice(2).filter((function(e) {
                        return void 0 !== e
                    })).forEach((function(e) {
                        me.test(e) ? void 0 === a ? a = J(e) : s = J(e) : / /.test(e) ? i = e : /^ease-[a-z-]+$/.test(e) ? o = e : /^[a-z]+/.test(e) && (l = it(e))
                    })), l && (o = a = n), {
                        name: r.name,
                        parameters: r.parameters,
                        duration: a,
                        ease: o,
                        delay: s,
                        origin: i,
                        resolver: l
                    }
                },
                be = /\s([\d]{1,3})%?$/,
                we = function(e) {
                    var t = e.match(be);
                    return {
                        offset: t ? parseFloat(t[1]) / 100 : null,
                        value: Ee(e.replace(be, ""))
                    }
                },
                xe = [],
                Se = "undefined" == typeof document ? function(e) {
                    return 0
                } : function(e) {
                    var t, r, i, a, o = 1 < arguments.length && arguments[1] !== n ? arguments[1] : document.body,
                        s = 2 < arguments.length && arguments[2] !== n ? arguments[2] : null;
                    if (0 == e) return 0;
                    if (s) {
                        var l = (a = o, (xe[i = s] ? xe[i].find((function(e) {
                            return e.node.parentNode === a
                        })) : null) || {});
                        return l.node || (l.node = document.createElement("span"), l.node.style.cssText = "position:absolute;padding:0;visibility:hidden;", o.appendChild(l.node)), l.node.style.marginTop = e, l.style || (l.style = window.getComputedStyle(l.node)), r = l, xe[t = s] || (xe[t] = []), xe[t].push(r), parseInt(l.style.marginTop, 10)
                    }
                    var c = document.createElement("span");
                    return c.style.cssText = "position:absolute;padding:0;visibility:hidden;margin-top:" + e, o.appendChild(c), requestAnimationFrame((function() {
                        c.parentNode.removeChild(c)
                    })), parseInt(window.getComputedStyle(c).marginTop, 10)
                },
                Ee = "undefined" == typeof document ? function(e) {
                    return e
                } : function(e) {
                    if ("transparent" === e) return "rgba(0,0,0,0)";
                    var t = document.createElement("span");
                    return t.style.cssText = "position:absolute;visibility:hidden;color:" + e, document.body.appendChild(t), requestAnimationFrame((function() {
                        t.parentNode.removeChild(t)
                    })), window.getComputedStyle(t).getPropertyValue("color")
                },
                Te = {
                    "ease-linear": te,
                    "ease-in-sine": function(e) {
                        return -1 * Math.cos(e * (Math.PI / 2)) + 1
                    },
                    "ease-out-sine": function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    "ease-in-out-sine": function(e) {
                        return -.5 * (Math.cos(Math.PI * e) - 1)
                    },
                    "ease-in-cubic": function(e) {
                        return e * e * e
                    },
                    "ease-out-cubic": function(e) {
                        var t = e - 1;
                        return t * t * t + 1
                    },
                    "ease-in-out-cubic": function(e) {
                        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                    },
                    "ease-in-circ": function(e) {
                        var t = +e;
                        return -1 * (Math.sqrt(1 - t * e) - 1)
                    },
                    "ease-out-circ": function(e) {
                        var t = e - 1;
                        return Math.sqrt(1 - t * t)
                    },
                    "ease-in-out-circ": function(e) {
                        var t = 2 * e,
                            n = t - 2;
                        return t < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - n * n) + 1)
                    },
                    "ease-in-quad": function(e) {
                        return e * e
                    },
                    "ease-out-quad": function(e) {
                        return e * (2 - e)
                    },
                    "ease-in-out-quad": ne,
                    "ease-in-quart": function(e) {
                        return e * e * e * e
                    },
                    "ease-out-quart": function(e) {
                        return 1 - --e * e * e * e
                    },
                    "ease-in-out-quart": function(e) {
                        return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                    },
                    "ease-in-expo": function(e) {
                        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                    },
                    "ease-out-expo": function(e) {
                        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                    },
                    "ease-in-out-expo": function(e) {
                        if (0 === e || 1 === e) return e;
                        var t = 2 * e,
                            n = t - 1;
                        return t < 1 ? .5 * Math.pow(2, 10 * n) : .5 * (2 - Math.pow(2, -10 * n))
                    },
                    "ease-in-back": function(e, t) {
                        var r = 1 < arguments.length && t !== n ? t : 1.70158,
                            i = +e;
                        return i * i * ((r + 1) * i - r)
                    },
                    "ease-out-back": function(e, t) {
                        var r = 1 < arguments.length && t !== n ? t : 1.70158,
                            i = e - 1;
                        return i * i * ((r + 1) * i + r) + 1
                    },
                    "ease-in-out-back": function(e, t) {
                        var r = 2 * e,
                            i = r - 2,
                            a = 1.525 * (1 < arguments.length && t !== n ? t : 1.70158);
                        return r < 1 ? .5 * r * r * ((1 + a) * r - a) : .5 * (i * i * ((1 + a) * i + a) + 2)
                    },
                    "ease-out-elastic": function(e, t) {
                        var r = 1 - (1 < arguments.length && t !== n ? t : .7),
                            i = 2 * e;
                        if (0 === e || 1 === e) return e;
                        var a = r / (2 * Math.PI) * Math.asin(1);
                        return Math.pow(2, -10 * i) * Math.sin((i - a) * (2 * Math.PI) / r) + 1
                    },
                    "ease-out-bounce": function(e) {
                        var t = +e;
                        if (t < 1 / 2.75) return 7.5625 * t * t;
                        if (t < 2 / 2.75) {
                            var n = t - 1.5 / 2.75;
                            return 7.5625 * n * n + .75
                        }
                        if (t < 2.5 / 2.75) {
                            var r = t - 2.25 / 2.75;
                            return 7.5625 * r * r + .9375
                        }
                        var i = t - 2.625 / 2.75;
                        return 7.5625 * i * i + .984375
                    }
                };

            function Ce(e, t, r, i, a) {
                var o = 3 < arguments.length && i !== n ? i : te;
                return Ie((function(t) {
                    e(o(t))
                }), t, 2 < arguments.length && r !== n ? r : 500, 4 < arguments.length && a !== n ? a : 0)
            }

            function _e(e) {
                for (var t = arguments.length, r = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                var a, o, s = (o = {
                    velocity: 0,
                    origin: 0,
                    position: 0,
                    destination: 1
                }, {
                    getPosition: function() {
                        return o.position
                    },
                    cancel: l,
                    translate: function(e, t, n, r) {
                        l(), null === n ? o.destination = t : (o.position = t, o.destination = n, o.velocity = 0), o.origin = o.position;
                        var i = null;
                        ! function t(n) {
                            a = requestAnimationFrame(t);
                            var s = n - (i = i || n);
                            s <= 1e3 / 24 || (i = n - s % (1e3 / 24), r(o, l), e(o.position))
                        }(yt())
                    }
                });

                function l() {
                    cancelAnimationFrame(a)
                }
                var c = {
                    update: a = null,
                    cancel: s.cancel,
                    getPosition: s.getPosition
                };
                return "arrive" === e ? c.update = Pe.apply(n, [s.translate].concat(r)) : "spring" === e ? c.update = je.apply(n, [s.translate].concat(r)) : "step" === e && (c.update = Oe.apply(n, [s.translate].concat(r))), c
            }

            function De(e) {
                var t = e.map((function(e) {
                    return Fe(Re(e.name, e.parameters, e.ease), e.origin, e.duration, e.delay)
                }));
                return function(e, n, r) {
                    if (!V(e)) return !1;
                    var i = t.length;
                    t.forEach((function(t) {
                        t(e, n, (function() {
                            !--i && r && r(e)
                        }))
                    }))
                }
            }

            function Ae(e) {
                var t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : {};
                return e.lastAppliedStyles = null, $e(e, t, e.root.dataset.style), e.styleObserver = W(e.root, ["data-style"], (function(n) {
                    $e(e, t, n)
                })), {
                    setStyle: function(n) {
                        $e(e, t, n)
                    }
                }
            }

            function Le(e) {
                return e[oe + "BackingStorePixelRatio"] || e.backingStorePixelRatio || 1
            }

            function Me() {
                return window.devicePixelRatio || 1
            }

            function ke(e) {
                e.getContext("2d").clearRect(0, 0, e.width, e.height)
            }
            i(t.EASING_FUNCTION, Te);
            var Ie = function(e, t, r, i) {
                    var a = 1 < arguments.length && t !== n ? t : null,
                        o = 2 < arguments.length && r !== n ? r : 500,
                        s = 3 < arguments.length && i !== n ? i : 0;
                    if (!e) return null;
                    var l = null,
                        c = void 0,
                        u = null;
                    return function t(n) {
                            if (null === l && (l = n), (c = n - l - s) < o) return e(0 <= c ? c / o : 0), u = requestAnimationFrame(t), null;
                            e(1), a && a()
                        }(yt()),
                        function() {
                            cancelAnimationFrame(u)
                        }
                },
                Pe = function(e, t, r) {
                    var i = 1 < arguments.length && t !== n ? t : 1,
                        a = 2 < arguments.length && r !== n ? r : .01;
                    return function(t) {
                        e(t, 1 < arguments.length && arguments[1] !== n ? arguments[1] : null, 2 < arguments.length && arguments[2] !== n ? arguments[2] : null, (function(e, t) {
                            var n = e.destination - e.position,
                                r = e.origin + .5 * (e.destination - e.origin);
                            e.velocity += 2 * (-(r - e.origin) + n) * a, e.position += e.velocity < 0 ? Math.max(e.velocity, -i) : Math.min(e.velocity, i), (e.origin < e.destination && e.position >= e.destination || e.origin >= e.destination && e.position <= e.destination) && (t(), e.velocity = 0, e.position = e.destination)
                        }))
                    }
                },
                Oe = function(e, t) {
                    var r = 1 < arguments.length && t !== n ? t : .01;
                    return function(t) {
                        e(t, 1 < arguments.length && arguments[1] !== n ? arguments[1] : null, 2 < arguments.length && arguments[2] !== n ? arguments[2] : null, (function(e, t) {
                            e.velocity = r, e.position += e.velocity, (e.origin < e.destination && e.position >= e.destination || e.origin >= e.destination && e.position <= e.destination) && (t(), e.velocity = 0, e.position = e.destination)
                        }))
                    }
                },
                je = function(e, t, r, i) {
                    var a = 1 < arguments.length && t !== n ? t : .5,
                        o = 2 < arguments.length && r !== n ? r : .75,
                        s = 3 < arguments.length && i !== n ? i : 10;
                    return function(t) {
                        e(t, 1 < arguments.length && arguments[1] !== n ? arguments[1] : null, 2 < arguments.length && arguments[2] !== n ? arguments[2] : null, (function(e, t) {
                            var n = -(e.position - e.destination) * a;
                            e.velocity += n / s, e.position += e.velocity, e.velocity *= o, Ne(e.position, e.destination, e.velocity) && (t(), e.position = e.destination, e.velocity = 0)
                        }))
                    }
                },
                Ne = function(e, t, r, i) {
                    var a = 3 < arguments.length && i !== n ? i : .001;
                    return Math.abs(e - t) < a && Math.abs(r) < a
                },
                Re = function(e, r, i) {
                    var a = i ? o(t.EASING_FUNCTION, i) : i,
                        s = o(t.TRANSITION, e);
                    return function(e, t, i) {
                        s.apply(n, [e, i, t, a].concat(H(r)))
                    }
                },
                Fe = function(e, t, r, i) {
                    var a = 1 < arguments.length && t !== n ? t : "50% 50% 0",
                        o = 2 < arguments.length && r !== n ? r : 500,
                        s = i;
                    return function(t) {
                        var r, i = 1 < arguments.length && arguments[1] !== n ? arguments[1] : 1,
                            l = arguments[2];
                        r = a, t.style.transformOrigin = r, Ie((function(n) {
                            e(t, i, n)
                        }), l, o, s)
                    }
                },
                $e = function(e, r, i) {
                    if (e.lastAppliedStyles !== i) {
                        e.lastAppliedStyles = i, e.style = i ? ht(r, i.split(";").filter((function(e) {
                            return e.trim().length
                        })).map(ee).filter((function(e) {
                            return null !== e
                        })).reduce((function(e, t) {
                            return e[t.property] = t.value, e
                        }), {})) : r;
                        var a = [],
                            s = [];
                        e.style.transitionIn && e.style.transitionIn.length ? (a = e.style.transitionIn, s = e.style.transitionOut) : e.style.transition && "none" !== e.style.transition && e.style.transition.forEach((function(e) {
                            var r, i = (r = e, o(t.TRANSITION, r.name).apply(n, H(r.parameters || [])));
                            a = a.concat(i.intro), s = s.concat(i.outro)
                        })), a && s && (e.transitionIn = De(a), e.transitionOut = De(s), e.skipToTransitionInEnd = De(a.map(He)), e.skipToTransitionOutEnd = De(s.map(He))), e.dirty = !0
                    }
                },
                He = function(e) {
                    var t = gt(e);
                    return t.duration = 0, t.delay = 0, t
                },
                ze = {
                    text: function() {
                        return function(e) {
                            var t = {};
                            return Object.assign({}, E(t, e, "text"), _(t), C(t, (function(e) {
                                var t, n, r;
                                e.root.setAttribute("data-value", e.value), t = e.root, n = e.value, (r = t.childNodes[0]) ? n !== r.nodeValue && (r.nodeValue = n) : (r = document.createTextNode(n), t.appendChild(r))
                            })), S(t))
                        }
                    }
                };

            function qe(e) {
                return 0 !== e.trim().length
            }

            function Be(e, t) {
                return e.push(t.trim())
            }

            function We(e, t) {
                return qe(t) ? (Be(e, t), "") : t
            }

            function Ve(e, t) {
                return e.length && t.push(1 < e.length ? e.concat() : e[0]), []
            }

            function Ge(e) {
                function n(t, n) {
                    t.transform(n, (function(e) {
                        t.presenter.update(e)
                    }), e), r || (r = !0, i())
                }
                var r = !1,
                    i = function t() {
                        e.baseDefinition.presenter.draw(), requestAnimationFrame(t)
                    };
                return function r(i) {
                    var a, s, l, c;
                    return i.presenter = (s = r, c = void 0, (a = i).repeat ? c = function(e, t, n) {
                        return r = e, i = t, a = n, o = {
                            definitions: []
                        }, Object.assign({}, E(o, r), _(o), T(o, i), C(o, q, ae, a), S(o));
                        var r, i, a, o
                    }(a.root, a.repeat, s) : "string" == typeof a.view ? c = function(e, n, r) {
                        var i = o(t.VIEW, e);
                        return i ? i({
                            Extension: {
                                Type: t,
                                getExtension: o
                            },
                            Utils: {
                                toPixels: Se,
                                toColor: Ee
                            },
                            Canvas: {
                                clear: ke,
                                getDevicePixelRatio: Me,
                                getBackingStoreRatio: Le
                            },
                            DOM: {
                                visible: X,
                                create: B,
                                transform: G
                            },
                            Animation: {
                                animate: Ce
                            },
                            Data: {
                                request: bt
                            },
                            Date: {
                                performance: yt
                            },
                            View: {
                                rooter: E,
                                drawer: C,
                                updater: _,
                                styler: Ae,
                                grouper: T,
                                resizer: D,
                                destroyer: S
                            }
                        })(n, r) : null
                    }(a.view, a.root, a.style) : (l = a).children && l.children.length && (c = function(e, t, n) {
                        return function(e, t, n) {
                            var r = {
                                valueMapping: null
                            };
                            if (e && e.dataset.valueMapping) {
                                var i = e.dataset.valueMapping;
                                r.valueMapping = -1 !== ["none", "indexes"].indexOf(i) ? i : null
                            }
                            return Object.assign({}, E(r, e), D(r), _(r), T(r, t), C(r, z, ie, n), S(r))
                        }(e, t, n)
                    }(a.root, a.children, s)), c), i.transform = nt(i.transform, e), n
                }(e.baseDefinition)
            }

            function Xe(e) {
                for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return function(t, r) {
                    ! function t(i, a) {
                        n.length <= i ? r(a) : n[i](a, tt(t, [i + 1]), e)
                    }(0, t)
                }
            }

            function Ue(e) {
                return e.substring(1, e.length - 1)
            }

            function Ye(e) {
                var t = (e + "").match(/(-?[.\d]+)(%|ms|s|deg|cm|em|ch|ex|q|in|mm|pc|pt|px|vh|vw|vmin|vmax)?/);
                return {
                    value: parseFloat(t[1]),
                    units: t[2]
                }
            }

            function Je(e) {
                var t = window,
                    n = e.split(".");
                return n.forEach((function(e, r) {
                    t[n[r]] && (t = t[n[r]])
                })), t !== window ? t : null
            }

            function Ke(e) {
                return /^(?:[\w]+\s?:\s?[\w.]+,\s?)+(?:[\w]+\s?:\s?[\w.]+)$/g.test(e) ? e.match(/(?:(\w+)\s?:\s?([\w.]+))/g).reduce((function(e, t) {
                    var n = t.split(":");
                    return e[n[0]] = ft(n[1]), e
                }), {}) : ft(e)
            }

            function Qe(e) {
                return parseInt(e, 10)
            }
            i(t.VIEW, ze);
            var Ze = function e(t) {
                    var n = {};
                    for (var r in t) t.hasOwnProperty(r) && (n[r] = "root" !== r ? "children" !== r ? "repeat" !== r ? t[r] : null === t[r] ? null : e(t[r]) : null === t[r] ? null : t[r].map(e) : t[r].cloneNode());
                    return n.presenter = null, n
                },
                et = {
                    root: null,
                    key: null,
                    view: null,
                    overlay: null,
                    presenter: null,
                    transform: null,
                    layout: null,
                    style: null,
                    repeat: null,
                    children: null,
                    className: null
                },
                tt = function(e, t, r) {
                    var i = 1 < arguments.length && t !== n ? t : [],
                        a = r;
                    return function() {
                        var t = Array.from(i);
                        return Array.prototype.push.apply(t, arguments), e.apply(a, t)
                    }
                },
                nt = function(e, t) {
                    if (!e) return function(e, t) {
                        return t(e)
                    };
                    if ("function" == typeof e) return e;
                    var n = function(e) {
                        var t = [];
                        return function e(t, n, r) {
                            for (var i, a, o, s = "", l = [], c = null, u = !1; t < n.length;) {
                                var d = n[t];
                                if ("(" === d) {
                                    u = !1;
                                    var p = [s.trim()];
                                    d = n[t = e(t + 1, n, p)], l.push(p), s = ""
                                } else {
                                    if (")" === d) return u && s.trim().length && (l.push([s.trim()]), s = "", u = !1), qe(s) && Be(l, s), l = Ve(l, r), t + 1;
                                    null !== c && d !== c ? s += d : d === c ? (l.push(s), s = "", c = null) : "'" === (o = d) || '"' === o ? (s = "", c = d) : "-" === (i = n)[a = t] && ">" === i[a + 1] ? (u = !0, s.trim().length && (l.push([s.trim()]), s = ""), t += 2) : "," === d ? (u && s.trim().length && (l.push([s.trim()]), s = "", u = !1), l = Ve(l, r), s = We(r, s)) : s += d, t++
                                }
                            }
                            return (u && s.trim().length || !u && s.trim().length && !l.length) && (l.push([s.trim()]), s = ""), Ve(l, r), We(r, s), t
                        }(0, e, t), t
                    }("transform(" + (/^[a-z]+$/.test(e) ? e + "()" : e) + ")");
                    return rt(n, t)
                },
                rt = function e(r, i) {
                    var a = r.map((function(r) {
                        var a = r.shift(),
                            s = o(t.TRANSFORM, a) || function(e, t, n) {
                                t(e)
                            },
                            l = r.map((function(t) {
                                return Array.isArray(t) ? "string" == typeof t[0] ? e([t], i) : e(t, i) : ft(t)
                            }));
                        return s.apply(n, H(l))
                    }));
                    return Xe.apply(n, [i].concat(H(a)))
                },
                it = function(e) {
                    var t = e.match(/[a-z]+/)[0];
                    return {
                        name: t,
                        parameters: at(e.substring(t.length))
                    }
                },
                at = function(e) {
                    return (e.match(/('.+?')|(".+?")|(\[.+?])|([.:\-\d\sa-zA-Z]+%?)/g) || []).map(mt).filter((function(e) {
                        return e.length
                    })).map(ft)
                },
                ot = /^([\d]{4}-[\d]{1,2}-[\d]{1,2})/,
                st = /^(true|false)$/,
                lt = /^[\a-zA-Z]+$/,
                ct = /^0[\d]+/,
                ut = /^('|")/,
                dt = /^-?(?:\d+)?(?:\.|0\.)?[\d]+$/,
                pt = /^(\[)/,
                ft = function(e) {
                    return st.test(e) ? "true" === e : pt.test(e) ? at(Ue(e)) : ot.test(e) ? v(e) : ut.test(e) ? Ue(e) : lt.test(e) || ct.test(e) || !dt.test(e) ? e : parseFloat(e)
                },
                ht = function(e, t) {
                    var r = 1 < arguments.length && t !== n ? t : {},
                        i = void 0,
                        a = {};
                    for (i in e) e.hasOwnProperty(i) && (a[i] = void 0 === r[i] ? e[i] : r[i]);
                    return a
                },
                mt = function(e) {
                    return e.trim()
                },
                gt = function(e) {
                    return "object" === (void 0 === e ? "undefined" : N(e)) && null !== e ? JSON.parse(JSON.stringify(e)) : e
                },
                vt = function(e) {
                    return e.slice()
                },
                yt = function() {
                    return window.performance.now()
                },
                bt = function(e, t, n, r) {
                    var i = new XMLHttpRequest;
                    r && r(i), i.open("GET", e, !0), i.onload = function() {
                        t(i.response)
                    }, n && (i.onerror = function() {
                        n(i, i.status)
                    }), i.send()
                },
                wt = function(e, t) {
                    return xt(e) ? St(e, t) : Array.isArray(e) ? Et(e, t) : e === t
                },
                xt = function(e) {
                    return e === Object(e)
                },
                St = function(e, t) {
                    for (var n in e)
                        if (!t.hasOwnProperty(n) || e[n] !== t[n]) return !1;
                    return !0
                },
                Et = function(e, t) {
                    return e.length == t.length && e.every((function(e, n) {
                        return e === t[n]
                    }))
                },
                Tt = function(e) {
                    return Object.keys(e).map((function(e) {
                        return '"' + e + '"'
                    })).join(", ")
                },
                Ct = (function(e, t, n) {
                    t && $(e.prototype, t), n && $(e, n)
                }(_t, [{
                    key: "isRootElement",
                    value: function(e) {
                        return this._element === e
                    }
                }, {
                    key: "setConstant",
                    value: function(e, t) {
                        this._constants[e] = t
                    }
                }, {
                    key: "getConstants",
                    value: function() {
                        return this._constants
                    }
                }, {
                    key: "getConstant",
                    value: function(e) {
                        return this._constants[e]
                    }
                }, {
                    key: "setPreset",
                    value: function(e, t) {
                        this._presets[e] = t
                    }
                }, {
                    key: "getPreset",
                    value: function(e) {
                        return this._presets[e]
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._willDestroy(this), this._observer.disconnect(), this.baseDefinition.presenter.destroy(), this._didDestroy(this)
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        this.baseDefinition && this.baseDefinition.presenter && (this.baseDefinition.presenter.reset(), this.baseDefinition.presenter.draw(), this._updater(this.baseDefinition, this._value))
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var e = this;
                        this._viewDefinition = this._options.view, this._willDestroy = this._options.willDestroy, this._didDestroy = this._options.didDestroy, this._didInit = this._options.didInit, this._didUpdate = this._options.didUpdate, this._value = this._options.value, this._presets = this._options.presets, this._constants = this._options.constants, this._element.classList.contains("tick") || this._element.classList.add("tick"), this._observer = W(this._element, ["data-value"], (function(t) {
                            e.value = t
                        })), this._viewDefinition.root !== this._element && (Array.from(this._viewDefinition.root.children).forEach((function(t) {
                            e._element.appendChild(t)
                        })), this._viewDefinition.root = this._element), this._viewDefinition.view || this._viewDefinition.children || (this._viewDefinition.view = "text"), this._updater = Ge(this), null !== this.value && this._update(this.value), this._element.dataset.state = "initialised", this._didInit(this, this.value)
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._updater(this.baseDefinition, e), this._didUpdate(this, e)
                    }
                }, {
                    key: "baseDefinition",
                    get: function() {
                        return this._viewDefinition
                    }
                }, {
                    key: "root",
                    get: function() {
                        return this._element
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value
                    },
                    set: function(e) {
                        this._value = "string" == typeof e ? Ke(e) : e, this._update(e)
                    }
                }], [{
                    key: "options",
                    value: function() {
                        return {
                            constants: $t(),
                            presets: Ht(),
                            value: null,
                            view: null,
                            didInit: function() {},
                            didUpdate: function() {},
                            willDestroy: function() {},
                            didDestroy: function() {}
                        }
                    }
                }]), _t);

            function _t() {
                var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : {},
                    t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : document.createElement("div");
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, _t), this._options = ht(_t.options(), e), this._element = t, this._value = null, this._observer = null, this._viewDefinition = null, this._constants = null, this._presets = null, this._updater = null, this._didInit = null, this._didDestroy = null, this._willDestroy = null, this._didUpdate = null, this._init()
            }

            function Dt(e, t, n, r) {
                return {
                    label: 1 === e ? t : n,
                    progress: e / r,
                    value: e
                }
            }

            function At(e) {
                var t = Ft.filter((function(t) {
                    return t.isRootElement(e)
                }));
                return t ? t[0] : null
            }

            function Lt(e) {
                return function() {
                    setTimeout(e, 0)
                }
            }

            function Mt() {
                return Date.now()
            }

            function kt(e, t, r) {
                function i() {
                    return v
                }

                function a() {
                    return null !== f
                }

                function o() {
                    return document.hidden
                }

                function s() {
                    var t = Mt(),
                        n = p - t,
                        r = u + n;
                    p = t + r, e(t - f - m + n), y = setTimeout(s, r)
                }

                function l() {
                    i() ? b() : a() || (f = Mt(), setTimeout((function() {
                        e(0)
                    }), 0), T(), o() ? S() : (p = Mt() + u, y = setTimeout((function() {
                        s()
                    }), u)))
                }

                function c() {
                    clearTimeout(y), m = 0, g = h = p = f = y = null, v = !1, E()
                }
                var u = 1 < arguments.length && t !== n ? t : 1e3,
                    d = ht({
                        autostart: !0
                    }, 2 < arguments.length && r !== n ? r : {}),
                    p = null,
                    f = null,
                    h = null,
                    m = 0,
                    g = null,
                    v = !1,
                    y = null,
                    b = function() {
                        i() && a() && !o() && (v = !1, T(), x())
                    },
                    w = function() {
                        clearTimeout(y), h = Mt(), g = p - h
                    },
                    x = function() {
                        m += Mt() - h, h = null, p = Mt() + g, y = setTimeout((function() {
                            s()
                        }), g)
                    },
                    S = function() {
                        w()
                    },
                    E = function() {
                        document.removeEventListener("visibilitychange", C)
                    },
                    T = function() {
                        document.addEventListener("visibilitychange", C)
                    },
                    C = function() {
                        o() ? S() : a() && x()
                    };
                return d.autostart && l(), {
                    start: l,
                    stop: Lt(c),
                    reset: Lt((function() {
                        c(), l()
                    })),
                    pause: Lt((function() {
                        a() && !o() && (v = !0, E(), w())
                    })),
                    resume: b
                }
            }

            function It(e) {
                /^[\d]+/.test(e) || (e = "1 " + e);
                var t = e.split(" ");
                return parseFloat(t[0]) * s[t[1].toLowerCase()]
            }

            function Pt(e, t) {
                return n = e, r = t.split(":").map(Qe), n.setHours(r[0] || 0, r[1] || 0, r[2] || 0, r[3] || 0), n;
                var n, r
            }

            function Ot(e, t) {
                return /januari|februari|march|april|may|june|july|august|september|october|november|december/.test(t) ? function(e, t) {
                    var n = t.match(/januari|februari|march|april|may|june|july|august|september|october|november|december|[\d]+th|\dst|\dnd|first|last|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);
                    if (1 < n.length) {
                        var r = "";
                        n.forEach((function(e) {
                            r = t.split(e)[1] || ""
                        }));
                        var i = r.trim().match(/wait\s[\d]+\s[a-z]+/);
                        i && n.push(i[0])
                    }
                    var a = n.reduce((function(t, n) {
                        return /([\d]+th|\dst|\dnd|first|last)/.test(n) && (t.day = /^[\d]/.test(n) ? parseInt(n, 10) : "first" === n ? 1 : n), /^at/.test(n) ? t.time = Pt(I(e), n.substr(3)) : /wait/.test(n) ? t.idle = It(n.substr(5)) : /^[\a-zA-Z]+$/.test(n) && (t.month = n), t
                    }), {
                        idle: null,
                        day: null,
                        month: null,
                        time: null,
                        date: null,
                        dist: null,
                        wait: !1
                    });
                    if (a.time) {
                        a.time.setDate(1), a.time = h(a.time, a.month), a.time = f(a.time, a.day);
                        var o = a.time - e,
                            s = 0;
                        if (o < 0 && (s = o, a.time.setFullYear(a.time.getFullYear() + 1), o = a.time - e), null !== a.idle && 0 < s + a.idle) return a.wait = !0, a;
                        a.dist = o
                    } else {
                        a.time = I(e), a.time.setDate(1), a.time = h(a.time, a.month), a.time = f(a.time, a.day);
                        var l = Vt(a.time, t);
                        if (l.wait) return a;
                        a.time = I(g(e, a.time) && l.date ? l.date : l.from);
                        var c = a.time - e;
                        c < 0 && (a.time = I(l.from), a.time.setFullYear(a.time.getFullYear() + 1), c = a.time - e), a.dist = c
                    }
                    return a.date = I(a.time), a
                }(e, t) : /month/.test(t) ? function(e, t) {
                    var n = t.match(/[\d]+th|\dst|\dnd|first|last|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);
                    if (1 < n.length) {
                        var r = "";
                        n.forEach((function(e) {
                            r = t.split(e)[1] || ""
                        }));
                        var i = r.trim().match(/wait\s[\d]+\s[a-z]+/);
                        i && n.push(i[0])
                    }
                    var a = n.reduce((function(t, n) {
                        return /([\d]+th|\dst|\dnd|first|last)/.test(n) && (t.day = /^[\d]/.test(n) ? parseInt(n, 10) : "first" === n ? 1 : n), /^at/.test(n) ? t.time = Pt(I(e), n.substr(3)) : /wait/.test(n) && (t.idle = It(n.substr(5))), t
                    }), {
                        idle: null,
                        day: null,
                        time: null,
                        date: null,
                        dist: null,
                        wait: !1
                    });
                    if (a.time) {
                        a.time = f(a.time, a.day);
                        var o = a.time - e,
                            s = 0;
                        if (o < 0 && (s = o, a.time.setDate(1), a.time.setMonth(a.time.getMonth() + 1), f(a.time, a.day), o = a.time - e), null !== a.idle && 0 < s + a.idle) return a.wait = !0, a;
                        a.dist = o
                    } else {
                        a.time = f(I(e), a.day);
                        var l = Vt(a.time, t);
                        if (l.wait) return a;
                        a.time = I(g(e, a.time) && l.date ? l.date : l.from);
                        var c = a.time - e;
                        c < 0 && (a.time = I(l.from), a.time.setDate(1), a.time.setMonth(a.time.getMonth() + 1), f(a.time, a.day), c = a.time - e), a.dist = c
                    }
                    return a.date = I(a.time), a
                }(e, t) : /(?:mon|tues|wednes|thurs|fri|satur|sun)day/.test(t) ? function(e, t) {
                    var n = t.match(/(?:mon|tues|wednes|thurs|fri|satur|sun)day|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);
                    if (1 < n.length) {
                        var r = "";
                        n.forEach((function(e) {
                            r = t.split(e)[1] || ""
                        }));
                        var i = r.trim().match(/wait\s[\d]+\s[a-z]+/);
                        i && n.push(i[0])
                    }
                    var a = n.reduce((function(t, n) {
                        var r;
                        return /(?:mon|tues|wednes|thurs|fri|satur|sun)day/.test(n) && (t.day = A[(r = n).charAt(0).toUpperCase() + r.slice(1)]), /^at/.test(n) ? t.time = Pt(I(e), n.substr(3)) : /wait/.test(n) && (t.idle = It(n.substr(5))), t
                    }), {
                        idle: null,
                        day: null,
                        time: null,
                        date: null,
                        dist: null,
                        wait: !1
                    });
                    if (a.time) {
                        a.time = p(a.time, a.day);
                        var o = a.time - e;
                        if (o < 0 && (a.time.setDate(a.time.getDate() + 7), o = a.time - e), null !== a.idle && o >= s.Week - a.idle) return a.wait = !0, a;
                        a.dist = o
                    } else {
                        a.time = p(I(e), a.day);
                        var l = Vt(a.time, t);
                        if (l.wait) return a;
                        a.time = I(g(e, a.time) && l.date ? l.date : l.from);
                        var c = a.time - e;
                        c < 0 && a.time.setDate(a.time.getDate() + 7), a.dist = c
                    }
                    return a.date = I(a.time), a
                }(e, t) : /day at/.test(t) || /^at /.test(t) ? (n = e, r = t.match(/([\d]+(?::[\d]+)?(?::[\d]+)?)|(wait\s[\d]+\s[a-z]+)/g).reduce((function(e, t) {
                    return /^[\d]/.test(t) ? e.time = Pt(I(n), t) : /wait/.test(t) && (e.idle = It(t.substr(5))), e
                }), {
                    idle: null,
                    time: null,
                    date: null,
                    wait: !1,
                    dist: null
                }), (i = r.time - n) < 0 && (r.time.setDate(r.time.getDate() + 1), i = r.time - n), null !== r.idle && i >= s.Day - r.idle ? r.wait = !0 : (r.dist = i, r.date = I(r.time)), r) : /hours|hour|minutes|minute|seconds|second/.test(t) ? Vt(e, t) : null;
                var n, r, i
            }

            function jt(e, t) {
                if (!0 === e) return n = function(e) {
                    t(e.getTime() - x().getTime())
                }, r = new XMLHttpRequest, i = Date.now(), r.open("HEAD", window.location + "?noCache=" + i), r.setRequestHeader("Content-Type", "text/html"), r.setRequestHeader("Cache-Control", "no-cache"), r.onload = function() {
                    var e = .5 * (i - Date.now()),
                        t = new Date(r.getResponseHeader("Date"));
                    n(new Date(t.getTime() + e))
                }, void r.send();
                var n, r, i;
                "string" != typeof e ? setTimeout((function() {
                    t(0)
                }), 0) : setTimeout((function() {
                    t(v(e).getTime() - x().getTime())
                }), 0)
            }

            function Nt(e) {
                return re({
                    complete: !1,
                    offset: null,
                    value: null,
                    timer: null,
                    onload: function() {},
                    onupdate: function() {}
                }, e)
            }

            function Rt() {
                var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : 0,
                    t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : 100;
                return function(n, r) {
                    return r((parseFloat(n) - e) / (t - e))
                }
            }
            var Ft = [],
                $t = function() {
                    return zt
                },
                Ht = function() {
                    return qt
                },
                zt = {
                    YEAR_PLURAL: "Years",
                    YEAR_SINGULAR: "Year",
                    MONTH_PLURAL: "Months",
                    MONTH_SINGULAR: "Month",
                    WEEK_PLURAL: "Weeks",
                    WEEK_SINGULAR: "Week",
                    DAY_PLURAL: "Days",
                    DAY_SINGULAR: "Day",
                    HOUR_PLURAL: "Hours",
                    HOUR_SINGULAR: "Hour",
                    MINUTE_PLURAL: "Minutes",
                    MINUTE_SINGULAR: "Minute",
                    SECOND_PLURAL: "Seconds",
                    SECOND_SINGULAR: "Second",
                    MILLISECOND_PLURAL: "Milliseconds",
                    MILLISECOND_SINGULAR: "Millisecond"
                },
                qt = {
                    y: function(e, t) {
                        return Dt(e, t.YEAR_SINGULAR, t.YEAR_PLURAL, 10)
                    },
                    M: function(e, t) {
                        return Dt(e, t.MONTH_SINGULAR, t.MONTH_PLURAL, 12)
                    },
                    w: function(e, t) {
                        return Dt(e, t.WEEK_SINGULAR, t.WEEK_PLURAL, 52)
                    },
                    d: function(e, t) {
                        return Dt(e, t.DAY_SINGULAR, t.DAY_PLURAL, 365)
                    },
                    h: function(e, t) {
                        return Dt(e, t.HOUR_SINGULAR, t.HOUR_PLURAL, 24)
                    },
                    m: function(e, t) {
                        return Dt(e, t.MINUTE_SINGULAR, t.MINUTE_PLURAL, 60)
                    },
                    s: function(e, t) {
                        return Dt(e, t.SECOND_SINGULAR, t.SECOND_PLURAL, 60)
                    },
                    mi: function(e, t) {
                        return Dt(e, t.MILLISECOND_SINGULAR, t.MILLISECOND_PLURAL, 1e3)
                    }
                },
                Bt = {
                    value: Ke,
                    didInit: Je,
                    didUpdate: Je,
                    didDestroy: Je,
                    willDestroy: Je
                },
                Wt = function(e, t) {
                    var r = 0 < arguments.length && e !== n ? e : n,
                        i = 1 < arguments.length && t !== n ? t : n;
                    if (r && !V(r) && (i = r, r = n), !r || !At(r)) {
                        i && i.view && (i.view = function e(t) {
                            return t.map((function(t) {
                                return "string" == typeof(t = ht(et, t)).root ? t.root = document.createElement(t.root) : t.root = document.createElement("span"), t.transform && (t.root.dataset.transform = t.transform), t.className && (t.root.className = t.className), t.overlay && (t.root.dataset.overlay = t.overlay), t.view ? (t.root.dataset.view = t.view, t.style && (t.root.dataset.style = t.style), t.repeat = null) : (t.layout && (t.root.dataset.layout = t.layout), t.repeat ? (t.root.dataset.repeat = !0, t.repeat = e(t.children).pop()) : t.children && (t.children = e(t.children), t.children.forEach((function(e) {
                                    t.root.appendChild(e.root)
                                })))), t
                            }))
                        }([i.view])[0]), !i && r && (i = function(e, t, r) {
                            var i = 1 < arguments.length && t !== n ? t : {},
                                a = 2 < arguments.length && r !== n ? r : {},
                                o = e.dataset,
                                s = {
                                    meta: {}
                                };
                            for (var l in o)
                                if (o.hasOwnProperty(l)) {
                                    var c = i[l],
                                        u = o[l];
                                    c && (u = null === (u = c(u)) ? gt(a[l]) : u, s[l] = u)
                                } return s
                        }(r, Bt, re({}, Ct.options(), {
                            constants: re({}, zt),
                            presets: re({}, qt)
                        }))), r && ((i = i || {}).view || (i.view = function e(t) {
                            return Array.from(t).map((function(t) {
                                var n = ht(et, {
                                    root: t
                                });
                                for (var r in t.dataset) t.dataset.hasOwnProperty(r) && void 0 !== n[r] && (n[r] = t.dataset[r]);
                                return n.repeat ? (n.repeat = e(t.children).pop(), Array.from(t.children).forEach((function(e) {
                                    e.parentNode.removeChild(e)
                                }))) : t.children.length && (n.children = e(t.children)), n
                            }))
                        }([r])[0]));
                        var a = new Ct(i, r);
                        return Ft.push(a), a
                    }
                },
                Vt = function(e, t) {
                    var n = t.match(/((?:[\d]+\s)?(?:hours|hour|minutes|minute|seconds|second))|((?:from|till)\s[\d]+(?::[\d]+)?(?::[\d]+)?)|(wait\s[\d]+\s[a-z]+)/g).reduce((function(e, t) {
                        return /from/.test(t) ? e.from = Pt(e.from, t.split(" ")[1]) : /till/.test(t) ? e.till = Pt(e.till, t.split(" ")[1]) : /wait/.test(t) ? e.idle = It(t.substr(5)) : /hours|hour|minutes|minute|seconds|second/.test(t) && (e.interval = It(t)), e
                    }), {
                        idle: null,
                        interval: null,
                        date: null,
                        dist: null,
                        wait: !1,
                        from: Pt(I(e), "0"),
                        till: Pt(I(e), "23:59:59:999")
                    });
                    if (e < n.from || e >= n.till) return n;
                    if (n.interval > n.till - n.from) return n;
                    var r = e - n.from,
                        i = n.interval - r % n.interval;
                    return null !== n.idle && i >= n.interval - n.idle ? n.wait = !0 : (n.dist = i, n.date = new Date(e.getTime() + n.dist)), n
                },
                Gt = {
                    format: ["d", "h", "m", "s"],
                    cascade: !0,
                    server: null,
                    interval: 1e3
                },
                Xt = {
                    ascii: function() {
                        return function(e, t) {
                            return t((e + "").charCodeAt(0))
                        }
                    },
                    char: function(e) {
                        var t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : "",
                            r = e ? new RegExp("[^" + e + "]", "g") : null;
                        return function(e, n) {
                            var i = String.fromCharCode(e);
                            r && (i = i.replace(r, t)), n(i)
                        }
                    },
                    tween: function(e) {
                        var r = 1 < arguments.length && arguments[1] !== n ? arguments[1] : "ease-linear",
                            i = arguments[2];
                        e = J(e);
                        var a = o(t.EASING_FUNCTION, r),
                            s = null,
                            l = null;
                        return function(t, n) {
                            if (t = parseFloat(t), s && s(), null !== l && t !== l) {
                                var r = l,
                                    o = t - r;
                                s = Ce((function(e) {
                                    n(r + e * o)
                                }), (function() {
                                    s = null
                                }), e, a, i), l = t
                            } else n(l = t)
                        }
                    },
                    value: function(e) {
                        return function(t, n) {
                            return n(e)
                        }
                    },
                    input: function() {
                        return function(e, t) {
                            return t(e)
                        }
                    },
                    rotate: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, n) {
                            var r = Array.isArray(e) ? e : [e],
                                i = [],
                                a = t.length;
                            r.forEach((function(e, o) {
                                t[o % a](e, (function(e) {
                                    i[o] = e, o === r.length - 1 && n(i)
                                }))
                            }))
                        }
                    },
                    map: function(e) {
                        return function(t, n) {
                            var r = [],
                                i = t;
                            i.forEach((function(t, a) {
                                e(t, (function(e) {
                                    r[a] = e, a === i.length - 1 && n(r.concat())
                                }))
                            }))
                        }
                    },
                    transform: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, n) {
                            var r = [],
                                i = e;
                            t.forEach((function(e, a) {
                                e(i, (function(e) {
                                    r[a] = e, a === t.length - 1 && n(1 === r.length ? r[0] : r)
                                }))
                            }))
                        }
                    },
                    upper: function() {
                        return function(e, t) {
                            return t((e + "").toUpperCase())
                        }
                    },
                    lower: function() {
                        return function(e, t) {
                            return t((e + "").toLowerCase())
                        }
                    },
                    abs: function() {
                        return function(e, t) {
                            return t(Math.abs(e))
                        }
                    },
                    add: function(e) {
                        return function(t, n) {
                            return n(t + e)
                        }
                    },
                    subtract: function(e) {
                        return function(t, n) {
                            return n(t - e)
                        }
                    },
                    modulus: function(e) {
                        return function(t, n) {
                            return n(t % e)
                        }
                    },
                    pad: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : "",
                            t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : "left";
                        return function(n, r) {
                            return r(e.length > ("" + n).length ? "left" === t ? ("" + e + n).slice(-e.length) : ("" + n + e).substring(0, e.length) : n)
                        }
                    },
                    number: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : ".",
                            t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : ",",
                            r = 2 < arguments.length && arguments[2] !== n ? arguments[2] : 2;
                        return function(n, i) {
                            i((n < 0 ? "-" : "") + parseFloat(Math.abs(n)).toFixed(r).replace(/./g, (function(n, r, i) {
                                return "." === n ? e : r && (i.length - r) % 3 == 0 ? t + n : n
                            })))
                        }
                    },
                    replace: function(e, t) {
                        return function(n, r) {
                            return r((n + "").replace(new RegExp("." === e ? "\\" + e : e, "g"), t))
                        }
                    },
                    round: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : 0;
                        return function(t, n) {
                            return n(e ? t.toFixed(e) : Math.round(t))
                        }
                    },
                    ceil: function() {
                        return function(e, t) {
                            return t(Math.ceil(e))
                        }
                    },
                    floor: function() {
                        return function(e, t) {
                            return t(Math.floor(e))
                        }
                    },
                    fraction: Rt,
                    percentage: function() {
                        var e = Rt(0 < arguments.length && arguments[0] !== n ? arguments[0] : 0, 1 < arguments.length && arguments[1] !== n ? arguments[1] : 100);
                        return function(t, n) {
                            e(t, (function(e) {
                                n(100 * e)
                            }))
                        }
                    },
                    multiply: function(e) {
                        return function(t, n) {
                            return n(t * e)
                        }
                    },
                    divide: function(e) {
                        return function(t, n) {
                            return n(t / e)
                        }
                    },
                    split: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : "";
                        return function(t, n) {
                            return n((t + "").split(e))
                        }
                    },
                    format: function(e) {
                        return function(t, n) {
                            return n(e.replace(/\$0/gi, t))
                        }
                    },
                    plural: function(e, t) {
                        return function(n, r) {
                            return r(1 === n ? e : t)
                        }
                    },
                    limit: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : 0,
                            t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : 1;
                        return function(n, r) {
                            return r(Math.min(Math.max(n, e), t))
                        }
                    },
                    reverse: function() {
                        return function(e, t) {
                            return t(Array.isArray(e) ? e.reverse() : (e + "").split("").reverse().join(""))
                        }
                    },
                    arrive: function(e, t) {
                        var r = 2 < arguments.length && arguments[2] !== n && arguments[2],
                            i = !(3 < arguments.length && arguments[3] !== n) || arguments[3],
                            a = null,
                            o = null,
                            s = null;
                        return function(n, l) {
                            if (n = parseFloat(n), null !== a) {
                                if (r && null !== o && a === n && (s.cancel(), s = null), i && null !== o && 1 < n - s.getPosition()) return s.cancel(), o = s = null, void l(a = n);
                                s ? s.update(l, n) : (s = _e("arrive", e, t)).update(l, a, n), o = n
                            } else l(a = n)
                        }
                    },
                    spring: function(e, t, n) {
                        var r = null,
                            i = null;
                        return function(a, o) {
                            a = parseFloat(a), null !== r ? i ? i.update(o, a) : (i = _e("spring", e, t, n)).update(o, r, a) : o(r = a)
                        }
                    },
                    delay: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : "rtl",
                            t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : 50,
                            r = 2 < arguments.length && arguments[2] !== n ? arguments[2] : 50,
                            i = null;
                        return function(a, o) {
                            if (!i) return i = vt(a), void o(vt(i));
                            i = "rtl" === e ? i.slice(i.length - a.length, i.length) : i.slice(0, a.length);
                            var s = function(e) {
                                for (var t = [], n = 0; n < e; n++) t.push(n);
                                return t
                            }(a.length);
                            "random" === e && function(e) {
                                    for (var t = e.length; t; t--) {
                                        var n = Math.floor(Math.random() * t),
                                            r = [e[n], e[t - 1]];
                                        e[t - 1] = r[0], e[n] = r[1]
                                    }
                                }(s), "rtl" === e && s.reverse(),
                                function e() {
                                    (function(e, t, n, r) {
                                        t[e] = n[e], r(vt(t))
                                    })(s.shift(), i, a, o), s.length && setTimeout(e, function(e, t) {
                                        var r = 0 < arguments.length && e !== n ? e : 0,
                                            i = 1 < arguments.length && t !== n ? t : 1;
                                        return r + Math.random() * (i - r)
                                    }(t, r))
                                }()
                        }
                    },
                    step: function(e) {
                        var t = null,
                            n = null,
                            r = null;
                        return function(i, a) {
                            i = parseFloat(i), null !== t ? (null !== n && t === i && (r.cancel(), r = null), r ? r.update(a, i) : (r = _e("step", e)).update(a, t, i), n = i) : a(t = i)
                        }
                    },
                    keys: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, n) {
                            var r = {};
                            e.forEach((function(e, n) {
                                r[t[n]] = e
                            })), n(r)
                        }
                    },
                    duration: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, n) {
                            return n(y(e, t))
                        }
                    },
                    substring: function(e, t) {
                        return function(n, r) {
                            return r((n + "").substring(e, t))
                        }
                    },
                    preset: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, n, r) {
                            return n(e.map((function(e, n) {
                                return r.getPreset(t[n])(e, r.getConstants(), r)
                            })))
                        }
                    }
                };

            function Ut(e, t, n) {
                return e + (t - e) * n
            }
            i(t.TRANSFORM, Xt);
            var Yt = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                Jt = {
                    x: "rotateX",
                    y: "rotateY",
                    z: "rotateZ"
                },
                Kt = {
                    both: "scale",
                    x: "scaleX",
                    y: "scaleY"
                },
                Qt = {
                    fade: function(e, t, r, i, a, o) {
                        var s = 3 < arguments.length && i !== n ? i : ne,
                            l = 4 < arguments.length && a !== n ? a : 0,
                            c = 5 < arguments.length && o !== n ? o : 1;
                        if (r < 0) {
                            var u = [c, l];
                            l = u[0], c = u[1]
                        }
                        e.style.opacity = Ut(l, c, s(t))
                    },
                    move: function(e, t, r, i, a, o, s) {
                        var l = 3 < arguments.length && i !== n ? i : ne,
                            c = 4 < arguments.length && a !== n ? a : "0",
                            u = 5 < arguments.length && o !== n ? o : "100%",
                            d = 6 < arguments.length && s !== n ? s : "y";
                        if (r < 0) {
                            var p = [u, c];
                            c = p[0], u = p[1]
                        }
                        var f = Y(c, Ye),
                            h = Y(u, Ye);
                        G(e, Yt[d], Ut(f.value, h.value, l(t)), f.units || h.units)
                    },
                    rotate: function(e, t, r, i, a, o, s) {
                        var l = 3 < arguments.length && i !== n ? i : ne,
                            c = 4 < arguments.length && a !== n ? a : "0",
                            u = 5 < arguments.length && o !== n ? o : "90deg",
                            d = 6 < arguments.length && s !== n ? s : "x";
                        if (r < 0) {
                            var p = [u, c];
                            c = p[0], u = p[1]
                        }
                        var f = Y(c, Ye),
                            h = Y(u, Ye);
                        G(e, Jt[d], Ut(f.value, h.value, l(t)), f.units || h.units)
                    },
                    scale: function(e, t, r, i, a, o, s) {
                        var l = 4 < arguments.length && a !== n ? a : 0,
                            c = 5 < arguments.length && o !== n ? o : 1;
                        if (r < 0) {
                            var u = [c, l];
                            l = u[0], c = u[1]
                        }
                        G(e, Kt[6 < arguments.length && s !== n ? s : "both"], Ut(l, c, (3 < arguments.length && i !== n ? i : ne)(t)))
                    },
                    crossfade: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : 1,
                            t = arguments[2];
                        return {
                            intro: [{
                                name: "fade",
                                parameters: [0, 1],
                                duration: 1e3 * e,
                                delay: J(arguments[1])
                            }],
                            outro: [{
                                name: "fade",
                                parameters: [1, 0],
                                duration: 1e3 * e,
                                delay: J(t)
                            }]
                        }
                    },
                    swap: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : "y",
                            t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : 1,
                            r = 2 < arguments.length && arguments[2] !== n ? arguments[2] : 1,
                            i = arguments[4];
                        return {
                            intro: [{
                                name: "move",
                                parameters: ["" + 100 * -t, "0%", e],
                                duration: 1e3 * r,
                                delay: J(arguments[3])
                            }],
                            outro: [{
                                name: "move",
                                parameters: ["0%", "" + 100 * t, e],
                                duration: 1e3 * r,
                                delay: J(i)
                            }]
                        }
                    },
                    revolve: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : "y",
                            t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : 1,
                            r = 2 < arguments.length && arguments[2] !== n ? arguments[2] : 1,
                            i = arguments[4];
                        return {
                            intro: [{
                                name: "rotate",
                                parameters: [90 * -t + "deg", "0deg", e],
                                duration: 1e3 * r,
                                delay: J(arguments[3])
                            }],
                            outro: [{
                                name: "rotate",
                                parameters: ["0deg", 90 * t + "deg", e],
                                duration: 1e3 * r,
                                delay: J(i)
                            }]
                        }
                    },
                    zoom: function() {
                        var e = 0 < arguments.length && arguments[0] !== n ? arguments[0] : 0,
                            t = 1 < arguments.length && arguments[1] !== n ? arguments[1] : 1,
                            r = arguments[3];
                        return {
                            intro: [{
                                name: "scale",
                                parameters: [e, 1],
                                duration: 1e3 * t,
                                delay: J(arguments[2])
                            }],
                            outro: [{
                                name: "scale",
                                parameters: [1, e],
                                duration: 1e3 * t,
                                delay: J(r)
                            }]
                        }
                    }
                };

            function Zt(e) {
                if (!t.hasOwnProperty(e)) return "continue";
                en.plugin[("add-" + t[e]).replace(/-./g, (function(e) {
                    return e.charAt(1).toUpperCase()
                }))] = function(n, r) {
                    a(t[e], n, r)
                }
            }
            i(t.TRANSITION, Qt);
            var en = {
                supported: function() {
                    var e = window;
                    if (void 0 === e) return !1;
                    var t = e.CSS && e.CSS.supports,
                        n = !!e.MSInputMethodContext && !!document.documentMode,
                        r = t && CSS.supports("transform", "translateX(0)");
                    return n || t && r && !!["MutationObserver", "requestAnimationFrame"].filter((function(t) {
                        return t in e
                    })).length
                }(),
                options: {
                    setConstant: function(e, t) {
                        zt[e] = t
                    },
                    setPreset: function(e, t) {
                        qt[e] = t
                    }
                },
                helper: {
                    interval: kt,
                    date: function(e) {
                        return e ? v(e) : x()
                    },
                    duration: w
                },
                data: {
                    request: bt,
                    poll: function(e, t, r) {
                        return kt((function() {
                            bt(e, t)
                        }), 2 < arguments.length && r !== n ? r : 6e4)
                    }
                },
                DOM: {
                    create: Wt,
                    destroy: function(e) {
                        var t = function(e, t) {
                            for (var n = 0, r = e.length; n < r; n++)
                                if (e[n].isRootElement(t)) return n;
                            return -1
                        }(Ft, e);
                        return !(t < 0 || (Ft[t].destroy(), Ft.splice(t, 1), 0))
                    },
                    parse: function(e) {
                        var t, n = void 0,
                            r = void 0,
                            i = [];
                        for (r = (t = e.querySelectorAll(".tick:not([data-state])")).length; r--;) n = t[r], i.push(Wt(n));
                        return i
                    },
                    find: At
                },
                count: {
                    down: function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        if ("number" != typeof t[0] || "string" != typeof t[1]) return "string" == typeof t[0] || d(t[0]) ? function(e, t) {
                            var r = 1 < arguments.length && t !== n ? t : {};
                            if (void 0 === e) throw 'Can\'t start counter, the "due" parameter is required';
                            r = ht(Gt, r);
                            var i = d(e) ? e : v(e),
                                a = Nt({
                                    due: I(i),
                                    onended: function() {}
                                });
                            return jt(r.server, (function(e) {
                                a.offset = e, a.timer = kt((function() {
                                    var t = m(e);
                                    if (i - t <= 0) return a.value = new Array(r.format.length).fill(0), a.onupdate(a.value), a.timer.stop(), void a.onended();
                                    a.value = b(t, i, r.format, r.cascade), a.onupdate(a.value)
                                }), r.interval, {
                                    autostart: !1
                                }), a.complete = !0, a.onload(), a.timer.start()
                            })), a
                        }.apply(n, t) : null;
                        var i = t[0],
                            a = t[1].toLowerCase();
                        return t.shift(), t[0] = w(i, a), t[1] = t[1] || {}, t[1].units = a,
                            function(e, t) {
                                var r = 1 < arguments.length && t !== n ? t : {};
                                if ("number" != typeof e) throw 'Can\'t start counter, the "milliseconds" parameter is required';
                                var i = (r = ht({
                                        units: "seconds",
                                        target: 0,
                                        amount: 1e3,
                                        interval: 1e3
                                    }, r)).target,
                                    a = e,
                                    o = Nt({
                                        target: i,
                                        onended: function() {}
                                    });
                                return setTimeout((function() {
                                    o.timer = kt((function(t) {
                                        if ((a = e - t / r.interval * r.amount) <= i) return o.value = r.target, o.onupdate(o.value / s[r.units]), o.timer.stop(), void o.onended();
                                        o.value = a, o.onupdate(o.value / s[r.units])
                                    }), r.interval, {
                                        autostart: !1
                                    }), o.complete = !0, o.onload(), o.timer.start()
                                }), 0), o
                            }.apply(n, t)
                    },
                    up: function(e, t) {
                        var r = 1 < arguments.length && t !== n ? t : {};
                        if (void 0 === e) throw 'Can\'t start counter, the "since" parameter is required';
                        r = ht(Gt, r);
                        var i = d(e) ? e : v(e),
                            a = Nt({
                                since: I(i)
                            });
                        return jt(r.server, (function(e) {
                            a.offset = e, a.timer = kt((function() {
                                var t = m(e);
                                a.value = b(i, t, r.format, r.cascade), a.onupdate(a.value)
                            }), r.interval, {
                                autostart: !1
                            }), a.complete = !0, a.onload(), a.timer.start()
                        })), a
                    },
                    schedule: function(e, t) {
                        var r = 1 < arguments.length && t !== n ? t : {};
                        if ("string" != typeof e) throw 'Can\'t start scheduler, "schedule" is a required parameter';
                        var i = (r = ht(re({}, Gt, {
                                timezone: null
                            }), r)).timezone ? function(e) {
                                var t = 6e4 * (new Date).getTimezoneOffset();
                                if ("Z" === e) return t;
                                var n = e.match(/\+|-|[\d]{2}|[\d]{2}/g);
                                return ("-" === n.shift() ? -1 : 1) * (36e5 * parseInt(n[0], 10) + 6e4 * parseInt(n[1], 10)) + t
                            }(r.timezone) : null,
                            a = Nt({
                                waiting: null,
                                nextScheduledDate: null,
                                previouslyScheduledDate: null,
                                onrepeat: function() {},
                                onresume: function() {},
                                onwait: function() {}
                            }),
                            o = n,
                            s = null;
                        return jt(r.server, (function(t) {
                            a.offset = t, a.timer = kt((function() {
                                var l, c, u = m(t);
                                if (null !== i && (l = i, u = new Date(u.getTime() + l)), s = function(e, t) {
                                        for (var n = t.split(",").map(mt).map((function(t) {
                                                return Ot(e, t)
                                            })), r = null, i = 0; i < n.length; i++) {
                                            var a = n[i];
                                            if (null === r && a.wait) return null;
                                            (null === r || null === r.dist && null !== a.dist || null !== a.dist && a.dist < r.dist) && (r = a)
                                        }
                                        return r.date
                                    }(u, e), a.waiting = null === s, a.waiting) return o === n && (o = null), a.value = new Array(r.format.length).fill(0), a.nextScheduledDate && (a.previouslyScheduledDate = I(a.nextScheduledDate)), a.nextScheduledDate = null === s ? null : I(s), void a.onwait(a.previouslyScheduledDate ? I(a.previouslyScheduledDate) : null);
                                a.nextScheduledDate = I(s), null === o && a.onresume(I(s)), (null === o || o !== n && (c = s, o.getTime() !== c.getTime())) && (a.onrepeat(I(s), o ? I(o) : null), o && (a.previouslyScheduledDate = I(o))), o = I(s), a.value = b(u, s, r.format, r.cascade), a.onupdate(a.value)
                            }), r.interval, {
                                autostart: !1
                            }), a.complete = !0, a.onload(), a.timer.start()
                        })), a
                    }
                },
                plugin: {
                    add: function(e, t, n) {
                        return "function" != typeof e ? a(e, t, n) : a(e.identifier.type, e.identifier.name, e)
                    }
                }
            };
            for (var tn in t) Zt(tn);
            return e.exports = en, e.exports
        }();
        r.push = i, t.forEach(i), e.Tick = r, "loading" !== document.readyState ? setTimeout((function() {
            a()
        }), 0) : document.addEventListener("DOMContentLoaded", a)
    }

    function i(e) {
        r.plugin.add.apply(null, e)
    }

    function a() {
        r.DOM.parse(document)
    }
}(window, window.Tick || []), window.addEventListener("DOMContentLoaded", (() => {
    console.log("Loaded Scripts")
}));
const currency = e => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
}).format(e);
document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".hero-swiper");
    if (e) try {
        new Swiper(e, {
            loop: !0,
            speed: 1e3,
            autoplay: {
                delay: 8e3
            },
            grabCursor: !0,
            centeredSlides: !0,
            slidesPerView: "auto",
            effect: "coverflow",
            coverflowEffect: {
                rotate: 0,
                stretch: 807,
                depth: 300,
                modifier: 1,
                slideShadows: !1
            }
        })
    } catch (e) {
        console.error("An error occurred while initializing the Swiper:", e)
    }
})), document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".filter-swiper");
    if (e) try {
        new Swiper(e, {
            slidesPerView: "auto",
            spaceBetween: 16,
            breakpoints: {
                640: {
                    gap: 12
                },
                480: {
                    gap: 10
                }
            }
        })
    } catch (e) {
        console.error("An error occurred while initializing the Swiper:", e)
    }
})), document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".flash-sale-swiper");
    e && fetch("./mock/flash_sale.json").then((e => e.json())).then((t => {
        const n = new Swiper(e, {
            autoplay: {
                delay: 8e3,
                disableOnInteraction: !1
            },
            slidesPerView: 2,
            spaceBetween: 8,
            breakpoints: {
                480: {
                    slidesPerView: 3,
                    spaceBetween: 12
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 14
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 16
                }
            }
        });
        t.map((e => {
            const t = document.createElement("div");
            return t.classList.add("swiper-slide"), t.innerHTML = `\n            <a class="group block relative transform overflow-hidden rounded-xl duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-500 hover:ring-offset-2 bg-gray-950 hover:ring-offset-gray-900" href=${e.url} style="outline: none">\n              <img alt="${e?.title}" src="${e?.image}" width="192" height="288" decoding="async" data-nimg="1" class="aspect-[4/6] w-full object-cover object-center" />\n              <article class="absolute inset-x-0 bottom-3 sm:bottom-4 z-10 transform px-3 transition-all duration-300 ease-in-out sm:px-4">\n                <h6 class="truncate text-sm font-medium leading-5 text-white mb-2 overflow-hidden">\n                  ${e?.title}\n                </h6>\n                <p class="text-xs inline-block mb-1.5 font-extrabold text-red-600 bg-red-100 rounded tracking-tighter md:tracking-normal px-2 py-0.5">\n                  ${currency(e?.discount)},-\n                </p>\n                <p class="text-xxs md:text-xs line-through text-red-600 px-2 py-0.5">\n                  ${currency(e?.price)},-\n                </p>\n              </article>\n              <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-secondary-950 opacity-100"></span>\n              <div class="absolute inset-0 transform bg-gradient-to-t rounded-xl from-transparent backdrop-blur-0 transition-none duration-300 group-hover:from-neutral-900 group-hover:backdrop-blur-sm"></div>\n            </a>\n          `, t
        })).forEach((e => n.appendSlide(e))), n.update()
    })).catch((e => console.log("Error:", e)))
})), document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".recommend-swiper");
    e && fetch("./mock/recommendations.json").then((e => e.json())).then((t => {
        const n = new Swiper(e, {
            autoplay: {
                delay: 8e3,
                disableOnInteraction: !1
            },
            slidesPerView: 3,
            spaceBetween: 8,
            breakpoints: {
                480: {
                    slidesPerView: 3,
                    spaceBetween: 12
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 14
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 16
                }
            }
        });
        t.map((e => {
            const t = document.createElement("div");
            return t.classList.add("swiper-slide"), t.innerHTML = `\n            <a class="group block relative transform overflow-hidden rounded-xl duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-500 hover:ring-offset-2 bg-gray-950 hover:ring-offset-gray-900" href=${e.url} style="outline: none">\n              <img alt="${e?.title}" src="${e?.image}" width="192" height="288" decoding="async" data-nimg="1" class="aspect-[4/6] w-full object-cover object-center" />\n              <article class="absolute inset-x-0 bottom-3 sm:bottom-4 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out sm:px-4 text-center">\n                <h2 class="truncate text-sm font-semibold text-neutral-200">${e?.title}</h2>\n                <p class="text-xxs truncate text-neutral-400 sm:text-xs">${e?.production}</p>\n              </article>\n              <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-gray-800 opacity-100"></span>\n              <div class="absolute inset-0 transform bg-gradient-to-t rounded-xl from-transparent backdrop-blur-0 transition-none duration-300 group-hover:from-neutral-900 group-hover:backdrop-blur-sm"></div>\n            </a>\n          `, t
        })).forEach((e => n.appendSlide(e))), n.update()
    })).catch((e => console.log("Error:", e)))
})), document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".rt-carousel");
    if (e) {
        new Splide(e, {
            perPage: 2,
            gap: "2rem",
            arrows: !1,
            pagination: !1,
            breakpoints: {
                640: {
                    gap: "1.5rem"
                },
                480: {
                    perPage: 1,
                    gap: "1rem"
                }
            }
        }).mount()
    }
}));
const filterProduct = document.getElementById("filterProducts");
filterProduct && fetch("./mock/categories.json").then((e => e.json())).then((e => {
    const t = (e, t) => {
        const n = e.map((e => `\n              <a class="group block relative transform overflow-hidden rounded-xl duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-500 hover:ring-offset-2 bg-gray-950 hover:ring-offset-gray-900" href=${e.url} style="outline: none">\n                <img alt="${e?.title}" src="${e?.image}" width="192" height="288" decoding="async" data-nimg="1" class="aspect-[4/6] w-full object-cover object-center" />\n                <article class="absolute inset-x-0 bottom-3 sm:bottom-4 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out sm:px-4 text-center">\n                  <h2 class="truncate text-sm font-semibold text-neutral-200">${e?.title}</h2>\n                  <p class="text-xxs truncate text-neutral-400 sm:text-xs">${e?.production}</p>\n                </article>\n                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-gray-800 opacity-100"></span>\n                <div class="absolute inset-0 transform bg-gradient-to-t rounded-xl from-transparent backdrop-blur-0 transition-none duration-300 group-hover:from-neutral-900 group-hover:backdrop-blur-sm"></div>\n              </a>\n            `)).join("");
        document.getElementById(t).innerHTML = n
    };
    t(e[0].all, "allList"), t(e[1].mlbb, "mlbbList"), t(e[2].mobile, "mobileList"), t(e[3].pc, "pcList"), t(e[4].credit, "creditList"), t(e[5].entertainment, "entertainmentList")
})).catch((e => console.log("Error:", e)));
const filterTopup = document.getElementById("filterTopups");

function handleTickInit(e) {
    var t = new Date(localStorage.getItem("countdown-offset") || new Date);
    localStorage.setItem("countdown-offset", t);
    var n = Tick.helper.duration(24, "hours"),
        r = new Date(t.setMilliseconds(t.getMilliseconds() + n)),
        i = Tick.count.down(r, {
            format: ["h", "m", "s"]
        });
    i.onupdate = function(t) {
        e.value = t
    }, i.onended = function() {}
}
filterTopup && fetch("./mock/topups.json").then((e => e.json())).then((e => {
    const t = (e, t) => {
        const n = e.map((e => `\n              <li class="relative" role="radio" aria-checked="false" tabindex="0">\n                <input type="radio" id="${e?._id}" name="items" value="${e?._id}" class="peer hidden">\n                <label for="${e?._id}" class="group relative flex cursor-pointer overflow-hidden border border-transparent bg-[#303740] rounded-lg p-3 outline-none peer-checked:bg-primary-700 peer-checked:ring-2 peer-checked:ring-[#303740] md:p-4">\n                  <span class="flex flex-1">\n                    <span class="flex flex-col justify-between">\n                      <span class="block min-h-[32px] text-sm font-semibold text-white">${e?.title}</span>\n                      <span class="mt-1 flex items-center text-xs font-light text-gray-200">${currency(e?.price)},-</span>\n                    </span>\n                  </span>\n                  <div class="flex aspect-square w-8 items-center">\n                    <img src="${e?.image}" width="300" height="300" class="object-contain object-right" style="color: transparent" alt="Logo" />\n                  </div>\n                </label>\n                <div class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-[#303740] p-1 pb-2 pl-2 text-white hidden peer-checked:block">\n                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="12" width="12" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>\n                  </svg>\n                </div>\n              </li>\n            `)).join("");
        document.getElementById(t).innerHTML = n
    };
    t(e[0].diamonds, "diamondList"), t(e[1].weekly_pass, "weeklyList"), t(e[2].twilight_pass, "twilightList")
})).catch((e => console.log("Error:", e)));
const inputQty = document.getElementById("qty"),
    incrementButton = document.getElementById("add"),
    decrementButton = document.getElementById("min");
if (inputQty) {
    function updateButtonStates() {
        const e = parseInt(inputQty.value);
        incrementButton.disabled = e >= parseInt(inputQty.max), decrementButton.disabled = e <= parseInt(inputQty.min), 1 === e ? decrementButton.setAttribute("disabled", "") : decrementButton.removeAttribute("disabled")
    }
    incrementButton.addEventListener("click", (() => {
        inputQty.stepUp(), updateButtonStates()
    })), decrementButton.addEventListener("click", (() => {
        inputQty.stepDown(), updateButtonStates()
    })), inputQty.addEventListener("input", (() => {
        updateButtonStates()
    }))
}
document.addEventListener("DOMContentLoaded", (function() {
    document.querySelectorAll("[data-toggle-visibility]").forEach((e => {
        e.addEventListener("click", (() => {
            const t = e.getAttribute("data-toggle-visibility");
            ! function(e, t, n) {
                "password" === e.type ? (e.type = "text", t.classList.add("hidden"), n.classList.remove("hidden")) : (e.type = "password", t.classList.remove("hidden"), n.classList.add("hidden"))
            }(document.getElementById(t), e.querySelector(".toggle-icon-eye"), e.querySelector(".toggle-icon-eye-slash"))
        }))
    }))
}));
const defaultSearches = ["Mobile Legends", "PUBG Mobile", "Free Fire"],
    inputSearch = document.getElementById("search-input"),
    modalSearch = document.getElementById("search-modal"),
    bodyModalSearch = document.querySelector("body");
if (inputSearch) {
    function toggleModal() {
        modalSearch.classList.toggle("hidden"), bodyModalSearch.classList.toggle("overflow-hidden")
    }

    function handleSearch() {
        const e = input.value.trim();
        if ("" !== e) {
            console.log("Searching for:", e);
            const t = document.getElementById("recent-search"),
                n = document.createElement("li");
            n.classList.add("text-white", "px-4", "py-2", "bg-gray-600", "rounded-md", "hover:bg-primary-500", "hover:text-white", "cursor-pointer", "text-sm", "flex", "items-center", "flex-row-reverse", "justify-between"), n.textContent = e, t.querySelector("ul").prepend(n), searchInput.value = ""
        }
    }

    function initializeRecentSearches() {
        const e = document.getElementById("recent-search").querySelector("ul");
        defaultSearches.forEach((t => {
            const n = document.createElement("li");
            n.classList.add("text-white", "px-4", "py-2", "bg-gray-600", "rounded-md", "hover:bg-primary-500", "hover:text-white", "cursor-pointer", "text-sm", "flex", "items-center", "flex-row-reverse", "justify-between");
            const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            r.setAttribute("class", "w-4 h-4"), r.setAttribute("fill", "currentColor"), r.setAttribute("width", "16"), r.setAttribute("height", "16"), r.setAttribute("viewBox", "0 0 24 24"), r.innerHTML = '<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />', n.appendChild(r), n.appendChild(document.createTextNode(t)), e.appendChild(n)
        }))
    }
    document.getElementById("search-modal").addEventListener("click", (function(e) {
        "search-modal" === e.target.id && toggleModal()
    })), document.getElementById("search-input").addEventListener("keydown", (function(e) {
        "Enter" === e.key && (handleSearch(), toggleModal())
    })), initializeRecentSearches()
}