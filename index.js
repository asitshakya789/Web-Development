const express = require('express');

const app = express();
app.get('/', (req, res) => {
    console.log("this is a google request", req.query.name)
    res.send(`
   <html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph of text.</p>
    <footer>
  <p>&copy; 2022 My Company. All rights reserved.</p>
  <p>Contact us: <a href="mailto:info@example.com">info@example.com</a></p>
  <ul>
    <li><a href="https://www.facebook.com">Facebook</a></li>
    <li><a href="https://www.twitter.com">Twitter</a></li>
    <li><a href="https://www.instagram.com">Instagram</a></li>
  </ul>
</footer>
  </body>
</html>
<a href="/about">Visit about page section </a>

        `);

});

app.get('/about', (req, res) => {
    console.log("this is response comes from in browser ",req.query.name);
    res.send(`
<html>
<head>
	<title>Simple Home Page Template</title>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<header>
		<h1>Welcome to Our Website</h1>
	</header>
	<section class="hero">
		<h2>Hero Section</h2>
		<p>This is a hero section with a background image.</p>
	</section>
	<section class="features">
		<h2>Features</h2>
		<ul>
			<li>Feature 1</li>
			<li>Feature 2</li>
			<li>Feature 3</li>
		</ul>
	</section>
	<section class="call-to-action">
		<button>Learn More</button>
	</section>
</body>
</html>
<input type="text" id="myInput" name="myInput" placeholder="Enter your name" size="30" maxlength="50" required>
        <a href="/">Visit homepage </a>

        `);
});
app.get('/job', (req, res) => {
    res.send('this is a job page');
});
app.listen(4000);