// generate random meme function when button is clicked

// button variable
let button = document.getElementById('button')

function generateMeme() {
    // meme collection
    const imageFolderPath = "memes/images/";
    const gifFolderPath = "memes/gifs/";
    const totalImages = 201;   // number of memes in the folder
    const totalGifs = 25;

    let meme = document.getElementById('meme');
    let memePath;

    // file type
    const img = 1;
    const gif = 2;

    // select random type
    let decidedFileType = Math.floor(Math.random() * 2) + 1;

    if (decidedFileType === img) {
        let randomIndex = Math.floor(Math.random() * totalImages) + 1; // Corrected Math.random()
        memePath = `${imageFolderPath}${randomIndex}.jpg`;
    } else {
        let randomIndex = Math.floor(Math.random() * totalGifs) + 1; //select between total gifs
        memePath = `${gifFolderPath}${randomIndex}.gif`;
    }

    // display the random meme
    meme.src = memePath;
}

//link function to generate button
button.addEventListener("click", generateMeme);