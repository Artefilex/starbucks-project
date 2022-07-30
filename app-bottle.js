const bottle = [
    {
        id:"",
        title:"Feel More Nar Suyu",
        img:"./images/bottle/Feel More Nar Suyu.jpg",
        category:"coffe",

},
{
    id:"",
    title:"Feel More Karışık Meyve Suyu",
    img:"./images/bottle/Feel More Karışık Meyve Suyu.jpg",
    category:"",

},
{
    id:"",
    title:"Feel More Üzüm Suyu",
    img:"./images/bottle/Feel More Üzüm Suyu.jpg",
    category:"",

},
{
    id:"",
    title:"Feel More Limonata",
    img:"./images/bottle/Feel More Limonata.jpg",
    category:"",

},
{
    id:"",
    title:"S.Pellegrino",
    img:"./images/bottle/S.Pellegrino.jpg",
    category:"",

},
{
    id:"",
    title:"San Pellegrino Limonlu Gazlı İçecek",
    img:"./images/bottle/San Pellegrino Limonlu Gazlı İçecek.jpg",
    category:"",

},
{
    id:"",
    title:"San Pellegrino Portakallı Gazlı İçecek",
    img:"./images/bottle/San Pellegrino Portakallı Gazlı İçecek.jpg",
    category:"",

},
{
    id:"",
    title:"Akmina Mineralli Su",
    img:"./images/bottle/Akmina Mineralli Su.jpg",
    category:"",

},
{
    id:"",
    title:"Su",
    img:"./images/bottle/Su.jpg",
    category:"",

},
]

const displayBottle = document.querySelector(".bottle")

window.addEventListener("DOMContentLoaded", function(){
    cbottle(bottle)
})

function cbottle ( item){
    let bottles = item.map(function(chosse){
        return`
        <article class="article-item"  >    
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
    bottles = bottles.join("")
    displayBottle.innerHTML = bottles
}