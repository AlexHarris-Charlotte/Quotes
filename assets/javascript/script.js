// Give the user the option to save the quote
// If the user saves a quote, we can display it somewhere on the page
// Use Fire base database for persisting data. 

//http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1

const quoteButton = document.getElementById('quoteButton');
const quoteContent = document.getElementById('quoteContent');
const authorContent = document.getElementById('authorContent');
quoteButton.addEventListener('click', makeRequest);

function makeRequest () {
    var myRequest = new XMLHttpRequest()
    method = "GET",
    url = "https://random-quote-generator.herokuapp.com/api/quotes/",

    myRequest.onreadystatechange = function requestHandler () {
        if(myRequest.readyState === XMLHttpRequest.DONE && myRequest.status === 200) {
            const quotesList = JSON.parse(myRequest.responseText);
            const randomNumber = Math.floor(Math.random() * quotesList.length);
            console.log(quotesList);
            const quote = quotesList[randomNumber].quote;
            const author = quotesList[randomNumber].author;
            console.log(author);
            quoteContent.textContent = quote;
            authorContent.textContent = `- ${author}`;

        } 
      }

    myRequest.open(method, url, true);
    myRequest.send();
}









