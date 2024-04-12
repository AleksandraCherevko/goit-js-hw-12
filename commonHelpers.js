import{a as S,i as d,S as P}from"./assets/vendor-48b140de.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function h(s){return s.map(({id:e,webformatURL:r,largeImageURL:i,tags:t,likes:o,views:a,comments:v,downloads:w})=>`<li class="gallery-item" data-id='${e}'>
         <a class="gallery-link" href="${i}">
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
              <p class="amount">${v}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${w}</p>
            </div>
  
        </li> `).join("")}async function g(s,e){const r="43242855-c6b7005837cbd7f2bbf3eb2ae";try{return s.includes("")&&s.replace(/\s+/g,"+"),await S.get("https://pixabay.com/api/",{params:{key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:perPage}})}catch{d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(error.message)}}const f=document.querySelector(".js-search"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".btn-load"),y=document.querySelector(".loader-more"),u=document.querySelector(".end-loader");let n=1;const b=40;let p="",L;c.style.display="none";y.style.display="none";l.style.display="none";u.style.display="none";f.addEventListener("submit",k);l.addEventListener("click",q);E();function k(s){if(s.preventDefault(),n=1,m.innerHTML="",c.style.display="block",l.style.display="none",u.style.display="none",p=s.target.elements.search.value.trim(),!p){d.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),c.style.display="none";return}g(p,n).then(({data:e})=>{c.style.display="none";const r=Math.ceil(e.totalHits/b);if(n===r?(l.style.display="none",u.style.display="block"):l.style.display="block",!e.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m.insertAdjacentHTML("beforeend",h(e.hits)),d.success({title:"Wow",message:`We found ${e.totalHits} pictures!`}),L=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),f.reset()}).catch(e=>{c.style.display="none",console.log(e)})}function q(){n+=1,y.style.display="block",l.style.display="none",u.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();g(p,n).then(({data:e})=>{m.insertAdjacentHTML("beforeend",h(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),L.refresh();const r=Math.ceil(e.totalHits/b);if(n===r){d.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",y.style.display="none",u.style.display="block";return}y.style.display="none",l.style.display="block"}).catch(e=>console.log(e))}function E(){document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".up-btn");s.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?s.classList.add("show"):s.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}
//# sourceMappingURL=commonHelpers.js.map
