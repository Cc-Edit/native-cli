(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ForgetPassword"],{4679:function(t,e,s){"use strict";var i=s("b79d"),a=s.n(i);a.a},"8ae4":function(t,e,s){"use strict";s.r(e);var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vay-login"},[s("page-head",{attrs:{titleKey:"ForgetPasswordTitle",fixed:!0,isLogin:!0}}),t._m(0),s("div",{staticClass:"login-form"},[s("van-field",{attrs:{clearable:"",type:"text",placeholder:t.$t("cn-1099")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[s("div",{staticClass:"login-phone-title",attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"login-phone-icon"})])]),s("van-divider",{style:{margin:"0",borderColor:"#eee"}}),s("van-field",{staticClass:"hasbutton",attrs:{type:"text",maxlength:"50",placeholder:t.$t("cn-1100")},model:{value:t.verifyCode,callback:function(e){t.verifyCode=e},expression:"verifyCode"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"login-verifyCode-icon"})]),s("div",{staticClass:"register-send",attrs:{slot:"button"},slot:"button"},[s("van-button",{staticClass:"verifyCode",attrs:{type:"info",disabled:t.disabledSend},on:{click:function(e){return t.sendVerifyCode("sms")}}},[t._v(t._s(t.sendText))])],1)]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.sendCount>2,expression:"sendCount > 2"}],staticClass:"verify-voice"},[s("b",{on:{click:function(e){return t.sendVerifyCode("voice")}}},[t._v(t._s(t.$t("cn-1108")))])]),s("van-divider",{style:{margin:"0",borderColor:"#eee"}}),s("van-field",{attrs:{type:t.passwordType?"text":"password","right-icon":t.passwordType?"eye-o":"closed-eye",placeholder:t.$t("cn-1101")},on:{"click-right-icon":function(e){t.passwordType=!t.passwordType}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"login-password-icon"})])]),s("van-divider",{style:{margin:"0",borderColor:"#eee"}}),s("van-field",{attrs:{type:t.passwordAgainType?"text":"password","right-icon":t.passwordAgainType?"eye-o":"closed-eye",placeholder:t.$t("cn-1102")},on:{"click-right-icon":function(e){t.passwordAgainType=!t.passwordAgainType}},model:{value:t.passwordAgain,callback:function(e){t.passwordAgain=e},expression:"passwordAgain"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"login-password-icon"})])]),s("van-divider",{style:{margin:"0",borderColor:"#eee"}}),s("div",{staticClass:"login-button-group"},[s("van-button",{attrs:{type:"info",loading:t.isSubmit,"loading-text":t.$t("cn-1043")},on:{click:t.submitHandle}},[t._v(t._s(t.$t("cn-434")))]),s("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.$router.go(-1)}}},[t._v(t._s(t.$t("cn-188")))])],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-head"},[s("i",{staticClass:"login-logo"}),s("span",{staticClass:"login-zhanwei"})])}],o=(s("b0c0"),s("2fa7")),r=(s("9753"),s("417e")),c=(s("6370"),s("3acc")),d=(s("47e2"),s("2241")),l=(s("a247"),s("9ed2")),u=(s("b342"),s("ad06")),p=(s("9eda"),s("565f")),h=(s("c625"),s("b650")),v=s("a474"),m=(i={},Object(o["a"])(i,h["a"].name,h["a"]),Object(o["a"])(i,p["a"].name,p["a"]),Object(o["a"])(i,u["a"].name,u["a"]),Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,d["a"].Component.name,d["a"].Component),Object(o["a"])(i,c["a"].name,c["a"]),Object(o["a"])(i,r["a"].name,r["a"]),i),b={name:"ForgetPassword",components:m,props:{},data:function(){return{sendCount:0,isSubmit:!1,disabledSend:!1,sendText:this.$t("cn-1096"),passwordType:!1,passwordAgainType:!1,verifyImg:"",imgcode:"",verifyCode:"",username:"",password:"",passwordAgain:""}},computed:{},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{submitHandle:function(){var t=this;if(!this.isSubmit){var e=this.$trim(this.username),s=this.$trim(this.password),i=this.$trim(this.passwordAgain),a=this.$trim(this.verifyCode);return this.isSubmit=!0,this.$isNullOrEmpty(e)?(this.$toast(this.$t("cn-1099")),void(this.isSubmit=!1)):this.$isNullOrEmpty(a)?(this.$toast(this.$t("cn-1100")),void(this.isSubmit=!1)):this.$isNullOrEmpty(s)?(this.$toast(this.$t("cn-440")),void(this.isSubmit=!1)):this.$isNullOrEmpty(i)?(this.$toast(this.$t("cn-441")),void(this.isSubmit=!1)):i!==s?(this.$toast(this.$t("cn-1103")),void(this.isSubmit=!1)):void Object(v["z"])({phone:e,newPassword:s,smsCode:a}).then((function(e){"0000"===e.code?(t.$toast(e.message),t.$router.go(-1)):(t.$toast(e.message),t.isSubmit=!1)})).catch((function(){t.isSubmit=!1,t.$toast(t.$t("cn-1044"))}))}},getNewImgCode:function(){var t=this.$getUuid(8);Object(v["r"])({uuid:t}).then()},sendVerifyCode:function(t){var e=this;if(this.$isNullOrEmpty(this.username))this.$toast(this.$t("cn-419"));else if(!this.disabledSend){this.disabledSend=!0;var s=59;this.sendText="".concat(s,"s");var i=setInterval((function(){--s,s<=0?(clearInterval(i),e.disabledSend=!1,e.sendText=e.$t("cn-1096")):e.sendText="".concat(s,"s")}),1e3);Object(v["w"])({type:"forget",sendType:t,phone:this.username}).then((function(t){e.sendCount++,"0000"!==t.code&&(e.$toast(t.message),clearInterval(i),e.disabledSend=!1,e.sendText=e.$t("cn-1096"))})).catch((function(){e.$toast(e.$t("cn-1044")),clearInterval(i),e.disabledSend=!1,e.sendText=e.$t("cn-1096")}))}}}},f=b,g=(s("8e4c"),s("4679"),s("2877")),y=Object(g["a"])(f,a,n,!1,null,"77c2fe99",null);e["default"]=y.exports},"8e4c":function(t,e,s){"use strict";var i=s("cf92"),a=s.n(i);a.a},b79d:function(t,e,s){},cf92:function(t,e,s){}}]);