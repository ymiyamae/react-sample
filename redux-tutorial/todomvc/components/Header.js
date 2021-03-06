import React, { Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput'

export class Header extends Component {
	handleSave(text) {
		if (text.length !== 0) {
			this.props.addTodo(text)
		}
	}

	render() {
		return (
			<header class="header">
				<h1>todos</h1>
				<TodoTextInput newTodo
											 onSave={this.handleSave.bind(this)}
											 placeholder="what needs to be done?" />
			</header>
		);
	}
}

Header.propTypes = {
	addTodo: PropTypes.func.isRequired
}