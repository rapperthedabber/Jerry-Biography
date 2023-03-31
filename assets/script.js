const socialMedia = document.querySelector('.card-title1')
const description1 = document.querySelector('.description1');
const close1 = document.querySelector('.closing-button1')
const DictionaryApp = document.querySelector('.card-title2')
const description2 = document.querySelector('.description2')
const close2 = document.querySelector('.closing-button2')
const profileInfo = document.getElementById('Profile');
const profileDescription = document.querySelector('.profileDescription')
const closingProfile = document.querySelector('.closingProfile');
const ShapeGenerator = document.querySelector('.card-title3')
const description3 = document.querySelector('.description3');
const close3 = document.querySelector('.closing-button3')
const noteTakerApp = document.querySelector('.card-title4')
const description4 = document.querySelector('.description4');
const close4 = document.querySelector('.closing-button4')

function card1Description() {
    console.log("it worked")
 //socialMedia.textContent = "Click Me";
 description1.style.display = "block"

}
function closed1(){
    description1.style.display = "none";
}

function card2Description(){
    description2.style.display = "block"
}
function closed2(){
    description2.style.display = "none"
}

function displayProfile(){
    profileDescription.style.display = 'block'
}
function closedProfile(){
    profileDescription.style.display = 'none'

}

function card3Description(){
    description3.style.display = 'block'
}

function closed3(){
    description3.style.display = 'none'
}

function card4Description(){
    description4.style.display = 'block'
}
function closed4(){
    description4.style.display = 'none'
}
socialMedia.addEventListener('click', card1Description)
DictionaryApp.addEventListener('click', card2Description)
close1.addEventListener("click", closed1)
close2.addEventListener('click', closed2)
profileInfo.addEventListener('click', displayProfile)
closingProfile.addEventListener('click', closedProfile)
ShapeGenerator.addEventListener('click', card3Description)
close3.addEventListener("click", closed3)
noteTakerApp.addEventListener("click",card4Description )
close4.addEventListener("click", closed4)