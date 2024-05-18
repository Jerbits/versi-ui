(function(r,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("react/jsx-runtime"),require("classnames")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","classnames"],o):(r=typeof globalThis<"u"?globalThis:r||self,o(r.Typography={},r.jsxRuntime,r.cn))})(this,function(r,o,s){"use strict";var d=document.createElement("style");d.textContent=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.vui-flex{display:flex}.vui-animate-\\[move_10s_ease_infinite\\]{animation:move 10s ease infinite}.vui-flex-col{flex-direction:column}.vui-gap-5{gap:1.25rem}.vui-bg-\\[length\\:200\\%_200\\%\\]{background-size:200% 200%}.vui-bg-clip-text{-webkit-background-clip:text;background-clip:text}.vui-pb-10{padding-bottom:2.5rem}.vui-pb-\\[4\\%\\]{padding-bottom:4%}.vui-text-2xl{font-size:1.5rem;line-height:2rem}.vui-text-base{font-size:1rem;line-height:1.5rem}.vui-text-lg{font-size:1.125rem;line-height:1.75rem}.vui-text-sm{font-size:.875rem;line-height:1.25rem}.vui-text-xl{font-size:1.25rem;line-height:1.75rem}.vui-text-xs{font-size:.75rem;line-height:1rem}.vui-font-bold{font-weight:700}.vui-text-transparent{color:transparent}@keyframes move{0%{background-position:10% 0%}50%{background-position:95% 100%}to{background-position:10% 0%}}.last\\:vui-pb-0:last-child{padding-bottom:0}@media (min-width: 640px){.sm\\:vui-text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:vui-text-3xl{font-size:1.875rem;line-height:2.25rem}.sm\\:vui-text-base{font-size:1rem;line-height:1.5rem}.sm\\:vui-text-lg{font-size:1.125rem;line-height:1.75rem}.sm\\:vui-text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\\:vui-text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:vui-text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:vui-text-3xl{font-size:1.875rem;line-height:2.25rem}.lg\\:vui-text-4xl{font-size:2.25rem;line-height:2.5rem}.lg\\:vui-text-5xl{font-size:3rem;line-height:1}.lg\\:vui-text-6xl{font-size:3.75rem;line-height:1}.lg\\:vui-text-lg{font-size:1.125rem;line-height:1.75rem}}@media (orientation: landscape){@media (max-width: 900px){.landscape\\:mobile-landscape\\:vui-text-lg{font-size:1.125rem;line-height:1.75rem}.landscape\\:mobile-landscape\\:vui-text-xs{font-size:.75rem;line-height:1rem}}}
`,document.head.appendChild(d);const l={H1:"vui-text-2xl sm:vui-text-3xl lg:vui-text-6xl landscape:mobile-landscape:vui-text-lg",H2:"vui-text-xl sm:vui-text-2xl lg:vui-text-5xl landscape:mobile-landscape:vui-text-lg",H3:"vui-text-lg sm:vui-text-xl lg:vui-text-4xl landscape:mobile-landscape:vui-text-lg",H4:"vui-text-lg sm:vui-text-xl lg:vui-text-3xl landscape:mobile-landscape:vui-text-lg",H5:"vui-text-base sm:vui-text-lg lg:vui-text-2xl landscape:mobile-landscape:vui-text-lg",P:"vui-text-sm sm:vui-text-base lg:vui-text-lg landscape:mobile-landscape:vui-text-lg"},c={H1:({children:e,classes:i,id:n,size:a="H1",gradient:t})=>{const p=s(l[a],{"vui-bg-clip-text vui-pb-[4%] vui-text-transparent ":t},{"vui-animate-[move_10s_ease_infinite] vui-bg-[length:200%_200%]":t==null?void 0:t.isAnimated},i);return o.jsx("h1",{id:n,className:p,style:t?{backgroundImage:t.gradientCss}:{},children:e})},H2:({children:e,classes:i,id:n,size:a="H2"})=>{const t=s(l[a],i);return o.jsx("h2",{id:n,className:t,children:e})},H3:({children:e,classes:i,id:n,size:a="H3"})=>{const t=s(l[a],i);return o.jsx("h3",{id:n,className:t,children:e})},H4:({children:e,classes:i,id:n,size:a="H4"})=>{const t=s(l[a],i);return o.jsx("h4",{id:n,className:t,children:e})},H5:({children:e,classes:i,id:n,size:a="H5"})=>{const t=s(l[a],i);return o.jsx("h5",{id:n,className:t,children:e})},PA:({children:e,classes:i,id:n,size:a="P"})=>{const t=s(l[a],i);return o.jsx("p",{id:n,className:t,children:e})},TAGLINE:({children:e,classes:i})=>{const n=s("vui-pb-10 vui-text-xs last:vui-pb-0 sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs",i);return o.jsx("p",{className:n,children:e})}};r.Typography=c,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
