import { jsx as a } from "react/jsx-runtime";
import p from "classnames";
const n = ({ children: t, classes: e }) => {
  const s = p(
    "zp-text-xl",
    "landscape:mobile-landscape:zp-text-xl sm:zp-text-2xl lg:zp-text-3xl zp-mb-5 md:zp-mb-5",
    e
  );
  return /* @__PURE__ */ a("h1", { className: s, children: t });
}, o = ({ children: t, classes: e }) => {
  const s = p(
    "zp-text-lg zp-font-bold",
    "landscape:mobile-landscape:zp-text-lg sm:zp-text-xl lg:zp-text-2xl zp-mb-5 md:zp-mb-5",
    e
  );
  return /* @__PURE__ */ a("h2", { className: s, children: t });
}, x = ({ children: t, classes: e }) => {
  const s = p("zp-text-lg sm:zp-text-4xl zp-font-extrabold", e);
  return /* @__PURE__ */ a("h3", { className: s, children: t });
}, z = ({ children: t, classes: e }) => {
  const s = p("zp-text-base sm:zp-text-2xl zp-font-extrabold", e);
  return /* @__PURE__ */ a("h4", { className: s, children: t });
}, r = ({ children: t, classes: e }) => {
  const s = p(
    "zp-text-2xl",
    "landscape:mobile-landscape:zp-text-lg sm:zp-text-3xl lg:zp-text-6xl",
    e
  );
  return /* @__PURE__ */ a("h4", { className: s, children: t });
}, c = ({ children: t, classes: e }) => {
  const s = p(
    "zp-text-base landscape:mobile-landscape:zp-text-base zp-pb-5 zp- zp-max-w-[1000px]",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, m = ({ children: t, classes: e }) => {
  const s = p(
    "zp-text-sm sm:zp-text-base landscape:mobile-landscape:zp-text-base zp-font-extrabold zp-pb-5 sm:zp-pb-10 last:zp-pb-0",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, d = ({ children: t, classes: e }) => {
  const s = p(
    "zp-text-xs sm:zp-text-base md:zp-text-lg landscape:mobile-landscape:zp-text-xs zp-font-extrabold zp-pb-10 last:zp-pb-0",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, b = ({ children: t, classes: e, ...s }) => {
  const l = p("hover:zp-border-b-2 zp-border-oras-pink", e);
  return /* @__PURE__ */ a("a", { ...s, className: l, children: t });
}, h = {
  H1: n,
  H2: o,
  H3: x,
  H4: z,
  H5: r,
  PA: c,
  TOS: m,
  TAGLINE: d,
  LINK: b
};
export {
  h as Typography
};
