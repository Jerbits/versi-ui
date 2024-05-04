import './index.css';
import { jsx as a } from "react/jsx-runtime";
import i from "classnames";
const n = ({ children: t, classes: e }) => {
  const s = i(
    "vui-text-xl",
    "landscape:mobile-landscape:vui-text-xl sm:vui-text-2xl lg:vui-text-3xl vui-mb-5 md:vui-mb-5",
    e
  );
  return /* @__PURE__ */ a("h1", { className: s, children: t });
}, u = ({ children: t, classes: e }) => {
  const s = i(
    "vui-text-lg vui-font-bold",
    "landscape:mobile-landscape:vui-text-lg sm:vui-text-xl lg:vui-text-2xl vui-mb-5 md:vui-mb-5",
    e
  );
  return /* @__PURE__ */ a("h2", { className: s, children: t });
}, o = ({ children: t, classes: e }) => {
  const s = i("vui-text-lg sm:vui-text-4xl vui-font-extrabold", e);
  return /* @__PURE__ */ a("h3", { className: s, children: t });
}, x = ({ children: t, classes: e }) => {
  const s = i("vui-text-base sm:vui-text-2xl vui-font-extrabold", e);
  return /* @__PURE__ */ a("h4", { className: s, children: t });
}, v = ({ children: t, classes: e }) => {
  const s = i(
    "vui-text-2xl",
    "landscape:mobile-landscape:vui-text-lg sm:vui-text-3xl lg:vui-text-6xl",
    e
  );
  return /* @__PURE__ */ a("h4", { className: s, children: t });
}, r = ({ children: t, classes: e }) => {
  const s = i(
    "vui-text-base landscape:mobile-landscape:vui-text-base vui-pb-5  vui-max-w-[1000px]",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, c = ({ children: t, classes: e }) => {
  const s = i(
    "vui-text-sm sm:vui-text-base landscape:mobile-landscape:vui-text-base vui-font-extrabold vui-pb-5 sm:vui-pb-10 last:vui-pb-0",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, m = ({ children: t, classes: e }) => {
  const s = i(
    "vui-text-xs sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs vui-font-extrabold vui-pb-10 last:vui-pb-0",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, p = ({ children: t, classes: e, ...s }) => {
  const l = i("hover:vui-border-b-2 vui-border-oras-pink", e);
  return /* @__PURE__ */ a("a", { ...s, className: l, children: t });
}, g = {
  H1: n,
  H2: u,
  H3: o,
  H4: x,
  H5: v,
  PA: r,
  TOS: c,
  TAGLINE: m,
  LINK: p
};
export {
  g as Typography
};
