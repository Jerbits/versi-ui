import { jsx as c, Fragment as w } from "react/jsx-runtime";
import { useState as O } from "react";
import R from "classnames";
import { easings as m, useSpring as x, animated as A } from "@react-spring/web";
import { useInView as v } from "react-intersection-observer";
const f = (t, e = 0, i = !1) => ({
  opacity: t ? 1 : 0,
  x: t ? 0 : i ? 50 : -50,
  delay: e,
  config: {
    duration: 200,
    easing: m.easeOutCirc
  }
}), u = (t, e = 0, i = !1) => ({
  opacity: t ? 1 : 0,
  y: t ? 0 : i ? 20 : -20,
  delay: e,
  config: {
    duration: 500,
    easing: m.easeOutCirc
  }
}), D = (t, e = 0) => ({
  opacity: t ? 1 : 0,
  transform: `scale(${t ? 1 : 0})`,
  delay: e,
  config: {
    duration: 200,
    easing: m.easeOutCirc
  }
}), I = (t, e = 0) => ({
  opacity: t ? 1 : 0,
  delay: e,
  config: {
    duration: 300,
    easing: m.easeOutCirc
  }
}), s = (t, e) => ({ children: r, classes: p, animationFlag: n, delay: l = 0, unmount: g = !1 }) => {
  const [d, a] = O(!0), { ref: S, inView: y } = v({
    triggerOnce: !0,
    threshold: 0
  }), C = R(p, {
    "!vui-hidden": !d && g
    // hide the component with CSS versus un-mounting to prevent re-rendering of hooks
  }), h = x({
    ...t(n ?? y, l, e),
    onStart: () => n && a(!0),
    onRest: () => !n && a(!1)
  });
  return r ? /* @__PURE__ */ c(A.div, { ref: S, className: C, style: h, children: r }) : /* @__PURE__ */ c(w, {});
}, U = {
  Left: s(f, !1),
  Right: s(f, !0),
  Up: s(u, !0),
  Down: s(u, !1),
  Opacity: s(I, !1),
  Scale: s(D, !1)
}, o = (t, e) => ({ children: r, classes: p, animationFlag: n, delay: l = 0, unmount: g = !1 }) => {
  const [d, a] = O(!0), { ref: S, inView: y } = v({
    triggerOnce: !0,
    threshold: 0
  }), C = R(p, {
    "!vui-hidden": !d && g
    // hide the component with CSS versus un-mounting to prevent re-rendering of hooks
  }), h = x({
    ...t(n ?? y, l, e),
    onStart: () => n && a(!0),
    onRest: () => !n && a(!1)
  });
  return r ? /* @__PURE__ */ c(A.div, { ref: S, className: C, style: h, children: r }) : /* @__PURE__ */ c(w, {});
}, $ = {
  Left: o(f, !1),
  Right: o(f, !0),
  Up: o(u, !0),
  Down: o(u, !1),
  Opacity: o(I, !1),
  Scale: o(D, !1)
};
export {
  U as AnimateDirection,
  $ as AnimateText
};
