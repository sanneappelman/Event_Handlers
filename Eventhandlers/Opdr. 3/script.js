const btn = document.getElementById('mybutton');
btn.addEventListener("click", function(e){
    alert ('button clicked');
})



const btn2 = function(){
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
}

const btn2attach = function() {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function(){
    btn2();
});
};

btn2attach();