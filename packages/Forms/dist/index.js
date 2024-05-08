import './index.css';
import { jsxs as a, jsx as e } from "react/jsx-runtime";
import u from "classnames";
const d = ({ label: t, inputType: r, id: i, placeholder: s, inputClasses: l, labelClasses: n }) => {
  const v = u("vui-block vui-text-sm vui-font-medium vui-leading-6 vui-text-gray-900", n), o = u(
    "vui-block vui-w-full vui-rounded-md vui-border-0 vui-py-1.5 vui-text-gray-900 vui-shadow-sm vui-ring-1 vui-ring-inset vui-ring-gray-300",
    "placeholder:vui-text-gray-400 focus:vui-ring-2 focus:vui-ring-inset focus:vui-ring-indigo-600 sm:vui-text-sm sm:vui-leading-6",
    l
  );
  return /* @__PURE__ */ a("div", { children: [
    t && /* @__PURE__ */ e("label", { htmlFor: i, className: v, children: "label" }),
    /* @__PURE__ */ e("div", { className: "vui-mt-2", children: /* @__PURE__ */ e(
      "input",
      {
        type: r,
        name: i,
        id: i,
        className: o,
        placeholder: s
      }
    ) })
  ] });
};
export {
  d as TextField
};
