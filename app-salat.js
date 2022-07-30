const salat = [
    {
        id:"",
        title: "Izgara Tavuklu Salata",
        img: "./images/salat/Izgara Tavuklu Salata.jpg",
        category:"eat",
    },
    {
        id:"",
        title: "Kinoalı Salata",
        img: "./images/salat/Kinoalı Salata.jpg",
        category:"eat",
    },

    {
        id:"",
        title: "Meyveli ve Yoğurtlu Parfe",
        img: "./images/salat/Meyveli ve Yoğurtlu Parfe.jpg",
        category:"eat",
    },


]

const displaySalat= document.querySelector(".salat")

window.addEventListener("DOMContentLoaded",function(){
    eSalat(salat)
})

function eSalat (item){
    let salats = item.map(function(choose){
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
      </article>    `
    })
    salats = salats.join("")
    displaySalat.innerHTML = salats
}