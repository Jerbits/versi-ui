import './index.css';
import { jsx as a } from "react/jsx-runtime";
import l from "classnames";
const o = ({ children: t, classes: e }) => {
  const s = l(
    "text-xl",
    "landscape:mobile-landscape:text-xl sm:text-2xl lg:text-3xl mb-5 md:mb-5",
    e
  );
  return /* @__PURE__ */ a("h1", { className: s, children: t });
}, x = ({ children: t, classes: e }) => {
  const s = l(
    "text-lg font-bold",
    "landscape:mobile-landscape:text-lg sm:text-xl lg:text-2xl mb-5 md:mb-5",
    e
  );
  return /* @__PURE__ */ a("h2", { className: s, children: t });
}, r = ({ children: t, classes: e }) => {
  const s = l("text-lg sm:text-4xl font-extrabold", e);
  return /* @__PURE__ */ a("h3", { className: s, children: t });
}, c = ({ children: t, classes: e }) => {
  const s = l("text-base sm:text-2xl font-extrabold", e);
  return /* @__PURE__ */ a("h4", { className: s, children: t });
}, m = ({ children: t, classes: e }) => {
  const s = l(
    "text-2xl",
    "landscape:mobile-landscape:text-lg sm:text-3xl lg:text-6xl",
    e
  );
  return /* @__PURE__ */ a("h4", { className: s, children: t });
}, p = ({ children: t, classes: e }) => {
  const s = l(
    "text-base landscape:mobile-landscape:text-base pb-5  max-w-[1000px]",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, d = ({ children: t, classes: e }) => {
  const s = l(
    "text-sm sm:text-base landscape:mobile-landscape:text-base font-extrabold pb-5 sm:pb-10 last:pb-0",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, b = ({ children: t, classes: e }) => {
  const s = l(
    "text-xs sm:text-base md:text-lg landscape:mobile-landscape:text-xs font-extrabold pb-10 last:pb-0",
    e
  );
  return /* @__PURE__ */ a("p", { className: s, children: t });
}, g = ({ children: t, classes: e, ...s }) => {
  const n = l("hover:border-b-2 border-oras-pink", e);
  return /* @__PURE__ */ a("a", { ...s, className: n, children: t });
}, y = {
  H1: o,
  H2: x,
  H3: r,
  H4: c,
  H5: m,
  PA: p,
  TOS: d,
  TAGLINE: b,
  LINK: g
};
export {
  y as Typography
};
