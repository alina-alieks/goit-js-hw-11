import{i as g,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y="/goit-js-hw-11/assets/icon-error-3c862585.svg",c=()=>g.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:y,position:"topRight",backgroundColor:"#ef4040",theme:"dark",transitionIn:"fadeInRight"}),h=document.querySelector(".form"),b=document.querySelector(".loader"),S="https://pixabay.com/api/",q="42527705-4e95d3f46fcc8571248d3eb24";function v(r){return`${S}?key=${q}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`}const a=()=>b.classList.toggle("is-hidden");function L(r){if(h.image.value.trim())return a(),fetch(r).then(o=>{if(!o.ok)throw new Error(`Error request ${o.status}`);return o.json()});c()}const f=document.querySelector(".form"),m=document.querySelector(".gallery");function $(r){r.preventDefault(),m.innerHTML="";const n=r.currentTarget.elements.image.value.trim().split(" ").join("+"),s=v(n),e=L(s);e&&e.then(t=>{a(),t.hits.length!==0?w(t):c()}).catch(()=>{a(),c()}),f.reset()}f.addEventListener("submit",$);const u=new d(".gallery a",{captionsData:"alt",captionDelay:250});function w(r){let o="";r.hits.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:i,comments:l,downloads:p})=>o+=`<li class="gallery-item">
        <a href="${s}"><img class="gallery-item-images" src="${n}" alt="${e}" /></a>
        <ul class="gallery-item-info">
            <li class="item-info">
                <p class="item-info-name">Likes</p>
                <p class="item-info-value">${t}</p>
            </li>
            <li class="item-info">
                <p class="item-info-name">Views</p>
                <p class="item-info-value">${i}</p>
            </li>
            <li class="item-info">
                <p class="item-info-name">Comments</p>
                <p class="item-info-value">${l}</p>
            </li>
            <li class="item-info">
                <p class="item-info-name">Downloads</p>
                <p class="item-info-value">${p}</p>
            </li>
            </ul>
    </li>`).join(""),m.innerHTML=o,u.refresh(),u.on("shown.simplelightbox",function(){const n=document.querySelector(".sl-overlay"),s=document.querySelector(".sl-close "),e=document.querySelector(".sl-counter"),t=document.querySelectorAll(".sl-navigation button"),i=document.querySelector(".sl-caption");n.style.backgroundColor="rgb(46, 47, 66)",s.style.color="#ffffff",s.style.fontSize="2rem",e.style.color="#ffffff",t.forEach(l=>l.style.color="#ffffff"),i.style.backgroundColor="rgba(46, 47, 66, 0.80)"})}
//# sourceMappingURL=commonHelpers.js.map
