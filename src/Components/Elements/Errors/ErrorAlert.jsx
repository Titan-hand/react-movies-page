import React from "react";
import PropTypes from "prop-types";


function ErrorAlert ({title, description}) {
	return (
		<div className="error">
			<div className="error-icon">
				<i className="fa fa-exclamation-circle"></i>
			</div>
			
			<div className="error-body">
				<h2 className="error-title">{title}</h2>
				<p className="error-description">{description}</p>
			</div>
		</div>
	);
}

ErrorAlert.propTypes = {
	title : PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default ErrorAlert;