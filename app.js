const menu= [
  {
    id: "expresso.html",
    title: "Espresso Bazlı İçecekler",
    category: "coffe",
    img: "./images/first/1.jpg",
       
  },
  {
    id: "filtre.html",
    title: "Filtre kahveler",
    category: "coffe",
    img: "./images/first/filtre.jpg",
    
  },
  {
    id: "turk-coffe.html",
    title: "türk kahvesi",
    category: "coffe",
    img: "./images/first/turk.jpg",
    
  },
  {
    id: "st-refresha.html",
    title: "Starbucks Refresha® Drinks",
    category: "coffe",
    img: "./images/first/starbucks-r.jpg",
    
  },
  {
    id: "tevana.html",
    title: " Teavana™ Sıcak Çaylar",
    category: "coffe",
    img: "./images/first/sıcak-tea.jpg",
    
  },
  {
    id: "teavana-latte.html",
    title: " Teavana™ tea latte",
    category: "coffe",
    img: "./images/first/latte-t.jpg",
    
  },
  {
    id: "ice-tea.html",
    title: " buzlu Çaylar",
    category: "coffe",
    img: "./images/first/buzlu.jpg",
    
  },
  {
    id: "frappuccino.html",
    title: "Frappuccino® Karışım İçecekler",
    category: "coffe",
    img: "./images/first/frapp.jpg",
    
  },
  {
    id: "hot-chocolate.html",
    title: " Sıcak çikolatalar",
    category: "coffe",
    img: "./images/first/sıcak-c.jpg",
    
  },
  {
    id: "bottle.html",
    title: " şişelenmiş içecekler",
    category: "coffe",
    img: "./images/first/soda.jpg",
    
  },
 
]
const eat =[
  {
    id: "olives.html",
    title: "fırından",
    category: "food",
    img: "./images/first/fırın.jpg",
    
  },
  {
    id: "sandvic.html"  ,
    title: "sandviçler",
    category: "food",
    img: "./images/first/sand.jpg",
    
  },
  {
    id: "salat.html",
    title: "Salata Ve Parfeler",
    category: "food",
    img: "./images/first/salat.jpg",
    
  },
  {
    id: "snack.html",
    title: "fırından",
    category: "atıştırmalıklar",
    img: "./images/first/atıs.jpg",
    
  },
 
]
const menu2 =[
  {
    id:"bean-coffee.html",
    title: "çekirdek kahveler",
    category: "coffe",
    img: "./images/first/coffes.jpg",
    
  },
  {
    id:"via.html",
    title: "VIA",
    category: "VIA",
    img: "./images/first/via.jpg",
    
  },
  

]
const tea =[
  {id:"box.html",
  title: "kutu çaylar",
  category: "tea",
  img: "./images/first/box.jpg",},

  
]
const menu3 =[
  {id:"equipment.html",
    title: "her zaman seninle",
    category: "materiel",
    img: "./images/first/always.jpg",
  },
  {id:"sesion.htm",
    title: "sezon ürünleri",
    category: "materiel",
    img: "./images/first/session.jpg",
  },
  {id:"city.html",
    title: "temalı ürünler",
    category: "materiel",
    img: "./images/first/city.jpg",
  },
  {id:"dem.html",
    title: "demleme ekipmanları",
    category: "materiel",
    img: "./images/first/dem.jpg",
  },
  {id:"method.html",
    title: "demleme yötemleri",
    category: "materiel",
    img: "./images/first/dem2.jpg",
  },
]

const articleTea = document.querySelector(".list3")
const article3 = document.querySelector(".list4")
const articleFood = document.querySelector(".list1")
const article2 = document.querySelector(".list2")
const articleCenter = document.querySelector(".article-center");

window.addEventListener("DOMContentLoaded",function(){
  displayİtem2(menu3)
})
window.addEventListener("DOMContentLoaded",function(){
  disTea(tea)
})

window.addEventListener("DOMContentLoaded",function(){
 item1(menu2)
})
window.addEventListener("DOMContentLoaded",function(){
  drinks(menu);
})
// window.addEventListener("DOMContentLoaded",function(){
//   drinksa(menu);
// })
window.addEventListener("DOMContentLoaded", function(){
  eats(eat);
})
function displayİtem2(item3){
  let disPItem2 = item3.map(function(chosse3){
    return `
    <article class="article-item">
          
           
    <img src="${chosse3.img}" alt="${chosse3.img}" class="photo" >

       <div class="article-info">
         <h4 class="itemName">${chosse3.title}</h4>
         <h4 class="price">15$</h4>
         </div>
       <p class="article-text"> lorem5 </p>         
    </article>

    `
  })
  disPItem2 = disPItem2.join("")
  article3.innerHTML= disPItem2
}

function disTea(items2){
  let disTea = items2.map(function(chosse2){
    return `
    <article class="article-item">
          
           
    <img src="${chosse2.img}" alt="${chosse2.img}" class="photo" >

       <div class="article-info">
         <h4 class="itemName">${chosse2.title}</h4>
         <h4 class="price">15$</h4>
         </div>
       <p class="article-text"> lorem5 </p>         
    </article>
    `
  })
  disTea = disTea.join("");
  articleTea.innerHTML = disTea;
}

function item1(items){
  let item2 = items.map(function(chosse){
    return `
    <article class="article-item">
          
           
    <img src="${chosse.img}" alt="${chosse.img}" class="photo" >

<div class="article-info">
   
        <h4 class="itemName">${chosse.title}</h4>
        <h4 class="price">15$</h4>
      
</div>
<p class="article-text">
lorem5
</p>         
</article>
    `
    
  })
  item2= item2.join("")
  article2.innerHTML = item2;
}

function eats(ate){
  let eAt = ate.map(function(art){
    return `
    <article class="article-item">    
    <img src="${art.img}" alt="${art.img}" class="photo" >
<div class="article-info">
    
        <h4 class="itemName">${art.title}</h4>
        <h4 class="price">15.99</h4>
</div>
<p class="article-text">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
</p>         
</article>      
    `
  

  })
  eAt = eAt.join("");
  articleFood.innerHTML= eAt;
}
function drinks(menuItems){
  let displayMenu = menuItems.map(function (item){
    return `
   
        
        <article class="article-item">
           
        <a href="${item.id}" >
                <img src="${item.img}"  alt="${item.img}" class="photo" >
                </a>
            <div class="article-info">
               
                    <h4 class="itemName">${item.title}</h4>
                    <h4 class="price">15$</h4>
                    
                  
            </div>
            <p class="article-text">
            lorem5
            </p>         
        </article>
     `
  })
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  articleCenter.innerHTML = displayMenu;
}

module.exports = {
  doSomething: function() {
    return Math.random()
  },

  anotherOne: function() {
    return Math.random()
  }
};