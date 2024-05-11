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
}, c = ({ children: t, classes: e, id: s, size: a = "H1", gradient: l }) => {
  const u = n(x[a], { "!vui-bg-clip-text vui-text-transparent vui-pb-[4%]": l }, e);
  return /* @__PURE__ */ i("h1", { id: s, className: u, style: l ? { background: l } : {}, children: t });
}, v = ({ children: t, classes: e, id: s, size: a = "H2" }) => {
  const l = n(x[a], e);
  return /* @__PURE__ */ i("h2", { id: s, className: l, children: t });
}, g = ({ children: t, classes: e, id: s, size: a = "H3" }) => {
  const l = n(x[a], e);
  return /* @__PURE__ */ i("h3", { id: s, className: l, children: t });
}, o = ({ children: t, classes: e, id: s, size: a = "H4" }) => {
  const l = n(x[a], e);
  return /* @__PURE__ */ i("h4", { id: s, className: l, children: t });
}, p = ({ children: t, classes: e, id: s, size: a = "H5" }) => {
  const l = n(x[a], e);
  return /* @__PURE__ */ i("h5", { id: s, className: l, children: t });
}, m = ({ children: t, classes: e, id: s, size: a = "P" }) => {
  const l = n(x[a], e);
  return /* @__PURE__ */ i("p", { id: s, className: l, children: t });
}, r = ({ children: t, classes: e }) => {
  const s = n(
    "vui-pb-10 vui-text-xs last:vui-pb-0 sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs",
    e
  );
  return /* @__PURE__ */ i("p", { className: s, children: t });
}, b = {
  H1: c,
  H2: v,
  H3: g,
  H4: o,
  H5: p,
  PA: m,
  TAGLINE: r
};
export {
  b as Typography
};
