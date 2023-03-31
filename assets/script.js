const socialMedia = document.querySelector('.card-title1')
const description1 = document.querySelector('.description1');
const close1 = document.querySelector('.closing-button')



function card1Description() {
    console.log("it worked")
 //socialMedia.textContent = "Click Me";
 description1.style.display = "block"



}
function closed1(){
    description1.style.display = "none";
}

socialMedia.addEventListener('click', card1Description)
close1.addEventListener("click", closed1)