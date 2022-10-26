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
        renderBookData()
    })
}

function renderBookData(){
    $bookCover.html(`<img src="${bookData.items[0].volumeInfo.imageLinks.thumbnail}"></img>`)
    $title.text(bookData.items[0].volumeInfo.title)
    $author.text(bookData.items[0].volumeInfo.authors)
    $synopsis.text(bookData.items[0].volumeInfo.description)
}


// update the screen