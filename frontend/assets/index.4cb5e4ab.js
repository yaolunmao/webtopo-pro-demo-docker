import{H as S,z as j,r as d,d as s,K as C,o as b,c as z,e,w as l,f as o,i as V,m as y,C as k,j as K,k as L,x as B,D as F,B as D,s as O}from"./index.a653ca4b.js";function Q(c){return S({url:"/monitor/online/list",method:"get",params:c})}function E(c){return S({url:"/monitor/online/"+c,method:"delete"})}const H={class:"app-container"},A=j({name:"Online"}),M=Object.assign(A,{setup(c){const{proxy:f}=O(),N=d([]),_=d(!0),g=d(0),r=d(1),u=d(10),p=d({ipaddr:void 0,userName:void 0});function w(){_.value=!0,Q(p.value).then(i=>{N.value=i.rows,g.value=i.total,_.value=!1})}function m(){r.value=1,w()}function R(){f.resetForm("queryRef"),m()}function T(i){f.$modal.confirm('\u662F\u5426\u786E\u8BA4\u5F3A\u9000\u540D\u79F0\u4E3A"'+i.userName+'"\u7684\u7528\u6237?').then(function(){return E(i.tokenId)}).then(()=>{w(),f.$modal.msgSuccess("\u5220\u9664\u6210\u529F")}).catch(()=>{})}return w(),(i,a)=>{const x=s("el-input"),h=s("el-form-item"),v=s("el-button"),U=s("el-form"),n=s("el-table-column"),$=s("el-table"),q=s("pagination"),I=C("hasPermi"),P=C("loading");return b(),z("div",H,[e(U,{model:o(p),ref:"queryRef",inline:!0},{default:l(()=>[e(h,{label:"\u767B\u5F55\u5730\u5740",prop:"ipaddr"},{default:l(()=>[e(x,{modelValue:o(p).ipaddr,"onUpdate:modelValue":a[0]||(a[0]=t=>o(p).ipaddr=t),placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5730\u5740",clearable:"",style:{width:"200px"},onKeyup:V(m,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(h,{label:"\u7528\u6237\u540D\u79F0",prop:"userName"},{default:l(()=>[e(x,{modelValue:o(p).userName,"onUpdate:modelValue":a[1]||(a[1]=t=>o(p).userName=t),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0",clearable:"",style:{width:"200px"},onKeyup:V(m,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(h,null,{default:l(()=>[e(v,{type:"primary",icon:"Search",onClick:m},{default:l(()=>[y("\u641C\u7D22")]),_:1}),e(v,{icon:"Refresh",onClick:R},{default:l(()=>[y("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),k((b(),K($,{data:o(N).slice((o(r)-1)*o(u),o(r)*o(u)),style:{width:"100%"}},{default:l(()=>[e(n,{label:"\u5E8F\u53F7",width:"50",type:"index",align:"center"},{default:l(t=>[L("span",null,B((o(r)-1)*o(u)+t.$index+1),1)]),_:1}),e(n,{label:"\u4F1A\u8BDD\u7F16\u53F7",align:"center",prop:"tokenId","show-overflow-tooltip":!0}),e(n,{label:"\u767B\u5F55\u540D\u79F0",align:"center",prop:"userName","show-overflow-tooltip":!0}),e(n,{label:"\u6240\u5C5E\u90E8\u95E8",align:"center",prop:"deptName","show-overflow-tooltip":!0}),e(n,{label:"\u4E3B\u673A",align:"center",prop:"ipaddr","show-overflow-tooltip":!0}),e(n,{label:"\u767B\u5F55\u5730\u70B9",align:"center",prop:"loginLocation","show-overflow-tooltip":!0}),e(n,{label:"\u64CD\u4F5C\u7CFB\u7EDF",align:"center",prop:"os","show-overflow-tooltip":!0}),e(n,{label:"\u6D4F\u89C8\u5668",align:"center",prop:"browser","show-overflow-tooltip":!0}),e(n,{label:"\u767B\u5F55\u65F6\u95F4",align:"center",prop:"loginTime",width:"180"},{default:l(t=>[L("span",null,B(i.parseTime(t.row.loginTime)),1)]),_:1}),e(n,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:l(t=>[k((b(),K(v,{link:"",type:"primary",icon:"Delete",onClick:G=>T(t.row)},{default:l(()=>[y("\u5F3A\u9000")]),_:2},1032,["onClick"])),[[I,["monitor:online:forceLogout"]]])]),_:1})]),_:1},8,["data"])),[[P,o(_)]]),k(e(q,{total:o(g),page:o(r),"onUpdate:page":a[2]||(a[2]=t=>D(r)?r.value=t:null),limit:o(u),"onUpdate:limit":a[3]||(a[3]=t=>D(u)?u.value=t:null)},null,8,["total","page","limit"]),[[F,o(g)>0]])])}}});export{M as default};
