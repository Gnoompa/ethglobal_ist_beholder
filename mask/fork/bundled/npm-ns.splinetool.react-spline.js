"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4172],{

/***/ 62650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ zr)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _splinetool_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34511);


var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fe = {}, yr = {
  get exports() {
    return fe;
  },
  set exports(n) {
    fe = n;
  }
}, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function hr() {
  if (De)
    return z;
  De = 1;
  var n = react__WEBPACK_IMPORTED_MODULE_0__, f = Symbol.for("react.element"), m = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(d, c, T) {
    var v, b = {}, O = null, C = null;
    T !== void 0 && (O = "" + T), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (C = c.ref);
    for (v in c)
      E.call(c, v) && !j.hasOwnProperty(v) && (b[v] = c[v]);
    if (d && d.defaultProps)
      for (v in c = d.defaultProps, c)
        b[v] === void 0 && (b[v] = c[v]);
    return { $$typeof: f, type: d, key: O, ref: C, props: b, _owner: R.current };
  }
  return z.Fragment = m, z.jsx = _, z.jsxs = _, z;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Er() {
  return We || (We = 1,  false && 0), q;
}
(function(n) {
   true ? n.exports = hr() : 0;
})(yr);
const ce = fe.jsx;
var Rr = "Expected a function", $e = 0 / 0, _r = "[object Symbol]", Tr = /^\s+|\s+$/g, Sr = /^[-+]0x[0-9a-f]+$/i, Or = /^0b[01]+$/i, wr = /^0o[0-7]+$/i, jr = parseInt, Cr = typeof Z == "object" && Z && Z.Object === Object && Z, Pr = typeof self == "object" && self && self.Object === Object && self, xr = Cr || Pr || Function("return this")(), kr = Object.prototype, Ar = kr.toString, Fr = Math.max, Ir = Math.min, ue = function() {
  return xr.Date.now();
};
function Dr(n, f, m) {
  var E, R, j, _, d, c, T = 0, v = !1, b = !1, O = !0;
  if (typeof n != "function")
    throw new TypeError(Rr);
  f = Le(f) || 0, le(m) && (v = !!m.leading, b = "maxWait" in m, j = b ? Fr(Le(m.maxWait) || 0, f) : j, O = "trailing" in m ? !!m.trailing : O);
  function C(p) {
    var I = E, L = R;
    return E = R = void 0, T = p, _ = n.apply(L, I), _;
  }
  function A(p) {
    return T = p, d = setTimeout(y, f), v ? C(p) : _;
  }
  function F(p) {
    var I = p - c, L = p - T, U = f - I;
    return b ? Ir(U, j - L) : U;
  }
  function P(p) {
    var I = p - c, L = p - T;
    return c === void 0 || I >= f || I < 0 || b && L >= j;
  }
  function y() {
    var p = ue();
    if (P(p))
      return s(p);
    d = setTimeout(y, F(p));
  }
  function s(p) {
    return d = void 0, O && E ? C(p) : (E = R = void 0, _);
  }
  function D() {
    d !== void 0 && clearTimeout(d), T = 0, E = c = R = d = void 0;
  }
  function x() {
    return d === void 0 ? _ : s(ue());
  }
  function S() {
    var p = ue(), I = P(p);
    if (E = arguments, R = this, c = p, I) {
      if (d === void 0)
        return A(c);
      if (b)
        return d = setTimeout(y, f), C(c);
    }
    return d === void 0 && (d = setTimeout(y, f)), _;
  }
  return S.cancel = D, S.flush = x, S;
}
function le(n) {
  var f = typeof n;
  return !!n && (f == "object" || f == "function");
}
function Wr(n) {
  return !!n && typeof n == "object";
}
function $r(n) {
  return typeof n == "symbol" || Wr(n) && Ar.call(n) == _r;
}
function Le(n) {
  if (typeof n == "number")
    return n;
  if ($r(n))
    return $e;
  if (le(n)) {
    var f = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = le(f) ? f + "" : f;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(Tr, "");
  var m = Or.test(n);
  return m || wr.test(n) ? jr(n.slice(2), m ? 2 : 8) : Sr.test(n) ? $e : +n;
}
var Lr = Dr;
function Yr(n) {
  return (f) => {
    n.forEach((m) => {
      typeof m == "function" ? m(f) : m != null && (m.current = f);
    });
  };
}
const Nr = [], Mr = { width: "100%", height: "100%" }, Ur = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function({
  className: f,
  children: m,
  debounceTime: E = 300,
  ignoreDimensions: R = Nr,
  parentSizeStyles: j,
  enableDebounceLeadingCall: _ = !0,
  resizeObserverPolyfill: d,
  ...c
}, T) {
  const v = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null), b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0), [O, C] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), A = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const F = Array.isArray(R) ? R : [R];
    return Lr(
      (P) => {
        C((y) => Object.keys(y).filter(
          (S) => y[S] !== P[S]
        ).every(
          (S) => F.includes(S)
        ) ? y : P);
      },
      E,
      { leading: _ }
    );
  }, [E, _, R]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const F = d || window.ResizeObserver, P = new F((y) => {
      y.forEach((s) => {
        const { left: D, top: x, width: S, height: p } = (s == null ? void 0 : s.contentRect) ?? {};
        b.current = window.requestAnimationFrame(() => {
          A({ width: S, height: p, top: x, left: D });
        });
      });
    });
    return v.current && P.observe(v.current), () => {
      window.cancelAnimationFrame(b.current), P.disconnect(), A.cancel();
    };
  }, [A, d]), /* @__PURE__ */ ce(
    "div",
    {
      style: { ...Mr, ...j },
      ref: Yr([T, v]),
      className: f,
      ...c,
      children: m({
        ...O,
        ref: v.current,
        resize: A
      })
    }
  );
}), zr = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    scene: n,
    style: f,
    onMouseDown: m,
    onMouseUp: E,
    onMouseHover: R,
    onKeyDown: j,
    onKeyUp: _,
    onStart: d,
    onLookAt: c,
    onFollow: T,
    onWheel: v,
    onLoad: b,
    renderOnDemand: O = !0,
    ...C
  }, A) => {
    const F = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null), [P, y] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      y(!0);
      let s;
      const D = [
        {
          name: "mouseDown",
          cb: m
        },
        {
          name: "mouseUp",
          cb: E
        },
        {
          name: "mouseHover",
          cb: R
        },
        {
          name: "keyDown",
          cb: j
        },
        {
          name: "keyUp",
          cb: _
        },
        {
          name: "start",
          cb: d
        },
        {
          name: "lookAt",
          cb: c
        },
        {
          name: "follow",
          cb: T
        },
        {
          name: "scroll",
          cb: v
        }
      ];
      if (F.current) {
        s = new _splinetool_runtime__WEBPACK_IMPORTED_MODULE_1__/* .Application */ .M(F.current, { renderOnDemand: O });
        async function x() {
          await s.load(n);
          for (let S of D)
            S.cb && s.addEventListener(S.name, S.cb);
          y(!1), b == null || b(s);
        }
        x();
      }
      return () => {
        for (let x of D)
          x.cb && s.removeEventListener(x.name, x.cb);
        s.dispose();
      };
    }, [n]), /* @__PURE__ */ ce(
      Ur,
      {
        ref: A,
        parentSizeStyles: f,
        debounceTime: 50,
        ...C,
        children: () => /* @__PURE__ */ ce(
          "canvas",
          {
            ref: F,
            style: {
              display: P ? "none" : "block"
            }
          }
        )
      }
    );
  }
);



/***/ })

}]);
//# sourceMappingURL=npm-ns.splinetool.react-spline.js.map