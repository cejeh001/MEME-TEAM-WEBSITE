// generate random meme function when button is clicked

// button variable
let button = document.getElementById('button')

const memeContainer = document.getElementById("meme-container")

function generateMeme() {
    // meme collection
    const folderPath = "memes/";
    const totalImages = 254;   // number of memes in the folder
    const totalGifs = 7;

    let meme;
    let memePath;

    // file type
    const img = 1;
    const gif = 2;

    // select random type
    let decidedFileType = Math.floor(Math.random() * 2) + 1;

    if (decidedFileType === img) {
        let randomIndex = Math.floor(Math.random() * totalImages) + 1; // Corrected Math.random()
        memePath = `${folderPath}${randomIndex}.jpg`;
    } else {
        let randomIndex = Math.floor(Math.random() * totalGifs) + 1; //select between total gifs
        memePath = `${folderPath}${randomIndex}.gif`;
    }

    // display the random meme
    meme = document.createElement('img');
    meme.src = memePath;
    memeContainer.appendChild(meme);
}

//link function to generate button
button.addEventListener("click", generateMeme);