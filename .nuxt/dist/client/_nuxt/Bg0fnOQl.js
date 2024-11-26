import{_ as g,o as l,c as _,u as b,R as m,b as o,w as n,a as s,d as a,t as S,S as C,ag as R,Y as h,ad as D,a4 as I,Q as U,x as F,O as L}from"./DIh6hySJ.js";import{_ as $}from"./Bqcmp63l.js";import{_ as P,s as T}from"./CrgnJ4mv.js";import{_ as w}from"./CyKliO1j.js";import{_ as M}from"./BfKIFqm1.js";const B={},N={class:"app-logo"};function V(r,t){return l(),_("div",N," Feis.AI ")}const x=g(B,[["render",V]]),E={name:"dashboard-header",components:{AppLogo:x},setup(){return{store:b()}}},G=m("/icon/user-icon.svg"),W={class:"dashboard-header"},q={class:"dashboard-header-right-block"};function z(r,t,p,i,c,u){const e=x,d=$;return l(),_("div",W,[o(d,{to:{name:"index"},class:"dashboard-header-logo-block"},{default:n(()=>[o(e)]),_:1}),s("div",q,[o(d,{to:{name:"subscription"},class:"dashboard-header-subscription"},{default:n(()=>{var f,v;return[a(S(((v=(f=i.store)==null?void 0:f.getUser)==null?void 0:v.generationsCount)||0)+" CREDITS ",1)]}),_:1}),o(d,{to:"#",class:"dashboard-header-upgrade"},{default:n(()=>t[0]||(t[0]=[a("UPGRADE")])),_:1}),o(d,{to:{name:"notifications"},class:"dashboard-header-notifications"},{default:n(()=>t[1]||(t[1]=[s("span",null,null,-1),s("img",{src:P},null,-1)])),_:1}),o(d,{to:{name:"settings"},class:"dashboard-header-settings"},{default:n(()=>t[2]||(t[2]=[s("span",null,null,-1),s("img",{src:G},null,-1)])),_:1})])])}const A=g(E,[["render",z]]),H={name:"dashboard-menu",setup(){return{store:b()}}},O=m("/icon/home.svg"),Q=m("/icon/freeMode.svg"),Y=m("/icon/myFaces.svg"),j=m("/icon/myFiles.svg"),J=m("/icon/settings.svg"),K=m("/icon/orange-generate-aI-art.svg"),X={class:"dashboard-menu"},Z={class:"dashboard-menu-top"},tt={key:0,class:"admin-routes"},ot={class:"dashboard-menu-bottom"};function st(r,t,p,i,c,u){var d;const e=$;return l(),_("div",X,[s("div",Z,[o(e,{to:{name:"contactSupport"}},{default:n(()=>t[1]||(t[1]=[s("img",{src:O},null,-1),a(" Dashboard ")])),_:1}),o(e,{to:{name:"index"}},{default:n(()=>t[2]||(t[2]=[s("img",{src:w},null,-1),a(" Ai Generator ")])),_:1}),o(e,{to:{name:"inspiration"}},{default:n(()=>t[3]||(t[3]=[s("img",{src:Q},null,-1),a(" Inspiration ")])),_:1}),o(e,{to:{name:"myFaces"}},{default:n(()=>t[4]||(t[4]=[s("img",{src:Y},null,-1),a(" My faces ")])),_:1}),o(e,{to:{name:"myFiles"}},{default:n(()=>t[5]||(t[5]=[s("img",{src:j},null,-1),a(" My files ")])),_:1}),o(e,{to:{name:"settings"}},{default:n(()=>t[6]||(t[6]=[s("img",{src:J},null,-1),a(" Settings ")])),_:1})]),(d=i.store.getUser)!=null&&d.isAdmin?(l(),_("div",tt,[t[12]||(t[12]=s("p",null,"Admin",-1)),o(e,{to:{name:"admin-face"}},{default:n(()=>t[7]||(t[7]=[a(" face ")])),_:1}),o(e,{to:{name:"admin-face-image-generation"}},{default:n(()=>t[8]||(t[8]=[a(" image generation ")])),_:1}),o(e,{to:{name:"admin-subscription"}},{default:n(()=>t[9]||(t[9]=[a(" subscription ")])),_:1}),o(e,{to:{name:"admin-user"}},{default:n(()=>t[10]||(t[10]=[a(" user ")])),_:1}),o(e,{to:{name:"admin-contactSupport"}},{default:n(()=>t[11]||(t[11]=[a(" Contact support ")])),_:1})])):C("",!0),s("div",ot,[o(e,{onClick:t[0]||(t[0]=f=>i.store.logout()),class:"logout"},{default:n(()=>t[13]||(t[13]=[s("img",{src:M},null,-1),a(" Log out ")])),_:1}),o(e,{to:{name:"index"},class:"orange-generate-aI-art"},{default:n(()=>t[14]||(t[14]=[s("img",{src:K},null,-1),a(" Generate AI Art ")])),_:1})])])}const y=g(H,[["render",st]]),nt={name:"dashboard-footer",setup(){return{}}},et={class:"dashboard-footer"};function at(r,t,p,i,c,u){const e=$;return l(),_("div",et,[t[4]||(t[4]=s("div",null,[s("span",null,"© Feis AI, 2024")],-1)),s("div",null,[o(e,{to:{name:"contactSupport"}},{default:n(()=>t[0]||(t[0]=[a("Contact Support")])),_:1}),o(e,{to:{name:"privacyPolicy"}},{default:n(()=>t[1]||(t[1]=[a("Privacy Policy")])),_:1}),o(e,{to:{name:"termsAndConditions"}},{default:n(()=>t[2]||(t[2]=[a("Terms & Conditions")])),_:1}),t[3]||(t[3]=s("a",{href:"#"},"Download our app",-1))])])}const k=g(nt,[["render",at]]),rt={name:"dashboard",components:{DashboardMenu:y,DashboardFooter:k,DashboardHeader:A},setup(){return{}},methods:{getWordAfterSlash(r,t){return r.split("/")[t]||null}},computed:{currentURL(){return this.getWordAfterSlash((this._.provides[R]||this.$route).fullPath,1)}}},dt={class:"app-container"},it={class:"dashboard-container"},ut={class:"dashboard-menu-block"},lt={class:"dashboard-body"};function mt(r,t,p,i,c,u){const e=A,d=y,f=k;return l(),_("div",{class:D(["dashboard",u.currentURL!=""&&u.currentURL!=null?`${u.currentURL+"-dashboard"} `:"ai-generator-dashboard"])},[s("div",dt,[o(e),s("div",it,[s("div",ut,[o(d)]),s("div",lt,[h(r.$slots,"default")])]),o(f)])],2)}const _t=g(rt,[["render",mt]]),$t=I({__name:"default",setup(r){var i;const t=b();return U(()=>{t.updateToken(),T(()=>{t.updateToken()},6e4)}),((i=F().query)==null?void 0:i.reload)==="true"&&setTimeout(()=>{window.location.href="/"},500),(c,u)=>(l(),L(_t,null,{default:n(()=>[h(c.$slots,"default")]),_:3}))}});export{$t as default};
