import{r as c,C as z,e as m,o as B,k as D,w as l,l as j,f as e,n as f,g as o,j as C,F,G as I,D as L,t as P}from"./index.14c307fc.js";import{l as Q,i as E}from"./gen.90d06102.js";const G={class:"dialog-footer"},M={__name:"importTable",emits:["ok"],setup(A,{expose:N,emit:h}){const b=c(0),r=c(!1),v=c([]),w=c([]),{proxy:p}=P(),a=z({pageNum:1,pageSize:10,tableName:void 0,tableComment:void 0});function V(){_(),r.value=!0}function k(n){p.$refs.table.toggleRowSelection(n)}function S(n){v.value=n.map(t=>t.tableName)}function _(){Q(a).then(n=>{w.value=n.rows,b.value=n.total})}function s(){a.pageNum=1,_()}function T(){p.resetForm("queryRef"),s()}function x(){const n=v.value.join(",");if(n==""){p.$modal.msgError("\u8BF7\u9009\u62E9\u8981\u5BFC\u5165\u7684\u8868");return}E({tables:n}).then(t=>{p.$modal.msgSuccess(t.msg),t.code===200&&(r.value=!1,h("ok"))})}return N({show:V}),(n,t)=>{const y=m("el-input"),g=m("el-form-item"),d=m("el-button"),R=m("el-form"),u=m("el-table-column"),K=m("el-table"),U=m("pagination"),$=m("el-row"),q=m("el-dialog");return B(),D(q,{title:"\u5BFC\u5165\u8868",modelValue:o(r),"onUpdate:modelValue":t[5]||(t[5]=i=>L(r)?r.value=i:null),width:"800px",top:"5vh","append-to-body":""},{footer:l(()=>[j("div",G,[e(d,{type:"primary",onClick:x},{default:l(()=>[f("\u786E \u5B9A")]),_:1}),e(d,{onClick:t[4]||(t[4]=i=>r.value=!1)},{default:l(()=>[f("\u53D6 \u6D88")]),_:1})])]),default:l(()=>[e(R,{model:o(a),ref:"queryRef",inline:!0},{default:l(()=>[e(g,{label:"\u8868\u540D\u79F0",prop:"tableName"},{default:l(()=>[e(y,{modelValue:o(a).tableName,"onUpdate:modelValue":t[0]||(t[0]=i=>o(a).tableName=i),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0",clearable:"",onKeyup:C(s,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(g,{label:"\u8868\u63CF\u8FF0",prop:"tableComment"},{default:l(()=>[e(y,{modelValue:o(a).tableComment,"onUpdate:modelValue":t[1]||(t[1]=i=>o(a).tableComment=i),placeholder:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0",clearable:"",onKeyup:C(s,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(g,null,{default:l(()=>[e(d,{type:"primary",icon:"Search",onClick:s},{default:l(()=>[f("\u641C\u7D22")]),_:1}),e(d,{icon:"Refresh",onClick:T},{default:l(()=>[f("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),e($,null,{default:l(()=>[e(K,{onRowClick:k,ref:"table",data:o(w),onSelectionChange:S,height:"260px"},{default:l(()=>[e(u,{type:"selection",width:"55"}),e(u,{prop:"tableName",label:"\u8868\u540D\u79F0","show-overflow-tooltip":!0}),e(u,{prop:"tableComment",label:"\u8868\u63CF\u8FF0","show-overflow-tooltip":!0}),e(u,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"}),e(u,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4"})]),_:1},8,["data"]),F(e(U,{total:o(b),page:o(a).pageNum,"onUpdate:page":t[2]||(t[2]=i=>o(a).pageNum=i),limit:o(a).pageSize,"onUpdate:limit":t[3]||(t[3]=i=>o(a).pageSize=i),onPagination:_},null,8,["total","page","limit"]),[[I,o(b)>0]])]),_:1})]),_:1},8,["modelValue"])}}};export{M as default};