!function(){function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return s.Date.now()};function g(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var f=c.test(t);return f||u.test(t)?a(t.slice(2),f?2:8):i.test(t)?NaN:+t}t=function(n,t,e){var o,r,i,c,u,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,i=r;return o=r=void 0,f=t,c=n.apply(i,e)}function h(n){return f=n,u=setTimeout(T,t),l?b(n):c}function j(n){var e=n-a;return void 0===a||e>=t||e<0||s&&n-f>=i}function T(){var n=v();if(j(n))return w(n);u=setTimeout(T,function(n){var e=t-(n-a);return s?p(e,i-(n-f)):e}(n))}function w(n){return u=void 0,d&&o?b(n):(o=r=void 0,c)}function M(){var n=v(),e=j(n);if(o=arguments,r=this,a=n,e){if(void 0===u)return h(a);if(s)return u=setTimeout(T,t),b(a)}return void 0===u&&(u=setTimeout(T,t)),c}return t=y(t)||0,g(e)&&(l=!!e.leading,i=(s="maxWait"in e)?m(y(e.maxWait)||0,t):i,d="trailing"in e?!!e.trailing:d),M.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=a=r=u=void 0},M.flush=function(){return void 0===u?c:w(v())},M};var b=document.querySelector("#search-box"),h=document.querySelector(".country-list"),j=document.querySelector(".country-info"),T=n(t)((function(n){var t="".concat("https://restcountries.com/v3.1/name/").concat(n);fetch(t).then((function(n){if(!n.ok)throw new Error("No results found");return n.json()})).then((function(n){h.innerHTML="",j.innerHTML="",n.length>1?n.forEach((function(n){var t=document.createElement("li");t.textContent=n.name.common;var e=document.createElement("img");e.src=n.flags.svg,e.alt="Flag of ".concat(n.name.common),t.prepend(e),h.appendChild(t),t.addEventListener("click",(function(){w(n)}))})):1===n.length&&w(n[0])})).catch((function(n){console.error(n.message)}))}),300);function w(n){var t="\n    <h2>".concat(n.name.common,'</h2>\n    <img src="').concat(n.flags.svg,'" alt="Flag of ').concat(n.name.common,'" />\n    <p><strong>Capital:</strong> ').concat(n.capital,"</p>\n    <p><strong>Population:</strong> ").concat(n.population,"</p>\n    <p><strong>Languages:</strong> ").concat(Object.values(n.languages).join(", "),"</p>\n  ");j.innerHTML=t}b.addEventListener("input",(function(n){var t=n.target.value.trim();t.length>=2?T(t):(h.innerHTML="",j.innerHTML="")}))}();
//# sourceMappingURL=index.e2bee225.js.map
