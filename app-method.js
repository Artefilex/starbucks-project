const method = [
    {
        id:"",
        title:"Coffee Press",
        img:"./images/method/Coffee Press.jpg",
        category:"equipment",
    },
    {
        id:"",
        title:"Pour Over",
        img:"./images/method/Pour Over.jpg",
        category:"equipment",
    },
    {
        id:"",
        title:"Chemex",
        img:"./images/method/Chemex.jpg",
        category:"equipment",
    },
    {
        id:"",
        title:"Syphon",
        img:"./images/method/Syphon.jpg",
        category:"equipment",
    },
    {
        id:"",
        title:"Clover",
        img:"./images/method/Clover.jpg",
        category:"equipment",
    },
  
]

const displayMethod = document.querySelector(".method")
window.addEventListener("DOMContentLoaded",function(){
    cMethod(method)
})

function cMethod(item){
    let methods = item.map(function(choose){
        return `   <article class="article-item "  >    
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
    methods = methods.join("")
    displayMethod.innerHTML = methods
}