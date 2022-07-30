const tevana = [
    {
        id: 1,
        title: "English Breakfast",
        category: "tea",
        img: "./images/teavana/English Breakfast.jpg"
    },
    {
        id: 2,
        title: "Earl Grey",
        category: "tea",
        img: "./images/teavana/Earl Grey.jpg"
    },
    {
        id: 3,
        title: "Hibiscus",
        category: "tea",
        img: "./images/teavana/Hibiscus.jpg"
    },
    {
        id: 4,
        title: "Mint Citrust",
        category: "tea",
        img: "./images/teavana/Mint Citrus.jpg"
    },
]

const displayTeavana= document.querySelector(".teavana")

window.addEventListener("DOMContentLoaded",function(){
    cTeavana(tevana)
})

function cTeavana (item){
    let teavanas = item.map(function(chosee){
        return `
        <article class="article-item "  >    
        <a href="${chosee.id}" >
          <img src="${chosee.img} " alt="${chosee.img}" class="photo" >
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

    teavanas = teavanas.join("")
    displayTeavana.innerHTML = teavanas
}

