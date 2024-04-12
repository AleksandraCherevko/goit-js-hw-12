import{a as P,i as d,S as k}from"./assets/vendor-48b140de.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function g(s){return s.map(({id:e,webformatURL:r,largeImageURL:n,tags:t,likes:o,views:a,comments:S,downloads:L})=>`<li class="gallery-item" data-id='${e}'>
         <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${t}"/>
              </div>
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${o}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${S}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${L}</p>
            </div>
  
        </li> `).join("")}const w=15;async function m(s,e){const r="43242855-c6b7005837cbd7f2bbf3eb2ae";try{return s.includes(" ")&&(s=s.replace(/\s+/g,"+")),await P.get("https://pixabay.com/api/",{params:{key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:w}})}catch(n){d.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(n.message)}}const f=document.querySelector(".js-search"),h=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".btn-load"),u=document.querySelector(".loader-more"),y=document.querySelector(".end-loader");let i=1;const b=15;let p="",v;c.style.display="none";u.style.display="none";l.style.display="none";y.style.display="none";f.addEventListener("submit",q);l.addEventListener("click",$);scrollingTopPage();function q(s){if(s.preventDefault(),i=1,h.innerHTML="",c.style.display="block",l.style.display="none",y.style.display="none",p=s.target.elements.search.value.trim(),!p){d.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),c.style.display="none";return}m(p,i).then(({data:e})=>{c.style.display="none";const r=Math.ceil(e.totalHits/b);if(i===r?(l.style.display="none",y.style.display="block"):l.style.display="block",!e.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h.insertAdjacentHTML("beforeend",g(e.hits)),d.success({title:"Wow",message:`We found ${e.totalHits} pictures!`}),v=new k(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),f.reset()}).catch(e=>{c.style.display="none",console.log(e)})}function $(){i+=1,u.style.display="block",l.style.display="none",y.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();m(p,i).then(({data:e})=>{h.insertAdjacentHTML("beforeend",g(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),v.refresh();const r=Math.ceil(e.totalHits/b);if(i===r){d.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",u.style.display="none",y.style.display="block";return}u.style.display="none",l.style.display="block",H(h)}).catch(e=>console.log(e))}function H(s){const r=s.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
