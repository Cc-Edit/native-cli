(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Status"],{"0a26":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("ad06"),s=i("9884"),a=i("ea8e"),r=function(t){var e=t.parent,i=t.bem,r=t.role;return{mixins:[Object(s["a"])(e)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===r&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this.$refs.label,i=t.target,n=e&&(e===i||e.contains(i));this.isDisabled||n&&this.labelDisabled||this.toggle(),this.$emit("click",t)}},render:function(){var t=arguments[0],e=this.slots,s=this.checked,c=e("icon",{checked:s})||t(n["a"],{attrs:{name:"success"},style:this.iconStyle}),l=e()&&t("span",{ref:"label",class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[e()]),o=this.iconSize||this.parent&&this.parent.iconSize,u=[t("div",{class:i("icon",[this.shape,{disabled:this.isDisabled,checked:s}]),style:{fontSize:Object(a["a"])(o)}},[c])];return"left"===this.labelPosition?u.unshift(l):u.push(l),t("div",{attrs:{role:r,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i(),on:{click:this.onClick}},[u])}}}},2464:function(t,e,i){},"2e14":function(t,e,i){"use strict";var n=i("d399e"),s=i.n(n);s.a},"3acc":function(t,e,i){"use strict";var n=i("d282"),s=i("9884"),a=Object(n["a"])("checkbox-group"),r=a[0],c=a[1];e["a"]=r({mixins:[Object(s["b"])("vanCheckbox")],props:{max:Number,disabled:Boolean,iconSize:[Number,String],checkedColor:String,value:{type:Array,default:function(){return[]}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggleAll:function(t){this.children.forEach((function(e){e.toggle(t)}))}},render:function(){var t=arguments[0];return t("div",{class:c()},[this.slots()])}})},"417e":function(t,e,i){"use strict";var n=i("d282"),s=i("0a26"),a=Object(n["a"])("checkbox"),r=a[0],c=a[1];e["a"]=r({mixins:[Object(s["a"])({bem:c,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,i=e.value.slice();if(t){if(e.max&&i.length>=e.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),e.$emit("input",i))}else{var n=i.indexOf(this.name);-1!==n&&(i.splice(n,1),e.$emit("input",i))}}}})},"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("c31d"),r=i("ad06"),c=i("7744"),l=i("dfaf"),o=i("1325"),u=i("a142");function h(){return!u["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var d=i("a8c1"),f=h();function b(){f&&Object(d["e"])(Object(d["b"])())}var g=i("d282"),p=i("ea8e"),m=Object(g["a"])("field"),v=m[0],k=m[1];e["a"]=v({inheritAttrs:!1,props:Object(a["a"])({},l["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(u["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(p["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(u["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),b()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(o["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(o["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(u["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:k("control",this.inputAlign)},[e]);var i={ref:"input",class:k("control",this.inputAlign),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",s()([{},i])):t("input",s()([{attrs:{type:this.type}},i]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:k("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(r["a"],{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:k("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(r["a"],{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.$attrs.maxlength)return t("div",{class:k("word-limit")},[this.value.length,"/",this.$attrs.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,s={icon:this.genLeftIcon};return i("label")&&(s.title=function(){return i("label")}),e(c["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[k("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:k((t={error:this.error},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:s,on:{click:this.onClick}},[e("div",{class:k("body")},[this.genInput(),this.showClear&&e(r["a"],{attrs:{name:"clear"},class:k("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:k("button")},[i("button")])]),this.genWordLimit(),this.errorMessage&&e("div",{class:k("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"56c9":function(t,e,i){"use strict";i.r(e);var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vay-login"},[i("page-head",{attrs:{titleKey:"statusTitle",fixed:!0}}),"1"===t.showType?[i("div",{staticClass:"status-regerr"},[i("van-icon",{attrs:{name:"warning-o"}})],1),i("p",{staticClass:"status-regerr-msg"},[t._v(" 亲爱的用户，不好意思，您输入的手机号，因存在风险，不符合我们的注册条款，暂时无法为您提供服务 ")]),i("div",{staticClass:"login-button-group"},[i("van-button",{attrs:{type:"info"}},[t._v("更换手机号")]),i("van-button",{attrs:{plain:"",type:"info"}},[t._v("更换登录方式")])],1)]:t._e(),"2"===t.showType?[t._m(0),t._m(1),i("div",{staticClass:"login-button-group"},[i("van-button",{attrs:{type:"info"}},[t._v(t._s(t.$t("cn-188")))])],1)]:t._e()],2)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"status-regerr"},[i("i",{staticClass:"status-waiting"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"status-regerr-msg"},[t._v(" 你的申请需要几分钟进行审核。"),i("br"),t._v(" 点击继续，进行其他操作，审核通过后我们会告知你 ")])}],r=(i("b0c0"),i("2fa7")),c=(i("9753"),i("417e")),l=(i("6370"),i("3acc")),o=(i("a247"),i("9ed2")),u=(i("b342"),i("ad06")),h=(i("9eda"),i("565f")),d=(i("c625"),i("b650")),f=(n={},Object(r["a"])(n,d["a"].name,d["a"]),Object(r["a"])(n,h["a"].name,h["a"]),Object(r["a"])(n,u["a"].name,u["a"]),Object(r["a"])(n,o["a"].name,o["a"]),Object(r["a"])(n,l["a"].name,l["a"]),Object(r["a"])(n,c["a"].name,c["a"]),n),b={name:"Register",components:f,props:{},data:function(){var t=this.$route.params&&this.$route.params.showType||"1";return{showType:t}},computed:{},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{}},g=b,p=(i("2e14"),i("2877")),m=Object(p["a"])(g,s,a,!1,null,null,null);e["default"]=m.exports},6370:function(t,e,i){"use strict";i("3cd0")},7744:function(t,e,i){"use strict";var n=i("c31d"),s=i("2638"),a=i.n(s),r=i("d282"),c=i("a142"),l=i("dfaf"),o=i("ba31"),u=i("48f4"),h=i("ad06"),d=Object(r["a"])("cell"),f=d[0],b=d[1];function g(t,e,i,n){var s=e.icon,r=e.size,l=e.title,d=e.label,f=e.value,g=e.isLink,p=e.arrowDirection,m=i.title||Object(c["b"])(l),v=i.default||Object(c["b"])(f),k=i.label||Object(c["b"])(d),y=k&&t("div",{class:[b("label"),e.labelClass]},[i.label?i.label():d]),C=m&&t("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[l]),y]),S=v&&t("div",{class:[b("value",{alone:!i.title&&!l}),e.valueClass]},[i.default?i.default():t("span",[f])]),$=i.icon?i.icon():s&&t(h["a"],{class:b("left-icon"),attrs:{name:s}}),O=i["right-icon"],j=O?O():g&&t(h["a"],{class:b("right-icon"),attrs:{name:p?"arrow-"+p:"arrow"}});function x(t){Object(o["a"])(n,"click",t),Object(u["a"])(n)}var w=g||e.clickable,I={clickable:w,center:e.center,required:e.required,borderless:!e.border};return r&&(I[r]=r),t("div",a()([{class:b(I),attrs:{role:w?"button":null,tabindex:w?0:null},on:{click:x}},Object(o["b"])(n)]),[$,C,S,j,i.extra&&i.extra()])}g.props=Object(n["a"])({},l["a"],{},u["c"]),e["a"]=f(g)},"7f75":function(t,e,i){},9753:function(t,e,i){"use strict";i("3cd0"),i("5cc2"),i("2464")},"9eda":function(t,e,i){"use strict";i("3cd0"),i("5cc2"),i("7f75")},d399e:function(t,e,i){},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);