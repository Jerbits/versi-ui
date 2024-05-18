import './index.css';
import { jsx as i } from "react/jsx-runtime";
import n from "classnames";
const x = {
  H1: "vui-text-2xl sm:vui-text-3xl lg:vui-text-6xl landscape:mobile-landscape:vui-text-lg",
  H2: "vui-text-xl sm:vui-text-2xl lg:vui-text-5xl landscape:mobile-landscape:vui-text-lg",
  H3: "vui-text-lg sm:vui-text-xl lg:vui-text-4xl landscape:mobile-landscape:vui-text-lg",
  H4: "vui-text-lg sm:vui-text-xl lg:vui-text-3xl landscape:mobile-landscape:vui-text-lg",
  H5: "vui-text-base sm:vui-text-lg lg:vui-text-2xl landscape:mobile-landscape:vui-text-lg",
  P: "vui-text-sm sm:vui-text-base lg:vui-text-lg landscape:mobile-landscape:vui-text-lg"
}, c = ({ children: e, classes: s, id: l, size: a = "H1", gradient: t }) => {
  const u = n(
    x[a],
    { "vui-bg-clip-text vui-pb-[4%] vui-text-transparent ": t },
    { "vui-animate-[move_10s_ease_infinite] vui-bg-[length:200%_200%]": t == null ? void 0 : t.isAnimated },
    s
  );
  return /* @__PURE__ */ i("h1", { id: l, className: u, style: t ? { backgroundImage: t.gradientCss } : {}, children: e });
}, v = ({ children: e, classes: s, id: l, size: a = "H2" }) => {
  const t = n(x[a], s);
  return /* @__PURE__ */ i("h2", { id: l, className: t, children: e });
}, g = ({ children: e, classes: s, id: l, size: a = "H3" }) => {
  const t = n(x[a], s);
  return /* @__PURE__ */ i("h3", { id: l, className: t, children: e });
}, m = ({ children: e, classes: s, id: l, size: a = "H4" }) => {
  const t = n(x[a], s);
  return /* @__PURE__ */ i("h4", { id: l, className: t, children: e });
}, o = ({ children: e, classes: s, id: l, size: a = "H5" }) => {
  const t = n(x[a], s);
  return /* @__PURE__ */ i("h5", { id: l, className: t, children: e });
}, p = ({ children: e, classes: s, id: l, size: a = "P" }) => {
  const t = n(x[a], s);
  return /* @__PURE__ */ i("p", { id: l, className: t, children: e });
}, d = ({ children: e, classes: s }) => {
  const l = n(
    "vui-pb-10 vui-text-xs last:vui-pb-0 sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs",
    s
  );
  return /* @__PURE__ */ i("p", { className: l, children: e });
}, b = {
  H1: c,
  H2: v,
  H3: g,
  H4: m,
  H5: o,
  PA: p,
  TAGLINE: d
};
export {
  b as Typography
};
