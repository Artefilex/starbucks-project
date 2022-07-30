const frappuccino = [
    {
        id:"",
        title: "Caramel Frappuccino®",
        category: "Coffee ",
        img:"./images/frappucino/Caramel Frappuccino.jpg",
    },
    {
        id:"",
        title: "Coffee Frappuccino®",
        category: "Coffee",
        img:"./images/frappucino/Coffee Frappuccino.jpg",
    },
    {
        id:"",
        title: "Espresso Frappuccino®",
        category: "Coffee ",
        img:"./images/frappucino/Espresso Frappuccino.jpg",
    },
    {
        id:"",
        title: "Mocha Frappuccino®",
        category: "Coffee ",
        img:"./images/frappucino/Mocha Frappuccino.jpg",
    },
    {
        id:"",
        title: "Java Chip Frappuccino®",
        category: "Coffee ",
        img:"./images/frappucino/Java Chip Frappuccino.jpg",
    },
    {
        id:"",
        title: "White Chocolate Mocha Frappuccino®",
        category: "Coffee ",
        img:"./images/frappucino/White Chocolate Mocha Frappuccino.jpg",
    },
    {
        id:"",
        title: "Toffee Nut Frappuccino®",
        category: "Coffee ",
        img:"./images/frappucino/Toffee Nut Frappuccino.jpg",
    },
    {
        id:"",
        title: "Gingerbread Frappuccino®",
        category: "Coffee ",
        img:"./images/frappucino/Gingerbread Frappuccino.jpg",
    },
    {
        id:"",
        title: "Chocolatey Gingerbread Frappuccino®",
        category: "Coffee",
        img:"./images/frappucino/Chocolatey Gingerbread Frappuccino.jpg",
    },
  

]

const krema = [
    {
        id:"",
        title: "Caramel Cream Frappuccino®",
        category: "Coffee",
        img:"./images/frappucino/Caramel Cream Frappuccino.jpg",
    },
    {
        id:"",
        title: "Vanilla Cream Frappuccino®",
        category: "Coffee",
        img:"./images/frappucino/Vanilla Cream Frappuccino.jpg",
    },
    {
        id:"",
        title: "Chocolate Cream Frappuccino®",
        category: "Coffee",
        img:"./images/frappucino/Chocolate Cream Frappuccino.jpg",
    },
    {
        id:"",
        title: "Java Chip Chocolate Cream Frappuccino®",
        category: "Coffee",
        img:"./images/frappucino/Java Chip Chocolate Cream Frappuccino.jpg",
    },
    {
        id:"",
        title: "Chai Cream Frappuccino®",
        category: "Coffee",
        img:"./images/frappucino/Chai Cream Frappuccino.jpg",
    },
    {
        id:"",
        title: "Strawberries & Cream Frappuccino®",
        category: "Coffee",
        img:"./images/frappucino/Strawberries & Cream Frappuccino.jpg",
    },

]

const displayFrappuccino= document.querySelector(".frappuccino")
const displayKremali= document.querySelector(".kremali")

window.addEventListener("DOMContentLoaded",function(){
    cFrappuccino(frappuccino)
})
window.addEventListener("DOMContentLoaded",function(){
    cKrema(krema)
})

function cFrappuccino (item){
    let frappucinos = item.map(function(chosse){
        return `<article class="article-item "  >    
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
    frappucinos = frappucinos.join("")
    displayFrappuccino.innerHTML = frappucinos
}

function cKrema (item){
    let kremas = item.map(function(chosse){
        return `<article class="article-item "  >    
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
    kremas = kremas.join("")
    displayKremali.innerHTML = kremas
}