import './index.css';
import { jsxs as a, jsx as u } from "react/jsx-runtime";
import v from "classnames";
const p = ({
  label: e,
  inputType: r,
  id: i,
  placeholder: s,
  inputClasses: n,
  labelClasses: l,
  onChange: t
}) => {
  const o = v(
    "vui-block vui-pl-1 vui-text-sm vui-font-medium vui-leading-6 vui-text-gray-900",
    l
  ), m = v(
    "vui-block vui-w-full vui-rounded-md vui-border-0 vui-px-2 vui-py-1.5 vui-text-gray-900 vui-shadow-sm",
    "vui-ring-1 vui-ring-gray-300 placeholder:vui-text-gray-400 focus:vui-ring-2 focus:vui-ring-inset focus:vui-ring-blue-600 sm:vui-text-sm sm:vui-leading-6",
    n
  );
  return /* @__PURE__ */ a("div", { children: [
    e && /* @__PURE__ */ u("label", { htmlFor: i, className: o, children: e }),
    /* @__PURE__ */ u("div", { className: "vui-mt-1", children: /* @__PURE__ */ u(
      "input",
      {
        type: r,
        name: i,
        id: i,
        className: m,
        placeholder: s,
        onChange: (c) => {
          typeof t == "function" && t(c);
        }
      }
    ) })
  ] });
};
export {
  p as TextField
};
