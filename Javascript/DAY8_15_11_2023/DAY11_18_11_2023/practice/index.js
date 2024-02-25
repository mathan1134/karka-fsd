let selectbox=document.getElementById("selectbox")
selectbox.addEventListener("change",handlechange)
function handlechange(){
            let selectbox=document.getElementById("selectbox").value
            console.log(selectbox)
            let para =document.getElementById("para")
            para.innerHTML=selectbox
        }

