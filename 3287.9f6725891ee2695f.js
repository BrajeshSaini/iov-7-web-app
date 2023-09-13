"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{3287:(nt,U,h)=>{h.r(U),h.d(U,{startInputShims:()=>ot});var j,F,M=h(5861),x=h(8360),m=h(839),W=h(7484);h(4874),h(6225);const p=new WeakMap,B=(t,e,s,o=0,n=!1)=>{p.has(t)!==s&&(s?z(t,e,o,n):V(t,e))},z=(t,e,s,o=!1)=>{const n=e.parentNode,a=e.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o&&(a.disabled=!0),n.appendChild(a),p.set(t,a);const r="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${r}px,${s}px,0) scale(0)`},V=(t,e)=>{const s=p.get(t);s&&(p.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},O="input, textarea, [no-blur], [contenteditable]",k="$ionPaddingTimer",K=(t,e,s)=>{const o=t[k];o&&clearTimeout(o),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[k]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},Z=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&K(e,0,s)},{once:!0})};let P=0;const R="data-ionic-skip-scroll-assist",tt=(t,e,s,o,n,a,c,r=!1)=>{var i;const d=a&&(void 0===c||c.mode===W.a.None),l=function(){return(i=i||(0,M.Z)(function*(){e.hasAttribute(R)?e.removeAttribute(R):et(t,e,s,o,n,d,r)})).apply(this,arguments)};return t.addEventListener("focusin",l,!0),()=>{t.removeEventListener("focusin",l,!0)}},N=t=>{document.activeElement!==t&&(t.setAttribute(R,"true"),t.focus())},et=function(e,s,o,n,a,c){return(j=j||(0,M.Z)(function*(r,i,d,l,y,g,D=!1){if(!d&&!l)return;const f=((t,e,s)=>{var o;return((t,e,s,o)=>{const n=t.top,a=t.bottom,c=e.top,i=c+15,l=Math.min(e.bottom,o-s)-50-a,y=i-n,g=Math.round(l<0?-l:y>0?-y:0),D=Math.min(g,n-c),v=Math.abs(D)/.3;return{scrollAmount:D,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:s,inputSafeY:4-(n-i)}})((null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(r,d||l,y);if(d&&Math.abs(f.scrollAmount)<4)return N(i),void(g&&null!==d&&(K(d,P),Z(i,d,()=>P=0)));if(B(r,i,!0,f.inputSafeY,D),N(i),(0,m.r)(()=>r.click()),g&&d&&(P=f.scrollPadding,K(d,P)),typeof window<"u"){var v;let S;const b=function L(){return(v=v||(0,M.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",A),window.removeEventListener("ionKeyboardDidShow",L),d&&(yield(0,x.c)(d,0,f.scrollAmount,f.scrollDuration)),B(r,i,!1,f.inputSafeY),N(i),g&&Z(i,d,()=>P=0)})).apply(this,arguments)},A=()=>{window.removeEventListener("ionKeyboardDidShow",A),window.addEventListener("ionKeyboardDidShow",b)};if(d){const L=yield(0,x.g)(d);if(f.scrollAmount>L.scrollHeight-L.clientHeight-L.scrollTop)return"password"===i.type?(f.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",A)):window.addEventListener("ionKeyboardDidShow",b),void(S=setTimeout(b,1e3))}b()}})).apply(this,arguments)},ot=function(e,s){return(F=F||(0,M.Z)(function*(o,n){var a;const c=document,r="ios"===n,i="android"===n,d=o.getNumber("keyboardHeight",290),l=o.getBoolean("scrollAssist",!0),y=o.getBoolean("hideCaretOnScroll",r),g=o.getBoolean("inputBlurring",r),D=o.getBoolean("scrollPadding",!0),f=Array.from(c.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,S=new WeakMap,b=yield W.K.getResizeMode(),A=function(I){return(a=a||(0,M.Z)(function*(_){yield new Promise(w=>(0,m.c)(_,w));const G=_.shadowRoot||_,T=G.querySelector("input")||G.querySelector("textarea"),C=(0,x.f)(_),Y=C?null:_.closest("ion-footer");if(T){if(C&&y&&!v.has(_)){const w=((t,e,s)=>{if(!s||!e)return()=>{};const o=r=>{(t=>t===t.getRootNode().activeElement)(e)&&B(t,e,r)},n=()=>B(t,e,!1),a=()=>o(!0),c=()=>o(!1);return(0,m.a)(s,"ionScrollStart",a),(0,m.a)(s,"ionScrollEnd",c),e.addEventListener("blur",n),()=>{(0,m.b)(s,"ionScrollStart",a),(0,m.b)(s,"ionScrollEnd",c),e.removeEventListener("blur",n)}})(_,T,C);v.set(_,w)}if("date"!==T.type&&"datetime-local"!==T.type&&(C||Y)&&l&&!S.has(_)){const w=tt(_,T,C,Y,d,D,b,i);S.set(_,w)}}})).apply(this,arguments)};g&&(()=>{let t=!0,e=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",c=>{if(e)return void(e=!1);const r=s.activeElement;if(!r||r.matches(O))return;const i=c.target;i!==r&&(i.matches(O)||i.closest(O)||(t=!1,setTimeout(()=>{t||r.blur()},50)))},!1)})();for(const u of f)A(u);c.addEventListener("ionInputDidLoad",u=>{A(u.detail)}),c.addEventListener("ionInputDidUnload",u=>{(u=>{if(y){const I=v.get(u);I&&I(),v.delete(u)}if(l){const I=S.get(u);I&&I(),S.delete(u)}})(u.detail)})})).apply(this,arguments)}}}]);