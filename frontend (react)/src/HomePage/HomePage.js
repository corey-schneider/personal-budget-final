import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import "../App2.css";

class HomePage extends Component {
	render() {
		return (
			<>
				<h1 align="center">Welcome to the Personal Budget application!</h1>

				<p>Welcome to the application. Feel free to use the navigation bar above to explore the site.
					You are able to add custom budgets to track how much money you can freely spend each month. Enjoy!</p>
					<br/>
				<h1>Please read before using this app!!!</h1>
				<p>There seems to be an issue with login / registration after going to the dashboard.<br/>
				<strong>Please DO NOT visit the dashboard UNTIL you have tested login and registration. Log in and Registration functions WILL NOT WORK if you visit the Dashboard BEFORE trying log in and register.</strong><br/>
				I am still working on fixing this issue. Thank you!</p><br/><br/><br/>
				<h4>This application was created using <a href="https://reactjs.org/" rel="nofollow">React</a>, <a href="https://nodejs.org/en/" rel="nofollow">Node.js</a>, and <a href="https://www.mongodb.com/" rel="nofollow">MongoDB</a></h4>
			</>
		);
	}
}

export default HomePage;
