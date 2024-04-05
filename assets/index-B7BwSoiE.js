(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Sm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pm = { exports: {} },
  hl = {},
  Tm = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wi = Symbol.for("react.element"),
  gb = Symbol.for("react.portal"),
  vb = Symbol.for("react.fragment"),
  yb = Symbol.for("react.strict_mode"),
  bb = Symbol.for("react.profiler"),
  wb = Symbol.for("react.provider"),
  xb = Symbol.for("react.context"),
  Sb = Symbol.for("react.forward_ref"),
  Pb = Symbol.for("react.suspense"),
  Tb = Symbol.for("react.memo"),
  kb = Symbol.for("react.lazy"),
  lf = Symbol.iterator;
function Cb(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lf && e[lf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var km = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cm = Object.assign,
  Em = {};
function ao(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Em),
    (this.updater = n || km);
}
ao.prototype.isReactComponent = {};
ao.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ao.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $m() {}
$m.prototype = ao.prototype;
function wc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Em),
    (this.updater = n || km);
}
var xc = (wc.prototype = new $m());
xc.constructor = wc;
Cm(xc, ao.prototype);
xc.isPureReactComponent = !0;
var af = Array.isArray,
  Mm = Object.prototype.hasOwnProperty,
  Sc = { current: null },
  Lm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Mm.call(t, r) && !Lm.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: wi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Sc.current,
  };
}
function Eb(e, t) {
  return {
    $$typeof: wi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wi;
}
function $b(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var uf = /\/+/g;
function jl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? $b("" + e.key)
    : t.toString(36);
}
function us(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wi:
          case gb:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + jl(s, 0) : r),
      af(o)
        ? ((n = ""),
          e != null && (n = e.replace(uf, "$&/") + "/"),
          us(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Pc(o) &&
            (o = Eb(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(uf, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), af(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + jl(i, l);
      s += us(i, t, n, a, o);
    }
  else if (((a = Cb(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + jl(i, l++)), (s += us(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ri(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    us(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Mb(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  cs = { transition: null },
  Lb = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: cs,
    ReactCurrentOwner: Sc,
  };
J.Children = {
  map: Ri,
  forEach: function (e, t, n) {
    Ri(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ri(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ri(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = ao;
J.Fragment = vb;
J.Profiler = bb;
J.PureComponent = wc;
J.StrictMode = yb;
J.Suspense = Pb;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lb;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Cm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Sc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Mm.call(t, a) &&
        !Lm.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: wi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: xb,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wb, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Dm;
J.createFactory = function (e) {
  var t = Dm.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: Sb, render: e };
};
J.isValidElement = Pc;
J.lazy = function (e) {
  return { $$typeof: kb, _payload: { _status: -1, _result: e }, _init: Mb };
};
J.memo = function (e, t) {
  return { $$typeof: Tb, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = cs.transition;
  cs.transition = {};
  try {
    e();
  } finally {
    cs.transition = t;
  }
};
J.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
J.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
J.useContext = function (e) {
  return He.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
J.useId = function () {
  return He.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return He.current.useRef(e);
};
J.useState = function (e) {
  return He.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return He.current.useTransition();
};
J.version = "18.2.0";
Tm.exports = J;
var S = Tm.exports;
const ie = Sm(S);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Db = S,
  Ab = Symbol.for("react.element"),
  Rb = Symbol.for("react.fragment"),
  Ib = Object.prototype.hasOwnProperty,
  Vb = Db.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ob = { key: !0, ref: !0, __self: !0, __source: !0 };
function Am(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ib.call(t, r) && !Ob.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ab,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Vb.current,
  };
}
hl.Fragment = Rb;
hl.jsx = Am;
hl.jsxs = Am;
Pm.exports = hl;
var O = Pm.exports,
  Ha = {},
  Rm = { exports: {} },
  ut = {},
  Im = { exports: {} },
  Vm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(F, z) {
    var C = F.length;
    F.push(z);
    e: for (; 0 < C; ) {
      var y = (C - 1) >>> 1,
        T = F[y];
      if (0 < o(T, z)) (F[y] = z), (F[C] = T), (C = y);
      else break e;
    }
  }
  function n(F) {
    return F.length === 0 ? null : F[0];
  }
  function r(F) {
    if (F.length === 0) return null;
    var z = F[0],
      C = F.pop();
    if (C !== z) {
      F[0] = C;
      e: for (var y = 0, T = F.length, D = T >>> 1; y < D; ) {
        var _ = 2 * (y + 1) - 1,
          U = F[_],
          H = _ + 1,
          Q = F[H];
        if (0 > o(U, C))
          H < T && 0 > o(Q, U)
            ? ((F[y] = Q), (F[H] = C), (y = H))
            : ((F[y] = U), (F[_] = C), (y = _));
        else if (H < T && 0 > o(Q, C)) (F[y] = Q), (F[H] = C), (y = H);
        else break e;
      }
    }
    return z;
  }
  function o(F, z) {
    var C = F.sortIndex - z.sortIndex;
    return C !== 0 ? C : F.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    b = !1,
    w = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(F) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= F)
        r(u), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(u);
    }
  }
  function E(F) {
    if (((w = !1), v(F), !b))
      if (n(a) !== null) (b = !0), j(L);
      else {
        var z = n(u);
        z !== null && V(E, z.startTime - F);
      }
  }
  function L(F, z) {
    (b = !1), w && ((w = !1), g(p), (p = -1)), (m = !0);
    var C = f;
    try {
      for (
        v(z), d = n(a);
        d !== null && (!(d.expirationTime > z) || (F && !$()));

      ) {
        var y = d.callback;
        if (typeof y == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var T = y(d.expirationTime <= z);
          (z = e.unstable_now()),
            typeof T == "function" ? (d.callback = T) : d === n(a) && r(a),
            v(z);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var D = !0;
      else {
        var _ = n(u);
        _ !== null && V(E, _.startTime - z), (D = !1);
      }
      return D;
    } finally {
      (d = null), (f = C), (m = !1);
    }
  }
  var M = !1,
    N = null,
    p = -1,
    R = 5,
    A = -1;
  function $() {
    return !(e.unstable_now() - A < R);
  }
  function I() {
    if (N !== null) {
      var F = e.unstable_now();
      A = F;
      var z = !0;
      try {
        z = N(!0, F);
      } finally {
        z ? x() : ((M = !1), (N = null));
      }
    } else M = !1;
  }
  var x;
  if (typeof h == "function")
    x = function () {
      h(I);
    };
  else if (typeof MessageChannel < "u") {
    var k = new MessageChannel(),
      K = k.port2;
    (k.port1.onmessage = I),
      (x = function () {
        K.postMessage(null);
      });
  } else
    x = function () {
      P(I, 0);
    };
  function j(F) {
    (N = F), M || ((M = !0), x());
  }
  function V(F, z) {
    p = P(function () {
      F(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (F) {
      F.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || m || ((b = !0), j(L));
    }),
    (e.unstable_forceFrameRate = function (F) {
      0 > F || 125 < F
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < F ? Math.floor(1e3 / F) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (F) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = f;
      }
      var C = f;
      f = z;
      try {
        return F();
      } finally {
        f = C;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (F, z) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var C = f;
      f = F;
      try {
        return z();
      } finally {
        f = C;
      }
    }),
    (e.unstable_scheduleCallback = function (F, z, C) {
      var y = e.unstable_now();
      switch (
        (typeof C == "object" && C !== null
          ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? y + C : y))
          : (C = y),
        F)
      ) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return (
        (T = C + T),
        (F = {
          id: c++,
          callback: z,
          priorityLevel: F,
          startTime: C,
          expirationTime: T,
          sortIndex: -1,
        }),
        C > y
          ? ((F.sortIndex = C),
            t(u, F),
            n(a) === null &&
              F === n(u) &&
              (w ? (g(p), (p = -1)) : (w = !0), V(E, C - y)))
          : ((F.sortIndex = T), t(a, F), b || m || ((b = !0), j(L))),
        F
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (F) {
      var z = f;
      return function () {
        var C = f;
        f = z;
        try {
          return F.apply(this, arguments);
        } finally {
          f = C;
        }
      };
    });
})(Vm);
Im.exports = Vm;
var Fb = Im.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Om = S,
  lt = Fb;
function B(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fm = new Set(),
  Xo = {};
function cr(e, t) {
  qr(e, t), qr(e + "Capture", t);
}
function qr(e, t) {
  for (Xo[e] = t, e = 0; e < t.length; e++) Fm.add(t[e]);
}
var qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ga = Object.prototype.hasOwnProperty,
  Nb =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  cf = {},
  df = {};
function Kb(e) {
  return Ga.call(df, e)
    ? !0
    : Ga.call(cf, e)
    ? !1
    : Nb.test(e)
    ? (df[e] = !0)
    : ((cf[e] = !0), !1);
}
function jb(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _b(e, t, n, r) {
  if (t === null || typeof t > "u" || jb(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function Ge(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ie[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Tc = /[\-:]([a-z])/g;
function kc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Tc, kc);
    Ie[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Tc, kc);
    Ie[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Tc, kc);
  Ie[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cc(e, t, n, r) {
  var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_b(t, n, o, r) && (n = null),
    r || o === null
      ? Kb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var on = Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ii = Symbol.for("react.element"),
  Cr = Symbol.for("react.portal"),
  Er = Symbol.for("react.fragment"),
  Ec = Symbol.for("react.strict_mode"),
  Ya = Symbol.for("react.profiler"),
  Nm = Symbol.for("react.provider"),
  Km = Symbol.for("react.context"),
  $c = Symbol.for("react.forward_ref"),
  Xa = Symbol.for("react.suspense"),
  Qa = Symbol.for("react.suspense_list"),
  Mc = Symbol.for("react.memo"),
  cn = Symbol.for("react.lazy"),
  jm = Symbol.for("react.offscreen"),
  ff = Symbol.iterator;
function ho(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ff && e[ff]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  _l;
function $o(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _l = (t && t[1]) || "";
    }
  return (
    `
` +
    _l +
    e
  );
}
var zl = !1;
function Bl(e, t) {
  if (!e || zl) return "";
  zl = !0;
  var n = Error.prepareStackTrace;
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
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? $o(e) : "";
}
function zb(e) {
  switch (e.tag) {
    case 5:
      return $o(e.type);
    case 16:
      return $o("Lazy");
    case 13:
      return $o("Suspense");
    case 19:
      return $o("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bl(e.type, !1)), e;
    case 11:
      return (e = Bl(e.type.render, !1)), e;
    case 1:
      return (e = Bl(e.type, !0)), e;
    default:
      return "";
  }
}
function Za(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Er:
      return "Fragment";
    case Cr:
      return "Portal";
    case Ya:
      return "Profiler";
    case Ec:
      return "StrictMode";
    case Xa:
      return "Suspense";
    case Qa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Km:
        return (e.displayName || "Context") + ".Consumer";
      case Nm:
        return (e._context.displayName || "Context") + ".Provider";
      case $c:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Mc:
        return (
          (t = e.displayName || null), t !== null ? t : Za(e.type) || "Memo"
        );
      case cn:
        (t = e._payload), (e = e._init);
        try {
          return Za(e(t));
        } catch {}
    }
  return null;
}
function Bb(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Za(t);
    case 8:
      return t === Ec ? "StrictMode" : "Mode";
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
function En(e) {
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
function _m(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ub(e) {
  var t = _m(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Vi(e) {
  e._valueTracker || (e._valueTracker = Ub(e));
}
function zm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _m(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qa(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = En(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bm(e, t) {
  (t = t.checked), t != null && Cc(e, "checked", t, !1);
}
function Ja(e, t) {
  Bm(e, t);
  var n = En(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? eu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && eu(e, t.type, En(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function eu(e, t, n) {
  (t !== "number" || Es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mo = Array.isArray;
function Wr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + En(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function tu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function mf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(B(92));
      if (Mo(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: En(n) };
}
function Um(e, t) {
  var n = En(t.value),
    r = En(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function gf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Oi,
  Hm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Oi = Oi || document.createElement("div"),
          Oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Oi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vo = {
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
  Wb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vo).forEach(function (e) {
  Wb.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vo[t] = Vo[e]);
  });
});
function Gm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vo.hasOwnProperty(e) && Vo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ym(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Gm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Hb = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ru(e, t) {
  if (t) {
    if (Hb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62));
  }
}
function ou(e, t) {
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
var iu = null;
function Lc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var su = null,
  Hr = null,
  Gr = null;
function vf(e) {
  if ((e = Pi(e))) {
    if (typeof su != "function") throw Error(B(280));
    var t = e.stateNode;
    t && ((t = bl(t)), su(e.stateNode, e.type, t));
  }
}
function Xm(e) {
  Hr ? (Gr ? Gr.push(e) : (Gr = [e])) : (Hr = e);
}
function Qm() {
  if (Hr) {
    var e = Hr,
      t = Gr;
    if (((Gr = Hr = null), vf(e), t)) for (e = 0; e < t.length; e++) vf(t[e]);
  }
}
function Zm(e, t) {
  return e(t);
}
function qm() {}
var Ul = !1;
function Jm(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Zm(e, t, n);
  } finally {
    (Ul = !1), (Hr !== null || Gr !== null) && (qm(), Qm());
  }
}
function Zo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bl(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(B(231, t, typeof n));
  return n;
}
var lu = !1;
if (qt)
  try {
    var mo = {};
    Object.defineProperty(mo, "passive", {
      get: function () {
        lu = !0;
      },
    }),
      window.addEventListener("test", mo, mo),
      window.removeEventListener("test", mo, mo);
  } catch {
    lu = !1;
  }
function Gb(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Oo = !1,
  $s = null,
  Ms = !1,
  au = null,
  Yb = {
    onError: function (e) {
      (Oo = !0), ($s = e);
    },
  };
function Xb(e, t, n, r, o, i, s, l, a) {
  (Oo = !1), ($s = null), Gb.apply(Yb, arguments);
}
function Qb(e, t, n, r, o, i, s, l, a) {
  if ((Xb.apply(this, arguments), Oo)) {
    if (Oo) {
      var u = $s;
      (Oo = !1), ($s = null);
    } else throw Error(B(198));
    Ms || ((Ms = !0), (au = u));
  }
}
function dr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function eg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yf(e) {
  if (dr(e) !== e) throw Error(B(188));
}
function Zb(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dr(e)), t === null)) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return yf(o), e;
        if (i === r) return yf(o), t;
        i = i.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function tg(e) {
  return (e = Zb(e)), e !== null ? ng(e) : null;
}
function ng(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ng(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rg = lt.unstable_scheduleCallback,
  bf = lt.unstable_cancelCallback,
  qb = lt.unstable_shouldYield,
  Jb = lt.unstable_requestPaint,
  we = lt.unstable_now,
  e1 = lt.unstable_getCurrentPriorityLevel,
  Dc = lt.unstable_ImmediatePriority,
  og = lt.unstable_UserBlockingPriority,
  Ls = lt.unstable_NormalPriority,
  t1 = lt.unstable_LowPriority,
  ig = lt.unstable_IdlePriority,
  ml = null,
  It = null;
function n1(e) {
  if (It && typeof It.onCommitFiberRoot == "function")
    try {
      It.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : i1,
  r1 = Math.log,
  o1 = Math.LN2;
function i1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((r1(e) / o1) | 0)) | 0;
}
var Fi = 64,
  Ni = 4194304;
function Lo(e) {
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
function Ds(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Lo(l)) : ((i &= s), i !== 0 && (r = Lo(i)));
  } else (s = n & ~o), s !== 0 ? (r = Lo(s)) : i !== 0 && (r = Lo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Et(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function s1(e, t) {
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
function l1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Et(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = s1(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function uu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function sg() {
  var e = Fi;
  return (Fi <<= 1), !(Fi & 4194240) && (Fi = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Et(t)),
    (e[t] = n);
}
function a1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Et(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Ac(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Et(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var oe = 0;
function lg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ag,
  Rc,
  ug,
  cg,
  dg,
  cu = !1,
  Ki = [],
  vn = null,
  yn = null,
  bn = null,
  qo = new Map(),
  Jo = new Map(),
  pn = [],
  u1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      yn = null;
      break;
    case "mouseover":
    case "mouseout":
      bn = null;
      break;
    case "pointerover":
    case "pointerout":
      qo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jo.delete(t.pointerId);
  }
}
function go(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Pi(t)), t !== null && Rc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function c1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (vn = go(vn, e, t, n, r, o)), !0;
    case "dragenter":
      return (yn = go(yn, e, t, n, r, o)), !0;
    case "mouseover":
      return (bn = go(bn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return qo.set(i, go(qo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Jo.set(i, go(Jo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function fg(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = dr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = eg(n)), t !== null)) {
          (e.blockedOn = t),
            dg(e.priority, function () {
              ug(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ds(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = du(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (iu = r), n.target.dispatchEvent(r), (iu = null);
    } else return (t = Pi(n)), t !== null && Rc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xf(e, t, n) {
  ds(e) && n.delete(t);
}
function d1() {
  (cu = !1),
    vn !== null && ds(vn) && (vn = null),
    yn !== null && ds(yn) && (yn = null),
    bn !== null && ds(bn) && (bn = null),
    qo.forEach(xf),
    Jo.forEach(xf);
}
function vo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cu ||
      ((cu = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, d1)));
}
function ei(e) {
  function t(o) {
    return vo(o, e);
  }
  if (0 < Ki.length) {
    vo(Ki[0], e);
    for (var n = 1; n < Ki.length; n++) {
      var r = Ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vn !== null && vo(vn, e),
      yn !== null && vo(yn, e),
      bn !== null && vo(bn, e),
      qo.forEach(t),
      Jo.forEach(t),
      n = 0;
    n < pn.length;
    n++
  )
    (r = pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); )
    fg(n), n.blockedOn === null && pn.shift();
}
var Yr = on.ReactCurrentBatchConfig,
  As = !0;
function f1(e, t, n, r) {
  var o = oe,
    i = Yr.transition;
  Yr.transition = null;
  try {
    (oe = 1), Ic(e, t, n, r);
  } finally {
    (oe = o), (Yr.transition = i);
  }
}
function p1(e, t, n, r) {
  var o = oe,
    i = Yr.transition;
  Yr.transition = null;
  try {
    (oe = 4), Ic(e, t, n, r);
  } finally {
    (oe = o), (Yr.transition = i);
  }
}
function Ic(e, t, n, r) {
  if (As) {
    var o = du(e, t, n, r);
    if (o === null) ta(e, t, r, Rs, n), wf(e, r);
    else if (c1(o, e, t, n, r)) r.stopPropagation();
    else if ((wf(e, r), t & 4 && -1 < u1.indexOf(e))) {
      for (; o !== null; ) {
        var i = Pi(o);
        if (
          (i !== null && ag(i),
          (i = du(e, t, n, r)),
          i === null && ta(e, t, r, Rs, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ta(e, t, r, null, n);
  }
}
var Rs = null;
function du(e, t, n, r) {
  if (((Rs = null), (e = Lc(r)), (e = Qn(e)), e !== null))
    if (((t = dr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = eg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Rs = e), null;
}
function pg(e) {
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
      switch (e1()) {
        case Dc:
          return 1;
        case og:
          return 4;
        case Ls:
        case t1:
          return 16;
        case ig:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mn = null,
  Vc = null,
  fs = null;
function hg() {
  if (fs) return fs;
  var e,
    t = Vc,
    n = t.length,
    r,
    o = "value" in mn ? mn.value : mn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (fs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ps(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ji() {
  return !0;
}
function Sf() {
  return !1;
}
function ct(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ji
        : Sf),
      (this.isPropagationStopped = Sf),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ji));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ji));
      },
      persist: function () {},
      isPersistent: ji,
    }),
    t
  );
}
var uo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Oc = ct(uo),
  Si = me({}, uo, { view: 0, detail: 0 }),
  h1 = ct(Si),
  Hl,
  Gl,
  yo,
  gl = me({}, Si, {
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
    getModifierState: Fc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yo &&
            (yo && e.type === "mousemove"
              ? ((Hl = e.screenX - yo.screenX), (Gl = e.screenY - yo.screenY))
              : (Gl = Hl = 0),
            (yo = e)),
          Hl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gl;
    },
  }),
  Pf = ct(gl),
  m1 = me({}, gl, { dataTransfer: 0 }),
  g1 = ct(m1),
  v1 = me({}, Si, { relatedTarget: 0 }),
  Yl = ct(v1),
  y1 = me({}, uo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b1 = ct(y1),
  w1 = me({}, uo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  x1 = ct(w1),
  S1 = me({}, uo, { data: 0 }),
  Tf = ct(S1),
  P1 = {
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
  T1 = {
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
  k1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function C1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = k1[e]) ? !!t[e] : !1;
}
function Fc() {
  return C1;
}
var E1 = me({}, Si, {
    key: function (e) {
      if (e.key) {
        var t = P1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ps(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? T1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fc,
    charCode: function (e) {
      return e.type === "keypress" ? ps(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ps(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $1 = ct(E1),
  M1 = me({}, gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  kf = ct(M1),
  L1 = me({}, Si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fc,
  }),
  D1 = ct(L1),
  A1 = me({}, uo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R1 = ct(A1),
  I1 = me({}, gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  V1 = ct(I1),
  O1 = [9, 13, 27, 32],
  Nc = qt && "CompositionEvent" in window,
  Fo = null;
qt && "documentMode" in document && (Fo = document.documentMode);
var F1 = qt && "TextEvent" in window && !Fo,
  mg = qt && (!Nc || (Fo && 8 < Fo && 11 >= Fo)),
  Cf = " ",
  Ef = !1;
function gg(e, t) {
  switch (e) {
    case "keyup":
      return O1.indexOf(t.keyCode) !== -1;
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
function vg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $r = !1;
function N1(e, t) {
  switch (e) {
    case "compositionend":
      return vg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ef = !0), Cf);
    case "textInput":
      return (e = t.data), e === Cf && Ef ? null : e;
    default:
      return null;
  }
}
function K1(e, t) {
  if ($r)
    return e === "compositionend" || (!Nc && gg(e, t))
      ? ((e = hg()), (fs = Vc = mn = null), ($r = !1), e)
      : null;
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
      return mg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var j1 = {
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
function $f(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!j1[e.type] : t === "textarea";
}
function yg(e, t, n, r) {
  Xm(r),
    (t = Is(t, "onChange")),
    0 < t.length &&
      ((n = new Oc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var No = null,
  ti = null;
function _1(e) {
  Mg(e, 0);
}
function vl(e) {
  var t = Dr(e);
  if (zm(t)) return e;
}
function z1(e, t) {
  if (e === "change") return t;
}
var bg = !1;
if (qt) {
  var Xl;
  if (qt) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var Mf = document.createElement("div");
      Mf.setAttribute("oninput", "return;"),
        (Ql = typeof Mf.oninput == "function");
    }
    Xl = Ql;
  } else Xl = !1;
  bg = Xl && (!document.documentMode || 9 < document.documentMode);
}
function Lf() {
  No && (No.detachEvent("onpropertychange", wg), (ti = No = null));
}
function wg(e) {
  if (e.propertyName === "value" && vl(ti)) {
    var t = [];
    yg(t, ti, e, Lc(e)), Jm(_1, t);
  }
}
function B1(e, t, n) {
  e === "focusin"
    ? (Lf(), (No = t), (ti = n), No.attachEvent("onpropertychange", wg))
    : e === "focusout" && Lf();
}
function U1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vl(ti);
}
function W1(e, t) {
  if (e === "click") return vl(t);
}
function H1(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function G1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Mt = typeof Object.is == "function" ? Object.is : G1;
function ni(e, t) {
  if (Mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ga.call(t, o) || !Mt(e[o], t[o])) return !1;
  }
  return !0;
}
function Df(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Af(e, t) {
  var n = Df(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Df(n);
  }
}
function xg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sg() {
  for (var e = window, t = Es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Es(e.document);
  }
  return t;
}
function Kc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Y1(e) {
  var t = Sg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Kc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Af(n, i));
        var s = Af(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var X1 = qt && "documentMode" in document && 11 >= document.documentMode,
  Mr = null,
  fu = null,
  Ko = null,
  pu = !1;
function Rf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pu ||
    Mr == null ||
    Mr !== Es(r) ||
    ((r = Mr),
    "selectionStart" in r && Kc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ko && ni(Ko, r)) ||
      ((Ko = r),
      (r = Is(fu, "onSelect")),
      0 < r.length &&
        ((t = new Oc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mr))));
}
function _i(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Lr = {
    animationend: _i("Animation", "AnimationEnd"),
    animationiteration: _i("Animation", "AnimationIteration"),
    animationstart: _i("Animation", "AnimationStart"),
    transitionend: _i("Transition", "TransitionEnd"),
  },
  Zl = {},
  Pg = {};
qt &&
  ((Pg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Lr.animationend.animation,
    delete Lr.animationiteration.animation,
    delete Lr.animationstart.animation),
  "TransitionEvent" in window || delete Lr.transitionend.transition);
function yl(e) {
  if (Zl[e]) return Zl[e];
  if (!Lr[e]) return e;
  var t = Lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Pg) return (Zl[e] = t[n]);
  return e;
}
var Tg = yl("animationend"),
  kg = yl("animationiteration"),
  Cg = yl("animationstart"),
  Eg = yl("transitionend"),
  $g = new Map(),
  If =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function In(e, t) {
  $g.set(e, t), cr(t, [e]);
}
for (var ql = 0; ql < If.length; ql++) {
  var Jl = If[ql],
    Q1 = Jl.toLowerCase(),
    Z1 = Jl[0].toUpperCase() + Jl.slice(1);
  In(Q1, "on" + Z1);
}
In(Tg, "onAnimationEnd");
In(kg, "onAnimationIteration");
In(Cg, "onAnimationStart");
In("dblclick", "onDoubleClick");
In("focusin", "onFocus");
In("focusout", "onBlur");
In(Eg, "onTransitionEnd");
qr("onMouseEnter", ["mouseout", "mouseover"]);
qr("onMouseLeave", ["mouseout", "mouseover"]);
qr("onPointerEnter", ["pointerout", "pointerover"]);
qr("onPointerLeave", ["pointerout", "pointerover"]);
cr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
cr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
cr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
cr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Do =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  q1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));
function Vf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qb(r, t, void 0, e), (e.currentTarget = null);
}
function Mg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Vf(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Vf(o, l, u), (i = a);
        }
    }
  }
  if (Ms) throw ((e = au), (Ms = !1), (au = null), e);
}
function ue(e, t) {
  var n = t[yu];
  n === void 0 && (n = t[yu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lg(t, e, 2, !1), n.add(r));
}
function ea(e, t, n) {
  var r = 0;
  t && (r |= 4), Lg(n, e, r, t);
}
var zi = "_reactListening" + Math.random().toString(36).slice(2);
function ri(e) {
  if (!e[zi]) {
    (e[zi] = !0),
      Fm.forEach(function (n) {
        n !== "selectionchange" && (q1.has(n) || ea(n, !1, e), ea(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zi] || ((t[zi] = !0), ea("selectionchange", !1, t));
  }
}
function Lg(e, t, n, r) {
  switch (pg(t)) {
    case 1:
      var o = f1;
      break;
    case 4:
      o = p1;
      break;
    default:
      o = Ic;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !lu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ta(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Qn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Jm(function () {
    var u = i,
      c = Lc(n),
      d = [];
    e: {
      var f = $g.get(e);
      if (f !== void 0) {
        var m = Oc,
          b = e;
        switch (e) {
          case "keypress":
            if (ps(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = $1;
            break;
          case "focusin":
            (b = "focus"), (m = Yl);
            break;
          case "focusout":
            (b = "blur"), (m = Yl);
            break;
          case "beforeblur":
          case "afterblur":
            m = Yl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Pf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = g1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = D1;
            break;
          case Tg:
          case kg:
          case Cg:
            m = b1;
            break;
          case Eg:
            m = R1;
            break;
          case "scroll":
            m = h1;
            break;
          case "wheel":
            m = V1;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = x1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = kf;
        }
        var w = (t & 4) !== 0,
          P = !w && e === "scroll",
          g = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E),
              g !== null && ((E = Zo(h, g)), E != null && w.push(oi(h, E, v)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((f = new m(f, b, null, n, c)), d.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          f &&
            n !== iu &&
            (b = n.relatedTarget || n.fromElement) &&
            (Qn(b) || b[Jt]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          m
            ? ((b = n.relatedTarget || n.toElement),
              (m = u),
              (b = b ? Qn(b) : null),
              b !== null &&
                ((P = dr(b)), b !== P || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((m = null), (b = u)),
          m !== b)
        ) {
          if (
            ((w = Pf),
            (E = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = kf),
              (E = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (P = m == null ? f : Dr(m)),
            (v = b == null ? f : Dr(b)),
            (f = new w(E, h + "leave", m, n, c)),
            (f.target = P),
            (f.relatedTarget = v),
            (E = null),
            Qn(c) === u &&
              ((w = new w(g, h + "enter", b, n, c)),
              (w.target = v),
              (w.relatedTarget = P),
              (E = w)),
            (P = E),
            m && b)
          )
            t: {
              for (w = m, g = b, h = 0, v = w; v; v = br(v)) h++;
              for (v = 0, E = g; E; E = br(E)) v++;
              for (; 0 < h - v; ) (w = br(w)), h--;
              for (; 0 < v - h; ) (g = br(g)), v--;
              for (; h--; ) {
                if (w === g || (g !== null && w === g.alternate)) break t;
                (w = br(w)), (g = br(g));
              }
              w = null;
            }
          else w = null;
          m !== null && Of(d, f, m, w, !1),
            b !== null && P !== null && Of(d, P, b, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? Dr(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var L = z1;
        else if ($f(f))
          if (bg) L = H1;
          else {
            L = U1;
            var M = B1;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (L = W1);
        if (L && (L = L(e, u))) {
          yg(d, L, n, c);
          break e;
        }
        M && M(e, f, u),
          e === "focusout" &&
            (M = f._wrapperState) &&
            M.controlled &&
            f.type === "number" &&
            eu(f, "number", f.value);
      }
      switch (((M = u ? Dr(u) : window), e)) {
        case "focusin":
          ($f(M) || M.contentEditable === "true") &&
            ((Mr = M), (fu = u), (Ko = null));
          break;
        case "focusout":
          Ko = fu = Mr = null;
          break;
        case "mousedown":
          pu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pu = !1), Rf(d, n, c);
          break;
        case "selectionchange":
          if (X1) break;
        case "keydown":
        case "keyup":
          Rf(d, n, c);
      }
      var N;
      if (Nc)
        e: {
          switch (e) {
            case "compositionstart":
              var p = "onCompositionStart";
              break e;
            case "compositionend":
              p = "onCompositionEnd";
              break e;
            case "compositionupdate":
              p = "onCompositionUpdate";
              break e;
          }
          p = void 0;
        }
      else
        $r
          ? gg(e, n) && (p = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (p = "onCompositionStart");
      p &&
        (mg &&
          n.locale !== "ko" &&
          ($r || p !== "onCompositionStart"
            ? p === "onCompositionEnd" && $r && (N = hg())
            : ((mn = c),
              (Vc = "value" in mn ? mn.value : mn.textContent),
              ($r = !0))),
        (M = Is(u, p)),
        0 < M.length &&
          ((p = new Tf(p, e, null, n, c)),
          d.push({ event: p, listeners: M }),
          N ? (p.data = N) : ((N = vg(n)), N !== null && (p.data = N)))),
        (N = F1 ? N1(e, n) : K1(e, n)) &&
          ((u = Is(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Tf("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    Mg(d, t);
  });
}
function oi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Is(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Zo(e, n)),
      i != null && r.unshift(oi(e, i, o)),
      (i = Zo(e, t)),
      i != null && r.push(oi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function br(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Of(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Zo(n, i)), a != null && s.unshift(oi(n, a, l)))
        : o || ((a = Zo(n, i)), a != null && s.push(oi(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var J1 = /\r\n?/g,
  ew = /\u0000|\uFFFD/g;
function Ff(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      J1,
      `
`
    )
    .replace(ew, "");
}
function Bi(e, t, n) {
  if (((t = Ff(t)), Ff(e) !== t && n)) throw Error(B(425));
}
function Vs() {}
var hu = null,
  mu = null;
function gu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vu = typeof setTimeout == "function" ? setTimeout : void 0,
  tw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nf = typeof Promise == "function" ? Promise : void 0,
  nw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nf < "u"
      ? function (e) {
          return Nf.resolve(null).then(e).catch(rw);
        }
      : vu;
function rw(e) {
  setTimeout(function () {
    throw e;
  });
}
function na(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ei(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ei(t);
}
function wn(e) {
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
function Kf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var co = Math.random().toString(36).slice(2),
  Rt = "__reactFiber$" + co,
  ii = "__reactProps$" + co,
  Jt = "__reactContainer$" + co,
  yu = "__reactEvents$" + co,
  ow = "__reactListeners$" + co,
  iw = "__reactHandles$" + co;
function Qn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Kf(e); e !== null; ) {
          if ((n = e[Rt])) return n;
          e = Kf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Pi(e) {
  return (
    (e = e[Rt] || e[Jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function bl(e) {
  return e[ii] || null;
}
var bu = [],
  Ar = -1;
function Vn(e) {
  return { current: e };
}
function ce(e) {
  0 > Ar || ((e.current = bu[Ar]), (bu[Ar] = null), Ar--);
}
function le(e, t) {
  Ar++, (bu[Ar] = e.current), (e.current = t);
}
var $n = {},
  ze = Vn($n),
  et = Vn(!1),
  or = $n;
function Jr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function Os() {
  ce(et), ce(ze);
}
function jf(e, t, n) {
  if (ze.current !== $n) throw Error(B(168));
  le(ze, t), le(et, n);
}
function Dg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(B(108, Bb(e) || "Unknown", o));
  return me({}, n, r);
}
function Fs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $n),
    (or = ze.current),
    le(ze, e),
    le(et, et.current),
    !0
  );
}
function _f(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n
    ? ((e = Dg(e, t, or)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(et),
      ce(ze),
      le(ze, e))
    : ce(et),
    le(et, n);
}
var Ut = null,
  wl = !1,
  ra = !1;
function Ag(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function sw(e) {
  (wl = !0), Ag(e);
}
function On() {
  if (!ra && Ut !== null) {
    ra = !0;
    var e = 0,
      t = oe;
    try {
      var n = Ut;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ut = null), (wl = !1);
    } catch (o) {
      throw (Ut !== null && (Ut = Ut.slice(e + 1)), rg(Dc, On), o);
    } finally {
      (oe = t), (ra = !1);
    }
  }
  return null;
}
var Rr = [],
  Ir = 0,
  Ns = null,
  Ks = 0,
  pt = [],
  ht = 0,
  ir = null,
  Wt = 1,
  Ht = "";
function Un(e, t) {
  (Rr[Ir++] = Ks), (Rr[Ir++] = Ns), (Ns = e), (Ks = t);
}
function Rg(e, t, n) {
  (pt[ht++] = Wt), (pt[ht++] = Ht), (pt[ht++] = ir), (ir = e);
  var r = Wt;
  e = Ht;
  var o = 32 - Et(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Et(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Wt = (1 << (32 - Et(t) + o)) | (n << o) | r),
      (Ht = i + e);
  } else (Wt = (1 << i) | (n << o) | r), (Ht = e);
}
function jc(e) {
  e.return !== null && (Un(e, 1), Rg(e, 1, 0));
}
function _c(e) {
  for (; e === Ns; )
    (Ns = Rr[--Ir]), (Rr[Ir] = null), (Ks = Rr[--Ir]), (Rr[Ir] = null);
  for (; e === ir; )
    (ir = pt[--ht]),
      (pt[ht] = null),
      (Ht = pt[--ht]),
      (pt[ht] = null),
      (Wt = pt[--ht]),
      (pt[ht] = null);
}
var st = null,
  it = null,
  de = !1,
  kt = null;
function Ig(e, t) {
  var n = gt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (st = e), (it = wn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ir !== null ? { id: Wt, overflow: Ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (st = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xu(e) {
  if (de) {
    var t = it;
    if (t) {
      var n = t;
      if (!zf(e, t)) {
        if (wu(e)) throw Error(B(418));
        t = wn(n.nextSibling);
        var r = st;
        t && zf(e, t)
          ? Ig(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (st = e));
      }
    } else {
      if (wu(e)) throw Error(B(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), (st = e);
    }
  }
}
function Bf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function Ui(e) {
  if (e !== st) return !1;
  if (!de) return Bf(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gu(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (wu(e)) throw (Vg(), Error(B(418)));
    for (; t; ) Ig(e, t), (t = wn(t.nextSibling));
  }
  if ((Bf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = wn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = st ? wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Vg() {
  for (var e = it; e; ) e = wn(e.nextSibling);
}
function eo() {
  (it = st = null), (de = !1);
}
function zc(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
var lw = on.ReactCurrentBatchConfig;
function St(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var js = Vn(null),
  _s = null,
  Vr = null,
  Bc = null;
function Uc() {
  Bc = Vr = _s = null;
}
function Wc(e) {
  var t = js.current;
  ce(js), (e._currentValue = t);
}
function Su(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xr(e, t) {
  (_s = e),
    (Bc = Vr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (qe = !0), (e.firstContext = null));
}
function yt(e) {
  var t = e._currentValue;
  if (Bc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vr === null)) {
      if (_s === null) throw Error(B(308));
      (Vr = e), (_s.dependencies = { lanes: 0, firstContext: e });
    } else Vr = Vr.next = e;
  return t;
}
var Zn = null;
function Hc(e) {
  Zn === null ? (Zn = [e]) : Zn.push(e);
}
function Og(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Hc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    en(e, r)
  );
}
function en(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dn = !1;
function Gc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Fg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ne & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      en(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Hc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function hs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ac(e, n);
  }
}
function Uf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zs(e, t, n, r) {
  var o = e.updateQueue;
  dn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var f = l.lane,
        m = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var b = e,
            w = l;
          switch (((f = t), (m = n), w.tag)) {
            case 1:
              if (((b = w.payload), typeof b == "function")) {
                d = b.call(m, d, f);
                break e;
              }
              d = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = w.payload),
                (f = typeof b == "function" ? b.call(m, d, f) : b),
                f == null)
              )
                break e;
              d = me({}, d, f);
              break e;
            case 2:
              dn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (a = d)) : (c = c.next = m),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (lr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Wf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(B(191, o));
        o.call(r);
      }
    }
}
var Ng = new Om.Component().refs;
function Pu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      o = Pn(e),
      i = Yt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = xn(e, i, o)),
      t !== null && ($t(t, e, o, r), hs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      o = Pn(e),
      i = Yt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = xn(e, i, o)),
      t !== null && ($t(t, e, o, r), hs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = Pn(e),
      o = Yt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = xn(e, o, r)),
      t !== null && ($t(t, e, r, n), hs(t, e, r));
  },
};
function Hf(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ni(n, r) || !ni(o, i)
      : !0
  );
}
function Kg(e, t, n) {
  var r = !1,
    o = $n,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = yt(i))
      : ((o = tt(t) ? or : ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Jr(e, o) : $n)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Gf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function Tu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ng), Gc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = yt(i))
    : ((i = tt(t) ? or : ze.current), (o.context = Jr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Pu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && xl.enqueueReplaceState(o, o.state, null),
      zs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function bo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            l === Ng && (l = o.refs = {}),
              s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function Wi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      B(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yf(e) {
  var t = e._init;
  return t(e._payload);
}
function jg(e) {
  function t(g, h) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = Tn(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, v, E) {
    return h === null || h.tag !== 6
      ? ((h = ca(v, g.mode, E)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function a(g, h, v, E) {
    var L = v.type;
    return L === Er
      ? c(g, h, v.props.children, E, v.key)
      : h !== null &&
        (h.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === cn &&
            Yf(L) === h.type))
      ? ((E = o(h, v.props)), (E.ref = bo(g, h, v)), (E.return = g), E)
      : ((E = ws(v.type, v.key, v.props, null, g.mode, E)),
        (E.ref = bo(g, h, v)),
        (E.return = g),
        E);
  }
  function u(g, h, v, E) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = da(v, g.mode, E)), (h.return = g), h)
      : ((h = o(h, v.children || [])), (h.return = g), h);
  }
  function c(g, h, v, E, L) {
    return h === null || h.tag !== 7
      ? ((h = nr(v, g.mode, E, L)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function d(g, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = ca("" + h, g.mode, v)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ii:
          return (
            (v = ws(h.type, h.key, h.props, null, g.mode, v)),
            (v.ref = bo(g, null, h)),
            (v.return = g),
            v
          );
        case Cr:
          return (h = da(h, g.mode, v)), (h.return = g), h;
        case cn:
          var E = h._init;
          return d(g, E(h._payload), v);
      }
      if (Mo(h) || ho(h))
        return (h = nr(h, g.mode, v, null)), (h.return = g), h;
      Wi(g, h);
    }
    return null;
  }
  function f(g, h, v, E) {
    var L = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return L !== null ? null : l(g, h, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ii:
          return v.key === L ? a(g, h, v, E) : null;
        case Cr:
          return v.key === L ? u(g, h, v, E) : null;
        case cn:
          return (L = v._init), f(g, h, L(v._payload), E);
      }
      if (Mo(v) || ho(v)) return L !== null ? null : c(g, h, v, E, null);
      Wi(g, v);
    }
    return null;
  }
  function m(g, h, v, E, L) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (g = g.get(v) || null), l(h, g, "" + E, L);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ii:
          return (g = g.get(E.key === null ? v : E.key) || null), a(h, g, E, L);
        case Cr:
          return (g = g.get(E.key === null ? v : E.key) || null), u(h, g, E, L);
        case cn:
          var M = E._init;
          return m(g, h, v, M(E._payload), L);
      }
      if (Mo(E) || ho(E)) return (g = g.get(v) || null), c(h, g, E, L, null);
      Wi(h, E);
    }
    return null;
  }
  function b(g, h, v, E) {
    for (
      var L = null, M = null, N = h, p = (h = 0), R = null;
      N !== null && p < v.length;
      p++
    ) {
      N.index > p ? ((R = N), (N = null)) : (R = N.sibling);
      var A = f(g, N, v[p], E);
      if (A === null) {
        N === null && (N = R);
        break;
      }
      e && N && A.alternate === null && t(g, N),
        (h = i(A, h, p)),
        M === null ? (L = A) : (M.sibling = A),
        (M = A),
        (N = R);
    }
    if (p === v.length) return n(g, N), de && Un(g, p), L;
    if (N === null) {
      for (; p < v.length; p++)
        (N = d(g, v[p], E)),
          N !== null &&
            ((h = i(N, h, p)), M === null ? (L = N) : (M.sibling = N), (M = N));
      return de && Un(g, p), L;
    }
    for (N = r(g, N); p < v.length; p++)
      (R = m(N, g, p, v[p], E)),
        R !== null &&
          (e && R.alternate !== null && N.delete(R.key === null ? p : R.key),
          (h = i(R, h, p)),
          M === null ? (L = R) : (M.sibling = R),
          (M = R));
    return (
      e &&
        N.forEach(function ($) {
          return t(g, $);
        }),
      de && Un(g, p),
      L
    );
  }
  function w(g, h, v, E) {
    var L = ho(v);
    if (typeof L != "function") throw Error(B(150));
    if (((v = L.call(v)), v == null)) throw Error(B(151));
    for (
      var M = (L = null), N = h, p = (h = 0), R = null, A = v.next();
      N !== null && !A.done;
      p++, A = v.next()
    ) {
      N.index > p ? ((R = N), (N = null)) : (R = N.sibling);
      var $ = f(g, N, A.value, E);
      if ($ === null) {
        N === null && (N = R);
        break;
      }
      e && N && $.alternate === null && t(g, N),
        (h = i($, h, p)),
        M === null ? (L = $) : (M.sibling = $),
        (M = $),
        (N = R);
    }
    if (A.done) return n(g, N), de && Un(g, p), L;
    if (N === null) {
      for (; !A.done; p++, A = v.next())
        (A = d(g, A.value, E)),
          A !== null &&
            ((h = i(A, h, p)), M === null ? (L = A) : (M.sibling = A), (M = A));
      return de && Un(g, p), L;
    }
    for (N = r(g, N); !A.done; p++, A = v.next())
      (A = m(N, g, p, A.value, E)),
        A !== null &&
          (e && A.alternate !== null && N.delete(A.key === null ? p : A.key),
          (h = i(A, h, p)),
          M === null ? (L = A) : (M.sibling = A),
          (M = A));
    return (
      e &&
        N.forEach(function (I) {
          return t(g, I);
        }),
      de && Un(g, p),
      L
    );
  }
  function P(g, h, v, E) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Er &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ii:
          e: {
            for (var L = v.key, M = h; M !== null; ) {
              if (M.key === L) {
                if (((L = v.type), L === Er)) {
                  if (M.tag === 7) {
                    n(g, M.sibling),
                      (h = o(M, v.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  M.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === cn &&
                    Yf(L) === M.type)
                ) {
                  n(g, M.sibling),
                    (h = o(M, v.props)),
                    (h.ref = bo(g, M, v)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, M);
                break;
              } else t(g, M);
              M = M.sibling;
            }
            v.type === Er
              ? ((h = nr(v.props.children, g.mode, E, v.key)),
                (h.return = g),
                (g = h))
              : ((E = ws(v.type, v.key, v.props, null, g.mode, E)),
                (E.ref = bo(g, h, v)),
                (E.return = g),
                (g = E));
          }
          return s(g);
        case Cr:
          e: {
            for (M = v.key; h !== null; ) {
              if (h.key === M)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(g, h.sibling),
                    (h = o(h, v.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = da(v, g.mode, E)), (h.return = g), (g = h);
          }
          return s(g);
        case cn:
          return (M = v._init), P(g, h, M(v._payload), E);
      }
      if (Mo(v)) return b(g, h, v, E);
      if (ho(v)) return w(g, h, v, E);
      Wi(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, v)), (h.return = g), (g = h))
          : (n(g, h), (h = ca(v, g.mode, E)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return P;
}
var to = jg(!0),
  _g = jg(!1),
  Ti = {},
  Vt = Vn(Ti),
  si = Vn(Ti),
  li = Vn(Ti);
function qn(e) {
  if (e === Ti) throw Error(B(174));
  return e;
}
function Yc(e, t) {
  switch ((le(li, t), le(si, e), le(Vt, Ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = nu(t, e));
  }
  ce(Vt), le(Vt, t);
}
function no() {
  ce(Vt), ce(si), ce(li);
}
function zg(e) {
  qn(li.current);
  var t = qn(Vt.current),
    n = nu(t, e.type);
  t !== n && (le(si, e), le(Vt, n));
}
function Xc(e) {
  si.current === e && (ce(Vt), ce(si));
}
var fe = Vn(0);
function Bs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
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
var oa = [];
function Qc() {
  for (var e = 0; e < oa.length; e++)
    oa[e]._workInProgressVersionPrimary = null;
  oa.length = 0;
}
var ms = on.ReactCurrentDispatcher,
  ia = on.ReactCurrentBatchConfig,
  sr = 0,
  he = null,
  ke = null,
  Ee = null,
  Us = !1,
  jo = !1,
  ai = 0,
  aw = 0;
function Oe() {
  throw Error(B(321));
}
function Zc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Mt(e[n], t[n])) return !1;
  return !0;
}
function qc(e, t, n, r, o, i) {
  if (
    ((sr = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ms.current = e === null || e.memoizedState === null ? fw : pw),
    (e = n(r, o)),
    jo)
  ) {
    i = 0;
    do {
      if (((jo = !1), (ai = 0), 25 <= i)) throw Error(B(301));
      (i += 1),
        (Ee = ke = null),
        (t.updateQueue = null),
        (ms.current = hw),
        (e = n(r, o));
    } while (jo);
  }
  if (
    ((ms.current = Ws),
    (t = ke !== null && ke.next !== null),
    (sr = 0),
    (Ee = ke = he = null),
    (Us = !1),
    t)
  )
    throw Error(B(300));
  return e;
}
function Jc() {
  var e = ai !== 0;
  return (ai = 0), e;
}
function At() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ee === null ? (he.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
}
function bt() {
  if (ke === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Ee === null ? he.memoizedState : Ee.next;
  if (t !== null) (Ee = t), (ke = e);
  else {
    if (e === null) throw Error(B(310));
    (ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Ee === null ? (he.memoizedState = Ee = e) : (Ee = Ee.next = e);
  }
  return Ee;
}
function ui(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sa(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = ke,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((sr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (he.lanes |= c),
          (lr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      Mt(r, t.memoizedState) || (qe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (he.lanes |= i), (lr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function la(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Mt(i, t.memoizedState) || (qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Bg() {}
function Ug(e, t) {
  var n = he,
    r = bt(),
    o = t(),
    i = !Mt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (qe = !0)),
    (r = r.queue),
    ed(Gg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ci(9, Hg.bind(null, n, r, o, t), void 0, null),
      $e === null)
    )
      throw Error(B(349));
    sr & 30 || Wg(n, t, o);
  }
  return o;
}
function Wg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yg(t) && Xg(e);
}
function Gg(e, t, n) {
  return n(function () {
    Yg(t) && Xg(e);
  });
}
function Yg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Mt(e, n);
  } catch {
    return !0;
  }
}
function Xg(e) {
  var t = en(e, 1);
  t !== null && $t(t, e, 1, -1);
}
function Xf(e) {
  var t = At();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ui,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dw.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function ci(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qg() {
  return bt().memoizedState;
}
function gs(e, t, n, r) {
  var o = At();
  (he.flags |= e),
    (o.memoizedState = ci(1 | t, n, void 0, r === void 0 ? null : r));
}
function Sl(e, t, n, r) {
  var o = bt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var s = ke.memoizedState;
    if (((i = s.destroy), r !== null && Zc(r, s.deps))) {
      o.memoizedState = ci(t, n, i, r);
      return;
    }
  }
  (he.flags |= e), (o.memoizedState = ci(1 | t, n, i, r));
}
function Qf(e, t) {
  return gs(8390656, 8, e, t);
}
function ed(e, t) {
  return Sl(2048, 8, e, t);
}
function Zg(e, t) {
  return Sl(4, 2, e, t);
}
function qg(e, t) {
  return Sl(4, 4, e, t);
}
function Jg(e, t) {
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
function ev(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Sl(4, 4, Jg.bind(null, t, e), n)
  );
}
function td() {}
function tv(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function nv(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rv(e, t, n) {
  return sr & 21
    ? (Mt(n, t) || ((n = sg()), (he.lanes |= n), (lr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
}
function uw(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ia.transition;
  ia.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (ia.transition = r);
  }
}
function ov() {
  return bt().memoizedState;
}
function cw(e, t, n) {
  var r = Pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    iv(e))
  )
    sv(t, n);
  else if (((n = Og(e, t, n, r)), n !== null)) {
    var o = We();
    $t(n, e, r, o), lv(n, t, r);
  }
}
function dw(e, t, n) {
  var r = Pn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (iv(e)) sv(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Mt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Hc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Og(e, t, o, r)),
      n !== null && ((o = We()), $t(n, e, r, o), lv(n, t, r));
  }
}
function iv(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function sv(e, t) {
  jo = Us = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ac(e, n);
  }
}
var Ws = {
    readContext: yt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  fw = {
    readContext: yt,
    useCallback: function (e, t) {
      return (At().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: yt,
    useEffect: Qf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        gs(4194308, 4, Jg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return gs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return gs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = At();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = At();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cw.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = At();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Xf,
    useDebugValue: td,
    useDeferredValue: function (e) {
      return (At().memoizedState = e);
    },
    useTransition: function () {
      var e = Xf(!1),
        t = e[0];
      return (e = uw.bind(null, e[1])), (At().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        o = At();
      if (de) {
        if (n === void 0) throw Error(B(407));
        n = n();
      } else {
        if (((n = t()), $e === null)) throw Error(B(349));
        sr & 30 || Wg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Qf(Gg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ci(9, Hg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = At(),
        t = $e.identifierPrefix;
      if (de) {
        var n = Ht,
          r = Wt;
        (n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ai++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = aw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pw = {
    readContext: yt,
    useCallback: tv,
    useContext: yt,
    useEffect: ed,
    useImperativeHandle: ev,
    useInsertionEffect: Zg,
    useLayoutEffect: qg,
    useMemo: nv,
    useReducer: sa,
    useRef: Qg,
    useState: function () {
      return sa(ui);
    },
    useDebugValue: td,
    useDeferredValue: function (e) {
      var t = bt();
      return rv(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = sa(ui)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Bg,
    useSyncExternalStore: Ug,
    useId: ov,
    unstable_isNewReconciler: !1,
  },
  hw = {
    readContext: yt,
    useCallback: tv,
    useContext: yt,
    useEffect: ed,
    useImperativeHandle: ev,
    useInsertionEffect: Zg,
    useLayoutEffect: qg,
    useMemo: nv,
    useReducer: la,
    useRef: Qg,
    useState: function () {
      return la(ui);
    },
    useDebugValue: td,
    useDeferredValue: function (e) {
      var t = bt();
      return ke === null ? (t.memoizedState = e) : rv(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = la(ui)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Bg,
    useSyncExternalStore: Ug,
    useId: ov,
    unstable_isNewReconciler: !1,
  };
function ro(e, t) {
  try {
    var n = "",
      r = t;
    do (n += zb(r)), (r = r.return);
    while (r);
    var o = n;
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
function aa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ku(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mw = typeof WeakMap == "function" ? WeakMap : Map;
function av(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Gs || ((Gs = !0), (Vu = r)), ku(e, t);
    }),
    n
  );
}
function uv(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ku(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ku(e, t),
          typeof r != "function" &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Zf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Mw.bind(null, e, t, n)), t.then(e, e));
}
function qf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Jf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yt(-1, 1)), (t.tag = 2), xn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gw = on.ReactCurrentOwner,
  qe = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? _g(t, null, n, r) : to(t, e.child, n, r);
}
function ep(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Xr(t, o),
    (r = qc(e, t, n, r, i, o)),
    (n = Jc()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tn(e, t, o))
      : (de && n && jc(t), (t.flags |= 1), Ue(e, t, r, o), t.child)
  );
}
function tp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ud(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), cv(e, t, i, r, o))
      : ((e = ws(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ni), n(s, r) && e.ref === t.ref)
    )
      return tn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Tn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ni(i, r) && e.ref === t.ref)
      if (((qe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (qe = !0);
      else return (t.lanes = e.lanes), tn(e, t, o);
  }
  return Cu(e, t, n, r, o);
}
function dv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(Fr, ot),
        (ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(Fr, ot),
          (ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        le(Fr, ot),
        (ot |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(Fr, ot),
      (ot |= r);
  return Ue(e, t, o, n), t.child;
}
function fv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cu(e, t, n, r, o) {
  var i = tt(n) ? or : ze.current;
  return (
    (i = Jr(t, i)),
    Xr(t, o),
    (n = qc(e, t, n, r, i, o)),
    (r = Jc()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tn(e, t, o))
      : (de && r && jc(t), (t.flags |= 1), Ue(e, t, n, o), t.child)
  );
}
function np(e, t, n, r, o) {
  if (tt(n)) {
    var i = !0;
    Fs(t);
  } else i = !1;
  if ((Xr(t, o), t.stateNode === null))
    vs(e, t), Kg(t, n, r), Tu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = yt(u))
      : ((u = tt(n) ? or : ze.current), (u = Jr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Gf(t, s, r, u)),
      (dn = !1);
    var f = t.memoizedState;
    (s.state = f),
      zs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || et.current || dn
        ? (typeof c == "function" && (Pu(t, n, c, r), (a = t.memoizedState)),
          (l = dn || Hf(t, n, l, r, f, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Fg(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : St(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = yt(a))
        : ((a = tt(n) ? or : ze.current), (a = Jr(t, a)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && Gf(t, s, r, a)),
      (dn = !1),
      (f = t.memoizedState),
      (s.state = f),
      zs(t, r, s, o);
    var b = t.memoizedState;
    l !== d || f !== b || et.current || dn
      ? (typeof m == "function" && (Pu(t, n, m, r), (b = t.memoizedState)),
        (u = dn || Hf(t, n, u, r, f, b, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, b, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, b, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (s.props = r),
        (s.state = b),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Eu(e, t, n, r, i, o);
}
function Eu(e, t, n, r, o, i) {
  fv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && _f(t, n, !1), tn(e, t, i);
  (r = t.stateNode), (gw.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = to(t, e.child, null, i)), (t.child = to(t, null, l, i)))
      : Ue(e, t, l, i),
    (t.memoizedState = r.state),
    o && _f(t, n, !0),
    t.child
  );
}
function pv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? jf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && jf(e, t.context, !1),
    Yc(e, t.containerInfo);
}
function rp(e, t, n, r, o) {
  return eo(), zc(o), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var $u = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function hv(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    le(fe, o & 1),
    e === null)
  )
    return (
      xu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = kl(s, r, 0, null)),
              (e = nr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Mu(n)),
              (t.memoizedState = $u),
              e)
            : nd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return vw(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Tn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Tn(l, i)) : ((i = nr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Mu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = $u),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Tn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nd(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hi(e, t, n, r) {
  return (
    r !== null && zc(r),
    to(t, e.child, null, n),
    (e = nd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = aa(Error(B(422)))), Hi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = kl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = nr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && to(t, e.child, null, s),
        (t.child.memoizedState = Mu(s)),
        (t.memoizedState = $u),
        i);
  if (!(t.mode & 1)) return Hi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(B(419))), (r = aa(i, r, void 0)), Hi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), qe || l)) {
    if (((r = $e), r !== null)) {
      switch (s & -s) {
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
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), en(e, o), $t(r, e, o, -1));
    }
    return ad(), (r = aa(Error(B(421)))), Hi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (it = wn(o.nextSibling)),
      (st = t),
      (de = !0),
      (kt = null),
      e !== null &&
        ((pt[ht++] = Wt),
        (pt[ht++] = Ht),
        (pt[ht++] = ir),
        (Wt = e.id),
        (Ht = e.overflow),
        (ir = t)),
      (t = nd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function op(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Su(e.return, t, n);
}
function ua(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function mv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ue(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && op(e, n, t);
        else if (e.tag === 19) op(e, n, t);
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
    r &= 1;
  }
  if ((le(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Bs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ua(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Bs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ua(t, !0, n, null, i);
        break;
      case "together":
        ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (lr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yw(e, t, n) {
  switch (t.tag) {
    case 3:
      pv(t), eo();
      break;
    case 5:
      zg(t);
      break;
    case 1:
      tt(t.type) && Fs(t);
      break;
    case 4:
      Yc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      le(js, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? hv(e, t, n)
          : (le(fe, fe.current & 1),
            (e = tn(e, t, n)),
            e !== null ? e.sibling : null);
      le(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        le(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), dv(e, t, n);
  }
  return tn(e, t, n);
}
var gv, Lu, vv, yv;
gv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Lu = function () {};
vv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), qn(Vt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = qa(e, o)), (r = qa(e, r)), (i = []);
        break;
      case "select":
        (o = me({}, o, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = tu(e, o)), (r = tu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vs);
    }
    ru(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Xo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Xo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ue("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
yv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wo(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bw(e, t, n) {
  var r = t.pendingProps;
  switch ((_c(t), t.tag)) {
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
      return Fe(t), null;
    case 1:
      return tt(t.type) && Os(), Fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        no(),
        ce(et),
        ce(ze),
        Qc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ui(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (Nu(kt), (kt = null)))),
        Lu(e, t),
        Fe(t),
        null
      );
    case 5:
      Xc(t);
      var o = qn(li.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return Fe(t), null;
        }
        if (((e = qn(Vt.current)), Ui(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Rt] = t), (r[ii] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Do.length; o++) ue(Do[o], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              pf(r, i), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              mf(r, i), ue("invalid", r);
          }
          ru(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Xo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              Vi(r), hf(r, i, !0);
              break;
            case "textarea":
              Vi(r), gf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Vs);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Rt] = t),
            (e[ii] = r),
            gv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ou(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Do.length; o++) ue(Do[o], e);
                o = r;
                break;
              case "source":
                ue("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (o = r);
                break;
              case "details":
                ue("toggle", e), (o = r);
                break;
              case "input":
                pf(e, r), (o = qa(e, r)), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = me({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                mf(e, r), (o = tu(e, r)), ue("invalid", e);
                break;
              default:
                o = r;
            }
            ru(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Ym(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Hm(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Qo(e, a)
                    : typeof a == "number" && Qo(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Xo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && ue("scroll", e)
                      : a != null && Cc(e, i, a, s));
              }
            switch (n) {
              case "input":
                Vi(e), hf(e, r, !1);
                break;
              case "textarea":
                Vi(e), gf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + En(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Vs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) yv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
        if (((n = qn(li.current)), qn(Vt.current), Ui(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Rt] = t),
            (i = r.nodeValue !== n) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Rt] = t),
            (t.stateNode = r);
      }
      return Fe(t), null;
    case 13:
      if (
        (ce(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && it !== null && t.mode & 1 && !(t.flags & 128))
          Vg(), eo(), (t.flags |= 98560), (i = !1);
        else if (((i = Ui(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(B(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(B(317));
            i[Rt] = t;
          } else
            eo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Fe(t), (i = !1);
        } else kt !== null && (Nu(kt), (kt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Ce === 0 && (Ce = 3) : ad())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return (
        no(), Lu(e, t), e === null && ri(t.stateNode.containerInfo), Fe(t), null
      );
    case 10:
      return Wc(t.type._context), Fe(t), null;
    case 17:
      return tt(t.type) && Os(), Fe(t), null;
    case 19:
      if ((ce(fe), (i = t.memoizedState), i === null)) return Fe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) wo(i, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    wo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            we() > oo &&
            ((t.flags |= 128), (r = !0), wo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !de)
            )
              return Fe(t), null;
          } else
            2 * we() - i.renderingStartTime > oo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = we()),
          (t.sibling = null),
          (n = fe.current),
          le(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        ld(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function ww(e, t) {
  switch ((_c(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && Os(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        no(),
        ce(et),
        ce(ze),
        Qc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xc(t), null;
    case 13:
      if (
        (ce(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(B(340));
        eo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(fe), null;
    case 4:
      return no(), null;
    case 10:
      return Wc(t.type._context), null;
    case 22:
    case 23:
      return ld(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gi = !1,
  Ke = !1,
  xw = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function Or(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function Du(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var ip = !1;
function Sw(e, t) {
  if (((hu = As), (e = Sg()), Kc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (l = s),
                f === i && ++c === r && (a = s),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (mu = { focusedElem: e, selectionRange: n }, As = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var w = b.memoizedProps,
                    P = b.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : St(t.type, w),
                      P
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(B(163));
            }
        } catch (E) {
          ge(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (b = ip), (ip = !1), b;
}
function _o(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Du(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Au(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Rt], delete t[ii], delete t[yu], delete t[ow], delete t[iw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ru(e, t, n), e = e.sibling; e !== null; ) Ru(e, t, n), (e = e.sibling);
}
function Iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Iu(e, t, n), e = e.sibling; e !== null; ) Iu(e, t, n), (e = e.sibling);
}
var Le = null,
  Pt = !1;
function sn(e, t, n) {
  for (n = n.child; n !== null; ) xv(e, t, n), (n = n.sibling);
}
function xv(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function")
    try {
      It.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ke || Or(n, t);
    case 6:
      var r = Le,
        o = Pt;
      (Le = null),
        sn(e, t, n),
        (Le = r),
        (Pt = o),
        Le !== null &&
          (Pt
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode));
      break;
    case 18:
      Le !== null &&
        (Pt
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? na(e.parentNode, n)
              : e.nodeType === 1 && na(e, n),
            ei(e))
          : na(Le, n.stateNode));
      break;
    case 4:
      (r = Le),
        (o = Pt),
        (Le = n.stateNode.containerInfo),
        (Pt = !0),
        sn(e, t, n),
        (Le = r),
        (Pt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Du(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      sn(e, t, n);
      break;
    case 1:
      if (
        !Ke &&
        (Or(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ge(n, t, l);
        }
      sn(e, t, n);
      break;
    case 21:
      sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ke = (r = Ke) || n.memoizedState !== null), sn(e, t, n), (Ke = r))
        : sn(e, t, n);
      break;
    default:
      sn(e, t, n);
  }
}
function lp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xw()),
      t.forEach(function (r) {
        var o = Dw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Le = l.stateNode), (Pt = !1);
              break e;
            case 3:
              (Le = l.stateNode.containerInfo), (Pt = !0);
              break e;
            case 4:
              (Le = l.stateNode.containerInfo), (Pt = !0);
              break e;
          }
          l = l.return;
        }
        if (Le === null) throw Error(B(160));
        xv(i, s, o), (Le = null), (Pt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        ge(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sv(t, e), (t = t.sibling);
}
function Sv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((wt(t, e), Dt(e), r & 4)) {
        try {
          _o(3, e, e.return), Pl(3, e);
        } catch (w) {
          ge(e, e.return, w);
        }
        try {
          _o(5, e, e.return);
        } catch (w) {
          ge(e, e.return, w);
        }
      }
      break;
    case 1:
      wt(t, e), Dt(e), r & 512 && n !== null && Or(n, n.return);
      break;
    case 5:
      if (
        (wt(t, e),
        Dt(e),
        r & 512 && n !== null && Or(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Qo(o, "");
        } catch (w) {
          ge(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Bm(o, i),
              ou(l, s);
            var u = ou(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1];
              c === "style"
                ? Ym(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Hm(o, d)
                : c === "children"
                ? Qo(o, d)
                : Cc(o, c, d, u);
            }
            switch (l) {
              case "input":
                Ja(o, i);
                break;
              case "textarea":
                Um(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Wr(o, !!i.multiple, m, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wr(o, !!i.multiple, i.defaultValue, !0)
                      : Wr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ii] = i;
          } catch (w) {
            ge(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((wt(t, e), Dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(B(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          ge(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (wt(t, e), Dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ei(t.containerInfo);
        } catch (w) {
          ge(e, e.return, w);
        }
      break;
    case 4:
      wt(t, e), Dt(e);
      break;
    case 13:
      wt(t, e),
        Dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (id = we())),
        r & 4 && lp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ke = (u = Ke) || c), wt(t, e), (Ke = u)) : wt(t, e),
        Dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (W = e, c = e.child; c !== null; ) {
            for (d = W = c; W !== null; ) {
              switch (((f = W), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, f, f.return);
                  break;
                case 1:
                  Or(f, f.return);
                  var b = f.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (w) {
                      ge(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Or(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    up(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (W = m)) : up(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Gm("display", s)));
              } catch (w) {
                ge(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                ge(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      wt(t, e), Dt(e), r & 4 && lp(e);
      break;
    case 21:
      break;
    default:
      wt(t, e), Dt(e);
  }
}
function Dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Qo(o, ""), (r.flags &= -33));
          var i = sp(e);
          Iu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = sp(e);
          Ru(e, l, s);
          break;
        default:
          throw Error(B(161));
      }
    } catch (a) {
      ge(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pw(e, t, n) {
  (W = e), Pv(e);
}
function Pv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Gi;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Ke;
        l = Gi;
        var u = Ke;
        if (((Gi = s), (Ke = a) && !u))
          for (W = o; W !== null; )
            (s = W),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? cp(o)
                : a !== null
                ? ((a.return = s), (W = a))
                : cp(o);
        for (; i !== null; ) (W = i), Pv(i), (i = i.sibling);
        (W = o), (Gi = l), (Ke = u);
      }
      ap(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (W = i)) : ap(e);
  }
}
function ap(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ke || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : St(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Wf(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ei(d);
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
              throw Error(B(163));
          }
        Ke || (t.flags & 512 && Au(t));
      } catch (f) {
        ge(t, t.return, f);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function up(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function cp(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (a) {
            ge(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ge(t, o, a);
            }
          }
          var i = t.return;
          try {
            Au(t);
          } catch (a) {
            ge(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Au(t);
          } catch (a) {
            ge(t, s, a);
          }
      }
    } catch (a) {
      ge(t, t.return, a);
    }
    if (t === e) {
      W = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (W = l);
      break;
    }
    W = t.return;
  }
}
var Tw = Math.ceil,
  Hs = on.ReactCurrentDispatcher,
  rd = on.ReactCurrentOwner,
  vt = on.ReactCurrentBatchConfig,
  ne = 0,
  $e = null,
  Te = null,
  Re = 0,
  ot = 0,
  Fr = Vn(0),
  Ce = 0,
  di = null,
  lr = 0,
  Tl = 0,
  od = 0,
  zo = null,
  Qe = null,
  id = 0,
  oo = 1 / 0,
  Bt = null,
  Gs = !1,
  Vu = null,
  Sn = null,
  Yi = !1,
  gn = null,
  Ys = 0,
  Bo = 0,
  Ou = null,
  ys = -1,
  bs = 0;
function We() {
  return ne & 6 ? we() : ys !== -1 ? ys : (ys = we());
}
function Pn(e) {
  return e.mode & 1
    ? ne & 2 && Re !== 0
      ? Re & -Re
      : lw.transition !== null
      ? (bs === 0 && (bs = sg()), bs)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pg(e.type))),
        e)
    : 1;
}
function $t(e, t, n, r) {
  if (50 < Bo) throw ((Bo = 0), (Ou = null), Error(B(185)));
  xi(e, n, r),
    (!(ne & 2) || e !== $e) &&
      (e === $e && (!(ne & 2) && (Tl |= n), Ce === 4 && hn(e, Re)),
      nt(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((oo = we() + 500), wl && On()));
}
function nt(e, t) {
  var n = e.callbackNode;
  l1(e, t);
  var r = Ds(e, e === $e ? Re : 0);
  if (r === 0)
    n !== null && bf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bf(n), t === 1))
      e.tag === 0 ? sw(dp.bind(null, e)) : Ag(dp.bind(null, e)),
        nw(function () {
          !(ne & 6) && On();
        }),
        (n = null);
    else {
      switch (lg(r)) {
        case 1:
          n = Dc;
          break;
        case 4:
          n = og;
          break;
        case 16:
          n = Ls;
          break;
        case 536870912:
          n = ig;
          break;
        default:
          n = Ls;
      }
      n = Dv(n, Tv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tv(e, t) {
  if (((ys = -1), (bs = 0), ne & 6)) throw Error(B(327));
  var n = e.callbackNode;
  if (Qr() && e.callbackNode !== n) return null;
  var r = Ds(e, e === $e ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xs(e, r);
  else {
    t = r;
    var o = ne;
    ne |= 2;
    var i = Cv();
    ($e !== e || Re !== t) && ((Bt = null), (oo = we() + 500), tr(e, t));
    do
      try {
        Ew();
        break;
      } catch (l) {
        kv(e, l);
      }
    while (!0);
    Uc(),
      (Hs.current = i),
      (ne = o),
      Te !== null ? (t = 0) : (($e = null), (Re = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = uu(e)), o !== 0 && ((r = o), (t = Fu(e, o)))), t === 1)
    )
      throw ((n = di), tr(e, 0), hn(e, r), nt(e, we()), n);
    if (t === 6) hn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !kw(o) &&
          ((t = Xs(e, r)),
          t === 2 && ((i = uu(e)), i !== 0 && ((r = i), (t = Fu(e, i)))),
          t === 1))
      )
        throw ((n = di), tr(e, 0), hn(e, r), nt(e, we()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          Wn(e, Qe, Bt);
          break;
        case 3:
          if (
            (hn(e, r), (r & 130023424) === r && ((t = id + 500 - we()), 10 < t))
          ) {
            if (Ds(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = vu(Wn.bind(null, e, Qe, Bt), t);
            break;
          }
          Wn(e, Qe, Bt);
          break;
        case 4:
          if ((hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Et(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Tw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vu(Wn.bind(null, e, Qe, Bt), r);
            break;
          }
          Wn(e, Qe, Bt);
          break;
        case 5:
          Wn(e, Qe, Bt);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return nt(e, we()), e.callbackNode === n ? Tv.bind(null, e) : null;
}
function Fu(e, t) {
  var n = zo;
  return (
    e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256),
    (e = Xs(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && Nu(t)),
    e
  );
}
function Nu(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function kw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Mt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function hn(e, t) {
  for (
    t &= ~od,
      t &= ~Tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function dp(e) {
  if (ne & 6) throw Error(B(327));
  Qr();
  var t = Ds(e, 0);
  if (!(t & 1)) return nt(e, we()), null;
  var n = Xs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = uu(e);
    r !== 0 && ((t = r), (n = Fu(e, r)));
  }
  if (n === 1) throw ((n = di), tr(e, 0), hn(e, t), nt(e, we()), n);
  if (n === 6) throw Error(B(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wn(e, Qe, Bt),
    nt(e, we()),
    null
  );
}
function sd(e, t) {
  var n = ne;
  ne |= 1;
  try {
    return e(t);
  } finally {
    (ne = n), ne === 0 && ((oo = we() + 500), wl && On());
  }
}
function ar(e) {
  gn !== null && gn.tag === 0 && !(ne & 6) && Qr();
  var t = ne;
  ne |= 1;
  var n = vt.transition,
    r = oe;
  try {
    if (((vt.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (vt.transition = n), (ne = t), !(ne & 6) && On();
  }
}
function ld() {
  (ot = Fr.current), ce(Fr);
}
function tr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tw(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((_c(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Os();
          break;
        case 3:
          no(), ce(et), ce(ze), Qc();
          break;
        case 5:
          Xc(r);
          break;
        case 4:
          no();
          break;
        case 13:
          ce(fe);
          break;
        case 19:
          ce(fe);
          break;
        case 10:
          Wc(r.type._context);
          break;
        case 22:
        case 23:
          ld();
      }
      n = n.return;
    }
  if (
    (($e = e),
    (Te = e = Tn(e.current, null)),
    (Re = ot = t),
    (Ce = 0),
    (di = null),
    (od = Tl = lr = 0),
    (Qe = zo = null),
    Zn !== null)
  ) {
    for (t = 0; t < Zn.length; t++)
      if (((n = Zn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Zn = null;
  }
  return e;
}
function kv(e, t) {
  do {
    var n = Te;
    try {
      if ((Uc(), (ms.current = Ws), Us)) {
        for (var r = he.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Us = !1;
      }
      if (
        ((sr = 0),
        (Ee = ke = he = null),
        (jo = !1),
        (ai = 0),
        (rd.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (di = t), (Te = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Re),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = qf(s);
          if (m !== null) {
            (m.flags &= -257),
              Jf(m, s, l, i, t),
              m.mode & 1 && Zf(i, u, t),
              (t = m),
              (a = u);
            var b = t.updateQueue;
            if (b === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else b.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zf(i, u, t), ad();
              break e;
            }
            a = Error(B(426));
          }
        } else if (de && l.mode & 1) {
          var P = qf(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Jf(P, s, l, i, t),
              zc(ro(a, l));
            break e;
          }
        }
        (i = a = ro(a, l)),
          Ce !== 4 && (Ce = 2),
          zo === null ? (zo = [i]) : zo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = av(i, a, t);
              Uf(i, g);
              break e;
            case 1:
              l = a;
              var h = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Sn === null || !Sn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = uv(i, l, t);
                Uf(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $v(n);
    } catch (L) {
      (t = L), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cv() {
  var e = Hs.current;
  return (Hs.current = Ws), e === null ? Ws : e;
}
function ad() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    $e === null || (!(lr & 268435455) && !(Tl & 268435455)) || hn($e, Re);
}
function Xs(e, t) {
  var n = ne;
  ne |= 2;
  var r = Cv();
  ($e !== e || Re !== t) && ((Bt = null), tr(e, t));
  do
    try {
      Cw();
      break;
    } catch (o) {
      kv(e, o);
    }
  while (!0);
  if ((Uc(), (ne = n), (Hs.current = r), Te !== null)) throw Error(B(261));
  return ($e = null), (Re = 0), Ce;
}
function Cw() {
  for (; Te !== null; ) Ev(Te);
}
function Ew() {
  for (; Te !== null && !qb(); ) Ev(Te);
}
function Ev(e) {
  var t = Lv(e.alternate, e, ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? $v(e) : (Te = t),
    (rd.current = null);
}
function $v(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ww(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (Te = null);
        return;
      }
    } else if (((n = bw(n, t, ot)), n !== null)) {
      Te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function Wn(e, t, n) {
  var r = oe,
    o = vt.transition;
  try {
    (vt.transition = null), (oe = 1), $w(e, t, n, r);
  } finally {
    (vt.transition = o), (oe = r);
  }
  return null;
}
function $w(e, t, n, r) {
  do Qr();
  while (gn !== null);
  if (ne & 6) throw Error(B(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(B(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (a1(e, i),
    e === $e && ((Te = $e = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yi ||
      ((Yi = !0),
      Dv(Ls, function () {
        return Qr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = vt.transition), (vt.transition = null);
    var s = oe;
    oe = 1;
    var l = ne;
    (ne |= 4),
      (rd.current = null),
      Sw(e, n),
      Sv(n, e),
      Y1(mu),
      (As = !!hu),
      (mu = hu = null),
      (e.current = n),
      Pw(n),
      Jb(),
      (ne = l),
      (oe = s),
      (vt.transition = i);
  } else e.current = n;
  if (
    (Yi && ((Yi = !1), (gn = e), (Ys = o)),
    (i = e.pendingLanes),
    i === 0 && (Sn = null),
    n1(n.stateNode),
    nt(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Gs) throw ((Gs = !1), (e = Vu), (Vu = null), e);
  return (
    Ys & 1 && e.tag !== 0 && Qr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ou ? Bo++ : ((Bo = 0), (Ou = e))) : (Bo = 0),
    On(),
    null
  );
}
function Qr() {
  if (gn !== null) {
    var e = lg(Ys),
      t = vt.transition,
      n = oe;
    try {
      if (((vt.transition = null), (oe = 16 > e ? 16 : e), gn === null))
        var r = !1;
      else {
        if (((e = gn), (gn = null), (Ys = 0), ne & 6)) throw Error(B(331));
        var o = ne;
        for (ne |= 4, W = e.current; W !== null; ) {
          var i = W,
            s = i.child;
          if (W.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (W = u; W !== null; ) {
                  var c = W;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (W = d);
                  else
                    for (; W !== null; ) {
                      c = W;
                      var f = c.sibling,
                        m = c.return;
                      if ((bv(c), c === u)) {
                        W = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (W = f);
                        break;
                      }
                      W = m;
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var w = b.child;
                if (w !== null) {
                  b.child = null;
                  do {
                    var P = w.sibling;
                    (w.sibling = null), (w = P);
                  } while (w !== null);
                }
              }
              W = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (W = s);
          else
            e: for (; W !== null; ) {
              if (((i = W), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _o(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (W = g);
                break e;
              }
              W = i.return;
            }
        }
        var h = e.current;
        for (W = h; W !== null; ) {
          s = W;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (W = v);
          else
            e: for (s = h; W !== null; ) {
              if (((l = W), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, l);
                  }
                } catch (L) {
                  ge(l, l.return, L);
                }
              if (l === s) {
                W = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (W = E);
                break e;
              }
              W = l.return;
            }
        }
        if (
          ((ne = o), On(), It && typeof It.onPostCommitFiberRoot == "function")
        )
          try {
            It.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (vt.transition = t);
    }
  }
  return !1;
}
function fp(e, t, n) {
  (t = ro(n, t)),
    (t = av(e, t, 1)),
    (e = xn(e, t, 1)),
    (t = We()),
    e !== null && (xi(e, 1, t), nt(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) fp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = ro(n, e)),
            (e = uv(t, e, 1)),
            (t = xn(t, e, 1)),
            (e = We()),
            t !== null && (xi(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Mw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    $e === e &&
      (Re & n) === n &&
      (Ce === 4 || (Ce === 3 && (Re & 130023424) === Re && 500 > we() - id)
        ? tr(e, 0)
        : (od |= n)),
    nt(e, t);
}
function Mv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ni), (Ni <<= 1), !(Ni & 130023424) && (Ni = 4194304))
      : (t = 1));
  var n = We();
  (e = en(e, t)), e !== null && (xi(e, t, n), nt(e, n));
}
function Lw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mv(e, n);
}
function Dw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), Mv(e, n);
}
var Lv;
Lv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), yw(e, t, n);
      qe = !!(e.flags & 131072);
    }
  else (qe = !1), de && t.flags & 1048576 && Rg(t, Ks, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      vs(e, t), (e = t.pendingProps);
      var o = Jr(t, ze.current);
      Xr(t, n), (o = qc(null, t, r, e, o, n));
      var i = Jc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(r) ? ((i = !0), Fs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Gc(t),
            (o.updater = xl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Tu(t, r, e, n),
            (t = Eu(null, t, r, !0, i, n)))
          : ((t.tag = 0), de && i && jc(t), Ue(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (vs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Rw(r)),
          (e = St(r, e)),
          o)
        ) {
          case 0:
            t = Cu(null, t, r, e, n);
            break e;
          case 1:
            t = np(null, t, r, e, n);
            break e;
          case 11:
            t = ep(null, t, r, e, n);
            break e;
          case 14:
            t = tp(null, t, r, St(r.type, e), n);
            break e;
        }
        throw Error(B(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        Cu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        np(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((pv(t), e === null)) throw Error(B(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Fg(e, t),
          zs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ro(Error(B(423)), t)), (t = rp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ro(Error(B(424)), t)), (t = rp(e, t, r, n, o));
            break e;
          } else
            for (
              it = wn(t.stateNode.containerInfo.firstChild),
                st = t,
                de = !0,
                kt = null,
                n = _g(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((eo(), r === o)) {
            t = tn(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zg(t),
        e === null && xu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        gu(r, o) ? (s = null) : i !== null && gu(r, i) && (t.flags |= 32),
        fv(e, t),
        Ue(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && xu(t), null;
    case 13:
      return hv(e, t, n);
    case 4:
      return (
        Yc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = to(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        ep(e, t, r, o, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          le(js, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Mt(i.value, s)) {
            if (i.children === o.children && !et.current) {
              t = tn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Yt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Su(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(B(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Su(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ue(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Xr(t, n),
        (o = yt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = St(r, t.pendingProps)),
        (o = St(r.type, o)),
        tp(e, t, r, o, n)
      );
    case 15:
      return cv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        vs(e, t),
        (t.tag = 1),
        tt(r) ? ((e = !0), Fs(t)) : (e = !1),
        Xr(t, n),
        Kg(t, r, o),
        Tu(t, r, o, n),
        Eu(null, t, r, !0, e, n)
      );
    case 19:
      return mv(e, t, n);
    case 22:
      return dv(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function Dv(e, t) {
  return rg(e, t);
}
function Aw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function gt(e, t, n, r) {
  return new Aw(e, t, n, r);
}
function ud(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Rw(e) {
  if (typeof e == "function") return ud(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $c)) return 11;
    if (e === Mc) return 14;
  }
  return 2;
}
function Tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ws(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) ud(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Er:
        return nr(n.children, o, i, t);
      case Ec:
        (s = 8), (o |= 8);
        break;
      case Ya:
        return (
          (e = gt(12, n, t, o | 2)), (e.elementType = Ya), (e.lanes = i), e
        );
      case Xa:
        return (e = gt(13, n, t, o)), (e.elementType = Xa), (e.lanes = i), e;
      case Qa:
        return (e = gt(19, n, t, o)), (e.elementType = Qa), (e.lanes = i), e;
      case jm:
        return kl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nm:
              s = 10;
              break e;
            case Km:
              s = 9;
              break e;
            case $c:
              s = 11;
              break e;
            case Mc:
              s = 14;
              break e;
            case cn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(B(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = gt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function nr(e, t, n, r) {
  return (e = gt(7, e, r, t)), (e.lanes = n), e;
}
function kl(e, t, n, r) {
  return (
    (e = gt(22, e, r, t)),
    (e.elementType = jm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ca(e, t, n) {
  return (e = gt(6, e, null, t)), (e.lanes = n), e;
}
function da(e, t, n) {
  return (
    (t = gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Iw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wl(0)),
    (this.expirationTimes = Wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function cd(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Iw(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = gt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gc(i),
    e
  );
}
function Vw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Av(e) {
  if (!e) return $n;
  e = e._reactInternals;
  e: {
    if (dr(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return Dg(e, n, t);
  }
  return t;
}
function Rv(e, t, n, r, o, i, s, l, a) {
  return (
    (e = cd(n, r, !0, e, o, i, s, l, a)),
    (e.context = Av(null)),
    (n = e.current),
    (r = We()),
    (o = Pn(n)),
    (i = Yt(r, o)),
    (i.callback = t ?? null),
    xn(n, i, o),
    (e.current.lanes = o),
    xi(e, o, r),
    nt(e, r),
    e
  );
}
function Cl(e, t, n, r) {
  var o = t.current,
    i = We(),
    s = Pn(o);
  return (
    (n = Av(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xn(o, t, s)),
    e !== null && ($t(e, o, s, i), hs(e, o, s)),
    s
  );
}
function Qs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dd(e, t) {
  pp(e, t), (e = e.alternate) && pp(e, t);
}
function Ow() {
  return null;
}
var Iv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fd(e) {
  this._internalRoot = e;
}
El.prototype.render = fd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  Cl(e, t, null, null);
};
El.prototype.unmount = fd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ar(function () {
      Cl(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && fg(e);
  }
};
function pd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hp() {}
function Fw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Qs(s);
        i.call(u);
      };
    }
    var s = Rv(t, r, e, 0, null, !1, !1, "", hp);
    return (
      (e._reactRootContainer = s),
      (e[Jt] = s.current),
      ri(e.nodeType === 8 ? e.parentNode : e),
      ar(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Qs(a);
      l.call(u);
    };
  }
  var a = cd(e, 0, !1, null, null, !1, !1, "", hp);
  return (
    (e._reactRootContainer = a),
    (e[Jt] = a.current),
    ri(e.nodeType === 8 ? e.parentNode : e),
    ar(function () {
      Cl(t, a, n, r);
    }),
    a
  );
}
function Ml(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Qs(s);
        l.call(a);
      };
    }
    Cl(t, s, e, o);
  } else s = Fw(n, t, e, o, r);
  return Qs(s);
}
ag = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lo(t.pendingLanes);
        n !== 0 &&
          (Ac(t, n | 1), nt(t, we()), !(ne & 6) && ((oo = we() + 500), On()));
      }
      break;
    case 13:
      ar(function () {
        var r = en(e, 1);
        if (r !== null) {
          var o = We();
          $t(r, e, 1, o);
        }
      }),
        dd(e, 1);
  }
};
Rc = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = We();
      $t(t, e, 134217728, n);
    }
    dd(e, 134217728);
  }
};
ug = function (e) {
  if (e.tag === 13) {
    var t = Pn(e),
      n = en(e, t);
    if (n !== null) {
      var r = We();
      $t(n, e, t, r);
    }
    dd(e, t);
  }
};
cg = function () {
  return oe;
};
dg = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
su = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ja(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = bl(r);
            if (!o) throw Error(B(90));
            zm(r), Ja(r, o);
          }
        }
      }
      break;
    case "textarea":
      Um(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wr(e, !!n.multiple, t, !1);
  }
};
Zm = sd;
qm = ar;
var Nw = { usingClientEntryPoint: !1, Events: [Pi, Dr, bl, Xm, Qm, sd] },
  xo = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Kw = {
    bundleType: xo.bundleType,
    version: xo.version,
    rendererPackageName: xo.rendererPackageName,
    rendererConfig: xo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = tg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: xo.findFiberByHostInstance || Ow,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xi.isDisabled && Xi.supportsFiber)
    try {
      (ml = Xi.inject(Kw)), (It = Xi);
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nw;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pd(t)) throw Error(B(200));
  return Vw(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!pd(e)) throw Error(B(299));
  var n = !1,
    r = "",
    o = Iv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = cd(e, 1, !1, null, null, n, !1, r, o)),
    (e[Jt] = t.current),
    ri(e.nodeType === 8 ? e.parentNode : e),
    new fd(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(B(188))
      : ((e = Object.keys(e).join(",")), Error(B(268, e)));
  return (e = tg(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
  return ar(e);
};
ut.hydrate = function (e, t, n) {
  if (!$l(t)) throw Error(B(200));
  return Ml(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!pd(e)) throw Error(B(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Iv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Rv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Jt] = t.current),
    ri(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new El(t);
};
ut.render = function (e, t, n) {
  if (!$l(t)) throw Error(B(200));
  return Ml(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!$l(e)) throw Error(B(40));
  return e._reactRootContainer
    ? (ar(function () {
        Ml(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = sd;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$l(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return Ml(e, t, n, !1, r);
};
ut.version = "18.2.0-next-9e3b772b8-20220608";
function Vv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv);
    } catch (e) {
      console.error(e);
    }
}
Vv(), (Rm.exports = ut);
var hd = Rm.exports;
const jw = Sm(hd);
var mp = hd;
(Ha.createRoot = mp.createRoot), (Ha.hydrateRoot = mp.hydrateRoot);
const Zs = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  Ov = ie.createContext(Zs),
  _w = ie.createContext(!1);
let zw = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  fa = new WeakMap();
function Bw(e = !1) {
  let t = S.useContext(Ov),
    n = S.useRef(null);
  if (n.current === null && !e) {
    var r, o;
    let i =
      (o = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      o === void 0 ||
      (r = o.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current;
    if (i) {
      let s = fa.get(i);
      s == null
        ? fa.set(i, { id: t.current, state: i.memoizedState })
        : i.memoizedState !== s.state && ((t.current = s.id), fa.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function Uw(e) {
  let t = S.useContext(Ov);
  t === Zs &&
    !zw &&
    console.warn(
      "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
    );
  let n = Bw(!!e),
    r = `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function Ww(e) {
  let t = ie.useId(),
    [n] = S.useState(md()),
    r = n ? "react-aria" : `react-aria${Zs.prefix}`;
  return e || `${r}-${t}`;
}
const Hw = typeof ie.useId == "function" ? Ww : Uw;
function Gw() {
  return !1;
}
function Yw() {
  return !0;
}
function Xw(e) {
  return () => {};
}
function md() {
  return typeof ie.useSyncExternalStore == "function"
    ? ie.useSyncExternalStore(Xw, Gw, Yw)
    : S.useContext(_w);
}
function Qw(e, t) {
  if (t.has(e))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function Zw(e, t, n) {
  Qw(e, t), t.set(e, n);
}
function Ll(e, t, n) {
  let [r, o] = S.useState(e || t),
    i = S.useRef(e !== void 0),
    s = e !== void 0;
  S.useEffect(() => {
    let u = i.current;
    u !== s &&
      console.warn(
        `WARN: A component changed from ${
          u ? "controlled" : "uncontrolled"
        } to ${s ? "controlled" : "uncontrolled"}.`
      ),
      (i.current = s);
  }, [s]);
  let l = s ? e : r,
    a = S.useCallback(
      (u, ...c) => {
        let d = (f, ...m) => {
          n && (Object.is(l, f) || n(f, ...m)), s || (l = f);
        };
        typeof u == "function"
          ? (console.warn(
              "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"
            ),
            o((m, ...b) => {
              let w = u(s ? l : m, ...b);
              return d(w, ...c), s ? m : w;
            }))
          : (s || o(u), d(u, ...c));
      },
      [s, l, n]
    );
  return [l, a];
}
function io(e, t = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(e, t), n);
}
function So(e, t, n, r) {
  (t = Number(t)), (n = Number(n));
  let o = (e - (isNaN(t) ? 0 : t)) % r,
    i = Math.abs(o) * 2 >= r ? e + Math.sign(o) * (r - Math.abs(o)) : e - o;
  isNaN(t)
    ? !isNaN(n) && i > n && (i = Math.floor(n / r) * r)
    : i < t
    ? (i = t)
    : !isNaN(n) && i > n && (i = t + Math.floor((n - t) / r) * r);
  let s = r.toString(),
    l = s.indexOf("."),
    a = l >= 0 ? s.length - l : 0;
  if (a > 0) {
    let u = Math.pow(10, a);
    i = Math.round(i * u) / u;
  }
  return i;
}
function Fv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Fv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function qw() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Fv(e)) && (r && (r += " "), (r += t));
  return r;
}
const nn = typeof document < "u" ? ie.useLayoutEffect : () => {};
function Ae(e) {
  const t = S.useRef(null);
  return (
    nn(() => {
      t.current = e;
    }, [e]),
    S.useCallback((...n) => {
      const r = t.current;
      return r == null ? void 0 : r(...n);
    }, [])
  );
}
let Jw = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  qs = new Map();
function fi(e) {
  let [t, n] = S.useState(e),
    r = S.useRef(null),
    o = Hw(t),
    i = S.useCallback((s) => {
      r.current = s;
    }, []);
  return (
    Jw && qs.set(o, i),
    nn(() => {
      let s = o;
      return () => {
        qs.delete(s);
      };
    }, [o]),
    S.useEffect(() => {
      let s = r.current;
      s && ((r.current = null), n(s));
    }),
    o
  );
}
function ex(e, t) {
  if (e === t) return e;
  let n = qs.get(e);
  if (n) return n(t), t;
  let r = qs.get(t);
  return r ? (r(e), e) : t;
}
function ki(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const Ze = (e) => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0
      ? t
      : document;
  },
  Ct = (e) =>
    e && "window" in e && e.window === e ? e : Ze(e).defaultView || window;
function ee(...e) {
  let t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let o in r) {
      let i = t[o],
        s = r[o];
      typeof i == "function" &&
      typeof s == "function" &&
      o[0] === "o" &&
      o[1] === "n" &&
      o.charCodeAt(2) >= 65 &&
      o.charCodeAt(2) <= 90
        ? (t[o] = ki(i, s))
        : (o === "className" || o === "UNSAFE_className") &&
          typeof i == "string" &&
          typeof s == "string"
        ? (t[o] = qw(i, s))
        : o === "id" && i && s
        ? (t.id = ex(i, s))
        : (t[o] = s !== void 0 ? s : i);
    }
  }
  return t;
}
const tx = new Set(["id"]),
  nx = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details",
  ]),
  rx = new Set(["href", "target", "rel", "download", "ping", "referrerPolicy"]),
  ox = /^(data-.*)$/;
function gd(e, t = {}) {
  let { labelable: n, isLink: r, propNames: o } = t,
    i = {};
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) &&
      (tx.has(s) ||
        (n && nx.has(s)) ||
        (r && rx.has(s)) ||
        (o != null && o.has(s)) ||
        ox.test(s)) &&
      (i[s] = e[s]);
  return i;
}
function Je(e) {
  if (ix()) e.focus({ preventScroll: !0 });
  else {
    let t = sx(e);
    e.focus(), lx(t);
  }
}
let Qi = null;
function ix() {
  if (Qi == null) {
    Qi = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return (Qi = !0), !0;
        },
      });
    } catch {}
  }
  return Qi;
}
function sx(e) {
  let t = e.parentNode,
    n = [],
    r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
      n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
      (t = t.parentNode);
  return (
    r instanceof HTMLElement &&
      n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
    n
  );
}
function lx(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    (t.scrollTop = n), (t.scrollLeft = r);
}
function Dl(e) {
  var t;
  return typeof window > "u" || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some((n) => e.test(n.brand))) ||
        e.test(window.navigator.userAgent);
}
function vd(e) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1;
}
function Mn() {
  return vd(/^Mac/i);
}
function ax() {
  return vd(/^iPhone/i);
}
function Nv() {
  return vd(/^iPad/i) || (Mn() && navigator.maxTouchPoints > 1);
}
function Ci() {
  return ax() || Nv();
}
function ux() {
  return Mn() || Ci();
}
function Kv() {
  return Dl(/AppleWebKit/i) && !cx();
}
function cx() {
  return Dl(/Chrome/i);
}
function jv() {
  return Dl(/Android/i);
}
function dx() {
  return Dl(/Firefox/i);
}
const fx = S.createContext({ isNative: !0, open: hx });
function _v() {
  return S.useContext(fx);
}
function rn(e, t, n = !0) {
  var r, o;
  let { metaKey: i, ctrlKey: s, altKey: l, shiftKey: a } = t;
  dx() &&
    !(
      (o = window.event) === null ||
      o === void 0 ||
      (r = o.type) === null ||
      r === void 0
    ) &&
    r.startsWith("key") &&
    e.target === "_blank" &&
    (Mn() ? (i = !0) : (s = !0));
  let u =
    Kv() && Mn() && !Nv()
      ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: s,
          altKey: l,
          shiftKey: a,
        })
      : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: s,
          altKey: l,
          shiftKey: a,
          bubbles: !0,
          cancelable: !0,
        });
  (rn.isOpening = n), Je(e), e.dispatchEvent(u), (rn.isOpening = !1);
}
rn.isOpening = !1;
function px(e, t) {
  if (e instanceof HTMLAnchorElement) t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    (n.href = e.getAttribute("data-href")),
      e.hasAttribute("data-target") &&
        (n.target = e.getAttribute("data-target")),
      e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")),
      e.hasAttribute("data-download") &&
        (n.download = e.getAttribute("data-download")),
      e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")),
      e.hasAttribute("data-referrer-policy") &&
        (n.referrerPolicy = e.getAttribute("data-referrer-policy")),
      e.appendChild(n),
      t(n),
      e.removeChild(n);
  }
}
function hx(e, t) {
  px(e, (n) => rn(n, t));
}
let Tr = new Map(),
  Ku = new Set();
function gp() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
      if (!e(r) || !r.target) return;
      let o = Tr.get(r.target);
      o ||
        ((o = new Set()),
        Tr.set(r.target, o),
        r.target.addEventListener("transitioncancel", n, { once: !0 })),
        o.add(r.propertyName);
    },
    n = (r) => {
      if (!e(r) || !r.target) return;
      let o = Tr.get(r.target);
      if (
        o &&
        (o.delete(r.propertyName),
        o.size === 0 &&
          (r.target.removeEventListener("transitioncancel", n),
          Tr.delete(r.target)),
        Tr.size === 0)
      ) {
        for (let i of Ku) i();
        Ku.clear();
      }
    };
  document.body.addEventListener("transitionrun", t),
    document.body.addEventListener("transitionend", n);
}
typeof document < "u" &&
  (document.readyState !== "loading"
    ? gp()
    : document.addEventListener("DOMContentLoaded", gp));
function yd(e) {
  requestAnimationFrame(() => {
    Tr.size === 0 ? e() : Ku.add(e);
  });
}
function fo() {
  let e = S.useRef(new Map()),
    t = S.useCallback((o, i, s, l) => {
      let a =
        l != null && l.once
          ? (...u) => {
              e.current.delete(s), s(...u);
            }
          : s;
      e.current.set(s, { type: i, eventTarget: o, fn: a, options: l }),
        o.addEventListener(i, s, l);
    }, []),
    n = S.useCallback((o, i, s, l) => {
      var a;
      let u =
        ((a = e.current.get(s)) === null || a === void 0 ? void 0 : a.fn) || s;
      o.removeEventListener(i, u, l), e.current.delete(s);
    }, []),
    r = S.useCallback(() => {
      e.current.forEach((o, i) => {
        n(o.eventTarget, o.type, i, o.options);
      });
    }, [n]);
  return (
    S.useEffect(() => r, [r]),
    {
      addGlobalListener: t,
      removeGlobalListener: n,
      removeAllGlobalListeners: r,
    }
  );
}
function bd(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": o } = e;
  return (
    (n = fi(n)),
    o && r
      ? (o = [...new Set([n, ...o.trim().split(/\s+/)])].join(" "))
      : o && (o = o.trim().split(/\s+/).join(" ")),
    !r && !o && t && (r = t),
    { id: n, "aria-label": r, "aria-labelledby": o }
  );
}
function mx() {
  return typeof window.ResizeObserver < "u";
}
function gx(e) {
  const { ref: t, onResize: n } = e;
  S.useEffect(() => {
    let r = t == null ? void 0 : t.current;
    if (r)
      if (mx()) {
        const o = new window.ResizeObserver((i) => {
          i.length && n();
        });
        return (
          o.observe(r),
          () => {
            r && o.unobserve(r);
          }
        );
      } else
        return (
          window.addEventListener("resize", n, !1),
          () => {
            window.removeEventListener("resize", n, !1);
          }
        );
  }, [n, t]);
}
function wd(e, t) {
  nn(() => {
    if (e && e.ref && t)
      return (
        (e.ref.current = t.current),
        () => {
          e.ref && (e.ref.current = null);
        }
      );
  });
}
function vp(e, t) {
  let n = e;
  for (yp(n, t) && (n = n.parentElement); n && !yp(n, t); ) n = n.parentElement;
  return n || document.scrollingElement || document.documentElement;
}
function yp(e, t) {
  let n = window.getComputedStyle(e),
    r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return (
    r &&
      t &&
      (r =
        e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth),
    r
  );
}
let vx = 0;
const pa = new Map();
function yx(e) {
  let [t, n] = S.useState();
  return (
    nn(() => {
      if (!e) return;
      let r = pa.get(e);
      if (r) n(r.element.id);
      else {
        let o = `react-aria-description-${vx++}`;
        n(o);
        let i = document.createElement("div");
        (i.id = o),
          (i.style.display = "none"),
          (i.textContent = e),
          document.body.appendChild(i),
          (r = { refCount: 0, element: i }),
          pa.set(e, r);
      }
      return (
        r.refCount++,
        () => {
          r && --r.refCount === 0 && (r.element.remove(), pa.delete(e));
        }
      );
    }, [e]),
    { "aria-describedby": e ? t : void 0 }
  );
}
function bx(e, t, n, r) {
  let o = Ae(n),
    i = n == null;
  S.useEffect(() => {
    if (i || !e.current) return;
    let s = e.current;
    return (
      s.addEventListener(t, o, r),
      () => {
        s.removeEventListener(t, o, r);
      }
    );
  }, [e, t, r, i, o]);
}
function zv(e, t) {
  let n = bp(e, t, "left"),
    r = bp(e, t, "top"),
    o = t.offsetWidth,
    i = t.offsetHeight,
    s = e.scrollLeft,
    l = e.scrollTop,
    { borderTopWidth: a, borderLeftWidth: u } = getComputedStyle(e),
    c = e.scrollLeft + parseInt(u, 10),
    d = e.scrollTop + parseInt(a, 10),
    f = c + e.clientWidth,
    m = d + e.clientHeight;
  n <= s ? (s = n - parseInt(u, 10)) : n + o > f && (s += n + o - f),
    r <= d ? (l = r - parseInt(a, 10)) : r + i > m && (l += r + i - m),
    (e.scrollLeft = s),
    (e.scrollTop = l);
}
function bp(e, t, n) {
  const r = n === "left" ? "offsetLeft" : "offsetTop";
  let o = 0;
  for (; t.offsetParent && ((o += t[r]), t.offsetParent !== e); ) {
    if (t.offsetParent.contains(e)) {
      o -= e[r];
      break;
    }
    t = t.offsetParent;
  }
  return o;
}
function wp(e, t) {
  if (document.contains(e)) {
    let s = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(s).overflow === "hidden") {
      let a = vp(e);
      for (; e && a && e !== s && a !== s; ) zv(a, e), (e = a), (a = vp(e));
    } else {
      var n;
      let { left: a, top: u } = e.getBoundingClientRect();
      e == null ||
        (n = e.scrollIntoView) === null ||
        n === void 0 ||
        n.call(e, { block: "nearest" });
      let { left: c, top: d } = e.getBoundingClientRect();
      if (Math.abs(a - c) > 1 || Math.abs(u - d) > 1) {
        var r, o, i;
        t == null ||
          (o = t.containingElement) === null ||
          o === void 0 ||
          (r = o.scrollIntoView) === null ||
          r === void 0 ||
          r.call(o, { block: "center", inline: "center" }),
          (i = e.scrollIntoView) === null ||
            i === void 0 ||
            i.call(e, { block: "nearest" });
      }
    }
  }
}
function pi(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : jv() && e.pointerType
    ? e.type === "click" && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
function Bv(e) {
  return (
    (!jv() && e.width === 0 && e.height === 0) ||
    (e.width === 1 &&
      e.height === 1 &&
      e.pressure === 0 &&
      e.detail === 0 &&
      e.pointerType === "mouse")
  );
}
function wx(e, t, n) {
  let r = S.useRef(t),
    o = Ae(() => {
      n && n(r.current);
    });
  S.useEffect(() => {
    var i;
    let s =
      e == null || (i = e.current) === null || i === void 0 ? void 0 : i.form;
    return (
      s == null || s.addEventListener("reset", o),
      () => {
        s == null || s.removeEventListener("reset", o);
      }
    );
  }, [e, o]);
}
let ha = new Map(),
  ju = !1;
try {
  ju =
    new Intl.NumberFormat("de-DE", {
      signDisplay: "exceptZero",
    }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
let Js = !1;
try {
  Js =
    new Intl.NumberFormat("de-DE", {
      style: "unit",
      unit: "degree",
    }).resolvedOptions().style === "unit";
} catch {}
const Uv = {
  degree: {
    narrow: { default: "°", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " °" },
  },
};
class xx {
  format(t) {
    let n = "";
    if (
      (!ju && this.options.signDisplay != null
        ? (n = Px(this.numberFormatter, this.options.signDisplay, t))
        : (n = this.numberFormatter.format(t)),
      this.options.style === "unit" && !Js)
    ) {
      var r;
      let {
        unit: o,
        unitDisplay: i = "short",
        locale: s,
      } = this.resolvedOptions();
      if (!o) return n;
      let l = (r = Uv[o]) === null || r === void 0 ? void 0 : r[i];
      n += l[s] || l.default;
    }
    return n;
  }
  formatToParts(t) {
    return this.numberFormatter.formatToParts(t);
  }
  formatRange(t, n) {
    if (typeof this.numberFormatter.formatRange == "function")
      return this.numberFormatter.formatRange(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    return `${this.format(t)} – ${this.format(n)}`;
  }
  formatRangeToParts(t, n) {
    if (typeof this.numberFormatter.formatRangeToParts == "function")
      return this.numberFormatter.formatRangeToParts(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    let r = this.numberFormatter.formatToParts(t),
      o = this.numberFormatter.formatToParts(n);
    return [
      ...r.map((i) => ({ ...i, source: "startRange" })),
      { type: "literal", value: " – ", source: "shared" },
      ...o.map((i) => ({ ...i, source: "endRange" })),
    ];
  }
  resolvedOptions() {
    let t = this.numberFormatter.resolvedOptions();
    return (
      !ju &&
        this.options.signDisplay != null &&
        (t = { ...t, signDisplay: this.options.signDisplay }),
      !Js &&
        this.options.style === "unit" &&
        (t = {
          ...t,
          style: "unit",
          unit: this.options.unit,
          unitDisplay: this.options.unitDisplay,
        }),
      t
    );
  }
  constructor(t, n = {}) {
    (this.numberFormatter = Sx(t, n)), (this.options = n);
  }
}
function Sx(e, t = {}) {
  let { numberingSystem: n } = t;
  if (
    (n &&
      e.includes("-nu-") &&
      (e.includes("-u-") || (e += "-u-"), (e += `-nu-${n}`)),
    t.style === "unit" && !Js)
  ) {
    var r;
    let { unit: s, unitDisplay: l = "short" } = t;
    if (!s) throw new Error('unit option must be provided with style: "unit"');
    if (!(!((r = Uv[s]) === null || r === void 0) && r[l]))
      throw new Error(`Unsupported unit ${s} with unitDisplay = ${l}`);
    t = { ...t, style: "decimal" };
  }
  let o =
    e +
    (t
      ? Object.entries(t)
          .sort((s, l) => (s[0] < l[0] ? -1 : 1))
          .join()
      : "");
  if (ha.has(o)) return ha.get(o);
  let i = new Intl.NumberFormat(e, t);
  return ha.set(o, i), i;
}
function Px(e, t, n) {
  if (t === "auto") return e.format(n);
  if (t === "never") return e.format(Math.abs(n));
  {
    let r = !1;
    if (
      (t === "always"
        ? (r = n > 0 || Object.is(n, 0))
        : t === "exceptZero" &&
          (Object.is(n, -0) || Object.is(n, 0)
            ? (n = Math.abs(n))
            : (r = n > 0)),
      r)
    ) {
      let o = e.format(-n),
        i = e.format(n),
        s = o.replace(i, "").replace(/\u200e|\u061C/, "");
      return (
        [...s].length !== 1 &&
          console.warn(
            "@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"
          ),
        o.replace(i, "!!!").replace(s, "+").replace("!!!", i)
      );
    } else return e.format(n);
  }
}
const Tx = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr",
  ]),
  kx = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi",
  ]);
function Cx(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(),
      r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r) return r.direction === "rtl";
    if (n.script) return Tx.has(n.script);
  }
  let t = e.split("-")[0];
  return kx.has(t);
}
const Ex = Symbol.for("react-aria.i18n.locale");
function Wv() {
  let e =
    (typeof window < "u" && window[Ex]) ||
    (typeof navigator < "u" &&
      (navigator.language || navigator.userLanguage)) ||
    "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = "en-US";
  }
  return { locale: e, direction: Cx(e) ? "rtl" : "ltr" };
}
let _u = Wv(),
  Ao = new Set();
function xp() {
  _u = Wv();
  for (let e of Ao) e(_u);
}
function $x() {
  let e = md(),
    [t, n] = S.useState(_u);
  return (
    S.useEffect(
      () => (
        Ao.size === 0 && window.addEventListener("languagechange", xp),
        Ao.add(n),
        () => {
          Ao.delete(n),
            Ao.size === 0 && window.removeEventListener("languagechange", xp);
        }
      ),
      []
    ),
    e ? { locale: "en-US", direction: "ltr" } : t
  );
}
const Mx = ie.createContext(null);
function fr() {
  let e = $x();
  return S.useContext(Mx) || e;
}
function Hv(e = {}) {
  let { locale: t } = fr();
  return S.useMemo(() => new xx(t, e), [t, e]);
}
function Lx(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Gv(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function Dx(e, t) {
  var n = Gv(e, t, "get");
  return Lx(e, n);
}
function Ax(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Sp(e, t, n) {
  var r = Gv(e, t, "set");
  return Ax(e, r, n), n;
}
let Nr = "default",
  zu = "",
  xs = new WeakMap();
function Bu(e) {
  if (Ci()) {
    if (Nr === "default") {
      const t = Ze(e);
      (zu = t.documentElement.style.webkitUserSelect),
        (t.documentElement.style.webkitUserSelect = "none");
    }
    Nr = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) &&
      (xs.set(e, e.style.userSelect), (e.style.userSelect = "none"));
}
function Ro(e) {
  if (Ci()) {
    if (Nr !== "disabled") return;
    (Nr = "restoring"),
      setTimeout(() => {
        yd(() => {
          if (Nr === "restoring") {
            const t = Ze(e);
            t.documentElement.style.webkitUserSelect === "none" &&
              (t.documentElement.style.webkitUserSelect = zu || ""),
              (zu = ""),
              (Nr = "default");
          }
        });
      }, 300);
  } else if (
    (e instanceof HTMLElement || e instanceof SVGElement) &&
    e &&
    xs.has(e)
  ) {
    let t = xs.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t),
      e.getAttribute("style") === "" && e.removeAttribute("style"),
      xs.delete(e);
  }
}
const Yv = ie.createContext({ register: () => {} });
Yv.displayName = "PressResponderContext";
function Rx(e) {
  let t = S.useContext(Yv);
  if (t) {
    let { register: n, ...r } = t;
    (e = ee(r, e)), n();
  }
  return wd(t, e.ref), e;
}
var Zi = new WeakMap();
class qi {
  continuePropagation() {
    Sp(this, Zi, !1);
  }
  get shouldStopPropagation() {
    return Dx(this, Zi);
  }
  constructor(t, n, r) {
    Zw(this, Zi, { writable: !0, value: void 0 }),
      Sp(this, Zi, !0),
      (this.type = t),
      (this.pointerType = n),
      (this.target = r.currentTarget),
      (this.shiftKey = r.shiftKey),
      (this.metaKey = r.metaKey),
      (this.ctrlKey = r.ctrlKey),
      (this.altKey = r.altKey);
  }
}
const Pp = Symbol("linkClicked");
function Xv(e) {
  let {
      onPress: t,
      onPressChange: n,
      onPressStart: r,
      onPressEnd: o,
      onPressUp: i,
      isDisabled: s,
      isPressed: l,
      preventFocusOnPress: a,
      shouldCancelOnPointerExit: u,
      allowTextSelectionOnPress: c,
      ref: d,
      ...f
    } = Rx(e),
    [m, b] = S.useState(!1),
    w = S.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      ignoreClickAfterPress: !1,
      didFirePressStart: !1,
      isTriggeringEvent: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
    }),
    { addGlobalListener: P, removeAllGlobalListeners: g } = fo(),
    h = Ae((p, R) => {
      let A = w.current;
      if (s || A.didFirePressStart) return !1;
      let $ = !0;
      if (((A.isTriggeringEvent = !0), r)) {
        let I = new qi("pressstart", R, p);
        r(I), ($ = I.shouldStopPropagation);
      }
      return (
        n && n(!0),
        (A.isTriggeringEvent = !1),
        (A.didFirePressStart = !0),
        b(!0),
        $
      );
    }),
    v = Ae((p, R, A = !0) => {
      let $ = w.current;
      if (!$.didFirePressStart) return !1;
      ($.ignoreClickAfterPress = !0),
        ($.didFirePressStart = !1),
        ($.isTriggeringEvent = !0);
      let I = !0;
      if (o) {
        let x = new qi("pressend", R, p);
        o(x), (I = x.shouldStopPropagation);
      }
      if ((n && n(!1), b(!1), t && A && !s)) {
        let x = new qi("press", R, p);
        t(x), I && (I = x.shouldStopPropagation);
      }
      return ($.isTriggeringEvent = !1), I;
    }),
    E = Ae((p, R) => {
      let A = w.current;
      if (s) return !1;
      if (i) {
        A.isTriggeringEvent = !0;
        let $ = new qi("pressup", R, p);
        return i($), (A.isTriggeringEvent = !1), $.shouldStopPropagation;
      }
      return !0;
    }),
    L = Ae((p) => {
      let R = w.current;
      R.isPressed &&
        R.target &&
        (R.isOverTarget &&
          R.pointerType != null &&
          v(Kt(R.target, p), R.pointerType, !1),
        (R.isPressed = !1),
        (R.isOverTarget = !1),
        (R.activePointerId = null),
        (R.pointerType = null),
        g(),
        c || Ro(R.target));
    }),
    M = Ae((p) => {
      u && L(p);
    }),
    N = S.useMemo(() => {
      let p = w.current,
        R = {
          onKeyDown($) {
            if (
              ma($.nativeEvent, $.currentTarget) &&
              $.currentTarget.contains($.target)
            ) {
              var I;
              kp($.target, $.key) && $.preventDefault();
              let x = !0;
              if (!p.isPressed && !$.repeat) {
                (p.target = $.currentTarget),
                  (p.isPressed = !0),
                  (x = h($, "keyboard"));
                let k = $.currentTarget,
                  K = (j) => {
                    ma(j, k) &&
                      !j.repeat &&
                      k.contains(j.target) &&
                      p.target &&
                      E(Kt(p.target, j), "keyboard");
                  };
                P(Ze($.currentTarget), "keyup", ki(K, A), !0);
              }
              x && $.stopPropagation(),
                $.metaKey &&
                  Mn() &&
                  ((I = p.metaKeyEvents) === null ||
                    I === void 0 ||
                    I.set($.key, $.nativeEvent));
            } else $.key === "Meta" && (p.metaKeyEvents = new Map());
          },
          onClick($) {
            if (
              !($ && !$.currentTarget.contains($.target)) &&
              $ &&
              $.button === 0 &&
              !p.isTriggeringEvent &&
              !rn.isOpening
            ) {
              let I = !0;
              if (
                (s && $.preventDefault(),
                !p.ignoreClickAfterPress &&
                  !p.ignoreEmulatedMouseEvents &&
                  !p.isPressed &&
                  (p.pointerType === "virtual" || pi($.nativeEvent)))
              ) {
                !s && !a && Je($.currentTarget);
                let x = h($, "virtual"),
                  k = E($, "virtual"),
                  K = v($, "virtual");
                I = x && k && K;
              }
              (p.ignoreEmulatedMouseEvents = !1),
                (p.ignoreClickAfterPress = !1),
                I && $.stopPropagation();
            }
          },
        },
        A = ($) => {
          var I;
          if (p.isPressed && p.target && ma($, p.target)) {
            var x;
            kp($.target, $.key) && $.preventDefault();
            let K = $.target;
            v(Kt(p.target, $), "keyboard", p.target.contains(K)),
              g(),
              $.key !== "Enter" &&
                xd(p.target) &&
                p.target.contains(K) &&
                !$[Pp] &&
                (($[Pp] = !0), rn(p.target, $, !1)),
              (p.isPressed = !1),
              (x = p.metaKeyEvents) === null || x === void 0 || x.delete($.key);
          } else if (
            $.key === "Meta" &&
            !((I = p.metaKeyEvents) === null || I === void 0) &&
            I.size
          ) {
            var k;
            let K = p.metaKeyEvents;
            p.metaKeyEvents = void 0;
            for (let j of K.values())
              (k = p.target) === null ||
                k === void 0 ||
                k.dispatchEvent(new KeyboardEvent("keyup", j));
          }
        };
      if (typeof PointerEvent < "u") {
        (R.onPointerDown = (k) => {
          if (k.button !== 0 || !k.currentTarget.contains(k.target)) return;
          if (Bv(k.nativeEvent)) {
            p.pointerType = "virtual";
            return;
          }
          ga(k.currentTarget) && k.preventDefault(),
            (p.pointerType = k.pointerType);
          let K = !0;
          p.isPressed ||
            ((p.isPressed = !0),
            (p.isOverTarget = !0),
            (p.activePointerId = k.pointerId),
            (p.target = k.currentTarget),
            !s && !a && Je(k.currentTarget),
            c || Bu(p.target),
            (K = h(k, p.pointerType)),
            P(Ze(k.currentTarget), "pointermove", $, !1),
            P(Ze(k.currentTarget), "pointerup", I, !1),
            P(Ze(k.currentTarget), "pointercancel", x, !1)),
            K && k.stopPropagation();
        }),
          (R.onMouseDown = (k) => {
            k.currentTarget.contains(k.target) &&
              k.button === 0 &&
              (ga(k.currentTarget) && k.preventDefault(), k.stopPropagation());
          }),
          (R.onPointerUp = (k) => {
            !k.currentTarget.contains(k.target) ||
              p.pointerType === "virtual" ||
              (k.button === 0 &&
                wr(k, k.currentTarget) &&
                E(k, p.pointerType || k.pointerType));
          });
        let $ = (k) => {
            k.pointerId === p.activePointerId &&
              (p.target && wr(k, p.target)
                ? !p.isOverTarget &&
                  p.pointerType != null &&
                  ((p.isOverTarget = !0), h(Kt(p.target, k), p.pointerType))
                : p.target &&
                  p.isOverTarget &&
                  p.pointerType != null &&
                  ((p.isOverTarget = !1),
                  v(Kt(p.target, k), p.pointerType, !1),
                  M(k)));
          },
          I = (k) => {
            k.pointerId === p.activePointerId &&
              p.isPressed &&
              k.button === 0 &&
              p.target &&
              (wr(k, p.target) && p.pointerType != null
                ? v(Kt(p.target, k), p.pointerType)
                : p.isOverTarget &&
                  p.pointerType != null &&
                  v(Kt(p.target, k), p.pointerType, !1),
              (p.isPressed = !1),
              (p.isOverTarget = !1),
              (p.activePointerId = null),
              (p.pointerType = null),
              g(),
              c || Ro(p.target));
          },
          x = (k) => {
            L(k);
          };
        R.onDragStart = (k) => {
          k.currentTarget.contains(k.target) && L(k);
        };
      } else {
        (R.onMouseDown = (x) => {
          if (x.button !== 0 || !x.currentTarget.contains(x.target)) return;
          if (
            (ga(x.currentTarget) && x.preventDefault(),
            p.ignoreEmulatedMouseEvents)
          ) {
            x.stopPropagation();
            return;
          }
          (p.isPressed = !0),
            (p.isOverTarget = !0),
            (p.target = x.currentTarget),
            (p.pointerType = pi(x.nativeEvent) ? "virtual" : "mouse"),
            !s && !a && Je(x.currentTarget),
            h(x, p.pointerType) && x.stopPropagation(),
            P(Ze(x.currentTarget), "mouseup", $, !1);
        }),
          (R.onMouseEnter = (x) => {
            if (!x.currentTarget.contains(x.target)) return;
            let k = !0;
            p.isPressed &&
              !p.ignoreEmulatedMouseEvents &&
              p.pointerType != null &&
              ((p.isOverTarget = !0), (k = h(x, p.pointerType))),
              k && x.stopPropagation();
          }),
          (R.onMouseLeave = (x) => {
            if (!x.currentTarget.contains(x.target)) return;
            let k = !0;
            p.isPressed &&
              !p.ignoreEmulatedMouseEvents &&
              p.pointerType != null &&
              ((p.isOverTarget = !1), (k = v(x, p.pointerType, !1)), M(x)),
              k && x.stopPropagation();
          }),
          (R.onMouseUp = (x) => {
            x.currentTarget.contains(x.target) &&
              !p.ignoreEmulatedMouseEvents &&
              x.button === 0 &&
              E(x, p.pointerType || "mouse");
          });
        let $ = (x) => {
          if (x.button === 0) {
            if (((p.isPressed = !1), g(), p.ignoreEmulatedMouseEvents)) {
              p.ignoreEmulatedMouseEvents = !1;
              return;
            }
            p.target && wr(x, p.target) && p.pointerType != null
              ? v(Kt(p.target, x), p.pointerType)
              : p.target &&
                p.isOverTarget &&
                p.pointerType != null &&
                v(Kt(p.target, x), p.pointerType, !1),
              (p.isOverTarget = !1);
          }
        };
        (R.onTouchStart = (x) => {
          if (!x.currentTarget.contains(x.target)) return;
          let k = Ix(x.nativeEvent);
          if (!k) return;
          (p.activePointerId = k.identifier),
            (p.ignoreEmulatedMouseEvents = !0),
            (p.isOverTarget = !0),
            (p.isPressed = !0),
            (p.target = x.currentTarget),
            (p.pointerType = "touch"),
            !s && !a && Je(x.currentTarget),
            c || Bu(p.target),
            h(x, p.pointerType) && x.stopPropagation(),
            P(Ct(x.currentTarget), "scroll", I, !0);
        }),
          (R.onTouchMove = (x) => {
            if (!x.currentTarget.contains(x.target)) return;
            if (!p.isPressed) {
              x.stopPropagation();
              return;
            }
            let k = Tp(x.nativeEvent, p.activePointerId),
              K = !0;
            k && wr(k, x.currentTarget)
              ? !p.isOverTarget &&
                p.pointerType != null &&
                ((p.isOverTarget = !0), (K = h(x, p.pointerType)))
              : p.isOverTarget &&
                p.pointerType != null &&
                ((p.isOverTarget = !1), (K = v(x, p.pointerType, !1)), M(x)),
              K && x.stopPropagation();
          }),
          (R.onTouchEnd = (x) => {
            if (!x.currentTarget.contains(x.target)) return;
            if (!p.isPressed) {
              x.stopPropagation();
              return;
            }
            let k = Tp(x.nativeEvent, p.activePointerId),
              K = !0;
            k && wr(k, x.currentTarget) && p.pointerType != null
              ? (E(x, p.pointerType), (K = v(x, p.pointerType)))
              : p.isOverTarget &&
                p.pointerType != null &&
                (K = v(x, p.pointerType, !1)),
              K && x.stopPropagation(),
              (p.isPressed = !1),
              (p.activePointerId = null),
              (p.isOverTarget = !1),
              (p.ignoreEmulatedMouseEvents = !0),
              p.target && !c && Ro(p.target),
              g();
          }),
          (R.onTouchCancel = (x) => {
            x.currentTarget.contains(x.target) &&
              (x.stopPropagation(), p.isPressed && L(x));
          });
        let I = (x) => {
          p.isPressed &&
            x.target.contains(p.target) &&
            L({
              currentTarget: p.target,
              shiftKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              altKey: !1,
            });
        };
        R.onDragStart = (x) => {
          x.currentTarget.contains(x.target) && L(x);
        };
      }
      return R;
    }, [P, s, a, g, c, L, M, v, h, E]);
  return (
    S.useEffect(
      () => () => {
        var p;
        c || Ro((p = w.current.target) !== null && p !== void 0 ? p : void 0);
      },
      [c]
    ),
    { isPressed: l || m, pressProps: ee(f, N) }
  );
}
function xd(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function ma(e, t) {
  const { key: n, code: r } = e,
    o = t,
    i = o.getAttribute("role");
  return (
    (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") &&
    !(
      (o instanceof Ct(o).HTMLInputElement && !Qv(o, n)) ||
      o instanceof Ct(o).HTMLTextAreaElement ||
      o.isContentEditable
    ) &&
    !((i === "link" || (!i && xd(o))) && n !== "Enter")
  );
}
function Ix(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Tp(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (o.identifier === t) return o;
  }
  return null;
}
function Kt(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
  };
}
function Vx(e) {
  let t = 0,
    n = 0;
  return (
    e.width !== void 0
      ? (t = e.width / 2)
      : e.radiusX !== void 0 && (t = e.radiusX),
    e.height !== void 0
      ? (n = e.height / 2)
      : e.radiusY !== void 0 && (n = e.radiusY),
    {
      top: e.clientY - n,
      right: e.clientX + t,
      bottom: e.clientY + n,
      left: e.clientX - t,
    }
  );
}
function Ox(e, t) {
  return !(
    e.left > t.right ||
    t.left > e.right ||
    e.top > t.bottom ||
    t.top > e.bottom
  );
}
function wr(e, t) {
  let n = t.getBoundingClientRect(),
    r = Vx(e);
  return Ox(n, r);
}
function ga(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function kp(e, t) {
  return e instanceof HTMLInputElement
    ? !Qv(e, t)
    : e instanceof HTMLButtonElement
    ? e.type !== "submit" && e.type !== "reset"
    : !xd(e);
}
const Fx = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Qv(e, t) {
  return e.type === "checkbox" || e.type === "radio"
    ? t === " "
    : Fx.has(e.type);
}
class Nx {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {}
  constructor(t, n) {
    (this.nativeEvent = n),
      (this.target = n.target),
      (this.currentTarget = n.currentTarget),
      (this.relatedTarget = n.relatedTarget),
      (this.bubbles = n.bubbles),
      (this.cancelable = n.cancelable),
      (this.defaultPrevented = n.defaultPrevented),
      (this.eventPhase = n.eventPhase),
      (this.isTrusted = n.isTrusted),
      (this.timeStamp = n.timeStamp),
      (this.type = t);
  }
}
function Zv(e) {
  let t = S.useRef({ isFocused: !1, observer: null });
  nn(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), (r.observer = null));
    };
  }, []);
  let n = Ae((r) => {
    e == null || e(r);
  });
  return S.useCallback(
    (r) => {
      if (
        r.target instanceof HTMLButtonElement ||
        r.target instanceof HTMLInputElement ||
        r.target instanceof HTMLTextAreaElement ||
        r.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0;
        let o = r.target,
          i = (s) => {
            (t.current.isFocused = !1),
              o.disabled && n(new Nx("blur", s)),
              t.current.observer &&
                (t.current.observer.disconnect(), (t.current.observer = null));
          };
        o.addEventListener("focusout", i, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            if (t.current.isFocused && o.disabled) {
              var s;
              (s = t.current.observer) === null ||
                s === void 0 ||
                s.disconnect();
              let l =
                o === document.activeElement ? null : document.activeElement;
              o.dispatchEvent(new FocusEvent("blur", { relatedTarget: l })),
                o.dispatchEvent(
                  new FocusEvent("focusout", { bubbles: !0, relatedTarget: l })
                );
            }
          })),
          t.current.observer.observe(o, {
            attributes: !0,
            attributeFilter: ["disabled"],
          });
      }
    },
    [n]
  );
}
function qv(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = S.useCallback(
      (a) => {
        if (a.target === a.currentTarget) return r && r(a), o && o(!1), !0;
      },
      [r, o]
    ),
    s = Zv(i),
    l = S.useCallback(
      (a) => {
        a.target === a.currentTarget &&
          document.activeElement === a.target &&
          (n && n(a), o && o(!0), s(a));
      },
      [o, n, s]
    );
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? l : void 0,
      onBlur: !t && (r || o) ? i : void 0,
    },
  };
}
let pr = null,
  Uu = new Set(),
  Uo = new Map(),
  ur = !1,
  Wu = !1;
const Kx = { Tab: !0, Escape: !0 };
function Al(e, t) {
  for (let n of Uu) n(e, t);
}
function jx(e) {
  return !(
    e.metaKey ||
    (!Mn() && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function el(e) {
  (ur = !0), jx(e) && ((pr = "keyboard"), Al("keyboard", e));
}
function mt(e) {
  (pr = "pointer"),
    (e.type === "mousedown" || e.type === "pointerdown") &&
      ((ur = !0), Al("pointer", e));
}
function Jv(e) {
  pi(e) && ((ur = !0), (pr = "virtual"));
}
function ey(e) {
  e.target === window ||
    e.target === document ||
    (!ur && !Wu && ((pr = "virtual"), Al("virtual", e)), (ur = !1), (Wu = !1));
}
function ty() {
  (ur = !1), (Wu = !0);
}
function Hu(e) {
  if (typeof window > "u" || Uo.get(Ct(e))) return;
  const t = Ct(e),
    n = Ze(e);
  let r = t.HTMLElement.prototype.focus;
  (t.HTMLElement.prototype.focus = function () {
    (ur = !0), r.apply(this, arguments);
  }),
    n.addEventListener("keydown", el, !0),
    n.addEventListener("keyup", el, !0),
    n.addEventListener("click", Jv, !0),
    t.addEventListener("focus", ey, !0),
    t.addEventListener("blur", ty, !1),
    typeof PointerEvent < "u"
      ? (n.addEventListener("pointerdown", mt, !0),
        n.addEventListener("pointermove", mt, !0),
        n.addEventListener("pointerup", mt, !0))
      : (n.addEventListener("mousedown", mt, !0),
        n.addEventListener("mousemove", mt, !0),
        n.addEventListener("mouseup", mt, !0)),
    t.addEventListener(
      "beforeunload",
      () => {
        ny(e);
      },
      { once: !0 }
    ),
    Uo.set(t, { focus: r });
}
const ny = (e, t) => {
  const n = Ct(e),
    r = Ze(e);
  t && r.removeEventListener("DOMContentLoaded", t),
    Uo.has(n) &&
      ((n.HTMLElement.prototype.focus = Uo.get(n).focus),
      r.removeEventListener("keydown", el, !0),
      r.removeEventListener("keyup", el, !0),
      r.removeEventListener("click", Jv, !0),
      n.removeEventListener("focus", ey, !0),
      n.removeEventListener("blur", ty, !1),
      typeof PointerEvent < "u"
        ? (r.removeEventListener("pointerdown", mt, !0),
          r.removeEventListener("pointermove", mt, !0),
          r.removeEventListener("pointerup", mt, !0))
        : (r.removeEventListener("mousedown", mt, !0),
          r.removeEventListener("mousemove", mt, !0),
          r.removeEventListener("mouseup", mt, !0)),
      Uo.delete(n));
};
function _x(e) {
  const t = Ze(e);
  let n;
  return (
    t.readyState !== "loading"
      ? Hu(e)
      : ((n = () => {
          Hu(e);
        }),
        t.addEventListener("DOMContentLoaded", n)),
    () => ny(e, n)
  );
}
typeof document < "u" && _x();
function Sd() {
  return pr !== "pointer";
}
function tl() {
  return pr;
}
function zx(e) {
  (pr = e), Al(e, null);
}
const Bx = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Ux(e, t, n) {
  var r;
  const o =
      typeof window < "u"
        ? Ct(n == null ? void 0 : n.target).HTMLInputElement
        : HTMLInputElement,
    i =
      typeof window < "u"
        ? Ct(n == null ? void 0 : n.target).HTMLTextAreaElement
        : HTMLTextAreaElement,
    s =
      typeof window < "u"
        ? Ct(n == null ? void 0 : n.target).HTMLElement
        : HTMLElement,
    l =
      typeof window < "u"
        ? Ct(n == null ? void 0 : n.target).KeyboardEvent
        : KeyboardEvent;
  return (
    (e =
      e ||
      ((n == null ? void 0 : n.target) instanceof o &&
        !Bx.has(
          n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type
        )) ||
      (n == null ? void 0 : n.target) instanceof i ||
      ((n == null ? void 0 : n.target) instanceof s &&
        (n == null ? void 0 : n.target.isContentEditable))),
    !(e && t === "keyboard" && n instanceof l && !Kx[n.key])
  );
}
function Wx(e, t, n) {
  Hu(),
    S.useEffect(() => {
      let r = (o, i) => {
        Ux(!!(n != null && n.isTextInput), o, i) && e(Sd());
      };
      return (
        Uu.add(r),
        () => {
          Uu.delete(r);
        }
      );
    }, t);
}
function Pd(e) {
  let {
      isDisabled: t,
      onBlurWithin: n,
      onFocusWithin: r,
      onFocusWithinChange: o,
    } = e,
    i = S.useRef({ isFocusWithin: !1 }),
    s = S.useCallback(
      (u) => {
        i.current.isFocusWithin &&
          !u.currentTarget.contains(u.relatedTarget) &&
          ((i.current.isFocusWithin = !1), n && n(u), o && o(!1));
      },
      [n, o, i]
    ),
    l = Zv(s),
    a = S.useCallback(
      (u) => {
        !i.current.isFocusWithin &&
          document.activeElement === u.target &&
          (r && r(u), o && o(!0), (i.current.isFocusWithin = !0), l(u));
      },
      [r, o, l]
    );
  return t
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: a, onBlur: s } };
}
let nl = !1,
  va = 0;
function Gu() {
  (nl = !0),
    setTimeout(() => {
      nl = !1;
    }, 50);
}
function Cp(e) {
  e.pointerType === "touch" && Gu();
}
function Hx() {
  if (!(typeof document > "u"))
    return (
      typeof PointerEvent < "u"
        ? document.addEventListener("pointerup", Cp)
        : document.addEventListener("touchend", Gu),
      va++,
      () => {
        va--,
          !(va > 0) &&
            (typeof PointerEvent < "u"
              ? document.removeEventListener("pointerup", Cp)
              : document.removeEventListener("touchend", Gu));
      }
    );
}
function hr(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e,
    [i, s] = S.useState(!1),
    l = S.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: "",
      target: null,
    }).current;
  S.useEffect(Hx, []);
  let { hoverProps: a, triggerHoverEnd: u } = S.useMemo(() => {
    let c = (m, b) => {
        if (
          ((l.pointerType = b),
          o ||
            b === "touch" ||
            l.isHovered ||
            !m.currentTarget.contains(m.target))
        )
          return;
        l.isHovered = !0;
        let w = m.currentTarget;
        (l.target = w),
          t && t({ type: "hoverstart", target: w, pointerType: b }),
          n && n(!0),
          s(!0);
      },
      d = (m, b) => {
        if (
          ((l.pointerType = ""),
          (l.target = null),
          b === "touch" || !l.isHovered)
        )
          return;
        l.isHovered = !1;
        let w = m.currentTarget;
        r && r({ type: "hoverend", target: w, pointerType: b }),
          n && n(!1),
          s(!1);
      },
      f = {};
    return (
      typeof PointerEvent < "u"
        ? ((f.onPointerEnter = (m) => {
            (nl && m.pointerType === "mouse") || c(m, m.pointerType);
          }),
          (f.onPointerLeave = (m) => {
            !o && m.currentTarget.contains(m.target) && d(m, m.pointerType);
          }))
        : ((f.onTouchStart = () => {
            l.ignoreEmulatedMouseEvents = !0;
          }),
          (f.onMouseEnter = (m) => {
            !l.ignoreEmulatedMouseEvents && !nl && c(m, "mouse"),
              (l.ignoreEmulatedMouseEvents = !1);
          }),
          (f.onMouseLeave = (m) => {
            !o && m.currentTarget.contains(m.target) && d(m, "mouse");
          })),
      { hoverProps: f, triggerHoverEnd: d }
    );
  }, [t, n, r, o, l]);
  return (
    S.useEffect(() => {
      o && u({ currentTarget: l.target }, l.pointerType);
    }, [o]),
    { hoverProps: a, isHovered: i }
  );
}
function Gx(e) {
  let {
      ref: t,
      onInteractOutside: n,
      isDisabled: r,
      onInteractOutsideStart: o,
    } = e,
    i = S.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
    s = Ae((a) => {
      n && Ji(a, t) && (o && o(a), (i.current.isPointerDown = !0));
    }),
    l = Ae((a) => {
      n && n(a);
    });
  S.useEffect(() => {
    let a = i.current;
    if (r) return;
    const u = t.current,
      c = Ze(u);
    if (typeof PointerEvent < "u") {
      let d = (f) => {
        a.isPointerDown && Ji(f, t) && l(f), (a.isPointerDown = !1);
      };
      return (
        c.addEventListener("pointerdown", s, !0),
        c.addEventListener("pointerup", d, !0),
        () => {
          c.removeEventListener("pointerdown", s, !0),
            c.removeEventListener("pointerup", d, !0);
        }
      );
    } else {
      let d = (m) => {
          a.ignoreEmulatedMouseEvents
            ? (a.ignoreEmulatedMouseEvents = !1)
            : a.isPointerDown && Ji(m, t) && l(m),
            (a.isPointerDown = !1);
        },
        f = (m) => {
          (a.ignoreEmulatedMouseEvents = !0),
            a.isPointerDown && Ji(m, t) && l(m),
            (a.isPointerDown = !1);
        };
      return (
        c.addEventListener("mousedown", s, !0),
        c.addEventListener("mouseup", d, !0),
        c.addEventListener("touchstart", s, !0),
        c.addEventListener("touchend", f, !0),
        () => {
          c.removeEventListener("mousedown", s, !0),
            c.removeEventListener("mouseup", d, !0),
            c.removeEventListener("touchstart", s, !0),
            c.removeEventListener("touchend", f, !0);
        }
      );
    }
  }, [t, r, s, l]);
}
function Ji(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const n = e.target.ownerDocument;
    if (
      !n ||
      !n.documentElement.contains(e.target) ||
      e.target.closest("[data-react-aria-top-layer]")
    )
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function Ep(e) {
  if (!e) return;
  let t = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        console.error(
          "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
        );
      },
      continuePropagation() {
        t = !1;
      },
    };
    e(r), t && n.stopPropagation();
  };
}
function ry(e) {
  return {
    keyboardProps: e.isDisabled
      ? {}
      : { onKeyDown: Ep(e.onKeyDown), onKeyUp: Ep(e.onKeyUp) },
  };
}
function oy(e) {
  let { onMoveStart: t, onMove: n, onMoveEnd: r } = e,
    o = S.useRef({ didMove: !1, lastPosition: null, id: null }),
    { addGlobalListener: i, removeGlobalListener: s } = fo(),
    l = Ae((c, d, f, m) => {
      (f === 0 && m === 0) ||
        (o.current.didMove ||
          ((o.current.didMove = !0),
          t == null ||
            t({
              type: "movestart",
              pointerType: d,
              shiftKey: c.shiftKey,
              metaKey: c.metaKey,
              ctrlKey: c.ctrlKey,
              altKey: c.altKey,
            })),
        n == null ||
          n({
            type: "move",
            pointerType: d,
            deltaX: f,
            deltaY: m,
            shiftKey: c.shiftKey,
            metaKey: c.metaKey,
            ctrlKey: c.ctrlKey,
            altKey: c.altKey,
          }));
    }),
    a = Ae((c, d) => {
      Ro(),
        o.current.didMove &&
          (r == null ||
            r({
              type: "moveend",
              pointerType: d,
              shiftKey: c.shiftKey,
              metaKey: c.metaKey,
              ctrlKey: c.ctrlKey,
              altKey: c.altKey,
            }));
    });
  return {
    moveProps: S.useMemo(() => {
      let c = {},
        d = () => {
          Bu(), (o.current.didMove = !1);
        };
      if (typeof PointerEvent > "u") {
        let m = (g) => {
            if (g.button === 0) {
              var h, v, E, L;
              l(
                g,
                "mouse",
                g.pageX -
                  ((E =
                    (h = o.current.lastPosition) === null || h === void 0
                      ? void 0
                      : h.pageX) !== null && E !== void 0
                    ? E
                    : 0),
                g.pageY -
                  ((L =
                    (v = o.current.lastPosition) === null || v === void 0
                      ? void 0
                      : v.pageY) !== null && L !== void 0
                    ? L
                    : 0)
              ),
                (o.current.lastPosition = { pageX: g.pageX, pageY: g.pageY });
            }
          },
          b = (g) => {
            g.button === 0 &&
              (a(g, "mouse"),
              s(window, "mousemove", m, !1),
              s(window, "mouseup", b, !1));
          };
        c.onMouseDown = (g) => {
          g.button === 0 &&
            (d(),
            g.stopPropagation(),
            g.preventDefault(),
            (o.current.lastPosition = { pageX: g.pageX, pageY: g.pageY }),
            i(window, "mousemove", m, !1),
            i(window, "mouseup", b, !1));
        };
        let w = (g) => {
            let h = [...g.changedTouches].findIndex(
              ({ identifier: N }) => N === o.current.id
            );
            if (h >= 0) {
              var v, E;
              let { pageX: N, pageY: p } = g.changedTouches[h];
              var L, M;
              l(
                g,
                "touch",
                N -
                  ((L =
                    (v = o.current.lastPosition) === null || v === void 0
                      ? void 0
                      : v.pageX) !== null && L !== void 0
                    ? L
                    : 0),
                p -
                  ((M =
                    (E = o.current.lastPosition) === null || E === void 0
                      ? void 0
                      : E.pageY) !== null && M !== void 0
                    ? M
                    : 0)
              ),
                (o.current.lastPosition = { pageX: N, pageY: p });
            }
          },
          P = (g) => {
            [...g.changedTouches].findIndex(
              ({ identifier: v }) => v === o.current.id
            ) >= 0 &&
              (a(g, "touch"),
              (o.current.id = null),
              s(window, "touchmove", w),
              s(window, "touchend", P),
              s(window, "touchcancel", P));
          };
        c.onTouchStart = (g) => {
          if (g.changedTouches.length === 0 || o.current.id != null) return;
          let { pageX: h, pageY: v, identifier: E } = g.changedTouches[0];
          d(),
            g.stopPropagation(),
            g.preventDefault(),
            (o.current.lastPosition = { pageX: h, pageY: v }),
            (o.current.id = E),
            i(window, "touchmove", w, !1),
            i(window, "touchend", P, !1),
            i(window, "touchcancel", P, !1);
        };
      } else {
        let m = (w) => {
            if (w.pointerId === o.current.id) {
              var P, g;
              let E = w.pointerType || "mouse";
              var h, v;
              l(
                w,
                E,
                w.pageX -
                  ((h =
                    (P = o.current.lastPosition) === null || P === void 0
                      ? void 0
                      : P.pageX) !== null && h !== void 0
                    ? h
                    : 0),
                w.pageY -
                  ((v =
                    (g = o.current.lastPosition) === null || g === void 0
                      ? void 0
                      : g.pageY) !== null && v !== void 0
                    ? v
                    : 0)
              ),
                (o.current.lastPosition = { pageX: w.pageX, pageY: w.pageY });
            }
          },
          b = (w) => {
            if (w.pointerId === o.current.id) {
              let P = w.pointerType || "mouse";
              a(w, P),
                (o.current.id = null),
                s(window, "pointermove", m, !1),
                s(window, "pointerup", b, !1),
                s(window, "pointercancel", b, !1);
            }
          };
        c.onPointerDown = (w) => {
          w.button === 0 &&
            o.current.id == null &&
            (d(),
            w.stopPropagation(),
            w.preventDefault(),
            (o.current.lastPosition = { pageX: w.pageX, pageY: w.pageY }),
            (o.current.id = w.pointerId),
            i(window, "pointermove", m, !1),
            i(window, "pointerup", b, !1),
            i(window, "pointercancel", b, !1));
        };
      }
      let f = (m, b, w) => {
        d(), l(m, "keyboard", b, w), a(m, "keyboard");
      };
      return (
        (c.onKeyDown = (m) => {
          switch (m.key) {
            case "Left":
            case "ArrowLeft":
              m.preventDefault(), m.stopPropagation(), f(m, -1, 0);
              break;
            case "Right":
            case "ArrowRight":
              m.preventDefault(), m.stopPropagation(), f(m, 1, 0);
              break;
            case "Up":
            case "ArrowUp":
              m.preventDefault(), m.stopPropagation(), f(m, 0, -1);
              break;
            case "Down":
            case "ArrowDown":
              m.preventDefault(), m.stopPropagation(), f(m, 0, 1);
              break;
          }
        }),
        c
      );
    }, [o, i, s, l, a]),
  };
}
const Yx = 500;
function Xx(e) {
  let {
    isDisabled: t,
    onLongPressStart: n,
    onLongPressEnd: r,
    onLongPress: o,
    threshold: i = Yx,
    accessibilityDescription: s,
  } = e;
  const l = S.useRef();
  let { addGlobalListener: a, removeGlobalListener: u } = fo(),
    { pressProps: c } = Xv({
      isDisabled: t,
      onPressStart(f) {
        if (
          (f.continuePropagation(),
          (f.pointerType === "mouse" || f.pointerType === "touch") &&
            (n && n({ ...f, type: "longpressstart" }),
            (l.current = setTimeout(() => {
              f.target.dispatchEvent(
                new PointerEvent("pointercancel", { bubbles: !0 })
              ),
                o && o({ ...f, type: "longpress" }),
                (l.current = void 0);
            }, i)),
            f.pointerType === "touch"))
        ) {
          let m = (b) => {
            b.preventDefault();
          };
          a(f.target, "contextmenu", m, { once: !0 }),
            a(
              window,
              "pointerup",
              () => {
                setTimeout(() => {
                  u(f.target, "contextmenu", m);
                }, 30);
              },
              { once: !0 }
            );
        }
      },
      onPressEnd(f) {
        l.current && clearTimeout(l.current),
          r &&
            (f.pointerType === "mouse" || f.pointerType === "touch") &&
            r({ ...f, type: "longpressend" });
      },
    }),
    d = yx(o && !t ? s : void 0);
  return { longPressProps: ee(c, d) };
}
function rl(e) {
  const t = Ze(e);
  if (tl() === "virtual") {
    let n = t.activeElement;
    yd(() => {
      t.activeElement === n && e.isConnected && Je(e);
    });
  } else Je(e);
}
function Qx(e) {
  const t = Ct(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style,
    o = n !== "none" && r !== "hidden" && r !== "collapse";
  if (o) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: s, visibility: l } = i(e);
    o = s !== "none" && l !== "hidden" && l !== "collapse";
  }
  return o;
}
function Zx(e, t) {
  return (
    !e.hasAttribute("hidden") &&
    (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY"
      ? e.hasAttribute("open")
      : !0)
  );
}
function iy(e, t) {
  return (
    e.nodeName !== "#comment" &&
    Qx(e) &&
    Zx(e, t) &&
    (!e.parentElement || iy(e.parentElement, e))
  );
}
let qx = null;
const Td = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]",
  ],
  Jx = Td.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Td.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const eS = Td.join(':not([hidden]):not([tabindex="-1"]),');
function kd(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
function tS(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: n } of Mp.traverse(Mp.getTreeNode(t)))
    if (n && kd(e, n.current)) return !0;
  return !1;
}
function nS(e) {
  return tS(e, qx);
}
function sy(e, t, n) {
  let r = t != null && t.tabbable ? eS : Jx,
    o = Ze(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode(i) {
        var s;
        return !(t == null || (s = t.from) === null || s === void 0) &&
          s.contains(i)
          ? NodeFilter.FILTER_REJECT
          : i.matches(r) &&
            iy(i) &&
            (!n || kd(i, n)) &&
            (!(t != null && t.accept) || t.accept(i))
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  return t != null && t.from && (o.currentNode = t.from), o;
}
class Cd {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, n, r) {
    let o = this.fastMap.get(n ?? null);
    if (!o) return;
    let i = new $p({ scopeRef: t });
    o.addChild(i),
      (i.parent = o),
      this.fastMap.set(t, i),
      r && (i.nodeToRestore = r);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let n = this.fastMap.get(t);
    if (!n) return;
    let r = n.parent;
    for (let i of this.traverse())
      i !== n &&
        n.nodeToRestore &&
        i.nodeToRestore &&
        n.scopeRef &&
        n.scopeRef.current &&
        kd(i.nodeToRestore, n.scopeRef.current) &&
        (i.nodeToRestore = n.nodeToRestore);
    let o = n.children;
    r && (r.removeChild(n), o.size > 0 && o.forEach((i) => r && r.addChild(i))),
      this.fastMap.delete(n.scopeRef);
  }
  *traverse(t = this.root) {
    if ((t.scopeRef != null && (yield t), t.children.size > 0))
      for (let n of t.children) yield* this.traverse(n);
  }
  clone() {
    var t;
    let n = new Cd();
    var r;
    for (let o of this.traverse())
      n.addTreeNode(
        o.scopeRef,
        (r = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !==
          null && r !== void 0
          ? r
          : null,
        o.nodeToRestore
      );
    return n;
  }
  constructor() {
    (this.fastMap = new Map()),
      (this.root = new $p({ scopeRef: null })),
      this.fastMap.set(null, this.root);
  }
}
class $p {
  addChild(t) {
    this.children.add(t), (t.parent = this);
  }
  removeChild(t) {
    this.children.delete(t), (t.parent = void 0);
  }
  constructor(t) {
    (this.children = new Set()),
      (this.contain = !1),
      (this.scopeRef = t.scopeRef);
  }
}
let Mp = new Cd();
function Ei(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e,
    o = S.useRef({ isFocused: !1, isFocusVisible: t || Sd() }),
    [i, s] = S.useState(!1),
    [l, a] = S.useState(() => o.current.isFocused && o.current.isFocusVisible),
    u = S.useCallback(
      () => a(o.current.isFocused && o.current.isFocusVisible),
      []
    ),
    c = S.useCallback(
      (m) => {
        (o.current.isFocused = m), s(m), u();
      },
      [u]
    );
  Wx(
    (m) => {
      (o.current.isFocusVisible = m), u();
    },
    [],
    { isTextInput: n }
  );
  let { focusProps: d } = qv({ isDisabled: r, onFocusChange: c }),
    { focusWithinProps: f } = Pd({ isDisabled: !r, onFocusWithinChange: c });
  return { isFocused: i, isFocusVisible: l, focusProps: r ? f : d };
}
let rS = ie.createContext(null);
function oS(e) {
  let t = S.useContext(rS) || {};
  wd(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Ed(e, t) {
  let { focusProps: n } = qv(e),
    { keyboardProps: r } = ry(e),
    o = ee(n, r),
    i = oS(t),
    s = e.isDisabled ? {} : i,
    l = S.useRef(e.autoFocus);
  return (
    S.useEffect(() => {
      l.current && t.current && rl(t.current), (l.current = !1);
    }, [t]),
    {
      focusableProps: ee(
        {
          ...o,
          tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
        },
        s
      ),
    }
  );
}
function iS(e, t) {
  let n = t == null ? void 0 : t.isDisabled,
    [r, o] = S.useState(!1);
  return (
    nn(() => {
      if (e != null && e.current && !n) {
        let i = () => {
          if (e.current) {
            let l = sy(e.current, { tabbable: !0 });
            o(!!l.nextNode());
          }
        };
        i();
        let s = new MutationObserver(i);
        return (
          s.observe(e.current, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeFilter: ["tabIndex", "disabled"],
          }),
          () => {
            s.disconnect();
          }
        );
      }
    }),
    n ? !1 : r
  );
}
const Lp = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
};
function sS(e = {}) {
  let { style: t, isFocusable: n } = e,
    [r, o] = S.useState(!1),
    { focusWithinProps: i } = Pd({
      isDisabled: !n,
      onFocusWithinChange: (l) => o(l),
    }),
    s = S.useMemo(() => (r ? t : t ? { ...Lp, ...t } : Lp), [r]);
  return { visuallyHiddenProps: { ...i, style: s } };
}
function lS(e) {
  let {
      children: t,
      elementType: n = "div",
      isFocusable: r,
      style: o,
      ...i
    } = e,
    { visuallyHiddenProps: s } = sS(e);
  return ie.createElement(n, ee(i, s), t);
}
const Kr = { top: "top", bottom: "top", left: "left", right: "left" },
  ol = { top: "bottom", bottom: "top", left: "right", right: "left" },
  aS = { top: "left", left: "top" },
  Yu = { top: "height", left: "width" },
  ly = { width: "totalWidth", height: "totalHeight" },
  es = {};
let Xe = typeof document < "u" && window.visualViewport;
function Dp(e) {
  let t = 0,
    n = 0,
    r = 0,
    o = 0,
    i = 0,
    s = 0,
    l = {},
    a = (Xe == null ? void 0 : Xe.scale) > 1;
  if (e.tagName === "BODY") {
    let d = document.documentElement;
    (r = d.clientWidth), (o = d.clientHeight);
    var u;
    t = (u = Xe == null ? void 0 : Xe.width) !== null && u !== void 0 ? u : r;
    var c;
    (n =
      (c = Xe == null ? void 0 : Xe.height) !== null && c !== void 0 ? c : o),
      (l.top = d.scrollTop || e.scrollTop),
      (l.left = d.scrollLeft || e.scrollLeft),
      Xe && ((i = Xe.offsetTop), (s = Xe.offsetLeft));
  } else
    ({ width: t, height: n, top: i, left: s } = Zr(e)),
      (l.top = e.scrollTop),
      (l.left = e.scrollLeft),
      (r = t),
      (o = n);
  return (
    Kv() &&
      (e.tagName === "BODY" || e.tagName === "HTML") &&
      a &&
      ((l.top = 0), (l.left = 0), (i = Xe.pageTop), (s = Xe.pageLeft)),
    {
      width: t,
      height: n,
      totalWidth: r,
      totalHeight: o,
      scroll: l,
      top: i,
      left: s,
    }
  );
}
function uS(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight,
  };
}
function Ap(e, t, n, r, o, i, s) {
  let l = o.scroll[e],
    a = r[Yu[e]],
    u = r.scroll[Kr[e]] + i,
    c = a + r.scroll[Kr[e]] - i,
    d = t - l + s[e] - r[Kr[e]],
    f = t - l + n + s[e] - r[Kr[e]];
  return d < u ? u - d : f > c ? Math.max(c - f, u - d) : 0;
}
function cS(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0,
  };
}
function Rp(e) {
  if (es[e]) return es[e];
  let [t, n] = e.split(" "),
    r = Kr[t] || "right",
    o = aS[r];
  Kr[n] || (n = "center");
  let i = Yu[r],
    s = Yu[o];
  return (
    (es[e] = {
      placement: t,
      crossPlacement: n,
      axis: r,
      crossAxis: o,
      size: i,
      crossSize: s,
    }),
    es[e]
  );
}
function ya(e, t, n, r, o, i, s, l, a, u) {
  let {
      placement: c,
      crossPlacement: d,
      axis: f,
      crossAxis: m,
      size: b,
      crossSize: w,
    } = r,
    P = {};
  (P[m] = e[m]),
    d === "center"
      ? (P[m] += (e[w] - n[w]) / 2)
      : d !== m && (P[m] += e[w] - n[w]),
    (P[m] += i);
  const g = e[m] - n[w] + a + u,
    h = e[m] + e[w] - a - u;
  if (((P[m] = io(P[m], g, h)), c === f)) {
    const v = l ? s[b] : t[ly[b]];
    P[ol[f]] = Math.floor(v - e[f] + o);
  } else P[f] = Math.floor(e[f] + e[b] + o);
  return P;
}
function dS(e, t, n, r, o, i, s, l) {
  const a = r ? n.height : t[ly.height];
  let u = e.top != null ? n.top + e.top : n.top + (a - e.bottom - s),
    c =
      l !== "top"
        ? Math.max(
            0,
            t.height + t.top + t.scroll.top - u - (o.top + o.bottom + i)
          )
        : Math.max(0, u + s - (t.top + t.scroll.top) - (o.top + o.bottom + i));
  return Math.min(t.height - i * 2, c);
}
function Ip(e, t, n, r, o, i) {
  let { placement: s, axis: l, size: a } = i;
  return s === l
    ? Math.max(0, n[l] - e[l] - e.scroll[l] + t[l] - r[l] - r[ol[l]] - o)
    : Math.max(
        0,
        e[a] + e[l] + e.scroll[l] - t[l] - n[l] - n[a] - r[l] - r[ol[l]] - o
      );
}
function fS(e, t, n, r, o, i, s, l, a, u, c, d, f, m, b, w) {
  let P = Rp(e),
    {
      size: g,
      crossAxis: h,
      crossSize: v,
      placement: E,
      crossPlacement: L,
    } = P,
    M = ya(t, l, n, P, c, d, u, f, b, w),
    N = c,
    p = Ip(l, u, t, o, i + c, P);
  if (s && r[g] > p) {
    let z = Rp(`${ol[E]} ${L}`),
      C = ya(t, l, n, z, c, d, u, f, b, w);
    Ip(l, u, t, o, i + c, z) > p && ((P = z), (M = C), (N = c));
  }
  let R = "bottom";
  P.axis === "top"
    ? P.placement === "top"
      ? (R = "top")
      : P.placement === "bottom" && (R = "bottom")
    : P.crossAxis === "top" &&
      (P.crossPlacement === "top"
        ? (R = "bottom")
        : P.crossPlacement === "bottom" && (R = "top"));
  let A = Ap(h, M[h], n[v], l, a, i, u);
  M[h] += A;
  let $ = dS(M, l, u, f, o, i, n.height, R);
  m && m < $ && ($ = m),
    (n.height = Math.min(n.height, $)),
    (M = ya(t, l, n, P, N, d, u, f, b, w)),
    (A = Ap(h, M[h], n[v], l, a, i, u)),
    (M[h] += A);
  let I = {},
    x = t[h] + 0.5 * t[v] - n[h];
  const k = b / 2 + w,
    K = n[v] - b / 2 - w,
    j = t[h] - n[h] + b / 2,
    V = t[h] + t[v] - n[h] - b / 2,
    F = io(x, j, V);
  return (
    (I[h] = io(F, k, K)),
    {
      position: M,
      maxHeight: $,
      arrowOffsetLeft: I.left,
      arrowOffsetTop: I.top,
      placement: P.placement,
    }
  );
}
function pS(e) {
  let {
      placement: t,
      targetNode: n,
      overlayNode: r,
      scrollNode: o,
      padding: i,
      shouldFlip: s,
      boundaryElement: l,
      offset: a,
      crossOffset: u,
      maxHeight: c,
      arrowSize: d = 0,
      arrowBoundaryOffset: f = 0,
    } = e,
    m = r instanceof HTMLElement ? hS(r) : document.documentElement,
    b = m === document.documentElement;
  const w = window.getComputedStyle(m).position;
  let P = !!w && w !== "static",
    g = b ? Zr(n) : Vp(n, m);
  if (!b) {
    let { marginTop: p, marginLeft: R } = window.getComputedStyle(n);
    (g.top += parseInt(p, 10) || 0), (g.left += parseInt(R, 10) || 0);
  }
  let h = Zr(r),
    v = cS(r);
  (h.width += v.left + v.right), (h.height += v.top + v.bottom);
  let E = uS(o),
    L = Dp(l),
    M = Dp(m),
    N = l.tagName === "BODY" ? Zr(m) : Vp(m, l);
  return (
    m.tagName === "HTML" &&
      l.tagName === "BODY" &&
      ((M.scroll.top = 0), (M.scroll.left = 0)),
    fS(t, g, h, E, v, i, s, L, M, N, a, u, P, c, d, f)
  );
}
function Zr(e) {
  let { top: t, left: n, width: r, height: o } = e.getBoundingClientRect(),
    {
      scrollTop: i,
      scrollLeft: s,
      clientTop: l,
      clientLeft: a,
    } = document.documentElement;
  return { top: t + i - l, left: n + s - a, width: r, height: o };
}
function Vp(e, t) {
  let n = window.getComputedStyle(e),
    r;
  if (n.position === "fixed") {
    let { top: o, left: i, width: s, height: l } = e.getBoundingClientRect();
    r = { top: o, left: i, width: s, height: l };
  } else {
    r = Zr(e);
    let o = Zr(t),
      i = window.getComputedStyle(t);
    (o.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop),
      (o.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft),
      (r.top -= o.top),
      (r.left -= o.left);
  }
  return (
    (r.top -= parseInt(n.marginTop, 10) || 0),
    (r.left -= parseInt(n.marginLeft, 10) || 0),
    r
  );
}
function hS(e) {
  let t = e.offsetParent;
  if (
    (t &&
      t === document.body &&
      window.getComputedStyle(t).position === "static" &&
      !Op(t) &&
      (t = document.documentElement),
    t == null)
  )
    for (t = e.parentElement; t && !Op(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function Op(e) {
  let t = window.getComputedStyle(e);
  return (
    t.transform !== "none" ||
    /transform|perspective/.test(t.willChange) ||
    t.filter !== "none" ||
    t.contain === "paint" ||
    ("backdropFilter" in t && t.backdropFilter !== "none") ||
    ("WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none")
  );
}
const mS = new WeakMap();
function gS(e) {
  let { triggerRef: t, isOpen: n, onClose: r } = e;
  S.useEffect(() => {
    if (!n || r === null) return;
    let o = (i) => {
      let s = i.target;
      if (!t.current || (s instanceof Node && !s.contains(t.current))) return;
      let l = r || mS.get(t.current);
      l && l();
    };
    return (
      window.addEventListener("scroll", o, !0),
      () => {
        window.removeEventListener("scroll", o, !0);
      }
    );
  }, [n, r, t]);
}
let ye = typeof document < "u" && window.visualViewport;
function vS(e) {
  let { direction: t } = fr(),
    {
      arrowSize: n = 0,
      targetRef: r,
      overlayRef: o,
      scrollRef: i = o,
      placement: s = "bottom",
      containerPadding: l = 12,
      shouldFlip: a = !0,
      boundaryElement: u = typeof document < "u" ? document.body : null,
      offset: c = 0,
      crossOffset: d = 0,
      shouldUpdatePosition: f = !0,
      isOpen: m = !0,
      onClose: b,
      maxHeight: w,
      arrowBoundaryOffset: P = 0,
    } = e,
    [g, h] = S.useState({
      position: {},
      arrowOffsetLeft: void 0,
      arrowOffsetTop: void 0,
      maxHeight: void 0,
      placement: void 0,
    }),
    v = [f, s, o.current, r.current, i.current, l, a, u, c, d, m, t, w, P, n],
    E = S.useRef(ye == null ? void 0 : ye.scale);
  S.useEffect(() => {
    m && (E.current = ye == null ? void 0 : ye.scale);
  }, [m]);
  let L = S.useCallback(() => {
    if (
      f === !1 ||
      !m ||
      !o.current ||
      !r.current ||
      !i.current ||
      !u ||
      (ye == null ? void 0 : ye.scale) !== E.current
    )
      return;
    !w && o.current && (o.current.style.maxHeight = "none");
    let p = pS({
      placement: bS(s, t),
      overlayNode: o.current,
      targetNode: r.current,
      scrollNode: i.current,
      padding: l,
      shouldFlip: a,
      boundaryElement: u,
      offset: c,
      crossOffset: d,
      maxHeight: w,
      arrowSize: n,
      arrowBoundaryOffset: P,
    });
    Object.keys(p.position).forEach(
      (R) => (o.current.style[R] = p.position[R] + "px")
    ),
      (o.current.style.maxHeight =
        p.maxHeight != null ? p.maxHeight + "px" : void 0),
      h(p);
  }, v);
  nn(L, v), yS(L), gx({ ref: o, onResize: L });
  let M = S.useRef(!1);
  nn(() => {
    let p,
      R = () => {
        (M.current = !0),
          clearTimeout(p),
          (p = setTimeout(() => {
            M.current = !1;
          }, 500)),
          L();
      },
      A = () => {
        M.current && R();
      };
    return (
      ye == null || ye.addEventListener("resize", R),
      ye == null || ye.addEventListener("scroll", A),
      () => {
        ye == null || ye.removeEventListener("resize", R),
          ye == null || ye.removeEventListener("scroll", A);
      }
    );
  }, [L]);
  let N = S.useCallback(() => {
    M.current || b();
  }, [b, M]);
  return (
    gS({ triggerRef: r, isOpen: m, onClose: b && N }),
    {
      overlayProps: {
        style: {
          position: "absolute",
          zIndex: 1e5,
          ...g.position,
          maxHeight: g.maxHeight,
        },
      },
      placement: g.placement,
      arrowProps: {
        "aria-hidden": "true",
        role: "presentation",
        style: { left: g.arrowOffsetLeft, top: g.arrowOffsetTop },
      },
      updatePosition: L,
    }
  );
}
function yS(e) {
  nn(
    () => (
      window.addEventListener("resize", e, !1),
      () => {
        window.removeEventListener("resize", e, !1);
      }
    ),
    [e]
  );
}
function bS(e, t) {
  return t === "rtl"
    ? e.replace("start", "right").replace("end", "left")
    : e.replace("start", "left").replace("end", "right");
}
const jt = [];
function wS(e, t) {
  let {
    onClose: n,
    shouldCloseOnBlur: r,
    isOpen: o,
    isDismissable: i = !1,
    isKeyboardDismissDisabled: s = !1,
    shouldCloseOnInteractOutside: l,
  } = e;
  S.useEffect(
    () => (
      o && jt.push(t),
      () => {
        let b = jt.indexOf(t);
        b >= 0 && jt.splice(b, 1);
      }
    ),
    [o, t]
  );
  let a = () => {
      jt[jt.length - 1] === t && n && n();
    },
    u = (b) => {
      (!l || l(b.target)) &&
        jt[jt.length - 1] === t &&
        (b.stopPropagation(), b.preventDefault());
    },
    c = (b) => {
      (!l || l(b.target)) &&
        (jt[jt.length - 1] === t && (b.stopPropagation(), b.preventDefault()),
        a());
    },
    d = (b) => {
      b.key === "Escape" &&
        !s &&
        (b.stopPropagation(), b.preventDefault(), a());
    };
  Gx({
    ref: t,
    onInteractOutside: i && o ? c : null,
    onInteractOutsideStart: u,
  });
  let { focusWithinProps: f } = Pd({
      isDisabled: !r,
      onBlurWithin: (b) => {
        !b.relatedTarget ||
          nS(b.relatedTarget) ||
          ((!l || l(b.relatedTarget)) && n());
      },
    }),
    m = (b) => {
      b.target === b.currentTarget && b.preventDefault();
    };
  return {
    overlayProps: { onKeyDown: d, ...f },
    underlayProps: { onPointerDown: m },
  };
}
const Xu = ie.createContext(null);
function xS(e) {
  let { children: t } = e,
    n = S.useContext(Xu),
    [r, o] = S.useState(0),
    i = S.useMemo(
      () => ({
        parent: n,
        modalCount: r,
        addModal() {
          o((s) => s + 1), n && n.addModal();
        },
        removeModal() {
          o((s) => s - 1), n && n.removeModal();
        },
      }),
      [n, r]
    );
  return ie.createElement(Xu.Provider, { value: i }, t);
}
function SS() {
  let e = S.useContext(Xu);
  return {
    modalProviderProps: { "aria-hidden": e && e.modalCount > 0 ? !0 : null },
  };
}
function PS(e) {
  let { modalProviderProps: t } = SS();
  return ie.createElement("div", { "data-overlay-container": !0, ...e, ...t });
}
function TS(e) {
  return ie.createElement(xS, null, ie.createElement(PS, e));
}
function Fp(e) {
  let t = md(),
    { portalContainer: n = t ? null : document.body, ...r } = e;
  if (
    (ie.useEffect(() => {
      if (n != null && n.closest("[data-overlay-container]"))
        throw new Error(
          "An OverlayContainer must not be inside another container. Please change the portalContainer prop."
        );
    }, [n]),
    !n)
  )
    return null;
  let o = ie.createElement(TS, r);
  return jw.createPortal(o, n);
}
function Nt(e) {
  return S.forwardRef(e);
}
var $i = (e, t, n = !0) => {
    if (!t) return [e, {}];
    const r = t.reduce((o, i) => (i in e ? { ...o, [i]: e[i] } : o), {});
    return n
      ? [
          Object.keys(e)
            .filter((i) => !t.includes(i))
            .reduce((i, s) => ({ ...i, [s]: e[s] }), {}),
          r,
        ]
      : [e, r];
  },
  kS = [
    "0",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl",
    "1",
    "2",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96",
  ],
  ba = kS.map((e) => `unit-${e}`),
  Np = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  rt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0,
  CS = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function ay(e, t) {
  e.forEach(function (n) {
    Array.isArray(n) ? ay(n, t) : t.push(n);
  });
}
function uy(e) {
  let t = [];
  return ay(e, t), t;
}
var cy = (...e) => uy(e).filter(Boolean),
  dy = (e, t) => {
    let n = {},
      r = Object.keys(e),
      o = Object.keys(t);
    for (let i of r)
      if (o.includes(i)) {
        let s = e[i],
          l = t[i];
        typeof s == "object" && typeof l == "object"
          ? (n[i] = dy(s, l))
          : Array.isArray(s) || Array.isArray(l)
          ? (n[i] = cy(l, s))
          : (n[i] = l + " " + s);
      } else n[i] = e[i];
    for (let i of o) r.includes(i) || (n[i] = t[i]);
    return n;
  },
  Kp = (e) => (!e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim());
function ES() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = fy(t)) && (r && (r += " "), (r += n));
  return r;
}
function fy(e) {
  if (typeof e == "string") return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = fy(e[r])) && (n && (n += " "), (n += t));
  return n;
}
var $d = "-";
function $S(e) {
  var t = LS(e),
    n = e.conflictingClassGroups,
    r = e.conflictingClassGroupModifiers,
    o = r === void 0 ? {} : r;
  function i(l) {
    var a = l.split($d);
    return a[0] === "" && a.length !== 1 && a.shift(), py(a, t) || MS(l);
  }
  function s(l, a) {
    var u = n[l] || [];
    return a && o[l] ? [].concat(u, o[l]) : u;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: s };
}
function py(e, t) {
  var s;
  if (e.length === 0) return t.classGroupId;
  var n = e[0],
    r = t.nextPart.get(n),
    o = r ? py(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length !== 0) {
    var i = e.join($d);
    return (s = t.validators.find(function (l) {
      var a = l.validator;
      return a(i);
    })) == null
      ? void 0
      : s.classGroupId;
  }
}
var jp = /^\[(.+)\]$/;
function MS(e) {
  if (jp.test(e)) {
    var t = jp.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function LS(e) {
  var t = e.theme,
    n = e.prefix,
    r = { nextPart: new Map(), validators: [] },
    o = AS(Object.entries(e.classGroups), n);
  return (
    o.forEach(function (i) {
      var s = i[0],
        l = i[1];
      Qu(l, r, s, t);
    }),
    r
  );
}
function Qu(e, t, n, r) {
  e.forEach(function (o) {
    if (typeof o == "string") {
      var i = o === "" ? t : _p(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (DS(o)) {
        Qu(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(function (s) {
      var l = s[0],
        a = s[1];
      Qu(a, _p(t, l), n, r);
    });
  });
}
function _p(e, t) {
  var n = e;
  return (
    t.split($d).forEach(function (r) {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function DS(e) {
  return e.isThemeGetter;
}
function AS(e, t) {
  return t
    ? e.map(function (n) {
        var r = n[0],
          o = n[1],
          i = o.map(function (s) {
            return typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(function (l) {
                    var a = l[0],
                      u = l[1];
                    return [t + a, u];
                  })
                )
              : s;
          });
        return [r, i];
      })
    : e;
}
function RS(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    n = new Map(),
    r = new Map();
  function o(i, s) {
    n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get: function (s) {
      var l = n.get(s);
      if (l !== void 0) return l;
      if ((l = r.get(s)) !== void 0) return o(s, l), l;
    },
    set: function (s, l) {
      n.has(s) ? n.set(s, l) : o(s, l);
    },
  };
}
var hy = "!";
function IS(e) {
  var t = e.separator || ":",
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (s) {
    for (var l = [], a = 0, u = 0, c, d = 0; d < s.length; d++) {
      var f = s[d];
      if (a === 0) {
        if (f === r && (n || s.slice(d, d + o) === t)) {
          l.push(s.slice(u, d)), (u = d + o);
          continue;
        }
        if (f === "/") {
          c = d;
          continue;
        }
      }
      f === "[" ? a++ : f === "]" && a--;
    }
    var m = l.length === 0 ? s : s.substring(u),
      b = m.startsWith(hy),
      w = b ? m.substring(1) : m,
      P = c && c > u ? c - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: b,
      baseClassName: w,
      maybePostfixModifierPosition: P,
    };
  };
}
function VS(e) {
  if (e.length <= 1) return e;
  var t = [],
    n = [];
  return (
    e.forEach(function (r) {
      var o = r[0] === "[";
      o ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
    }),
    t.push.apply(t, n.sort()),
    t
  );
}
function OS(e) {
  return { cache: RS(e.cacheSize), splitModifiers: IS(e), ...$S(e) };
}
var FS = /\s+/;
function NS(e, t) {
  var n = t.splitModifiers,
    r = t.getClassGroupId,
    o = t.getConflictingClassGroupIds,
    i = new Set();
  return e
    .trim()
    .split(FS)
    .map(function (s) {
      var l = n(s),
        a = l.modifiers,
        u = l.hasImportantModifier,
        c = l.baseClassName,
        d = l.maybePostfixModifierPosition,
        f = r(d ? c.substring(0, d) : c),
        m = !!d;
      if (!f) {
        if (!d) return { isTailwindClass: !1, originalClassName: s };
        if (((f = r(c)), !f))
          return { isTailwindClass: !1, originalClassName: s };
        m = !1;
      }
      var b = VS(a).join(":"),
        w = u ? b + hy : b;
      return {
        isTailwindClass: !0,
        modifierId: w,
        classGroupId: f,
        originalClassName: s,
        hasPostfixModifier: m,
      };
    })
    .reverse()
    .filter(function (s) {
      if (!s.isTailwindClass) return !0;
      var l = s.modifierId,
        a = s.classGroupId,
        u = s.hasPostfixModifier,
        c = l + a;
      return i.has(c)
        ? !1
        : (i.add(c),
          o(a, u).forEach(function (d) {
            return i.add(l + d);
          }),
          !0);
    })
    .reverse()
    .map(function (s) {
      return s.originalClassName;
    })
    .join(" ");
}
function Zu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r,
    o,
    i,
    s = l;
  function l(u) {
    var c = t[0],
      d = t.slice(1),
      f = d.reduce(function (m, b) {
        return b(m);
      }, c());
    return (r = OS(f)), (o = r.cache.get), (i = r.cache.set), (s = a), a(u);
  }
  function a(u) {
    var c = o(u);
    if (c) return c;
    var d = NS(u, r);
    return i(u, d), d;
  }
  return function () {
    return s(ES.apply(null, arguments));
  };
}
function ae(e) {
  var t = function (r) {
    return r[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var my = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  KS = /^\d+\/\d+$/,
  jS = new Set(["px", "full", "screen"]),
  _S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  zS =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  BS = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function xt(e) {
  return Jn(e) || jS.has(e) || KS.test(e) || qu(e);
}
function qu(e) {
  return mr(e, "length", XS);
}
function US(e) {
  return mr(e, "size", gy);
}
function WS(e) {
  return mr(e, "position", gy);
}
function HS(e) {
  return mr(e, "url", QS);
}
function ts(e) {
  return mr(e, "number", Jn);
}
function Jn(e) {
  return !Number.isNaN(Number(e));
}
function GS(e) {
  return e.endsWith("%") && Jn(e.slice(0, -1));
}
function Po(e) {
  return zp(e) || mr(e, "number", zp);
}
function q(e) {
  return my.test(e);
}
function To() {
  return !0;
}
function ln(e) {
  return _S.test(e);
}
function YS(e) {
  return mr(e, "", ZS);
}
function mr(e, t, n) {
  var r = my.exec(e);
  return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function XS(e) {
  return zS.test(e);
}
function gy() {
  return !1;
}
function QS(e) {
  return e.startsWith("url(");
}
function zp(e) {
  return Number.isInteger(Number(e));
}
function ZS(e) {
  return BS.test(e);
}
function Ju() {
  var e = ae("colors"),
    t = ae("spacing"),
    n = ae("blur"),
    r = ae("brightness"),
    o = ae("borderColor"),
    i = ae("borderRadius"),
    s = ae("borderSpacing"),
    l = ae("borderWidth"),
    a = ae("contrast"),
    u = ae("grayscale"),
    c = ae("hueRotate"),
    d = ae("invert"),
    f = ae("gap"),
    m = ae("gradientColorStops"),
    b = ae("gradientColorStopPositions"),
    w = ae("inset"),
    P = ae("margin"),
    g = ae("opacity"),
    h = ae("padding"),
    v = ae("saturate"),
    E = ae("scale"),
    L = ae("sepia"),
    M = ae("skew"),
    N = ae("space"),
    p = ae("translate"),
    R = function () {
      return ["auto", "contain", "none"];
    },
    A = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    $ = function () {
      return ["auto", q, t];
    },
    I = function () {
      return [q, t];
    },
    x = function () {
      return ["", xt];
    },
    k = function () {
      return ["auto", Jn, q];
    },
    K = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    j = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    V = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    F = function () {
      return [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ];
    },
    z = function () {
      return ["", "0", q];
    },
    C = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    },
    y = function () {
      return [Jn, ts];
    },
    T = function () {
      return [Jn, q];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [To],
      spacing: [xt],
      blur: ["none", "", ln, q],
      brightness: y(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ln, q],
      borderSpacing: I(),
      borderWidth: x(),
      contrast: y(),
      grayscale: z(),
      hueRotate: T(),
      invert: z(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [GS, qu],
      inset: $(),
      margin: $(),
      opacity: y(),
      padding: I(),
      saturate: y(),
      scale: y(),
      sepia: z(),
      skew: T(),
      space: I(),
      translate: I(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", q] }],
      container: ["container"],
      columns: [{ columns: [ln] }],
      "break-after": [{ "break-after": C() }],
      "break-before": [{ "break-before": C() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(K(), [q]) }],
      overflow: [{ overflow: A() }],
      "overflow-x": [{ "overflow-x": A() }],
      "overflow-y": [{ "overflow-y": A() }],
      overscroll: [{ overscroll: R() }],
      "overscroll-x": [{ "overscroll-x": R() }],
      "overscroll-y": [{ "overscroll-y": R() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [w] }],
      "inset-x": [{ "inset-x": [w] }],
      "inset-y": [{ "inset-y": [w] }],
      start: [{ start: [w] }],
      end: [{ end: [w] }],
      top: [{ top: [w] }],
      right: [{ right: [w] }],
      bottom: [{ bottom: [w] }],
      left: [{ left: [w] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Po] }],
      basis: [{ basis: $() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", q] }],
      grow: [{ grow: z() }],
      shrink: [{ shrink: z() }],
      order: [{ order: ["first", "last", "none", Po] }],
      "grid-cols": [{ "grid-cols": [To] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Po] }, q] }],
      "col-start": [{ "col-start": k() }],
      "col-end": [{ "col-end": k() }],
      "grid-rows": [{ "grid-rows": [To] }],
      "row-start-end": [{ row: ["auto", { span: [Po] }, q] }],
      "row-start": [{ "row-start": k() }],
      "row-end": [{ "row-end": k() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", q] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", q] }],
      gap: [{ gap: [f] }],
      "gap-x": [{ "gap-x": [f] }],
      "gap-y": [{ "gap-y": [f] }],
      "justify-content": [{ justify: ["normal"].concat(F()) }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal"].concat(F(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [].concat(F(), ["baseline"]) }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [h] }],
      px: [{ px: [h] }],
      py: [{ py: [h] }],
      ps: [{ ps: [h] }],
      pe: [{ pe: [h] }],
      pt: [{ pt: [h] }],
      pr: [{ pr: [h] }],
      pb: [{ pb: [h] }],
      pl: [{ pl: [h] }],
      m: [{ m: [P] }],
      mx: [{ mx: [P] }],
      my: [{ my: [P] }],
      ms: [{ ms: [P] }],
      me: [{ me: [P] }],
      mt: [{ mt: [P] }],
      mr: [{ mr: [P] }],
      mb: [{ mb: [P] }],
      ml: [{ ml: [P] }],
      "space-x": [{ "space-x": [N] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [N] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", q, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", q, xt] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [ln] },
            ln,
            q,
          ],
        },
      ],
      h: [{ h: [q, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", q, xt] }],
      "max-h": [{ "max-h": [q, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", ln, qu] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            ts,
          ],
        },
      ],
      "font-family": [{ font: [To] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            q,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", Jn, ts] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            q,
            xt,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", q] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", q] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [g] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [g] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(j(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", xt] }],
      "underline-offset": [{ "underline-offset": ["auto", q, xt] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: I() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            q,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", q] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [g] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(K(), [WS]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", US] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            HS,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [b] }],
      "gradient-via-pos": [{ via: [b] }],
      "gradient-to-pos": [{ to: [b] }],
      "gradient-from": [{ from: [m] }],
      "gradient-via": [{ via: [m] }],
      "gradient-to": [{ to: [m] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [l] }],
      "border-w-x": [{ "border-x": [l] }],
      "border-w-y": [{ "border-y": [l] }],
      "border-w-s": [{ "border-s": [l] }],
      "border-w-e": [{ "border-e": [l] }],
      "border-w-t": [{ "border-t": [l] }],
      "border-w-r": [{ "border-r": [l] }],
      "border-w-b": [{ "border-b": [l] }],
      "border-w-l": [{ "border-l": [l] }],
      "border-opacity": [{ "border-opacity": [g] }],
      "border-style": [{ border: [].concat(j(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [l] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [l] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [g] }],
      "divide-style": [{ divide: j() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: [""].concat(j()) }],
      "outline-offset": [{ "outline-offset": [q, xt] }],
      "outline-w": [{ outline: [xt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: x() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [g] }],
      "ring-offset-w": [{ "ring-offset": [xt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", ln, YS] }],
      "shadow-color": [{ shadow: [To] }],
      opacity: [{ opacity: [g] }],
      "mix-blend": [{ "mix-blend": V() }],
      "bg-blend": [{ "bg-blend": V() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", ln, q] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [v] }],
      sepia: [{ sepia: [L] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [g] }],
      "backdrop-saturate": [{ "backdrop-saturate": [v] }],
      "backdrop-sepia": [{ "backdrop-sepia": [L] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            q,
          ],
        },
      ],
      duration: [{ duration: T() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", q] }],
      delay: [{ delay: T() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", q] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [E] }],
      "scale-x": [{ "scale-x": [E] }],
      "scale-y": [{ "scale-y": [E] }],
      rotate: [{ rotate: [Po, q] }],
      "translate-x": [{ "translate-x": [p] }],
      "translate-y": [{ "translate-y": [p] }],
      "skew-x": [{ "skew-x": [M] }],
      "skew-y": [{ "skew-y": [M] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            q,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            q,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": I() }],
      "scroll-mx": [{ "scroll-mx": I() }],
      "scroll-my": [{ "scroll-my": I() }],
      "scroll-ms": [{ "scroll-ms": I() }],
      "scroll-me": [{ "scroll-me": I() }],
      "scroll-mt": [{ "scroll-mt": I() }],
      "scroll-mr": [{ "scroll-mr": I() }],
      "scroll-mb": [{ "scroll-mb": I() }],
      "scroll-ml": [{ "scroll-ml": I() }],
      "scroll-p": [{ "scroll-p": I() }],
      "scroll-px": [{ "scroll-px": I() }],
      "scroll-py": [{ "scroll-py": I() }],
      "scroll-ps": [{ "scroll-ps": I() }],
      "scroll-pe": [{ "scroll-pe": I() }],
      "scroll-pt": [{ "scroll-pt": I() }],
      "scroll-pr": [{ "scroll-pr": I() }],
      "scroll-pb": [{ "scroll-pb": I() }],
      "scroll-pl": [{ "scroll-pl": I() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", q] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [xt, ts] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
function qS(e, t) {
  for (var n in t) vy(e, n, t[n]);
  return e;
}
var JS = Object.prototype.hasOwnProperty,
  eP = new Set(["string", "number", "boolean"]);
function vy(e, t, n) {
  if (!JS.call(e, t) || eP.has(typeof n) || n === null) {
    e[t] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(e[t])) {
    e[t] = e[t].concat(n);
    return;
  }
  if (typeof n == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = n;
      return;
    }
    for (var r in n) vy(e[t], r, n[r]);
  }
}
function tP(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return typeof e == "function"
    ? Zu.apply(void 0, [Ju, e].concat(n))
    : Zu.apply(
        void 0,
        [
          function () {
            return qS(Ju(), e);
          },
        ].concat(n)
      );
}
var nP = Zu(Ju),
  rP = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
  yy = (e) => e || void 0,
  hi = (...e) => yy(uy(e).filter(Boolean).join(" ")),
  wa = null,
  il = {},
  ec = !1,
  ko =
    (...e) =>
    (t) =>
      t.twMerge
        ? ((!wa || ec) && ((ec = !1), (wa = rt(il) ? nP : tP(il))),
          yy(wa(hi(e))))
        : hi(e),
  Bp = (e, t) => {
    for (let n in t)
      e.hasOwnProperty(n) ? (e[n] = hi(e[n], t[n])) : (e[n] = t[n]);
    return e;
  },
  oP = (e, t) => {
    let {
        extend: n = null,
        slots: r = {},
        variants: o = {},
        compoundVariants: i = [],
        compoundSlots: s = [],
        defaultVariants: l = {},
      } = e,
      a = { ...rP, ...t },
      u =
        n != null && n.base
          ? hi(n.base, e == null ? void 0 : e.base)
          : e == null
          ? void 0
          : e.base,
      c = n != null && n.variants && !rt(n.variants) ? dy(o, n.variants) : o,
      d =
        n != null && n.defaultVariants && !rt(n.defaultVariants)
          ? { ...n.defaultVariants, ...l }
          : l;
    !rt(a.twMergeConfig) &&
      !CS(a.twMergeConfig, il) &&
      ((ec = !0), (il = a.twMergeConfig));
    let f = rt(n == null ? void 0 : n.slots),
      m = rt(r)
        ? {}
        : {
            base: hi(
              e == null ? void 0 : e.base,
              f && (n == null ? void 0 : n.base)
            ),
            ...r,
          },
      b = f
        ? m
        : Bp(
            { ...(n == null ? void 0 : n.slots) },
            rt(m) ? { base: e == null ? void 0 : e.base } : m
          ),
      w = (g) => {
        if (rt(c) && rt(r) && f)
          return ko(
            u,
            g == null ? void 0 : g.class,
            g == null ? void 0 : g.className
          )(a);
        if (i && !Array.isArray(i))
          throw new TypeError(
            `The "compoundVariants" prop must be an array. Received: ${typeof i}`
          );
        if (s && !Array.isArray(s))
          throw new TypeError(
            `The "compoundSlots" prop must be an array. Received: ${typeof s}`
          );
        let h = (I, x, k = [], K) => {
            let j = k;
            if (typeof x == "string")
              j = j.concat(
                Kp(x)
                  .split(" ")
                  .map((V) => `${I}:${V}`)
              );
            else if (Array.isArray(x))
              j = j.concat(x.reduce((V, F) => V.concat(`${I}:${F}`), []));
            else if (typeof x == "object" && typeof K == "string") {
              for (let V in x)
                if (x.hasOwnProperty(V) && V === K) {
                  let F = x[V];
                  if (F && typeof F == "string") {
                    let z = Kp(F);
                    j[K]
                      ? (j[K] = j[K].concat(
                          z.split(" ").map((C) => `${I}:${C}`)
                        ))
                      : (j[K] = z.split(" ").map((C) => `${I}:${C}`));
                  } else
                    Array.isArray(F) &&
                      F.length > 0 &&
                      (j[K] = F.reduce((z, C) => z.concat(`${I}:${C}`), []));
                }
            }
            return j;
          },
          v = (I, x = c, k = null, K = null) => {
            var j;
            let V = x[I];
            if (!V || rt(V)) return null;
            let F =
              (j = K == null ? void 0 : K[I]) != null
                ? j
                : g == null
                ? void 0
                : g[I];
            if (F === null) return null;
            let z = Np(F),
              C =
                (Array.isArray(a.responsiveVariants) &&
                  a.responsiveVariants.length > 0) ||
                a.responsiveVariants === !0,
              y = d == null ? void 0 : d[I],
              T = [];
            if (typeof z == "object" && C)
              for (let [_, U] of Object.entries(z)) {
                let H = V[U];
                if (_ === "initial") {
                  y = U;
                  continue;
                }
                (Array.isArray(a.responsiveVariants) &&
                  !a.responsiveVariants.includes(_)) ||
                  (T = h(_, H, T, k));
              }
            let D = V[z] || V[Np(y)];
            return typeof T == "object" && typeof k == "string" && T[k]
              ? Bp(T, D)
              : T.length > 0
              ? (T.push(D), T)
              : D;
          },
          E = () => (c ? Object.keys(c).map((I) => v(I, c)) : null),
          L = (I, x) => {
            if (!c || typeof c != "object") return null;
            let k = new Array();
            for (let K in c) {
              let j = v(K, c, I, x),
                V = I === "base" && typeof j == "string" ? j : j && j[I];
              V && (k[k.length] = V);
            }
            return k;
          },
          M = {};
        for (let I in g) g[I] !== void 0 && (M[I] = g[I]);
        let N = (I, x) => {
            var k;
            let K =
              typeof (g == null ? void 0 : g[I]) == "object"
                ? { [I]: (k = g[I]) == null ? void 0 : k.initial }
                : {};
            return { ...d, ...M, ...K, ...x };
          },
          p = (I = [], x) => {
            let k = [];
            for (let { class: K, className: j, ...V } of I) {
              let F = !0;
              for (let [z, C] of Object.entries(V)) {
                let y = N(z, x);
                if (Array.isArray(C)) {
                  if (!C.includes(y[z])) {
                    F = !1;
                    break;
                  }
                } else if (y[z] !== C) {
                  F = !1;
                  break;
                }
              }
              F && (K && k.push(K), j && k.push(j));
            }
            return k;
          },
          R = (I) => {
            let x = p(i, I),
              k = p(n == null ? void 0 : n.compoundVariants, I);
            return cy(k, x);
          },
          A = (I) => {
            let x = R(I);
            if (!Array.isArray(x)) return x;
            let k = {};
            for (let K of x)
              if (
                (typeof K == "string" && (k.base = ko(k.base, K)(a)),
                typeof K == "object")
              )
                for (let [j, V] of Object.entries(K)) k[j] = ko(k[j], V)(a);
            return k;
          },
          $ = (I) => {
            if (s.length < 1) return null;
            let x = {};
            for (let { slots: k = [], class: K, className: j, ...V } of s) {
              if (!rt(V)) {
                let F = !0;
                for (let z of Object.keys(V)) {
                  let C = N(z, I)[z];
                  if (
                    C === void 0 ||
                    (Array.isArray(V[z]) ? !V[z].includes(C) : V[z] !== C)
                  ) {
                    F = !1;
                    break;
                  }
                }
                if (!F) continue;
              }
              for (let F of k) (x[F] = x[F] || []), x[F].push([K, j]);
            }
            return x;
          };
        if (!rt(r) || !f) {
          let I = {};
          if (typeof b == "object" && !rt(b))
            for (let x of Object.keys(b))
              I[x] = (k) => {
                var K, j;
                return ko(
                  b[x],
                  L(x, k),
                  ((K = A(k)) != null ? K : [])[x],
                  ((j = $(k)) != null ? j : [])[x],
                  k == null ? void 0 : k.class,
                  k == null ? void 0 : k.className
                )(a);
              };
          return I;
        }
        return ko(
          u,
          E(),
          R(),
          g == null ? void 0 : g.class,
          g == null ? void 0 : g.className
        )(a);
      },
      P = () => {
        if (!(!c || typeof c != "object")) return Object.keys(c);
      };
    return (
      (w.variantKeys = P()),
      (w.extend = n),
      (w.base = u),
      (w.slots = b),
      (w.variants = c),
      (w.defaultVariants = d),
      (w.compoundSlots = s),
      (w.compoundVariants = i),
      w
    );
  },
  ns = ["small", "medium", "large"],
  gr = (e, t) => {
    var n, r, o;
    return oP(e, {
      ...t,
      twMerge: (n = t == null ? void 0 : t.twMerge) != null ? n : !0,
      twMergeConfig: {
        ...(t == null ? void 0 : t.twMergeConfig),
        theme: {
          ...((r = t == null ? void 0 : t.twMergeConfig) == null
            ? void 0
            : r.theme),
          opacity: ["disabled"],
          spacing: ["divider", "unit", ...ba],
          borderWidth: ns,
          borderRadius: ns,
        },
        classGroups: {
          ...((o = t == null ? void 0 : t.twMergeConfig) == null
            ? void 0
            : o.classGroups),
          shadow: [{ shadow: ns }],
          "font-size": [{ text: ["tiny", ...ns] }],
          "bg-image": ["bg-stripe-gradient"],
          "min-w": [{ "min-w": ["unit", ...ba] }],
          "min-h": [{ "min-h": ["unit", ...ba] }],
        },
      },
    });
  },
  so = [
    "outline-none",
    "data-[focus-visible=true]:z-10",
    "data-[focus-visible=true]:outline-2",
    "data-[focus-visible=true]:outline-focus",
    "data-[focus-visible=true]:outline-offset-2",
  ],
  xr = {
    default: [
      "[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    primary: [
      "[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    secondary: [
      "[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    success: [
      "[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    warning: [
      "[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    danger: [
      "[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
  },
  xa = gr({
    slots: {
      base: "flex flex-col w-full gap-1",
      labelWrapper: "w-full flex justify-between items-center",
      label: "",
      value: "",
      step: [
        "h-1.5",
        "w-1.5",
        "absolute",
        "rounded-full",
        "bg-default-300/50",
        "data-[in-range=true]:bg-background/50",
      ],
      mark: [
        "absolute",
        "text-small",
        "cursor-default",
        "opacity-50",
        "data-[in-range=true]:opacity-100",
      ],
      trackWrapper: "relative flex gap-2",
      track: [
        "flex",
        "w-full",
        "relative",
        "rounded-full",
        "bg-default-300/50",
      ],
      filler: "h-full absolute",
      thumb: [
        "flex",
        "justify-center",
        "items-center",
        "before:absolute",
        "before:w-11",
        "before:h-11",
        "before:rounded-full",
        "after:shadow-small",
        "after:shadow-small",
        "after:bg-background",
        "data-[focused=true]:z-10",
        so,
      ],
      startContent: [],
      endContent: [],
    },
    variants: {
      size: {
        sm: {
          label: "text-small",
          value: "text-small",
          thumb: "w-5 h-5 after:w-4 after:h-4",
          step: "data-[in-range=false]:bg-default-200",
        },
        md: {
          thumb: "w-6 h-6 after:w-5 after:h-5",
          label: "text-small",
          value: "text-small",
        },
        lg: {
          thumb: "h-7 w-7 after:w-5 after:h-5",
          step: "w-2 h-2",
          label: "text-medium",
          value: "text-medium",
          mark: "mt-2",
        },
      },
      radius: {
        none: { thumb: "rounded-none after:rounded-none" },
        sm: {
          thumb:
            "rounded-[calc(theme(borderRadius.small)/2)] after:rounded-[calc(theme(borderRadius.small)/3)]",
        },
        md: {
          thumb:
            "rounded-[calc(theme(borderRadius.medium)/2)] after:rounded-[calc(theme(borderRadius.medium)/3)]",
        },
        lg: {
          thumb:
            "rounded-[calc(theme(borderRadius.large)/1.5)] after:rounded-[calc(theme(borderRadius.large)/2)]",
        },
        full: { thumb: "rounded-full after:rounded-full" },
      },
      color: {
        foreground: { filler: "bg-foreground", thumb: "bg-foreground" },
        primary: { filler: "bg-primary", thumb: "bg-primary" },
        secondary: { filler: "bg-secondary", thumb: "bg-secondary" },
        success: { filler: "bg-success", thumb: "bg-success" },
        warning: { filler: "bg-warning", thumb: "bg-warning" },
        danger: { filler: "bg-danger", thumb: "bg-danger" },
      },
      isVertical: {
        true: {
          base: "w-auto h-full flex-col-reverse items-center",
          trackWrapper: "flex-col h-full justify-center items-center",
          filler: "w-full h-auto",
          thumb: "left-1/2",
          track: "h-full border-y-transparent",
          labelWrapper: "flex-col justify-center items-center",
          step: ["left-1/2", "-translate-x-1/2", "translate-y-1/2"],
          mark: ["left-1/2", "ml-1", "translate-x-1/2", "-translate-y-1/2"],
        },
        false: {
          thumb: "top-1/2",
          trackWrapper: "items-center",
          track: "border-x-transparent",
          step: ["top-1/2", "-translate-x-1/2", "-translate-y-1/2"],
          mark: ["top-1/2", "mt-1", "-translate-x-1/2", "translate-y-1/2"],
        },
      },
      isDisabled: {
        false: {
          thumb: ["cursor-grab", "data-[dragging=true]:cursor-grabbing"],
        },
        true: { base: "opacity-disabled", thumb: "cursor-default" },
      },
      hasMarks: { true: { base: "mb-5" }, false: {} },
      showOutline: {
        true: { thumb: "ring-2 ring-background" },
        false: { thumb: "ring-transparent border-0" },
      },
      hideValue: { true: { value: "sr-only" } },
      hideThumb: {
        true: { thumb: "sr-only", track: "overflow-hidden cursor-pointer" },
      },
      hasSingleThumb: { true: {}, false: {} },
      disableAnimation: {
        true: { thumb: "data-[dragging=true]:after:scale-100" },
        false: {
          thumb: "after:transition-all motion-reduce:after:transition-none",
          mark: "transition-opacity motion-reduce:transition-none",
        },
      },
      disableThumbScale: {
        true: {},
        false: { thumb: "data-[dragging=true]:after:scale-80" },
      },
    },
    compoundVariants: [
      { size: ["sm", "md"], showOutline: !1, class: { thumb: "shadow-small" } },
      {
        size: "sm",
        color: "foreground",
        class: { step: "data-[in-range=true]:bg-foreground" },
      },
      {
        size: "sm",
        color: "primary",
        class: { step: "data-[in-range=true]:bg-primary" },
      },
      {
        size: "sm",
        color: "secondary",
        class: { step: "data-[in-range=true]:bg-secondary" },
      },
      {
        size: "sm",
        color: "success",
        class: { step: "data-[in-range=true]:bg-success" },
      },
      {
        size: "sm",
        color: "warning",
        class: { step: "data-[in-range=true]:bg-warning" },
      },
      {
        size: "sm",
        color: "danger",
        class: { step: "data-[in-range=true]:bg-danger" },
      },
      {
        size: "sm",
        isVertical: !1,
        class: {
          track:
            "h-1 my-[calc((theme(spacing.5)-theme(spacing.1))/2)] data-[thumb-hidden=false]:border-x-[calc(theme(spacing.5)/2)]",
        },
      },
      {
        size: "md",
        isVertical: !1,
        class: {
          track:
            "h-3 my-[calc((theme(spacing.6)-theme(spacing.3))/2)] data-[thumb-hidden=false]:border-x-[calc(theme(spacing.6)/2)]",
        },
      },
      {
        size: "lg",
        isVertical: !1,
        class: {
          track:
            "h-7 my-[calc((theme(spacing.7)-theme(spacing.5))/2)] data-[thumb-hidden=false]:border-x-[calc(theme(spacing.7)/2)]",
        },
      },
      {
        size: "sm",
        isVertical: !0,
        class: {
          track:
            "w-1 mx-[calc((theme(spacing.5)-theme(spacing.1))/2)] data-[thumb-hidden=false]:border-y-[calc(theme(spacing.5)/2)]",
        },
      },
      {
        size: "md",
        isVertical: !0,
        class: {
          track:
            "w-3 mx-[calc((theme(spacing.6)-theme(spacing.3))/2)] data-[thumb-hidden=false]:border-y-[calc(theme(spacing.6)/2)]",
        },
      },
      {
        size: "lg",
        isVertical: !0,
        class: {
          track:
            "w-7 mx-[calc((theme(spacing.7)-theme(spacing.5))/2)] data-[thumb-hidden=false]:border-y-[calc(theme(spacing.7)/2)]",
        },
      },
      {
        color: "foreground",
        isVertical: !1,
        hasSingleThumb: !0,
        class: { track: "border-s-foreground" },
      },
      {
        color: "primary",
        isVertical: !1,
        hasSingleThumb: !0,
        class: { track: "border-s-primary" },
      },
      {
        color: "secondary",
        isVertical: !1,
        hasSingleThumb: !0,
        class: { track: "border-s-secondary" },
      },
      {
        color: "success",
        isVertical: !1,
        hasSingleThumb: !0,
        class: { track: "border-s-success" },
      },
      {
        color: "warning",
        isVertical: !1,
        hasSingleThumb: !0,
        class: { track: "border-s-warning" },
      },
      {
        color: "danger",
        isVertical: !1,
        hasSingleThumb: !0,
        class: { track: "border-s-danger" },
      },
      {
        color: "foreground",
        isVertical: !0,
        hasSingleThumb: !0,
        class: { track: "border-b-foreground" },
      },
      {
        color: "primary",
        isVertical: !0,
        hasSingleThumb: !0,
        class: { track: "border-b-primary" },
      },
      {
        color: "secondary",
        isVertical: !0,
        hasSingleThumb: !0,
        class: { track: "border-b-secondary" },
      },
      {
        color: "success",
        isVertical: !0,
        hasSingleThumb: !0,
        class: { track: "border-b-success" },
      },
      {
        color: "warning",
        isVertical: !0,
        hasSingleThumb: !0,
        class: { track: "border-b-warning" },
      },
      {
        color: "danger",
        isVertical: !0,
        hasSingleThumb: !0,
        class: { track: "border-b-danger" },
      },
    ],
    defaultVariants: {
      size: "md",
      color: "primary",
      radius: "full",
      hideValue: !1,
      hideThumb: !1,
      isDisabled: !1,
      disableThumbScale: !1,
      disableAnimation: !1,
      showOutline: !1,
    },
  }),
  iP = {
    default: "bg-default text-default-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    danger: "bg-danger text-danger-foreground",
    foreground: "bg-foreground text-background",
  },
  sP = {
    default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
    primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
    secondary:
      "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
    success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
    warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
    danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
    foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background",
  },
  lP = {
    default: "bg-transparent border-default text-foreground",
    primary: "bg-transparent border-primary text-primary",
    secondary: "bg-transparent border-secondary text-secondary",
    success: "bg-transparent border-success text-success",
    warning: "bg-transparent border-warning text-warning",
    danger: "bg-transparent border-danger text-danger",
    foreground: "bg-transparent border-foreground text-foreground",
  },
  aP = {
    default: "bg-default/40 text-default-foreground",
    primary: "bg-primary/20 text-primary",
    secondary: "bg-secondary/20 text-secondary",
    success: "bg-success/20 text-success-600 dark:text-success",
    warning: "bg-warning/20 text-warning-600 dark:text-warning",
    danger: "bg-danger/20 text-danger dark:text-danger-500",
    foreground: "bg-foreground/10 text-foreground",
  },
  uP = {
    default: "border-default bg-default-100 text-default-foreground",
    primary: "border-default bg-default-100 text-primary",
    secondary: "border-default bg-default-100 text-secondary",
    success: "border-default bg-default-100 text-success",
    warning: "border-default bg-default-100 text-warning",
    danger: "border-default bg-default-100 text-danger",
    foreground: "border-default bg-default-100 text-foreground",
  },
  cP = {
    default: "bg-transparent text-default-foreground",
    primary: "bg-transparent text-primary",
    secondary: "bg-transparent text-secondary",
    success: "bg-transparent text-success",
    warning: "bg-transparent text-warning",
    danger: "bg-transparent text-danger",
    foreground: "bg-transparent text-foreground",
  },
  dP = {
    default: "border-default text-default-foreground hover:!bg-default",
    primary:
      "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
    secondary:
      "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
    success:
      "border-success text-success hover:!text-success-foreground hover:!bg-success",
    warning:
      "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
    danger:
      "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
    foreground: "border-foreground text-foreground hover:!bg-foreground",
  },
  G = {
    solid: iP,
    shadow: sP,
    bordered: lP,
    flat: aP,
    faded: uP,
    light: cP,
    ghost: dP,
  },
  Up = gr({
    slots: {
      base: "relative inline-flex flex-col gap-2 items-center justify-center",
      wrapper: "relative flex",
      circle1: [
        "absolute",
        "w-full",
        "h-full",
        "rounded-full",
        "animate-spinner-ease-spin",
        "border-2",
        "border-solid",
        "border-t-transparent",
        "border-l-transparent",
        "border-r-transparent",
      ],
      circle2: [
        "absolute",
        "w-full",
        "h-full",
        "rounded-full",
        "opacity-75",
        "animate-spinner-linear-spin",
        "border-2",
        "border-dotted",
        "border-t-transparent",
        "border-l-transparent",
        "border-r-transparent",
      ],
      label: "text-foreground dark:text-foreground-dark font-regular",
    },
    variants: {
      size: {
        sm: {
          wrapper: "w-5 h-5",
          circle1: "border-2",
          circle2: "border-2",
          label: "text-small",
        },
        md: {
          wrapper: "w-8 h-8",
          circle1: "border-3",
          circle2: "border-3",
          label: "text-medium",
        },
        lg: {
          wrapper: "w-10 h-10",
          circle1: "border-3",
          circle2: "border-3",
          label: "text-large",
        },
      },
      color: {
        current: { circle1: "border-b-current", circle2: "border-b-current" },
        white: { circle1: "border-b-white", circle2: "border-b-white" },
        default: { circle1: "border-b-default", circle2: "border-b-default" },
        primary: { circle1: "border-b-primary", circle2: "border-b-primary" },
        secondary: {
          circle1: "border-b-secondary",
          circle2: "border-b-secondary",
        },
        success: { circle1: "border-b-success", circle2: "border-b-success" },
        warning: { circle1: "border-b-warning", circle2: "border-b-warning" },
        danger: { circle1: "border-b-danger", circle2: "border-b-danger" },
      },
      labelColor: {
        foreground: { label: "text-foreground" },
        primary: { label: "text-primary" },
        secondary: { label: "text-secondary" },
        success: { label: "text-success" },
        warning: { label: "text-warning" },
        danger: { label: "text-danger" },
      },
    },
    defaultVariants: { size: "md", color: "primary", labelColor: "foreground" },
  }),
  Wp = gr({
    slots: {
      base: "inline-flex",
      tabList: [
        "flex",
        "p-1",
        "h-fit",
        "gap-2",
        "items-center",
        "flex-nowrap",
        "overflow-x-scroll",
        "scrollbar-hide",
        "bg-default-100",
      ],
      tab: [
        "z-0",
        "w-full",
        "px-3",
        "py-1",
        "flex",
        "group",
        "relative",
        "justify-center",
        "items-center",
        "outline-none",
        "cursor-pointer",
        "transition-opacity",
        "tap-highlight-transparent",
        "data-[disabled=true]:cursor-not-allowed",
        "data-[disabled=true]:opacity-30",
        "data-[hover-unselected=true]:opacity-disabled",
        ...so,
      ],
      tabContent: [
        "relative",
        "z-10",
        "text-inherit",
        "whitespace-nowrap",
        "transition-colors",
        "text-default-500",
        "group-data-[selected=true]:text-foreground",
      ],
      cursor: ["absolute", "z-0", "bg-white"],
      panel: ["py-3", "px-1", "outline-none", ...so],
    },
    variants: {
      variant: {
        solid: { cursor: "inset-0" },
        light: {
          tabList: "bg-transparent dark:bg-transparent",
          cursor: "inset-0",
        },
        underlined: {
          tabList: "bg-transparent dark:bg-transparent",
          cursor:
            "h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
        },
        bordered: {
          tabList:
            "bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm",
          cursor: "inset-0",
        },
      },
      color: {
        default: {},
        primary: {},
        secondary: {},
        success: {},
        warning: {},
        danger: {},
      },
      size: {
        sm: {
          tabList: "rounded-medium",
          tab: "h-7 text-tiny rounded-small",
          cursor: "rounded-small",
        },
        md: {
          tabList: "rounded-medium",
          tab: "h-8 text-small rounded-small",
          cursor: "rounded-small",
        },
        lg: {
          tabList: "rounded-large",
          tab: "h-9 text-medium rounded-medium",
          cursor: "rounded-medium",
        },
      },
      radius: {
        none: {
          tabList: "rounded-none",
          tab: "rounded-none",
          cursor: "rounded-none",
        },
        sm: {
          tabList: "rounded-medium",
          tab: "rounded-small",
          cursor: "rounded-small",
        },
        md: {
          tabList: "rounded-medium",
          tab: "rounded-small",
          cursor: "rounded-small",
        },
        lg: {
          tabList: "rounded-large",
          tab: "rounded-medium",
          cursor: "rounded-medium",
        },
        full: {
          tabList: "rounded-full",
          tab: "rounded-full",
          cursor: "rounded-full",
        },
      },
      fullWidth: { true: { base: "w-full", tabList: "w-full" } },
      isDisabled: { true: { tabList: "opacity-disabled pointer-events-none" } },
      disableAnimation: {
        true: { tab: "transition-none", tabContent: "transition-none" },
      },
    },
    defaultVariants: {
      color: "default",
      variant: "solid",
      size: "md",
      fullWidth: !1,
      isDisabled: !1,
      disableAnimation: !1,
    },
    compoundVariants: [
      {
        variant: ["solid", "bordered", "light"],
        color: "default",
        class: {
          cursor: ["bg-background", "dark:bg-default", "shadow-small"],
          tabContent: "group-data-[selected=true]:text-default-foreground",
        },
      },
      {
        variant: ["solid", "bordered", "light"],
        color: "primary",
        class: {
          cursor: G.solid.primary,
          tabContent: "group-data-[selected=true]:text-primary-foreground",
        },
      },
      {
        variant: ["solid", "bordered", "light"],
        color: "secondary",
        class: {
          cursor: G.solid.secondary,
          tabContent: "group-data-[selected=true]:text-secondary-foreground",
        },
      },
      {
        variant: ["solid", "bordered", "light"],
        color: "success",
        class: {
          cursor: G.solid.success,
          tabContent: "group-data-[selected=true]:text-success-foreground",
        },
      },
      {
        variant: ["solid", "bordered", "light"],
        color: "warning",
        class: {
          cursor: G.solid.warning,
          tabContent: "group-data-[selected=true]:text-warning-foreground",
        },
      },
      {
        variant: ["solid", "bordered", "light"],
        color: "danger",
        class: {
          cursor: G.solid.danger,
          tabContent: "group-data-[selected=true]:text-danger-foreground",
        },
      },
      {
        variant: "underlined",
        color: "default",
        class: {
          cursor: "bg-foreground",
          tabContent: "group-data-[selected=true]:text-foreground",
        },
      },
      {
        variant: "underlined",
        color: "primary",
        class: {
          cursor: "bg-primary",
          tabContent: "group-data-[selected=true]:text-primary",
        },
      },
      {
        variant: "underlined",
        color: "secondary",
        class: {
          cursor: "bg-secondary",
          tabContent: "group-data-[selected=true]:text-secondary",
        },
      },
      {
        variant: "underlined",
        color: "success",
        class: {
          cursor: "bg-success",
          tabContent: "group-data-[selected=true]:text-success",
        },
      },
      {
        variant: "underlined",
        color: "warning",
        class: {
          cursor: "bg-warning",
          tabContent: "group-data-[selected=true]:text-warning",
        },
      },
      {
        variant: "underlined",
        color: "danger",
        class: {
          cursor: "bg-danger",
          tabContent: "group-data-[selected=true]:text-danger",
        },
      },
      {
        disableAnimation: !0,
        variant: "underlined",
        class: {
          tab: [
            "after:content-['']",
            "after:absolute",
            "after:bottom-0",
            "after:h-[2px]",
            "after:w-[80%]",
            "after:opacity-0",
            "after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
            "data-[selected=true]:after:opacity-100",
          ],
        },
      },
      {
        disableAnimation: !0,
        color: "default",
        variant: ["solid", "bordered", "light"],
        class: {
          tab: "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground",
        },
      },
      {
        disableAnimation: !0,
        color: "primary",
        variant: ["solid", "bordered", "light"],
        class: {
          tab: "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
        },
      },
      {
        disableAnimation: !0,
        color: "secondary",
        variant: ["solid", "bordered", "light"],
        class: {
          tab: "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
        },
      },
      {
        disableAnimation: !0,
        color: "success",
        variant: ["solid", "bordered", "light"],
        class: {
          tab: "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
        },
      },
      {
        disableAnimation: !0,
        color: "warning",
        variant: ["solid", "bordered", "light"],
        class: {
          tab: "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
        },
      },
      {
        disableAnimation: !0,
        color: "danger",
        variant: ["solid", "bordered", "light"],
        class: {
          tab: "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground",
        },
      },
      {
        disableAnimation: !0,
        color: "default",
        variant: "underlined",
        class: { tab: "data-[selected=true]:after:bg-foreground" },
      },
      {
        disableAnimation: !0,
        color: "primary",
        variant: "underlined",
        class: { tab: "data-[selected=true]:after:bg-primary" },
      },
      {
        disableAnimation: !0,
        color: "secondary",
        variant: "underlined",
        class: { tab: "data-[selected=true]:after:bg-secondary" },
      },
      {
        disableAnimation: !0,
        color: "success",
        variant: "underlined",
        class: { tab: "data-[selected=true]:after:bg-success" },
      },
      {
        disableAnimation: !0,
        color: "warning",
        variant: "underlined",
        class: { tab: "data-[selected=true]:after:bg-warning" },
      },
      {
        disableAnimation: !0,
        color: "danger",
        variant: "underlined",
        class: { tab: "data-[selected=true]:after:bg-danger" },
      },
    ],
    compoundSlots: [
      {
        variant: "underlined",
        slots: ["tab", "tabList", "cursor"],
        class: ["rounded-none"],
      },
    ],
  }),
  Hp = gr({
    slots: {
      base: [
        "z-0",
        "relative",
        "bg-transparent",
        "before:content-['']",
        "before:hidden",
        "before:z-[-1]",
        "before:absolute",
        "before:rotate-45",
        "before:w-2.5",
        "before:h-2.5",
        "before:rounded-sm",
        "data-[arrow=true]:before:block",
        "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=top]:before:left-1/2",
        "data-[placement=top]:before:-translate-x-1/2",
        "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=top-start]:before:left-3",
        "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=top-end]:before:right-3",
        "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=bottom]:before:left-1/2",
        "data-[placement=bottom]:before:-translate-x-1/2",
        "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=bottom-start]:before:left-3",
        "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=bottom-end]:before:right-3",
        "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
        "data-[placement=left]:before:top-1/2",
        "data-[placement=left]:before:-translate-y-1/2",
        "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
        "data-[placement=left-start]:before:top-1/4",
        "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
        "data-[placement=left-end]:before:bottom-1/4",
        "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
        "data-[placement=right]:before:top-1/2",
        "data-[placement=right]:before:-translate-y-1/2",
        "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
        "data-[placement=right-start]:before:top-1/4",
        "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
        "data-[placement=right-end]:before:bottom-1/4",
        ...so,
      ],
      content: [
        "z-10",
        "px-2.5",
        "py-1",
        "w-full",
        "inline-flex",
        "flex-col",
        "items-center",
        "justify-center",
        "box-border",
        "subpixel-antialiased",
        "outline-none",
        "box-border",
      ],
      trigger: ["z-10"],
      backdrop: ["hidden"],
      arrow: [],
    },
    variants: {
      size: {
        sm: { content: "text-tiny" },
        md: { content: "text-small" },
        lg: { content: "text-medium" },
      },
      color: {
        default: {
          base: "before:bg-content1 before:shadow-small",
          content: "bg-content1",
        },
        foreground: {
          base: "before:bg-foreground",
          content: G.solid.foreground,
        },
        primary: { base: "before:bg-primary", content: G.solid.primary },
        secondary: { base: "before:bg-secondary", content: G.solid.secondary },
        success: { base: "before:bg-success", content: G.solid.success },
        warning: { base: "before:bg-warning", content: G.solid.warning },
        danger: { base: "before:bg-danger", content: G.solid.danger },
      },
      radius: {
        none: { content: "rounded-none" },
        sm: { content: "rounded-small" },
        md: { content: "rounded-medium" },
        lg: { content: "rounded-large" },
        full: { content: "rounded-full" },
      },
      shadow: {
        sm: { content: "shadow-small" },
        md: { content: "shadow-medium" },
        lg: { content: "shadow-large" },
      },
      backdrop: {
        transparent: {},
        opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
        blur: {
          backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30",
        },
      },
      triggerScaleOnOpen: {
        true: {
          trigger: [
            "aria-expanded:scale-[0.97]",
            "aria-expanded:opacity-70",
            "subpixel-antialiased",
          ],
        },
        false: {},
      },
      disableAnimation: { true: { base: "animate-none" } },
    },
    defaultVariants: {
      color: "default",
      radius: "lg",
      size: "md",
      shadow: "md",
      backdrop: "transparent",
      disableAnimation: !1,
      triggerScaleOnOpen: !0,
    },
    compoundVariants: [
      {
        backdrop: ["opaque", "blur"],
        class: { backdrop: "block w-full h-full fixed inset-0 -z-30" },
      },
    ],
  }),
  Gp = gr({
    slots: {
      base: [
        "flex",
        "flex-col",
        "relative",
        "overflow-hidden",
        "height-auto",
        "outline-none",
        "text-foreground",
        "box-border",
        "bg-content1",
        ...so,
      ],
      header: [
        "flex",
        "p-3",
        "z-10",
        "w-full",
        "justify-start",
        "items-center",
        "shrink-0",
        "overflow-inherit",
        "color-inherit",
        "subpixel-antialiased",
      ],
      body: [
        "relative",
        "flex",
        "flex-1",
        "w-full",
        "p-3",
        "flex-auto",
        "flex-col",
        "place-content-inherit",
        "align-items-inherit",
        "h-auto",
        "break-words",
        "text-left",
        "overflow-y-auto",
        "subpixel-antialiased",
      ],
      footer: [
        "p-3",
        "h-auto",
        "flex",
        "w-full",
        "items-center",
        "overflow-hidden",
        "color-inherit",
        "subpixel-antialiased",
      ],
    },
    variants: {
      shadow: {
        none: { base: "shadow-none" },
        sm: { base: "shadow-small" },
        md: { base: "shadow-medium" },
        lg: { base: "shadow-large" },
      },
      radius: {
        none: {
          base: "rounded-none",
          header: "rounded-none",
          footer: "rounded-none",
        },
        sm: {
          base: "rounded-small",
          header: "rounded-t-small",
          footer: "rounded-b-small",
        },
        md: {
          base: "rounded-medium",
          header: "rounded-t-medium",
          footer: "rounded-b-medium",
        },
        lg: {
          base: "rounded-large",
          header: "rounded-t-large",
          footer: "rounded-b-large",
        },
      },
      fullWidth: { true: { base: "w-full" } },
      isHoverable: {
        true: {
          base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2",
        },
      },
      isPressable: { true: { base: "cursor-pointer" } },
      isBlurred: {
        true: {
          base: [
            "bg-background/80",
            "dark:bg-background/20",
            "backdrop-blur-md",
            "backdrop-saturate-150",
          ],
        },
      },
      isFooterBlurred: {
        true: {
          footer: [
            "bg-background/10",
            "backdrop-blur",
            "backdrop-saturate-150",
          ],
        },
      },
      isDisabled: { true: { base: "opacity-disabled cursor-not-allowed" } },
      disableAnimation: {
        true: "",
        false: {
          base: "transition-transform-background motion-reduce:transition-none",
        },
      },
    },
    compoundVariants: [
      {
        isPressable: !0,
        disableAnimation: !1,
        class: "data-[pressed=true]:scale-[0.97] tap-highlight-transparent",
      },
    ],
    defaultVariants: {
      radius: "lg",
      shadow: "md",
      fullWidth: !1,
      isHoverable: !1,
      isPressable: !1,
      isDisabled: !1,
      disableAnimation: !1,
      isFooterBlurred: !1,
    },
  }),
  fP = gr({
    base: [
      "z-0",
      "group",
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "box-border",
      "appearance-none",
      "outline-none",
      "select-none",
      "whitespace-nowrap",
      "min-w-max",
      "font-normal",
      "subpixel-antialiased",
      "overflow-hidden",
      "tap-highlight-transparent",
      ...so,
    ],
    variants: {
      variant: {
        solid: "",
        bordered: "border-medium bg-transparent",
        light: "bg-transparent",
        flat: "",
        faded: "border-medium",
        shadow: "",
        ghost: "border-medium bg-transparent",
      },
      size: {
        sm: "px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small",
        md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium",
        lg: "px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-small",
        md: "rounded-medium",
        lg: "rounded-large",
        full: "rounded-full",
      },
      fullWidth: { true: "w-full" },
      isDisabled: { true: "opacity-disabled pointer-events-none" },
      isInGroup: {
        true: "[&:not(:first-child):not(:last-child)]:rounded-none",
      },
      isIconOnly: {
        true: "px-unit-0 !gap-unit-0",
        false: "[&>svg]:max-w-[theme(spacing.unit-8)]",
      },
      disableAnimation: {
        true: "!transition-none",
        false:
          "data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "solid",
      color: "default",
      fullWidth: !1,
      isDisabled: !1,
      isInGroup: !1,
      disableAnimation: !1,
    },
    compoundVariants: [
      { variant: "solid", color: "default", class: G.solid.default },
      { variant: "solid", color: "primary", class: G.solid.primary },
      { variant: "solid", color: "secondary", class: G.solid.secondary },
      { variant: "solid", color: "success", class: G.solid.success },
      { variant: "solid", color: "warning", class: G.solid.warning },
      { variant: "solid", color: "danger", class: G.solid.danger },
      { variant: "shadow", color: "default", class: G.shadow.default },
      { variant: "shadow", color: "primary", class: G.shadow.primary },
      { variant: "shadow", color: "secondary", class: G.shadow.secondary },
      { variant: "shadow", color: "success", class: G.shadow.success },
      { variant: "shadow", color: "warning", class: G.shadow.warning },
      { variant: "shadow", color: "danger", class: G.shadow.danger },
      { variant: "bordered", color: "default", class: G.bordered.default },
      { variant: "bordered", color: "primary", class: G.bordered.primary },
      { variant: "bordered", color: "secondary", class: G.bordered.secondary },
      { variant: "bordered", color: "success", class: G.bordered.success },
      { variant: "bordered", color: "warning", class: G.bordered.warning },
      { variant: "bordered", color: "danger", class: G.bordered.danger },
      { variant: "flat", color: "default", class: G.flat.default },
      { variant: "flat", color: "primary", class: G.flat.primary },
      { variant: "flat", color: "secondary", class: G.flat.secondary },
      { variant: "flat", color: "success", class: G.flat.success },
      { variant: "flat", color: "warning", class: G.flat.warning },
      { variant: "flat", color: "danger", class: G.flat.danger },
      { variant: "faded", color: "default", class: G.faded.default },
      { variant: "faded", color: "primary", class: G.faded.primary },
      { variant: "faded", color: "secondary", class: G.faded.secondary },
      { variant: "faded", color: "success", class: G.faded.success },
      { variant: "faded", color: "warning", class: G.faded.warning },
      { variant: "faded", color: "danger", class: G.faded.danger },
      {
        variant: "light",
        color: "default",
        class: [G.light.default, "data-[hover=true]:bg-default/40"],
      },
      {
        variant: "light",
        color: "primary",
        class: [G.light.primary, "data-[hover=true]:bg-primary/20"],
      },
      {
        variant: "light",
        color: "secondary",
        class: [G.light.secondary, "data-[hover=true]:bg-secondary/20"],
      },
      {
        variant: "light",
        color: "success",
        class: [G.light.success, "data-[hover=true]:bg-success/20"],
      },
      {
        variant: "light",
        color: "warning",
        class: [G.light.warning, "data-[hover=true]:bg-warning/20"],
      },
      {
        variant: "light",
        color: "danger",
        class: [G.light.danger, "data-[hover=true]:bg-danger/20"],
      },
      { variant: "ghost", color: "default", class: G.ghost.default },
      { variant: "ghost", color: "primary", class: G.ghost.primary },
      { variant: "ghost", color: "secondary", class: G.ghost.secondary },
      { variant: "ghost", color: "success", class: G.ghost.success },
      { variant: "ghost", color: "warning", class: G.ghost.warning },
      { variant: "ghost", color: "danger", class: G.ghost.danger },
      {
        isInGroup: !0,
        class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
      },
      {
        isInGroup: !0,
        size: "sm",
        class: "rounded-none first:rounded-s-small last:rounded-e-small",
      },
      {
        isInGroup: !0,
        size: "md",
        class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
      },
      {
        isInGroup: !0,
        size: "lg",
        class: "rounded-none first:rounded-s-large last:rounded-e-large",
      },
      {
        isInGroup: !0,
        isRounded: !0,
        class: "rounded-none first:rounded-s-full last:rounded-e-full",
      },
      {
        isInGroup: !0,
        radius: "none",
        class: "rounded-none first:rounded-s-none last:rounded-e-none",
      },
      {
        isInGroup: !0,
        radius: "sm",
        class: "rounded-none first:rounded-s-small last:rounded-e-small",
      },
      {
        isInGroup: !0,
        radius: "md",
        class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
      },
      {
        isInGroup: !0,
        radius: "lg",
        class: "rounded-none first:rounded-s-large last:rounded-e-large",
      },
      {
        isInGroup: !0,
        radius: "full",
        class: "rounded-none first:rounded-s-full last:rounded-e-full",
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "default",
        className: xr.default,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "primary",
        className: xr.primary,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "secondary",
        className: xr.secondary,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "success",
        className: xr.success,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "warning",
        className: xr.warning,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "danger",
        className: xr.danger,
      },
      { isIconOnly: !0, size: "sm", class: "min-w-unit-8 w-unit-8 h-unit-8" },
      {
        isIconOnly: !0,
        size: "md",
        class: "min-w-unit-10 w-unit-10 h-unit-10",
      },
      {
        isIconOnly: !0,
        size: "lg",
        class: "min-w-unit-12 w-unit-12 h-unit-12",
      },
      {
        variant: ["solid", "faded", "flat", "bordered", "shadow"],
        class: "data-[hover=true]:opacity-hover",
      },
    ],
  });
gr({
  base: "inline-flex items-center justify-center h-auto",
  variants: { fullWidth: { true: "w-full" } },
  defaultVariants: { fullWidth: !1 },
});
function by(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = by(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Ot(...e) {
  for (var t = 0, n, r, o = ""; t < e.length; )
    (n = e[t++]) && (r = by(n)) && (o && (o += " "), (o += r));
  return o;
}
var pP = {},
  Yp = {};
function hP(e, t, ...n) {
  var r;
  const i = `[Next UI]${t ? ` [${t}]` : " "}: ${e}`;
  if (
    !(typeof console > "u") &&
    !Yp[i] &&
    ((Yp[i] = !0),
    ((r = process == null ? void 0 : pP) == null ? void 0 : r.NODE_ENV) !==
      "production")
  )
    return console.warn(i, n);
}
function mP(e) {
  return `${e}-${Math.floor(Math.random() * 1e6)}`;
}
function gP(e) {
  return typeof e == "function";
}
var re = (e) => (e ? "true" : void 0);
function wy(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: r,
    } = e,
    o = S.createContext(void 0);
  o.displayName = r;
  function i() {
    var s;
    const l = S.useContext(o);
    if (!l && t) {
      const a = new Error(n);
      throw (
        ((a.name = "ContextError"),
        (s = Error.captureStackTrace) == null || s.call(Error, a, i),
        a)
      );
    }
    return l;
  }
  return [o.Provider, i, o];
}
function vP(e) {
  return {
    UNSAFE_getDOMNode() {
      return e.current;
    },
  };
}
function Fn(e) {
  const t = S.useRef(null);
  return S.useImperativeHandle(e, () => t.current), t;
}
function yP(e, t) {
  if (e != null) {
    if (gP(e)) {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function bP(...e) {
  return (t) => {
    e.forEach((n) => yP(n, t));
  };
}
var wP = Object.create,
  xy = Object.defineProperty,
  xP = Object.getOwnPropertyDescriptor,
  Sy = Object.getOwnPropertyNames,
  SP = Object.getPrototypeOf,
  PP = Object.prototype.hasOwnProperty,
  Py = (e, t) =>
    function () {
      return t || (0, e[Sy(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  TP = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of Sy(t))
        !PP.call(e, o) &&
          o !== n &&
          xy(e, o, {
            get: () => t[o],
            enumerable: !(r = xP(t, o)) || r.enumerable,
          });
    return e;
  },
  kP = (e, t, n) => (
    (n = e != null ? wP(SP(e)) : {}),
    TP(
      t || !e || !e.__esModule
        ? xy(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  CP = Py({
    "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(
      e
    ) {
      var t = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        a = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        c = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        f = Symbol.iterator;
      function m(y) {
        return y === null || typeof y != "object"
          ? null
          : ((y = (f && y[f]) || y["@@iterator"]),
            typeof y == "function" ? y : null);
      }
      var b = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        w = Object.assign,
        P = {};
      function g(y, T, D) {
        (this.props = y),
          (this.context = T),
          (this.refs = P),
          (this.updater = D || b);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (y, T) {
          if (typeof y != "object" && typeof y != "function" && y != null)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, y, T, "setState");
        }),
        (g.prototype.forceUpdate = function (y) {
          this.updater.enqueueForceUpdate(this, y, "forceUpdate");
        });
      function h() {}
      h.prototype = g.prototype;
      function v(y, T, D) {
        (this.props = y),
          (this.context = T),
          (this.refs = P),
          (this.updater = D || b);
      }
      var E = (v.prototype = new h());
      (E.constructor = v), w(E, g.prototype), (E.isPureReactComponent = !0);
      var L = Array.isArray,
        M = Object.prototype.hasOwnProperty,
        N = { current: null },
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function R(y, T, D) {
        var _,
          U = {},
          H = null,
          Q = null;
        if (T != null)
          for (_ in (T.ref !== void 0 && (Q = T.ref),
          T.key !== void 0 && (H = "" + T.key),
          T))
            M.call(T, _) && !p.hasOwnProperty(_) && (U[_] = T[_]);
        var Z = arguments.length - 2;
        if (Z === 1) U.children = D;
        else if (1 < Z) {
          for (var Y = Array(Z), te = 0; te < Z; te++)
            Y[te] = arguments[te + 2];
          U.children = Y;
        }
        if (y && y.defaultProps)
          for (_ in ((Z = y.defaultProps), Z)) U[_] === void 0 && (U[_] = Z[_]);
        return {
          $$typeof: t,
          type: y,
          key: H,
          ref: Q,
          props: U,
          _owner: N.current,
        };
      }
      function A(y, T) {
        return {
          $$typeof: t,
          type: y.type,
          key: T,
          ref: y.ref,
          props: y.props,
          _owner: y._owner,
        };
      }
      function $(y) {
        return typeof y == "object" && y !== null && y.$$typeof === t;
      }
      function I(y) {
        var T = { "=": "=0", ":": "=2" };
        return (
          "$" +
          y.replace(/[=:]/g, function (D) {
            return T[D];
          })
        );
      }
      var x = /\/+/g;
      function k(y, T) {
        return typeof y == "object" && y !== null && y.key != null
          ? I("" + y.key)
          : T.toString(36);
      }
      function K(y, T, D, _, U) {
        var H = typeof y;
        (H === "undefined" || H === "boolean") && (y = null);
        var Q = !1;
        if (y === null) Q = !0;
        else
          switch (H) {
            case "string":
            case "number":
              Q = !0;
              break;
            case "object":
              switch (y.$$typeof) {
                case t:
                case n:
                  Q = !0;
              }
          }
        if (Q)
          return (
            (Q = y),
            (U = U(Q)),
            (y = _ === "" ? "." + k(Q, 0) : _),
            L(U)
              ? ((D = ""),
                y != null && (D = y.replace(x, "$&/") + "/"),
                K(U, T, D, "", function (te) {
                  return te;
                }))
              : U != null &&
                ($(U) &&
                  (U = A(
                    U,
                    D +
                      (!U.key || (Q && Q.key === U.key)
                        ? ""
                        : ("" + U.key).replace(x, "$&/") + "/") +
                      y
                  )),
                T.push(U)),
            1
          );
        if (((Q = 0), (_ = _ === "" ? "." : _ + ":"), L(y)))
          for (var Z = 0; Z < y.length; Z++) {
            H = y[Z];
            var Y = _ + k(H, Z);
            Q += K(H, T, D, Y, U);
          }
        else if (((Y = m(y)), typeof Y == "function"))
          for (y = Y.call(y), Z = 0; !(H = y.next()).done; )
            (H = H.value), (Y = _ + k(H, Z++)), (Q += K(H, T, D, Y, U));
        else if (H === "object")
          throw (
            ((T = String(y)),
            Error(
              "Objects are not valid as a React child (found: " +
                (T === "[object Object]"
                  ? "object with keys {" + Object.keys(y).join(", ") + "}"
                  : T) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          );
        return Q;
      }
      function j(y, T, D) {
        if (y == null) return y;
        var _ = [],
          U = 0;
        return (
          K(y, _, "", "", function (H) {
            return T.call(D, H, U++);
          }),
          _
        );
      }
      function V(y) {
        if (y._status === -1) {
          var T = y._result;
          (T = T()),
            T.then(
              function (D) {
                (y._status === 0 || y._status === -1) &&
                  ((y._status = 1), (y._result = D));
              },
              function (D) {
                (y._status === 0 || y._status === -1) &&
                  ((y._status = 2), (y._result = D));
              }
            ),
            y._status === -1 && ((y._status = 0), (y._result = T));
        }
        if (y._status === 1) return y._result.default;
        throw y._result;
      }
      var F = { current: null },
        z = { transition: null },
        C = {
          ReactCurrentDispatcher: F,
          ReactCurrentBatchConfig: z,
          ReactCurrentOwner: N,
        };
      (e.Children = {
        map: j,
        forEach: function (y, T, D) {
          j(
            y,
            function () {
              T.apply(this, arguments);
            },
            D
          );
        },
        count: function (y) {
          var T = 0;
          return (
            j(y, function () {
              T++;
            }),
            T
          );
        },
        toArray: function (y) {
          return (
            j(y, function (T) {
              return T;
            }) || []
          );
        },
        only: function (y) {
          if (!$(y))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return y;
        },
      }),
        (e.Component = g),
        (e.Fragment = r),
        (e.Profiler = i),
        (e.PureComponent = v),
        (e.StrictMode = o),
        (e.Suspense = u),
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C),
        (e.cloneElement = function (y, T, D) {
          if (y == null)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                y +
                "."
            );
          var _ = w({}, y.props),
            U = y.key,
            H = y.ref,
            Q = y._owner;
          if (T != null) {
            if (
              (T.ref !== void 0 && ((H = T.ref), (Q = N.current)),
              T.key !== void 0 && (U = "" + T.key),
              y.type && y.type.defaultProps)
            )
              var Z = y.type.defaultProps;
            for (Y in T)
              M.call(T, Y) &&
                !p.hasOwnProperty(Y) &&
                (_[Y] = T[Y] === void 0 && Z !== void 0 ? Z[Y] : T[Y]);
          }
          var Y = arguments.length - 2;
          if (Y === 1) _.children = D;
          else if (1 < Y) {
            Z = Array(Y);
            for (var te = 0; te < Y; te++) Z[te] = arguments[te + 2];
            _.children = Z;
          }
          return {
            $$typeof: t,
            type: y.type,
            key: U,
            ref: H,
            props: _,
            _owner: Q,
          };
        }),
        (e.createContext = function (y) {
          return (
            (y = {
              $$typeof: l,
              _currentValue: y,
              _currentValue2: y,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }),
            (y.Provider = { $$typeof: s, _context: y }),
            (y.Consumer = y)
          );
        }),
        (e.createElement = R),
        (e.createFactory = function (y) {
          var T = R.bind(null, y);
          return (T.type = y), T;
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (y) {
          return { $$typeof: a, render: y };
        }),
        (e.isValidElement = $),
        (e.lazy = function (y) {
          return {
            $$typeof: d,
            _payload: { _status: -1, _result: y },
            _init: V,
          };
        }),
        (e.memo = function (y, T) {
          return { $$typeof: c, type: y, compare: T === void 0 ? null : T };
        }),
        (e.startTransition = function (y) {
          var T = z.transition;
          z.transition = {};
          try {
            y();
          } finally {
            z.transition = T;
          }
        }),
        (e.unstable_act = function () {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }),
        (e.useCallback = function (y, T) {
          return F.current.useCallback(y, T);
        }),
        (e.useContext = function (y) {
          return F.current.useContext(y);
        }),
        (e.useDebugValue = function () {}),
        (e.useDeferredValue = function (y) {
          return F.current.useDeferredValue(y);
        }),
        (e.useEffect = function (y, T) {
          return F.current.useEffect(y, T);
        }),
        (e.useId = function () {
          return F.current.useId();
        }),
        (e.useImperativeHandle = function (y, T, D) {
          return F.current.useImperativeHandle(y, T, D);
        }),
        (e.useInsertionEffect = function (y, T) {
          return F.current.useInsertionEffect(y, T);
        }),
        (e.useLayoutEffect = function (y, T) {
          return F.current.useLayoutEffect(y, T);
        }),
        (e.useMemo = function (y, T) {
          return F.current.useMemo(y, T);
        }),
        (e.useReducer = function (y, T, D) {
          return F.current.useReducer(y, T, D);
        }),
        (e.useRef = function (y) {
          return F.current.useRef(y);
        }),
        (e.useState = function (y) {
          return F.current.useState(y);
        }),
        (e.useSyncExternalStore = function (y, T, D) {
          return F.current.useSyncExternalStore(y, T, D);
        }),
        (e.useTransition = function () {
          return F.current.useTransition();
        }),
        (e.version = "18.2.0");
    },
  }),
  EP = Py({
    "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(
      e,
      t
    ) {
      t.exports = CP();
    },
  });
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $P = new Set([
    "id",
    "type",
    "style",
    "title",
    "role",
    "tabIndex",
    "htmlFor",
    "width",
    "height",
    "abbr",
    "accept",
    "acceptCharset",
    "accessKey",
    "action",
    "allowFullScreen",
    "allowTransparency",
    "alt",
    "async",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "challenge",
    "charset",
    "checked",
    "cite",
    "class",
    "className",
    "cols",
    "colSpan",
    "command",
    "content",
    "contentEditable",
    "contextMenu",
    "controls",
    "coords",
    "crossOrigin",
    "data",
    "dateTime",
    "default",
    "defer",
    "dir",
    "disabled",
    "download",
    "draggable",
    "dropzone",
    "encType",
    "for",
    "form",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "headers",
    "hidden",
    "high",
    "href",
    "hrefLang",
    "httpEquiv",
    "icon",
    "inputMode",
    "isMap",
    "itemId",
    "itemProp",
    "itemRef",
    "itemScope",
    "itemType",
    "kind",
    "label",
    "lang",
    "list",
    "loop",
    "manifest",
    "max",
    "maxLength",
    "media",
    "mediaGroup",
    "method",
    "min",
    "minLength",
    "multiple",
    "muted",
    "name",
    "noValidate",
    "open",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "poster",
    "preload",
    "radioGroup",
    "referrerPolicy",
    "readOnly",
    "rel",
    "required",
    "rows",
    "rowSpan",
    "sandbox",
    "scope",
    "scoped",
    "scrolling",
    "seamless",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "sortable",
    "span",
    "spellCheck",
    "src",
    "srcDoc",
    "srcSet",
    "start",
    "step",
    "target",
    "translate",
    "typeMustMatch",
    "useMap",
    "value",
    "wmode",
    "wrap",
  ]),
  MP = new Set([
    "onCopy",
    "onCut",
    "onPaste",
    "onLoad",
    "onError",
    "onWheel",
    "onScroll",
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
    "onFocus",
    "onBlur",
    "onChange",
    "onInput",
    "onSubmit",
    "onClick",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onPointerDown",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerUp",
    "onSelect",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",
    "onTransitionEnd",
  ]),
  LP = /^(data-.*)$/,
  DP = /^(aria-.*)$/,
  Sa = /^(on[A-Z].*)$/;
function Ln(e, t = {}) {
  let {
      labelable: n = !0,
      enabled: r = !0,
      propNames: o,
      omitPropNames: i,
      omitEventNames: s,
    } = t,
    l = {};
  if (!r) return e;
  for (const a in e)
    (i != null && i.has(a)) ||
      (s != null && s.has(a) && Sa.test(a)) ||
      (Sa.test(a) && !MP.has(a)) ||
      (((Object.prototype.hasOwnProperty.call(e, a) &&
        ($P.has(a) ||
          (n && DP.test(a)) ||
          (o != null && o.has(a)) ||
          LP.test(a))) ||
        Sa.test(a)) &&
        (l[a] = e[a]));
  return l;
}
var AP = kP(EP());
function tc({ Component: e, props: t, renderCustom: n }) {
  return n && typeof n == "function" ? n(t) : AP.createElement(e, t);
}
function nc(e) {
  return ux() ? e.altKey : e.ctrlKey;
}
function kr(e) {
  return Mn() ? e.metaKey : e.ctrlKey;
}
const RP = 1e3;
function IP(e) {
  let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e,
    o = S.useRef({ search: "", timeout: null }).current,
    i = (s) => {
      let l = VP(s.key);
      if (!l || s.ctrlKey || s.metaKey || !s.currentTarget.contains(s.target))
        return;
      l === " " &&
        o.search.trim().length > 0 &&
        (s.preventDefault(), "continuePropagation" in s || s.stopPropagation()),
        (o.search += l);
      let a = t.getKeyForSearch(o.search, n.focusedKey);
      a == null && (a = t.getKeyForSearch(o.search)),
        a != null && (n.setFocusedKey(a), r && r(a)),
        clearTimeout(o.timeout),
        (o.timeout = setTimeout(() => {
          o.search = "";
        }, RP));
    };
  return {
    typeSelectProps: { onKeyDownCapture: t.getKeyForSearch ? i : null },
  };
}
function VP(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function OP(e) {
  let {
      selectionManager: t,
      keyboardDelegate: n,
      ref: r,
      autoFocus: o = !1,
      shouldFocusWrap: i = !1,
      disallowEmptySelection: s = !1,
      disallowSelectAll: l = !1,
      selectOnFocus: a = t.selectionBehavior === "replace",
      disallowTypeAhead: u = !1,
      shouldUseVirtualFocus: c,
      allowsTabNavigation: d = !1,
      isVirtualized: f,
      scrollRef: m = r,
      linkBehavior: b = "action",
    } = e,
    { direction: w } = fr(),
    P = _v(),
    g = (A) => {
      if (
        (A.altKey && A.key === "Tab" && A.preventDefault(),
        !r.current.contains(A.target))
      )
        return;
      const $ = (C, y) => {
        if (C != null) {
          if (t.isLink(C) && b === "selection" && a && !nc(A)) {
            hd.flushSync(() => {
              t.setFocusedKey(C, y);
            });
            let T = m.current.querySelector(
              `[data-key="${CSS.escape(C.toString())}"]`
            );
            P.open(T, A);
            return;
          }
          if ((t.setFocusedKey(C, y), t.isLink(C) && b === "override")) return;
          A.shiftKey && t.selectionMode === "multiple"
            ? t.extendSelection(C)
            : a && !nc(A) && t.replaceSelection(C);
        }
      };
      switch (A.key) {
        case "ArrowDown":
          if (n.getKeyBelow) {
            var I, x;
            A.preventDefault();
            let C =
              t.focusedKey != null
                ? n.getKeyBelow(t.focusedKey)
                : (I = n.getFirstKey) === null || I === void 0
                ? void 0
                : I.call(n);
            C == null &&
              i &&
              (C =
                (x = n.getFirstKey) === null || x === void 0
                  ? void 0
                  : x.call(n, t.focusedKey)),
              $(C);
          }
          break;
        case "ArrowUp":
          if (n.getKeyAbove) {
            var k, K;
            A.preventDefault();
            let C =
              t.focusedKey != null
                ? n.getKeyAbove(t.focusedKey)
                : (k = n.getLastKey) === null || k === void 0
                ? void 0
                : k.call(n);
            C == null &&
              i &&
              (C =
                (K = n.getLastKey) === null || K === void 0
                  ? void 0
                  : K.call(n, t.focusedKey)),
              $(C);
          }
          break;
        case "ArrowLeft":
          if (n.getKeyLeftOf) {
            var j, V;
            A.preventDefault();
            let C = n.getKeyLeftOf(t.focusedKey);
            C == null &&
              i &&
              (C =
                w === "rtl"
                  ? (j = n.getFirstKey) === null || j === void 0
                    ? void 0
                    : j.call(n, t.focusedKey)
                  : (V = n.getLastKey) === null || V === void 0
                  ? void 0
                  : V.call(n, t.focusedKey)),
              $(C, w === "rtl" ? "first" : "last");
          }
          break;
        case "ArrowRight":
          if (n.getKeyRightOf) {
            var F, z;
            A.preventDefault();
            let C = n.getKeyRightOf(t.focusedKey);
            C == null &&
              i &&
              (C =
                w === "rtl"
                  ? (F = n.getLastKey) === null || F === void 0
                    ? void 0
                    : F.call(n, t.focusedKey)
                  : (z = n.getFirstKey) === null || z === void 0
                  ? void 0
                  : z.call(n, t.focusedKey)),
              $(C, w === "rtl" ? "last" : "first");
          }
          break;
        case "Home":
          if (n.getFirstKey) {
            A.preventDefault();
            let C = n.getFirstKey(t.focusedKey, kr(A));
            t.setFocusedKey(C),
              kr(A) && A.shiftKey && t.selectionMode === "multiple"
                ? t.extendSelection(C)
                : a && t.replaceSelection(C);
          }
          break;
        case "End":
          if (n.getLastKey) {
            A.preventDefault();
            let C = n.getLastKey(t.focusedKey, kr(A));
            t.setFocusedKey(C),
              kr(A) && A.shiftKey && t.selectionMode === "multiple"
                ? t.extendSelection(C)
                : a && t.replaceSelection(C);
          }
          break;
        case "PageDown":
          if (n.getKeyPageBelow) {
            A.preventDefault();
            let C = n.getKeyPageBelow(t.focusedKey);
            $(C);
          }
          break;
        case "PageUp":
          if (n.getKeyPageAbove) {
            A.preventDefault();
            let C = n.getKeyPageAbove(t.focusedKey);
            $(C);
          }
          break;
        case "a":
          kr(A) &&
            t.selectionMode === "multiple" &&
            l !== !0 &&
            (A.preventDefault(), t.selectAll());
          break;
        case "Escape":
          A.preventDefault(), s || t.clearSelection();
          break;
        case "Tab":
          if (!d) {
            if (A.shiftKey) r.current.focus();
            else {
              let C = sy(r.current, { tabbable: !0 }),
                y,
                T;
              do (T = C.lastChild()), T && (y = T);
              while (T);
              y && !y.contains(document.activeElement) && Je(y);
            }
            break;
          }
      }
    },
    h = S.useRef({ top: 0, left: 0 });
  bx(
    m,
    "scroll",
    f
      ? null
      : () => {
          h.current = { top: m.current.scrollTop, left: m.current.scrollLeft };
        }
  );
  let v = (A) => {
      if (t.isFocused) {
        A.currentTarget.contains(A.target) || t.setFocused(!1);
        return;
      }
      if (A.currentTarget.contains(A.target)) {
        if ((t.setFocused(!0), t.focusedKey == null)) {
          let x = (K) => {
              K != null && (t.setFocusedKey(K), a && t.replaceSelection(K));
            },
            k = A.relatedTarget;
          var $, I;
          k &&
          A.currentTarget.compareDocumentPosition(k) &
            Node.DOCUMENT_POSITION_FOLLOWING
            ? x(
                ($ = t.lastSelectedKey) !== null && $ !== void 0
                  ? $
                  : n.getLastKey()
              )
            : x(
                (I = t.firstSelectedKey) !== null && I !== void 0
                  ? I
                  : n.getFirstKey()
              );
        } else
          f ||
            ((m.current.scrollTop = h.current.top),
            (m.current.scrollLeft = h.current.left));
        if (!f && t.focusedKey != null) {
          let x = m.current.querySelector(
            `[data-key="${CSS.escape(t.focusedKey.toString())}"]`
          );
          x &&
            (x.contains(document.activeElement) || Je(x),
            tl() === "keyboard" && wp(x, { containingElement: r.current }));
        }
      }
    },
    E = (A) => {
      A.currentTarget.contains(A.relatedTarget) || t.setFocused(!1);
    };
  const L = S.useRef(o);
  S.useEffect(() => {
    if (L.current) {
      let A = null;
      o === "first" && (A = n.getFirstKey()),
        o === "last" && (A = n.getLastKey());
      let $ = t.selectedKeys;
      if ($.size) {
        for (let I of $)
          if (t.canSelectItem(I)) {
            A = I;
            break;
          }
      }
      t.setFocused(!0), t.setFocusedKey(A), A == null && !c && rl(r.current);
    }
  }, []);
  let M = S.useRef(t.focusedKey);
  S.useEffect(() => {
    let A = tl();
    if (t.isFocused && t.focusedKey != null && m != null && m.current) {
      let $ = m.current.querySelector(
        `[data-key="${CSS.escape(t.focusedKey.toString())}"]`
      );
      $ &&
        (A === "keyboard" || L.current) &&
        (f || zv(m.current, $),
        A !== "virtual" && wp($, { containingElement: r.current }));
    }
    t.isFocused && t.focusedKey == null && M.current != null && rl(r.current),
      (M.current = t.focusedKey),
      (L.current = !1);
  }, [f, m, t.focusedKey, t.isFocused, r]);
  let N = {
      onKeyDown: g,
      onFocus: v,
      onBlur: E,
      onMouseDown(A) {
        m.current === A.target && A.preventDefault();
      },
    },
    { typeSelectProps: p } = IP({ keyboardDelegate: n, selectionManager: t });
  u || (N = ee(p, N));
  let R;
  return (
    c || (R = t.focusedKey == null ? 0 : -1),
    { collectionProps: { ...N, tabIndex: R } }
  );
}
function FP(e) {
  let {
      selectionManager: t,
      key: n,
      ref: r,
      shouldSelectOnPressUp: o,
      shouldUseVirtualFocus: i,
      focus: s,
      isDisabled: l,
      onAction: a,
      allowsDifferentPressOrigin: u,
      linkBehavior: c = "action",
    } = e,
    d = _v(),
    f = (V) => {
      if (V.pointerType === "keyboard" && nc(V)) t.toggleSelection(n);
      else {
        if (t.selectionMode === "none") return;
        if (t.isLink(n)) {
          if (c === "selection") {
            d.open(r.current, V), t.setSelectedKeys(t.selectedKeys);
            return;
          } else if (c === "override" || c === "none") return;
        }
        t.selectionMode === "single"
          ? t.isSelected(n) && !t.disallowEmptySelection
            ? t.toggleSelection(n)
            : t.replaceSelection(n)
          : V && V.shiftKey
          ? t.extendSelection(n)
          : t.selectionBehavior === "toggle" ||
            (V &&
              (kr(V) ||
                V.pointerType === "touch" ||
                V.pointerType === "virtual"))
          ? t.toggleSelection(n)
          : t.replaceSelection(n);
      }
    };
  S.useEffect(() => {
    n === t.focusedKey &&
      t.isFocused &&
      !i &&
      (s ? s() : document.activeElement !== r.current && rl(r.current));
  }, [r, n, t.focusedKey, t.childFocusStrategy, t.isFocused, i]),
    (l = l || t.isDisabled(n));
  let m = {};
  !i && !l
    ? (m = {
        tabIndex: n === t.focusedKey ? 0 : -1,
        onFocus(V) {
          V.target === r.current && t.setFocusedKey(n);
        },
      })
    : l &&
      (m.onMouseDown = (V) => {
        V.preventDefault();
      });
  let b = t.isLink(n) && c === "override",
    w = t.isLink(n) && c !== "selection" && c !== "none",
    P = !l && t.canSelectItem(n) && !b,
    g = (a || w) && !l,
    h = g && (t.selectionBehavior === "replace" ? !P : !P || t.isEmpty),
    v = g && P && t.selectionBehavior === "replace",
    E = h || v,
    L = S.useRef(null),
    M = E && P,
    N = S.useRef(!1),
    p = S.useRef(!1),
    R = (V) => {
      a && a(), w && d.open(r.current, V);
    },
    A = {};
  o
    ? ((A.onPressStart = (V) => {
        (L.current = V.pointerType),
          (N.current = M),
          V.pointerType === "keyboard" && (!E || Qp()) && f(V);
      }),
      u
        ? ((A.onPressUp = h
            ? null
            : (V) => {
                V.pointerType !== "keyboard" && P && f(V);
              }),
          (A.onPress = h ? R : null))
        : (A.onPress = (V) => {
            if (h || (v && V.pointerType !== "mouse")) {
              if (V.pointerType === "keyboard" && !Xp()) return;
              R(V);
            } else V.pointerType !== "keyboard" && P && f(V);
          }))
    : ((A.onPressStart = (V) => {
        (L.current = V.pointerType),
          (N.current = M),
          (p.current = h),
          P &&
            ((V.pointerType === "mouse" && !h) ||
              (V.pointerType === "keyboard" && (!g || Qp()))) &&
            f(V);
      }),
      (A.onPress = (V) => {
        (V.pointerType === "touch" ||
          V.pointerType === "pen" ||
          V.pointerType === "virtual" ||
          (V.pointerType === "keyboard" && E && Xp()) ||
          (V.pointerType === "mouse" && p.current)) &&
          (E ? R(V) : P && f(V));
      })),
    (m["data-key"] = n),
    (A.preventFocusOnPress = i);
  let { pressProps: $, isPressed: I } = Xv(A),
    x = v
      ? (V) => {
          L.current === "mouse" &&
            (V.stopPropagation(), V.preventDefault(), R(V));
        }
      : void 0,
    { longPressProps: k } = Xx({
      isDisabled: !M,
      onLongPress(V) {
        V.pointerType === "touch" && (f(V), t.setSelectionBehavior("toggle"));
      },
    }),
    K = (V) => {
      L.current === "touch" && N.current && V.preventDefault();
    },
    j = t.isLink(n)
      ? (V) => {
          rn.isOpening || V.preventDefault();
        }
      : void 0;
  return {
    itemProps: ee(m, P || h ? $ : {}, M ? k : {}, {
      onDoubleClick: x,
      onDragStartCapture: K,
      onClick: j,
    }),
    isPressed: I,
    isSelected: t.isSelected(n),
    isFocused: t.isFocused && t.focusedKey === n,
    isDisabled: l,
    allowsSelection: P,
    hasAction: E,
  };
}
function Xp() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === "Enter";
}
function Qp() {
  let e = window.event;
  return (
    (e == null ? void 0 : e.key) === " " ||
    (e == null ? void 0 : e.code) === "Space"
  );
}
var Ty = ie.createContext(null);
Ty.displayName = "PressResponderContext";
var NP = Object.defineProperty,
  KP = (e, t, n) =>
    t in e
      ? NP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  jn = (e, t, n) => (KP(e, typeof t != "symbol" ? t + "" : t, n), n),
  ky = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  jP = (e, t, n) => (
    ky(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  _P = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  zP = (e, t, n, r) => (
    ky(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Ss,
  rs = class {
    constructor(e, t, n) {
      jn(this, "type"),
        jn(this, "pointerType"),
        jn(this, "target"),
        jn(this, "shiftKey"),
        jn(this, "ctrlKey"),
        jn(this, "metaKey"),
        jn(this, "altKey"),
        _P(this, Ss, !0),
        (this.type = e),
        (this.pointerType = t),
        (this.target = n.currentTarget),
        (this.shiftKey = n.shiftKey),
        (this.metaKey = n.metaKey),
        (this.ctrlKey = n.ctrlKey),
        (this.altKey = n.altKey);
    }
    continuePropagation() {
      zP(this, Ss, !1);
    }
    get shouldStopPropagation() {
      return jP(this, Ss);
    }
  };
Ss = new WeakMap();
var Xn = (e) => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
  },
  rc = (e) => {
    var t, n;
    return (n =
      (t = e == null ? void 0 : e.ownerDocument) == null
        ? void 0
        : t.defaultView) != null
      ? n
      : window;
  },
  jr = "default",
  oc = "",
  Ps = new WeakMap();
function Zp(e) {
  if (Ci()) {
    if (jr === "default") {
      const t = Xn(e);
      (oc = t.documentElement.style.webkitUserSelect),
        (t.documentElement.style.webkitUserSelect = "none");
    }
    jr = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) &&
      (Ps.set(e, e.style.userSelect), (e.style.userSelect = "none"));
}
function os(e) {
  if (Ci()) {
    if (jr !== "disabled") return;
    (jr = "restoring"),
      setTimeout(() => {
        yd(() => {
          if (jr === "restoring") {
            const t = Xn(e);
            t.documentElement.style.webkitUserSelect === "none" &&
              (t.documentElement.style.webkitUserSelect = oc || ""),
              (oc = ""),
              (jr = "default");
          }
        });
      }, 300);
  } else if (
    (e instanceof HTMLElement || e instanceof SVGElement) &&
    e &&
    Ps.has(e)
  ) {
    let t = Ps.get(e);
    e.style.userSelect === "none" && t && (e.style.userSelect = t),
      e.getAttribute("style") === "" && e.removeAttribute("style"),
      Ps.delete(e);
  }
}
function BP(e) {
  let t = S.useContext(Ty);
  if (t) {
    let { register: n, ...r } = t;
    (e = ee(r, e)), n();
  }
  return wd(t, e.ref), e;
}
var qp = Symbol("linkClicked");
function Cy(e) {
  let {
      onPress: t,
      onPressChange: n,
      onPressStart: r,
      onPressEnd: o,
      onPressUp: i,
      isDisabled: s,
      isPressed: l,
      preventFocusOnPress: a,
      shouldCancelOnPointerExit: u,
      allowTextSelectionOnPress: c,
      ref: d,
      ...f
    } = BP(e),
    [m, b] = S.useState(!1),
    w = S.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      ignoreClickAfterPress: !1,
      didFirePressStart: !1,
      isTriggeringEvent: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
    }),
    { addGlobalListener: P, removeAllGlobalListeners: g } = fo(),
    h = Ae((p, R) => {
      let A = w.current;
      if (s || A.didFirePressStart) return;
      let $ = !0;
      if (((A.isTriggeringEvent = !0), r)) {
        let I = new rs("pressstart", R, p);
        r(I), ($ = I.shouldStopPropagation);
      }
      return (
        n && n(!0),
        (A.isTriggeringEvent = !1),
        (A.didFirePressStart = !0),
        b(!0),
        $
      );
    }),
    v = Ae((p, R, A = !0) => {
      let $ = w.current;
      if (!$.didFirePressStart) return;
      ($.ignoreClickAfterPress = !0),
        ($.didFirePressStart = !1),
        ($.isTriggeringEvent = !0);
      let I = !0;
      if (o) {
        let x = new rs("pressend", R, p);
        o(x), (I = x.shouldStopPropagation);
      }
      if ((n && n(!1), b(!1), t && A && !s)) {
        let x = new rs("press", R, p);
        t(x), I && (I = x.shouldStopPropagation);
      }
      return ($.isTriggeringEvent = !1), I;
    }),
    E = Ae((p, R) => {
      let A = w.current;
      if (!s) {
        if (i) {
          A.isTriggeringEvent = !0;
          let $ = new rs("pressup", R, p);
          return i($), (A.isTriggeringEvent = !1), $.shouldStopPropagation;
        }
        return !0;
      }
    }),
    L = Ae((p) => {
      let R = w.current;
      R.isPressed &&
        (R.isOverTarget && R.target && v(_t(R.target, p), R.pointerType, !1),
        (R.isPressed = !1),
        (R.isOverTarget = !1),
        (R.activePointerId = null),
        (R.pointerType = null),
        g(),
        !c && R.target && os(R.target));
    }),
    M = Ae((p) => {
      u && L(p);
    }),
    N = S.useMemo(() => {
      let p = w.current,
        R = {
          onKeyDown($) {
            var I;
            if (
              Pa($.nativeEvent, $.currentTarget) &&
              $.currentTarget.contains($.target)
            ) {
              eh($.target, $.key) && $.preventDefault();
              let x = !0;
              !p.isPressed &&
                !$.repeat &&
                ((p.target = $.currentTarget),
                (p.isPressed = !0),
                (x = h($, "keyboard")),
                P(Xn($.currentTarget), "keyup", A, !1)),
                x && $.stopPropagation(),
                $.metaKey &&
                  Mn() &&
                  ((I = p.metaKeyEvents) == null ||
                    I.set($.key, $.nativeEvent));
            } else $.key === "Meta" && (p.metaKeyEvents = new Map());
          },
          onKeyUp($) {
            p.target &&
              Pa($.nativeEvent, $.currentTarget) &&
              !$.repeat &&
              $.currentTarget.contains($.target) &&
              E(_t(p.target, $), "keyboard");
          },
          onClick($) {
            if (
              !($ && !$.currentTarget.contains($.target)) &&
              $ &&
              $.button === 0 &&
              !p.isTriggeringEvent &&
              !rn.isOpening
            ) {
              let I = !0;
              if (
                (s && $.preventDefault(),
                !p.ignoreClickAfterPress &&
                  !p.ignoreEmulatedMouseEvents &&
                  !p.isPressed &&
                  (p.pointerType === "virtual" || pi($.nativeEvent)))
              ) {
                !s && !a && Je($.currentTarget);
                let x = h($, "virtual"),
                  k = E($, "virtual"),
                  K = v($, "virtual");
                I = x && k && K;
              }
              (p.ignoreEmulatedMouseEvents = !1),
                (p.ignoreClickAfterPress = !1),
                I && $.stopPropagation();
            }
          },
        },
        A = ($) => {
          var I, x;
          if (p.isPressed && p.target && Pa($, p.target)) {
            eh($.target, $.key) && $.preventDefault();
            let k = $.target,
              K = v(_t(p.target, $), "keyboard", p.target.contains(k));
            g(),
              K && $.stopPropagation(),
              $.key !== "Enter" &&
                Md(p.target) &&
                p.target.contains(k) &&
                !$[qp] &&
                (($[qp] = !0), rn(p.target, $, !1)),
              (p.isPressed = !1),
              (I = p.metaKeyEvents) == null || I.delete($.key);
          } else if (
            $.key === "Meta" &&
            (x = p.metaKeyEvents) != null &&
            x.size
          ) {
            let k = p.metaKeyEvents;
            p.metaKeyEvents = null;
            for (let K of k.values())
              p.target && p.target.dispatchEvent(new KeyboardEvent("keyup", K));
          }
        };
      if (typeof PointerEvent < "u") {
        (R.onPointerDown = (k) => {
          if (k.button !== 0 || !k.currentTarget.contains(k.target)) return;
          if (Bv(k.nativeEvent)) {
            p.pointerType = "virtual";
            return;
          }
          Ta(k.currentTarget) && k.preventDefault(),
            (p.pointerType = k.pointerType);
          let K = !0;
          p.isPressed ||
            ((p.isPressed = !0),
            (p.isOverTarget = !0),
            (p.activePointerId = k.pointerId),
            (p.target = k.currentTarget),
            !s && !a && Je(k.currentTarget),
            c || Zp(p.target),
            (K = h(k, p.pointerType)),
            P(Xn(k.currentTarget), "pointermove", $, !1),
            P(Xn(k.currentTarget), "pointerup", I, !1),
            P(Xn(k.currentTarget), "pointercancel", x, !1)),
            K && k.stopPropagation();
        }),
          (R.onMouseDown = (k) => {
            k.currentTarget.contains(k.target) &&
              k.button === 0 &&
              (Ta(k.currentTarget) && k.preventDefault(), k.stopPropagation());
          }),
          (R.onPointerUp = (k) => {
            !k.currentTarget.contains(k.target) ||
              p.pointerType === "virtual" ||
              (k.button === 0 &&
                Sr(k, k.currentTarget) &&
                E(k, p.pointerType || k.pointerType));
          });
        let $ = (k) => {
            k.pointerId !== p.activePointerId ||
              !p.target ||
              (Sr(k, p.target)
                ? p.isOverTarget ||
                  ((p.isOverTarget = !0), h(_t(p.target, k), p.pointerType))
                : p.isOverTarget &&
                  ((p.isOverTarget = !1),
                  v(_t(p.target, k), p.pointerType, !1),
                  M(k)));
          },
          I = (k) => {
            k.pointerId === p.activePointerId &&
              p.isPressed &&
              k.button === 0 &&
              p.target &&
              ((Sr(k, p.target) || p.isOverTarget) &&
                v(_t(p.target, k), p.pointerType),
              (p.isPressed = !1),
              (p.isOverTarget = !1),
              (p.activePointerId = null),
              (p.pointerType = null),
              g(),
              c || os(p.target));
          },
          x = (k) => {
            L(k);
          };
        R.onDragStart = (k) => {
          k.currentTarget.contains(k.target) && L(k);
        };
      } else {
        (R.onMouseDown = (x) => {
          if (x.button !== 0 || !x.currentTarget.contains(x.target)) return;
          if (
            (Ta(x.currentTarget) && x.preventDefault(),
            p.ignoreEmulatedMouseEvents)
          ) {
            x.stopPropagation();
            return;
          }
          (p.isPressed = !0),
            (p.isOverTarget = !0),
            (p.target = x.currentTarget),
            (p.pointerType = pi(x.nativeEvent) ? "virtual" : "mouse"),
            !s && !a && Je(x.currentTarget),
            h(x, p.pointerType) && x.stopPropagation(),
            P(Xn(x.currentTarget), "mouseup", $, !1);
        }),
          (R.onMouseEnter = (x) => {
            if (!x.currentTarget.contains(x.target)) return;
            let k = !0;
            p.isPressed &&
              !p.ignoreEmulatedMouseEvents &&
              ((p.isOverTarget = !0), (k = h(x, p.pointerType))),
              k && x.stopPropagation();
          }),
          (R.onMouseLeave = (x) => {
            if (!x.currentTarget.contains(x.target)) return;
            let k = !0;
            p.isPressed &&
              !p.ignoreEmulatedMouseEvents &&
              ((p.isOverTarget = !1), (k = v(x, p.pointerType, !1)), M(x)),
              k && x.stopPropagation();
          }),
          (R.onMouseUp = (x) => {
            x.currentTarget.contains(x.target) &&
              !p.ignoreEmulatedMouseEvents &&
              x.button === 0 &&
              E(x, p.pointerType || "mouse");
          });
        let $ = (x) => {
          if (x.button === 0) {
            if (((p.isPressed = !1), g(), p.ignoreEmulatedMouseEvents)) {
              p.ignoreEmulatedMouseEvents = !1;
              return;
            }
            p.target &&
              (Sr(x, p.target)
                ? v(_t(p.target, x), p.pointerType)
                : p.isOverTarget && v(_t(p.target, x), p.pointerType, !1),
              (p.isOverTarget = !1));
          }
        };
        (R.onTouchStart = (x) => {
          if (!x.currentTarget.contains(x.target)) return;
          let k = UP(x.nativeEvent);
          if (!k) return;
          (p.activePointerId = k.identifier),
            (p.ignoreEmulatedMouseEvents = !0),
            (p.isOverTarget = !0),
            (p.isPressed = !0),
            (p.target = x.currentTarget),
            (p.pointerType = "touch"),
            !s && !a && Je(x.currentTarget),
            c || Zp(p.target),
            h(x, p.pointerType) && x.stopPropagation(),
            P(rc(x.currentTarget), "scroll", I, !0);
        }),
          (R.onTouchMove = (x) => {
            if (!x.currentTarget.contains(x.target)) return;
            if (!p.isPressed) {
              x.stopPropagation();
              return;
            }
            let k = Jp(x.nativeEvent, p.activePointerId),
              K = !0;
            k && Sr(k, x.currentTarget)
              ? p.isOverTarget ||
                ((p.isOverTarget = !0), (K = h(x, p.pointerType)))
              : p.isOverTarget &&
                ((p.isOverTarget = !1), (K = v(x, p.pointerType, !1)), M(x)),
              K && x.stopPropagation();
          }),
          (R.onTouchEnd = (x) => {
            if (!x.currentTarget.contains(x.target)) return;
            if (!p.isPressed) {
              x.stopPropagation();
              return;
            }
            let k = Jp(x.nativeEvent, p.activePointerId),
              K = !0;
            k && Sr(k, x.currentTarget)
              ? (E(x, p.pointerType), (K = v(x, p.pointerType)))
              : p.isOverTarget && (K = v(x, p.pointerType, !1)),
              K && x.stopPropagation(),
              (p.isPressed = !1),
              (p.activePointerId = null),
              (p.isOverTarget = !1),
              (p.ignoreEmulatedMouseEvents = !0),
              !c && p.target && os(p.target),
              g();
          }),
          (R.onTouchCancel = (x) => {
            x.currentTarget.contains(x.target) &&
              (x.stopPropagation(), p.isPressed && L(x));
          });
        let I = (x) => {
          p.isPressed &&
            x.target.contains(p.target) &&
            L({
              currentTarget: p.target,
              shiftKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              altKey: !1,
            });
        };
        R.onDragStart = (x) => {
          x.currentTarget.contains(x.target) && L(x);
        };
      }
      return R;
    }, [P, s, a, g, c, L, M, v, h, E]);
  return (
    S.useEffect(
      () => () => {
        !c && w.current.target && os(w.current.target);
      },
      [c]
    ),
    { isPressed: l || m, pressProps: ee(f, N) }
  );
}
function Md(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Pa(e, t) {
  const { key: n, code: r } = e,
    o = t,
    i = o.getAttribute("role");
  return (
    (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") &&
    !(
      (o instanceof rc(o).HTMLInputElement && !Ey(o, n)) ||
      o instanceof rc(o).HTMLTextAreaElement ||
      o.isContentEditable
    ) &&
    !((i === "link" || (!i && Md(o))) && n !== "Enter")
  );
}
function UP(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Jp(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (o.identifier === t) return o;
  }
  return null;
}
function _t(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
  };
}
function WP(e) {
  let t = e.width ? e.width / 2 : e.radiusX || 0,
    n = e.height ? e.height / 2 : e.radiusY || 0;
  return {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t,
  };
}
function HP(e, t) {
  return !(
    e.left > t.right ||
    t.left > e.right ||
    e.top > t.bottom ||
    t.top > e.bottom
  );
}
function Sr(e, t) {
  let n = t.getBoundingClientRect(),
    r = WP(e);
  return HP(n, r);
}
function Ta(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function eh(e, t) {
  return e instanceof HTMLInputElement
    ? !Ey(e, t)
    : e instanceof HTMLButtonElement
    ? e.type !== "submit" && e.type !== "reset"
    : !Md(e);
}
var GP = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Ey(e, t) {
  return e.type === "checkbox" || e.type === "radio"
    ? t === " "
    : GP.has(e.type);
}
const Ld = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Rl = S.createContext({}),
  Il = S.createContext(null),
  Dd = typeof document < "u",
  Ad = Dd ? S.useLayoutEffect : S.useEffect,
  $y = S.createContext({ strict: !1 }),
  Rd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  YP = "framerAppearId",
  My = "data-" + Rd(YP),
  XP = { skipAnimations: !1, useManualTiming: !1 };
class th {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function QP(e) {
  let t = new th(),
    n = new th(),
    r = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return u && s.add(a), f.add(a) && d && o && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            s.has(c) && (l.schedule(c), e()), c(a);
          }
        (o = !1), i && ((i = !1), l.process(a));
      },
    };
  return l;
}
const is = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  ZP = 40;
function Ly(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = is.reduce((d, f) => ((d[f] = QP(() => (n = !0))), d), {}),
    s = (d) => {
      i[d].process(o);
    },
    l = () => {
      const d = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, ZP), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        is.forEach(s),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), o.isProcessing || e(l);
    };
  return {
    schedule: is.reduce((d, f) => {
      const m = i[f];
      return (d[f] = (b, w = !1, P = !1) => (n || a(), m.schedule(b, w, P))), d;
    }, {}),
    cancel: (d) => is.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const { schedule: Id, cancel: M2 } = Ly(queueMicrotask, !1);
function qP(e, t, n, r) {
  const { visualElement: o } = S.useContext(Rl),
    i = S.useContext($y),
    s = S.useContext(Il),
    l = S.useContext(Ld).reducedMotion,
    a = S.useRef();
  (r = r || i.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  S.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = S.useRef(!!(n[My] && !window.HandoffComplete));
  return (
    Ad(() => {
      u &&
        (Id.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    S.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function _r(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function JP(e, t, n) {
  return S.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : _r(n) && (n.current = r));
    },
    [t]
  );
}
function mi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Vl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Vd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Od = ["initial", ...Vd];
function Ol(e) {
  return Vl(e.animate) || Od.some((t) => mi(e[t]));
}
function Dy(e) {
  return !!(Ol(e) || e.variants);
}
function eT(e, t) {
  if (Ol(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || mi(n) ? n : void 0,
      animate: mi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function tT(e) {
  const { initial: t, animate: n } = eT(e, S.useContext(Rl));
  return S.useMemo(() => ({ initial: t, animate: n }), [nh(t), nh(n)]);
}
function nh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const rh = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  gi = {};
for (const e in rh) gi[e] = { isEnabled: (t) => rh[e].some((n) => !!t[n]) };
function nT(e) {
  for (const t in e) gi[t] = { ...gi[t], ...e[t] };
}
const vi = S.createContext({}),
  Ay = S.createContext({}),
  rT = Symbol.for("motionComponentSymbol");
function oT({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && nT(e);
  function i(l, a) {
    let u;
    const c = { ...S.useContext(Ld), ...l, layoutId: iT(l) },
      { isStatic: d } = c,
      f = tT(l),
      m = r(l, d);
    if (!d && Dd) {
      f.visualElement = qP(o, m, c, t);
      const b = S.useContext(Ay),
        w = S.useContext($y).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, w, e, b));
    }
    return S.createElement(
      Rl.Provider,
      { value: f },
      u && f.visualElement
        ? S.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(o, l, JP(m, f.visualElement, a), m, d, f.visualElement)
    );
  }
  const s = S.forwardRef(i);
  return (s[rT] = o), s;
}
function iT({ layoutId: e }) {
  const t = S.useContext(vi).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function sT(e) {
  function t(r, o = {}) {
    return oT(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const lT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Fd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(lT.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const sl = {};
function aT(e) {
  Object.assign(sl, e);
}
const Mi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vr = new Set(Mi);
function Ry(e, { layout: t, layoutId: n }) {
  return (
    vr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!sl[e] || e === "opacity"))
  );
}
const je = (e) => !!(e && e.getVelocity),
  uT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  cT = Mi.length;
function dT(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let s = 0; s < cT; s++) {
    const l = Mi[s];
    if (e[l] !== void 0) {
      const a = uT[l] || l;
      i += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const Iy = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Vy = Iy("--"),
  fT = Iy("var(--"),
  Nd = (e) => (fT(e) ? pT.test(e.split("/*")[0].trim()) : !1),
  pT =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  hT = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Dn = (e, t, n) => (n > t ? t : n < e ? e : n),
  po = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Wo = { ...po, transform: (e) => Dn(0, 1, e) },
  ss = { ...po, default: 1 },
  Ho = (e) => Math.round(e * 1e5) / 1e5,
  Kd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  mT =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  gT =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Li(e) {
  return typeof e == "string";
}
const Di = (e) => ({
    test: (t) => Li(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  un = Di("deg"),
  Ft = Di("%"),
  X = Di("px"),
  vT = Di("vh"),
  yT = Di("vw"),
  oh = {
    ...Ft,
    parse: (e) => Ft.parse(e) / 100,
    transform: (e) => Ft.transform(e * 100),
  },
  ih = { ...po, transform: Math.round },
  Oy = {
    borderWidth: X,
    borderTopWidth: X,
    borderRightWidth: X,
    borderBottomWidth: X,
    borderLeftWidth: X,
    borderRadius: X,
    radius: X,
    borderTopLeftRadius: X,
    borderTopRightRadius: X,
    borderBottomRightRadius: X,
    borderBottomLeftRadius: X,
    width: X,
    maxWidth: X,
    height: X,
    maxHeight: X,
    size: X,
    top: X,
    right: X,
    bottom: X,
    left: X,
    padding: X,
    paddingTop: X,
    paddingRight: X,
    paddingBottom: X,
    paddingLeft: X,
    margin: X,
    marginTop: X,
    marginRight: X,
    marginBottom: X,
    marginLeft: X,
    rotate: un,
    rotateX: un,
    rotateY: un,
    rotateZ: un,
    scale: ss,
    scaleX: ss,
    scaleY: ss,
    scaleZ: ss,
    skew: un,
    skewX: un,
    skewY: un,
    distance: X,
    translateX: X,
    translateY: X,
    translateZ: X,
    x: X,
    y: X,
    z: X,
    perspective: X,
    transformPerspective: X,
    opacity: Wo,
    originX: oh,
    originY: oh,
    originZ: X,
    zIndex: ih,
    backgroundPositionX: X,
    backgroundPositionY: X,
    fillOpacity: Wo,
    strokeOpacity: Wo,
    numOctaves: ih,
  };
function jd(e, t, n, r) {
  const { style: o, vars: i, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (Vy(d)) {
      i[d] = f;
      continue;
    }
    const m = Oy[d],
      b = hT(f, m);
    if (vr.has(d)) {
      if (((a = !0), (s[d] = b), !c)) continue;
      f !== (m.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (l[d] = b)) : (o[d] = b);
  }
  if (
    (t.transform ||
      (a || r
        ? (o.transform = dT(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: m = 0 } = l;
    o.transformOrigin = `${d} ${f} ${m}`;
  }
}
const _d = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Fy(e, t, n) {
  for (const r in t) !je(t[r]) && !Ry(r, n) && (e[r] = t[r]);
}
function bT({ transformTemplate: e }, t, n) {
  return S.useMemo(() => {
    const r = _d();
    return (
      jd(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function wT(e, t, n) {
  const r = e.style || {},
    o = {};
  return Fy(o, r, e), Object.assign(o, bT(e, t, n)), o;
}
function xT(e, t, n) {
  const r = {},
    o = wT(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const ST = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ll(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    ST.has(e)
  );
}
let Ny = (e) => !ll(e);
function PT(e) {
  e && (Ny = (t) => (t.startsWith("on") ? !ll(t) : e(t)));
}
try {
  PT(require("@emotion/is-prop-valid").default);
} catch {}
function TT(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((Ny(o) ||
        (n === !0 && ll(o)) ||
        (!t && !ll(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function sh(e, t, n) {
  return typeof e == "string" ? e : X.transform(t + n * e);
}
function kT(e, t, n) {
  const r = sh(t, e.x, e.width),
    o = sh(n, e.y, e.height);
  return `${r} ${o}`;
}
const CT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ET = { offset: "strokeDashoffset", array: "strokeDasharray" };
function $T(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? CT : ET;
  e[i.offset] = X.transform(-r);
  const s = X.transform(t),
    l = X.transform(n);
  e[i.array] = `${s} ${l}`;
}
function zd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((jd(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: b, dimensions: w } = e;
  m.transform && (w && (b.transform = m.transform), delete m.transform),
    w &&
      (o !== void 0 || i !== void 0 || b.transform) &&
      (b.transformOrigin = kT(
        w,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && $T(m, s, l, a, !1);
}
const Ky = () => ({ ..._d(), attrs: {} }),
  Bd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function MT(e, t, n, r) {
  const o = S.useMemo(() => {
    const i = Ky();
    return (
      zd(i, t, { enableHardwareAcceleration: !1 }, Bd(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Fy(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function LT(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const a = (Fd(n) ? MT : xT)(r, i, s, n),
      u = TT(r, typeof n == "string", e),
      c = n !== S.Fragment ? { ...u, ...a, ref: o } : {},
      { children: d } = r,
      f = S.useMemo(() => (je(d) ? d.get() : d), [d]);
    return S.createElement(n, { ...c, children: f });
  };
}
function jy(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const _y = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function zy(e, t, n, r) {
  jy(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(_y.has(o) ? o : Rd(o), t.attrs[o]);
}
function Ud(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (je(o[s]) ||
      (t.style && je(t.style[s])) ||
      Ry(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return i;
}
function By(e, t, n) {
  const r = Ud(e, t, n);
  for (const o in e)
    if (je(e[o]) || je(t[o])) {
      const i =
        Mi.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function Wd(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function Uy(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ic = (e) => Array.isArray(e),
  DT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  AT = (e) => (ic(e) ? e[e.length - 1] || 0 : e);
function Ts(e) {
  const t = je(e) ? e.get() : e;
  return DT(t) ? t.toValue() : t;
}
function RT(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const s = { latestValues: IT(r, o, i, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Wy = (e) => (t, n) => {
  const r = S.useContext(Rl),
    o = S.useContext(Il),
    i = () => RT(e, t, r, o);
  return n ? i() : Uy(i);
};
function IT(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Ts(i[f]);
  let { initial: s, animate: l } = e;
  const a = Ol(e),
    u = Dy(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? l : s;
  return (
    d &&
      typeof d != "boolean" &&
      !Vl(d) &&
      (Array.isArray(d) ? d : [d]).forEach((m) => {
        const b = Wd(e, m);
        if (!b) return;
        const { transitionEnd: w, transition: P, ...g } = b;
        for (const h in g) {
          let v = g[h];
          if (Array.isArray(v)) {
            const E = c ? v.length - 1 : 0;
            v = v[E];
          }
          v !== null && (o[h] = v);
        }
        for (const h in w) o[h] = w[h];
      }),
    o
  );
}
const _e = (e) => e,
  {
    schedule: Me,
    cancel: An,
    state: De,
    steps: ka,
  } = Ly(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _e, !0),
  VT = {
    useVisualState: Wy({
      scrapeMotionValuesFromProps: By,
      createRenderState: Ky,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Me.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Me.render(() => {
            zd(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Bd(t.tagName),
              e.transformTemplate
            ),
              zy(t, n);
          });
      },
    }),
  },
  OT = {
    useVisualState: Wy({
      scrapeMotionValuesFromProps: Ud,
      createRenderState: _d,
    }),
  };
function FT(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Fd(e) ? VT : OT),
    preloadedFeatures: n,
    useRender: LT(t),
    createVisualElement: r,
    Component: e,
  };
}
function Gt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Hy = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Fl(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const NT = (e) => (t) => Hy(t) && e(t, Fl(t));
function Xt(e, t, n, r) {
  return Gt(e, t, NT(n), r);
}
const KT = (e, t) => (n) => t(e(n)),
  Qt = (...e) => e.reduce(KT);
function Gy(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const lh = Gy("dragHorizontal"),
  ah = Gy("dragVertical");
function Yy(e) {
  let t = !1;
  if (e === "y") t = ah();
  else if (e === "x") t = lh();
  else {
    const n = lh(),
      r = ah();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Xy() {
  const e = Yy(!0);
  return e ? (e(), !1) : !0;
}
class Nn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function uh(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.pointerType === "touch" || Xy()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && l[r](i, s);
    };
  return Xt(e.current, n, o, { passive: !e.getProps()[r] });
}
class jT extends Nn {
  mount() {
    this.unmount = Qt(uh(this.node, !0), uh(this.node, !1));
  }
  unmount() {}
}
class _T extends Nn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Qt(
      Gt(this.node.current, "focus", () => this.onFocus()),
      Gt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Qy = (e, t) => (t ? (e === t ? !0 : Qy(e, t.parentElement)) : !1);
function Ca(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Fl(n));
}
class zT extends Nn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = _e),
      (this.removeEndListeners = _e),
      (this.removeAccessibleListeners = _e),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = Xt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              !d && !Qy(this.node.current, l.target)
                ? c && c(l, a)
                : u && u(l, a);
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Xt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Qt(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Ca("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && c(a, u);
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Gt(this.node.current, "keyup", s)),
              Ca("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = Gt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Ca("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Gt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Qt(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && r(t, n);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Xy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && r(t, n);
  }
  mount() {
    const t = this.node.getProps(),
      n = Xt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Gt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Qt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const sc = new WeakMap(),
  Ea = new WeakMap(),
  BT = (e) => {
    const t = sc.get(e.target);
    t && t(e);
  },
  UT = (e) => {
    e.forEach(BT);
  };
function WT({ root: e, ...t }) {
  const n = e || document;
  Ea.has(n) || Ea.set(n, {});
  const r = Ea.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(UT, { root: e, ...t })), r[o];
}
function HT(e, t, n) {
  const r = WT(t);
  return (
    sc.set(e, n),
    r.observe(e),
    () => {
      sc.delete(e), r.unobserve(e);
    }
  );
}
const GT = { some: 0, all: 1 };
class YT extends Nn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : GT[o],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(a);
      };
    return HT(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(XT(t, n)) && this.startObserver();
  }
  unmount() {}
}
function XT({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const QT = {
  inView: { Feature: YT },
  tap: { Feature: zT },
  focus: { Feature: _T },
  hover: { Feature: jT },
};
function Zy(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ZT(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function qT(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Nl(e, t, n) {
  const r = e.getProps();
  return Wd(r, t, n !== void 0 ? n : r.custom, ZT(e), qT(e));
}
const kn = (e) => e * 1e3,
  Zt = (e) => e / 1e3,
  JT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ek = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  tk = { type: "keyframes", duration: 0.8 },
  nk = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  rk = (e, { keyframes: t }) =>
    t.length > 2
      ? tk
      : vr.has(e)
      ? e.startsWith("scale")
        ? ek(t[1])
        : JT
      : nk;
function ok({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Hd(e, t) {
  return e[t] || e.default || e;
}
const ik = (e) => e !== null;
function Kl(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(ik),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
let ks;
function sk() {
  ks = void 0;
}
const Cn = {
    now: () => (
      ks === void 0 &&
        Cn.set(
          De.isProcessing || XP.useManualTiming
            ? De.timestamp
            : performance.now()
        ),
      ks
    ),
    set: (e) => {
      (ks = e), queueMicrotask(sk);
    },
  },
  qy = (e) => /^0[^.\s]+$/u.test(e);
function lk(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || qy(e)
    : !0;
}
let Jy = _e;
const e0 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  ak = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function uk(e) {
  const t = ak.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function t0(e, t, n = 1) {
  const [r, o] = uk(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return e0(s) ? parseFloat(s) : s;
  }
  return Nd(o) ? t0(o, t, n + 1) : o;
}
const ck = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  ch = (e) => e === po || e === X,
  dh = (e, t) => parseFloat(e.split(", ")[t]),
  fh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return dh(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? dh(i[1], e) : 0;
      }
    },
  dk = new Set(["x", "y", "z"]),
  fk = Mi.filter((e) => !dk.has(e));
function ph(e) {
  const t = [];
  return (
    fk.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const lo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: fh(4, 13),
  y: fh(5, 14),
};
lo.translateX = lo.x;
lo.translateY = lo.y;
const n0 = (e) => (t) => t.test(e),
  pk = { test: (e) => e === "auto", parse: (e) => e },
  r0 = [po, X, Ft, un, yT, vT, pk],
  hh = (e) => r0.find(n0(e)),
  rr = new Set();
let lc = !1,
  ac = !1;
function o0() {
  if (ac) {
    const e = Array.from(rr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      ph(r).length && (n.set(r, ph(r)), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (ac = !1), (lc = !1), rr.forEach((e) => e.complete()), rr.clear();
}
function i0() {
  rr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ac = !0);
  });
}
function hk() {
  i0(), o0();
}
class Gd {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (rr.add(this),
          lc || ((lc = !0), Me.read(i0), Me.resolveKeyframes(o0)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            l = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      rr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), rr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Yd = (e, t) => (n) =>
    !!(
      (Li(n) && gT.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  s0 = (e, t, n) => (r) => {
    if (!Li(r)) return r;
    const [o, i, s, l] = r.match(Kd);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  mk = (e) => Dn(0, 255, e),
  $a = { ...po, transform: (e) => Math.round(mk(e)) },
  er = {
    test: Yd("rgb", "red"),
    parse: s0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      $a.transform(e) +
      ", " +
      $a.transform(t) +
      ", " +
      $a.transform(n) +
      ", " +
      Ho(Wo.transform(r)) +
      ")",
  };
function gk(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const uc = { test: Yd("#"), parse: gk, transform: er.transform },
  zr = {
    test: Yd("hsl", "hue"),
    parse: s0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ft.transform(Ho(t)) +
      ", " +
      Ft.transform(Ho(n)) +
      ", " +
      Ho(Wo.transform(r)) +
      ")",
  },
  Ne = {
    test: (e) => er.test(e) || uc.test(e) || zr.test(e),
    parse: (e) =>
      er.test(e) ? er.parse(e) : zr.test(e) ? zr.parse(e) : uc.parse(e),
    transform: (e) =>
      Li(e) ? e : e.hasOwnProperty("red") ? er.transform(e) : zr.transform(e),
  };
function vk(e) {
  var t, n;
  return (
    isNaN(e) &&
    Li(e) &&
    (((t = e.match(Kd)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(mT)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const l0 = "number",
  a0 = "color",
  yk = "var",
  bk = "var(",
  mh = "${}",
  wk =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function al(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const l = t
    .replace(
      wk,
      (a) => (
        Ne.test(a)
          ? (r.color.push(i), o.push(a0), n.push(Ne.parse(a)))
          : a.startsWith(bk)
          ? (r.var.push(i), o.push(yk), n.push(a))
          : (r.number.push(i), o.push(l0), n.push(parseFloat(a))),
        ++i,
        mh
      )
    )
    .split(mh);
  return { values: n, split: l, indexes: r, types: o };
}
function u0(e) {
  return al(e).values;
}
function c0(e) {
  const { split: t, types: n } = al(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const l = n[s];
        l === l0
          ? (i += Ho(o[s]))
          : l === a0
          ? (i += Ne.transform(o[s]))
          : (i += o[s]);
      }
    return i;
  };
}
const xk = (e) => (typeof e == "number" ? 0 : e);
function Sk(e) {
  const t = u0(e);
  return c0(e)(t.map(xk));
}
const Rn = {
    test: vk,
    parse: u0,
    createTransformer: c0,
    getAnimatableNone: Sk,
  },
  Pk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Tk(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Kd) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = Pk.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const kk = /\b([a-z-]*)\(.*?\)/gu,
  cc = {
    ...Rn,
    getAnimatableNone: (e) => {
      const t = e.match(kk);
      return t ? t.map(Tk).join(" ") : e;
    },
  },
  Ck = {
    ...Oy,
    color: Ne,
    backgroundColor: Ne,
    outlineColor: Ne,
    fill: Ne,
    stroke: Ne,
    borderColor: Ne,
    borderTopColor: Ne,
    borderRightColor: Ne,
    borderBottomColor: Ne,
    borderLeftColor: Ne,
    filter: cc,
    WebkitFilter: cc,
  },
  Xd = (e) => Ck[e];
function d0(e, t) {
  let n = Xd(e);
  return (
    n !== cc && (n = Rn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function Ek(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; )
    typeof e[r] == "string" && e[r] !== "none" && e[r] !== "0" && (o = e[r]),
      r++;
  if (o && n) for (const i of t) e[i] = d0(n, o);
}
class f0 extends Gd {
  constructor(t, n, r, o) {
    super(t, n, r, o, o == null ? void 0 : o.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      const u = t[a];
      if (typeof u == "string" && Nd(u)) {
        const c = t0(u, n.current);
        c !== void 0 && (t[a] = c);
      }
    }
    if (!ck.has(r) || t.length !== 2) return this.resolveNoneKeyframes();
    const [o, i] = t,
      s = hh(o),
      l = hh(i);
    if (s !== l)
      if (ch(s) && ch(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) lk(t[o]) && r.push(o);
    r.length && Ek(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = lo[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      l = o[s];
    (o[s] = lo[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function $k(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const gh = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Rn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Mk(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Lk(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  const i = e[e.length - 1],
    s = gh(o, t),
    l = gh(i, t);
  return !s || !l ? !1 : Mk(e) || (n === "spring" && r);
}
class p0 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && hk(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !Lk(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        a == null || a(Kl(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function h0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Dk = 5;
function m0(e, t, n) {
  const r = Math.max(t - Dk, 0);
  return h0(n - e(r), t - r);
}
const Ma = 0.001,
  Ak = 0.01,
  Rk = 10,
  Ik = 0.05,
  Vk = 1;
function Ok({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Dn(Ik, Vk, s)),
    (e = Dn(Ak, Rk, Zt(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            m = dc(u, s),
            b = Math.exp(-d);
          return Ma - (f / m) * b;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            b = Math.exp(-d),
            w = dc(Math.pow(u, 2), s);
          return ((-o(u) + Ma > 0 ? -1 : 1) * ((f - m) * b)) / w;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Ma + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const l = 5 / e,
    a = Nk(o, i, l);
  if (((e = kn(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Fk = 12;
function Nk(e, t, n) {
  let r = n;
  for (let o = 1; o < Fk; o++) r = r - e(r) / t(r);
  return r;
}
function dc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Kk = ["duration", "bounce"],
  jk = ["stiffness", "damping", "mass"];
function vh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function _k(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!vh(e, jk) && vh(e, Kk)) {
    const n = Ok(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function g0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = _k({ ...r, velocity: -Zt(r.velocity || 0) }),
    m = d || 0,
    b = a / (2 * Math.sqrt(l * u)),
    w = i - o,
    P = Zt(Math.sqrt(l / u)),
    g = Math.abs(w) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (b < 1) {
    const v = dc(P, b);
    h = (E) => {
      const L = Math.exp(-b * P * E);
      return (
        i - L * (((m + b * P * w) / v) * Math.sin(v * E) + w * Math.cos(v * E))
      );
    };
  } else if (b === 1) h = (v) => i - Math.exp(-P * v) * (w + (m + P * w) * v);
  else {
    const v = P * Math.sqrt(b * b - 1);
    h = (E) => {
      const L = Math.exp(-b * P * E),
        M = Math.min(v * E, 300);
      return (
        i - (L * ((m + b * P * w) * Math.sinh(M) + v * w * Math.cosh(M))) / v
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (v) => {
      const E = h(v);
      if (f) s.done = v >= c;
      else {
        let L = m;
        v !== 0 && (b < 1 ? (L = m0(h, v, E)) : (L = 0));
        const M = Math.abs(L) <= n,
          N = Math.abs(i - E) <= t;
        s.done = M && N;
      }
      return (s.value = s.done ? i : E), s;
    },
  };
}
function yh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    m = (p) => (l !== void 0 && p < l) || (a !== void 0 && p > a),
    b = (p) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - p) < Math.abs(a - p)
        ? l
        : a;
  let w = n * t;
  const P = d + w,
    g = s === void 0 ? P : s(P);
  g !== P && (w = g - d);
  const h = (p) => -w * Math.exp(-p / r),
    v = (p) => g + h(p),
    E = (p) => {
      const R = h(p),
        A = v(p);
      (f.done = Math.abs(R) <= u), (f.value = f.done ? g : A);
    };
  let L, M;
  const N = (p) => {
    m(f.value) &&
      ((L = p),
      (M = g0({
        keyframes: [f.value, b(f.value)],
        velocity: m0(v, p, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (p) => {
        let R = !1;
        return (
          !M && L === void 0 && ((R = !0), E(p), N(p)),
          L !== void 0 && p >= L ? M.next(p - L) : (!R && E(p), f)
        );
      },
    }
  );
}
const v0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  zk = 1e-7,
  Bk = 12;
function Uk(e, t, n, r, o) {
  let i,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (i = v0(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > zk && ++l < Bk);
  return s;
}
function Ai(e, t, n, r) {
  if (e === t && n === r) return _e;
  const o = (i) => Uk(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : v0(o(i), t, r));
}
const Wk = Ai(0.42, 0, 1, 1),
  Hk = Ai(0, 0, 0.58, 1),
  y0 = Ai(0.42, 0, 0.58, 1),
  Gk = (e) => Array.isArray(e) && typeof e[0] != "number",
  b0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  w0 = (e) => (t) => 1 - e(1 - t),
  Qd = (e) => 1 - Math.sin(Math.acos(e)),
  x0 = w0(Qd),
  Yk = b0(Qd),
  S0 = Ai(0.33, 1.53, 0.69, 0.99),
  Zd = w0(S0),
  Xk = b0(Zd),
  Qk = (e) =>
    (e *= 2) < 1 ? 0.5 * Zd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Zk = {
    linear: _e,
    easeIn: Wk,
    easeInOut: y0,
    easeOut: Hk,
    circIn: Qd,
    circInOut: Yk,
    circOut: x0,
    backIn: Zd,
    backInOut: Xk,
    backOut: S0,
    anticipate: Qk,
  },
  bh = (e) => {
    if (Array.isArray(e)) {
      Jy(e.length === 4);
      const [t, n, r, o] = e;
      return Ai(t, n, r, o);
    } else if (typeof e == "string") return Zk[e];
    return e;
  },
  yi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  pe = (e, t, n) => e + (t - e) * n;
function La(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function qk({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (o = La(a, l, e + 1 / 3)), (i = La(a, l, e)), (s = La(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Da = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  Jk = [uc, er, zr],
  eC = (e) => Jk.find((t) => t.test(e));
function wh(e) {
  const t = eC(e);
  let n = t.parse(e);
  return t === zr && (n = qk(n)), n;
}
const xh = (e, t) => {
  const n = wh(e),
    r = wh(t),
    o = { ...n };
  return (i) => (
    (o.red = Da(n.red, r.red, i)),
    (o.green = Da(n.green, r.green, i)),
    (o.blue = Da(n.blue, r.blue, i)),
    (o.alpha = pe(n.alpha, r.alpha, i)),
    er.transform(o)
  );
};
function fc(e, t) {
  return (n) => (n > 0 ? t : e);
}
function tC(e, t) {
  return (n) => pe(e, t, n);
}
function qd(e) {
  return typeof e == "number"
    ? tC
    : typeof e == "string"
    ? Nd(e)
      ? fc
      : Ne.test(e)
      ? xh
      : oC
    : Array.isArray(e)
    ? P0
    : typeof e == "object"
    ? Ne.test(e)
      ? xh
      : nC
    : fc;
}
function P0(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => qd(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function nC(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = qd(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function rC(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      l = e.indexes[s][o[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[i] = a), o[s]++;
  }
  return r;
}
const oC = (e, t) => {
  const n = Rn.createTransformer(t),
    r = al(e),
    o = al(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? Qt(P0(rC(r, o), o.values), n)
    : fc(e, t);
};
function T0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? pe(e, t, n)
    : qd(e)(e, t);
}
function iC(e, t, n) {
  const r = [],
    o = n || T0,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let l = o(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || _e : t;
      l = Qt(a, l);
    }
    r.push(l);
  }
  return r;
}
function sC(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Jy(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = iC(t, r, o),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = yi(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => a(Dn(e[0], e[i - 1], u)) : a;
}
function lC(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = yi(0, t, r);
    e.push(pe(n, 1, o));
  }
}
function aC(e) {
  const t = [0];
  return lC(t, e.length - 1), t;
}
function uC(e, t) {
  return e.map((n) => n * t);
}
function cC(e, t) {
  return e.map(() => t || y0).splice(0, e.length - 1);
}
function ul({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = Gk(r) ? r.map(bh) : bh(r),
    i = { done: !1, value: t[0] },
    s = uC(n && n.length === t.length ? n : aC(t), e),
    l = sC(s, t, { ease: Array.isArray(o) ? o : cC(t, o) });
  return {
    calculatedDuration: e,
    next: (a) => ((i.value = l(a)), (i.done = a >= e), i),
  };
}
const Sh = 2e4;
function dC(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Sh; ) (t += n), (r = e.next(t));
  return t >= Sh ? 1 / 0 : t;
}
const fC = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Me.update(t, !0),
      stop: () => An(t),
      now: () => (De.isProcessing ? De.timestamp : Cn.now()),
    };
  },
  pC = { decay: yh, inertia: yh, tween: ul, keyframes: ul, spring: g0 },
  hC = (e) => e / 100;
class Jd extends p0 {
  constructor({ KeyframeResolver: t = Gd, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle");
    const { name: r, motionValue: o, keyframes: i } = this.options,
      s = (l, a) => this.onKeyframesResolved(l, a);
    r && o && o.owner
      ? (this.resolver = o.owner.resolveKeyframes(i, s, r, o))
      : (this.resolver = new t(i, s, r, o)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      l = pC[n] || ul;
    let a, u;
    l !== ul &&
      typeof t[0] != "number" &&
      ((a = Qt(hC, T0(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = dC(c));
    const { calculatedDuration: d } = c,
      f = d + o,
      m = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: m,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: p } = this.options;
      return { done: !0, value: p[p.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: m,
      repeatType: b,
      repeatDelay: w,
      onUpdate: P,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? g < 0 : g > c;
    (this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let v = this.currentTime,
      E = i;
    if (m) {
      const p = Math.min(this.currentTime, c) / d;
      let R = Math.floor(p),
        A = p % 1;
      !A && p >= 1 && (A = 1),
        A === 1 && R--,
        (R = Math.min(R, m + 1)),
        !!(R % 2) &&
          (b === "reverse"
            ? ((A = 1 - A), w && (A -= w / d))
            : b === "mirror" && (E = s)),
        (v = Dn(0, 1, A) * d);
    }
    const L = h ? { done: !1, value: a[0] } : E.next(v);
    l && (L.value = l(L.value));
    let { done: M } = L;
    !h &&
      u !== null &&
      (M = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const N =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && M));
    return (
      N && o !== void 0 && (L.value = Kl(a, this.options, o)),
      P && P(L.value),
      N && this.finish(),
      L
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Zt(t.calculatedDuration) : 0;
  }
  get time() {
    return Zt(this.currentTime);
  }
  set time(t) {
    (t = kn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Zt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = fC, onPlay: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.teardown();
    const { onStop: t } = this.options;
    t && t();
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const k0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function C0(e) {
  return !!(
    !e ||
    (typeof e == "string" && E0[e]) ||
    k0(e) ||
    (Array.isArray(e) && e.every(C0))
  );
}
const Io = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  E0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Io([0, 0.65, 0.55, 1]),
    circOut: Io([0.55, 0, 1, 0.45]),
    backIn: Io([0.31, 0.01, 0.66, -0.59]),
    backOut: Io([0.33, 1.53, 0.69, 0.99]),
  };
function $0(e) {
  if (e) return k0(e) ? Io(e) : Array.isArray(e) ? e.map($0) : E0[e];
}
function mC(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = $0(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const gC = $k(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  vC = new Set(["opacity", "clipPath", "filter", "transform"]),
  cl = 10,
  yC = 2e4;
function bC(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !C0(e.ease);
}
function wC(e, t) {
  const n = new Jd({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < yC; ) (r = n.sample(i)), o.push(r.value), (i += cl);
  return { times: void 0, keyframes: o, duration: i - cl, ease: "linear" };
}
class Ph extends p0 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: o } = this.options;
    (this.resolver = new f0(o, (i, s) => this.onKeyframesResolved(i, s), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: l,
      motionValue: a,
      name: u,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (bC(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: m, ...b } = this.options,
        w = wC(t, b);
      (t = w.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = w.duration),
        (i = w.times),
        (s = w.ease),
        (l = "keyframes");
    }
    const c = mC(a.owner.current, u, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: s,
    });
    return (
      (c.startTime = Cn.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Kl(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: o, times: i, type: l, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Zt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Zt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = kn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return _e;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return _e;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: l,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: a,
            onUpdate: u,
            onComplete: c,
            ...d
          } = this.options,
          f = new Jd({
            ...d,
            keyframes: r,
            duration: o,
            type: i,
            ease: s,
            times: l,
            isGenerator: !0,
          }),
          m = kn(this.time);
        a.setWithVelocity(f.sample(m - cl).value, f.sample(m).value, cl);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: l,
    } = t;
    return (
      gC() &&
      r &&
      vC.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      l !== "inertia"
    );
  }
}
const ef =
  (e, t, n, r = {}, o, i) =>
  (s) => {
    const l = Hd(r, e) || {},
      a = l.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - kn(a);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), l.onUpdate && l.onUpdate(f);
      },
      onComplete: () => {
        s(), l.onComplete && l.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    ok(l) || (c = { ...c, ...rk(e, c) }),
      c.duration && (c.duration = kn(c.duration)),
      c.repeatDelay && (c.repeatDelay = kn(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      (c.type === !1 && ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = Kl(c.keyframes, l);
      if (f !== void 0) {
        Me.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return !i && Ph.supports(c) ? new Ph(c) : new Jd(c);
  };
function dl(e) {
  return !!(je(e) && e.add);
}
function tf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function nf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class rf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return tf(this.subscriptions, t), () => nf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Th = 30,
  xC = (e) => !isNaN(parseFloat(e));
class SC {
  constructor(t, n = {}) {
    (this.version = "11.0.24"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Cn.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = xC(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = Cn.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new rf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Me.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Cn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Th
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Th);
    return h0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function bi(e, t) {
  return new SC(e, t);
}
function PC(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, bi(n));
}
function TC(e, t) {
  const n = Nl(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const l = AT(i[s]);
    PC(e, s, l);
  }
}
function kC({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function M0(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  const u = e.getValue("willChange");
  r && (s = r);
  const c = [],
    d = o && e.animationState && e.animationState.getState()[o];
  for (const f in a) {
    const m = e.getValue(
        f,
        (i = e.latestValues[f]) !== null && i !== void 0 ? i : null
      ),
      b = a[f];
    if (b === void 0 || (d && kC(d, f))) continue;
    const w = { delay: n, elapsed: 0, ...Hd(s || {}, f) };
    let P = !1;
    if (window.HandoffAppearAnimations) {
      const h = e.getProps()[My];
      if (h) {
        const v = window.HandoffAppearAnimations(h, f);
        v !== null && ((w.elapsed = v), (P = !0));
      }
    }
    m.start(
      ef(f, m, b, e.shouldReduceMotion && vr.has(f) ? { type: !1 } : w, e, P)
    );
    const g = m.animation;
    g && (dl(u) && (u.add(f), g.then(() => u.remove(f))), c.push(g));
  }
  return (
    l &&
      Promise.all(c).then(() => {
        Me.update(() => {
          l && TC(e, l);
        });
      }),
    c
  );
}
function pc(e, t, n = {}) {
  var r;
  const o = Nl(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(M0(e, o, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return CC(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
    return u().then(() => c());
  } else return Promise.all([s(), l(n.delay)]);
}
function CC(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = o === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(EC)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            pc(u, t, { ...i, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function EC(e, t) {
  return e.sortNodePosition(t);
}
function $C(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => pc(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = pc(e, t, n);
  else {
    const o = typeof t == "function" ? Nl(e, t, n.custom) : t;
    r = Promise.all(M0(e, o, n));
  }
  return r.then(() => {
    Me.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const MC = [...Vd].reverse(),
  LC = Vd.length;
function DC(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => $C(e, n, r)));
}
function AC(e) {
  let t = DC(e);
  const n = IC();
  let r = !0;
  const o = (a) => (u, c) => {
    var d;
    const f = Nl(
      e,
      c,
      a === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: m, transitionEnd: b, ...w } = f;
      u = { ...u, ...w, ...b };
    }
    return u;
  };
  function i(a) {
    t = a(e);
  }
  function s(a) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let m = {},
      b = 1 / 0;
    for (let P = 0; P < LC; P++) {
      const g = MC[P],
        h = n[g],
        v = u[g] !== void 0 ? u[g] : c[g],
        E = mi(v),
        L = g === a ? h.isActive : null;
      L === !1 && (b = P);
      let M = v === c[g] && v !== u[g] && E;
      if (
        (M && r && e.manuallyAnimateOnMount && (M = !1),
        (h.protectedKeys = { ...m }),
        (!h.isActive && L === null) ||
          (!v && !h.prevProp) ||
          Vl(v) ||
          typeof v == "boolean")
      )
        continue;
      let p =
          RC(h.prevProp, v) ||
          (g === a && h.isActive && !M && E) ||
          (P > b && E),
        R = !1;
      const A = Array.isArray(v) ? v : [v];
      let $ = A.reduce(o(g), {});
      L === !1 && ($ = {});
      const { prevResolvedValues: I = {} } = h,
        x = { ...I, ...$ },
        k = (K) => {
          (p = !0),
            f.has(K) && ((R = !0), f.delete(K)),
            (h.needsAnimating[K] = !0);
          const j = e.getValue(K);
          j && (j.liveStyle = !1);
        };
      for (const K in x) {
        const j = $[K],
          V = I[K];
        if (m.hasOwnProperty(K)) continue;
        let F = !1;
        ic(j) && ic(V) ? (F = !Zy(j, V)) : (F = j !== V),
          F
            ? j != null
              ? k(K)
              : f.add(K)
            : j !== void 0 && f.has(K)
            ? k(K)
            : (h.protectedKeys[K] = !0);
      }
      (h.prevProp = v),
        (h.prevResolvedValues = $),
        h.isActive && (m = { ...m, ...$ }),
        r && e.blockInitialAnimation && (p = !1),
        p &&
          (!M || R) &&
          d.push(...A.map((K) => ({ animation: K, options: { type: g } })));
    }
    if (f.size) {
      const P = {};
      f.forEach((g) => {
        const h = e.getBaseTarget(g),
          v = e.getValue(g);
        v && (v.liveStyle = !0), (P[g] = h === void 0 ? null : h);
      }),
        d.push({ animation: P });
    }
    let w = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var m;
        return (m = f.animationState) === null || m === void 0
          ? void 0
          : m.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(a);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function RC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Zy(t, e) : !1;
}
function _n(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function IC() {
  return {
    animate: _n(!0),
    whileInView: _n(),
    whileHover: _n(),
    whileTap: _n(),
    whileDrag: _n(),
    whileFocus: _n(),
    exit: _n(),
  };
}
class VC extends Nn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = AC(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Vl(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let OC = 0;
class FC extends Nn {
  constructor() {
    super(...arguments), (this.id = OC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const NC = { animation: { Feature: VC }, exit: { Feature: FC } },
  kh = (e, t) => Math.abs(e - t);
function KC(e, t) {
  const n = kh(e.x, t.x),
    r = kh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class L0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Ra(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          m = KC(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !m) return;
        const { point: b } = d,
          { timestamp: w } = De;
        this.history.push({ ...b, timestamp: w });
        const { onStart: P, onMove: g } = this.handlers;
        f ||
          (P && P(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Aa(f, this.transformPagePoint)),
          Me.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: m, onSessionEnd: b, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const P = Ra(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Aa(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(d, P), b && b(d, P);
      }),
      !Hy(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = Fl(t),
      l = Aa(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = De;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Ra(l, this.history)),
      (this.removeListeners = Qt(
        Xt(this.contextWindow, "pointermove", this.handlePointerMove),
        Xt(this.contextWindow, "pointerup", this.handlePointerUp),
        Xt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), An(this.updatePoint);
  }
}
function Aa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ch(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ra({ point: e }, t) {
  return {
    point: e,
    delta: Ch(e, D0(t)),
    offset: Ch(e, jC(t)),
    velocity: _C(t, 0.1),
  };
}
function jC(e) {
  return e[0];
}
function D0(e) {
  return e[e.length - 1];
}
function _C(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = D0(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > kn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Zt(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function at(e) {
  return e.max - e.min;
}
function hc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Eh(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = pe(t.min, t.max, e.origin)),
    (e.scale = at(n) / at(t)),
    (hc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = pe(n.min, n.max, e.origin) - e.originPoint),
    (hc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Go(e, t, n, r) {
  Eh(e.x, t.x, n.x, r ? r.originX : void 0),
    Eh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function $h(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + at(t));
}
function zC(e, t, n) {
  $h(e.x, t.x, n.x), $h(e.y, t.y, n.y);
}
function Mh(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + at(t));
}
function Yo(e, t, n) {
  Mh(e.x, t.x, n.x), Mh(e.y, t.y, n.y);
}
function BC(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? pe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? pe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Lh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function UC(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Lh(e.x, n, o), y: Lh(e.y, t, r) };
}
function Dh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function WC(e, t) {
  return { x: Dh(e.x, t.x), y: Dh(e.y, t.y) };
}
function HC(e, t) {
  let n = 0.5;
  const r = at(e),
    o = at(t);
  return (
    o > r
      ? (n = yi(t.min, t.max - r, e.min))
      : r > o && (n = yi(e.min, e.max - o, t.min)),
    Dn(0, 1, n)
  );
}
function GC(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const mc = 0.35;
function YC(e = mc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = mc),
    { x: Ah(e, "left", "right"), y: Ah(e, "top", "bottom") }
  );
}
function Ah(e, t, n) {
  return { min: Rh(e, t), max: Rh(e, n) };
}
function Rh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ih = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Br = () => ({ x: Ih(), y: Ih() }),
  Vh = () => ({ min: 0, max: 0 }),
  be = () => ({ x: Vh(), y: Vh() });
function ft(e) {
  return [e("x"), e("y")];
}
function A0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function XC({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function QC(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ia(e) {
  return e === void 0 || e === 1;
}
function gc({ scale: e, scaleX: t, scaleY: n }) {
  return !Ia(e) || !Ia(t) || !Ia(n);
}
function Hn(e) {
  return (
    gc(e) ||
    R0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function R0(e) {
  return Oh(e.x) || Oh(e.y);
}
function Oh(e) {
  return e && e !== "0%";
}
function fl(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Fh(e, t, n, r, o) {
  return o !== void 0 && (e = fl(e, o, r)), fl(e, n, r) + t;
}
function vc(e, t = 0, n = 1, r, o) {
  (e.min = Fh(e.min, t, n, r, o)), (e.max = Fh(e.max, t, n, r, o));
}
function I0(e, { x: t, y: n }) {
  vc(e.x, t.translate, t.scale, t.originPoint),
    vc(e.y, n.translate, n.scale, n.originPoint);
}
function ZC(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let l = 0; l < o; l++) {
    (i = n[l]), (s = i.projectionDelta);
    const a = i.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Ur(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), I0(e, s)),
      r && Hn(i.latestValues) && Ur(e, i.latestValues));
  }
  (t.x = Nh(t.x)), (t.y = Nh(t.y));
}
function Nh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function fn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Kh(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = pe(e.min, e.max, i);
  vc(e, t[n], t[r], s, t.scale);
}
const qC = ["x", "scaleX", "originX"],
  JC = ["y", "scaleY", "originY"];
function Ur(e, t) {
  Kh(e.x, t, qC), Kh(e.y, t, JC);
}
function V0(e, t) {
  return A0(QC(e.getBoundingClientRect(), t));
}
function eE(e, t, n) {
  const r = V0(e, n),
    { scroll: o } = t;
  return o && (fn(r.x, o.offset.x), fn(r.y, o.offset.y)), r;
}
const O0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  tE = new WeakMap();
class nE {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = be()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Fl(c, "page").point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: m, onDragStart: b } = this.getProps();
        if (
          f &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Yy(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ft((P) => {
            let g = this.getAxisMotionValue(P).get() || 0;
            if (Ft.test(g)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const v = h.layout.layoutBox[P];
                v && (g = at(v) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[P] = g;
          }),
          b && b(c, d);
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: m,
          onDirectionLock: b,
          onDrag: w,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: P } = d;
        if (m && this.currentDirection === null) {
          (this.currentDirection = rE(P)),
            this.currentDirection !== null && b && b(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, P),
          this.updateAxis("y", d.point, P),
          this.visualElement.render(),
          w && w(c, d);
      },
      l = (c, d) => this.stop(c, d),
      a = () =>
        ft((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new L0(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: O0(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && i(t, n);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ls(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = BC(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && _r(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = UC(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = YC(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ft((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = GC(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !_r(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = eE(r, o.root, this.visualElement.getTransformPagePoint());
    let s = WC(o.layout.layoutBox, i);
    if (n) {
      const l = n(XC(s));
      (this.hasMutatedConstraints = !!l), l && (s = A0(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = ft((c) => {
        if (!ls(c, n, this.currentDirection)) return;
        let d = (a && a[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          b = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, b);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(ef(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    ft((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ft((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ft((n) => {
      const { drag: r } = this.getProps();
      if (!ls(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: l } = o.layout.layoutBox[n];
        i.set(t[n] - pe(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!_r(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ft((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        o[s] = HC({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ft((s) => {
        if (!ls(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(pe(a, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    tE.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Xt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        _r(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const s = Gt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = o.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ft((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += a[c].translate),
                d.set(d.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = mc,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function ls(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function rE(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class oE extends Nn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = _e),
      (this.removeListeners = _e),
      (this.controls = new nE(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || _e);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const jh = (e) => (t, n) => {
  e && e(t, n);
};
class iE extends Nn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = _e);
  }
  onPointerDown(t) {
    this.session = new L0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: O0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: jh(t),
      onStart: jh(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && o(i, s);
      },
    };
  }
  mount() {
    this.removePointerDownListener = Xt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function sE() {
  const e = S.useContext(Il);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = S.useId();
  return S.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
const Cs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function _h(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Co = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (X.test(e)) e = parseFloat(e);
        else return e;
      const n = _h(e, t.target.x),
        r = _h(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  lE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Rn.parse(e);
      if (o.length > 5) return r;
      const i = Rn.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (o[0 + s] /= l), (o[1 + s] /= a);
      const u = pe(l, a, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  };
class aE extends ie.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    aT(uE),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Cs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Me.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Id.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function F0(e) {
  const [t, n] = sE(),
    r = S.useContext(vi);
  return ie.createElement(aE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Ay),
    isPresent: t,
    safeToRemove: n,
  });
}
const uE = {
    borderRadius: {
      ...Co,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Co,
    borderTopRightRadius: Co,
    borderBottomLeftRadius: Co,
    borderBottomRightRadius: Co,
    boxShadow: lE,
  },
  N0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  cE = N0.length,
  zh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Bh = (e) => typeof e == "number" || X.test(e);
function dE(e, t, n, r, o, i) {
  o
    ? ((e.opacity = pe(0, n.opacity !== void 0 ? n.opacity : 1, fE(r))),
      (e.opacityExit = pe(t.opacity !== void 0 ? t.opacity : 1, 0, pE(r))))
    : i &&
      (e.opacity = pe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < cE; s++) {
    const l = `border${N0[s]}Radius`;
    let a = Uh(t, l),
      u = Uh(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Bh(a) === Bh(u)
        ? ((e[l] = Math.max(pe(zh(a), zh(u), r), 0)),
          (Ft.test(u) || Ft.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = pe(t.rotate || 0, n.rotate || 0, r));
}
function Uh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const fE = K0(0, 0.5, x0),
  pE = K0(0.5, 0.95, _e);
function K0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(yi(e, t, r)));
}
function Wh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function dt(e, t) {
  Wh(e.x, t.x), Wh(e.y, t.y);
}
function Hh(e, t, n, r, o) {
  return (
    (e -= t), (e = fl(e, 1 / n, r)), o !== void 0 && (e = fl(e, 1 / o, r)), e
  );
}
function hE(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (Ft.test(t) &&
      ((t = parseFloat(t)), (t = pe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = pe(i.min, i.max, r);
  e === i && (l -= t),
    (e.min = Hh(e.min, t, n, l, o)),
    (e.max = Hh(e.max, t, n, l, o));
}
function Gh(e, t, [n, r, o], i, s) {
  hE(e, t[n], t[r], t[o], t.scale, i, s);
}
const mE = ["x", "scaleX", "originX"],
  gE = ["y", "scaleY", "originY"];
function Yh(e, t, n, r) {
  Gh(e.x, t, mE, n ? n.x : void 0, r ? r.x : void 0),
    Gh(e.y, t, gE, n ? n.y : void 0, r ? r.y : void 0);
}
function Xh(e) {
  return e.translate === 0 && e.scale === 1;
}
function j0(e) {
  return Xh(e.x) && Xh(e.y);
}
function vE(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function _0(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Qh(e) {
  return at(e.x) / at(e.y);
}
class yE {
  constructor() {
    this.members = [];
  }
  add(t) {
    tf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (nf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Zh(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: u, rotateX: c, rotateY: d, skewX: f, skewY: m } = n;
    u && (r += `rotate(${u}deg) `),
      c && (r += `rotateX(${c}deg) `),
      d && (r += `rotateY(${d}deg) `),
      f && (r += `skewX(${f}deg) `),
      m && (r += `skewY(${m}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const bE = (e, t) => e.depth - t.depth;
class wE {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    tf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    nf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(bE),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function xE(e, t) {
  const n = Cn.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (An(r), e(i - t));
    };
  return Me.read(r, !0), () => An(r);
}
function SE(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function PE(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function TE(e, t, n) {
  const r = je(e) ? e : bi(e);
  return r.start(ef("", r, t, n)), r.animation;
}
const Va = ["", "X", "Y", "Z"],
  kE = { visibility: "hidden" },
  qh = 1e3;
let CE = 0;
const Gn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Oa(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function z0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = CE++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Gn.totalNodes =
              Gn.resolvedTargetDeltas =
              Gn.recalculatedProjection =
                0),
            this.nodes.forEach(ME),
            this.nodes.forEach(IE),
            this.nodes.forEach(VE),
            this.nodes.forEach(LE),
            SE(Gn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new wE());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new rf()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = PE(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = xE(f, 250)),
            Cs.hasAnimatedSinceResize &&
              ((Cs.hasAnimatedSinceResize = !1), this.nodes.forEach(em));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: m,
              layout: b,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const w =
                  this.options.transition || c.getDefaultTransition() || jE,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !_0(this.targetLayout, b) || m,
                v = !f && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, v);
                const E = { ...Hd(w, "layout"), onPlay: P, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((E.delay = 0), (E.type = !1)),
                  this.startAnimation(E);
              } else
                f || em(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = b;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        An(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(OE),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jh);
        return;
      }
      this.isUpdating || this.nodes.forEach(AE),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(RE),
        this.nodes.forEach(EE),
        this.nodes.forEach($E),
        this.clearAllSnapshots();
      const l = Cn.now();
      (De.delta = Dn(0, 1e3 / 60, l - De.timestamp)),
        (De.timestamp = l),
        (De.isProcessing = !0),
        ka.update.process(De),
        ka.preRender.process(De),
        ka.render.process(De),
        (De.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Id.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(DE), this.sharedNodes.forEach(FE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Me.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Me.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = be()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !j0(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || Hn(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        _E(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return be();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (fn(l.x, a.offset.x), fn(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = be();
      dt(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            dt(l, s);
            const { scroll: f } = this.root;
            f && (fn(l.x, -f.offset.x), fn(l.y, -f.offset.y));
          }
          fn(l.x, c.offset.x), fn(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = be();
      dt(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Ur(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Hn(c.latestValues) && Ur(a, c.latestValues);
      }
      return Hn(this.latestValues) && Ur(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = be();
      dt(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Hn(u.latestValues)) continue;
        gc(u.latestValues) && u.updateSnapshot();
        const c = be(),
          d = u.measurePageBox();
        dt(c, d),
          Yh(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Hn(this.latestValues) && Yh(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== De.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = De.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = be()),
              (this.relativeTargetOrigin = be()),
              Yo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              dt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = be()), (this.targetWithTransforms = be())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                zC(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : dt(this.target, this.layout.layoutBox),
                I0(this.target, this.targetDelta))
              : dt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = be()),
                (this.relativeTargetOrigin = be()),
                Yo(this.relativeTargetOrigin, this.target, m.target),
                dt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Gn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          gc(this.parent.latestValues) ||
          R0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === De.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      dt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        m = this.treeScale.y;
      ZC(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = be()));
      const { target: b } = l;
      if (!b) {
        this.projectionTransform &&
          ((this.projectionDelta = Br()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Br()),
        (this.projectionDeltaWithTransform = Br()));
      const w = this.projectionTransform;
      Go(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
        (this.projectionTransform = Zh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== w ||
          this.treeScale.x !== f ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", b)),
        Gn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        d = Br();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const f = be(),
        m = a ? a.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        w = m !== b,
        P = this.getStack(),
        g = !P || P.members.length <= 1,
        h = !!(w && !g && this.options.crossfade === !0 && !this.path.some(KE));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (E) => {
        const L = E / 1e3;
        tm(d.x, s.x, L),
          tm(d.y, s.y, L),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Yo(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            NE(this.relativeTarget, this.relativeTargetOrigin, f, L),
            v && vE(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = be()),
            dt(v, this.relativeTarget)),
          w &&
            ((this.animationValues = c), dE(c, u, this.latestValues, L, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = L);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (An(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Me.update(() => {
          (Cs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = TE(0, qh, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(qh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          B0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || be();
          const d = at(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + d);
          const f = at(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + f);
        }
        dt(l, a),
          Ur(l, c),
          Go(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new yE()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && Oa("z", s, u, this.animationValues);
      for (let c = 0; c < Va.length; c++)
        Oa(`rotate${Va[c]}`, s, u, this.animationValues),
          Oa(`skew${Va[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return kE;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ts(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const w = {};
        return (
          this.options.layoutId &&
            ((w.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (w.pointerEvents = Ts(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Hn(this.latestValues) &&
            ((w.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          w
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Zh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: m, y: b } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${b.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (a =
                    (l = f.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const w in sl) {
        if (f[w] === void 0) continue;
        const { correct: P, applyTo: g } = sl[w],
          h = u.transform === "none" ? f[w] : P(f[w], d);
        if (g) {
          const v = g.length;
          for (let E = 0; E < v; E++) u[g[E]] = h;
        } else u[w] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Ts(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Jh),
        this.root.sharedNodes.clear();
    }
  };
}
function EE(e) {
  e.updateLayout();
}
function $E(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? ft((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            m = at(f);
          (f.min = r[d].min), (f.max = f.min + m);
        })
      : B0(i, n.layoutBox, r) &&
        ft((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            m = at(r[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const l = Br();
    Go(l, r, n.layoutBox);
    const a = Br();
    s ? Go(a, e.applyTransform(o, !0), n.measuredBox) : Go(a, r, n.layoutBox);
    const u = !j0(l);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const b = be();
          Yo(b, n.layoutBox, f.layoutBox);
          const w = be();
          Yo(w, r, m.layoutBox),
            _0(b, w) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = b),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ME(e) {
  Gn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function LE(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function DE(e) {
  e.clearSnapshot();
}
function Jh(e) {
  e.clearMeasurements();
}
function AE(e) {
  e.isLayoutDirty = !1;
}
function RE(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function em(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function IE(e) {
  e.resolveTargetDelta();
}
function VE(e) {
  e.calcProjection();
}
function OE(e) {
  e.resetSkewAndRotation();
}
function FE(e) {
  e.removeLeadSnapshot();
}
function tm(e, t, n) {
  (e.translate = pe(t.translate, 0, n)),
    (e.scale = pe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function nm(e, t, n, r) {
  (e.min = pe(t.min, n.min, r)), (e.max = pe(t.max, n.max, r));
}
function NE(e, t, n, r) {
  nm(e.x, t.x, n.x, r), nm(e.y, t.y, n.y, r);
}
function KE(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const jE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  rm = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  om = rm("applewebkit/") && !rm("chrome/") ? Math.round : _e;
function im(e) {
  (e.min = om(e.min)), (e.max = om(e.max));
}
function _E(e) {
  im(e.x), im(e.y);
}
function B0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !hc(Qh(t), Qh(n), 0.2))
  );
}
const zE = z0({
    attachResizeListener: (e, t) => Gt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Fa = { current: void 0 },
  U0 = z0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Fa.current) {
        const e = new zE({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Fa.current = e);
      }
      return Fa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  BE = {
    pan: { Feature: iE },
    drag: { Feature: oE, ProjectionNode: U0, MeasureLayout: F0 },
  },
  yc = { current: null },
  W0 = { current: !1 };
function UE() {
  if (((W0.current = !0), !!Dd))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (yc.current = e.matches);
      e.addListener(t), t();
    } else yc.current = !1;
}
function WE(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      s = n[o];
    if (je(i)) e.addValue(o, i), dl(r) && r.add(o);
    else if (je(s)) e.addValue(o, bi(i, { owner: e })), dl(r) && r.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const l = e.getValue(o);
        l.liveStyle === !0 ? l.jump(i) : l.hasAnimated || l.set(i);
      } else {
        const l = e.getStaticValue(o);
        e.addValue(o, bi(l !== void 0 ? l : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const sm = new WeakMap(),
  HE = [...r0, Ne, Rn],
  GE = (e) => HE.find(n0(e)),
  H0 = Object.keys(gi),
  YE = H0.length,
  lm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  XE = Od.length;
class QE {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    l = {}
  ) {
    (this.resolveKeyframes = (f, m, b, w) =>
      new this.KeyframeResolver(f, m, b, w, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Gd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Me.render(this.render, !1, !0));
    const { latestValues: a, renderState: u } = s;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = l),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Ol(n)),
      (this.isVariantNode = Dy(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const m = d[f];
      a[f] !== void 0 && je(m) && (m.set(a[f], !1), dl(c) && c.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  mount(t) {
    (this.current = t),
      sm.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      W0.current || UE(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : yc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    sm.delete(this.current),
      this.projection && this.projection.unmount(),
      An(this.notifyUpdate),
      An(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = vr.has(t),
      o = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Me.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let s, l;
    for (let a = 0; a < YE; a++) {
      const u = H0[a],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: m,
        } = gi[u];
      f && (s = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          m && (l = m));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (d && _r(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: m,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : be();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < lm.length; r++) {
      const o = lm[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = WE(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < XE; r++) {
      const o = Od[r],
        i = this.props[o];
      (mi(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = bi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (e0(o) || qy(o))
          ? (o = parseFloat(o))
          : !GE(o) && Rn.test(n) && (o = d0(t, n)),
        this.setBaseTarget(t, je(o) ? o.get() : o)),
      je(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n, r;
    const { initial: o } = this.props,
      i =
        typeof o == "string" || typeof o == "object"
          ? (r = Wd(
              this.props,
              o,
              (n = this.presenceContext) === null || n === void 0
                ? void 0
                : n.custom
            )) === null || r === void 0
            ? void 0
            : r[t]
          : void 0;
    if (o && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !je(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new rf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class G0 extends QE {
  constructor() {
    super(...arguments), (this.KeyframeResolver = f0);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function ZE(e) {
  return window.getComputedStyle(e);
}
class qE extends G0 {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (vr.has(n)) {
      const r = Xd(n);
      return (r && r.default) || 0;
    } else {
      const r = ZE(t),
        o = (Vy(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return V0(t, n);
  }
  build(t, n, r, o) {
    jd(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ud(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    je(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    jy(t, n, r, o);
  }
}
class JE extends G0 {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vr.has(n)) {
      const r = Xd(n);
      return (r && r.default) || 0;
    }
    return (n = _y.has(n) ? n : Rd(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return be();
  }
  scrapeMotionValuesFromProps(t, n) {
    return By(t, n, this);
  }
  build(t, n, r, o) {
    zd(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    zy(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Bd(t.tagName)), super.mount(t);
  }
}
const e$ = (e, t) =>
    Fd(e)
      ? new JE(t, { enableHardwareAcceleration: !1 })
      : new qE(t, { enableHardwareAcceleration: !0 }),
  t$ = { layout: { ProjectionNode: U0, MeasureLayout: F0 } },
  n$ = { ...NC, ...QT, ...BE, ...t$ },
  of = sT((e, t) => FT(e, t, n$, e$));
function Y0() {
  const e = S.useRef(!1);
  return (
    Ad(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function X0() {
  const e = Y0(),
    [t, n] = S.useState(0),
    r = S.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [S.useCallback(() => Me.postRender(r), [r]), t];
}
class r$ extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function o$({ children: e, isPresent: t }) {
  const n = S.useId(),
    r = S.useRef(null),
    o = S.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = S.useContext(Ld);
  return (
    S.useInsertionEffect(() => {
      const { width: s, height: l, top: a, left: u } = o.current;
      if (t || !r.current || !s || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        i && (c.nonce = i),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    S.createElement(
      r$,
      { isPresent: t, childRef: r, sizeRef: o },
      S.cloneElement(e, { ref: r })
    )
  );
}
const Na = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const l = Uy(i$),
    a = S.useId(),
    u = S.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          l.set(c, !0);
          for (const d of l.values()) if (!d) return;
          r && r();
        },
        register: (c) => (l.set(c, !1), () => l.delete(c)),
      }),
      i ? void 0 : [n]
    );
  return (
    S.useMemo(() => {
      l.forEach((c, d) => l.set(d, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = S.createElement(o$, { isPresent: n }, e)),
    S.createElement(Il.Provider, { value: u }, e)
  );
};
function i$() {
  return new Map();
}
function s$(e) {
  return S.useEffect(() => () => e(), []);
}
const Yn = (e) => e.key || "";
function l$(e, t) {
  e.forEach((n) => {
    const r = Yn(n);
    t.set(r, n);
  });
}
function a$(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Q0 = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: o,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
  }) => {
    const l = S.useContext(vi).forceRender || X0()[0],
      a = Y0(),
      u = a$(e);
    let c = u;
    const d = S.useRef(new Map()).current,
      f = S.useRef(c),
      m = S.useRef(new Map()).current,
      b = S.useRef(!0);
    if (
      (Ad(() => {
        (b.current = !1), l$(u, m), (f.current = c);
      }),
      s$(() => {
        (b.current = !0), m.clear(), d.clear();
      }),
      b.current)
    )
      return S.createElement(
        S.Fragment,
        null,
        c.map((h) =>
          S.createElement(
            Na,
            {
              key: Yn(h),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: i,
              mode: s,
            },
            h
          )
        )
      );
    c = [...c];
    const w = f.current.map(Yn),
      P = u.map(Yn),
      g = w.length;
    for (let h = 0; h < g; h++) {
      const v = w[h];
      P.indexOf(v) === -1 && !d.has(v) && d.set(v, void 0);
    }
    return (
      s === "wait" && d.size && (c = []),
      d.forEach((h, v) => {
        if (P.indexOf(v) !== -1) return;
        const E = m.get(v);
        if (!E) return;
        const L = w.indexOf(v);
        let M = h;
        if (!M) {
          const N = () => {
            d.delete(v);
            const p = Array.from(m.keys()).filter((R) => !P.includes(R));
            if (
              (p.forEach((R) => m.delete(R)),
              (f.current = u.filter((R) => {
                const A = Yn(R);
                return A === v || p.includes(A);
              })),
              !d.size)
            ) {
              if (a.current === !1) return;
              l(), r && r();
            }
          };
          (M = S.createElement(
            Na,
            {
              key: Yn(E),
              isPresent: !1,
              onExitComplete: N,
              custom: t,
              presenceAffectsLayout: i,
              mode: s,
            },
            E
          )),
            d.set(v, M);
        }
        c.splice(L, 0, M);
      }),
      (c = c.map((h) => {
        const v = h.key;
        return d.has(v)
          ? h
          : S.createElement(
              Na,
              { key: Yn(h), isPresent: !0, presenceAffectsLayout: i, mode: s },
              h
            );
      })),
      S.createElement(
        S.Fragment,
        null,
        d.size ? c : c.map((h) => S.cloneElement(h))
      )
    );
  },
  u$ = S.createContext(null),
  c$ = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function am() {
  const e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(c$);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      const o = t.get(r);
      o && (o(), t.delete(r)), n();
    },
    dirty: n,
  };
}
const Z0 = (e) => e === !0,
  d$ = (e) => Z0(e === !0) || e === "id",
  f$ = ({ children: e, id: t, inherit: n = !0 }) => {
    const r = S.useContext(vi),
      o = S.useContext(u$),
      [i, s] = X0(),
      l = S.useRef(null),
      a = r.id || o;
    l.current === null &&
      (d$(n) && a && (t = t ? a + "-" + t : a),
      (l.current = { id: t, group: (Z0(n) && r.group) || am() }));
    const u = S.useMemo(() => ({ ...l.current, forceRender: i }), [s]);
    return S.createElement(vi.Provider, { value: u }, e);
  };
var Pr = {
    ease: [0.36, 0.66, 0.4, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    spring: [0.155, 1.105, 0.295, 1.12],
    springOut: [0.57, -0.15, 0.62, 0.07],
    softSpring: [0.16, 1.11, 0.3, 1.02],
  },
  p$ = {
    scaleSpring: {
      enter: {
        transform: "scale(1)",
        opacity: 1,
        transition: { type: "spring", bounce: 0, duration: 0.3 },
      },
      exit: {
        transform: "scale(0.6)",
        opacity: 0,
        transition: { type: "easeOut", duration: 0.2 },
      },
    },
    scaleSpringOpacity: {
      initial: { opacity: 0, transform: "scale(0.8)" },
      enter: {
        opacity: 1,
        transform: "scale(1)",
        transition: { type: "spring", bounce: 0, duration: 0.3 },
      },
      exit: {
        opacity: 0,
        transform: "scale(0.7)",
        transition: { type: "easeOut", bounce: 0, duration: 0.18 },
      },
    },
    scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
    scaleFadeIn: {
      enter: {
        transform: "scale(1)",
        opacity: 1,
        transition: { duration: 0.25, ease: Pr.easeIn },
      },
      exit: {
        transform: "scale(0.95)",
        opacity: 0,
        transition: { duration: 0.2, ease: Pr.easeOut },
      },
    },
    scaleInOut: {
      enter: {
        transform: "scale(1)",
        opacity: 1,
        transition: { duration: 0.4, ease: Pr.ease },
      },
      exit: {
        transform: "scale(1.03)",
        opacity: 0,
        transition: { duration: 0.3, ease: Pr.ease },
      },
    },
    fade: {
      enter: { opacity: 1, transition: { duration: 0.4, ease: Pr.ease } },
      exit: { opacity: 0, transition: { duration: 0.3, ease: Pr.ease } },
    },
    collapse: {
      enter: {
        opacity: 1,
        height: "auto",
        transition: {
          height: { type: "spring", bounce: 0, duration: 0.3 },
          opacity: { easings: "ease", duration: 0.4 },
        },
      },
      exit: {
        opacity: 0,
        height: 0,
        transition: { easings: "ease", duration: 0.3 },
      },
    },
  };
function q0(e) {
  return null;
}
q0.getCollectionNode = function* (t, n) {
  let { childItems: r, title: o, children: i } = t,
    s = t.title || t.children,
    l = t.textValue || (typeof s == "string" ? s : "") || t["aria-label"] || "";
  !l &&
    !(n != null && n.suppressTextValueWarning) &&
    console.warn(
      "<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."
    ),
    yield {
      type: "item",
      props: t,
      rendered: s,
      textValue: l,
      "aria-label": t["aria-label"],
      hasChildNodes: h$(t),
      *childNodes() {
        if (r) for (let a of r) yield { type: "item", value: a };
        else if (o) {
          let a = [];
          ie.Children.forEach(i, (u) => {
            a.push({ type: "item", element: u });
          }),
            yield* a;
        }
      },
    };
};
function h$(e) {
  return e.hasChildItems != null
    ? e.hasChildItems
    : !!(e.childItems || (e.title && ie.Children.count(e.children) > 0));
}
let m$ = q0;
class g$ {
  build(t, n) {
    return (this.context = n), um(() => this.iterateCollection(t));
  }
  *iterateCollection(t) {
    let { children: n, items: r } = t;
    if (typeof n == "function") {
      if (!r)
        throw new Error(
          "props.children was a function but props.items is missing"
        );
      for (let o of t.items)
        yield* this.getFullNode({ value: o }, { renderer: n });
    } else {
      let o = [];
      ie.Children.forEach(n, (s) => {
        o.push(s);
      });
      let i = 0;
      for (let s of o) {
        let l = this.getFullNode({ element: s, index: i }, {});
        for (let a of l) i++, yield a;
      }
    }
  }
  getKey(t, n, r, o) {
    if (t.key != null) return t.key;
    if (n.type === "cell" && n.key != null) return `${o}${n.key}`;
    let i = n.value;
    if (i != null) {
      var s;
      let l = (s = i.key) !== null && s !== void 0 ? s : i.id;
      if (l == null) throw new Error("No key found for item");
      return l;
    }
    return o ? `${o}.${n.index}` : `$.${n.index}`;
  }
  getChildState(t, n) {
    return { renderer: n.renderer || t.renderer };
  }
  *getFullNode(t, n, r, o) {
    let i = t.element;
    if (!i && t.value && n && n.renderer) {
      let a = this.cache.get(t.value);
      if (a && (!a.shouldInvalidate || !a.shouldInvalidate(this.context))) {
        (a.index = t.index), (a.parentKey = o ? o.key : null), yield a;
        return;
      }
      i = n.renderer(t.value);
    }
    if (ie.isValidElement(i)) {
      let a = i.type;
      if (typeof a != "function" && typeof a.getCollectionNode != "function") {
        let f = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${f}> in collection.`);
      }
      let u = a.getCollectionNode(i.props, this.context),
        c = t.index,
        d = u.next();
      for (; !d.done && d.value; ) {
        let f = d.value;
        t.index = c;
        let m = f.key;
        m || (m = f.element ? null : this.getKey(i, t, n, r));
        let w = [
          ...this.getFullNode(
            { ...f, key: m, index: c, wrapper: v$(t.wrapper, f.wrapper) },
            this.getChildState(n, f),
            r ? `${r}${i.key}` : i.key,
            o
          ),
        ];
        for (let P of w) {
          if (
            ((P.value = f.value || t.value),
            P.value && this.cache.set(P.value, P),
            t.type && P.type !== t.type)
          )
            throw new Error(
              `Unsupported type <${Ka(P.type)}> in <${Ka(o.type)}>. Only <${Ka(
                t.type
              )}> is supported.`
            );
          c++, yield P;
        }
        d = u.next(w);
      }
      return;
    }
    if (t.key == null) return;
    let s = this,
      l = {
        type: t.type,
        props: t.props,
        key: t.key,
        parentKey: o ? o.key : null,
        value: t.value,
        level: o ? o.level + 1 : 0,
        index: t.index,
        rendered: t.rendered,
        textValue: t.textValue,
        "aria-label": t["aria-label"],
        wrapper: t.wrapper,
        shouldInvalidate: t.shouldInvalidate,
        hasChildNodes: t.hasChildNodes,
        childNodes: um(function* () {
          if (!t.hasChildNodes) return;
          let a = 0;
          for (let u of t.childNodes()) {
            u.key != null && (u.key = `${l.key}${u.key}`), (u.index = a);
            let c = s.getFullNode(u, s.getChildState(n, u), l.key, l);
            for (let d of c) a++, yield d;
          }
        }),
      };
    yield l;
  }
  constructor() {
    this.cache = new WeakMap();
  }
}
function um(e) {
  let t = [],
    n = null;
  return {
    *[Symbol.iterator]() {
      for (let r of t) yield r;
      n || (n = e());
      for (let r of n) t.push(r), yield r;
    },
  };
}
function v$(e, t) {
  if (e && t) return (n) => e(t(n));
  if (e) return e;
  if (t) return t;
}
function Ka(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function y$(e, t, n) {
  let r = S.useMemo(() => new g$(), []),
    { children: o, items: i, collection: s } = e;
  return S.useMemo(() => {
    if (s) return s;
    let a = r.build({ children: o, items: i }, n);
    return t(a);
  }, [r, o, i, s, n, t]);
}
function b$(e, t) {
  return typeof t.getChildren == "function"
    ? t.getChildren(e.key)
    : e.childNodes;
}
function w$(e) {
  return x$(e, 0);
}
function x$(e, t) {
  if (t < 0) return;
  let n = 0;
  for (let r of e) {
    if (n === t) return r;
    n++;
  }
}
function ja(e, t, n) {
  if (t.parentKey === n.parentKey) return t.index - n.index;
  let r = [...cm(e, t), t],
    o = [...cm(e, n), n],
    i = r.slice(0, o.length).findIndex((s, l) => s !== o[l]);
  return i !== -1
    ? ((t = r[i]), (n = o[i]), t.index - n.index)
    : r.findIndex((s) => s === n) >= 0
    ? 1
    : (o.findIndex((s) => s === t) >= 0, -1);
}
function cm(e, t) {
  let n = [];
  for (; (t == null ? void 0 : t.parentKey) != null; )
    (t = e.getItem(t.parentKey)), n.unshift(t);
  return n;
}
class Tt extends Set {
  constructor(t, n, r) {
    super(t),
      t instanceof Tt
        ? ((this.anchorKey = n || t.anchorKey),
          (this.currentKey = r || t.currentKey))
        : ((this.anchorKey = n), (this.currentKey = r));
  }
}
function S$(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e) if (!t.has(n)) return !1;
  return !0;
}
function P$(e) {
  let {
      selectionMode: t = "none",
      disallowEmptySelection: n,
      allowDuplicateSelectionEvents: r,
      selectionBehavior: o = "toggle",
      disabledBehavior: i = "all",
    } = e,
    s = S.useRef(!1),
    [, l] = S.useState(!1),
    a = S.useRef(null),
    u = S.useRef(null),
    [, c] = S.useState(null),
    d = S.useMemo(() => dm(e.selectedKeys), [e.selectedKeys]),
    f = S.useMemo(
      () => dm(e.defaultSelectedKeys, new Tt()),
      [e.defaultSelectedKeys]
    ),
    [m, b] = Ll(d, f, e.onSelectionChange),
    w = S.useMemo(
      () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
      [e.disabledKeys]
    ),
    [P, g] = S.useState(o);
  o === "replace" &&
    P === "toggle" &&
    typeof m == "object" &&
    m.size === 0 &&
    g("replace");
  let h = S.useRef(o);
  return (
    S.useEffect(() => {
      o !== h.current && (g(o), (h.current = o));
    }, [o]),
    {
      selectionMode: t,
      disallowEmptySelection: n,
      selectionBehavior: P,
      setSelectionBehavior: g,
      get isFocused() {
        return s.current;
      },
      setFocused(v) {
        (s.current = v), l(v);
      },
      get focusedKey() {
        return a.current;
      },
      get childFocusStrategy() {
        return u.current;
      },
      setFocusedKey(v, E = "first") {
        (a.current = v), (u.current = E), c(v);
      },
      selectedKeys: m,
      setSelectedKeys(v) {
        (r || !S$(v, m)) && b(v);
      },
      disabledKeys: w,
      disabledBehavior: i,
    }
  );
}
function dm(e, t) {
  return e ? (e === "all" ? "all" : new Tt(e)) : t;
}
class T$ {
  get selectionMode() {
    return this.state.selectionMode;
  }
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  setSelectionBehavior(t) {
    this.state.setSelectionBehavior(t);
  }
  get isFocused() {
    return this.state.isFocused;
  }
  setFocused(t) {
    this.state.setFocused(t);
  }
  get focusedKey() {
    return this.state.focusedKey;
  }
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  setFocusedKey(t, n) {
    (t == null || this.collection.getItem(t)) && this.state.setFocusedKey(t, n);
  }
  get selectedKeys() {
    return this.state.selectedKeys === "all"
      ? new Set(this.getSelectAllKeys())
      : this.state.selectedKeys;
  }
  get rawSelection() {
    return this.state.selectedKeys;
  }
  isSelected(t) {
    return this.state.selectionMode === "none"
      ? !1
      : ((t = this.getKey(t)),
        this.state.selectedKeys === "all"
          ? this.canSelectItem(t)
          : this.state.selectedKeys.has(t));
  }
  get isEmpty() {
    return (
      this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0
    );
  }
  get isSelectAll() {
    if (this.isEmpty) return !1;
    if (this.state.selectedKeys === "all") return !0;
    if (this._isSelectAll != null) return this._isSelectAll;
    let t = this.getSelectAllKeys(),
      n = this.state.selectedKeys;
    return (this._isSelectAll = t.every((r) => n.has(r))), this._isSelectAll;
  }
  get firstSelectedKey() {
    let t = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!t || (r && ja(this.collection, r, t) < 0)) && (t = r);
    }
    return t == null ? void 0 : t.key;
  }
  get lastSelectedKey() {
    let t = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!t || (r && ja(this.collection, r, t) > 0)) && (t = r);
    }
    return t == null ? void 0 : t.key;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  extendSelection(t) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(t);
      return;
    }
    t = this.getKey(t);
    let n;
    if (this.state.selectedKeys === "all") n = new Tt([t], t, t);
    else {
      let r = this.state.selectedKeys,
        o = r.anchorKey || t;
      n = new Tt(r, o, t);
      for (let i of this.getKeyRange(o, r.currentKey || t)) n.delete(i);
      for (let i of this.getKeyRange(t, o)) this.canSelectItem(i) && n.add(i);
    }
    this.state.setSelectedKeys(n);
  }
  getKeyRange(t, n) {
    let r = this.collection.getItem(t),
      o = this.collection.getItem(n);
    return r && o
      ? ja(this.collection, r, o) <= 0
        ? this.getKeyRangeInternal(t, n)
        : this.getKeyRangeInternal(n, t)
      : [];
  }
  getKeyRangeInternal(t, n) {
    let r = [],
      o = t;
    for (; o; ) {
      let i = this.collection.getItem(o);
      if (
        (((i && i.type === "item") ||
          (i.type === "cell" && this.allowsCellSelection)) &&
          r.push(o),
        o === n)
      )
        return r;
      o = this.collection.getKeyAfter(o);
    }
    return [];
  }
  getKey(t) {
    let n = this.collection.getItem(t);
    if (!n || (n.type === "cell" && this.allowsCellSelection)) return t;
    for (; n.type !== "item" && n.parentKey != null; )
      n = this.collection.getItem(n.parentKey);
    return !n || n.type !== "item" ? null : n.key;
  }
  toggleSelection(t) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(t)) {
      this.replaceSelection(t);
      return;
    }
    if (((t = this.getKey(t)), t == null)) return;
    let n = new Tt(
      this.state.selectedKeys === "all"
        ? this.getSelectAllKeys()
        : this.state.selectedKeys
    );
    n.has(t)
      ? n.delete(t)
      : this.canSelectItem(t) &&
        (n.add(t), (n.anchorKey = t), (n.currentKey = t)),
      !(this.disallowEmptySelection && n.size === 0) &&
        this.state.setSelectedKeys(n);
  }
  replaceSelection(t) {
    if (this.selectionMode === "none" || ((t = this.getKey(t)), t == null))
      return;
    let n = this.canSelectItem(t) ? new Tt([t], t, t) : new Tt();
    this.state.setSelectedKeys(n);
  }
  setSelectedKeys(t) {
    if (this.selectionMode === "none") return;
    let n = new Tt();
    for (let r of t)
      if (
        ((r = this.getKey(r)),
        r != null && (n.add(r), this.selectionMode === "single"))
      )
        break;
    this.state.setSelectedKeys(n);
  }
  getSelectAllKeys() {
    let t = [],
      n = (r) => {
        for (; r; ) {
          if (this.canSelectItem(r)) {
            let o = this.collection.getItem(r);
            o.type === "item" && t.push(r),
              o.hasChildNodes &&
                (this.allowsCellSelection || o.type !== "item") &&
                n(w$(b$(o, this.collection)).key);
          }
          r = this.collection.getKeyAfter(r);
        }
      };
    return n(this.collection.getFirstKey()), t;
  }
  selectAll() {
    !this.isSelectAll &&
      this.selectionMode === "multiple" &&
      this.state.setSelectedKeys("all");
  }
  clearSelection() {
    !this.disallowEmptySelection &&
      (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) &&
      this.state.setSelectedKeys(new Tt());
  }
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(t, n) {
    this.selectionMode !== "none" &&
      (this.selectionMode === "single"
        ? this.isSelected(t) && !this.disallowEmptySelection
          ? this.toggleSelection(t)
          : this.replaceSelection(t)
        : this.selectionBehavior === "toggle" ||
          (n && (n.pointerType === "touch" || n.pointerType === "virtual"))
        ? this.toggleSelection(t)
        : this.replaceSelection(t));
  }
  isSelectionEqual(t) {
    if (t === this.state.selectedKeys) return !0;
    let n = this.selectedKeys;
    if (t.size !== n.size) return !1;
    for (let r of t) if (!n.has(r)) return !1;
    for (let r of n) if (!t.has(r)) return !1;
    return !0;
  }
  canSelectItem(t) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(t))
      return !1;
    let n = this.collection.getItem(t);
    return !(!n || (n.type === "cell" && !this.allowsCellSelection));
  }
  isDisabled(t) {
    return (
      this.state.disabledKeys.has(t) && this.state.disabledBehavior === "all"
    );
  }
  isLink(t) {
    var n, r;
    return !!(
      !(
        (r = this.collection.getItem(t)) === null ||
        r === void 0 ||
        (n = r.props) === null ||
        n === void 0
      ) && n.href
    );
  }
  constructor(t, n, r) {
    (this.collection = t), (this.state = n);
    var o;
    (this.allowsCellSelection =
      (o = r == null ? void 0 : r.allowsCellSelection) !== null && o !== void 0
        ? o
        : !1),
      (this._isSelectAll = null);
  }
}
var k$ = (e) => {
    const t = {
      top: { originY: 1 },
      bottom: { originY: 0 },
      left: { originX: 1 },
      right: { originX: 0 },
      "top-start": { originX: 0, originY: 1 },
      "top-end": { originX: 1, originY: 1 },
      "bottom-start": { originX: 0, originY: 0 },
      "bottom-end": { originX: 1, originY: 0 },
      "right-start": { originX: 0, originY: 0 },
      "right-end": { originX: 0, originY: 1 },
      "left-start": { originX: 1, originY: 0 },
      "left-end": { originX: 1, originY: 1 },
    };
    return (t == null ? void 0 : t[e]) || {};
  },
  C$ = (e) =>
    ({
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right",
      "top-start": "top start",
      "top-end": "top end",
      "bottom-start": "bottom start",
      "bottom-end": "bottom end",
      "left-start": "left top",
      "left-end": "left bottom",
      "right-start": "right top",
      "right-end": "right bottom",
    }[e]),
  fm = (e, t) => {
    if (t.includes("-")) {
      const [, n] = t.split("-");
      return `${e}-${n}`;
    }
    return e;
  },
  E$ =
    globalThis != null && globalThis.document ? S.useLayoutEffect : S.useEffect,
  [D2, $$] = wy({ name: "ButtonGroupContext", strict: !1 });
function J0(e, t) {
  let {
      elementType: n = "button",
      isDisabled: r,
      onPress: o,
      onPressStart: i,
      onPressEnd: s,
      onPressChange: l,
      preventFocusOnPress: a,
      allowFocusWhenDisabled: u,
      onClick: c,
      href: d,
      target: f,
      rel: m,
      type: b = "button",
      allowTextSelectionOnPress: w,
    } = e,
    P;
  n === "button"
    ? (P = { type: b, disabled: r })
    : (P = {
        role: "button",
        tabIndex: r ? void 0 : 0,
        href: n === "a" && r ? void 0 : d,
        target: n === "a" ? f : void 0,
        type: n === "input" ? b : void 0,
        disabled: n === "input" ? r : void 0,
        "aria-disabled": !r || n === "input" ? void 0 : r,
        rel: n === "a" ? m : void 0,
      });
  let { pressProps: g, isPressed: h } = Cy({
      onPressStart: i,
      onPressEnd: s,
      onPressChange: l,
      onPress: o,
      isDisabled: r,
      preventFocusOnPress: a,
      allowTextSelectionOnPress: w,
      ref: t,
    }),
    { focusableProps: v } = Ed(e, t);
  u && (v.tabIndex = r ? -1 : v.tabIndex);
  let E = ee(v, g, gd(e, { labelable: !0 }));
  return {
    isPressed: h,
    buttonProps: ee(P, E, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      onClick: (L) => {
        c == null || c(L);
      },
    }),
  };
}
var M$ = (e, t, n) => Math.min(Math.max(e, t), n),
  eb = (e) => {
    const {
      ripples: t = [],
      motionProps: n,
      color: r = "currentColor",
      style: o,
      onClear: i,
    } = e;
    return O.jsx(O.Fragment, {
      children: t.map((s) => {
        const l = M$(0.01 * s.size, 0.2, s.size > 100 ? 0.75 : 0.5);
        return O.jsx(
          Q0,
          {
            mode: "popLayout",
            children: O.jsx(of.span, {
              animate: { transform: "scale(2)", opacity: 0 },
              className: "nextui-ripple",
              exit: { opacity: 0 },
              initial: { transform: "scale(0)", opacity: 0.35 },
              style: {
                position: "absolute",
                backgroundColor: r,
                borderRadius: "100%",
                transformOrigin: "center",
                pointerEvents: "none",
                zIndex: 10,
                top: s.y,
                left: s.x,
                width: `${s.size}px`,
                height: `${s.size}px`,
                ...o,
              },
              transition: { duration: l },
              onAnimationComplete: () => {
                i(s.key);
              },
              ...n,
            }),
          },
          s.key
        );
      }),
    });
  };
eb.displayName = "NextUI.Ripple";
var tb = eb;
function nb(e = {}) {
  const [t, n] = S.useState([]),
    r = S.useCallback((i) => {
      const s = i.currentTarget,
        l = Math.max(s.clientWidth, s.clientHeight),
        a = s.getBoundingClientRect();
      n((u) => [
        ...u,
        {
          key: mP(u.length.toString()),
          size: l,
          x: i.clientX - a.x - l / 2,
          y: i.clientY - a.y - l / 2,
        },
      ]);
    }, []),
    o = S.useCallback((i) => {
      n((s) => s.filter((l) => l.key !== i));
    }, []);
  return { ripples: t, onClick: r, onClear: o, ...e };
}
function L$(e) {
  var t, n, r, o, i, s, l, a;
  const u = $$(),
    c = !!u,
    {
      ref: d,
      as: f,
      children: m,
      startContent: b,
      endContent: w,
      autoFocus: P,
      className: g,
      spinner: h,
      fullWidth: v = (t = u == null ? void 0 : u.fullWidth) != null ? t : !1,
      size: E = (n = u == null ? void 0 : u.size) != null ? n : "md",
      color: L = (r = u == null ? void 0 : u.color) != null ? r : "default",
      variant: M = (o = u == null ? void 0 : u.variant) != null ? o : "solid",
      disableAnimation: N = (i = u == null ? void 0 : u.disableAnimation) !=
      null
        ? i
        : !1,
      radius: p = u == null ? void 0 : u.radius,
      disableRipple: R = (s = u == null ? void 0 : u.disableRipple) != null
        ? s
        : !1,
      isDisabled: A = (l = u == null ? void 0 : u.isDisabled) != null ? l : !1,
      isIconOnly: $ = (a = u == null ? void 0 : u.isIconOnly) != null ? a : !1,
      isLoading: I = !1,
      spinnerPlacement: x = "start",
      onPress: k,
      onClick: K,
      ...j
    } = e,
    V = f || "button",
    F = typeof V == "string",
    z = Fn(d),
    { isFocusVisible: C, isFocused: y, focusProps: T } = Ei({ autoFocus: P }),
    D = A || I,
    _ = S.useMemo(
      () =>
        fP({
          size: E,
          color: L,
          variant: M,
          radius: p,
          fullWidth: v,
          isDisabled: D,
          isInGroup: c,
          disableAnimation: N,
          isIconOnly: $,
          className: g,
        }),
      [E, L, M, p, v, D, c, $, N, g]
    ),
    { onClick: U, onClear: H, ripples: Q } = nb(),
    Z = S.useCallback(
      (Lt) => {
        R || D || N || (z.current && U(Lt));
      },
      [R, D, N, z, U]
    ),
    { buttonProps: Y, isPressed: te } = J0(
      { elementType: f, isDisabled: D, onPress: k, onClick: ki(K, Z), ...j },
      z
    ),
    { isHovered: xe, hoverProps: Se } = hr({ isDisabled: D }),
    ve = S.useCallback(
      (Lt = {}) => ({
        "data-disabled": re(D),
        "data-focus": re(y),
        "data-pressed": re(te),
        "data-focus-visible": re(C),
        "data-hover": re(xe),
        "data-loading": re(I),
        ...ee(Y, T, Se, Ln(j, { enabled: F }), Ln(Lt)),
      }),
      [I, D, y, te, F, C, xe, Y, T, Se, j]
    ),
    Ye = (Lt) =>
      S.isValidElement(Lt)
        ? S.cloneElement(Lt, { "aria-hidden": !0, focusable: !1, tabIndex: -1 })
        : null,
    Be = Ye(b),
    Pe = Ye(w),
    Ve = S.useMemo(() => ({ sm: "sm", md: "sm", lg: "md" }[E]), [E]),
    yr = S.useCallback(() => ({ ripples: Q, onClear: H }), [Q, H]);
  return {
    Component: V,
    children: m,
    domRef: z,
    spinner: h,
    styles: _,
    startContent: Be,
    endContent: Pe,
    isLoading: I,
    spinnerPlacement: x,
    spinnerSize: Ve,
    disableRipple: R,
    getButtonProps: ve,
    getRippleProps: yr,
    isIconOnly: $,
  };
}
function D$(e) {
  const [t, n] = $i(e, Up.variantKeys),
    { children: r, className: o, classNames: i, label: s, ...l } = t,
    a = S.useMemo(() => Up({ ...n }), [...Object.values(n)]),
    u = Ot(i == null ? void 0 : i.base, o),
    c = s || r,
    d = S.useMemo(
      () => (c && typeof c == "string" ? c : l["aria-label"] ? "" : "Loading"),
      [r, c, l["aria-label"]]
    ),
    f = S.useCallback(
      () => ({ "aria-label": d, className: a.base({ class: u }), ...l }),
      [d, a, u, l]
    );
  return { label: c, slots: a, classNames: i, getSpinnerProps: f };
}
var rb = Nt((e, t) => {
  const {
    slots: n,
    classNames: r,
    label: o,
    getSpinnerProps: i,
  } = D$({ ...e });
  return O.jsxs("div", {
    ref: t,
    ...i(),
    children: [
      O.jsxs("div", {
        className: n.wrapper({ class: r == null ? void 0 : r.wrapper }),
        children: [
          O.jsx("i", {
            className: n.circle1({ class: r == null ? void 0 : r.circle1 }),
          }),
          O.jsx("i", {
            className: n.circle2({ class: r == null ? void 0 : r.circle2 }),
          }),
        ],
      }),
      o &&
        O.jsx("span", {
          className: n.label({ class: r == null ? void 0 : r.label }),
          children: o,
        }),
    ],
  });
});
rb.displayName = "NextUI.Spinner";
var A$ = rb,
  ob = Nt((e, t) => {
    const {
      Component: n,
      domRef: r,
      children: o,
      styles: i,
      spinnerSize: s,
      spinner: l = O.jsx(A$, { color: "current", size: s }),
      spinnerPlacement: a,
      startContent: u,
      endContent: c,
      isLoading: d,
      disableRipple: f,
      getButtonProps: m,
      getRippleProps: b,
      isIconOnly: w,
    } = L$({ ...e, ref: t });
    return O.jsxs(n, {
      ref: r,
      className: i,
      ...m(),
      children: [
        u,
        d && a === "start" && l,
        d && w ? null : o,
        d && a === "end" && l,
        c,
        !f && O.jsx(tb, { ...b() }),
      ],
    });
  });
ob.displayName = "NextUI.Button";
var _a = ob,
  [R$, I$] = wy({
    name: "CardContext",
    strict: !0,
    errorMessage:
      "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />",
  }),
  ib = Nt((e, t) => {
    var n;
    const { as: r, className: o, children: i, ...s } = e,
      l = r || "div",
      a = Fn(t),
      { slots: u, classNames: c } = I$(),
      d = Ot(c == null ? void 0 : c.body, o);
    return O.jsx(l, {
      ref: a,
      className: (n = u.body) == null ? void 0 : n.call(u, { class: d }),
      ...s,
      children: i,
    });
  });
ib.displayName = "NextUI.CardBody";
var za = ib;
function V$(e) {
  const [t, n] = $i(e, Gp.variantKeys),
    {
      ref: r,
      as: o,
      children: i,
      disableRipple: s = !1,
      onClick: l,
      onPress: a,
      autoFocus: u,
      className: c,
      classNames: d,
      allowTextSelectionOnPress: f = !0,
      ...m
    } = t,
    b = Fn(r),
    w = o || (e.isPressable ? "button" : "div"),
    P = typeof w == "string",
    g = Ot(d == null ? void 0 : d.base, c),
    { onClick: h, onClear: v, ripples: E } = nb(),
    L = (V) => {
      !e.disableAnimation && !s && b.current && h(V);
    },
    { buttonProps: M, isPressed: N } = J0(
      {
        onPress: a,
        elementType: o,
        isDisabled: !e.isPressable,
        onClick: ki(l, L),
        allowTextSelectionOnPress: f,
        ...m,
      },
      b
    ),
    { hoverProps: p, isHovered: R } = hr({ isDisabled: !e.isHoverable, ...m }),
    { isFocusVisible: A, isFocused: $, focusProps: I } = Ei({ autoFocus: u }),
    x = S.useMemo(() => Gp({ ...n }), [...Object.values(n)]),
    k = S.useMemo(
      () => ({
        isDisabled: e.isDisabled,
        isFooterBlurred: e.isFooterBlurred,
        disableAnimation: e.disableAnimation,
        fullWidth: e.fullWidth,
        slots: x,
        classNames: d,
      }),
      [x, d, e.isDisabled, e.isFooterBlurred, e.disableAnimation, e.fullWidth]
    ),
    K = S.useCallback(
      (V = {}) => ({
        ref: b,
        className: x.base({ class: g }),
        tabIndex: e.isPressable ? 0 : -1,
        "data-hover": re(R),
        "data-pressed": re(N),
        "data-focus": re($),
        "data-focus-visible": re(A),
        "data-disabled": re(e.isDisabled),
        ...ee(
          e.isPressable ? { ...M, ...I, role: "button" } : {},
          e.isHoverable ? p : {},
          Ln(m, { enabled: P }),
          Ln(V)
        ),
      }),
      [
        b,
        x,
        g,
        P,
        e.isPressable,
        e.isHoverable,
        e.isDisabled,
        R,
        N,
        A,
        M,
        I,
        p,
        m,
      ]
    ),
    j = S.useCallback(() => ({ ripples: E, onClear: v }), [E, v]);
  return {
    context: k,
    domRef: b,
    Component: w,
    classNames: d,
    children: i,
    isHovered: R,
    isPressed: N,
    isPressable: e.isPressable,
    isHoverable: e.isHoverable,
    disableAnimation: e.disableAnimation,
    disableRipple: s,
    handleClick: L,
    isFocusVisible: A,
    getCardProps: K,
    getRippleProps: j,
  };
}
var sb = Nt((e, t) => {
  const {
    children: n,
    context: r,
    Component: o,
    isPressable: i,
    disableAnimation: s,
    disableRipple: l,
    getCardProps: a,
    getRippleProps: u,
  } = V$({ ...e, ref: t });
  return O.jsxs(o, {
    ...a(),
    children: [
      O.jsx(R$, { value: r, children: n }),
      i && !s && !l && O.jsx(tb, { ...u() }),
    ],
  });
});
sb.displayName = "NextUI.Card";
var Ba = sb;
function lb(e) {
  let {
    id: t,
    label: n,
    "aria-labelledby": r,
    "aria-label": o,
    labelElementType: i = "label",
  } = e;
  t = fi(t);
  let s = fi(),
    l = {};
  n
    ? ((r = r ? `${s} ${r}` : s),
      (l = { id: s, htmlFor: i === "label" ? t : void 0 }))
    : !r &&
      !o &&
      console.warn(
        "If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"
      );
  let a = bd({ id: t, "aria-label": o, "aria-labelledby": r });
  return { labelProps: l, fieldProps: a };
}
const pm = (e) => typeof e == "object" && e != null && e.nodeType === 1,
  hm = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip",
  Ua = (e, t) => {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      const n = getComputedStyle(e, null);
      return (
        hm(n.overflowY, t) ||
        hm(n.overflowX, t) ||
        ((r) => {
          const o = ((i) => {
            if (!i.ownerDocument || !i.ownerDocument.defaultView) return null;
            try {
              return i.ownerDocument.defaultView.frameElement;
            } catch {
              return null;
            }
          })(r);
          return (
            !!o &&
            (o.clientHeight < r.scrollHeight || o.clientWidth < r.scrollWidth)
          );
        })(e)
      );
    }
    return !1;
  },
  as = (e, t, n, r, o, i, s, l) =>
    (i < e && s > t) || (i > e && s < t)
      ? 0
      : (i <= e && l <= n) || (s >= t && l >= n)
      ? i - e - r
      : (s > t && l < n) || (i < e && l > n)
      ? s - t + o
      : 0,
  O$ = (e) => {
    const t = e.parentElement;
    return t ?? (e.getRootNode().host || null);
  },
  mm = (e, t) => {
    var n, r, o, i;
    if (typeof document > "u") return [];
    const {
        scrollMode: s,
        block: l,
        inline: a,
        boundary: u,
        skipOverflowHiddenElements: c,
      } = t,
      d = typeof u == "function" ? u : (j) => j !== u;
    if (!pm(e)) throw new TypeError("Invalid target");
    const f = document.scrollingElement || document.documentElement,
      m = [];
    let b = e;
    for (; pm(b) && d(b); ) {
      if (((b = O$(b)), b === f)) {
        m.push(b);
        break;
      }
      (b != null &&
        b === document.body &&
        Ua(b) &&
        !Ua(document.documentElement)) ||
        (b != null && Ua(b, c) && m.push(b));
    }
    const w =
        (r = (n = window.visualViewport) == null ? void 0 : n.width) != null
          ? r
          : innerWidth,
      P =
        (i = (o = window.visualViewport) == null ? void 0 : o.height) != null
          ? i
          : innerHeight,
      { scrollX: g, scrollY: h } = window,
      {
        height: v,
        width: E,
        top: L,
        right: M,
        bottom: N,
        left: p,
      } = e.getBoundingClientRect(),
      {
        top: R,
        right: A,
        bottom: $,
        left: I,
      } = ((j) => {
        const V = window.getComputedStyle(j);
        return {
          top: parseFloat(V.scrollMarginTop) || 0,
          right: parseFloat(V.scrollMarginRight) || 0,
          bottom: parseFloat(V.scrollMarginBottom) || 0,
          left: parseFloat(V.scrollMarginLeft) || 0,
        };
      })(e);
    let x =
        l === "start" || l === "nearest"
          ? L - R
          : l === "end"
          ? N + $
          : L + v / 2 - R + $,
      k = a === "center" ? p + E / 2 - I + A : a === "end" ? M + A : p - I;
    const K = [];
    for (let j = 0; j < m.length; j++) {
      const V = m[j],
        {
          height: F,
          width: z,
          top: C,
          right: y,
          bottom: T,
          left: D,
        } = V.getBoundingClientRect();
      if (
        s === "if-needed" &&
        L >= 0 &&
        p >= 0 &&
        N <= P &&
        M <= w &&
        L >= C &&
        N <= T &&
        p >= D &&
        M <= y
      )
        return K;
      const _ = getComputedStyle(V),
        U = parseInt(_.borderLeftWidth, 10),
        H = parseInt(_.borderTopWidth, 10),
        Q = parseInt(_.borderRightWidth, 10),
        Z = parseInt(_.borderBottomWidth, 10);
      let Y = 0,
        te = 0;
      const xe = "offsetWidth" in V ? V.offsetWidth - V.clientWidth - U - Q : 0,
        Se = "offsetHeight" in V ? V.offsetHeight - V.clientHeight - H - Z : 0,
        ve =
          "offsetWidth" in V
            ? V.offsetWidth === 0
              ? 0
              : z / V.offsetWidth
            : 0,
        Ye =
          "offsetHeight" in V
            ? V.offsetHeight === 0
              ? 0
              : F / V.offsetHeight
            : 0;
      if (f === V)
        (Y =
          l === "start"
            ? x
            : l === "end"
            ? x - P
            : l === "nearest"
            ? as(h, h + P, P, H, Z, h + x, h + x + v, v)
            : x - P / 2),
          (te =
            a === "start"
              ? k
              : a === "center"
              ? k - w / 2
              : a === "end"
              ? k - w
              : as(g, g + w, w, U, Q, g + k, g + k + E, E)),
          (Y = Math.max(0, Y + h)),
          (te = Math.max(0, te + g));
      else {
        (Y =
          l === "start"
            ? x - C - H
            : l === "end"
            ? x - T + Z + Se
            : l === "nearest"
            ? as(C, T, F, H, Z + Se, x, x + v, v)
            : x - (C + F / 2) + Se / 2),
          (te =
            a === "start"
              ? k - D - U
              : a === "center"
              ? k - (D + z / 2) + xe / 2
              : a === "end"
              ? k - y + Q + xe
              : as(D, y, z, U, Q + xe, k, k + E, E));
        const { scrollLeft: Be, scrollTop: Pe } = V;
        (Y =
          Ye === 0
            ? 0
            : Math.max(0, Math.min(Pe + Y / Ye, V.scrollHeight - F / Ye + Se))),
          (te =
            ve === 0
              ? 0
              : Math.max(
                  0,
                  Math.min(Be + te / ve, V.scrollWidth - z / ve + xe)
                )),
          (x += Pe - Y),
          (k += Be - te);
      }
      K.push({ el: V, top: Y, left: te });
    }
    return K;
  },
  F$ = (e) =>
    e === !1
      ? { block: "end", inline: "nearest" }
      : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e)
      ? e
      : { block: "start", inline: "nearest" };
function N$(e, t) {
  if (
    !e.isConnected ||
    !((r) => {
      let o = r;
      for (; o && o.parentNode; ) {
        if (o.parentNode === document) return !0;
        o =
          o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
      }
      return !1;
    })(e)
  )
    return;
  if (((r) => typeof r == "object" && typeof r.behavior == "function")(t))
    return t.behavior(mm(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: r, top: o, left: i } of mm(e, F$(t)))
    r.scroll({ top: o, left: i, behavior: n });
}
function K$(e) {
  let [t, n] = Ll(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const r = S.useCallback(() => {
      n(!0);
    }, [n]),
    o = S.useCallback(() => {
      n(!1);
    }, [n]),
    i = S.useCallback(() => {
      n(!t);
    }, [n, t]);
  return { isOpen: t, setOpen: n, open: r, close: o, toggle: i };
}
const j$ = 1500,
  gm = 500;
let zn = {},
  _$ = 0,
  Eo = !1,
  zt = null,
  Bn = null;
function z$(e = {}) {
  let { delay: t = j$, closeDelay: n = gm } = e,
    { isOpen: r, open: o, close: i } = K$(e),
    s = S.useMemo(() => `${++_$}`, []),
    l = S.useRef(),
    a = () => {
      zn[s] = d;
    },
    u = () => {
      for (let m in zn) m !== s && (zn[m](!0), delete zn[m]);
    },
    c = () => {
      clearTimeout(l.current),
        (l.current = null),
        u(),
        a(),
        (Eo = !0),
        o(),
        zt && (clearTimeout(zt), (zt = null)),
        Bn && (clearTimeout(Bn), (Bn = null));
    },
    d = (m) => {
      m || n <= 0
        ? (clearTimeout(l.current), (l.current = null), i())
        : l.current ||
          (l.current = setTimeout(() => {
            (l.current = null), i();
          }, n)),
        zt && (clearTimeout(zt), (zt = null)),
        Eo &&
          (Bn && clearTimeout(Bn),
          (Bn = setTimeout(() => {
            delete zn[s], (Bn = null), (Eo = !1);
          }, Math.max(gm, n))));
    },
    f = () => {
      u(),
        a(),
        !r && !zt && !Eo
          ? (zt = setTimeout(() => {
              (zt = null), (Eo = !0), c();
            }, t))
          : r || c();
    };
  return (
    S.useEffect(
      () => () => {
        clearTimeout(l.current), zn[s] && delete zn[s];
      },
      [s]
    ),
    {
      isOpen: r,
      open: (m) => {
        !m && t > 0 && !l.current ? f() : c();
      },
      close: d,
    }
  );
}
function B$(e, t) {
  let n = gd(e, { labelable: !0 }),
    { hoverProps: r } = hr({
      onHoverStart: () => (t == null ? void 0 : t.open(!0)),
      onHoverEnd: () => (t == null ? void 0 : t.close()),
    });
  return { tooltipProps: ee(n, r, { role: "tooltip" }) };
}
function U$(e, t, n) {
  let { isDisabled: r, trigger: o } = e,
    i = fi(),
    s = S.useRef(!1),
    l = S.useRef(!1),
    a = () => {
      (s.current || l.current) && t.open(l.current);
    },
    u = (g) => {
      !s.current && !l.current && t.close(g);
    };
  S.useEffect(() => {
    let g = (h) => {
      n &&
        n.current &&
        h.key === "Escape" &&
        (h.stopPropagation(), t.close(!0));
    };
    if (t.isOpen)
      return (
        document.addEventListener("keydown", g, !0),
        () => {
          document.removeEventListener("keydown", g, !0);
        }
      );
  }, [n, t]);
  let c = () => {
      o !== "focus" &&
        (tl() === "pointer" ? (s.current = !0) : (s.current = !1), a());
    },
    d = () => {
      o !== "focus" && ((l.current = !1), (s.current = !1), u());
    },
    f = () => {
      (l.current = !1), (s.current = !1), u(!0);
    },
    m = () => {
      Sd() && ((l.current = !0), a());
    },
    b = () => {
      (l.current = !1), (s.current = !1), u(!0);
    },
    { hoverProps: w } = hr({ isDisabled: r, onHoverStart: c, onHoverEnd: d }),
    { focusableProps: P } = Ed({ isDisabled: r, onFocus: m, onBlur: b }, n);
  return {
    triggerProps: {
      "aria-describedby": t.isOpen ? i : void 0,
      ...ee(P, w, { onPointerDown: f, onKeyDown: f }),
    },
    tooltipProps: { id: i },
  };
}
function W$(e) {
  const [t, n] = $i(e, Hp.variantKeys),
    {
      ref: r,
      as: o,
      isOpen: i,
      content: s,
      children: l,
      defaultOpen: a,
      onOpenChange: u,
      isDisabled: c,
      trigger: d,
      shouldFlip: f = !0,
      containerPadding: m = 12,
      placement: b = "top",
      delay: w = 0,
      closeDelay: P = 500,
      showArrow: g = !1,
      offset: h = 7,
      crossOffset: v = 0,
      isDismissable: E,
      shouldCloseOnBlur: L = !0,
      portalContainer: M,
      isKeyboardDismissDisabled: N = !1,
      updatePositionDeps: p = [],
      shouldCloseOnInteractOutside: R,
      className: A,
      onClose: $,
      motionProps: I,
      classNames: x,
      ...k
    } = t,
    K = o || "div",
    j = z$({
      delay: w,
      closeDelay: P,
      isDisabled: c,
      defaultOpen: a,
      isOpen: i,
      onOpenChange: (Se) => {
        u == null || u(Se), Se || $ == null || $();
      },
    }),
    V = S.useRef(null),
    F = S.useRef(null),
    z = S.useId(),
    C = j.isOpen && !c;
  S.useImperativeHandle(r, () => vP(F));
  const { triggerProps: y, tooltipProps: T } = U$(
      { isDisabled: c, trigger: d },
      j,
      V
    ),
    { tooltipProps: D } = B$({ isOpen: C, ...ee(t, T) }, j),
    {
      overlayProps: _,
      placement: U,
      updatePosition: H,
    } = vS({
      isOpen: C,
      targetRef: V,
      placement: C$(b),
      overlayRef: F,
      offset: g ? h + 3 : h,
      crossOffset: v,
      shouldFlip: f,
      containerPadding: m,
    });
  E$(() => {
    p.length && H();
  }, p);
  const { overlayProps: Q } = wS(
      {
        isOpen: C,
        onClose: j.close,
        isDismissable: E,
        shouldCloseOnBlur: L,
        isKeyboardDismissDisabled: N,
        shouldCloseOnInteractOutside: R,
      },
      F
    ),
    Z = S.useMemo(() => {
      var Se, ve, Ye;
      return Hp({
        ...n,
        radius: (Se = e == null ? void 0 : e.radius) != null ? Se : "md",
        size: (ve = e == null ? void 0 : e.size) != null ? ve : "md",
        shadow: (Ye = e == null ? void 0 : e.shadow) != null ? Ye : "sm",
      });
    }, [
      ...Object.values(n),
      e == null ? void 0 : e.radius,
      e == null ? void 0 : e.size,
      e == null ? void 0 : e.shadow,
    ]),
    Y = S.useCallback(
      (Se = {}, ve = null) => ({
        ...ee(y, Se),
        ref: bP(ve, V),
        "aria-describedby": C ? z : void 0,
      }),
      [y, C, z, j]
    ),
    te = S.useCallback(
      () => ({
        ref: F,
        "data-slot": "base",
        "data-open": re(C),
        "data-arrow": re(g),
        "data-disabled": re(c),
        "data-placement": fm(U, b),
        ...ee(D, Q, k),
        style: ee(_.style, k.style, t.style),
        className: Z.base({ class: x == null ? void 0 : x.base }),
        id: z,
      }),
      [Z, C, g, c, U, b, D, Q, k, _, t, z]
    ),
    xe = S.useCallback(
      () => ({
        "data-slot": "content",
        "data-open": re(C),
        "data-arrow": re(g),
        "data-disabled": re(c),
        "data-placement": fm(U, b),
        className: Z.content({ class: Ot(x == null ? void 0 : x.content, A) }),
      }),
      [Z, C, g, c, U, b, x]
    );
  return {
    Component: K,
    content: s,
    children: l,
    isOpen: C,
    triggerRef: V,
    showArrow: g,
    portalContainer: M,
    placement: b,
    disableAnimation: e == null ? void 0 : e.disableAnimation,
    isDisabled: c,
    motionProps: I,
    getTooltipContentProps: xe,
    getTriggerProps: Y,
    getTooltipProps: te,
  };
}
var ab = Nt((e, t) => {
  const {
    Component: n,
    children: r,
    content: o,
    isOpen: i,
    portalContainer: s,
    placement: l,
    disableAnimation: a,
    motionProps: u,
    getTriggerProps: c,
    getTooltipProps: d,
    getTooltipContentProps: f,
  } = W$({ ...e, ref: t });
  let m;
  try {
    const v = S.Children.only(r);
    m = S.cloneElement(v, c(v.props, v.ref));
  } catch {
    (m = O.jsx("span", {})),
      hP("Tooltip must have only one child node. Please, check your code.");
  }
  const { ref: b, id: w, style: P, ...g } = d(),
    h = O.jsx("div", {
      ref: b,
      id: w,
      style: P,
      children: O.jsx(of.div, {
        animate: "enter",
        exit: "exit",
        initial: "exit",
        variants: p$.scaleSpring,
        ...ee(u, g),
        style: { ...k$(l) },
        children: O.jsx(n, { ...f(), children: o }),
      }),
    });
  return O.jsxs(O.Fragment, {
    children: [
      m,
      a && i
        ? O.jsx(Fp, {
            portalContainer: s,
            children: O.jsx("div", {
              ref: b,
              id: w,
              style: P,
              ...g,
              children: O.jsx(n, { ...f(), children: o }),
            }),
          })
        : O.jsx(Q0, {
            children: i ? O.jsx(Fp, { portalContainer: s, children: h }) : null,
          }),
    ],
  });
});
ab.displayName = "NextUI.Tooltip";
var H$ = ab;
function G$(e = {}) {
  const { rerender: t = !1, delay: n = 0 } = e,
    r = S.useRef(!1),
    [o, i] = S.useState(!1);
  return (
    S.useEffect(() => {
      r.current = !0;
      let s = null;
      return (
        t &&
          (n > 0
            ? (s = setTimeout(() => {
                i(!0);
              }, n))
            : i(!0)),
        () => {
          (r.current = !1), t && i(!1), s && clearTimeout(s);
        }
      );
    }, [t]),
    [S.useCallback(() => r.current, []), o]
  );
}
const ub = new WeakMap();
function pl(e, t, n) {
  return (
    typeof t == "string" && (t = t.replace(/\s+/g, "")),
    `${ub.get(e)}-${n}-${t}`
  );
}
function Y$(e, t, n) {
  var r;
  let { key: o, isDisabled: i, shouldSelectOnPressUp: s } = e,
    { selectionManager: l, selectedKey: a } = t,
    u = o === a,
    c = i || t.isDisabled || t.disabledKeys.has(o),
    { itemProps: d, isPressed: f } = FP({
      selectionManager: l,
      key: o,
      ref: n,
      isDisabled: c,
      shouldSelectOnPressUp: s,
      linkBehavior: "selection",
    }),
    m = pl(t, o, "tab"),
    b = pl(t, o, "tabpanel"),
    { tabIndex: w } = d,
    P = t.collection.getItem(o),
    g = gd(P == null ? void 0 : P.props, {
      isLink: !!(
        !(P == null || (r = P.props) === null || r === void 0) && r.href
      ),
      labelable: !0,
    });
  return (
    delete g.id,
    {
      tabProps: ee(g, d, {
        id: m,
        "aria-selected": u,
        "aria-disabled": c || void 0,
        "aria-controls": u ? b : void 0,
        tabIndex: c ? void 0 : w,
        role: "tab",
      }),
      isSelected: u,
      isDisabled: c,
      isPressed: f,
    }
  );
}
function X$(e, t, n) {
  let r = iS(n) ? void 0 : 0;
  var o;
  const i = pl(
      t,
      (o = e.id) !== null && o !== void 0
        ? o
        : t == null
        ? void 0
        : t.selectedKey,
      "tabpanel"
    ),
    s = bd({
      ...e,
      id: i,
      "aria-labelledby": pl(t, t == null ? void 0 : t.selectedKey, "tab"),
    });
  return {
    tabPanelProps: ee(s, {
      tabIndex: r,
      role: "tabpanel",
      "aria-describedby": e["aria-describedby"],
      "aria-details": e["aria-details"],
    }),
  };
}
class Q$ {
  getKeyLeftOf(t) {
    return this.flipDirection ? this.getNextKey(t) : this.getPreviousKey(t);
  }
  getKeyRightOf(t) {
    return this.flipDirection ? this.getPreviousKey(t) : this.getNextKey(t);
  }
  getKeyAbove(t) {
    return this.getPreviousKey(t);
  }
  getKeyBelow(t) {
    return this.getNextKey(t);
  }
  getFirstKey() {
    let t = this.collection.getFirstKey();
    return t != null && this.disabledKeys.has(t) && (t = this.getNextKey(t)), t;
  }
  getLastKey() {
    let t = this.collection.getLastKey();
    return (
      t != null && this.disabledKeys.has(t) && (t = this.getPreviousKey(t)), t
    );
  }
  getNextKey(t) {
    do
      (t = this.collection.getKeyAfter(t)),
        t == null && (t = this.collection.getFirstKey());
    while (this.disabledKeys.has(t));
    return t;
  }
  getPreviousKey(t) {
    do
      (t = this.collection.getKeyBefore(t)),
        t == null && (t = this.collection.getLastKey());
    while (this.disabledKeys.has(t));
    return t;
  }
  constructor(t, n, r, o = new Set()) {
    (this.collection = t),
      (this.flipDirection = n === "rtl" && r === "horizontal"),
      (this.disabledKeys = o);
  }
}
function Z$(e, t, n) {
  let { orientation: r = "horizontal", keyboardActivation: o = "automatic" } =
      e,
    { collection: i, selectionManager: s, disabledKeys: l } = t,
    { direction: a } = fr(),
    u = S.useMemo(() => new Q$(i, a, r, l), [i, l, r, a]),
    { collectionProps: c } = OP({
      ref: n,
      selectionManager: s,
      keyboardDelegate: u,
      selectOnFocus: o === "automatic",
      disallowEmptySelection: !0,
      scrollRef: n,
      linkBehavior: "selection",
    }),
    d = fi();
  ub.set(t, d);
  let f = bd({ ...e, id: d });
  return {
    tabListProps: {
      ...ee(c, f),
      role: "tablist",
      "aria-orientation": r,
      tabIndex: void 0,
    },
  };
}
var cb = Nt((e, t) => {
  var n, r, o;
  const { as: i, state: s, className: l, slots: a, classNames: u, ...c } = e,
    d = i || "div",
    f = Fn(t),
    { tabPanelProps: m } = X$(e, s, f),
    { focusProps: b, isFocused: w, isFocusVisible: P } = Ei(),
    g = s.selectedItem,
    h = (n = g == null ? void 0 : g.props) == null ? void 0 : n.children,
    v = Ot(
      u == null ? void 0 : u.panel,
      l,
      (r = g == null ? void 0 : g.props) == null ? void 0 : r.className
    );
  return h
    ? O.jsx(d, {
        ref: f,
        "data-focus": w,
        "data-focus-visible": P,
        ...ee(m, b, c),
        className: (o = a.panel) == null ? void 0 : o.call(a, { class: v }),
        "data-slot": "panel",
        children: h,
      })
    : null;
});
cb.displayName = "NextUI.TabPanel";
var q$ = cb,
  db = Nt((e, t) => {
    var n;
    const {
        className: r,
        as: o,
        item: i,
        state: s,
        classNames: l,
        isDisabled: a,
        listRef: u,
        slots: c,
        motionProps: d,
        disableAnimation: f,
        disableCursorAnimation: m,
        shouldSelectOnPressUp: b,
        onClick: w,
        ...P
      } = e,
      { key: g } = i,
      h = Fn(t),
      v = o || (e.href ? "a" : "button"),
      E = typeof v == "string",
      {
        tabProps: L,
        isSelected: M,
        isDisabled: N,
        isPressed: p,
      } = Y$({ key: g, isDisabled: a, shouldSelectOnPressUp: b }, s, h),
      R = a || N,
      { focusProps: A, isFocused: $, isFocusVisible: I } = Ei(),
      { hoverProps: x, isHovered: k } = hr({ isDisabled: R }),
      K = Ot(l == null ? void 0 : l.tab, r),
      [, j] = G$({ rerender: !0 }),
      V = () => {
        ki(w, L.onClick),
          !(!(h != null && h.current) || !(u != null && u.current)) &&
            N$(h.current, {
              scrollMode: "if-needed",
              behavior: "smooth",
              block: "end",
              inline: "end",
              boundary: u == null ? void 0 : u.current,
            });
      };
    return O.jsxs(v, {
      ref: h,
      "data-disabled": re(N),
      "data-focus": re($),
      "data-focus-visible": re(I),
      "data-hover": re(k),
      "data-hover-unselected": re((k || p) && !M),
      "data-pressed": re(p),
      "data-selected": re(M),
      "data-slot": "tab",
      ...ee(
        L,
        R ? {} : { ...A, ...x },
        Ln(P, { enabled: E, omitPropNames: new Set(["title"]) })
      ),
      className: (n = c.tab) == null ? void 0 : n.call(c, { class: K }),
      title: P == null ? void 0 : P.titleValue,
      type: v === "button" ? "button" : void 0,
      onClick: V,
      children: [
        M && !f && !m && j
          ? O.jsx(of.span, {
              className: c.cursor({ class: l == null ? void 0 : l.cursor }),
              "data-slot": "cursor",
              layoutDependency: !1,
              layoutId: "cursor",
              transition: { type: "spring", bounce: 0.15, duration: 0.5 },
              ...d,
            })
          : null,
        O.jsx("div", {
          className: c.tabContent({ class: l == null ? void 0 : l.tabContent }),
          "data-slot": "tabContent",
          children: i.rendered,
        }),
      ],
    });
  });
db.displayName = "NextUI.Tab";
var J$ = db;
class vm {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(t) {
    let n = this.keyMap.get(t);
    return n ? n.prevKey : null;
  }
  getKeyAfter(t) {
    let n = this.keyMap.get(t);
    return n ? n.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(t) {
    return this.keyMap.get(t);
  }
  at(t) {
    const n = [...this.getKeys()];
    return this.getItem(n[t]);
  }
  getChildren(t) {
    let n = this.keyMap.get(t);
    return (n == null ? void 0 : n.childNodes) || [];
  }
  constructor(t) {
    (this.keyMap = new Map()), (this.iterable = t);
    let n = (i) => {
      if ((this.keyMap.set(i.key, i), i.childNodes && i.type === "section"))
        for (let s of i.childNodes) n(s);
    };
    for (let i of t) n(i);
    let r,
      o = 0;
    for (let [i, s] of this.keyMap)
      r
        ? ((r.nextKey = i), (s.prevKey = r.key))
        : ((this.firstKey = i), (s.prevKey = void 0)),
        s.type === "item" && (s.index = o++),
        (r = s),
        (r.nextKey = void 0);
    this.lastKey = r == null ? void 0 : r.key;
  }
}
function e2(e) {
  let { filter: t } = e,
    n = P$(e),
    r = S.useMemo(
      () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
      [e.disabledKeys]
    ),
    o = S.useCallback((u) => (t ? new vm(t(u)) : new vm(u)), [t]),
    i = S.useMemo(
      () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
      [e.suppressTextValueWarning]
    ),
    s = y$(e, o, i),
    l = S.useMemo(() => new T$(s, n), [s, n]);
  const a = S.useRef(null);
  return (
    S.useEffect(() => {
      if (n.focusedKey != null && !s.getItem(n.focusedKey)) {
        const u = a.current.getItem(n.focusedKey),
          c = [...a.current.getKeys()]
            .map((w) => {
              const P = a.current.getItem(w);
              return P.type === "item" ? P : null;
            })
            .filter((w) => w !== null),
          d = [...s.getKeys()]
            .map((w) => {
              const P = s.getItem(w);
              return P.type === "item" ? P : null;
            })
            .filter((w) => w !== null),
          f = c.length - d.length;
        let m = Math.min(
            f > 1 ? Math.max(u.index - f + 1, 0) : u.index,
            d.length - 1
          ),
          b;
        for (; m >= 0; ) {
          if (!l.isDisabled(d[m].key)) {
            b = d[m];
            break;
          }
          m < d.length - 1 ? m++ : (m > u.index && (m = u.index), m--);
        }
        n.setFocusedKey(b ? b.key : null);
      }
      a.current = s;
    }, [s, l, n, n.focusedKey]),
    { collection: s, disabledKeys: r, selectionManager: l }
  );
}
function t2(e) {
  var t;
  let [n, r] = Ll(
      e.selectedKey,
      (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : null,
      e.onSelectionChange
    ),
    o = S.useMemo(() => (n != null ? [n] : []), [n]),
    {
      collection: i,
      disabledKeys: s,
      selectionManager: l,
    } = e2({
      ...e,
      selectionMode: "single",
      disallowEmptySelection: !0,
      allowDuplicateSelectionEvents: !0,
      selectedKeys: o,
      onSelectionChange: (u) => {
        var c;
        let d =
          (c = u.values().next().value) !== null && c !== void 0 ? c : null;
        d === n && e.onSelectionChange && e.onSelectionChange(d), r(d);
      },
    }),
    a = n != null ? i.getItem(n) : null;
  return {
    collection: i,
    disabledKeys: s,
    selectionManager: l,
    selectedKey: n,
    setSelectedKey: r,
    selectedItem: a,
  };
}
function n2(e) {
  var t;
  let n = t2({
      ...e,
      suppressTextValueWarning: !0,
      defaultSelectedKey:
        (t = e.defaultSelectedKey) !== null && t !== void 0
          ? t
          : ym(
              e.collection,
              e.disabledKeys ? new Set(e.disabledKeys) : new Set()
            ),
    }),
    { selectionManager: r, collection: o, selectedKey: i } = n,
    s = S.useRef(i);
  return (
    S.useEffect(() => {
      let l = i;
      (r.isEmpty || !o.getItem(l)) &&
        ((l = ym(o, n.disabledKeys)), l != null && r.setSelectedKeys([l])),
        ((l != null && r.focusedKey == null) ||
          (!r.isFocused && l !== s.current)) &&
          r.setFocusedKey(l),
        (s.current = l);
    }),
    { ...n, isDisabled: e.isDisabled || !1 }
  );
}
function ym(e, t) {
  let n = null;
  if (e) {
    for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey(); )
      n = e.getKeyAfter(n);
    t.has(n) && n === e.getLastKey() && (n = e.getFirstKey());
  }
  return n;
}
function r2(e) {
  const [t, n] = $i(e, Wp.variantKeys),
    {
      ref: r,
      as: o,
      className: i,
      classNames: s,
      children: l,
      disableCursorAnimation: a,
      shouldSelectOnPressUp: u = !0,
      motionProps: c,
      ...d
    } = t,
    f = o || "div",
    m = typeof f == "string",
    b = Fn(r),
    w = n2({ children: l, ...d }),
    { tabListProps: P } = Z$(d, w, b),
    g = S.useMemo(() => Wp({ ...n, className: i }), [...Object.values(n), i]),
    h = Ot(s == null ? void 0 : s.base, i),
    v = S.useMemo(
      () => ({
        state: w,
        slots: g,
        classNames: s,
        motionProps: c,
        listRef: b,
        shouldSelectOnPressUp: u,
        disableCursorAnimation: a,
        isDisabled: e == null ? void 0 : e.isDisabled,
        disableAnimation: e == null ? void 0 : e.disableAnimation,
      }),
      [
        w,
        g,
        b,
        c,
        a,
        u,
        e == null ? void 0 : e.disableAnimation,
        e == null ? void 0 : e.isDisabled,
        s,
      ]
    ),
    E = S.useCallback(
      (M) => ({
        "data-slot": "base",
        className: g.base({ class: Ot(h, M == null ? void 0 : M.className) }),
        ...ee(Ln(d, { enabled: m }), M),
      }),
      [h, d, g]
    ),
    L = S.useCallback(
      (M) => ({
        ref: b,
        "data-slot": "tabList",
        className: g.tabList({
          class: Ot(
            s == null ? void 0 : s.tabList,
            M == null ? void 0 : M.className
          ),
        }),
        ...ee(P, M),
      }),
      [b, P, s, g]
    );
  return {
    Component: f,
    domRef: b,
    state: w,
    values: v,
    getBaseProps: E,
    getTabListProps: L,
  };
}
function fb(e, t) {
  var n;
  const {
      Component: r,
      values: o,
      state: i,
      getBaseProps: s,
      getTabListProps: l,
    } = r2({ ...e, ref: t }),
    a = S.useId(),
    u = !e.disableAnimation && !e.disableCursorAnimation,
    c = {
      state: i,
      listRef: o.listRef,
      slots: o.slots,
      classNames: o.classNames,
      isDisabled: o.isDisabled,
      motionProps: o.motionProps,
      disableAnimation: o.disableAnimation,
      shouldSelectOnPressUp: o.shouldSelectOnPressUp,
      disableCursorAnimation: o.disableCursorAnimation,
    },
    d = [...i.collection].map((f) =>
      O.jsx(J$, { item: f, ...c, ...f.props }, f.key)
    );
  return O.jsxs(O.Fragment, {
    children: [
      O.jsx("div", {
        ...s(),
        children: O.jsx(r, {
          ...l(),
          children: u ? O.jsx(f$, { id: a, children: d }) : d,
        }),
      }),
      O.jsx(
        q$,
        { classNames: o.classNames, slots: o.slots, state: o.state },
        (n = i.selectedItem) == null ? void 0 : n.key
      ),
    ],
  });
}
var o2 = Nt(fb);
fb.displayName = "NextUI.Tabs";
var i2 = m$,
  Wa = i2;
const sf = new WeakMap();
function bc(e, t) {
  let n = sf.get(e);
  if (!n) throw new Error("Unknown slider state");
  return `${n.id}-${t}`;
}
function s2(e, t, n) {
  let { labelProps: r, fieldProps: o } = lb(e),
    i = e.orientation === "vertical";
  var s;
  sf.set(t, {
    id: (s = r.id) !== null && s !== void 0 ? s : o.id,
    "aria-describedby": e["aria-describedby"],
    "aria-details": e["aria-details"],
  });
  let { direction: l } = fr(),
    { addGlobalListener: a, removeGlobalListener: u } = fo();
  const c = S.useRef(null),
    d = l === "rtl",
    f = S.useRef(null),
    { moveProps: m } = oy({
      onMoveStart() {
        f.current = null;
      },
      onMove({ deltaX: g, deltaY: h }) {
        let { height: v, width: E } = n.current.getBoundingClientRect(),
          L = i ? v : E;
        f.current == null && (f.current = t.getThumbPercent(c.current) * L);
        let M = i ? h : g;
        if (
          ((i || d) && (M = -M),
          (f.current += M),
          c.current != null && n.current)
        ) {
          const N = io(f.current / L, 0, 1);
          t.setThumbPercent(c.current, N);
        }
      },
      onMoveEnd() {
        c.current != null &&
          (t.setThumbDragging(c.current, !1), (c.current = null));
      },
    });
  let b = S.useRef(void 0),
    w = (g, h, v, E) => {
      if (
        n.current &&
        !e.isDisabled &&
        t.values.every((L, M) => !t.isThumbDragging(M))
      ) {
        let {
            height: L,
            width: M,
            top: N,
            left: p,
          } = n.current.getBoundingClientRect(),
          R = i ? L : M,
          x = ((i ? E : v) - (i ? N : p)) / R;
        (l === "rtl" || i) && (x = 1 - x);
        let k = t.getPercentValue(x),
          K,
          j = t.values.findIndex((V) => k - V < 0);
        if (j === 0) K = j;
        else if (j === -1) K = t.values.length - 1;
        else {
          let V = t.values[j - 1],
            F = t.values[j];
          Math.abs(V - k) < Math.abs(F - k) ? (K = j - 1) : (K = j);
        }
        K >= 0 && t.isThumbEditable(K)
          ? (g.preventDefault(),
            (c.current = K),
            t.setFocusedThumb(K),
            (b.current = h),
            t.setThumbDragging(c.current, !0),
            t.setThumbValue(K, k),
            a(window, "mouseup", P, !1),
            a(window, "touchend", P, !1),
            a(window, "pointerup", P, !1))
          : (c.current = null);
      }
    },
    P = (g) => {
      var h, v;
      ((v = g.pointerId) !== null && v !== void 0
        ? v
        : (h = g.changedTouches) === null || h === void 0
        ? void 0
        : h[0].identifier) === b.current &&
        (c.current != null &&
          (t.setThumbDragging(c.current, !1), (c.current = null)),
        u(window, "mouseup", P, !1),
        u(window, "touchend", P, !1),
        u(window, "pointerup", P, !1));
    };
  return (
    "htmlFor" in r &&
      r.htmlFor &&
      (delete r.htmlFor,
      (r.onClick = () => {
        var g;
        (g = document.getElementById(bc(t, 0))) === null ||
          g === void 0 ||
          g.focus(),
          zx("keyboard");
      })),
    {
      labelProps: r,
      groupProps: { role: "group", ...o },
      trackProps: ee(
        {
          onMouseDown(g) {
            g.button !== 0 ||
              g.altKey ||
              g.ctrlKey ||
              g.metaKey ||
              w(g, void 0, g.clientX, g.clientY);
          },
          onPointerDown(g) {
            (g.pointerType === "mouse" &&
              (g.button !== 0 || g.altKey || g.ctrlKey || g.metaKey)) ||
              w(g, g.pointerId, g.clientX, g.clientY);
          },
          onTouchStart(g) {
            w(
              g,
              g.changedTouches[0].identifier,
              g.changedTouches[0].clientX,
              g.changedTouches[0].clientY
            );
          },
          style: { position: "relative", touchAction: "none" },
        },
        m
      ),
      outputProps: {
        htmlFor: t.values.map((g, h) => bc(t, h)).join(" "),
        "aria-live": "off",
      },
    }
  );
}
function l2(e, t) {
  let {
      index: n = 0,
      isRequired: r,
      validationState: o,
      isInvalid: i,
      trackRef: s,
      inputRef: l,
      orientation: a = t.orientation,
      name: u,
    } = e,
    c = e.isDisabled || t.isDisabled,
    d = a === "vertical",
    { direction: f } = fr(),
    { addGlobalListener: m, removeGlobalListener: b } = fo(),
    w = sf.get(t);
  var P;
  const { labelProps: g, fieldProps: h } = lb({
      ...e,
      id: bc(t, n),
      "aria-labelledby": `${w.id} ${
        (P = e["aria-labelledby"]) !== null && P !== void 0 ? P : ""
      }`.trim(),
    }),
    v = t.values[n],
    E = S.useCallback(() => {
      l.current && Je(l.current);
    }, [l]),
    L = t.focusedThumb === n;
  S.useEffect(() => {
    L && E();
  }, [L, E]);
  let M = f === "rtl",
    N = S.useRef(null),
    { keyboardProps: p } = ry({
      onKeyDown(j) {
        let {
          getThumbMaxValue: V,
          getThumbMinValue: F,
          decrementThumb: z,
          incrementThumb: C,
          setThumbValue: y,
          setThumbDragging: T,
          pageSize: D,
        } = t;
        if (!/^(PageUp|PageDown|Home|End)$/.test(j.key)) {
          j.continuePropagation();
          return;
        }
        switch ((j.preventDefault(), T(n, !0), j.key)) {
          case "PageUp":
            C(n, D);
            break;
          case "PageDown":
            z(n, D);
            break;
          case "Home":
            y(n, F(n));
            break;
          case "End":
            y(n, V(n));
            break;
        }
        T(n, !1);
      },
    }),
    { moveProps: R } = oy({
      onMoveStart() {
        (N.current = null), t.setThumbDragging(n, !0);
      },
      onMove({ deltaX: j, deltaY: V, pointerType: F, shiftKey: z }) {
        const {
          getThumbPercent: C,
          setThumbPercent: y,
          decrementThumb: T,
          incrementThumb: D,
          step: _,
          pageSize: U,
        } = t;
        let { width: H, height: Q } = s.current.getBoundingClientRect(),
          Z = d ? Q : H;
        if ((N.current == null && (N.current = C(n) * Z), F === "keyboard"))
          (j > 0 && M) || (j < 0 && !M) || V > 0
            ? T(n, z ? U : _)
            : D(n, z ? U : _);
        else {
          let Y = d ? V : j;
          (d || M) && (Y = -Y), (N.current += Y), y(n, io(N.current / Z, 0, 1));
        }
      },
      onMoveEnd() {
        t.setThumbDragging(n, !1);
      },
    });
  t.setThumbEditable(n, !c);
  const { focusableProps: A } = Ed(
    ee(e, {
      onFocus: () => t.setFocusedThumb(n),
      onBlur: () => t.setFocusedThumb(void 0),
    }),
    l
  );
  let $ = S.useRef(void 0),
    I = (j) => {
      E(),
        ($.current = j),
        t.setThumbDragging(n, !0),
        m(window, "mouseup", x, !1),
        m(window, "touchend", x, !1),
        m(window, "pointerup", x, !1);
    },
    x = (j) => {
      var V, F;
      ((F = j.pointerId) !== null && F !== void 0
        ? F
        : (V = j.changedTouches) === null || V === void 0
        ? void 0
        : V[0].identifier) === $.current &&
        (E(),
        t.setThumbDragging(n, !1),
        b(window, "mouseup", x, !1),
        b(window, "touchend", x, !1),
        b(window, "pointerup", x, !1));
    },
    k = t.getThumbPercent(n);
  (d || f === "rtl") && (k = 1 - k);
  let K = c
    ? {}
    : ee(p, R, {
        onMouseDown: (j) => {
          j.button !== 0 || j.altKey || j.ctrlKey || j.metaKey || I();
        },
        onPointerDown: (j) => {
          j.button !== 0 ||
            j.altKey ||
            j.ctrlKey ||
            j.metaKey ||
            I(j.pointerId);
        },
        onTouchStart: (j) => {
          I(j.changedTouches[0].identifier);
        },
      });
  return (
    wx(l, v, (j) => {
      t.setThumbValue(n, j);
    }),
    {
      inputProps: ee(A, h, {
        type: "range",
        tabIndex: c ? void 0 : 0,
        min: t.getThumbMinValue(n),
        max: t.getThumbMaxValue(n),
        step: t.step,
        value: v,
        name: u,
        disabled: c,
        "aria-orientation": a,
        "aria-valuetext": t.getThumbValueLabel(n),
        "aria-required": r || void 0,
        "aria-invalid": i || o === "invalid" || void 0,
        "aria-errormessage": e["aria-errormessage"],
        "aria-describedby": [w["aria-describedby"], e["aria-describedby"]]
          .filter(Boolean)
          .join(" "),
        "aria-details": [w["aria-details"], e["aria-details"]]
          .filter(Boolean)
          .join(" "),
        onChange: (j) => {
          t.setThumbValue(n, parseFloat(j.target.value));
        },
      }),
      thumbProps: {
        ...K,
        style: {
          position: "absolute",
          [d ? "top" : "left"]: `${k * 100}%`,
          transform: "translate(-50%, -50%)",
          touchAction: "none",
        },
      },
      labelProps: g,
      isDragging: t.isThumbDragging(n),
      isDisabled: c,
      isFocused: L,
    }
  );
}
function a2(e) {
  const {
      ref: t,
      as: n,
      state: r,
      index: o,
      name: i,
      trackRef: s,
      className: l,
      tooltipProps: a,
      isVertical: u,
      showTooltip: c,
      formatOptions: d,
      renderThumb: f,
      ...m
    } = e,
    b = n || "div",
    w = Fn(t),
    P = S.useRef(null),
    g = Hv(d),
    {
      thumbProps: h,
      inputProps: v,
      isDragging: E,
      isFocused: L,
    } = l2({ index: o, trackRef: s, inputRef: P, name: i, ...m }, r),
    { hoverProps: M, isHovered: N } = hr({ isDisabled: r.isDisabled }),
    { focusProps: p, isFocusVisible: R } = Ei(),
    { pressProps: A, isPressed: $ } = Cy({ isDisabled: r.isDisabled });
  return {
    Component: b,
    index: o,
    showTooltip: c,
    renderThumb: f,
    getThumbProps: (K = {}) => ({
      ref: w,
      "data-slot": "thumb",
      "data-hover": re(N),
      "data-pressed": re($),
      "data-dragging": re(E),
      "data-focused": re(L),
      "data-focus-visible": re(R),
      ...ee(h, A, M, m),
      className: l,
      ...K,
    }),
    getTooltipProps: () => {
      const K = g ? g.format(r.values[o ?? 0]) : r.values[o ?? 0];
      return {
        ...a,
        placement:
          a != null && a.placement
            ? a == null
              ? void 0
              : a.placement
            : u
            ? "right"
            : "top",
        content: a != null && a.content ? (a == null ? void 0 : a.content) : K,
        updatePositionDeps: [E, N, K],
        isOpen:
          (a == null ? void 0 : a.isOpen) !== void 0
            ? a == null
              ? void 0
              : a.isOpen
            : N || E,
      };
    },
    getInputProps: (K = {}) => ({ ref: P, ...ee(v, p), ...K }),
  };
}
var pb = Nt((e, t) => {
  const {
      Component: n,
      index: r,
      renderThumb: o,
      showTooltip: i,
      getTooltipProps: s,
      getThumbProps: l,
      getInputProps: a,
    } = a2({ ...e, ref: t }),
    u = {
      ...l(),
      index: r,
      children: O.jsx(lS, { children: O.jsx("input", { ...a() }) }),
    },
    c = tc({ Component: n, props: u, renderCustom: o });
  return i ? O.jsx(H$, { ...s(), children: c }) : c;
});
pb.displayName = "NextUI.SliderThumb";
var u2 = pb;
const c2 = 0,
  d2 = 100,
  f2 = 1;
function p2(e) {
  const {
    isDisabled: t = !1,
    minValue: n = c2,
    maxValue: r = d2,
    numberFormatter: o,
    step: i = f2,
    orientation: s = "horizontal",
  } = e;
  let l = S.useMemo(() => {
      let y = (r - n) / 10;
      return (y = So(y, 0, y + i, i)), Math.max(y, i);
    }, [i, r, n]),
    a = S.useCallback(
      (y) =>
        y == null
          ? void 0
          : y.map((T, D) => {
              let _ = D === 0 ? n : T[D - 1],
                U = D === y.length - 1 ? r : T[D + 1];
              return So(T, _, U, i);
            }),
      [n, r, i]
    ),
    u = S.useMemo(() => a(wm(e.value)), [e.value]),
    c = S.useMemo(() => {
      var y;
      return a((y = wm(e.defaultValue)) !== null && y !== void 0 ? y : [n]);
    }, [e.defaultValue, n]),
    d = xm(e.value, e.defaultValue, e.onChange),
    f = xm(e.value, e.defaultValue, e.onChangeEnd);
  const [m, b] = Ll(u, c, d),
    [w, P] = S.useState(new Array(m.length).fill(!1)),
    g = S.useRef(new Array(m.length).fill(!0)),
    [h, v] = S.useState(void 0),
    E = S.useRef(m),
    L = S.useRef(w);
  let M = (y) => {
      (E.current = y), b(y);
    },
    N = (y) => {
      (L.current = y), P(y);
    };
  function p(y) {
    return (y - n) / (r - n);
  }
  function R(y) {
    return y === 0 ? n : m[y - 1];
  }
  function A(y) {
    return y === m.length - 1 ? r : m[y + 1];
  }
  function $(y) {
    return g.current[y];
  }
  function I(y, T) {
    g.current[y] = T;
  }
  function x(y, T) {
    if (t || !$(y)) return;
    const D = R(y),
      _ = A(y);
    T = So(T, D, _, i);
    let U = bm(E.current, y, T);
    M(U);
  }
  function k(y, T) {
    if (t || !$(y)) return;
    T && (E.current = m);
    const D = L.current[y];
    (L.current = bm(L.current, y, T)),
      N(L.current),
      f && D && !L.current.some(Boolean) && f(E.current);
  }
  function K(y) {
    return o.format(y);
  }
  function j(y, T) {
    x(y, F(T));
  }
  function V(y) {
    return Math.round((y - n) / i) * i + n;
  }
  function F(y) {
    const T = y * (r - n) + n;
    return io(V(T), n, r);
  }
  function z(y, T = 1) {
    let D = Math.max(T, i);
    x(y, So(m[y] + D, n, r, i));
  }
  function C(y, T = 1) {
    let D = Math.max(T, i);
    x(y, So(m[y] - D, n, r, i));
  }
  return {
    values: m,
    getThumbValue: (y) => m[y],
    setThumbValue: x,
    setThumbPercent: j,
    isThumbDragging: (y) => w[y],
    setThumbDragging: k,
    focusedThumb: h,
    setFocusedThumb: v,
    getThumbPercent: (y) => p(m[y]),
    getValuePercent: p,
    getThumbValueLabel: (y) => K(m[y]),
    getFormattedValue: K,
    getThumbMinValue: R,
    getThumbMaxValue: A,
    getPercentValue: F,
    isThumbEditable: $,
    setThumbEditable: I,
    incrementThumb: z,
    decrementThumb: C,
    step: i,
    pageSize: l,
    orientation: s,
    isDisabled: t,
  };
}
function bm(e, t, n) {
  return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
}
function wm(e) {
  if (e != null) return Array.isArray(e) ? e : [e];
}
function xm(e, t, n) {
  return (r) => {
    typeof e == "number" || typeof t == "number"
      ? n == null || n(r[0])
      : n == null || n(r);
  };
}
function h2(e) {
  var t, n;
  const [r, o] = $i(e, xa.variantKeys),
    {
      ref: i,
      as: s,
      name: l,
      label: a,
      formatOptions: u,
      value: c,
      maxValue: d = 100,
      minValue: f = 0,
      step: m = 1,
      showSteps: b = !1,
      showTooltip: w = !1,
      orientation: P = "horizontal",
      marks: g = [],
      startContent: h,
      endContent: v,
      fillOffset: E,
      className: L,
      classNames: M,
      renderThumb: N,
      renderLabel: p,
      renderValue: R,
      onChange: A,
      onChangeEnd: $,
      getValue: I,
      tooltipValueFormatOptions: x = u,
      tooltipProps: k = {},
      ...K
    } = r,
    j = s || "div",
    V = typeof j == "string",
    F = Fn(i),
    z = S.useRef(null),
    C = Hv(u),
    { direction: y } = fr(),
    T = S.useCallback((se) => Math.min(Math.max(se, f), d), [f, d]),
    D = S.useMemo(() => {
      if (c !== void 0) return Array.isArray(c) ? c.map(T) : T(c);
    }, [c, T]),
    _ = p2({
      ...K,
      value: D,
      isDisabled: (t = e == null ? void 0 : e.isDisabled) != null ? t : !1,
      orientation: P,
      step: m,
      minValue: f,
      maxValue: d,
      numberFormatter: C,
      onChange: A,
      onChangeEnd: $,
    }),
    U = {
      offset: 5,
      delay: 0,
      size: "sm",
      showArrow: !0,
      color:
        e != null && e.color
          ? e == null
            ? void 0
            : e.color
          : (n = xa.defaultVariants) == null
          ? void 0
          : n.color,
      isDisabled: e.isDisabled,
      ...k,
    },
    {
      groupProps: H,
      trackProps: Q,
      labelProps: Z,
      outputProps: Y,
    } = s2(e, _, z),
    { isHovered: te, hoverProps: xe } = hr({ isDisabled: e.isDisabled }),
    Se = Ot(M == null ? void 0 : M.base, L),
    ve = P === "vertical",
    Ye = (g == null ? void 0 : g.length) > 0,
    Be = E === void 0 ? _.values.length === 1 : !1,
    Pe = S.useMemo(
      () =>
        xa({
          ...o,
          hasMarks: Ye,
          hasSingleThumb: Be,
          isVertical: ve,
          className: L,
        }),
      [...Object.values(o), ve, Be, Ye, L]
    ),
    [Ve, yr] = [
      _.values.length > 1
        ? _.getThumbPercent(0)
        : E !== void 0
        ? _.getValuePercent(E)
        : 0,
      _.getThumbPercent(_.values.length - 1),
    ].sort(),
    Lt =
      _.values.length === 1
        ? C.format(_.values[0])
        : C.formatRange(_.values[0], _.values[_.values.length - 1]),
    mb = b ? Math.floor((d - f) / m) + 1 : 0;
  return {
    Component: j,
    state: _,
    value: Lt,
    domRef: F,
    label: a,
    steps: mb,
    marks: g,
    startContent: h,
    endContent: v,
    getStepProps: (se) => {
      const Kn = _.getValuePercent(se * m + f);
      return {
        className: Pe.step({ class: M == null ? void 0 : M.step }),
        "data-slot": "step",
        "data-in-range": Kn <= yr && Kn >= Ve,
        style: {
          [ve ? "bottom" : y === "rtl" ? "right" : "left"]: `${Kn * 100}%`,
        },
      };
    },
    getBaseProps: (se = {}) => ({
      ref: F,
      "data-orientation": _.orientation,
      "data-slot": "base",
      "data-hover": te,
      className: Pe.base({ class: Se }),
      ...ee(H, xe, Ln(K, { enabled: V }), Ln(se)),
    }),
    getValue: I,
    renderLabel: p,
    renderValue: R,
    getTrackWrapperProps: (se = {}) => ({
      "data-slot": "track-wrapper",
      className: Pe.trackWrapper({
        class: M == null ? void 0 : M.trackWrapper,
      }),
      ...se,
    }),
    getLabelWrapperProps: (se = {}) => ({
      className: Pe.labelWrapper({
        class: M == null ? void 0 : M.labelWrapper,
      }),
      "data-slot": "labelWrapper",
      ...se,
    }),
    getLabelProps: (se = {}) => ({
      "data-slot": "label",
      className: Pe.label({ class: M == null ? void 0 : M.label }),
      children: a,
      ...Z,
      ...se,
    }),
    getValueProps: (se = {}) => ({
      "data-slot": "value",
      className: Pe.value({ class: M == null ? void 0 : M.value }),
      children: I && typeof I == "function" ? I(_.values) : Lt,
      ...Y,
      ...se,
    }),
    getTrackProps: (se = {}) => ({
      ref: z,
      "data-slot": "track",
      "data-thumb-hidden": !!(e != null && e.hideThumb),
      "data-vertical": ve,
      className: Pe.track({ class: M == null ? void 0 : M.track }),
      ...Q,
      ...se,
    }),
    getFillerProps: (se = {}) => ({
      "data-slot": "filler",
      className: Pe.filler({ class: M == null ? void 0 : M.filler }),
      ...se,
      style: {
        ...se.style,
        [ve ? "bottom" : y === "rtl" ? "right" : "left"]: `${Ve * 100}%`,
        ...(ve
          ? { height: `${(yr - Ve) * 100}%` }
          : { width: `${(yr - Ve) * 100}%` }),
      },
    }),
    getThumbProps: (se) => ({
      name: l,
      index: se,
      state: _,
      trackRef: z,
      orientation: P,
      isVertical: ve,
      tooltipProps: U,
      showTooltip: w,
      renderThumb: N,
      formatOptions: x,
      className: Pe.thumb({ class: M == null ? void 0 : M.thumb }),
    }),
    getMarkProps: (se) => {
      const Kn = _.getValuePercent(se.value);
      return {
        className: Pe.mark({ class: M == null ? void 0 : M.mark }),
        "data-slot": "mark",
        "data-in-range": Kn <= yr && Kn >= Ve,
        style: {
          [ve ? "bottom" : y === "rtl" ? "right" : "left"]: `${Kn * 100}%`,
        },
      };
    },
    getStartContentProps: (se = {}) => ({
      "data-slot": "startContent",
      className: Pe.startContent({
        class: M == null ? void 0 : M.startContent,
      }),
      ...se,
    }),
    getEndContentProps: (se = {}) => ({
      "data-slot": "endContent",
      className: Pe.endContent({ class: M == null ? void 0 : M.endContent }),
      ...se,
    }),
  };
}
var hb = Nt((e, t) => {
  const {
    Component: n,
    state: r,
    label: o,
    steps: i,
    marks: s,
    startContent: l,
    endContent: a,
    getStepProps: u,
    getBaseProps: c,
    renderValue: d,
    renderLabel: f,
    getTrackWrapperProps: m,
    getLabelWrapperProps: b,
    getLabelProps: w,
    getValueProps: P,
    getTrackProps: g,
    getFillerProps: h,
    getThumbProps: v,
    getMarkProps: E,
    getStartContentProps: L,
    getEndContentProps: M,
  } = h2({ ...e, ref: t });
  return O.jsxs(n, {
    ...c(),
    children: [
      o &&
        O.jsxs("div", {
          ...b(),
          children: [
            tc({ Component: "label", props: w(), renderCustom: f }),
            tc({ Component: "output", props: P(), renderCustom: d }),
          ],
        }),
      O.jsxs("div", {
        ...m(),
        children: [
          l && O.jsx("div", { ...L(), children: l }),
          O.jsxs("div", {
            ...g(),
            children: [
              O.jsx("div", { ...h() }),
              Number.isFinite(i) &&
                Array.from({ length: i }, (N, p) =>
                  O.jsx("div", { ...u(p) }, p)
                ),
              r.values.map((N, p) => O.jsx(u2, { ...v(p) }, p)),
              (s == null ? void 0 : s.length) > 0 &&
                s.map((N, p) =>
                  O.jsx("div", { ...E(N), children: N.label }, p)
                ),
            ],
          }),
          a && O.jsx("div", { ...M(), children: a }),
        ],
      }),
    ],
  });
});
hb.displayName = "NextUI.Slider";
var an = hb;
function m2({
  setCountCheater: e,
  setCountMoghalled: t,
  countMehraban: n,
  setCountMehraban: r,
  setCountKargah: o,
  setCountRandom: i,
  countMoghalled: s,
  countCheater: l,
  countRandom: a,
  countKargah: u,
  collab: c,
  collab2: d,
  cheat: f,
  cheat2: m,
  setCollab: b,
  setCheat: w,
  setCheat2: P,
  setCollab2: g,
}) {
  return O.jsx("div", {
    className: "flex w-full flex-col",
    children: O.jsxs(o2, {
      classNames: { tab: "items-baseline", panel: "w-[420px]" },
      color: "warning",
      "aria-label": "Options",
      children: [
        O.jsx(
          Wa,
          {
            title: "تعداد",
            children: O.jsx(Ba, {
              children: O.jsx(za, {
                children: O.jsxs("div", {
                  className: "flex flex-col gap-8",
                  children: [
                    O.jsxs("div", {
                      className: "flex w-full gap-4",
                      children: [
                        O.jsxs("div", {
                          className: "w-full",
                          children: [
                            O.jsx("div", { children: "مقلد" }),
                            O.jsx("div", {
                              children: O.jsx(an, {
                                showTooltip: !0,
                                step: 1,
                                maxValue: 15,
                                minValue: 0,
                                marks: [
                                  { value: 5, label: "5" },
                                  { value: 10, label: "10" },
                                  { value: 15, label: "15" },
                                ],
                                value: s,
                                defaultValue: 3,
                                onChange: (h) => {
                                  t(h);
                                },
                              }),
                            }),
                          ],
                        }),
                        O.jsxs("div", {
                          className: "w-full",
                          children: [
                            O.jsx("div", { children: "متقلب" }),
                            O.jsx("div", {
                              children: O.jsx(an, {
                                showTooltip: !0,
                                step: 1,
                                maxValue: 15,
                                minValue: 0,
                                marks: [
                                  { value: 5, label: "5" },
                                  { value: 10, label: "10" },
                                  { value: 15, label: "15" },
                                ],
                                value: l,
                                defaultValue: 3,
                                color: "secondary",
                                onChange: (h) => {
                                  e(h);
                                },
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className: "flex w-full gap-4",
                      children: [
                        O.jsxs("div", {
                          className: "w-full",
                          children: [
                            O.jsx("div", { children: "مهربان" }),
                            O.jsx("div", {
                              children: O.jsx(an, {
                                showTooltip: !0,
                                step: 1,
                                maxValue: 15,
                                minValue: 0,
                                marks: [
                                  { value: 5, label: "5" },
                                  { value: 10, label: "10" },
                                  { value: 15, label: "15" },
                                ],
                                defaultValue: 3,
                                value: n,
                                color: "warning",
                                onChange: (h) => {
                                  r(h);
                                },
                              }),
                            }),
                          ],
                        }),
                        O.jsxs("div", {
                          className: "w-full",
                          children: [
                            O.jsx("div", { children: "کارگاه" }),
                            O.jsx("div", {
                              children: O.jsx(an, {
                                showTooltip: !0,
                                step: 1,
                                maxValue: 15,
                                minValue: 0,
                                marks: [
                                  { value: 5, label: "5" },
                                  { value: 10, label: "10" },
                                  { value: 15, label: "15" },
                                ],
                                defaultValue: 3,
                                color: "danger",
                                value: u,
                                onChange: (h) => {
                                  o(h);
                                },
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    O.jsx("div", {
                      className: "flex w-full gap-4",
                      children: O.jsxs("div", {
                        className: "w-full",
                        children: [
                          O.jsx("div", { children: "رندوم" }),
                          O.jsx("div", {
                            children: O.jsx(an, {
                              showTooltip: !0,
                              step: 1,
                              maxValue: 15,
                              minValue: 0,
                              marks: [
                                { value: 5, label: "5" },
                                { value: 10, label: "10" },
                                { value: 15, label: "15" },
                              ],
                              defaultValue: 3,
                              value: a,
                              color: "success",
                              onChange: (h) => {
                                i(h);
                              },
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          },
          "photos"
        ),
        O.jsx(
          Wa,
          {
            title: "هزینه",
            children: O.jsx(Ba, {
              children: O.jsx(za, {
                children: O.jsxs("div", {
                  className: "z-10",
                  children: [
                    O.jsx("img", { src: "/pay.png", width: 400, height: 400 }),
                    O.jsxs("div", {
                      className:
                        "flex flex-col justify-center items-center absolute top-[70px] left-[160px]",
                      children: [
                        O.jsx("div", {
                          onClick: () => {
                            b(c + 1);
                          },
                          className:
                            "text-2xl rotate-180 text-left cursor-pointer",
                          children: "⌵",
                        }),
                        O.jsx("div", {
                          className: "flex",
                          children: O.jsx("div", { children: c }),
                        }),
                        O.jsx("div", {
                          onClick: () => {
                            b(c - 1);
                          },
                          className: "text-2xl cursor-pointer",
                          children: "⌵",
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className:
                        "flex flex-col justify-center items-center absolute top-[70px] left-[230px]",
                      children: [
                        O.jsx("div", {
                          className: "text-2xl rotate-180 text-left",
                          children: "⌵",
                        }),
                        O.jsx("div", {
                          className: "flex",
                          children: O.jsx("div", { children: c }),
                        }),
                        O.jsx("div", {
                          className: "text-2xl cursor-pointer",
                          children: "⌵",
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className:
                        "flex flex-col justify-center items-center absolute top-[160px] left-[70px]",
                      children: [
                        O.jsx("div", {
                          onClick: () => {
                            g(d + 1);
                          },
                          className: "text-2xl rotate-180 text-left",
                          children: "⌵",
                        }),
                        O.jsx("div", {
                          className: "flex",
                          children: O.jsx("div", { children: d }),
                        }),
                        O.jsx("div", {
                          onClick: () => {
                            g(d - 1);
                          },
                          className: "text-2xl",
                          children: "⌵",
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className:
                        "flex flex-col justify-center items-center absolute top-[160px] left-[120px]",
                      children: [
                        O.jsx("div", {
                          onClick: () => {
                            P(m + 1);
                          },
                          className:
                            "text-2xl rotate-180 text-left cursor-pointer",
                          children: "⌵",
                        }),
                        O.jsx("div", {
                          className: "flex",
                          children: O.jsx("div", { children: m }),
                        }),
                        O.jsx("div", {
                          onClick: () => {
                            P(m - 1);
                          },
                          className: "text-2xl cursor-pointer",
                          children: "⌵",
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className:
                        "flex flex-col justify-center items-center absolute top-[160px] left-[270px]",
                      children: [
                        O.jsx("div", {
                          onClick: () => {
                            P(m + 1);
                          },
                          className:
                            "text-2xl rotate-180 text-left cursor-pointer",
                          children: "⌵",
                        }),
                        O.jsx("div", {
                          className: "flex",
                          children: O.jsx("div", { children: m }),
                        }),
                        O.jsx("div", {
                          onClick: () => {
                            P(m - 1);
                          },
                          className: "text-2xl cursor-pointer",
                          children: "⌵",
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className:
                        "flex flex-col justify-center items-center absolute top-[160px] left-[320px]",
                      children: [
                        O.jsx("div", {
                          onClick: () => {
                            g(d + 1);
                          },
                          className:
                            "text-2xl rotate-180 text-left cursor-pointer",
                          children: "⌵",
                        }),
                        O.jsx("div", {
                          className: "flex",
                          children: O.jsx("div", { children: d }),
                        }),
                        O.jsx("div", {
                          onClick: () => {
                            g(d - 1);
                          },
                          className: "text-2xl cursor-pointer",
                          children: "⌵",
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className:
                        "flex flex-col justify-center items-center absolute top-[260px] left-[160px]",
                      children: [
                        O.jsx("div", {
                          onClick: () => {
                            w(f + 1);
                          },
                          className: "text-2xl rotate-180 text-left",
                          children: "⌵",
                        }),
                        O.jsx("div", {
                          className: "flex",
                          children: O.jsx("div", { children: f }),
                        }),
                        O.jsx("div", {
                          onClick: () => {
                            w(f - 1);
                          },
                          className: "text-2xl cursor-pointer",
                          children: "⌵",
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className:
                        "flex flex-col justify-center items-center absolute top-[260px] left-[230px]",
                      children: [
                        O.jsx("div", {
                          onClick: () => {
                            w(f + 1);
                          },
                          className:
                            "text-2xl rotate-180 text-left cursor-pointer",
                          children: "⌵",
                        }),
                        O.jsx("div", {
                          className: "flex",
                          children: O.jsx("div", { children: f }),
                        }),
                        O.jsx("div", {
                          onClick: () => {
                            w(f - 1);
                          },
                          className: "text-2xl cursor-pointer",
                          children: "⌵",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          },
          "music"
        ),
        O.jsx(
          Wa,
          {
            title: "قوانین",
            children: O.jsx(Ba, {
              children: O.jsx(za, {
                children: O.jsxs("div", {
                  className: "flex flex-col w-full gap-4",
                  children: [
                    O.jsxs("div", {
                      className: "w-full",
                      children: [
                        O.jsx("div", { children: "مقلد" }),
                        O.jsx("div", {
                          children: O.jsx(an, {
                            showTooltip: !0,
                            step: 1,
                            maxValue: 25,
                            minValue: 0,
                            marks: [
                              { value: 5, label: "5" },
                              { value: 15, label: "15" },
                              { value: 25, label: "25" },
                            ],
                            defaultValue: 3,
                          }),
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className: "w-full",
                      children: [
                        O.jsx("div", { children: "متقلب" }),
                        O.jsx("div", {
                          children: O.jsx(an, {
                            showTooltip: !0,
                            step: 1,
                            maxValue: 25,
                            minValue: 0,
                            marks: [
                              { value: 5, label: "5" },
                              { value: 15, label: "15" },
                              { value: 25, label: "25" },
                            ],
                            defaultValue: 3,
                            color: "secondary",
                          }),
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className: "w-full",
                      children: [
                        O.jsx("div", { children: "متقلب" }),
                        O.jsx("div", {
                          children: O.jsx(an, {
                            showTooltip: !0,
                            step: 1,
                            maxValue: 25,
                            minValue: 0,
                            marks: [
                              { value: 5, label: "5" },
                              { value: 15, label: "15" },
                              { value: 25, label: "25" },
                            ],
                            defaultValue: 3,
                            color: "warning",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          },
          "videos"
        ),
      ],
    }),
  });
}
function g2() {
  const [e, t] = S.useState(3),
    [n, r] = S.useState(3),
    [o, i] = S.useState(3),
    [s, l] = S.useState(3),
    [a, u] = S.useState(3),
    [c, d] = S.useState(2),
    [f, m] = S.useState(3),
    [b, w] = S.useState(-1),
    [P, g] = S.useState(0);
  let h = [];
  function v(C) {
    for (var y = C.length, T = 0; T < y - 1; T++)
      for (var D = 0; D < y - 1 - T; D++)
        if (C[D].count < C[D + 1].count) {
          var _ = C[D];
          (C[D] = C[D + 1]), (C[D + 1] = _);
        }
    let U = 0,
      H = 0;
    for (; U <= 4; ) (H += C[U].count), U++;
    let Q = [];
    for (; H != 15; ) {
      if (H < 15 && C[0].count > 0)
        switch (((C[0].count += 1), H++, C[0].name)) {
          case "a":
            t(e + 1);
            break;
          case "b":
            r(n + 1);
            break;
          case "c":
            i(o + 1);
            break;
          case "d":
            l(s + 1);
            break;
          case "e":
            u(a + 1);
            break;
        }
      if (H > 15) {
        if (C[C.length - 1].count > 0) {
          switch (((C[C.length - 1].count -= 1), C[C.length - 1].name)) {
            case "a":
              t(e - 1);
              break;
            case "b":
              r(n - 1);
              break;
            case "c":
              i(o - 1);
              break;
            case "d":
              l(s - 1);
              break;
            case "e":
              u(a - 1);
              break;
          }
          H--;
        } else if (C[C.length - 1].count <= 0)
          switch (
            (C.pop(), (C[C.length - 1].count -= 1), H--, C[C.length - 1].name)
          ) {
            case "a":
              t(e - 1);
              break;
            case "b":
              r(n - 1);
              break;
            case "c":
              i(o - 1);
              break;
            case "d":
              l(s - 1);
              break;
            case "e":
              u(a - 1);
              break;
          }
      }
    }
    if (H == 15)
      for (var T = 0; T < C.length; T++) {
        let Y = C[T].count;
        for (; Y > 0; ) Q.push(C[T].name), Y--;
      }
    return (h = Q), Q;
  }
  S.useEffect(() => {
    const C = document.querySelector(".container1"),
      y = 15,
      T = 150,
      D = (2 * Math.PI) / y;
    let _ = e,
      U = n,
      H = o,
      Q = s,
      Z = a;
    C.innerHTML = "";
    const Y = [];
    Y.push({ name: "a", count: _ }),
      Y.push({ name: "b", count: U }),
      Y.push({ name: "c", count: H }),
      Y.push({ name: "d", count: Q }),
      Y.push({ name: "e", count: Z });
    const te = v(Y);
    for (let xe = 0; xe < 15; xe++) {
      const Se = xe * D,
        ve = T * Math.cos(Se) + C.offsetWidth / 2,
        Ye = T * Math.sin(Se) + C.offsetHeight / 2,
        Be = document.createElement("div"),
        Pe = document.createElement("span"),
        Ve = document.createElement("img");
      (Pe.innerText = 100),
        Be.setAttribute("class", "flex"),
        te[xe] == "a"
          ? (Ve.src = "./img/moghalled.png")
          : te[xe] == "b"
          ? (Ve.src = "./img/mehraban.png")
          : te[xe] == "c"
          ? (Ve.src = "./img/cheater.png")
          : te[xe] == "d"
          ? (Ve.src = "./img/kargah.png")
          : te[xe] == "e" && (Ve.src = "./img/random.png"),
        Be.setAttribute("class", "imgCircle"),
        (Be.style.left = ve - Ve.width / 2 + "px"),
        (Be.style.top = Ye - Ve.height / 2 + "px"),
        Be.appendChild(Ve),
        Be.appendChild(Pe),
        C.appendChild(Be);
    }
  }, [n, a, s, o, e]);
  function E() {
    let C = 0,
      y = document.getElementById("show");
    for (let T = 0; T < h.length; T++) {
      let D = h;
      for (let _ = 0; _ < D.length; _++)
        h[T] == "a" && D[_] == "a"
          ? (C += L())
          : h[T] == "a" && D[_] == "b"
          ? (C += N("m"))
          : h[T] == "a" && D[_] == "c"
          ? (C += M("m"))
          : h[T] == "a" && D[_] == "d"
          ? (C += p("m"))
          : h[T] == "a" && D[_] == "e"
          ? (C += R("m"))
          : h[T] == "b" && D[_] == "b"
          ? (C += k())
          : h[T] == "b" && D[_] == "c"
          ? (C += $("me"))
          : h[T] == "b" && D[_] == "d"
          ? (C += K("me"))
          : h[T] == "b" && D[_] == "e"
          ? (C += j("me"))
          : h[T] == "b" && D[_] == "a"
          ? (C += N("me"))
          : h[T] == "c" && D[_] == "c"
          ? (C += A())
          : h[T] == "c" && D[_] == "d"
          ? (C += I("c"))
          : h[T] == "c" && D[_] == "b"
          ? (C += $("c"))
          : h[T] == "c" && D[_] == "a"
          ? (C += M("c"))
          : h[T] == "c" && D[_] == "e"
          ? (C += x("c"))
          : h[T] == "d" && D[_] == "d"
          ? (C += V())
          : h[T] == "d" && D[_] == "e"
          ? (C += F("k"))
          : h[T] == "d" && D[_] == "a"
          ? (C += p("k"))
          : h[T] == "d" && D[_] == "b"
          ? (C += K("k"))
          : h[T] == "d" && D[_] == "c"
          ? (C += I("k"))
          : h[T] == "e" && D[_] == "a"
          ? (C += R("r"))
          : h[T] == "e" && D[_] == "b"
          ? (C += j("r"))
          : h[T] == "e" && D[_] == "c"
          ? (C += x("r"))
          : h[T] == "e" && D[_] == "d"
          ? (C += F("r"))
          : h[T] == "e" && D[_] == "e" && (C += z());
      h[T] === "a" &&
        (console.log("Moghalled::: ", C),
        (y.innerHTML += "Moghalled : " + C + "<br />")),
        h[T] === "b" &&
          (console.log("Mehraban::: ", C),
          (y.innerHTML += "Mehraban : " + C + "<br />")),
        h[T] === "c" &&
          (console.log("Cheater::: ", C),
          (y.innerHTML += "Cheater : " + C + "<br />")),
        h[T] === "d" &&
          (console.log("Kargah::: ", C),
          (y.innerHTML += "Kargah : " + C + "<br />")),
        h[T] === "e" &&
          (console.log("Random::: ", C),
          (y.innerHTML += "Random : " + C + "<br />")),
        (C = 0);
    }
    y.innerHTML += "_____________________________<br />";
  }
  function L() {
    let C = 0;
    for (let y = 0; y < 5; y++) C += c;
    return C;
  }
  function M(C) {
    let y = 0,
      T = 0;
    for (let D = 0; D < 5; D++)
      D == 0 ? ((y += b), (T += f)) : ((y += P), (T += P));
    return C == "m" ? y : T;
  }
  function N(C) {
    let y = 0,
      T = 0;
    for (let D = 0; D < 5; D++) (y += c), (T += c);
    return C == "m" ? y : T;
  }
  function p(C) {
    let y = 0,
      T = 0;
    for (let D = 0; D < 5; D++)
      D == 0 && ((y += c), (T += c)),
        D == 1 ? ((y += b), (T += f)) : ((y += P), (T += P));
    return C == "m" ? y : T;
  }
  function R(C) {
    let y = 0,
      T = 0,
      D = !0;
    for (let _ = 0; _ < 5; _++) {
      let U = Math.random() < 0.5;
      U && D
        ? ((y += c), (T += c), (D = !0))
        : U && !D
        ? ((y += f), (T += b), (D = !0))
        : !U && D
        ? ((y += b), (T += f), (D = !1))
        : !U && !D && ((y += P), (T += P), (D = !1));
    }
    return C == "m" ? y : T;
  }
  function A() {
    let C = 0;
    for (let y = 0; y < 5; y++) C += P;
    return C;
  }
  function $(C) {
    let y = 0,
      T = 0;
    for (let D = 0; D < 5; D++) (y += f), (T += b);
    return C == "c" ? y : T;
  }
  function I(C) {
    let y = 0,
      T = 0;
    for (let D = 0; D < 5; D++)
      D == 0 ? ((y += f), (T += b)) : ((y += P), (T += P));
    return C == "c" ? y : T;
  }
  function x(C) {
    let y = 0,
      T = 0;
    for (let D = 0; D < 5; D++)
      Math.random() < 0.5 ? ((y += f), (T += b)) : ((y += P), (T += P));
    return C == "c" ? y : T;
  }
  function k() {
    let C = 0;
    for (let y = 0; y < 5; y++) C += c;
    return C;
  }
  function K(C) {
    let y = 0,
      T = 0;
    for (let D = 0; D < 5; D++)
      D == 0 && ((y += c), (T += c)),
        D == 1 && ((y += b), (T += f)),
        D == 2 || D == 3 ? ((y += c), (T += c)) : ((y += b), (T += f));
    return C == "me" ? y : T;
  }
  function j(C) {
    let y = 0,
      T = 0;
    for (let D = 0; D < 5; D++)
      Math.random() < 0.5 ? ((y += c), (T += c)) : ((y += b), (T += f));
    return C == "me" ? y : T;
  }
  function V() {
    let C = 0;
    for (let y = 0; y < 5; y++) y == 0 ? (C += c) : (C += P);
    return C;
  }
  function F(C) {
    let y = 0,
      T = 0,
      D = !0;
    for (let _ = 0; _ < 5; _++) {
      let U = Math.random() < 0.5;
      _ == 0 && P
        ? ((y += c), (T += c))
        : _ == 0 && !P && ((y += b), (T += f), (D = !1)),
        D && U && _ == 1
          ? ((y += f), (T += b))
          : (D && U && _ == 2) || (D && U && _ == 3)
          ? ((y += c), (T += c))
          : D && !U && _ == 1
          ? ((y += P), (T += P), (D = !1))
          : (D && !U && _ == 2) || (D && !U && _ == 3)
          ? ((y += b), (T += f), (D = !1))
          : !D && U && (_ != 1 || _ != 2 || _ != 3 || _ != 0)
          ? ((y += f), (T += b), (D = !1))
          : !D && !U && (_ != 1 || _ != 2 || _ != 3 || _ != 0)
          ? ((y += P), (T += P), (D = !1))
          : D &&
            U &&
            (_ != 1 || _ != 2 || _ != 3 || _ != 0) &&
            ((y += f), (T += b));
    }
    return C == "k" ? y : T;
  }
  function z() {
    let C = 0;
    for (let y = 0; y < 5; y++) {
      let T = Math.random() < 0.5,
        D = Math.random() < 0.5;
      T && D
        ? (C += c)
        : T && !D
        ? (C += b)
        : !T && D
        ? (C += f)
        : !T && !D && (C += P);
    }
    return C;
  }
  return O.jsxs("div", {
    className: "flex justify-center relative top-36 gap-10 w-full",
    children: [
      O.jsx("div", {
        id: "right",
        children: O.jsx("div", { className: "container1" }),
      }),
      O.jsxs("div", {
        id: "left",
        className: "w-[500px]",
        children: [
          O.jsx(m2, {
            setCountCheater: i,
            setCountKargah: l,
            setCountMehraban: r,
            setCountMoghalled: t,
            setCountRandom: u,
            countCheater: o,
            countKargah: s,
            countMoghalled: e,
            countMehraban: n,
            countRandom: a,
            collab: c,
            collab2: f,
            cheat: P,
            cheat2: b,
            setCollab: d,
            setCheat: g,
            setCheat2: w,
            setCollab2: m,
          }),
          O.jsxs("div", {
            className: "w-full flex justify-around",
            children: [
              O.jsx(_a, {
                onClick: () => {
                  i(3), l(3), r(3), t(3), u(3);
                },
                color: "secondary",
                variant: "solid",
                children: "ریست",
              }),
              O.jsx(_a, {
                onClick: () => {
                  E();
                },
                color: "primary",
                variant: "shadow",
                children: "شروع",
              }),
              O.jsx(_a, {
                color: "danger",
                variant: "solid",
                children: "ایست",
              }),
            ],
          }),
          O.jsx("div", {
            id: "show",
            className: "flex w-full bg-slate-400 p-3 rounded-xl",
          }),
        ],
      }),
    ],
  });
}
Ha.createRoot(document.getElementById("root")).render(
  O.jsx(ie.StrictMode, { children: O.jsx(g2, {}) })
);
