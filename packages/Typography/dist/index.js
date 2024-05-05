import './index.css';
import { jsx as a } from "react/jsx-runtime";
import i from "classnames";
const n = ({ children: t, classes: e, id: s }) => {
  const l = i(
    "vui-text-2xl",
    "sm:vui-text-3xl lg:vui-text-6xl landscape:mobile-landscape:vui-text-lg",
    e
  );
  return /* @__PURE__ */ a("h1", { id: s, className: l, children: t });
}, u = ({ children: t, classes: e }) => {
  const s = i("vui-text-lg vui-font-extrabold sm:vui-text-4xl", e);
  return /* @__PURE__ */ a("h2", { className: s, children: t });
}, x = ({ children: t, classes: e }) => {
  const s = i(
    "vui-mb-5 vui-text-xl ",
    "sm:vui-text-2xl md:vui-mb-5 lg:vui-text-3xl landscape:mobile-landscape:vui-text-xl",
    e
  );
  return /* @__PURE__ */ a("h3", { className: s, children: t });
}, o = ({ children: t, classes: e }) => {
  const s = i("vui-text-base vui-font-extrabold sm:vui-text-2xl", e);
  return /* @__PURE__ */ a("h4", { className: s, children: t });
}, v = ({ children: t, classes: e }) => {
  const s = i(
    "vui-mb-5 vui-text-base vui-font-bold ",
    "sm:vui-text-lg md:vui-mb-5 lg:vui-text-xl landscape:mobile-landscape:vui-text-lg",
    e
  );
  return /* @__PURE__ */ a("h5", { className: s, children: t });
}, c = ({ children: t, classes: e }) => {
  const s = i(
    "vui-max-w-5xl vui-pb-5 vui-text-base",
    "landscape:mobile-landscape:vui-text-base",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, r = ({ children: t, classes: e }) => {
  const s = i(
    "vui-pb-10 vui-text-xs vui-font-extrabold last:vui-pb-0",
    "sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, m = ({ children: t, classes: e, ...s }) => {
  const l = i("vui-border-oras-pink hover:vui-border-b-2", e);
  return /* @__PURE__ */ a("a", { ...s, className: l, children: t });
}, p = {
  H1: n,
  H2: u,
  H3: x,
  H4: o,
  H5: v,
  PA: c,
  TAGLINE: r,
  LINK: m
};
export {
  p as Typography
};
