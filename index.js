import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",h="47381624-f2c157926f525f6b292de8ebe";function p(i){const s=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function d(i){return i.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:l,downloads:u})=>`
      <li class="gallery-item>
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${s}" alt="${o}" width="360" height="200" />
        </a>
        <ul class="info-list">
            <li class="info-item">
              <h3 class="item-title">Likes</h3>
              <p class="item-descr">${e}</p>
            </li>
            <li class="info-item">
              <h3 class="item-title">Views</h3>
              <p class="item-descr">${t}</p>
            </li>
            <li class="info-item">
              <h3 class="item-title">Comments</h3>
              <p class="item-descr">${l}</p>
            </li>
            <li class="info-item">
              <h3 class="item-title">Downloads</h3>
              <p class="item-descr">${u}</p>
            </li>
          </ul>
      </li>
  `).join("")}const n=document.querySelector(".loader-js"),g=document.querySelector(".form-js"),y=document.querySelector(".input-js"),c=document.querySelector(".gallery-js");g.addEventListener("submit",b);function b(i){i.preventDefault(),c.innerHTML="";const s=y.value.trim();if(!s){a.show({message:"Sorry, the request cannot be empty. Please try again...",position:"topRight",closeOnClick:!0,progressBar:!1,messageColor:"white",backgroundColor:"#ef4040"});return}n.style.display="block",p(s).then(r=>{if(!r.hits.length){a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnClick:!0,progressBar:!1,messageColor:"white",backgroundColor:"#ef4040"});return}c.insertAdjacentHTML("beforeend",d(r.hits)),new m(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt"}).refresh()}).catch(r=>a.show({title:"X",message:`${r.message}`,position:"center",color:"red"})).finally(()=>{i.target.reset(),n.style.display="none"})}
//# sourceMappingURL=index.js.map
