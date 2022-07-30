const refresha =[
    {
        id: "1",
        title: "Cool Lime Starbucks Refresha® Drink",
        category: "coffe",
        img: "./images/st-refresha/Cool Lime Starbucks Refresha® Drink.jpg ",
           

    },
    {
        id: "2",
        title: "Berry Hibiscus Starbucks Refresha® Drink",
        category: "coffe",
        img: "./images/st-refresha/Berry Hibiscus Starbucks Refresha® Drink.jpg",
           

    },
    {
        id: "3",
        title: "Strawberry Açai Starbucks Refresha® Drink.jpg",
        category: "coffe",
        img: "./images/st-refresha/Strawberry Açai Starbucks Refresha® Drink.jpg",
           

    },
]

const displayRefresha = document.querySelector(".refresh")

window.addEventListener("DOMContentLoaded",function(){
    cRefresha(refresha)
})

function cRefresha (item){
    let refreshas = item.map(function(chosee){
        return` 
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
    refreshas = refreshas.join("")
    displayRefresha.innerHTML = refreshas
}