(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Repayment"],{1724:function(t,a,e){"use strict";var n=e("aff4"),s=e.n(n);s.a},"44b1":function(t,a,e){"use strict";var n=e("6288"),s=e.n(n);s.a},"4e29":function(t,a,e){"use strict";e.r(a);var n,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("page-head",{attrs:{titleKey:"repaymentTitle",fixed:!0}}),e("div",{staticClass:"repayment-title"},[e("b",[t._v(t._s(t.$formatMoney(t.leftAmount))+t._s(t.$t("home-unit")))]),e("span",[t._v(t._s(t.$t("cn-95")))])]),e("van-tabs",{staticClass:"repayment-switch",attrs:{"line-width":"0",ellipsis:!1},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("van-tab",{attrs:{title:t.$t("cn-1048")}},[e("van-button",{staticClass:"repayment-submit",attrs:{type:"info"},on:{click:function(a){t.showPay=!0}}},[t._v(t._s(t.$t("home-ljhk")))])],1),t.$isNullOrEmpty(t.bankName)||t.$isNullOrEmpty(t.cardNo)?e("van-tab",{attrs:{title:t.$t("cn-1049")}},[e("h3",{staticClass:"tabs-content-title"},[t._v(t._s(t.$t("cn-1007")))]),e("p",{staticClass:"repayment-cardNo-s"},[t._v(t._s(t.$t("cn-1008")))]),e("p",{staticClass:"repayment-cardNo-s"},[t._v(t._s(t.$t("cn-10081")))]),e("p",{staticClass:"repayment-cardNo-s"},[t._v(t._s(t.$t("cn-10082")))]),e("p",{staticClass:"repayment-cardNo-s"},[t._v(t._s(t.$t("cn-10083")))]),e("div",{staticClass:"repayment-tips"},[e("i",[t._v("CHÚ Ý:")]),e("p",[t._v(" "+t._s(t.$t("cn-1009"))),e("br"),t._v(" "+t._s(t.$t("cn-1010"))),e("br"),t._v(" "+t._s(t.$t("cn-1011"))+" ")])])]):e("van-tab",{attrs:{title:t.$t("cn-1049")}},[e("h3",{staticClass:"tabs-content-title"},[t._v(t._s(t.$t("cn-1007")))]),e("p",{staticClass:"repayment-cardName"},[t._v(t._s(t.bankName))]),e("p",{staticClass:"repayment-cardName"},[t._v(t._s(t.vaAccountName))]),e("p",{staticClass:"repayment-cardNo"},[t._v(t._s(t.cardNo))]),e("div",{staticClass:"repayment-tips"},[e("i",[t._v("CHÚ Ý:")]),e("p",[t._v(" "+t._s(t.$t("cn-1009"))),e("br"),t._v(" "+t._s(t.$t("cn-1010"))),e("br"),t._v(" "+t._s(t.$t("cn-1011"))+" ")])])])],1),e("van-popup",{staticClass:"repayment-iframe",attrs:{position:"bottom","get-container":"body"},model:{value:t.showPay,callback:function(a){t.showPay=a},expression:"showPay"}},[e("van-nav-bar",{attrs:{title:t.$t("home-ljhk"),"left-arrow":""},on:{"click-left":function(a){t.showPay=!1}}}),t.isLoaded?t._e():e("van-loading",{staticClass:"repayment-loading",attrs:{type:"spinner",color:"#333",size:"60"}}),e("iframe",{staticStyle:{width:"1px","min-width":"100%","*width":"100%"},attrs:{width:"100%",height:"100%",id:"payIframe",scrolling:"no",frameborder:"0",src:""}})],1),e("van-popup",{style:{paddingTop:"45px"},attrs:{position:"bottom",closeable:""},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("van-radio-group",{model:{value:t.BankName,callback:function(a){t.BankName=a},expression:"BankName"}},[e("van-cell-group",[e("van-cell",{attrs:{title:"ABC BANK",clickable:""},on:{click:function(a){t.BankName="ABC BANK",t.show=!1}}},[e("van-radio",{attrs:{slot:"right-icon",name:"7天"},slot:"right-icon"})],1),e("van-cell",{attrs:{title:"ABC bank",clickable:""},on:{click:function(a){t.BankName="ABC bank",t.show=!1}}},[e("van-radio",{attrs:{slot:"right-icon",name:"14天"},slot:"right-icon"})],1)],1)],1)],1)],1)},c=[],i=(e("b0c0"),e("2fa7")),o=(e("b342"),e("ad06")),r=(e("558f"),e("0b33")),l=(e("8990"),e("5e46")),m=(e("da02"),e("6b41")),d=(e("9eda"),e("565f")),u=(e("c625"),e("b650")),p=(e("87d0"),e("e41f")),v=(e("608d"),e("9f14")),b=(e("bca0"),e("543e")),h=(e("01bb"),e("e27c")),f=(e("2a53"),e("34e9")),y=(e("3ec1"),e("7744")),_=e("a474"),$=(n={},Object(i["a"])(n,y["a"].name,y["a"]),Object(i["a"])(n,f["a"].name,f["a"]),Object(i["a"])(n,h["a"].name,h["a"]),Object(i["a"])(n,b["a"].name,b["a"]),Object(i["a"])(n,v["a"].name,v["a"]),Object(i["a"])(n,p["a"].name,p["a"]),Object(i["a"])(n,u["a"].name,u["a"]),Object(i["a"])(n,d["a"].name,d["a"]),Object(i["a"])(n,m["a"].name,m["a"]),Object(i["a"])(n,l["a"].name,l["a"]),Object(i["a"])(n,r["a"].name,r["a"]),Object(i["a"])(n,o["a"].name,o["a"]),n),N={name:"Repayment",components:$,props:{},data:function(){return{cardType:0,leftAmount:0,cardOptions:[{text:"sss(sociai securyisj )",value:0},{text:"sss(sociai securyisj )",value:1},{text:"sss(sociai securyisj )",value:2}],show:!1,showPay:!1,payUrl:"",bankName:"",vaAccountName:"",cardNo:"",active:1,isLoaded:!1}},computed:{},watch:{showPay:function(){var t=this;this.showPay&&!this.isLoaded&&this.$nextTick((function(){var a=document.getElementById("payIframe").contentWindow,e=a.document.documentElement;e.innerHTML=t.payUrl;var n=setInterval((function(){var e=a.document.getElementById("cheatForm");t.$isNullOrEmpty(e)||(clearInterval(n),e.submit(),setTimeout((function(){t.isLoaded=!0}),5e3))}),100)}))}},created:function(){this.orderId=this.$route.query.orderId,this.$isNullOrEmpty(this.orderId)&&this.$toast(this.$t("cn-351")),this.getRepaymentDetail()},mounted:function(){},destroyed:function(){},methods:{getRepaymentDetail:function(){var t=this;Object(_["e"])({userGid:localStorage.getItem("userGid"),orderId:this.orderId}).then((function(a){if("0000"===a.code){var e=a.data;t.leftAmount=e.leftAmount,t.vaAccountName=e.vaAccountName,t.bankName=e.vaBankName,t.cardNo=e.vaAccountNo}else t.$toast(a.message)})).catch((function(){t.$toast(t.$t("cn-1044"))})),Object(_["r"])({userGid:localStorage.getItem("userGid"),orderId:this.orderId}).then((function(a){if("0000"===a.code){var e=a.data;t.repaymentOrderId=e.repaymentOrderId,t.payUrl=e.payUrl}else t.$toast(a.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))}}},w=N,k=(e("1724"),e("44b1"),e("2877")),g=Object(k["a"])(w,s,c,!1,null,"312522b1",null);a["default"]=g.exports},6288:function(t,a,e){},aff4:function(t,a,e){}}]);