function r1(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => n[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials" ? (i.credentials = "include") : o.crossOrigin === "anonymous" ? (i.credentials = "omit") : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
var Ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function n1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function o1(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var o = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    r
  );
}
var L = {},
  i1 = {
    get exports() {
      return L;
    },
    set exports(e) {
      L = e;
    },
  },
  sa = {},
  w = {},
  l1 = {
    get exports() {
      return w;
    },
    set exports(e) {
      w = e;
    },
  },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zo = Symbol.for("react.element"),
  a1 = Symbol.for("react.portal"),
  s1 = Symbol.for("react.fragment"),
  u1 = Symbol.for("react.strict_mode"),
  c1 = Symbol.for("react.profiler"),
  f1 = Symbol.for("react.provider"),
  d1 = Symbol.for("react.context"),
  p1 = Symbol.for("react.forward_ref"),
  m1 = Symbol.for("react.suspense"),
  h1 = Symbol.for("react.memo"),
  y1 = Symbol.for("react.lazy"),
  pf = Symbol.iterator;
function v1(e) {
  return e === null || typeof e != "object" ? null : ((e = (pf && e[pf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Dm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fm = Object.assign,
  Bm = {};
function En(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Bm), (this.updater = r || Dm);
}
En.prototype.isReactComponent = {};
En.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
En.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vm() {}
Vm.prototype = En.prototype;
function Qu(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Bm), (this.updater = r || Dm);
}
var Ku = (Qu.prototype = new Vm());
Ku.constructor = Qu;
Fm(Ku, En.prototype);
Ku.isPureReactComponent = !0;
var mf = Array.isArray,
  Um = Object.prototype.hasOwnProperty,
  Xu = { current: null },
  Hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wm(e, t, r) {
  var n,
    o = {},
    i = null,
    l = null;
  if (t != null) for (n in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)) Um.call(t, n) && !Hm.hasOwnProperty(n) && (o[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) o.children = r;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (n in ((a = e.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
  return { $$typeof: zo, type: e, key: i, ref: l, props: o, _owner: Xu.current };
}
function g1(e, t) {
  return { $$typeof: zo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zo;
}
function w1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var hf = /\/+/g;
function Fa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? w1("" + e.key) : t.toString(36);
}
function gi(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case zo:
          case a1:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = n === "" ? "." + Fa(l, 0) : n),
      mf(o)
        ? ((r = ""),
          e != null && (r = e.replace(hf, "$&/") + "/"),
          gi(o, t, r, "", function (u) {
            return u;
          }))
        : o != null && (Yu(o) && (o = g1(o, r + (!o.key || (l && l.key === o.key) ? "" : ("" + o.key).replace(hf, "$&/") + "/") + e)), t.push(o)),
      1
    );
  if (((l = 0), (n = n === "" ? "." : n + ":"), mf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = n + Fa(i, a);
      l += gi(i, t, r, s, o);
    }
  else if (((s = v1(e)), typeof s == "function")) for (e = s.call(e), a = 0; !(i = e.next()).done; ) (i = i.value), (s = n + Fa(i, a++)), (l += gi(i, t, r, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Wo(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    gi(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function _1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  wi = { transition: null },
  S1 = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: wi, ReactCurrentOwner: Xu };
Q.Children = {
  map: Wo,
  forEach: function (e, t, r) {
    Wo(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yu(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
Q.Component = En;
Q.Fragment = s1;
Q.Profiler = c1;
Q.PureComponent = Qu;
Q.StrictMode = u1;
Q.Suspense = m1;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S1;
Q.cloneElement = function (e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = Fm({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((i = t.ref), (l = Xu.current)), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
    for (s in t) Um.call(t, s) && !Hm.hasOwnProperty(s) && (n[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: zo, type: e.type, key: o, ref: i, props: n, _owner: l };
};
Q.createContext = function (e) {
  return (
    (e = { $$typeof: d1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }),
    (e.Provider = { $$typeof: f1, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = Wm;
Q.createFactory = function (e) {
  var t = Wm.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: p1, render: e };
};
Q.isValidElement = Yu;
Q.lazy = function (e) {
  return { $$typeof: y1, _payload: { _status: -1, _result: e }, _init: _1 };
};
Q.memo = function (e, t) {
  return { $$typeof: h1, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = wi.transition;
  wi.transition = {};
  try {
    e();
  } finally {
    wi.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Me.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
Q.useId = function () {
  return Me.current.useId();
};
Q.useImperativeHandle = function (e, t, r) {
  return Me.current.useImperativeHandle(e, t, r);
};
Q.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
Q.useReducer = function (e, t, r) {
  return Me.current.useReducer(e, t, r);
};
Q.useRef = function (e) {
  return Me.current.useRef(e);
};
Q.useState = function (e) {
  return Me.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, r) {
  return Me.current.useSyncExternalStore(e, t, r);
};
Q.useTransition = function () {
  return Me.current.useTransition();
};
Q.version = "18.2.0";
(function (e) {
  e.exports = Q;
})(l1);
const C = n1(w),
  Gm = r1({ __proto__: null, default: C }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x1 = w,
  P1 = Symbol.for("react.element"),
  O1 = Symbol.for("react.fragment"),
  E1 = Object.prototype.hasOwnProperty,
  C1 = x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qm(e, t, r) {
  var n,
    o = {},
    i = null,
    l = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (n in t) E1.call(t, n) && !$1.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: P1, type: e, key: i, ref: l, props: o, _owner: C1.current };
}
sa.Fragment = O1;
sa.jsx = Qm;
sa.jsxs = Qm;
(function (e) {
  e.exports = sa;
})(i1);
var bs = {},
  uo = {},
  k1 = {
    get exports() {
      return uo;
    },
    set exports(e) {
      uo = e;
    },
  },
  et = {},
  Rs = {},
  b1 = {
    get exports() {
      return Rs;
    },
    set exports(e) {
      Rs = e;
    },
  },
  Km = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, I) {
    var M = b.length;
    b.push(I);
    e: for (; 0 < M; ) {
      var W = (M - 1) >>> 1,
        Z = b[W];
      if (0 < o(Z, I)) (b[W] = I), (b[M] = Z), (M = W);
      else break e;
    }
  }
  function r(b) {
    return b.length === 0 ? null : b[0];
  }
  function n(b) {
    if (b.length === 0) return null;
    var I = b[0],
      M = b.pop();
    if (M !== I) {
      b[0] = M;
      e: for (var W = 0, Z = b.length, Ge = Z >>> 1; W < Ge; ) {
        var Qe = 2 * (W + 1) - 1,
          Tt = b[Qe],
          De = Qe + 1,
          vt = b[De];
        if (0 > o(Tt, M)) De < Z && 0 > o(vt, Tt) ? ((b[W] = vt), (b[De] = M), (W = De)) : ((b[W] = Tt), (b[Qe] = M), (W = Qe));
        else if (De < Z && 0 > o(vt, M)) (b[W] = vt), (b[De] = M), (W = De);
        else break e;
      }
    }
    return I;
  }
  function o(b, I) {
    var M = b.sortIndex - I.sortIndex;
    return M !== 0 ? M : b.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    c = null,
    d = 3,
    p = !1,
    y = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(b) {
    for (var I = r(u); I !== null; ) {
      if (I.callback === null) n(u);
      else if (I.startTime <= b) n(u), (I.sortIndex = I.expirationTime), t(s, I);
      else break;
      I = r(u);
    }
  }
  function _(b) {
    if (((v = !1), g(b), !y))
      if (r(s) !== null) (y = !0), V(x);
      else {
        var I = r(u);
        I !== null && q(_, I.startTime - b);
      }
  }
  function x(b, I) {
    (y = !1), v && ((v = !1), m(E), (E = -1)), (p = !0);
    var M = d;
    try {
      for (g(I), c = r(s); c !== null && (!(c.expirationTime > I) || (b && !z())); ) {
        var W = c.callback;
        if (typeof W == "function") {
          (c.callback = null), (d = c.priorityLevel);
          var Z = W(c.expirationTime <= I);
          (I = e.unstable_now()), typeof Z == "function" ? (c.callback = Z) : c === r(s) && n(s), g(I);
        } else n(s);
        c = r(s);
      }
      if (c !== null) var Ge = !0;
      else {
        var Qe = r(u);
        Qe !== null && q(_, Qe.startTime - I), (Ge = !1);
      }
      return Ge;
    } finally {
      (c = null), (d = M), (p = !1);
    }
  }
  var O = !1,
    P = null,
    E = -1,
    T = 5,
    k = -1;
  function z() {
    return !(e.unstable_now() - k < T);
  }
  function D() {
    if (P !== null) {
      var b = e.unstable_now();
      k = b;
      var I = !0;
      try {
        I = P(!0, b);
      } finally {
        I ? F() : ((O = !1), (P = null));
      }
    } else O = !1;
  }
  var F;
  if (typeof h == "function")
    F = function () {
      h(D);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      B = j.port2;
    (j.port1.onmessage = D),
      (F = function () {
        B.postMessage(null);
      });
  } else
    F = function () {
      S(D, 0);
    };
  function V(b) {
    (P = b), O || ((O = !0), F());
  }
  function q(b, I) {
    E = S(function () {
      b(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || p || ((y = !0), V(x));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
        : (T = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (e.unstable_next = function (b) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var M = d;
      d = I;
      try {
        return b();
      } finally {
        d = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, I) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var M = d;
      d = b;
      try {
        return I();
      } finally {
        d = M;
      }
    }),
    (e.unstable_scheduleCallback = function (b, I, M) {
      var W = e.unstable_now();
      switch ((typeof M == "object" && M !== null ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? W + M : W)) : (M = W), b)) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = M + Z),
        (b = { id: f++, callback: I, priorityLevel: b, startTime: M, expirationTime: Z, sortIndex: -1 }),
        M > W
          ? ((b.sortIndex = M), t(u, b), r(s) === null && b === r(u) && (v ? (m(E), (E = -1)) : (v = !0), q(_, M - W)))
          : ((b.sortIndex = Z), t(s, b), y || p || ((y = !0), V(x))),
        b
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (b) {
      var I = d;
      return function () {
        var M = d;
        d = I;
        try {
          return b.apply(this, arguments);
        } finally {
          d = M;
        }
      };
    });
})(Km);
(function (e) {
  e.exports = Km;
})(b1);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xm = w,
  Ze = Rs;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ym = new Set(),
  co = {};
function Dr(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for (co[e] = t, e = 0; e < t.length; e++) Ym.add(t[e]);
}
var Vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Ns = Object.prototype.hasOwnProperty,
  R1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yf = {},
  vf = {};
function N1(e) {
  return Ns.call(vf, e) ? !0 : Ns.call(yf, e) ? !1 : R1.test(e) ? (vf[e] = !0) : ((yf[e] = !0), !1);
}
function T1(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function j1(e, t, r, n) {
  if (t === null || typeof t > "u" || T1(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, r, n, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  $e[e] = new Ae(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $e[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $e[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  $e[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $e[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $e[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $e[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $e[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qu = /[\-:]([a-z])/g;
function Ju(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qu, Ju);
    $e[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(qu, Ju);
  $e[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qu, Ju);
  $e[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $e[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  $e[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zu(e, t, r, n) {
  var o = $e.hasOwnProperty(t) ? $e[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (j1(t, r, o, n) && (r = null),
    n || o === null
      ? N1(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null ? e.removeAttribute(t) : ((o = o.type), (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r), n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Qt = Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Go = Symbol.for("react.element"),
  Qr = Symbol.for("react.portal"),
  Kr = Symbol.for("react.fragment"),
  ec = Symbol.for("react.strict_mode"),
  Ts = Symbol.for("react.profiler"),
  qm = Symbol.for("react.provider"),
  Jm = Symbol.for("react.context"),
  tc = Symbol.for("react.forward_ref"),
  js = Symbol.for("react.suspense"),
  zs = Symbol.for("react.suspense_list"),
  rc = Symbol.for("react.memo"),
  Zt = Symbol.for("react.lazy"),
  Zm = Symbol.for("react.offscreen"),
  gf = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object" ? null : ((e = (gf && e[gf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var fe = Object.assign,
  Ba;
function Kn(e) {
  if (Ba === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ba = (t && t[1]) || "";
    }
  return (
    `
` +
    Ba +
    e
  );
}
var Va = !1;
function Ua(e, t) {
  if (!e || Va) return "";
  Va = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Va = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
}
function z1(e) {
  switch (e.tag) {
    case 5:
      return Kn(e.type);
    case 16:
      return Kn("Lazy");
    case 13:
      return Kn("Suspense");
    case 19:
      return Kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ua(e.type, !1)), e;
    case 11:
      return (e = Ua(e.type.render, !1)), e;
    case 1:
      return (e = Ua(e.type, !0)), e;
    default:
      return "";
  }
}
function Is(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kr:
      return "Fragment";
    case Qr:
      return "Portal";
    case Ts:
      return "Profiler";
    case ec:
      return "StrictMode";
    case js:
      return "Suspense";
    case zs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jm:
        return (e.displayName || "Context") + ".Consumer";
      case qm:
        return (e._context.displayName || "Context") + ".Provider";
      case tc:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case rc:
        return (t = e.displayName || null), t !== null ? t : Is(e.type) || "Memo";
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return Is(e(t));
        } catch {}
    }
  return null;
}
function I1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Is(t);
    case 8:
      return t === ec ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function eh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function L1(e) {
  var t = eh(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (n = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qo(e) {
  e._valueTracker || (e._valueTracker = L1(e));
}
function th(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return e && (n = eh(e) ? (e.checked ? "true" : "false") : e.value), (e = n), e !== r ? (t.setValue(e), !0) : !1;
}
function Qi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ls(e, t) {
  var r = t.checked;
  return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function wf(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = hr(t.value != null ? t.value : r)),
    (e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function rh(e, t) {
  (t = t.checked), t != null && Zu(e, "checked", t, !1);
}
function Ms(e, t) {
  rh(e, t);
  var r = hr(t.value),
    n = t.type;
  if (r != null) n === "number" ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? As(e, t.type, r) : t.hasOwnProperty("defaultValue") && As(e, t.type, hr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _f(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!((n !== "submit" && n !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), r || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (r = e.name), r !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), r !== "" && (e.name = r);
}
function As(e, t, r) {
  (t !== "number" || Qi(e.ownerDocument) !== e) && (r == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Xn = Array.isArray;
function ln(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++) (o = t.hasOwnProperty("$" + e[r].value)), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + hr(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ds(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Sf(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(R(92));
      if (Xn(r)) {
        if (1 < r.length) throw Error(R(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: hr(r) };
}
function nh(e, t) {
  var r = hr(t.value),
    n = hr(t.defaultValue);
  r != null && ((r = "" + r), r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function xf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function oh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? oh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ko,
  ih = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ko = Ko || document.createElement("div"), Ko.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ko.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fo(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  M1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zn).forEach(function (e) {
  M1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]);
  });
});
function lh(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || (Zn.hasOwnProperty(e) && Zn[e]) ? ("" + t).trim() : t + "px";
}
function ah(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = lh(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var A1 = fe(
  { menuitem: !0 },
  { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }
);
function Bs(e, t) {
  if (t) {
    if (A1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Vs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Us = null;
function nc(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hs = null,
  an = null,
  sn = null;
function Pf(e) {
  if ((e = Mo(e))) {
    if (typeof Hs != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = pa(t)), Hs(e.stateNode, e.type, t));
  }
}
function sh(e) {
  an ? (sn ? sn.push(e) : (sn = [e])) : (an = e);
}
function uh() {
  if (an) {
    var e = an,
      t = sn;
    if (((sn = an = null), Pf(e), t)) for (e = 0; e < t.length; e++) Pf(t[e]);
  }
}
function ch(e, t) {
  return e(t);
}
function fh() {}
var Ha = !1;
function dh(e, t, r) {
  if (Ha) return e(t, r);
  Ha = !0;
  try {
    return ch(e, t, r);
  } finally {
    (Ha = !1), (an !== null || sn !== null) && (fh(), uh());
  }
}
function po(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = pa(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || ((e = e.type), (n = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(R(231, t, typeof r));
  return r;
}
var Ws = !1;
if (Vt)
  try {
    var jn = {};
    Object.defineProperty(jn, "passive", {
      get: function () {
        Ws = !0;
      },
    }),
      window.addEventListener("test", jn, jn),
      window.removeEventListener("test", jn, jn);
  } catch {
    Ws = !1;
  }
function D1(e, t, r, n, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (f) {
    this.onError(f);
  }
}
var eo = !1,
  Ki = null,
  Xi = !1,
  Gs = null,
  F1 = {
    onError: function (e) {
      (eo = !0), (Ki = e);
    },
  };
function B1(e, t, r, n, o, i, l, a, s) {
  (eo = !1), (Ki = null), D1.apply(F1, arguments);
}
function V1(e, t, r, n, o, i, l, a, s) {
  if ((B1.apply(this, arguments), eo)) {
    if (eo) {
      var u = Ki;
      (eo = !1), (Ki = null);
    } else throw Error(R(198));
    Xi || ((Xi = !0), (Gs = u));
  }
}
function Fr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function ph(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Of(e) {
  if (Fr(e) !== e) throw Error(R(188));
}
function U1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fr(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Of(o), e;
        if (i === n) return Of(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(R(189));
      }
    }
    if (r.alternate !== n) throw Error(R(190));
  }
  if (r.tag !== 3) throw Error(R(188));
  return r.stateNode.current === r ? e : t;
}
function mh(e) {
  return (e = U1(e)), e !== null ? hh(e) : null;
}
function hh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yh = Ze.unstable_scheduleCallback,
  Ef = Ze.unstable_cancelCallback,
  H1 = Ze.unstable_shouldYield,
  W1 = Ze.unstable_requestPaint,
  me = Ze.unstable_now,
  G1 = Ze.unstable_getCurrentPriorityLevel,
  oc = Ze.unstable_ImmediatePriority,
  vh = Ze.unstable_UserBlockingPriority,
  Yi = Ze.unstable_NormalPriority,
  Q1 = Ze.unstable_LowPriority,
  gh = Ze.unstable_IdlePriority,
  ua = null,
  $t = null;
function K1(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function")
    try {
      $t.onCommitFiberRoot(ua, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : q1,
  X1 = Math.log,
  Y1 = Math.LN2;
function q1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((X1(e) / Y1) | 0)) | 0;
}
var Xo = 64,
  Yo = 4194304;
function Yn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function qi(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = r & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (n = Yn(a)) : ((i &= l), i !== 0 && (n = Yn(i)));
  } else (l = r & ~o), l !== 0 ? (n = Yn(l)) : i !== 0 && (n = Yn(i));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & o) && ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))) return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= n; 0 < t; ) (r = 31 - dt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function J1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Z1(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - dt(i),
      a = 1 << l,
      s = o[l];
    s === -1 ? (!(a & r) || a & n) && (o[l] = J1(a, t)) : s <= t && (e.expiredLanes |= a), (i &= ~a);
  }
}
function Qs(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wh() {
  var e = Xo;
  return (Xo <<= 1), !(Xo & 4194240) && (Xo = 64), e;
}
function Wa(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Io(e, t, r) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - dt(t)), (e[t] = r);
}
function ew(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - dt(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function ic(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - dt(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var te = 0;
function _h(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sh,
  lc,
  xh,
  Ph,
  Oh,
  Ks = !1,
  qo = [],
  lr = null,
  ar = null,
  sr = null,
  mo = new Map(),
  ho = new Map(),
  tr = [],
  tw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Cf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lr = null;
      break;
    case "dragenter":
    case "dragleave":
      ar = null;
      break;
    case "mouseover":
    case "mouseout":
      sr = null;
      break;
    case "pointerover":
    case "pointerout":
      mo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ho.delete(t.pointerId);
  }
}
function zn(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }), t !== null && ((t = Mo(t)), t !== null && lc(t)), e)
    : ((e.eventSystemFlags |= n), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function rw(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (lr = zn(lr, e, t, r, n, o)), !0;
    case "dragenter":
      return (ar = zn(ar, e, t, r, n, o)), !0;
    case "mouseover":
      return (sr = zn(sr, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return mo.set(i, zn(mo.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (i = o.pointerId), ho.set(i, zn(ho.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function Eh(e) {
  var t = Er(e.target);
  if (t !== null) {
    var r = Fr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = ph(r)), t !== null)) {
          (e.blockedOn = t),
            Oh(e.priority, function () {
              xh(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Xs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Us = n), r.target.dispatchEvent(n), (Us = null);
    } else return (t = Mo(r)), t !== null && lc(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function $f(e, t, r) {
  _i(e) && r.delete(t);
}
function nw() {
  (Ks = !1), lr !== null && _i(lr) && (lr = null), ar !== null && _i(ar) && (ar = null), sr !== null && _i(sr) && (sr = null), mo.forEach($f), ho.forEach($f);
}
function In(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), Ks || ((Ks = !0), Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, nw)));
}
function yo(e) {
  function t(o) {
    return In(o, e);
  }
  if (0 < qo.length) {
    In(qo[0], e);
    for (var r = 1; r < qo.length; r++) {
      var n = qo[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (lr !== null && In(lr, e), ar !== null && In(ar, e), sr !== null && In(sr, e), mo.forEach(t), ho.forEach(t), r = 0; r < tr.length; r++)
    (n = tr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < tr.length && ((r = tr[0]), r.blockedOn === null); ) Eh(r), r.blockedOn === null && tr.shift();
}
var un = Qt.ReactCurrentBatchConfig,
  Ji = !0;
function ow(e, t, r, n) {
  var o = te,
    i = un.transition;
  un.transition = null;
  try {
    (te = 1), ac(e, t, r, n);
  } finally {
    (te = o), (un.transition = i);
  }
}
function iw(e, t, r, n) {
  var o = te,
    i = un.transition;
  un.transition = null;
  try {
    (te = 4), ac(e, t, r, n);
  } finally {
    (te = o), (un.transition = i);
  }
}
function ac(e, t, r, n) {
  if (Ji) {
    var o = Xs(e, t, r, n);
    if (o === null) ts(e, t, n, Zi, r), Cf(e, n);
    else if (rw(o, e, t, r, n)) n.stopPropagation();
    else if ((Cf(e, n), t & 4 && -1 < tw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Mo(o);
        if ((i !== null && Sh(i), (i = Xs(e, t, r, n)), i === null && ts(e, t, n, Zi, r), i === o)) break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else ts(e, t, n, null, r);
  }
}
var Zi = null;
function Xs(e, t, r, n) {
  if (((Zi = null), (e = nc(n)), (e = Er(e)), e !== null))
    if (((t = Fr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = ph(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zi = e), null;
}
function Ch(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (G1()) {
        case oc:
          return 1;
        case vh:
          return 4;
        case Yi:
        case Q1:
          return 16;
        case gh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nr = null,
  sc = null,
  Si = null;
function $h() {
  if (Si) return Si;
  var e,
    t = sc,
    r = t.length,
    n,
    o = "value" in nr ? nr.value : nr.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var l = r - e;
  for (n = 1; n <= l && t[r - n] === o[i - n]; n++);
  return (Si = o.slice(e, 1 < n ? 1 - n : void 0));
}
function xi(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Jo() {
  return !0;
}
function kf() {
  return !1;
}
function tt(e) {
  function t(r, n, o, i, l) {
    (this._reactName = r), (this._targetInst = o), (this.type = n), (this.nativeEvent = i), (this.target = l), (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(i) : i[a]));
    return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Jo : kf), (this.isPropagationStopped = kf), this;
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), (this.isDefaultPrevented = Jo));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), (this.isPropagationStopped = Jo));
      },
      persist: function () {},
      isPersistent: Jo,
    }),
    t
  );
}
var Cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uc = tt(Cn),
  Lo = fe({}, Cn, { view: 0, detail: 0 }),
  lw = tt(Lo),
  Ga,
  Qa,
  Ln,
  ca = fe({}, Lo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ln && (Ln && e.type === "mousemove" ? ((Ga = e.screenX - Ln.screenX), (Qa = e.screenY - Ln.screenY)) : (Qa = Ga = 0), (Ln = e)), Ga);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qa;
    },
  }),
  bf = tt(ca),
  aw = fe({}, ca, { dataTransfer: 0 }),
  sw = tt(aw),
  uw = fe({}, Lo, { relatedTarget: 0 }),
  Ka = tt(uw),
  cw = fe({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fw = tt(cw),
  dw = fe({}, Cn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pw = tt(dw),
  mw = fe({}, Cn, { data: 0 }),
  Rf = tt(mw),
  hw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  yw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function gw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vw[e]) ? !!t[e] : !1;
}
function cc() {
  return gw;
}
var ww = fe({}, Lo, {
    key: function (e) {
      if (e.key) {
        var t = hw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? ((e = xi(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cc,
    charCode: function (e) {
      return e.type === "keypress" ? xi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  _w = tt(ww),
  Sw = fe({}, ca, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  Nf = tt(Sw),
  xw = fe({}, Lo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cc }),
  Pw = tt(xw),
  Ow = fe({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ew = tt(Ow),
  Cw = fe({}, ca, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $w = tt(Cw),
  kw = [9, 13, 27, 32],
  fc = Vt && "CompositionEvent" in window,
  to = null;
Vt && "documentMode" in document && (to = document.documentMode);
var bw = Vt && "TextEvent" in window && !to,
  kh = Vt && (!fc || (to && 8 < to && 11 >= to)),
  Tf = String.fromCharCode(32),
  jf = !1;
function bh(e, t) {
  switch (e) {
    case "keyup":
      return kw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Rh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xr = !1;
function Rw(e, t) {
  switch (e) {
    case "compositionend":
      return Rh(t);
    case "keypress":
      return t.which !== 32 ? null : ((jf = !0), Tf);
    case "textInput":
      return (e = t.data), e === Tf && jf ? null : e;
    default:
      return null;
  }
}
function Nw(e, t) {
  if (Xr) return e === "compositionend" || (!fc && bh(e, t)) ? ((e = $h()), (Si = sc = nr = null), (Xr = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tw[e.type] : t === "textarea";
}
function Nh(e, t, r, n) {
  sh(n), (t = el(t, "onChange")), 0 < t.length && ((r = new uc("onChange", "change", null, r, n)), e.push({ event: r, listeners: t }));
}
var ro = null,
  vo = null;
function jw(e) {
  Vh(e, 0);
}
function fa(e) {
  var t = Jr(e);
  if (th(t)) return e;
}
function zw(e, t) {
  if (e === "change") return t;
}
var Th = !1;
if (Vt) {
  var Xa;
  if (Vt) {
    var Ya = "oninput" in document;
    if (!Ya) {
      var If = document.createElement("div");
      If.setAttribute("oninput", "return;"), (Ya = typeof If.oninput == "function");
    }
    Xa = Ya;
  } else Xa = !1;
  Th = Xa && (!document.documentMode || 9 < document.documentMode);
}
function Lf() {
  ro && (ro.detachEvent("onpropertychange", jh), (vo = ro = null));
}
function jh(e) {
  if (e.propertyName === "value" && fa(vo)) {
    var t = [];
    Nh(t, vo, e, nc(e)), dh(jw, t);
  }
}
function Iw(e, t, r) {
  e === "focusin" ? (Lf(), (ro = t), (vo = r), ro.attachEvent("onpropertychange", jh)) : e === "focusout" && Lf();
}
function Lw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return fa(vo);
}
function Mw(e, t) {
  if (e === "click") return fa(t);
}
function Aw(e, t) {
  if (e === "input" || e === "change") return fa(t);
}
function Dw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : Dw;
function go(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Ns.call(t, o) || !ht(e[o], t[o])) return !1;
  }
  return !0;
}
function Mf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Af(e, t) {
  var r = Mf(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Mf(r);
  }
}
function zh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ih() {
  for (var e = window, t = Qi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Qi(e.document);
  }
  return t;
}
function dc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Fw(e) {
  var t = Ih(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && zh(r.ownerDocument.documentElement, r)) {
    if (n !== null && dc(r)) {
      if (((t = n.start), (e = n.end), e === void 0 && (e = t), "selectionStart" in r)) (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)), !e.extend && i > n && ((o = n), (n = i), (i = o)), (o = Af(r, i));
        var l = Af(r, n);
        o &&
          l &&
          (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Bw = Vt && "documentMode" in document && 11 >= document.documentMode,
  Yr = null,
  Ys = null,
  no = null,
  qs = !1;
function Df(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  qs ||
    Yr == null ||
    Yr !== Qi(n) ||
    ((n = Yr),
    "selectionStart" in n && dc(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset })),
    (no && go(no, n)) ||
      ((no = n), (n = el(Ys, "onSelect")), 0 < n.length && ((t = new uc("onSelect", "select", null, t, r)), e.push({ event: t, listeners: n }), (t.target = Yr))));
}
function Zo(e, t) {
  var r = {};
  return (r[e.toLowerCase()] = t.toLowerCase()), (r["Webkit" + e] = "webkit" + t), (r["Moz" + e] = "moz" + t), r;
}
var qr = {
    animationend: Zo("Animation", "AnimationEnd"),
    animationiteration: Zo("Animation", "AnimationIteration"),
    animationstart: Zo("Animation", "AnimationStart"),
    transitionend: Zo("Transition", "TransitionEnd"),
  },
  qa = {},
  Lh = {};
Vt &&
  ((Lh = document.createElement("div").style),
  "AnimationEvent" in window || (delete qr.animationend.animation, delete qr.animationiteration.animation, delete qr.animationstart.animation),
  "TransitionEvent" in window || delete qr.transitionend.transition);
function da(e) {
  if (qa[e]) return qa[e];
  if (!qr[e]) return e;
  var t = qr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Lh) return (qa[e] = t[r]);
  return e;
}
var Mh = da("animationend"),
  Ah = da("animationiteration"),
  Dh = da("animationstart"),
  Fh = da("transitionend"),
  Bh = new Map(),
  Ff =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gr(e, t) {
  Bh.set(e, t), Dr(t, [e]);
}
for (var Ja = 0; Ja < Ff.length; Ja++) {
  var Za = Ff[Ja],
    Vw = Za.toLowerCase(),
    Uw = Za[0].toUpperCase() + Za.slice(1);
  gr(Vw, "on" + Uw);
}
gr(Mh, "onAnimationEnd");
gr(Ah, "onAnimationIteration");
gr(Dh, "onAnimationStart");
gr("dblclick", "onDoubleClick");
gr("focusin", "onFocus");
gr("focusout", "onBlur");
gr(Fh, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
Dr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hw = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function Bf(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), V1(n, t, void 0, e), (e.currentTarget = null);
}
function Vh(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = n.length - 1; 0 <= l; l--) {
          var a = n[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          Bf(o, a, u), (i = s);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (((a = n[l]), (s = a.instance), (u = a.currentTarget), (a = a.listener), s !== i && o.isPropagationStopped())) break e;
          Bf(o, a, u), (i = s);
        }
    }
  }
  if (Xi) throw ((e = Gs), (Xi = !1), (Gs = null), e);
}
function ie(e, t) {
  var r = t[ru];
  r === void 0 && (r = t[ru] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Uh(t, e, 2, !1), r.add(n));
}
function es(e, t, r) {
  var n = 0;
  t && (n |= 4), Uh(r, e, n, t);
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function wo(e) {
  if (!e[ei]) {
    (e[ei] = !0),
      Ym.forEach(function (r) {
        r !== "selectionchange" && (Hw.has(r) || es(r, !1, e), es(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ei] || ((t[ei] = !0), es("selectionchange", !1, t));
  }
}
function Uh(e, t, r, n) {
  switch (Ch(t)) {
    case 1:
      var o = ow;
      break;
    case 4:
      o = iw;
      break;
    default:
      o = ac;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !Ws || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function ts(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var a = n.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var s = l.tag;
            if ((s === 3 || s === 4) && ((s = l.stateNode.containerInfo), s === o || (s.nodeType === 8 && s.parentNode === o))) return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Er(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            n = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  dh(function () {
    var u = i,
      f = nc(r),
      c = [];
    e: {
      var d = Bh.get(e);
      if (d !== void 0) {
        var p = uc,
          y = e;
        switch (e) {
          case "keypress":
            if (xi(r) === 0) break e;
          case "keydown":
          case "keyup":
            p = _w;
            break;
          case "focusin":
            (y = "focus"), (p = Ka);
            break;
          case "focusout":
            (y = "blur"), (p = Ka);
            break;
          case "beforeblur":
          case "afterblur":
            p = Ka;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = sw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Pw;
            break;
          case Mh:
          case Ah:
          case Dh:
            p = fw;
            break;
          case Fh:
            p = Ew;
            break;
          case "scroll":
            p = lw;
            break;
          case "wheel":
            p = $w;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = pw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Nf;
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          m = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var _ = g.stateNode;
          if ((g.tag === 5 && _ !== null && ((g = _), m !== null && ((_ = po(h, m)), _ != null && v.push(_o(h, _, g)))), S)) break;
          h = h.return;
        }
        0 < v.length && ((d = new p(d, y, null, r, f)), c.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d && r !== Us && (y = r.relatedTarget || r.fromElement) && (Er(y) || y[Ut]))
        )
          break e;
        if (
          (p || d) &&
          ((d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window),
          p
            ? ((y = r.relatedTarget || r.toElement), (p = u), (y = y ? Er(y) : null), y !== null && ((S = Fr(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((p = null), (y = u)),
          p !== y)
        ) {
          if (
            ((v = bf),
            (_ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((v = Nf), (_ = "onPointerLeave"), (m = "onPointerEnter"), (h = "pointer")),
            (S = p == null ? d : Jr(p)),
            (g = y == null ? d : Jr(y)),
            (d = new v(_, h + "leave", p, r, f)),
            (d.target = S),
            (d.relatedTarget = g),
            (_ = null),
            Er(f) === u && ((v = new v(m, h + "enter", y, r, f)), (v.target = g), (v.relatedTarget = S), (_ = v)),
            (S = _),
            p && y)
          )
            t: {
              for (v = p, m = y, h = 0, g = v; g; g = Vr(g)) h++;
              for (g = 0, _ = m; _; _ = Vr(_)) g++;
              for (; 0 < h - g; ) (v = Vr(v)), h--;
              for (; 0 < g - h; ) (m = Vr(m)), g--;
              for (; h--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = Vr(v)), (m = Vr(m));
              }
              v = null;
            }
          else v = null;
          p !== null && Vf(c, d, p, v, !1), y !== null && S !== null && Vf(c, S, y, v, !0);
        }
      }
      e: {
        if (((d = u ? Jr(u) : window), (p = d.nodeName && d.nodeName.toLowerCase()), p === "select" || (p === "input" && d.type === "file"))) var x = zw;
        else if (zf(d))
          if (Th) x = Aw;
          else {
            x = Lw;
            var O = Iw;
          }
        else (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = Mw);
        if (x && (x = x(e, u))) {
          Nh(c, x, r, f);
          break e;
        }
        O && O(e, d, u), e === "focusout" && (O = d._wrapperState) && O.controlled && d.type === "number" && As(d, "number", d.value);
      }
      switch (((O = u ? Jr(u) : window), e)) {
        case "focusin":
          (zf(O) || O.contentEditable === "true") && ((Yr = O), (Ys = u), (no = null));
          break;
        case "focusout":
          no = Ys = Yr = null;
          break;
        case "mousedown":
          qs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qs = !1), Df(c, r, f);
          break;
        case "selectionchange":
          if (Bw) break;
        case "keydown":
        case "keyup":
          Df(c, r, f);
      }
      var P;
      if (fc)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else Xr ? bh(e, r) && (E = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (kh &&
          r.locale !== "ko" &&
          (Xr || E !== "onCompositionStart" ? E === "onCompositionEnd" && Xr && (P = $h()) : ((nr = f), (sc = "value" in nr ? nr.value : nr.textContent), (Xr = !0))),
        (O = el(u, E)),
        0 < O.length && ((E = new Rf(E, e, null, r, f)), c.push({ event: E, listeners: O }), P ? (E.data = P) : ((P = Rh(r)), P !== null && (E.data = P)))),
        (P = bw ? Rw(e, r) : Nw(e, r)) &&
          ((u = el(u, "onBeforeInput")), 0 < u.length && ((f = new Rf("onBeforeInput", "beforeinput", null, r, f)), c.push({ event: f, listeners: u }), (f.data = P)));
    }
    Vh(c, t);
  });
}
function _o(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function el(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 && i !== null && ((o = i), (i = po(e, r)), i != null && n.unshift(_o(e, i, o)), (i = po(e, t)), i != null && n.push(_o(e, i, o))), (e = e.return);
  }
  return n;
}
function Vr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vf(e, t, r, n, o) {
  for (var i = t._reactName, l = []; r !== null && r !== n; ) {
    var a = r,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === n) break;
    a.tag === 5 && u !== null && ((a = u), o ? ((s = po(r, i)), s != null && l.unshift(_o(r, s, a))) : o || ((s = po(r, i)), s != null && l.push(_o(r, s, a)))), (r = r.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ww = /\r\n?/g,
  Gw = /\u0000|\uFFFD/g;
function Uf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ww,
      `
`
    )
    .replace(Gw, "");
}
function ti(e, t, r) {
  if (((t = Uf(t)), Uf(e) !== t && r)) throw Error(R(425));
}
function tl() {}
var Js = null,
  Zs = null;
function eu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var tu = typeof setTimeout == "function" ? setTimeout : void 0,
  Qw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hf = typeof Promise == "function" ? Promise : void 0,
  Kw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hf < "u"
      ? function (e) {
          return Hf.resolve(null).then(e).catch(Xw);
        }
      : tu;
function Xw(e) {
  setTimeout(function () {
    throw e;
  });
}
function rs(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), yo(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  yo(t);
}
function ur(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $n = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + $n,
  So = "__reactProps$" + $n,
  Ut = "__reactContainer$" + $n,
  ru = "__reactEvents$" + $n,
  Yw = "__reactListeners$" + $n,
  qw = "__reactHandles$" + $n;
function Er(e) {
  var t = e[Pt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Ut] || r[Pt])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = Wf(e); e !== null; ) {
          if ((r = e[Pt])) return r;
          e = Wf(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Mo(e) {
  return (e = e[Pt] || e[Ut]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function pa(e) {
  return e[So] || null;
}
var nu = [],
  Zr = -1;
function wr(e) {
  return { current: e };
}
function le(e) {
  0 > Zr || ((e.current = nu[Zr]), (nu[Zr] = null), Zr--);
}
function ne(e, t) {
  Zr++, (nu[Zr] = e.current), (e.current = t);
}
var yr = {},
  je = wr(yr),
  Ve = wr(!1),
  Nr = yr;
function hn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return yr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return n && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function rl() {
  le(Ve), le(je);
}
function Gf(e, t, r) {
  if (je.current !== yr) throw Error(R(168));
  ne(je, t), ne(Ve, r);
}
function Hh(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function")) return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(R(108, I1(e) || "Unknown", o));
  return fe({}, r, n);
}
function nl(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yr), (Nr = je.current), ne(je, e), ne(Ve, Ve.current), !0;
}
function Qf(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(R(169));
  r ? ((e = Hh(e, t, Nr)), (n.__reactInternalMemoizedMergedChildContext = e), le(Ve), le(je), ne(je, e)) : le(Ve), ne(Ve, r);
}
var zt = null,
  ma = !1,
  ns = !1;
function Wh(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function Jw(e) {
  (ma = !0), Wh(e);
}
function _r() {
  if (!ns && zt !== null) {
    ns = !0;
    var e = 0,
      t = te;
    try {
      var r = zt;
      for (te = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (zt = null), (ma = !1);
    } catch (o) {
      throw (zt !== null && (zt = zt.slice(e + 1)), yh(oc, _r), o);
    } finally {
      (te = t), (ns = !1);
    }
  }
  return null;
}
var en = [],
  tn = 0,
  ol = null,
  il = 0,
  rt = [],
  nt = 0,
  Tr = null,
  Lt = 1,
  Mt = "";
function Pr(e, t) {
  (en[tn++] = il), (en[tn++] = ol), (ol = e), (il = t);
}
function Gh(e, t, r) {
  (rt[nt++] = Lt), (rt[nt++] = Mt), (rt[nt++] = Tr), (Tr = e);
  var n = Lt;
  e = Mt;
  var o = 32 - dt(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - dt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (n & ((1 << l) - 1)).toString(32)), (n >>= l), (o -= l), (Lt = (1 << (32 - dt(t) + o)) | (r << o) | n), (Mt = i + e);
  } else (Lt = (1 << i) | (r << o) | n), (Mt = e);
}
function pc(e) {
  e.return !== null && (Pr(e, 1), Gh(e, 1, 0));
}
function mc(e) {
  for (; e === ol; ) (ol = en[--tn]), (en[tn] = null), (il = en[--tn]), (en[tn] = null);
  for (; e === Tr; ) (Tr = rt[--nt]), (rt[nt] = null), (Mt = rt[--nt]), (rt[nt] = null), (Lt = rt[--nt]), (rt[nt] = null);
}
var qe = null,
  Xe = null,
  se = !1,
  ft = null;
function Qh(e, t) {
  var r = ot(5, null, null, 0);
  (r.elementType = "DELETED"), (r.stateNode = t), (r.return = e), (t = e.deletions), t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Kf(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (qe = e), (Xe = ur(t.firstChild)), !0) : !1;
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (qe = e), (Xe = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Tr !== null ? { id: Lt, overflow: Mt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
            (r = ot(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (qe = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ou(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function iu(e) {
  if (se) {
    var t = Xe;
    if (t) {
      var r = t;
      if (!Kf(e, t)) {
        if (ou(e)) throw Error(R(418));
        t = ur(r.nextSibling);
        var n = qe;
        t && Kf(e, t) ? Qh(n, r) : ((e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e));
      }
    } else {
      if (ou(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e);
    }
  }
}
function Xf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qe = e;
}
function ri(e) {
  if (e !== qe) return !1;
  if (!se) return Xf(e), (se = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !eu(e.type, e.memoizedProps))), t && (t = Xe))) {
    if (ou(e)) throw (Kh(), Error(R(418)));
    for (; t; ) Qh(e, t), (t = ur(t.nextSibling));
  }
  if ((Xf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Xe = ur(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = qe ? ur(e.stateNode.nextSibling) : null;
  return !0;
}
function Kh() {
  for (var e = Xe; e; ) e = ur(e.nextSibling);
}
function yn() {
  (Xe = qe = null), (se = !1);
}
function hc(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Zw = Qt.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var ll = wr(null),
  al = null,
  rn = null,
  yc = null;
function vc() {
  yc = rn = al = null;
}
function gc(e) {
  var t = ll.current;
  le(ll), (e._currentValue = t);
}
function lu(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)) break;
    e = e.return;
  }
}
function cn(e, t) {
  (al = e), (yc = rn = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function lt(e) {
  var t = e._currentValue;
  if (yc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rn === null)) {
      if (al === null) throw Error(R(308));
      (rn = e), (al.dependencies = { lanes: 0, firstContext: e });
    } else rn = rn.next = e;
  return t;
}
var Cr = null;
function wc(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function Xh(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? ((r.next = r), wc(t)) : ((r.next = o.next), (o.next = r)), (t.interleaved = r), Ht(e, n);
}
function Ht(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var er = !1;
function _c(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Yh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function At(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function cr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), Y & 2)) {
    var o = n.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (n.pending = t), Ht(e, r);
  }
  return (o = n.interleaved), o === null ? ((t.next = t), wc(n)) : ((t.next = o.next), (o.next = t)), (n.interleaved = t), Ht(e, r);
}
function Pi(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), ic(e, r);
  }
}
function Yf(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var l = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        i === null ? (o = i = l) : (i = i.next = l), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = { baseState: n.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: n.shared, effects: n.effects }), (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t);
}
function sl(e, t, r, n) {
  var o = e.updateQueue;
  er = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var f = e.alternate;
    f !== null && ((f = f.updateQueue), (a = f.lastBaseUpdate), a !== l && (a === null ? (f.firstBaseUpdate = u) : (a.next = u), (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = o.baseState;
    (l = 0), (f = u = s = null), (a = i);
    do {
      var d = a.lane,
        p = a.eventTime;
      if ((n & d) === d) {
        f !== null && (f = f.next = { eventTime: p, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (p = r), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                c = y.call(p, c, d);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = v.payload), (d = typeof y == "function" ? y.call(p, c, d) : y), d == null)) break e;
              c = fe({}, c, d);
              break e;
            case 2:
              er = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (d = o.effects), d === null ? (o.effects = [a]) : d.push(a));
      } else (p = { eventTime: p, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), f === null ? ((u = f = p), (s = c)) : (f = f.next = p), (l |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a), (a = d.next), (d.next = null), (o.lastBaseUpdate = d), (o.shared.pending = null);
      }
    } while (1);
    if ((f === null && (s = c), (o.baseState = s), (o.firstBaseUpdate = u), (o.lastBaseUpdate = f), (t = o.shared.interleaved), t !== null)) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (zr |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function qf(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function")) throw Error(R(191, o));
        o.call(n);
      }
    }
}
var qh = new Xm.Component().refs;
function au(e, t, r, n) {
  (t = e.memoizedState), (r = r(n, t)), (r = r == null ? t : fe({}, t, r)), (e.memoizedState = r), e.lanes === 0 && (e.updateQueue.baseState = r);
}
var ha = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Le(),
      o = dr(e),
      i = At(n, o);
    (i.payload = t), r != null && (i.callback = r), (t = cr(e, i, o)), t !== null && (pt(t, e, o, n), Pi(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Le(),
      o = dr(e),
      i = At(n, o);
    (i.tag = 1), (i.payload = t), r != null && (i.callback = r), (t = cr(e, i, o)), t !== null && (pt(t, e, o, n), Pi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Le(),
      n = dr(e),
      o = At(r, n);
    (o.tag = 2), t != null && (o.callback = t), (t = cr(e, o, n)), t !== null && (pt(t, e, n, r), Pi(t, e, n));
  },
};
function Jf(e, t, r, n, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, l) : t.prototype && t.prototype.isPureReactComponent ? !go(r, n) || !go(o, i) : !0
  );
}
function Jh(e, t, r) {
  var n = !1,
    o = yr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null ? (i = lt(i)) : ((o = Ue(t) ? Nr : je.current), (n = t.contextTypes), (i = (n = n != null) ? hn(e, o) : yr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ha),
    (e.stateNode = t),
    (t._reactInternals = e),
    n && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Zf(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ha.enqueueReplaceState(t, t.state, null);
}
function su(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = qh), _c(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (o.context = lt(i)) : ((i = Ue(t) ? Nr : je.current), (o.context = hn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (au(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
      t !== o.state && ha.enqueueReplaceState(o, o.state, null),
      sl(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mn(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(R(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(R(147, e));
      var o = n,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === qh && (a = o.refs = {}), l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!r._owner) throw Error(R(290, e));
  }
  return e;
}
function ni(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function ed(e) {
  var t = e._init;
  return t(e._payload);
}
function Zh(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
    }
  }
  function r(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function n(m, h) {
    for (m = new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = pr(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, g) {
    return (m.index = g), e ? ((g = m.alternate), g !== null ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g) : ((m.flags |= 2), h)) : ((m.flags |= 1048576), h);
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, g, _) {
    return h === null || h.tag !== 6 ? ((h = cs(g, m.mode, _)), (h.return = m), h) : ((h = o(h, g)), (h.return = m), h);
  }
  function s(m, h, g, _) {
    var x = g.type;
    return x === Kr
      ? f(m, h, g.props.children, _, g.key)
      : h !== null && (h.elementType === x || (typeof x == "object" && x !== null && x.$$typeof === Zt && ed(x) === h.type))
      ? ((_ = o(h, g.props)), (_.ref = Mn(m, h, g)), (_.return = m), _)
      : ((_ = bi(g.type, g.key, g.props, null, m.mode, _)), (_.ref = Mn(m, h, g)), (_.return = m), _);
  }
  function u(m, h, g, _) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation
      ? ((h = fs(g, m.mode, _)), (h.return = m), h)
      : ((h = o(h, g.children || [])), (h.return = m), h);
  }
  function f(m, h, g, _, x) {
    return h === null || h.tag !== 7 ? ((h = br(g, m.mode, _, x)), (h.return = m), h) : ((h = o(h, g)), (h.return = m), h);
  }
  function c(m, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number") return (h = cs("" + h, m.mode, g)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Go:
          return (g = bi(h.type, h.key, h.props, null, m.mode, g)), (g.ref = Mn(m, null, h)), (g.return = m), g;
        case Qr:
          return (h = fs(h, m.mode, g)), (h.return = m), h;
        case Zt:
          var _ = h._init;
          return c(m, _(h._payload), g);
      }
      if (Xn(h) || Tn(h)) return (h = br(h, m.mode, g, null)), (h.return = m), h;
      ni(m, h);
    }
    return null;
  }
  function d(m, h, g, _) {
    var x = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number") return x !== null ? null : a(m, h, "" + g, _);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Go:
          return g.key === x ? s(m, h, g, _) : null;
        case Qr:
          return g.key === x ? u(m, h, g, _) : null;
        case Zt:
          return (x = g._init), d(m, h, x(g._payload), _);
      }
      if (Xn(g) || Tn(g)) return x !== null ? null : f(m, h, g, _, null);
      ni(m, g);
    }
    return null;
  }
  function p(m, h, g, _, x) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number") return (m = m.get(g) || null), a(h, m, "" + _, x);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Go:
          return (m = m.get(_.key === null ? g : _.key) || null), s(h, m, _, x);
        case Qr:
          return (m = m.get(_.key === null ? g : _.key) || null), u(h, m, _, x);
        case Zt:
          var O = _._init;
          return p(m, h, g, O(_._payload), x);
      }
      if (Xn(_) || Tn(_)) return (m = m.get(g) || null), f(h, m, _, x, null);
      ni(h, _);
    }
    return null;
  }
  function y(m, h, g, _) {
    for (var x = null, O = null, P = h, E = (h = 0), T = null; P !== null && E < g.length; E++) {
      P.index > E ? ((T = P), (P = null)) : (T = P.sibling);
      var k = d(m, P, g[E], _);
      if (k === null) {
        P === null && (P = T);
        break;
      }
      e && P && k.alternate === null && t(m, P), (h = i(k, h, E)), O === null ? (x = k) : (O.sibling = k), (O = k), (P = T);
    }
    if (E === g.length) return r(m, P), se && Pr(m, E), x;
    if (P === null) {
      for (; E < g.length; E++) (P = c(m, g[E], _)), P !== null && ((h = i(P, h, E)), O === null ? (x = P) : (O.sibling = P), (O = P));
      return se && Pr(m, E), x;
    }
    for (P = n(m, P); E < g.length; E++)
      (T = p(P, m, E, g[E], _)),
        T !== null && (e && T.alternate !== null && P.delete(T.key === null ? E : T.key), (h = i(T, h, E)), O === null ? (x = T) : (O.sibling = T), (O = T));
    return (
      e &&
        P.forEach(function (z) {
          return t(m, z);
        }),
      se && Pr(m, E),
      x
    );
  }
  function v(m, h, g, _) {
    var x = Tn(g);
    if (typeof x != "function") throw Error(R(150));
    if (((g = x.call(g)), g == null)) throw Error(R(151));
    for (var O = (x = null), P = h, E = (h = 0), T = null, k = g.next(); P !== null && !k.done; E++, k = g.next()) {
      P.index > E ? ((T = P), (P = null)) : (T = P.sibling);
      var z = d(m, P, k.value, _);
      if (z === null) {
        P === null && (P = T);
        break;
      }
      e && P && z.alternate === null && t(m, P), (h = i(z, h, E)), O === null ? (x = z) : (O.sibling = z), (O = z), (P = T);
    }
    if (k.done) return r(m, P), se && Pr(m, E), x;
    if (P === null) {
      for (; !k.done; E++, k = g.next()) (k = c(m, k.value, _)), k !== null && ((h = i(k, h, E)), O === null ? (x = k) : (O.sibling = k), (O = k));
      return se && Pr(m, E), x;
    }
    for (P = n(m, P); !k.done; E++, k = g.next())
      (k = p(P, m, E, k.value, _)),
        k !== null && (e && k.alternate !== null && P.delete(k.key === null ? E : k.key), (h = i(k, h, E)), O === null ? (x = k) : (O.sibling = k), (O = k));
    return (
      e &&
        P.forEach(function (D) {
          return t(m, D);
        }),
      se && Pr(m, E),
      x
    );
  }
  function S(m, h, g, _) {
    if ((typeof g == "object" && g !== null && g.type === Kr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null)) {
      switch (g.$$typeof) {
        case Go:
          e: {
            for (var x = g.key, O = h; O !== null; ) {
              if (O.key === x) {
                if (((x = g.type), x === Kr)) {
                  if (O.tag === 7) {
                    r(m, O.sibling), (h = o(O, g.props.children)), (h.return = m), (m = h);
                    break e;
                  }
                } else if (O.elementType === x || (typeof x == "object" && x !== null && x.$$typeof === Zt && ed(x) === O.type)) {
                  r(m, O.sibling), (h = o(O, g.props)), (h.ref = Mn(m, O, g)), (h.return = m), (m = h);
                  break e;
                }
                r(m, O);
                break;
              } else t(m, O);
              O = O.sibling;
            }
            g.type === Kr
              ? ((h = br(g.props.children, m.mode, _, g.key)), (h.return = m), (m = h))
              : ((_ = bi(g.type, g.key, g.props, null, m.mode, _)), (_.ref = Mn(m, h, g)), (_.return = m), (m = _));
          }
          return l(m);
        case Qr:
          e: {
            for (O = g.key; h !== null; ) {
              if (h.key === O)
                if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                  r(m, h.sibling), (h = o(h, g.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  r(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = fs(g, m.mode, _)), (h.return = m), (m = h);
          }
          return l(m);
        case Zt:
          return (O = g._init), S(m, h, O(g._payload), _);
      }
      if (Xn(g)) return y(m, h, g, _);
      if (Tn(g)) return v(m, h, g, _);
      ni(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g), h !== null && h.tag === 6 ? (r(m, h.sibling), (h = o(h, g)), (h.return = m), (m = h)) : (r(m, h), (h = cs(g, m.mode, _)), (h.return = m), (m = h)), l(m))
      : r(m, h);
  }
  return S;
}
var vn = Zh(!0),
  ey = Zh(!1),
  Ao = {},
  kt = wr(Ao),
  xo = wr(Ao),
  Po = wr(Ao);
function $r(e) {
  if (e === Ao) throw Error(R(174));
  return e;
}
function Sc(e, t) {
  switch ((ne(Po, t), ne(xo, e), ne(kt, Ao), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Fs(t, e));
  }
  le(kt), ne(kt, t);
}
function gn() {
  le(kt), le(xo), le(Po);
}
function ty(e) {
  $r(Po.current);
  var t = $r(kt.current),
    r = Fs(t, e.type);
  t !== r && (ne(xo, e), ne(kt, r));
}
function xc(e) {
  xo.current === e && (le(kt), le(xo));
}
var ue = wr(0);
function ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var os = [];
function Pc() {
  for (var e = 0; e < os.length; e++) os[e]._workInProgressVersionPrimary = null;
  os.length = 0;
}
var Oi = Qt.ReactCurrentDispatcher,
  is = Qt.ReactCurrentBatchConfig,
  jr = 0,
  ce = null,
  we = null,
  xe = null,
  cl = !1,
  oo = !1,
  Oo = 0,
  e_ = 0;
function ke() {
  throw Error(R(321));
}
function Oc(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!ht(e[r], t[r])) return !1;
  return !0;
}
function Ec(e, t, r, n, o, i) {
  if (((jr = i), (ce = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Oi.current = e === null || e.memoizedState === null ? o_ : i_), (e = r(n, o)), oo)) {
    i = 0;
    do {
      if (((oo = !1), (Oo = 0), 25 <= i)) throw Error(R(301));
      (i += 1), (xe = we = null), (t.updateQueue = null), (Oi.current = l_), (e = r(n, o));
    } while (oo);
  }
  if (((Oi.current = fl), (t = we !== null && we.next !== null), (jr = 0), (xe = we = ce = null), (cl = !1), t)) throw Error(R(300));
  return e;
}
function Cc() {
  var e = Oo !== 0;
  return (Oo = 0), e;
}
function _t() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function at() {
  if (we === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = xe === null ? ce.memoizedState : xe.next;
  if (t !== null) (xe = t), (we = e);
  else {
    if (e === null) throw Error(R(310));
    (we = e),
      (e = { memoizedState: we.memoizedState, baseState: we.baseState, baseQueue: we.baseQueue, queue: we.queue, next: null }),
      xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function Eo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ls(e) {
  var t = at(),
    r = t.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = we,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var a = (l = null),
      s = null,
      u = i;
    do {
      var f = u.lane;
      if ((jr & f) === f)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var c = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        s === null ? ((a = s = c), (l = n)) : (s = s.next = c), (ce.lanes |= f), (zr |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (l = n) : (s.next = a), ht(n, t.memoizedState) || (Be = !0), (t.memoizedState = n), (t.baseState = l), (t.baseQueue = s), (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ce.lanes |= i), (zr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function as(e) {
  var t = at(),
    r = t.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    ht(i, t.memoizedState) || (Be = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (r.lastRenderedState = i);
  }
  return [i, n];
}
function ry() {}
function ny(e, t) {
  var r = ce,
    n = at(),
    o = t(),
    i = !ht(n.memoizedState, o);
  if ((i && ((n.memoizedState = o), (Be = !0)), (n = n.queue), $c(ly.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))) {
    if (((r.flags |= 2048), Co(9, iy.bind(null, r, n, o, t), void 0, null), Pe === null)) throw Error(R(349));
    jr & 30 || oy(r, t, o);
  }
  return o;
}
function oy(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ce.updateQueue),
    t === null ? ((t = { lastEffect: null, stores: null }), (ce.updateQueue = t), (t.stores = [e])) : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function iy(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), ay(t) && sy(e);
}
function ly(e, t, r) {
  return r(function () {
    ay(t) && sy(e);
  });
}
function ay(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !ht(e, r);
  } catch {
    return !0;
  }
}
function sy(e) {
  var t = Ht(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function td(e) {
  var t = _t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = n_.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function Co(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ce.updateQueue = t), (t.lastEffect = e.next = e))
      : ((r = t.lastEffect), r === null ? (t.lastEffect = e.next = e) : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function uy() {
  return at().memoizedState;
}
function Ei(e, t, r, n) {
  var o = _t();
  (ce.flags |= e), (o.memoizedState = Co(1 | t, r, void 0, n === void 0 ? null : n));
}
function ya(e, t, r, n) {
  var o = at();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (we !== null) {
    var l = we.memoizedState;
    if (((i = l.destroy), n !== null && Oc(n, l.deps))) {
      o.memoizedState = Co(t, r, i, n);
      return;
    }
  }
  (ce.flags |= e), (o.memoizedState = Co(1 | t, r, i, n));
}
function rd(e, t) {
  return Ei(8390656, 8, e, t);
}
function $c(e, t) {
  return ya(2048, 8, e, t);
}
function cy(e, t) {
  return ya(4, 2, e, t);
}
function fy(e, t) {
  return ya(4, 4, e, t);
}
function dy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function py(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), ya(4, 4, dy.bind(null, t, e), r);
}
function kc() {}
function my(e, t) {
  var r = at();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Oc(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e);
}
function hy(e, t) {
  var r = at();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Oc(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e);
}
function yy(e, t, r) {
  return jr & 21 ? (ht(r, t) || ((r = wh()), (ce.lanes |= r), (zr |= r), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = r));
}
function t_(e, t) {
  var r = te;
  (te = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = is.transition;
  is.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = r), (is.transition = n);
  }
}
function vy() {
  return at().memoizedState;
}
function r_(e, t, r) {
  var n = dr(e);
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), gy(e))) wy(t, r);
  else if (((r = Xh(e, t, r, n)), r !== null)) {
    var o = Le();
    pt(r, e, n, o), _y(r, t, n);
  }
}
function n_(e, t, r) {
  var n = dr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (gy(e)) wy(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          a = i(l, r);
        if (((o.hasEagerState = !0), (o.eagerState = a), ht(a, l))) {
          var s = t.interleaved;
          s === null ? ((o.next = o), wc(t)) : ((o.next = s.next), (s.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = Xh(e, t, o, n)), r !== null && ((o = Le()), pt(r, e, n, o), _y(r, t, n));
  }
}
function gy(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function wy(e, t) {
  oo = cl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
}
function _y(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), ic(e, r);
  }
}
var fl = {
    readContext: lt,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  o_ = {
    readContext: lt,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: rd,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), Ei(4194308, 4, dy.bind(null, t, e), r);
    },
    useLayoutEffect: function (e, t) {
      return Ei(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ei(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = _t();
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, r) {
      var n = _t();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (n.queue = e),
        (e = e.dispatch = r_.bind(null, ce, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: td,
    useDebugValue: kc,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = td(!1),
        t = e[0];
      return (e = t_.bind(null, e[1])), (_t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = ce,
        o = _t();
      if (se) {
        if (r === void 0) throw Error(R(407));
        r = r();
      } else {
        if (((r = t()), Pe === null)) throw Error(R(349));
        jr & 30 || oy(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (o.queue = i), rd(ly.bind(null, n, i, e), [e]), (n.flags |= 2048), Co(9, iy.bind(null, n, i, r, t), void 0, null), r;
    },
    useId: function () {
      var e = _t(),
        t = Pe.identifierPrefix;
      if (se) {
        var r = Mt,
          n = Lt;
        (r = (n & ~(1 << (32 - dt(n) - 1))).toString(32) + r), (t = ":" + t + "R" + r), (r = Oo++), 0 < r && (t += "H" + r.toString(32)), (t += ":");
      } else (r = e_++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  i_ = {
    readContext: lt,
    useCallback: my,
    useContext: lt,
    useEffect: $c,
    useImperativeHandle: py,
    useInsertionEffect: cy,
    useLayoutEffect: fy,
    useMemo: hy,
    useReducer: ls,
    useRef: uy,
    useState: function () {
      return ls(Eo);
    },
    useDebugValue: kc,
    useDeferredValue: function (e) {
      var t = at();
      return yy(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ls(Eo)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: ry,
    useSyncExternalStore: ny,
    useId: vy,
    unstable_isNewReconciler: !1,
  },
  l_ = {
    readContext: lt,
    useCallback: my,
    useContext: lt,
    useEffect: $c,
    useImperativeHandle: py,
    useInsertionEffect: cy,
    useLayoutEffect: fy,
    useMemo: hy,
    useReducer: as,
    useRef: uy,
    useState: function () {
      return as(Eo);
    },
    useDebugValue: kc,
    useDeferredValue: function (e) {
      var t = at();
      return we === null ? (t.memoizedState = e) : yy(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = as(Eo)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: ry,
    useSyncExternalStore: ny,
    useId: vy,
    unstable_isNewReconciler: !1,
  };
function wn(e, t) {
  try {
    var r = "",
      n = t;
    do (r += z1(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ss(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function uu(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var a_ = typeof WeakMap == "function" ? WeakMap : Map;
function Sy(e, t, r) {
  (r = At(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      pl || ((pl = !0), (wu = n)), uu(e, t);
    }),
    r
  );
}
function xy(e, t, r) {
  (r = At(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        uu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        uu(e, t), typeof n != "function" && (fr === null ? (fr = new Set([this])) : fr.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
      }),
    r
  );
}
function nd(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new a_();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = S_.bind(null, e, t, r)), t.then(e, e));
}
function od(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function id(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 && (r.alternate === null ? (r.tag = 17) : ((t = At(-1, 1)), (t.tag = 2), cr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var s_ = Qt.ReactCurrentOwner,
  Be = !1;
function Ie(e, t, r, n) {
  t.child = e === null ? ey(t, null, r, n) : vn(t, e.child, r, n);
}
function ld(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    cn(t, o),
    (n = Ec(e, t, r, n, i, o)),
    (r = Cc()),
    e !== null && !Be ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Wt(e, t, o)) : (se && r && pc(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
  );
}
function ad(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !Lc(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Py(e, t, i, n, o))
      : ((e = bi(r.type, null, n, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((r = r.compare), (r = r !== null ? r : go), r(l, n) && e.ref === t.ref)) return Wt(e, t, o);
  }
  return (t.flags |= 1), (e = pr(i, n)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Py(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (go(i, n) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), Wt(e, t, o);
  }
  return cu(e, t, r, n, o);
}
function Oy(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ne(on, Ke), (Ke |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ne(on, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (n = i !== null ? i.baseLanes : r), ne(on, Ke), (Ke |= n);
    }
  else i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r), ne(on, Ke), (Ke |= n);
  return Ie(e, t, o, r), t.child;
}
function Ey(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function cu(e, t, r, n, o) {
  var i = Ue(r) ? Nr : je.current;
  return (
    (i = hn(t, i)),
    cn(t, o),
    (r = Ec(e, t, r, n, i, o)),
    (n = Cc()),
    e !== null && !Be ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Wt(e, t, o)) : (se && n && pc(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
  );
}
function sd(e, t, r, n, o) {
  if (Ue(r)) {
    var i = !0;
    nl(t);
  } else i = !1;
  if ((cn(t, o), t.stateNode === null)) Ci(e, t), Jh(t, r, n), su(t, r, n, o), (n = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = r.contextType;
    typeof u == "object" && u !== null ? (u = lt(u)) : ((u = Ue(r) ? Nr : je.current), (u = hn(t, u)));
    var f = r.getDerivedStateFromProps,
      c = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    c || (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") || ((a !== n || s !== u) && Zf(t, l, n, u)), (er = !1);
    var d = t.memoizedState;
    (l.state = d),
      sl(t, n, l, o),
      (s = t.memoizedState),
      a !== n || d !== s || Ve.current || er
        ? (typeof f == "function" && (au(t, r, f, n), (s = t.memoizedState)),
          (a = er || Jf(t, r, a, n, d, s, u))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = n), (t.memoizedState = s)),
          (l.props = n),
          (l.state = s),
          (l.context = u),
          (n = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (n = !1));
  } else {
    (l = t.stateNode),
      Yh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ut(t.type, a)),
      (l.props = u),
      (c = t.pendingProps),
      (d = l.context),
      (s = r.contextType),
      typeof s == "object" && s !== null ? (s = lt(s)) : ((s = Ue(r) ? Nr : je.current), (s = hn(t, s)));
    var p = r.getDerivedStateFromProps;
    (f = typeof p == "function" || typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((a !== c || d !== s) && Zf(t, l, n, s)),
      (er = !1),
      (d = t.memoizedState),
      (l.state = d),
      sl(t, n, l, o);
    var y = t.memoizedState;
    a !== c || d !== y || Ve.current || er
      ? (typeof p == "function" && (au(t, r, p, n), (y = t.memoizedState)),
        (u = er || Jf(t, r, u, n, d, y, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(n, y, s),
              typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(n, y, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (l.props = n),
        (l.state = y),
        (l.context = s),
        (n = u))
      : (typeof l.componentDidUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
        (n = !1));
  }
  return fu(e, t, r, n, i, o);
}
function fu(e, t, r, n, o, i) {
  Ey(e, t);
  var l = (t.flags & 128) !== 0;
  if (!n && !l) return o && Qf(t, r, !1), Wt(e, t, i);
  (n = t.stateNode), (s_.current = t);
  var a = l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1), e !== null && l ? ((t.child = vn(t, e.child, null, i)), (t.child = vn(t, null, a, i))) : Ie(e, t, a, i), (t.memoizedState = n.state), o && Qf(t, r, !0), t.child
  );
}
function Cy(e) {
  var t = e.stateNode;
  t.pendingContext ? Gf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gf(e, t.context, !1), Sc(e, t.containerInfo);
}
function ud(e, t, r, n, o) {
  return yn(), hc(o), (t.flags |= 256), Ie(e, t, r, n), t.child;
}
var du = { dehydrated: null, treeContext: null, retryLane: 0 };
function pu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $y(e, t, r) {
  var n = t.pendingProps,
    o = ue.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ue, o & 1),
    e === null)
  )
    return (
      iu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(n & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = wa(l, n, 0, null)),
              (e = br(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = pu(r)),
              (t.memoizedState = du),
              e)
            : bc(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return u_(e, t, l, n, a, o, r);
  if (i) {
    (i = n.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: n.children };
    return (
      !(l & 1) && t.child !== o ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = s), (t.deletions = null)) : ((n = pr(o, s)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = pr(a, i)) : ((i = br(i, l, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? pu(r) : { baseLanes: l.baseLanes | r, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = du),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = pr(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null && ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function bc(e, t) {
  return (t = wa({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function oi(e, t, r, n) {
  return n !== null && hc(n), vn(t, e.child, null, r), (e = bc(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function u_(e, t, r, n, o, i, l) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = ss(Error(R(422)))), oi(e, t, l, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = wa({ mode: "visible", children: n.children }, o, 0, null)),
        (i = br(i, o, l, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && vn(t, e.child, null, l),
        (t.child.memoizedState = pu(l)),
        (t.memoizedState = du),
        i);
  if (!(t.mode & 1)) return oi(e, t, l, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(R(419))), (n = ss(i, n, void 0)), oi(e, t, l, n);
  }
  if (((a = (l & e.childLanes) !== 0), Be || a)) {
    if (((n = Pe), n !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | l) ? 0 : o), o !== 0 && o !== i.retryLane && ((i.retryLane = o), Ht(e, o), pt(n, e, o, -1));
    }
    return Ic(), (n = ss(Error(R(421)))), oi(e, t, l, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = x_.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Xe = ur(o.nextSibling)),
      (qe = t),
      (se = !0),
      (ft = null),
      e !== null && ((rt[nt++] = Lt), (rt[nt++] = Mt), (rt[nt++] = Tr), (Lt = e.id), (Mt = e.overflow), (Tr = t)),
      (t = bc(t, n.children)),
      (t.flags |= 4096),
      t);
}
function cd(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), lu(e.return, t, r);
}
function us(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o })
    : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = n), (i.tail = r), (i.tailMode = o));
}
function ky(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((Ie(e, t, n.children, r), (n = ue.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cd(e, r, t);
        else if (e.tag === 19) cd(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((ne(ue, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; ) (e = r.alternate), e !== null && ul(e) === null && (o = r), (r = r.sibling);
        (r = o), r === null ? ((o = t.child), (t.child = null)) : ((o = r.sibling), (r.sibling = null)), us(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ul(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        us(t, !0, r, null, i);
        break;
      case "together":
        us(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ci(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wt(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (zr |= t.lanes), !(r & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, r = pr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) (e = e.sibling), (r = r.sibling = pr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function c_(e, t, r) {
  switch (t.tag) {
    case 3:
      Cy(t), yn();
      break;
    case 5:
      ty(t);
      break;
    case 1:
      Ue(t.type) && nl(t);
      break;
    case 4:
      Sc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      ne(ll, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ne(ue, ue.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? $y(e, t, r)
          : (ne(ue, ue.current & 1), (e = Wt(e, t, r)), e !== null ? e.sibling : null);
      ne(ue, ue.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return ky(e, t, r);
        t.flags |= 128;
      }
      if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), ne(ue, ue.current), n)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Oy(e, t, r);
  }
  return Wt(e, t, r);
}
var by, mu, Ry, Ny;
by = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
mu = function () {};
Ry = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), $r(kt.current);
    var i = null;
    switch (r) {
      case "input":
        (o = Ls(e, o)), (n = Ls(e, n)), (i = []);
        break;
      case "select":
        (o = fe({}, o, { value: void 0 })), (n = fe({}, n, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (o = Ds(e, o)), (n = Ds(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = tl);
    }
    Bs(r, n);
    var l;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (co.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in n) {
      var s = n[u];
      if (((a = o != null ? o[u] : void 0), n.hasOwnProperty(u) && s !== a && (s != null || a != null)))
        if (u === "style")
          if (a) {
            for (l in a) !a.hasOwnProperty(l) || (s && s.hasOwnProperty(l)) || (r || (r = {}), (r[l] = ""));
            for (l in s) s.hasOwnProperty(l) && a[l] !== s[l] && (r || (r = {}), (r[l] = s[l]));
          } else r || (i || (i = []), i.push(u, r)), (r = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0), (a = a ? a.__html : void 0), s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (co.hasOwnProperty(u) ? (s != null && u === "onScroll" && ie("scroll", e), i || a === s || (i = [])) : (i = i || []).push(u, s));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ny = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function An(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling);
        n === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null);
    }
}
function be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t) for (var o = e.child; o !== null; ) (r |= o.lanes | o.childLanes), (n |= o.subtreeFlags & 14680064), (n |= o.flags & 14680064), (o.return = e), (o = o.sibling);
  else for (o = e.child; o !== null; ) (r |= o.lanes | o.childLanes), (n |= o.subtreeFlags), (n |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function f_(e, t, r) {
  var n = t.pendingProps;
  switch ((mc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return be(t), null;
    case 1:
      return Ue(t.type) && rl(), be(t), null;
    case 3:
      return (
        (n = t.stateNode),
        gn(),
        le(Ve),
        le(je),
        Pc(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (ri(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), ft !== null && (xu(ft), (ft = null)))),
        mu(e, t),
        be(t),
        null
      );
    case 5:
      xc(t);
      var o = $r(Po.current);
      if (((r = t.type), e !== null && t.stateNode != null)) Ry(e, t, r, n, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(R(166));
          return be(t), null;
        }
        if (((e = $r(kt.current)), ri(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Pt] = t), (n[So] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              ie("cancel", n), ie("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qn.length; o++) ie(qn[o], n);
              break;
            case "source":
              ie("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", n), ie("load", n);
              break;
            case "details":
              ie("toggle", n);
              break;
            case "input":
              wf(n, i), ie("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }), ie("invalid", n);
              break;
            case "textarea":
              Sf(n, i), ie("invalid", n);
          }
          Bs(r, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? n.textContent !== a && (i.suppressHydrationWarning !== !0 && ti(n.textContent, a, e), (o = ["children", a]))
                  : typeof a == "number" && n.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ti(n.textContent, a, e), (o = ["children", "" + a]))
                : co.hasOwnProperty(l) && a != null && l === "onScroll" && ie("scroll", n);
            }
          switch (r) {
            case "input":
              Qo(n), _f(n, i, !0);
              break;
            case "textarea":
              Qo(n), xf(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = tl);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = oh(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = l.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = l.createElement(r, { is: n.is }))
                : ((e = l.createElement(r)), r === "select" && ((l = e), n.multiple ? (l.multiple = !0) : n.size && (l.size = n.size)))
              : (e = l.createElementNS(e, r)),
            (e[Pt] = t),
            (e[So] = n),
            by(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Vs(r, n)), r)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < qn.length; o++) ie(qn[o], e);
                o = n;
                break;
              case "source":
                ie("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (o = n);
                break;
              case "details":
                ie("toggle", e), (o = n);
                break;
              case "input":
                wf(e, n), (o = Ls(e, n)), ie("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }), (o = fe({}, n, { value: void 0 })), ie("invalid", e);
                break;
              case "textarea":
                Sf(e, n), (o = Ds(e, n)), ie("invalid", e);
                break;
              default:
                o = n;
            }
            Bs(r, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? ah(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ih(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (r !== "textarea" || s !== "") && fo(e, s)
                    : typeof s == "number" && fo(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (co.hasOwnProperty(i) ? s != null && i === "onScroll" && ie("scroll", e) : s != null && Zu(e, i, s, l));
              }
            switch (r) {
              case "input":
                Qo(e), _f(e, n, !1);
                break;
              case "textarea":
                Qo(e), xf(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + hr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple), (i = n.value), i != null ? ln(e, !!n.multiple, i, !1) : n.defaultValue != null && ln(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = tl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return be(t), null;
    case 6:
      if (e && t.stateNode != null) Ny(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(R(166));
        if (((r = $r(Po.current)), $r(kt.current), ri(t))) {
          if (((n = t.stateNode), (r = t.memoizedProps), (n[Pt] = t), (i = n.nodeValue !== r) && ((e = qe), e !== null)))
            switch (e.tag) {
              case 3:
                ti(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ti(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)), (n[Pt] = t), (t.stateNode = n);
      }
      return be(t), null;
    case 13:
      if ((le(ue), (n = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (se && Xe !== null && t.mode & 1 && !(t.flags & 128)) Kh(), yn(), (t.flags |= 98560), (i = !1);
        else if (((i = ri(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(R(317));
            i[Pt] = t;
          } else yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          be(t), (i = !1);
        } else ft !== null && (xu(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) && n && ((t.child.flags |= 8192), t.mode & 1 && (e === null || ue.current & 1 ? _e === 0 && (_e = 3) : Ic())),
          t.updateQueue !== null && (t.flags |= 4),
          be(t),
          null);
    case 4:
      return gn(), mu(e, t), e === null && wo(t.stateNode.containerInfo), be(t), null;
    case 10:
      return gc(t.type._context), be(t), null;
    case 17:
      return Ue(t.type) && rl(), be(t), null;
    case 19:
      if ((le(ue), (i = t.memoizedState), i === null)) return be(t), null;
      if (((n = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (n) An(i, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ul(e)), l !== null)) {
                for (t.flags |= 128, An(i, !1), n = l.updateQueue, n !== null && ((t.updateQueue = n), (t.flags |= 4)), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (r = r.sibling);
                return ne(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && me() > _n && ((t.flags |= 128), (n = !0), An(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ul(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              An(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !se)
            )
              return be(t), null;
          } else 2 * me() - i.renderingStartTime > _n && r !== 1073741824 && ((t.flags |= 128), (n = !0), An(i, !1), (t.lanes = 4194304));
        i.isBackwards ? ((l.sibling = t.child), (t.child = l)) : ((r = i.last), r !== null ? (r.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = me()), (t.sibling = null), (r = ue.current), ne(ue, n ? (r & 1) | 2 : r & 1), t)
        : (be(t), null);
    case 22:
    case 23:
      return (
        zc(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1 ? Ke & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function d_(e, t) {
  switch ((mc(t), t.tag)) {
    case 1:
      return Ue(t.type) && rl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return gn(), le(Ve), le(je), Pc(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return xc(t), null;
    case 13:
      if ((le(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        yn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return le(ue), null;
    case 4:
      return gn(), null;
    case 10:
      return gc(t.type._context), null;
    case 22:
    case 23:
      return zc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ii = !1,
  Te = !1,
  p_ = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function nn(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        pe(e, t, n);
      }
    else r.current = null;
}
function hu(e, t, r) {
  try {
    r();
  } catch (n) {
    pe(e, t, n);
  }
}
var fd = !1;
function m_(e, t) {
  if (((Js = Ji), (e = Ih()), dc(e))) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              c !== r || (o !== 0 && c.nodeType !== 3) || (a = l + o),
                c !== i || (n !== 0 && c.nodeType !== 3) || (s = l + n),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (p = c.firstChild) !== null;

            )
              (d = c), (c = p);
            for (;;) {
              if (c === e) break t;
              if ((d === r && ++u === o && (a = l), d === i && ++f === n && (s = l), (p = c.nextSibling) !== null)) break;
              (c = d), (d = c.parentNode);
            }
            c = p;
          }
          r = a === -1 || s === -1 ? null : { start: a, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Zs = { focusedElem: e, selectionRange: r }, Ji = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    S = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ut(t.type, v), S);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1 ? (g.textContent = "") : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (_) {
          pe(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (y = fd), (fd = !1), y;
}
function io(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && hu(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function va(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function yu(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ty(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ty(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Pt], delete t[So], delete t[ru], delete t[Yw], delete t[qw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jy(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function vu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = tl));
  else if (n !== 4 && ((e = e.child), e !== null)) for (vu(e, t, r), e = e.sibling; e !== null; ) vu(e, t, r), (e = e.sibling);
}
function gu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null)) for (gu(e, t, r), e = e.sibling; e !== null; ) gu(e, t, r), (e = e.sibling);
}
var Oe = null,
  ct = !1;
function Yt(e, t, r) {
  for (r = r.child; r !== null; ) zy(e, t, r), (r = r.sibling);
}
function zy(e, t, r) {
  if ($t && typeof $t.onCommitFiberUnmount == "function")
    try {
      $t.onCommitFiberUnmount(ua, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Te || nn(r, t);
    case 6:
      var n = Oe,
        o = ct;
      (Oe = null),
        Yt(e, t, r),
        (Oe = n),
        (ct = o),
        Oe !== null && (ct ? ((e = Oe), (r = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Oe.removeChild(r.stateNode));
      break;
    case 18:
      Oe !== null && (ct ? ((e = Oe), (r = r.stateNode), e.nodeType === 8 ? rs(e.parentNode, r) : e.nodeType === 1 && rs(e, r), yo(e)) : rs(Oe, r.stateNode));
      break;
    case 4:
      (n = Oe), (o = ct), (Oe = r.stateNode.containerInfo), (ct = !0), Yt(e, t, r), (Oe = n), (ct = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Te && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        o = n = n.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && hu(r, t, l), (o = o.next);
        } while (o !== n);
      }
      Yt(e, t, r);
      break;
    case 1:
      if (!Te && (nn(r, t), (n = r.stateNode), typeof n.componentWillUnmount == "function"))
        try {
          (n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount();
        } catch (a) {
          pe(r, t, a);
        }
      Yt(e, t, r);
      break;
    case 21:
      Yt(e, t, r);
      break;
    case 22:
      r.mode & 1 ? ((Te = (n = Te) || r.memoizedState !== null), Yt(e, t, r), (Te = n)) : Yt(e, t, r);
      break;
    default:
      Yt(e, t, r);
  }
}
function pd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new p_()),
      t.forEach(function (n) {
        var o = P_.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function st(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Oe = a.stateNode), (ct = !1);
              break e;
            case 3:
              (Oe = a.stateNode.containerInfo), (ct = !0);
              break e;
            case 4:
              (Oe = a.stateNode.containerInfo), (ct = !0);
              break e;
          }
          a = a.return;
        }
        if (Oe === null) throw Error(R(160));
        zy(i, l, o), (Oe = null), (ct = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Iy(t, e), (t = t.sibling);
}
function Iy(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), wt(e), n & 4)) {
        try {
          io(3, e, e.return), va(3, e);
        } catch (v) {
          pe(e, e.return, v);
        }
        try {
          io(5, e, e.return);
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      break;
    case 1:
      st(t, e), wt(e), n & 512 && r !== null && nn(r, r.return);
      break;
    case 5:
      if ((st(t, e), wt(e), n & 512 && r !== null && nn(r, r.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          fo(o, "");
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = r !== null ? r.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && rh(o, i), Vs(a, l);
            var u = Vs(a, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                c = s[l + 1];
              f === "style" ? ah(o, c) : f === "dangerouslySetInnerHTML" ? ih(o, c) : f === "children" ? fo(o, c) : Zu(o, f, c, u);
            }
            switch (a) {
              case "input":
                Ms(o, i);
                break;
              case "textarea":
                nh(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? ln(o, !!i.multiple, p, !1)
                  : d !== !!i.multiple && (i.defaultValue != null ? ln(o, !!i.multiple, i.defaultValue, !0) : ln(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[So] = i;
          } catch (v) {
            pe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((st(t, e), wt(e), n & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((st(t, e), wt(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          yo(t.containerInfo);
        } catch (v) {
          pe(e, e.return, v);
        }
      break;
    case 4:
      st(t, e), wt(e);
      break;
    case 13:
      st(t, e),
        wt(e),
        (o = e.child),
        o.flags & 8192 && ((i = o.memoizedState !== null), (o.stateNode.isHidden = i), !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Tc = me())),
        n & 4 && pd(e);
      break;
    case 22:
      if (((f = r !== null && r.memoizedState !== null), e.mode & 1 ? ((Te = (u = Te) || f), st(t, e), (Te = u)) : st(t, e), wt(e), n & 8192)) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !f && e.mode & 1))
          for (A = e, f = e.child; f !== null; ) {
            for (c = A = f; A !== null; ) {
              switch (((d = A), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  io(4, d, d.return);
                  break;
                case 1:
                  nn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (n = d), (r = d.return);
                    try {
                      (t = n), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch (v) {
                      pe(n, r, v);
                    }
                  }
                  break;
                case 5:
                  nn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    hd(c);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (A = p)) : hd(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none"))
                    : ((a = c.stateNode), (s = c.memoizedProps.style), (l = s != null && s.hasOwnProperty("display") ? s.display : null), (a.style.display = lh("display", l)));
              } catch (v) {
                pe(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (v) {
                pe(e, e.return, v);
              }
          } else if (((c.tag !== 22 && c.tag !== 23) || c.memoizedState === null || c === e) && c.child !== null) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      st(t, e), wt(e), n & 4 && pd(e);
      break;
    case 21:
      break;
    default:
      st(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (jy(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(R(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (fo(o, ""), (n.flags &= -33));
          var i = dd(e);
          gu(e, i, o);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo,
            a = dd(e);
          vu(e, a, l);
          break;
        default:
          throw Error(R(161));
      }
    } catch (s) {
      pe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function h_(e, t, r) {
  (A = e), Ly(e);
}
function Ly(e, t, r) {
  for (var n = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && n) {
      var l = o.memoizedState !== null || ii;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Te;
        a = ii;
        var u = Te;
        if (((ii = l), (Te = s) && !u))
          for (A = o; A !== null; ) (l = A), (s = l.child), l.tag === 22 && l.memoizedState !== null ? yd(o) : s !== null ? ((s.return = l), (A = s)) : yd(o);
        for (; i !== null; ) (A = i), Ly(i), (i = i.sibling);
        (A = o), (ii = a), (Te = u);
      }
      md(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : md(e);
  }
}
function md(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || va(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Te)
                if (r === null) n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : ut(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && qf(t, i, n);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                qf(t, l, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && r.focus();
                    break;
                  case "img":
                    s.src && (r.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && yo(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Te || (t.flags & 512 && yu(t));
      } catch (d) {
        pe(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (A = r);
      break;
    }
    A = t.return;
  }
}
function hd(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (A = r);
      break;
    }
    A = t.return;
  }
}
function yd(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            va(4, t);
          } catch (s) {
            pe(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              pe(t, o, s);
            }
          }
          var i = t.return;
          try {
            yu(t);
          } catch (s) {
            pe(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            yu(t);
          } catch (s) {
            pe(t, l, s);
          }
      }
    } catch (s) {
      pe(t, t.return, s);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var y_ = Math.ceil,
  dl = Qt.ReactCurrentDispatcher,
  Rc = Qt.ReactCurrentOwner,
  it = Qt.ReactCurrentBatchConfig,
  Y = 0,
  Pe = null,
  ve = null,
  Ce = 0,
  Ke = 0,
  on = wr(0),
  _e = 0,
  $o = null,
  zr = 0,
  ga = 0,
  Nc = 0,
  lo = null,
  Fe = null,
  Tc = 0,
  _n = 1 / 0,
  jt = null,
  pl = !1,
  wu = null,
  fr = null,
  li = !1,
  or = null,
  ml = 0,
  ao = 0,
  _u = null,
  $i = -1,
  ki = 0;
function Le() {
  return Y & 6 ? me() : $i !== -1 ? $i : ($i = me());
}
function dr(e) {
  return e.mode & 1
    ? Y & 2 && Ce !== 0
      ? Ce & -Ce
      : Zw.transition !== null
      ? (ki === 0 && (ki = wh()), ki)
      : ((e = te), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ch(e.type))), e)
    : 1;
}
function pt(e, t, r, n) {
  if (50 < ao) throw ((ao = 0), (_u = null), Error(R(185)));
  Io(e, r, n),
    (!(Y & 2) || e !== Pe) && (e === Pe && (!(Y & 2) && (ga |= r), _e === 4 && rr(e, Ce)), He(e, n), r === 1 && Y === 0 && !(t.mode & 1) && ((_n = me() + 500), ma && _r()));
}
function He(e, t) {
  var r = e.callbackNode;
  Z1(e, t);
  var n = qi(e, e === Pe ? Ce : 0);
  if (n === 0) r !== null && Ef(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Ef(r), t === 1))
      e.tag === 0 ? Jw(vd.bind(null, e)) : Wh(vd.bind(null, e)),
        Kw(function () {
          !(Y & 6) && _r();
        }),
        (r = null);
    else {
      switch (_h(n)) {
        case 1:
          r = oc;
          break;
        case 4:
          r = vh;
          break;
        case 16:
          r = Yi;
          break;
        case 536870912:
          r = gh;
          break;
        default:
          r = Yi;
      }
      r = Hy(r, My.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function My(e, t) {
  if ((($i = -1), (ki = 0), Y & 6)) throw Error(R(327));
  var r = e.callbackNode;
  if (fn() && e.callbackNode !== r) return null;
  var n = qi(e, e === Pe ? Ce : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = hl(e, n);
  else {
    t = n;
    var o = Y;
    Y |= 2;
    var i = Dy();
    (Pe !== e || Ce !== t) && ((jt = null), (_n = me() + 500), kr(e, t));
    do
      try {
        w_();
        break;
      } catch (a) {
        Ay(e, a);
      }
    while (1);
    vc(), (dl.current = i), (Y = o), ve !== null ? (t = 0) : ((Pe = null), (Ce = 0), (t = _e));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Qs(e)), o !== 0 && ((n = o), (t = Su(e, o)))), t === 1)) throw ((r = $o), kr(e, 0), rr(e, n), He(e, me()), r);
    if (t === 6) rr(e, n);
    else {
      if (((o = e.current.alternate), !(n & 30) && !v_(o) && ((t = hl(e, n)), t === 2 && ((i = Qs(e)), i !== 0 && ((n = i), (t = Su(e, i)))), t === 1)))
        throw ((r = $o), kr(e, 0), rr(e, n), He(e, me()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Or(e, Fe, jt);
          break;
        case 3:
          if ((rr(e, n), (n & 130023424) === n && ((t = Tc + 500 - me()), 10 < t))) {
            if (qi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = tu(Or.bind(null, e, Fe, jt), t);
            break;
          }
          Or(e, Fe, jt);
          break;
        case 4:
          if ((rr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var l = 31 - dt(n);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (n &= ~i);
          }
          if (
            ((n = o), (n = me() - n), (n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * y_(n / 1960)) - n), 10 < n)
          ) {
            e.timeoutHandle = tu(Or.bind(null, e, Fe, jt), n);
            break;
          }
          Or(e, Fe, jt);
          break;
        case 5:
          Or(e, Fe, jt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return He(e, me()), e.callbackNode === r ? My.bind(null, e) : null;
}
function Su(e, t) {
  var r = lo;
  return e.current.memoizedState.isDehydrated && (kr(e, t).flags |= 256), (e = hl(e, t)), e !== 2 && ((t = Fe), (Fe = r), t !== null && xu(t)), e;
}
function xu(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function v_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ht(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rr(e, t) {
  for (t &= ~Nc, t &= ~ga, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - dt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function vd(e) {
  if (Y & 6) throw Error(R(327));
  fn();
  var t = qi(e, 0);
  if (!(t & 1)) return He(e, me()), null;
  var r = hl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Qs(e);
    n !== 0 && ((t = n), (r = Su(e, n)));
  }
  if (r === 1) throw ((r = $o), kr(e, 0), rr(e, t), He(e, me()), r);
  if (r === 6) throw Error(R(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Or(e, Fe, jt), He(e, me()), null;
}
function jc(e, t) {
  var r = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = r), Y === 0 && ((_n = me() + 500), ma && _r());
  }
}
function Ir(e) {
  or !== null && or.tag === 0 && !(Y & 6) && fn();
  var t = Y;
  Y |= 1;
  var r = it.transition,
    n = te;
  try {
    if (((it.transition = null), (te = 1), e)) return e();
  } finally {
    (te = n), (it.transition = r), (Y = t), !(Y & 6) && _r();
  }
}
function zc() {
  (Ke = on.current), le(on);
}
function kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Qw(r)), ve !== null))
    for (r = ve.return; r !== null; ) {
      var n = r;
      switch ((mc(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && rl();
          break;
        case 3:
          gn(), le(Ve), le(je), Pc();
          break;
        case 5:
          xc(n);
          break;
        case 4:
          gn();
          break;
        case 13:
          le(ue);
          break;
        case 19:
          le(ue);
          break;
        case 10:
          gc(n.type._context);
          break;
        case 22:
        case 23:
          zc();
      }
      r = r.return;
    }
  if (((Pe = e), (ve = e = pr(e.current, null)), (Ce = Ke = t), (_e = 0), ($o = null), (Nc = ga = zr = 0), (Fe = lo = null), Cr !== null)) {
    for (t = 0; t < Cr.length; t++)
      if (((r = Cr[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (n.next = l);
        }
        r.pending = n;
      }
    Cr = null;
  }
  return e;
}
function Ay(e, t) {
  do {
    var r = ve;
    try {
      if ((vc(), (Oi.current = fl), cl)) {
        for (var n = ce.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        cl = !1;
      }
      if (((jr = 0), (xe = we = ce = null), (oo = !1), (Oo = 0), (Rc.current = null), r === null || r.return === null)) {
        (_e = 1), ($o = t), (ve = null);
        break;
      }
      e: {
        var i = e,
          l = r.return,
          a = r,
          s = t;
        if (((t = Ce), (a.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
          var u = s,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d ? ((f.updateQueue = d.updateQueue), (f.memoizedState = d.memoizedState), (f.lanes = d.lanes)) : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var p = od(l);
          if (p !== null) {
            (p.flags &= -257), id(p, l, a, i, t), p.mode & 1 && nd(i, u, t), (t = p), (s = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              nd(i, u, t), Ic();
              break e;
            }
            s = Error(R(426));
          }
        } else if (se && a.mode & 1) {
          var S = od(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), id(S, l, a, i, t), hc(wn(s, a));
            break e;
          }
        }
        (i = s = wn(s, a)), _e !== 4 && (_e = 2), lo === null ? (lo = [i]) : lo.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Sy(i, s, t);
              Yf(i, m);
              break e;
            case 1:
              a = s;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" || (g !== null && typeof g.componentDidCatch == "function" && (fr === null || !fr.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = xy(i, a, t);
                Yf(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      By(r);
    } catch (x) {
      (t = x), ve === r && r !== null && (ve = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function Dy() {
  var e = dl.current;
  return (dl.current = fl), e === null ? fl : e;
}
function Ic() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Pe === null || (!(zr & 268435455) && !(ga & 268435455)) || rr(Pe, Ce);
}
function hl(e, t) {
  var r = Y;
  Y |= 2;
  var n = Dy();
  (Pe !== e || Ce !== t) && ((jt = null), kr(e, t));
  do
    try {
      g_();
      break;
    } catch (o) {
      Ay(e, o);
    }
  while (1);
  if ((vc(), (Y = r), (dl.current = n), ve !== null)) throw Error(R(261));
  return (Pe = null), (Ce = 0), _e;
}
function g_() {
  for (; ve !== null; ) Fy(ve);
}
function w_() {
  for (; ve !== null && !H1(); ) Fy(ve);
}
function Fy(e) {
  var t = Uy(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps), t === null ? By(e) : (ve = t), (Rc.current = null);
}
function By(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = d_(r, t)), r !== null)) {
        (r.flags &= 32767), (ve = r);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (ve = null);
        return;
      }
    } else if (((r = f_(r, t, Ke)), r !== null)) {
      ve = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function Or(e, t, r) {
  var n = te,
    o = it.transition;
  try {
    (it.transition = null), (te = 1), __(e, t, r, n);
  } finally {
    (it.transition = o), (te = n);
  }
  return null;
}
function __(e, t, r, n) {
  do fn();
  while (or !== null);
  if (Y & 6) throw Error(R(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (ew(e, i),
    e === Pe && ((ve = Pe = null), (Ce = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      li ||
      ((li = !0),
      Hy(Yi, function () {
        return fn(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = it.transition), (it.transition = null);
    var l = te;
    te = 1;
    var a = Y;
    (Y |= 4), (Rc.current = null), m_(e, r), Iy(r, e), Fw(Zs), (Ji = !!Js), (Zs = Js = null), (e.current = r), h_(r), W1(), (Y = a), (te = l), (it.transition = i);
  } else e.current = r;
  if ((li && ((li = !1), (or = e), (ml = o)), (i = e.pendingLanes), i === 0 && (fr = null), K1(r.stateNode), He(e, me()), t !== null))
    for (n = e.onRecoverableError, r = 0; r < t.length; r++) (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (pl) throw ((pl = !1), (e = wu), (wu = null), e);
  return ml & 1 && e.tag !== 0 && fn(), (i = e.pendingLanes), i & 1 ? (e === _u ? ao++ : ((ao = 0), (_u = e))) : (ao = 0), _r(), null;
}
function fn() {
  if (or !== null) {
    var e = _h(ml),
      t = it.transition,
      r = te;
    try {
      if (((it.transition = null), (te = 16 > e ? 16 : e), or === null)) var n = !1;
      else {
        if (((e = or), (or = null), (ml = 0), Y & 6)) throw Error(R(331));
        var o = Y;
        for (Y |= 4, A = e.current; A !== null; ) {
          var i = A,
            l = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (A = u; A !== null; ) {
                  var f = A;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      io(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (A = c);
                  else
                    for (; A !== null; ) {
                      f = A;
                      var d = f.sibling,
                        p = f.return;
                      if ((Ty(f), f === u)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (A = d);
                        break;
                      }
                      A = p;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (A = l);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    io(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (A = m);
                break e;
              }
              A = i.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          l = A;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) (g.return = l), (A = g);
          else
            e: for (l = h; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      va(9, a);
                  }
                } catch (x) {
                  pe(a, a.return, x);
                }
              if (a === l) {
                A = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (A = _);
                break e;
              }
              A = a.return;
            }
        }
        if (((Y = o), _r(), $t && typeof $t.onPostCommitFiberRoot == "function"))
          try {
            $t.onPostCommitFiberRoot(ua, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (te = r), (it.transition = t);
    }
  }
  return !1;
}
function gd(e, t, r) {
  (t = wn(r, t)), (t = Sy(e, t, 1)), (e = cr(e, t, 1)), (t = Le()), e !== null && (Io(e, 1, t), He(e, t));
}
function pe(e, t, r) {
  if (e.tag === 3) gd(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gd(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof n.componentDidCatch == "function" && (fr === null || !fr.has(n)))) {
          (e = wn(r, e)), (e = xy(t, e, 1)), (t = cr(t, e, 1)), (e = Le()), t !== null && (Io(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function S_(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Pe === e && (Ce & r) === r && (_e === 4 || (_e === 3 && (Ce & 130023424) === Ce && 500 > me() - Tc) ? kr(e, 0) : (Nc |= r)),
    He(e, t);
}
function Vy(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Yo), (Yo <<= 1), !(Yo & 130023424) && (Yo = 4194304)) : (t = 1));
  var r = Le();
  (e = Ht(e, t)), e !== null && (Io(e, t, r), He(e, r));
}
function x_(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Vy(e, r);
}
function P_(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  n !== null && n.delete(t), Vy(e, r);
}
var Uy;
Uy = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Be = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Be = !1), c_(e, t, r);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), se && t.flags & 1048576 && Gh(t, il, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Ci(e, t), (e = t.pendingProps);
      var o = hn(t, je.current);
      cn(t, r), (o = Ec(null, t, n, e, o, r));
      var i = Cc();
      return (
        (t.flags |= 1),
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(n) ? ((i = !0), nl(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            _c(t),
            (o.updater = ha),
            (t.stateNode = o),
            (o._reactInternals = t),
            su(t, n, e, r),
            (t = fu(null, t, n, !0, i, r)))
          : ((t.tag = 0), se && i && pc(t), Ie(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch ((Ci(e, t), (e = t.pendingProps), (o = n._init), (n = o(n._payload)), (t.type = n), (o = t.tag = E_(n)), (e = ut(n, e)), o)) {
          case 0:
            t = cu(null, t, n, e, r);
            break e;
          case 1:
            t = sd(null, t, n, e, r);
            break e;
          case 11:
            t = ld(null, t, n, e, r);
            break e;
          case 14:
            t = ad(null, t, n, ut(n.type, e), r);
            break e;
        }
        throw Error(R(306, n, ""));
      }
      return t;
    case 0:
      return (n = t.type), (o = t.pendingProps), (o = t.elementType === n ? o : ut(n, o)), cu(e, t, n, o, r);
    case 1:
      return (n = t.type), (o = t.pendingProps), (o = t.elementType === n ? o : ut(n, o)), sd(e, t, n, o, r);
    case 3:
      e: {
        if ((Cy(t), e === null)) throw Error(R(387));
        (n = t.pendingProps), (i = t.memoizedState), (o = i.element), Yh(e, t), sl(t, n, null, r);
        var l = t.memoizedState;
        if (((n = l.element), i.isDehydrated))
          if (
            ((i = { element: n, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = wn(Error(R(423)), t)), (t = ud(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = wn(Error(R(424)), t)), (t = ud(e, t, n, r, o));
            break e;
          } else
            for (Xe = ur(t.stateNode.containerInfo.firstChild), qe = t, se = !0, ft = null, r = ey(t, null, n, r), t.child = r; r; )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((yn(), n === o)) {
            t = Wt(e, t, r);
            break e;
          }
          Ie(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ty(t),
        e === null && iu(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        eu(n, o) ? (l = null) : i !== null && eu(n, i) && (t.flags |= 32),
        Ey(e, t),
        Ie(e, t, l, r),
        t.child
      );
    case 6:
      return e === null && iu(t), null;
    case 13:
      return $y(e, t, r);
    case 4:
      return Sc(t, t.stateNode.containerInfo), (n = t.pendingProps), e === null ? (t.child = vn(t, null, n, r)) : Ie(e, t, n, r), t.child;
    case 11:
      return (n = t.type), (o = t.pendingProps), (o = t.elementType === n ? o : ut(n, o)), ld(e, t, n, o, r);
    case 7:
      return Ie(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (((n = t.type._context), (o = t.pendingProps), (i = t.memoizedProps), (l = o.value), ne(ll, n._currentValue), (n._currentValue = l), i !== null))
          if (ht(i.value, l)) {
            if (i.children === o.children && !Ve.current) {
              t = Wt(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (i.tag === 1) {
                      (s = At(-1, r & -r)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)), (u.pending = s);
                      }
                    }
                    (i.lanes |= r), (s = i.alternate), s !== null && (s.lanes |= r), lu(i.return, r, t), (a.lanes |= r);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(R(341));
                (l.lanes |= r), (a = l.alternate), a !== null && (a.lanes |= r), lu(l, r, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ie(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (o = t.type), (n = t.pendingProps.children), cn(t, r), (o = lt(o)), (n = n(o)), (t.flags |= 1), Ie(e, t, n, r), t.child;
    case 14:
      return (n = t.type), (o = ut(n, t.pendingProps)), (o = ut(n.type, o)), ad(e, t, n, o, r);
    case 15:
      return Py(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : ut(n, o)),
        Ci(e, t),
        (t.tag = 1),
        Ue(n) ? ((e = !0), nl(t)) : (e = !1),
        cn(t, r),
        Jh(t, n, o),
        su(t, n, o, r),
        fu(null, t, n, !0, e, r)
      );
    case 19:
      return ky(e, t, r);
    case 22:
      return Oy(e, t, r);
  }
  throw Error(R(156, t.tag));
};
function Hy(e, t) {
  return yh(e, t);
}
function O_(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(e, t, r, n) {
  return new O_(e, t, r, n);
}
function Lc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function E_(e) {
  if (typeof e == "function") return Lc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === tc)) return 11;
    if (e === rc) return 14;
  }
  return 2;
}
function pr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = ot(e.tag, t, e.key, e.mode)), (r.elementType = e.elementType), (r.type = e.type), (r.stateNode = e.stateNode), (r.alternate = e), (e.alternate = r))
      : ((r.pendingProps = t), (r.type = e.type), (r.flags = 0), (r.subtreeFlags = 0), (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function bi(e, t, r, n, o, i) {
  var l = 2;
  if (((n = e), typeof e == "function")) Lc(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Kr:
        return br(r.children, o, i, t);
      case ec:
        (l = 8), (o |= 8);
        break;
      case Ts:
        return (e = ot(12, r, t, o | 2)), (e.elementType = Ts), (e.lanes = i), e;
      case js:
        return (e = ot(13, r, t, o)), (e.elementType = js), (e.lanes = i), e;
      case zs:
        return (e = ot(19, r, t, o)), (e.elementType = zs), (e.lanes = i), e;
      case Zm:
        return wa(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qm:
              l = 10;
              break e;
            case Jm:
              l = 9;
              break e;
            case tc:
              l = 11;
              break e;
            case rc:
              l = 14;
              break e;
            case Zt:
              (l = 16), (n = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (t = ot(l, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t;
}
function br(e, t, r, n) {
  return (e = ot(7, e, n, t)), (e.lanes = r), e;
}
function wa(e, t, r, n) {
  return (e = ot(22, e, n, t)), (e.elementType = Zm), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e;
}
function cs(e, t, r) {
  return (e = ot(6, e, null, t)), (e.lanes = r), e;
}
function fs(e, t, r) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function C_(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wa(0)),
    (this.expirationTimes = Wa(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = Wa(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Mc(e, t, r, n, o, i, l, a, s) {
  return (
    (e = new C_(e, t, r, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    _c(i),
    e
  );
}
function $_(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Qr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Wy(e) {
  if (!e) return yr;
  e = e._reactInternals;
  e: {
    if (Fr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Ue(r)) return Hh(e, r, t);
  }
  return t;
}
function Gy(e, t, r, n, o, i, l, a, s) {
  return (
    (e = Mc(r, n, !0, e, o, i, l, a, s)),
    (e.context = Wy(null)),
    (r = e.current),
    (n = Le()),
    (o = dr(r)),
    (i = At(n, o)),
    (i.callback = t ?? null),
    cr(r, i, o),
    (e.current.lanes = o),
    Io(e, o, n),
    He(e, n),
    e
  );
}
function _a(e, t, r, n) {
  var o = t.current,
    i = Le(),
    l = dr(o);
  return (
    (r = Wy(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = At(i, l)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = cr(o, t, l)),
    e !== null && (pt(e, o, l, i), Pi(e, o, l)),
    l
  );
}
function yl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Ac(e, t) {
  wd(e, t), (e = e.alternate) && wd(e, t);
}
function k_() {
  return null;
}
var Qy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dc(e) {
  this._internalRoot = e;
}
Sa.prototype.render = Dc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  _a(e, t, null, null);
};
Sa.prototype.unmount = Dc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ir(function () {
      _a(null, e, null, null);
    }),
      (t[Ut] = null);
  }
};
function Sa(e) {
  this._internalRoot = e;
}
Sa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ph();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < tr.length && t !== 0 && t < tr[r].priority; r++);
    tr.splice(r, 0, e), r === 0 && Eh(e);
  }
};
function Fc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function xa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function _d() {}
function b_(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = yl(l);
        i.call(u);
      };
    }
    var l = Gy(t, n, e, 0, null, !1, !1, "", _d);
    return (e._reactRootContainer = l), (e[Ut] = l.current), wo(e.nodeType === 8 ? e.parentNode : e), Ir(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = yl(s);
      a.call(u);
    };
  }
  var s = Mc(e, 0, !1, null, null, !1, !1, "", _d);
  return (
    (e._reactRootContainer = s),
    (e[Ut] = s.current),
    wo(e.nodeType === 8 ? e.parentNode : e),
    Ir(function () {
      _a(t, s, r, n);
    }),
    s
  );
}
function Pa(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = yl(l);
        a.call(s);
      };
    }
    _a(t, l, e, o);
  } else l = b_(r, t, e, o, n);
  return yl(l);
}
Sh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Yn(t.pendingLanes);
        r !== 0 && (ic(t, r | 1), He(t, me()), !(Y & 6) && ((_n = me() + 500), _r()));
      }
      break;
    case 13:
      Ir(function () {
        var n = Ht(e, 1);
        if (n !== null) {
          var o = Le();
          pt(n, e, 1, o);
        }
      }),
        Ac(e, 1);
  }
};
lc = function (e) {
  if (e.tag === 13) {
    var t = Ht(e, 134217728);
    if (t !== null) {
      var r = Le();
      pt(t, e, 134217728, r);
    }
    Ac(e, 134217728);
  }
};
xh = function (e) {
  if (e.tag === 13) {
    var t = dr(e),
      r = Ht(e, t);
    if (r !== null) {
      var n = Le();
      pt(r, e, t, n);
    }
    Ac(e, t);
  }
};
Ph = function () {
  return te;
};
Oh = function (e, t) {
  var r = te;
  try {
    return (te = e), t();
  } finally {
    te = r;
  }
};
Hs = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Ms(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = pa(n);
            if (!o) throw Error(R(90));
            th(n), Ms(n, o);
          }
        }
      }
      break;
    case "textarea":
      nh(e, r);
      break;
    case "select":
      (t = r.value), t != null && ln(e, !!r.multiple, t, !1);
  }
};
ch = jc;
fh = Ir;
var R_ = { usingClientEntryPoint: !1, Events: [Mo, Jr, pa, sh, uh, jc] },
  Dn = { findFiberByHostInstance: Er, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  N_ = {
    bundleType: Dn.bundleType,
    version: Dn.version,
    rendererPackageName: Dn.rendererPackageName,
    rendererConfig: Dn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = mh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Dn.findFiberByHostInstance || k_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber)
    try {
      (ua = ai.inject(N_)), ($t = ai);
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R_;
et.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fc(t)) throw Error(R(200));
  return $_(e, t, null, r);
};
et.createRoot = function (e, t) {
  if (!Fc(e)) throw Error(R(299));
  var r = !1,
    n = "",
    o = Qy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Mc(e, 1, !1, null, null, r, !1, n, o)),
    (e[Ut] = t.current),
    wo(e.nodeType === 8 ? e.parentNode : e),
    new Dc(t)
  );
};
et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = mh(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
  return Ir(e);
};
et.hydrate = function (e, t, r) {
  if (!xa(t)) throw Error(R(200));
  return Pa(null, e, t, !0, r);
};
et.hydrateRoot = function (e, t, r) {
  if (!Fc(e)) throw Error(R(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    l = Qy;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
    (t = Gy(t, null, e, 1, r ?? null, o, !1, i, l)),
    (e[Ut] = t.current),
    wo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [r, o]) : t.mutableSourceEagerHydrationData.push(r, o);
  return new Sa(t);
};
et.render = function (e, t, r) {
  if (!xa(t)) throw Error(R(200));
  return Pa(null, e, t, !1, r);
};
et.unmountComponentAtNode = function (e) {
  if (!xa(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Ir(function () {
        Pa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ut] = null);
        });
      }),
      !0)
    : !1;
};
et.unstable_batchedUpdates = jc;
et.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!xa(r)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Pa(e, t, r, !1, n);
};
et.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  t(), (e.exports = et);
})(k1);
var Sd = uo;
(bs.createRoot = Sd.createRoot), (bs.hydrateRoot = Sd.hydrateRoot);
var Ot = function () {
  return (
    (Ot =
      Object.assign ||
      function (t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
          r = arguments[n];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    Ot.apply(this, arguments)
  );
};
function Ky(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function T_(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++) (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ri = "right-scroll-bar-position",
  Ni = "width-before-scroll-bar",
  j_ = "with-scroll-bars-hidden",
  z_ = "--removed-body-scroll-bar-size";
function I_(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function L_(e, t) {
  var r = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && ((r.value = n), r.callback(n, o));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
function M_(e, t) {
  return L_(t || null, function (r) {
    return e.forEach(function (n) {
      return I_(n, r);
    });
  });
}
function A_(e) {
  return e;
}
function D_(e, t) {
  t === void 0 && (t = A_);
  var r = [],
    n = !1,
    o = {
      read: function () {
        if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (i) {
        var l = t(i, n);
        return (
          r.push(l),
          function () {
            r = r.filter(function (a) {
              return a !== l;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (n = !0; r.length; ) {
          var l = r;
          (r = []), l.forEach(i);
        }
        r = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (i) {
        n = !0;
        var l = [];
        if (r.length) {
          var a = r;
          (r = []), a.forEach(i), (l = r);
        }
        var s = function () {
            var f = l;
            (l = []), f.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(s);
          };
        u(),
          (r = {
            push: function (f) {
              l.push(f), u();
            },
            filter: function (f) {
              return (l = l.filter(f)), r;
            },
          });
      },
    };
  return o;
}
function F_(e) {
  e === void 0 && (e = {});
  var t = D_(null);
  return (t.options = Ot({ async: !0, ssr: !1 }, e)), t;
}
var Xy = function (e) {
  var t = e.sideCar,
    r = Ky(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return w.createElement(n, Ot({}, r));
};
Xy.isSideCarExport = !0;
function B_(e, t) {
  return e.useMedium(t), Xy;
}
var Yy = F_(),
  ds = function () {},
  Oa = w.forwardRef(function (e, t) {
    var r = w.useRef(null),
      n = w.useState({ onScrollCapture: ds, onWheelCapture: ds, onTouchMoveCapture: ds }),
      o = n[0],
      i = n[1],
      l = e.forwardProps,
      a = e.children,
      s = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      c = e.shards,
      d = e.sideCar,
      p = e.noIsolation,
      y = e.inert,
      v = e.allowPinchZoom,
      S = e.as,
      m = S === void 0 ? "div" : S,
      h = Ky(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
      g = d,
      _ = M_([r, t]),
      x = Ot(Ot({}, h), o);
    return w.createElement(
      w.Fragment,
      null,
      f && w.createElement(g, { sideCar: Yy, removeScrollBar: u, shards: c, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!v, lockRef: r }),
      l ? w.cloneElement(w.Children.only(a), Ot(Ot({}, x), { ref: _ })) : w.createElement(m, Ot({}, x, { className: s, ref: _ }), a)
    );
  });
Oa.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Oa.classNames = { fullWidth: Ni, zeroRight: Ri };
var xd,
  V_ = function () {
    if (xd) return xd;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function U_() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = V_();
  return t && e.setAttribute("nonce", t), e;
}
function H_(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function W_(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var G_ = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = U_()) && (H_(t, r), W_(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Q_ = function () {
    var e = G_();
    return function (t, r) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r]
      );
    };
  },
  qy = function () {
    var e = Q_(),
      t = function (r) {
        var n = r.styles,
          o = r.dynamic;
        return e(n, o), null;
      };
    return t;
  },
  K_ = { left: 0, top: 0, right: 0, gap: 0 },
  ps = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  X_ = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ps(r), ps(n), ps(o)];
  },
  Y_ = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return K_;
    var t = X_(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) };
  },
  q_ = qy(),
  J_ = function (e, t, r, n) {
    var o = e.left,
      i = e.top,
      l = e.right,
      a = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          j_,
          ` {
   overflow: hidden `
        )
        .concat(
          n,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  n,
                  `;
    `
                ),
            r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Ri,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(
          Ni,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(Ri, " .")
        .concat(
          Ri,
          ` {
    right: 0 `
        )
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(Ni, " .")
        .concat(
          Ni,
          ` {
    margin-right: 0 `
        )
        .concat(
          n,
          `;
  }
  
  body {
    `
        )
        .concat(z_, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Z_ = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      o = n === void 0 ? "margin" : n,
      i = w.useMemo(
        function () {
          return Y_(o);
        },
        [o]
      );
    return w.createElement(q_, { styles: J_(i, !t, o, r ? "" : "!important") });
  },
  Pu = !1;
if (typeof window < "u")
  try {
    var si = Object.defineProperty({}, "passive", {
      get: function () {
        return (Pu = !0), !0;
      },
    });
    window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
  } catch {
    Pu = !1;
  }
var Ur = Pu ? { passive: !1 } : !1,
  eS = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Jy = function (e, t) {
    var r = window.getComputedStyle(e);
    return r[t] !== "hidden" && !(r.overflowY === r.overflowX && !eS(e) && r[t] === "visible");
  },
  tS = function (e) {
    return Jy(e, "overflowY");
  },
  rS = function (e) {
    return Jy(e, "overflowX");
  },
  Pd = function (e, t) {
    var r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var n = Zy(e, r);
      if (n) {
        var o = ev(e, r),
          i = o[1],
          l = o[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== document.body);
    return !1;
  },
  nS = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  oS = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  Zy = function (e, t) {
    return e === "v" ? tS(t) : rS(t);
  },
  ev = function (e, t) {
    return e === "v" ? nS(t) : oS(t);
  },
  iS = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  lS = function (e, t, r, n, o) {
    var i = iS(e, window.getComputedStyle(t).direction),
      l = i * n,
      a = r.target,
      s = t.contains(a),
      u = !1,
      f = l > 0,
      c = 0,
      d = 0;
    do {
      var p = ev(e, a),
        y = p[0],
        v = p[1],
        S = p[2],
        m = v - S - i * y;
      (y || m) && Zy(e, a) && ((c += m), (d += y)), (a = a.parentNode);
    } while ((!s && a !== document.body) || (s && (t.contains(a) || t === a)));
    return ((f && ((o && c === 0) || (!o && l > c))) || (!f && ((o && d === 0) || (!o && -l > d)))) && (u = !0), u;
  },
  ui = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  Od = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Ed = function (e) {
    return e && "current" in e ? e.current : e;
  },
  aS = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  sS = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  uS = 0,
  Hr = [];
function cS(e) {
  var t = w.useRef([]),
    r = w.useRef([0, 0]),
    n = w.useRef(),
    o = w.useState(uS++)[0],
    i = w.useState(function () {
      return qy();
    })[0],
    l = w.useRef(e);
  w.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = T_([e.lockRef.current], (e.shards || []).map(Ed), !0).filter(Boolean);
          return (
            v.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = w.useCallback(function (v, S) {
      if ("touches" in v && v.touches.length === 2) return !l.current.allowPinchZoom;
      var m = ui(v),
        h = r.current,
        g = "deltaX" in v ? v.deltaX : h[0] - m[0],
        _ = "deltaY" in v ? v.deltaY : h[1] - m[1],
        x,
        O = v.target,
        P = Math.abs(g) > Math.abs(_) ? "h" : "v";
      if ("touches" in v && P === "h" && O.type === "range") return !1;
      var E = Pd(P, O);
      if (!E) return !0;
      if ((E ? (x = P) : ((x = P === "v" ? "h" : "v"), (E = Pd(P, O))), !E)) return !1;
      if ((!n.current && "changedTouches" in v && (g || _) && (n.current = x), !x)) return !0;
      var T = n.current || x;
      return lS(T, S, v, T === "h" ? g : _, !0);
    }, []),
    s = w.useCallback(function (v) {
      var S = v;
      if (!(!Hr.length || Hr[Hr.length - 1] !== i)) {
        var m = "deltaY" in S ? Od(S) : ui(S),
          h = t.current.filter(function (x) {
            return x.name === S.type && x.target === S.target && aS(x.delta, m);
          })[0];
        if (h && h.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!h) {
          var g = (l.current.shards || [])
              .map(Ed)
              .filter(Boolean)
              .filter(function (x) {
                return x.contains(S.target);
              }),
            _ = g.length > 0 ? a(S, g[0]) : !l.current.noIsolation;
          _ && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    u = w.useCallback(function (v, S, m, h) {
      var g = { name: v, delta: S, target: m, should: h };
      t.current.push(g),
        setTimeout(function () {
          t.current = t.current.filter(function (_) {
            return _ !== g;
          });
        }, 1);
    }, []),
    f = w.useCallback(function (v) {
      (r.current = ui(v)), (n.current = void 0);
    }, []),
    c = w.useCallback(function (v) {
      u(v.type, Od(v), v.target, a(v, e.lockRef.current));
    }, []),
    d = w.useCallback(function (v) {
      u(v.type, ui(v), v.target, a(v, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      Hr.push(i),
      e.setCallbacks({ onScrollCapture: c, onWheelCapture: c, onTouchMoveCapture: d }),
      document.addEventListener("wheel", s, Ur),
      document.addEventListener("touchmove", s, Ur),
      document.addEventListener("touchstart", f, Ur),
      function () {
        (Hr = Hr.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", s, Ur),
          document.removeEventListener("touchmove", s, Ur),
          document.removeEventListener("touchstart", f, Ur);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    y = e.inert;
  return w.createElement(w.Fragment, null, y ? w.createElement(i, { styles: sS(o) }) : null, p ? w.createElement(Z_, { gapMode: "margin" }) : null);
}
const fS = B_(Yy, cS);
var tv = w.forwardRef(function (e, t) {
  return w.createElement(Oa, Ot({}, e, { ref: t, sideCar: fS }));
});
tv.classNames = Oa.classNames;
const dS = tv;
function Bc(e) {
  const t = w.createContext(null);
  return [
    ({ children: o, value: i }) => C.createElement(t.Provider, { value: i }, o),
    () => {
      const o = w.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function Vc(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== C.Fragment : !1;
}
function rv(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = rv(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function pS() {
  for (var e = 0, t, r, n = ""; e < arguments.length; ) (t = arguments[e++]) && (r = rv(t)) && (n && (n += " "), (n += r));
  return n;
}
const mS = {
  dark: ["#C1C2C5", "#A6A7AB", "#909296", "#5c5f66", "#373A40", "#2C2E33", "#25262b", "#1A1B1E", "#141517", "#101113"],
  gray: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
  red: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"],
  pink: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"],
  grape: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"],
  violet: ["#f3f0ff", "#e5dbff", "#d0bfff", "#b197fc", "#9775fa", "#845ef7", "#7950f2", "#7048e8", "#6741d9", "#5f3dc4"],
  indigo: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"],
  blue: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
  cyan: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"],
  teal: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"],
  green: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"],
  lime: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"],
  yellow: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"],
  orange: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"],
};
function hS(e) {
  return () => ({ fontFamily: e.fontFamily || "sans-serif" });
}
var yS = Object.defineProperty,
  Cd = Object.getOwnPropertySymbols,
  vS = Object.prototype.hasOwnProperty,
  gS = Object.prototype.propertyIsEnumerable,
  $d = (e, t, r) => (t in e ? yS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  kd = (e, t) => {
    for (var r in t || (t = {})) vS.call(t, r) && $d(e, r, t[r]);
    if (Cd) for (var r of Cd(t)) gS.call(t, r) && $d(e, r, t[r]);
    return e;
  };
function wS(e) {
  return (t) => ({
    WebkitTapHighlightColor: "transparent",
    [t || "&:focus"]: kd({}, e.focusRing === "always" || e.focusRing === "auto" ? e.focusRingStyles.styles(e) : e.focusRingStyles.resetStyles(e)),
    [t ? t.replace(":focus", ":focus:not(:focus-visible)") : "&:focus:not(:focus-visible)"]: kd(
      {},
      e.focusRing === "auto" || e.focusRing === "never" ? e.focusRingStyles.resetStyles(e) : null
    ),
  });
}
function Do(e) {
  return (t) => (typeof e.primaryShade == "number" ? e.primaryShade : e.primaryShade[t || e.colorScheme]);
}
function Uc(e) {
  const t = Do(e);
  return (r, n, o = !0, i = !0) => {
    if (typeof r == "string" && r.includes(".")) {
      const [a, s] = r.split("."),
        u = parseInt(s, 10);
      if (a in e.colors && u >= 0 && u < 10) return e.colors[a][typeof n == "number" && !i ? n : u];
    }
    const l = typeof n == "number" ? n : t();
    return r in e.colors ? e.colors[r][l] : o ? e.colors[e.primaryColor][l] : r;
  };
}
function nv(e) {
  let t = "";
  for (let r = 1; r < e.length - 1; r += 1) t += `${e[r]} ${(r / (e.length - 1)) * 100}%, `;
  return `${e[0]} 0%, ${t}${e[e.length - 1]} 100%`;
}
function _S(e, ...t) {
  return `linear-gradient(${e}deg, ${nv(t)})`;
}
function SS(...e) {
  return `radial-gradient(circle, ${nv(e)})`;
}
function ov(e) {
  const t = Uc(e),
    r = Do(e);
  return (n) => {
    const o = {
      from: (n == null ? void 0 : n.from) || e.defaultGradient.from,
      to: (n == null ? void 0 : n.to) || e.defaultGradient.to,
      deg: (n == null ? void 0 : n.deg) || e.defaultGradient.deg,
    };
    return `linear-gradient(${o.deg}deg, ${t(o.from, r(), !1)} 0%, ${t(o.to, r(), !1)} 100%)`;
  };
}
function iv(e) {
  return (t) => {
    if (typeof t == "number") return `${t / 16}${e}`;
    if (typeof t == "string") {
      const r = t.replace("px", "");
      if (!Number.isNaN(Number(r))) return `${Number(r) / 16}${e}`;
    }
    return t;
  };
}
const N = iv("rem"),
  Ea = iv("em");
function G({ size: e, sizes: t, units: r }) {
  return e in t ? t[e] : typeof e == "number" ? (r === "em" ? Ea(e) : N(e)) : e || t.md;
}
function Lr(e) {
  return typeof e == "number"
    ? e
    : typeof e == "string" && e.includes("rem")
    ? Number(e.replace("rem", "")) * 16
    : typeof e == "string" && e.includes("em")
    ? Number(e.replace("em", "")) * 16
    : Number(e);
}
function xS(e) {
  return (t) => `@media (min-width: ${Ea(Lr(G({ size: t, sizes: e.breakpoints })))})`;
}
function PS(e) {
  return (t) => `@media (max-width: ${Ea(Lr(G({ size: t, sizes: e.breakpoints })) - 1)})`;
}
function OS(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function ES(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const l = t.split("");
    t = [l[0], l[0], l[1], l[1], l[2], l[2]].join("");
  }
  const r = parseInt(t, 16),
    n = (r >> 16) & 255,
    o = (r >> 8) & 255,
    i = r & 255;
  return { r: n, g: o, b: i, a: 1 };
}
function CS(e) {
  const [t, r, n, o] = e
    .replace(/[^0-9,.]/g, "")
    .split(",")
    .map(Number);
  return { r: t, g: r, b: n, a: o || 1 };
}
function Hc(e) {
  return OS(e) ? ES(e) : e.startsWith("rgb") ? CS(e) : { r: 0, g: 0, b: 0, a: 1 };
}
function Gr(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(--")) return e;
  const { r, g: n, b: o } = Hc(e);
  return `rgba(${r}, ${n}, ${o}, ${t})`;
}
function $S(e = 0) {
  return { position: "absolute", top: N(e), right: N(e), left: N(e), bottom: N(e) };
}
function kS(e, t) {
  if (typeof e == "string" && e.startsWith("var(--")) return e;
  const { r, g: n, b: o, a: i } = Hc(e),
    l = 1 - t,
    a = (s) => Math.round(s * l);
  return `rgba(${a(r)}, ${a(n)}, ${a(o)}, ${i})`;
}
function bS(e, t) {
  if (typeof e == "string" && e.startsWith("var(--")) return e;
  const { r, g: n, b: o, a: i } = Hc(e),
    l = (a) => Math.round(a + (255 - a) * t);
  return `rgba(${l(r)}, ${l(n)}, ${l(o)}, ${i})`;
}
function RS(e) {
  return (t) => {
    if (typeof t == "number") return N(t);
    const r = typeof e.defaultRadius == "number" ? e.defaultRadius : e.radius[e.defaultRadius] || e.defaultRadius;
    return e.radius[t] || t || r;
  };
}
function NS(e, t) {
  if (typeof e == "string" && e.includes(".")) {
    const [r, n] = e.split("."),
      o = parseInt(n, 10);
    if (r in t.colors && o >= 0 && o < 10) return { isSplittedColor: !0, key: r, shade: o };
  }
  return { isSplittedColor: !1 };
}
function TS(e) {
  const t = Uc(e),
    r = Do(e),
    n = ov(e);
  return ({ variant: o, color: i, gradient: l, primaryFallback: a }) => {
    const s = NS(i, e);
    switch (o) {
      case "light":
        return {
          border: "transparent",
          background: Gr(t(i, e.colorScheme === "dark" ? 8 : 0, a, !1), e.colorScheme === "dark" ? 0.2 : 1),
          color: i === "dark" ? (e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9]) : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          hover: Gr(t(i, e.colorScheme === "dark" ? 7 : 1, a, !1), e.colorScheme === "dark" ? 0.25 : 0.65),
        };
      case "subtle":
        return {
          border: "transparent",
          background: "transparent",
          color: i === "dark" ? (e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9]) : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          hover: Gr(t(i, e.colorScheme === "dark" ? 8 : 0, a, !1), e.colorScheme === "dark" ? 0.2 : 1),
        };
      case "outline":
        return {
          border: t(i, e.colorScheme === "dark" ? 5 : r("light")),
          background: "transparent",
          color: t(i, e.colorScheme === "dark" ? 5 : r("light")),
          hover: e.colorScheme === "dark" ? Gr(t(i, 5, a, !1), 0.05) : Gr(t(i, 0, a, !1), 0.35),
        };
      case "default":
        return {
          border: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4],
          background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
          color: e.colorScheme === "dark" ? e.white : e.black,
          hover: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0],
        };
      case "white":
        return { border: "transparent", background: e.white, color: t(i, r()), hover: null };
      case "transparent":
        return {
          border: "transparent",
          color: i === "dark" ? (e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9]) : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          background: "transparent",
          hover: null,
        };
      case "gradient":
        return { background: n(l), color: e.white, border: "transparent", hover: null };
      default: {
        const u = r(),
          f = s.isSplittedColor ? s.shade : u,
          c = s.isSplittedColor ? s.key : i;
        return { border: "transparent", background: t(c, f, a), color: e.white, hover: t(c, f === 9 ? 8 : f + 1) };
      }
    }
  };
}
function jS(e) {
  return (t) => {
    const r = Do(e)(t);
    return e.colors[e.primaryColor][r];
  };
}
function zS(e) {
  return { "@media (hover: hover)": { "&:hover": e }, "@media (hover: none)": { "&:active": e } };
}
function IS(e) {
  return () => ({ userSelect: "none", color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5] });
}
function LS(e) {
  return () => (e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6]);
}
const ge = {
  fontStyles: hS,
  themeColor: Uc,
  focusStyles: wS,
  linearGradient: _S,
  radialGradient: SS,
  smallerThan: PS,
  largerThan: xS,
  rgba: Gr,
  cover: $S,
  darken: kS,
  lighten: bS,
  radius: RS,
  variant: TS,
  primaryShade: Do,
  hover: zS,
  gradient: ov,
  primaryColor: jS,
  placeholderStyles: IS,
  dimmed: LS,
};
var MS = Object.defineProperty,
  AS = Object.defineProperties,
  DS = Object.getOwnPropertyDescriptors,
  bd = Object.getOwnPropertySymbols,
  FS = Object.prototype.hasOwnProperty,
  BS = Object.prototype.propertyIsEnumerable,
  Rd = (e, t, r) => (t in e ? MS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  VS = (e, t) => {
    for (var r in t || (t = {})) FS.call(t, r) && Rd(e, r, t[r]);
    if (bd) for (var r of bd(t)) BS.call(t, r) && Rd(e, r, t[r]);
    return e;
  },
  US = (e, t) => AS(e, DS(t));
function HS(e) {
  return US(VS({}, e), {
    fn: {
      fontStyles: ge.fontStyles(e),
      themeColor: ge.themeColor(e),
      focusStyles: ge.focusStyles(e),
      largerThan: ge.largerThan(e),
      smallerThan: ge.smallerThan(e),
      radialGradient: ge.radialGradient,
      linearGradient: ge.linearGradient,
      gradient: ge.gradient(e),
      rgba: ge.rgba,
      cover: ge.cover,
      lighten: ge.lighten,
      darken: ge.darken,
      primaryShade: ge.primaryShade(e),
      radius: ge.radius(e),
      variant: ge.variant(e),
      hover: ge.hover,
      primaryColor: ge.primaryColor(e),
      placeholderStyles: ge.placeholderStyles(e),
      dimmed: ge.dimmed(e),
    },
  });
}
const WS = {
    dir: "ltr",
    primaryShade: { light: 6, dark: 8 },
    focusRing: "auto",
    loader: "oval",
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    defaultRadius: "sm",
    transitionTimingFunction: "ease",
    colors: mS,
    lineHeight: 1.55,
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    primaryColor: "blue",
    respectReducedMotion: !0,
    cursorType: "default",
    defaultGradient: { from: "indigo", to: "cyan", deg: 45 },
    shadows: {
      xs: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",
      sm: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",
      md: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
      lg: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",
      xl: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem",
    },
    fontSizes: { xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1.125rem", xl: "1.25rem" },
    radius: { xs: "0.125rem", sm: "0.25rem", md: "0.5rem", lg: "1rem", xl: "2rem" },
    spacing: { xs: "0.625rem", sm: "0.75rem", md: "1rem", lg: "1.25rem", xl: "1.5rem" },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    headings: {
      fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: 700,
      sizes: {
        h1: { fontSize: "2.125rem", lineHeight: 1.3, fontWeight: void 0 },
        h2: { fontSize: "1.625rem", lineHeight: 1.35, fontWeight: void 0 },
        h3: { fontSize: "1.375rem", lineHeight: 1.4, fontWeight: void 0 },
        h4: { fontSize: "1.125rem", lineHeight: 1.45, fontWeight: void 0 },
        h5: { fontSize: "1rem", lineHeight: 1.5, fontWeight: void 0 },
        h6: { fontSize: "0.875rem", lineHeight: 1.5, fontWeight: void 0 },
      },
    },
    other: {},
    components: {},
    activeStyles: { transform: "translateY(0.0625rem)" },
    datesLocale: "en",
    globalStyles: void 0,
    focusRingStyles: {
      styles: (e) => ({ outlineOffset: "0.125rem", outline: `0.125rem solid ${e.colors[e.primaryColor][e.colorScheme === "dark" ? 7 : 5]}` }),
      resetStyles: () => ({ outline: "none" }),
      inputStyles: (e) => ({ outline: "none", borderColor: e.colors[e.primaryColor][typeof e.primaryShade == "object" ? e.primaryShade[e.colorScheme] : e.primaryShade] }),
    },
  },
  lv = HS(WS);
function GS(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function QS(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var KS = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(QS(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = GS(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Re = "-ms-",
  vl = "-moz-",
  J = "-webkit-",
  av = "comm",
  Wc = "rule",
  Gc = "decl",
  XS = "@import",
  sv = "@keyframes",
  YS = Math.abs,
  Ca = String.fromCharCode,
  qS = Object.assign;
function JS(e, t) {
  return Ee(e, 0) ^ 45 ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^ Ee(e, 3) : 0;
}
function uv(e) {
  return e.trim();
}
function ZS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Ou(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function ko(e, t, r) {
  return e.slice(t, r);
}
function St(e) {
  return e.length;
}
function Qc(e) {
  return e.length;
}
function ci(e, t) {
  return t.push(e), e;
}
function ex(e, t) {
  return e.map(t).join("");
}
var $a = 1,
  Sn = 1,
  cv = 0,
  We = 0,
  ye = 0,
  kn = "";
function ka(e, t, r, n, o, i, l) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: $a, column: Sn, length: l, return: "" };
}
function Fn(e, t) {
  return qS(ka("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function tx() {
  return ye;
}
function rx() {
  return (ye = We > 0 ? Ee(kn, --We) : 0), Sn--, ye === 10 && ((Sn = 1), $a--), ye;
}
function Je() {
  return (ye = We < cv ? Ee(kn, We++) : 0), Sn++, ye === 10 && ((Sn = 1), $a++), ye;
}
function bt() {
  return Ee(kn, We);
}
function Ti() {
  return We;
}
function Fo(e, t) {
  return ko(kn, e, t);
}
function bo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fv(e) {
  return ($a = Sn = 1), (cv = St((kn = e))), (We = 0), [];
}
function dv(e) {
  return (kn = ""), e;
}
function ji(e) {
  return uv(Fo(We - 1, Eu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function nx(e) {
  for (; (ye = bt()) && ye < 33; ) Je();
  return bo(e) > 2 || bo(ye) > 3 ? "" : " ";
}
function ox(e, t) {
  for (; --t && Je() && !(ye < 48 || ye > 102 || (ye > 57 && ye < 65) || (ye > 70 && ye < 97)); );
  return Fo(e, Ti() + (t < 6 && bt() == 32 && Je() == 32));
}
function Eu(e) {
  for (; Je(); )
    switch (ye) {
      case e:
        return We;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Eu(ye);
        break;
      case 40:
        e === 41 && Eu(e);
        break;
      case 92:
        Je();
        break;
    }
  return We;
}
function ix(e, t) {
  for (; Je() && e + ye !== 47 + 10; ) if (e + ye === 42 + 42 && bt() === 47) break;
  return "/*" + Fo(t, We - 1) + "*" + Ca(e === 47 ? e : Je());
}
function lx(e) {
  for (; !bo(bt()); ) Je();
  return Fo(e, We);
}
function ax(e) {
  return dv(zi("", null, null, null, [""], (e = fv(e)), 0, [0], e));
}
function zi(e, t, r, n, o, i, l, a, s) {
  for (var u = 0, f = 0, c = l, d = 0, p = 0, y = 0, v = 1, S = 1, m = 1, h = 0, g = "", _ = o, x = i, O = n, P = g; S; )
    switch (((y = h), (h = Je()))) {
      case 40:
        if (y != 108 && Ee(P, c - 1) == 58) {
          Ou((P += ee(ji(h), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += ji(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += nx(y);
        break;
      case 92:
        P += ox(Ti() - 1, 7);
        continue;
      case 47:
        switch (bt()) {
          case 42:
          case 47:
            ci(sx(ix(Je(), Ti()), t, r), s);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * v:
        a[u++] = St(P) * m;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            p > 0 && St(P) - c && ci(p > 32 ? Td(P + ";", n, r, c - 1) : Td(ee(P, " ", "") + ";", n, r, c - 2), s);
            break;
          case 59:
            P += ";";
          default:
            if ((ci((O = Nd(P, t, r, u, f, o, a, g, (_ = []), (x = []), c)), i), h === 123))
              if (f === 0) zi(P, t, O, O, _, i, c, a, x);
              else
                switch (d === 99 && Ee(P, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    zi(e, O, O, n && ci(Nd(e, O, O, 0, 0, o, a, g, o, (_ = []), c), x), o, x, c, a, n ? _ : x);
                    break;
                  default:
                    zi(P, O, O, O, [""], x, 0, a, x);
                }
        }
        (u = f = p = 0), (v = m = 1), (g = P = ""), (c = l);
        break;
      case 58:
        (c = 1 + St(P)), (p = y);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && rx() == 125) continue;
        }
        switch (((P += Ca(h)), h * v)) {
          case 38:
            m = f > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (a[u++] = (St(P) - 1) * m), (m = 1);
            break;
          case 64:
            bt() === 45 && (P += ji(Je())), (d = bt()), (f = c = St((g = P += lx(Ti())))), h++;
            break;
          case 45:
            y === 45 && St(P) == 2 && (v = 0);
        }
    }
  return i;
}
function Nd(e, t, r, n, o, i, l, a, s, u, f) {
  for (var c = o - 1, d = o === 0 ? i : [""], p = Qc(d), y = 0, v = 0, S = 0; y < n; ++y)
    for (var m = 0, h = ko(e, c + 1, (c = YS((v = l[y])))), g = e; m < p; ++m) (g = uv(v > 0 ? d[m] + " " + h : ee(h, /&\f/g, d[m]))) && (s[S++] = g);
  return ka(e, t, r, o === 0 ? Wc : a, s, u, f);
}
function sx(e, t, r) {
  return ka(e, t, r, av, Ca(tx()), ko(e, 2, -2), 0);
}
function Td(e, t, r, n) {
  return ka(e, t, r, Gc, ko(e, 0, n), ko(e, n + 1, -1), n);
}
function dn(e, t) {
  for (var r = "", n = Qc(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function ux(e, t, r, n) {
  switch (e.type) {
    case XS:
    case Gc:
      return (e.return = e.return || e.value);
    case av:
      return "";
    case sv:
      return (e.return = e.value + "{" + dn(e.children, n) + "}");
    case Wc:
      e.value = e.props.join(",");
  }
  return St((r = dn(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function cx(e) {
  var t = Qc(e);
  return function (r, n, o, i) {
    for (var l = "", a = 0; a < t; a++) l += e[a](r, n, o, i) || "";
    return l;
  };
}
function fx(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function dx(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var px = function (t, r, n) {
    for (var o = 0, i = 0; (o = i), (i = bt()), o === 38 && i === 12 && (r[n] = 1), !bo(i); ) Je();
    return Fo(t, We);
  },
  mx = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (bo(o)) {
        case 0:
          o === 38 && bt() === 12 && (r[n] = 1), (t[n] += px(We - 1, r, n));
          break;
        case 2:
          t[n] += ji(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = bt() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Ca(o);
      }
    while ((o = Je()));
    return t;
  },
  hx = function (t, r) {
    return dv(mx(fv(t), r));
  },
  jd = new WeakMap(),
  yx = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !jd.get(n)) && !o) {
        jd.set(t, !0);
        for (var i = [], l = hx(r, i), a = n.props, s = 0, u = 0; s < l.length; s++)
          for (var f = 0; f < a.length; f++, u++) t.props[u] = i[s] ? l[s].replace(/&\f/g, a[f]) : a[f] + " " + l[s];
      }
    }
  },
  vx = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function pv(e, t) {
  switch (JS(e, t)) {
    case 5103:
      return J + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return J + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + vl + e + Re + e + e;
    case 6828:
    case 4268:
      return J + e + Re + e + e;
    case 6165:
      return J + e + Re + "flex-" + e + e;
    case 5187:
      return J + e + ee(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + Re + "flex-$1$2") + e;
    case 5443:
      return J + e + Re + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return J + e + Re + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return J + e + Re + ee(e, "shrink", "negative") + e;
    case 5292:
      return J + e + Re + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return J + "box-" + ee(e, "-grow", "") + J + e + Re + ee(e, "grow", "positive") + e;
    case 4554:
      return J + ee(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, J + "$1$`$1");
    case 4968:
      return ee(ee(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + Re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, J + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (St(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break;
          case 102:
            return ee(e, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + vl + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ou(e, "stretch") ? pv(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, St(e) - 3 - (~Ou(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + J) + e;
        case 101:
          return ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + J + (Ee(e, 14) === 45 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + Re + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return J + e + Re + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return J + e + Re + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return J + e + Re + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return J + e + Re + e + e;
  }
  return e;
}
var gx = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Gc:
          t.return = pv(t.value, t.length);
          break;
        case sv:
          return dn([Fn(t, { value: ee(t.value, "@", "@" + J) })], o);
        case Wc:
          if (t.length)
            return ex(t.props, function (i) {
              switch (ZS(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return dn([Fn(t, { props: [ee(i, /:(read-\w+)/, ":" + vl + "$1")] })], o);
                case "::placeholder":
                  return dn(
                    [
                      Fn(t, { props: [ee(i, /:(plac\w+)/, ":" + J + "input-$1")] }),
                      Fn(t, { props: [ee(i, /:(plac\w+)/, ":" + vl + "$1")] }),
                      Fn(t, { props: [ee(i, /:(plac\w+)/, Re + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  wx = [gx],
  _x = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var S = v.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || wx,
      i = {},
      l,
      a = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function (v) {
        for (var S = v.getAttribute("data-emotion").split(" "), m = 1; m < S.length; m++) i[S[m]] = !0;
        a.push(v);
      });
    var s,
      u = [yx, vx];
    {
      var f,
        c = [
          ux,
          fx(function (v) {
            f.insert(v);
          }),
        ],
        d = cx(u.concat(o, c)),
        p = function (S) {
          return dn(ax(S), d);
        };
      s = function (S, m, h, g) {
        (f = h), p(S ? S + "{" + m.styles + "}" : m.styles), g && (y.inserted[m.name] = !0);
      };
    }
    var y = {
      key: r,
      sheet: new KS({ key: r, container: l, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return y.sheet.hydrate(a), y;
  };
const Sx = _x;
var xx = !0;
function Px(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var Ox = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || xx === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
  },
  Ex = function (t, r, n) {
    Ox(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Cx(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r = (e.charCodeAt(n) & 255) | ((e.charCodeAt(++n) & 255) << 8) | ((e.charCodeAt(++n) & 255) << 16) | ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t = ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^ ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (t ^= t >>> 13), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)), ((t ^ (t >>> 15)) >>> 0).toString(36);
}
var $x = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  kx = /[A-Z]|^ms/g,
  bx = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  mv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  zd = function (t) {
    return t != null && typeof t != "boolean";
  },
  ms = dx(function (e) {
    return mv(e) ? e : e.replace(kx, "-$&").toLowerCase();
  }),
  Id = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(bx, function (n, o, i) {
            return (xt = { name: o, styles: i, next: xt }), o;
          });
    }
    return $x[t] !== 1 && !mv(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ro(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1) return (xt = { name: r.name, styles: r.styles, next: xt }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0) for (; n !== void 0; ) (xt = { name: n.name, styles: n.styles, next: xt }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return Rx(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = xt,
          l = r(e);
        return (xt = i), Ro(e, t, l);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function Rx(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += Ro(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var l = r[i];
      if (typeof l != "object") t != null && t[l] !== void 0 ? (n += i + "{" + t[l] + "}") : zd(l) && (n += ms(i) + ":" + Id(i, l) + ";");
      else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var a = 0; a < l.length; a++) zd(l[a]) && (n += ms(i) + ":" + Id(i, l[a]) + ";");
      else {
        var s = Ro(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            n += ms(i) + ":" + s + ";";
            break;
          }
          default:
            n += i + "{" + s + "}";
        }
      }
    }
  return n;
}
var Ld = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  xt,
  Nx = function (t, r, n) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
    var o = !0,
      i = "";
    xt = void 0;
    var l = t[0];
    l == null || l.raw === void 0 ? ((o = !1), (i += Ro(n, r, l))) : (i += l[0]);
    for (var a = 1; a < t.length; a++) (i += Ro(n, r, t[a])), o && (i += l[a]);
    Ld.lastIndex = 0;
    for (var s = "", u; (u = Ld.exec(i)) !== null; ) s += "-" + u[1];
    var f = Cx(i) + s;
    return { name: f, styles: i, next: xt };
  };
function hv(e) {
  return Object.keys(e).reduce((t, r) => (e[r] !== void 0 && (t[r] = e[r]), t), {});
}
var Tx = Object.defineProperty,
  Md = Object.getOwnPropertySymbols,
  jx = Object.prototype.hasOwnProperty,
  zx = Object.prototype.propertyIsEnumerable,
  Ad = (e, t, r) => (t in e ? Tx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  hs = (e, t) => {
    for (var r in t || (t = {})) jx.call(t, r) && Ad(e, r, t[r]);
    if (Md) for (var r of Md(t)) zx.call(t, r) && Ad(e, r, t[r]);
    return e;
  };
const yv = w.createContext({ theme: lv });
function Sr() {
  var e;
  return ((e = w.useContext(yv)) == null ? void 0 : e.theme) || lv;
}
function Ix(e) {
  const t = Sr(),
    r = (n) => {
      var o, i, l, a;
      return {
        styles: ((o = t.components[n]) == null ? void 0 : o.styles) || {},
        classNames: ((i = t.components[n]) == null ? void 0 : i.classNames) || {},
        variants: (l = t.components[n]) == null ? void 0 : l.variants,
        sizes: (a = t.components[n]) == null ? void 0 : a.sizes,
      };
    };
  return Array.isArray(e) ? e.map(r) : [r(e)];
}
function vv() {
  var e;
  return (e = w.useContext(yv)) == null ? void 0 : e.emotionCache;
}
function re(e, t, r) {
  var n;
  const o = Sr(),
    i = (n = o.components[e]) == null ? void 0 : n.defaultProps,
    l = typeof i == "function" ? i(o) : i;
  return hs(hs(hs({}, t), l), hv(r));
}
const Lx = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function ba(e) {
  return Lx[e];
}
function Mx(e, t) {
  const r = w.useRef();
  return (
    (!r.current || t.length !== r.current.prevDeps.length || r.current.prevDeps.map((n, o) => n === t[o]).indexOf(!1) >= 0) && (r.current = { v: e(), prevDeps: [...t] }),
    r.current.v
  );
}
const Ax = Sx({ key: "mantine", prepend: !0 });
function Dx() {
  return vv() || Ax;
}
var Fx = Object.defineProperty,
  Dd = Object.getOwnPropertySymbols,
  Bx = Object.prototype.hasOwnProperty,
  Vx = Object.prototype.propertyIsEnumerable,
  Fd = (e, t, r) => (t in e ? Fx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Ux = (e, t) => {
    for (var r in t || (t = {})) Bx.call(t, r) && Fd(e, r, t[r]);
    if (Dd) for (var r of Dd(t)) Vx.call(t, r) && Fd(e, r, t[r]);
    return e;
  };
const ys = "ref";
function Hx(e) {
  let t;
  if (e.length !== 1) return { args: e, ref: t };
  const [r] = e;
  if (!(r instanceof Object)) return { args: e, ref: t };
  if (!(ys in r)) return { args: e, ref: t };
  t = r[ys];
  const n = Ux({}, r);
  return delete n[ys], { args: [n], ref: t };
}
const { cssFactory: Wx } = (() => {
  function e(r, n, o) {
    const i = [],
      l = Px(r, i, o);
    return i.length < 2 ? o : l + n(i);
  }
  function t(r) {
    const { cache: n } = r,
      o = (...l) => {
        const { ref: a, args: s } = Hx(l),
          u = Nx(s, n.registered);
        return Ex(n, u, !1), `${n.key}-${u.name}${a === void 0 ? "" : ` ${a}`}`;
      };
    return { css: o, cx: (...l) => e(n.registered, o, pS(l)) };
  }
  return { cssFactory: t };
})();
function gv() {
  const e = Dx();
  return Mx(() => Wx({ cache: e }), [e]);
}
function Gx({ cx: e, classes: t, context: r, classNames: n, name: o, cache: i }) {
  const l = r.reduce(
    (a, s) => (
      Object.keys(s.classNames).forEach((u) => {
        typeof a[u] != "string" ? (a[u] = `${s.classNames[u]}`) : (a[u] = `${a[u]} ${s.classNames[u]}`);
      }),
      a
    ),
    {}
  );
  return Object.keys(t).reduce(
    (a, s) => (
      (a[s] = e(
        t[s],
        l[s],
        n != null && n[s],
        Array.isArray(o)
          ? o
              .filter(Boolean)
              .map((u) => `${(i == null ? void 0 : i.key) || "mantine"}-${u}-${s}`)
              .join(" ")
          : o
          ? `${(i == null ? void 0 : i.key) || "mantine"}-${o}-${s}`
          : null
      )),
      a
    ),
    {}
  );
}
var Qx = Object.defineProperty,
  Bd = Object.getOwnPropertySymbols,
  Kx = Object.prototype.hasOwnProperty,
  Xx = Object.prototype.propertyIsEnumerable,
  Vd = (e, t, r) => (t in e ? Qx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  vs = (e, t) => {
    for (var r in t || (t = {})) Kx.call(t, r) && Vd(e, r, t[r]);
    if (Bd) for (var r of Bd(t)) Xx.call(t, r) && Vd(e, r, t[r]);
    return e;
  };
function Cu(e, t) {
  return (
    t &&
      Object.keys(t).forEach((r) => {
        e[r] ? (e[r] = vs(vs({}, e[r]), t[r])) : (e[r] = vs({}, t[r]));
      }),
    e
  );
}
function Ud(e, t, r, n) {
  const o = (i) => (typeof i == "function" ? i(t, r || {}, n) : i || {});
  return Array.isArray(e) ? e.map((i) => o(i.styles)).reduce((i, l) => Cu(i, l), {}) : o(e);
}
function Yx({ ctx: e, theme: t, params: r, variant: n, size: o }) {
  return e.reduce(
    (i, l) => (
      l.variants && n in l.variants && Cu(i, l.variants[n](t, r, { variant: n, size: o })), l.sizes && o in l.sizes && Cu(i, l.sizes[o](t, r, { variant: n, size: o })), i
    ),
    {}
  );
}
function he(e) {
  const t = typeof e == "function" ? e : () => e;
  function r(n, o) {
    const i = Sr(),
      l = Ix(o == null ? void 0 : o.name),
      a = vv(),
      s = { variant: o == null ? void 0 : o.variant, size: o == null ? void 0 : o.size },
      { css: u, cx: f } = gv(),
      c = t(i, n, s),
      d = Ud(o == null ? void 0 : o.styles, i, n, s),
      p = Ud(l, i, n, s),
      y = Yx({ ctx: l, theme: i, params: n, variant: o == null ? void 0 : o.variant, size: o == null ? void 0 : o.size }),
      v = Object.fromEntries(
        Object.keys(c).map((S) => {
          const m = f({ [u(c[S])]: !(o != null && o.unstyled) }, u(y[S]), u(p[S]), u(d[S]));
          return [S, m];
        })
      );
    return { classes: Gx({ cx: f, classes: v, context: l, classNames: o == null ? void 0 : o.classNames, name: o == null ? void 0 : o.name, cache: a }), cx: f, theme: i };
  }
  return r;
}
var qx = Object.defineProperty,
  Jx = Object.defineProperties,
  Zx = Object.getOwnPropertyDescriptors,
  Hd = Object.getOwnPropertySymbols,
  eP = Object.prototype.hasOwnProperty,
  tP = Object.prototype.propertyIsEnumerable,
  Wd = (e, t, r) => (t in e ? qx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Bn = (e, t) => {
    for (var r in t || (t = {})) eP.call(t, r) && Wd(e, r, t[r]);
    if (Hd) for (var r of Hd(t)) tP.call(t, r) && Wd(e, r, t[r]);
    return e;
  },
  Vn = (e, t) => Jx(e, Zx(t));
const Un = { in: { opacity: 1, transform: "scale(1)" }, out: { opacity: 0, transform: `scale(.9) translateY(${N(10)})` }, transitionProperty: "transform, opacity" },
  fi = {
    fade: { in: { opacity: 1 }, out: { opacity: 0 }, transitionProperty: "opacity" },
    scale: { in: { opacity: 1, transform: "scale(1)" }, out: { opacity: 0, transform: "scale(0)" }, common: { transformOrigin: "top" }, transitionProperty: "transform, opacity" },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: `translateY(-${N(20)}) skew(-10deg, -5deg)` },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: `translateY(${N(20)}) skew(-10deg, -5deg)` },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${N(20)}) rotate(-5deg)` },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${N(20)}) rotate(5deg)` },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: Vn(Bn({}, Un), { common: { transformOrigin: "center center" } }),
    "pop-bottom-left": Vn(Bn({}, Un), { common: { transformOrigin: "bottom left" } }),
    "pop-bottom-right": Vn(Bn({}, Un), { common: { transformOrigin: "bottom right" } }),
    "pop-top-left": Vn(Bn({}, Un), { common: { transformOrigin: "top left" } }),
    "pop-top-right": Vn(Bn({}, Un), { common: { transformOrigin: "top right" } }),
  };
function rP(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function nP(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function oP(e, t, { getInitialValueInEffect: r } = { getInitialValueInEffect: !0 }) {
  const [n, o] = w.useState(r ? t : nP(e, t)),
    i = w.useRef();
  return (
    w.useEffect(() => {
      if ("matchMedia" in window) return (i.current = window.matchMedia(e)), o(i.current.matches), rP(i.current, (l) => o(l.matches));
    }, [e]),
    n
  );
}
const wv = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function No(e, t) {
  const r = w.useRef(!1);
  w.useEffect(
    () => () => {
      r.current = !1;
    },
    []
  ),
    w.useEffect(() => {
      if (r.current) return e();
      r.current = !0;
    }, t);
}
function iP({ opened: e, shouldReturnFocus: t = !0 }) {
  const r = w.useRef(),
    n = () => {
      var o;
      r.current && "focus" in r.current && typeof r.current.focus == "function" && ((o = r.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    No(() => {
      let o = -1;
      const i = (l) => {
        l.key === "Tab" && window.clearTimeout(o);
      };
      return (
        document.addEventListener("keydown", i),
        e ? (r.current = document.activeElement) : t && (o = window.setTimeout(n, 10)),
        () => {
          window.clearTimeout(o), document.removeEventListener("keydown", i);
        }
      );
    }, [e, t]),
    n
  );
}
const lP = /input|select|textarea|button|object/,
  _v = "a, input, select, textarea, button, object, [tabindex]";
function aP(e) {
  return e.style.display === "none";
}
function sP(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden") return !1;
  let r = e;
  for (; r && !(r === document.body || r.nodeType === 11); ) {
    if (aP(r)) return !1;
    r = r.parentNode;
  }
  return !0;
}
function Sv(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function $u(e) {
  const t = e.nodeName.toLowerCase(),
    r = !Number.isNaN(Sv(e));
  return ((lP.test(t) && !e.disabled) || (e instanceof HTMLAnchorElement && e.href) || r) && sP(e);
}
function xv(e) {
  const t = Sv(e);
  return (Number.isNaN(t) || t >= 0) && $u(e);
}
function uP(e) {
  return Array.from(e.querySelectorAll(_v)).filter(xv);
}
function cP(e, t) {
  const r = uP(e);
  if (!r.length) {
    t.preventDefault();
    return;
  }
  const n = r[t.shiftKey ? 0 : r.length - 1],
    o = e.getRootNode();
  if (!(n === o.activeElement || e === o.activeElement)) return;
  t.preventDefault();
  const l = r[t.shiftKey ? r.length - 1 : 0];
  l && l.focus();
}
function fP(e, t = "body > :not(script)") {
  const r = Array.from(document.querySelectorAll(t)).map((n) => {
    var o;
    if (((o = n == null ? void 0 : n.shadowRoot) != null && o.contains(e)) || n.contains(e)) return;
    const i = n.getAttribute("aria-hidden");
    return (i === null || i === "false") && n.setAttribute("aria-hidden", "true"), { node: n, ariaHidden: i };
  });
  return () => {
    r.forEach((n) => {
      n && (n.ariaHidden === null ? n.node.removeAttribute("aria-hidden") : n.node.setAttribute("aria-hidden", n.ariaHidden));
    });
  };
}
function dP(e = !0) {
  const t = w.useRef(),
    r = w.useRef(null),
    n = (i) => {
      let l = i.querySelector("[data-autofocus]");
      if (!l) {
        const a = Array.from(i.querySelectorAll(_v));
        (l = a.find(xv) || a.find($u) || null), !l && $u(i) && (l = i);
      }
      l && l.focus({ preventScroll: !0 });
    },
    o = w.useCallback(
      (i) => {
        if (e) {
          if (i === null) {
            r.current && (r.current(), (r.current = null));
            return;
          }
          (r.current = fP(i)),
            t.current !== i &&
              (i
                ? (setTimeout(() => {
                    i.getRootNode() && n(i);
                  }),
                  (t.current = i))
                : (t.current = null));
        }
      },
      [e]
    );
  return (
    w.useEffect(() => {
      if (!e) return;
      t.current && setTimeout(() => n(t.current));
      const i = (l) => {
        l.key === "Tab" && t.current && cP(t.current, l);
      };
      return (
        document.addEventListener("keydown", i),
        () => {
          document.removeEventListener("keydown", i), r.current && r.current();
        }
      );
    }, [e]),
    o
  );
}
const pP = C["useId".toString()] || (() => {});
function mP() {
  const e = pP();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function hP() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Pv(e) {
  const t = mP(),
    [r, n] = w.useState(t);
  return (
    wv(() => {
      n(hP());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : r
  );
}
function ku(e, t, r) {
  w.useEffect(() => (window.addEventListener(e, t, r), () => window.removeEventListener(e, t, r)), [e, t]);
}
function yP(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function vP(...e) {
  return (t) => {
    e.forEach((r) => yP(r, t));
  };
}
function Kc(...e) {
  return w.useCallback(vP(...e), e);
}
function Ov(e, t) {
  return oP("(prefers-reduced-motion: reduce)", e, t);
}
const Gd = { passive: !0 };
function gP() {
  const [e, t] = w.useState({ width: 0, height: 0 }),
    r = w.useCallback(() => {
      t({ width: window.innerWidth || 0, height: window.innerHeight || 0 });
    }, []);
  return ku("resize", r, Gd), ku("orientationchange", r, Gd), w.useEffect(r, []), e;
}
var Qd = Object.getOwnPropertySymbols,
  wP = Object.prototype.hasOwnProperty,
  _P = Object.prototype.propertyIsEnumerable,
  SP = (e, t) => {
    var r = {};
    for (var n in e) wP.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Qd) for (var n of Qd(e)) t.indexOf(n) < 0 && _P.call(e, n) && (r[n] = e[n]);
    return r;
  };
function xP(e) {
  const t = e,
    {
      m: r,
      mx: n,
      my: o,
      mt: i,
      mb: l,
      ml: a,
      mr: s,
      p: u,
      px: f,
      py: c,
      pt: d,
      pb: p,
      pl: y,
      pr: v,
      bg: S,
      c: m,
      opacity: h,
      ff: g,
      fz: _,
      fw: x,
      lts: O,
      ta: P,
      lh: E,
      fs: T,
      tt: k,
      td: z,
      w: D,
      miw: F,
      maw: j,
      h: B,
      mih: V,
      mah: q,
      bgsz: b,
      bgp: I,
      bgr: M,
      bga: W,
      pos: Z,
      top: Ge,
      left: Qe,
      bottom: Tt,
      right: De,
      inset: vt,
      display: U,
    } = t,
    H = SP(t, [
      "m",
      "mx",
      "my",
      "mt",
      "mb",
      "ml",
      "mr",
      "p",
      "px",
      "py",
      "pt",
      "pb",
      "pl",
      "pr",
      "bg",
      "c",
      "opacity",
      "ff",
      "fz",
      "fw",
      "lts",
      "ta",
      "lh",
      "fs",
      "tt",
      "td",
      "w",
      "miw",
      "maw",
      "h",
      "mih",
      "mah",
      "bgsz",
      "bgp",
      "bgr",
      "bga",
      "pos",
      "top",
      "left",
      "bottom",
      "right",
      "inset",
      "display",
    ]);
  return {
    systemStyles: hv({
      m: r,
      mx: n,
      my: o,
      mt: i,
      mb: l,
      ml: a,
      mr: s,
      p: u,
      px: f,
      py: c,
      pt: d,
      pb: p,
      pl: y,
      pr: v,
      bg: S,
      c: m,
      opacity: h,
      ff: g,
      fz: _,
      fw: x,
      lts: O,
      ta: P,
      lh: E,
      fs: T,
      tt: k,
      td: z,
      w: D,
      miw: F,
      maw: j,
      h: B,
      mih: V,
      mah: q,
      bgsz: b,
      bgp: I,
      bgr: M,
      bga: W,
      pos: Z,
      top: Ge,
      left: Qe,
      bottom: Tt,
      right: De,
      inset: vt,
      display: U,
    }),
    rest: H,
  };
}
function PP(e, t) {
  const r = Object.keys(e)
    .filter((n) => n !== "base")
    .sort((n, o) => Lr(G({ size: n, sizes: t.breakpoints })) - Lr(G({ size: o, sizes: t.breakpoints })));
  return "base" in e ? ["base", ...r] : r;
}
function OP({ value: e, theme: t, getValue: r, property: n }) {
  if (e == null) return;
  if (typeof e == "object")
    return PP(e, t).reduce((l, a) => {
      if (a === "base" && e.base !== void 0) {
        const u = r(e.base, t);
        return Array.isArray(n)
          ? (n.forEach((f) => {
              l[f] = u;
            }),
            l)
          : ((l[n] = u), l);
      }
      const s = r(e[a], t);
      return Array.isArray(n)
        ? ((l[t.fn.largerThan(a)] = {}),
          n.forEach((u) => {
            l[t.fn.largerThan(a)][u] = s;
          }),
          l)
        : ((l[t.fn.largerThan(a)] = { [n]: s }), l);
    }, {});
  const o = r(e, t);
  return Array.isArray(n) ? n.reduce((i, l) => ((i[l] = o), i), {}) : { [n]: o };
}
function EP(e, t) {
  return e === "dimmed" ? (t.colorScheme === "dark" ? t.colors.dark[2] : t.colors.gray[6]) : t.fn.variant({ variant: "filled", color: e, primaryFallback: !1 }).background;
}
function CP(e) {
  return N(e);
}
function $P(e) {
  return e;
}
function kP(e, t) {
  return G({ size: e, sizes: t.fontSizes });
}
const bP = ["-xs", "-sm", "-md", "-lg", "-xl"];
function RP(e, t) {
  return bP.includes(e) ? `calc(${G({ size: e.replace("-", ""), sizes: t.spacing })} * -1)` : G({ size: e, sizes: t.spacing });
}
const NP = { identity: $P, color: EP, size: CP, fontSize: kP, spacing: RP },
  TP = {
    m: { type: "spacing", property: "margin" },
    mt: { type: "spacing", property: "marginTop" },
    mb: { type: "spacing", property: "marginBottom" },
    ml: { type: "spacing", property: "marginLeft" },
    mr: { type: "spacing", property: "marginRight" },
    mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
    my: { type: "spacing", property: ["marginTop", "marginBottom"] },
    p: { type: "spacing", property: "padding" },
    pt: { type: "spacing", property: "paddingTop" },
    pb: { type: "spacing", property: "paddingBottom" },
    pl: { type: "spacing", property: "paddingLeft" },
    pr: { type: "spacing", property: "paddingRight" },
    px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
    py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
    bg: { type: "color", property: "background" },
    c: { type: "color", property: "color" },
    opacity: { type: "identity", property: "opacity" },
    ff: { type: "identity", property: "fontFamily" },
    fz: { type: "fontSize", property: "fontSize" },
    fw: { type: "identity", property: "fontWeight" },
    lts: { type: "size", property: "letterSpacing" },
    ta: { type: "identity", property: "textAlign" },
    lh: { type: "identity", property: "lineHeight" },
    fs: { type: "identity", property: "fontStyle" },
    tt: { type: "identity", property: "textTransform" },
    td: { type: "identity", property: "textDecoration" },
    w: { type: "spacing", property: "width" },
    miw: { type: "spacing", property: "minWidth" },
    maw: { type: "spacing", property: "maxWidth" },
    h: { type: "spacing", property: "height" },
    mih: { type: "spacing", property: "minHeight" },
    mah: { type: "spacing", property: "maxHeight" },
    bgsz: { type: "size", property: "backgroundSize" },
    bgp: { type: "identity", property: "backgroundPosition" },
    bgr: { type: "identity", property: "backgroundRepeat" },
    bga: { type: "identity", property: "backgroundAttachment" },
    pos: { type: "identity", property: "position" },
    top: { type: "identity", property: "top" },
    left: { type: "size", property: "left" },
    bottom: { type: "size", property: "bottom" },
    right: { type: "size", property: "right" },
    inset: { type: "size", property: "inset" },
    display: { type: "identity", property: "display" },
  };
var jP = Object.defineProperty,
  Kd = Object.getOwnPropertySymbols,
  zP = Object.prototype.hasOwnProperty,
  IP = Object.prototype.propertyIsEnumerable,
  Xd = (e, t, r) => (t in e ? jP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Yd = (e, t) => {
    for (var r in t || (t = {})) zP.call(t, r) && Xd(e, r, t[r]);
    if (Kd) for (var r of Kd(t)) IP.call(t, r) && Xd(e, r, t[r]);
    return e;
  };
function qd(e, t, r = TP) {
  return Object.keys(r)
    .reduce((o, i) => (i in e && e[i] !== void 0 && o.push(OP({ value: e[i], getValue: NP[r[i].type], property: r[i].property, theme: t })), o), [])
    .reduce(
      (o, i) => (
        Object.keys(i).forEach((l) => {
          typeof i[l] == "object" && i[l] !== null && l in o ? (o[l] = Yd(Yd({}, o[l]), i[l])) : (o[l] = i[l]);
        }),
        o
      ),
      {}
    );
}
function Jd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function LP(e, t, r) {
  const n = Sr(),
    { css: o, cx: i } = gv();
  return Array.isArray(e)
    ? i(
        r,
        o(qd(t, n)),
        e.map((l) => o(Jd(l, n)))
      )
    : i(r, o(Jd(e, n)), o(qd(t, n)));
}
var MP = Object.defineProperty,
  gl = Object.getOwnPropertySymbols,
  Ev = Object.prototype.hasOwnProperty,
  Cv = Object.prototype.propertyIsEnumerable,
  Zd = (e, t, r) => (t in e ? MP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  AP = (e, t) => {
    for (var r in t || (t = {})) Ev.call(t, r) && Zd(e, r, t[r]);
    if (gl) for (var r of gl(t)) Cv.call(t, r) && Zd(e, r, t[r]);
    return e;
  },
  DP = (e, t) => {
    var r = {};
    for (var n in e) Ev.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && gl) for (var n of gl(e)) t.indexOf(n) < 0 && Cv.call(e, n) && (r[n] = e[n]);
    return r;
  };
const $v = w.forwardRef((e, t) => {
  var r = e,
    { className: n, component: o, style: i, sx: l } = r,
    a = DP(r, ["className", "component", "style", "sx"]);
  const { systemStyles: s, rest: u } = xP(a),
    f = o || "div";
  return C.createElement(f, AP({ ref: t, className: LP(l, s, n), style: i }, u));
});
$v.displayName = "@mantine/core/Box";
const ze = $v;
var FP = Object.defineProperty,
  BP = Object.defineProperties,
  VP = Object.getOwnPropertyDescriptors,
  ep = Object.getOwnPropertySymbols,
  UP = Object.prototype.hasOwnProperty,
  HP = Object.prototype.propertyIsEnumerable,
  tp = (e, t, r) => (t in e ? FP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  rp = (e, t) => {
    for (var r in t || (t = {})) UP.call(t, r) && tp(e, r, t[r]);
    if (ep) for (var r of ep(t)) HP.call(t, r) && tp(e, r, t[r]);
    return e;
  },
  WP = (e, t) => BP(e, VP(t)),
  GP = he((e) => ({
    root: WP(rp(rp({}, e.fn.focusStyles()), e.fn.fontStyles()), {
      cursor: "pointer",
      border: 0,
      padding: 0,
      appearance: "none",
      fontSize: e.fontSizes.md,
      backgroundColor: "transparent",
      textAlign: "left",
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      textDecoration: "none",
      boxSizing: "border-box",
    }),
  }));
const QP = GP;
var KP = Object.defineProperty,
  wl = Object.getOwnPropertySymbols,
  kv = Object.prototype.hasOwnProperty,
  bv = Object.prototype.propertyIsEnumerable,
  np = (e, t, r) => (t in e ? KP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  XP = (e, t) => {
    for (var r in t || (t = {})) kv.call(t, r) && np(e, r, t[r]);
    if (wl) for (var r of wl(t)) bv.call(t, r) && np(e, r, t[r]);
    return e;
  },
  YP = (e, t) => {
    var r = {};
    for (var n in e) kv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && wl) for (var n of wl(e)) t.indexOf(n) < 0 && bv.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Rv = w.forwardRef((e, t) => {
  const r = re("UnstyledButton", {}, e),
    { className: n, component: o = "button", unstyled: i, variant: l } = r,
    a = YP(r, ["className", "component", "unstyled", "variant"]),
    { classes: s, cx: u } = QP(null, { name: "UnstyledButton", unstyled: i, variant: l });
  return C.createElement(ze, XP({ component: o, ref: t, className: u(s.root, n), type: o === "button" ? "button" : void 0 }, a));
});
Rv.displayName = "@mantine/core/UnstyledButton";
const Nv = Rv;
var qP = Object.defineProperty,
  JP = Object.defineProperties,
  ZP = Object.getOwnPropertyDescriptors,
  op = Object.getOwnPropertySymbols,
  eO = Object.prototype.hasOwnProperty,
  tO = Object.prototype.propertyIsEnumerable,
  ip = (e, t, r) => (t in e ? qP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  bu = (e, t) => {
    for (var r in t || (t = {})) eO.call(t, r) && ip(e, r, t[r]);
    if (op) for (var r of op(t)) tO.call(t, r) && ip(e, r, t[r]);
    return e;
  },
  lp = (e, t) => JP(e, ZP(t));
const rO = ["subtle", "filled", "outline", "light", "default", "transparent", "gradient"],
  di = { xs: N(18), sm: N(22), md: N(28), lg: N(34), xl: N(44) };
function nO({ variant: e, theme: t, color: r, gradient: n }) {
  const o = t.fn.variant({ color: r, variant: e, gradient: n });
  return e === "gradient"
    ? { border: 0, backgroundImage: o.background, color: o.color, "&:hover": t.fn.hover({ backgroundSize: "200%" }) }
    : rO.includes(e)
    ? bu({ border: `${N(1)} solid ${o.border}`, backgroundColor: o.background, color: o.color }, t.fn.hover({ backgroundColor: o.hover }))
    : null;
}
var oO = he((e, { radius: t, color: r, gradient: n }, { variant: o, size: i }) => ({
  root: lp(
    bu(
      {
        position: "relative",
        borderRadius: e.fn.radius(t),
        padding: 0,
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: G({ size: i, sizes: di }),
        minHeight: G({ size: i, sizes: di }),
        width: G({ size: i, sizes: di }),
        minWidth: G({ size: i, sizes: di }),
      },
      nO({ variant: o, theme: e, color: r, gradient: n })
    ),
    {
      "&:active": e.activeStyles,
      "& [data-action-icon-loader]": { maxWidth: "70%" },
      "&:disabled, &[data-disabled]": {
        color: e.colors.gray[e.colorScheme === "dark" ? 6 : 4],
        cursor: "not-allowed",
        backgroundColor: o === "transparent" ? void 0 : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
        borderColor: o === "transparent" ? void 0 : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
        backgroundImage: "none",
        pointerEvents: "none",
        "&:active": { transform: "none" },
      },
      "&[data-loading]": {
        pointerEvents: "none",
        "&::before": lp(bu({ content: '""' }, e.fn.cover(N(-1))), {
          backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
          borderRadius: e.fn.radius(t),
          cursor: "not-allowed",
        }),
      },
    }
  ),
}));
const iO = oO;
var lO = Object.defineProperty,
  _l = Object.getOwnPropertySymbols,
  Tv = Object.prototype.hasOwnProperty,
  jv = Object.prototype.propertyIsEnumerable,
  ap = (e, t, r) => (t in e ? lO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  aO = (e, t) => {
    for (var r in t || (t = {})) Tv.call(t, r) && ap(e, r, t[r]);
    if (_l) for (var r of _l(t)) jv.call(t, r) && ap(e, r, t[r]);
    return e;
  },
  sO = (e, t) => {
    var r = {};
    for (var n in e) Tv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && _l) for (var n of _l(e)) t.indexOf(n) < 0 && jv.call(e, n) && (r[n] = e[n]);
    return r;
  };
function uO(e) {
  var t = e,
    { size: r, color: n } = t,
    o = sO(t, ["size", "color"]);
  return C.createElement(
    "svg",
    aO({ viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", fill: n, width: r }, o),
    C.createElement(
      "rect",
      { y: "10", width: "15", height: "120", rx: "6" },
      C.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      C.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    ),
    C.createElement(
      "rect",
      { x: "30", y: "10", width: "15", height: "120", rx: "6" },
      C.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      C.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    ),
    C.createElement(
      "rect",
      { x: "60", width: "15", height: "140", rx: "6" },
      C.createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      C.createElement("animate", { attributeName: "y", begin: "0s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    ),
    C.createElement(
      "rect",
      { x: "90", y: "10", width: "15", height: "120", rx: "6" },
      C.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      C.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    ),
    C.createElement(
      "rect",
      { x: "120", y: "10", width: "15", height: "120", rx: "6" },
      C.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      C.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    )
  );
}
var cO = Object.defineProperty,
  Sl = Object.getOwnPropertySymbols,
  zv = Object.prototype.hasOwnProperty,
  Iv = Object.prototype.propertyIsEnumerable,
  sp = (e, t, r) => (t in e ? cO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  fO = (e, t) => {
    for (var r in t || (t = {})) zv.call(t, r) && sp(e, r, t[r]);
    if (Sl) for (var r of Sl(t)) Iv.call(t, r) && sp(e, r, t[r]);
    return e;
  },
  dO = (e, t) => {
    var r = {};
    for (var n in e) zv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Sl) for (var n of Sl(e)) t.indexOf(n) < 0 && Iv.call(e, n) && (r[n] = e[n]);
    return r;
  };
function pO(e) {
  var t = e,
    { size: r, color: n } = t,
    o = dO(t, ["size", "color"]);
  return C.createElement(
    "svg",
    fO({ width: r, height: r, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", stroke: n }, o),
    C.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      C.createElement(
        "g",
        { transform: "translate(2.5 2.5)", strokeWidth: "5" },
        C.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }),
        C.createElement(
          "path",
          { d: "M32 16c0-9.94-8.06-16-16-16" },
          C.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 16 16", to: "360 16 16", dur: "1s", repeatCount: "indefinite" })
        )
      )
    )
  );
}
var mO = Object.defineProperty,
  xl = Object.getOwnPropertySymbols,
  Lv = Object.prototype.hasOwnProperty,
  Mv = Object.prototype.propertyIsEnumerable,
  up = (e, t, r) => (t in e ? mO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  hO = (e, t) => {
    for (var r in t || (t = {})) Lv.call(t, r) && up(e, r, t[r]);
    if (xl) for (var r of xl(t)) Mv.call(t, r) && up(e, r, t[r]);
    return e;
  },
  yO = (e, t) => {
    var r = {};
    for (var n in e) Lv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && xl) for (var n of xl(e)) t.indexOf(n) < 0 && Mv.call(e, n) && (r[n] = e[n]);
    return r;
  };
function vO(e) {
  var t = e,
    { size: r, color: n } = t,
    o = yO(t, ["size", "color"]);
  return C.createElement(
    "svg",
    hO({ width: r, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: n }, o),
    C.createElement(
      "circle",
      { cx: "15", cy: "15", r: "15" },
      C.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
      C.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    C.createElement(
      "circle",
      { cx: "60", cy: "15", r: "9", fillOpacity: "0.3" },
      C.createElement("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }),
      C.createElement("animate", {
        attributeName: "fill-opacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    ),
    C.createElement(
      "circle",
      { cx: "105", cy: "15", r: "15" },
      C.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
      C.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })
    )
  );
}
var gO = Object.defineProperty,
  Pl = Object.getOwnPropertySymbols,
  Av = Object.prototype.hasOwnProperty,
  Dv = Object.prototype.propertyIsEnumerable,
  cp = (e, t, r) => (t in e ? gO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  wO = (e, t) => {
    for (var r in t || (t = {})) Av.call(t, r) && cp(e, r, t[r]);
    if (Pl) for (var r of Pl(t)) Dv.call(t, r) && cp(e, r, t[r]);
    return e;
  },
  _O = (e, t) => {
    var r = {};
    for (var n in e) Av.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Pl) for (var n of Pl(e)) t.indexOf(n) < 0 && Dv.call(e, n) && (r[n] = e[n]);
    return r;
  };
const gs = { bars: uO, oval: pO, dots: vO },
  SO = { xs: N(18), sm: N(22), md: N(36), lg: N(44), xl: N(58) },
  xO = { size: "md" };
function Xc(e) {
  const t = re("Loader", xO, e),
    { size: r, color: n, variant: o } = t,
    i = _O(t, ["size", "color", "variant"]),
    l = Sr(),
    a = o in gs ? o : l.loader;
  return C.createElement(
    ze,
    wO(
      {
        role: "presentation",
        component: gs[a] || gs.bars,
        size: G({ size: r, sizes: SO }),
        color: l.fn.variant({ variant: "filled", primaryFallback: !1, color: n || l.primaryColor }).background,
      },
      i
    )
  );
}
Xc.displayName = "@mantine/core/Loader";
var PO = Object.defineProperty,
  Ol = Object.getOwnPropertySymbols,
  Fv = Object.prototype.hasOwnProperty,
  Bv = Object.prototype.propertyIsEnumerable,
  fp = (e, t, r) => (t in e ? PO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  dp = (e, t) => {
    for (var r in t || (t = {})) Fv.call(t, r) && fp(e, r, t[r]);
    if (Ol) for (var r of Ol(t)) Bv.call(t, r) && fp(e, r, t[r]);
    return e;
  },
  OO = (e, t) => {
    var r = {};
    for (var n in e) Fv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ol) for (var n of Ol(e)) t.indexOf(n) < 0 && Bv.call(e, n) && (r[n] = e[n]);
    return r;
  };
const EO = { color: "gray", size: "md", variant: "subtle" },
  Vv = w.forwardRef((e, t) => {
    const r = re("ActionIcon", EO, e),
      { className: n, color: o, children: i, radius: l, size: a, variant: s, gradient: u, disabled: f, loaderProps: c, loading: d, unstyled: p, __staticSelector: y } = r,
      v = OO(r, ["className", "color", "children", "radius", "size", "variant", "gradient", "disabled", "loaderProps", "loading", "unstyled", "__staticSelector"]),
      { classes: S, cx: m, theme: h } = iO({ radius: l, color: o, gradient: u }, { name: ["ActionIcon", y], unstyled: p, size: a, variant: s }),
      g = C.createElement(Xc, dp({ color: h.fn.variant({ color: o, variant: s }).color, size: "100%", "data-action-icon-loader": !0 }, c));
    return C.createElement(Nv, dp({ className: m(S.root, n), ref: t, disabled: f, "data-disabled": f || void 0, "data-loading": d || void 0, unstyled: p }, v), d ? g : i);
  });
Vv.displayName = "@mantine/core/ActionIcon";
const El = Vv;
var CO = Object.defineProperty,
  $O = Object.defineProperties,
  kO = Object.getOwnPropertyDescriptors,
  Cl = Object.getOwnPropertySymbols,
  Uv = Object.prototype.hasOwnProperty,
  Hv = Object.prototype.propertyIsEnumerable,
  pp = (e, t, r) => (t in e ? CO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  bO = (e, t) => {
    for (var r in t || (t = {})) Uv.call(t, r) && pp(e, r, t[r]);
    if (Cl) for (var r of Cl(t)) Hv.call(t, r) && pp(e, r, t[r]);
    return e;
  },
  RO = (e, t) => $O(e, kO(t)),
  NO = (e, t) => {
    var r = {};
    for (var n in e) Uv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Cl) for (var n of Cl(e)) t.indexOf(n) < 0 && Hv.call(e, n) && (r[n] = e[n]);
    return r;
  };
function Wv(e) {
  const t = re("Portal", {}, e),
    { children: r, target: n, className: o, innerRef: i } = t,
    l = NO(t, ["children", "target", "className", "innerRef"]),
    a = Sr(),
    [s, u] = w.useState(!1),
    f = w.useRef();
  return (
    wv(
      () => (
        u(!0),
        (f.current = n ? (typeof n == "string" ? document.querySelector(n) : n) : document.createElement("div")),
        n || document.body.appendChild(f.current),
        () => {
          !n && document.body.removeChild(f.current);
        }
      ),
      [n]
    ),
    s ? uo.createPortal(C.createElement("div", RO(bO({ className: o, dir: a.dir }, l), { ref: i }), r), f.current) : null
  );
}
Wv.displayName = "@mantine/core/Portal";
var TO = Object.defineProperty,
  $l = Object.getOwnPropertySymbols,
  Gv = Object.prototype.hasOwnProperty,
  Qv = Object.prototype.propertyIsEnumerable,
  mp = (e, t, r) => (t in e ? TO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  jO = (e, t) => {
    for (var r in t || (t = {})) Gv.call(t, r) && mp(e, r, t[r]);
    if ($l) for (var r of $l(t)) Qv.call(t, r) && mp(e, r, t[r]);
    return e;
  },
  zO = (e, t) => {
    var r = {};
    for (var n in e) Gv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && $l) for (var n of $l(e)) t.indexOf(n) < 0 && Qv.call(e, n) && (r[n] = e[n]);
    return r;
  };
function Ra(e) {
  var t = e,
    { withinPortal: r = !0, children: n } = t,
    o = zO(t, ["withinPortal", "children"]);
  return r ? C.createElement(Wv, jO({}, o), n) : C.createElement(C.Fragment, null, n);
}
Ra.displayName = "@mantine/core/OptionalPortal";
var IO = Object.defineProperty,
  hp = Object.getOwnPropertySymbols,
  LO = Object.prototype.hasOwnProperty,
  MO = Object.prototype.propertyIsEnumerable,
  yp = (e, t, r) => (t in e ? IO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  AO = (e, t) => {
    for (var r in t || (t = {})) LO.call(t, r) && yp(e, r, t[r]);
    if (hp) for (var r of hp(t)) MO.call(t, r) && yp(e, r, t[r]);
    return e;
  };
function Kv(e) {
  return C.createElement(
    "svg",
    AO({ viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e),
    C.createElement("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
Kv.displayName = "@mantine/core/CloseIcon";
var DO = Object.defineProperty,
  kl = Object.getOwnPropertySymbols,
  Xv = Object.prototype.hasOwnProperty,
  Yv = Object.prototype.propertyIsEnumerable,
  vp = (e, t, r) => (t in e ? DO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  FO = (e, t) => {
    for (var r in t || (t = {})) Xv.call(t, r) && vp(e, r, t[r]);
    if (kl) for (var r of kl(t)) Yv.call(t, r) && vp(e, r, t[r]);
    return e;
  },
  BO = (e, t) => {
    var r = {};
    for (var n in e) Xv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && kl) for (var n of kl(e)) t.indexOf(n) < 0 && Yv.call(e, n) && (r[n] = e[n]);
    return r;
  };
const VO = { xs: N(12), sm: N(16), md: N(20), lg: N(28), xl: N(34) },
  UO = { size: "sm" },
  qv = w.forwardRef((e, t) => {
    const r = re("CloseButton", UO, e),
      { iconSize: n, size: o, children: i } = r,
      l = BO(r, ["iconSize", "size", "children"]),
      a = N(n || VO[o]);
    return C.createElement(El, FO({ ref: t, __staticSelector: "CloseButton", size: o }, l), i || C.createElement(Kv, { width: a, height: a }));
  });
qv.displayName = "@mantine/core/CloseButton";
const HO = qv;
var WO = Object.defineProperty,
  GO = Object.defineProperties,
  QO = Object.getOwnPropertyDescriptors,
  gp = Object.getOwnPropertySymbols,
  KO = Object.prototype.hasOwnProperty,
  XO = Object.prototype.propertyIsEnumerable,
  wp = (e, t, r) => (t in e ? WO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  pi = (e, t) => {
    for (var r in t || (t = {})) KO.call(t, r) && wp(e, r, t[r]);
    if (gp) for (var r of gp(t)) XO.call(t, r) && wp(e, r, t[r]);
    return e;
  },
  YO = (e, t) => GO(e, QO(t));
function qO({ underline: e, strikethrough: t }) {
  const r = [];
  return e && r.push("underline"), t && r.push("line-through"), r.length > 0 ? r.join(" ") : "none";
}
function JO({ theme: e, color: t }) {
  return t === "dimmed"
    ? e.fn.dimmed()
    : typeof t == "string" && (t in e.colors || t.split(".")[0] in e.colors)
    ? e.fn.variant({ variant: "filled", color: t }).background
    : t || "inherit";
}
function ZO(e) {
  return typeof e == "number" ? { overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: e, WebkitBoxOrient: "vertical" } : null;
}
function eE({ theme: e, truncate: t }) {
  return t === "start"
    ? { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", direction: e.dir === "ltr" ? "rtl" : "ltr", textAlign: e.dir === "ltr" ? "right" : "left" }
    : t
    ? { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
    : null;
}
var tE = he(
  (e, { color: t, lineClamp: r, truncate: n, inline: o, inherit: i, underline: l, gradient: a, weight: s, transform: u, align: f, strikethrough: c, italic: d }, { size: p }) => {
    const y = e.fn.variant({ variant: "gradient", gradient: a });
    return {
      root: YO(pi(pi(pi(pi({}, e.fn.fontStyles()), e.fn.focusStyles()), ZO(r)), eE({ theme: e, truncate: n })), {
        color: JO({ color: t, theme: e }),
        fontFamily: i ? "inherit" : e.fontFamily,
        fontSize: i || p === void 0 ? "inherit" : G({ size: p, sizes: e.fontSizes }),
        lineHeight: i ? "inherit" : o ? 1 : e.lineHeight,
        textDecoration: qO({ underline: l, strikethrough: c }),
        WebkitTapHighlightColor: "transparent",
        fontWeight: i ? "inherit" : s,
        textTransform: u,
        textAlign: f,
        fontStyle: d ? "italic" : void 0,
      }),
      gradient: { backgroundImage: y.background, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    };
  }
);
const rE = tE;
var nE = Object.defineProperty,
  bl = Object.getOwnPropertySymbols,
  Jv = Object.prototype.hasOwnProperty,
  Zv = Object.prototype.propertyIsEnumerable,
  _p = (e, t, r) => (t in e ? nE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  oE = (e, t) => {
    for (var r in t || (t = {})) Jv.call(t, r) && _p(e, r, t[r]);
    if (bl) for (var r of bl(t)) Zv.call(t, r) && _p(e, r, t[r]);
    return e;
  },
  iE = (e, t) => {
    var r = {};
    for (var n in e) Jv.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && bl) for (var n of bl(e)) t.indexOf(n) < 0 && Zv.call(e, n) && (r[n] = e[n]);
    return r;
  };
const lE = { variant: "text" },
  e0 = w.forwardRef((e, t) => {
    const r = re("Text", lE, e),
      {
        className: n,
        size: o,
        weight: i,
        transform: l,
        color: a,
        align: s,
        variant: u,
        lineClamp: f,
        truncate: c,
        gradient: d,
        inline: p,
        inherit: y,
        underline: v,
        strikethrough: S,
        italic: m,
        classNames: h,
        styles: g,
        unstyled: _,
        span: x,
        __staticSelector: O,
      } = r,
      P = iE(r, [
        "className",
        "size",
        "weight",
        "transform",
        "color",
        "align",
        "variant",
        "lineClamp",
        "truncate",
        "gradient",
        "inline",
        "inherit",
        "underline",
        "strikethrough",
        "italic",
        "classNames",
        "styles",
        "unstyled",
        "span",
        "__staticSelector",
      ]),
      { classes: E, cx: T } = rE(
        { color: a, lineClamp: f, truncate: c, inline: p, inherit: y, underline: v, strikethrough: S, italic: m, weight: i, transform: l, align: s, gradient: d },
        { unstyled: _, name: O || "Text", variant: u, size: o }
      );
    return C.createElement(ze, oE({ ref: t, className: T(E.root, { [E.gradient]: u === "gradient" }, n), component: x ? "span" : "div" }, P));
  });
e0.displayName = "@mantine/core/Text";
const Ii = e0;
function Bo(e) {
  return e.split("-")[1];
}
function Yc(e) {
  return e === "y" ? "height" : "width";
}
function Dt(e) {
  return e.split("-")[0];
}
function bn(e) {
  return ["top", "bottom"].includes(Dt(e)) ? "x" : "y";
}
function Sp(e, t, r) {
  let { reference: n, floating: o } = e;
  const i = n.x + n.width / 2 - o.width / 2,
    l = n.y + n.height / 2 - o.height / 2,
    a = bn(t),
    s = Yc(a),
    u = n[s] / 2 - o[s] / 2,
    f = a === "x";
  let c;
  switch (Dt(t)) {
    case "top":
      c = { x: i, y: n.y - o.height };
      break;
    case "bottom":
      c = { x: i, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: l };
      break;
    case "left":
      c = { x: n.x - o.width, y: l };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (Bo(t)) {
    case "start":
      c[a] -= u * (r && f ? -1 : 1);
      break;
    case "end":
      c[a] += u * (r && f ? -1 : 1);
  }
  return c;
}
const aE = async (e, t, r) => {
  const { placement: n = "bottom", strategy: o = "absolute", middleware: i = [], platform: l } = r,
    a = i.filter(Boolean),
    s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: c } = Sp(u, n, s),
    d = n,
    p = {},
    y = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: S, fn: m } = a[v],
      {
        x: h,
        y: g,
        data: _,
        reset: x,
      } = await m({ x: f, y: c, initialPlacement: n, placement: d, strategy: o, middlewareData: p, rects: u, platform: l, elements: { reference: e, floating: t } });
    (f = h ?? f),
      (c = g ?? c),
      (p = { ...p, [S]: { ...p[S], ..._ } }),
      x &&
        y <= 50 &&
        (y++,
        typeof x == "object" &&
          (x.placement && (d = x.placement),
          x.rects && (u = x.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: o }) : x.rects),
          ({ x: f, y: c } = Sp(u, d, s))),
        (v = -1));
  }
  return { x: f, y: c, placement: d, strategy: o, middlewareData: p };
};
function qc(e) {
  return typeof e != "number"
    ? (function (t) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...t };
      })(e)
    : { top: e, right: e, bottom: e, left: e };
}
function xn(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function t0(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
    { boundary: u = "clippingAncestors", rootBoundary: f = "viewport", elementContext: c = "floating", altBoundary: d = !1, padding: p = 0 } = t,
    y = qc(p),
    v = a[d ? (c === "floating" ? "reference" : "floating") : c],
    S = xn(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(v))) == null || r
            ? v
            : v.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: s,
      })
    ),
    m = c === "floating" ? { ...l.floating, x: n, y: o } : l.reference,
    h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    g = ((await (i.isElement == null ? void 0 : i.isElement(h))) && (await (i.getScale == null ? void 0 : i.getScale(h)))) || { x: 1, y: 1 },
    _ = xn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: h, strategy: s }) : m);
  return { top: (S.top - _.top + y.top) / g.y, bottom: (_.bottom - S.bottom + y.bottom) / g.y, left: (S.left - _.left + y.left) / g.x, right: (_.right - S.right + y.right) / g.x };
}
const Rl = Math.min,
  Nl = Math.max;
function Ru(e, t, r) {
  return Nl(e, Rl(t, r));
}
const xp = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { element: r, padding: n = 0 } = e || {},
        { x: o, y: i, placement: l, rects: a, platform: s, elements: u } = t;
      if (r == null) return {};
      const f = qc(n),
        c = { x: o, y: i },
        d = bn(l),
        p = Yc(d),
        y = await s.getDimensions(r),
        v = d === "y",
        S = v ? "top" : "left",
        m = v ? "bottom" : "right",
        h = v ? "clientHeight" : "clientWidth",
        g = a.reference[p] + a.reference[d] - c[d] - a.floating[p],
        _ = c[d] - a.reference[d],
        x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r));
      let O = x ? x[h] : 0;
      (O && (await (s.isElement == null ? void 0 : s.isElement(x)))) || (O = u.floating[h] || a.floating[p]);
      const P = g / 2 - _ / 2,
        E = f[S],
        T = O - y[p] - f[m],
        k = O / 2 - y[p] / 2 + P,
        z = Ru(E, k, T),
        D = Bo(l) != null && k != z && a.reference[p] / 2 - (k < E ? f[S] : f[m]) - y[p] / 2 < 0;
      return { [d]: c[d] - (D ? (k < E ? E - k : T - k) : 0), data: { [d]: z, centerOffset: k - z } };
    },
  }),
  sE = ["top", "right", "bottom", "left"];
sE.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const uE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Tl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => uE[t]);
}
function cE(e, t, r) {
  r === void 0 && (r = !1);
  const n = Bo(e),
    o = bn(e),
    i = Yc(o);
  let l = o === "x" ? (n === (r ? "end" : "start") ? "right" : "left") : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Tl(l)), { main: l, cross: Tl(l) };
}
const fE = { start: "end", end: "start" };
function ws(e) {
  return e.replace(/start|end/g, (t) => fE[t]);
}
const dE = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(t) {
        var r;
        const { placement: n, middlewareData: o, rects: i, initialPlacement: l, platform: a, elements: s } = t,
          { mainAxis: u = !0, crossAxis: f = !0, fallbackPlacements: c, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: y = !0, ...v } = e,
          S = Dt(n),
          m = Dt(l) === l,
          h = await (a.isRTL == null ? void 0 : a.isRTL(s.floating)),
          g =
            c ||
            (m || !y
              ? [Tl(l)]
              : (function (z) {
                  const D = Tl(z);
                  return [ws(z), D, ws(D)];
                })(l));
        c ||
          p === "none" ||
          g.push(
            ...(function (z, D, F, j) {
              const B = Bo(z);
              let V = (function (q, b, I) {
                const M = ["left", "right"],
                  W = ["right", "left"],
                  Z = ["top", "bottom"],
                  Ge = ["bottom", "top"];
                switch (q) {
                  case "top":
                  case "bottom":
                    return I ? (b ? W : M) : b ? M : W;
                  case "left":
                  case "right":
                    return b ? Z : Ge;
                  default:
                    return [];
                }
              })(Dt(z), F === "start", j);
              return B && ((V = V.map((q) => q + "-" + B)), D && (V = V.concat(V.map(ws)))), V;
            })(l, y, p, h)
          );
        const _ = [l, ...g],
          x = await t0(t, v),
          O = [];
        let P = ((r = o.flip) == null ? void 0 : r.overflows) || [];
        if ((u && O.push(x[S]), f)) {
          const { main: z, cross: D } = cE(n, i, h);
          O.push(x[z], x[D]);
        }
        if (((P = [...P, { placement: n, overflows: O }]), !O.every((z) => z <= 0))) {
          var E, T;
          const z = (((E = o.flip) == null ? void 0 : E.index) || 0) + 1,
            D = _[z];
          if (D) return { data: { index: z, overflows: P }, reset: { placement: D } };
          let F = (T = P.filter((j) => j.overflows[0] <= 0).sort((j, B) => j.overflows[1] - B.overflows[1])[0]) == null ? void 0 : T.placement;
          if (!F)
            switch (d) {
              case "bestFit": {
                var k;
                const j = (k = P.map((B) => [B.placement, B.overflows.filter((V) => V > 0).reduce((V, q) => V + q, 0)]).sort((B, V) => B[1] - V[1])[0]) == null ? void 0 : k[0];
                j && (F = j);
                break;
              }
              case "initialPlacement":
                F = l;
            }
          if (n !== F) return { reset: { placement: F } };
        }
        return {};
      },
    }
  );
};
function Pp(e) {
  const t = Rl(...e.map((n) => n.left)),
    r = Rl(...e.map((n) => n.top));
  return { x: t, y: r, width: Nl(...e.map((n) => n.right)) - t, height: Nl(...e.map((n) => n.bottom)) - r };
}
const pE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "inline",
        options: e,
        async fn(t) {
          const { placement: r, elements: n, rects: o, platform: i, strategy: l } = t,
            { padding: a = 2, x: s, y: u } = e,
            f = Array.from((await (i.getClientRects == null ? void 0 : i.getClientRects(n.reference))) || []),
            c = (function (v) {
              const S = v.slice().sort((g, _) => g.y - _.y),
                m = [];
              let h = null;
              for (let g = 0; g < S.length; g++) {
                const _ = S[g];
                !h || _.y - h.y > h.height / 2 ? m.push([_]) : m[m.length - 1].push(_), (h = _);
              }
              return m.map((g) => xn(Pp(g)));
            })(f),
            d = xn(Pp(f)),
            p = qc(a),
            y = await i.getElementRects({
              reference: {
                getBoundingClientRect: function () {
                  if (c.length === 2 && c[0].left > c[1].right && s != null && u != null)
                    return c.find((v) => s > v.left - p.left && s < v.right + p.right && u > v.top - p.top && u < v.bottom + p.bottom) || d;
                  if (c.length >= 2) {
                    if (bn(r) === "x") {
                      const x = c[0],
                        O = c[c.length - 1],
                        P = Dt(r) === "top",
                        E = x.top,
                        T = O.bottom,
                        k = P ? x.left : O.left,
                        z = P ? x.right : O.right;
                      return { top: E, bottom: T, left: k, right: z, width: z - k, height: T - E, x: k, y: E };
                    }
                    const v = Dt(r) === "left",
                      S = Nl(...c.map((x) => x.right)),
                      m = Rl(...c.map((x) => x.left)),
                      h = c.filter((x) => (v ? x.left === m : x.right === S)),
                      g = h[0].top,
                      _ = h[h.length - 1].bottom;
                    return { top: g, bottom: _, left: m, right: S, width: S - m, height: _ - g, x: m, y: g };
                  }
                  return d;
                },
              },
              floating: n.floating,
              strategy: l,
            });
          return o.reference.x !== y.reference.x || o.reference.y !== y.reference.y || o.reference.width !== y.reference.width || o.reference.height !== y.reference.height
            ? { reset: { rects: y } }
            : {};
        },
      }
    );
  },
  mE = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          const { x: r, y: n } = t,
            o = await (async function (i, l) {
              const { placement: a, platform: s, elements: u } = i,
                f = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
                c = Dt(a),
                d = Bo(a),
                p = bn(a) === "x",
                y = ["left", "top"].includes(c) ? -1 : 1,
                v = f && p ? -1 : 1,
                S = typeof l == "function" ? l(i) : l;
              let {
                mainAxis: m,
                crossAxis: h,
                alignmentAxis: g,
              } = typeof S == "number" ? { mainAxis: S, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...S };
              return d && typeof g == "number" && (h = d === "end" ? -1 * g : g), p ? { x: h * v, y: m * y } : { x: m * y, y: h * v };
            })(t, e);
          return { x: r + o.x, y: n + o.y, data: o };
        },
      }
    );
  };
function hE(e) {
  return e === "x" ? "y" : "x";
}
const r0 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "shift",
      options: e,
      async fn(t) {
        const { x: r, y: n, placement: o } = t,
          {
            mainAxis: i = !0,
            crossAxis: l = !1,
            limiter: a = {
              fn: (S) => {
                let { x: m, y: h } = S;
                return { x: m, y: h };
              },
            },
            ...s
          } = e,
          u = { x: r, y: n },
          f = await t0(t, s),
          c = bn(Dt(o)),
          d = hE(c);
        let p = u[c],
          y = u[d];
        if (i) {
          const S = c === "y" ? "bottom" : "right";
          p = Ru(p + f[c === "y" ? "top" : "left"], p, p - f[S]);
        }
        if (l) {
          const S = d === "y" ? "bottom" : "right";
          y = Ru(y + f[d === "y" ? "top" : "left"], y, y - f[S]);
        }
        const v = a.fn({ ...t, [c]: p, [d]: y });
        return { ...v, data: { x: v.x - r, y: v.y - n } };
      },
    }
  );
};
function Ye(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Rt(e) {
  return Ye(e).getComputedStyle(e);
}
function n0(e) {
  return e instanceof Ye(e).Node;
}
function vr(e) {
  return n0(e) ? (e.nodeName || "").toLowerCase() : "";
}
let mi;
function o0() {
  if (mi) return mi;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? ((mi = e.brands.map((t) => t.brand + "/" + t.version).join(" ")), mi) : navigator.userAgent;
}
function yt(e) {
  return e instanceof Ye(e).HTMLElement;
}
function mt(e) {
  return e instanceof Ye(e).Element;
}
function Op(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Ye(e).ShadowRoot || e instanceof ShadowRoot;
}
function Na(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function yE(e) {
  return ["table", "td", "th"].includes(vr(e));
}
function Nu(e) {
  const t = /firefox/i.test(o0()),
    r = Rt(e),
    n = r.backdropFilter || r.WebkitBackdropFilter;
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (!!n && n !== "none") ||
    (t && r.willChange === "filter") ||
    (t && !!r.filter && r.filter !== "none") ||
    ["transform", "perspective"].some((o) => r.willChange.includes(o)) ||
    ["paint", "layout", "strict", "content"].some((o) => {
      const i = r.contain;
      return i != null && i.includes(o);
    })
  );
}
function Tu() {
  return /^((?!chrome|android).)*safari/i.test(o0());
}
function Jc(e) {
  return ["html", "body", "#document"].includes(vr(e));
}
const Ep = Math.min,
  so = Math.max,
  jl = Math.round;
function i0(e) {
  const t = Rt(e);
  let r = parseFloat(t.width),
    n = parseFloat(t.height);
  const o = yt(e),
    i = o ? e.offsetWidth : r,
    l = o ? e.offsetHeight : n,
    a = jl(r) !== i || jl(n) !== l;
  return a && ((r = i), (n = l)), { width: r, height: n, fallback: a };
}
function l0(e) {
  return mt(e) ? e : e.contextElement;
}
const a0 = { x: 1, y: 1 };
function pn(e) {
  const t = l0(e);
  if (!yt(t)) return a0;
  const r = t.getBoundingClientRect(),
    { width: n, height: o, fallback: i } = i0(t);
  let l = (i ? jl(r.width) : r.width) / n,
    a = (i ? jl(r.height) : r.height) / o;
  return (l && Number.isFinite(l)) || (l = 1), (a && Number.isFinite(a)) || (a = 1), { x: l, y: a };
}
function Mr(e, t, r, n) {
  var o, i;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const l = e.getBoundingClientRect(),
    a = l0(e);
  let s = a0;
  t && (n ? mt(n) && (s = pn(n)) : (s = pn(e)));
  const u = a ? Ye(a) : window,
    f = Tu() && r;
  let c = (l.left + ((f && ((o = u.visualViewport) == null ? void 0 : o.offsetLeft)) || 0)) / s.x,
    d = (l.top + ((f && ((i = u.visualViewport) == null ? void 0 : i.offsetTop)) || 0)) / s.y,
    p = l.width / s.x,
    y = l.height / s.y;
  if (a) {
    const v = Ye(a),
      S = n && mt(n) ? Ye(n) : n;
    let m = v.frameElement;
    for (; m && n && S !== v; ) {
      const h = pn(m),
        g = m.getBoundingClientRect(),
        _ = getComputedStyle(m);
      (g.x += (m.clientLeft + parseFloat(_.paddingLeft)) * h.x),
        (g.y += (m.clientTop + parseFloat(_.paddingTop)) * h.y),
        (c *= h.x),
        (d *= h.y),
        (p *= h.x),
        (y *= h.y),
        (c += g.x),
        (d += g.y),
        (m = Ye(m).frameElement);
    }
  }
  return xn({ width: p, height: y, x: c, y: d });
}
function mr(e) {
  return ((n0(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ta(e) {
  return mt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function s0(e) {
  return Mr(mr(e)).left + Ta(e).scrollLeft;
}
function To(e) {
  if (vr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Op(e) && e.host) || mr(e);
  return Op(t) ? t.host : t;
}
function u0(e) {
  const t = To(e);
  return Jc(t) ? t.ownerDocument.body : yt(t) && Na(t) ? t : u0(t);
}
function Ft(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = u0(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Ye(n);
  return o ? t.concat(i, i.visualViewport || [], Na(n) ? n : []) : t.concat(n, Ft(n));
}
function Cp(e, t, r) {
  let n;
  if (t === "viewport")
    n = (function (l, a) {
      const s = Ye(l),
        u = mr(l),
        f = s.visualViewport;
      let c = u.clientWidth,
        d = u.clientHeight,
        p = 0,
        y = 0;
      if (f) {
        (c = f.width), (d = f.height);
        const v = Tu();
        (!v || (v && a === "fixed")) && ((p = f.offsetLeft), (y = f.offsetTop));
      }
      return { width: c, height: d, x: p, y };
    })(e, r);
  else if (t === "document")
    n = (function (l) {
      const a = mr(l),
        s = Ta(l),
        u = l.ownerDocument.body,
        f = so(a.scrollWidth, a.clientWidth, u.scrollWidth, u.clientWidth),
        c = so(a.scrollHeight, a.clientHeight, u.scrollHeight, u.clientHeight);
      let d = -s.scrollLeft + s0(l);
      const p = -s.scrollTop;
      return Rt(u).direction === "rtl" && (d += so(a.clientWidth, u.clientWidth) - f), { width: f, height: c, x: d, y: p };
    })(mr(e));
  else if (mt(t))
    n = (function (l, a) {
      const s = Mr(l, !0, a === "fixed"),
        u = s.top + l.clientTop,
        f = s.left + l.clientLeft,
        c = yt(l) ? pn(l) : { x: 1, y: 1 };
      return { width: l.clientWidth * c.x, height: l.clientHeight * c.y, x: f * c.x, y: u * c.y };
    })(t, r);
  else {
    const l = { ...t };
    if (Tu()) {
      var o, i;
      const a = Ye(e);
      (l.x -= ((o = a.visualViewport) == null ? void 0 : o.offsetLeft) || 0), (l.y -= ((i = a.visualViewport) == null ? void 0 : i.offsetTop) || 0);
    }
    n = l;
  }
  return xn(n);
}
function $p(e, t) {
  return yt(e) && Rt(e).position !== "fixed" ? (t ? t(e) : e.offsetParent) : null;
}
function kp(e, t) {
  const r = Ye(e);
  if (!yt(e)) return r;
  let n = $p(e, t);
  for (; n && yE(n) && Rt(n).position === "static"; ) n = $p(n, t);
  return n && (vr(n) === "html" || (vr(n) === "body" && Rt(n).position === "static" && !Nu(n)))
    ? r
    : n ||
        (function (o) {
          let i = To(o);
          for (; yt(i) && !Jc(i); ) {
            if (Nu(i)) return i;
            i = To(i);
          }
          return null;
        })(e) ||
        r;
}
function vE(e, t, r) {
  const n = yt(t),
    o = mr(t),
    i = Mr(e, !0, r === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (n || (!n && r !== "fixed"))
    if (((vr(t) !== "body" || Na(o)) && (l = Ta(t)), yt(t))) {
      const s = Mr(t, !0);
      (a.x = s.x + t.clientLeft), (a.y = s.y + t.clientTop);
    } else o && (a.x = s0(o));
  return { x: i.left + l.scrollLeft - a.x, y: i.top + l.scrollTop - a.y, width: i.width, height: i.height };
}
const gE = {
  getClippingRect: function (e) {
    let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
    const i =
        r === "clippingAncestors"
          ? (function (u, f) {
              const c = f.get(u);
              if (c) return c;
              let d = Ft(u).filter((S) => mt(S) && vr(S) !== "body"),
                p = null;
              const y = Rt(u).position === "fixed";
              let v = y ? To(u) : u;
              for (; mt(v) && !Jc(v); ) {
                const S = Rt(v),
                  m = Nu(v);
                S.position === "fixed" && (p = null),
                  (y ? m || p : m || S.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? (p = S) : (d = d.filter((h) => h !== v)),
                  (v = To(v));
              }
              return f.set(u, d), d;
            })(t, this._c)
          : [].concat(r),
      l = [...i, n],
      a = l[0],
      s = l.reduce((u, f) => {
        const c = Cp(t, f, o);
        return (u.top = so(c.top, u.top)), (u.right = Ep(c.right, u.right)), (u.bottom = Ep(c.bottom, u.bottom)), (u.left = so(c.left, u.left)), u;
      }, Cp(t, a, o));
    return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
    let { rect: t, offsetParent: r, strategy: n } = e;
    const o = yt(r),
      i = mr(r);
    if (r === i) return t;
    let l = { scrollLeft: 0, scrollTop: 0 },
      a = { x: 1, y: 1 };
    const s = { x: 0, y: 0 };
    if ((o || (!o && n !== "fixed")) && ((vr(r) !== "body" || Na(i)) && (l = Ta(r)), yt(r))) {
      const u = Mr(r);
      (a = pn(r)), (s.x = u.x + r.clientLeft), (s.y = u.y + r.clientTop);
    }
    return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - l.scrollLeft * a.x + s.x, y: t.y * a.y - l.scrollTop * a.y + s.y };
  },
  isElement: mt,
  getDimensions: function (e) {
    return i0(e);
  },
  getOffsetParent: kp,
  getDocumentElement: mr,
  getScale: pn,
  async getElementRects(e) {
    let { reference: t, floating: r, strategy: n } = e;
    const o = this.getOffsetParent || kp,
      i = this.getDimensions;
    return { reference: vE(t, await o(r), n), floating: { x: 0, y: 0, ...(await i(r)) } };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Rt(e).direction === "rtl",
};
function wE(e, t, r, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: o = !0, ancestorResize: i = !0, elementResize: l = !0, animationFrame: a = !1 } = n,
    s = o && !a,
    u = s || i ? [...(mt(e) ? Ft(e) : e.contextElement ? Ft(e.contextElement) : []), ...Ft(t)] : [];
  u.forEach((p) => {
    s && p.addEventListener("scroll", r, { passive: !0 }), i && p.addEventListener("resize", r);
  });
  let f,
    c = null;
  l &&
    ((c = new ResizeObserver(() => {
      r();
    })),
    mt(e) && !a && c.observe(e),
    mt(e) || !e.contextElement || a || c.observe(e.contextElement),
    c.observe(t));
  let d = a ? Mr(e) : null;
  return (
    a &&
      (function p() {
        const y = Mr(e);
        !d || (y.x === d.x && y.y === d.y && y.width === d.width && y.height === d.height) || r(), (d = y), (f = requestAnimationFrame(p));
      })(),
    r(),
    () => {
      var p;
      u.forEach((y) => {
        s && y.removeEventListener("scroll", r), i && y.removeEventListener("resize", r);
      }),
        (p = c) == null || p.disconnect(),
        (c = null),
        a && cancelAnimationFrame(f);
    }
  );
}
const _E = (e, t, r) => {
    const n = new Map(),
      o = { platform: gE, ...r },
      i = { ...o.platform, _c: n };
    return aE(e, t, { ...o, platform: i });
  },
  SE = (e) => {
    const { element: t, padding: r } = e;
    function n(o) {
      return Object.prototype.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(o) {
        return n(t) ? (t.current != null ? xp({ element: t.current, padding: r }).fn(o) : {}) : t ? xp({ element: t, padding: r }).fn(o) : {};
      },
    };
  };
var Li = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function zl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!zl(e[n], t[n])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length)) return !1;
    for (n = r; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !zl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function bp(e) {
  const t = w.useRef(e);
  return (
    Li(() => {
      t.current = e;
    }),
    t
  );
}
function xE(e) {
  e === void 0 && (e = {});
  const { placement: t = "bottom", strategy: r = "absolute", middleware: n = [], platform: o, whileElementsMounted: i, open: l } = e,
    [a, s] = w.useState({ x: null, y: null, strategy: r, placement: t, middlewareData: {}, isPositioned: !1 }),
    [u, f] = w.useState(n);
  zl(u, n) || f(n);
  const c = w.useRef(null),
    d = w.useRef(null),
    p = w.useRef(a),
    y = bp(i),
    v = bp(o),
    [S, m] = w.useState(null),
    [h, g] = w.useState(null),
    _ = w.useCallback((k) => {
      c.current !== k && ((c.current = k), m(k));
    }, []),
    x = w.useCallback((k) => {
      d.current !== k && ((d.current = k), g(k));
    }, []),
    O = w.useCallback(() => {
      if (!c.current || !d.current) return;
      const k = { placement: t, strategy: r, middleware: u };
      v.current && (k.platform = v.current),
        _E(c.current, d.current, k).then((z) => {
          const D = { ...z, isPositioned: !0 };
          P.current &&
            !zl(p.current, D) &&
            ((p.current = D),
            uo.flushSync(() => {
              s(D);
            }));
        });
    }, [u, t, r, v]);
  Li(() => {
    l === !1 && p.current.isPositioned && ((p.current.isPositioned = !1), s((k) => ({ ...k, isPositioned: !1 })));
  }, [l]);
  const P = w.useRef(!1);
  Li(
    () => (
      (P.current = !0),
      () => {
        P.current = !1;
      }
    ),
    []
  ),
    Li(() => {
      if (S && h) {
        if (y.current) return y.current(S, h, O);
        O();
      }
    }, [S, h, O, y]);
  const E = w.useMemo(() => ({ reference: c, floating: d, setReference: _, setFloating: x }), [_, x]),
    T = w.useMemo(() => ({ reference: S, floating: h }), [S, h]);
  return w.useMemo(() => ({ ...a, update: O, refs: E, elements: T, reference: _, floating: x }), [a, O, E, T, _, x]);
}
var Pn = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
let _s = !1,
  PE = 0;
const Rp = () => "floating-ui-" + PE++;
function OE() {
  const [e, t] = w.useState(() => (_s ? Rp() : void 0));
  return (
    Pn(() => {
      e == null && t(Rp());
    }, []),
    w.useEffect(() => {
      _s || (_s = !0);
    }, []),
    e
  );
}
const EE = Gm["useId".toString()],
  Np = EE || OE;
function CE() {
  const e = new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.set(t, [...(e.get(t) || []), r]);
    },
    off(t, r) {
      e.set(
        t,
        (e.get(t) || []).filter((n) => n !== r)
      );
    },
  };
}
const $E = w.createContext(null),
  kE = w.createContext(null),
  c0 = () => {
    var e;
    return ((e = w.useContext($E)) == null ? void 0 : e.id) || null;
  },
  Zc = () => w.useContext(kE);
function ir(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function bE() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function RE() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((t) => {
          let { brand: r, version: n } = t;
          return r + "/" + n;
        })
        .join(" ")
    : navigator.userAgent;
}
function ef(e) {
  return ir(e).defaultView || window;
}
function Et(e) {
  return e ? e instanceof ef(e).Element : !1;
}
function f0(e) {
  return e ? e instanceof ef(e).HTMLElement : !1;
}
function NE(e) {
  if (typeof ShadowRoot > "u") return !1;
  const t = ef(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function TE(e) {
  if (e.mozInputSource === 0 && e.isTrusted) return !0;
  const t = /Android/i;
  return (t.test(bE()) || t.test(RE())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function jE(e) {
  return (
    (e.width === 0 && e.height === 0) ||
    (e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse") ||
    (e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0)
  );
}
function d0(e, t) {
  const r = ["mouse", "pen"];
  return t || r.push("", void 0), r.includes(e);
}
function Tp(e) {
  const t = w.useRef(e);
  return (
    Pn(() => {
      t.current = e;
    }),
    t
  );
}
const jp = "data-floating-ui-safe-polygon";
function Mi(e, t, r) {
  return r && !d0(r) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
const zE = function (e, t) {
    let { enabled: r = !0, delay: n = 0, handleClose: o = null, mouseOnly: i = !1, restMs: l = 0, move: a = !0 } = t === void 0 ? {} : t;
    const {
        open: s,
        onOpenChange: u,
        dataRef: f,
        events: c,
        elements: { domReference: d, floating: p },
        refs: y,
      } = e,
      v = Zc(),
      S = c0(),
      m = Tp(o),
      h = Tp(n),
      g = w.useRef(),
      _ = w.useRef(),
      x = w.useRef(),
      O = w.useRef(),
      P = w.useRef(!0),
      E = w.useRef(!1),
      T = w.useRef(() => {}),
      k = w.useCallback(() => {
        var j;
        const B = (j = f.current.openEvent) == null ? void 0 : j.type;
        return (B == null ? void 0 : B.includes("mouse")) && B !== "mousedown";
      }, [f]);
    w.useEffect(() => {
      if (!r) return;
      function j() {
        clearTimeout(_.current), clearTimeout(O.current), (P.current = !0);
      }
      return (
        c.on("dismiss", j),
        () => {
          c.off("dismiss", j);
        }
      );
    }, [r, c]),
      w.useEffect(() => {
        if (!r || !m.current || !s) return;
        function j() {
          k() && u(!1);
        }
        const B = ir(p).documentElement;
        return (
          B.addEventListener("mouseleave", j),
          () => {
            B.removeEventListener("mouseleave", j);
          }
        );
      }, [p, s, u, r, m, f, k]);
    const z = w.useCallback(
        function (j) {
          j === void 0 && (j = !0);
          const B = Mi(h.current, "close", g.current);
          B && !x.current ? (clearTimeout(_.current), (_.current = setTimeout(() => u(!1), B))) : j && (clearTimeout(_.current), u(!1));
        },
        [h, u]
      ),
      D = w.useCallback(() => {
        T.current(), (x.current = void 0);
      }, []),
      F = w.useCallback(() => {
        if (E.current) {
          const j = ir(y.floating.current).body;
          (j.style.pointerEvents = ""), j.removeAttribute(jp), (E.current = !1);
        }
      }, [y]);
    return (
      w.useEffect(() => {
        if (!r) return;
        function j() {
          return f.current.openEvent ? ["click", "mousedown"].includes(f.current.openEvent.type) : !1;
        }
        function B(b) {
          if ((clearTimeout(_.current), (P.current = !1), (i && !d0(g.current)) || (l > 0 && Mi(h.current, "open") === 0))) return;
          f.current.openEvent = b;
          const I = Mi(h.current, "open", g.current);
          I
            ? (_.current = setTimeout(() => {
                u(!0);
              }, I))
            : u(!0);
        }
        function V(b) {
          if (j()) return;
          T.current();
          const I = ir(p);
          if ((clearTimeout(O.current), m.current)) {
            s || clearTimeout(_.current),
              (x.current = m.current({
                ...e,
                tree: v,
                x: b.clientX,
                y: b.clientY,
                onClose() {
                  F(), D(), z();
                },
              }));
            const M = x.current;
            I.addEventListener("mousemove", M),
              (T.current = () => {
                I.removeEventListener("mousemove", M);
              });
            return;
          }
          z();
        }
        function q(b) {
          j() ||
            m.current == null ||
            m.current({
              ...e,
              tree: v,
              x: b.clientX,
              y: b.clientY,
              onClose() {
                F(), D(), z();
              },
            })(b);
        }
        if (Et(d)) {
          const b = d;
          return (
            s && b.addEventListener("mouseleave", q),
            p == null || p.addEventListener("mouseleave", q),
            a && b.addEventListener("mousemove", B, { once: !0 }),
            b.addEventListener("mouseenter", B),
            b.addEventListener("mouseleave", V),
            () => {
              s && b.removeEventListener("mouseleave", q),
                p == null || p.removeEventListener("mouseleave", q),
                a && b.removeEventListener("mousemove", B),
                b.removeEventListener("mouseenter", B),
                b.removeEventListener("mouseleave", V);
            }
          );
        }
      }, [d, p, r, e, i, l, a, z, D, F, u, s, v, h, m, f]),
      Pn(() => {
        var j;
        if (r && s && (j = m.current) != null && j.__options.blockPointerEvents && k()) {
          const q = ir(p).body;
          if ((q.setAttribute(jp, ""), (q.style.pointerEvents = "none"), (E.current = !0), Et(d) && p)) {
            var B, V;
            const b = d,
              I = v == null || (B = v.nodesRef.current.find((M) => M.id === S)) == null || (V = B.context) == null ? void 0 : V.elements.floating;
            return (
              I && (I.style.pointerEvents = ""),
              (b.style.pointerEvents = "auto"),
              (p.style.pointerEvents = "auto"),
              () => {
                (b.style.pointerEvents = ""), (p.style.pointerEvents = "");
              }
            );
          }
        }
      }, [r, s, S, p, d, v, m, f, k]),
      Pn(() => {
        s || ((g.current = void 0), D(), F());
      }, [s, D, F]),
      w.useEffect(
        () => () => {
          D(), clearTimeout(_.current), clearTimeout(O.current), F();
        },
        [r, D, F]
      ),
      w.useMemo(() => {
        if (!r) return {};
        function j(B) {
          g.current = B.pointerType;
        }
        return {
          reference: {
            onPointerDown: j,
            onPointerEnter: j,
            onMouseMove() {
              s ||
                l === 0 ||
                (clearTimeout(O.current),
                (O.current = setTimeout(() => {
                  P.current || u(!0);
                }, l)));
            },
          },
          floating: {
            onMouseEnter() {
              clearTimeout(_.current);
            },
            onMouseLeave() {
              c.emit("dismiss", { type: "mouseLeave", data: { returnFocus: !1 } }), z(!1);
            },
          },
        };
      }, [c, r, l, s, u, z])
    );
  },
  p0 = w.createContext({ delay: 0, initialDelay: 0, timeoutMs: 0, currentId: null, setCurrentId: () => {}, setState: () => {}, isInstantPhase: !1 }),
  m0 = () => w.useContext(p0),
  IE = (e) => {
    let { children: t, delay: r, timeoutMs: n = 0 } = e;
    const [o, i] = w.useReducer((s, u) => ({ ...s, ...u }), { delay: r, timeoutMs: n, initialDelay: r, currentId: null, isInstantPhase: !1 }),
      l = w.useRef(null),
      a = w.useCallback((s) => {
        i({ currentId: s });
      }, []);
    return (
      Pn(() => {
        o.currentId ? (l.current === null ? (l.current = o.currentId) : i({ isInstantPhase: !0 })) : (i({ isInstantPhase: !1 }), (l.current = null));
      }, [o.currentId]),
      w.createElement(p0.Provider, { value: w.useMemo(() => ({ ...o, setState: i, setCurrentId: a }), [o, i, a]) }, t)
    );
  },
  LE = (e, t) => {
    let { open: r, onOpenChange: n } = e,
      { id: o } = t;
    const { currentId: i, setCurrentId: l, initialDelay: a, setState: s, timeoutMs: u } = m0();
    w.useEffect(() => {
      i && (s({ delay: { open: 1, close: Mi(a, "close") } }), i !== o && n(!1));
    }, [o, n, s, i, a]),
      w.useEffect(() => {
        function f() {
          n(!1), s({ delay: a, currentId: null });
        }
        if (!r && i === o)
          if (u) {
            const c = window.setTimeout(f, u);
            return () => {
              clearTimeout(c);
            };
          } else f();
      }, [r, s, i, o, n, a, u]),
      w.useEffect(() => {
        r && l(o);
      }, [r, l, o]);
  };
function ME(e) {
  let t = e.activeElement;
  for (; ((r = t) == null || (n = r.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var r, n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function zp(e, t) {
  if (!e || !t) return !1;
  const r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && NE(r)) {
    let n = t;
    do {
      if (n && e === n) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ss(e, t) {
  let r =
      e.filter((o) => {
        var i;
        return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
      }) || [],
    n = r;
  for (; n.length; )
    (n =
      e.filter((o) => {
        var i;
        return (i = n) == null
          ? void 0
          : i.some((l) => {
              var a;
              return o.parentId === l.id && ((a = o.context) == null ? void 0 : a.open);
            });
      }) || []),
      (r = r.concat(n));
  return r;
}
function AE(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const DE = Gm["useInsertionEffect".toString()],
  FE = DE || ((e) => e());
function h0(e) {
  const t = w.useRef(() => {});
  return (
    FE(() => {
      t.current = e;
    }),
    w.useCallback(function () {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...n);
    }, [])
  );
}
function Ai(e, t) {
  if (t == null) return !1;
  if ("composedPath" in e) return e.composedPath().includes(t);
  const r = e;
  return r.target != null && t.contains(r.target);
}
const BE = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
  VE = { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
  UE = function (e) {
    var t, r;
    return (
      e === void 0 && (e = !0),
      { escapeKeyBubbles: typeof e == "boolean" ? e : (t = e.escapeKey) != null ? t : !0, outsidePressBubbles: typeof e == "boolean" ? e : (r = e.outsidePress) != null ? r : !0 }
    );
  },
  HE = function (e, t) {
    let {
        open: r,
        onOpenChange: n,
        events: o,
        nodeId: i,
        elements: { reference: l, domReference: a, floating: s },
        dataRef: u,
      } = e,
      {
        enabled: f = !0,
        escapeKey: c = !0,
        outsidePress: d = !0,
        outsidePressEvent: p = "pointerdown",
        referencePress: y = !1,
        referencePressEvent: v = "pointerdown",
        ancestorScroll: S = !1,
        bubbles: m = !0,
      } = t === void 0 ? {} : t;
    const h = Zc(),
      g = c0() != null,
      _ = h0(typeof d == "function" ? d : () => !1),
      x = typeof d == "function" ? _ : d,
      O = w.useRef(!1),
      { escapeKeyBubbles: P, outsidePressBubbles: E } = UE(m);
    return (
      w.useEffect(() => {
        if (!r || !f) return;
        (u.current.__escapeKeyBubbles = P), (u.current.__outsidePressBubbles = E);
        function T(j) {
          if (j.key === "Escape") {
            const B = h ? Ss(h.nodesRef.current, i) : [];
            if (B.length > 0) {
              let V = !0;
              if (
                (B.forEach((q) => {
                  var b;
                  if ((b = q.context) != null && b.open && !q.context.dataRef.current.__escapeKeyBubbles) {
                    V = !1;
                    return;
                  }
                }),
                !V)
              )
                return;
            }
            o.emit("dismiss", { type: "escapeKey", data: { returnFocus: { preventScroll: !1 } } }), n(!1);
          }
        }
        function k(j) {
          const B = O.current;
          if (((O.current = !1), B || (typeof x == "function" && !x(j)))) return;
          const V = AE(j);
          if (f0(V) && s) {
            const I = s.ownerDocument.defaultView || window,
              M = V.scrollWidth > V.clientWidth,
              W = V.scrollHeight > V.clientHeight;
            let Z = W && j.offsetX > V.clientWidth;
            if ((W && I.getComputedStyle(V).direction === "rtl" && (Z = j.offsetX <= V.offsetWidth - V.clientWidth), Z || (M && j.offsetY > V.clientHeight))) return;
          }
          const q =
            h &&
            Ss(h.nodesRef.current, i).some((I) => {
              var M;
              return Ai(j, (M = I.context) == null ? void 0 : M.elements.floating);
            });
          if (Ai(j, s) || Ai(j, a) || q) return;
          const b = h ? Ss(h.nodesRef.current, i) : [];
          if (b.length > 0) {
            let I = !0;
            if (
              (b.forEach((M) => {
                var W;
                if ((W = M.context) != null && W.open && !M.context.dataRef.current.__outsidePressBubbles) {
                  I = !1;
                  return;
                }
              }),
              !I)
            )
              return;
          }
          o.emit("dismiss", { type: "outsidePress", data: { returnFocus: g ? { preventScroll: !0 } : TE(j) || jE(j) } }), n(!1);
        }
        function z() {
          n(!1);
        }
        const D = ir(s);
        c && D.addEventListener("keydown", T), x && D.addEventListener(p, k);
        let F = [];
        return (
          S && (Et(a) && (F = Ft(a)), Et(s) && (F = F.concat(Ft(s))), !Et(l) && l && l.contextElement && (F = F.concat(Ft(l.contextElement)))),
          (F = F.filter((j) => {
            var B;
            return j !== ((B = D.defaultView) == null ? void 0 : B.visualViewport);
          })),
          F.forEach((j) => {
            j.addEventListener("scroll", z, { passive: !0 });
          }),
          () => {
            c && D.removeEventListener("keydown", T),
              x && D.removeEventListener(p, k),
              F.forEach((j) => {
                j.removeEventListener("scroll", z);
              });
          }
        );
      }, [u, s, a, l, c, x, p, o, h, i, r, n, S, f, P, E, g]),
      w.useEffect(() => {
        O.current = !1;
      }, [x, p]),
      w.useMemo(
        () =>
          f
            ? {
                reference: {
                  [BE[v]]: () => {
                    y && (o.emit("dismiss", { type: "referencePress", data: { returnFocus: !1 } }), n(!1));
                  },
                },
                floating: {
                  [VE[p]]: () => {
                    O.current = !0;
                  },
                },
              }
            : {},
        [f, o, y, p, v, n]
      )
    );
  },
  WE = function (e, t) {
    let {
        open: r,
        onOpenChange: n,
        dataRef: o,
        events: i,
        refs: l,
        elements: { floating: a, domReference: s },
      } = e,
      { enabled: u = !0, keyboardOnly: f = !0 } = t === void 0 ? {} : t;
    const c = w.useRef(""),
      d = w.useRef(!1),
      p = w.useRef();
    return (
      w.useEffect(() => {
        if (!u) return;
        const v = ir(a).defaultView || window;
        function S() {
          !r && f0(s) && s === ME(ir(s)) && (d.current = !0);
        }
        return (
          v.addEventListener("blur", S),
          () => {
            v.removeEventListener("blur", S);
          }
        );
      }, [a, s, r, u]),
      w.useEffect(() => {
        if (!u) return;
        function y(v) {
          (v.type === "referencePress" || v.type === "escapeKey") && (d.current = !0);
        }
        return (
          i.on("dismiss", y),
          () => {
            i.off("dismiss", y);
          }
        );
      }, [i, u]),
      w.useEffect(
        () => () => {
          clearTimeout(p.current);
        },
        []
      ),
      w.useMemo(
        () =>
          u
            ? {
                reference: {
                  onPointerDown(y) {
                    let { pointerType: v } = y;
                    (c.current = v), (d.current = !!(v && f));
                  },
                  onMouseLeave() {
                    d.current = !1;
                  },
                  onFocus(y) {
                    var v;
                    d.current ||
                      (y.type === "focus" && ((v = o.current.openEvent) == null ? void 0 : v.type) === "mousedown" && o.current.openEvent && Ai(o.current.openEvent, s)) ||
                      ((o.current.openEvent = y.nativeEvent), n(!0));
                  },
                  onBlur(y) {
                    d.current = !1;
                    const v = y.relatedTarget,
                      S = Et(v) && v.hasAttribute("data-floating-ui-focus-guard") && v.getAttribute("data-type") === "outside";
                    p.current = setTimeout(() => {
                      zp(l.floating.current, v) || zp(s, v) || S || n(!1);
                    });
                  },
                },
              }
            : {},
        [u, f, s, l, o, n]
      )
    );
  },
  GE = function (e, t) {
    let { open: r } = e,
      { enabled: n = !0, role: o = "dialog" } = t === void 0 ? {} : t;
    const i = Np(),
      l = Np();
    return w.useMemo(() => {
      const a = { id: i, role: o };
      return n
        ? o === "tooltip"
          ? { reference: { "aria-describedby": r ? i : void 0 }, floating: a }
          : {
              reference: {
                "aria-expanded": r ? "true" : "false",
                "aria-haspopup": o === "alertdialog" ? "dialog" : o,
                "aria-controls": r ? i : void 0,
                ...(o === "listbox" && { role: "combobox" }),
                ...(o === "menu" && { id: l }),
              },
              floating: { ...a, ...(o === "menu" && { "aria-labelledby": l }) },
            }
        : {};
    }, [n, o, r, i, l]);
  };
function y0(e) {
  e === void 0 && (e = {});
  const { open: t = !1, onOpenChange: r, nodeId: n } = e,
    o = xE(e),
    i = Zc(),
    l = w.useRef(null),
    a = w.useRef({}),
    s = w.useState(() => CE())[0],
    [u, f] = w.useState(null),
    c = w.useCallback(
      (m) => {
        const h = Et(m) ? { getBoundingClientRect: () => m.getBoundingClientRect(), contextElement: m } : m;
        o.refs.setReference(h);
      },
      [o.refs]
    ),
    d = w.useCallback(
      (m) => {
        (Et(m) || m === null) && ((l.current = m), f(m)), (Et(o.refs.reference.current) || o.refs.reference.current === null || (m !== null && !Et(m))) && o.refs.setReference(m);
      },
      [o.refs]
    ),
    p = w.useMemo(() => ({ ...o.refs, setReference: d, setPositionReference: c, domReference: l }), [o.refs, d, c]),
    y = w.useMemo(() => ({ ...o.elements, domReference: u }), [o.elements, u]),
    v = h0(r),
    S = w.useMemo(() => ({ ...o, refs: p, elements: y, dataRef: a, nodeId: n, events: s, open: t, onOpenChange: v }), [o, n, s, t, v, p, y]);
  return (
    Pn(() => {
      const m = i == null ? void 0 : i.nodesRef.current.find((h) => h.id === n);
      m && (m.context = S);
    }),
    w.useMemo(() => ({ ...o, context: S, refs: p, reference: d, positionReference: c }), [o, p, S, d, c])
  );
}
function xs(e, t, r) {
  const n = new Map();
  return {
    ...(r === "floating" && { tabIndex: -1 }),
    ...e,
    ...t
      .map((o) => (o ? o[r] : null))
      .concat(e)
      .reduce(
        (o, i) => (
          i &&
            Object.entries(i).forEach((l) => {
              let [a, s] = l;
              if (a.indexOf("on") === 0) {
                if ((n.has(a) || n.set(a, []), typeof s == "function")) {
                  var u;
                  (u = n.get(a)) == null || u.push(s),
                    (o[a] = function () {
                      for (var f, c = arguments.length, d = new Array(c), p = 0; p < c; p++) d[p] = arguments[p];
                      (f = n.get(a)) == null || f.forEach((y) => y(...d));
                    });
                }
              } else o[a] = s;
            }),
          o
        ),
        {}
      ),
  };
}
const QE = function (e) {
  e === void 0 && (e = []);
  const t = e,
    r = w.useCallback((i) => xs(i, e, "reference"), t),
    n = w.useCallback((i) => xs(i, e, "floating"), t),
    o = w.useCallback(
      (i) => xs(i, e, "item"),
      e.map((i) => (i == null ? void 0 : i.item))
    );
  return w.useMemo(() => ({ getReferenceProps: r, getFloatingProps: n, getItemProps: o }), [r, n, o]);
};
function KE({ opened: e, floating: t, position: r, positionDependencies: n }) {
  const [o, i] = w.useState(0);
  w.useEffect(() => {
    if (t.refs.reference.current && t.refs.floating.current) return wE(t.refs.reference.current, t.refs.floating.current, t.update);
  }, [t.refs.reference.current, t.refs.floating.current, e, o, r]),
    No(() => {
      t.update();
    }, n),
    No(() => {
      i((l) => l + 1);
    }, [e]);
}
var XE = Object.defineProperty,
  Ip = Object.getOwnPropertySymbols,
  YE = Object.prototype.hasOwnProperty,
  qE = Object.prototype.propertyIsEnumerable,
  Lp = (e, t, r) => (t in e ? XE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Wr = (e, t) => {
    for (var r in t || (t = {})) YE.call(t, r) && Lp(e, r, t[r]);
    if (Ip) for (var r of Ip(t)) qE.call(t, r) && Lp(e, r, t[r]);
    return e;
  };
const Mp = { entering: "in", entered: "in", exiting: "out", exited: "out", "pre-exiting": "out", "pre-entering": "out" };
function JE({ transition: e, state: t, duration: r, timingFunction: n }) {
  const o = { transitionDuration: `${r}ms`, transitionTimingFunction: n };
  return typeof e == "string"
    ? e in fi
      ? Wr(Wr(Wr({ transitionProperty: fi[e].transitionProperty }, o), fi[e].common), fi[e][Mp[t]])
      : null
    : Wr(Wr(Wr({ transitionProperty: e.transitionProperty }, o), e.common), e[Mp[t]]);
}
function ZE({ duration: e, exitDuration: t, timingFunction: r, mounted: n, onEnter: o, onExit: i, onEntered: l, onExited: a }) {
  const s = Sr(),
    u = Ov(),
    f = s.respectReducedMotion ? u : !1,
    [c, d] = w.useState(f ? 0 : e),
    [p, y] = w.useState(n ? "entered" : "exited"),
    v = w.useRef(-1),
    S = (m) => {
      const h = m ? o : i,
        g = m ? l : a;
      y(m ? "pre-entering" : "pre-exiting"), window.clearTimeout(v.current);
      const _ = f ? 0 : m ? e : t;
      if ((d(_), _ === 0)) typeof h == "function" && h(), typeof g == "function" && g(), y(m ? "entered" : "exited");
      else {
        const x = window.setTimeout(() => {
          typeof h == "function" && h(), y(m ? "entering" : "exiting");
        }, 10);
        v.current = window.setTimeout(() => {
          window.clearTimeout(x), typeof g == "function" && g(), y(m ? "entered" : "exited");
        }, _);
      }
    };
  return (
    No(() => {
      S(n);
    }, [n]),
    w.useEffect(() => () => window.clearTimeout(v.current), []),
    { transitionDuration: c, transitionStatus: p, transitionTimingFunction: r || s.transitionTimingFunction }
  );
}
function ja({
  keepMounted: e,
  transition: t,
  duration: r = 250,
  exitDuration: n = r,
  mounted: o,
  children: i,
  timingFunction: l,
  onExit: a,
  onEntered: s,
  onEnter: u,
  onExited: f,
}) {
  const {
    transitionDuration: c,
    transitionStatus: d,
    transitionTimingFunction: p,
  } = ZE({ mounted: o, exitDuration: n, duration: r, timingFunction: l, onExit: a, onEntered: s, onEnter: u, onExited: f });
  return c === 0
    ? o
      ? C.createElement(C.Fragment, null, i({}))
      : e
      ? i({ display: "none" })
      : null
    : d === "exited"
    ? e
      ? i({ display: "none" })
      : null
    : C.createElement(C.Fragment, null, i(JE({ transition: t, duration: c, state: d, timingFunction: p })));
}
ja.displayName = "@mantine/core/Transition";
function v0({ children: e, active: t = !0, refProp: r = "ref" }) {
  const n = dP(t),
    o = Kc(n, e == null ? void 0 : e.ref);
  return Vc(e) ? w.cloneElement(e, { [r]: o }) : e;
}
v0.displayName = "@mantine/core/FocusTrap";
var e2 = Object.defineProperty,
  t2 = Object.defineProperties,
  r2 = Object.getOwnPropertyDescriptors,
  Ap = Object.getOwnPropertySymbols,
  n2 = Object.prototype.hasOwnProperty,
  o2 = Object.prototype.propertyIsEnumerable,
  Dp = (e, t, r) => (t in e ? e2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  qt = (e, t) => {
    for (var r in t || (t = {})) n2.call(t, r) && Dp(e, r, t[r]);
    if (Ap) for (var r of Ap(t)) o2.call(t, r) && Dp(e, r, t[r]);
    return e;
  },
  hi = (e, t) => t2(e, r2(t));
function Fp(e, t, r, n) {
  return e === "center" || n === "center" ? { top: t } : e === "end" ? { bottom: r } : e === "start" ? { top: r } : {};
}
function Bp(e, t, r, n, o) {
  return e === "center" || n === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: r } : e === "start" ? { [o === "ltr" ? "left" : "right"]: r } : {};
}
const i2 = { bottom: "borderTopLeftRadius", left: "borderTopRightRadius", right: "borderBottomLeftRadius", top: "borderBottomRightRadius" };
function l2({ position: e, arrowSize: t, arrowOffset: r, arrowRadius: n, arrowPosition: o, arrowX: i, arrowY: l, dir: a }) {
  const [s, u = "center"] = e.split("-"),
    f = { width: N(t), height: N(t), transform: "rotate(45deg)", position: "absolute", [i2[s]]: N(n) },
    c = N(-t / 2);
  return s === "left"
    ? hi(qt(qt({}, f), Fp(u, l, r, o)), { right: c, borderLeftColor: "transparent", borderBottomColor: "transparent" })
    : s === "right"
    ? hi(qt(qt({}, f), Fp(u, l, r, o)), { left: c, borderRightColor: "transparent", borderTopColor: "transparent" })
    : s === "top"
    ? hi(qt(qt({}, f), Bp(u, i, r, o, a)), { bottom: c, borderTopColor: "transparent", borderLeftColor: "transparent" })
    : s === "bottom"
    ? hi(qt(qt({}, f), Bp(u, i, r, o, a)), { top: c, borderBottomColor: "transparent", borderRightColor: "transparent" })
    : {};
}
var a2 = Object.defineProperty,
  s2 = Object.defineProperties,
  u2 = Object.getOwnPropertyDescriptors,
  Il = Object.getOwnPropertySymbols,
  g0 = Object.prototype.hasOwnProperty,
  w0 = Object.prototype.propertyIsEnumerable,
  Vp = (e, t, r) => (t in e ? a2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  c2 = (e, t) => {
    for (var r in t || (t = {})) g0.call(t, r) && Vp(e, r, t[r]);
    if (Il) for (var r of Il(t)) w0.call(t, r) && Vp(e, r, t[r]);
    return e;
  },
  f2 = (e, t) => s2(e, u2(t)),
  d2 = (e, t) => {
    var r = {};
    for (var n in e) g0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Il) for (var n of Il(e)) t.indexOf(n) < 0 && w0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const _0 = w.forwardRef((e, t) => {
  var r = e,
    { position: n, arrowSize: o, arrowOffset: i, arrowRadius: l, arrowPosition: a, visible: s, arrowX: u, arrowY: f } = r,
    c = d2(r, ["position", "arrowSize", "arrowOffset", "arrowRadius", "arrowPosition", "visible", "arrowX", "arrowY"]);
  const d = Sr();
  return s
    ? C.createElement(
        "div",
        f2(c2({}, c), { ref: t, style: l2({ position: n, arrowSize: o, arrowOffset: i, arrowRadius: l, arrowPosition: a, dir: d.dir, arrowX: u, arrowY: f }) })
      )
    : null;
});
_0.displayName = "@mantine/core/FloatingArrow";
function p2(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [r, n] = t.split("-"),
      o = r === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return t;
}
const Hn = { xs: N(30), sm: N(36), md: N(42), lg: N(50), xl: N(60) };
var m2 = he((e, { orientation: t, buttonBorderWidth: r }) => ({
  root: {
    display: "flex",
    flexDirection: t === "vertical" ? "column" : "row",
    "& [data-button]": {
      "&:first-of-type:not(:last-of-type)": {
        borderBottomRightRadius: 0,
        [t === "vertical" ? "borderBottomLeftRadius" : "borderTopRightRadius"]: 0,
        [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: `calc(${N(r)} / 2)`,
      },
      "&:last-of-type:not(:first-of-type)": {
        borderTopLeftRadius: 0,
        [t === "vertical" ? "borderTopRightRadius" : "borderBottomLeftRadius"]: 0,
        [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${N(r)} / 2)`,
      },
      "&:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0,
        [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${N(r)} / 2)`,
        [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: `calc(${N(r)} / 2)`,
      },
      "& + [data-button]": {
        [t === "vertical" ? "marginTop" : "marginLeft"]: `calc(${r} * -1)`,
        "@media (min-resolution: 192dpi)": { [t === "vertical" ? "marginTop" : "marginLeft"]: 0 },
      },
    },
  },
}));
const h2 = m2;
var y2 = Object.defineProperty,
  Ll = Object.getOwnPropertySymbols,
  S0 = Object.prototype.hasOwnProperty,
  x0 = Object.prototype.propertyIsEnumerable,
  Up = (e, t, r) => (t in e ? y2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  v2 = (e, t) => {
    for (var r in t || (t = {})) S0.call(t, r) && Up(e, r, t[r]);
    if (Ll) for (var r of Ll(t)) x0.call(t, r) && Up(e, r, t[r]);
    return e;
  },
  g2 = (e, t) => {
    var r = {};
    for (var n in e) S0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ll) for (var n of Ll(e)) t.indexOf(n) < 0 && x0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const w2 = { orientation: "horizontal", buttonBorderWidth: 1 },
  P0 = w.forwardRef((e, t) => {
    const r = re("ButtonGroup", w2, e),
      { className: n, orientation: o, buttonBorderWidth: i, unstyled: l } = r,
      a = g2(r, ["className", "orientation", "buttonBorderWidth", "unstyled"]),
      { classes: s, cx: u } = h2({ orientation: o, buttonBorderWidth: i }, { name: "ButtonGroup", unstyled: l });
    return C.createElement(ze, v2({ className: u(s.root, n), ref: t }, a));
  });
P0.displayName = "@mantine/core/ButtonGroup";
var _2 = Object.defineProperty,
  S2 = Object.defineProperties,
  x2 = Object.getOwnPropertyDescriptors,
  Hp = Object.getOwnPropertySymbols,
  P2 = Object.prototype.hasOwnProperty,
  O2 = Object.prototype.propertyIsEnumerable,
  Wp = (e, t, r) => (t in e ? _2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  It = (e, t) => {
    for (var r in t || (t = {})) P2.call(t, r) && Wp(e, r, t[r]);
    if (Hp) for (var r of Hp(t)) O2.call(t, r) && Wp(e, r, t[r]);
    return e;
  },
  Di = (e, t) => S2(e, x2(t));
const E2 = ["filled", "outline", "light", "white", "default", "subtle", "gradient"],
  ju = {
    xs: { height: Hn.xs, paddingLeft: N(14), paddingRight: N(14) },
    sm: { height: Hn.sm, paddingLeft: N(18), paddingRight: N(18) },
    md: { height: Hn.md, paddingLeft: N(22), paddingRight: N(22) },
    lg: { height: Hn.lg, paddingLeft: N(26), paddingRight: N(26) },
    xl: { height: Hn.xl, paddingLeft: N(32), paddingRight: N(32) },
    "compact-xs": { height: N(22), paddingLeft: N(7), paddingRight: N(7) },
    "compact-sm": { height: N(26), paddingLeft: N(8), paddingRight: N(8) },
    "compact-md": { height: N(30), paddingLeft: N(10), paddingRight: N(10) },
    "compact-lg": { height: N(34), paddingLeft: N(12), paddingRight: N(12) },
    "compact-xl": { height: N(40), paddingLeft: N(14), paddingRight: N(14) },
  };
function C2({ compact: e, size: t, withLeftIcon: r, withRightIcon: n }) {
  if (e) return ju[`compact-${t}`];
  const o = ju[t];
  return o ? Di(It({}, o), { paddingLeft: r ? `calc(${o.paddingLeft}  / 1.5)` : o.paddingLeft, paddingRight: n ? `calc(${o.paddingRight}  / 1.5)` : o.paddingRight }) : {};
}
const $2 = (e) => ({ display: e ? "block" : "inline-block", width: e ? "100%" : "auto" });
function k2({ variant: e, theme: t, color: r, gradient: n }) {
  if (!E2.includes(e)) return null;
  const o = t.fn.variant({ color: r, variant: e, gradient: n });
  return e === "gradient"
    ? It({ border: 0, backgroundImage: o.background, color: o.color }, t.fn.hover({ backgroundSize: "200%" }))
    : It({ border: `${N(1)} solid ${o.border}`, backgroundColor: o.background, color: o.color }, t.fn.hover({ backgroundColor: o.hover }));
}
var b2 = he((e, { radius: t, fullWidth: r, compact: n, withLeftIcon: o, withRightIcon: i, color: l, gradient: a }, { variant: s, size: u }) => ({
  root: Di(
    It(
      Di(It(It(It(It({}, C2({ compact: n, size: u, withLeftIcon: o, withRightIcon: i })), e.fn.fontStyles()), e.fn.focusStyles()), $2(r)), {
        borderRadius: e.fn.radius(t),
        fontWeight: 600,
        position: "relative",
        lineHeight: 1,
        fontSize: G({ size: u, sizes: e.fontSizes }),
        userSelect: "none",
        cursor: "pointer",
      }),
      k2({ variant: s, theme: e, color: l, gradient: a })
    ),
    {
      "&:active": e.activeStyles,
      "&:disabled, &[data-disabled]": {
        borderColor: "transparent",
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
        color: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[5],
        cursor: "not-allowed",
        backgroundImage: "none",
        pointerEvents: "none",
        "&:active": { transform: "none" },
      },
      "&[data-loading]": {
        pointerEvents: "none",
        "&::before": Di(It({ content: '""' }, e.fn.cover(N(-1))), {
          backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
          borderRadius: e.fn.radius(t),
          cursor: "not-allowed",
        }),
      },
    }
  ),
  icon: { display: "flex", alignItems: "center" },
  leftIcon: { marginRight: e.spacing.xs },
  rightIcon: { marginLeft: e.spacing.xs },
  centerLoader: { position: "absolute", left: "50%", transform: "translateX(-50%)", opacity: 0.5 },
  inner: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%", overflow: "visible" },
  label: { whiteSpace: "nowrap", height: "100%", overflow: "hidden", display: "flex", alignItems: "center" },
}));
const R2 = b2;
var N2 = Object.defineProperty,
  Ml = Object.getOwnPropertySymbols,
  O0 = Object.prototype.hasOwnProperty,
  E0 = Object.prototype.propertyIsEnumerable,
  Gp = (e, t, r) => (t in e ? N2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Qp = (e, t) => {
    for (var r in t || (t = {})) O0.call(t, r) && Gp(e, r, t[r]);
    if (Ml) for (var r of Ml(t)) E0.call(t, r) && Gp(e, r, t[r]);
    return e;
  },
  T2 = (e, t) => {
    var r = {};
    for (var n in e) O0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ml) for (var n of Ml(e)) t.indexOf(n) < 0 && E0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const j2 = { size: "sm", type: "button", variant: "filled", loaderPosition: "left" },
  tf = w.forwardRef((e, t) => {
    const r = re("Button", j2, e),
      {
        className: n,
        size: o,
        color: i,
        type: l,
        disabled: a,
        children: s,
        leftIcon: u,
        rightIcon: f,
        fullWidth: c,
        variant: d,
        radius: p,
        uppercase: y,
        compact: v,
        loading: S,
        loaderPosition: m,
        loaderProps: h,
        gradient: g,
        classNames: _,
        styles: x,
        unstyled: O,
      } = r,
      P = T2(r, [
        "className",
        "size",
        "color",
        "type",
        "disabled",
        "children",
        "leftIcon",
        "rightIcon",
        "fullWidth",
        "variant",
        "radius",
        "uppercase",
        "compact",
        "loading",
        "loaderPosition",
        "loaderProps",
        "gradient",
        "classNames",
        "styles",
        "unstyled",
      ]),
      {
        classes: E,
        cx: T,
        theme: k,
      } = R2(
        { radius: p, color: i, fullWidth: c, compact: v, gradient: g, withLeftIcon: !!u, withRightIcon: !!f },
        { name: "Button", unstyled: O, classNames: _, styles: x, variant: d, size: o }
      ),
      z = k.fn.variant({ color: i, variant: d }),
      D = C.createElement(Xc, Qp({ color: z.color, size: `calc(${G({ size: o, sizes: ju }).height} / 2)` }, h));
    return C.createElement(
      Nv,
      Qp({ className: T(E.root, n), type: l, disabled: a, "data-button": !0, "data-disabled": a || void 0, "data-loading": S || void 0, ref: t, unstyled: O }, P),
      C.createElement(
        "div",
        { className: E.inner },
        (u || (S && m === "left")) && C.createElement("span", { className: T(E.icon, E.leftIcon) }, S && m === "left" ? D : u),
        S && m === "center" && C.createElement("span", { className: E.centerLoader }, D),
        C.createElement("span", { className: E.label, style: { textTransform: y ? "uppercase" : void 0 } }, s),
        (f || (S && m === "right")) && C.createElement("span", { className: T(E.icon, E.rightIcon) }, S && m === "right" ? D : f)
      )
    );
  });
tf.displayName = "@mantine/core/Button";
tf.Group = P0;
const Rr = tf;
var z2 = he((e, { radius: t, shadow: r }) => ({
  root: {
    outline: 0,
    WebkitTapHighlightColor: "transparent",
    display: "block",
    textDecoration: "none",
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
    backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
    boxSizing: "border-box",
    borderRadius: e.fn.radius(t),
    boxShadow: e.shadows[r] || r || "none",
    "&[data-with-border]": { border: `${N(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]}` },
  },
}));
const I2 = z2;
var L2 = Object.defineProperty,
  Al = Object.getOwnPropertySymbols,
  C0 = Object.prototype.hasOwnProperty,
  $0 = Object.prototype.propertyIsEnumerable,
  Kp = (e, t, r) => (t in e ? L2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  M2 = (e, t) => {
    for (var r in t || (t = {})) C0.call(t, r) && Kp(e, r, t[r]);
    if (Al) for (var r of Al(t)) $0.call(t, r) && Kp(e, r, t[r]);
    return e;
  },
  A2 = (e, t) => {
    var r = {};
    for (var n in e) C0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Al) for (var n of Al(e)) t.indexOf(n) < 0 && $0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const D2 = {},
  k0 = w.forwardRef((e, t) => {
    const r = re("Paper", D2, e),
      { className: n, children: o, radius: i, withBorder: l, shadow: a, unstyled: s, variant: u } = r,
      f = A2(r, ["className", "children", "radius", "withBorder", "shadow", "unstyled", "variant"]),
      { classes: c, cx: d } = I2({ radius: i, shadow: a }, { name: "Paper", unstyled: s, variant: u });
    return C.createElement(ze, M2({ className: d(c.root, n), "data-with-border": l || void 0, ref: t }, f), o);
  });
k0.displayName = "@mantine/core/Paper";
const F2 = k0;
var B2 = he((e, { inline: t }) => ({ root: { display: t ? "inline-flex" : "flex", alignItems: "center", justifyContent: "center" } }));
const V2 = B2;
var U2 = Object.defineProperty,
  Dl = Object.getOwnPropertySymbols,
  b0 = Object.prototype.hasOwnProperty,
  R0 = Object.prototype.propertyIsEnumerable,
  Xp = (e, t, r) => (t in e ? U2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  H2 = (e, t) => {
    for (var r in t || (t = {})) b0.call(t, r) && Xp(e, r, t[r]);
    if (Dl) for (var r of Dl(t)) R0.call(t, r) && Xp(e, r, t[r]);
    return e;
  },
  W2 = (e, t) => {
    var r = {};
    for (var n in e) b0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Dl) for (var n of Dl(e)) t.indexOf(n) < 0 && R0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const N0 = w.forwardRef((e, t) => {
  const r = re("Center", {}, e),
    { inline: n, className: o, unstyled: i, variant: l } = r,
    a = W2(r, ["inline", "className", "unstyled", "variant"]),
    { classes: s, cx: u } = V2({ inline: n }, { name: "Center", unstyled: i, variant: l });
  return C.createElement(ze, H2({ ref: t, className: u(s.root, o) }, a));
});
N0.displayName = "@mantine/core/Center";
const zu = N0,
  [G2, Q2] = Bc("Drawer component was not found in tree"),
  Yp = { xs: N(320), sm: N(380), md: N(440), lg: N(620), xl: N(780) };
var K2 = he((e, { position: t }, { size: r }) => ({
  header: { zIndex: 1e3 },
  content: {
    flex: t === "right" || t === "left" ? `0 0 ${G({ size: r, sizes: Yp })}` : "0 0 100%",
    maxWidth: "100%",
    maxHeight: "100%",
    height: t === "right" || t === "left" ? "100%" : G({ size: r, sizes: Yp }),
    borderRadius: 0,
    overflowY: "auto",
  },
  inner: { display: "flex", justifyContent: t === "right" ? "flex-end" : "flex-start", alignItems: t === "bottom" ? "flex-end" : "flex-start" },
}));
const X2 = K2,
  [Y2, Rn] = Bc("ModalBase component was not found in tree");
var q2 = he(() => ({ close: { marginLeft: "auto", marginRight: 0 } }));
const J2 = q2;
var Z2 = Object.defineProperty,
  Fl = Object.getOwnPropertySymbols,
  T0 = Object.prototype.hasOwnProperty,
  j0 = Object.prototype.propertyIsEnumerable,
  qp = (e, t, r) => (t in e ? Z2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  eC = (e, t) => {
    for (var r in t || (t = {})) T0.call(t, r) && qp(e, r, t[r]);
    if (Fl) for (var r of Fl(t)) j0.call(t, r) && qp(e, r, t[r]);
    return e;
  },
  tC = (e, t) => {
    var r = {};
    for (var n in e) T0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Fl) for (var n of Fl(e)) t.indexOf(n) < 0 && j0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const rC = { size: "sm" },
  nC = w.forwardRef((e, t) => {
    const r = Rn(),
      n = re(`${r.__staticSelector}CloseButton`, rC, e),
      { className: o } = n,
      i = tC(n, ["className"]),
      { classes: l, cx: a } = J2(null, r.stylesApi);
    return C.createElement(HO, eC({ className: a(l.close, o), ref: t, onClick: r.onClose }, i));
  });
var oC = he(() => ({ overlay: {} }));
const iC = oC;
var lC = Object.defineProperty,
  aC = Object.defineProperties,
  sC = Object.getOwnPropertyDescriptors,
  Jp = Object.getOwnPropertySymbols,
  uC = Object.prototype.hasOwnProperty,
  cC = Object.prototype.propertyIsEnumerable,
  Zp = (e, t, r) => (t in e ? lC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  fC = (e, t) => {
    for (var r in t || (t = {})) uC.call(t, r) && Zp(e, r, t[r]);
    if (Jp) for (var r of Jp(t)) cC.call(t, r) && Zp(e, r, t[r]);
    return e;
  },
  dC = (e, t) => aC(e, sC(t)),
  pC = he((e, { color: t, opacity: r, blur: n, radius: o, gradient: i, fixed: l, zIndex: a }) => ({
    root: dC(fC({}, e.fn.cover(0)), {
      position: l ? "fixed" : "absolute",
      backgroundColor: i ? void 0 : e.fn.rgba(t, r),
      backgroundImage: i,
      backdropFilter: n ? `blur(${N(n)})` : void 0,
      borderRadius: e.fn.radius(o),
      zIndex: a,
      "&[data-center]": { display: "flex", alignItems: "center", justifyContent: "center" },
    }),
  }));
const mC = pC;
var hC = Object.defineProperty,
  Bl = Object.getOwnPropertySymbols,
  z0 = Object.prototype.hasOwnProperty,
  I0 = Object.prototype.propertyIsEnumerable,
  em = (e, t, r) => (t in e ? hC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  yC = (e, t) => {
    for (var r in t || (t = {})) z0.call(t, r) && em(e, r, t[r]);
    if (Bl) for (var r of Bl(t)) I0.call(t, r) && em(e, r, t[r]);
    return e;
  },
  vC = (e, t) => {
    var r = {};
    for (var n in e) z0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Bl) for (var n of Bl(e)) t.indexOf(n) < 0 && I0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const gC = { opacity: 0.6, color: "#000", zIndex: ba("modal"), radius: 0 },
  L0 = w.forwardRef((e, t) => {
    const r = re("Overlay", gC, e),
      { variant: n, opacity: o, color: i, blur: l, gradient: a, zIndex: s, radius: u, children: f, className: c, classNames: d, styles: p, unstyled: y, center: v, fixed: S } = r,
      m = vC(r, ["variant", "opacity", "color", "blur", "gradient", "zIndex", "radius", "children", "className", "classNames", "styles", "unstyled", "center", "fixed"]),
      { classes: h, cx: g } = mC(
        { color: i, opacity: o, blur: l, radius: u, gradient: a, fixed: S, zIndex: s },
        { name: "Overlay", classNames: d, styles: p, unstyled: y, variant: n }
      );
    return C.createElement(ze, yC({ ref: t, className: g(h.root, c), "data-center": v || void 0 }, m), f);
  });
L0.displayName = "@mantine/core/Overlay";
const wC = L0;
var _C = Object.defineProperty,
  SC = Object.defineProperties,
  xC = Object.getOwnPropertyDescriptors,
  Vl = Object.getOwnPropertySymbols,
  M0 = Object.prototype.hasOwnProperty,
  A0 = Object.prototype.propertyIsEnumerable,
  tm = (e, t, r) => (t in e ? _C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Wn = (e, t) => {
    for (var r in t || (t = {})) M0.call(t, r) && tm(e, r, t[r]);
    if (Vl) for (var r of Vl(t)) A0.call(t, r) && tm(e, r, t[r]);
    return e;
  },
  PC = (e, t) => SC(e, xC(t)),
  OC = (e, t) => {
    var r = {};
    for (var n in e) M0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Vl) for (var n of Vl(e)) t.indexOf(n) < 0 && A0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const EC = {},
  CC = w.forwardRef((e, t) => {
    const r = Rn(),
      n = re(`${r.__staticSelector}Overlay`, EC, e),
      { onClick: o, transitionProps: i, style: l, className: a } = n,
      s = OC(n, ["onClick", "transitionProps", "style", "className"]),
      { classes: u, cx: f } = iC(null, r.stylesApi),
      c = (d) => {
        o == null || o(d), r.closeOnClickOutside && r.onClose();
      };
    return C.createElement(ja, PC(Wn(Wn({ mounted: r.opened }, r.transitionProps), i), { transition: "fade" }), (d) =>
      C.createElement(wC, Wn({ ref: t, onClick: c, fixed: !0, style: Wn(Wn({}, l), d), className: f(u.overlay, a), zIndex: r.zIndex }, s))
    );
  });
var $C = he((e, { zIndex: t }) => ({
  inner: { position: "fixed", width: "100%", top: 0, bottom: 0, maxHeight: "100%", zIndex: t, pointerEvents: "none" },
  content: { pointerEvents: "all" },
}));
const kC = $C;
var bC = Object.defineProperty,
  Ul = Object.getOwnPropertySymbols,
  D0 = Object.prototype.hasOwnProperty,
  F0 = Object.prototype.propertyIsEnumerable,
  rm = (e, t, r) => (t in e ? bC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Gn = (e, t) => {
    for (var r in t || (t = {})) D0.call(t, r) && rm(e, r, t[r]);
    if (Ul) for (var r of Ul(t)) F0.call(t, r) && rm(e, r, t[r]);
    return e;
  },
  RC = (e, t) => {
    var r = {};
    for (var n in e) D0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ul) for (var n of Ul(e)) t.indexOf(n) < 0 && F0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const NC = {},
  TC = w.forwardRef((e, t) => {
    const r = Rn(),
      n = re(`${r.__staticSelector}Content`, NC, e),
      { className: o, transitionProps: i, style: l, onKeyDown: a } = n,
      s = RC(n, ["className", "transitionProps", "style", "onKeyDown"]),
      { classes: u, cx: f } = kC({ zIndex: r.zIndex + 1 }, r.stylesApi),
      c = (d) => {
        var p;
        ((p = d.target) == null ? void 0 : p.getAttribute("data-mantine-stop-propagation")) !== "true" && d.key === "Escape" && r.closeOnEscape && r.onClose(), a == null || a(d);
      };
    return C.createElement(ja, Gn(Gn({ mounted: r.opened, transition: "pop" }, r.transitionProps), i), (d) =>
      C.createElement(
        "div",
        { className: f(u.inner) },
        C.createElement(
          v0,
          { active: r.opened && r.trapFocus },
          C.createElement(
            F2,
            Gn(
              {
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                "aria-describedby": r.bodyMounted ? r.getBodyId() : void 0,
                "aria-labelledby": r.titleMounted ? r.getTitleId() : void 0,
                onKeyDown: c,
                ref: t,
                className: f(u.content, o),
                style: Gn(Gn({}, l), d),
                shadow: r.shadow,
              },
              s
            ),
            s.children
          )
        )
      )
    );
  });
var jC = he((e, { padding: t }) => {
  const r = G({ size: t, sizes: e.spacing });
  return {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: r,
      paddingRight: `calc(${r} - ${N(5)})`,
      position: "sticky",
      top: 0,
      backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
      zIndex: 1e3,
    },
  };
});
const zC = jC;
var IC = Object.defineProperty,
  Hl = Object.getOwnPropertySymbols,
  B0 = Object.prototype.hasOwnProperty,
  V0 = Object.prototype.propertyIsEnumerable,
  nm = (e, t, r) => (t in e ? IC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  LC = (e, t) => {
    for (var r in t || (t = {})) B0.call(t, r) && nm(e, r, t[r]);
    if (Hl) for (var r of Hl(t)) V0.call(t, r) && nm(e, r, t[r]);
    return e;
  },
  MC = (e, t) => {
    var r = {};
    for (var n in e) B0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Hl) for (var n of Hl(e)) t.indexOf(n) < 0 && V0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const AC = {},
  DC = w.forwardRef((e, t) => {
    const r = Rn(),
      n = re(`${r.__staticSelector}Header`, AC, e),
      { className: o } = n,
      i = MC(n, ["className"]),
      { classes: l, cx: a } = zC({ padding: r.padding }, r.stylesApi);
    return C.createElement(ze, LC({ ref: t, className: a(l.header, o) }, i));
  });
var FC = he((e) => ({ title: { lineHeight: 1, padding: 0, margin: 0, fontWeight: 400, fontSize: e.fontSizes.md } }));
const BC = FC;
var VC = Object.defineProperty,
  Wl = Object.getOwnPropertySymbols,
  U0 = Object.prototype.hasOwnProperty,
  H0 = Object.prototype.propertyIsEnumerable,
  om = (e, t, r) => (t in e ? VC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  UC = (e, t) => {
    for (var r in t || (t = {})) U0.call(t, r) && om(e, r, t[r]);
    if (Wl) for (var r of Wl(t)) H0.call(t, r) && om(e, r, t[r]);
    return e;
  },
  HC = (e, t) => {
    var r = {};
    for (var n in e) U0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Wl) for (var n of Wl(e)) t.indexOf(n) < 0 && H0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const WC = {},
  GC = w.forwardRef((e, t) => {
    const r = Rn(),
      n = re(`${r.__staticSelector}Title`, WC, e),
      { className: o } = n,
      i = HC(n, ["className"]),
      { classes: l, cx: a } = BC(null, r.stylesApi);
    return (
      w.useEffect(() => (r.setTitleMounted(!0), () => r.setTitleMounted(!1)), []),
      C.createElement(ze, UC({ component: "h2", id: r.getTitleId(), className: a(l.title, o), ref: t }, i))
    );
  });
var QC = he((e, { padding: t }) => ({ body: { padding: G({ size: t, sizes: e.spacing }), "&:not(:only-child)": { paddingTop: 0 } } }));
const KC = QC;
var XC = Object.defineProperty,
  Gl = Object.getOwnPropertySymbols,
  W0 = Object.prototype.hasOwnProperty,
  G0 = Object.prototype.propertyIsEnumerable,
  im = (e, t, r) => (t in e ? XC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  YC = (e, t) => {
    for (var r in t || (t = {})) W0.call(t, r) && im(e, r, t[r]);
    if (Gl) for (var r of Gl(t)) G0.call(t, r) && im(e, r, t[r]);
    return e;
  },
  qC = (e, t) => {
    var r = {};
    for (var n in e) W0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Gl) for (var n of Gl(e)) t.indexOf(n) < 0 && G0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const JC = {},
  ZC = w.forwardRef((e, t) => {
    const r = Rn(),
      n = re(`${r.__staticSelector}Body`, JC, e),
      { className: o } = n,
      i = qC(n, ["className"]),
      { classes: l, cx: a } = KC({ padding: r.padding }, r.stylesApi);
    return w.useEffect(() => (r.setBodyMounted(!0), () => r.setBodyMounted(!1)), []), C.createElement(ze, YC({ id: r.getBodyId(), className: a(l.body, o), ref: t }, i));
  });
function e$({ children: e }) {
  return C.createElement(C.Fragment, null, e);
}
function t$({ opened: e, transitionDuration: t }) {
  const [r, n] = w.useState(e),
    o = w.useRef(),
    l = Ov() ? 0 : t;
  return (
    w.useEffect(
      () => (e ? (n(!0), window.clearTimeout(o.current)) : l === 0 ? n(!1) : (o.current = window.setTimeout(() => n(!1), l)), () => window.clearTimeout(o.current)),
      [e, l]
    ),
    r
  );
}
var r$ = he(() => ({ root: {} }));
const n$ = r$;
var o$ = Object.defineProperty,
  i$ = Object.defineProperties,
  l$ = Object.getOwnPropertyDescriptors,
  Ql = Object.getOwnPropertySymbols,
  Q0 = Object.prototype.hasOwnProperty,
  K0 = Object.prototype.propertyIsEnumerable,
  lm = (e, t, r) => (t in e ? o$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Ps = (e, t) => {
    for (var r in t || (t = {})) Q0.call(t, r) && lm(e, r, t[r]);
    if (Ql) for (var r of Ql(t)) K0.call(t, r) && lm(e, r, t[r]);
    return e;
  },
  am = (e, t) => i$(e, l$(t)),
  a$ = (e, t) => {
    var r = {};
    for (var n in e) Q0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ql) for (var n of Ql(e)) t.indexOf(n) < 0 && K0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Vo = {
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: ba("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
};
function K(e) {
  const t = re("ModalBase", Vo, e),
    {
      opened: r,
      onClose: n,
      children: o,
      closeOnClickOutside: i,
      __staticSelector: l,
      transitionProps: a,
      withinPortal: s,
      portalProps: u,
      keepMounted: f,
      target: c,
      zIndex: d,
      lockScroll: p,
      trapFocus: y,
      closeOnEscape: v,
      returnFocus: S,
      padding: m,
      shadow: h,
      id: g,
      size: _,
      variant: x,
      classNames: O,
      unstyled: P,
      styles: E,
      className: T,
    } = t,
    k = a$(t, [
      "opened",
      "onClose",
      "children",
      "closeOnClickOutside",
      "__staticSelector",
      "transitionProps",
      "withinPortal",
      "portalProps",
      "keepMounted",
      "target",
      "zIndex",
      "lockScroll",
      "trapFocus",
      "closeOnEscape",
      "returnFocus",
      "padding",
      "shadow",
      "id",
      "size",
      "variant",
      "classNames",
      "unstyled",
      "styles",
      "className",
    ]),
    { classes: z, cx: D } = n$(null, { name: l, classNames: O, styles: E, unstyled: P, variant: x, size: _ }),
    F = Pv(g),
    [j, B] = w.useState(!1),
    [V, q] = w.useState(!1),
    b = typeof (a == null ? void 0 : a.duration) == "number" ? (a == null ? void 0 : a.duration) : 200,
    I = t$({ opened: r, transitionDuration: b });
  return (
    ku("keydown", (M) => {
      !y && M.key === "Escape" && v && n();
    }),
    iP({ opened: r, shouldReturnFocus: y && S }),
    C.createElement(
      Ra,
      am(Ps({}, u), { withinPortal: s, target: c }),
      C.createElement(
        Y2,
        {
          value: {
            __staticSelector: l,
            opened: r,
            onClose: n,
            closeOnClickOutside: i,
            transitionProps: am(Ps({}, a), { duration: b, keepMounted: f }),
            zIndex: d,
            padding: m,
            id: F,
            getTitleId: () => `${F}-title`,
            getBodyId: () => `${F}-body`,
            titleMounted: j,
            bodyMounted: V,
            setTitleMounted: B,
            setBodyMounted: q,
            trapFocus: y,
            closeOnEscape: v,
            shadow: h,
            stylesApi: { name: l, size: _, variant: x, classNames: O, styles: E, unstyled: P },
          },
        },
        C.createElement(dS, { enabled: I && p }, C.createElement(ze, Ps({ className: D(z.root, T) }, k), o))
      )
    )
  );
}
K.CloseButton = nC;
K.Overlay = CC;
K.Content = TC;
K.Header = DC;
K.Title = GC;
K.Body = ZC;
K.NativeScrollArea = e$;
var s$ = Object.defineProperty,
  u$ = Object.defineProperties,
  c$ = Object.getOwnPropertyDescriptors,
  Kl = Object.getOwnPropertySymbols,
  X0 = Object.prototype.hasOwnProperty,
  Y0 = Object.prototype.propertyIsEnumerable,
  sm = (e, t, r) => (t in e ? s$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Fi = (e, t) => {
    for (var r in t || (t = {})) X0.call(t, r) && sm(e, r, t[r]);
    if (Kl) for (var r of Kl(t)) Y0.call(t, r) && sm(e, r, t[r]);
    return e;
  },
  q0 = (e, t) => u$(e, c$(t)),
  f$ = (e, t) => {
    var r = {};
    for (var n in e) X0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Kl) for (var n of Kl(e)) t.indexOf(n) < 0 && Y0.call(e, n) && (r[n] = e[n]);
    return r;
  };
const d$ = { top: "slide-down", bottom: "slide-up", left: "slide-right", right: "slide-left" },
  p$ = { top: "slide-down", bottom: "slide-up", right: "slide-right", left: "slide-left" },
  m$ = q0(Fi({}, Vo), { position: "left" });
function J0(e) {
  const t = re("DrawerRoot", m$, e),
    { classNames: r, variant: n, size: o, scrollAreaComponent: i, position: l, transitionProps: a } = t,
    s = f$(t, ["classNames", "variant", "size", "scrollAreaComponent", "position", "transitionProps"]),
    { classes: u, cx: f, theme: c } = X2({ position: l }, { name: "Drawer", variant: n, size: o }),
    d = (c.dir === "rtl" ? p$ : d$)[l];
  return C.createElement(
    G2,
    { value: { scrollAreaComponent: i } },
    C.createElement(
      K,
      Fi(
        {
          __staticSelector: "Drawer",
          size: o,
          variant: n,
          transitionProps: Fi({ transition: d, duration: 200 }, a),
          classNames: q0(Fi({}, r), { content: f(u.content, r == null ? void 0 : r.content), inner: f(u.inner, r == null ? void 0 : r.inner) }),
        },
        s
      )
    )
  );
}
var h$ = Object.defineProperty,
  Xl = Object.getOwnPropertySymbols,
  Z0 = Object.prototype.hasOwnProperty,
  eg = Object.prototype.propertyIsEnumerable,
  um = (e, t, r) => (t in e ? h$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  y$ = (e, t) => {
    for (var r in t || (t = {})) Z0.call(t, r) && um(e, r, t[r]);
    if (Xl) for (var r of Xl(t)) eg.call(t, r) && um(e, r, t[r]);
    return e;
  },
  v$ = (e, t) => {
    var r = {};
    for (var n in e) Z0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Xl) for (var n of Xl(e)) t.indexOf(n) < 0 && eg.call(e, n) && (r[n] = e[n]);
    return r;
  };
const g$ = { shadow: "xl" },
  tg = w.forwardRef((e, t) => {
    const r = re("ModalContent", g$, e),
      { children: n, scrollAreaComponent: o } = r,
      i = v$(r, ["children", "scrollAreaComponent"]),
      l = Q2(),
      a = o || l.scrollAreaComponent || K.NativeScrollArea;
    return C.createElement(K.Content, y$({ ref: t, radius: 0 }, i), C.createElement(a, { style: { height: "100vh" } }, n));
  });
var w$ = Object.defineProperty,
  _$ = Object.defineProperties,
  S$ = Object.getOwnPropertyDescriptors,
  Yl = Object.getOwnPropertySymbols,
  rg = Object.prototype.hasOwnProperty,
  ng = Object.prototype.propertyIsEnumerable,
  cm = (e, t, r) => (t in e ? w$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Bi = (e, t) => {
    for (var r in t || (t = {})) rg.call(t, r) && cm(e, r, t[r]);
    if (Yl) for (var r of Yl(t)) ng.call(t, r) && cm(e, r, t[r]);
    return e;
  },
  x$ = (e, t) => _$(e, S$(t)),
  P$ = (e, t) => {
    var r = {};
    for (var n in e) rg.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Yl) for (var n of Yl(e)) t.indexOf(n) < 0 && ng.call(e, n) && (r[n] = e[n]);
    return r;
  };
const O$ = x$(Bi({}, Vo), { withOverlay: !0, withCloseButton: !0 });
function Kt(e) {
  const t = re("Drawer", O$, e),
    { title: r, withOverlay: n, overlayProps: o, withCloseButton: i, closeButtonProps: l, children: a } = t,
    s = P$(t, ["title", "withOverlay", "overlayProps", "withCloseButton", "closeButtonProps", "children"]),
    u = !!r || i;
  return C.createElement(
    J0,
    Bi({}, s),
    n && C.createElement(K.Overlay, Bi({}, o)),
    C.createElement(
      tg,
      null,
      u && C.createElement(K.Header, null, r && C.createElement(K.Title, null, r), i && C.createElement(K.CloseButton, Bi({}, l))),
      C.createElement(K.Body, null, a)
    )
  );
}
Kt.Root = J0;
Kt.CloseButton = K.CloseButton;
Kt.Overlay = K.Overlay;
Kt.Content = tg;
Kt.Header = K.Header;
Kt.Title = K.Title;
Kt.Body = K.Body;
Kt.NativeScrollArea = K.NativeScrollArea;
function E$(e) {
  return w.Children.toArray(e).filter(Boolean);
}
const C$ = { left: "flex-start", center: "center", right: "flex-end", apart: "space-between" };
var $$ = he((e, { spacing: t, position: r, noWrap: n, grow: o, align: i, count: l }) => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: i || "center",
    flexWrap: n ? "nowrap" : "wrap",
    justifyContent: C$[r],
    gap: G({ size: t, sizes: e.spacing }),
    "& > *": {
      boxSizing: "border-box",
      maxWidth: o ? `calc(${100 / l}% - (${N(G({ size: t, sizes: e.spacing }))} - ${G({ size: t, sizes: e.spacing })} / ${l}))` : void 0,
      flexGrow: o ? 1 : 0,
    },
  },
}));
const k$ = $$;
var b$ = Object.defineProperty,
  ql = Object.getOwnPropertySymbols,
  og = Object.prototype.hasOwnProperty,
  ig = Object.prototype.propertyIsEnumerable,
  fm = (e, t, r) => (t in e ? b$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  R$ = (e, t) => {
    for (var r in t || (t = {})) og.call(t, r) && fm(e, r, t[r]);
    if (ql) for (var r of ql(t)) ig.call(t, r) && fm(e, r, t[r]);
    return e;
  },
  N$ = (e, t) => {
    var r = {};
    for (var n in e) og.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ql) for (var n of ql(e)) t.indexOf(n) < 0 && ig.call(e, n) && (r[n] = e[n]);
    return r;
  };
const T$ = { position: "left", spacing: "md" },
  lg = w.forwardRef((e, t) => {
    const r = re("Group", T$, e),
      { className: n, position: o, align: i, children: l, noWrap: a, grow: s, spacing: u, unstyled: f, variant: c } = r,
      d = N$(r, ["className", "position", "align", "children", "noWrap", "grow", "spacing", "unstyled", "variant"]),
      p = E$(l),
      { classes: y, cx: v } = k$({ align: i, grow: s, noWrap: a, spacing: u, position: o, count: p.length }, { unstyled: f, name: "Group", variant: c });
    return C.createElement(ze, R$({ className: v(y.root, n), ref: t }, d), p);
  });
lg.displayName = "@mantine/core/Group";
const [j$, z$] = Bc("Modal component was not found in tree"),
  I$ = { xs: N(320), sm: N(380), md: N(440), lg: N(620), xl: N(780) };
var L$ = he((e, { yOffset: t, xOffset: r, centered: n, fullScreen: o }, { size: i }) => ({
  content: {
    flex: o ? "0 0 100%" : `0 0 ${G({ size: i, sizes: I$ })}`,
    maxWidth: "100%",
    maxHeight: o ? void 0 : `calc(100vh - (${N(t)} * 2))`,
    height: o ? "100vh" : void 0,
    borderRadius: o ? 0 : void 0,
    overflowY: "auto",
  },
  inner: {
    paddingTop: o ? 0 : t,
    paddingBottom: o ? 0 : t,
    paddingLeft: o ? 0 : r,
    paddingRight: o ? 0 : r,
    display: "flex",
    justifyContent: "center",
    alignItems: n ? "center" : "flex-start",
  },
}));
const M$ = L$;
var A$ = Object.defineProperty,
  D$ = Object.defineProperties,
  F$ = Object.getOwnPropertyDescriptors,
  Jl = Object.getOwnPropertySymbols,
  ag = Object.prototype.hasOwnProperty,
  sg = Object.prototype.propertyIsEnumerable,
  dm = (e, t, r) => (t in e ? A$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Iu = (e, t) => {
    for (var r in t || (t = {})) ag.call(t, r) && dm(e, r, t[r]);
    if (Jl) for (var r of Jl(t)) sg.call(t, r) && dm(e, r, t[r]);
    return e;
  },
  ug = (e, t) => D$(e, F$(t)),
  B$ = (e, t) => {
    var r = {};
    for (var n in e) ag.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Jl) for (var n of Jl(e)) t.indexOf(n) < 0 && sg.call(e, n) && (r[n] = e[n]);
    return r;
  };
const V$ = ug(Iu({}, Vo), { yOffset: "5vh", xOffset: "5vw" });
function cg(e) {
  const t = re("ModalRoot", V$, e),
    { classNames: r, variant: n, size: o, yOffset: i, xOffset: l, scrollAreaComponent: a, radius: s, centered: u, fullScreen: f } = t,
    c = B$(t, ["classNames", "variant", "size", "yOffset", "xOffset", "scrollAreaComponent", "radius", "centered", "fullScreen"]),
    { classes: d, cx: p } = M$({ yOffset: i, xOffset: l, centered: u, fullScreen: f }, { name: "Modal", variant: n, size: o });
  return C.createElement(
    j$,
    { value: { yOffset: i, scrollAreaComponent: a, radius: s } },
    C.createElement(
      K,
      Iu(
        {
          __staticSelector: "Modal",
          size: o,
          variant: n,
          classNames: ug(Iu({}, r), { content: p(d.content, r == null ? void 0 : r.content), inner: p(d.inner, r == null ? void 0 : r.inner) }),
        },
        c
      )
    )
  );
}
var U$ = Object.defineProperty,
  Zl = Object.getOwnPropertySymbols,
  fg = Object.prototype.hasOwnProperty,
  dg = Object.prototype.propertyIsEnumerable,
  pm = (e, t, r) => (t in e ? U$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  H$ = (e, t) => {
    for (var r in t || (t = {})) fg.call(t, r) && pm(e, r, t[r]);
    if (Zl) for (var r of Zl(t)) dg.call(t, r) && pm(e, r, t[r]);
    return e;
  },
  W$ = (e, t) => {
    var r = {};
    for (var n in e) fg.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Zl) for (var n of Zl(e)) t.indexOf(n) < 0 && dg.call(e, n) && (r[n] = e[n]);
    return r;
  };
const G$ = { shadow: "xl" },
  pg = w.forwardRef((e, t) => {
    const r = re("ModalContent", G$, e),
      { children: n, scrollAreaComponent: o } = r,
      i = W$(r, ["children", "scrollAreaComponent"]),
      l = z$(),
      a = o || l.scrollAreaComponent || K.NativeScrollArea;
    return C.createElement(K.Content, H$({ ref: t, radius: l.radius }, i), C.createElement(a, { style: { maxHeight: `calc(100vh - (${N(l.yOffset)} * 2))` } }, n));
  });
var Q$ = Object.defineProperty,
  K$ = Object.defineProperties,
  X$ = Object.getOwnPropertyDescriptors,
  ea = Object.getOwnPropertySymbols,
  mg = Object.prototype.hasOwnProperty,
  hg = Object.prototype.propertyIsEnumerable,
  mm = (e, t, r) => (t in e ? Q$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Vi = (e, t) => {
    for (var r in t || (t = {})) mg.call(t, r) && mm(e, r, t[r]);
    if (ea) for (var r of ea(t)) hg.call(t, r) && mm(e, r, t[r]);
    return e;
  },
  Y$ = (e, t) => K$(e, X$(t)),
  q$ = (e, t) => {
    var r = {};
    for (var n in e) mg.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ea) for (var n of ea(e)) t.indexOf(n) < 0 && hg.call(e, n) && (r[n] = e[n]);
    return r;
  };
const J$ = Y$(Vi({}, Vo), { transitionProps: { duration: 200, transition: "pop" }, withOverlay: !0, withCloseButton: !0 });
function Nt(e) {
  const t = re("Modal", J$, e),
    { title: r, withOverlay: n, overlayProps: o, withCloseButton: i, closeButtonProps: l, children: a } = t,
    s = q$(t, ["title", "withOverlay", "overlayProps", "withCloseButton", "closeButtonProps", "children"]),
    u = !!r || i;
  return C.createElement(
    cg,
    Vi({}, s),
    n && C.createElement(K.Overlay, Vi({}, o)),
    C.createElement(
      pg,
      null,
      u && C.createElement(K.Header, null, r && C.createElement(K.Title, null, r), i && C.createElement(K.CloseButton, Vi({}, l))),
      C.createElement(K.Body, null, a)
    )
  );
}
Nt.Root = cg;
Nt.CloseButton = K.CloseButton;
Nt.Overlay = K.Overlay;
Nt.Content = pg;
Nt.Header = K.Header;
Nt.Title = K.Title;
Nt.Body = K.Body;
Nt.NativeScrollArea = K.NativeScrollArea;
const yg = w.createContext(!1),
  Z$ = yg.Provider,
  ek = () => w.useContext(yg);
function vg({ children: e, openDelay: t = 0, closeDelay: r = 0 }) {
  return C.createElement(Z$, { value: !0 }, C.createElement(IE, { delay: { open: t, close: r } }, e));
}
vg.displayName = "@mantine/core/TooltipGroup";
var tk = Object.defineProperty,
  rk = Object.defineProperties,
  nk = Object.getOwnPropertyDescriptors,
  hm = Object.getOwnPropertySymbols,
  ok = Object.prototype.hasOwnProperty,
  ik = Object.prototype.propertyIsEnumerable,
  ym = (e, t, r) => (t in e ? tk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  vm = (e, t) => {
    for (var r in t || (t = {})) ok.call(t, r) && ym(e, r, t[r]);
    if (hm) for (var r of hm(t)) ik.call(t, r) && ym(e, r, t[r]);
    return e;
  },
  lk = (e, t) => rk(e, nk(t));
function ak(e, t) {
  if (!t) return { backgroundColor: e.colorScheme === "dark" ? e.colors.gray[2] : e.colors.gray[9], color: e.colorScheme === "dark" ? e.black : e.white };
  const r = e.fn.variant({ variant: "filled", color: t, primaryFallback: !1 });
  return { backgroundColor: r.background, color: r.color };
}
var sk = he((e, { color: t, radius: r, width: n, multiline: o }) => ({
  tooltip: lk(vm(vm({}, e.fn.fontStyles()), ak(e, t)), {
    lineHeight: e.lineHeight,
    fontSize: e.fontSizes.sm,
    borderRadius: e.fn.radius(r),
    padding: `calc(${e.spacing.xs} / 2) ${e.spacing.xs}`,
    position: "absolute",
    whiteSpace: o ? "unset" : "nowrap",
    pointerEvents: "none",
    width: n,
  }),
  arrow: { backgroundColor: "inherit", border: 0, zIndex: 1 },
}));
const gg = sk,
  wg = { children: "Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported" };
function uk({ offset: e, position: t }) {
  const [r, n] = w.useState(!1),
    o = w.useRef(),
    { x: i, y: l, reference: a, floating: s, refs: u, update: f, placement: c } = y0({ placement: t, middleware: [r0({ crossAxis: !0, padding: 5, rootBoundary: "document" })] }),
    d = c.includes("right") ? e : t.includes("left") ? e * -1 : 0,
    p = c.includes("bottom") ? e : t.includes("top") ? e * -1 : 0,
    y = w.useCallback(
      ({ clientX: v, clientY: S }) => {
        a({
          getBoundingClientRect() {
            return { width: 0, height: 0, x: v, y: S, left: v + d, top: S + p, right: v, bottom: S };
          },
        });
      },
      [a]
    );
  return (
    w.useEffect(() => {
      if (u.floating.current) {
        const v = o.current;
        v.addEventListener("mousemove", y);
        const S = Ft(u.floating.current);
        return (
          S.forEach((m) => {
            m.addEventListener("scroll", f);
          }),
          () => {
            v.removeEventListener("mousemove", y),
              S.forEach((m) => {
                m.removeEventListener("scroll", f);
              });
          }
        );
      }
    }, [a, u.floating.current, f, y, r]),
    { handleMouseMove: y, x: i, y: l, opened: r, setOpened: n, boundaryRef: o, floating: s }
  );
}
var ck = Object.defineProperty,
  fk = Object.defineProperties,
  dk = Object.getOwnPropertyDescriptors,
  ta = Object.getOwnPropertySymbols,
  _g = Object.prototype.hasOwnProperty,
  Sg = Object.prototype.propertyIsEnumerable,
  gm = (e, t, r) => (t in e ? ck(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  yi = (e, t) => {
    for (var r in t || (t = {})) _g.call(t, r) && gm(e, r, t[r]);
    if (ta) for (var r of ta(t)) Sg.call(t, r) && gm(e, r, t[r]);
    return e;
  },
  vi = (e, t) => fk(e, dk(t)),
  pk = (e, t) => {
    var r = {};
    for (var n in e) _g.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ta) for (var n of ta(e)) t.indexOf(n) < 0 && Sg.call(e, n) && (r[n] = e[n]);
    return r;
  };
const mk = { refProp: "ref", withinPortal: !0, offset: 10, position: "right", zIndex: ba("popover") };
function xg(e) {
  var t;
  const r = re("TooltipFloating", mk, e),
    {
      children: n,
      refProp: o,
      withinPortal: i,
      portalProps: l,
      style: a,
      className: s,
      classNames: u,
      styles: f,
      unstyled: c,
      radius: d,
      color: p,
      label: y,
      offset: v,
      position: S,
      multiline: m,
      width: h,
      zIndex: g,
      disabled: _,
      variant: x,
    } = r,
    O = pk(r, [
      "children",
      "refProp",
      "withinPortal",
      "portalProps",
      "style",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "radius",
      "color",
      "label",
      "offset",
      "position",
      "multiline",
      "width",
      "zIndex",
      "disabled",
      "variant",
    ]),
    { handleMouseMove: P, x: E, y: T, opened: k, boundaryRef: z, floating: D, setOpened: F } = uk({ offset: v, position: S }),
    { classes: j, cx: B } = gg({ radius: d, color: p, multiline: m, width: h }, { name: "TooltipFloating", classNames: u, styles: f, unstyled: c, variant: x });
  if (!Vc(n)) throw new Error(wg.children);
  const V = Kc(z, n.ref),
    q = (I) => {
      var M, W;
      (W = (M = n.props).onMouseEnter) == null || W.call(M, I), P(I), F(!0);
    },
    b = (I) => {
      var M, W;
      (W = (M = n.props).onMouseLeave) == null || W.call(M, I), F(!1);
    };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      Ra,
      vi(yi({}, l), { withinPortal: i }),
      C.createElement(
        ze,
        vi(yi({}, O), {
          ref: D,
          className: B(j.tooltip, s),
          style: vi(yi({}, a), { zIndex: g, display: !_ && k ? "block" : "none", top: T ?? "", left: (t = Math.round(E)) != null ? t : "" }),
        }),
        y
      )
    ),
    w.cloneElement(n, vi(yi({}, n.props), { [o]: V, onMouseEnter: q, onMouseLeave: b }))
  );
}
xg.displayName = "@mantine/core/TooltipFloating";
function hk(e) {
  const [t, r] = w.useState(!1),
    o = typeof e.opened == "boolean" ? e.opened : t,
    i = ek(),
    l = Pv(),
    { delay: a, currentId: s, setCurrentId: u } = m0(),
    f = w.useCallback(
      (E) => {
        r(E), E && u(l);
      },
      [u, l]
    ),
    {
      x: c,
      y: d,
      reference: p,
      floating: y,
      context: v,
      refs: S,
      update: m,
      placement: h,
      middlewareData: { arrow: { x: g, y: _ } = {} },
    } = y0({
      placement: e.position,
      open: o,
      onOpenChange: f,
      middleware: [mE(e.offset), r0({ padding: 8 }), dE(), SE({ element: e.arrowRef, padding: e.arrowOffset }), ...(e.inline ? [pE()] : [])],
    }),
    { getReferenceProps: x, getFloatingProps: O } = QE([
      zE(v, { enabled: e.events.hover, delay: i ? a : { open: e.openDelay, close: e.closeDelay }, mouseOnly: !e.events.touch }),
      WE(v, { enabled: e.events.focus, keyboardOnly: !0 }),
      GE(v, { role: "tooltip" }),
      HE(v, { enabled: typeof e.opened === void 0 }),
      LE(v, { id: l }),
    ]);
  return (
    KE({ opened: o, position: e.position, positionDependencies: e.positionDependencies, floating: { refs: S, update: m } }),
    No(() => {
      var E;
      (E = e.onPositionChange) == null || E.call(e, h);
    }, [h]),
    { x: c, y: d, arrowX: g, arrowY: _, reference: p, floating: y, getFloatingProps: O, getReferenceProps: x, isGroupPhase: o && s && s !== l, opened: o, placement: h }
  );
}
var yk = Object.defineProperty,
  vk = Object.defineProperties,
  gk = Object.getOwnPropertyDescriptors,
  ra = Object.getOwnPropertySymbols,
  Pg = Object.prototype.hasOwnProperty,
  Og = Object.prototype.propertyIsEnumerable,
  wm = (e, t, r) => (t in e ? yk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  xr = (e, t) => {
    for (var r in t || (t = {})) Pg.call(t, r) && wm(e, r, t[r]);
    if (ra) for (var r of ra(t)) Og.call(t, r) && wm(e, r, t[r]);
    return e;
  },
  Os = (e, t) => vk(e, gk(t)),
  wk = (e, t) => {
    var r = {};
    for (var n in e) Pg.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ra) for (var n of ra(e)) t.indexOf(n) < 0 && Og.call(e, n) && (r[n] = e[n]);
    return r;
  };
const _k = {
    position: "top",
    refProp: "ref",
    withinPortal: !1,
    inline: !1,
    arrowSize: 4,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    offset: 5,
    transitionProps: { duration: 100, transition: "fade" },
    width: "auto",
    events: { hover: !0, focus: !1, touch: !1 },
    zIndex: ba("popover"),
    positionDependencies: [],
  },
  za = w.forwardRef((e, t) => {
    var r;
    const n = w.useRef(null),
      o = re("Tooltip", _k, e),
      {
        children: i,
        position: l,
        refProp: a,
        label: s,
        openDelay: u,
        closeDelay: f,
        onPositionChange: c,
        opened: d,
        withinPortal: p,
        portalProps: y,
        radius: v,
        color: S,
        classNames: m,
        styles: h,
        unstyled: g,
        style: _,
        className: x,
        withArrow: O,
        arrowSize: P,
        arrowOffset: E,
        arrowRadius: T,
        arrowPosition: k,
        offset: z,
        transitionProps: D,
        multiline: F,
        width: j,
        events: B,
        zIndex: V,
        disabled: q,
        positionDependencies: b,
        onClick: I,
        onMouseEnter: M,
        onMouseLeave: W,
        inline: Z,
        variant: Ge,
        keepMounted: Qe,
      } = o,
      Tt = wk(o, [
        "children",
        "position",
        "refProp",
        "label",
        "openDelay",
        "closeDelay",
        "onPositionChange",
        "opened",
        "withinPortal",
        "portalProps",
        "radius",
        "color",
        "classNames",
        "styles",
        "unstyled",
        "style",
        "className",
        "withArrow",
        "arrowSize",
        "arrowOffset",
        "arrowRadius",
        "arrowPosition",
        "offset",
        "transitionProps",
        "multiline",
        "width",
        "events",
        "zIndex",
        "disabled",
        "positionDependencies",
        "onClick",
        "onMouseEnter",
        "onMouseLeave",
        "inline",
        "variant",
        "keepMounted",
      ]),
      { classes: De, cx: vt, theme: U } = gg({ radius: v, color: S, width: j, multiline: F }, { name: "Tooltip", classNames: m, styles: h, unstyled: g, variant: Ge }),
      H = hk({
        position: p2(U.dir, l),
        closeDelay: f,
        openDelay: u,
        onPositionChange: c,
        opened: d,
        events: B,
        arrowRef: n,
        arrowOffset: E,
        offset: z + (O ? P / 2 : 0),
        positionDependencies: [...b, i],
        inline: Z,
      });
    if (!Vc(i)) throw new Error(wg.children);
    const oe = Kc(H.reference, i.ref, t);
    return C.createElement(
      C.Fragment,
      null,
      C.createElement(
        Ra,
        Os(xr({}, y), { withinPortal: p }),
        C.createElement(
          ja,
          Os(xr({ keepMounted: Qe, mounted: !q && H.opened }, D), { transition: D.transition || "fade", duration: H.isGroupPhase ? 10 : (r = D.duration) != null ? r : 100 }),
          (ae) => {
            var de, gt;
            return C.createElement(
              ze,
              xr(
                xr({}, Tt),
                H.getFloatingProps({
                  ref: H.floating,
                  className: De.tooltip,
                  style: Os(xr(xr({}, _), ae), { zIndex: V, top: (de = H.y) != null ? de : 0, left: (gt = H.x) != null ? gt : 0 }),
                })
              ),
              s,
              C.createElement(_0, {
                ref: n,
                arrowX: H.arrowX,
                arrowY: H.arrowY,
                visible: O,
                position: H.placement,
                arrowSize: P,
                arrowOffset: E,
                arrowRadius: T,
                arrowPosition: k,
                className: De.arrow,
              })
            );
          }
        )
      ),
      w.cloneElement(
        i,
        H.getReferenceProps(
          xr(
            {
              onClick: I,
              onMouseEnter: M,
              onMouseLeave: W,
              onMouseMove: e.onMouseMove,
              onPointerDown: e.onPointerDown,
              onPointerEnter: e.onPointerEnter,
              [a]: oe,
              className: vt(x, i.props.className),
            },
            i.props
          )
        )
      )
    );
  });
za.Group = vg;
za.Floating = xg;
za.displayName = "@mantine/core/Tooltip";
const Sk = za;
function xk(e, t) {
  if (t.length === 0) return t;
  const r = "maxWidth" in t[0] ? "maxWidth" : "minWidth",
    n = [...t].sort((o, i) => Lr(G({ size: i[r], sizes: e.breakpoints })) - Lr(G({ size: o[r], sizes: e.breakpoints })));
  return r === "minWidth" ? n.reverse() : n;
}
var Pk = Object.defineProperty,
  _m = Object.getOwnPropertySymbols,
  Ok = Object.prototype.hasOwnProperty,
  Ek = Object.prototype.propertyIsEnumerable,
  Sm = (e, t, r) => (t in e ? Pk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Ck = (e, t) => {
    for (var r in t || (t = {})) Ok.call(t, r) && Sm(e, r, t[r]);
    if (_m) for (var r of _m(t)) Ek.call(t, r) && Sm(e, r, t[r]);
    return e;
  },
  $k = he((e, { spacing: t, breakpoints: r, cols: n, verticalSpacing: o }) => {
    const i = o != null,
      l = xk(e, r).reduce((a, s) => {
        var u, f;
        const c = "maxWidth" in s ? "max-width" : "min-width",
          d = G({ size: c === "max-width" ? s.maxWidth : s.minWidth, sizes: e.breakpoints, units: "em" }),
          p = Lr(d) - (c === "max-width" ? 1 : 0);
        return (
          (a[`@media (${c}: ${Ea(p)})`] = {
            gridTemplateColumns: `repeat(${s.cols}, minmax(0, 1fr))`,
            gap: `${G({ size: (u = s.verticalSpacing) != null ? u : i ? o : t, sizes: e.spacing })} ${G({ size: (f = s.spacing) != null ? f : t, sizes: e.spacing })}`,
          }),
          a
        );
      }, {});
    return {
      root: Ck(
        {
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
          gap: `${G({ size: i ? o : t, sizes: e.spacing })} ${G({ size: t, sizes: e.spacing })}`,
        },
        l
      ),
    };
  });
const kk = $k;
var bk = Object.defineProperty,
  na = Object.getOwnPropertySymbols,
  Eg = Object.prototype.hasOwnProperty,
  Cg = Object.prototype.propertyIsEnumerable,
  xm = (e, t, r) => (t in e ? bk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Rk = (e, t) => {
    for (var r in t || (t = {})) Eg.call(t, r) && xm(e, r, t[r]);
    if (na) for (var r of na(t)) Cg.call(t, r) && xm(e, r, t[r]);
    return e;
  },
  Nk = (e, t) => {
    var r = {};
    for (var n in e) Eg.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && na) for (var n of na(e)) t.indexOf(n) < 0 && Cg.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Tk = { breakpoints: [], cols: 1, spacing: "md" },
  Jn = w.forwardRef((e, t) => {
    const r = re("SimpleGrid", Tk, e),
      { className: n, breakpoints: o, cols: i, spacing: l, verticalSpacing: a, children: s, unstyled: u, variant: f } = r,
      c = Nk(r, ["className", "breakpoints", "cols", "spacing", "verticalSpacing", "children", "unstyled", "variant"]),
      { classes: d, cx: p } = kk({ breakpoints: o, cols: i, spacing: l, verticalSpacing: a }, { name: "SimpleGrid", unstyled: u, variant: f });
    return C.createElement(ze, Rk({ className: p(d.root, n), ref: t }, c), s);
  });
Jn.displayName = "@mantine/core/SimpleGrid";
var jk = Object.defineProperty,
  zk = Object.defineProperties,
  Ik = Object.getOwnPropertyDescriptors,
  Pm = Object.getOwnPropertySymbols,
  Lk = Object.prototype.hasOwnProperty,
  Mk = Object.prototype.propertyIsEnumerable,
  Om = (e, t, r) => (t in e ? jk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Ak = (e, t) => {
    for (var r in t || (t = {})) Lk.call(t, r) && Om(e, r, t[r]);
    if (Pm) for (var r of Pm(t)) Mk.call(t, r) && Om(e, r, t[r]);
    return e;
  },
  Dk = (e, t) => zk(e, Ik(t)),
  Fk = he((e, { captionSide: t, horizontalSpacing: r, verticalSpacing: n, fontSize: o, withBorder: i, withColumnBorders: l }) => {
    const a = `${N(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]}`;
    return {
      root: Dk(Ak({}, e.fn.fontStyles()), {
        width: "100%",
        borderCollapse: "collapse",
        captionSide: t,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        lineHeight: e.lineHeight,
        border: i ? a : void 0,
        "& caption": {
          marginTop: t === "top" ? 0 : e.spacing.xs,
          marginBottom: t === "bottom" ? 0 : e.spacing.xs,
          fontSize: e.fontSizes.sm,
          color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
        },
        "& thead tr th, & tfoot tr th, & tbody tr th": {
          textAlign: "left",
          fontWeight: "bold",
          color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[7],
          fontSize: G({ size: o, sizes: e.fontSizes }),
          padding: `${G({ size: n, sizes: e.spacing })} ${G({ size: r, sizes: e.spacing })}`,
        },
        "& thead tr th": { borderBottom: a },
        "& tfoot tr th, & tbody tr th": { borderTop: a },
        "& tbody tr td": { padding: `${G({ size: n, sizes: e.spacing })} ${G({ size: r, sizes: e.spacing })}`, borderTop: a, fontSize: G({ size: o, sizes: e.fontSizes }) },
        "& tbody tr:first-of-type td, & tbody tr:first-of-type th": { borderTop: "none" },
        "& thead th, & tbody td": { borderRight: l ? a : "none", "&:last-of-type": { borderRight: "none", borderLeft: l ? a : "none" } },
        "& tbody tr th": { borderRight: l ? a : "none" },
        "&[data-striped] tbody tr:nth-of-type(odd)": { backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0] },
        "&[data-hover] tbody tr": e.fn.hover({ backgroundColor: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1] }),
      }),
    };
  });
const Bk = Fk;
var Vk = Object.defineProperty,
  Uk = Object.defineProperties,
  Hk = Object.getOwnPropertyDescriptors,
  oa = Object.getOwnPropertySymbols,
  $g = Object.prototype.hasOwnProperty,
  kg = Object.prototype.propertyIsEnumerable,
  Em = (e, t, r) => (t in e ? Vk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Wk = (e, t) => {
    for (var r in t || (t = {})) $g.call(t, r) && Em(e, r, t[r]);
    if (oa) for (var r of oa(t)) kg.call(t, r) && Em(e, r, t[r]);
    return e;
  },
  Gk = (e, t) => Uk(e, Hk(t)),
  Qk = (e, t) => {
    var r = {};
    for (var n in e) $g.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && oa) for (var n of oa(e)) t.indexOf(n) < 0 && kg.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Kk = { striped: !1, highlightOnHover: !1, captionSide: "top", horizontalSpacing: "xs", fontSize: "sm", verticalSpacing: 7, withBorder: !1, withColumnBorders: !1 },
  bg = w.forwardRef((e, t) => {
    const r = re("Table", Kk, e),
      {
        className: n,
        children: o,
        striped: i,
        highlightOnHover: l,
        captionSide: a,
        horizontalSpacing: s,
        verticalSpacing: u,
        fontSize: f,
        unstyled: c,
        withBorder: d,
        withColumnBorders: p,
        variant: y,
      } = r,
      v = Qk(r, [
        "className",
        "children",
        "striped",
        "highlightOnHover",
        "captionSide",
        "horizontalSpacing",
        "verticalSpacing",
        "fontSize",
        "unstyled",
        "withBorder",
        "withColumnBorders",
        "variant",
      ]),
      { classes: S, cx: m } = Bk(
        { captionSide: a, verticalSpacing: u, horizontalSpacing: s, fontSize: f, withBorder: d, withColumnBorders: p },
        { unstyled: c, name: "Table", variant: y }
      );
    return C.createElement(ze, Gk(Wk({}, v), { component: "table", ref: t, className: m(S.root, n), "data-striped": i || void 0, "data-hover": l || void 0 }), o);
  });
bg.displayName = "@mantine/core/Table";
var Lu = {},
  Xk = {
    get exports() {
      return Lu;
    },
    set exports(e) {
      Lu = e;
    },
  };
(function (e) {
  (function (t, r, n) {
    function o(s) {
      var u = this,
        f = a();
      (u.next = function () {
        var c = 2091639 * u.s0 + u.c * 23283064365386963e-26;
        return (u.s0 = u.s1), (u.s1 = u.s2), (u.s2 = c - (u.c = c | 0));
      }),
        (u.c = 1),
        (u.s0 = f(" ")),
        (u.s1 = f(" ")),
        (u.s2 = f(" ")),
        (u.s0 -= f(s)),
        u.s0 < 0 && (u.s0 += 1),
        (u.s1 -= f(s)),
        u.s1 < 0 && (u.s1 += 1),
        (u.s2 -= f(s)),
        u.s2 < 0 && (u.s2 += 1),
        (f = null);
    }
    function i(s, u) {
      return (u.c = s.c), (u.s0 = s.s0), (u.s1 = s.s1), (u.s2 = s.s2), u;
    }
    function l(s, u) {
      var f = new o(s),
        c = u && u.state,
        d = f.next;
      return (
        (d.int32 = function () {
          return (f.next() * 4294967296) | 0;
        }),
        (d.double = function () {
          return d() + ((d() * 2097152) | 0) * 11102230246251565e-32;
        }),
        (d.quick = d),
        c &&
          (typeof c == "object" && i(c, f),
          (d.state = function () {
            return i(f, {});
          })),
        d
      );
    }
    function a() {
      var s = 4022871197,
        u = function (f) {
          f = String(f);
          for (var c = 0; c < f.length; c++) {
            s += f.charCodeAt(c);
            var d = 0.02519603282416938 * s;
            (s = d >>> 0), (d -= s), (d *= s), (s = d >>> 0), (d -= s), (s += d * 4294967296);
          }
          return (s >>> 0) * 23283064365386963e-26;
        };
      return u;
    }
    r && r.exports
      ? (r.exports = l)
      : n && n.amd
      ? n(function () {
          return l;
        })
      : (this.alea = l);
  })(Ar, e, !1);
})(Xk);
var Mu = {},
  Yk = {
    get exports() {
      return Mu;
    },
    set exports(e) {
      Mu = e;
    },
  };
(function (e) {
  (function (t, r, n) {
    function o(a) {
      var s = this,
        u = "";
      (s.x = 0),
        (s.y = 0),
        (s.z = 0),
        (s.w = 0),
        (s.next = function () {
          var c = s.x ^ (s.x << 11);
          return (s.x = s.y), (s.y = s.z), (s.z = s.w), (s.w ^= (s.w >>> 19) ^ c ^ (c >>> 8));
        }),
        a === (a | 0) ? (s.x = a) : (u += a);
      for (var f = 0; f < u.length + 64; f++) (s.x ^= u.charCodeAt(f) | 0), s.next();
    }
    function i(a, s) {
      return (s.x = a.x), (s.y = a.y), (s.z = a.z), (s.w = a.w), s;
    }
    function l(a, s) {
      var u = new o(a),
        f = s && s.state,
        c = function () {
          return (u.next() >>> 0) / 4294967296;
        };
      return (
        (c.double = function () {
          do
            var d = u.next() >>> 11,
              p = (u.next() >>> 0) / 4294967296,
              y = (d + p) / (1 << 21);
          while (y === 0);
          return y;
        }),
        (c.int32 = u.next),
        (c.quick = c),
        f &&
          (typeof f == "object" && i(f, u),
          (c.state = function () {
            return i(u, {});
          })),
        c
      );
    }
    r && r.exports
      ? (r.exports = l)
      : n && n.amd
      ? n(function () {
          return l;
        })
      : (this.xor128 = l);
  })(Ar, e, !1);
})(Yk);
var Au = {},
  qk = {
    get exports() {
      return Au;
    },
    set exports(e) {
      Au = e;
    },
  };
(function (e) {
  (function (t, r, n) {
    function o(a) {
      var s = this,
        u = "";
      (s.next = function () {
        var c = s.x ^ (s.x >>> 2);
        return (s.x = s.y), (s.y = s.z), (s.z = s.w), (s.w = s.v), ((s.d = (s.d + 362437) | 0) + (s.v = s.v ^ (s.v << 4) ^ (c ^ (c << 1)))) | 0;
      }),
        (s.x = 0),
        (s.y = 0),
        (s.z = 0),
        (s.w = 0),
        (s.v = 0),
        a === (a | 0) ? (s.x = a) : (u += a);
      for (var f = 0; f < u.length + 64; f++) (s.x ^= u.charCodeAt(f) | 0), f == u.length && (s.d = (s.x << 10) ^ (s.x >>> 4)), s.next();
    }
    function i(a, s) {
      return (s.x = a.x), (s.y = a.y), (s.z = a.z), (s.w = a.w), (s.v = a.v), (s.d = a.d), s;
    }
    function l(a, s) {
      var u = new o(a),
        f = s && s.state,
        c = function () {
          return (u.next() >>> 0) / 4294967296;
        };
      return (
        (c.double = function () {
          do
            var d = u.next() >>> 11,
              p = (u.next() >>> 0) / 4294967296,
              y = (d + p) / (1 << 21);
          while (y === 0);
          return y;
        }),
        (c.int32 = u.next),
        (c.quick = c),
        f &&
          (typeof f == "object" && i(f, u),
          (c.state = function () {
            return i(u, {});
          })),
        c
      );
    }
    r && r.exports
      ? (r.exports = l)
      : n && n.amd
      ? n(function () {
          return l;
        })
      : (this.xorwow = l);
  })(Ar, e, !1);
})(qk);
var Du = {},
  Jk = {
    get exports() {
      return Du;
    },
    set exports(e) {
      Du = e;
    },
  };
(function (e) {
  (function (t, r, n) {
    function o(a) {
      var s = this;
      s.next = function () {
        var f = s.x,
          c = s.i,
          d,
          p;
        return (
          (d = f[c]),
          (d ^= d >>> 7),
          (p = d ^ (d << 24)),
          (d = f[(c + 1) & 7]),
          (p ^= d ^ (d >>> 10)),
          (d = f[(c + 3) & 7]),
          (p ^= d ^ (d >>> 3)),
          (d = f[(c + 4) & 7]),
          (p ^= d ^ (d << 7)),
          (d = f[(c + 7) & 7]),
          (d = d ^ (d << 13)),
          (p ^= d ^ (d << 9)),
          (f[c] = p),
          (s.i = (c + 1) & 7),
          p
        );
      };
      function u(f, c) {
        var d,
          p = [];
        if (c === (c | 0)) p[0] = c;
        else for (c = "" + c, d = 0; d < c.length; ++d) p[d & 7] = (p[d & 7] << 15) ^ ((c.charCodeAt(d) + p[(d + 1) & 7]) << 13);
        for (; p.length < 8; ) p.push(0);
        for (d = 0; d < 8 && p[d] === 0; ++d);
        for (d == 8 ? (p[7] = -1) : p[d], f.x = p, f.i = 0, d = 256; d > 0; --d) f.next();
      }
      u(s, a);
    }
    function i(a, s) {
      return (s.x = a.x.slice()), (s.i = a.i), s;
    }
    function l(a, s) {
      a == null && (a = +new Date());
      var u = new o(a),
        f = s && s.state,
        c = function () {
          return (u.next() >>> 0) / 4294967296;
        };
      return (
        (c.double = function () {
          do
            var d = u.next() >>> 11,
              p = (u.next() >>> 0) / 4294967296,
              y = (d + p) / (1 << 21);
          while (y === 0);
          return y;
        }),
        (c.int32 = u.next),
        (c.quick = c),
        f &&
          (f.x && i(f, u),
          (c.state = function () {
            return i(u, {});
          })),
        c
      );
    }
    r && r.exports
      ? (r.exports = l)
      : n && n.amd
      ? n(function () {
          return l;
        })
      : (this.xorshift7 = l);
  })(Ar, e, !1);
})(Jk);
var Fu = {},
  Zk = {
    get exports() {
      return Fu;
    },
    set exports(e) {
      Fu = e;
    },
  };
(function (e) {
  (function (t, r, n) {
    function o(a) {
      var s = this;
      s.next = function () {
        var f = s.w,
          c = s.X,
          d = s.i,
          p,
          y;
        return (
          (s.w = f = (f + 1640531527) | 0),
          (y = c[(d + 34) & 127]),
          (p = c[(d = (d + 1) & 127)]),
          (y ^= y << 13),
          (p ^= p << 17),
          (y ^= y >>> 15),
          (p ^= p >>> 12),
          (y = c[d] = y ^ p),
          (s.i = d),
          (y + (f ^ (f >>> 16))) | 0
        );
      };
      function u(f, c) {
        var d,
          p,
          y,
          v,
          S,
          m = [],
          h = 128;
        for (c === (c | 0) ? ((p = c), (c = null)) : ((c = c + "\0"), (p = 0), (h = Math.max(h, c.length))), y = 0, v = -32; v < h; ++v)
          c && (p ^= c.charCodeAt((v + 32) % c.length)),
            v === 0 && (S = p),
            (p ^= p << 10),
            (p ^= p >>> 15),
            (p ^= p << 4),
            (p ^= p >>> 13),
            v >= 0 && ((S = (S + 1640531527) | 0), (d = m[v & 127] ^= p + S), (y = d == 0 ? y + 1 : 0));
        for (y >= 128 && (m[((c && c.length) || 0) & 127] = -1), y = 127, v = 4 * 128; v > 0; --v)
          (p = m[(y + 34) & 127]), (d = m[(y = (y + 1) & 127)]), (p ^= p << 13), (d ^= d << 17), (p ^= p >>> 15), (d ^= d >>> 12), (m[y] = p ^ d);
        (f.w = S), (f.X = m), (f.i = y);
      }
      u(s, a);
    }
    function i(a, s) {
      return (s.i = a.i), (s.w = a.w), (s.X = a.X.slice()), s;
    }
    function l(a, s) {
      a == null && (a = +new Date());
      var u = new o(a),
        f = s && s.state,
        c = function () {
          return (u.next() >>> 0) / 4294967296;
        };
      return (
        (c.double = function () {
          do
            var d = u.next() >>> 11,
              p = (u.next() >>> 0) / 4294967296,
              y = (d + p) / (1 << 21);
          while (y === 0);
          return y;
        }),
        (c.int32 = u.next),
        (c.quick = c),
        f &&
          (f.X && i(f, u),
          (c.state = function () {
            return i(u, {});
          })),
        c
      );
    }
    r && r.exports
      ? (r.exports = l)
      : n && n.amd
      ? n(function () {
          return l;
        })
      : (this.xor4096 = l);
  })(Ar, e, !1);
})(Zk);
var Bu = {},
  eb = {
    get exports() {
      return Bu;
    },
    set exports(e) {
      Bu = e;
    },
  };
(function (e) {
  (function (t, r, n) {
    function o(a) {
      var s = this,
        u = "";
      (s.next = function () {
        var c = s.b,
          d = s.c,
          p = s.d,
          y = s.a;
        return (
          (c = (c << 25) ^ (c >>> 7) ^ d),
          (d = (d - p) | 0),
          (p = (p << 24) ^ (p >>> 8) ^ y),
          (y = (y - c) | 0),
          (s.b = c = (c << 20) ^ (c >>> 12) ^ d),
          (s.c = d = (d - p) | 0),
          (s.d = (p << 16) ^ (d >>> 16) ^ y),
          (s.a = (y - c) | 0)
        );
      }),
        (s.a = 0),
        (s.b = 0),
        (s.c = -1640531527),
        (s.d = 1367130551),
        a === Math.floor(a) ? ((s.a = (a / 4294967296) | 0), (s.b = a | 0)) : (u += a);
      for (var f = 0; f < u.length + 20; f++) (s.b ^= u.charCodeAt(f) | 0), s.next();
    }
    function i(a, s) {
      return (s.a = a.a), (s.b = a.b), (s.c = a.c), (s.d = a.d), s;
    }
    function l(a, s) {
      var u = new o(a),
        f = s && s.state,
        c = function () {
          return (u.next() >>> 0) / 4294967296;
        };
      return (
        (c.double = function () {
          do
            var d = u.next() >>> 11,
              p = (u.next() >>> 0) / 4294967296,
              y = (d + p) / (1 << 21);
          while (y === 0);
          return y;
        }),
        (c.int32 = u.next),
        (c.quick = c),
        f &&
          (typeof f == "object" && i(f, u),
          (c.state = function () {
            return i(u, {});
          })),
        c
      );
    }
    r && r.exports
      ? (r.exports = l)
      : n && n.amd
      ? n(function () {
          return l;
        })
      : (this.tychei = l);
  })(Ar, e, !1);
})(eb);
var Vu = {},
  tb = {
    get exports() {
      return Vu;
    },
    set exports(e) {
      Vu = e;
    },
  };
const rb = {},
  nb = Object.freeze(Object.defineProperty({ __proto__: null, default: rb }, Symbol.toStringTag, { value: "Module" })),
  ob = o1(nb);
(function (e) {
  (function (t, r, n) {
    var o = 256,
      i = 6,
      l = 52,
      a = "random",
      s = n.pow(o, i),
      u = n.pow(2, l),
      f = u * 2,
      c = o - 1,
      d;
    function p(_, x, O) {
      var P = [];
      x = x == !0 ? { entropy: !0 } : x || {};
      var E = m(S(x.entropy ? [_, g(r)] : _ ?? h(), 3), P),
        T = new y(P),
        k = function () {
          for (var z = T.g(i), D = s, F = 0; z < u; ) (z = (z + F) * o), (D *= o), (F = T.g(1));
          for (; z >= f; ) (z /= 2), (D /= 2), (F >>>= 1);
          return (z + F) / D;
        };
      return (
        (k.int32 = function () {
          return T.g(4) | 0;
        }),
        (k.quick = function () {
          return T.g(4) / 4294967296;
        }),
        (k.double = k),
        m(g(T.S), r),
        (
          x.pass ||
          O ||
          function (z, D, F, j) {
            return (
              j &&
                (j.S && v(j, T),
                (z.state = function () {
                  return v(T, {});
                })),
              F ? ((n[a] = z), D) : z
            );
          }
        )(k, E, "global" in x ? x.global : this == n, x.state)
      );
    }
    function y(_) {
      var x,
        O = _.length,
        P = this,
        E = 0,
        T = (P.i = P.j = 0),
        k = (P.S = []);
      for (O || (_ = [O++]); E < o; ) k[E] = E++;
      for (E = 0; E < o; E++) (k[E] = k[(T = c & (T + _[E % O] + (x = k[E])))]), (k[T] = x);
      (P.g = function (z) {
        for (var D, F = 0, j = P.i, B = P.j, V = P.S; z--; ) (D = V[(j = c & (j + 1))]), (F = F * o + V[c & ((V[j] = V[(B = c & (B + D))]) + (V[B] = D))]);
        return (P.i = j), (P.j = B), F;
      })(o);
    }
    function v(_, x) {
      return (x.i = _.i), (x.j = _.j), (x.S = _.S.slice()), x;
    }
    function S(_, x) {
      var O = [],
        P = typeof _,
        E;
      if (x && P == "object")
        for (E in _)
          try {
            O.push(S(_[E], x - 1));
          } catch {}
      return O.length ? O : P == "string" ? _ : _ + "\0";
    }
    function m(_, x) {
      for (var O = _ + "", P, E = 0; E < O.length; ) x[c & E] = c & ((P ^= x[c & E] * 19) + O.charCodeAt(E++));
      return g(x);
    }
    function h() {
      try {
        var _;
        return d && (_ = d.randomBytes) ? (_ = _(o)) : ((_ = new Uint8Array(o)), (t.crypto || t.msCrypto).getRandomValues(_)), g(_);
      } catch {
        var x = t.navigator,
          O = x && x.plugins;
        return [+new Date(), t, O, t.screen, g(r)];
      }
    }
    function g(_) {
      return String.fromCharCode.apply(0, _);
    }
    if ((m(n.random(), r), e.exports)) {
      e.exports = p;
      try {
        d = ob;
      } catch {}
    } else n["seed" + a] = p;
  })(typeof self < "u" ? self : Ar, [], Math);
})(tb);
var ib = Lu,
  lb = Mu,
  ab = Au,
  sb = Du,
  ub = Fu,
  cb = Bu,
  Br = Vu;
Br.alea = ib;
Br.xor128 = lb;
Br.xorwow = ab;
Br.xorshift7 = sb;
Br.xor4096 = ub;
Br.tychei = cb;
var fb = Br,
  Rg = {},
  rf = {};
Object.defineProperty(rf, "__esModule", { value: !0 });
rf.confetti = wb;
var db = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];
function pb(e, t, r, n, o) {
  return Array.from({ length: t }).map(function (i, l) {
    var a = document.createElement("div"),
      s = r[l % r.length];
    return (
      (a.style["background-color"] = s),
      (a.style.width = n),
      (a.style.height = o),
      (a.style.position = "absolute"),
      (a.style.willChange = "transform, opacity"),
      (a.style.visibility = "hidden"),
      e.appendChild(a),
      a
    );
  });
}
function mb(e, t, r, n) {
  var o = e * (Math.PI / 180),
    i = t * (Math.PI / 180);
  return {
    x: 0,
    y: 0,
    z: 0,
    wobble: n() * 10,
    wobbleSpeed: 0.1 + n() * 0.1,
    velocity: r * 0.5 + n() * r,
    angle2D: -o + (0.5 * i - n() * i),
    angle3D: -(Math.PI / 4) + n() * (Math.PI / 2),
    tiltAngle: n() * Math.PI,
    tiltAngleSpeed: 0.1 + n() * 0.3,
  };
}
function hb(e, t, r, n) {
  (e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity),
    (e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity),
    (e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity),
    (e.physics.wobble += e.physics.wobbleSpeed),
    n ? (e.physics.velocity *= n) : (e.physics.velocity -= e.physics.velocity * r),
    (e.physics.y += 3),
    (e.physics.tiltAngle += e.physics.tiltAngleSpeed);
  var o = e.physics,
    i = o.x,
    l = o.y,
    a = o.z,
    s = o.tiltAngle,
    u = o.wobble,
    f = i + 10 * Math.cos(u),
    c = l + 10 * Math.sin(u),
    d = "translate3d(" + f + "px, " + c + "px, " + a + "px) rotate3d(1, 1, 1, " + s + "rad)";
  (e.element.style.visibility = "visible"), (e.element.style.transform = d), (e.element.style.opacity = 1 - t);
}
function yb(e, t, r, n, o, i) {
  var l = void 0;
  return new Promise(function (a) {
    function s(u) {
      l || (l = u);
      var f = u - l,
        c = l === u ? 0 : (u - l) / o;
      t.slice(0, Math.ceil(f / i)).forEach(function (d) {
        hb(d, c, r, n);
      }),
        u - l < o
          ? requestAnimationFrame(s)
          : (t.forEach(function (d) {
              if (d.element.parentNode === e) return e.removeChild(d.element);
            }),
            a());
    }
    requestAnimationFrame(s);
  });
}
var vb = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  width: "10px",
  height: "10px",
  perspective: "",
  colors: db,
  duration: 3e3,
  stagger: 0,
  dragFriction: 0.1,
  random: Math.random,
};
function gb(e) {
  return !e.stagger && e.delay && (e.stagger = e.delay), e;
}
function wb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = Object.assign({}, vb, gb(t)),
    n = r.elementCount,
    o = r.colors,
    i = r.width,
    l = r.height,
    a = r.perspective,
    s = r.angle,
    u = r.spread,
    f = r.startVelocity,
    c = r.decay,
    d = r.dragFriction,
    p = r.duration,
    y = r.stagger,
    v = r.random;
  e.style.perspective = a;
  var S = pb(e, n, o, i, l),
    m = S.map(function (h) {
      return { element: h, physics: mb(s, u, f, v) };
    });
  return yb(e, m, d, c, p, y);
}
Object.defineProperty(Rg, "__esModule", { value: !0 });
var _b = (function () {
    function e(t, r) {
      for (var n = 0; n < r.length; n++) {
        var o = r[n];
        (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  })(),
  Ng = w,
  Sb = Pb(Ng),
  xb = rf;
function Pb(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ob(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Eb(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Cb(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var $b = { position: "relative" },
  kb = (function (e) {
    Cb(t, e);
    function t(r) {
      Ob(this, t);
      var n = Eb(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
      return (n.setRef = n.setRef.bind(n)), n;
    }
    return (
      _b(t, [
        {
          key: "componentDidUpdate",
          value: function (n) {
            !n.active && this.props.active && (0, xb.confetti)(this.container, this.props.config);
          },
        },
        {
          key: "setRef",
          value: function (n) {
            this.container = n;
          },
        },
        {
          key: "render",
          value: function () {
            return Sb.default.createElement("div", { className: this.props.className, style: $b, ref: this.setRef });
          },
        },
      ]),
      t
    );
  })(Ng.Component),
  bb = (Rg.default = kb);
function Tg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Rb } = Object.prototype,
  { getPrototypeOf: nf } = Object,
  Ia = ((e) => (t) => {
    const r = Rb.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Xt = (e) => ((e = e.toLowerCase()), (t) => Ia(t) === e),
  La = (e) => (t) => typeof t === e,
  { isArray: Nn } = Array,
  jo = La("undefined");
function Nb(e) {
  return e !== null && !jo(e) && e.constructor !== null && !jo(e.constructor) && Gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const jg = Xt("ArrayBuffer");
function Tb(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && jg(e.buffer)), t;
}
const jb = La("string"),
  Gt = La("function"),
  zg = La("number"),
  of = (e) => e !== null && typeof e == "object",
  zb = (e) => e === !0 || e === !1,
  Ui = (e) => {
    if (Ia(e) !== "object") return !1;
    const t = nf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  },
  Ib = Xt("Date"),
  Lb = Xt("File"),
  Mb = Xt("Blob"),
  Ab = Xt("FileList"),
  Db = (e) => of(e) && Gt(e.pipe),
  Fb = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Gt(e.append) && ((t = Ia(e)) === "formdata" || (t === "object" && Gt(e.toString) && e.toString() === "[object FormData]"))))
    );
  },
  Bb = Xt("URLSearchParams"),
  Vb = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function Uo(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let n, o;
  if ((typeof e != "object" && (e = [e]), Nn(e))) for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let a;
    for (n = 0; n < l; n++) (a = i[n]), t.call(null, e[a], a, e);
  }
}
function Ig(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    o;
  for (; n-- > 0; ) if (((o = r[n]), t === o.toLowerCase())) return o;
  return null;
}
const Lg = (() => (typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global))(),
  Mg = (e) => !jo(e) && e !== Lg;
function Uu() {
  const { caseless: e } = (Mg(this) && this) || {},
    t = {},
    r = (n, o) => {
      const i = (e && Ig(t, o)) || o;
      Ui(t[i]) && Ui(n) ? (t[i] = Uu(t[i], n)) : Ui(n) ? (t[i] = Uu({}, n)) : Nn(n) ? (t[i] = n.slice()) : (t[i] = n);
    };
  for (let n = 0, o = arguments.length; n < o; n++) arguments[n] && Uo(arguments[n], r);
  return t;
}
const Ub = (e, t, r, { allOwnKeys: n } = {}) => (
    Uo(
      t,
      (o, i) => {
        r && Gt(o) ? (e[i] = Tg(o, r)) : (e[i] = o);
      },
      { allOwnKeys: n }
    ),
    e
  ),
  Hb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Wb = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)), (e.prototype.constructor = e), Object.defineProperty(e, "super", { value: t.prototype }), r && Object.assign(e.prototype, r);
  },
  Gb = (e, t, r, n) => {
    let o, i, l;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; ) (l = o[i]), (!n || n(l, e, t)) && !a[l] && ((t[l] = e[l]), (a[l] = !0));
      e = r !== !1 && nf(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  Qb = (e, t, r) => {
    (e = String(e)), (r === void 0 || r > e.length) && (r = e.length), (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  Kb = (e) => {
    if (!e) return null;
    if (Nn(e)) return e;
    let t = e.length;
    if (!zg(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  Xb = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && nf(Uint8Array)),
  Yb = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = n.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  qb = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  Jb = Xt("HTMLFormElement"),
  Zb = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, o) {
      return n.toUpperCase() + o;
    }),
  Cm = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  eR = Xt("RegExp"),
  Ag = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    Uo(r, (o, i) => {
      t(o, i, e) !== !1 && (n[i] = o);
    }),
      Object.defineProperties(e, n);
  },
  tR = (e) => {
    Ag(e, (t, r) => {
      if (Gt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
      const n = e[r];
      if (Gt(n)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  rR = (e, t) => {
    const r = {},
      n = (o) => {
        o.forEach((i) => {
          r[i] = !0;
        });
      };
    return Nn(e) ? n(e) : n(String(e).split(t)), r;
  },
  nR = () => {},
  oR = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Es = "abcdefghijklmnopqrstuvwxyz",
  $m = "0123456789",
  Dg = { DIGIT: $m, ALPHA: Es, ALPHA_DIGIT: Es + Es.toUpperCase() + $m },
  iR = (e = 16, t = Dg.ALPHA_DIGIT) => {
    let r = "";
    const { length: n } = t;
    for (; e--; ) r += t[(Math.random() * n) | 0];
    return r;
  };
function lR(e) {
  return !!(e && Gt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const aR = (e) => {
    const t = new Array(10),
      r = (n, o) => {
        if (of(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[o] = n;
            const i = Nn(n) ? [] : {};
            return (
              Uo(n, (l, a) => {
                const s = r(l, o + 1);
                !jo(s) && (i[a] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return n;
      };
    return r(e, 0);
  },
  $ = {
    isArray: Nn,
    isArrayBuffer: jg,
    isBuffer: Nb,
    isFormData: Fb,
    isArrayBufferView: Tb,
    isString: jb,
    isNumber: zg,
    isBoolean: zb,
    isObject: of,
    isPlainObject: Ui,
    isUndefined: jo,
    isDate: Ib,
    isFile: Lb,
    isBlob: Mb,
    isRegExp: eR,
    isFunction: Gt,
    isStream: Db,
    isURLSearchParams: Bb,
    isTypedArray: Xb,
    isFileList: Ab,
    forEach: Uo,
    merge: Uu,
    extend: Ub,
    trim: Vb,
    stripBOM: Hb,
    inherits: Wb,
    toFlatObject: Gb,
    kindOf: Ia,
    kindOfTest: Xt,
    endsWith: Qb,
    toArray: Kb,
    forEachEntry: Yb,
    matchAll: qb,
    isHTMLForm: Jb,
    hasOwnProperty: Cm,
    hasOwnProp: Cm,
    reduceDescriptors: Ag,
    freezeMethods: tR,
    toObjectSet: rR,
    toCamelCase: Zb,
    noop: nR,
    toFiniteNumber: oR,
    findKey: Ig,
    global: Lg,
    isContextDefined: Mg,
    ALPHABET: Dg,
    generateString: iR,
    isSpecCompliantForm: lR,
    toJSONObject: aR,
  };
function X(e, t, r, n, o) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    o && (this.response = o);
}
$.inherits(X, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: $.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Fg = X.prototype,
  Bg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Bg[e] = { value: e };
});
Object.defineProperties(X, Bg);
Object.defineProperty(Fg, "isAxiosError", { value: !0 });
X.from = (e, t, r, n, o, i) => {
  const l = Object.create(Fg);
  return (
    $.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    X.call(l, e.message, t, r, n, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const sR = null;
function Hu(e) {
  return $.isPlainObject(e) || $.isArray(e);
}
function Vg(e) {
  return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function km(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Vg(o)), !r && i ? "[" + o + "]" : o;
        })
        .join(r ? "." : "")
    : t;
}
function uR(e) {
  return $.isArray(e) && !e.some(Hu);
}
const cR = $.toFlatObject($, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ma(e, t, r) {
  if (!$.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = $.toFlatObject(r, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, S) {
      return !$.isUndefined(S[v]);
    }));
  const n = r.metaTokens,
    o = r.visitor || f,
    i = r.dots,
    l = r.indexes,
    s = (r.Blob || (typeof Blob < "u" && Blob)) && $.isSpecCompliantForm(t);
  if (!$.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if ($.isDate(y)) return y.toISOString();
    if (!s && $.isBlob(y)) throw new X("Blob is not supported. Use a Buffer instead.");
    return $.isArrayBuffer(y) || $.isTypedArray(y) ? (s && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y)) : y;
  }
  function f(y, v, S) {
    let m = y;
    if (y && !S && typeof y == "object") {
      if ($.endsWith(v, "{}")) (v = n ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if (($.isArray(y) && uR(y)) || (($.isFileList(y) || $.endsWith(v, "[]")) && (m = $.toArray(y))))
        return (
          (v = Vg(v)),
          m.forEach(function (g, _) {
            !($.isUndefined(g) || g === null) && t.append(l === !0 ? km([v], _, i) : l === null ? v : v + "[]", u(g));
          }),
          !1
        );
    }
    return Hu(y) ? !0 : (t.append(km(S, v, i), u(y)), !1);
  }
  const c = [],
    d = Object.assign(cR, { defaultVisitor: f, convertValue: u, isVisitable: Hu });
  function p(y, v) {
    if (!$.isUndefined(y)) {
      if (c.indexOf(y) !== -1) throw Error("Circular reference detected in " + v.join("."));
      c.push(y),
        $.forEach(y, function (m, h) {
          (!($.isUndefined(m) || m === null) && o.call(t, m, $.isString(h) ? h.trim() : h, v, d)) === !0 && p(m, v ? v.concat(h) : [h]);
        }),
        c.pop();
    }
  }
  if (!$.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function bm(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function lf(e, t) {
  (this._pairs = []), e && Ma(e, this, t);
}
const Ug = lf.prototype;
Ug.append = function (t, r) {
  this._pairs.push([t, r]);
};
Ug.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, bm);
      }
    : bm;
  return this._pairs
    .map(function (o) {
      return r(o[0]) + "=" + r(o[1]);
    }, "")
    .join("&");
};
function fR(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Hg(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || fR,
    o = r && r.serialize;
  let i;
  if ((o ? (i = o(t, r)) : (i = $.isURLSearchParams(t) ? t.toString() : new lf(t, r).toString(n)), i)) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class dR {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return this.handlers.push({ fulfilled: t, rejected: r, synchronous: n ? n.synchronous : !1, runWhen: n ? n.runWhen : null }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    $.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const Rm = dR,
  Wg = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  pR = typeof URLSearchParams < "u" ? URLSearchParams : lf,
  mR = typeof FormData < "u" ? FormData : null,
  hR = typeof Blob < "u" ? Blob : null,
  yR = (() => {
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
  })(),
  vR = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
  Ct = {
    isBrowser: !0,
    classes: { URLSearchParams: pR, FormData: mR, Blob: hR },
    isStandardBrowserEnv: yR,
    isStandardBrowserWebWorkerEnv: vR,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function gR(e, t) {
  return Ma(
    e,
    new Ct.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, o, i) {
          return Ct.isNode && $.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function wR(e) {
  return $.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function _R(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++) (i = r[n]), (t[i] = e[i]);
  return t;
}
function Gg(e) {
  function t(r, n, o, i) {
    let l = r[i++];
    const a = Number.isFinite(+l),
      s = i >= r.length;
    return (
      (l = !l && $.isArray(o) ? o.length : l),
      s ? ($.hasOwnProp(o, l) ? (o[l] = [o[l], n]) : (o[l] = n), !a) : ((!o[l] || !$.isObject(o[l])) && (o[l] = []), t(r, n, o[l], i) && $.isArray(o[l]) && (o[l] = _R(o[l])), !a)
    );
  }
  if ($.isFormData(e) && $.isFunction(e.entries)) {
    const r = {};
    return (
      $.forEachEntry(e, (n, o) => {
        t(wR(n), o, r, 0);
      }),
      r
    );
  }
  return null;
}
const SR = { "Content-Type": void 0 };
function xR(e, t, r) {
  if ($.isString(e))
    try {
      return (t || JSON.parse)(e), $.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
const Aa = {
  transitional: Wg,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || "",
        o = n.indexOf("application/json") > -1,
        i = $.isObject(t);
      if ((i && $.isHTMLForm(t) && (t = new FormData(t)), $.isFormData(t))) return o && o ? JSON.stringify(Gg(t)) : t;
      if ($.isArrayBuffer(t) || $.isBuffer(t) || $.isStream(t) || $.isFile(t) || $.isBlob(t)) return t;
      if ($.isArrayBufferView(t)) return t.buffer;
      if ($.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (i) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1) return gR(t, this.formSerializer).toString();
        if ((a = $.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return Ma(a ? { "files[]": t } : t, s && new s(), this.formSerializer);
        }
      }
      return i || o ? (r.setContentType("application/json", !1), xR(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || Aa.transitional,
        n = r && r.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && $.isString(t) && ((n && !this.responseType) || o)) {
        const l = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (l) throw a.name === "SyntaxError" ? X.from(a, X.ERR_BAD_RESPONSE, this, null, this.response) : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ct.classes.FormData, Blob: Ct.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
$.forEach(["delete", "get", "head"], function (t) {
  Aa.headers[t] = {};
});
$.forEach(["post", "put", "patch"], function (t) {
  Aa.headers[t] = $.merge(SR);
});
const af = Aa,
  PR = $.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  OR = (e) => {
    const t = {};
    let r, n, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (o = l.indexOf(":")),
              (r = l.substring(0, o).trim().toLowerCase()),
              (n = l.substring(o + 1).trim()),
              !(!r || (t[r] && PR[r])) && (r === "set-cookie" ? (t[r] ? t[r].push(n) : (t[r] = [n])) : (t[r] = t[r] ? t[r] + ", " + n : n));
          }),
      t
    );
  },
  Nm = Symbol("internals");
function Qn(e) {
  return e && String(e).trim().toLowerCase();
}
function Hi(e) {
  return e === !1 || e == null ? e : $.isArray(e) ? e.map(Hi) : String(e);
}
function ER(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const CR = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Cs(e, t, r, n, o) {
  if ($.isFunction(n)) return n.call(this, t, r);
  if ((o && (t = r), !!$.isString(t))) {
    if ($.isString(n)) return t.indexOf(n) !== -1;
    if ($.isRegExp(n)) return n.test(t);
  }
}
function $R(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function kR(e, t) {
  const r = $.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (o, i, l) {
        return this[n].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class Da {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(a, s, u) {
      const f = Qn(s);
      if (!f) throw new Error("header name must be a non-empty string");
      const c = $.findKey(o, f);
      (!c || o[c] === void 0 || u === !0 || (u === void 0 && o[c] !== !1)) && (o[c || s] = Hi(a));
    }
    const l = (a, s) => $.forEach(a, (u, f) => i(u, f, s));
    return $.isPlainObject(t) || t instanceof this.constructor ? l(t, r) : $.isString(t) && (t = t.trim()) && !CR(t) ? l(OR(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (((t = Qn(t)), t)) {
      const n = $.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r) return o;
        if (r === !0) return ER(o);
        if ($.isFunction(r)) return r.call(this, o, n);
        if ($.isRegExp(r)) return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Qn(t)), t)) {
      const n = $.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Cs(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(l) {
      if (((l = Qn(l)), l)) {
        const a = $.findKey(n, l);
        a && (!r || Cs(n, n[a], a, r)) && (delete n[a], (o = !0));
      }
    }
    return $.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length,
      o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Cs(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const r = this,
      n = {};
    return (
      $.forEach(this, (o, i) => {
        const l = $.findKey(n, i);
        if (l) {
          (r[l] = Hi(o)), delete r[i];
          return;
        }
        const a = t ? $R(i) : String(i).trim();
        a !== i && delete r[i], (r[a] = Hi(o)), (n[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      $.forEach(this, (n, o) => {
        n != null && n !== !1 && (r[o] = t && $.isArray(n) ? n.join(", ") : n);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Nm] = this[Nm] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const a = Qn(l);
      n[a] || (kR(o, l), (n[a] = !0));
    }
    return $.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Da.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
$.freezeMethods(Da.prototype);
$.freezeMethods(Da);
const Bt = Da;
function $s(e, t) {
  const r = this || af,
    n = t || r,
    o = Bt.from(n.headers);
  let i = n.data;
  return (
    $.forEach(e, function (a) {
      i = a.call(r, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Qg(e) {
  return !!(e && e.__CANCEL__);
}
function Ho(e, t, r) {
  X.call(this, e ?? "canceled", X.ERR_CANCELED, t, r), (this.name = "CanceledError");
}
$.inherits(Ho, X, { __CANCEL__: !0 });
function bR(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(new X("Request failed with status code " + r.status, [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
}
const RR = Ct.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (r, n, o, i, l, a) {
          const s = [];
          s.push(r + "=" + encodeURIComponent(n)),
            $.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()),
            $.isString(i) && s.push("path=" + i),
            $.isString(l) && s.push("domain=" + l),
            a === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read: function (r) {
          const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove: function (r) {
          this.write(r, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function NR(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function TR(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Kg(e, t) {
  return e && !NR(t) ? TR(e, t) : t;
}
const jR = Ct.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement("a");
      let n;
      function o(i) {
        let l = i;
        return (
          t && (r.setAttribute("href", l), (l = r.href)),
          r.setAttribute("href", l),
          {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
          }
        );
      }
      return (
        (n = o(window.location.href)),
        function (l) {
          const a = $.isString(l) ? o(l) : l;
          return a.protocol === n.protocol && a.host === n.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function zR(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function IR(e, t) {
  e = e || 10;
  const r = new Array(e),
    n = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        f = n[i];
      l || (l = u), (r[o] = s), (n[o] = u);
      let c = i,
        d = 0;
      for (; c !== o; ) (d += r[c++]), (c = c % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - l < t)) return;
      const p = f && u - f;
      return p ? Math.round((d * 1e3) / p) : void 0;
    }
  );
}
function Tm(e, t) {
  let r = 0;
  const n = IR(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      a = i - r,
      s = n(a),
      u = i <= l;
    r = i;
    const f = { loaded: i, total: l, progress: l ? i / l : void 0, bytes: a, rate: s || void 0, estimated: s && l && u ? (l - i) / s : void 0, event: o };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const LR = typeof XMLHttpRequest < "u",
  MR =
    LR &&
    function (e) {
      return new Promise(function (r, n) {
        let o = e.data;
        const i = Bt.from(e.headers).normalize(),
          l = e.responseType;
        let a;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
        }
        $.isFormData(o) && (Ct.isStandardBrowserEnv || Ct.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
        let u = new XMLHttpRequest();
        if (e.auth) {
          const p = e.auth.username || "",
            y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          i.set("Authorization", "Basic " + btoa(p + ":" + y));
        }
        const f = Kg(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), Hg(f, e.params, e.paramsSerializer), !0), (u.timeout = e.timeout);
        function c() {
          if (!u) return;
          const p = Bt.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
            v = { data: !l || l === "text" || l === "json" ? u.responseText : u.response, status: u.status, statusText: u.statusText, headers: p, config: e, request: u };
          bR(
            function (m) {
              r(m), s();
            },
            function (m) {
              n(m), s();
            },
            v
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = c)
            : (u.onreadystatechange = function () {
                !u || u.readyState !== 4 || (u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0)) || setTimeout(c);
              }),
          (u.onabort = function () {
            u && (n(new X("Request aborted", X.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            n(new X("Network Error", X.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let y = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const v = e.transitional || Wg;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage), n(new X(y, v.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED, e, u)), (u = null);
          }),
          Ct.isStandardBrowserEnv)
        ) {
          const p = (e.withCredentials || jR(f)) && e.xsrfCookieName && RR.read(e.xsrfCookieName);
          p && i.set(e.xsrfHeaderName, p);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            $.forEach(i.toJSON(), function (y, v) {
              u.setRequestHeader(v, y);
            }),
          $.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
          l && l !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Tm(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Tm(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (p) => {
              u && (n(!p || p.type ? new Ho(null, e, u) : p), u.abort(), (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const d = zR(f);
        if (d && Ct.protocols.indexOf(d) === -1) {
          n(new X("Unsupported protocol " + d + ":", X.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  Wi = { http: sR, xhr: MR };
$.forEach(Wi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const AR = {
  getAdapter: (e) => {
    e = $.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && ((r = e[o]), !(n = $.isString(r) ? Wi[r.toLowerCase()] : r)); o++);
    if (!n)
      throw n === !1
        ? new X(`Adapter ${r} is not supported by the environment`, "ERR_NOT_SUPPORT")
        : new Error($.hasOwnProp(Wi, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`);
    if (!$.isFunction(n)) throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Wi,
};
function ks(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Ho(null, e);
}
function jm(e) {
  return (
    ks(e),
    (e.headers = Bt.from(e.headers)),
    (e.data = $s.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    AR.getAdapter(e.adapter || af.adapter)(e).then(
      function (n) {
        return ks(e), (n.data = $s.call(e, e.transformResponse, n)), (n.headers = Bt.from(n.headers)), n;
      },
      function (n) {
        return (
          Qg(n) || (ks(e), n && n.response && ((n.response.data = $s.call(e, e.transformResponse, n.response)), (n.response.headers = Bt.from(n.response.headers)))),
          Promise.reject(n)
        );
      }
    )
  );
}
const zm = (e) => (e instanceof Bt ? e.toJSON() : e);
function On(e, t) {
  t = t || {};
  const r = {};
  function n(u, f, c) {
    return $.isPlainObject(u) && $.isPlainObject(f) ? $.merge.call({ caseless: c }, u, f) : $.isPlainObject(f) ? $.merge({}, f) : $.isArray(f) ? f.slice() : f;
  }
  function o(u, f, c) {
    if ($.isUndefined(f)) {
      if (!$.isUndefined(u)) return n(void 0, u, c);
    } else return n(u, f, c);
  }
  function i(u, f) {
    if (!$.isUndefined(f)) return n(void 0, f);
  }
  function l(u, f) {
    if ($.isUndefined(f)) {
      if (!$.isUndefined(u)) return n(void 0, u);
    } else return n(void 0, f);
  }
  function a(u, f, c) {
    if (c in t) return n(u, f);
    if (c in e) return n(void 0, u);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: a,
    headers: (u, f) => o(zm(u), zm(f), !0),
  };
  return (
    $.forEach(Object.keys(e).concat(Object.keys(t)), function (f) {
      const c = s[f] || o,
        d = c(e[f], t[f], f);
      ($.isUndefined(d) && c !== a) || (r[f] = d);
    }),
    r
  );
}
const Xg = "1.3.6",
  sf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  sf[e] = function (n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Im = {};
sf.transitional = function (t, r, n) {
  function o(i, l) {
    return "[Axios v" + Xg + "] Transitional option '" + i + "'" + l + (n ? ". " + n : "");
  }
  return (i, l, a) => {
    if (t === !1) throw new X(o(l, " has been removed" + (r ? " in " + r : "")), X.ERR_DEPRECATED);
    return r && !Im[l] && ((Im[l] = !0), console.warn(o(l, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(i, l, a) : !0;
  };
};
function DR(e, t, r) {
  if (typeof e != "object") throw new X("options must be an object", X.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o],
      l = t[i];
    if (l) {
      const a = e[i],
        s = a === void 0 || l(a, i, e);
      if (s !== !0) throw new X("option " + i + " must be " + s, X.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new X("Unknown option " + i, X.ERR_BAD_OPTION);
  }
}
const Wu = { assertOptions: DR, validators: sf },
  Jt = Wu.validators;
class ia {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new Rm(), response: new Rm() });
  }
  request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}), (r = On(this.defaults, r));
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 &&
      Wu.assertOptions(n, { silentJSONParsing: Jt.transitional(Jt.boolean), forcedJSONParsing: Jt.transitional(Jt.boolean), clarifyTimeoutError: Jt.transitional(Jt.boolean) }, !1),
      o != null && ($.isFunction(o) ? (r.paramsSerializer = { serialize: o }) : Wu.assertOptions(o, { encode: Jt.function, serialize: Jt.function }, !0)),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let l;
    (l = i && $.merge(i.common, i[r.method])),
      l &&
        $.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (y) => {
          delete i[y];
        }),
      (r.headers = Bt.concat(l, i));
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(r) === !1) || ((s = s && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let f,
      c = 0,
      d;
    if (!s) {
      const y = [jm.bind(this), void 0];
      for (y.unshift.apply(y, a), y.push.apply(y, u), d = y.length, f = Promise.resolve(r); c < d; ) f = f.then(y[c++], y[c++]);
      return f;
    }
    d = a.length;
    let p = r;
    for (c = 0; c < d; ) {
      const y = a[c++],
        v = a[c++];
      try {
        p = y(p);
      } catch (S) {
        v.call(this, S);
        break;
      }
    }
    try {
      f = jm.call(this, p);
    } catch (y) {
      return Promise.reject(y);
    }
    for (c = 0, d = u.length; c < d; ) f = f.then(u[c++], u[c++]);
    return f;
  }
  getUri(t) {
    t = On(this.defaults, t);
    const r = Kg(t.baseURL, t.url);
    return Hg(r, t.params, t.paramsSerializer);
  }
}
$.forEach(["delete", "get", "head", "options"], function (t) {
  ia.prototype[t] = function (r, n) {
    return this.request(On(n || {}, { method: t, url: r, data: (n || {}).data }));
  };
});
$.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (i, l, a) {
      return this.request(On(a || {}, { method: t, headers: n ? { "Content-Type": "multipart/form-data" } : {}, url: i, data: l }));
    };
  }
  (ia.prototype[t] = r()), (ia.prototype[t + "Form"] = r(!0));
});
const Gi = ia;
class uf {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; ) n._listeners[i](o);
      n._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((a) => {
          n.subscribe(a), (i = a);
        }).then(o);
        return (
          (l.cancel = function () {
            n.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, a) {
        n.reason || ((n.reason = new Ho(i, l, a)), r(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  static source() {
    let t;
    return {
      token: new uf(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const FR = uf;
function BR(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function VR(e) {
  return $.isObject(e) && e.isAxiosError === !0;
}
const Gu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Gu).forEach(([e, t]) => {
  Gu[t] = e;
});
const UR = Gu;
function Yg(e) {
  const t = new Gi(e),
    r = Tg(Gi.prototype.request, t);
  return (
    $.extend(r, Gi.prototype, t, { allOwnKeys: !0 }),
    $.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return Yg(On(e, o));
    }),
    r
  );
}
const Se = Yg(af);
Se.Axios = Gi;
Se.CanceledError = Ho;
Se.CancelToken = FR;
Se.isCancel = Qg;
Se.VERSION = Xg;
Se.toFormData = Ma;
Se.AxiosError = X;
Se.Cancel = Se.CanceledError;
Se.all = function (t) {
  return Promise.all(t);
};
Se.spread = BR;
Se.isAxiosError = VR;
Se.mergeConfig = On;
Se.AxiosHeaders = Bt;
Se.formToJSON = (e) => Gg($.isHTMLForm(e) ? new FormData(e) : e);
Se.HttpStatusCode = UR;
Se.default = Se;
const HR = Se;
var Ne = {},
  WR = {
    get exports() {
      return Ne;
    },
    set exports(e) {
      Ne = e;
    },
  },
  GR = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  QR = GR,
  KR = QR;
function qg() {}
function Jg() {}
Jg.resetWarningCache = qg;
var XR = function () {
  function e(n, o, i, l, a, s) {
    if (s !== KR) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Jg,
    resetWarningCache: qg,
  };
  return (r.PropTypes = r), r;
};
WR.exports = XR();
function cf(e) {
  const { color: t, i: r, j: n, startGuessing: o, letter: i, isClicked: l, isGameStarted: a } = e,
    s = () => {
      l || o(i, r, n);
    };
  return L.jsx(Rr, { color: a ? t : "dark", size: "xl", onMouseDown: a ? s : "", children: a ? L.jsx(L.Fragment, { children: i }) : L.jsx(L.Fragment, { children: "?" }) });
}
cf.propTypes = {
  color: Ne.string.isRequired,
  i: Ne.number.isRequired,
  j: Ne.number.isRequired,
  startGuessing: Ne.func.isRequired,
  letter: Ne.string.isRequired,
  isClicked: Ne.bool.isRequired,
  isGameStarted: Ne.bool.isRequired,
};
const YR = {
  angle: "213",
  spread: "360",
  startVelocity: "32",
  elementCount: "118",
  dragFriction: 0.12,
  duration: "1530",
  stagger: 3,
  width: "13px",
  height: "13px",
  perspective: "835px",
  colors: ["#f00", "#0f0", "#00f"],
};
function qR({ difficulty: e, openDict: t, setOpenDict: r }) {
  const o = Math.floor(Math.random() * 1e6),
    [i, l] = w.useState(o),
    [a, s] = w.useState(!1),
    [u, f] = w.useState([]),
    [c, d] = w.useState([]),
    [p, y] = w.useState([[]]),
    [v, S] = w.useState([[]]),
    [m, h] = w.useState(0),
    [g, _] = w.useState(null),
    [x, O] = w.useState(null),
    [P, E] = w.useState(180),
    [T, k] = w.useState(!1),
    [z, D] = w.useState(!0),
    { width: F } = gP(),
    j = F <= 800,
    [B, V] = w.useState(!1);
  w.useLayoutEffect(() => {
    q(i), b(!1);
  }, [i]),
    w.useLayoutEffect(() => {
      let U = null;
      return (
        T && P > 0
          ? (U = setInterval(() => {
              E((H) => H - 1);
            }, 1e3))
          : P === 0 && (clearInterval(U), k(!1)),
        () => clearInterval(U)
      );
    }, [T, P]);
  const q = (U) => {
      const H = fb(U),
        oe = "AAABCDEEEEFGHIIIIJKLMNOOOOPQRSTUUUUVWXYZ",
        ae = [];
      for (let de = 0; de < e; de++) {
        const gt = [];
        for (let df = 0; df < e; df++) {
          const t1 = oe.charAt(Math.floor(H() * oe.length));
          gt.push(t1);
        }
        ae.push(gt);
      }
      y(ae), b();
    },
    b = (U) => {
      const H = [];
      for (let oe = 0; oe < e; oe++) {
        const ae = [];
        for (let de = 0; de < e; de++) ae.push(U);
        H.push(ae);
      }
      S(H);
    },
    I = () => {
      k(!0), E(180), d([]), _(null), O(null), h(0), z || l(Math.floor(Math.random() * 1e6)), D(!1);
    },
    M = (U, H, oe) => {
      console.log(Z(g, x, H, oe));
      let ae = !1;
      (g === null || Z(g, x, H, oe)) && ((ae = !0), _(H), O(oe)), ae && (s(!0), W(H, oe), f((de) => [...de, U]));
    },
    W = (U, H) => {
      const oe = [...v];
      (oe[U][H] = !0), S(oe);
    },
    Z = (U, H, oe, ae) => {
      const de = Math.abs(U - oe),
        gt = Math.abs(H - ae);
      return de <= 1 && gt <= 1 && !(de === 0 && gt === 0);
    },
    Ge = (U) => {
      const H = Math.floor(U / 60),
        oe = U % 60,
        ae = H < 10 ? `0${H}` : H,
        de = oe < 10 ? `0${oe}` : oe;
      return `${ae}:${de}`;
    },
    Qe = (U) => {
      if (U.length === 1) return 0;
      if (U.length === 2) return 1;
      if (U.length === 3 || U.length === 4) return 2;
      if (U.length === 5) return 3;
      if (U.length === 6) return 4;
      if (U.length > 6) return 5;
    },
    Tt = () => {
      s(!1);
      const U = u.join("");
      let H = m;
      if (!(c != null && c.some((ae) => ae.word === U))) {
        const ae = Qe(U);
        HR.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${U}`)
          .then((de) => {
            console.log("galing idol"),
              console.log(de),
              d((gt) => [...gt, { word: U, definition: de.data[0].meanings[0].definitions[0].definition, remarks: "a word", point: ae }]),
              h(H + ae),
              V(!0);
          })
          .catch(() => {
            console.log("walang ganon idol"), d((de) => [...de, { word: U, definition: "", remarks: "not a word", point: 0 }]), V(!1);
          });
      }
      f([]), _(null), O(null), b(!1);
    },
    De = () => {
      b(!1), f([]), O(null), _(null);
    },
    vt =
      c == null
        ? void 0
        : c.map((U, H) =>
            L.jsxs(
              "tr",
              {
                children: [
                  L.jsx("td", { children: H + 1 }),
                  L.jsx("td", { children: U == null ? void 0 : U.word }),
                  L.jsx("td", { children: U == null ? void 0 : U.definition }),
                  L.jsx("td", { children: U == null ? void 0 : U.remarks }),
                  L.jsx("td", { children: U == null ? void 0 : U.point }),
                ],
              },
              U.word
            )
          );
  return L.jsxs(L.Fragment, {
    children: [
      L.jsx(Kt, {
        transitionProps: { transition: "slide-right", duration: 200 },
        opened: t,
        onClose: () => r(!1),
        title: L.jsx(Ii, { fw: "bold", fz: "xl", style: { fontFamily: "Cherry Bomb One" }, className: "test", children: "Dictionary" }),
        children: L.jsx(Jn, {
          style: { marginLeft: "5rem", marginRight: "5rem", margin: "auto" },
          children: L.jsx(zu, {
            children: L.jsxs(bg, {
              highlightOnHover: !0,
              children: [
                L.jsx("thead", {
                  children: L.jsxs("tr", {
                    style: { fontFamily: "Cherry Bomb One" },
                    children: [
                      L.jsx("th", { children: "#" }),
                      L.jsx("th", { children: "Word" }),
                      L.jsx("th", { children: "Definition" }),
                      L.jsx("th", { children: "Remarks" }),
                      L.jsx("th", { children: "Points" }),
                    ],
                  }),
                }),
                L.jsx("tbody", { children: vt }),
              ],
            }),
          }),
        }),
      }),
      L.jsx(Jn, {
        style: { margin: "auto", display: "flex", flexDirection: "column", width: "100vw", height: "100vh", marginTop: "-2rem" },
        cols: 1,
        children: L.jsx("div", {
          style: { width: j ? "100vw" : "50vw", margin: "auto" },
          children: L.jsxs(Jn, {
            children: [
              L.jsx(Ii, { style: { fontSize: "2rem" }, fw: "bolder", ta: "center", children: Ge(P) }),
              L.jsx(Ii, {
                style: { fontSize: "1.500rem", color: "black", borderRadius: "13px" },
                fw: "bolder",
                ta: "center",
                children: m <= 1 ? L.jsxs(L.Fragment, { children: [m, " Point"] }) : L.jsxs(L.Fragment, { children: [m, " Points"] }),
              }),
              p.map((U, H) =>
                L.jsx(
                  Jn,
                  {
                    cols: e,
                    children: U.map((oe, ae) => {
                      const de = v[H][ae] ? "green" : "blue";
                      return L.jsx(cf, { color: de, i: H, j: ae, startGuessing: M, isClicked: v[H][ae], letter: oe, isGameStarted: T }, `${H}-${ae}`);
                    }),
                  },
                  H
                )
              ),
              L.jsx(zu, { children: L.jsx(bb, { active: B, config: YR }) }),
              L.jsx(Rr, {
                color: "pink",
                disabled: !a,
                onClick: () => {
                  Tt(), V(!1);
                },
                children: "Submit Word",
              }),
              L.jsx(Rr, { color: "pink", disabled: !a, onClick: De, children: "Clear Selection" }),
              L.jsx(Rr, { color: "green", disabled: T, onClick: I, children: "Start Game" }),
            ],
          }),
        }),
      }),
    ],
  });
}
var JR = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  ZR = Object.defineProperty,
  e3 = Object.defineProperties,
  t3 = Object.getOwnPropertyDescriptors,
  la = Object.getOwnPropertySymbols,
  Zg = Object.prototype.hasOwnProperty,
  e1 = Object.prototype.propertyIsEnumerable,
  Lm = (e, t, r) => (t in e ? ZR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  Mm = (e, t) => {
    for (var r in t || (t = {})) Zg.call(t, r) && Lm(e, r, t[r]);
    if (la) for (var r of la(t)) e1.call(t, r) && Lm(e, r, t[r]);
    return e;
  },
  r3 = (e, t) => e3(e, t3(t)),
  n3 = (e, t) => {
    var r = {};
    for (var n in e) Zg.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && la) for (var n of la(e)) t.indexOf(n) < 0 && e1.call(e, n) && (r[n] = e[n]);
    return r;
  },
  ff = (e, t, r) => {
    const n = w.forwardRef((o, i) => {
      var l = o,
        { color: a = "currentColor", size: s = 24, stroke: u = 2, children: f } = l,
        c = n3(l, ["color", "size", "stroke", "children"]);
      return w.createElement("svg", Mm(r3(Mm({ ref: i }, JR), { width: s, height: s, stroke: a, strokeWidth: u, className: `tabler-icon tabler-icon-${e}` }), c), [
        ...r.map(([d, p]) => w.createElement(d, p)),
        ...(f || []),
      ]);
    });
    return (n.propTypes = { color: Ne.string, size: Ne.oneOfType([Ne.string, Ne.number]), stroke: Ne.oneOfType([Ne.string, Ne.number]) }), (n.displayName = `${t}`), n;
  },
  o3 = ff("book", "IconBook", [
    ["path", { d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-0" }],
    ["path", { d: "M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-1" }],
    ["path", { d: "M3 6l0 13", key: "svg-2" }],
    ["path", { d: "M12 6l0 13", key: "svg-3" }],
    ["path", { d: "M21 6l0 13", key: "svg-4" }],
  ]),
  i3 = ff("music-off", "IconMusicOff", [
    ["path", { d: "M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-0" }],
    ["path", { d: "M14.42 14.45a3 3 0 1 0 4.138 4.119", key: "svg-1" }],
    ["path", { d: "M9 17v-8m0 -4v-1h10v11", key: "svg-2" }],
    ["path", { d: "M12 8h7", key: "svg-3" }],
    ["path", { d: "M3 3l18 18", key: "svg-4" }],
  ]),
  l3 = ff("music", "IconMusic", [
    ["path", { d: "M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-0" }],
    ["path", { d: "M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }],
    ["path", { d: "M9 17l0 -13l10 0l0 13", key: "svg-2" }],
    ["path", { d: "M9 8l10 0", key: "svg-3" }],
  ]);
const a3 = "modulepreload",
  s3 = function (e) {
    return "/word-buggle/" + e;
  },
  Am = {},
  u3 = function (t, r, n) {
    if (!r || r.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      r.map((i) => {
        if (((i = s3(i)), i in Am)) return;
        Am[i] = !0;
        const l = i.endsWith(".css"),
          a = l ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let f = o.length - 1; f >= 0; f--) {
            const c = o[f];
            if (c.href === i && (!l || c.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${a}`)) return;
        const u = document.createElement("link");
        if (((u.rel = l ? "stylesheet" : a3), l || ((u.as = "script"), (u.crossOrigin = "")), (u.href = i), document.head.appendChild(u), l))
          return new Promise((f, c) => {
            u.addEventListener("load", f), u.addEventListener("error", () => c(new Error(`Unable to preload CSS for ${i}`)));
          });
      })
    ).then(() => t());
  };
function aa() {
  return (
    (aa =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    aa.apply(this, arguments)
  );
}
function c3(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function f3(e) {
  w.useEffect(e, []);
}
function d3(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.volume,
    o = n === void 0 ? 1 : n,
    i = r.playbackRate,
    l = i === void 0 ? 1 : i,
    a = r.soundEnabled,
    s = a === void 0 ? !0 : a,
    u = r.interrupt,
    f = u === void 0 ? !1 : u,
    c = r.onload,
    d = c3(r, ["id", "volume", "playbackRate", "soundEnabled", "interrupt", "onload"]),
    p = C.useRef(null),
    y = C.useRef(!1),
    v = C.useState(null),
    S = v[0],
    m = v[1],
    h = C.useState(null),
    g = h[0],
    _ = h[1],
    x = function () {
      typeof c == "function" && c.call(this), y.current && m(this.duration() * 1e3), _(this);
    };
  f3(function () {
    return (
      u3(() => import("./howler-ab0d021e.js").then((k) => k.h), []).then(function (k) {
        if (!y.current) {
          var z;
          (p.current = (z = k.Howl) !== null && z !== void 0 ? z : k.default.Howl),
            (y.current = !0),
            new p.current(aa({ src: Array.isArray(e) ? e : [e], volume: o, rate: l, onload: x }, d));
        }
      }),
      function () {
        y.current = !1;
      }
    );
  }),
    C.useEffect(
      function () {
        p.current && g && _(new p.current(aa({ src: Array.isArray(e) ? e : [e], volume: o, onload: x }, d)));
      },
      [JSON.stringify(e)]
    ),
    C.useEffect(
      function () {
        g && (g.volume(o), g.rate(l));
      },
      [o, l]
    );
  var O = C.useCallback(
      function (k) {
        typeof k > "u" && (k = {}), !(!g || (!s && !k.forceSoundEnabled)) && (f && g.stop(), k.playbackRate && g.rate(k.playbackRate), g.play(k.id));
      },
      [g, s, f]
    ),
    P = C.useCallback(
      function (k) {
        g && g.stop(k);
      },
      [g]
    ),
    E = C.useCallback(
      function (k) {
        g && g.pause(k);
      },
      [g]
    ),
    T = [O, { sound: g, stop: P, pause: E, duration: S }];
  return T;
}
function p3({ isTakoyakiPlaying: e, setIsTakoyakiPlaying: t }) {
  const [r, { stop: n }] = d3("./takoyaki.mp3", { volume: 0.7, interrupt: !1 });
  return L.jsx("div", {
    children: e
      ? L.jsx(El, {
          onClick: () => {
            n(), t(!1);
          },
          children: L.jsx(l3, { size: "1.125rem" }),
        })
      : L.jsx(El, {
          onClick: () => {
            r(), t(!0);
          },
          children: L.jsx(i3, { size: "1.125rem" }),
        }),
  });
}
function m3() {
  const [e, t] = w.useState(!1),
    [r, n] = w.useState(!1),
    [o, i] = w.useState(!1),
    [l, a] = w.useState(!1),
    [s, u] = w.useState(!0);
  return (
    w.useEffect(() => {
      const f = setInterval(() => {
        u((c) => c + 1);
      }, 500);
      return () => {
        clearInterval(f);
      };
    }, []),
    L.jsxs("div", {
      style: { background: "linear-gradient(#FEFFCE, #ffffff)" },
      children: [
        L.jsx(Nt, {
          style: { zIndex: "999" },
          fullScreen: !0,
          transitionProps: { transition: "slide-up", duration: 200 },
          opened: e,
          onClose: () => t(!1),
          title: L.jsx(L.Fragment, {
            children: L.jsx(Sk, { label: "View Guessed Words", position: "right", children: L.jsx(El, { onClick: () => i(!0), children: L.jsx(o3, { size: "1.125rem" }) }) }),
          }),
          children: L.jsx(qR, { difficulty: 4, openDict: o, setOpenDict: i }),
        }),
        L.jsx(Nt, {
          style: { marginLeft: "-1rem" },
          transitionProps: { transition: "slide-up", duration: 200 },
          opened: r,
          onClose: () => n(!1),
          centered: !0,
          children: "Select Difficulty",
        }),
        L.jsx(p3, { isTakoyakiPlaying: l, setIsTakoyakiPlaying: a }),
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((f, c) => {
          const d = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"],
            p = Math.floor(Math.random() * d.length),
            y = Math.floor(Math.random() * window.innerHeight) + "px",
            v = Math.floor(Math.random() * window.innerWidth) + "px",
            S = Math.floor(Math.random() * 360);
          return L.jsx(
            "div",
            { style: { position: "absolute", top: y, left: v, transform: `rotate(${S}deg)` }, children: L.jsx(cf, { color: d[p], letter: f, isClicked: !0, isGameStarted: !0 }) },
            c
          );
        }),
        L.jsxs("div", {
          style: { width: "100vw", height: "100vh", display: "flex", justifyContent: "center", placeContent: "center", flexDirection: "column" },
          children: [
            L.jsx(zu, { children: L.jsx(Ii, { style: { fontSize: "4rem", fontFamily: "Cherry Bomb One", color: "black", zIndex: "990" }, children: "Word Boggle" }) }),
            L.jsxs(lg, {
              style: { display: "flex", flexDirection: "column", margin: "auto" },
              children: [
                L.jsx(Rr, {
                  color: "green",
                  size: "xl",
                  style: { margin: "auto", color: "white", fontSize: "2rem", background: "#E66B18", border: "5px solid #CE5809" },
                  onClick: () => t(!0),
                  fullWidth: !0,
                  children: "Start Game",
                }),
                L.jsx(Rr, {
                  color: "green",
                  size: "xl",
                  style: { margin: "auto", color: "white", fontSize: "2rem", background: "#E66B18", border: "5px solid #CE5809" },
                  onClick: () => n(!0),
                  fullWidth: !0,
                  children: "Select Difficulty",
                }),
                L.jsx(Rr, {
                  color: "green",
                  size: "xl",
                  style: { margin: "auto", color: "white", fontSize: "2rem", background: "#E66B18", border: "5px solid #CE5809" },
                  fullWidth: !0,
                  children: "Help",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
bs.createRoot(document.getElementById("root")).render(L.jsx(m3, {}));
export { Ar as c };
