import{a as g,i,S as b}from"./assets/vendor-48b140de.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(s){return s.map(({id:o,webformatURL:r,largeImageURL:a,tags:e,likes:t,views:n,comments:p,downloads:f})=>`<li class="gallery-item" data-id='${o}'>
         <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${e}"/>
              </div>
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${n}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${p}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${f}</p>
            </div>
  
        </li> `).join("")}async function m(s){const o="https://pixabay.com/api/",r="43242855-c6b7005837cbd7f2bbf3eb2ae",a=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await g.get(`${o}?${a}`)).data}catch(e){throw new Error(e.message)}}const y=document.querySelector(".js-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");c.style.display="none";y.addEventListener("submit",v);function v(s){s.preventDefault(),l.innerHTML="";const o=s.currentTarget.querySelector(".search-input").value;m(o).then(r=>(c.style.display="none",r.hits.length||i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),r)).then(r=>{l.innerHTML=h(r.hits),new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),y.reset()}).catch(r=>{c.style.display="none",i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}const u=document.querySelector(".load-button");let d=1;u.addEventListener("click",async()=>{try{const s=await m();h(arr),d+=1,d>1&&(u.textContent="blablabla")}catch(s){console.log(s)}});
//# sourceMappingURL=commonHelpers.js.map
