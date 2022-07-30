const via = [
    {
        id:"",
        title: "",
        img:"./images/via/VIA® Colombia.jpg",
        category:"coffe",

    },
    {
        id:"",
        title: "VIA® Italian Roast",
        img:"./images/via/VIA® Italian Roast.jpg",
        category:"coffe",

    }
]

const displayVia = document.querySelector(".via")

window.addEventListener("DOMContentLoaded", function(){
    cVia(via)
})

function cVia (item){
    let vias = item.map(function(choose){
        return `
        <article class="article-item "  >    
        <a href="${choose.id}" >
          <img src="${choose.img}" alt="${choose.img}" class="photo" >
      </a>
          <div class="article-info">
                 
                  <h4 class="itemName">${choose.title}/h4>
                  <h4 class="price">15.99</h4>
          </div>
          <p class="article-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
          </p>         
      </article>      
        `
    })
    vias = vias.join("")
    displayVia.innerHTML = vias


}