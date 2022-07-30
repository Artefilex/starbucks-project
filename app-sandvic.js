const sandvic =[
    {
        id:"",
        title: "Peynirli Mücver Sandviç",
        img:"./images/sandvic/Peynirli Mücver Sandviç.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Füme Etli Jambonlu Açma Sandviç",
        img:"./images/sandvic/Füme Etli Jambonlu Açma Sandviç.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Ezine Peynirli Sandviç",
        img:"./images/sandvic/Ezine Peynirli Sandviç.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Haşhaşlı Üç Peynirli",
        img:"./images/sandvic/Haşhaşlı Üç Peynirli.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Hindi Füme Jambonlu",
        img:"./images/sandvic/Mozzarella Sandviç.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Mozzarella Sandviç",
        img:"./images/sandvic/Mozzarella Sandviç.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Mistik",
        img:"./images/sandvic/Mistik.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Fiesta",
        img:"./images/sandvic/Fiesta.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Reyhanlı Peynirli Tost",
        img:"./images/sandvic/Reyhanlı Peynirli Tost.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Jambonlu Peynirli Tost",
        img:"./images/sandvic/Jambonlu Peynirli Tost.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Çıtır Pane Ciabatta",
        img:"./images/sandvic/Çıtır Pane Ciabatta.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "3 Lezzetli Focaccia",
        img:"./images/sandvic/3 Lezzetli Focaccia.jpg",
        category: "eat",

    },
    {
        id:"",
        title: "Mini Sebze Köfte Ciabatta",
        img:"./images/sandvic/Mini Sebze Köfte Ciabatta.jpg",
        category: "eat",

    },
 
]

const displaySandvic = document.querySelector(".sandvic")

window.addEventListener("DOMContentLoaded",function(){
    eSandvic(sandvic)
})

function eSandvic(item){
    let sanvdics = item.map(function(choose){
        return` 
        <article class="article-item"  >    
        <a href="${choose.id}" >
          <img src="${choose.img}" alt="${choose.img}" class="photo" >
      </a>
          <div class="article-info">
                 
                  <h4 class="itemName">${choose.title}</h4>
                  <h4 class="price">15.99</h4>
          </div>
          <p class="article-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
          </p>         
      </article>      
        `
    })
    sanvdics = sanvdics.join("")
    displaySandvic.innerHTML = sanvdics
}