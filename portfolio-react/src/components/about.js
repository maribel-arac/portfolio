import React, { Component } from 'react';
import Brand from '../images/brand.png';
import '../css/about.css';

class About extends Component {


	render() {
		return(
			<div id="about" className="container col-md-12 aboutBorder">
				<div className="row">
					<div className="col col-md-6">
						<img className="image" src={Brand} alt="brand"/>
					</div>
					<div className="col col-md-6 about">
						<h1>About me </h1>
						<p> I from the Jalisco coast, I adore seafood and tacos.
						I love learning languages and that's why I changed to the programming path.
						 My favorite passion is travelling and trying new dishes. <br/>
						  <em> Try everything at least once</em> 😉 </p>
					</div>
				</div>

			</div>

		);
	}
}

export default About;