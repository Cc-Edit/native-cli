(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddBankCard"],{"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("c31d"),o=i("ad06"),r=i("7744"),l=i("dfaf"),c=i("1325"),u=i("a142");function h(){return!u["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var d=i("a8c1"),f=h();function m(){f&&Object(d["e"])(Object(d["b"])())}var b=i("d282"),p=i("ea8e"),g=Object(b["a"])("field"),v=g[0],k=g[1];e["a"]=v({inheritAttrs:!1,props:Object(a["a"])({},l["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(u["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(p["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(u["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),m()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(c["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(u["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:k("control",this.inputAlign)},[e]);var i={ref:"input",class:k("control",this.inputAlign),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",s()([{},i])):t("input",s()([{attrs:{type:this.type}},i]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:k("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(o["a"],{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:k("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(o["a"],{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.$attrs.maxlength)return t("div",{class:k("word-limit")},[this.value.length,"/",this.$attrs.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,s={icon:this.genLeftIcon};return i("label")&&(s.title=function(){return i("label")}),e(r["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[k("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:k((t={error:this.error},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:s,on:{click:this.onClick}},[e("div",{class:k("body")},[this.genInput(),this.showClear&&e(o["a"],{attrs:{name:"clear"},class:k("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:k("button")},[i("button")])]),this.genWordLimit(),this.errorMessage&&e("div",{class:k("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},7744:function(t,e,i){"use strict";var n=i("c31d"),s=i("2638"),a=i.n(s),o=i("d282"),r=i("a142"),l=i("dfaf"),c=i("ba31"),u=i("48f4"),h=i("ad06"),d=Object(o["a"])("cell"),f=d[0],m=d[1];function b(t,e,i,n){var s=e.icon,o=e.size,l=e.title,d=e.label,f=e.value,b=e.isLink,p=e.arrowDirection,g=i.title||Object(r["b"])(l),v=i.default||Object(r["b"])(f),k=i.label||Object(r["b"])(d),C=k&&t("div",{class:[m("label"),e.labelClass]},[i.label?i.label():d]),x=g&&t("div",{class:[m("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[l]),C]),I=v&&t("div",{class:[m("value",{alone:!i.title&&!l}),e.valueClass]},[i.default?i.default():t("span",[f])]),y=i.icon?i.icon():s&&t(h["a"],{class:m("left-icon"),attrs:{name:s}}),O=i["right-icon"],$=O?O():b&&t(h["a"],{class:m("right-icon"),attrs:{name:p?"arrow-"+p:"arrow"}});function w(t){Object(c["a"])(n,"click",t),Object(u["a"])(n)}var S=b||e.clickable,j={clickable:S,center:e.center,required:e.required,borderless:!e.border};return o&&(j[o]=o),t("div",a()([{class:m(j),attrs:{role:S?"button":null,tabindex:S?0:null},on:{click:w}},Object(c["b"])(n)]),[y,x,I,$,i.extra&&i.extra()])}b.props=Object(n["a"])({},l["a"],{},u["c"]),e["a"]=f(b)},"7f75":function(t,e,i){},"80ff":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-head",{attrs:{titleKey:"addBankTitle",fixed:!0}}),i("div",{staticClass:"addBan-title"},[i("i",[t._v("Tips:")]),i("p",[t._v(t._s(t.$t("addbank-tips"))),i("br"),t._v(t._s(t.$t("addbank-tips2")))])]),i("div",{staticClass:"reg-form"},[i("div",{staticClass:"reg-item"},[i("h3",[t._v(t._s(t.$t("addbank-name")))]),i("van-field",{attrs:{disabled:"",placeholder:t.$t("addbank-name2")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),i("div",{staticClass:"reg-item"},[i("h3",[t._v(t._s(t.$t("addbank-bankname")))]),i("van-field",{attrs:{disabled:"","right-icon":"arrow",placeholder:t.$t("addbank-bankname-p")},on:{click:function(e){t.showCar=!0}},model:{value:t.bankName,callback:function(e){t.bankName=e},expression:"bankName"}},[i("div",{attrs:{slot:"label"},slot:"label"},[i("i",{staticClass:"bank-bankName"})])])],1),i("div",{staticClass:"reg-item"},[i("h3",[t._v(t._s(t.$t("addbank-bankCode")))]),i("van-field",{attrs:{clearable:"",placeholder:t.$t("addbank-bankCode-p")},model:{value:t.bankCard,callback:function(e){t.bankCard=e},expression:"bankCard"}},[i("div",{attrs:{slot:"label"},slot:"label"},[i("i",{staticClass:"bank-account"})])])],1),i("van-button",{staticClass:"reg-submit",attrs:{type:"info"},on:{click:t.submitHandle}},[t._v(t._s(t.$t("submitText")))])],1),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showCar,callback:function(e){t.showCar=e},expression:"showCar"}},[i("van-picker",{attrs:{title:t.$t("addbank-switch"),"show-toolbar":!0,columns:t.columns},on:{confirm:t.confirmPop,cancel:t.closePop}})],1)],1)},s=[],a=(i("d81d"),i("b0c0"),i("2fa7")),o=(i("b342"),i("ad06")),r=(i("87d0"),i("e41f")),l=(i("9eda"),i("565f")),c=(i("3cd0"),i("f8c28"),i("c31d")),u=i("d282"),h=i("1325"),d=i("1128");function f(t){return Array.isArray(t)?t.map((function(t){return f(t)})):"object"===typeof t?Object(d["a"])({},t):t}var m={title:String,loading:Boolean,showToolbar:Boolean,cancelButtonText:String,confirmButtonText:String,allowHtml:{type:Boolean,default:!0},visibleItemCount:{type:Number,default:5},itemHeight:{type:Number,default:44},swipeDuration:{type:Number,default:1e3}},b=i("b1d2"),p=i("543e"),g=i("2638"),v=i.n(g),k=i("a142"),C=i("482d"),x=i("3875"),I=200,y=300,O=15,$=Object(u["a"])("picker-column"),w=$[0],S=$[1];function j(t){var e=window.getComputedStyle(t),i=e.transform||e.webkitTransform,n=i.slice(7,i.length-1).split(", ")[5];return Number(n)}function B(t){return Object(k["c"])(t)&&t.disabled}var T,N=w({mixins:[x["a"]],props:{valueKey:String,allowHtml:Boolean,className:String,itemHeight:Number,defaultIndex:Number,swipeDuration:Number,visibleItemCount:Number,initialOptions:{type:Array,default:function(){return[]}}},data:function(){return{offset:0,duration:0,options:f(this.initialOptions),currentIndex:this.defaultIndex}},created:function(){this.$parent.children&&this.$parent.children.push(this),this.setIndex(this.currentIndex)},destroyed:function(){var t=this.$parent.children;t&&t.splice(t.indexOf(this),1)},watch:{defaultIndex:function(){this.setIndex(this.defaultIndex)}},computed:{count:function(){return this.options.length},baseOffset:function(){return this.itemHeight*(this.visibleItemCount-1)/2}},methods:{onTouchStart:function(t){if(this.touchStart(t),this.moving){var e=j(this.$refs.wrapper);this.offset=Math.min(0,e-this.baseOffset),this.startOffset=this.offset}else this.startOffset=this.offset;this.duration=0,this.transitionEndTrigger=null,this.touchStartTime=Date.now(),this.momentumOffset=this.startOffset},onTouchMove:function(t){this.moving=!0,this.touchMove(t),"vertical"===this.direction&&Object(h["c"])(t,!0),this.offset=Object(C["a"])(this.startOffset+this.deltaY,-this.count*this.itemHeight,this.itemHeight);var e=Date.now();e-this.touchStartTime>y&&(this.touchStartTime=e,this.momentumOffset=this.offset)},onTouchEnd:function(){var t=this.offset-this.momentumOffset,e=Date.now()-this.touchStartTime,i=e<y&&Math.abs(t)>O;if(i)this.momentum(t,e);else{var n=this.getIndexByOffset(this.offset);this.moving=!1,this.duration=I,this.setIndex(n,!0)}},onTransitionEnd:function(){this.stopMomentum()},onClickItem:function(t){this.moving||(this.duration=I,this.setIndex(t,!0))},adjustIndex:function(t){t=Object(C["a"])(t,0,this.count);for(var e=t;e<this.count;e++)if(!B(this.options[e]))return e;for(var i=t-1;i>=0;i--)if(!B(this.options[i]))return i},getOptionText:function(t){return Object(k["c"])(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex:function(t,e){var i=this;t=this.adjustIndex(t)||0,this.offset=-t*this.itemHeight;var n=function(){t!==i.currentIndex&&(i.currentIndex=t,e&&i.$emit("change",t))};this.moving?this.transitionEndTrigger=n:n()},setValue:function(t){for(var e=this.options,i=0;i<e.length;i++)if(this.getOptionText(e[i])===t)return this.setIndex(i)},getValue:function(){return this.options[this.currentIndex]},getIndexByOffset:function(t){return Object(C["a"])(Math.round(-t/this.itemHeight),0,this.count-1)},momentum:function(t,e){var i=Math.abs(t/e);t=this.offset+i/.002*(t<0?-1:1);var n=this.getIndexByOffset(t);this.duration=this.swipeDuration,this.setIndex(n,!0)},stopMomentum:function(){this.moving=!1,this.duration=0,this.transitionEndTrigger&&(this.transitionEndTrigger(),this.transitionEndTrigger=null)},genOptions:function(){var t=this,e=this.$createElement,i={height:this.itemHeight+"px"};return this.options.map((function(n,s){var a=t.getOptionText(n),o=B(n),r={style:i,attrs:{role:"button",tabindex:o?-1:0},class:["van-ellipsis",S("item",{disabled:o,selected:s===t.currentIndex})],on:{click:function(){t.onClickItem(s)}}};return t.allowHtml&&(r.domProps={innerHTML:a}),e("li",v()([{},r]),[t.allowHtml?"":a])}))}},render:function(){var t=arguments[0],e={transform:"translate3d(0, "+(this.offset+this.baseOffset)+"px, 0)",transitionDuration:this.duration+"ms",transitionProperty:this.duration?"all":"none",lineHeight:this.itemHeight+"px"};return t("div",{class:[S(),this.className],on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[t("ul",{ref:"wrapper",style:e,class:S("wrapper"),on:{transitionend:this.onTransitionEnd}},[this.genOptions()])])}}),H=Object(u["a"])("picker"),E=H[0],A=H[1],M=H[2],L=E({props:Object(c["a"])({},m,{defaultIndex:{type:Number,default:0},columns:{type:Array,default:function(){return[]}},toolbarPosition:{type:String,default:"top"},valueKey:{type:String,default:"text"}}),data:function(){return{children:[]}},computed:{simple:function(){return this.columns.length&&!this.columns[0].values}},watch:{columns:"setColumns"},methods:{setColumns:function(){var t=this,e=this.simple?[{values:this.columns}]:this.columns;e.forEach((function(e,i){t.setColumnValues(i,f(e.values))}))},emit:function(t){this.simple?this.$emit(t,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit(t,this.getValues(),this.getIndexes())},onChange:function(t){this.simple?this.$emit("change",this,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit("change",this,this.getValues(),t)},getColumn:function(t){return this.children[t]},getColumnValue:function(t){var e=this.getColumn(t);return e&&e.getValue()},setColumnValue:function(t,e){var i=this.getColumn(t);i&&i.setValue(e)},getColumnIndex:function(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex:function(t,e){var i=this.getColumn(t);i&&i.setIndex(e)},getColumnValues:function(t){return(this.children[t]||{}).options},setColumnValues:function(t,e){var i=this.children[t];i&&JSON.stringify(i.options)!==JSON.stringify(e)&&(i.options=e,i.setIndex(0))},getValues:function(){return this.children.map((function(t){return t.getValue()}))},setValues:function(t){var e=this;t.forEach((function(t,i){e.setColumnValue(i,t)}))},getIndexes:function(){return this.children.map((function(t){return t.currentIndex}))},setIndexes:function(t){var e=this;t.forEach((function(t,i){e.setColumnIndex(i,t)}))},onConfirm:function(){this.children.map((function(t){return t.stopMomentum()})),this.emit("confirm")},onCancel:function(){this.emit("cancel")}},render:function(t){var e=this,i=this.itemHeight,n=i*this.visibleItemCount,s=this.simple?[this.columns]:this.columns,a={height:i+"px"},o={height:n+"px"},r={backgroundSize:"100% "+(n-i)/2+"px"},l=this.showToolbar&&t("div",{class:[b["e"],A("toolbar")]},[this.slots()||[t("button",{class:A("cancel"),on:{click:this.onCancel}},[this.cancelButtonText||M("cancel")]),this.slots("title")||this.title&&t("div",{class:["van-ellipsis",A("title")]},[this.title]),t("button",{class:A("confirm"),on:{click:this.onConfirm}},[this.confirmButtonText||M("confirm")])]]);return t("div",{class:A()},["top"===this.toolbarPosition?l:t(),this.loading?t(p["a"],{class:A("loading")}):t(),this.slots("columns-top"),t("div",{class:A("columns"),style:o,on:{touchmove:h["c"]}},[s.map((function(i,n){return t(N,{attrs:{valueKey:e.valueKey,allowHtml:e.allowHtml,className:i.className,itemHeight:e.itemHeight,defaultIndex:i.defaultIndex||e.defaultIndex,swipeDuration:e.swipeDuration,visibleItemCount:e.visibleItemCount,initialOptions:e.simple?i:i.values},on:{change:function(){e.onChange(n)}}})})),t("div",{class:A("mask"),style:r}),t("div",{class:[b["f"],A("frame")],style:a})]),this.slots("columns-bottom"),"bottom"===this.toolbarPosition?l:t()])}}),V=(i("c625"),i("b650")),_=i("a474"),D=(T={},Object(a["a"])(T,V["a"].name,V["a"]),Object(a["a"])(T,L.name,L),Object(a["a"])(T,l["a"].name,l["a"]),Object(a["a"])(T,r["a"].name,r["a"]),Object(a["a"])(T,o["a"].name,o["a"]),T),z={name:"AddBankCard",components:D,props:{},data:function(){return{columns:[],baseBank:[],showCar:!1,selectIndex:0,username:"",bankName:"",bankCard:""}},computed:{},watch:{},created:function(){var t=this;this.$axios.all([Object(_["r"])({userGid:localStorage.getItem("userGid")}),Object(_["d"])({userGid:localStorage.getItem("userGid")})]).then((function(e){var i=e[0],n=e[1];"0000"===n.code&&"0000"===i.code?(t.username=i.data.name,t.baseBank=n.data.bankList,n.data.bankList.map((function(e){t.columns.push(e.bankName)}))):(t.$toast(i.message||n.message),t.$router.go(-1))}))},mounted:function(){},destroyed:function(){},methods:{submitHandle:function(){var t=this;if(this.$isNullOrEmpty(this.username))this.$toast(this.$t("addbank-toast1"));else if(this.$isNullOrEmpty(this.baseBank[this.selectIndex]))this.$toast(this.$t("addbank-toast2"));else if(this.$isNullOrEmpty(this.bankCard))this.$toast(this.$t("addbank-toast3"));else{var e=this.baseBank[this.selectIndex].bankId;Object(_["a"])({userGid:localStorage.getItem("userGid"),name:this.username,bankId:e,cardNo:this.bankCard}).then((function(e){"0000"===e.code?(t.$toast(e.message),t.$router.go(-1)):t.$toast(e.message)}))}},confirmPop:function(t,e){this.selectIndex=e,this.bankName=t,this.showCar=!1},closePop:function(){this.showCar=!1}}},P=z,K=(i("bcf9"),i("2877")),G=Object(K["a"])(P,n,s,!1,null,null,null);e["default"]=G.exports},"87d0":function(t,e,i){"use strict";i("3cd0"),i("5cc2"),i("5e5e")},"9eda":function(t,e,i){"use strict";i("3cd0"),i("5cc2"),i("7f75")},b152:function(t,e,i){},bcf9:function(t,e,i){"use strict";var n=i("b152"),s=i.n(n);s.a},d81d:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").map,a=i("1dde");n({target:"Array",proto:!0,forced:!a("map")},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},e41f:function(t,e,i){"use strict";var n=i("d282"),s=i("a142"),a=i("6605"),o=i("ad06"),r=Object(n["a"])("popup"),l=r[0],c=r[1];e["a"]=l({mixins:[a["a"]],props:{round:Boolean,duration:Number,closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(i){return t.$emit(e,i)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var i=this.round,n=this.position,a=this.duration,r=this.transition||("center"===n?"van-fade":"van-popup-slide-"+n),l={};return Object(s["b"])(a)&&(l.transitionDuration=a+"s"),e("transition",{attrs:{name:r},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:l,class:c((t={round:i},t[n]=n,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(o["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:c("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},f8c28:function(t,e,i){}}]);