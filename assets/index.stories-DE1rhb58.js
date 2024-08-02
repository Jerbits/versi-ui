import{j as n}from"./jsx-runtime-DEdD30eg.js";import{h as N,b as _,E as v,u as F,g as w}from"./animations-oImqF5m8.js";import{c as G}from"./index-Cm1LdsEh.js";import{r as m}from"./index-RYns6xqu.js";import"./index-D16Yfzz8.js";const P=()=>{const r=(i,a)=>m.Children.map(i,e=>!m.isValidElement(e)||!e.props.children?typeof e=="string"&&typeof a=="function"?a(e):e:m.cloneElement(e,{...e.props,children:r(e.props.children,a)}));return{updateDeepestChild:r,transformer:({element:i,flag:a,delay:e=0})=>{const p=i.split(""),h=t=>({y:0,opacity:1,delay:t*(100-t*2)}),u=t=>({y:50*(t%2?-1:1),opacity:0}),[d,c]=N(p.length,t=>({from:u(t)}));return m.useEffect(()=>{let t;return a?t=setTimeout(()=>{c(o=>({...h(o)}))},e):c(o=>({...u(o)})),()=>clearTimeout(t)},[a]),typeof i=="string"?d.map(({y:t,opacity:o},l)=>n.jsx(_.span,{className:"vui-inline-block",style:{y:t,opacity:o},children:p[l]===" "?n.jsx(n.Fragment,{children:" "}):p[l]},l)):""}}},Y=({isInterlock:r,yAxisStart:f})=>({applyTextffect:({element:a,flag:e,delay:p=0,duration:h,trail:u,easing:d})=>{const c=a.split(""),t=m.useCallback(s=>({y:0,opacity:1,delay:s*(u-s*2)}),[]),o=m.useCallback(s=>({y:r?f*(s%2?-1:1):f,opacity:0}),[f,r]),[l,T]=N(c.length,s=>({from:o(s),config:{duration:h,easing:v[d]}}));return m.useEffect(()=>{let s;return e?s=setTimeout(()=>{T(x=>({...t(x)}))},p):T(x=>({...o(x)})),()=>clearTimeout(s)},[e]),typeof a=="string"?l.map(({y:s,opacity:x},E)=>n.jsx(_.span,{className:"vui-inline-block",style:{y:s,opacity:x},children:c[E]===" "?n.jsx(n.Fragment,{children:" "}):c[E]},E)):""}}),k=r=>({children:i,classes:a,animationFlag:e,delay:p=0,duration:h=200,trail:u=100,easing:d="linear"})=>{const{updateDeepestChild:c}=P(),{applyTextffect:t}=Y(r),{ref:o,inView:l}=F({triggerOnce:!0,threshold:0}),T=G(a);return i?n.jsx("div",{ref:o,className:T,children:c(i,s=>t({element:s,flag:e??l,delay:p,duration:h,trail:u,easing:d}))}):n.jsx(n.Fragment,{})},$={Interlock:k({isInterlock:!0,yAxisStart:50}),ChainUp:k({isInterlock:!1,yAxisStart:50}),ChainDown:k({isInterlock:!1,yAxisStart:-50})},A=$,W={title:"Example/Animate/Text",component:A.Interlock,argTypes:{easing:{type:"select",options:Object.keys(v)}},parameters:{layout:"centered"}},I={duration:200,trail:100,easing:"linear"},q=r=>n.jsx(A.Interlock,{...r,children:n.jsx(w.H1,{children:"Interlock Text Effect"})}),z=r=>n.jsx(A.ChainUp,{...r,children:n.jsx(w.H1,{children:"ChainUp Text Effect"})}),B=r=>n.jsx(A.ChainDown,{...r,children:n.jsx(w.H1,{children:"ChainDown Text Effect"})}),y=q.bind({});y.args={...I};const g=z.bind({});g.args={...I};const C=B.bind({});C.args={...I};var j,D,H;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`args => <AnimateText.Interlock {...args}>
        <Typography.H1>Interlock Text Effect</Typography.H1>
    </AnimateText.Interlock>`,...(H=(D=y.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var b,O,U;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`args => <AnimateText.ChainUp {...args}>
        <Typography.H1>ChainUp Text Effect</Typography.H1>
    </AnimateText.ChainUp>`,...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var V,S,R;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`args => <AnimateText.ChainDown {...args}>
        <Typography.H1>ChainDown Text Effect</Typography.H1>
    </AnimateText.ChainDown>`,...(R=(S=C.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const X=["InterlockOnView","ChainUpOnView","ChainDownOnView"];export{C as ChainDownOnView,g as ChainUpOnView,y as InterlockOnView,X as __namedExportsOrder,W as default};
