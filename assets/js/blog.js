
var color = document.querySelector("i")
console.log (color)
color.addEventListener("click",(i)=>{ 
   if (color.dataset.mode ==="light"){
      color.dataset.mode ="dark"
      document.body.style.backgroundColor = "black";
      document.body.style.color ="white";
   } else {
      color.dataset.mode ="light"
      document.body.style.backgroundColor = "white";
      document.body.style.color ="black";
   }
console.log("hi")}
);
const buttonBlack = document.querySelector("button")
console.log (buttonBlack)
buttonBlack.addEventListener("click",(e)=>{
document.location.replace("index.html")   
})

let blogPosts;
if (localStorage.getItem ("blogPosts")){
   blogPosts = JSON.parse(localStorage.getItem("blogPosts"))
}

for (let index = 0; index < blogPosts.length; index++) {
   const element = blogPosts[index];
   
console.log(element)
}
//inside of the for loop we want to create some sort of element that is gonna house the data of this blogpots
/// fill that data into the element by assigning some sort of value 
// then we want to op0en that element to something that exsit in the page




