import React, { Component } from "react";
import ErrorAlert from "./ErrorAlert";

export default class ErrorBoundary extends Component{
	state = {
		hasError: false,
		errorInfo: ""
	}

	static getDerivedStateFromError(){
		return {
			hasError : true
		}
	}

	componentDidCatch(error, errorInfo){
		this.setState({
			hasError : true,
			errorInfo,
		})
	}

	render(){
		const { title, description } = this.props;

		if(this.state.hasError){
			return <ErrorAlert {...{ title, description }}/>
		}

		return this.props.children;
	}
}