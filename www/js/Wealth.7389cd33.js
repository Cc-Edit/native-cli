(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Wealth"],{"2b6a":function(t,s,a){"use strict";a.r(s);var i,e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("page-head",{attrs:{titleKey:"wealthTitle"}}),a("div",{staticClass:"wealth-head"},[a("h3",[t._v(t._s(t.totalLeftAmount?""+t.$formatMoney(t.totalLeftAmount)+t.$t("home-unit"):"- -"))]),a("p",[a("span",[t._v(t._s(t.$t("cn-1012")))]),t._e()])]),"0"!==t.totalLeftCount?a("p",{staticClass:"wealth-tips"},[a("van-icon",{attrs:{name:"bullhorn-o"}}),a("span",[t._v(t._s(t.$t("cn-1014"))+" "+t._s(t.totalLeftCount)+" "+t._s(t.$t("cn-1015"))+", "),a("i",[t._v(t._s(t.$t("cn-1014"))+" "+t._s(t.totalDueCount)+" "+t._s(t.$t("cn-10151")))])])],1):t._e(),t.showEmpty?a("div",{staticClass:"wealth-empty"},[a("div",{staticClass:"empty-img"}),a("span",{staticClass:"empty-desc"},[t._v(t._s(t.$t("cn-1016")))]),"4"!==t.userStatus?a("van-button",{attrs:{type:"info"},on:{click:t.jumpToLoan}},[t._v(t._s(t.$t("cn-1017"))+" "),a("van-icon",{attrs:{name:"upgrade"}})],1):t._e()],1):a("div",{staticClass:"wealth-list"},[a("van-list",{attrs:{finished:t.finished,"loading-text":"loading...","error-text":t.$t("cn-1044"),"finished-text":""},on:{load:t.onLoad},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},t._l(t.loanList,(function(s,i){return a("div",{key:i,staticClass:"wealth-loanItem"},["1"===s.orderStatus?[a("router-link",{attrs:{to:{path:"/billDetail",query:{orderId:s.orderId}},replace:""}},[a("p",{staticClass:"list-default"},[t._v(t._s(s.loanTime)+t._s(t.$t("cn-1018")))]),a("van-divider",{style:{margin:"0",borderColor:"#ccc"}}),a("p",{staticClass:"list-left"},[a("b",[t._v(t._s(t.$formatMoney(s.loanAmount))+t._s(t.$t("home-unit")))]),a("span",[t._v(t._s(t.$t("cn-3461")))])]),a("p",{staticClass:"list-right"},[a("b",[t._v(t._s(t.$t("cn-340"))+"...")])])],1)]:t._e(),"2"===s.orderStatus?[a("router-link",{attrs:{to:{path:"/billDetail",query:{orderId:s.orderId}},replace:""}},[a("p",{staticClass:"list-default"},[t._v(t._s(s.loanTime)+t._s(t.$t("cn-1018")))]),a("van-divider",{style:{margin:"0",borderColor:"#ccc"}}),a("p",{staticClass:"list-left"},[a("b",[t._v(t._s(t.$formatMoney(s.loanAmount))+t._s(t.$t("home-unit")))]),a("span",[t._v(t._s(t.$t("cn-3461")))])])],1),a("p",{staticClass:"list-right",on:{click:function(a){return t.$router.push("/repayment?orderId="+s.orderId)}}},[a("van-button",{attrs:{type:"info"}},[t._v(t._s(t.$t("cn-76"))+" "),a("van-icon",{attrs:{name:"upgrade"}})],1)],1)]:t._e(),"3"===s.orderStatus?[a("router-link",{attrs:{to:{path:"/billDetail",query:{orderId:s.orderId}},replace:""}},[a("p",{staticClass:"list-default"},[t._v(t._s(t.$t("cn-342")))]),a("van-divider",{style:{margin:"0",borderColor:"#ccc"}}),a("p",{staticClass:"list-left"},[a("b",[t._v(t._s(t.$formatMoney(s.loanAmount))+t._s(t.$t("home-unit")))]),a("span",[t._v(t._s(t.$t("cn-3461")))])]),a("p",{staticClass:"list-right"},[a("b",[t._v(t._s(t.$t("cn-342"))+"...")])])],1)]:t._e(),"4"===s.orderStatus?[a("router-link",{attrs:{to:{path:"/billDetail",query:{orderId:s.orderId}},replace:""}},[a("p",{staticClass:"list-default"},[t._v(t._s(s.loanTime)+t._s(t.$t("cn-1018")))]),a("van-divider",{style:{margin:"0",borderColor:"#ccc"}}),a("p",{staticClass:"list-left"},[a("b",{staticStyle:{color:"#F12506"}},[t._v(t._s(t.$formatMoney(s.loanAmount))+t._s(t.$t("home-unit")))]),a("span",[t._v(t._s(t.$t("cn-1019")))])])],1),a("p",{staticClass:"list-right"},[a("van-button",{attrs:{type:"danger"},on:{click:function(a){return t.$router.push("/repayment?orderId="+s.orderId)}}},[t._v(t._s(t.$t("cn-76"))+" "),a("van-icon",{attrs:{name:"upgrade"}})],1)],1)]:t._e(),"5"===s.orderStatus?[a("router-link",{attrs:{to:{path:"/billDetail",query:{orderId:s.orderId}},replace:""}},[a("p",{staticClass:"list-default"},[t._v(t._s(t.$t("cn-344")))]),a("van-divider",{style:{margin:"0",borderColor:"#ccc"}}),a("p",{staticClass:"list-left"},[a("b",[t._v(t._s(t.$formatMoney(s.repaymentAmount||0))+t._s(t.$t("home-unit")))]),a("span",[t._v(t._s(t.$t("cn-95")))])]),a("p",{staticClass:"list-right"},[a("b",[t._v(t._s(t.$t("cn-344")))])])],1)]:t._e(),"6"===s.orderStatus?[a("router-link",{attrs:{to:{path:"/billDetail",query:{orderId:s.orderId}},replace:""}},[a("p",{staticClass:"list-default"},[t._v(t._s(s.loanTime)+t._s(t.$t("cn-1018")))]),a("p",{staticClass:"list-error"},[t._v(t._s(t.$t("cn-1025")))]),a("van-divider",{style:{margin:"0",borderColor:"#ccc"}}),a("p",{staticClass:"list-left"},[a("b",[t._v(t._s(t.$formatMoney(s.loanAmount))+t._s(t.$t("home-unit")))]),a("span",[t._v(t._s(t.$t("cn-3461")))])])],1),a("p",{staticClass:"list-right"},[a("van-button",{attrs:{type:"warning"},on:{click:t.jumpToLoan}},[t._v(t._s(t.$t("cn-1024"))+" "),a("van-icon",{attrs:{name:"upgrade"}})],1)],1)]:t._e()],2)})),0)],1)],1)},r=[],o=(a("b0c0"),a("2fa7")),n=(a("c625"),a("b650")),c=(a("a247"),a("9ed2")),l=(a("b342"),a("ad06")),d=(a("93b0"),a("2bdd")),u=a("a474"),h=(i={},Object(o["a"])(i,d["a"].name,d["a"]),Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,c["a"].name,c["a"]),Object(o["a"])(i,n["a"].name,n["a"]),i),p={name:"About",components:h,props:{},data:function(){return{loanList:[],loading:!1,showEmpty:!1,finished:!1,totalLeftAmount:"",totalLeftCount:"",totalDueCount:"",basicInfoStatus:"",idcardPicStatus:"",userStatus:"",isEmpty:!0}},computed:{},watch:{},created:function(){var t=this;Object(u["w"])({userGid:localStorage.getItem("userGid")}).then((function(s){if("0000"===s.code){var a=s.data;t.userStatus=a.userStatus,t.basicInfoStatus=a.creditInfo.basicInfoStatus,t.idcardPicStatus=a.creditInfo.idcardPicStatus}else t.$toast(s.message)})).catch((function(){t.$toast(t.$t("cn-1044"))})),Object(u["f"])({userGid:localStorage.getItem("userGid")}).then((function(s){if("0000"===s.code){var a=s.data;t.loanList=a.orderList,t.showEmpty=!(t.loanList&&t.loanList.length>0),t.totalLeftAmount=a.totalLeftAmount,t.totalLeftCount=a.totalLeftCount,t.totalDueCount=a.totalDueCount,t.loading=!1,t.finished=!0}else t.$toast(s.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))},mounted:function(){},destroyed:function(){},methods:{jumpToLoan:function(){"0"===this.basicInfoStatus?"0"===this.idcardPicStatus?this.$toast(this.$t("cn-1032")):"1"===this.idcardPicStatus?this.$router.push("/creditUpfile"):"2"===this.idcardPicStatus?this.$toast(this.$t("cn-1032")):(this.idcardPicStatus,this.$router.push("/creditUpfile")):"1"===this.basicInfoStatus?"0"===this.idcardPicStatus?this.$router.push("/credit?type=1"):"1"===this.idcardPicStatus?this.$router.push("/credit"):"2"===this.idcardPicStatus?this.$router.push("/credit?type=1"):(this.idcardPicStatus,this.$router.push("/credit")):"2"===this.basicInfoStatus?"0"===this.idcardPicStatus?this.$toast(this.$t("cn-1032")):"1"===this.idcardPicStatus?this.$router.push("/creditUpfile"):"2"===this.idcardPicStatus?this.$router.push("/loan"):(this.idcardPicStatus,this.$router.push("/creditUpfile")):(this.basicInfoStatus,"0"===this.idcardPicStatus?this.$router.push("/credit?type=1"):"1"===this.idcardPicStatus?this.$router.push("/credit"):"2"===this.idcardPicStatus?this.$router.push("/credit?type=1"):(this.idcardPicStatus,this.$router.push("/credit")))},onLoad:function(){}}},_=p,f=(a("d583"),a("2877")),m=Object(f["a"])(_,e,r,!1,null,"aa3b677e",null);s["default"]=m.exports},"4bf3":function(t,s,a){},d583:function(t,s,a){"use strict";var i=a("4bf3"),e=a.n(i);e.a}}]);