import React, { Component } from 'react';

import _ from "lodash";

export default class Comment extends Component {
	rawMarkup() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return { __html: rawMarkup };
	}

	render() {
		return (
			<div class="comment">
				<h2 class="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()}></span>
			</div>
		)
	}
}
