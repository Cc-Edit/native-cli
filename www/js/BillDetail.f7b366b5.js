(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BillDetail"],{"10e2":function(t,a,e){},"2a73":function(t,a,e){"use strict";e.r(a);var l,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("page-head",{attrs:{titleKey:"billDetailTitle",fixed:!0}}),"1"===t.orderStatus?[e("div",{staticClass:"confirm-title"},[e("b",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.$formatMoney(t.loanAmount))+t._s(t.$t("home-unit")))]),e("span",{staticClass:"ing"},[t._v(t._s(t.$t("cn-320"))+"…")])]),e("van-cell-group",{staticClass:"confirm-body"},[e("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:t.loanAmount}}),e("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),e("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),e("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1)]:t._e(),"2"===t.orderStatus?[e("div",{staticClass:"confirm-title"},[e("b",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.$formatMoney(t.loanAmount))+t._s(t.$t("home-unit")))]),e("span",[t._v(t._s(t.$t("cn-346")))])]),e("van-cell-group",{staticClass:"confirm-body"},[e("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:t.$formatMoney(t.loanAmount)}}),e("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),e("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),e("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1),e("van-cell-group",{staticClass:"confirm-body confirm-info"},[e("van-cell",{attrs:{title:t.$t("cn-73"),value:t.$formatMoney(t.leftAmount||0),"is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(a){t.showDetail=!t.showDetail}}}),e("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[e("van-cell-group",{staticClass:"load-detail-body"},[t.$isNullOrEmpty(t.discountAmount)?e("van-cell",{attrs:{title:t.$t("cn-300"),value:t.$formatMoney(t.fee||0)}}):e("van-cell",{staticStyle:{color:"#0031e1"},attrs:{title:t.$t("cn-300")}},[e("p",{attrs:{slot:"default"},slot:"default"},[e("span",{staticStyle:{display:"block",color:"#0031e1"}},[t._v(t._s(""+t.$formatMoney(t.fee)+t.$t("home-unit")+" - "+t.$formatMoney(t.discountAmount)+t.$t("home-unit")))]),e("span",{staticStyle:{display:"block",color:"#0031e1"}},[t._v(t._s("= "+t.$formatMoney(t.differenceFee))+t._s(t.$t("home-unit")))])])])],1)],1),e("van-cell",{attrs:{title:t.$t("cn-75"),value:t.dueTime}})],1),e("div",{staticClass:"billDetail-btn"},[e("van-button",{attrs:{type:"info"},on:{click:function(a){return t.$router.push({path:"/repayment",query:{orderId:t.orderId}})}}},[t._v(t._s(t.$t("cn-76")))])],1)]:t._e(),"3"===t.orderStatus?[e("div",{staticClass:"confirm-title"},[e("b",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.$formatMoney(t.loanAmount))+t._s(t.$t("home-unit")))]),e("span",[t._v(t._s(t.$t("cn-346")))])]),e("van-cell-group",{staticClass:"confirm-body"},[e("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:t.$formatMoney(t.loanAmount)}}),e("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),e("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),e("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1),e("van-cell-group",{staticClass:"confirm-body confirm-info"},[e("van-cell",{attrs:{title:t.$t("cn-73"),value:t.$formatMoney(t.leftAmount||0),"is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(a){t.showDetail=!t.showDetail}}}),e("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[e("van-cell-group",{staticClass:"load-detail-body"},[t.$isNullOrEmpty(t.discountAmount)?e("van-cell",{attrs:{title:t.$t("cn-300"),value:t.$formatMoney(t.fee||0)}}):e("van-cell",{staticStyle:{color:"#0031e1"},attrs:{title:t.$t("cn-300")}},[e("p",{attrs:{slot:"default"},slot:"default"},[e("span",{staticStyle:{display:"block",color:"#0031e1"}},[t._v(t._s(""+t.$formatMoney(t.fee)+t.$t("home-unit")+" - "+t.$formatMoney(t.discountAmount)+t.$t("home-unit")))]),e("span",{staticStyle:{display:"block",color:"#0031e1"}},[t._v(t._s("= "+t.$formatMoney(t.differenceFee))+t._s(t.$t("home-unit")))])])])],1)],1),e("van-cell",{attrs:{title:t.$t("cn-75"),value:t.dueTime}})],1),e("div",{staticClass:"billDetail-btn"},[e("van-button",{attrs:{type:"info",disabled:""}},[t._v(t._s(t.$t("cn-342"))+"...")])],1)]:t._e(),"4"===t.orderStatus?[e("div",{staticClass:"confirm-title"},[e("b",[t._v(t._s(t.$formatMoney(t.loanAmount))+t._s(t.$t("home-unit")))]),e("span",[t._v(t._s(t.$t("cn-1038")))]),e("i",[t._v(t._s(t.$t("cn-47"))+t._s(t.overdueDays)+t._s(t.$t("cn-288")))])]),e("van-cell-group",{staticClass:"confirm-body"},[e("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:t.loanAmount}}),e("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),e("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),e("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1),e("van-cell-group",{staticClass:"confirm-body confirm-warning"},[e("van-cell",{attrs:{title:t.$t("cn-73"),value:t.$formatMoney(t.leftAmount||0),"is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(a){t.showDetail=!t.showDetail}}}),e("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[e("van-cell-group",{staticClass:"load-detail-body"},[t.$isNullOrEmpty(t.discountAmount)?e("van-cell",{attrs:{title:t.$t("cn-300"),value:t.$formatMoney(t.fee||0)}}):e("van-cell",{staticStyle:{color:"#0031e1"},attrs:{title:t.$t("cn-300")}},[e("p",{attrs:{slot:"default"},slot:"default"},[e("span",{staticStyle:{display:"block",color:"#0031e1"}},[t._v(t._s(""+t.$formatMoney(t.fee)+t.$t("home-unit")+" - "+t.$formatMoney(t.discountAmount)+t.$t("home-unit")))]),e("span",{staticStyle:{display:"block",color:"#0031e1"}},[t._v(t._s("= "+t.$formatMoney(t.differenceFee))+t._s(t.$t("home-unit")))])])]),e("van-cell",{attrs:{title:t.$t("cn-45"),value:t.$formatMoney(t.dueFee||0)}})],1)],1),e("van-cell",{attrs:{title:t.$t("cn-75"),value:t.dueTime}}),e("van-cell",{attrs:{title:t.$t("cn-47"),value:""+t.overdueDays+t.$t("cn-2881")}})],1),e("div",{staticClass:"billDetail-btn"},[e("van-button",{attrs:{type:"info"},on:{click:function(a){return t.$router.push({path:"/repayment",query:{orderId:t.orderId}})}}},[t._v(t._s(t.$t("cn-76")))])],1)]:t._e(),"5"===t.orderStatus?[e("div",{staticClass:"confirm-title"},[e("b",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.$formatMoney(t.loanAmount))+t._s(t.$t("home-unit")))]),e("span",{staticClass:"ing"},[t._v(t._s(t.$t("cn-344")))])]),e("van-cell-group",{staticClass:"confirm-body"},[e("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:t.$formatMoney(t.loanAmount)}}),e("van-cell",{attrs:{title:t.$t("cn-95"),value:t.repaymentAmount}}),e("van-cell",{attrs:{title:t.$t("cn-86"),value:""+t.loanPeriod+t.$t("cn-2881")}}),e("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),e("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1)]:t._e(),"6"===t.orderStatus?[e("div",{staticClass:"confirm-title"},[e("b",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.$formatMoney(t.loanAmount))+t._s(t.$t("home-unit")))]),e("span",{staticClass:"ing"},[t._v(t._s(t.$t("cn-345")))])]),e("van-cell-group",{staticClass:"confirm-body"},[e("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:t.$formatMoney(t.loanAmount)}}),e("van-cell",{attrs:{title:t.$t("cn-86"),value:t.loanPeriod}}),e("van-cell",{attrs:{title:t.$t("cn-348"),value:t.loanTime}}),e("van-cell",{attrs:{title:t.$t("cn-71"),value:t.bankName+"("+t.cardNo+")"}})],1)]:t._e(),"99"===t.orderStatus?[e("div",{staticClass:"confirm-title"},[e("b",[t._v(t._s(t.$formatMoney(2e5))+t._s(t.$t("home-unit")))]),e("span",[t._v("借款金额")]),e("i",{staticClass:"warn"},[t._v("今天到期")])]),e("van-cell-group",{staticClass:"confirm-body"},[e("van-cell",{staticClass:"load-ques",attrs:{title:t.$t("cn-346"),value:"2000"}}),e("van-cell",{attrs:{title:t.$t("cn-86"),value:"50天"}}),e("van-cell",{attrs:{title:t.$t("cn-348"),value:"2019-11-11"}}),e("van-cell",{attrs:{title:t.$t("cn-349"),value:"2019-11-12"}}),e("van-cell",{attrs:{title:t.$t("cn-71"),value:"招商银行"}})],1),e("van-cell-group",{staticClass:"confirm-body confirm-info"},[e("van-cell",{attrs:{title:"总计代还",value:"20001","is-link":"","arrow-direction":t.showDetail?"down":""},on:{click:function(a){t.showDetail=!t.showDetail}}}),e("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"load-detail",staticStyle:{padding:"0 0 0 20px"}},[e("van-cell-group",{staticClass:"load-detail-body"},[e("van-cell",{attrs:{title:"服务费",value:"200"}})],1)],1),e("van-cell",{attrs:{title:"到期时间",value:"2019-11-19"}})],1),e("div",{staticClass:"billDetail-btn"},[e("van-button",{attrs:{type:"info"}},[t._v("立即还款")]),e("van-button",{attrs:{plain:"",type:"info"}},[t._v("查看协议")])],1)]:t._e()],2)},o=[],s=(e("b0c0"),e("ac1f"),e("5319"),e("2fa7")),i=(e("b342"),e("ad06")),c=(e("3ec1"),e("7744")),r=(e("47e2"),e("2241")),u=(e("2a53"),e("34e9")),d=(e("c625"),e("b650")),v=e("a474"),m=(l={},Object(s["a"])(l,d["a"].name,d["a"]),Object(s["a"])(l,u["a"].name,u["a"]),Object(s["a"])(l,r["a"].Component.name,r["a"].Component),Object(s["a"])(l,c["a"].name,c["a"]),Object(s["a"])(l,i["a"].name,i["a"]),l),$={name:"BillDetail",components:m,props:{},data:function(){return{showDetail:!0,orderStatus:"",loanAmount:"",loanPeriod:"",fee:"",discountAmount:"",differenceFee:"",loanTime:"",netTime:"",dueTime:"",leftAmount:"",cardNo:"",bankName:"",iconUrl:"",repaymentAmount:"",repaymentTime:"",dueFee:"",overdueDays:"",orderId:""}},computed:{},watch:{},created:function(){this.orderId=this.$route.query.orderId,this.$isNullOrEmpty(this.orderId)&&this.$toast(this.$t("cn-351")),this.getOrderDetail()},mounted:function(){},destroyed:function(){},methods:{getOrderDetail:function(){var t=this;Object(v["e"])({userGid:localStorage.getItem("userGid"),orderId:this.orderId}).then((function(a){if("0000"===a.code){var e=a.data;if(t.orderStatus=e.orderStatus,t.loanAmount=e.loanAmount,t.loanPeriod=e.loanPeriod,t.fee=e.fee,t.discountAmount=e.discountAmount,t.loanTime=e.loanTime,t.netTime=e.netTime,t.dueTime=e.dueTime,t.leftAmount=e.leftAmount,t.cardNo=e.cardNo,t.bankName=e.bankName,t.iconUrl=e.iconUrl,t.repaymentAmount=e.repaymentAmount,t.repaymentTime=e.repaymentTime,t.dueFee=e.dueFee,t.overdueDays=e.overdueDays,!t.$isNullOrEmpty(t.discountAmount)){var l=(e.discountAmount||"").replace(/,/g,""),n=e.fee.replace(/,/g,"");t.differenceFee=t.accSub(n,l)}}else t.$toast(a.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))},showDialog:function(t){var a="",e="";1===t?e="Kasama sa halaga ng pautang ang bayad sa plano ng proteksyon ng borrower:50₱":2===t?(a="Paglalarawan ng overdue fee",e="Ang mga bayarin sa overdue ay kinakalkula batay sa bilang ng mga overdue na araw, at 2% ng prinsipal na dapat bayaran ay sisingilin bilang overdue fee para sa bawat araw na overdue."):(a="Mga detalye ng komprehensibong interes at gastos",e="1.Kabilang sa mga komprehensibong rate ng interes ang: interes at iba pang mga bayarin"),r["a"].alert({title:a,confirmButtonText:this.$t("cn-434"),cancelButtonText:this.$t("cn-1051"),message:e}).then((function(){}))}}},f=$,p=(e("452a"),e("2877")),y=Object(p["a"])(f,n,o,!1,null,"4a0ed180",null);a["default"]=y.exports},"452a":function(t,a,e){"use strict";var l=e("10e2"),n=e.n(l);n.a}}]);