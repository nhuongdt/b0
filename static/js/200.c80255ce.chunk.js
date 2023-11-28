"use strict";(self.webpackChunklayout_jsx=self.webpackChunklayout_jsx||[]).push([[200],{68186:(t,a,e)=>{e.d(a,{Z:()=>o});e(47313);var n=e(35898),i=e(36373),h=e(99881),s=e(46417);function o(t){let{handleClose:a,showAlert:e,type:o=1,title:r=""}=t;return(0,s.jsx)(n.Z,{spacing:2,sx:{width:"100%",zIndex:1e4},children:(0,s.jsx)(i.Z,{open:e,autoHideDuration:3e3,onClose:a,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,s.jsx)(h.Z,{onClose:a,severity:1==o?"success":"error",sx:{width:"100%"},children:r})})})}},142:(t,a,e)=>{e.d(a,{k:()=>s});e(47313);var n=e(17592),i=e(67426),h=e(46417);const s=(0,n.ZP)((t=>(0,h.jsx)(i.Z,{focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,...t})))((t=>{let{theme:a}=t;return{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"dark"===a.palette.mode?"#2ECA45":"var(--color-main)",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===a.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===a.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:a.transitions.create(["background-color"],{duration:500})}}}))},81980:(t,a,e)=>{e.r(a),e.d(a,{default:()=>U});var n=e(47313),i=e(87068),h=e(68186),s=e(93857),o=e(9506),r=e(9019),l=e(61113),d=e(24631),c=e(47131),u=e(35898),g=e(24193),m=e(35045),T=e(2040),C=e(81171),p=e(46417);const x=(0,C.Z)((0,p.jsx)("path",{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"}),"DeleteSweepOutlined"),H=(0,C.Z)([(0,p.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"},"0"),(0,p.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1")],"PrintOutlined");var v=e(71207),y=e(57605);const w=(0,C.Z)((0,p.jsx)("path",{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z"}),"FileUploadOutlined"),D=(0,C.Z)((0,p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44z"}),"PaidOutlined");var b=e(40225),Z=e(89600),N=e(65231),S=e(46734),j=e(33859),f=e(8922),K=e(94469),k=e(33604),M=e(96467),V=e(4117),L=e(48127),P=e(80280),z=e(23208),I=e(64352),F=e(44948),G=e(52028);function B(t){let{defaultVal:a,handleChangeDate:e,props:i}=t;const h=new Date,[s,o]=(0,n.useState)(new Date((0,Z.Z)(h,"yyyy-MM-01")));return(0,n.useEffect)((()=>{P.Z.checkNull(a)?o(null):o(new Date(a))}),[a]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(z._,{dateAdapter:I.H,adapterLocale:G.Z,children:(0,p.jsx)(F.M,{label:null===i||void 0===i?void 0:i.label,slotProps:{textField:{size:"small"}},dayOfWeekFormatter:t=>{if(t.length>2){let a="";switch(t.substring(t.length-1)){case"2":a="Hai";break;case"3":a="Ba";break;case"4":a="T\u01b0";break;case"5":a="N\u0103m";break;case"6":a="S\xe1u";break;case"7":a="B\u1ea3y"}return a}return t},sx:{width:null===i||void 0===i?void 0:i.width,"& .MuiSvgIcon-root":{width:14,height:14}},value:s,onChange:t=>(t=>{"Invalid Date"!==new Date(t).toString()&&(e((0,Z.Z)(new Date(t),"yyyy-MM-dd")),o(t))})(t)})})})}var A=e(7410),E=e(21933),R=e(142),O=e(85905),_=e(21487);function X(t){let{isShow:a,idBrandname:e,onClose:i,objUpdate:s,onSave:o}=t;const[c,m]=(0,n.useState)({id:"",tenantId:"",brandname:"",sdtCuaHang:"",ngayKichHoat:new Date,trangThai:1}),[T,C]=(0,n.useState)({show:!1,type:1,mes:""});(0,n.useEffect)((()=>{a&&(P.Z.checkNull(e)?m({...c,id:"",tenantId:"",brandname:"",sdtCuaHang:"",ngayKichHoat:new Date,trangThai:1}):m((()=>({id:s.id,tenantId:s.tenantId,brandname:s.brandname,sdtCuaHang:s.sdtCuaHang,ngayKichHoat:s.ngayKichHoat,trangThai:s.trangThai,tongTienNap:s.tongTienNap,daSuDung:s.daSuDung,conLai:s.conLai}))))}),[a]);const x=E.Ry().shape({tenantId:E.Z_().required("Vui l\xf2ng ch\u1ecdn tenantname"),brandname:E.Z_().required("Vui l\xf2ng nh\u1eadp t\xean brandname"),sdtCuaHang:E.Z_().required("Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i g\u1eedi tin")});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.Z,{showAlert:T.show,type:T.type,title:T.mes,handleClose:()=>C({show:!1,mes:"",type:1})}),(0,p.jsxs)(K.Z,{open:a,onClose:i,"aria-labelledby":"draggable-dialog-title",maxWidth:"xs",children:[(0,p.jsxs)(k.Z,{className:"modal-title",id:"draggable-dialog-title",children:[P.Z.checkNull(e)?"Th\xeam":"C\u1eadp nh\u1eadt"," brandname"]}),(0,p.jsx)(L.Z,{onClose:i}),(0,p.jsx)(A.J9,{initialValues:c,validationSchema:x,onSubmit:async t=>{const a=await(async t=>!await f.Z.Brandname_CheckExistSDT(t.sdtCuaHang,e)||(C({...T,show:!0,mes:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\xe3 t\u1ed3n t\u1ea1i",type:2}),!1))(t);if(!a)return;P.Z.checkNull(e)&&(t.id=O.i.EMPTY);const n=t;if(P.Z.checkNull(e)){const a=await f.Z.CreateBrandname(t);a.txtTrangThai=1===t.trangThai?"K\xedch ho\u1ea1t":"Ch\u01b0a k\xedch ho\u1ea1t",a.tongTienNap=0,a.daSuDung=0,a.conLai=0,o(a)}else await f.Z.UpdateBrandname(t),n.txtTrangThai=1===t.trangThai?"K\xedch ho\u1ea1t":"Ch\u01b0a k\xedch ho\u1ea1t",n.tongTienNap=s.tongTienNap,n.daSuDung=s.daSuDung,n.conLai=s.conLai,o(n)},enableReinitialize:!0,children:t=>{let{isSubmitting:a,handleChange:e,values:n,errors:h,touched:s,setFieldValue:o}=t;return(0,p.jsxs)(A.l0,{children:[(0,p.jsx)(M.Z,{sx:{overflow:"unset"},children:(0,p.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:(0,p.jsxs)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,p.jsx)(l.Z,{variant:"body2",children:"K\xedch ho\u1ea1t"}),(0,p.jsx)(R.k,{sx:{m:1},value:n.trangThai,checked:1==parseInt(n.trangThai),onChange:()=>{const t=1==n.trangThai?0:1;o("trangThai",t)}})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(_.Z,{type:"tenant",label:"Ch\u1ecdn tenant",idChosed:n.tenantId,handleChoseItem:t=>{o("tenantId",t.id)},helperText:s.tenantId&&h.tenantId,err:h.tenantId})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:(0,p.jsx)(d.Z,{variant:"outlined",size:"small",name:"brandname",fullWidth:!0,autoFocus:!0,label:"T\xean brandname *",onChange:e,value:n.brandname,helperText:s.brandname&&h.brandname&&(0,p.jsx)("span",{children:h.brandname})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:(0,p.jsx)(d.Z,{variant:"outlined",size:"small",name:"sdtCuaHang",fullWidth:!0,label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:e,value:n.sdtCuaHang,helperText:s.sdtCuaHang&&h.sdtCuaHang&&(0,p.jsx)("span",{children:h.sdtCuaHang})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:(0,p.jsx)(B,{label:"Ng\xe0y k\xedch ho\u1ea1t",props:{width:"100%",label:"Ng\xe0y k\xedch ho\u1ea1t"},defaultVal:n.ngayKichHoat,handleChangeDate:t=>o("ngayKichHoat",t)})})]})}),(0,p.jsxs)(V.Z,{style:{paddingBottom:"20px"},children:[(0,p.jsx)(g.Z,{variant:"outlined",sx:{color:"var(--color-main)"},onClick:i,className:"btn-outline-hover",children:"H\u1ee7y"}),(0,p.jsx)(g.Z,{variant:"contained",sx:{bgcolor:"var(--color-main)!important"},type:"submit",className:"btn-container-hover",children:"L\u01b0u"})]})]})}})]})]})}var Q=e(88200),q=e(66185),W=e(65296);function U(){var t,a;const[e,C]=(0,n.useState)(!1),[K,k]=(0,n.useState)(!1),[M,V]=(0,n.useState)({id:""}),[L,z]=(0,n.useState)({show:!1,type:1,mes:""}),[I,F]=(0,n.useState)([]),[G,B]=(0,n.useState)(0),[A,E]=(0,n.useState)(new s.tf({show:!1})),[R,O]=(0,n.useState)({keyword:"",skipCount:1,maxResultCount:5,sortBy:"createTime",sortType:"DESC"}),[_,U]=(0,n.useState)({items:[]});(0,n.useEffect)((()=>{J()}),[]);const Y=()=>{1!==R.skipCount?O({...R,skipCount:1}):J()},J=async()=>{const t=await f.Z.GetListBandname(R);null!==t&&U({items:t.items,totalCount:t.totalCount,totalPage:t.totalPage})},$=[{field:"brandname",headerName:"T\xean brandname",flex:1,renderHeader:t=>(0,p.jsx)(o.Z,{title:t.value,children:t.colDef.headerName})},{field:"sdtCuaHang",headerName:"SDT c\u1eeda h\xe0ng",flex:1,renderHeader:t=>(0,p.jsx)(o.Z,{title:t.value,children:t.colDef.headerName})},{field:"ngayKichHoat",headerName:"Ng\xe0y k\xedch ho\u1ea1t",headerAlign:"center",align:"center",flex:.8,renderHeader:t=>(0,p.jsx)(o.Z,{title:t.value,children:t.colDef.headerName}),renderCell:t=>(0,p.jsx)(o.Z,{title:t.value,children:(0,Z.Z)(new Date(t.value),"dd/MM/yyyy")})},{field:"tongTienNap",headerName:"T\u1ed5ng ti\u1ec1n n\u1ea1p",headerAlign:"right",align:"right",flex:1,renderHeader:t=>(0,p.jsx)(o.Z,{title:t.value,children:t.colDef.headerName}),renderCell:t=>(0,p.jsx)(o.Z,{title:t.value,children:new Intl.NumberFormat("vi-VN").format(t.value)})},{field:"daSuDung",headerName:"\u0110\xe3 s\u1eed d\u1ee5ng",headerAlign:"right",align:"right",flex:1,renderHeader:t=>(0,p.jsx)(o.Z,{title:t.value,children:t.colDef.headerName}),renderCell:t=>(0,p.jsx)(o.Z,{title:t.value,children:new Intl.NumberFormat("vi-VN").format(t.value)})},{field:"conLai",headerName:"C\xf2n l\u1ea1i",headerAlign:"right",align:"right",flex:1,renderHeader:t=>(0,p.jsx)(o.Z,{title:t.value,children:t.colDef.headerName}),renderCell:t=>(0,p.jsx)(o.Z,{title:t.value,children:new Intl.NumberFormat("vi-VN").format(t.value)})},{field:"txtTrangThai",headerAlign:"center",headerName:"Tr\u1ea1ng th\xe1i",flex:1,renderHeader:t=>(0,p.jsx)(o.Z,{title:t.value,children:t.colDef.headerName}),renderCell:t=>(0,p.jsx)(o.Z,{title:t.value,sx:{padding:"4px 8px",borderRadius:"100px",backgroundColor:3===t.row.trangThai?"#E8FFF3":1===t.row.trangThai?"#FFF8DD":"#FFF5F8",color:3===t.row.trangThai?"#50CD89":1===t.row.trangThai?"#FF9900":"#F1416C",margin:"auto"},className:"state-thanh-toan",children:t.value})},{field:"#",headerAlign:"center",width:48,flex:.4,disableColumnMenu:!0,renderCell:t=>(0,p.jsx)(Q.Z,{lstOption:[{id:"1",text:"S\u1eeda",color:"#009EF7",icon:(0,p.jsx)(v.Z,{sx:{color:"#009EF7"}})},{id:"2",text:"X\xf3a",color:"#F1416C",icon:(0,p.jsx)(y.Z,{sx:{color:"#F1416C"}})}],handleAction:a=>((t,a)=>{switch(t){case 1:C(!0),V(a);break;case 2:E({...A,show:!0,mes:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a brandname ".concat(a.brandname," n\xe0y kh\xf4ng?")})}})(a,t.row)}),renderHeader:t=>(0,p.jsx)(o.Z,{component:"span",children:t.colDef.headerName})}];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.Z,{showAlert:L.show,type:L.type,title:L.mes,handleClose:()=>z({show:!1,mes:"",type:1})}),(0,p.jsx)(i.Z,{isShow:A.show,title:A.title,mes:A.mes,onOk:async()=>{if(I.length>0){switch(G){case 1:{const t=await f.Z.DeleteMultiple_Brandname(I);z(t?{show:!0,type:1,mes:"X\xf3a ".concat(I.length," brandname th\xe0nh c\xf4ng")}:{show:!0,type:2,mes:"X\xf3a ".concat(I.length," brandname th\u1ea5t b\u1ea1i")})}break;case 2:{const t=await f.Z.ActiveMultiple_Brandname(I);z(t?{show:!0,type:1,mes:"K\xedch ho\u1ea1t ".concat(I.length," brandname th\xe0nh c\xf4ng")}:{show:!0,type:2,mes:"K\xedch ho\u1ea1t ".concat(I.length," brandname th\u1ea5t b\u1ea1i")})}}await J()}else{const t=await f.Z.XoaBrandname(M.id);P.Z.checkNull(t)?(z({show:!0,type:1,mes:"X\xf3a ".concat(M.brandname," brandname th\xe0nh c\xf4ng")}),U({..._,items:_.items.filter((t=>t.id!==M.id)),totalCount:_.totalCount-1})):z({show:!0,type:2,mes:"X\xf3a ".concat(M.brandname," brandname th\u1ea5t b\u1ea1i")})}E({...A,show:!1})},onCancel:()=>E({...A,show:!1})}),(0,p.jsx)(X,{isShow:e,onClose:()=>C(!1),idBrandname:M.id,objUpdate:M,onSave:t=>{C(!1),P.Z.checkNull(M.id)?U({..._,items:[t,..._.items],totalCount:_.totalCount+1}):U({..._,items:_.items.map((a=>a.id===t.id?{...a,tenantId:t.tenantId,brandname:t.brandname,sdtCuaHang:t.sdtCuaHang,ngayKichHoat:t.ngayKichHoat,trangThai:t.trangThai,txtTrangThai:t.txtTrangThai}:a))})}}),(0,p.jsx)(W.Z,{visiable:K,idQuyHD:"",onClose:()=>k(!1),onOk:async t=>{k(!1),console.log("saveNapTienBrandname ",t);const a=P.Z.formatNumberToFloat(t.tongTienThu);U({..._,items:_.items.map((e=>e.id===t.idBrandname?{...e,tenantId:t.tenantId,tongTienNap:e.tongTienNap+a,conLai:e.conLai+a}:e))})}}),(0,p.jsxs)(r.ZP,{container:!0,paddingTop:2,children:[(0,p.jsx)(r.ZP,{item:!0,xs:6,children:(0,p.jsxs)(r.ZP,{container:!0,alignItems:"center",children:[(0,p.jsx)(r.ZP,{item:!0,lg:4,children:(0,p.jsx)(l.Z,{className:"page-title",children:"Danh m\u1ee5c brandname"})}),(0,p.jsx)(r.ZP,{item:!0,xs:6,children:(0,p.jsx)(d.Z,{size:"small",fullWidth:!0,sx:{backgroundColor:"#fff",borderColor:"#CDC9CD!important"},className:"search-field",variant:"outlined",type:"search",placeholder:"T\xecm ki\u1ebfm",InputProps:{startAdornment:(0,p.jsx)(c.Z,{type:"button",children:(0,p.jsx)(m.Z,{})})},onChange:t=>O((a=>({...a,keyword:t.target.value}))),onKeyDown:t=>{(t=>{13===t.keyCode&&Y()})(t)}})})]})}),(0,p.jsx)(r.ZP,{item:!0,xs:6,children:(0,p.jsxs)(u.Z,{direction:"row",spacing:1,justifyContent:"end",children:[(0,p.jsx)(g.Z,{size:"small",onClick:async()=>{const t={...R};t.maxResultCount=_.totalCount,t.skipCount=1;const a=await f.Z.ExportToExcel_ListBrandname(t);q.Z.downloadExportFile(a)},variant:"outlined",startIcon:(0,p.jsx)(w,{}),className:"btnNhapXuat btn-outline-hover",sx:{bgcolor:"#fff!important",color:"#666466"},children:"Xu\u1ea5t"}),(0,p.jsx)(g.Z,{variant:"contained",onClick:()=>{C(!0),V({id:""})},startIcon:(0,p.jsx)(T.Z,{}),children:"Th\xeam m\u1edbi"}),(0,p.jsx)(g.Z,{variant:"contained",onClick:()=>{k(!0)},startIcon:(0,p.jsx)(D,{}),children:"N\u1ea1p ti\u1ec1n"})]})}),(0,p.jsxs)(r.ZP,{item:!0,xs:12,children:[I.length>0&&(0,p.jsx)("div",{style:{marginTop:"24px"},children:(0,p.jsx)(N.Z,{lstOption:[{id:"1",text:"X\xf3a brandname",icon:(0,p.jsx)(x,{sx:{width:"1rem",height:"1rem"}})},{id:"2",text:"K\xedch ho\u1ea1t",icon:(0,p.jsx)(H,{sx:{width:"1rem",height:"1rem"}})}],countRowSelected:I.length,title:"brandname",choseAction:async t=>{switch(parseInt(t.id)){case 1:E({...A,show:!0,title:"Th\xf4ng b\xe1o x\xf3a",mes:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a ".concat(I.length," brandname n\xe0y kh\xf4ng?")});break;case 2:E({...A,show:!0,title:"K\xedch ho\u1ea1t",mes:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n k\xedch ho\u1ea1t ".concat(I.length," brandname n\xe0y kh\xf4ng?")})}B(parseInt(t.id))},removeItemChosed:()=>{F([])}})}),(0,p.jsxs)(u.Z,{marginTop:I.length>0?1:5,className:"page-box-right",spacing:1,children:[(0,p.jsx)(b._$,{disableRowSelectionOnClick:!0,className:I.length>0?"data-grid-row-chosed":"data-grid-row",rowHeight:46,autoHeight:0===_.items.length,columns:$,rows:_.items,hideFooter:!0,checkboxSelection:!0,onRowClick:t=>(t=>{V(null===t||void 0===t?void 0:t.row)})(t),localeText:j.g,onRowSelectionModelChange:t=>{F(t)},rowSelectionModel:I}),(0,p.jsx)(S.Z,{currentPage:null!==(t=R.skipCount)&&void 0!==t?t:1,rowPerPage:null!==(a=R.maxResultCount)&&void 0!==a?a:10,totalRecord:_.totalCount,totalPage:_.totalPage,handlePerPageChange:t=>{O({...R,maxResultCount:parseInt(t.target.value.toString(),10)})},handlePageChange:(t,a)=>{O({...R,skipCount:a})}})]})]})]})]})}},9820:(t,a,e)=>{e.d(a,{Z:()=>h});var n=e(85905);class i{constructor(t){let{id:a=n.i.create().toString(),idHoaDon:e=n.i.createEmpty().toString(),idDonViQuyDoi:i=null,soLuong:h=1,donGiaTruocCK:s=0,ptChietKhau:o=0,tienChietKhau:r=0,laPTChietKhau:l=!0,ptThue:d=0,tienThue:c=0,ghiChu:u="",trangThai:g=3}=t;this.id=n.i.create().toString(),this.stt=0,this.idHoaDon=n.i.createEmpty().toString(),this.idDonViQuyDoi=null,this.soLuong=1,this.donGiaTruocCK=0,this.ptChietKhau=0,this.tienChietKhau=0,this.laPTChietKhau=!0,this.thanhTienTruocCK=0,this.ptThue=0,this.tienThue=0,this.ghiChu="",this.trangThai=3,this.donGiaSauCK=0,this.donGiaSauVAT=0,this.thanhTienSauCK=0,this.thanhTienSauVAT=0,this.nhanVienThucHien=void 0,this.id=a,this.idHoaDon=e,this.idDonViQuyDoi=i,this.soLuong=h,this.donGiaTruocCK=s,this.ptChietKhau=o,this.laPTChietKhau=l,this.tienChietKhau=o>0?s*o/100:r,this.ptThue=d,this.tienThue=d>0?(s-this.tienChietKhau)*d/100:c,this.ghiChu=u,this.trangThai=g,this.nhanVienThucHien=[],Object.defineProperties(this,{thanhTienTruocCK:{get(){return this.soLuong*this.donGiaTruocCK}},donGiaSauCK:{get(){var t,a,e;return null!==(t=this.ptChietKhau)&&void 0!==t&&t?this.donGiaTruocCK-this.donGiaTruocCK*(null!==(e=this.ptChietKhau)&&void 0!==e?e:0)/100:this.donGiaTruocCK-(null!==(a=this.tienChietKhau)&&void 0!==a?a:0)}},thanhTienSauCK:{get(){return this.soLuong*this.donGiaSauCK}},donGiaSauVAT:{get(){var t,a,e;return null!==(t=this.pTThue)&&void 0!==t&&t?this.donGiaSauCK+this.donGiaSauCK*(null!==(e=this.pTThue)&&void 0!==e?e:0)/100:this.donGiaSauCK-(null!==(a=this.tienThue)&&void 0!==a?a:0)}},thanhTienSauVAT:{get(){return this.soLuong*this.donGiaSauVAT}}})}}class h extends i{constructor(t){let{id:a=n.i.create().toString(),maHangHoa:e="",tenHangHoa:i="",giaBan:h=0,giaNhap:s=0,idNhomHangHoa:o=null,idHangHoa:r=null,idDonViQuyDoi:l=null,soLuong:d=1,expanded:c=!1}=t;super({id:a,idDonViQuyDoi:l,soLuong:d,donGiaTruocCK:h}),this.maHangHoa="",this.tenHangHoa="",this.giaBan=0,this.giaNhap=0,this.idNhomHangHoa=null,this.idHangHoa=null,this.expanded=!1,this.maHangHoa=e,this.tenHangHoa=i,this.giaBan=h,this.giaNhap=s,this.idNhomHangHoa=o,this.idHangHoa=r,this.expanded=c}}},44008:(t,a,e)=>{e.d(a,{Z:()=>s});var n=e(85905),i=e(89600);class h{constructor(t){let{id:a=n.i.create().toString(),idLoaiChungTu:e=1,idKhachHang:h=null,idChiNhanh:s="",idNhanVien:o=null,maHoaDon:r="",ngayLapHoaDon:l=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss.SSS"),tongTienHangChuaChietKhau:d=0,tongChietKhauHangHoa:c=0,tongTienHang:u=0,pTGiamGiaHD:g=0,tongGiamGiaHD:m=0,ptThueHD:T=0,tongTienThue:C=0,tongTienHDSauVAT:p=0,tongThanhToan:x=0,ghiChuHD:H="",trangThai:v=3}=t;this.id=n.i.create().toString(),this.idKhachHang=null,this.idChiNhanh=void 0,this.idNhanVien=null,this.idLoaiChungTu=1,this.maHoaDon="",this.ngayLapHoaDon=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss.SSS"),this.tongTienHang=0,this.pTGiamGiaHD=0,this.tongGiamGiaHD=0,this.tongThanhToan=0,this.ghiChuHD="",this.trangThai=3,this.tongTienHangChuaChietKhau=0,this.tongChietKhauHangHoa=0,this.ptThueHD=0,this.tongTienThue=0,this.tongTienHDSauVAT=0,this.hoaDonChiTiet=void 0,this.id=a,this.idLoaiChungTu=e,this.idKhachHang=h,this.idChiNhanh=s,this.idNhanVien=o,this.maHoaDon=r,this.ngayLapHoaDon=l,this.tongTienHangChuaChietKhau=d,this.tongChietKhauHangHoa=c,this.tongTienHang=u,this.pTGiamGiaHD=g,this.tongGiamGiaHD=m,this.tongThanhToan=x,this.ghiChuHD=H,this.trangThai=v,this.ptThueHD=T,this.tongTienThue=C,this.tongTienHDSauVAT=p}}class s extends h{constructor(t){let{id:a=n.i.create().toString(),idKhachHang:e=null,idChiNhanh:h="",maKhachHang:s="",tenKhachHang:o="",soDienThoai:r="",tongTichDiem:l=0,txtTrangThaiHD:d="Ho\xe0n th\xe0nh",maNhanVien:c="",tenNhanVien:u="",maHoaDon:g="",ngayLapHoaDon:m=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss.SSS"),tongTienHang:T=0,daThanhToan:C=0,tongTienThue:p=0}=t;super({id:a,idKhachHang:e,idChiNhanh:h,maHoaDon:g,ngayLapHoaDon:m,tongTienHang:T,tongTienThue:p}),this.maKhachHang="",this.tenKhachHang="",this.soDienThoai=void 0,this.tongTichDiem=0,this.avatar="",this.maNhanVien="",this.tenNhanVien="",this.userName="",this.tenChiNhanh="",this.idCheckIn="",this.daThanhToan=0,this.conNo=0,this.txtTrangThaiHD="Ho\xe0n th\xe0nh",this.hoaDonChiTiet=void 0,this.maKhachHang=s,this.tenKhachHang=o,this.soDienThoai=r,this.tongTichDiem=l,this.txtTrangThaiHD=d,this.maNhanVien=c,this.tenNhanVien=u,this.daThanhToan=C,this.hoaDonChiTiet=[],this.idCheckIn=n.i.EMPTY}}},12731:(t,a,e)=>{e.d(a,{Z:()=>h});var n=e(85905),i=e(89600);class h{constructor(t){let{id:a=n.i.create().toString(),idLoaiChungTu:e=11,idChiNhanh:h="",idBrandname:s="",maHoaDon:o="",idNhanVien:r=null,idDoiTuongNopTien:l=null,ngayLapHoaDon:d=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss.SSS"),tongTienThu:c=0,noiDungThu:u="",hachToanKinhDoanh:g=!0,thuPhiTienGui:m=0,diemThanhToan:T=0,hinhThucThanhToan:C=1,idKhoanThuChi:p=null}=t;this.id=n.i.create().toString(),this.idChiNhanh=void 0,this.idBrandname=void 0,this.idNhanVien=null,this.idLoaiChungTu=11,this.maHoaDon="",this.tongTienThu=0,this.ngayLapHoaDon=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss.SSS"),this.trangThai=1,this.noiDungThu="",this.hachToanKinhDoanh=!0,this.thuPhiTienGui=0,this.diemThanhToan=0,this.quyHoaDon_ChiTiet=void 0,this.idDoiTuongNopTien=null,this.loaiDoiTuong=1,this.hinhThucThanhToan=1,this.idKhoanThuChi=null,this.idTaiKhoanNganHang=null,this.loaiPhieu="",this.maNguoiNop="",this.tenNguoiNop="",this.sdtNguoiNop="",this.tenChiNhanh="",this.tenNhanVien="",this.txtTrangThai="",this.sHinhThucThanhToan="",this.tenKhoanThuChi="",this.tenNganHang="",this.tenChuThe="",this.id=a,this.idLoaiChungTu=e,this.idChiNhanh=h,this.idBrandname=s,this.maHoaDon=o,this.idNhanVien=r,this.idDoiTuongNopTien=l,this.ngayLapHoaDon=d,this.tongTienThu=c,this.noiDungThu=u,this.hachToanKinhDoanh=g,this.thuPhiTienGui=m,this.diemThanhToan=T,this.hinhThucThanhToan=C,this.idKhoanThuChi=p,this.quyHoaDon_ChiTiet=[],Object.defineProperties(this,{loaiPhieu:{get(){let t="";switch(this.idLoaiChungTu){case 11:t="Phi\u1ebfu thu";break;case 12:t="Phi\u1ebfu chi"}return t}},txtTrangThai:{get(){let t="";switch(this.trangThai){case 1:t="\u0110a\u0303 thanh toa\u0301n";break;case 0:t="\u0110a\u0303 h\u1ee7y"}return t}},sHinhThucThanhToan:{get(){let t="";switch(this.hinhThucThanhToan){case 1:t="Ti\u1ec1n m\u1eb7t";break;case 2:t="Pos";break;case 3:t="Chuy\u1ec3n kho\u1ea3n";break;case 4:t="Th\u1ebb gi\xe1 tr\u1ecb"}return t}}})}}},93857:(t,a,e)=>{e.d(a,{FM:()=>n,tf:()=>i});e(9820),e(44008);class n{constructor(t){let{isShow:a=!1,isNew:e=!1,id:n="",item:i={}}=t;this.isShow=!1,this.isNew=!1,this.id="",this.item={},this.isNew=e,this.isShow=a,this.id=n,this.item=i}}class i{constructor(t){let{show:a=!1,title:e="",mes:n="",type:i=0}=t;this.show=!1,this.title="",this.mes="",this.type=1,this.show=a,this.title=e,this.mes=n,this.type=i}}},57605:(t,a,e)=>{e.d(a,{Z:()=>h});var n=e(81171),i=e(46417);const h=(0,n.Z)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever")},71207:(t,a,e)=>{e.d(a,{Z:()=>h});var n=e(81171),i=e(46417);const h=(0,n.Z)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},88989:(t,a,e)=>{e.d(a,{Z:()=>h});var n=e(81171),i=e(46417);const h=(0,n.Z)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info")},78957:(t,a,e)=>{e.d(a,{Z:()=>h});var n=e(81171),i=e(46417);const h=(0,n.Z)((0,i.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz")}}]);