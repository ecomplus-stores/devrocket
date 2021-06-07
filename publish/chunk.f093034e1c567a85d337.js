(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{227:function(t,s,e){var a=e(238);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(172).default)("0cb08df4",a,!0,{})},237:function(t,s,e){"use strict";e(227)},238:function(t,s,e){(s=e(171)(!1)).push([t.i,".order-info__number{color:var(--secondary);margin-top:var(--spacer-2);font-weight:var(--font-light)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);font-size:var(--font-size-sm);display:block}.order-info__timeline{list-style:none;display:flex;flex-wrap:nowrap;overflow-x:auto;padding:0;margin:var(--spacer-4) 0;font-size:var(--font-size-sm)}@media (min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{padding:var(--spacer-2);margin-right:var(--spacer-1);min-width:165px;border:solid var(--border-color);border-width:0 0 5px}@media (min-width:768px){.order-info__timeline-status{padding-left:var(--spacer-3);margin-right:0;margin-bottom:var(--spacer-1);min-width:0;border-bottom-width:0;border-left-width:5px}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{font-size:85%;color:var(--text-muted)}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{font-weight:var(--font-bold);color:var(--info)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{text-align:center;font-size:var(--font-size-lg);margin-bottom:var(--spacer-5)}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again,.order-info__toggle{margin-top:var(--spacer-3);margin-right:var(--spacer-3)}.order-info__cancelled{color:var(--danger)}",""]),t.exports=s},239:function(t,s,e){"use strict";var a=e(26),r=e(41),i=e(78),n=e(44),o=e(3),c=e(50),l=e(6),d=e(65),u=e(229),_=e(243),m={name:"EcOrderInfo",components:{ShippingLine:u.a,EcSummary:_.a},props:{order:{type:Object,required:!0},isNew:Boolean,skipDataLoad:Boolean,skipFirstDataLoad:Boolean,skipCustomerUpdate:Boolean,accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"},ecomCart:{type:Object,default:()=>l.a},ecomPassport:{type:Object,default:()=>c.a}},data(){return{isLoaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order,canReopenOrder:!1}},computed:{i19buyAgain:()=>Object(r.a)(a.v),i19cancelOrder:()=>Object(r.a)(a.B),i19codeCopied:()=>Object(r.a)(a.M),i19copyCode:()=>Object(r.a)(a.V),i19copyErrorMsg:()=>Object(r.a)(a.W),i19doPaymentMsg:()=>Object(r.a)(a.eb),i19freight:()=>Object(r.a)(a.vb),i19login:()=>Object(r.a)(a.Sb),i19loginForOrderDetailsMsg:()=>Object(r.a)(a.Ub),i19myOrders:()=>Object(r.a)(a.dc),i19of:()=>Object(r.a)(a.qc),i19orderConfirmationMsg:()=>Object(r.a)(a.xc),i19orderNumber:()=>Object(r.a)(a.zc),i19printBillet:()=>Object(r.a)(a.Kc),i19redirectToPayment:()=>Object(r.a)(a.Rc),i19referenceCode:()=>Object(r.a)(a.Tc),i19reopenOrder:()=>Object(r.a)(a.Zc),i19shippingAddress:()=>Object(r.a)(a.vd),i19transactionCode:()=>Object(r.a)(a.Hd),i19ticketCode:()=>Object(r.a)(a.Dd),i19trackDelivery:()=>Object(r.a)(a.Gd),i19zipCode:()=>Object(r.a)(a.Ud),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},hasManyTransactions(){const{transactions:t}=this.localOrder;return t&&t.length>1},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},canShowShippingAddress(){const{localOrder:t,shippingAddress:s}=this;return!(!s||!s.street)&&!/(retira|pick\s?up|e-?mail)/i.test(t.shipping_method_label)},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:s}=this;if(t.payments_history){let s;if(t.payments_history.forEach((t=>{t&&(!s||!t.date_time||t.date_time>=s.date_time)&&(s=t)})),s)return s.status}const e=t.financial_status&&t.financial_status.current;return e||(s&&s.status?s.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,s=t.fulfillment_status&&t.fulfillment_status.current;if(s)return s;{const s=t.shipping_lines&&t.shipping_lines[0];if(s&&s.status)return s.status.current}return null},statusEntries(){const t=[];let s=[];return["payments_history","fulfillments"].forEach((t=>{Array.isArray(this.localOrder[t])&&(s=s.concat(this.localOrder[t]))})),s.length&&(s=s=s.sort(((t,s)=>t.date_time&&s.date_time?t.date_time>s.date_time?-1:1:0)),s.forEach(((e,a)=>{a>0&&e.status===s[a-1].status||t.push(e)}))),t},isAuthenticated(){return this.ecomPassport.checkAuthorization()}},methods:{i19FinancialStatus:t=>Object(r.a)(a.a)[t],i19FulfillmentStatus:t=>Object(r.a)(a.b)[t],i19OrderStatus:t=>Object(r.a)(a.e)[t],formatMoney:i.a,formatDate:n.a,formatTime(t){const s=Date.parse(t);return new Date(s).toLocaleTimeString()},toClipboard(t){this.$copyText(t).then((()=>{this.$toast({title:this.i19codeCopied,body:t,variant:"success",delay:2e3})}),(s=>{console.error(s),this.$toast({title:"Oops",body:`${this.i19copyErrorMsg}: <i>${t}</i>`,variant:"warning",delay:3e3})}))},saveCustomerOrder(){const{localOrder:t,ecomPassport:s}=this;!this.skipCustomerUpdate&&t.number&&s.checkAuthorization()&&s.requestApi("/me.json").then((({data:e})=>{const a=e.orders||[],r={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((s=>{t[s]&&(r[s]=t[s])}));const i=a.findIndex((({_id:s,number:e})=>s===t._id||e===t.number));i>-1?Object.assign(a[i],r):a.push(r),s.requestApi("/me.json","patch",{orders:a})}))},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:s}=t;l.a.clear(),s.forEach(((t,e)=>{l.a.addItem(t,!1),e+1===s.length&&(l.a.save(),window.location=this.cartUrl)}))}},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};c.a.requestApi(`/orders/${this.order._id}.json`,"patch",t).then((()=>{this.localOrder={...this.localOrder,...t}})).finally((()=>{this.isUpdating=!1}))}},watch:{isLoaded:{handler(t){if(t&&this.isAuthenticated&&"cancelled"===this.status){const{items:t}=this.localOrder;if(t&&t.length){const s=t.map((t=>t.product_id)),e=new d.a;e.setPageSize(s.length).setProductIds(s).fetch(!0).then((()=>{for(let s=0;s<t.length;s++){const a=t[s],r=e.getItems().find((({_id:t})=>t===a.product_id));if(r){if(a.variation_id&&r.variations){const t=r.variations.find((({sku:t})=>t===a.sku));if(t&&t.quantity>=a.quantity)continue}if(r.quantity>=a.quantity)continue}return void(this.canReopenOrder=!1)}this.canReopenOrder=!0})).catch(console.error)}}},immediate:!0}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t=`/orders/${this.order._id}.json`,s=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(o.g)({url:t})).then((({data:t})=>{this.localOrder={...this.localOrder,...t}})).catch((t=>{console.error(t)}));this.reloadInterval=setInterval(s,9e3),this.skipFirstDataLoad||setTimeout((()=>{s().finally((()=>{this.isLoaded=!0}))}),this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},p=(e(237),e(49)),f=Object(p.a)(m,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"order-info py-4"},[t.isNew?e("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),e("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.isLoaded?e("div",{key:"loaded"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 col-lg-3"},[e("h2",{staticClass:"order-info__number"},[e("small",[t._v(t._s(t.i19orderNumber)+":")]),t._v(" #"),e("span",[t._v(t._s(t.localOrder.number))])]),e("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast"}},[t.isUpdating||"cancelled"!==t.status?t._e():e("p",{staticClass:"order-info__cancelled h3"},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" "),e("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.canReopenOrder?e("button",{staticClass:"order-info__toggle btn",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[e("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()])],1)]),t.statusEntries.length?e("ul",{staticClass:"order-info__timeline"},t._l(t.statusEntries,(function(s,a){return e("li",{key:"status-"+a,staticClass:"order-info__timeline-status",class:"order-info__timeline-status--"+s.status},[s.date_time?e("div",{staticClass:"order-info__timeline-date"},[t._v(" "+t._s(t.formatDate(s.date_time))+" "+t._s(t.formatTime(s.date_time))+" ")]):t._e(),t._v(" "+t._s(t.i19FinancialStatus(s.status)||t.i19FulfillmentStatus(s.status))+" ")])})),0):t._e(),t.accountOrdersUrl?e("a",{staticClass:"order-info__orders-link d-none d-md-block btn btn-light",attrs:{href:t.accountOrdersUrl}},[e("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1),e("div",{staticClass:"col-md-7 col-lg-9"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("article",[t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?e("div",{staticClass:"order-info__billet"},[e("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),t.transaction.banking_billet.code?[e("p",[t._v(" "+t._s(t.i19ticketCode)+": "),e("br"),e("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),e("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[e("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?e("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[e("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?e("div",{staticClass:"order-info__redirect"},[e("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),e("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[e("i",{staticClass:"fas fa-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),e("div",{staticClass:"order-info__details"},[t._t("payment",[e("div",{staticClass:"order-info__payment card"},[e("div",{staticClass:"card-header"},[e("span",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[e("i",{staticClass:"fas fa-money-check mr-1"}),t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")])]),t._l(t.localOrder.transactions,(function(s){return e("div",{key:"t-"+s._id,staticClass:"card-body"},[e("p",{staticClass:"order-info__payment-value"},[s.payment_method.name?[t._v(" "+t._s(s.payment_method.name)+": ")]:t.localOrder.payment_method_label?[t._v(" "+t._s(t.localOrder.payment_method_label)+": ")]:t._e(),s.installments&&s.installments.value?e("strong",[t._v(" "+t._s(s.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(s.installments.value))+" ")]):e("strong",[t._v(" "+t._s(t.formatMoney(s.amount||t.localOrder.amount.total))+" ")]),t.hasManyTransactions&&s.status?[e("br"),e("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19FinancialStatus(s.status.current))+" ")])]:t._e()],2),s.notes?e("p",{staticClass:"order-info__payment-notes alert alert-warning",attrs:{role:"alert"},domProps:{innerHTML:t._s(s.notes)}}):t._e(),s.credit_card?e("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(s.credit_card.company)+" "),s.credit_card.last_digits?e("span",[s.credit_card.company?t._e():e("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(s.credit_card.last_digits)+" ")]):t._e()]):t._e(),s.intermediator?[s.intermediator.transaction_code?e("div",{staticClass:"order-info__transaction-code"},[e("small",[t._v(t._s(t.i19transactionCode))]),e("br"),e("code",[t._v(t._s(s.intermediator.transaction_code))]),e("br"),e("button",{staticClass:"btn btn-sm btn-light",on:{click:function(){return t.toClipboard(s.intermediator.transaction_code)}}},[e("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]):t._e(),s.intermediator.transaction_reference?e("div",{staticClass:"order-info__transaction-reference"},[e("small",[t._v(t._s(t.i19referenceCode))]),e("br"),t._v(" "+t._s(s.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction,financialStatus:t.financialStatus}),t._t("shipping",[e("div",{staticClass:"order-info__shipping"},[t._l(t.localOrder.shipping_lines,(function(s){return e("div",{key:"s-"+s._id,staticClass:"order-info__shipping-freight card"},[e("div",{staticClass:"card-header"},[t.fulfillmentStatus?e("span",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[e("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):[e("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]],2),e("div",{staticClass:"card-body"},[s.app?e("span",[t._v(" "+t._s(s.app.label)+" ")]):t._e(),e("shipping-line",{attrs:{"shipping-line":s}}),s.tracking_codes?e("div",{staticClass:"order-info__shipping-tracking"},[e("hr"),e("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19trackDelivery)+": ")]),t._l(s.tracking_codes,(function(s,a){return e("samp",{key:"track-"+a},[s.link?e("a",{attrs:{href:""+s.link,target:"_blank"}},[t._v(" "+t._s(s.code)+" ")]):e("span",[t._v(" "+t._s(s.code)+" ")])])}))],2):t._e()],1)])})),t.canShowShippingAddress?e("div",{staticClass:"order-info__shipping-address card"},[e("div",{staticClass:"card-header"},[e("i",{staticClass:"fas fa-map-marked-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),e("address",{staticClass:"card-body mb-0"},[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),e("br"),t._l(["borough","city","province_code"],(function(s,a){return t.shippingAddress[s]?e("span",{key:s},[t._v(" "+t._s(t.shippingAddress[s]+(2===a?".":","))+" ")]):t._e()})),e("br"),e("span",[t._v(" "+t._s(t.i19zipCode)+": "),e("samp",[t._v(t._s(t.shippingAddress.zip))])])],2)]):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress,fulfillmentStatus:t.fulfillmentStatus})],2),t.isAuthenticated?t._e():e("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19loginForOrderDetailsMsg)+" "),e("br"),e("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.accountOrdersUrl}},[e("i",{staticClass:"fas fa-user mr-1"}),t._v(" "+t._s(t.i19login)+" ")])])],2)]),t.localOrder.amount?e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"order-info__summary card"},[e("div",{staticClass:"card-body"},[e("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating||"open"!==t.status||t.fulfillmentStatus?t._e():e("button",{staticClass:"order-info__toggle btn btn-danger",on:{click:t.toggle}},[e("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")]),t._t("buy",[e("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[e("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])])],2):t._e()])])])]):e("div",{key:"loading"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?e("a",{staticClass:"order-info__orders-link d-md-none btn btn-light",attrs:{href:t.accountOrdersUrl}},[e("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);s.a=f.exports},281:function(t,s,e){var a=e(349);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(172).default)("ac1d3ad2",a,!0,{})},282:function(t,s,e){var a=e(351);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(172).default)("0e61f4e5",a,!0,{})},283:function(t,s,e){var a=e(353);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(172).default)("49df9466",a,!0,{})},348:function(t,s,e){"use strict";e(281)},349:function(t,s,e){(s=e(171)(!1)).push([t.i,".account__greetings i,.account__greetings svg{color:var(--success);margin-right:var(--spacer-1)}.account__logout{color:var(--text-muted);margin:var(--spacer-3) 0}.account__logout a{margin:0 var(--spacer-2);color:var(--danger)}.account__nav{margin-top:var(--spacer-5)}.account__content{position:relative;padding-top:var(--spacer-5)}",""]),t.exports=s},350:function(t,s,e){"use strict";e(282)},351:function(t,s,e){(s=e(171)(!1)).push([t.i,".account-points__entry small{text-transform:lowercase}.account-points__entry-title{display:flex;width:100%;justify-content:space-between}",""]),t.exports=s},352:function(t,s,e){"use strict";e(283)},353:function(t,s,e){(s=e(171)(!1)).push([t.i,".orders-list{max-width:700px;margin:0 auto}@media (min-width:768px){.orders-list__item{display:flex;justify-content:space-between}.orders-list__item>div{flex:1.4 1 0}.orders-list__item>span{flex:1.4 1 0;text-align:right}}.orders-list__item:hover .orders-list__number{text-decoration:underline}.orders-list__number{padding:0 1rem;border-left:.5rem solid var(--primary-lightest);color:var(--primary)}.orders-list__number--open{border-left-color:var(--info)}.orders-list__number--closed{border-left-color:var(--success)}.orders-list__number--cancelled{border-left-color:var(--danger)}.orders-list__financial-status,.orders-list__fulfillment-status,.orders-list__status{font-weight:var(--font-bold);color:var(--info)}@media (max-width:767.98px){.orders-list__financial-status,.orders-list__fulfillment-status,.orders-list__status{float:right}}.orders-list__status--closed{color:var(--success)}.orders-list__status--cancelled{color:var(--danger)}.orders-list__financial-status--pending{color:var(--warning)}.orders-list__financial-status--in_dispute,.orders-list__financial-status--unauthorized,.orders-list__financial-status--voided{color:var(--danger)}.orders-list__financial-status--paid,.orders-list__fulfillment-status--delivered{color:var(--success)}",""]),t.exports=s},361:function(t,s,e){"use strict";e.r(s);var a=e(50),r=e(112),i=e(26),n=e(41),o=e(88),c={name:"TheAccount",components:{LoginBlock:e(288).a},props:{customer:{type:Object,default:()=>({})},isOrdersList:Boolean,ecomPassport:{type:Object,default:()=>a.a}},computed:{i19addresses:()=>Object(n.a)(i.m),i19hello:()=>Object(n.a)(i.Cb),i19isNotYou:()=>Object(n.a)(i.Ob),i19logout:()=>Object(n.a)(i.Vb),i19orders:()=>Object(n.a)(i.Ac),i19registration:()=>Object(n.a)(i.Vc),activeTab:{get(){return this.isOrdersList?1:0},set(t){this.$emit("update:is-orders-list",1===t)}},localCustomer:{get(){return this.customer},set(t){this.$emit("update:customer",t)}},nickname(){return Object(o.a)(this.customer)}},methods:{login(t){t.checkAuthorization()&&(this.localCustomer=t.getCustomer(),this.$emit("login",t))},logout(){this.ecomPassport.checkLogin()&&(this.ecomPassport.logout(),this.$emit("logout"))}}},l=(e(348),e(49)),d=Object(l.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"account"},[t.localCustomer._id?e("div",{staticClass:"account__logged"},[e("h2",{staticClass:"account__greetings"},[e("i",{staticClass:"fas fa-user-circle"}),t._v(" "+t._s(t.i19hello+" "+t.nickname)+" ")]),e("div",{staticClass:"account__logout"},[t._v(" "+t._s(t.i19isNotYou+"?")+" "),e("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.logout(s)}}},[e("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" "+t._s(t.i19logout)+" ")])]),e("ul",{staticClass:"account__nav nav nav-tabs"},t._l([t.i19registration,t.i19orders],(function(s,a){return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",class:t.activeTab===a?"active":null,attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.activeTab=a}}},[t._v(" "+t._s(s)+" ")])])})),0),e("div",{staticClass:"account__content"},[e("transition",{attrs:{"enter-active-class":"animated fadeInLeft slow","leave-active-class":"animated fadeOutLeft"}},[t.isOrdersList?t._e():e("div",[t._t("registration",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[t._t("account-form")],2),e("div",{staticClass:"col-md-5 mt-3 mt-md-0"},[e("h4",[t._v(t._s(t.i19addresses))]),t._t("account-addresses"),e("div",{staticClass:"my-3"},[t._t("account-points")],2)],2)])])],2)]),e("transition",{attrs:{"enter-active-class":"animated fadeInRight slow","leave-active-class":"animated fadeOutRight position-absolute"}},[t.isOrdersList?e("div",[t._t("orders-list")],2):t._e()])],1)]):e("login-block",{staticClass:"account__login",attrs:{"can-accept-guest":!1},on:{login:t.login}})],1)}),[],!1,null,null,null).exports,u=e(285),_=e(284),m=e(44),p={name:"AccountPoints",props:{customer:{type:Object,default:()=>({})}},computed:{i19available:()=>Object(n.a)(i.q),i19loyaltyPoints:()=>Object(n.a)(i.Xb),i19pointsEarned:()=>"Pontos ganhos",i19upTo:()=>Object(n.a)(i.Md),validPointsEntries(){const t=this.customer.loyalty_points_entries;return t?t.filter((t=>{const s=t.valid_thru;return(!s||new Date(s).getTime()>=Date.now())&&t.active_points>0})):[]}},methods:{formatDate:m.a}},f=(e(350),Object(l.a)(p,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.validPointsEntries.length?e("div",{staticClass:"account-points"},[e("h4",[t._v(t._s(t.i19loyaltyPoints))]),e("ul",{staticClass:"list-group"},t._l(t.validPointsEntries,(function(s){return e("li",{staticClass:"list-group-item account-points__entry"},[e("div",{staticClass:"account-points__entry-title"},[e("h5",{staticClass:"mb-1"},[t._v(" "+t._s(s.name)+" ")]),s.valid_thru?e("small",[t._v(" "+t._s(t.i19upTo)+" "+t._s(t.formatDate(s.valid_thru))+" ")]):t._e()]),t._v(" "+t._s(t.i19available)+": "),e("b",[t._v(t._s(s.active_points))]),s.earned_points?e("small",{staticClass:"text-muted"},[t._v(" / "+t._s(s.earned_points+" "+t.i19pointsEarned)+" ")]):t._e()])})),0)]):t._e()}),[],!1,null,null,null).exports),h=e(78),g={name:"EcOrdersList",components:{EcOrderInfo:e(239).a},props:{mergeDictionary:{type:Object,default:()=>{}},ecomPassport:{type:Object,default:()=>a.a}},data:()=>({updateInterval:null,orders:[]}),methods:{formatDate:m.a,formatMoney:h.a,i19FinancialStatus:t=>Object(n.a)(i.a)[t],i19FulfillmentStatus:t=>Object(n.a)(i.b)[t],i19OrderStatus:t=>Object(n.a)(i.e)[t]},created(){const t=()=>this.ecomPassport.fetchOrdersList().then((t=>{this.orders=t})).catch(console.error);this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi("/orders.json").then((({data:t})=>{const{result:s}=t;this.ecomPassport.setCustomer({orders:s}),this.orders=s})).catch(t):t(),this.updateInterval=setInterval(t,5e3)},beforeDestroy(){clearInterval(this.updateInterval)}},v=(e(352),Object(l.a)(g,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"orders-list"},t._l(t.orders,(function(s){return t.orders.length?e("div",{staticClass:"list-group list-group-flush"},[e("a",{staticClass:"orders-list__item list-group-item list-group-item-action",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("click:order",s)}}},[e("div",[e("samp",{staticClass:"orders-list__number",class:"orders-list__number--"+s.status,domProps:{textContent:t._s("#"+s.number)}}),s.amount?e("strong",{staticClass:"orders-list__amount"},[t._v(" "+t._s(t.formatMoney(s.amount.total))+" ")]):t._e()]),e("span",[t._v(t._s(t.formatDate(s.created_at)))]),"cancelled"!==s.status&&s.financial_status?"paid"===s.financial_status.current&&s.fulfillment_status?e("span",{staticClass:"orders-list__fulfillment-status",class:"orders-list__fulfillment-status--"+s.fulfillment_status.current},[t._v(" "+t._s(t.i19FulfillmentStatus(s.fulfillment_status.current))+" ")]):e("span",{staticClass:"orders-list__financial-status",class:"orders-list__financial-status--"+s.financial_status.current},[t._v(" "+t._s(t.i19FinancialStatus(s.financial_status.current))+" ")]):e("span",{staticClass:"orders-list__status",class:"orders-list__status--"+s.status},[t._v(" "+t._s(t.i19OrderStatus(s.status))+" ")])])]):t._e()})),0)}),[],!1,null,null,null).exports),b={name:"account",components:{TheAccount:d,AccountForm:u.a,AccountAddresses:_.a,AccountPoints:f,EcOrdersList:v},data:()=>({ecomPassport:a.a}),computed:{customer:{get(){return this.$store.getters.customer},set(t){this.setCustomer(t);const{ecomPassport:s}=this;s&&s.checkAuthorization()&&(this.triggerLoading(!0),this.saveCustomer({ecomPassport:s}).finally((()=>this.triggerLoading(!1))))}},isOrdersList:{get(){return"orders"===this.$route.params.tab},set(t){this.$router.push({name:"account",params:{tab:t?"orders":null}})}}},methods:{...Object(r.d)(["triggerLoading","setCustomer","resetAccount"]),...Object(r.b)(["fetchCustomer","saveCustomer"]),login(t){this.ecomPassport=t,this.triggerLoading(!0),this.fetchCustomer({ecomPassport:t}).finally((()=>this.triggerLoading(!1)))},viewOrder({_id:t,number:s}){s&&this.$router.push({name:"order",params:{number:s,id:t}})}}},y=Object(l.a)(b,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"account"}},[e("the-account",{attrs:{"ecom-passport":t.ecomPassport,customer:t.customer,"is-orders-list":t.isOrdersList},on:{"update:customer":function(s){t.customer=s},"update:isOrdersList":function(s){t.isOrdersList=s},"update:is-orders-list":function(s){t.isOrdersList=s},login:t.login,logout:t.resetAccount},scopedSlots:t._u([{key:"account-form",fn:function(){return[e("account-form",{attrs:{customer:t.customer},on:{"update:customer":function(s){t.customer=s}}})]},proxy:!0},{key:"account-addresses",fn:function(){return[e("account-addresses",{attrs:{customer:t.customer},on:{"update:customer":function(s){t.customer=s}}})]},proxy:!0},{key:"account-points",fn:function(){return[e("account-points",{attrs:{customer:t.customer},on:{"update:customer":function(s){t.customer=s}}})]},proxy:!0},{key:"orders-list",fn:function(){return[e("ec-orders-list",{attrs:{"ecom-passport":t.ecomPassport},on:{"click:order":t.viewOrder}})]},proxy:!0}])})],1)}),[],!1,null,null,null);s.default=y.exports}}]);
//# sourceMappingURL=chunk.f093034e1c567a85d337.js.map