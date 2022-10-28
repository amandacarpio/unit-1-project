const key = 'AIzaSyBjROxJW481jiKnusSJF4g1Lx2b61cY9hQ'
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'
let bookData, firstLast
const $input = $("input[type=text]") // placed text input in a variable to shorten it/easier to read
const $bookCover = $("#bookCover")
const $title = $("#title")
const $author = $("#author")
const $synopsis = $("#synopsis")

$("form").on("submit", authorSearch)

// function that does thriller book search
function authorSearch(event){
    event.preventDefault()
    firstLast = $input.val()
    const url = `${baseURL}q=inauthor:${firstLast}+subject:thriller&key=${key}`
    $.ajax(url)
    .then((books) => {
        bookData = books
        console.log(bookData)
        // renderBookData()
        loopThroughBooks()
    })
}

// function renderBookData(){
//     $bookCover.html(`<img src="${bookData.items[0].volumeInfo.imageLinks.thumbnail}"></img>`)
//     $title.text(bookData.items[0].volumeInfo.title)
//     $author.text(bookData.items[0].volumeInfo.authors)
//     $synopsis.text(bookData.items[0].volumeInfo.description)
// }

function loopThroughBooks(){
for(let i = 0; i < bookData.items.length; i++){
    $bookCover.html(`<img src="${bookData.items[i].volumeInfo.imageLinks.thumbnail}"></img>`)
    $title.text(bookData.items[i].volumeInfo.title)
    $author.text(bookData.items[i].volumeInfo.authors)
    $synopsis.text(bookData.items[i].volumeInfo.description)   
}
}


//for book of books{}
//const div = div
//const obj = object//

//obj.name, obj.art, obj.synopis = whatever for each
//div.append(obj)





// bookData.items.volumeInfo.imageLinks.thumbnail.forEach(function(cover) {
//     console.log(cover);
// });

// function loopThroughBooks(){
//     for(let i = 0; i < bookData.items.length; i++){
//         $bookCover.html(`<img src="${bookData.items[i].volumeInfo.imageLinks.thumbnail}"></img>`)
//         let list = document.getElementById("bookCover")
//         bookData.items[i].volumeInfo.imageLinks.thumbnail.array.forEach(cover => {
//     let div = document.createElement("div");
//     div.innerText = cover;
//     main.appendChild(div);
// });


// // update the screen
// loopThroughBooks()
// $bookCoverEACH = bookData.items.volumeInfo.imageLinks.thumbnail.map((cover) => /*

// TO SEARCH THRU LIBRARY
// ON CLICK FUNCTION
//URL
// THE FUNCTION WILL RUN THE LOOP ABOVE AND PRINT ALL BOOKS