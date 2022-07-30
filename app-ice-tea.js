const ice = [
    {
        id: 1,
        title: "Iced Black Tea",
        category: "coffe",
        img: "./images/ice-tea/Iced Black Tea.jpg",

    },
    {
        id: 2,
        title: "Iced Black Tea & Lemonade",
        category: "coffe",
        img: "./images/ice-tea/Iced Black Tea & Lemonade.jpg",

    },
    {
        id: 3,
        title: "Iced Green Tea",
        category: "coffe",
        img: "./images/ice-tea/Iced Green Tea.jpg",

    },
    {
        id: 4,
        title: "Iced Green Tea & Lemonade",
        category: "coffe",
        img: "./images/ice-tea/Iced Green Tea & Lemonade.jpg",

    },
]

const displayIceTea = document.querySelector(".ice-tea")

window.addEventListener("DOMContentLoaded",function(){
    cIceTea(ice)
})

function cIceTea (item){
    let iceTea = item.map(function(chosee){
        return `
   
        
        <article class="article-item">
           
        <a href="${chosee.id}" >
                <img src="${chosee.img}"  alt="${chosee.img}" class="photo" >
                </a>
            <div class="article-info">
               
                    <h4 class="itemName">${chosee.title}</h4>
                    <h4 class="price">15$</h4>
                    
                  
            </div>
            <p class="article-text">
            lorem5
            </p>         
        </article>
     `
    })

    iceTea = iceTea.join("")
    displayIceTea.innerHTML = iceTea
}