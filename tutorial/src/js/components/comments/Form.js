import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Form extends Component {

	createComment(e) {
		e.preventDefault();
		var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
		var text   = ReactDOM.findDOMNode(this.refs.text).value.trim();
		if (!text || !author) return;
		this.props.onCommentSubmit({author: author, text: text})
		// TODO: サーバにデータを送信
		ReactDOM.findDOMNode(this.refs.author).value = '';
		ReactDOM.findDOMNode(this.refs.text).value = '';
	}

	render() {
		return (
			<form class="commentForm" onSubmit={this.createComment.bind(this)}>
				<input type="text" placeholder="Your name" ref="author" />
				<input type="text" placeholder="Say something ..." ref="text" />
				<input type="submit" value="post" />
			</form>
		);
	}
}
