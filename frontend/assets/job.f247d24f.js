import{H as o}from"./index.a653ca4b.js";function u(t){return o({url:"/monitor/job/list",method:"get",params:t})}function e(t){return o({url:"/monitor/job/"+t,method:"get"})}function d(t){return o({url:"/monitor/job",method:"post",data:t})}function i(t){return o({url:"/monitor/job",method:"put",data:t})}function m(t){return o({url:"/monitor/job/"+t,method:"delete"})}function s(t,r){return o({url:"/monitor/job/changeStatus",method:"put",data:{jobId:t,status:r}})}function b(t,r){return o({url:"/monitor/job/run",method:"put",data:{jobId:t,jobGroup:r}})}export{d as a,s as c,m as d,e as g,u as l,b as r,i as u};
