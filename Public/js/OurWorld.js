
// document.getElementById("country1").onmouseover = function(){
//     mouseOver()
// }; 

// document.getElementById("country1").onmouseout = function(){
//     mouseOut()
// }; 

// function popUp() {
//     var x = getElementById("myDiv");
//     if (x.style.display === "none");  {
//         x.style.display = "block";
//     }
//     else {
//         x.style.display = "none";
//     }
//}

$(document).ready(function(){
    $("marker-colombia").click(function(){
      $("p").toggle();
    });
  });


