const sesion = [
    {
        id:"",
        title:"Starbucks® Renkli Soğuk İçecek Bardağı",
        img:"./images/sesion/Starbucks® Renkli Soğuk İçecek Bardağı.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Gözlüklü Pipetli Soğuk İçecek Termosu - Pembe Renkli",
        img:"./images/sesion/Starbucks® Gözlüklü Pipetli Soğuk İçecek Termosu - Pembe Renkli.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Yeşil Renkli Orman Temalı Termos",
        img:"./images/sesion/Starbucks® Yeşil Renkli Orman Temalı Termos.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Yeşil Renkli Soğuk İçecek Bardağı",
        img:"./images/sesion/Starbucks® Yeşil Renkli Soğuk İçecek Bardağı.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Pembe Renkli Termos",
        img:"./images/sesion/Starbucks® Pembe Renkli Termos.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Yeşil Renkli Orman Temalı Termos",
        img:"./images/sesion/Starbucks® Yeşil Renkli Orman Temalı Termos2.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Klasik Seri Termos - Yeşil - Siyah Renkli",
        img:"./images/sesion/Starbucks® Klasik Seri Termos - Yeşil - Siyah Renkli.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Kırmızı Renkli (Peace-Love-Coffee) Tasarımlı Soğuk İçecek Bardağı",
        img:"./images/sesion/Starbucks® Kırmızı Renkli (Peace-Love-Coffee) Tasarımlı Soğuk İçecek Bardağı.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Altın Renkli Soğuk İçecek Bardağı",
        img:"./images/sesion/Starbucks® Altın Renkli Soğuk İçecek Bardağı.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Kırmızı Renkli Termos",
        img:"./images/sesion/Starbucks® Kırmızı Renkli Termos.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Yeşil Renkli Termos",
        img:"./images/sesion/Starbucks® Yeşil Renkli Termos.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Mat Kırmızı Renkli Termos",
        img:"./images/sesion/Starbucks® Mat Kırmızı Renkli Termos.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Yeşil Renkli Termos",
        img:"./images/sesion/Starbucks® Yeşil Renkli Termos2.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® 50. Yıl Özel Seri Soğuk İçecek Termosu - Altın Siyah Renkli",
        img:"./images/sesion/Starbucks® 50. Yıl Özel Seri Soğuk İçecek Termosu - Altın Siyah Renkli.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® 50. Yıl Özel Seri Kupa - Koyu Yeşil Renkli",
        img:"./images/sesion/Starbucks® 50. Yıl Özel Seri Kupa - Koyu Yeşil Renkli....jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® 50. Yıl Özel Seri Kupa - Koyu Yeşil Renkli Paslanmaz Çelik",
        img:"./images/sesion/Starbucks® 50. Yıl Özel Seri Kupa - Koyu Yeşil Renkli Paslanmaz Çelik.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Pembe Renkli Termos",
        img:"./images/sesion/Starbucks® Pembe Renkli Termos2.jpg",
        category:"bottle",


    },
    {
        id:"",
        title:"Starbucks® Sarı Renkli Termos",
        img:"./images/sesion/Starbucks® Sarı Renkli Termos.jpg",
        category:"bottle",


    },
]

const displaySesion = document.querySelector(".sesion")

window.addEventListener("DOMContentLoaded",function(){
    eBottle(sesion)
})

function eBottle(item){
    let sesions = item.map(function(choose){
        return` 
        <article class="article-item"  >    
        <a href="${choose.id}" >
          <img src="${choose.img}" alt="${choose.img}" class="photo" >
      </a>
          <div class="article-info">
                 
                  <h4 class="itemName">${choose.title}</h4>
                  <h4 class="price">15.99</h4>
          </div>
          <p class="article-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
          </p>         
      </article>      
        `
    })
    sesions = sesions.join("")
    displaySesion.innerHTML = sesions
}