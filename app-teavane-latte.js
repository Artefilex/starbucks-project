const teavanaLatte = [
    {
        id: 1,
        title: "Chai Tea Latte",
        category: "coffe",
        img:"./images/teavana-latte/Chai Tea Latte.jpg",
    },
    {
        id: 2,
        title: "Buzlu Chai Tea Latte",
        category: "coffe",
        img:"./images/teavana-latte/Buzlu Chai Tea Latte.jpg",
    },
]

const displayTeavanaLatte = document.querySelector(".teavana-latte")

window.addEventListener("DOMContentLoaded",function(){
    cTeavanaLatte(teavanaLatte)

})

function cTeavanaLatte (item){
    let teavanaLattes = item.map(function(chosee){
        return `  <article class="article-item "  >    
        <a href="${chosee.id}" >
          <img src="${chosee.img}" alt="${chosee.img}" class="photo" >
      </a>
          <div class="article-info">
                 
                  <h4 class="itemName">${chosee.title}</h4>
                  <h4 class="price">15.99</h4>
          </div>
          <p class="article-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
          </p>         
      </article>      
        `

    })
    teavanaLattes = teavanaLattes.join("")
    displayTeavanaLatte.innerHTML = teavanaLattes 
}