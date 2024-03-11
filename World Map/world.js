document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("mouseover",function(){
        window.onmousemove=function(j){
            x=j.clientX
            y=j.clientY
            document.getElementById("name").style.top=y-2+"px"
            document.getElementById("name").style.left=x-2+"px"

        }
        
        e.style.fill="pink"
        document.getElementById("name").innerText=e.id
        document.getElementById("name").style.opacity=1

        })
        e.addEventListener("mouseleave",function(){
            e.style.fill=""
            document.getElementById("name").style.opacity=0

    })
    
})

