(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CreditContract"],{"15a4":function(t,n,c){"use strict";var a=c("679b"),i=c.n(a);i.a},"2eb8":function(t,n,c){"use strict";c.r(n);var a,i=function(){var t=this,n=this,c=n.$createElement,a=n._self._c||c;return a("div",{staticClass:"addbank"},[a("page-head",{attrs:{titleKey:"creditTitle1",fixed:!0}}),a("div",{staticClass:"myInfo-head"},[a("h3",[n._v(n._s(n.$t("cn-2110")))]),a("van-progress",{attrs:{percentage:n.progress,"pivot-text":"","stroke-width":"9","pivot-color":"#FFD04F","track-color":"#FFFFFF",color:"#FFD04F"}}),a("h4",[n._v(n._s(n.progress)+"%")])],1),a("div",{staticClass:"reg-form"},[a("div",{staticClass:"reg-item"},[a("h3",{staticClass:"require"},[n._v(n._s(n.$t("cn-2111"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{readonly:"",clickable:"",name:"picker","right-icon":"arrow-down",value:n.showRelationName.first,placeholder:n.$t("cn-21131")},on:{click:function(t){n.showRelation.first=!0}}}),a("van-popup",{attrs:{position:"bottom"},model:{value:n.showRelation.first,callback:function(t){n.$set(n.showRelation,"first",t)},expression:"showRelation.first"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:n.relationSheep,"value-key":"name"},on:{confirm:function(n){t.onConfirm(n,"first")},cancel:function(t){n.showRelation.first=!1}}})],1),n.$isNative?[a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",disabled:"",readonly:"",clickable:"",value:n.firstContract.contactName,"right-icon":"plus",placeholder:n.$t("cn-2121")},on:{click:function(){n.getContacts("first")}}})]:[a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",placeholder:n.$t("cn-2122")},model:{value:n.firstContract.contactName,callback:function(t){n.$set(n.firstContract,"contactName",t)},expression:"firstContract.contactName"}}),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",placeholder:n.$t("cn-2123")},model:{value:n.firstContract.contactPhone,callback:function(t){n.$set(n.firstContract,"contactPhone",t)},expression:"firstContract.contactPhone"}})]],2),a("div",{staticClass:"reg-item"},[a("h3",{staticClass:"require"},[n._v(n._s(n.$t("cn-2112"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{readonly:"",clickable:"",name:"picker","right-icon":"arrow-down",value:n.showRelationName.sec,placeholder:n.$t("cn-21131")},on:{click:function(t){n.showRelation.sec=!0}}}),a("van-popup",{attrs:{position:"bottom"},model:{value:n.showRelation.sec,callback:function(t){n.$set(n.showRelation,"sec",t)},expression:"showRelation.sec"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:n.relationSheep,"value-key":"name"},on:{confirm:function(n){t.onConfirm(n,"sec")},cancel:function(t){n.showRelation.sec=!1}}})],1),n.$isNative?[a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",disabled:"",readonly:"",clickable:"",value:n.secContract.contactName,"right-icon":"plus",placeholder:n.$t("cn-2121")},on:{click:function(){n.getContacts("sec")}}})]:[a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",placeholder:n.$t("cn-2122")},model:{value:n.secContract.contactName,callback:function(t){n.$set(n.secContract,"contactName",t)},expression:"secContract.contactName"}}),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",placeholder:n.$t("cn-2123")},model:{value:n.secContract.contactPhone,callback:function(t){n.$set(n.secContract,"contactPhone",t)},expression:"secContract.contactPhone"}})]],2),a("div",{staticClass:"reg-item"},[a("h3",{staticClass:"require"},[n._v(n._s(n.$t("cn-2113"))+"：")]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{readonly:"",clickable:"",name:"picker","right-icon":"arrow-down",value:n.showRelationName.thr,placeholder:n.$t("cn-21131")},on:{click:function(t){n.showRelation.thr=!0}}}),a("van-popup",{attrs:{position:"bottom"},model:{value:n.showRelation.thr,callback:function(t){n.$set(n.showRelation,"thr",t)},expression:"showRelation.thr"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:n.relationSheep,"value-key":"name"},on:{confirm:function(n){t.onConfirm(n,"thr")},cancel:function(t){n.showRelation.thr=!1}}})],1),n.$isNative?[a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",disabled:"",readonly:"",clickable:"",value:n.thrContract.contactName,"right-icon":"plus",placeholder:n.$t("cn-2121")},on:{click:function(){n.getContacts("thr")}}})]:[a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",placeholder:n.$t("cn-2122")},model:{value:n.thrContract.contactName,callback:function(t){n.$set(n.thrContract,"contactName",t)},expression:"thrContract.contactName"}}),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px","margin-bottom":"6px"},attrs:{type:"text",maxlength:"50",placeholder:n.$t("cn-2123")},model:{value:n.thrContract.contactPhone,callback:function(t){n.$set(n.thrContract,"contactPhone",t)},expression:"thrContract.contactPhone"}})]],2),a("div",{staticClass:"login-contract"},[a("van-checkbox",{model:{value:n.isReadContract,callback:function(t){n.isReadContract=t},expression:"isReadContract"}}),n._v(" "+n._s(n.$t("cn-2124"))+" "),a("b",{on:{click:function(t){return n.showContract()}}},[n._v("《"+n._s(n.$t("cn-2125"))+"》")])],1),n._m(0),a("van-button",{staticClass:"reg-submit",attrs:{type:"info",loading:n.isSubmit,"loading-text":n.$t("cn-1043")},on:{click:n.saveCreditData}},[n._v(n._s(n.$t("cn-209")))])],1),a("van-dialog",{attrs:{confirmButtonText:n.$t("cn-434"),cancelButtonText:n.$t("cn-1051"),title:n.contractTitle},model:{value:n.isShowContract,callback:function(t){n.isShowContract=t},expression:"isShowContract"}},[a("div",{staticClass:"contract-model",attrs:{id:"contractBody"}},[a("p",[n._v(" PondoCash cam kết duy trì sự riêng tư của người dùng. APP này chứa những thông tin cá nhân mà chúng tôi thu thập từ người dùng, PondoCash sẽ không chia sẻ thông tin cá nhân người dùng mới hoặc cũ, trừ trường hợp PondoCash sử dụng thông tin người dùng vào mục đích kinh doanh liên quan tới phân tích tính khả thi của các sản phẩm cho vay của chúng tôi trong việc xử lý các giao dịch, thực hiện lệnh của tòa án hoặc những quy trình, quy phạm pháp luật được áp dụng và để xử lý các báo cáo."),a("br"),a("b",[n._v("1.Các thông tin được thu thập bởi PondoCash – quá trình thu thập và quản lý thông tin của PondoCash")]),a("br"),n._v(" PondoCash thu thập thông tin cá nhân người dùng. Khi khách hàng cung cấp các thông tin cá nhân cho PondoCash, PondoCash sẽ thông qua ứng dụng, sử dụng thông tin từ việc sử dụng ứng dụng do người dùng tạo ra khi tương tác với ứng dụng."),a("br"),a("b",[n._v("2.Các thông tin được thu thập bởi PondoCash")]),a("br"),n._v(" Thông tin cá nhân : Bao gồm: Tên, số điện thoại di động, Giấy phép lái xe, thông tin liên hệ khẩn cấp, Ảnh, địa chỉ gửi thư, chức vụ, địa chỉ công ty,…."),a("br"),n._v(" Thông tin liên quan tới thiết bị đang sử dụng hoặc thẻ SIM"),a("br"),n._v(" Các thông tin liên quan tới thiết bị của bạn như : gaid, số IMSI, phiên bản Android, thông tin thiết bị trên các nhà mạng, lịch sử cuộc gọi, tin nhắn ... "),a("br"),n._v(" Thông tin vị trí (chỉ dành cho dịch vụ / tính năng đặc biệt): Các loại thông tin khác nhau liên quan đến vị trí của bạn. Ví dụ: mã quốc gia, mã thành phố, mã mạng di động, thông tin vĩ độ và kinh độ, để đảm bảo rằng vị trí của người dùng trong việc cung cấp dịch vụ của chúng tôi và để đánh giá điểm tín dụng của bạn "),a("br"),n._v(" Thông tin ngân hàng: Bao gồm tên, số tài khoản, …Chúng tôi cũng thu thập các thông tin cá nhân khác và thu thập thông tin về việc làm, thông tin của bên thứ ba,.. Khi sử dụng một số dịch vụ nhất định. Mục đích của việc thu thập thông tin này là để cải tiến các dịch vụ mà chúng tôi cung cấp cho bạn. Thông tin được cung cấp phụ thuộc vào cách bạn sử dụng, tham gia vào các sản phẩm hoặc dịch vụ của chúng tôi. Việc sử dụng các dịch vụ của chúng tôi là hoàn toàn tự nguyện và bạn không cần cung cấp thông tin như vậy trừ khi bạn chọn sử dụng dịch vụ PondoCash của chúng tôi. "),a("br"),a("b",[n._v("3.PondoCash quản lý thông tin cá nhân của bạn như thế nào?")]),a("br"),n._v(" Thông tin chúng tôi thu thập từ bạn sẽ được lưu trữ và sẽ được quản lý cho các mục đích sau: Để kiểm tra xem các thông tin mà bạn cung cấp so với thông tin thực tế của bạn, đảm bảo không phải người khác sử dụng danh tính của bạn;"),a("br"),n._v(" Để xác định khả năng của bạn có thể nhận được khoản vay theo các điều khoản áp dụng;"),a("br"),n._v(" Để liên lạc với bạn về tài khoản của bạn, cũng như để làm cho thông tin nhận dạng khi bạn gọi hoặc truy cập ứng dụng di động của chúng tôi và cung cấp thông tin cập nhật khi có thay đổi đối với các dịch vụ của chúng tôi."),a("br"),n._v(" Để xác nhận thông tin do bạn cung cấp là chính xác trong quá trình xin vay vốn. Đảm bảo quá trình giao dịch nếu khoản vay của bạn được chấp thuận."),a("br"),n._v(" Giải quyết các nghĩa vụ phát sinh từ hợp đồng đã ký kết giữa bạn và chúng tôi. "),a("br"),a("b",[n._v("4.PondoCash bảo vệ thông tin cá nhân của người dùng như thế nào? ")]),a("br"),n._v(" (1) PondoCash tìm cách bảo vệ thông tin của bạn bằng những công nghệ mới nhất. Chúng tôi sẽ tuân thủ các điều khoản áp dụng để đảm bảo thông tin của bạn được bảo mật và duy trì và hạn chế quyền truy cập để bảo vệ bạn chống lại mọi hình thức gian lận. Bạn chịu trách nhiệm bảo vệ mã truy cập tài khoản và ID người dùng và mật khẩu của mình, để đảm bảo người dùng khác không thể truy cập tài khoản của bạn. "),a("br"),n._v(" (2) Về thông tin của bạn, PondoCash không thể đảm bảo tính bảo mật của dữ liệu được truyền qua ứng dụng của chúng tôi. Khi chúng tôi nhận được dữ liệu hoặc thông tin của bạn, chúng tôi sẽ sử dụng các tính năng bảo mật và thủ tục để ngăn chặn truy cập trái phép."),a("br"),n._v(" (3) PondoCash tuân thủ đầy đủ và tuân thủ các luật và quy định về bảo vệ dữ liệu hiện hành ở Vietnam."),a("br"),a("b",[n._v("5. Các loại trừ từ PondoCash trong việc phân phối thông tin cá nhân của người dùng")]),a("br"),n._v(" PondoCash sẽ tiết lộ thông tin cá nhân của người dùng cho các nhà cung cấp dịch vụ, khách hàng vay và thành viên trong nhóm công ty của chúng tôi, những người giúp thực hiện một số phần trong hoạt động kinh doanh của chúng tôi bao gồm các quy trình dịch vụ, thanh toán, phòng ngừa gian lận."),a("br"),n._v(" PondoCash cũng sẽ chia sẻ thông tin về người dùng với bên thứ ba liên quan đến bất kỳ luật và tòa án nào để ngăn ngừa tổn thất về tài chính, báo cáo các hoạt động bất hợp pháp bị cáo buộc hoặc điều tra các vi phạm các thỏa thuận sử dụng của chúng tôi."),a("br"),n._v(" PondoCash sẽ không bán hoặc cho thuê bất kỳ dữ liệu thông tin người dùng nào cho bất kỳ bên thứ ba nào cho bất kỳ mục đích nào, trừ khi chúng tôi áp dụng thay đổi chính sách và sẽ thông báo cho bạn biết khi có bất kỳ thay đổi nào."),a("br"),a("b",[n._v("6. Tuổi")]),a("br"),n._v(" Để có thể sử dụng dịch vụ PondoCash của chúng tôi, bạn phải từ 22 tuổi trở lên. Nếu bạn không đáp ứng được yêu cầu về tuổi, bạn không được phép sử dụng dịch vụ PondoCash."),a("br"),a("b",[n._v("7. Các thay đổi đối với chính sách bảo mật")]),a("br"),n._v(" Chúng tôi sẽ gửi thông báo qua tin nhắn văn bản hoặc email liên quan đến bất kỳ thay đổi nào liên quan đến chính sách bảo mật của chúng tôi để bạn có thể xem lại chính sách bảo mật mới."),a("br")])])])],1)},o=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("ul",{staticClass:"credit-tips"},[c("li",[t._v("Please ensure the information you submit is correct and valid,which will help your application.")]),c("li",[t._v("PondoCash allow perrmissions to access your phone book contacts PondoCash uses your phone book contacts to aid us in reaching you in case your provided contact number can not be contacted and the reference(emergency)persons you provided have failed to communicate whith us,")])])}],h=(c("7db0"),c("b0c0"),c("ac1f"),c("5319"),c("2fa7")),e=(c("b342"),c("ad06")),s=(c("9753"),c("417e")),r=(c("6370"),c("3acc")),l=(c("47e2"),c("2241")),g=(c("8e11"),c("f253")),d=(c("9eda"),c("565f")),p=(c("5f68"),c("f600")),m=(c("87d0"),c("e41f")),u=(c("c625"),c("b650")),b=c("a474"),v=(a={},Object(h["a"])(a,u["a"].name,u["a"]),Object(h["a"])(a,m["a"].name,m["a"]),Object(h["a"])(a,p["a"].name,p["a"]),Object(h["a"])(a,d["a"].name,d["a"]),Object(h["a"])(a,g["a"].name,g["a"]),Object(h["a"])(a,l["a"].Component.name,l["a"].Component),Object(h["a"])(a,r["a"].name,r["a"]),Object(h["a"])(a,s["a"].name,s["a"]),Object(h["a"])(a,e["a"].name,e["a"]),a),f={name:"Credit",components:v,props:{},data:function(){return{firstContract:{seqNo:"1",relationship:"1",contactPhone:"",contactName:""},secContract:{seqNo:"2",relationship:"2",contactPhone:"",contactName:""},thrContract:{seqNo:"3",relationship:"3",contactPhone:"",contactName:""},showRelationName:{first:"",sec:"",thr:""},showRelation:{first:!1,sec:!1,thr:!1},isReadContract:!0,isShowContract:!1,isReport:!1,relationSheep:[{id:"1",name:this.$t("cn-2114")},{id:"2",name:this.$t("cn-2115")},{id:"3",name:this.$t("cn-2116")},{id:"4",name:this.$t("cn-2117")},{id:"5",name:this.$t("cn-2118")},{id:"6",name:this.$t("cn-2119")},{id:"7",name:this.$t("cn-2120")}],urlType:"",progress:40,isSubmit:!1}},computed:{},watch:{},created:function(){this.urlType=this.$route.query.type},mounted:function(){},destroyed:function(){},methods:{checkContractName:function(t,n,c){var a=!1;return a="first"===c?this.secContract.contactName===n&&this.secContract.contactPhone===t||this.thrContract.contactName===n&&this.thrContract.contactPhone===t:"sec"===c?this.firstContract.contactName===n&&this.firstContract.contactPhone===t||this.thrContract.contactName===n&&this.thrContract.contactPhone===t:this.secContract.contactName===n&&this.secContract.contactPhone===t||this.firstContract.contactName===n&&this.firstContract.contactPhone===t,a},showContract:function(){this.isShowContract=!0,this.contractTitle=this.$t("cn-2125"),this.$nextTick((function(){document.getElementById("contractBody").scrollTo(0,0)}))},getContacts:function(t){var n=this;if(this.$isNullOrEmpty(navigator.contacts))this.$toast(this.$t("cn-1046"));else{var c=this,a={filter:"",multiple:!0};navigator.contacts.pickContact((function(i){var o=i.displayName;if(c.$isNullOrEmpty(o)&&i.name)for(var h in i.name)if(o=o||i.name[h],o)break;for(var e=[],s=i.phoneNumbers,r=0;r<s.length;r++)e.push(s[r].value.replace(/ /g,""));o&&e.length>0&&("first"===t?n.checkContractName(e[0]+"",o+"",t)?n.$toast(n.$t("cn-21251")):(c.$set(c.firstContract,"contactPhone",e[0]+""),c.$set(c.firstContract,"contactName",o+"")):"sec"===t?n.checkContractName(e[0]+"",o+"",t)?n.$toast(n.$t("cn-21251")):(c.$set(c.secContract,"contactPhone",e[0]+""),c.$set(c.secContract,"contactName",o+"")):n.checkContractName(e[0]+"",o+"",t)?n.$toast(n.$t("cn-21251")):(c.$set(c.thrContract,"contactPhone",e[0]+""),c.$set(c.thrContract,"contactName",o+""))),c.isReport||navigator.contacts.find(["name","displayName","phoneNumbers"],(function(t){for(var n=[],a=0;a<t.length;a++){var i=t[a],o=i.displayName;if(c.$isNullOrEmpty(o)&&i.name)for(var h in i.name)if(o=o||i.name[h],o)break;var e=[],s=t[a].phoneNumbers;if(!c.$isNullOrEmpty(s)&&0!==s.length){for(var r=0;r<s.length;r++)e.push({id:s[r].id||"",label:s[r].label||"",number:s[r].value.replace(/ /g,"")});o&&e.length>0&&n.push({name:o,phoneList:e})}}n.length>0&&Object(b["h"])({userGid:localStorage.getItem("userGid"),contactList:n}).then((function(){c.isReport=!0}))}),(function(){}),a)}),(function(){}))}},onConfirm:function(t,n){"first"===n?(this.$set(this.firstContract,"relationship",t.id),this.$set(this.showRelation,"first",!1),this.$set(this.showRelationName,"first",t.name)):"sec"===n?(this.$set(this.secContract,"relationship",t.id),this.$set(this.showRelation,"sec",!1),this.$set(this.showRelationName,"sec",t.name)):(this.$set(this.thrContract,"relationship",t.id),this.$set(this.showRelation,"thr",!1),this.$set(this.showRelationName,"thr",t.name))},saveCreditData:function(){var t=this;if(!this.isSubmit){if(this.isSubmit=!0,this.$isNullOrEmpty(this.firstContract.contactName)||this.$isNullOrEmpty(this.secContract.contactName)||this.$isNullOrEmpty(this.thrContract.contactName))return this.$toast(this.$t("cn-2126")),void(this.isSubmit=!1);if(this.$isNullOrEmpty(this.firstContract.contactPhone)||this.$isNullOrEmpty(this.secContract.contactPhone)||this.$isNullOrEmpty(this.thrContract.contactPhone))return this.$toast(this.$t("cn-2127")),void(this.isSubmit=!1);if(!this.isReadContract)return this.$toast(this.$t("cn-1056")),void(this.isSubmit=!1);var n=[this.firstContract,this.secContract,this.thrContract];Object(b["k"])({userGid:localStorage.getItem("userGid"),contactList:n}).then((function(n){"0000"===n.code?"1"===t.urlType?t.$router.replace({path:"/creditStatus"}):t.$router.replace({path:"/creditFile"}):(t.$toast(n.message),t.isSubmit=!1)})).catch((function(){t.isSubmit=!1,t.$toast(t.$t("cn-1044"))}))}}}},C=f,k=(c("15a4"),c("2877")),y=Object(k["a"])(C,i,o,!1,null,"5d4b1e0b",null);n["default"]=y.exports},"679b":function(t,n,c){}}]);