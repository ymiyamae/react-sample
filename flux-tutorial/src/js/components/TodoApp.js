import React, { Component } from 'react';

import Footer form "./Footer";
import Header form "./Header";
import MainSection form "./MainSection";
import TodoStore from "../stores/TodoStore";

getTodoState() {
	return {
		allTodos: TodoStore.getAll(),
		areAllCompleate: TodoStore.areAllCompleate()
	}
}

export class TodoApp extends Component {
	constructor() {
		super(props)
		this.state = { all}
	}
	render() {
		return (
			<div>
				<Header />
				<MainSection
					allTodos={this.state.allTodos}
					areAllCompleate={this.state.areAllCompleate}
				/>
				<Footer allTodos={this.state.allTodos} />
			</div>
		);
	}
}
