// generate random meme function when button is clicked

// button variable
let button = document.getElementById('button')

const memeContainer = document.getElementById("meme")

function generateMeme() {
    // meme collection
    const folderPath = "memes/";
    const totalimages = 254;   // number of memes in the folder
    const totalGifs = 7

    let meme;

    // file type
    const img = 1;
    const gif = 2;

    // select random type
    let decidedFileType = Math.floor(Math.random() * 2) + 1;

    if (decidedFileType === img) {
        let randomIndex = Math.floor(Math.random() * totalImages) + 1; // Corrected Math.random()
        const memePath = `${folderPath}${randomIndex}.jpg`;
    }

    else {
        let randomIndex = Math.floor(Math.random() * totalGifs) + 1; //select between total gifs
        const memePath = `${folderPath}${randomIndex}.gif`;
    }

    // display the random meme

    // if the meme is an image
    if (decidedFileType === 1){
        meme = Document.createElement('img')
        meme.src = memePath;
    }

}

//link function to generate button
button.addEventListener("click", generateMeme);