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
    link:"necklace.html"
    }
];

categories.forEach(function(category){
    const card=document.createElement("div");
    card.className="category";

    card.innerHTML= `
    <a href="${category.link}">
        <img src="${category.image}" alt="${category.name}"> 
     <h3>${category.name}</h3> 

    </a>
    `;
    shopCategory.appendChild(card);
});

const wishlistInput =document.getElementById("wishlistInput");
const addButton =document.getElementById("addButton");
const wishlist =document.getElementById("wishlist");

addButton.addEventListener("click", function(event){
    if(wishlistInput.value===""){
        alert("Please enter a jewelry item");
        return;
    }

    const item=document.createElement("li");
    item.textContent=wishlistInput.value;

    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";

    deleteButton.addEventListener("click", function(event){
        item.remove();
    })

    item.appendChild(deleteButton);
    wishlist.appendChild(item);
    wishlistInput.value=""
})
