(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CreditUpfile"],{"08d5":function(t,e,i){},"2f84":function(t,e,i){"use strict";i.r(e);var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-head",{attrs:{titleKey:"creditUpfileTitle",fixed:!0}}),t._m(0),i("div",{staticClass:"credit-file"},[i("h4",[t._v(t._s(t.$t("cn-132")))]),i("div",{staticClass:"credit-background"},[i("i",{staticClass:"credit-id",style:t.$isNullOrEmpty(t.idCardImages)?"":{"background-image":"url('"+t.idCardImages+"')"}})]),t.$isNative?[i("van-button",{staticClass:"credit-submit",attrs:{type:"info"},on:{click:function(e){return t.takeNativePhoto(1)}}},[i("i",{staticClass:"credit-camera"}),t._v(" "+t._s(t.$t("cn-135"))+" ")])]:[i("van-button",{staticClass:"credit-submit",attrs:{type:"info"}},[i("input",{ref:"credit-id",attrs:{type:"file",accept:"image/*",capture:"camera"},on:{change:function(e){return t.Photograph("credit-id",1)}}}),i("i",{staticClass:"credit-camera"}),t._v(" "+t._s(t.$t("cn-135"))+" ")])]],2),i("div",{staticClass:"credit-file"},[i("h4",[t._v(t._s(t.$t("cn-133")))]),i("div",{staticClass:"credit-background"},[i("i",{staticClass:"credit-self",style:t.$isNullOrEmpty(t.selfCardImages)?"":{"background-image":"url('"+t.selfCardImages+"')"}})]),t.$isNative?[i("van-button",{staticClass:"credit-submit",attrs:{type:"info"},on:{click:function(e){return t.takeNativePhoto(2)}}},[i("i",{staticClass:"credit-camera"}),t._v(" "+t._s(t.$t("cn-135"))+" ")])]:[i("van-button",{staticClass:"credit-submit",attrs:{type:"info"}},[i("input",{ref:"credit-self",attrs:{type:"file",accept:"image/*",capture:"camera"},on:{change:function(e){return t.Photograph("credit-self",2)}}}),i("i",{staticClass:"credit-camera"}),t._v(" "+t._s(t.$t("cn-135"))+" ")])]],2),i("van-button",{staticClass:"reg-submit",attrs:{type:"info"},on:{click:t.submitHandle}},[t._v(t._s(t.$t("cn-307")))])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"myInfo-head"},[i("i",{staticClass:"credit-img"})])}],r=(i("0d03"),i("b0c0"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("2fa7")),c=(i("b342"),i("ad06")),l=(i("9eda"),i("565f")),o=(i("c625"),i("b650")),u=i("a474"),h=(s={},Object(r["a"])(s,o["a"].name,o["a"]),Object(r["a"])(s,l["a"].name,l["a"]),Object(r["a"])(s,c["a"].name,c["a"]),s),d={name:"CreditUpfile",components:h,props:{},data:function(){return{videoDevice:null,videoDeviceSelf:null,showAppPage:!1,showIdCanvas:!1,showSelfCanvas:!1,isSubmit:!1,urlType:"",idCardImages:"",selfCardImages:""}},computed:{},watch:{},created:function(){this.urlType=this.$route.query.type},mounted:function(){},destroyed:function(){},methods:{takeNativePhoto:function(t){var e=this,i=this;this.$isNullOrEmpty(navigator.camera)?this.$toast(this.$t("cn-1043")):navigator.camera.getPicture((function(e){1===t?i.idCardImages="data:image/jpeg;base64,"+e:i.selfCardImages="data:image/jpeg;base64,"+e}),(function(){e.$toast(e.$t("cn-1043"))}),{quality:85,saveToPhotoAlbum:!1,destinationType:0})},Photograph:function(t,e){this.FileReader(this.$refs[t].files[0],e)},FileReader:function(t){function e(e,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var i=this,s=new FileReader;s.readAsDataURL(t),s.onloadend=function(){1===e?i.idCardImages=s.result:i.selfCardImages=s.result}})),formatImg:function(t){return(t+"").replace("data:image/png;base64,","")},submitHandle:function(){var t=this;if(!this.isSubmit)return this.isSubmit=!0,this.$isNullOrEmpty(this.idCardImages)?(this.$toast(this.$t("cn-149")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.selfCardImages)?(this.$toast(this.$t("cn-150")),void(this.isSubmit=!1)):void Object(u["i"])({userGid:localStorage.getItem("userGid"),frontPic:this.formatImg(this.idCardImages),holdPic:this.formatImg(this.selfCardImages)}).then((function(e){"0000"===e.code?t.$router.replace({path:"/creditStatus"}):(t.$toast(e.message),t.isSubmit=!1)}))}}},f=d,b=(i("f001"),i("2877")),m=Object(b["a"])(f,a,n,!1,null,null,null);e["default"]=m.exports},"565f":function(t,e,i){"use strict";var s=i("2638"),a=i.n(s),n=i("c31d"),r=i("ad06"),c=i("7744"),l=i("dfaf"),o=i("1325"),u=i("a142");function h(){return!u["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var d=i("a8c1"),f=h();function b(){f&&Object(d["e"])(Object(d["b"])())}var m=i("d282"),g=i("ea8e"),p=Object(m["a"])("field"),v=p[0],C=p[1];e["a"]=v({inheritAttrs:!1,props:Object(n["a"])({},l["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(u["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(n["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(g["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,s=this.$attrs.maxlength;return"number"===this.type&&Object(u["b"])(s)&&i.length>s&&(i=i.slice(0,s),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),b()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(o["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),s=e>=48&&e<=57||46===e&&i||45===e;s||Object(o["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(u["c"])(this.autosize)){var i=this.autosize,s=i.maxHeight,a=i.minHeight;s&&(e=Math.min(e,s)),a&&(e=Math.max(e,a))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:C("control",this.inputAlign)},[e]);var i={ref:"input",class:C("control",this.inputAlign),domProps:{value:this.value},attrs:Object(n["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",a()([{},i])):t("input",a()([{attrs:{type:this.type}},i]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:C("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(r["a"],{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:C("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(r["a"],{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.$attrs.maxlength)return t("div",{class:C("word-limit")},[this.value.length,"/",this.$attrs.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,s=this.labelAlign,a={icon:this.genLeftIcon};return i("label")&&(a.title=function(){return i("label")}),e(c["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[C("label",s),this.labelClass],arrowDirection:this.arrowDirection},class:C((t={error:this.error},t["label-"+s]=s,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:a,on:{click:this.onClick}},[e("div",{class:C("body")},[this.genInput(),this.showClear&&e(r["a"],{attrs:{name:"clear"},class:C("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:C("button")},[i("button")])]),this.genWordLimit(),this.errorMessage&&e("div",{class:C("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},7744:function(t,e,i){"use strict";var s=i("c31d"),a=i("2638"),n=i.n(a),r=i("d282"),c=i("a142"),l=i("dfaf"),o=i("ba31"),u=i("48f4"),h=i("ad06"),d=Object(r["a"])("cell"),f=d[0],b=d[1];function m(t,e,i,s){var a=e.icon,r=e.size,l=e.title,d=e.label,f=e.value,m=e.isLink,g=e.arrowDirection,p=i.title||Object(c["b"])(l),v=i.default||Object(c["b"])(f),C=i.label||Object(c["b"])(d),y=C&&t("div",{class:[b("label"),e.labelClass]},[i.label?i.label():d]),$=p&&t("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[l]),y]),k=v&&t("div",{class:[b("value",{alone:!i.title&&!l}),e.valueClass]},[i.default?i.default():t("span",[f])]),I=i.icon?i.icon():a&&t(h["a"],{class:b("left-icon"),attrs:{name:a}}),S=i["right-icon"],O=S?S():m&&t(h["a"],{class:b("right-icon"),attrs:{name:g?"arrow-"+g:"arrow"}});function j(t){Object(o["a"])(s,"click",t),Object(u["a"])(s)}var w=m||e.clickable,x={clickable:w,center:e.center,required:e.required,borderless:!e.border};return r&&(x[r]=r),t("div",n()([{class:b(x),attrs:{role:w?"button":null,tabindex:w?0:null},on:{click:j}},Object(o["b"])(s)]),[I,$,k,O,i.extra&&i.extra()])}m.props=Object(s["a"])({},l["a"],{},u["c"]),e["a"]=f(m)},"7f75":function(t,e,i){},"9eda":function(t,e,i){"use strict";i("3cd0"),i("5cc2"),i("7f75")},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var s={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},f001:function(t,e,i){"use strict";var s=i("08d5"),a=i.n(s);a.a}}]);