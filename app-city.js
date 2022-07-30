const city = [
    {
        id:"",
        title:"Starbucks® Şehir Temalı Kupa Serisi - İstanbul",
        img:"./images/city/Starbucks® Şehir Temalı Kupa Serisi - İstanbul.jpg",
        category:"bottle",
    },
    {
        id:"",
        title:"Starbucks® Şehir Temalı Kupa Serisi - İzmir",
        img:"./images/city/Starbucks® Şehir Temalı Kupa Serisi - İzmir.jpg",
        category:"bottle",
    },
    {
        id:"",
        title:"Starbucks® Şehir Temalı Kupa Serisi - Adana",
        img:"./images/city/Starbucks® Şehir Temalı Kupa Serisi - Adana.jpg",
        category:"bottle",
    },
    {
        id:"",
        title:"Starbucks® Şehir Temalı Kupa Serisi - Antalya",
        img:"./images/city/Starbucks® Şehir Temalı Kupa Serisi - Antalya.jpg",
        category:"bottle",
    },
    {
        id:"",
        title:"Starbucks® Şehir Temalı Kupa Serisi - Bodrum",
        img:"./images/city/Starbucks® Şehir Temalı Kupa Serisi - Bodrum.jpg",
        category:"bottle",
    },
    {
        id:"",
        title:"Starbucks® Şehir Temalı Kupa Serisi - Ankara",
        img:"./images/city/Starbucks® Şehir Temalı Kupa Serisi - Ankara.jpg",
        category:"bottle",
    },
    {
        id:"",
        title:"Starbucks® Şehir Temalı Termos - Türkiye",
        img:"./images/city/Starbucks® Şehir Temalı Termos - Türkiye.jpg",
        category:"bottle",
    },
    {
        id:"",
        title:"Starbucks® Şehir Temalı Kupa Serisi - Türkiye",
        img:"./images/city/Starbucks® Şehir Temalı Kupa Serisi - Türkiye.jpg",
        category:"bottle",
    },
]

const displayCity = document.querySelector(".city")

window.addEventListener("DOMContentLoaded",function(){
    bCity(city)
})

function bCity (item){
    let citys = item.map(function(choose){
        return`
        <article class="article-item "  >    
        <a href="${choose.id}" >
          <img src="${choose.img}" alt="${choose.img}" class="photo" >
      </a>
          <div class="article-info">
                 
                  <h4 class="itemName">${choose.title}/h4>
                  <h4 class="price">15.99</h4>
          </div>
          <p class="article-text">
              Lorem, ipsum dolor sit amet consectetekipmanur adipisicing elit. Illo, sapiente?
          </p>         
      </article> 
        `
    })
    citys = citys.join("")
    displayCity.innerHTML = citys
}