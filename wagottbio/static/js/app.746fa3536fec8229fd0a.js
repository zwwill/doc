webpackJsonp([0],[,,function(t,a,s){"use strict";var n=s(1),i=s(29),e=s(23),r=s.n(e);n.a.use(i.a),a.a=new i.a({routes:[{path:"/",name:"Home",component:r.a}]})},function(t,a,s){function n(t){s(14)}var i=s(0)(s(4),s(28),n,null,null);t.exports=i.exports},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(22),i=s.n(n),e=s(21),r=s.n(e);a.default={name:"app",components:{"g-header":i.a,"g-footer":r.a},methods:{}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(15),i=s.n(n),e=s(16),r=s.n(e),c=s(17),l=s.n(c),v=s(18),o=s.n(v);a.default={props:[],data:function(){return{banners:[{imgUrl:i.a,aUrl:""},{imgUrl:r.a,aUrl:""},{imgUrl:l.a,aUrl:""},{imgUrl:o.a,aUrl:""}],bannerShowIndex:0,mouseOver:0}},watch:{bannerShowIndex:function(){}},mounted:function(){this.bannerAnitStart()},methods:{jumpToIndex:function(t){this.bannerShowIndex=t},bannerAnitStart:function(){var t=this;this.bannerAnit=setInterval(function(){t.bannerNext()},5e3)},bannerAnitStop:function(){clearInterval(this.bannerAnit)},bannerNext:function(){var t=this.bannerShowIndex+1;t>=this.banners.length&&(t=0),this.jumpToIndex(t)},bannerPrev:function(){var t=this.bannerShowIndex-1;t<0&&(t=this.banners.length-1),this.jumpToIndex(t)},bannerMouseOver:function(){this.bannerAnitStop(),this.mouseOver=1},bannerMouseOut:function(){this.bannerAnitStart(),this.mouseOver=0}}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"",props:[],data:function(){return{}}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:[],data:function(){return{nav:{}}}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(20),i=s.n(n);a.default={name:"indexBody",components:{"top-banner":i.a},data:function(){return{}},methods:{}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(1),i=s(3),e=s.n(i),r=s(2);n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:e.a}})},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a,s){t.exports=s.p+"static/img/banner1.6770c64.jpg"},function(t,a,s){t.exports=s.p+"static/img/banner2.8dde592.jpg"},function(t,a,s){t.exports=s.p+"static/img/banner3.e458549.jpg"},function(t,a,s){t.exports=s.p+"static/img/banner4.cc7e531.jpg"},function(t,a,s){t.exports=s.p+"static/img/wxqrcode.e3735e6.jpg"},function(t,a,s){function n(t){s(13)}var i=s(0)(s(5),s(27),n,"data-v-e603eaba",null);t.exports=i.exports},function(t,a,s){function n(t){s(11)}var i=s(0)(s(6),s(25),n,"data-v-1f287192",null);t.exports=i.exports},function(t,a,s){function n(t){s(12)}var i=s(0)(s(7),s(26),n,"data-v-405ad584",null);t.exports=i.exports},function(t,a,s){function n(t){s(10)}var i=s(0)(s(8),s(24),n,"data-v-1e1947bd",null);t.exports=i.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"g-body"},[s("top-banner"),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"u-news"},[s("a",{staticClass:"hot-new",attrs:{href:""}},[s("p",{staticClass:"tlt"},[t._v("植物提取物全球主要植物提取物生产企业简介")]),t._v(" "),s("p",{staticClass:"sub-tlt"},[t._v("国内（东北地区）：\n        大兴安岭林格贝寒带生物产业集团：是一家专业生产蓝莓花青素，果粉以及各种植物提取物的企业。90%以上的产品出口美国，日本，欧洲等地。\n        国内（陕西地区）：\n        1、陕西嘉禾植物化工有限责任公司：原老总曾销售原料，起步较早，发展较快，主导产品为贯叶连翘、枳实、育亨宾等。 ···")])]),t._v(" "),s("div",{staticClass:"u-list"},[s("div",{staticClass:"u-tab"},[s("span",{staticClass:"i-tab"},[t._v("公司新闻")]),t._v(" "),s("span",{staticClass:"i-tab"},[t._v("行业动态")]),t._v(" "),s("span",{staticClass:"i-tab"},[t._v("提取物顾问")]),t._v(" "),s("div",{staticClass:"sub-line"},[s("span",{staticClass:"slide-bar"})])]),t._v(" "),s("div",{staticClass:"u-box"},[s("ul",[s("li",[s("a",{attrs:{href:""}},[s("span",{staticClass:"i-time"},[t._v("2017.05.05")]),t._v("日内瓦 VITA FOOD 2017")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[s("span",{staticClass:"i-time"},[t._v("2017.03.29")]),t._v("FIC 2017 展会回顾")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[s("span",{staticClass:"i-time"},[t._v("2017.03.10")]),t._v("美国天然有机食品展览会")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[s("span",{staticClass:"i-time"},[t._v("2017.03.03")]),t._v("上海2017FIC展会")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[s("span",{staticClass:"i-time"},[t._v("2017.03.03")]),t._v("上海2017FIC展会")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"u-certificate"},[s("ul",[s("li",{staticClass:"first-li"},[s("i",{staticClass:"ic-eco"}),t._v(" "),s("p",[t._v("欧盟ECOCERT有机认证")])]),t._v(" "),s("li",[s("i",{staticClass:"ic-cqc"}),t._v(" "),s("p",[t._v("食品安全管理体系认证")])]),t._v(" "),s("li",[s("i",{staticClass:"ic-cccm"}),t._v(" "),s("p",[t._v("植物提取物优质供应商")])]),t._v(" "),s("li",[s("i",{staticClass:"ic-halal"}),t._v(" "),s("p",[t._v("印尼清真认证")])])])])}]}},function(t,a,s){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"g-footer"},[t._m(0),t._v(" "),s("div",{staticClass:"container"},[t._m(1),t._v(" "),s("div",{staticClass:"u-cpy"},[s("p",[t._v("成都市蒲江县寿安镇迎宾大道628号")]),t._v(" "),s("p",[t._v("成都华高生物制品有限公司版权所有 © 2012-"+t._s((new Date).getFullYear())+"  ·  浙ICP备17006647号-2")])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"u-server"},[s("ul",[s("li",[s("i",{staticClass:"i-logo i-24h"}),s("p",[t._v("7 X 24小时客户支持")])]),t._v(" "),s("li",[s("i",{staticClass:"i-logo i-1v1"}),s("p",[t._v("1 V 1 大客户服务")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"u-contact"},[n("ul",{staticClass:"u-about"},[n("li",{staticClass:"tlt"},[t._v("关于")]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("公司介绍")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("产品中心")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("联系我们")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("加入我们")])])]),t._v(" "),n("ul",{staticClass:"u-cont"},[n("li",{staticClass:"tlt"},[t._v("联系方式")]),t._v(" "),n("li",[t._v("电话：+86-028-88678999")]),t._v(" "),n("li",[t._v("传真：+86-028-88678999")]),t._v(" "),n("li",[t._v("邮箱：info@wagottbio.com")])]),t._v(" "),n("ul",{staticClass:"u-links"},[n("li",{staticClass:"tlt"},[t._v("友情链接")]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.customs.gov.cn/"}},[t._v("中国海关")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.cccmhpie.org.cn/"}},[t._v("中国医药保健品商会")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.scciq.gov.cn/"}},[t._v("四川入境检验检疫局")])])]),t._v(" "),n("ul",{staticClass:"u-wx"},[n("li",{staticClass:"tlt"},[t._v("关注高华")]),t._v(" "),n("li",[n("i",{staticClass:"i-logo-wx"}),t._v(" 微信公众号")]),t._v(" "),n("li",[n("img",{staticClass:"img-wxqrcode",attrs:{src:s(19),alt:""}})])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"g-header"},[s("div",{attrs:{id:"header"}},[s("div",{staticClass:"g-wrap"},[s("a",{attrs:{id:"logo",href:""}}),t._v(" "),s("ul",{attrs:{id:"nav"}},[s("li",{staticClass:"i-nav w2"},[s("a",{staticClass:"a-nav on",attrs:{href:""}},[s("span",[t._v("首页")]),s("span",{staticClass:"bkg"})])]),t._v(" "),s("li",{staticClass:"i-nav more"},[s("a",{staticClass:"a-nav",attrs:{href:""}},[s("span",[t._v("公司介绍")]),s("span",{staticClass:"bkg"})]),t._v(" "),s("span",{staticClass:"sub-nav"},[s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("关于我们")]),t._v(" "),s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("企业理念")]),t._v(" "),s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("荣誉资质")])])]),t._v(" "),s("li",{staticClass:"i-nav more"},[s("a",{staticClass:"a-nav",attrs:{href:""}},[s("span",[t._v("新闻咨询")]),s("span",{staticClass:"bkg"})]),t._v(" "),s("span",{staticClass:"sub-nav"},[s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("公司新闻")]),t._v(" "),s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("行业动态")]),t._v(" "),s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("提取物顾问")])])]),t._v(" "),s("li",{staticClass:"i-nav more"},[s("a",{staticClass:"a-nav",attrs:{href:""}},[s("span",[t._v("产品中心")]),s("span",{staticClass:"bkg"})]),t._v(" "),s("span",{staticClass:"sub-nav"},[s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("茶提取物")]),t._v(" "),s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("客户定制")])])]),t._v(" "),s("li",{staticClass:"i-nav more"},[s("a",{staticClass:"a-nav",attrs:{href:""}},[s("span",[t._v("质量管理")]),s("span",{staticClass:"bkg"})]),t._v(" "),s("span",{staticClass:"sub-nav"},[s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("质量体系")]),t._v(" "),s("a",{staticClass:"i-snav",attrs:{href:""}},[t._v("荣誉认证")])])]),t._v(" "),s("li",{staticClass:"i-nav"},[s("a",{staticClass:"a-nav",attrs:{href:""}},[s("span",[t._v("种植基地")]),s("span",{staticClass:"bkg"})])]),t._v(" "),s("li",{staticClass:"i-nav"},[s("a",{staticClass:"a-nav",attrs:{href:""}},[s("span",[t._v("在线办公")]),s("span",{staticClass:"bkg"})])]),t._v(" "),s("li",{staticClass:"i-nav"},[s("a",{staticClass:"a-nav",attrs:{href:""}},[s("span",[t._v("联系我们")]),s("span",{staticClass:"bkg"})])])]),t._v(" "),s("div",{attrs:{id:"shop"}},[s("a",{staticClass:"btn-lang tmp-unselect",attrs:{href:"javascript:void(0);"}},[t._v("中/EN")])])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"g-banner",on:{mouseover:t.bannerMouseOver,mouseout:t.bannerMouseOut}},[s("ul",{staticClass:"pics"},[t._l(t.banners,function(a,n){return[s("li",{staticClass:"i-bn",style:"background-image: url("+a.imgUrl+"); opacity:"+(t.bannerShowIndex===n?"1":"0")+";"},[a.aUrl?s("a",{attrs:{href:a.aUrl}}):t._e()])]})],2),t._v(" "),s("div",{staticClass:"btns"},[s("a",{class:"prev"+(t.mouseOver?" on":""),attrs:{href:"javascript:void(0);"},on:{click:t.bannerPrev}},[s("span",{staticClass:"off"}),s("span",{staticClass:"on"})]),t._v(" "),s("a",{class:"next"+(t.mouseOver?" on":""),attrs:{href:"javascript:void(0);"},on:{click:t.bannerNext}},[s("span",{staticClass:"off"}),s("span",{staticClass:"on"})])]),t._v(" "),s("div",{staticClass:"g-wrap"},[s("ul",{staticClass:"idxs"},[t._l(t.banners,function(a,n){return[t.bannerShowIndex==n?s("li",{staticClass:"on"}):s("li",{on:{click:function(a){t.jumpToIndex(n)}}})]})],2)])])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("g-header"),t._v(" "),s("router-view"),t._v(" "),s("g-footer")],1)},staticRenderFns:[]}}],[9]);
//# sourceMappingURL=app.746fa3536fec8229fd0a.js.map