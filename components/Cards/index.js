// STEPp 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//Create Card Component
function cardComponent(cardData){

        //Define Elements (createElement)
        let card = document.createElement('div');
        let cardHeadline = document.createElement('div');
        let cardAuthor = document.createElement('div');
        let imgContainer = document.createElement('div');
        let cardImg = document.createElement('img');
        let authorName = document.createElement('span');
    
        //Set Structure (appendChild)
        card.appendChild(cardHeadline);
        card.appendChild(cardAuthor);
        cardAuthor.appendChild(imgContainer);
        imgContainer.appendChild(cardImg);
        cardAuthor.appendChild(authorName);
    
        //Set Class (classList.add)
        card.classList.add('card');
        cardHeadline.classList.add('headline');
        cardAuthor.classList.add('author');
        imgContainer.classList.add('img-container');
    
        //Set Content (textContent)
        cardHeadline.textContent = `${cardData.headline}`;
        authorName.textContent = `${cardData.authorName}`;
        cardImg.src = cardData.authorPhoto;
  
        //Return card
        return card;

}

//select cards-container class with cardsContainer variable
let cardsContainer = document.querySelector('.cards-container');

//Define articles array
const articlesArray = ['bootstrap', 'javascript', 'jquery', 'node', 'technology'];

//Use Axios to retrieve data
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    let articles = response.data.articles
    for (topic in articles){
        articles[topic].forEach(article => {
            //Append cardComponent to cardsContainer
            cardsContainer.appendChild(cardComponent(article))
        })
    }
})
.catch(error => {
    console.log(error)
})


