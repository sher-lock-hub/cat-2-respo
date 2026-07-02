const categories =[
    {name: "Earrings",
    image:"images/earrings.jpeg",
    link:"earrings.html"
    },

    {name: "Hair Accessories",
    image:"images/hairacc.jpg",
    link:"hairacc.html"
    },

    {name: "Necklaces",
    image:"images/image-j4.jpg",
    link:"necklaces.html"
    }
];

categories.forEach(function(category){
    const card=document.createElement("div");
    card.className="category";

    card.innerHTML=
    <a href="${category.link}">
        <img src="${category.image}" alt="${category.name}"> 
     <h3>${category.name}</h3> 

    </a>
    
    shopCategory.appendChild(card);
});