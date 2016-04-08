import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from "./Form";
import List from "./List";

import $ from 'jquery';

export default class Box extends Component {

	constructor(props) {
		super(props)
		this.state = {data: []}
	}

	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: "json",
			cache: false,
			success: (data) => { this.setState({data: data}); },
			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.String());
			}
		})
	}

	handleCommentSubmit(comment) {
		var comments = this.state.data;
		var newComments = comments.concat([comment])
		this.setState({data: newComments})
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: (data) => { this.setState({data: data})},
			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.toString())
			}
		})
	}

	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
	}

	render() {
		return (
			<div class="box">
				<h1>Comments</h1>
				<List data={this.state.data} />
				<Form onCommentSubmit={this.handleCommentSubmit.bind(this)} />
			</div>
		);
	}
}
