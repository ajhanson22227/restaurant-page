function loadMainPage(){
	let mainContent = `
		<div id="navbar">
				<div id="restaurant-title">
					Riddan Deli
				</div>
				<ul id="navbar-tabs">
					<li>Home</li>
					<li>Menu</li>
					<li>Contact</li>
				</ul>
			</div>
			<div id="main-content" class="parralax-1">
				<div id="about-container">
					<div id="welcome"><p>Welcome to Riddan Deli</p></div>
					<div id="about">
						<p>Riddan has been awarded the title of 'Best Cafe' 18 years in a row to date. That's not just because we're the only cafe located in this village, but because we make every order with love!</p>
					</div>
				</div>
			</div>
	`
	return mainContent
}

export default loadMainPage