webpackJsonp([61],{"+ska":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header-no-login"}},"0ebD":function(t,e){},"7FKN":function(t,e){},DerN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("TYHj"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var o=i("NrzC");var r=function(t){i("U2Iv")},c=i("VU/8")(s.a,o.a,!1,r,"data-v-0dcab89a",null);e.default=c.exports},NrzC:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"marquee",style:{"font-size":t.fontSize,height:t.height,"line-height":t.height}},[i("div",{staticClass:"marquee-icon",style:{height:t.height,width:t.height}},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"wrap",style:{"font-size":t.fontSize,height:t.height,"line-height":t.height}},[i("div",{staticClass:"content",style:{"font-size":t.fontSize,height:t.height,"line-height":t.height,width:this.width+"px","animation-duration":this.width/36+"s"},domProps:{innerHTML:t._s(t.text)}})])])},staticRenderFns:[]};e.a=n},OM8P:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view-page"},[t.$store.state.user.userInfo?i("header-logged",{directives:[{name:"no-touch-move",rawName:"v-no-touch-move"}],on:{logout:t.onLogout}}):i("header-no-login",{directives:[{name:"no-touch-move",rawName:"v-no-touch-move"}],on:{login:t.onLogin,reg:t.onReg,test:t.onTest}}),t._v(" "),i("div",{staticClass:"body"},[i("cube-scroll",{ref:"scroll"},[i("vux-swiper",{ref:"swiper",attrs:{list:t.swiperList,"show-desc-mask":!1,auto:"",loop:"","aspect-ratio":.4,"show-dots":!1},on:{"on-click-list-item":t.swiperItemClick}}),t._v(" "),i("div",{staticClass:"main"},[i("div",{staticClass:"panel"},[i("j-marquee",{attrs:{lists:t.notice,"font-size":"0.3rem",height:"0.8rem"}}),t._v(" "),i("vux-tabbar",{staticClass:"tab",attrs:{"icon-class":"icon-class"},on:{"on-index-change":t.onTabChange},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.tabs,function(e){return i("vux-tabbar-item",{key:e.name,style:{display:e.name?"block":"none"},attrs:{link:e.link}},[e.name?i("img",{staticClass:"tab-icon",attrs:{slot:"icon",src:e.icon,alt:""},slot:"icon"}):t._e(),t._v(" "),e.name?i("p",{staticClass:"tab-lab",attrs:{slot:"label"},slot:"label"},[t._v(t._s(e.name))]):t._e()])}),1)],1),t._v(" "),i("p",{staticClass:"hot-line"},[i("i",{staticClass:"fa fa-fw fa-fire",staticStyle:{color:"red"}}),t._v("热门")]),t._v(" "),i("div",{directives:[{name:"hammer",rawName:"v-hammer.swipeleft",value:t.onSwiperLeft,expression:"onSwiperLeft",modifiers:{swipeleft:!0}},{name:"hammer",rawName:"v-hammer.swiperight",value:t.onSwiperRight,expression:"onSwiperRight",modifiers:{swiperight:!0}}],staticClass:"animation-box",style:{height:t.listHeight}},[i("transition-group",{attrs:{name:t.animation}},t._l(t.tabs,function(e,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:n===t.tabIndex,expression:"i===tabIndex"}],key:e.name+"_",staticClass:"item-box clear-fix"},t._l(t.games,function(s,a){return(0===n?a<20:t.checkList(s,e))?i("div",{key:a,staticClass:"game-item f-l clear-fix",on:{click:function(e){return t.gameClick(s)}}},[i("img",{staticClass:"game-icon f-l",attrs:{alt:"",src:t.$config.getSrc("default/"+s.icon)}}),t._v(" "),i("div",{staticClass:"game-content f-l"},[i("p",{staticClass:"game-label"},[t._v(t._s(s.name))]),t._v(" "),i("p",{staticClass:"game-summary"},[t._v(t._s(s.summary))])])]):t._e()}),0)}),0)],1),t._v(" "),i("div",{staticStyle:{width:"100%",height:"1.2rem"}})])],1)],1),t._v(" "),t._t("default")],2)},staticRenderFns:[]};e.a=n},TYHj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i("qhTv"),a=(n=s)&&n.__esModule?n:{default:n};e.default={mixins:[a.default],name:"JMarquee",props:{lists:{type:Array,required:!0},fontSize:{type:String,default:""},height:{type:String,default:""}},data:function(){return{text:"",width:""}},watch:{lists:{handler:function(){var t=this.getTextSize(this.lists.join(" "),"0.24rem");this.text=t.text,this.width=t.width},deep:!0}},methods:{getTextSize:function(t,e){t=(t=t.replace(/<[^<>]+>/g,"")).replace("\n","");var i=document.createElement("span"),n={};return n.width=i.offsetWidth,n.height=i.offsetHeight,i.style.visibility="hidden",i.style.fontSize=e,i.style.display="inline-block",i.style.whiteSpace="nowrap",document.body.appendChild(i),i.innerHTML=t,n.text=t,n.width=parseFloat(window.getComputedStyle(i).width)-n.width,n.height=parseFloat(window.getComputedStyle(i).height)-n.height,document.body.removeChild(i),n}}}},U2Iv:function(t,e){},UuTK:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"header"},[i("img",{staticClass:"logo-h",attrs:{alt:"",src:"/m/static/img/logo.png?v=2019-05-13T15:03:49"},on:{click:function(e){return t.$router.push("/")}}}),t._v(" "),i("ul",{staticClass:"header-links clear-fix"},[i("li",{staticClass:"f-r",on:{click:function(e){return t.$emit("logout")}}},[t._v("退出")]),t._v(" "),i("li",{staticClass:"f-r"},[t._v("余额:"+t._s(t.$store.state.user.userInfo.balance))])])])},staticRenderFns:[]};e.a=n},WUMS:function(t,e){},kS1H:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("wqdb"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var o=i("OM8P");var r=function(t){i("rR5S"),i("0ebD")},c=i("VU/8")(s.a,o.a,!1,r,"data-v-f314875c",null);e.default=c.exports},l20h:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"header"},[i("div",{staticClass:"logo-h"}),t._v(" "),i("ul",{staticClass:"header-links clear-fix"},[i("li",{staticClass:"f-r",on:{click:function(e){return t.$emit("login")}}},[t._v("登录/注册")]),t._v(" "),i("li",{staticClass:"f-r",on:{click:function(e){return t.$emit("test")}}},[t._v("试玩")])])])},staticRenderFns:[]};e.a=n},mjGf:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header-logged"}},n6yh:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mjGf"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var o=i("UuTK");var r=function(t){i("7FKN")},c=i("VU/8")(s.a,o.a,!1,r,"data-v-52afe696",null);e.default=c.exports},qhTv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{jroll:null,wrapper:null,chinaNum:{1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十"},pullDownRefreshObj:{observeDOM:!0,click:!0,probeType:1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,txt:"刷新成功"},pullUpLoadObj:{observeDOM:!0,click:!0,probeType:1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,txt:"刷新成功"}}},mounted:function(){this.refreshMeta()},methods:{getKF:function(){var t=this.$store.state.main.config.service.find(function(t){return"on"===t.status});return t?t.url:""},onGameClick:function(t){var e=this;switch(t.type){case"list":this.$router.push("/home/type/"+t.id);break;case"lottery":localStorage.token?"test"===localStorage.Public_User?this.toastText("彩票游戏暂不支持试玩",window.TOAST_POSITION.MIDDLE):this.$router.push("/lottery/"+t.id):this.$router.push("/admin/login");break;case"lottery-list":this.$router.push("/home/type/"+t.id);break;case"game":if(localStorage.token){var i=window.open("","_blank");this.$store.dispatch("games/gameLoginNew",t.id).then(function(t){if(200===t.code)return i?i.location.href=t.data.url:window.location.href=t.data.url,!0;t.message?(i&&i.close(),e.toastText(t.message,window.TOAST_POSITION.TOP)):t.msg&&(i&&i.close(),e.toastText(t.msg,window.TOAST_POSITION.TOP))})}else this.$router.push("/admin/login");break;case"game-list":this.$router.push("/home/game/"+t.id);break;case"other":switch(t.id.toString()){case"99998":this.$router.push("/activity")}}},onLogout:function(){var t=this;this.$store.dispatch("user/logout",{callback:function(e){e?t.toastText(e,window.TOAST_POSITION.MIDDLE):(t.toastText("退出成功",window.TOAST_POSITION.MIDDLE),t.$stomp.reInit(),setTimeout(function(){t.$router.replace("/")},100))}})},testLogin:function(t,e){var i=this;this.$store.dispatch("user/testLogin",{callback:function(n){200===n.code?(i.toastText("试玩登陆成功",window.TOAST_POSITION.MIDDLE),"function"==typeof t?t():"function"==typeof e&&e(),setTimeout(function(){i.$stomp.reInit()},1e3)):(i.toastText(n.message,window.TOAST_POSITION.MIDDLE),"function"==typeof e&&e())},errBack:e})},checkGameTypeShow:function(t){if(!this.siteConfig.gameType||!this.siteConfig.gameType.length)return!0;switch(t){case"彩票返点":case"彩票":return this.siteConfig.gameType.includes("lottery");case"棋牌返水":case"棋牌":return this.siteConfig.gameType.includes("chess");case"电子返水":case"电子":return this.siteConfig.gameType.includes("slot");case"体育返水":case"体育":return this.siteConfig.gameType.includes("sport");case"视讯返水":case"视讯":return this.siteConfig.gameType.includes("live");default:return!0}},showIosAlert:function(t){this.$store.commit("main/iosAlert",t)},checkAgent:function(t){return!!t||(this.toastText("请输入邀请码",window.TOAST_POSITION.MIDDLE),!1)},refreshMeta:function(){this.meta=this.$route.meta,this.$store.state.main.showTab=!!this.meta.tab},checkUserForLogin:function(t){return t?!!/^[A-z0-9]{5,20}$/.test(t)||(this.toastText("帐号5-20位字母或数字",window.TOAST_POSITION.MIDDLE),!1):(this.toastText("帐号不能为空",window.TOAST_POSITION.MIDDLE),!1)},checkUserForRegister:function(t,e){return t?!!/^[A-z0-9]{6,10}$/.test(t)||(this.toastText("帐号6-10位字母或数字",e||window.TOAST_POSITION.MIDDLE),!1):(this.toastText("帐号不能为空",e||window.TOAST_POSITION.MIDDLE),!1)},checkPassword:function(t){return t?!!/^[A-z0-9]{6,20}$/.test(t)||(this.toastText("密码6-20位字母或数字",window.TOAST_POSITION.MIDDLE),!1):(this.toastText("密码不能为空",window.TOAST_POSITION.MIDDLE),!1)},checkPasswordForRegister:function(t){return t?!!/^[A-z0-9]{8,20}$/.test(t)||(this.toastText("密码8-20位字母或数字",window.TOAST_POSITION.MIDDLE),!1):(this.toastText("密码不能为空",window.TOAST_POSITION.MIDDLE),!1)},checkPassword2:function(t,e){return t===e||(this.toastText("两次输入的密码不一样",window.TOAST_POSITION.MIDDLE),!1)},checkCode:function(t){if(t)return!!/[\d]{4}/.test(t)||(this.toastText("验证码为4位数字",window.TOAST_POSITION.MIDDLE),!1);this.toastText("请输入验证码",window.TOAST_POSITION.MIDDLE)}},watch:{"$route.meta.id":"refreshMeta"},computed:{pageLoading:{get:function(){return this.$store.state.vux.pageLoading},set:function(t){this.$store.state.vux.pageLoading=t}},options:function(){return{pullDownRefresh:this.pullDownRefreshObj,pullUpLoad:this.pullUpLoadObj,scrollbar:!1}},publicStaticHost:function(){return this.$store.state.main.config?this.$store.state.main.config.statics:"/"}},beforeDestroy:function(){this.$store.state.main.loadingText=""}}},rNLN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("+ska"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var o=i("l20h");var r=function(t){i("WUMS")},c=i("VU/8")(s.a,o.a,!1,r,"data-v-7310d461",null);e.default=c.exports},rR5S:function(t,e){},wqdb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(i("aIIw")),s=l(i("kcQR")),a=l(i("rNLN")),o=l(i("n6yh")),r=l(i("DerN")),c=l(i("qhTv")),u=l(i("ypy9"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[c.default,u.default],name:"HomeDefault",components:{HeaderLogged:o.default,HeaderNoLogin:a.default,JMarquee:r.default},data:function(){return{animation:"",moveLen:0,downloadAppTarget:"",tabIndex:0,thisTab:{},hotLen:0,listHeight:0,tabs:[{},{name:"电子游艺",icon:"/static/img/icon/icon-dz.png",parent:["slot","chess"]},{name:"彩票游戏",icon:"/static/img/icon/icon-cp.png",parent:["isLottery"]},{name:"真人视讯",icon:"/static/img/icon/icon-sx.png",parent:["live_casino"]},{name:"体育赛事",icon:"/static/img/icon/icon-ty.png",parent:["sport"]}]}},watch:{tabIndex:function(t,e){var i=this;this.animation=t>e?"slide-left":"slide-right",this.refreshScroll(),this.$nextTick(function(){i.refreshScroll()})}},mounted:function(){this.refreshScroll()},methods:{getListHeight:function(){var t=this,e=0===this.tabIndex?20:this.games.filter(function(e){return t.checkList(e,t.thisTab)}).length;return e<=0?"0":.75*(e+=e%2)+"rem"},onSwiperLeft:function(){this.tabIndex+1<this.tabs.length&&this.tabIndex++},onSwiperRight:function(){this.tabIndex>0&&this.tabIndex--},refreshScroll:function(){this.listHeight=this.getListHeight(),this.$refs.scroll&&this.$refs.scroll.refresh()},gameClick:function(t){var e=this;t&&!this.moving&&("yes"===t.isLottery?localStorage.token?"test"===localStorage.Public_User?this.$vux.confirm.show({content:'<p style="padding: 0.5rem 0;font-size: 0.349rem;color:#333;margin-top: 0.1rem">彩票暂无试玩,立即注册</p>',onCancel:function(){},onConfirm:function(){e.$router.push("/admin/register")}}):this.$router.push("/lottery/"+t.id):this.$router.push("/admin/login"):"live_casino"===t.parent||"vr_lottery"===t.parent||"sport"===t.parent?this.getParam(t):this.$router.push({path:"/games",query:{id:t.classId,name:t.name}})),this.moving=!1},getParam:function(t){var e=this;return(0,s.default)(n.default.mark(function i(){var s;return n.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(localStorage.token){i.next=3;break}return location.href="#/admin/login",i.abrupt("return",!1);case 3:s=e.$router.resolve({path:"/plays/loading",query:{login:!0,gameName:t.special_setting.gameName,platform:t.special_setting.platform}}),window.open(s.href,"_blank");case 5:case"end":return i.stop()}},i,e)}))()},checkList:function(t,e){return!(!e||!e.parent)&&(e.parent.indexOf("isLottery")>-1?"yes"===t.isLottery:e.parent.indexOf(t.parent)>-1)},onTabChange:function(t){this.thisTab=this.tabs[t]}}}},ypy9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{swiperList:[],notice:[],games:[],hots:[],noticeTimer:null}},created:function(){var t=this;this.noticeTimer=window.setIntervalByIframe(this.getNotice.bind(this),6e4),this.getBanner(),this.getHot();var e=void 0,i=void 0,n=void 0,s=void 0;!function a(){t.$refs.swiper?(t.$refs.swiper.$el.addEventListener("touchstart",function(a){n=e=a.touches[0].pageX,s=i=a.touches[0].pageY,t.moveLen=0}),t.$refs.swiper.$el.addEventListener("touchmove",function(a){var o=Math.abs(a.touches[0].pageX-e),r=Math.abs(a.touches[0].pageY-i);o>=r&&a.stopPropagation(),o=Math.abs(a.touches[0].pageX-n),r=Math.abs(a.touches[0].pageY-s),t.moveLen+=Math.sqrt(o*o+r*r),n=a.touches[0].pageX,s=a.touches[0].pageY},!1)):setTimeout(a,500)}()},beforeDestroy:function(){window.clearIntervalByIframe(this.noticeTimer)},methods:{onDownload:function(){this.$device.isAndroid?this.siteConfig.download.android?this.siteConfig.autoDownload.android?window.location.href=this.siteConfig.download.android:this.$router.push("/download"):(this.$store.state.main.iosAlert.content="暂不支持安卓APP下载",this.$store.state.main.iosAlert.show=!0):this.siteConfig.download.ios?this.siteConfig.autoDownload.ios?window.location.href=this.siteConfig.download.ios:this.$router.push("/download"):(this.$store.state.main.iosAlert.content="暂不支持苹果APP下载",this.$store.state.main.iosAlert.show=!0)},getBanner:function(){var t=this;this.$store.dispatch("main/getPosition",{data:{position:"banner",clientType:"h5"},callback:function(e){if(200===e.data.code){var i=e.data.data[0];i&&(t.downloadAppTarget=i.downloadAppTarget,t.swiperList=i.body.map(function(t){return{link:t.targets,img:t.img,data:t}}))}}})},getNotice:function(){var t=this;this.$store.dispatch("main/getLantern",{callback:function(e){200===e.code?t.notice=e.data.data.map(function(t){return t.description}):t.notice=[]}})},onTest:function(){var t=this;this.$store.dispatch("user/testLogin",{callback:function(e){200===e.code?t.toastText("登录试玩成功","middle"):t.toastText("登录试玩失败","middle")}})},onReg:function(){this.$router.push("/admin/register")},onLogin:function(){this.$router.push("/admin/login")},swiperItemClick:function(t){if(this.moveLen<=20&&t.link)switch(t.data.foward_type){case"1":window.location.href=t.data.targets;break;case"2":this.$router.push("/home/type/10003");break;case"3":this.$router.push("/home/type/10000");break;case"4":this.$router.push("/home/type/10004");break;case"5":this.$router.push("/home/type/10001");break;case"6":this.$router.push("/home/type/10002");break;case"7":this.$router.push("/home/type/10005");break;case"8":this.$router.push("/activity");break;default:window.location.href=t.data.targets}},getHot:function(){var t=this;this.$store.dispatch("main/gameSort",{id:"30001",callback:function(e){e&&(t.hots=e[30001]||[])}})}}}}});