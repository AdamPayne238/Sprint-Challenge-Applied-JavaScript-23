// STEPp 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//Create Header Component
function headerComponent(){

    //Define Elements (createElement)
    let header = document.createElement('div');
    let headerDate = document.createElement('span');
    let headerTitle = document.createElement('h1');
    let headerTemp = document.createElement('span');

    //Set Structure (appendChild)
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    //Set Class (classList.add)
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    //Set Content (textContent)
    headerDate.textContent = 'SMARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';

    //Return header
    return header

}

//Add headerComponent to DOM in .header-container
const headerContainer = document.querySelector('.header-container');
//Append headerComponent to headerContainer
headerContainer.appendChild(headerComponent());