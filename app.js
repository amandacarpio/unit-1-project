const key = 'AIzaSyBjROxJW481jiKnusSJF4g1Lx2b61cY9hQ'
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'
let bookData, firstLast
const $input = $("input[type=text]") // placed text input in a variable to shorten it/easier to read

$("form").on("submit", authorSearch)

// function that does thriller book search
function authorSearch(event){
    event.preventDefault()
    firstLast = $input.val()
    const url = `${baseURL}q=inauthor:${firstLast}+subject:thriller&key=${key}`
    $.ajax(url)
    .then((books) => {
        bookData = books
        // console.log(bookData)
        // renderBookData()
        // loopThroughBooks(bookData)
        for(let i = 0; i < bookData.items.length; i++){
            //create html element with jquery
            let $divBookCover = $('<div></div>');
            let $divTitle = $('<div id="first"></div>'); 
            let $divAuthor = $('<div></div>'); 
            let $divSynopsis = $('<div id="second"></div>')
            //set html element contents using jquery
            $divBookCover.html(`<img src="${bookData.items[i].volumeInfo.imageLinks.thumbnail}"></img>`)
            $divTitle.html(bookData.items[i].volumeInfo.title)
            $divAuthor.html(bookData.items[i].volumeInfo.author)
            $divSynopsis.html(bookData.items[i].volumeInfo.description)
            //append html element to the dom within the html element where i want my new elements to be created
            $("section").append($divBookCover)
            $("section").append($divTitle)
            $("section").append($divAuthor)
            $("section").append($divSynopsis)
        }
    })
}