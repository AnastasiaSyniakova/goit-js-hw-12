import{a as l,S as f,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="28034185-32b171efe234d6a5f1d0d21a7";l.defaults.baseURL="https://pixabay.com/api/";function g(s){return l.get("",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector("#loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:p,downloads:d})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b><span>${t}</span></p>
          <p><b>Views</b><span>${a}</span></p>
          <p><b>Comments</b><span>${p}</span></p>
          <p><b>Downloads</b><span>${d}</span></p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function L(){u.classList.add("loader--visible")}function v(){u.classList.remove("loader--visible")}const S=document.querySelector(".form");S.addEventListener("submit",s=>{s.preventDefault();const r=s.target["search-text"].value.trim();r!==""&&(b(),L(),g(r).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}).catch(o=>{n.error({message:"Something went wrong. Please try again.",position:"topRight"}),console.log(o)}).finally(()=>{v()}))});
//# sourceMappingURL=index.js.map
