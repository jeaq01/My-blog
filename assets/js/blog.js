
const cardContainer = document.querySelector(".cardContainer") 
var color = document.querySelector("i")
color.dataset.mode = localStorage.getItem("colorMode")|| "light"
console.log (color)
color.addEventListener("click",(i)=>{ 
      if (color.dataset.mode ==="light"){
         color.dataset.mode ="dark"
         document.body.style.backgroundColor = "black";
         document.body.style.color ="white";
         localStorage.setItem("colorMode","dark");
      } else {
         color.dataset.mode ="light"
         document.body.style.backgroundColor = "white";
         document.body.style.color ="black";
         localStorage.setItem("colorMode","light");
      }
});
const buttonBlack = document.querySelector("button")
console.log (buttonBlack)
buttonBlack.addEventListener("click",(e)=>{
document.location.replace("index.html")   
})

let blogPosts;
if (localStorage.getItem ("blogPosts")){
   blogPosts = JSON.parse(localStorage.getItem("blogPosts"))
}
let blogcard = ""
for (let index = 0; index < blogPosts.length; index++) {
   console.log (blogPosts.length)
   blogcard += `
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">${blogPosts[index].title}</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${blogPosts[index].content}</textarea>
  </div>
   `;
   cardContainer.innerHTML=blogcard

}
if (color.dataset.mode ==="dark"){
   document.body.style.backgroundColor = "black";
   document.body.style.color ="white";
} else {
   document.body.style.backgroundColor = "white";
   document.body.style.color ="black";
}

//inside of the for loop we want to create some sort of element that is gonna house the data of this blogpots
/// fill that data into the element by assigning some sort of value 
// then we want to op0en that element to something that exsit in the page




