webpackJsonp([9],{"+brI":function(t,e){},"3p8v":function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.targetPort?a("div",{staticClass:"submit-payment"},[a("van-tabs",{attrs:{sticky:""},model:{value:t.portIndex,callback:function(e){t.portIndex=e},expression:"portIndex"}},t._l(t.list,function(t,e){return a("van-tab",{key:t.id,attrs:{title:"通道"+(e+1)}})}),1),t._v(" "),a("div",{staticClass:"port-content"},[a("p",{staticClass:"title"},[t._v("充值金额")]),t._v(" "),t.targetPort.formatAmount?a("div",{staticClass:"format-mount"},[a("cube-select",{ref:"selector",attrs:{options:t.targetPort.formatAmount.split(","),title:" ",placeholder:"请选择充值金额"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1):a("div",{staticClass:"amount-input"},[a("label",{staticClass:"amount-input-label"},[a("span",{staticClass:"label rmb"},[t._v("¥")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"input",attrs:{type:"tel",placeholder:"单笔消费"+t.targetPort.minAmount+"~"+t.targetPort.maxAmount},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),a("ul",{staticClass:"amount-list"},t._l(["50","100","500","1000","5000"],function(e){return a("li",{key:e,staticClass:"amount-item",class:{active:t.amount===e},on:{click:function(a){t.amount=e}}},[t._v(t._s(e)+"\n        ")])}),0)])]),t._v(" "),a("a",{staticClass:"save-submit",attrs:{href:"javascript:void(0)"},on:{click:t.onSubmit}},[t._v("支付")]),t._v(" "),a("p",{staticClass:"info"},[t._v("温馨提示：二维码随时会更换！请每次存款都至["+t._s(t.title)+"]进行操作，入款至已过期二维码，公司无法查收，恕不负责!")])],1):a("div",{staticClass:"submit-payment"},[a("img",{staticClass:"no-data",attrs:{src:"/m/static/img/bank/no-pay-tongdao.png?v=2019-05-13T15:03:46",alt:""}})])},staticRenderFns:[]};e.a=i},"6U1w":function(t,e){},"6n1v":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=a("6cYu"),n=a("3dZY"),o=(i=n)&&i.__esModule?i:{default:i};e.default={name:"SubmitBank",components:{InputRow:s.InputRow},props:{id:{type:String,required:!0},title:{type:String,required:!0}},data:function(){return{submitting:!1,list:[],targetBank:null,types:[["网银转帐","手机转帐","支付宝转帐","微信转帐","银行柜台","ATM现金","ATM转卡","其他"]],type:["网银转帐"],name:"",amount:"",min:0}},created:function(){var t=this;this.min=parseFloat(this.$store.state.main.config.limit.paymentLimit),this.$store.dispatch("user/getSaveBank",{callback:function(e){200===e.code?(t.list=e.data,t.list.length&&(t.targetBank=t.list[0])):t.list=[]}})},methods:{onCopy:function(t){var e=this;this.$copyText(t).then(function(t){e.toastText("复制成功",window.TOAST_POSITION.TOP)},function(t){e.toastText("复制失败",window.TOAST_POSITION.TOP)})},onSubmit:function(){var t=this;this.submitting?this.toastText("正在提交,请稍等~~~",window.TOAST_POSITION.TOP):this.targetBank&&this.targetBank.id?this.type.length&&this.type[0]?/^[\u4E00-\u9FA5]+$/.test(this.name)?isNaN(parseFloat(this.amount))?this.toastText("请输入有效的汇款金额",window.TOAST_POSITION.TOP):parseFloat(this.amount)<this.min?this.toastText("最小汇款金额"+this.min+"元",window.TOAST_POSITION.TOP):(this.submitting=!0,this.$store.state.main.loadingText="正在提交...",this.$store.dispatch("user/saveSubmitByBank",{amount:this.amount,depositId:this.targetBank.id,bankId:this.targetBank.cardNum,bankName:this.targetBank.bankName,bankAccountName:this.targetBank.cardName,bankSerialNumber:"",type:this.type[0],depositRealName:this.name,depositTime:(0,o.default)().format("YYYY-MM-DD HH:mm:ss")}).then(function(e){t.submitting=!1,t.$store.state.main.loadingText="",200===e.code?(t.toastText("提交成功,等待管理员审核",window.TOAST_POSITION.TOP),t.type=[["网银转帐"]],t.name="",t.amount=""):e.message?t.toastText(e.message,window.TOAST_POSITION.TOP):e.msg&&t.toastText(e.msg,window.TOAST_POSITION.TOP)}).catch(function(){t.submitting=!1,t.$store.state.main.loadingText=""})):this.toastText("请输入有效的汇款姓名",window.TOAST_POSITION.TOP):this.toastText("请选择汇款方式",window.TOAST_POSITION.TOP):this.toastText("请选择有效的银行卡",window.TOAST_POSITION.TOP)}}}},E6VI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SubmitHelp",props:{id:{type:String,required:!0}},computed:{src:function(){return"wx"===this.id?"/static/img/bank/微信转银行卡.png":"/static/img/bank/支付宝转银行卡.png"}}}},FDtB:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.targetBank?a("div",{staticClass:"bank-submit"},[a("div",{staticClass:"bank-submit",staticStyle:{"background-color":"#FFFFFF"}},[a("p",{staticClass:"help-title"},[t._v("帮助教程")]),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"help-title"},[t._v("选择汇款卡号")]),t._v(" "),a("ul",{staticClass:"bank-list clear-fix"},t._l(t.list,function(e){return a("li",{key:e.id,staticClass:"bank-item",class:{active:t.targetBank.id===e.id},on:{click:function(a){t.targetBank=e}}},[a("img",{staticClass:"bank-icon",attrs:{src:"/static/img/bank/"+e.bankName+"logo.png",alt:""}}),t._v(" "),a("span",{staticClass:"bank-name"},[t._v(t._s(e.bankName))])])}),0),t._v(" "),a("input-row",{attrs:{label:"收款姓名:"}},[a("div",{staticClass:"copy-row",attrs:{slot:"input"},slot:"input"},[a("p",{staticClass:"name"},[t._v(t._s(t.targetBank.cardName))]),t._v(" "),a("a",{staticClass:"copy",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.onCopy(t.targetBank.cardName)}}},[t._v("复制")])])]),t._v(" "),a("input-row",{attrs:{label:"收款帐号:"}},[a("div",{staticClass:"copy-row",attrs:{slot:"input"},slot:"input"},[a("p",{staticClass:"name"},[t._v(t._s(t.targetBank.cardNum))]),t._v(" "),a("a",{staticClass:"copy",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.onCopy(t.targetBank.cardNum)}}},[t._v("复制")])])]),t._v(" "),a("input-row",{attrs:{label:"开户网点:"}},[a("div",{staticClass:"copy-row",attrs:{slot:"input"},slot:"input"},[a("p",{staticClass:"name"},[t._v(t._s(t.targetBank.cardAddress))]),t._v(" "),a("a",{staticClass:"copy",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.onCopy(t.targetBank.cardAddress)}}},[t._v("复制")])])]),t._v(" "),a("input-row",{attrs:{label:"汇款方式:",type:"select",placeholder:"请选择汇款方式",data:t.types,"is-click":""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),a("input-row",{attrs:{type:"text",label:"汇款姓名:",placeholder:"请输入汇款姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("input-row",{attrs:{type:"tel",label:"汇款金额:",placeholder:"最少"+t.min+"元"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),a("a",{staticClass:"save-submit",attrs:{href:"javascript:void(0)"},on:{click:t.onSubmit}},[t._v("确认提交")]),t._v(" "),a("p",{staticClass:"info"},[t._v("温馨提示：银行帐号随时更换! 请每次存款都至 ["+t._s(t.title)+"] 进行操作，入款至已过期帐号，公司无法查收，恕不负责!")])]):a("div",{staticClass:"bank-submit"},[a("img",{staticClass:"no-data",attrs:{src:"/m/static/img/bank/no-pay-tongdao.png?v=2019-05-13T15:03:46",alt:""}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clear-fix help-box"},[e("a",{staticClass:"help-active f-l",attrs:{href:"#/save/help/wx"}},[this._v("1.微信转银行卡教程")]),this._v(" "),e("a",{staticClass:"help-active f-r",attrs:{href:"#/save/help/zfb"}},[this._v("2.支付宝转银行卡教程")])])}]};e.a=i},JtDr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(a("YV3L")),s=r(a("mybB"));a("+BMk"),a("GEqf");var n=a("6cYu"),o=r(a("3dZY"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"SubmitQRCode",props:{id:{type:String,required:!0},title:{type:String,required:!0}},components:{vanTabs:s.default,vanTab:i.default,InputRow:n.InputRow},data:function(){return{submitting:!1,list:[],targetPort:null,portIndex:0,name:"",order:"",amount:""}},watch:{portIndex:function(){this.targetPort=this.list[this.portIndex]}},created:function(){var t=this;this.$store.dispatch("user/getSaveQRCode",{categoryId:this.id,callback:function(e){200===e.code?(t.list=e.data,t.list.length&&(t.targetPort=t.list[0])):t.list=[]}})},methods:{onSubmit:function(){var t=this;this.submitting?this.toastText("正在提交,请稍等~~~",window.TOAST_POSITION.TOP):/^[\u4E00-\u9FA5]+$/.test(this.name)?/^[\d]{9}$/.test(this.order)?isNaN(parseFloat(this.amount))?this.toastText("请输入有效的存款金额",window.TOAST_POSITION.TOP):parseFloat(this.targetPort.min_amount)>parseFloat(this.amount)?this.toastText("存款金额不能小于"+this.targetPort.min_amount,window.TOAST_POSITION.TOP):parseFloat(this.targetPort.max_amount)<parseFloat(this.amount)?this.toastText("存款金额不能大于"+this.targetPort.max_amount,window.TOAST_POSITION.TOP):(this.submitting=!0,this.$store.state.main.loadingText="正在提交...",this.$store.dispatch("user/saveSubmitByQRCode",{QRCodeId:this.targetPort.id,amount:this.amount,depositTime:(0,o.default)().format("YYYY-MM-DD HH:mm:ss"),serialNumber:this.order,depositAccountName:this.name}).then(function(e){t.submitting=!1,t.$store.state.main.loadingText="",t.toastText(e.data,window.TOAST_POSITION.TOP),200===e.code&&(t.order="",t.amount="")}).catch(function(){t.submitting=!1,t.$store.state.main.loadingText=""})):this.toastText("请输入正确的订单号后9位",window.TOAST_POSITION.TOP):this.toastText("请输入正确的中文存款姓名",window.TOAST_POSITION.TOP)}}}},Nevh:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"help",attrs:{src:this.src,alt:""}})},staticRenderFns:[]};e.a=i},S16W:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view-page",[e("title-header",{attrs:{slot:"header",title:this.$route.query.title},slot:"header"}),this._v(" "),e("div",{staticStyle:{width:"100%","box-sizing":"border-box"},attrs:{slot:"content"},slot:"content"},[e(this.comp,{tag:"component",attrs:{id:this.id,title:this.$route.query.title}})],1)],1)},staticRenderFns:[]};e.a=i},SeIP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("dEOZ"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var o=a("S16W"),r=a("VU/8")(s.a,o.a,!1,null,null,null);e.default=r.exports},VTTx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(a("YV3L")),s=o(a("mybB"));a("+BMk"),a("GEqf");var n=a("6cYu");function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"SubmitPayment",props:{id:{type:String,required:!0},title:{type:String,required:!0}},components:{vanTabs:s.default,vanTab:i.default,InputRow:n.InputRow},data:function(){return{submitting:!1,list:[],targetPort:null,portIndex:0,name:"",order:"",amount:"",paymentId:""}},watch:{portIndex:function(t,e){"NNIA"===this.list[this.portIndex].requestType&&"NNIA"!==this.list[e].requestType&&(this.NNIA(t),this.portIndex=e),this.list[this.portIndex]?(this.targetPort=this.list[this.portIndex],this.paymentId=this.targetPort.id):(this.targetPort=null,this.paymentId="")}},created:function(){var t=this;this.$store.dispatch("user/getSavePayment",{categoryId:this.id,callback:function(e){200===e.code?(t.list=e.data,t.list.length&&(t.list[0]?(t.targetPort=t.list[0],t.paymentId=t.targetPort.id,"NNIA"===t.targetPort.requestType&&(t.NNIA(0),t.portIndex=0)):(t.targetPort=null,t.paymentId=""))):(t.list=[],t.paymentId="")}})},methods:{onHide:function(){throw new Error(">>")},NNIA:function(t){var e=this,a=this.list[t].id;if(this.submitting)this.toastText("正在获取...",window.TOAST_POSITION.TOP);else{this.submitting=!0,this.$store.state.main.loadingText="正在提交...";var i=window.open("","_blank");this.$store.dispatch("user/saveSubmitByPayment",{paymentId:a,money:0,type:"h5",categoryId:this.id}).then(function(t){e.submitting=!1,e.$store.state.main.loadingText="",200===t.code?(e.amount="",t.data.qrCode?(i&&i.close(),e.$router.push({path:"/save/qr-code",query:{order:t.data.order,qrcode:t.data.qrCode,name:e.title}})):i?i.location.href=t.data.formUrl:window.location.href=t.data.formUrl):(i.close(),setTimeout(function(){e.toastText(t.message,window.TOAST_POSITION.TOP)},200))}).catch(function(){i.close(),e.submitting=!1,e.$store.state.main.loadingText=""})}},onSubmit:function(){var t=this;if(this.submitting)this.toastText("正在获取...",window.TOAST_POSITION.TOP);else if(isNaN(parseFloat(this.amount)))this.toastText("请输入有效的金额",window.TOAST_POSITION.TOP);else if(!this.targetPort.formatAmount&&parseFloat(this.amount)<parseFloat(this.targetPort.minAmount))this.toastText("支付金额不能小于"+this.targetPort.minAmount+"元",window.TOAST_POSITION.TOP);else if(!this.targetPort.formatAmount&&parseFloat(this.amount)>parseFloat(this.targetPort.maxAmount))this.toastText("支付金额不能大于"+this.targetPort.maxAmount+"元",window.TOAST_POSITION.TOP);else{this.submitting=!0,this.$store.state.main.loadingText="正在提交...";var e=window.open("","_blank");this.$store.dispatch("user/saveSubmitByPayment",{paymentId:this.paymentId,money:this.amount,type:"h5",categoryId:this.id}).then(function(a){t.submitting=!1,t.$store.state.main.loadingText="",200===a.code?(t.amount="",a.data.qrCode?(e&&e.close(),t.$router.push({path:"/save/qr-code",query:{order:a.data.order,qrcode:a.data.qrCode,name:t.title}})):e?e.location.href=a.data.formUrl:window.location.href=a.data.formUrl):(e.close(),setTimeout(function(){t.toastText(a.message,window.TOAST_POSITION.TOP)},200))}).catch(function(){e.close(),t.submitting=!1,t.$store.state.main.loadingText=""})}}}}},cbg7:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.targetPort?a("div",{staticClass:"submit-qr-code"},[a("van-tabs",{attrs:{sticky:""},model:{value:t.portIndex,callback:function(e){t.portIndex=e},expression:"portIndex"}},t._l(t.list,function(t,e){return a("van-tab",{key:t.id,attrs:{title:"通道"+(e+1)}})}),1),t._v(" "),a("div",{staticClass:"submit-qr-code-content",staticStyle:{"padding-bottom":"0.2rem"}},[a("img",{staticClass:"qr-code",attrs:{src:t.$config.getSrc(t.targetPort.qr_code),alt:""}}),t._v(" "),a("div",{staticClass:"qr-info"},[t._v("长按二维码或截屏保存")])]),t._v(" "),a("div",{staticClass:"submit-qr-code-content"},[a("input-row",{attrs:{type:"text",label:"　　姓名:",placeholder:"请输入存款姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("input-row",{attrs:{type:"tel",label:"　订单号:",placeholder:"请输入订单号后9位数字"},model:{value:t.order,callback:function(e){t.order=e},expression:"order"}}),t._v(" "),a("input-row",{attrs:{type:"tel",label:"存款金额:",placeholder:"单笔限额"+t.targetPort.min_amount+"~"+t.targetPort.max_amount+"元"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),a("a",{staticClass:"save-submit",attrs:{href:"javascript:void(0)"},on:{click:t.onSubmit}},[t._v("确认提交")]),t._v(" "),a("p",{staticClass:"info"},[t._v("温馨提示：二维码随时会更换！请每次存款都至["+t._s(t.title)+"] 进行操作。入款至已过期二维码，公司无法查收，恕不负责!")])],1):a("div",{staticClass:"submit-qr-code"},[a("img",{staticClass:"no-data",attrs:{src:"/m/static/img/bank/no-pay-tongdao.png?v=2019-05-13T15:03:46",alt:""}})])},staticRenderFns:[]};e.a=i},dEOZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("6cYu"),s=u(a("ro3U")),n=u(a("uBSE")),o=u(a("l2te")),r=u(a("k5vn"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"SaveSubmit",components:{ViewPage:i.ViewPage,TitleHeader:i.TitleHeader,SubmitBank:s.default,SubmitQRCode:n.default,SubmitPayment:o.default,SubmitHelp:r.default},props:{id:{type:String,required:!0},type:{type:String,required:!0}},computed:{comp:function(){switch(this.type){case"bank":return"SubmitBank";case"qr_code":return console.log(">>"),"SubmitQRCode";case"payment":return"SubmitPayment";case"help":return"SubmitHelp";default:return""}}}}},e3e6:function(t,e){},k5vn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("E6VI"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var o=a("Nevh");var r=function(t){a("e3e6")},u=a("VU/8")(s.a,o.a,!1,r,"data-v-bb5bb910",null);e.default=u.exports},l2te:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("VTTx"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var o=a("3p8v");var r=function(t){a("6U1w")},u=a("VU/8")(s.a,o.a,!1,r,"data-v-7696f9d6",null);e.default=u.exports},"mH+Z":function(t,e){},ro3U:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("6n1v"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var o=a("FDtB");var r=function(t){a("mH+Z")},u=a("VU/8")(s.a,o.a,!1,r,"data-v-44016436",null);e.default=u.exports},uBSE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("JtDr"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var o=a("cbg7");var r=function(t){a("+brI")},u=a("VU/8")(s.a,o.a,!1,r,"data-v-f2526038",null);e.default=u.exports}});