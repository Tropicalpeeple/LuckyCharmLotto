(this.webpackJsonpluckycharmlotto=this.webpackJsonpluckycharmlotto||[]).push([[0],{228:function(e,n,t){},256:function(e,n,t){},271:function(e,n){},273:function(e,n){},284:function(e,n){},286:function(e,n){},313:function(e,n){},314:function(e,n){},320:function(e,n){},322:function(e,n){},340:function(e,n){},426:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(33),o=t.n(s),r=t(68),i=(t(228),t(5)),l=t(2),u=t.n(l),d=t(442),h=t(72),f=t(82),j=t.n(f),b=(t(256),t(44)),m=t(443);function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return"".concat(e.slice(0,n),"...").concat(e.slice(-n))}function O(e,n){var t=BigInt("1"+"0".repeat(n)),c=e%t,a=(e/t).toString()+"."+c.toString().padStart(n,"0");return a.substring(0,a.length-4)}var p,w=t(30),v=t(43),x=t(80),A=t(71),N=t.n(A);!function(e){e.MainNet="mainnet",e.TestNet="testnet"}(p||(p={}));var M=new N.a.Algodv2("","https://mainnet-api.algonode.cloud",""),y=new N.a.Algodv2("","https://testnet-api.algonode.cloud","");function C(e){switch(e){case p.MainNet:return M;case p.TestNet:return y;default:throw new Error("Unknown chain type: ".concat(e))}}function B(e,n){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(u.a.mark((function e(n,t){var c,a,s,o,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=C(n),e.next=3,c.accountInformation(t).setIntDecoding(N.a.IntDecoding.BIGINT).do();case 3:return a=e.sent,s=a.amount.toString(),o=a.assets,(r=o.map((function(e){var n=e["asset-id"],t=e.amount,c=e["is-frozen"];return{id:Number(n),amount:t.toString(),frozen:c,decimals:0,creator:""}}))).sort((function(e,n){return e.id-n.id})),e.next=10,Promise.all(r.map((function(e,n){return new Promise((function(t){setTimeout(Object(i.a)(u.a.mark((function n(){var a,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.getAssetByID(e.id).do();case 3:a=n.sent,s=a.params,e.name=s.name,e.unitName=s["unit-name"],e.url=s.url,e.decimals=s.decimals,e.creator=s.creator,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.error("asset:",e.id,n.t0.message);case 15:t();case 16:case"end":return n.stop()}}),n,null,[[0,12]])}))),25*n)}))})));case 10:return r.unshift({id:0,amount:s,creator:"",frozen:!1,decimals:6,name:"Algo",unitName:"Algo"}),e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V={accounts:[],address:"",assets:[{id:0,amount:"0",creator:"",frozen:!1,decimals:6,name:"Algo",unitName:"Algo"}],chain:p.TestNet,fetching:!1},E=Object(v.b)("walletConnect/getAccountAssets",function(){var e=Object(i.a)(u.a.mark((function e(n){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.chain,c=n.address,e.next=3,B(t,c);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),k=Object(v.c)({name:"walletConnect",initialState:V,reducers:{switchChain:function(e,n){e.chain=n.payload},reset:function(e){return Object(w.a)(Object(w.a)({},V),{},{chain:e.chain})},onSessionUpdate:function(e,n){e.accounts=n.payload,e.address=n.payload[0]}},extraReducers:function(e){e.addCase(E.fulfilled,(function(e,n){e.fetching=!1,e.assets=n.payload})),e.addCase(E.pending,(function(e){e.fetching=!0}))}}),Y=Object(x.a)((function(e){return e.walletConnect.assets}),(function(e){return e.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{amount:BigInt(e.amount)})}))})),I=k.actions,S=I.switchChain,G=I.reset,L=I.onSessionUpdate,F=k.reducer,Z=Object(v.c)({name:"application",initialState:{isModalOpen:!1},reducers:{setIsModalOpen:function(e,n){e.isModalOpen=n.payload}}}),T=Z.actions.setIsModalOpen,U=Z.reducer,Q=function(){return Object(r.b)()},R=r.c,X=t(216),H={bridge:"https://bridge.walletconnect.org",qrcodeModal:j.a},K=[""],P=new X.a(H),W=Object(c.createContext)(P),J=t(3),q=function(){var e=R((function(e){return e.walletConnect})),n=(e.fetching,e.address),t=e.chain,a=Object(c.useState)(0),s=Object(b.a)(a,2),o=s[0],r=s[1],i=R(Y),l=Q(),u=Object(c.useContext)(W);void 0!==K[1]&&(n=K[1]),Object(c.useEffect)((function(){var e;if(n.length>0?u.connected=!0:(null===(e=K[1])||void 0===e?void 0:e.length)>0&&(n=K[1],u.connected=!0),u.connected){var t=u.accounts;l(L(t))}return console.log("%cin subscribeToEvents","background: yellow"),u.on("connect",(function(e,n){if(console.log("%cOn connect","background: yellow"),e)throw e;var t=n.params[0].accounts;l(L(t)),l(T(!1))})),u.on("session_update",(function(e,n){if(console.log("%cOn session_update","background: yellow"),e)throw e;var t=n.params[0].accounts;l(L(t))})),u.on("disconnect",(function(e,n){if(console.log("%cOn disconnect","background: yellow"),e)throw e;l(G())})),function(){console.log("%cin unsubscribeFromEvents","background: yellow"),u.off("connect"),u.off("session_update"),u.off("disconnect")}}),[l,u]),Object(c.useEffect)((function(){var e,c;(null===(e=n)||void 0===e?void 0:e.length)<=0&&(n=K[1]),(null===(c=n)||void 0===c?void 0:c.length)>0&&(console.log("chain: ",t),console.log("address: ",n),l(E({chain:t,address:n})))}),[l,n,t]);i.find((function(e){return 0===e.id}));return Object(J.jsx)("div",{className:"site-layout-background site-header",children:Object(J.jsxs)("div",{className:"site-header-inner",children:[Object(J.jsx)("div",{className:"Logo-label",children:Object(J.jsx)("label",{children:"Lucky Charm Lotto"})}),Object(J.jsx)("div",{children:Object(J.jsxs)(m.a,{value:t,onChange:function(e){return l(S(e.target.value))},children:[Object(J.jsx)("option",{value:p.TestNet,children:"Testnet"}),Object(J.jsx)("option",{value:p.MainNet,children:"Mainnet"})]})}),n?Object(J.jsxs)("div",{className:"header-address-info",children:[Object(J.jsx)("span",{className:"header-account",children:g(n)}),Object(J.jsx)(h.a,{className:"disconnect-button",onClick:function(e){u.connected?(u.killSession().catch((function(e){return console.error(e.message)})),console.log("Disconnect Pera Wallet")):void 0!==K[1]&&(console.log("Disconnect MyAlgo Wallet"),K[1]="",n="",u.connected=!0,l(G())),r(o+1)},children:"Disconnect"})]}):Object(J.jsx)(h.a,{className:"disconnect-button",onClick:function(){return l(T(!0))},children:"Connect Wallet"})]})})},z=function(e){var n=e.src,t=e.fallback;return Object(J.jsx)("img",Object(w.a)(Object(w.a)({},e),{},{src:n,alt:"icon",className:"icon",onError:function(e){t&&(e.target.src=t)}}))};z.defaultProps={src:null,fallback:"",size:20};var _=z,$=t.p+"static/media/algo.ecbc85e5.svg",ee=t.p+"static/media/DLL.686c0d11.svg",ne=function(e){var n=e.asset;return Object(J.jsxs)("div",{className:"asset-row",children:[Object(J.jsxs)("div",{className:"asset-info",children:[0===n.id?Object(J.jsx)(_,{src:$}):Object(J.jsx)(_,{src:ee}),Object(J.jsx)("span",{children:n.name})]}),Object(J.jsx)("div",{children:Object(J.jsx)("div",{children:"".concat(O(n.amount,n.decimals))})})]})},te=function(e){var n=e.assets,t=n.find((function(e){return 0===e.id})),c=n.filter((function(e){return 0!==e.id&&(812719107===e.id||100203263===e.id)}));return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Account Balance"}),Object(J.jsx)(ne,{asset:t},t.id),c.map((function(e){return Object(J.jsx)(ne,{asset:e},e.id)}))]})},ce=function(){return Object(J.jsx)("div",{className:"loading-icon",children:Object(J.jsx)("span",{})})},ae=function(){var e=R((function(e){return e.walletConnect.fetching})),n=R(Y);return Object(J.jsx)("div",{className:"site-body",children:Object(J.jsxs)("div",{className:"site-body-inner",children:[e?Object(J.jsx)(ce,{}):n.length<3?Object(J.jsx)("b",{children:Object(J.jsx)("i",{children:"Connect Wallet to View Account Balances"})}):Object(J.jsx)(te,{assets:n}),n.length<3?Object(J.jsx)("div",{className:"site-body-empty"}):Object(J.jsx)("h2",{children:"Lucky Pools"}),Object(J.jsx)("label",{children:Object(J.jsx)("b",{children:Object(J.jsx)("i",{children:"Project Lauch Coming Soon...."})})})]})})},se=t(215),oe=t.n(se),re=function(){var e=R((function(e){return e.application})).isModalOpen,n=Q(),t=Object(c.useContext)(W),a=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.connected){e.next=2;break}return e.abrupt("return");case 2:if(!t.pending){e.next=4;break}return e.abrupt("return",j.a.open(t.uri,null));case 4:return e.next=6,t.createSession();case 6:console.log({connector:t});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(u.a.mark((function e(){var t,c,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new oe.a({disableLedgerNano:!0}),c={shouldSelectOneAccount:!0,openManager:!1},e.next=4,t.connect(c);case 4:return a=e.sent,s=o(JSON.stringify(a,["address"]),"address:"),K[1]=s,n(T(!1)),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function o(e,n){var t=e;if((t=(t=(t=(t=t.replace(/[{()}]/g,"")).replace(/[\[\]']+/g,"")).replace(/['"]+/g,"")).replace(n,"")).length<1){var c=window.document.getElementById("eject-btn"),a=window.document.getElementById("Wallet-Group");c&&(c.style.visibility="Hidden"),a&&(a.style.visibility="Hidden")}return t}return Object(J.jsx)("div",{children:Object(J.jsxs)("div",{className:"site-layout",children:[Object(J.jsx)(q,{}),Object(J.jsx)(ae,{}),Object(J.jsxs)(d.a,{isShown:e,title:"Connect to a wallet",hasFooter:!1,onCloseComplete:function(){return n(T(!1))},children:[Object(J.jsxs)(h.a,{className:"wallet-button",onClick:a,children:[Object(J.jsx)("img",{className:"wallet-icon",src:"data:image/png;base64,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",alt:"Pera wallet"}),Object(J.jsx)("span",{children:"Pera Wallet"})]}),Object(J.jsxs)(h.a,{className:"wallet-button",onClick:s,children:[Object(J.jsx)("img",{className:"wallet-icon",src:"data:image/png;base64,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",alt:"Pera wallet"}),Object(J.jsx)("span",{children:"MyAlgo Connect"})]})]})]})})},ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,444)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),s(e),o(e)}))},le=function(e){var n=e.getState;return function(e){return function(t){"walletConnect/switchChain"===t.type&&console.log("switch chain: ",t.payload),"walletConnect/getAccountAssets/pending"===t.type&&console.log("loading assets..."),"walletConnect/getAccountAssets/fulfilled"===t.type&&console.log("assets sucessfully loaded"),"walletConnect/getAccountAssets/rejected"===t.type&&console.error(t.error.message);var c=e(t);return"walletConnect/reset"===t.type&&console.log("reset state",n().walletConnect),c}}},ue=Object(v.a)({reducer:{walletConnect:F,application:U},preloadedState:{},middleware:function(e){return e().concat(le)}});o.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(r.a,{store:ue,children:Object(J.jsx)(W.Provider,{value:P,children:Object(J.jsx)(re,{})})})}),document.getElementById("root")),ie()}},[[426,1,2]]]);
//# sourceMappingURL=main.d22a8761.chunk.js.map