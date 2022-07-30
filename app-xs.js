const news = [
    { 
        img: "csasc",
        title: "sasas",
        text: "sasa",
        id:"sasa",

    }
]

const displayNews = document.querySelector(".coffe-club")

window.addEventListener("DOMContentLoaded",function(){
    getLAst(news)
})

function getLAst(item){
    let newss = item.map(function(choose){
        return` <div class="coffe-last">
        <div class="coffe-inside">
         <button class=" btn-text"> <span> < </span> ${choose.title} </button>
         <div class="text-area">
             
            <h2> ${choose.title}.</h2>
             <p>
             ${choose.title}
             </p>
             
             <i class="fa-thin fa-circle-heart"></i>
         </div>
        </div>
     </div>
  <div class="new-comment">
     <div class="img-favorite">   
         <img src="./images/bean/Caffé Verona.jpg" alt="" width="400px" height="400px" >
     </div> 
        <div class="btn-comment">
             <button type="button"  class="btn-like">
                 <img src="./images/heart (2).png" alt="./images"  width="1rem" height="1.5rem" >
 
             </button>
                     
            
             <span class="span-comment" style=" font-weight: bold; display: inline-block;;">${choose.title}
                 <span>favorilerinize ekleyin</span></span>
         </div>

        `
    })
    newss = newss.join("")
    displayNews.innerHTML = newss
}