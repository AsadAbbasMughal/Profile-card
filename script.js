let username = document.querySelector(".username");
 let changeName = document.querySelector(".changeName");
 let changeDescription = document.querySelector(".changeDescription");
 let description = document.querySelector(".description");
 let input = document.querySelector(".input");
 let bgColorBtn = document.querySelector(".bgColorBtn");
 let card = document.querySelector(".card");
 let resetBtn = document.querySelector(".resetBtn");
 let changeImg = document.querySelector(".changeImg");
 let img = document.querySelector("img");

changeName.addEventListener("click", function(){
    if(username.innerText  === ""){
                 
        
    }
    username.innerText = input.value;
    input.value = "";
    
    
})
changeDescription.addEventListener("click", function(){
    description.innerText = input.value;
    input.value = "";
    
    
})
// Math.floor(Math.random() * 16777215)
bgColorBtn.addEventListener("click", function(){
    // alert("hello");
    let bgGen = Math.floor(Math.random() * 16777215).toString(16); // Convert to hex
    card.style.backgroundColor = `#${bgGen}`;
    input.value = ""; // Set the background color
});

resetBtn.addEventListener("click", function(){
    // alert("hhh")
    card.reset()
})
changeImg.addEventListener("click", function(){
    // alert("hell")
    img.src = input.value;
    input.value = "";
})