const hotChocolate = [
    {
        id: "",
        title:"Signature Hot Chocolate",
        category: "coffe",
        img:"./images/hot-chocolate/Signature Hot Chocolate.jpg",

    },
    {
        id: "",
        title:"Signature Caramel Hot Chocolate",
        category: "coffe",
        img:"./images/hot-chocolate/Signature Caramel Hot Chocolate.jpg",

    },
    {
        id: "",
        title:"Signature Hazelnut Hot Chocolate",
        category: "coffe",
        img:"./images/hot-chocolate/Signature Hazelnut Hot Chocolate.jpg",

    },
    {
        id: "",
        title:"Classic Hot Chocolate",
        category: "coffe",
        img:"./images/hot-chocolate/Classic Hot Chocolate.jpg",

    },
    {
        id: "",
        title:"White Hot Chocolate",
        category: "coffe",
        img:"./images/hot-chocolate/White Hot Chocolate.jpg",

    },
]   

const displayHotChocolate = document.querySelector(".chocolate")

window.addEventListener("DOMContentLoaded",function(){
    cHotChocolate(hotChocolate)
})

function cHotChocolate (item){
    let hotChocolates = item.map(function(chosse){
        return ` <article class="article-item"  >    
        <a href="${chosse.id}" >
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
    hotChocolates = hotChocolates.join("")
    displayHotChocolate.innerHTML = hotChocolates
}