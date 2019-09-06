// Step 2: Create Tabs
// ------------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//Create a Tab Component
function tabComponent(tabData){
    
        //Define Elements (createElement)
        let tab = document.createElement('div');
    
        //Set Class (classList.add)
        tab.classList.add('tab');
    
        //Set Content (textContent)
        tab.textContent = tabData;
    
        //Return tab
        return tab;

}
//Define variable Topics set to topics Class in HTML
const topics = document.querySelector('.topics');

//Request data
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    //Iterate over response.data.topics and for each 
    //topic append child to tabComponent
    response.data.topics.forEach(topic => {
        topics.appendChild(tabComponent(topic))
    });
})
//Console log errors if any
.catch(error => {
    console.log(error)
});