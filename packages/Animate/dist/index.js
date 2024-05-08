import { jsx as a, Fragment as f } from "react/jsx-runtime";
import { useState as h } from "react";
import w from "classnames";
import { easings as i, useSpring as x, animated as R } from "@react-spring/web";
import { useInView as v } from "react-intersection-observer";
const m = (t, e = 0, o = !1) => ({
  opacity: t ? 1 : 0,
  x: t ? 0 : o ? 50 : -50,
  delay: e,
  config: {
    duration: 200,
    easing: i.easeOutCirc
  }
}), u = (t, e = 0, o = !1) => ({
  opacity: t ? 1 : 0,
  y: t ? 0 : o ? 20 : -20,
  delay: e,
  config: {
    duration: 500,
    easing: i.easeOutCirc
  }
}), A = (t, e = 0) => ({
  opacity: t ? 1 : 0,
  transform: `scale(${t ? 1 : 0})`,
  delay: e,
  config: {
    duration: 200,
    easing: i.easeOutCirc
  }
}), I = (t, e = 0) => ({
  opacity: t ? 1 : 0,
  delay: e,
  config: {
    duration: 300,
    easing: i.easeOutCirc
  }
}), n = (t, e) => ({ children: r, classes: p, animationFlag: s, delay: g = 0, unmount: l = !1 }) => {
  const [d, c] = h(!0), { ref: C, inView: y } = v({
    triggerOnce: !0,
    threshold: 0
  }), S = w(p, {
    "!vui-hidden": !d && l
    // hide the component with CSS versus un-mounting to prevent re-rendering of hooks
  }), O = x({
    ...t(s ?? y, g, e),
    onStart: () => s && c(!0),
    onRest: () => !s && c(!1)
  });
  return r ? /* @__PURE__ */ a(f, { children: /* @__PURE__ */ a(R.div, { ref: C, className: S, style: O, children: r }) }) : /* @__PURE__ */ a(f, {});
}, P = {
  Left: n(m, !1),
  Right: n(m, !0),
  Up: n(u, !0),
  Down: n(u, !1),
  Opacity: n(I, !1),
  Scale: n(A, !1)
};
export {
  P as Animate
};
