const box = [
    {
        id:"",
        title: "Hibiscus Tea Box",
        img:"./images/box/Hibiscus Tea Box.jpg",
        category:"coffe",

    },
    {
        id:"",
        title: "Mint Blend Tea Box",
        img:"./images/box/Mint Blend Tea Box.jpg",
        category:"coffe",

    },
    {
        id:"",
        title: "Youthberry Tea Box",
        img:"./images/box/Youthberry Tea Box.jpg",
        category:"coffe",

    }
]

const displayBox = document.querySelector(".box")

window.addEventListener("DOMContentLoaded",function(){
    tBox(box)
})

function tBox(item){
    let boxs = item.map(function(choose){
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
          </p>         
      </article>      `
    })
    boxs = boxs.join("")
    displayBox.innerHTML = boxs
}