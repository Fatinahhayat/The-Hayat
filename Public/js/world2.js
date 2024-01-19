document.getElementById("info")

document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("mouseover", function(){
        window.onmousemove=function(j){
            x=j.clientX
            y=j.clientY
            document.getElemenetById("name").style.top=y-20+"px"
            document.getElemenetById("name").style.left=x-20+"px"
        }
        e.style.fill="blue"
        document.getElementById("namep").innerText=e.id
        document.getElementById("name").style.opacity=1
       
    })

    e.addEventListener("mouseleave"), function(){
        e.style.fill="#ececec"
        document.getElementById("name").style.opacity=0
    }
})