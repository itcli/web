webpackJsonp([52],{GYLV:function(t,i){},ICkM:function(t,i,e){"use strict";var s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("keep-alive",[e("ViewPage",{key:"active"},[t.isApp?t._e():e("title-header",{attrs:{slot:"header",title:"优惠活动"},slot:"header"}),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t.type?"no-title"===t.type?e("ul",{staticClass:"list"},t._l(t.list,function(i,s){return e("li",{key:s,staticClass:"item item-no-title",on:{click:function(e){return t.onClick(i)}}},[e("img",{staticClass:"img",attrs:{alt:"",src:i.img}})])}),0):"no-pic"===t.type?e("ul",{staticClass:"list no-pic"},t._l(t.list,function(i,s){return e("li",{key:s,staticClass:"item-no-pic",on:{click:function(e){return t.onClick(i)}}},[e("div",{staticClass:"media-object-section no-padding"},[e("div",{staticClass:"number",style:{background:i.bgc||"#d53b2b"}},[e("span",[t._v(t._s(s+1))])])]),t._v(" "),e("div",{staticClass:"media-object-section content"},[e("div",{staticClass:"title"},[t._v(t._s(i.txt1))]),t._v(" "),e("p",[t._v(t._s(i.txt2))])]),t._v(" "),e("div",{staticClass:"icon-right"},[e("i",{staticClass:"van-icon van-icon-arrow"})])])}),0):t._e():e("ul",{staticClass:"list"},t._l(t.list,function(i,s){return e("li",{key:s,staticClass:"item",on:{click:function(e){return t.onClick(i)}}},[e("span",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),e("img",{staticClass:"img",attrs:{alt:"",src:i.img}})])}),0)])],1)],1)},staticRenderFns:[]};i.a=s},W2bv:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,n=e("qhTv"),a=(s=n)&&s.__esModule?s:{default:s},c=e("6cYu");i.default={name:"index",mixins:[a.default],components:{TitleHeader:c.TitleHeader,ViewPage:c.ViewPage},props:{list:{type:Array,required:!0},type:{type:String,default:""}},computed:{isApp:function(){return this.$route.query.app}},methods:{onClick:function(t){switch(t.type){case"dialog":this.showIosAlert({content:t.param,showNo:!1});break;case"content":this.$router.push({path:"/activity/content/",query:{id:t.id,app:this.isApp?"1":""}});break;case"single":this.isApp?window.location.href=window.location.origin+t.param+"?app=app":window.location.href=window.location.origin+t.param;break;case"other":window.open(t.param,"_blank")}}}}},lWRH:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("W2bv"),n=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);var c=e("ICkM");var o=function(t){e("GYLV")},l=e("VU/8")(n.a,c.a,!1,o,"data-v-4543efcb",null);i.default=l.exports}});