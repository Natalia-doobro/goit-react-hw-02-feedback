(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,n){e.exports={container:"Statistics_container__2PC0u",text:"Statistics_text__1_euS"}},,,function(e,t,n){e.exports={container:"FeedbackOptions_container__2MST4",button:"FeedbackOptions_button__2gsRR"}},function(e,t,n){e.exports={container:"Section_container__2s4zU",title:"Section_title__5JuYX"}},function(e,t,n){e.exports={container:"Notification_container__3rSOW",message:"Notification_message__3HAQx"}},,,,function(e){e.exports=JSON.parse('[{"id":"btn_1","name":"Good"},{"id":"btn_2","name":"Neutral"},{"id":"btn_3","name":"Bad"}]')},function(e,t,n){e.exports={App:"App_App__bFxFB"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(7),i=n.n(o),s=(n(18),n(8)),r=n(9),d=n(13),u=n(12),l=n(1),b=n.n(l),j=n(0),p=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage,i=c(t,n,a);return Object(j.jsxs)("div",{className:b.a.container,children:[Object(j.jsxs)("p",{className:b.a.text,children:["Good : ",t]}),Object(j.jsxs)("p",{className:b.a.text,children:["Neutral : ",n]}),Object(j.jsxs)("p",{className:b.a.text,children:["Bad : ",a]}),Object(j.jsxs)("p",{className:b.a.text,children:["Total : ",i]}),Object(j.jsxs)("p",{className:b.a.text,children:["Positive feedback: ",o(i,t)]})]})},x=n(4),f=n.n(x),h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{className:f.a.container,children:t.map((function(e){return Object(j.jsx)("button",{type:"button",className:f.a.button,onClick:function(){return n(e.name)},children:e.name},e.id)}))})},_=n(5),O=n.n(_),m=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{className:O.a.container,children:[Object(j.jsx)("h2",{className:O.a.title,children:t}),n]})},v=n(6),g=n.n(v),N=function(e){var t=e.message;return Object(j.jsx)("div",{className:g.a.container,children:Object(j.jsx)("h2",{className:g.a.message,children:t})})},k=n(10),F=n(11),S=n.n(F),P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){"Good"===t?e.setState((function(e){return{good:e.good+1}})):"Neutral"===t?e.setState((function(e){return{neutral:e.neutral+1}})):"Bad"===t&&e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(e,t,n){return e+t+n},e.countPositiveFeedbackPercentage=function(e,t){var n=(100*t/e).toFixed(2);return("NaN"!==n?n:"0")+"%"},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback,o=this.countPositiveFeedbackPercentage;return Object(j.jsxs)("div",{className:S.a.App,children:[Object(j.jsx)(m,{title:"Plise leave feedback",children:Object(j.jsx)(h,{options:k,onLeaveFeedback:this.onLeaveFeedback})}),t>0||n>0||a>0?Object(j.jsx)(m,{title:"Statistics",children:Object(j.jsx)(p,{good:t,neutral:n,bad:a,total:c,positivePercentage:o})}):Object(j.jsx)(N,{message:"No feedback given"})]})}}]),n}(a.Component);P.defaultProps={good:0,neutral:0,bad:0};var A=P;i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.61817ab2.chunk.js.map