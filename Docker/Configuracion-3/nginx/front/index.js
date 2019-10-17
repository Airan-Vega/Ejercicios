document.addEventListener("DOMContentLoaded", function(event){
    fetch("/api").then(res => {
        console.log(res)
        return res.json();
    }).then(json => {
        document.getElementById("json").innerHTML=JSON.stringify(json);
    })
})