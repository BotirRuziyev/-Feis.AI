import{r as d,a2 as F,Q as b,_ as x,o as l,c as u,b as c,a3 as v,Y as S,s as k,u as R,m as B,R as E,a as t,t as r,w as i,J as U,F as $,q,O as I,I as N}from"./DIh6hySJ.js";/* empty css        *//* empty css        */import{_ as L}from"./Bqcmp63l.js";/* empty css        */import{P,S as A}from"./e_-O8CN2.js";const G={name:"app-square-image",props:["img"],setup(){const o=d(null),e=F("ele");return b(()=>{var s;document.getElementsByClassName("my-face-item")[0],o.value=(s=e==null?void 0:e.value)==null?void 0:s.offsetWidth}),{height:o}}};function M(o,e,s,a,m,C){const p=k;return l(),u("div",{class:"my-face-item",style:v({height:a.height+"px"}),ref:"ele"},[c(p,{src:s.img,style:v([{width:"100%"},{height:a.height+"px"}]),fit:"cover",loading:"eager"},null,8,["src","style"]),S(o.$slots,"default")],4)}const V=x(G,[["render",M]]),z={components:{},setup(){const o=R(),e=d(new P),s=d(new A);s.value.limit=5e3;const a=async m=>{s.value=m,e.value=await B("/face",s.value)};return a(s.value),{store:o,searchForm:s,searchResult:e,getList:a}}},D=E("/icon/icon-plus.png"),J={key:0},O={key:1},Q={key:2};function T(o,e,s,a,m,C){var f,h,y;const p=V,_=L,g=N,w=U;return l(),u("div",null,[e[2]||(e[2]=t("h1",null,"My Faces",-1)),t("p",null,r(((f=a.store.getUser)==null?void 0:f.subscriptionFacesCount)-((h=a.store.getUser)==null?void 0:h.facesCount))+" / "+r((y=a.store.getUser)==null?void 0:y.subscriptionFacesCount)+" faces uploaded",1),e[3]||(e[3]=t("div",{class:"app-base-border-radius app-base-margin-top-bottom",style:{width:"100%"}},null,-1)),c(w,{gutter:15},{default:i(()=>[c(g,{span:6,xs:12},{default:i(()=>[c(_,{class:"my-faces-item",to:{name:"myFaces-create"}},{default:i(()=>[c(p,null,{default:i(()=>e[0]||(e[0]=[t("div",{class:"myFaces-create-item-btm"},[t("img",{src:D}),t("span",null,"Create new face")],-1)])),_:1})]),_:1})]),_:1}),(l(!0),u($,null,q(a.searchResult.items,n=>(l(),I(g,{span:6,xs:12},{default:i(()=>[c(_,{class:"my-faces-item",to:{name:"index",query:{face:n.id}}},{default:i(()=>[c(p,{img:n.coverImageUrl},null,8,["img"]),t("p",null,r(n.faceName),1),n.generatedCount>0?(l(),u("div",J,[t("span",null,r(n.generatedCount)+" photos generated",1)])):n.trainingStatus==="InProgress"?(l(),u("div",O,[t("span",null,r(n.generatedCount)+" photos.",1)])):(l(),u("div",Q,[t("span",null,r(n.generatedCount)+" photos.",1),e[1]||(e[1]=t("span",{class:"app-orange-text"},"Generate",-1))])),t("p",null,"trainingStatus: "+r(n.trainingStatus),1)]),_:2},1032,["to"])]),_:2},1024))),256))]),_:1})])}const Z=x(z,[["render",T]]);export{Z as default};
