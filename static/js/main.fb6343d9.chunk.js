(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t){},141:function(e,t,a){e.exports=a(285)},142:function(e,t,a){},155:function(e,t){},161:function(e,t){},285:function(e,t,a){"use strict";a.r(t);var i=a(82),n=a(27),r=a(28),l=a(59),c=a(29),u=a(60),s=a(83),o=(a(142),a(0)),m=a(64),d=a(23),g=["AFN","EUR","ALL","DZD","USD","EUR","AOA","XCD","XCD","ARS","AMD","AWG","AUD","EUR","AZN","BSD","BHD","BDT","BBD","BYN","EUR","BZD","XOF","BMD","INR","BTN","BOB","BOV","USD","BAM","BWP","NOK","BRL","USD","BND","BGN","XOF","BIF","CVE","KHR","XAF","CAD","KYD","XAF","XAF","CLP","CLF","CNY","AUD","AUD","COP","COU","KMF","CDF","XAF","NZD","CRC","XOF","HRK","CUP","CUC","ANG","EUR","CZK","DKK","DJF","XCD","DOP","USD","EGP","SVC","USD","XAF","ERN","EUR","ETB","EUR","FKP","DKK","FJD","EUR","EUR","EUR","XPF","EUR","XAF","GMD","GEL","EUR","GHS","GIP","EUR","DKK","XCD","EUR","USD","GTQ","GBP","GNF","XOF","GYD","HTG","USD","AUD","EUR","HNL","HKD","HUF","ISK","INR","IDR","XDR","IRR","IQD","EUR","GBP","ILS","EUR","JMD","JPY","GBP","JOD","KZT","KES","AUD","KPW","KRW","KWD","KGS","LAK","EUR","LBP","LSL","ZAR","LRD","LYD","CHF","EUR","EUR","MOP","MKD","MGA","MWK","MYR","MVR","XOF","EUR","USD","EUR","MRU","MUR","EUR","XUA","MXN","MXV","USD","MDL","EUR","MNT","EUR","XCD","MAD","MZN","MMK","NAD","ZAR","AUD","NPR","EUR","XPF","NZD","NIO","XOF","NGN","NZD","AUD","USD","NOK","OMR","PKR","USD","PAB","USD","PGK","PYG","PEN","PHP","NZD","PLN","EUR","USD","QAR","EUR","RON","RUB","RWF","EUR","SHP","XCD","XCD","EUR","EUR","XCD","WST","EUR","STN","SAR","XOF","RSD","SCR","SLL","SGD","ANG","XSU","EUR","EUR","SBD","SOS","ZAR","SSP","EUR","LKR","SDG","SRD","NOK","SZL","SEK","CHF","CHE","CHW","SYP","TWD","TJS","TZS","THB","USD","XOF","NZD","TOP","TTD","TND","TRY","TMT","USD","AUD","UGX","UAH","AED","GBP","USD","USD","USN","UYU","UYI","UYW","UZS","VUV","VES","VND","USD","USD","XPF","MAD","YER","ZMW","ZWL","XBA","XBB","XBC","XBD","XTS","XXX","XAU","XPD","XPT","XAG"],D=a(132),E=a(65),h=a(81),F=a(292),p=a(24),v=a.n(p)()(Intl.NumberFormat),y={DECIMAL:"decimal",PERCENT:"percent",CURRENCY:"currency"},f={DECIMAL:2,PERCENT:2},C={RATE:2,TECH_RATE:4};function R(e,t){var a=v(e,t).resolvedOptions();return{minimumFractionDigits:a.minimumFractionDigits,maximumFractionDigits:a.maximumFractionDigits}}var U=/[.,]/,b=/^\d*[.,]?\d*$/;function S(e,t){return null!=e?e.toString().replace(U,t):""}var O=function(e){function t(e,a){var i;Object(n.a)(this,t),(i=Object(l.a)(this,Object(c.a)(t).call(this,e,a))).decimalSeparator=void 0,i.defaultMinimumFractionDigits=void 0,i.defaultMaximumFractionDigits=void 0,i.state=void 0,i.input=o.createRef(),i.isCopyPaste=!1,i.setValue=function(e){var t=i.props.style,a=e.hasOwnProperty("value"),n=e.value,r=Object(E.a)(e,["value"]);i.setState(r,function(){var e=n;null!=e&&t===y.PERCENT&&(e/=100),a&&i.props.value!==e&&i.props.onChange(e)})},i.showLastValidValue=function(){i.state.isInvalid&&i.setValue({displayValue:S(i.getValue(),i.decimalSeparator),isInvalid:!1})},i.handleCopyPaste=function(e){i.isCopyPaste=!1;var t=function(e,t){if("number"===typeof e)return e;if("string"===typeof e){if(""===e.trim())return;var a=new RegExp("[^0-9".concat(t,"]"),"g"),i=parseFloat(e.replace(a,"").replace(t,"."));if(!Number.isNaN(i))return i}}(e,i.decimalSeparator);null!=t&&i.isPastedValueValid(e,t)?i.setValue({isInvalid:!1,value:t,displayValue:S(t,i.decimalSeparator)}):i.setValue({isInvalid:!0,displayValue:e})},i.handleChange=function(e){var t=e.target.value;if(""!==t){if(i.isCopyPaste)i.handleCopyPaste(t);else if(b.test(t)){if(U.test(t)){var a=S(t,i.decimalSeparator);if(1===a.length)return void i.setValue({value:0,displayValue:"0".concat(a)});var n=i.props.maximumFractionDigits,r=void 0===n?i.defaultMaximumFractionDigits:n,l=a.split(i.decimalSeparator),c=Object(D.a)(l,2),u=c[0],s=c[1];if(s.length>r){var o="".concat(u).concat(i.decimalSeparator).concat(s.slice(0,r));return void i.setValue({value:parseFloat(S(o,".")),displayValue:o})}return void i.setValue({value:parseFloat(S(t,".")),displayValue:a})}var m=parseFloat(t);i.setValue({value:m,displayValue:m.toString()})}}else i.setValue({value:void 0,displayValue:""})},i.handleFocus=function(){i.setState({isFocused:!0})},i.handleBlur=function(){i.props.value;i.setState({isFocused:!1}),i.showLastValidValue()},i.handleClick=function(){i.showLastValidValue()},i.handleKeyDown=function(e){!e.ctrlKey&&!e.metaKey||e.altKey||86!==e.keyCode||(i.isCopyPaste=!0)},i.handlePaste=function(){i.isCopyPaste=!0},i.getInputProps=function(){var e=i.props.value,t=i.state,a=t.displayValue,n=t.isFocused||null==e?a:i.formatValue(e);return{ref:i.input,value:n,onChange:i.handleChange,onFocus:i.handleFocus,onBlur:i.handleBlur,onKeyDown:i.handleKeyDown,onClick:i.handleClick,onPaste:i.handlePaste}};var r=i.props,u=r.intl,s=r.currency,m=r.style,d=r.minimumFractionDigits,g=r.maximumFractionDigits,h=r.defaultFractionDigits,F=r.extraFractionDigits,p=R(u.locale,{currency:s,style:m,minimumFractionDigits:d,maximumFractionDigits:g}),v=p.minimumFractionDigits,f=p.maximumFractionDigits;return i.decimalSeparator=(0,u.formatNumber)(1.1)[1],i.defaultMinimumFractionDigits=v,i.defaultMaximumFractionDigits=f,"undefined"===typeof d&&"undefined"===typeof g&&("undefined"!==typeof h?(i.defaultMinimumFractionDigits=h,i.defaultMaximumFractionDigits=h):"undefined"!==typeof F&&(i.defaultMinimumFractionDigits=v+F,i.defaultMaximumFractionDigits=v+F)),i.state=i.getInitialState(),i}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){if(this.props.autoFocus){var e=this.input.current;null!=e&&e.focus()}}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,i=a.isInvalid,n=a.isFocused;if(i||t.isFocused!==n&&n){var r=this.input.current;null!=r&&r.select()}}},{key:"formatValue",value:function(e){var t=this.props,a=t.intl,i=t.style,n=t.currency,r=t.minimumFractionDigits,l=void 0===r?this.defaultMinimumFractionDigits:r,c=t.maximumFractionDigits,u=void 0===c?this.defaultMaximumFractionDigits:c;return a.formatNumber(e,{style:i,currency:n,minimumFractionDigits:l,maximumFractionDigits:u})}},{key:"testPastedValue",value:function(e,t,a){return t===function(e,t,a){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=new RegExp(t.replace(/([\/,!\\^${}[\]().*+?|<>\-&])/g,"\\$&"),i?"gi":"g");return a="string"===typeof a?a.replace(/\$/g,"$$$$"):a,e.replace(n,a)}(this.props.intl.formatNumber(e,a),"\xa0"," ")}},{key:"isPastedValueValid",value:function(e,t){for(var a=this.props,i=a.maximumFractionDigits,n=void 0===i?this.defaultMaximumFractionDigits:i,r=a.style,l=a.currency,c=0;c<=n;c++){if(this.testPastedValue(t,e,{style:y.DECIMAL,minimumFractionDigits:c,maximumFractionDigits:n}))return!0;if(r===y.CURRENCY&&this.testPastedValue(t,e,{currency:l,style:r,minimumFractionDigits:c,maximumFractionDigits:n}))return!0;if(r===y.PERCENT&&this.testPastedValue(t/100,e,{style:r,minimumFractionDigits:c,maximumFractionDigits:n}))return!0}return!1}},{key:"getValue",value:function(){var e=this.props,t=e.value,a=e.style;return null!=t&&a===y.PERCENT?100*t:t}},{key:"getInitialState",value:function(){return{displayValue:S(this.getValue(),this.decimalSeparator),isInvalid:!1,isFocused:!1}}},{key:"getRenderProps",value:function(){return{isInvalid:this.state.isInvalid,getInputProps:this.getInputProps}}},{key:"render",value:function(){return this.props.children(this.getRenderProps())}}]),t}(o.Component),V=Object(d.d)(O),P="Invalid format. Only numbers and single decimal separator are allowed.",N=o.createElement(h.a,{name:"exclamation circle",link:!0});function A(e){var t=e.getInputProps,a=e.isInvalid;return o.createElement(F.a,Object.assign({},t(),{className:a?"invalidGridInput":void 0,icon:a&&N,iconPosition:"left"}))}function T(e){return function(t){function a(){var e,t;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return(t=Object(l.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(r)))).state={value:t.props.defaultValue},t.handleChange=function(e){t.setState({value:e})},t}return Object(u.a)(a,t),Object(r.a)(a,[{key:"getValue",value:function(){return this.state.value}},{key:"render",value:function(){var t=this.props,a=(t.defaultValue,t.autoFocus,t.children),i=Object(E.a)(t,["defaultValue","autoFocus","children"]);return o.createElement(V,Object.assign({},e,i,{value:this.state.value,onChange:this.handleChange}),function(e){return a?a(e):o.createElement(A,e)})}}]),a}(o.Component)}var x=T({style:y.DECIMAL,defaultFractionDigits:f.DECIMAL}),j=T({style:y.PERCENT,defaultFractionDigits:f.PERCENT}),M=T({style:y.CURRENCY}),I=T({style:y.CURRENCY,extraFractionDigits:C.RATE});T({style:y.CURRENCY,extraFractionDigits:C.TECH_RATE});function X(e){var t=e.getInputProps,a=e.isInvalid;return o.createElement("div",{style:{display:"inline-block"}},o.createElement(F.a,Object.assign({},t(),{error:a})),a&&o.createElement("div",null,P))}function B(e){return function(t){var a=t.value,i=t.onChange,n=t.children;return o.createElement(V,Object.assign({},e,{value:a,onChange:i}),n||X)}}B({style:y.DECIMAL,defaultFractionDigits:f.DECIMAL}),B({style:y.PERCENT,defaultFractionDigits:f.PERCENT}),B({style:y.CURRENCY}),B({style:y.CURRENCY,extraFractionDigits:C.RATE}),B({style:y.CURRENCY,extraFractionDigits:C.TECH_RATE});function K(e){var t=e.value,a=e.defaultFractionDigits,i=Object(E.a)(e,["value","defaultFractionDigits"]);if(null==t)return null;var n=i.minimumFractionDigits,r=i.maximumFractionDigits,l={};return"undefined"===typeof n&&"undefined"===typeof r&&"undefined"!==typeof a&&(l.minimumFractionDigits=a,l.maximumFractionDigits=a),o.createElement(d.a,Object.assign({value:t},i,l))}function G(e){return o.createElement(K,Object.assign({},e,{style:y.DECIMAL,defaultFractionDigits:f.DECIMAL}))}function L(e){return o.createElement(K,Object.assign({},e,{style:y.PERCENT,defaultFractionDigits:f.PERCENT}))}function k(e){return o.createElement(K,Object.assign({},e,{style:y.CURRENCY}))}var Y=Object(d.d)(function(e){var t=e.intl,a=e.extraFractionDigits,i=Object(E.a)(e,["intl","extraFractionDigits"]),n=R(t.locale,{style:y.CURRENCY,currency:i.currency}).minimumFractionDigits+a;return o.createElement(k,Object.assign({},i,{minimumFractionDigits:n,maximumFractionDigits:n}))});function H(e){return o.createElement(Y,Object.assign({},e,{extraFractionDigits:C.RATE}))}function w(e){return o.createElement(Y,Object.assign({},e,{extraFractionDigits:C.TECH_RATE}))}var Z=a(282),W=a(283),J=a(284);Object(d.c)([].concat(Object(s.a)(Z),Object(s.a)(W),Object(s.a)(J)));var $=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).state={locale:"en-US",minimumFractionDigits:3,maximumFractionDigits:4,currencyCode:"USD"},a.handleChange=function(e){console.log(Object(i.a)({},e.target.name,e.target.value)),a.setState(Object(i.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.createElement(d.b,{locale:this.state.locale,key:this.state.locale},o.createElement("div",null,o.createElement("fieldset",null,o.createElement("legend",null,"Editors"),o.createElement("div",{style:{margin:20}},o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Locale:",o.createElement("select",{name:"locale",value:this.state.locale,onChange:this.handleChange},o.createElement("option",{value:"fr-FR"},"fr-FR"),o.createElement("option",{value:"en-US"},"en-US"),o.createElement("option",{value:"en-GB"},"en-GB"),o.createElement("option",{value:"is-IS"},"is-IS")))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"minimumFractionDigits:",o.createElement("input",{type:"number",name:"minimumFractionDigits",value:this.state.minimumFractionDigits,onChange:this.handleChange}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"maximumFractionDigits:",o.createElement("input",{type:"number",name:"maximumFractionDigits",value:this.state.maximumFractionDigits,onChange:this.handleChange}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"currency code:",o.createElement("select",{name:"currencyCode",value:this.state.currencyCode,onChange:this.handleChange},g.map(function(e){return o.createElement("option",{value:e},e)})))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Grid Decimal Editor:",o.createElement(x,{defaultValue:2,minimumFractionDigits:this.state.minimumFractionDigits||void 0,maximumFractionDigits:this.state.maximumFractionDigits||void 0}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Grid Currency Editor:",o.createElement(M,{defaultValue:2,currency:this.state.currencyCode,minimumFractionDigits:this.state.minimumFractionDigits||void 0,maximumFractionDigits:this.state.maximumFractionDigits||void 0}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Grid Percent Editor:",o.createElement(j,{defaultValue:.2,minimumFractionDigits:this.state.minimumFractionDigits||void 0,maximumFractionDigits:this.state.maximumFractionDigits||void 0}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Grid Rate Editor:",o.createElement(I,{defaultValue:20,currency:this.state.currencyCode})))))))}}]),t}(o.Component),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).state={locale:"en-US",minimumFractionDigits:3,maximumFractionDigits:4,currencyCode:"USD",currencyFormatterValue:2,decimalFormatterValue:1.2,percentFormatterValue:.2,rateFormatterValue:3.4,techRateFormatterValue:1.2},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.createElement(d.b,{locale:this.state.locale,key:this.state.locale},o.createElement("div",null,o.createElement("fieldset",null,o.createElement("legend",null,"Formatters"),o.createElement("div",{style:{margin:20}},o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Locale:",o.createElement("select",{name:"locale",value:this.state.locale,onChange:this.handleChange},o.createElement("option",{value:"fr-FR"},"fr-FR"),o.createElement("option",{value:"en-US"},"en-US"),o.createElement("option",{value:"en-GB"},"en-GB"),o.createElement("option",{value:"is-IS"},"is-IS")))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"minimumFractionDigits:",o.createElement("input",{type:"number",name:"minimumFractionDigits",value:this.state.minimumFractionDigits,onChange:this.handleChange}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"maximumFractionDigits:",o.createElement("input",{type:"number",name:"maximumFractionDigits",value:this.state.maximumFractionDigits,onChange:this.handleChange}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"currency code:",o.createElement("select",{name:"currencyCode",value:this.state.currencyCode,onChange:this.handleChange},g.map(function(e){return o.createElement("option",{value:e},e)})))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Decimal Formatter:",o.createElement("input",{type:"number",name:"decimalFormatterValue",value:this.state.decimalFormatterValue,onChange:this.handleChange}),o.createElement(G,{value:this.state.decimalFormatterValue,minimumFractionDigits:this.state.minimumFractionDigits||void 0,maximumFractionDigits:this.state.maximumFractionDigits||void 0}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"CurrencyFormatter:",o.createElement("input",{type:"number",name:"currencyFormatterValue",value:this.state.currencyFormatterValue,onChange:this.handleChange}),o.createElement(k,{value:this.state.currencyFormatterValue,currency:this.state.currencyCode,minimumFractionDigits:this.state.minimumFractionDigits||void 0,maximumFractionDigits:this.state.maximumFractionDigits||void 0}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"PercentFormatter:",o.createElement("input",{type:"number",name:"percentFormatterValue",value:this.state.percentFormatterValue,onChange:this.handleChange}),o.createElement(L,{value:this.state.percentFormatterValue,minimumFractionDigits:this.state.minimumFractionDigits||void 0,maximumFractionDigits:this.state.maximumFractionDigits||void 0}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Rate Formatter:",o.createElement("input",{type:"number",name:"rateFormatterValue",value:this.state.rateFormatterValue,onChange:this.handleChange}),o.createElement(H,{value:this.state.rateFormatterValue,currency:this.state.currencyCode}))),o.createElement("div",{style:{marginTop:20}},o.createElement("label",null,"Tech Rate Formatter:",o.createElement("input",{type:"number",name:"techRateFormatterValue",value:this.state.techRateFormatterValue,onChange:this.handleChange}),o.createElement(w,{value:this.state.techRateFormatterValue,currency:this.state.currencyCode})))))))}}]),t}(o.Component),Q=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidCatch",value:function(){console.log("An error occurred")}},{key:"render",value:function(){return o.createElement("div",null,o.createElement($,null),o.createElement(_,null))}}]),t}(o.Component);Object(m.render)(o.createElement(Q,null),document.getElementById("root"))}},[[141,2,1]]]);
//# sourceMappingURL=main.fb6343d9.chunk.js.map