(this["webpackJsonplotto-mansae"]=this["webpackJsonplotto-mansae"]||[]).push([[0],{32:function(e,t,n){},50:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r,o,c,s,a,i=n(0),l=n.n(i),u=n(23),h=n.n(u),d=(n(32),n(2)),b=n(3),j=n(5),p=n(4),O=n(7),m=n(10),f=n(24),v=(n(50),n(1)),x=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.lottoNumber.slice(0,6),t=this.props.lottoNumber[6];return Object(v.jsx)("div",{className:"lotto-box-contents",children:Object(v.jsxs)("div",{className:"lotto-box",children:[e.map((function(e,t){return Object(v.jsx)("div",{className:"lotto-box-number",children:e},t)})),Object(v.jsx)("div",{className:"lotto-box-plus",children:"+"}),Object(v.jsxs)("div",{className:"lotto-box-number",children:[" ",t]})]})})}}]),n}(i.Component),g=(n(52),n(8)),N=g.a.div(r||(r=Object(O.a)(["\n    margin-top: 50px;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #aeaeae;\n    display:flex;\n    flex-direction:column;\n"]))),C=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(0),c=Object(m.a)(o,2),s=(c[0],c[1]),a=Object(i.useState)(-1),l=Object(m.a)(a,2),u=l[0],h=l[1];return Object(i.useEffect)((function(){var e=function(){var e=new Date("December, 7, 2002"),t=(new Date).getTime()-e.getTime();return parseInt(t/6048e5)}();h(e),f.get("https://cors-everywhere-hh.herokuapp.com/https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo="+e).then((function(e){console.log(e);var t=e.data;if(console.log(t),t){var n=[];n.push(t.drwtNo1),n.push(t.drwtNo2),n.push(t.drwtNo3),n.push(t.drwtNo4),n.push(t.drwtNo5),n.push(t.drwtNo6),n.push(t.bnusNo),console.log(n),r(n),s(t.drwNo)}}))}),[]),Object(v.jsxs)(N,{children:[Object(v.jsx)("h1",{children:"Lotto Random Generator"}),Object(v.jsxs)("h2",{children:["Latest Numbers - from Week ",u]}),Object(v.jsx)(x,{lottoNumber:n})]})},k=(n(55),n(56),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleChange=function(t){var n=t.target.checked;e.props.handleChange(n,e.props.number)},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"number-plate-box-contents",children:Object(v.jsxs)("div",{className:"number-plate-box",children:[Object(v.jsx)("input",{type:"checkbox",checked:this.props.selected,onChange:this.handleChange}),Object(v.jsx)("span",{children:this.props.number})]})})}}]),n}(i.Component)),y=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"number-plate-contents",children:this.props.selected.map((function(t,n){return Object(v.jsx)(k,{number:n+1,selected:t,handleChange:e.props.handleChange},n)}))}),Object(v.jsx)("button",{className:"number-button",onClick:this.props.handleButtonOnClick,children:" Generate Numbers!"})]})}}]),n}(i.Component),w=g.a.div(o||(o=Object(O.a)(["\n    width: 30%;\n\n    height: 1000px;\n    border-radius: 15px;\n    border: 2px solid skyblue;\n    display: inline-block;\n"]))),B=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(v.jsx)(w,{children:Object(v.jsx)(y,{selected:this.props.selected,handleChange:this.props.handleChange,handleButtonOnClick:this.props.handleButtonOnClick})})}}]),n}(i.Component),L=g.a.div(c||(c=Object(O.a)(["\n    width: 70%;\n    height: 1000px;\n    display: inline-block;\n    border-radius: 15px;\n    border: 2px solid lightgreen;\n    overflow:scroll;\n"]))),S=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.lottoNumbers;return Object(v.jsx)(L,{children:e.map((function(e,t){return Object(v.jsx)(x,{lottoNumber:e},t)}))})}}]),n}(i.Component),D=g.a.div(s||(s=Object(O.a)(["\n    margin: auto;\n    width: auto;\n    min-height: 100vh;\n"]))),F=g.a.div(a||(a=Object(O.a)(["\n    width: auto;\n    \n    .side {\n        display: flex;\n    }\n"]))),M=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={selected:[],lottoNumbers:[]},e.handleChange=function(t,n){console.log(n);var r=e.state.selected;r[n-1]=t,e.setState({selected:r})},e.handleButtonOnClick=function(){var t=e.state,n=t.selected,r=t.lottoNumbers,o=[],c=0;if(n.forEach((function(e,t){e&&(c++,o.push(t+1))})),c<7)alert("You should choose at least 7 nums");else{var s=e.selectLotto([],o);r.push(s),e.setState({lottoNumbers:r})}},e.selectLotto=function(t,n){if(7===t.length){var r=t.slice(0,6);return r.sort((function(e,t){return e-t})),r.push(t[6]),r}var o=n[Math.floor(Math.random()*n.length)];return t.indexOf(o)<0&&t.push(o),e.selectLotto(t,n)},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){for(var e=this.state.selected,t=0;t<47;t++)e.push(!1);this.setState({selected:e})}},{key:"render",value:function(){return Object(v.jsxs)(D,{children:[Object(v.jsx)(C,{}),Object(v.jsxs)(F,{children:[Object(v.jsx)("h1",{children:" Random Generator (Choose at least 7 numbers!)"}),Object(v.jsxs)("div",{className:"side",children:[Object(v.jsx)(B,{selected:this.state.selected,handleChange:this.handleChange,handleButtonOnClick:this.handleButtonOnClick}),Object(v.jsx)(S,{lottoNumbers:this.state.lottoNumbers})]})]})]})}}]),n}(i.Component),T=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(M,{})})}}]),n}(i.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))};h.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root")),A()}},[[57,1,2]]]);
//# sourceMappingURL=main.0b300be9.chunk.js.map