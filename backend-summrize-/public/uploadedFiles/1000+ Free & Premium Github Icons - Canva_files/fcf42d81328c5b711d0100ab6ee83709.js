(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["q8p8"],{"Mq8p8":function(_,__,__webpack_require__){__webpack_require__.n_x = __webpack_require__.n;__webpack_require__("MEEO/");self._ad7c2fd0a872ef66d228a0d2ca415b43 = self._ad7c2fd0a872ef66d228a0d2ca415b43 || {};(function(__c) {'use strict';var Foc=function(a){return{password:__c.D("password",a.password),token:__c.D("token",a.token)}},Hoc=function(a){const b=__c.v("type",a);switch(b){case "SUCCESS":return __c.k("SUCCESS"===a.type),new __c.Qfb({user:__c.w("user",a),email:__c.v("email",a)});case "ERROR":return __c.k("ERROR"===a.type),new Goc;default:throw Error(`unknown case: ${b}`);}},Ioc=function(a){return new __c.Eob({Jt:__c.Oa(__c.EQa,"A",a)})},X2=function(a){let b=a.message,c=a.links,d=a.className,e=a.Ua,f=a.ca,h=a.di;
return l=>{let m=l.Ah;l=W2.useMemo(()=>{const p=new __c.Wu(q=>{f.error(q,{xd:"RichTextRenderer: failed to render html"})});p.xm("strong",(q,u,t)=>W2.createElement("span",{className:"Qxl-SQ",key:t},u));p.xm("alert-link",(q,u,t)=>{__c.k(q instanceof HTMLElement);q=__c.n(q.dataset.id,"links must have id attribute");const x=__c.n(c.get(q),"navigationMethod for id {id} is not defined");switch(x.type){case "INTERNAL":return W2.createElement(Joc,{key:t,to:x.url,onClick:Koc({id:q,Ah:m})},u);case "EXTERNAL":return W2.createElement(__c.sF,
{key:t,href:x.url,target:x.target,onClick:Loc({id:q,url:x.url,Mua:x.Mua,di:h,Ah:m})},u);case "CUSTOM":return W2.createElement(__c.wy,{key:t,onClick:Moc({id:q,onClick:x.onClick,Ah:m})},u);default:throw new __c.F(x);}});return p},[m]);return W2.createElement(Noc,{Cpa:l,message:b,className:d,Ua:e})}},Koc=function(a){let b=a.id,c=a.Ah;return()=>c(b)},Loc=function(a){let b=a.id,c=a.url,d=a.Mua,e=a.di,f=a.Ah;return h=>{f(b);const l=e(c,d);"string"!==typeof l&&(h.preventDefault(),l())}},Moc=function(a){let b=
a.id,c=a.onClick,d=a.Ah;return()=>{d(b);c&&c()}},Ooc=function(a){let b=a.vHb,c=a.ca,d=a.di;return{ea:Object(Y2.b)(e=>{e=e.Ah;const f=X2({message:__c.E("vvBgeg",[]),links:new Map([["account_settings_password",{type:"CUSTOM",onClick:b.Ny}]]),className:"EG6qog",ca:c,di:d});return W2.createElement(f,{Ah:e})}),type:"force_password_reset_notice",attributeType:"none",severity:"error",Ff:!1}},Poc=function(a){let b=a.ca;a=a.di;var c=__c.E("GcuYfg",[60]);return{ea:X2({message:c,links:new Map([["canva_for_business_survey_link",
{type:"EXTERNAL",url:"https://canvachina2020.surveyanalytics.com",Mua:1,target:"_blank"}]]),className:"oCpA7w",ca:b,di:a}),type:"canva_for_business_survey_notice",attributeType:"localStorage",attributeName:"SEEN_CANVA_FOR_BUSINESS_SURVEY_ALERT_2",severity:"info",Ca:__c.jp}},Qoc=function(a){var b=a.ll;let c=a.v6b,d=a.ca,e=a.di;a=__c.af(a.planName);b=__c.E("QInDUQ",[a,c,b]);return{ea:X2({message:b,links:new Map([["update_billing_preferences_link",{type:"INTERNAL",url:"/account/billing"}]]),ca:d,di:e}),
type:"canva_pro_trial_ending_soon_notice",attributeType:"localStorage",attributeName:"SEEN_CANVA_PRO_TRIAL_ENDING_SOON_NOTICE",severity:"info",sMb:!0}},Roc=function(a){let b=a.tSb,c=a.Ua,d=a.Vc,e=a.$Qa,f=void 0===e?0:e,h=a.Db,l=a.ca,m=a.di;const p=()=>{h.Bm(21,"subscription_expiry_notice")},q=()=>{h.Bm(16,"subscription_expiry_notice")};return{ea:Object(Y2.b)(u=>{u=u.Ah;const t=d.aA,x=b?__c.E("bokQRA",[]):__c.E("rx6r1Q",[f]);let z="";t?z=" "+__c.E("wsUDxg",[]):void 0!==t&&(z=" "+__c.E("xpfA6A",[]));
return W2.createElement(X2({message:x+z,links:new Map([["renew_subscription_dialog",{type:"CUSTOM",onClick:b?q:p}]]),Ua:c,ca:l,di:m}),{Ah:u})}),type:"subscription_expiry_notice",attributeType:"localStorage",attributeName:"SEEN_SUBSCRIPTION_EXPIRY_ALERT",severity:b?"error":"warning"}},Soc=function(a){let b=a.CNb,c=a.locale,d=a.ca;a=a.di;return{ea:X2({message:b?__c.E("t9qxEg",[__c.af(__c.Mm(b,c,"DD MMMM"))]):__c.E("RQFTgg",[]),links:new Map([["covid19_print_delay_tips_page",{type:"EXTERNAL",url:"https://about.canva.com/coronavirus-awareness-collection/",
Mua:1,target:"_blank"}]]),className:"Qgk17A",ca:d,di:a}),type:"covid19_print_delay_notice_v2",attributeType:"localStorage",attributeName:"SEEN_COVID19_PRINT_DELAY_NOTICE_V2",severity:"info"}},Toc=async function(a,b){const c=new __c.Wz({user:a.userId,attribute:new __c.Xz({name:b,value:new __c.Yz({value:!0})})});try{await a.aa.tsa(c)}catch(d){a.ca.error(d,{xd:"Failed to update state for global alert",extra:new Map([["attribute",__c.ke(b)]])})}},Woc=async function(a){let b=a.Lb,c=a.xa,d=a.da;var e=a.R7;
let f=a.H7,h=a.Vc,l=a.bl,m=a.Uca;var p=a.Db;let q=a.Hla,u=a.K7;var t=a.M6,x=a.N6;let z=a.wc,A=a.kb;var B=a.ha;let C=a.qd;var K;a=[];const L=new Z2,M=new __c.AN({prefix:c.user.id}),P=Uoc(d.og),R=c.user.Ts.some(U=>U.iA);e&&c.user.aK&&!R&&a.push(Ooc({vHb:L,ca:d.ca,di:P}));m&&void 0!==q&&!M.getItem("SEEN_SUBSCRIPTION_EXPIRY_ALERT")&&(e=Math.floor(q/864E5),7>=e&&-7<=e&&a.push(Roc({tSb:0>q,Ua:async()=>{h.Ps||await l()},Vc:h,$Qa:e,Db:p,ca:d.ca,di:P})));u&&((p=M.getItem("COVID19_PRINT_DELAY_NOTICE_V2_SEQUENCE"))&&
parseInt(p,10)<x&&M.removeItem("SEEN_COVID19_PRINT_DELAY_NOTICE_V2"),M.getItem("SEEN_COVID19_PRINT_DELAY_NOTICE_V2")||(a.push(Soc({CNb:t,locale:c.user.locale,ca:d.ca,di:P})),M.setItem("COVID19_PRINT_DELAY_NOTICE_V2_SEQUENCE",x.toString())));C.eR.some(U=>1===U.status)&&!M.getItem("SEEN_CANVA_PRO_TRIAL_ENDING_SOON_NOTICE")&&(await $2.P(()=>null!=z.subscriptions),t=U=>__c.vl(A.$d)(U)&&__c.sl(U)&&1===U.status&&!__c.tl(U)&&3===U.cc.billingInterval,(t=null===(K=z.subscriptions)||void 0===K?void 0:K.find(t))&&
t.Ku&&t.na&&(K=t.Ku-Date.now(),K=Math.floor(K/864E5),0<K&&14>=K&&(x=__c.jl(new __c.nl(A),t.Ab.La),B=B.Ad(t.na,t.cc.currency),a.push(Qoc({planName:x,ll:B,v6b:K,ca:d.ca,di:P})))));f&&!M.getItem("SEEN_CANVA_FOR_BUSINESS_SURVEY_ALERT_2")&&a.push(Poc({ca:d.ca,di:P}));return{hka:Voc({Lb:b,Jt:a,userId:c.user.id,da:d,Lcb:M}).hka,LPb:L}},Uoc=function(a){return a?(b,c)=>a.Lza(new __c.Ws({uri:b,target:null!==c&&void 0!==c?c:1})):b=>b},$oc=function(a){let b=a.userId,c=a.ga,d=a.Ha,e=a.analyticsService,f=a.aa;
a=a.u7;var h=__c.QA({mode:1});const l=h.Zea,m=h.c5a;h=__c.QA({mode:0,Tsa:!0,jhb:[__c.eyb(()=>m.value)]});const p=h.Zea;h=h.c5a;var q=__c.nab({mode:0,itb:h});const u=q.o5;q=q.$aa;const t=new Xoc.a(e),x=new a3({Ha:d,analytics:t,aa:f,u7:a}),z=new b3({userId:b,Rva:m,YCa:h,$aa:q}),A=K=>x.LFa(z,K),B=()=>t.trackPasswordResetDialogOpen({section:"homepage"}),C=Object(Y2.b)(K=>{K=K.x6;return W2.createElement(Yoc,{compact:2===c.ka,RN:__c.Ic.uc(z.Ae),error:__c.Ic.getError(z.Ae),pBb:l,GEb:p,o5:u,x6:K,onSubmit:A})});
return K=>W2.createElement(Zoc,{ea:C,Ua:B,x6:K.qa})},apc=function(a){let b=a.userId,c=a.V3b,d=a.yc,e=a.hka,f=a.ia;const h=$oc({userId:b,ga:a.ga,analyticsService:a.analyticsService,Ha:a.Ha,aa:a.aa,u7:()=>e.RRa()});a=l=>{f(m=>{let p=m.qa;return W2.createElement(h,{qa:()=>{p();l&&l()}})})};c&&a(async()=>{try{await d.Fp(new __c.Jg({user:b,types:[9]}))}catch(l){}});return{Ny:a}},bpc=function(a){let b=a.Lb;const c=c3.create(a.Jt,a.gua);let d;Object($2.I)(()=>c.mMa,e=>{e?(d=()=>W2.createElement(d3,{store:c,
alert:e}),b.s5=d):d&&(b.s5===d&&(b.s5=void 0),d=void 0)},{fireImmediately:!0})};var Goc=class{constructor(){this.type="ERROR"}};var cpc="alerts",dpc="passwordreset";__c.Sx.prototype.LFa=__c.da(83,function(a){const b=__c.ac(__c.Ub(__c.Wb([__c.lM,__c.mM,dpc]),{["code"]:!0,["action"]:"applyToken"}));return this.ra.post(b,Foc(a)).then(Hoc)});__c.Hx.prototype.DUa=__c.da(10,function(a){const b=__c.Wb([cpc]);__c.Ub(b,{["active"]:a.active});a=__c.ac(b);return this.ra.get(a).then(Ioc)});
const epc=a=>__c.H.createElement(__c.aE,Object.assign({},a,{type:"warning",variant:"global"})),fpc=a=>__c.H.createElement(__c.aE,Object.assign({},a,{type:"error",variant:"global"})),gpc=a=>__c.H.createElement(__c.aE,Object.assign({},a,{type:"info",variant:"global"})),Joc=a=>__c.H.createElement(__c.nJ,Object.assign({},a,{Component:__c.sF}));var hpc=class{constructor(a){this.active=a.active}};const e3=__webpack_require__("mrSG");const $2=__webpack_require__("2vnA");const W2=__webpack_require__("q1tI");const Y2=__webpack_require__("TyAF");const ipc=__webpack_require__("AYKG");const jpc=__webpack_require__("TSYQ");const Xoc=__webpack_require__("J4UJ");const kpc=__webpack_require__("Gp1o");var Z2=class{constructor(){this.Ny=void 0}};__c.g(()=>Z2.prototype.Ny);Object(e3.a)([$2.E.ref],Z2.prototype,"Ny",void 0);const Noc=a=>{let b=a.Cpa,c=a.message,d=a.className,e=a.Ua;W2.useEffect(()=>{e&&e()},[]);return W2.createElement("div",{className:d},b.render(c))};var lpc=class extends W2.PureComponent{constructor(){super(...arguments);this.ze=()=>{var a=this.props;const b=a.alert;a=a.controller;a.trackDismissed(b.type);switch(b.attributeType){case "userAttribute":Toc(a,b.attributeName);break;case "localStorage":a.Lcb.setItem(b.attributeName,"true");break;case "none":break;default:throw new __c.F(b);}a.RRa()};this.Ah=a=>{const b=this.props,c=b.alert;b.controller.analytics.trackGlobalAlertActioned({type:c.type,link:a});c.sMb&&this.ze()}}componentDidMount(){const a=
this.props;a.controller.trackShown(a.alert.type)}render(){var a=this.props.alert;const b=a.ea;var c=a.severity;const d=a.Ca;a=a.Ff;switch(c){case "error":c=fpc;break;case "info":c=gpc;break;case "warning":c=epc;break;default:throw new __c.F(c);}return W2.createElement(c,{Ff:null!==a&&void 0!==a?a:!0,ze:this.ze,Vr:!0,Ca:d},W2.createElement(b,{Ah:this.Ah}))}};var mpc=class{constructor(a,b,c,d,e){this.analyticsService=a;this.ca=b;this.aa=c;this.userId=d;this.Lcb=e;this.RRa=()=>{};this.analytics=new ipc.a(this.analyticsService)}trackShown(a){this.analytics.trackGlobalAlertShown({type:a})}trackDismissed(a){this.analytics.trackGlobalAlertDismissed({type:a})}};const Voc=a=>{let b=a.Lb,c=a.Jt,d=a.da;const e=new mpc(d.analyticsService,d.ca,d.aa,a.userId,a.Lcb);a=$2.l(()=>{const f=c.shift();b.PH=f?()=>W2.createElement(lpc,{alert:f,controller:e}):void 0});a();e.RRa=a;return{hka:e}};var Zoc=class extends W2.PureComponent{componentDidMount(){this.props.Ua()}render(){const a=this.props,b=a.x6;return W2.createElement(__c.uz,{open:!0,la:b,LE:"button",Qh:"100%"},W2.createElement(a.ea,{x6:b}))}};
var Yoc=class extends W2.PureComponent{constructor(){super(...arguments);this.onSubmit=a=>{var b=this.props;const c=b.onSubmit;b=b.x6;a.preventDefault();c(b)}}render(){var a=this.props;const b=a.compact,c=a.RN,d=a.error,e=a.x6,f=a.pBb,h=a.GEb;a=a.o5;return W2.createElement("form",{className:jpc("_4bllWw",b&&"pNI5fw"),onSubmit:this.onSubmit},W2.createElement("div",{className:"_7rjYdA"},W2.createElement("span",{className:"e6NvHg",title:"shield_icon",dangerouslySetInnerHTML:{__html:'<svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.21 7.027A3.292 3.292 0 0 1 44 10.292V29.57a25.06 25.06 0 0 1-3.944 13.486 24.798 24.798 0 0 1-5.945 6.441 3.479 3.479 0 0 1-.288.212 24.236 24.236 0 0 1-4.368 2.585l-5.476 2.555a4.726 4.726 0 0 1-3.943 0l-5.476-2.54C5.688 48.197 0 39.322 0 29.57V9.93a3.302 3.302 0 0 1 2.487-3.205c2.002-.514 4.99-1.33 8.07-2.419a49.99 49.99 0 0 0 2.85-1.073c2.018-.817 3.96-1.724 5.552-2.722.986-.62 2.23-.68 3.276-.151 3.443 1.769 11.436 5.534 18.974 6.668z" fill="#5843EB"/><path d="M29.622 36.812H14.864a1.231 1.231 0 0 1-1.229-1.225v-10.69c0-.664.546-1.224 1.229-1.224h14.758c.667 0 1.228.544 1.228 1.225v10.69a1.241 1.241 0 0 1-1.229 1.224z" fill="#fff"/><path d="M27.15 21.95v3.084h-1.866V21.98c0-.847-.334-1.603-.895-2.147a3.069 3.069 0 0 0-2.154-.892 3.044 3.044 0 0 0-3.049 3.039v3.054h-1.865V21.95c0-2.707 2.2-4.9 4.914-4.9 1.35 0 2.579.545 3.473 1.437a4.936 4.936 0 0 1 1.441 3.463zM22.235 30.976c1.08 0 1.957-.873 1.957-1.95 0-1.078-.876-1.951-1.957-1.951-1.08 0-1.957.873-1.957 1.95 0 1.078.876 1.95 1.957 1.95z" fill="#fff"/><path d="M21.735 29.54l-1.153 3.87h3.443l-1.305-3.87h-.985z" fill="#fff"/></svg>'}}),
W2.createElement(__c.N.Za,null,__c.E("/J0ZBw",[]))),W2.createElement("div",{className:"_0HIMnw"},W2.createElement(__c.N.ba,{color:"monoBlackA100"},__c.E("NNqzww",[])),W2.createElement(__c.N.ba,{color:"monoBlackA100"},__c.E("c2+6VQ",[]))),W2.createElement("div",{className:"Bepmlg"},W2.createElement(__c.Gy,null,__c.E("4wBjOg",[])),W2.createElement(f,{placeholder:__c.E("zmitXQ",[]),disabled:c,autoComplete:"current-password",XI:d&&"currentPassword"===d?__c.E("hJ1KSA",[]):void 0})),W2.createElement("div",
{className:"Bepmlg"},W2.createElement(__c.Gy,null,__c.E("K5N6yQ",[])),W2.createElement(h,{placeholder:__c.E("zYVQQw",[]),disabled:c,autoComplete:"new-password"})),W2.createElement("div",{className:"Bepmlg"},W2.createElement(__c.Gy,null,__c.E("LCMsPQ",[])),W2.createElement(a,{placeholder:__c.E("82v6/Q",[]),disabled:c,autoComplete:"new-password"})),d&&"generic"===d&&W2.createElement(__c.Rp,{title:__c.E("VZbscw",[])}),W2.createElement("div",{className:"fMMzJg"},W2.createElement(__c.hq,{type:"submit",
stretch:!0,disabled:c},c?W2.createElement(__c.zi,{color:"white"}):__c.E("M6dEKw",[]))),b&&W2.createElement("div",{className:"hn2aXA n9zSJA ZTpOuQ"},W2.createElement(__c.xF,{onClick:e},__c.E("a6BqMw",[]))))}};var b3=class{constructor(a){let b=a.userId,c=a.Rva,d=a.YCa;a=a.$aa;this.Ae={kind:0};this.userId=b;this.Rva=c;this.YCa=d;this.$aa=a}};__c.g(()=>b3.prototype.Ae);Object(e3.a)([$2.E.ref],b3.prototype,"Ae",void 0);
var a3=class{constructor(a){let b=a.Ha,c=a.aa,d=a.u7;this.analytics=a.analytics;this.Ha=b;this.aa=c;this.u7=d}async LFa(a,b){if(this.validate(a)){this.pl(a,__c.Ic.QH());try{const c=await this.aa.AH(new __c.xE({user:a.userId,$h:a.Rva.value,password:a.YCa.value}));switch(c.type){case "SUCCESS":this.analytics.trackResetPassword({section:"homepage",subsection:"modal",location:"password_change_modal"});this.pl(a,__c.Ic.fX(!0));b();this.u7&&this.u7();__c.dp(this.Ha,{Ud:__c.E("Vv+gIg",[])});break;case "ERROR":this.handleError(a);
break;default:throw new __c.F(c);}}catch(c){this.handleError(a,c)}}}validate(a){return __c.SA.Xeb(a.Rva,a.YCa,a.$aa)}handleError(a,b){b instanceof __c.ec?this.pl(a,__c.Ic.PL("currentPassword")):this.pl(a,__c.Ic.PL("generic"))}pl(a,b){a.Ae=b}};__c.g(()=>a3.prototype.pl);Object(e3.a)([$2.l],a3.prototype,"pl",null);var c3=class{constructor(a){this.now=1<arguments.length&&void 0!==arguments[1]?arguments[1]:()=>kpc.g(6E4);this.Bs=new $2.c;this.Jt=a}static create(a,b){const c=new c3(a);setInterval(async()=>{try{const d=await b.DUa(new hpc({}));$2.J(()=>c.Jt=d.Jt)}catch(d){}},6E5);return c}get mMa(){return this.nMa[0]}get nMa(){const a=this.now();return this.Jt.filter(b=>!this.Bs.has(b.message)&&(!b.LCa||b.LCa<=a)&&(!b.uCa||a<b.uCa))}ff(a){this.Bs.add(a.message)}};__c.g(()=>c3.prototype.Jt);
Object(e3.a)([$2.E.struct],c3.prototype,"Jt",void 0);__c.g(()=>c3.prototype.mMa);Object(e3.a)([$2.o],c3.prototype,"mMa",null);__c.g(()=>c3.prototype.nMa);Object(e3.a)([$2.o],c3.prototype,"nMa",null);var d3=class extends W2.PureComponent{render(){return W2.createElement(epc,{Ff:!0,ze:this.ff},this.props.alert.message)}ff(){this.props.store.ff(this.props.alert)}};__c.g(()=>d3.prototype.ff);Object(e3.a)([$2.l.bound],d3.prototype,"ff",null);__c.WXa={sRb:async function(a){let b=a.y0,c=a.da;var d=a.Lb;let e=a.xa,f=a.Vc,h=a.bl,l=a.Db,m=a.XA,p=a.ga,q=a.Ha,u=a.ia,t=a.wc,x=a.kb,z=a.ha;a=a.qd;bpc({Jt:b.Jt,gua:c.gua,Lb:d});d=await Woc({da:c,Lb:d,xa:e,R7:b.R7,Fia:b.Fia,H7:b.H7,Vc:f,bl:h,Uca:b.Uca,Db:l,Hla:b.Hla,K7:b.K7,M6:b.M6?new Date(1E3*b.M6):void 0,N6:b.N6,wc:t,kb:x,ha:z,qd:a});const A=d.LPb,B=apc({ga:p,userId:e.user.id,V3b:b.XA||m,analyticsService:c.analyticsService,Ha:q,aa:c.aa,yc:c.yc,hka:d.hka,ia:u}).Ny;Object($2.J)(()=>{A.Ny=B});return{Ny:B}}};
}).call(self, self._ad7c2fd0a872ef66d228a0d2ca415b43);}},[["Mq8p8","EEO/","HScp","K2W9","fDYT","rZBJ"]]]);
//# sourceMappingURL=fcf42d81328c5b711d0100ab6ee83709.js.map