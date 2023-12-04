(function(){"use strict";var t={960:function(t,e,n){var r=n(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("ProjectDetails")],1)},s=[],i=function(){var t=this,e=t._self._c;return e("div",[e("HeaderComp"),e("BannerComp",{attrs:{"banner-info":t.bannerInfo}}),t._l(t.projectDetails,(function(n){return e("div",{key:n.id,staticClass:"project-details center"},[e("h2",{staticClass:"project-details__title center"},[t._v(t._s(n.name))]),e("p",{staticClass:"project-details__text center"},[t._v(t._s(n.desc1))]),e("p",{staticClass:"project-details__text center"},[t._v(t._s(n.desc2))]),e("img",{staticClass:"project-details__img",attrs:{src:n.image,alt:"project_photo"}})])})),e("FooterComp")],2)},o=[],l=n(3822),c=function(){var t=this,e=t._self._c;return e("div",[e("footer",{staticClass:"footer center"},[e("div",{staticClass:"footer__interno"},[e("h1",{staticClass:"footer__interno_title header__left_text"},[e("a",{staticClass:"footer__interno_logo",attrs:{href:"#"}},[e("svg",{attrs:{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z",fill:"#CDA274"}})])]),t._v(" Interno ")]),e("p",{staticClass:"footer__interno_text"},[t._v(" It is a long established fact that a reader will be distracted lookings. ")]),e("div",{staticClass:"footer__interno_icons"},[e("a",{staticClass:"footer__interno_icon",attrs:{href:"https://ru.wikipedia.org/wiki/%D0%A2%D0%B2%D0%B8%D1%82%D1%82%D0%B5%D1%80"}},[e("svg",{attrs:{width:"19",height:"16",viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z",fill:"#292F36"}})])]),e("a",{staticClass:"footer__interno_icon",attrs:{href:"https://ru.wikipedia.org/wiki/LinkedIn"}},[e("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z",fill:"#292F36"}})])])])]),e("div",{staticClass:"footer__pages"},[e("h1",{staticClass:"footer__pages_title"},[t._v("Pages")]),t._l(t.pages,(function(n){return e("a",{key:n.id,staticClass:"footer__pages_link",attrs:{href:"index.html"}},[t._v(" "+t._s(n)+" ")])}))],2),e("div",{staticClass:"footer__services"}),e("div",{staticClass:"footer__contact"},[e("h1",{staticClass:"footer__contact_title"},[t._v("Contact")]),e("div",{staticClass:"footer__contact_address"},t._l(t.contacts,(function(n){return e("p",{key:n.id,staticClass:"footer__contact_details"},[t._v(" "+t._s(n)+" ")])})),0)])])])},u=[],_={name:"FooterComp",data(){return{pages:["Home","Project","Blog"],contacts:["55 East Birchwood Ave. Brooklyn, New York 11201","contact@interno.com","(123) 456 - 7890"]}}},d=_,f=n(1001),p=(0,f.Z)(d,c,u,!1,null,"06b6e3a0",null),m=p.exports,v=function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header center",attrs:{id:"home"}},[e("div",{staticClass:"header__left"},[e("a",{staticClass:"header__left_logo",attrs:{href:"#"}},[e("img",{attrs:{src:t.logo,alt:"logo"}})]),e("a",{staticClass:"header__left_text",attrs:{href:"#"}},[t._v("Interno")])]),e("nav",{staticClass:"header__breadcrumbs"},t._l(t.breadcrumbs,(function(n){return e("a",{key:n.id,staticClass:"header__breadcrumbs_link",attrs:{href:"#"}},[t._v(t._s(n))])})),0)])])},C=[],h={name:"HeaderComp",data(){return{logo:"img/header_logo.svg",breadcrumbs:["Home","Project","Blog"]}},methods:{}},g=h,b=(0,f.Z)(g,v,C,!1,null,"7134ec56",null),w=b.exports,j=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"banner"},[e("img",{staticClass:"banner__img",attrs:{src:t.bannerInfo.banner,alt:"banner_img"}}),t.bannerInfo.bannerTitle||t.bannerInfo.bannerLinks?e("div",{staticClass:"banner__intro"},[e("h2",{staticClass:"banner__intro_title"},[t._v(t._s(t.bannerInfo.bannerTitle))]),e("nav",{staticClass:"banner__intro_breadcrumbs"},t._l(t.bannerInfo.bannerLinks,(function(n){return e("a",{key:n.id,staticClass:"blog-link",attrs:{href:"#"}},[t._v(t._s(n))])})),0)]):t._e()])])},k=[],x={name:"BannerComp",props:["bannerInfo"],data(){return{}},methods:{}},D=x,P=(0,f.Z)(D,j,k,!1,null,"f2b4fe42",null),Z=P.exports,y={name:"ProjectDetails",data(){return{bannerInfo:{banner:"img/project_details_banner.jpg"}}},mounted(){this.fetchData()},methods:{...(0,l.nv)(["fetchData"])},computed:{...(0,l.Se)(["projectDetails"])},components:{HeaderComp:w,FooterComp:m,BannerComp:Z}},B=y,H=(0,f.Z)(B,i,o,!1,null,"06a837d5",null),I=H.exports,O={name:"App",components:{ProjectDetails:I}},V=O,T=(0,f.Z)(V,a,s,!1,null,null,null),A=T.exports,M={state:{projectDetails:[]},getters:{projectDetails(t){return t.projectDetails}},mutations:{SET_PROJECTS(t,e){t.projectDetails=e}},actions:{fetchData({commit:t}){setTimeout((()=>{t("SET_PROJECTS",[{id:1,name:"Minimal Look Bedrooms",desc1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ",desc2:"In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",image:"img/project_details_img1.jpg"}])}),1500)}}};r.ZP.use(l.ZP),r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(A),store:new l.ZP.Store(M)}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,s){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],s=t[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(o=!1,s<i&&(i=s));if(o){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,s,i=r[0],o=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var u=l(n)}for(e&&e(r);c<i.length;c++)s=i[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},r=self["webpackChunkproject"]=self["webpackChunkproject"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(960)}));r=n.O(r)})();
//# sourceMappingURL=app.7750fe76.js.map