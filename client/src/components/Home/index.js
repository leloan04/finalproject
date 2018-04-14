import React from 'react';
import "./style.css";

const Home = (props) =>{
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div class="container">
				<a class="navbar-brand js-scroll-trigger" href="#page-top"></a>
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i class="fa fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
					<a class="nav-link js-scroll-trigger" href="#about">Home</a>
					</li>
					<li class="nav-item">
					<a class="nav-link js-scroll-trigger" href="#download">Recipes</a>
					</li>
					<li class="nav-item">
					<a class="nav-link js-scroll-trigger" href="#contact">Sign In</a>
					</li>
				</ul>
				</div>
			</div>
			</nav>
		
			<header class="masthead">
			<div class="intro-body">
				<div class="container">
				<div class="row">
					<div class="col-lg-8 mx-auto">
					{/* <h1 class="brand-heading">Bon Appletit</h1>
					<p class="intro-text">Healthier lifestyles start with healthier appetites</p> */}
					<a class="main-header-logo" href="/">
						<img src={require("../../assets/images/logo.png")} alt="Logo" id="banner-logo"/>
					</a>
					<a href="#about" class="btn btn-circle js-scroll-trigger">
						<i class="fa fa-angle-double-down animated"></i>
					</a>
					</div>
				</div>
				</div>
			</div>
			</header>
		
			{/* <!-- About Section --> */}
			<section id="about" class="content-section text-center">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 mx-auto">
							{/* <!-- Slideshow container --> */}
							<div class="slideshow-container">

							{/* <!-- Full-width images with number and caption text --> */}
								<div class="mySlides fade">
									<img src={require("../../assets/images/foodiepics/acaibowl.jpg")} style={ {width:"50%"} } />
									<div class="text">Acai Smoothie Breakfast Bowl</div>
								</div>
								
								<div class="mySlides fade">
									<img src="assets/slideshow/images/fetachicken.jpg" style={ {width:"50%"} } />
									<div class="text">Spinach and Feta Cheese Stuffed Chicken</div>
								</div>
								
								<div class="mySlides fade">
									<img src="assets/slideshow/images/citrussalmon.jpg" style={ {width:"50%"} } />
									<div class="text">Grilled Citrus Salmon</div>
								</div>
				
								<div class="mySlides fade">
									<img src="assets/slideshow/images/garlicchicken.jpg" style={ {width:"50%"} } />
									<div class="text">Garlic-roasted Chicken Breasts</div>
								</div>
				
								<div class="mySlides fade">
									<img src="assets/slideshow/images/rasberrygreenteasmoothie.jpg" style={ {width:"50%"} } />
									<div class="text">Raspberry Green Tea Smoothie</div>
								</div>
								
								{/* <!-- The dots/circles --> */}
								<div style={ {textAlign:"center"} }>
									<span class="dot" onclick="currentSlide(1)"></span> 
									<span class="dot" onclick="currentSlide(2)"></span> 
									<span class="dot" onclick="currentSlide(3)"></span> 
									<span class="dot" onclick="currentSlide(4)"></span>
									<span class="dot" onclick="currentSlide(5)"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		
			{/* <!-- Download Section --> */}
			<section id="download" class="download-section content-section text-center">
				<div class="container">
					<div class="col-lg-8 mx-auto">
						<h2>Sign up to start finding healthier recipes now!</h2>
						<form>
							<div class="form-group">
								<label for="formGroupExampleInput">Email:</label>
								<input type="text" class="form-control" id="email" placeholder="jane@doe.com" />
							</div>
							<div class="form-group">
								<label for="formGroupExampleInput2">Password:</label>
								<input type="text" class="form-control" id="password" placeholder="********" />
							</div>
							<button type="submit" class="btn btn-primary" id="signup-btn">Sign Up</button>
						</form>
					</div>
				</div>
			</section>
	
			{/* <!-- Footer --> */}
			<footer>
				<div class="container text-center">
					<p>Copyright &copy; Bon Appletit 2018</p>
				</div>
			</footer>
		</div>
	);
}

export default Home;