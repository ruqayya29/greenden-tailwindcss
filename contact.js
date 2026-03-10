var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var close_nav=document.getElementById("close-nav")

menuicon.addEventListener("click",function(){

  sidenav.style.right=0;
})

close_nav.addEventListener("click",function(){
 // sidenav.style.display="none"
 sidenav.style.right="-50%"
})