import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				<div>
					{React.cloneElement(this.props.children, this.props)}
				</div>
			</div>
		)
	}
}

export default Main;