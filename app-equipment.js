const equipment = [
    { 
        id:"",
        title: "Starbucks® Klasik Seri Desenli Termos - Yeşil Renkli 473ml",
        img:"./images/equipment/Starbucks® Klasik Seri Desenli Termos - Yeşil Renkli 473ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Mat Siyah Renkli 473ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Mat Siyah Renkli 473ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Parıltılı Yeşil Renkli 473ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Parıltılı Yeşil Renkli 473ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Yeşil - Siyah Renkli 473ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Yeşil - Siyah Renkli 473ml.jpg",
        category:"",

    },

    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Yeşil Renkli 355ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Yeşil Renkli 355ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Gri-Yeşil Renkli 473ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Gri-Yeşil Renkli 473ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Soğuk İçecek Bardağı-Mermer Efektli 473ml",
        img:"./images/equipment/Starbucks® Klasik Seri Soğuk İçecek Bardağı-Mermer Efektli 473ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Soğuk İçecek Bardağı-Metalik Yeşil 473ml",
        img:"./images/equipment/Starbucks® Klasik Seri Soğuk İçecek Bardağı-Metalik Yeşil 473ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Mat Yeşil - Siyah Renkli 355ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Mat Yeşil - Siyah Renkli 355ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Soğuk İçecek Bardağı-Şeffaf 710 ml",
        img:"./images/equipment/Starbucks® Klasik Seri Soğuk İçecek Bardağı-Şeffaf 710 ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Yeşil Renkli 444ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Yeşil Renkli 444ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Yarı saydam Yeşil Renkli 355ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Yarı saydam Yeşil Renkli 355ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Kupa - Gri 89ml",
        img:"./images/equipment/Starbucks® Klasik Seri Kupa - Gri 89ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Kupa - Gri 355ml",
        img:"./images/equipment/Starbucks® Klasik Seri Kupa - Gri 355ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Klasik Seri Termos - Koyu Yeşil Renkli 591ml",
        img:"./images/equipment/Starbucks® Klasik Seri Termos - Koyu Yeşil Renkli 591ml.jpg",
        category:"",

    },
    { 
        id:"",
        title: "Starbucks® Reusable Cup",
        img:"./images/equipment/Starbucks® Reusable Cup.jpg",
        category:"",

    },


]

const displayEquiment = document.querySelector(".always")

window.addEventListener("DOMContentLoaded",function(){
    cEquipment(equipment)
})

function cEquipment (item){
    let equipments = item.map(function(choose){
        return`
        <article class="article-item "  >    
        <a href="${choose.id}" >
          <img src="${choose.img}" alt="${choose.img}" class="photo" >
      </a>
          <div class="article-info">
                 
                  <h4 class="itemName">${choose.title}/h4>
                  <h4 class="price">15.99</h4>
          </div>
          <p class="article-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente?
          </p>         
      </article>      `
    })
    equipments = equipments.join("")
    displayEquiment.innerHTML = equipments
}