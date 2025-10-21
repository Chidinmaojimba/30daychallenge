let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "fullhair.jpg";

    for(bt of btn){
        bt.classlist.remove("active");
    } 
    this.classList.add("active");
}
btn[1].onclick = function(){
    productImg.src = "glassman.jpg";

    for(bt of btn){
        bt.classlist.remove("active");
    } 
    this.classList.add("active");
}
btn[2].onclick = function(){
    productImg.src = "glassgirl.jpg";

    for(bt of btn){
        bt.classlist.remove("active");
    } 
    this.classList.add("active");
}

