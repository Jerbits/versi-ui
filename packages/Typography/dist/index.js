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
}, c = ({ children: t, classes: e, id: s, size: l = "H1" }) => {
  const a = n(x[l], e);
  return /* @__PURE__ */ i("h1", { id: s, className: a, children: t });
}, u = ({ children: t, classes: e, id: s, size: l = "H2" }) => {
  const a = n(x[l], e);
  return /* @__PURE__ */ i("h2", { id: s, className: a, children: t });
}, g = ({ children: t, classes: e, id: s, size: l = "H3" }) => {
  const a = n(x[l], e);
  return /* @__PURE__ */ i("h3", { id: s, className: a, children: t });
}, v = ({ children: t, classes: e, id: s, size: l = "H4" }) => {
  const a = n(x[l], e);
  return /* @__PURE__ */ i("h4", { id: s, className: a, children: t });
}, o = ({ children: t, classes: e, id: s, size: l = "H5" }) => {
  const a = n(x[l], e);
  return /* @__PURE__ */ i("h5", { id: s, className: a, children: t });
}, m = ({ children: t, classes: e, id: s, size: l = "P" }) => {
  const a = n(x[l], e);
  return /* @__PURE__ */ i("p", { id: s, className: a, children: t });
}, p = ({ children: t, classes: e }) => {
  const s = n(
    "vui-pb-10 vui-text-xs last:vui-pb-0 sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs",
    e
  );
  return /* @__PURE__ */ i("p", { className: s, children: t });
}, H = {
  H1: c,
  H2: u,
  H3: g,
  H4: v,
  H5: o,
  PA: m,
  TAGLINE: p
};
export {
  H as Typography
};
