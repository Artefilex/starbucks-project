const latte= [
    {
        id: 1,
        title: "caffe latte",
        category: "coffe",
        img: "./images/expersso/coffe-latte.jpg",

    },
    {
        id: 2,
        title: "buzlucaffe latte",
        category: "coffe",
        img: "./images/expersso/buzlu-caffe-latte.jpg",

    },
    {
        id: 3,
        title: "flat white",
        category: "coffe",
        img: "./images/expersso/flat-white.jpg",

    },
    {
        id: 4,
        title: "Ristretto Bianco",
        category: "coffe",
        img: "./images/expersso/Ristretto-Bianco.jpg",

    },
    {
        id: 5,
        title: "Gingerbread Latte",
        category: "coffe",
        img: "./images/expersso/Gingerbread Latte.jpg",

    },
    {
        id: 6,
        title: "Buzlu Gingerbread Latte",
        category: "coffe",
        img: "./images/expersso/Buzlu Gingerbread Latte.jpg",

    },
    {
        id: 7,
        title: "Chocolatey Gingerbread Latte",
        category: "coffe",
        img: "./images/expersso/Chocolatey Gingerbread Latte.jpg",

    },
    {
        id: 8,
        title: "Cortado",
        category: "coffe",
        img: "./images/expersso/Cortado.jpg",

    },
   
  ]
  const mocca = [
    {
        id: 1,
        title: "Caffè Mocha",
        category: "coffe",
        img: "./images/expersso/Caffè Mocha.jpg",

    },

    {
        id: 2,
        title: " buzlu Caffè Mocha",
        category: "coffe",
        img: "./images/expersso/Buzlu Caffè Mocha.jpg",

    }, 
    {
        id: 3,
        title: " White Chocolate Mocha",
        category: "coffe",
        img: "./images/expersso/White Chocolate Mocha.jpg",

    },
    {
        id: 4,
        title: "buzlu White Chocolate Mocha",
        category: "coffe",
        img: "./images/expersso/Buzlu White Chocolate Mocha.jpg",

    },
  ]
  const macciato = [
    {
        id: 1,
        title: "Latte Macchiato",
        category: "coffe",
        img: "./images/expersso/Latte Macchiato.jpg",

    }, 
    {
        id: 2,
        title: "Caramel Macchiato",
        category: "coffe",
        img: "./images/expersso/Caramel Macchiato.jpg",

    },
    {
        id: 3,
        title: "Buzlu Caramel Macchiato",
        category: "coffe",
        img: "./images/expersso/Buzlu Caramel Macchiato.jpg",

    },


  ]
  const cappuccino = [
    {
        id: 1,
        title: "  Cappuccino",
        category: "coffe",
        img: "./images/expersso/Cappuccino.jpg",
        
    },
    {
        id: 2,
        title: "Iced Cappuccino",
        category: "coffe",
        img: "./images/expersso/Iced Cappuccino.jpg",
        
    },
  

  ]
  const americano = [
    {
        id: 1,
        title: "Caffè Americano",
        category: "coffe",
        img: "./images/expersso/Caffè Americano.jpg",
        
    },
    {
        id: 2,
        title: "Buzlu Caffè Americano",
        category: "coffe",
        img: "./images/expersso/Buzlu Caffè Americano.jpg",
        
    },
   

  ]
  const espresso = [
    {
        id: 1,
        title: "espresso",
        category: "coffe",
        img: "./images/expersso/Espresso.jpg",
        
    },
    {
        id: 2,
        title: "Espresso Macchiato",
        category: "coffe",
        img: "./images/expersso/Espresso Macchiato.jpg",
        
    },
    {
        id: 3,
        title: "Espresso Con Panna ",
        category: "coffe",
        img: "./images/expersso/Espresso Con Panna.jpg",
        
    },


  ]
  const doubleshot = [
    {
        id: 1,
        title: "Doubleshot™ Iced Shaken Espresso ",
        category: "coffe",
        img: "./images/expersso/Doubleshot™ Iced Shaken Espresso.jpg",
        
    },

  ]

// seçiciler
const expresso = document.querySelector(".expresso")
const displayMocca = document.querySelector(".mocca")
const displayMacciato = document.querySelector(".macciato")
const displayCappuccino = document.querySelector(".cappuccino")
const displayAmericano = document.querySelector(".americano")
const displayEspresso = document.querySelector(".espresso ")
const displayDoubleshot = document.querySelector(".doubleshot")


// eventler

  window.addEventListener("DOMContentLoaded",function(){
    cLatte(latte)
  })
 window.addEventListener("DOMContentLoaded",function(){
   cMocca(mocca)
 })
 window.addEventListener("DOMContentLoaded",function(){
    cMaciato(macciato)
  })
  window.addEventListener("DOMContentLoaded",function(){
    cCappuccino(cappuccino)
  })
  window.addEventListener("DOMContentLoaded",function(){
    cAmericano(americano)
  })
  window.addEventListener("DOMContentLoaded",function(){
    cEspresso(espresso)
  })
  window.addEventListener("DOMContentLoaded",function(){
    cDoubleshot(doubleshot)
  })
   
//   function

function cLatte(item){
    let lattes = item.map(function(chosse){

        return `  <article class="article-item "  >    
        <a href="index2.html" >
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

    lattes =lattes.join("")
    expresso.innerHTML =lattes
}

function cMocca(item){
    let moccas = item.map(function(chosse){
        return `  <article class="article-item "  >    
        <a href="index2.html" >
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

    moccas = moccas.join("")
    displayMocca.innerHTML = moccas
}

function cMaciato(item){
    let maciatos = item.map(function(chosse){
        return `  <article class="article-item "  >    
        <a href="index2.html" >
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

    maciatos = maciatos.join("")
    displayMacciato.innerHTML = maciatos
}

function cCappuccino(item){
    let cappuccinos = item.map(function(chosse){
        return `  <article class="article-item "  >    
        <a href="index2.html" >
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

    cappuccinos = cappuccinos.join("")
    displayCappuccino.innerHTML =cappuccinos
}

function cAmericano(item){
    let americanos = item.map(function(chosse){
        return `  <article class="article-item "  >    
        <a href="index2.html" >
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

    americanos = americanos.join("")
    displayAmericano.innerHTML =americanos
}

function cEspresso(item){
    let espressos = item.map(function(chosse){
        return `  <article class="article-item "  >    
        <a href="index2.html" >
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

    espressos = espressos.join("")
    displayEspresso.innerHTML =espressos
}
function cDoubleshot(item){
    let double = item.map(function(chosse){
        return `  <article class="article-item "  >    
        <a href="index2.html" >
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

    double = double.join("")
    displayDoubleshot.innerHTML =double
}