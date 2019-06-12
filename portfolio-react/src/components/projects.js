import React, { Component } from 'react';
import CarouselProjects from '../components/carouselProjects';

class Projects extends Component {


	render() {
		return(
			<div className="container col-md-12">
				<div className="row">
					<div className="col col-md-6">
						<h1>Projects </h1>
						<p> Some of them were created with JS, React and bootstrap </p>
					</div>
					<div className="col col-md-6">
						<CarouselProjects />
					</div>
				</div>

			</div>

		);
	}
}

export default Projects;