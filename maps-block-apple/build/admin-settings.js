(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.apiFetch;var n=e.n(t);const a=window.wp.i18n,o=document.getElementById("mapkit-credentials-status"),r=document.getElementById("token-gen-authkey"),i=document.getElementById("token-gen-kid"),d=document.getElementById("token-gen-iss");r.value||i.value||d.value?setTimeout((()=>{n()({path:"MapsBlockApple/v1/GetJWT/"}).then((e=>{mapkit.init({authorizationCallback(t){t(e)}})})).catch((e=>{s(e.message,"error")}))}),300):o.closest("tr").style.display="none",mapkit.addEventListener("error",(()=>{s((0,a.__)("Invalid credentials!"),"error")})),mapkit.addEventListener("configuration-change",(()=>{s((0,a.__)("Authorized!"),"valid")}));const s=(e,t)=>{o.className="",o.classList.add(`mapkit-${t}`),o.innerText=e}})();