webpackJsonp([66],{LjVS:function(e,t,r){"use strict";r.d(t,"a",function(){return g}),r.d(t,"c",function(){return m}),r.d(t,"b",function(){return h});var a=r("//Fk"),i=r.n(a),o=r("Dd8w"),s=r.n(o),n=r("7+uW"),c=r("mtWM"),l=r.n(c),d=r("YtJ0"),p=r("xzxg"),u=r("mw3O"),g=function(e,t){return l()({url:""+e,method:"post",data:s()({},t)})};l.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",l.a.defaults.timeout=2e4,l.a.defaults.transformRequest=[function(e){return u.stringify(e)}],l.a.interceptors.request.use(function(e){return e.headers.Authorization=""+localStorage.token,e},function(e){return i.a.reject(e)}),p.a.vpSetConfig(),l.a.interceptors.response.use(function(e){if(e.data.sign>localStorage.getItem("configTime")&&!e.config.url.includes("/config")&&p.a.vpReloadConfig(),5003===e.data.code||5002===e.data.code)return localStorage.removeItem("userBank"),p.a.removeCache(),d.a.commit("alert/showTipModel",{bool:!0,title:"您未登录！",model:"warn"}),!1;if(5e3===e.data.code)p.a.vpSetConfig(),location.href="/static/public/html/weihu/index.html";else{if(5005===e.data.code)return d.a.commit("alert/showTipModel",{bool:!0,title:e.data.message,model:"warn"}),window.history.back(-1),!1;4e3===e.data.code&&(location.href="/static/public/html/feifa/index.html")}return localStorage.token&&!e.config.url.includes("/member/refresh")&&p.a.expired(localStorage.token),200===e.data.code?e.data:5006!==e.data.code&&(d.a.commit("alert/showTipModel",{bool:!1,title:e.data.message,model:"warn"}),e.data)},function(e){return e.request.responseURL.indexOf("/member/balance")<=-1&&d.a.commit("alert/showTipModel",{bool:!0,title:"网络异常,请稍后重试。",model:"warn"}),e});var m=function(e,t){return l()({headers:{Accept:"application/x.tg.v2+json"},url:"/frontend/"+(n.default.prototype.$HOST_NAME?n.default.prototype.$HOST_NAME.substring(10):"v1")+"/"+e,method:"post",data:s()({},t)})},h=function(e,t){return l()({headers:{Accept:"application/x.tg.v2+json"},url:"/frontend/"+(n.default.prototype.$HOST_NAME?n.default.prototype.$HOST_NAME.substring(10):"v1")+"/"+e,method:"get",params:s()({},t)})};n.default.prototype.$getS=h,n.default.prototype.$http=l.a,n.default.prototype.$postS=m},PGYO:function(e,t,r){var a=r("o5qA");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("1e2951bc",a,!0,{})},o5qA:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,'.clear-fix[data-v-7cc98c80]:after{content:"";display:table;clear:both;zoom:1}.img-box[data-v-7cc98c80]{width:100%;height:100%;background-size:cover;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover}.img-box p[data-v-7cc98c80]{line-height:12px;height:26px}.img-box label[data-v-7cc98c80]{float:left;height:25px;line-height:25px;text-align:right;width:135px}.wrap-bg[data-v-7cc98c80]{background:url(/static/wycp/img/bg-article.png) #fff no-repeat center 96px;padding-bottom:10px}.wrap-bg .registration-c[data-v-7cc98c80]{width:1000px;margin:44px auto 0;min-height:228px}.wrap-bg .registration-c .register-box[data-v-7cc98c80]{background:#fff;border:1px solid #dfdfdf}.wrap-bg .registration-c .register-box .login-tit[data-v-7cc98c80]{height:47px;line-height:47px;padding:0 15px;background-color:#fffcf4;border-bottom:1px solid #dfdfdf}.wrap-bg .registration-c .register-box .login-tit .fr[data-v-7cc98c80]{float:right;font-size:8px;color:#555!important}.wrap-bg .registration-c .register-box .login-tit .fr a[data-v-7cc98c80]{color:#02339a}.wrap-bg .registration-c .register-box .article[data-v-7cc98c80]{margin:0 auto;padding:0}.wrap-bg .registration-c .register-box .article .memCash_body[data-v-7cc98c80]{margin-top:50px;background-color:transparent;font-size:12px;color:#000}.wrap-bg .registration-c .register-box .article .memCash_tit[data-v-7cc98c80]{padding-left:140px;line-height:65px;text-align:left;text-shadow:2px 1px 1px #000}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p[data-v-7cc98c80]{height:auto;min-height:auto;padding-bottom:10px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p label[data-v-7cc98c80]{float:left;height:25px;line-height:25px;text-align:right;width:135px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p label .star[data-v-7cc98c80]{color:red;font-weight:700;vertical-align:-2px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p label .red[data-v-7cc98c80]{color:red}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p span[data-v-7cc98c80]{display:block;line-height:25px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p input[data-v-7cc98c80]{width:148px;height:22px;line-height:22px;border:1px solid #666;box-shadow:0 0 6px #3a3a3a;border-radius:3px;color:#444;font-size:12px;text-indent:6px;outline:none}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p input#rmNum[data-v-7cc98c80]{width:71px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p img[data-v-7cc98c80]{width:50px;height:20px;vertical-align:middle;margin-left:5px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p .memCash_text[data-v-7cc98c80]{display:block;padding:5px 0 0 135px;min-height:26px;border:0;font-size:100%;font:inherit;vertical-align:baseline}.wrap-bg .registration-c .register-box .article .JoinMemForm #memCash-confirm input[data-v-7cc98c80]{border:1px solid #5b5b5b;padding:0 20px;height:35px;background-color:#fff;color:#000;line-height:30px;font-size:16px;font-family:Microsoft YaHei}.wrap-bg .registration-c .register-box .article .err[data-v-7cc98c80]{width:210px;margin-left:22px;height:30px;line-height:30px;color:#444;font-size:14px;border:1px solid #666;box-shadow:0 0 6px #3a3a3a;border-radius:3px;margin-bottom:20px}.wrap-bg .registration-c .register-box .article .err i[data-v-7cc98c80]{padding-left:5px;font-size:15px}.wrap-bg .registration-c .register-box .article .JM_content[data-v-7cc98c80]{padding:10px 10px 10px 20px}.wrap-bg .registration-c .register-box .article .JM_content p[data-v-7cc98c80]{height:auto;min-height:26px}.wrap-bg .registration-c .register-box .article .JM_content ol li[data-v-7cc98c80]{display:list-item;text-align:-webkit-match-parent;list-style:disc;margin-left:25px;line-height:18px}',""])},x2El:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),c=r.n(a),i=r("exGp"),o=r.n(i),s=r("xzxg"),l=r("LjVS"),n=(r("YtJ0"),{data:function(){return{register:[],InvitationCode:!1,userName:"",password:"",password_confirmation:"",verificationCode:"",intacode:"",pulicError:"",code:"",codeImg:"/static/public/image/common/code.jpg",agent:null,iscode:!1,islink:!0,captcha_key:"",wechat:"",agree:!0,WithdrawalsPassword:"",actuaName:"",email:"",tel:"",incodeReadonly:!1}},methods:{registerTest:function(){var n=this;return o()(c.a.mark(function e(){var t,r,a,i,o,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.validateAccountUserNamenew(n.userName),r=n.validateAccountnew(n.password),t){e.next=5;break}return n.pulicError="帐号6-10位数字或字母",e.abrupt("return",!1);case 5:if(r){e.next=8;break}return n.pulicError="密码 8-20位数字或字母",e.abrupt("return",!1);case 8:if(n.password!==n.password_confirmation)return n.pulicError="两次密码不一致",e.abrupt("return",!1);e.next=11;break;case 11:if(""===n.code)return n.pulicError="请输入验证码",e.abrupt("return",!1);e.next=14;break;case 14:if(n.code.length<4||4<n.code.length)return n.pulicError="请输入4位验证码",e.abrupt("return",!1);e.next=17;break;case 17:if(1!=n.iscode){e.next=21;break}if(n.intacode.length<6||6<n.intacode.length)return n.pulicError="请输入6位邀请码",e.abrupt("return",!1);e.next=21;break;case 21:if(n.agree){e.next=24;break}return n.pulicError="请点击同意才可以进行注册！",e.abrupt("return",!1);case 24:(a={}).userName=n.userName,a.password=n.password,a.code=n.code,a.device="pc",a.captcha_key=n.captcha_key,i=!0,n.intacode&&(a.invite_code=n.intacode),o=0;case 33:if(!(o<n.register.length)){e.next=42;break}if(n.register[o].value){e.next=38;break}return n.pulicError=n.register[o].placeholder,i=!1,e.abrupt("break",42);case 38:a[n.register[o].key]=n.register[o].value;case 39:o++,e.next=33;break;case 42:if(i){e.next=44;break}return e.abrupt("return",!1);case 44:return n.agent&&(a.agent=n.agent),e.next=47,Object(l.a)(n.$HOST_NAME+"/checkUsername/"+n.userName,{});case 47:if(!(s=e.sent)||200!=s.code){e.next=51;break}e.next=53;break;case 51:return n.pulicError="帐号已存在",e.abrupt("return",!1);case 53:n.registerSubmit(a);case 54:case"end":return e.stop()}},e,n)}))()},registerSubmit:function(r){var a=this;return o()(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.c)("register",r);case 2:200==(t=e.sent).code?(s.a.setCachereg(t,"v1"),window.location.href="/"):a.dNotify(t.message,"error");case 4:case"end":return e.stop()}},e,a)}))()},login:function(){this.$store.commit("mainState/setChooseModel","登录"),this.$store.commit("mainState/setLoginTitle","登录")},dNotify:function(e,t){var r=this;this.$store.commit("alert/showTipModel",{bool:!0,title:e,model:t}),setTimeout(function(){r.$store.commit("alert/showTipModel",{bool:!1,title:e,model:t})},1e5)},getCode:function(){var t=this;if(!this.userName)return!1;this.$http.get("/frontend/v1/captcha",{headers:{Accept:"application/x.tg.v2+json"},params:{userName:this.userName}}).then(function(e){200==e.code&&(t.codeImg=e.data.captcha_image_text,t.captcha_key=e.data.captcha_key)})},reset:function(){this.userName="",this.password="",this.password_confirmation="",this.verificationCode="",this.InvitationCode="",this.pulicError="",this.code="",this.pulicError="",this.register&&this.register.forEach(function(e){e.value=""})}},created:function(){var r=this;this.agent=this.GetQueryString("agent")||this.GetQueryString("k");var e=JSON.parse(localStorage.getItem("config")).register.pc,t=JSON.parse(localStorage.getItem("config")).site_model;this.iscode="invite_code"==t,e.forEach(function(e,t){switch(r.register[t]={},e){case"phone":r.register[t].placeholder="",r.register[t].value="",r.register[t].key=e,r.register[t].name="手机号";break;case"email":r.register[t].placeholder="请输入邮箱地址",r.register[t].value="",r.register[t].key=e,r.register[t].name="邮箱";break;case"wechat":r.register[t].placeholder="请输入微信号",r.register[t].value="",r.register[t].key=e,r.register[t].name="微信";break;case"realName":r.register[t].placeholder="请输入真实姓名",r.register[t].value="",r.register[t].key=e,r.register[t].name="真实姓名";break;case"payPassword":r.register[t].placeholder="请输入取款密码",r.register[t].value="",r.register[t].key=e,r.register[t].name="取款密码"}})},mounted:function(){this.intacode=this.GetQueryString("agent")||this.GetQueryString("k"),this.incodeReadonly=!!this.intacode}}),d={render:function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"wrap-bg"},[r("div",{staticClass:"registration-c",staticStyle:{"margin-top":"24px","padding-bottom":"10px"}},[r("div",{staticClass:"register-box",staticStyle:{"min-height":"650px"}},[r("div",{staticClass:"login-tit"},[r("div",{staticClass:"fr"},[o._v("\n            已有帐号?\n            "),r("a",{staticClass:"orange",attrs:{href:"javascript: void(0)"},on:{click:function(e){return o.$router.push("/")}}},[o._v("立即登录")])])]),o._v(" "),r("section",{staticClass:"article",staticStyle:{width:"680px"}},[r("div",{staticClass:"memCash_body",attrs:{id:"joinMember"}},[r("h3",{staticClass:"memCash_tit"}),o._v(" "),r("form",{staticClass:"JoinMemForm",staticStyle:{display:"block"},attrs:{action:"reg.php",method:"post",name:"myFORM",id:"myFORM"}},[r("input",{attrs:{type:"hidden",name:"key",value:"add"}}),o._v(" "),r("input",{attrs:{type:"hidden",name:"SS",value:""}}),o._v(" "),r("input",{attrs:{type:"hidden",name:"SR",value:""}}),o._v(" "),r("input",{attrs:{type:"hidden",name:"TS",value:""}}),o._v(" "),r("fieldset",{staticStyle:{border:"1px solid #B48D3E",margin:"10px",padding:"10px"}},[r("legend",{staticClass:"join-acc",staticStyle:{color:"#B48D3E","font-weight":"bold"}},[o._v("注册帐号")]),o._v(" "),o._m(0),o._v(" "),r("p",{staticStyle:{display:"block"},attrs:{id:"js-username"}},[o._m(1),o._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:o.userName,expression:"userName"}],attrs:{type:"text",name:"username",id:"username",value:"",maxheight:"30",size:"15"},domProps:{value:o.userName},on:{keydown:function(e){o.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.registerTest(e)},blur:o.getCode,input:function(e){e.target.composing||(o.userName=e.target.value)}}}),o._v(" "),r("span",[o._v("请输入6-10个字元, 仅可输入英文字母以及数字的组合!!")])]),o._v(" "),r("p",{staticStyle:{display:"block"},attrs:{id:"js-password"}},[o._m(2),o._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:o.password,expression:"password"}],staticClass:"password_adv",attrs:{type:"password",name:"password",id:"password",value:"",size:"15"},domProps:{value:o.password},on:{keydown:function(e){o.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.registerTest(e)},input:function(e){e.target.composing||(o.password=e.target.value)}}}),o._v(" "),o._m(3)]),o._v(" "),r("p",{staticStyle:{display:"block"},attrs:{id:"js-passwd"}},[o._m(4),o._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:o.password_confirmation,expression:"password_confirmation"}],attrs:{type:"password",name:"passwd",id:"passwd",value:"",size:"15"},domProps:{value:o.password_confirmation},on:{keydown:function(e){o.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.registerTest(e)},input:function(e){e.target.composing||(o.password_confirmation=e.target.value)}}})]),o._v(" "),r("p",{staticStyle:{display:"block"},attrs:{id:"js-rmNum"}},[o._m(5),o._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:o.code,expression:"code"}],staticClass:"pwd-input-set RmNum",attrs:{name:"rmNum",id:"rmNum",type:"text",size:"4",title:"( 点选此处产生新验证码 )",onfocus:"change_zc_yzm('mail_vPic')"},domProps:{value:o.code},on:{keydown:function(e){o.pulicError=""},input:function(e){e.target.composing||(o.code=e.target.value)}}}),o._v(" "),r("img",{staticClass:"checkLoginCodeImage",staticStyle:{cursor:"pointer"},attrs:{src:o.codeImg},on:{click:o.getCode}})]),o._v(" "),o.iscode?r("p",{staticStyle:{display:"block"},attrs:{id:"js-InvitationCode"}},[o._m(6),o._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:o.intacode,expression:"intacode"}],staticClass:"InvitationCode_adv",attrs:{type:"text",name:"InvitationCode",id:"InvitationCode",value:"",size:"15",readonly:o.incodeReadonly},domProps:{value:o.intacode},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.registerTest(e)},keydown:function(e){o.pulicError=""},input:function(e){e.target.composing||(o.intacode=e.target.value)}}})]):o._e()]),o._v(" "),o.register.length?r("fieldset",{staticStyle:{border:"1px solid #B48D3E",margin:"10px",padding:"10px"}},[r("legend",{staticClass:"join-acc",staticStyle:{color:"#B48D3E","font-weight":"bold"}},[o._v("会员资料")]),o._v(" "),o._l(o.register,function(t,e){return r("p",{key:e,staticClass:"row"},[r("label",[r("span",{staticClass:"star",staticStyle:{display:"inline"}},[o._v("* ")]),o._v(o._s(t.name)+"：")]),o._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],attrs:{type:"text",placeholder:t.placeholder,maxlength:"16"},domProps:{value:t.value},on:{input:function(e){e.target.composing||o.$set(t,"value",e.target.value)}}})])})],2):o._e(),o._v(" "),r("div",{staticStyle:{display:"block"},attrs:{id:"js-agree"}},[r("p",{staticStyle:{"padding-left":"20px"},attrs:{id:"memCash-agree"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:o.agree,expression:"agree"}],staticStyle:{height:"13px"},attrs:{type:"checkbox",name:"agree",id:"check1",value:"Y",checked:""},domProps:{checked:Array.isArray(o.agree)?-1<o._i(o.agree,"Y"):o.agree},on:{change:function(e){var t=o.agree,r=e.target,a=!!r.checked;if(Array.isArray(t)){var i=o._i(t,"Y");r.checked?i<0&&(o.agree=t.concat(["Y"])):-1<i&&(o.agree=t.slice(0,i).concat(t.slice(i+1)))}else o.agree=a}}}),o._v("我已届满合法博彩年龄﹐且同意各项开户条约。")])]),o._v(" "),r("br"),o._v(" "),o.pulicError?r("div",{staticClass:"err"},[r("i",{staticClass:"iconfont icon-baojing"}),o._v(" "),r("span",{ref:"pulicError"},[o._v(o._s(o.pulicError))])]):o._e(),o._v(" "),r("div",{attrs:{id:"memCash-confirm",align:"center"}},[r("input",{staticClass:"joinform_submit",staticStyle:{cursor:"pointer"},attrs:{type:"button",name:"OK2",id:"OK2",value:"确认"},on:{click:o.registerTest}}),o._v(" "),r("input",{staticClass:"joinform_cancel",staticStyle:{cursor:"pointer"},attrs:{type:"reset",name:"CANCEL2",id:"CANCEL2",value:"重设"},on:{click:o.reset}})]),o._v(" "),o._m(7)])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticStyle:{position:"relative","min-height":"1px"}},[t("a",{staticStyle:{position:"absolute",top:"0px"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("帐 号：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("密 码：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._v("*密码规则：须为"),r("s",{staticStyle:{color:"red","text-decoration":"none","font-weight":"700"}},[e._v("8~20码英文或数字")]),e._v("且符合0~9或a~z字元")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{title:"确认密码"}},[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("确认密码：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("验证码：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("邀请码：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"JM_content JM_content_b"},[r("div",{attrs:{id:"joinmem"}},[r("div",[r("p",[e._v("备注：")]),r("ol",[r("li",[e._v("标记有"),r("span",{staticStyle:{color:"rgb(255,0,0)"}},[e._v(" * ")]),e._v("者为必填项目。")]),r("li",[e._v("取款密码为取款时的凭证,请会员务必仔细填写。")])])])])])}]};var p=r("VU/8")(n,d,!1,function(e){r("PGYO")},"data-v-7cc98c80",null);t.default=p.exports}});