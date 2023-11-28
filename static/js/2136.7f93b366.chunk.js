"use strict";(self.webpackChunklayout_jsx=self.webpackChunklayout_jsx||[]).push([[2136],{77275:(e,t,n)=>{n.d(t,{Z:()=>a});var o=function(e){return e[e.Cancel=0]="Cancel",e[e.Wait=1]="Wait",e[e.Confirm=2]="Confirm",e[e.CheckIn=3]="CheckIn",e[e.Success=4]="Success",e}(o||{});const a=o},51036:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(61113),a=n(9019),i=n(24631),r=n(47131),l=n(24193),s=n(48623),d=n(41727),c=n(64247),h=n(61566),u=n(15743),x=n(40225),g=n(47313),m=n(46734),p=n(33859),f=n(89469),Z=n(60701),C=n(68507),v=n(23683),y=n(66185),b=n(41156),j=n(98589),T=n(89600),k=n(66136),S=n(77275),P=n(46417);const w=(0,Z.Pi)((()=>{var e;const[t,n]=(0,g.useState)(""),[Z,w]=(0,g.useState)(1),[D,H]=(0,g.useState)(10),[W,I]=(0,g.useState)("bookingDate"),[N,F]=(0,g.useState)("desc"),[z,M]=(0,g.useState)((0,b.Z)(new Date)),[R,B]=(0,g.useState)((0,j.Z)(new Date)),[L,A]=(0,g.useState)("Th\xe1ng n\xe0y"),[E,O]=(0,g.useState)(""),[K,V]=(0,g.useState)(""),[X,_]=(0,g.useState)(null!==(e=C.Z.get("IdChiNhanh"))&&void 0!==e?e:""),[G,U]=(0,g.useState)(-1),[Y,$]=(0,g.useState)([]),[q,J]=(0,g.useState)(1),[Q,ee]=(0,g.useState)(1),[te,ne]=(0,g.useState)(null),[oe,ae]=(0,g.useState)(!0);(0,g.useEffect)((()=>{ie()}),[]);const ie=async()=>{await f.default.getSuggestDichVu(),await f.default.getSuggestKhachHang(),await f.default.getSuggestChiNhanhByUser()},re=async()=>{const e=await v.Z.getBaoCaoLichHen({filter:t,idChiNhanh:""===X?void 0:X,idDichVu:""===E?void 0:E,idKhachHang:""===K?void 0:K,trangThai:-1===G?void 0:G,maxResultCount:D,skipCount:Z,timeFrom:(0,T.Z)(z,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,T.Z)(R,"yyyy/MM/dd HH:mm:ss"),sortBy:W,sortType:N});$(e.items),ee(e.totalCount),J(Math.ceil(e.totalCount/D))};(0,g.useEffect)((()=>{$([]),re()}),[Z,D,W,N,E,K,X,G]);const le=()=>{ne(null)},se=[{field:"bookingDate",headerName:"Ng\xe0y",minWidth:100,flex:.8,renderHeader:e=>(0,P.jsx)(u.Z,{sx:{fontWeight:"700"},children:e.colDef.headerName}),renderCell:e=>(0,P.jsx)(o.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:(0,T.Z)(new Date(e.value),"dd/MM/yyyy HH:mm")})},{field:"tenKhachHang",headerName:"T\xean kh\xe1ch h\xe0ng",minWidth:150,flex:.8,renderCell:e=>(0,P.jsx)(o.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:e.value}),renderHeader:e=>(0,P.jsx)(u.Z,{children:e.colDef.headerName})},{field:"soDienThoai",headerName:"S\u0110T kh\xe1ch h\xe0ng",minWidth:90,flex:.7,renderCell:e=>(0,P.jsx)(o.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:e.value}),renderHeader:e=>(0,P.jsx)(u.Z,{sx:{fontWeight:"500",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})},{field:"tenHangHoa",headerName:"T\xean d\u1ecbch v\u1ee5",minWidth:150,flex:1,renderHeader:e=>(0,P.jsx)(u.Z,{sx:{fontWeight:"500",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName}),renderCell:e=>(0,P.jsx)(o.Z,{fontSize:"13px",fontWeight:"400",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:e.value})},{field:"trangThai",headerName:"Tr\u1ea1ng th\xe1i",minWidth:70,flex:1,renderCell:e=>{switch(e.value){case S.Z.Cancel:return(0,P.jsx)(o.Z,{borderRadius:"12px",padding:"4px 8px",sx:{backgroundColor:"#F1416C1a",color:"#F1416C"},fontSize:"13px",fontWeight:"400",children:"H\u1ee7y"});case S.Z.Confirm:return(0,P.jsx)(o.Z,{borderRadius:"12px",padding:"4px 8px",sx:{backgroundColor:"#7DC1FF1a",color:"#7DC1FF"},fontSize:"13px",fontWeight:"400",children:"X\xe1c nh\u1eadn"});case S.Z.Success:return(0,P.jsx)(o.Z,{borderRadius:"12px",padding:"4px 8px",sx:{backgroundColor:"#50CD891a",color:"#50CD89"},fontSize:"13px",fontWeight:"400",children:"Ho\xe0n th\xe0nh"});case S.Z.CheckIn:return(0,P.jsx)(o.Z,{borderRadius:"12px",padding:"4px 8px",sx:{backgroundColor:"#009EF71a",color:"#009EF7"},fontSize:"13px",fontWeight:"400",children:"Check In"});case S.Z.Wait:return(0,P.jsx)(o.Z,{borderRadius:"12px",padding:"4px 8px",sx:{backgroundColor:"#FF99001a",color:"#FF9900"},fontSize:"13px",fontWeight:"400",children:"Ch\u1edd x\xe1c nh\u1eadn"});default:return null}},renderHeader:e=>(0,P.jsx)(u.Z,{sx:{fontWeight:"500",color:"#525F7A",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})},{field:"ghiChu",headerName:"Ghi ch\xfa",minWidth:120,flex:1,renderCell:e=>(0,P.jsx)(u.Z,{width:"100%",textAlign:"left",fontSize:"13px",children:e.value}),renderHeader:e=>(0,P.jsx)(u.Z,{sx:{fontWeight:"500",color:"#525F7A",fontSize:"13px",fontFamily:"Roboto"},children:e.colDef.headerName})}],de=Boolean(te),ce=de?"simple-popover":void 0;return(0,P.jsxs)(u.Z,{paddingTop:"16px",children:[(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,P.jsxs)(a.ZP,{item:!0,xs:12,md:"auto",display:"flex",alignItems:"center",gap:"10px",children:[(0,P.jsx)(o.Z,{variant:"h1",fontSize:"16px",fontWeight:"700",color:"#333233",children:"B\xe1o c\xe1o th\u1ed1ng k\xea l\u1ecbch h\u1eb9n"}),(0,P.jsx)(u.Z,{className:"form-search",children:(0,P.jsx)(i.Z,{sx:{backgroundColor:"#fff",borderColor:"#CDC9CD",height:"40px","& .MuiInputBase-root":{pl:"0"}},onChange:e=>{n(e.target.value)},onKeyDown:e=>{"Enter"==e.key&&re()},size:"small",className:"search-field",variant:"outlined",placeholder:"T\xecm ki\u1ebfm",InputProps:{startAdornment:(0,P.jsx)(r.Z,{type:"button",onClick:()=>{re()},children:(0,P.jsx)("img",{src:h.Z})})}})})]}),(0,P.jsxs)(a.ZP,{xs:12,md:"auto",item:!0,display:"flex",gap:"8px",justifyContent:"end",children:[(0,P.jsx)(l.Z,{variant:"outlined",size:"small",sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:e=>{ne(e.currentTarget)},className:"btn-outline-hover",children:L}),(0,P.jsx)(l.Z,{variant:"outlined",size:"small",startIcon:(0,P.jsx)("img",{src:c.Z}),sx:{backgroundColor:"#fff!important",textTransform:"capitalize",fontWeight:"400",color:"#666466",padding:"10px 16px",height:"40px",borderRadius:"4px!important"},onClick:async()=>{const e=await v.Z.exportBaoCaoLichHen({filter:t,idChiNhanh:""===X?void 0:X,idDichVu:""===E?void 0:E,idKhachHang:""===K?void 0:K,trangThai:-1===G?void 0:G,maxResultCount:D,skipCount:Z,timeFrom:(0,T.Z)(z,"yyyy/MM/dd HH:mm:ss"),timeTo:(0,T.Z)(R,"yyyy/MM/dd HH:mm:ss"),sortBy:W,sortType:N});y.Z.downloadExportFile(e)},className:"btn-outline-hover",children:"Xu\u1ea5t"})]})]}),(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:3,marginTop:2,marginBottom:2,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,md:3,children:(0,P.jsx)(s.Z,{options:f.default.suggestChiNhanhByUser||[],getOptionLabel:e=>"".concat(e.tenChiNhanh),onChange:(e,t)=>{var n;_(null!==(n=null===t||void 0===t?void 0:t.id)&&void 0!==n?n:"")},size:"medium",fullWidth:!0,renderInput:e=>(0,P.jsx)(i.Z,{sx:{bgcolor:"#fff"},...e,placeholder:"T\xecm t\xean",label:(0,P.jsx)(o.Z,{fontSize:"16px",children:"Chi nh\xe1nh"}),InputProps:{...e.InputProps,startAdornment:(0,P.jsxs)(P.Fragment,{children:[e.InputProps.startAdornment,(0,P.jsx)(d.Z,{position:"start",children:(0,P.jsx)("img",{src:h.Z})})]})}})})}),(0,P.jsx)(a.ZP,{xs:12,md:3,item:!0,children:(0,P.jsx)(s.Z,{options:f.default.suggestKhachHang||[],getOptionLabel:e=>"".concat(e.tenKhachHang),onChange:(e,t)=>{var n;V(null!==(n=null===t||void 0===t?void 0:t.id)&&void 0!==n?n:"")},size:"medium",fullWidth:!0,renderInput:e=>(0,P.jsx)(i.Z,{sx:{bgcolor:"#fff"},...e,label:(0,P.jsx)(o.Z,{fontSize:"16px",children:"Kh\xe1ch h\xe0ng"}),placeholder:"T\xecm t\xean",InputProps:{...e.InputProps,startAdornment:(0,P.jsxs)(P.Fragment,{children:[e.InputProps.startAdornment,(0,P.jsx)(d.Z,{position:"start",children:(0,P.jsx)("img",{src:h.Z})})]})}})})}),(0,P.jsx)(a.ZP,{item:!0,xs:12,md:3,children:(0,P.jsx)(s.Z,{options:f.default.suggestDichVu||[],getOptionLabel:e=>"".concat(e.tenDichVu),onChange:(e,t)=>{var n;O(null!==(n=null===t||void 0===t?void 0:t.id)&&void 0!==n?n:"")},size:"medium",fullWidth:!0,renderInput:e=>(0,P.jsx)(i.Z,{sx:{bgcolor:"#fff"},...e,label:(0,P.jsx)(o.Z,{fontSize:"16px",children:"D\u1ecbch v\u1ee5"}),placeholder:"T\xecm t\xean",InputProps:{...e.InputProps,startAdornment:(0,P.jsxs)(P.Fragment,{children:[e.InputProps.startAdornment,(0,P.jsx)(d.Z,{position:"start",children:(0,P.jsx)("img",{src:h.Z})})]})}})})}),(0,P.jsx)(a.ZP,{xs:12,md:3,item:!0,children:(0,P.jsx)(s.Z,{options:[{key:"Ch\u1edd x\xe1c nh\u1eadn",value:1},{key:"\u0110\xe3 x\xe1c nh\u1eadn",value:2},{key:"Check In",value:3},{key:"Ho\xe0n th\xe0nh",value:4},{key:"H\u1ee7y",value:0}],getOptionLabel:e=>"".concat(e.key),onChange:(e,t)=>{var n;U(null!==(n=null===t||void 0===t?void 0:t.value)&&void 0!==n?n:-1)},size:"medium",fullWidth:!0,renderInput:e=>(0,P.jsx)(i.Z,{sx:{bgcolor:"#fff"},...e,placeholder:"T\xecm t\xean",label:(0,P.jsx)(o.Z,{fontSize:"16px",children:"Tr\u1ea1ng th\xe1i"}),InputProps:{...e.InputProps,startAdornment:(0,P.jsxs)(P.Fragment,{children:[e.InputProps.startAdornment,(0,P.jsx)(d.Z,{position:"start",children:(0,P.jsx)("img",{src:h.Z})})]})}})})})]}),(0,P.jsx)(x._$,{disableRowSelectionOnClick:!0,rowHeight:46,rows:Y,getRowId:e=>e.bookingDate,columns:se,checkboxSelection:!1,hideFooter:!0,localeText:p.g,sortingOrder:["desc","asc"],onSortModelChange:e=>{var t,n,o;e.length>0&&(async(e,t)=>{I(t),F(e)})(null!==(t=null===(n=e[0].sort)||void 0===n?void 0:n.toString())&&void 0!==t?t:"",null!==(o=e[0].field)&&void 0!==o?o:"")}}),(0,P.jsx)(m.Z,{currentPage:Z,rowPerPage:D,totalPage:q,totalRecord:Q,handlePerPageChange:async e=>{H(parseInt(e.target.value.toString(),10)),w(1)},handlePageChange:async(e,t)=>{w(t)}}),(0,P.jsx)(k.Z,{open:de,anchorEl:te,onClose:le,id:ce,dateTimeType:L,setDateTimeType:A,timeFrom:z,timeTo:R,setTimeFrom:M,setTimeTo:B,disableSelectDate:oe,setDisableSelectDate:ae,onOk:async()=>{await re(),le()}})]})}))},15743:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(14156).Z)()},36296:(e,t,n)=>{n.d(t,{I:()=>r});var o=n(54566);const a={hours:"gi\u1edd",minutes:"ph\xfat",seconds:"gi\xe2y",meridiem:"bu\u1ed5i"},i={previousMonth:"Th\xe1ng tr\u01b0\u1edbc",nextMonth:"Th\xe1ng sau",openPreviousView:"m\u1edf xem tr\u01b0\u1edbc",openNextView:"m\u1edf xem sau",calendarViewSwitchingButtonAriaLabel:e=>"year"===e?"\u0111ang m\u1edf xem n\u0103m, chuy\u1ec3n sang xem l\u1ecbch":"\u0111ang m\u1edf xem l\u1ecbch, chuy\u1ec3n sang xem n\u0103m",start:"B\u1eaft \u0111\u1ea7u",end:"K\u1ebft th\xfac",cancelButtonLabel:"H\u1ee7y",clearButtonLabel:"X\xf3a",okButtonLabel:"OK",todayButtonLabel:"H\xf4m nay",datePickerToolbarTitle:"Ch\u1ecdn ng\xe0y",dateTimePickerToolbarTitle:"Ch\u1ecdn ng\xe0y v\xe0 gi\u1edd",timePickerToolbarTitle:"Ch\u1ecdn gi\u1edd",dateRangePickerToolbarTitle:"Ch\u1ecdn kho\u1ea3ng ng\xe0y",clockLabelText:(e,t,n)=>"Ch\u1ecdn ".concat(a[e],". ").concat(null===t?"Kh\xf4ng c\xf3 gi\u1edd \u0111\u01b0\u1ee3c ch\u1ecdn":"Gi\u1edd \u0111\u01b0\u1ee3c ch\u1ecdn l\xe0 ".concat(n.format(t,"fullTime"))),hoursClockNumberText:e=>"".concat(e," gi\u1edd"),minutesClockNumberText:e=>"".concat(e," ph\xfat"),secondsClockNumberText:e=>"".concat(e," gi\xe2y"),selectViewText:e=>"Ch\u1ecdn ".concat(a[e]),calendarWeekNumberHeaderLabel:"S\u1ed1 tu\u1ea7n",calendarWeekNumberHeaderText:"#",calendarWeekNumberAriaLabelText:e=>"Tu\u1ea7n ".concat(e),calendarWeekNumberText:e=>"".concat(e),openDatePickerDialogue:(e,t)=>null!==e&&t.isValid(e)?"Ch\u1ecdn ng\xe0y, ng\xe0y \u0111\xe3 ch\u1ecdn l\xe0 ".concat(t.format(e,"fullDate")):"Ch\u1ecdn ng\xe0y",openTimePickerDialogue:(e,t)=>null!==e&&t.isValid(e)?"Ch\u1ecdn gi\u1edd, gi\u1edd \u0111\xe3 ch\u1ecdn l\xe0 ".concat(t.format(e,"fullTime")):"Ch\u1ecdn gi\u1edd",timeTableLabel:"ch\u1ecdn gi\u1edd",dateTableLabel:"ch\u1ecdn ng\xe0y",fieldYearPlaceholder:e=>"Y".repeat(e.digitAmount),fieldMonthPlaceholder:e=>"letter"===e.contentType?"MMMM":"MM",fieldDayPlaceholder:()=>"DD",fieldWeekDayPlaceholder:e=>"letter"===e.contentType?"EEEE":"EE",fieldHoursPlaceholder:()=>"hh",fieldMinutesPlaceholder:()=>"mm",fieldSecondsPlaceholder:()=>"ss",fieldMeridiemPlaceholder:()=>"aa"},r=(0,o.F)(i)},1603:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(93601),a=n(34800);function i(e){(0,a.Z)(1,arguments);var t=(0,o.Z)(e),n=t.getMonth(),i=n-n%3+3;return t.setMonth(i,0),t.setHours(23,59,59,999),t}},54497:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(93601),a=n(34800);function i(e){(0,a.Z)(1,arguments);var t=(0,o.Z)(e),n=t.getMonth(),i=n-n%3;return t.setMonth(i,1),t.setHours(0,0,0,0),t}},85825:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(99004),a=n(34800),i=n(68627);function r(e,t){(0,a.Z)(2,arguments);var n=(0,i.Z)(t);return(0,o.Z)(e,-n)}},90949:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(68627),a=n(79254),i=n(34800);function r(e,t){return(0,i.Z)(2,arguments),function(e,t){(0,i.Z)(2,arguments);var n=3*(0,o.Z)(t);return(0,a.Z)(e,n)}(e,-(0,o.Z)(t))}},1711:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(68627),a=n(83618),i=n(34800);function r(e,t){(0,i.Z)(2,arguments);var n=(0,o.Z)(t);return(0,a.Z)(e,-n)}}}]);