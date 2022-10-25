const key = 'AIzaSyBjROxJW481jiKnusSJF4g1Lx2b61cY9hQ'
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'
let bookData, firstLast
const $input = $("input[type=text]") // placed text input in a variable to shorten it/easier to read

$("form").on("submit", authorSearch)

// function that does thriller book search
function authorSearch(){
    const url = `${baseURL}q=${firstLast}+subject:thriller&key=${key}`
    firstLast = $input.val()
    $.ajax(url)
    .then((books) => {
        console.log(bookData)
        bookData = books
    })
//     function render(){

//     }
}



// constructing url for request
// make our request
// render the data
// grab the submit button, put a click event on it
// prevent the refresh
// grab text from input box
// update the screen