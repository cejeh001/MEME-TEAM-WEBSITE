// generate random meme function when button is clicked

// button variable
let button = document.getElementById('button')

function generateMeme() {
    // meme collection
    const folderPath = "memes/";
    const totalMemes = 254;   // number of memes in the folder

    // select a random meme
    let randomIndex = Math.floor(Math.random() * totalMemes) + 1; // Corrected Math.random()
    const memePath = `${folderPath}${randomIndex}.jpg`;

    // display the random meme
    const memeTemplate = document.getElementById('meme').querySelector("img");
    memeTemplate.src = memePath;
}

//link function to generate button
button.addEventListener("click", generateMeme);