(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+n6y":function(e,t,n){"use strict";n.r(t);n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var r=n("mXGw"),a=n.n(r),i=n("/FXl"),c=n("qE5B");function u(e){return e.current&&(e.current.el||e.current)}n("n2Yz"),n("/qG3");var o=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},l=(n("ESim"),function(){var e=Object(r.useState)(),t=e[0],n=e[1],i=function(e){var t,n,a=Object(r.useRef)(null),i=Object(r.useState)(!0),c=i[0],o=i[1];function l(){var e=u(a);e&&e.removeAttribute("style")}function s(){var r=u(a);r&&(r.style.display="block",r.style.overflow="hidden",e?(r.style.height="0",r.style.height=r.scrollHeight+"px"):(r.style.height=r.scrollHeight+"px",t=requestAnimationFrame((function(){n=requestAnimationFrame((function(){r.style.height="0px"}))}))))}return Object(r.useLayoutEffect)((function(){c||s()}),[e]),Object(r.useEffect)((function(){var e=u(a);return e&&e.addEventListener("transitionend",l),function(){e&&e.removeEventListener("transitionend",l)}}),[e]),Object(r.useEffect)((function(){return o(!1),function(){cancelAnimationFrame(t),cancelAnimationFrame(n)}}),[]),[a,s]}(t)[0];return a.a.createElement("section",{className:"jkl-spacing--top-3 jkl-spacing--bottom-3 jkl-body"},a.a.createElement("button",{className:"jkl-button jkl-button--primary",onClick:function(){return n(!t)}},"Animate ",t?"Out":"In"),a.a.createElement("div",{className:"lorem-text-wrapper "+(t?"":"lorem-text-wrapper--hidden"),ref:i},a.a.createElement("div",{className:"lorem-text"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam officiis optio soluta veniam voluptatibus!")))});n("VlJN"),n("YjJN"),n("Eb4t"),n("IYjZ"),n("yvkl");function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(){var e=Object(r.useState)([]),t=e[0],n=e[1],i=Object(r.useState)(!1),c=i[0],u=i[1],o=Object(r.useRef)(null),l=Object(r.useRef)();l.current=t;return function(e,t){function n(n){e&&e.current&&!e.current.contains(n.target)&&t()}a.a.useEffect((function(){return e&&document&&document.addEventListener("click",n),function(){e&&document&&document.removeEventListener("click",n)}}))}(o,(function(){c&&n([].concat(s(l.current||[]),["Clicked outside"]))})),a.a.createElement("section",{className:"jkl-spacing--top-3 jkl-spacing--bottom-3 jkl-body"},a.a.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing--right-2",ref:o,onClick:function(){return u(!c)}},c?"Disable":"Enable"),a.a.createElement("button",{className:"jkl-button jkl-button--secondary",ref:o,onClick:function(){return n([])}},"Reset list"),a.a.createElement("ul",{className:"jkl-list"},t.map((function(e,t){return a.a.createElement("li",{className:"jkl-list--item",key:t},e)}))))};function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(){var e=Object(r.useState)(),t=e[0],n=e[1],i=Object(r.useState)([]),c=i[0],u=i[1],l=Object(r.useRef)(null),s=Object(r.useRef)();s.current=c;return function(e,t,n){var a=Object(r.useRef)(null);Object(r.useEffect)((function(){if(o()){var r=a.current,i=e.current;r&&r.disconnect(),r=new MutationObserver(t),i&&r.observe(i,n)}return function(){o()&&a&&a.current&&a.current.disconnect()}}),[e])}(l,(function(e){u([].concat(b(s.current||[]),b(e.map((function(e){return e.target.textContent||""})))))}),{characterData:!0,subtree:!0}),a.a.createElement("section",{className:"jkl-spacing--top-3 jkl-spacing--bottom-3 jkl-body"},a.a.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing--right-2",onClick:function(){return n(!t)}},"Change status"),a.a.createElement("button",{className:"jkl-button jkl-button--secondary",onClick:function(){return u([])}},"Reset list"),a.a.createElement("p",{ref:l,className:"jkl-spacing--top-3"},"Current state: ",t?"OPEN":"CLOSED"),a.a.createElement("p",null,"List of changes in state:"),a.a.createElement("ul",{className:"jkl-list"},c.map((function(e,t){return a.a.createElement("li",{className:"jkl-list__item",key:t},e)}))))};n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return k}));var p={},j={_frontmatter:p},d=c.a;function k(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(d,Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Denne pakken innholder støttefunksjoner i form av React hooks."),Object(i.b)("h3",null,"useAnimatedHeight"),Object(i.b)(l,{mdxType:"AnimationExample"}),Object(i.b)("p",null,"Animering av ting inn og ut av DOMet i React er ikke lett, men med useAnimatedHeight så blir jobben en god del lettere."),Object(i.b)("h3",null,"useMutationObserver"),Object(i.b)(f,{mdxType:"MutationObserverExample"}),Object(i.b)("p",null,"Med useMutationObserver kan du lytte på endringer i DOMet. Dette er en tynn wrapper over MutationObserver APIet som gjør det lettere å ta det i bruk i React. Er nyttig om du feks ønsker å tracke om en bruker har trykket på et element du ikke har tilgang på onChange funksjonen, feks Accordion."),Object(i.b)("h3",null,"useClickOutside"),Object(i.b)(m,{mdxType:"ClickOutsideExample"}),Object(i.b)("p",null,"Denne lar det lytte på klikk utenfor et element. Det kan være nyttig for å lukke en modal feks."),Object(i.b)("h3",null,"useFocusOutside"),Object(i.b)("p",null,"TODO: ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/fremtind/jokul/issues/677"}),"https://github.com/fremtind/jokul/issues/677")),Object(i.b)("h3",null,"useKeyListner"),Object(i.b)("p",null,"TODO: ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/fremtind/jokul/issues/678"}),"https://github.com/fremtind/jokul/issues/678")))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-hooks-mdx-e1313a384bdaedf2b763.js.map