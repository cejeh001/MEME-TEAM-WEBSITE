// generate random meme function when button is clicked

// get the meme template
let memeTemplate = document.getElementById('meme');

// button variable
let button = document.getElementById('button')

function generateMeme() {
    alert("punani");
    // meme collection
    const folderPath = "memes/";
    const totalMemes = 254;   // number of memes in the folder

    // select a random meme
    const randomIndex = Math.floor(math.random() * totalMemes) + 1;
    const memePath = `${folderPath}meme${randomIndex}.jpg`;

    //dislpay the random meme
    const memeTemplate =  document.getElementById('meme').querySelector("img");
    memeTemplate.src = memePath;
}

//link function to generate button
document.getElementById("button").addEventListener("click", generateMeme);