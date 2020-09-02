import loadMainPage from './main-page'
import loadMenuPage from './menu-page'
import loadContactPage from './contact-page'

let contentDiv = document.getElementById('content');
let homeButton = document.getElementById('home-button');
let menuButton = document.getElementById('menu-button');
let contactButton = document.getElementById('contact-button');


function resetButton(){
	homeButton = document.getElementById('home-button');
	menuButton = document.getElementById('menu-button');
	contactButton = document.getElementById('contact-button');

	homeButton.addEventListener('click', function(){
		loadMain();
	})

	menuButton.addEventListener('click', function(){
		loadMenu();
	})

	contactButton.addEventListener('click', function(){
		loadContact();
	})



}

function loadMain(){
	console.log("IM HEEERE")
	contentDiv.innerHTML = loadMainPage();
	resetButton();
}

function loadMenu(){
	contentDiv.innerHTML = loadMenuPage();
	resetButton();
}

function loadContact(){
	contentDiv.innerHTML = loadContactPage();
	resetButton();
}


loadMain();



