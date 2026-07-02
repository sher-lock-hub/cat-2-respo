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
        saveWishlist();
    })

    item.appendChild(deleteButton);
    wishlist.appendChild(item);
    saveWishlist();
    wishlistInput.value=""
})
function saveWishlist(){
    let items=[];
    document.querySelector("#wishlist li").forEach(function(item){
        items.push(item.firstChild.textContent);

    })

    localStorage.setItem("wishList", JSON.stringify(items))
}
function loadWishlist(){
    const items=JSON.parse(localStorage.getItem("wishlist")) || []
    items.forEach(function(name){
        const item= document.createElement("li")
        item.textContent=name;
        const deleteButton=document.createElement("button")
        deleteButton.textContent="Delete"
        deleteButton.addEventListener("click", function(event){
           item.remove();
        saveWishlist(); 
        })
        item.appendChild(deleteButton);
    wishlist.appendChild(item);
    saveWishlist();
    wishlistInput.value=""
    })
}
loadWishlist();

const feedbackForm=document.getElementById("feedbackForm");
const name=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message");
const feedback=document.getElementById("feedback");

feedbackForm.addEventListener("submit", function(event){
    event.preventDefault();

    if(name.value==="" ||
        email.value===""||
        message.value===""
    ){
        feedback.textContent="Please complete all fields"
        return;
    }

    feedback.innerHTML=
    "<strong>Feedback sent successfully!</strong><br>" +
    "Thank you, "+name.value

    feedbackForm.reset();
})
 const joyBanner=document.getElementById("joyBanner")
 const patienceBanner=document.getElementById("patienceBanner")
 const ownerbio=document.getElementById("owner-bio")

 joyBanner.addEventListener("click" ,function(event){
    ownerbio.classList.toggle("show")
 })
