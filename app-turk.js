const turk = [
    {
        id:1,
        title:"türk kahvesi",
        img: "./images/turk-coffe/turk coofe.jpg",
        category: "coffe" ,
    },
    {
        id:2,
        title:" duble türk kahvesi",
        img: "./images/turk-coffe/duble turk kahvesi.jpg",
        category: "coffe" ,
    },

]

const displayTurk = document.querySelector(".turk")

window.addEventListener("DOMContentLoaded",function(){
    cTurk(turk)
})

function cTurk (item){
    let turks = item.map(function(chosse){
        return `
        <article class="article-item"  >    
        <a href="#" >
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
    turks = turks.join("")

    displayTurk.innerHTML= turks

}