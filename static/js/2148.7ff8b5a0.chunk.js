"use strict";(self.webpackChunklayout_jsx=self.webpackChunklayout_jsx||[]).push([[2148],{66212:(e,a,o)=>{o.d(a,{Z:()=>I});var t=o(63366),c=o(87462),l=o(47313),r=o(94146),n=o(21921),i=o(17551),s=o(81171),d=o(46417);const p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var v=o(86983),m=o(91615),u=o(38743),b=o(77342),g=o(17592),h=o(77430),C=o(32298);function y(e){return(0,C.Z)("MuiChip",e)}const f=(0,h.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Z=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],k=(0,g.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e,{color:t,iconColor:c,clickable:l,onDelete:r,size:n,variant:i}=o;return[{["& .".concat(f.avatar)]:a.avatar},{["& .".concat(f.avatar)]:a["avatar".concat((0,m.Z)(n))]},{["& .".concat(f.avatar)]:a["avatarColor".concat((0,m.Z)(t))]},{["& .".concat(f.icon)]:a.icon},{["& .".concat(f.icon)]:a["icon".concat((0,m.Z)(n))]},{["& .".concat(f.icon)]:a["iconColor".concat((0,m.Z)(c))]},{["& .".concat(f.deleteIcon)]:a.deleteIcon},{["& .".concat(f.deleteIcon)]:a["deleteIcon".concat((0,m.Z)(n))]},{["& .".concat(f.deleteIcon)]:a["deleteIconColor".concat((0,m.Z)(t))]},{["& .".concat(f.deleteIcon)]:a["deleteIcon".concat((0,m.Z)(i),"Color").concat((0,m.Z)(t))]},a.root,a["size".concat((0,m.Z)(n))],a["color".concat((0,m.Z)(t))],l&&a.clickable,l&&"default"!==t&&a["clickableColor".concat((0,m.Z)(t),")")],r&&a.deletable,r&&"default"!==t&&a["deletableColor".concat((0,m.Z)(t))],a[i],a["".concat(i).concat((0,m.Z)(t))]]}})((e=>{let{theme:a,ownerState:o}=e;const t="light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300];return(0,c.Z)({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(f.disabled)]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(f.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:t,fontSize:a.typography.pxToRem(12)},["& .".concat(f.avatarColorPrimary)]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},["& .".concat(f.avatarColorSecondary)]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},["& .".concat(f.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},["& .".concat(f.icon)]:(0,c.Z)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,c.Z)({color:a.vars?a.vars.palette.Chip.defaultIconColor:t},"default"!==o.color&&{color:"inherit"})),["& .".concat(f.deleteIcon)]:(0,c.Z)({WebkitTapHighlightColor:"transparent",color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.26)"):(0,i.Fq)(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.4)"):(0,i.Fq)(a.palette.text.primary,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:a.vars?"rgba(".concat(a.vars.palette[o.color].contrastTextChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{["&.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette[o.color].dark}})}),(e=>{let{theme:a,ownerState:o}=e;return(0,c.Z)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&"default"!==o.color&&{["&:hover, &.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette[o.color].dark}})}),(e=>{let{theme:a,ownerState:o}=e;return(0,c.Z)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:a.vars?"1px solid ".concat(a.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[700]),["&.".concat(f.clickable,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette.action.focus},["& .".concat(f.avatar)]:{marginLeft:4},["& .".concat(f.avatarSmall)]:{marginLeft:2},["& .".concat(f.icon)]:{marginLeft:4},["& .".concat(f.iconSmall)]:{marginLeft:2},["& .".concat(f.deleteIcon)]:{marginRight:5},["& .".concat(f.deleteIconSmall)]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(a.vars||a).palette[o.color].main,border:"1px solid ".concat(a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].main,.7)),["&.".concat(f.clickable,":hover")]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(a.palette[o.color].main,a.palette.action.hoverOpacity)},["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / ").concat(a.vars.palette.action.focusOpacity,")"):(0,i.Fq)(a.palette[o.color].main,a.palette.action.focusOpacity)},["& .".concat(f.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})})),S=(0,g.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:o}=e,{size:t}=o;return[a.label,a["label".concat((0,m.Z)(t))]]}})((e=>{let{ownerState:a}=e;return(0,c.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===a.variant&&{paddingLeft:11,paddingRight:11},"small"===a.size&&{paddingLeft:8,paddingRight:8},"small"===a.size&&"outlined"===a.variant&&{paddingLeft:7,paddingRight:7})}));function x(e){return"Backspace"===e.key||"Delete"===e.key}const I=l.forwardRef((function(e,a){const o=(0,b.Z)({props:e,name:"MuiChip"}),{avatar:i,className:s,clickable:g,color:h="default",component:C,deleteIcon:f,disabled:I=!1,icon:w,label:z,onClick:R,onDelete:O,onKeyDown:F,onKeyUp:L,size:D="medium",variant:P="filled",tabIndex:T,skipFocusWhenDisabled:V=!1}=o,M=(0,t.Z)(o,Z),N=l.useRef(null),q=(0,v.Z)(N,a),E=e=>{e.stopPropagation(),O&&O(e)},j=!(!1===g||!R)||g,K=j||O?u.Z:C||"div",W=(0,c.Z)({},o,{component:K,disabled:I,size:D,color:h,iconColor:l.isValidElement(w)&&w.props.color||h,onDelete:!!O,clickable:j,variant:P}),U=(e=>{const{classes:a,disabled:o,size:t,color:c,iconColor:l,onDelete:r,clickable:i,variant:s}=e,d={root:["root",s,o&&"disabled","size".concat((0,m.Z)(t)),"color".concat((0,m.Z)(c)),i&&"clickable",i&&"clickableColor".concat((0,m.Z)(c)),r&&"deletable",r&&"deletableColor".concat((0,m.Z)(c)),"".concat(s).concat((0,m.Z)(c))],label:["label","label".concat((0,m.Z)(t))],avatar:["avatar","avatar".concat((0,m.Z)(t)),"avatarColor".concat((0,m.Z)(c))],icon:["icon","icon".concat((0,m.Z)(t)),"iconColor".concat((0,m.Z)(l))],deleteIcon:["deleteIcon","deleteIcon".concat((0,m.Z)(t)),"deleteIconColor".concat((0,m.Z)(c)),"deleteIcon".concat((0,m.Z)(s),"Color").concat((0,m.Z)(c))]};return(0,n.Z)(d,y,a)})(W),A=K===u.Z?(0,c.Z)({component:C||"div",focusVisibleClassName:U.focusVisible},O&&{disableRipple:!0}):{};let B=null;O&&(B=f&&l.isValidElement(f)?l.cloneElement(f,{className:(0,r.Z)(f.props.className,U.deleteIcon),onClick:E}):(0,d.jsx)(p,{className:(0,r.Z)(U.deleteIcon),onClick:E}));let H=null;i&&l.isValidElement(i)&&(H=l.cloneElement(i,{className:(0,r.Z)(U.avatar,i.props.className)}));let _=null;return w&&l.isValidElement(w)&&(_=l.cloneElement(w,{className:(0,r.Z)(U.icon,w.props.className)})),(0,d.jsxs)(k,(0,c.Z)({as:K,className:(0,r.Z)(U.root,s),disabled:!(!j||!I)||void 0,onClick:R,onKeyDown:e=>{e.currentTarget===e.target&&x(e)&&e.preventDefault(),F&&F(e)},onKeyUp:e=>{e.currentTarget===e.target&&(O&&x(e)?O(e):"Escape"===e.key&&N.current&&N.current.blur()),L&&L(e)},ref:q,tabIndex:V&&I?-1:T,ownerState:W},A,M,{children:[H||_,(0,d.jsx)(S,{className:(0,r.Z)(U.label),ownerState:W,children:z}),B]}))}))},91251:(e,a,o)=>{o.d(a,{Z:()=>l});o(47313);var t=o(81171),c=o(46417);const l=(0,t.Z)((0,c.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);