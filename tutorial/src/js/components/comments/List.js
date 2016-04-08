import React, { Component } from 'react';

import Comment from "./Comment";

export default class List extends Component {
	render() {
		var commentNodes = this.props.data.map((comment,index) => {
			return (<Comment key={index} author={comment.author}>{comment.text}</Comment>)
		})
		return (<div class="list">{ commentNodes }</div>);
	}
}
