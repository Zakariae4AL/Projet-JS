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

var rdm = Math.floor(Math.random() * courses.length); 
var rdm2 = Math.floor(Math.random() * courses.length); 
var rdm1 = Math.floor(Math.random() *courses.length); 
var img1 = document.getElementById("img1"); 
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

document.getElementById("itemleft").innerHTML = courses[rdm].title;
document.getElementById("itemcenter").innerHTML = courses[rdm2].title;
document.getElementById("itemright").innerHTML = courses[rdm1].title;

img1.src = courses[rdm].image;
img2.src = courses[rdm2].image;
img3.src = courses[rdm1].image;


function slides(){
var rdm = Math.floor(Math.random() * courses.length); 
var rdm2 = Math.floor(Math.random() * courses.length); 
var rdm1 = Math.floor(Math.random() *courses.length); 
var img1 = document.getElementById("img1"); 
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

document.getElementById("itemleft").innerHTML = courses[rdm].title;
document.getElementById("itemcenter").innerHTML = courses[rdm2].title;
document.getElementById("itemright").innerHTML = courses[rdm1].title;
    img1.src = courses[rdm].image;
    img2.src = courses[rdm2].image;
    img3.src = courses[rdm1].image;
}
    setInterval(slides,3000);
    

