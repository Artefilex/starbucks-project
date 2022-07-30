const snack = [
    {
        id: "",
        title: "Mini Cookies",
        img: "./images/snack/Mini Cookies.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Mini Brownies",
        img: "./images/snack/Mini Brownies.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Peynirli Kraker",
        img: "./images/snack/Peynirli Kraker.jpg",
        category: "eat",
    },
 
    {
        id: "",
        title: "Biberiyeli Kraker",
        img: "./images/snack/Biberiyeli Kraker.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Starbucks Caramel Waffle",
        img: "./images/snack/Starbucks Caramel Waffle.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Starbucks Sütlü Para Çikolata",
        img: "./images/snack/Starbucks Sütlü Para Çikolata.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Starbucks Sütlü Çikolata",
        img: "./images/snack/Starbucks Sütlü Çikolata.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Starbucks Bitter Çikolata",
        img: "./images/snack/Starbucks Bitter Çikolata.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Glutensiz Bitter Çikolatalı Brownie",
        img: "./images/snack/Glutensiz Bitter Çikolatalı Brownie.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Starbucks Çikolatalı Glutensiz Kurabiye",
        img: "./images/snack/Starbucks Çikolatalı Glutensiz Kurabiye.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Glutensiz Chia Tohumlu Grissini",
        img: "./images/snack/Glutensiz Chia Tohumlu Grissini.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Eti Wafe'up Gofret",
        img: "./images/snack/Eti Wafe'up Gofret.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Fellas Hindistan Cevizli ve Kakaolu Protein Bar",
        img: "./images/snack/Fellas Hindistan Cevizli ve Kakaolu Protein Bar.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "ZBARZ Yer Fıstıklı Protein Bar",
        img: "./images/snack/ZBARZ Yer Fıstıklı Protein Bar.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Karışık Kuruyemiş ve Kuru Meyve Karışımı",
        img: "./images/snack/Karışık Kuruyemiş ve Kuru Meyve Karışımı.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Çiğ Badem",
        img: "./images/snack/Çiğ Badem.jpg",
        category: "eat",
    },
    {
        id: "",
        title: "Starbucks® Cookie Straw (Gofret Pipet)",
        img: "./images/snack/Starbucks® Cookie Straw (Gofret Pipet).jpg",
        category: "eat",
    },
  
 
]

const displaySnack = document.querySelector(".snack")
window.addEventListener("DOMContentLoaded",function(){
    eSnack(snack)
})
function eSnack(item){
    let snacks = item.map(function(choose){
        return `
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

    snacks = snacks.join("")
    displaySnack.innerHTML = snacks
}