var courses = [{
    image: './images/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: './images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 29.9
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
},
{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS_g4',
    price: 23.9
},
{
    image: './images/javascriptDOM.png',
    title: 'groupe 2 ',
    category: 'groupe2',
    price: 23.9
}
]


// for (let i of products.data) {
//     //Create Card
//     let card = document.createElement("div");
//     //Card should have category and should stay hidden initially
//     card.classList.add("card", i.category, "hide");
//     //image div
//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");
//     //img tag
//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     //container
//     let container = document.createElement("div");
//     container.classList.add("container");
//     //product name
//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);
//     //price
//     let price = document.createElement("h6");
//     price.innerText = "$" + i.price;
//     container.appendChild(price);
//     card.appendChild(container);
//     document.getElementById("products").appendChild(card);
//   }
//   //parameter passed from button (Parameter same as category)
//   function filterProduct(value) {
//     //Button class code
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//       //check if value equals innerText
//       if (value.toUpperCase() == button.innerText.toUpperCase()) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     });
//     //select all cards
//     let elements = document.querySelectorAll(".card");
//     //loop through all cards
//     elements.forEach((element) => {
//       //display all cards on 'all' button click
//       if (value == "all") {
//         element.classList.remove("hide");
//       } else {
//         //Check if element contains category class
//         if (element.classList.contains(value)) {
//           //display element based on category
//           element.classList.remove("hide");
//         } else {
//           //hide other elements
//           element.classList.add("hide");
//         }
//       }
//     });
//   }
//   //Search button click
//   document.getElementById("search").addEventListener("click", () => {
//     //initializations
//     let searchInput = document.getElementById("search-input").value;
//     let elements = document.querySelectorAll(".product-name");
//     let cards = document.querySelectorAll(".card");
//     //loop through all elements
//     elements.forEach((element, index) => {
//       //check if text includes the search value
//       if (element.innerText.includes(searchInput.toUpperCase())) {
//         //display matching card
//         cards[index].classList.remove("hide");
//       } else {
//         //hide others
//         cards[index].classList.add("hide");
//       }
//     });
//   });
//   //Initially display all products
//   window.onload = () => {
//     filterProduct("all");
//   };


// document.getElementById("checkhtml").onkeyup = function checkhtml(){
//     for(let i = 0; i<courses.length;i++){

//     }
// }


// function myFunction() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("inputforsearch");
//     filter = input.value.toUpperCase();
//     table = document.querySelector(".courses");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }       
//     }
//   }

// var html = document.getElementById("checkhtml").onclick;

// const filteredItems = items.filter(item => {
//     // Check if the item's category matches the selected category
//     if (html && item.category !== selectedCategory) {
//       return false;
//     }
//     // Check if the item's price is within the selected price range
//     if (selectedMinPrice && item.price < selectedMinPrice) {
//       return false;
//     }
//     if (selectedMaxPrice && item.price > selectedMaxPrice) {
//       return false;
//     }
//     // If the item passes all checks, include it in the filtered list
//     return true;
//   });
  

document.getElementById("checkhtml").onclick =  function filterhtml(){
    course.replaceChildren();

     courses.forEach((element) => {

        if(element.category.toUpperCase() === 'HTML'){

  creationCours2(element.image, element.title, element.price)

  
 }})};

document.getElementById("checkcss").onclick =  function filtercss(){
    course.replaceChildren();

     courses.forEach((element) => {

        if(element.category.toUpperCase() === 'CSS'){

  creationCours2(element.image, element.title, element.price)

  
 }})};

 document.getElementById("checkphp").onclick =  function filterphp(){
    course.replaceChildren();

     courses.forEach((element) => {

        if(element.category.toUpperCase() === 'PHP'){

  creationCours2(element.image, element.title, element.price)

  
 }})};

 document.getElementById("inputforfilter").onkeyup = function filtersearchhtml(){
    course.replaceChildren();

    courses.forEach((element) => {

       if(element.category.toUpperCase() === 'HTML'){

 creationCours2(element.image, element.title, element.price)

 
}
})};

document.getElementById("inputforfilter").onkeyup = function filtersearchcss(){
    course.replaceChildren();

    courses.forEach((element) => {

       if(element.category.toUpperCase() === 'CSS'){

 creationCours2(element.image, element.title, element.price)

 
}})};

document.getElementById("inputforfilter").onkeyup = function filtersearchphp(){
    course.replaceChildren();

    courses.forEach((element) => {

       if(element.category.toUpperCase() === 'PHP'){

 creationCours2(element.image, element.title, element.price)

 
}})};

document.getElementById("inputrange").onkeyup = function filterrange(){
    course.replaceChildren();

    courses.forEach((element) => {

       if(element.price <=10 ){

 creationCours2(element.image, element.title, element.price)

 
}})};



D




