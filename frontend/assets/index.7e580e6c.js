import{J as l,_ as I,u as N,a as P,r as t,M as S,F as j,o as x,c as w,f as O,g as y,a2 as s}from"./index.f122b5f9.js";import{s as a,g as B}from"./project.48fef589.js";import{i as M}from"./style.5b3ed670.js";function D(i){return l({url:"/webtopo/svgnode/list",method:"get",params:i})}function J(i){return l({url:"/webtopo/svgnode",method:"post",data:i})}function R(i){return l({url:"/webtopo/svgnode/unbind",method:"delete",data:i})}const k={class:"webtopo-edit"},q={__name:"index",setup(i){const p=N(),v=P(),c=t(),u=t(null),d=t(""),_=t(!0),g=()=>{console.log("\u70B9\u51FB\u4E86\u8FD4\u56DE\u6309\u94AE"),p.go(-1)},f=o=>{s.error("\u65E0\u6743\u9650\u8FDB\u884C\u6B64\u64CD\u4F5C")},b=o=>{console.log("\u70B9\u51FB\u4E86\u4FDD\u5B58\u6309\u94AE\uFF0C\u53EF\u4EE5\u5728\u6B64\u5904\u5C06\u56FE\u5B58\u5230\u6570\u636E\u5E93",o),a({projectId:d.value,dataModel:JSON.stringify(o),thumbnail:o.thumbnail}).then(e=>{s.success("\u4FDD\u5B58\u6210\u529F\uFF01")})},r=()=>{Promise.all([B(d.value),D({projectId:d.value})]).then(o=>{console.log(o,35),u.value={bind_device_list:o[1].data.map(e=>({bind_node_id:e.svgNodeId,bind_node_prop:e.svgNodeProp,device_id:String(e.deviceId),device_prop:e.deviceProp})),device_list:o[0].data.deviceList.map(e=>({id:String(e.deviceId),name:String(e.deviceName),prop_list:e.deviceDictList.map(n=>n)}))},c.value=o[0].data.dataModel,console.log(c,41),_.value=!1})},h=(o,e,n)=>{console.log("\u89E6\u53D1\u4E86\u8BBE\u5907\u7ED1\u5B9A",o,e,n),o==1?a({projectId:d.value,dataModel:JSON.stringify(n),thumbnail:n.thumbnail}).then(()=>{J({projectId:d.value,deviceId:e.device_id,svgNodeId:e.bind_node_id,svgNodeProp:e.bind_node_prop,deviceProp:e.device_prop}).then(m=>{s.success("\u7ED1\u5B9A\u6210\u529F"),r()})}):a({projectId:d.value,dataModel:JSON.stringify(n),thumbnail:n.thumbnail}).then(()=>{R({projectId:d.value,deviceId:e.device_id,svgNodeId:e.bind_node_id,svgNodeProp:e.bind_node_prop,deviceProp:e.device_prop}).then(m=>{s.success("\u89E3\u9664\u7ED1\u5B9A\u6210\u529F"),r()})})};return console.log(v.query,1414),d.value=v.query.project_id,r(),(o,e)=>{const n=S("loading");return j((x(),w("div",k,[O(y(M),{onOnReturn:g,onOnPreview:f,onOnSave:b,onOnDeviceBind:h,"data-model":c.value,"device-info":u.value},null,8,["data-model","device-info"])])),[[n,_.value]])}}},V=I(q,[["__scopeId","data-v-cdcab0f7"]]);export{V as default};