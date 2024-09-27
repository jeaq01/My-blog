var color = document.querySelector("i")
console.log (color)
color.dataset.mode = localStorage.getItem("colorMode")|| "light"
let blogPosts = JSON.parse (localStorage.getItem("blogPosts")) || []


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
 
console.log("hi")}
);

const blogForm = document.querySelector("#blogForm")
console.log (blogForm)
blogForm.addEventListener("submit",(e)=>{ 
 e.preventDefault()
 const userName = document.querySelector("#floatingInput").value;
 const title = document.querySelector("#floatingPassword").value;
 const content = document.querySelector("#floatingTextarea2").value;
 const blogInfo =  {
   userName: userName,
   title: title,
   content: content,
 }
 blogPosts.push (blogInfo)
 localStorage.setItem("blogPosts",JSON.stringify(blogPosts));
 console.log("hello")
document.location.replace("blog.html")
})

if (color.dataset.mode ==="dark"){
   document.body.style.backgroundColor = "black";
   document.body.style.color ="white";
} else {
   document.body.style.backgroundColor = "white";
   document.body.style.color ="black";
}

