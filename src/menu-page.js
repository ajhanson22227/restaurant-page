function loadMenuPage(){
	let mainContent = `
		<div id="menu-container">
			<div id="menu-top-text">Our Menu</div>
			<div class="menu-card">
				<div class="menu-picture-left"><img src="./assets/pancakes.jpg" alt="stack of pancakes"></div>
				<div class="menu-title text">Stack of Pancakes</div>
				<div class="menu-text-right menu-text">A delicious stack of Homemade Pancakes served fresh to order.</div>
				<div class="menu-price-right menu-price-text">$4</div>
			</div>
			<div class="menu-card">
				<div class="menu-picture-right"><img src="./assets/bread.jpg" alt="Loaf of bread"></div>
				<div class="menu-title text">Loaf of Bread</div>
				<div class="menu-text-left menu-text">Enjoy a freshly baked loaf of bread!</div>
				<div class="menu-price-left menu-price-text">$3</div>
			</div>
			<div class="menu-card">
				<div class="menu-picture-left"><img src="./assets/milk.jpg" alt="Glass of milk"></div>
				<div class="menu-title text">Glass of Milk</div>
				<div class="menu-text-right menu-text">Fancy a cup of milk? Get it nice and cold! Or warm if you're going to sleep.</div>
				<div class="menu-price-right menu-price-text">$2</div>
			</div>
			<div class="menu-card">
				<div class="menu-picture-right"><img src="./assets/apple.jpg" alt="A red apple"></div>
				<div class="menu-title text">An Apple</div>
				<div class="menu-text-left menu-text">Not hungry? Have an apple.</div>
				<div class="menu-price-left menu-price-text">$1</div>
			</div>
		</div>
	`
	return mainContent
}

export default loadMenuPage