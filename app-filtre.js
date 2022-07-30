const filtre= [
    {
    id:1,
    title: "filtre kahve",
    category: "coffe",
    img: "./images/filtre/Filtre Kahve.jpg",
    },
    {
    id: 2,
    title: "Caffè Misto",
    category: "coffe",
    img: "./images/filtre/Caffè Misto.jpg",
    },
    {
    id: 3,
    title: "Cold Brew",
    category: "coffe",
    img: "./images/filtre/Cold Brew.jpg",
    },
    {
    id: 4,
    title: "Cold Brew Latte",
    category: "coffe",
    img: "./images/filtre/Cold Brew Latte.jpg",
    },
    
]


const displayFiltre = document.querySelector(".filtre")

window.addEventListener("DOMContentLoaded",function(){
   cFilter(filtre)
})

function cFilter(item){
    let filters = item.map(function(chosse){
        return `
        <article class="article-item"  >    
        <a href="#" >
          <img src="${chosse.img}" alt="${chosse.img}" class="photo" >
      </a>
          <div class="article-info">
                 
                  <h4 class="itemName">${chosse.title}</h4>
                  <h4 class="price">15.99</h4>
          </div>
          <p class="article-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
          </p>         
      </article>      
        `
    })
   filters= filters.join("")
    displayFiltre.innerHTML= filters
}