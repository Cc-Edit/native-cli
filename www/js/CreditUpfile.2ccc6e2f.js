(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CreditUpfile"],{"14da":function(t,a,e){},"2f84":function(t,a,e){"use strict";e.r(a);var i,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("page-head",{attrs:{titleKey:"creditUpfileTitle",fixed:!0}}),e("div",{staticClass:"credit-file"},[e("div",{staticClass:"credit-background"},[e("i",{staticClass:"credit-id",style:t.$isNullOrEmpty(t.idCardImages)?"":{"background-image":"url('"+t.idCardImages+"')"}})]),t.$isNative?[e("van-button",{staticClass:"credit-submit",attrs:{type:"info"},on:{click:function(a){t.showTake=!0,t.showIndex=1}}},[e("i",{staticClass:"credit-camera"})])]:[e("van-button",{staticClass:"credit-submit",attrs:{type:"info"}},[e("input",{ref:"credit-id",attrs:{type:"file",accept:"image/*",capture:"camera"},on:{change:function(a){return t.Photograph("credit-id",1)}}}),e("i",{staticClass:"credit-camera"})])],e("h4",[t._v(t._s(t.$t("cn-132")))])],2),e("div",{staticClass:"credit-file"},[e("div",{staticClass:"credit-background"},[e("i",{staticClass:"credit-self",style:t.$isNullOrEmpty(t.selfCardImages)?"":{"background-image":"url('"+t.selfCardImages+"')"}})]),t.$isNative?[e("van-button",{staticClass:"credit-submit",attrs:{type:"info"},on:{click:function(a){t.showTake=!0,t.showIndex=2}}},[e("i",{staticClass:"credit-camera"})])]:[e("van-button",{staticClass:"credit-submit",attrs:{type:"info"}},[e("input",{ref:"credit-self",attrs:{type:"file",accept:"image/*",capture:"camera"},on:{change:function(a){return t.Photograph("credit-self",2)}}}),e("i",{staticClass:"credit-camera"})])],e("h4",[t._v(t._s(t.$t("cn-133")))])],2),e("van-button",{staticClass:"reg-submit",attrs:{type:"info",loading:t.isSubmit,"loading-text":t.$t("cn-1043")},on:{click:t.submitHandle}},[t._v(t._s(t.$t("cn-307")))]),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showTake,callback:function(a){t.showTake=a},expression:"showTake"}},[e("ul",{staticClass:"pop-body-1"},[e("li",{on:{click:function(a){return t.takeNativePhoto()}}},[t._v(t._s(t.$t("cn-135")))])]),e("ul",{staticClass:"pop-body-2"},[e("li",{on:{click:function(a){t.showTake=!1}}},[t._v(t._s(t.$t("cn-1051")))])])])],1)},n=[],c=(e("0d03"),e("b0c0"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("2fa7")),o=(e("b342"),e("ad06")),r=(e("87d0"),e("e41f")),d=(e("9eda"),e("565f")),u=(e("c625"),e("b650")),l=e("a474"),m=(i={},Object(c["a"])(i,u["a"].name,u["a"]),Object(c["a"])(i,d["a"].name,d["a"]),Object(c["a"])(i,r["a"].name,r["a"]),Object(c["a"])(i,o["a"].name,o["a"]),i),f={name:"CreditUpfile",components:m,props:{},data:function(){return{videoDevice:null,videoDeviceSelf:null,showAppPage:!1,showTake:!1,showIdCanvas:!1,showSelfCanvas:!1,showIndex:"",isSubmit:!1,urlType:"",idCardImages:"",selfCardImages:""}},computed:{},watch:{},created:function(){this.urlType=this.$route.query.type},mounted:function(){},destroyed:function(){},methods:{takeNativePhoto:function(){this.showTake=!1;var t=this;this.$isNullOrEmpty(navigator.camera)?this.$toast(this.$t("cn-1047")):navigator.camera.getPicture((function(a){1===t.showIndex?t.idCardImages="data:image/jpeg;base64,"+a:t.selfCardImages="data:image/jpeg;base64,"+a}),(function(){}),{quality:85,saveToPhotoAlbum:!1,sourceType:1,destinationType:0})},SelectPhoto:function(){this.showTake=!1;var t=this;this.$isNullOrEmpty(navigator.camera)?this.$toast(this.$t("cn-1047")):navigator.camera.getPicture((function(a){1===t.showIndex?t.idCardImages="data:image/jpeg;base64,"+a:t.selfCardImages="data:image/jpeg;base64,"+a}),(function(){}),{quality:85,saveToPhotoAlbum:!1,sourceType:2,destinationType:0})},Photograph:function(t,a){this.FileReader(this.$refs[t].files[0],a)},FileReader:function(t){function a(a,e){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t,a){var e=this,i=new FileReader;i.readAsDataURL(t),i.onloadend=function(){1===a?e.idCardImages=i.result:e.selfCardImages=i.result}})),formatImg:function(t){return(t+"").replace(/data.*?(base64,)/,"")},submitHandle:function(){var t=this;if(!this.isSubmit)return this.isSubmit=!0,this.$isNullOrEmpty(this.idCardImages)?(this.$toast(this.$t("cn-149")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.selfCardImages)?(this.$toast(this.$t("cn-150")),void(this.isSubmit=!1)):void Object(l["j"])({userGid:localStorage.getItem("userGid"),frontPic:this.formatImg(this.idCardImages),holdPic:this.formatImg(this.selfCardImages)}).then((function(a){"0000"===a.code?t.$router.replace({path:"/creditStatus"}):(t.$toast(a.message),t.isSubmit=!1)})).catch((function(){t.isSubmit=!1,t.$toast(t.$t("cn-1044"))}))}}},h=f,p=(e("8356"),e("2877")),g=Object(p["a"])(h,s,n,!1,null,"75fe1f71",null);a["default"]=g.exports},8356:function(t,a,e){"use strict";var i=e("14da"),s=e.n(i);s.a}}]);