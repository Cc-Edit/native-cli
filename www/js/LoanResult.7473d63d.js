(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LoanResult"],{"0455":function(t,e,a){"use strict";var n=a("aa18"),s=a.n(n);s.a},aa18:function(t,e,a){},f35c:function(t,e,a){"use strict";a.r(e);var n,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["1"===t.orderStatus?[a("page-head",{attrs:{titleKey:"loanResultTitle",fixed:!0}}),a("div",{staticClass:"loanRes-title"},[a("p",{staticClass:"loanRes-img"},[a("i",{staticClass:"succ"}),a("span",[t._v(t._s(t.$t("cn-1001")))])]),a("h4",{staticClass:"loanRes-h3"},[t._v(t._s(t.$t("cn-320"))+"...")]),a("b",{staticClass:"loanRes-desc"},[t._v(t._s(t.$t("cn-1002")))])]),a("div",{staticClass:"loanRes-cell"},[a("van-cell-group",[a("van-cell",{attrs:{title:t.$t("cn-330"),value:t.loanTime,size:"large"}}),a("van-cell",{attrs:{title:t.$t("cn-346"),value:t.$formatMoney(t.loanAmount),size:"large"}})],1)],1),a("div",{staticClass:"login-button-group"},[a("van-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.replace("/wealth")}}},[t._v(t._s(t.$t("cn-337")))]),a("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.$router.replace("/")}}},[t._v(t._s(t.$t("cn-338")))])],1)]:t._e(),"2"===t.orderStatus||"3"===t.orderStatus||"4"===t.orderStatus||"5"===t.orderStatus?[a("page-head",{attrs:{titleKey:"loanResultTitle",fixed:!0}}),a("div",{staticClass:"loanRes-title"},[a("p",{staticClass:"loanRes-img"},[a("i",{staticClass:"succ"}),a("span",[t._v(t._s(t.$t("cn-328")))])]),a("h4",{staticClass:"loanRes-h3"},[t._v(t._s(t.$t("cn-329")))])]),a("div",{staticClass:"loanRes-cell"},[a("van-cell-group",[a("van-cell",{attrs:{title:t.$t("cn-330"),value:t.netTime,size:"large"}}),a("van-cell",{attrs:{title:t.$t("cn-1055"),value:t.dueTime,size:"large"}}),a("van-cell",{attrs:{title:t.$t("cn-332"),value:t.$formatMoney(t.loanAmount),size:"large"}})],1)],1),a("div",{staticClass:"login-button-group"},[a("van-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.replace("/wealth")}}},[t._v(t._s(t.$t("cn-337")))]),a("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.$router.replace("/")}}},[t._v(t._s(t.$t("cn-338")))])],1)]:t._e(),"6"===t.orderStatus?[a("page-head",{attrs:{titleKey:"loanResultTitle",fixed:!0}}),a("div",{staticClass:"loanRes-title"},[a("p",{staticClass:"loanRes-img"},[a("i",{staticClass:"error"}),a("span",[t._v(t._s(t.$t("cn-345")))])]),a("h4",{staticClass:"loanRes-h3"},[t._v("Ang problema sa bangko ay sanhi ng kabiguan ng account")]),a("div",{staticClass:"login-button-group-b"},[a("van-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.replace("/wealth")}}},[t._v(t._s(t.$t("cn-337")))]),a("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.$router.replace("/")}}},[t._v(t._s(t.$t("cn-338")))])],1)])]:t._e()],2)},l=[],o=(a("b0c0"),a("2fa7")),i=(a("b342"),a("ad06")),r=(a("9eda"),a("565f")),c=(a("c625"),a("b650")),u=(a("3ec1"),a("7744")),d=(a("2a53"),a("34e9")),v=a("a474"),p=(n={},Object(o["a"])(n,d["a"].name,d["a"]),Object(o["a"])(n,u["a"].name,u["a"]),Object(o["a"])(n,c["a"].name,c["a"]),Object(o["a"])(n,r["a"].name,r["a"]),Object(o["a"])(n,i["a"].name,i["a"]),n),m={name:"LoanResult",components:p,props:{},data:function(){return{orderStatus:"",loanAmount:"",leftAmount:"",loanTime:"",netTime:"",dueTime:"",orderId:""}},computed:{},watch:{},created:function(){this.orderId=this.$route.query.orderId,this.$isNullOrEmpty(this.orderId)&&this.$toast(this.$t("cn-351")),this.getOrderDetail()},mounted:function(){},destroyed:function(){},methods:{getOrderDetail:function(){var t=this;Object(v["e"])({userGid:localStorage.getItem("userGid"),orderId:this.orderId}).then((function(e){if("0000"===e.code){var a=e.data;t.orderStatus=a.orderStatus,t.loanAmount=a.loanAmount,t.leftAmount=a.leftAmount,t.loanTime=a.loanTime,t.netTime=a.netTime,t.dueTime=a.dueTime}else t.$toast(e.message)}))}}},f=m,$=(a("0455"),a("2877")),_=Object($["a"])(f,s,l,!1,null,"a488a9ba",null);e["default"]=_.exports}}]);