const dem = [
    {   ids: 1,
        id:"/drink/alt/xs.html",
        title:"Coffee Press",
        img:"./images/demleme/Coffee Press.jpg",
        category:"equipment"
    },
    {
        id:"xs.html",
        title:"Pour Over",
        img:"./images/demleme/Pour Over.jpg",
        category:"equipment"
    },
    {
        id:"",
        title:"Chemex",
        img:"./images/demleme/Chemex.jpg",
        category:"equipment"
    },
]

const displayDemleme = document.querySelector(".dem")

window.addEventListener("DOMContentLoaded",function(){
    bDem(dem)
})

function bDem(item){
    let dems = item.map(function(choose){
        return `
        <article class="article-item "  >    
        <a href="${choose.id}" >
          <img src="${choose.img}" alt="${choose.img}" class="photo" >
      </a>
          <div class="article-info">
                 
                  <h4 class="itemName">${choose.title} </h4>
                  <h4 class="price">15.99</h4>
          </div>
          <p class="article-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
          </p>         
      </article>
        `
    })
    dems = dems.join("")
    displayDemleme.innerHTML = dems
}