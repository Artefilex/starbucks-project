const blonde = [
    {
        id: "./olives.html",
        title:"Starbucks Blonde® Espresso Roast",
        img:"./images/bean/Starbucks Blonde® Espresso Roast.jpg",
        category:"coffe",
    },
    {
        id: "./olives.html",
        title:"Veranda Blend®",
        img:"./images/bean/Veranda Blend®.jpg",
        category:"coffe",
    },
]
const medium= [
    {
        id: "./olives.html",
        title:"Guatemala Antigua",
        img:"./images/bean/Guatemala Antigua.jpg",
        category:"coffe",
    },
    {
        id: "./olives.html",
        title:"",
        img:"./images/bean/.jpg",
        category:"coffe",
    },
    {
        id: "./olives.html",
        title:"Kenya",
        img:"./images/bean/Kenya.jpg",
        category:"coffe",
    },
    {
        id: "./olives.html",
        title:"Pike Place® Roast",
        img:"./images/bean/Pike Place® Roast.jpg",
        category:"coffe",
    },
    {
        id: "",
        title:"Colombia Nariño",
        img:"./images/bean/Colombia Nariño.jpg",
        category:"coffe",
    },
    {
        id: "",
        title:"Ethiopia",
        img:"./images/bean/Ethiopia.jpg",
        category:"coffe",
    },
    {
        id: "",
        title:"House Blend",
        img:"./images/bean/House Blend.jpg",
        category:"coffe",
    },
    {
        id: "",
        title:"Indonesia West Java",
        img:"./images/bean/Indonesia West Java.jpg",
        category:"coffe",
    },
]
const dark= [
    {
        id: 0,
        title:"Starbucks® Espresso Roast",
        img:"./images/bean/Starbucks® Espresso Roast.jpg",
        category:"coffe",
    },
    {
        id: 1,
        title:"Starbucks® Decaf Espresso Roast",
        img:"./images/bean/Starbucks® Decaf Espresso Roast.jpg",
        category:"coffe",
    },
    {
        id: "",
        title:"Sumatra",
        img:"./images/bean/Sumatra.jpg",
        category:"coffe",
    },
    {
        id: "",
        title:"Caffé Verona",
        img:"./images/bean/Caffé Verona.jpg",
        category:"coffe",
    },
]

const displayBlonde = document.querySelector(".blonde")
const displayMedium = document.querySelector(".medium")
const displayDark = document.querySelector(".dark")

window.addEventListener("DOMContentLoaded", function(){
    cBlonde(blonde)
})
window.addEventListener("DOMContentLoaded", function(){
    cMedium(medium)
})
window.addEventListener("DOMContentLoaded", function(){
    cDark(dark)
})


function cBlonde(item){
    let blondes = item.map(function(choose){
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
    blondes = blondes.join("")
    displayBlonde.innerHTML = blondes
}
function cMedium(item){
    let mediums = item.map(function(choose){
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
    mediums = mediums.join("")
    displayMedium.innerHTML = mediums

  
}
function cDark(item){
    let darks = item.map(function(choose){
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
    darks = darks.join("")
    displayDark.innerHTML = darks
   
}