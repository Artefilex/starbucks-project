const olive = [
    {
        id:"xs.html",
        title:"Zeytinli Açma",
        img: "./images/kahvaltı/Zeytinli Açma.jpg",
        category:"eat",
        
    },
    {
        id:"",
        title:"Tahıllı Peynirli Poğaça",
        img: "./images/kahvaltı/Tahıllı Peynirli Poğaça.jpg",
        category:"eat",
        
    },
    {
        id:"",
        title:"Tulum Peynirli Domatesli Poğaça",
        img: "./images/kahvaltı/Tulum Peynirli Domatesli Poğaça.jpg",
        category:"eat",
        
    },
    {
        id:"",
        title:"Karabuğdaylı Fit Poğaça",
        img: "./images/kahvaltı/Karabuğdaylı Fit Poğaça.jpg",
        category:"eat",
        
    },
    {
        id:"",
        title:"Peynirli Simit",
        img: "./images/kahvaltı/Peynirli Simit.jpg",
        category:"eat",
        
    },
    {
        id:"",
        title:"Balkan Çöreği",
        img: "./images/kahvaltı/Balkan Çöreği.jpg",
        category:"eat",
        
    },
    {
        id:"",
        title:"Çikolatalı Kruvasan",
        img: "./images/kahvaltı/Çikolatalı Kruvasan.jpg",
        category:"eat",
        
    },
    {
        id:"",
        title:"Peynirli Kruvasan",
        img: "./images/kahvaltı/Peynirli Kruvasan.jpg",
        category:"eat",
        
    },
]
const cooki =[
    {
        id:"",
        title:"Fındıklı ve Kakaolu Kurabiye",
        img: "./images/kahvaltı/Fındıklı ve Kakaolu Kurabiye.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Dopdolu Fit Cookie",
        img: "./images/kahvaltı/Dopdolu Fit Cookie.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Triple Chocolate Cookie",
        img: "./images/kahvaltı/Triple Chocolate Cookie.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Misto Cookie",
        img: "./images/kahvaltı/Misto Cookie.jpg",
        category:"eat",
    },
] 
const muffin = [
    {
        id:"",
        title:"Starbucks Brownie",
        img: "./images/kahvaltı/Starbucks Brownie.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Limonlu Kek",
        img: "./images/kahvaltı/Limonlu Kek.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Mozaik Kek",
        img: "./images/kahvaltı/Mozaik Kek.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Very Berry Muffin",
        img: "./images/kahvaltı/Very Berry Muffin.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Belçika Çikolatalı Muffin",
        img: "./images/kahvaltı/Belçika Çikolatalı Muffin.jpg",
        category:"eat",
    },

]
const cake = [
    {
        id:"",
        title:"Limonlu Cheesecake",
        img: "./images/kahvaltı/Limonlu Cheesecake.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Brownie Cheesecake",
        img: "./images/kahvaltı/Brownie Cheesecake.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Ahududulu Cheesecake",
        img: "./images/kahvaltı/Ahududulu Cheesecake.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Mozaik Pasta",
        img: "./images/kahvaltı/Mozaik Pasta.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Belçika Çikolatalı Pasta",
        img: "./images/kahvaltı/Belçika Çikolatalı Pasta.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Kahveli Pasta",
        img: "./images/kahvaltı/Kahveli Pasta.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Kremalı Havuçlu Kek",
        img: "./images/kahvaltı/Kremalı Havuçlu Kek.jpg",
        category:"eat",
    },
    {
        id:"",
        title:"Tiramisu",
        img: "./images/kahvaltı/Tiramisu.jpg",
        category:"eat",
    },
    
]

// let testbytest = document.getElementById("testByTest").classList= function(){
//     sessionStorage.setItem("testBy", JSON.stringify(olive))
//     window.location.href="xs.html"
// }
const displayCookies = document.querySelector(".cookie")
const displayOlives = document.querySelector(".olives")
const displayMuffin = document.querySelector(".muffin")
const displayCake = document.querySelector(".cake")

window.addEventListener("DOMContentLoaded",function(){
    eMuffin(muffin)
})
window.addEventListener("DOMContentLoaded",function(){
    eOlive(olive)
})
window.addEventListener("DOMContentLoaded",function(){
    eCookie(cooki)
})
window.addEventListener("DOMContentLoaded",function(){
    eCake(cake)
})

// function
function eCake (item){
    let cakes = item.map(function(choose){
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

    cakes =  cakes.join("")
    displayCake.innerHTML=  cakes
}
function eCookie (item){
    let cookies = item.map(function(choose){
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

   cookies =  cookies.join("")
    displayCookies.innerHTML=  cookies
}
function eMuffin (item){
    let muffins = item.map(function(choose){
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

   muffins =   muffins.join("")
    displayMuffin.innerHTML= muffins
}
function eOlive (item){
    let olives = item.map(function(choose){
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

    olives = olives.join("")
    displayOlives.innerHTML= olives
}

