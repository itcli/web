webpackJsonp([37],{"0YND":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("FQmy"),l=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);var a=s("Czup");var n=function(t){s("8vRc")},r=s("VU/8")(l.a,a.a,!1,n,"data-v-4ddb51f4",null);e.default=r.exports},"8vRc":function(t,e){},Czup:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-page"},[s("div",{staticClass:"head"},[s("title-header",{attrs:{title:t.date+"收益详情"}}),t._v(" "),t._m(0)],1),t._v(" "),s("div",{staticClass:"body"},[s("cube-scroll",{ref:"scroll",attrs:{options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},t._l(t.list,function(e,i){return s("ul",{key:i,staticClass:"row clear-fix"},[s("li",{staticClass:"col f-l col-time"},[t._v(t._s(e.betuname))]),t._v(" "),s("li",{staticClass:"col f-l col-bet"},[t._v(t._s(e.betmoney))]),t._v(" "),s("li",{staticClass:"col f-l col-income"},[t._v(t._s(e.givemoney))])])}),0)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"row title clear-fix"},[e("li",{staticClass:"col f-l col-time"},[this._v("会员帐号")]),this._v(" "),e("li",{staticClass:"col f-l col-bet"},[this._v("下注详情")]),this._v(" "),e("li",{staticClass:"col f-l col-income"},[this._v("收益")])])}]};e.a=i},FQmy:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,l=s("6cYu"),o=s("qhTv"),a=(i=o)&&i.__esModule?i:{default:i};e.default={mixins:[a.default],name:"AgentIncomeInfo",components:{TitleHeader:l.TitleHeader},props:{date:{type:String,record:!0}},data:function(){return{list:[],page:0,pageSize:10,noMore:!1,loading:!1}},mounted:function(){this.onPullingDown()},methods:{onPullingDown:function(){this.page=0,this.noMore=!1,this.loadList(!0)},onPullingUp:function(){this.loadList()},loadList:function(t){var e=this;this.loading?(this.toastText("正在获取",window.TOAST_POSITION.TOP),this.$refs.scroll&&this.$refs.scroll[0]&&(this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh())):this.noMore?(this.toastText("没有更多",window.TOAST_POSITION.TOP),this.$refs.scroll&&this.$refs.scroll[0]&&(this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh())):(this.$store.state.main.loadingText="正在加载...",this.page++,this.$store.dispatch("agent/myEarningsSecond",{date:this.date,pageSize:this.pageSize,page:this.page}).then(function(s){200===s.code?(0===s.data.data.length&&(e.noMore=!0),e.list=t?s.data.data:e.list.concat(s.data.data)):(e.page--,e.toastText(s.message,window.TOAST_POSITION.TOP)),e.$store.state.main.loadingText="",e.$refs.scroll&&e.$refs.scroll[0]&&(e.$refs.scroll.forceUpdate(),e.$refs.scroll.refresh())}).catch(function(t){e.toastText("获取失败",window.TOAST_POSITION.TOP),e.page--,e.$store.state.main.loadingText="",e.$refs.scroll&&e.$refs.scroll[0]&&(e.$refs.scroll.forceUpdate(),e.$refs.scroll.refresh())}))}}}}});