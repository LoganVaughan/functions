const typeOfBirdInput = document.getElementById('typeOfBird');
const typeOfBird = typeOfBirdInput.value;

const roommateNameInput = document.getElementById('roommateName');
const roommateName = troommateNameInput.value;

const nounInput = document.getElementById('noun');
const noun = nounInput.value;

const liquidInput = document.getElementById('liquid');
const liquid = liquidInput.value;

const bodyPartInput = document.getElementById('bodyPart');
const bodyPart = bodyPartInput.value;

var para = document.getElementById('mad-libs');

const generateMadLibs = (typeOfBird,roommateName,noun,liquid,bodyPart) => {
    console.log(`logan`)
    `It was a cold October day. I woke to the smell of ${typeOfBird} roasting in the kitchen. 
    My roommate said "See if ${roommateName} needs a fresh ${noun}. 
    So I carried a glass of ${liquid} into ${roommate}'s room.
    When I got there, I couldn't believe my ${bodyPart}!`
}



var text = generateMadLibs(typeOfBird,roommateName,noun,liquid,bodyPart);

var getInputValue = (id, text) =>{

    return ;
}