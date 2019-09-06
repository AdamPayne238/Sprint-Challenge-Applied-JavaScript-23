/* Iff You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComponent(){

      //Define Elements (createElement)
      let carousel = document.createElement('div');         // <div class="carousel">
      let leftButton = document.createElement('div');       //   <div class="left-button"> < </div>
      let mountainsImg = document.createElement('img');     //   <img src="./assets/carousel/mountains.jpeg" />
      let computerImg = document.createElement('img');      //   <img src="./assets/carousel/computer.jpeg" />
      let treesImg = document.createElement('img');         //   <img src="./assets/carousel/trees.jpeg" />
      let turntableImg = document.createElement('img');     //   <img src="./assets/carousel/turntable.jpeg" />
      let rightButton = document.createElement('div');      //   <div class="right-button"> > </div>
  
      //Set Structure (appendChild)
      carousel.appendChild(leftButton);
      carousel.appendChild(mountainsImg);
      carousel.appendChild(computerImg);
      carousel.appendChild(treesImg);
      carousel.appendChild(turntableImg);
      carousel.appendChild(rightButton);
  
      //Set Class (classList.add)
      carousel.classList.add('carousel');
      leftButton.classList.add('left-button');
      rightButton.classList.add('right-button');
  
      //Set Content (textContent)
      leftButton.textContent = 	'\u00AB';
      mountainsImg.src = "./assets/carousel/mountains.jpeg";
      computerImg.src = "./assets/carousel/computer.jpeg";
      treesImg.src = "./assets/carousel/trees.jpeg";
      turntableImg.src = "./assets/carousel/turntable.jpeg";
      rightButton.textContent = '	\u00BB';
  
      //Return carousel
      return carousel
    
}

const imageArray = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(carouselComponent);

// imageArray.forEach(data => {
//   carouselContainer.appendChild(imageArray);
// })


// carouselContainer.appendChild(carouselComponent);
