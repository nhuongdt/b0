"use strict";(self.webpackChunklayout_jsx=self.webpackChunklayout_jsx||[]).push([[4178],{44178:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var n=o(9506),r=o(60701),a=o(47313),i=o(61113),s=o(9019),l=o(24631),d=o(47131),h=o(24193),x=o(6820),p=o(48623),c=o(41727),m=o(33859),u=o(40225),g=o(89469),f=o(64247),C=o(61566),y=o(68507),b=o(41156),Z=o(98589),v=o(89600),j=o(23683),S=o(66185),F=o(66136),T=o(46734),w=o(2447),D=o(46417);const k=(0,r.Pi)((e=>{let{handleChangeTab:t}=e;const o=(0,a.useContext)(w.Il).chinhanhCurrent,[r,k]=(0,a.useState)(""),[H,P]=(0,a.useState)(1),[N,z]=(0,a.useState)(10),[I,B]=(0,a.useState)("tenHangHoa"),[M,W]=(0,a.useState)("desc"),[R,A]=(0,a.useState)((0,b.Z)(new Date)),[E,O]=(0,a.useState)((0,Z.Z)(new Date)),[V,L]=(0,a.useState)("Th\xe1ng n\xe0y"),[_,q]=(0,a.useState)(""),[K,X]=(0,a.useState)([]),[$,G]=(0,a.useState)(0),[J,Q]=(0,a.useState)(0),[U,Y]=(0,a.useState)(null),[ee,te]=(0,a.useState)(!0),oe=async()=>{const e=await j.Z.getBaoCaoTaiChinh_ThuChiTienMat({filter:r,idChiNhanh:o.id,maxResultCount:N,skipCount:H,timeFrom:(0,v.Z)(R,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,v.Z)(E,"yyyy/MM/dd HH:mm:ss"),sortBy:I,sortType:M});X(e.items),Q(e.totalCount),G(Math.ceil(e.totalCount/N))};(0,a.useEffect)((()=>{oe()}),[H,N,I,M,_,o.id]);const ne=()=>{Y(null)},re=[{field:"maHoaDon",headerName:"M\xe3 phi\u1ebfu",minWidth:100,flex:.8,renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"700"},children:e.colDef.headerName}),renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:e.value})},{field:"ngayLapHoaDon",headerName:"Th\u1eddi gian",minWidth:150,flex:.8,renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:(0,v.Z)(new Date(e.value),"dd/MM/yyyy HH:mm")}),renderHeader:e=>(0,D.jsx)(n.Z,{children:e.colDef.headerName})},{field:"tienThu",headerName:"Ti\u1ec1n thu",minWidth:90,flex:.7,renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:new Intl.NumberFormat("vi-VN").format(e.value)}),renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"500",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})},{field:"tienChi",headerName:"Ti\u1ec1n chi",minWidth:150,flex:1,renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"500",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName}),renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:new Intl.NumberFormat("vi-VN").format(e.value)})},{field:"tonLuyKe",headerName:"L\u0169y k\u1ebf",minWidth:150,flex:1,renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:e.value}),renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"500",color:"#525F7A",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})},{field:"ghiChu",headerName:"Ghi ch\xfa",minWidth:120,flex:1,renderCell:e=>(0,D.jsx)(n.Z,{width:"100%",textAlign:"left",fontSize:"13px",children:e.value}),renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"500",color:"#525F7A",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})}],ae=Boolean(U),ie=ae?"simple-popover":void 0;return(0,D.jsxs)(n.Z,{paddingTop:"16px",children:[(0,D.jsxs)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,D.jsxs)(s.ZP,{item:!0,xs:12,md:"auto",display:"flex",alignItems:"center",gap:"10px",children:[(0,D.jsx)(i.Z,{variant:"h1",fontSize:"16px",fontWeight:"700",color:"#333233",children:"B\xe1o c\xe1o s\u1ed5 qu\u1ef9 ti\u1ec1n m\u1eb7t"}),(0,D.jsx)(n.Z,{className:"form-search",children:(0,D.jsx)(l.Z,{sx:{backgroundColor:"#fff",borderColor:"#CDC9CD",height:"40px","& .MuiInputBase-root":{pl:"0"}},onChange:e=>{k(e.target.value)},onKeyDown:e=>{"Enter"==e.key&&oe()},size:"small",className:"search-field",variant:"outlined",placeholder:"T\xecm ki\u1ebfm",InputProps:{startAdornment:(0,D.jsx)(d.Z,{type:"button",onClick:()=>{oe()},children:(0,D.jsx)("img",{src:C.Z})})}})})]}),(0,D.jsxs)(s.ZP,{xs:12,md:"auto",item:!0,display:"flex",gap:"8px",justifyContent:"end",children:[(0,D.jsx)(h.Z,{variant:"outlined",size:"small",sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:e=>{Y(e.currentTarget)},className:"btn-outline-hover",children:V}),(0,D.jsx)(h.Z,{variant:"outlined",size:"small",startIcon:(0,D.jsx)("img",{src:f.Z}),sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:async()=>{var e;const t=await j.Z.exportBaoCaoTaiChinh_ThuChiTienMat({filter:r,idChiNhanh:null!==(e=y.Z.get("IdChiNhanh"))&&void 0!==e?e:void 0,maxResultCount:N,skipCount:H,timeFrom:(0,v.Z)(R,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,v.Z)(E,"yyyy/MM/dd HH:mm:ss"),sortBy:I,sortType:M});S.Z.downloadExportFile(t)},className:"btn-outline-hover",children:"Xu\u1ea5t"})]})]}),(0,D.jsxs)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",marginTop:2,marginBottom:2,children:[(0,D.jsx)(s.ZP,{item:!0,xs:6,display:"flex",alignItems:"center",gap:"10px",children:(0,D.jsxs)(x.Z,{sx:{height:"40px",bottom:"24px",right:"50px",float:"right",gap:"8px","& button":{padding:"8px 10px!important",lineHeight:"24px"}},tabIndex:1,children:[(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#319DFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"},onClick:()=>{t(1)},children:"Ti\u1ec1n m\u1eb7t"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(2)},children:"Ng\xe2n h\xe0ng"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(3)},children:"T\u1ed5ng qu\u1ef9"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(4)},children:"Chi nh\xe1nh"})]})}),(0,D.jsx)(s.ZP,{xs:12,md:6,item:!0,display:"flex",gap:"8px",justifyContent:"end",children:(0,D.jsx)(p.Z,{options:g.default.suggestDichVu||[],getOptionLabel:e=>"".concat(e.tenDichVu),onChange:(e,t)=>{var o;q(null!==(o=null===t||void 0===t?void 0:t.id)&&void 0!==o?o:"")},size:"small",fullWidth:!0,sx:{width:"35%"},renderInput:e=>(0,D.jsx)(l.Z,{sx:{bgcolor:"#fff"},...e,placeholder:"T\xecm t\xean",InputProps:{...e.InputProps,startAdornment:(0,D.jsxs)(D.Fragment,{children:[e.InputProps.startAdornment,(0,D.jsx)(c.Z,{position:"start",children:(0,D.jsx)("img",{src:C.Z})})]})}})})})]}),(0,D.jsx)(u._$,{disableRowSelectionOnClick:!0,rowHeight:46,rows:K,columns:re,checkboxSelection:!1,hideFooter:!0,localeText:m.g,sortingOrder:["desc","asc"],onSortModelChange:e=>{var t,o,n;e.length>0&&(async(e,t)=>{B(t),W(e)})(null!==(t=null===(o=e[0].sort)||void 0===o?void 0:o.toString())&&void 0!==t?t:"",null!==(n=e[0].field)&&void 0!==n?n:"")}}),(0,D.jsx)(T.Z,{currentPage:H,rowPerPage:N,totalPage:$,totalRecord:J,handlePerPageChange:async e=>{z(parseInt(e.target.value.toString(),10)),P(1)},handlePageChange:async(e,t)=>{P(t)}}),(0,D.jsx)(F.Z,{open:ae,anchorEl:U,onClose:ne,id:ie,dateTimeType:V,setDateTimeType:L,timeFrom:R,timeTo:E,setTimeFrom:A,setTimeTo:O,disableSelectDate:ee,setDisableSelectDate:te,onOk:async()=>{await oe(),ne()}})]})})),H=(0,r.Pi)((e=>{let{handleChangeTab:t}=e;const o=(0,a.useContext)(w.Il).chinhanhCurrent,[r,k]=(0,a.useState)(""),[H,P]=(0,a.useState)(1),[N,z]=(0,a.useState)(10),[I,B]=(0,a.useState)("tenHangHoa"),[M,W]=(0,a.useState)("desc"),[R,A]=(0,a.useState)((0,b.Z)(new Date)),[E,O]=(0,a.useState)((0,Z.Z)(new Date)),[V,L]=(0,a.useState)("Th\xe1ng n\xe0y"),[_,q]=(0,a.useState)(""),[K,X]=(0,a.useState)([]),[$,G]=(0,a.useState)(0),[J,Q]=(0,a.useState)(0),[U,Y]=(0,a.useState)(null),[ee,te]=(0,a.useState)(!0),oe=async()=>{const e=await j.Z.getBaoCaoTaiChinh_ThuChiNganHang({filter:r,idChiNhanh:o.id,maxResultCount:N,skipCount:H,timeFrom:(0,v.Z)(R,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,v.Z)(E,"yyyy/MM/dd HH:mm:ss"),sortBy:I,sortType:M});X(e.items),Q(e.totalCount),G(Math.ceil(e.totalCount/N))};(0,a.useEffect)((()=>{oe()}),[H,N,I,M,_,o.id]);const ne=()=>{Y(null)},re=[{field:"maHoaDon",headerName:"M\xe3 phi\u1ebfu",minWidth:100,flex:.8,renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"700"},children:e.colDef.headerName}),renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:e.value})},{field:"ngayLapHoaDon",headerName:"Th\u1eddi gian",minWidth:150,flex:.8,renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:(0,v.Z)(new Date(e.value),"dd/MM/yyyy HH:mm")}),renderHeader:e=>(0,D.jsx)(n.Z,{children:e.colDef.headerName})},{field:"tienThu",headerName:"Ti\u1ec1n thu",minWidth:90,flex:.7,renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:new Intl.NumberFormat("vi-VN").format(e.value)}),renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"500",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})},{field:"tienChi",headerName:"Ti\u1ec1n chi",minWidth:150,flex:1,renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"500",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName}),renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:new Intl.NumberFormat("vi-VN").format(e.value)})},{field:"tonLuyKe",headerName:"L\u0169y k\u1ebf",minWidth:150,flex:1,renderCell:e=>(0,D.jsx)(i.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:e.value}),renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"500",color:"#525F7A",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})},{field:"ghiChu",headerName:"Ghi ch\xfa",minWidth:120,flex:1,renderCell:e=>(0,D.jsx)(n.Z,{width:"100%",textAlign:"left",fontSize:"13px",children:e.value}),renderHeader:e=>(0,D.jsx)(n.Z,{sx:{fontWeight:"500",color:"#525F7A",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})}],ae=Boolean(U),ie=ae?"simple-popover":void 0;return(0,D.jsxs)(n.Z,{paddingTop:"16px",children:[(0,D.jsxs)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,D.jsxs)(s.ZP,{item:!0,xs:12,md:"auto",display:"flex",alignItems:"center",gap:"10px",children:[(0,D.jsx)(i.Z,{variant:"h1",fontSize:"16px",fontWeight:"700",color:"#333233",children:"B\xe1o c\xe1o s\u1ed5 qu\u1ef9 ng\xe2n h\xe0ng"}),(0,D.jsx)(n.Z,{className:"form-search",children:(0,D.jsx)(l.Z,{sx:{backgroundColor:"#fff",borderColor:"#CDC9CD",height:"40px","& .MuiInputBase-root":{pl:"0"}},onChange:e=>{k(e.target.value)},onKeyDown:e=>{"Enter"==e.key&&oe()},size:"small",className:"search-field",variant:"outlined",placeholder:"T\xecm ki\u1ebfm",InputProps:{startAdornment:(0,D.jsx)(d.Z,{type:"button",onClick:()=>{oe()},children:(0,D.jsx)("img",{src:C.Z})})}})})]}),(0,D.jsxs)(s.ZP,{xs:12,md:"auto",item:!0,display:"flex",gap:"8px",justifyContent:"end",children:[(0,D.jsx)(h.Z,{variant:"outlined",size:"small",sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:e=>{Y(e.currentTarget)},className:"btn-outline-hover",children:V}),(0,D.jsx)(h.Z,{variant:"outlined",size:"small",startIcon:(0,D.jsx)("img",{src:f.Z}),sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:async()=>{var e;const t=await j.Z.exportBaoCaoTaiChinh_ThuChiNganHang({filter:r,idChiNhanh:null!==(e=y.Z.get("IdChiNhanh"))&&void 0!==e?e:void 0,maxResultCount:N,skipCount:H,timeFrom:(0,v.Z)(R,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,v.Z)(E,"yyyy/MM/dd HH:mm:ss"),sortBy:I,sortType:M});S.Z.downloadExportFile(t)},className:"btn-outline-hover",children:"Xu\u1ea5t"})]})]}),(0,D.jsxs)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",marginTop:2,marginBottom:2,children:[(0,D.jsx)(s.ZP,{item:!0,xs:6,display:"flex",alignItems:"center",gap:"10px",children:(0,D.jsxs)(x.Z,{sx:{height:"40px",bottom:"24px",right:"50px",float:"right",gap:"8px","& button":{padding:"8px 10px!important",lineHeight:"24px"}},children:[(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(1)},children:"Ti\u1ec1n m\u1eb7t"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#319DFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"},onClick:()=>{t(2)},children:"Ng\xe2n h\xe0ng"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(3)},children:"T\u1ed5ng qu\u1ef9"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(4)},children:"Chi nh\xe1nh"})]})}),(0,D.jsx)(s.ZP,{xs:12,md:6,item:!0,display:"flex",gap:"8px",justifyContent:"end",children:(0,D.jsx)(p.Z,{options:g.default.suggestDichVu||[],getOptionLabel:e=>"".concat(e.tenDichVu),onChange:(e,t)=>{var o;q(null!==(o=null===t||void 0===t?void 0:t.id)&&void 0!==o?o:"")},size:"small",fullWidth:!0,sx:{width:"35%"},renderInput:e=>(0,D.jsx)(l.Z,{sx:{bgcolor:"#fff"},...e,placeholder:"T\xecm t\xean",InputProps:{...e.InputProps,startAdornment:(0,D.jsxs)(D.Fragment,{children:[e.InputProps.startAdornment,(0,D.jsx)(c.Z,{position:"start",children:(0,D.jsx)("img",{src:C.Z})})]})}})})})]}),(0,D.jsx)(u._$,{disableRowSelectionOnClick:!0,rowHeight:46,rows:K,columns:re,checkboxSelection:!1,hideFooter:!0,localeText:m.g,sortingOrder:["desc","asc"],onSortModelChange:e=>{var t,o,n;e.length>0&&(async(e,t)=>{B(t),W(e)})(null!==(t=null===(o=e[0].sort)||void 0===o?void 0:o.toString())&&void 0!==t?t:"",null!==(n=e[0].field)&&void 0!==n?n:"")}}),(0,D.jsx)(T.Z,{currentPage:H,rowPerPage:N,totalPage:$,totalRecord:J,handlePerPageChange:async e=>{z(parseInt(e.target.value.toString(),10)),P(1)},handlePageChange:async(e,t)=>{P(t)}}),(0,D.jsx)(F.Z,{open:ae,anchorEl:U,onClose:ne,id:ie,dateTimeType:V,setDateTimeType:L,timeFrom:R,timeTo:E,setTimeFrom:A,setTimeTo:O,disableSelectDate:ee,setDisableSelectDate:te,onOk:async()=>{await oe(),ne()}})]})})),P=(0,r.Pi)((e=>{let{handleChangeTab:t}=e;const[o,r]=(0,a.useState)(""),[w,k]=(0,a.useState)(1),[H,P]=(0,a.useState)(10),[N,z]=(0,a.useState)("tenHangHoa"),[I,B]=(0,a.useState)("desc"),[M,W]=(0,a.useState)((0,b.Z)(new Date)),[R,A]=(0,a.useState)((0,Z.Z)(new Date)),[E,O]=(0,a.useState)("Th\xe1ng n\xe0y"),[V,L]=(0,a.useState)(""),[_,q]=(0,a.useState)([]),[K,X]=(0,a.useState)(0),[$,G]=(0,a.useState)(0),[J,Q]=(0,a.useState)(null),[U,Y]=(0,a.useState)(!0),ee=async()=>{var e;const t=await j.Z.getBaoCaoBanHangTongHop({filter:o,idChiNhanh:null!==(e=y.Z.get("IdChiNhanh"))&&void 0!==e?e:void 0,idDichVu:""===V?void 0:V,maxResultCount:H,skipCount:w,timeFrom:(0,v.Z)(M,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,v.Z)(R,"yyyy/MM/dd HH:mm:ss"),sortBy:N,sortType:I});q(t.items),G(t.totalCount),X(Math.ceil(t.totalCount/H))};(0,a.useEffect)((()=>{ee()}),[w,H,N,I,V]);const te=()=>{Q(null)},oe=Boolean(J),ne=oe?"simple-popover":void 0;return(0,D.jsxs)(n.Z,{paddingTop:"16px",children:[(0,D.jsxs)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,D.jsxs)(s.ZP,{item:!0,xs:12,md:"auto",display:"flex",alignItems:"center",gap:"10px",children:[(0,D.jsx)(i.Z,{variant:"h1",fontSize:"16px",fontWeight:"700",color:"#333233",children:"B\xe1o c\xe1o t\u1ed5ng qu\u1ef9"}),(0,D.jsx)(n.Z,{className:"form-search",children:(0,D.jsx)(l.Z,{sx:{backgroundColor:"#fff",borderColor:"#CDC9CD",height:"40px","& .MuiInputBase-root":{pl:"0"}},onChange:e=>{r(e.target.value)},onKeyDown:e=>{"Enter"==e.key&&ee()},size:"small",className:"search-field",variant:"outlined",placeholder:"T\xecm ki\u1ebfm",InputProps:{startAdornment:(0,D.jsx)(d.Z,{type:"button",onClick:()=>{ee()},children:(0,D.jsx)("img",{src:C.Z})})}})})]}),(0,D.jsxs)(s.ZP,{xs:12,md:"auto",item:!0,display:"flex",gap:"8px",justifyContent:"end",children:[(0,D.jsx)(h.Z,{variant:"outlined",size:"small",sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:e=>{Q(e.currentTarget)},className:"btn-outline-hover",children:E}),(0,D.jsx)(h.Z,{variant:"outlined",size:"small",startIcon:(0,D.jsx)("img",{src:f.Z}),sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:async()=>{var e;const t=await j.Z.exportBaoCaoBanHangTongHop({filter:o,idChiNhanh:null!==(e=y.Z.get("IdChiNhanh"))&&void 0!==e?e:void 0,idDichVu:""===V?void 0:V,maxResultCount:H,skipCount:w,timeFrom:(0,v.Z)(M,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,v.Z)(R,"yyyy/MM/dd HH:mm:ss"),sortBy:N,sortType:I});S.Z.downloadExportFile(t)},className:"btn-outline-hover",children:"Xu\u1ea5t"})]})]}),(0,D.jsxs)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",marginTop:2,marginBottom:2,children:[(0,D.jsx)(s.ZP,{item:!0,xs:6,display:"flex",alignItems:"center",gap:"10px",children:(0,D.jsxs)(x.Z,{sx:{height:"40px",bottom:"24px",right:"50px",float:"right",gap:"8px","& button":{padding:"8px 10px!important",lineHeight:"24px"}},children:[(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(1)},children:"Ti\u1ec1n m\u1eb7t"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(2)},children:"Ng\xe2n h\xe0ng"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#319DFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"},onClick:()=>{t(3)},children:"T\u1ed5ng qu\u1ef9"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(4)},children:"Chi nh\xe1nh"})]})}),(0,D.jsx)(s.ZP,{xs:12,md:6,item:!0,display:"flex",gap:"8px",justifyContent:"end",children:(0,D.jsx)(p.Z,{options:g.default.suggestDichVu||[],getOptionLabel:e=>"".concat(e.tenDichVu),onChange:(e,t)=>{var o;L(null!==(o=null===t||void 0===t?void 0:t.id)&&void 0!==o?o:"")},size:"small",fullWidth:!0,sx:{width:"35%"},renderInput:e=>(0,D.jsx)(l.Z,{sx:{bgcolor:"#fff"},...e,placeholder:"T\xecm t\xean",InputProps:{...e.InputProps,startAdornment:(0,D.jsxs)(D.Fragment,{children:[e.InputProps.startAdornment,(0,D.jsx)(c.Z,{position:"start",children:(0,D.jsx)("img",{src:C.Z})})]})}})})})]}),(0,D.jsx)(u._$,{disableRowSelectionOnClick:!0,rowHeight:46,rows:[],columns:[],checkboxSelection:!1,hideFooter:!0,localeText:m.g,sortingOrder:["desc","asc"],onSortModelChange:e=>{var t,o,n;e.length>0&&(async(e,t)=>{z(t),B(e)})(null!==(t=null===(o=e[0].sort)||void 0===o?void 0:o.toString())&&void 0!==t?t:"",null!==(n=e[0].field)&&void 0!==n?n:"")}}),(0,D.jsx)(T.Z,{currentPage:w,rowPerPage:H,totalPage:K,totalRecord:$,handlePerPageChange:async e=>{P(parseInt(e.target.value.toString(),10)),k(1)},handlePageChange:async(e,t)=>{k(t)}}),(0,D.jsx)(F.Z,{open:oe,anchorEl:J,onClose:te,id:ne,dateTimeType:E,setDateTimeType:O,timeFrom:M,timeTo:R,setTimeFrom:W,setTimeTo:A,disableSelectDate:U,setDisableSelectDate:Y,onOk:async()=>{await ee(),te()}})]})})),N=(0,r.Pi)((e=>{let{handleChangeTab:t}=e;const[o,r]=(0,a.useState)(""),[w,k]=(0,a.useState)(1),[H,P]=(0,a.useState)(10),[N,z]=(0,a.useState)("tenHangHoa"),[I,B]=(0,a.useState)("desc"),[M,W]=(0,a.useState)((0,b.Z)(new Date)),[R,A]=(0,a.useState)((0,Z.Z)(new Date)),[E,O]=(0,a.useState)("Th\xe1ng n\xe0y"),[V,L]=(0,a.useState)(""),[_,q]=(0,a.useState)([]),[K,X]=(0,a.useState)(0),[$,G]=(0,a.useState)(0),[J,Q]=(0,a.useState)(null),[U,Y]=(0,a.useState)(!0),ee=async()=>{var e;const t=await j.Z.getBaoCaoBanHangTongHop({filter:o,idChiNhanh:null!==(e=y.Z.get("IdChiNhanh"))&&void 0!==e?e:void 0,idDichVu:""===V?void 0:V,maxResultCount:H,skipCount:w,timeFrom:(0,v.Z)(M,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,v.Z)(R,"yyyy/MM/dd HH:mm:ss"),sortBy:N,sortType:I});q(t.items),G(t.totalCount),X(Math.ceil(t.totalCount/H))};(0,a.useEffect)((()=>{ee()}),[w,H,N,I,V]);const te=()=>{Q(null)},oe=Boolean(J),ne=oe?"simple-popover":void 0;return(0,D.jsxs)(n.Z,{paddingTop:"16px",children:[(0,D.jsxs)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,D.jsxs)(s.ZP,{item:!0,xs:12,md:"auto",display:"flex",alignItems:"center",gap:"10px",children:[(0,D.jsx)(i.Z,{variant:"h1",fontSize:"16px",fontWeight:"700",color:"#333233",children:"B\xe1o c\xe1o s\u1ed5 qu\u1ef9 chi nh\xe1nh"}),(0,D.jsx)(n.Z,{className:"form-search",children:(0,D.jsx)(l.Z,{sx:{backgroundColor:"#fff",borderColor:"#CDC9CD",height:"40px","& .MuiInputBase-root":{pl:"0"}},onChange:e=>{r(e.target.value)},onKeyDown:e=>{"Enter"==e.key&&ee()},size:"small",className:"search-field",variant:"outlined",placeholder:"T\xecm ki\u1ebfm",InputProps:{startAdornment:(0,D.jsx)(d.Z,{type:"button",onClick:()=>{ee()},children:(0,D.jsx)("img",{src:C.Z})})}})})]}),(0,D.jsxs)(s.ZP,{xs:12,md:"auto",item:!0,display:"flex",gap:"8px",justifyContent:"end",children:[(0,D.jsx)(h.Z,{variant:"outlined",size:"small",sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:e=>{Q(e.currentTarget)},className:"btn-outline-hover",children:E}),(0,D.jsx)(h.Z,{variant:"outlined",size:"small",startIcon:(0,D.jsx)("img",{src:f.Z}),sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:async()=>{var e;const t=await j.Z.exportBaoCaoBanHangTongHop({filter:o,idChiNhanh:null!==(e=y.Z.get("IdChiNhanh"))&&void 0!==e?e:void 0,idDichVu:""===V?void 0:V,maxResultCount:H,skipCount:w,timeFrom:(0,v.Z)(M,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,v.Z)(R,"yyyy/MM/dd HH:mm:ss"),sortBy:N,sortType:I});S.Z.downloadExportFile(t)},className:"btn-outline-hover",children:"Xu\u1ea5t"})]})]}),(0,D.jsxs)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",marginTop:2,marginBottom:2,children:[(0,D.jsx)(s.ZP,{item:!0,xs:6,display:"flex",alignItems:"center",gap:"10px",children:(0,D.jsxs)(x.Z,{sx:{height:"40px",bottom:"24px",right:"50px",float:"right",gap:"8px","& button":{padding:"8px 10px!important",lineHeight:"24px"}},children:[(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(1)},children:"Ti\u1ec1n m\u1eb7t"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(2)},children:"Ng\xe2n h\xe0ng"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#8492AE",borderColor:"transparent!important",boxShadow:"none!important","&:hover":{color:"#319DFF",backgroundColor:"#FFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"}},onClick:()=>{t(3)},children:"T\u1ed5ng qu\u1ef9"}),(0,D.jsx)(h.Z,{variant:"outlined",sx:{fontSize:"16px",textTransform:"unset",color:"#319DFF",border:"none !important",borderBottom:"2px outset #319DFF !important",boxShadow:"none!important"},onClick:()=>{t(4)},children:"Chi nh\xe1nh"})]})}),(0,D.jsx)(s.ZP,{xs:12,md:6,item:!0,display:"flex",gap:"8px",justifyContent:"end",children:(0,D.jsx)(p.Z,{options:g.default.suggestDichVu||[],getOptionLabel:e=>"".concat(e.tenDichVu),onChange:(e,t)=>{var o;L(null!==(o=null===t||void 0===t?void 0:t.id)&&void 0!==o?o:"")},size:"small",fullWidth:!0,sx:{width:"35%"},renderInput:e=>(0,D.jsx)(l.Z,{sx:{bgcolor:"#fff"},...e,placeholder:"T\xecm t\xean",InputProps:{...e.InputProps,startAdornment:(0,D.jsxs)(D.Fragment,{children:[e.InputProps.startAdornment,(0,D.jsx)(c.Z,{position:"start",children:(0,D.jsx)("img",{src:C.Z})})]})}})})})]}),(0,D.jsx)(u._$,{disableRowSelectionOnClick:!0,rowHeight:46,rows:[],columns:[],checkboxSelection:!1,hideFooter:!0,localeText:m.g,sortingOrder:["desc","asc"],onSortModelChange:e=>{var t,o,n;e.length>0&&(async(e,t)=>{z(t),B(e)})(null!==(t=null===(o=e[0].sort)||void 0===o?void 0:o.toString())&&void 0!==t?t:"",null!==(n=e[0].field)&&void 0!==n?n:"")}}),(0,D.jsx)(T.Z,{currentPage:w,rowPerPage:H,totalPage:K,totalRecord:$,handlePerPageChange:async e=>{P(parseInt(e.target.value.toString(),10)),k(1)},handlePageChange:async(e,t)=>{k(t)}}),(0,D.jsx)(F.Z,{open:oe,anchorEl:J,onClose:te,id:ne,dateTimeType:E,setDateTimeType:O,timeFrom:M,timeTo:R,setTimeFrom:W,setTimeTo:A,disableSelectDate:U,setDisableSelectDate:Y,onOk:async()=>{await ee(),te()}})]})})),z=(0,r.Pi)((()=>{const[e,t]=(0,a.useState)(1),o=e=>{t(e)};return(0,D.jsxs)(n.Z,{children:[1===e&&(0,D.jsx)(k,{handleChangeTab:o}),2===e&&(0,D.jsx)(H,{handleChangeTab:o}),3===e&&(0,D.jsx)(P,{handleChangeTab:o}),4===e&&(0,D.jsx)(N,{handleChangeTab:o})]})}))}}]);