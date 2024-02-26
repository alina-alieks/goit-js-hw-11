import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="/goit-js-hw-11/assets/icon-error-3c862585.svg",l=document.querySelector(".form");console.log(l.imput.image.value);const u="https://pixabay.com/api/",f="42527705-4e95d3f46fcc8571248d3eb24";function p(i){i.preventDefault();const t=i.currentTarget.elements.image.value.trim().split(" ").join("+"),s=`${u}?key=${f}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return g(s),l.reset(),s}function g(i){const r=()=>a.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:m,position:"topRight",backgroundColor:"#ef4040",theme:"dark",transitionIn:"fadeInRight"});fetch(i).then(t=>{if(!t.ok)throw new Error("Error");return t.json()}).then(t=>{t.hits.length!==0?(console.log(t.hits),y(t)):r()}).catch(t=>t.message)}const d=document.querySelector(".gallery");function y(i){console.log(i);let r="";i.hits.map(({webformatURL:t,tags:s,likes:e,views:o,comments:n,downloads:c})=>r+=`<li class="gallery-item">
          <img class="gallery-item-images" src="${t}" alt="${s}" />
          <ul class="gallery-item-info">
            <li class="item-info">
              <p class="item-info-name">Likes</p>
              <p class="item-info-value">${e}</p>
            </li>
            <li class="item-info">
              <p class="item-info-name">Views</p>
              <p class="item-info-value">${o}</p>
            </li>
            <li class="item-info">
              <p class="item-info-name">Comments</p>
              <p class="item-info-value">${n}</p>
            </li>
            <li class="item-info">
              <p class="item-info-name">Downloads</p>
              <p class="item-info-value">${c}</p>
            </li>
          </ul>
        </li>`).join(""),d.innerHTML=r}const h=document.querySelector(".form");h.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
