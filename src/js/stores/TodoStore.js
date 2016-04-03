import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 123456,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 234567,
        text: "Pay Bills",
        complete: false
      },
    ];
  }
  createTodo(text) {
    const id = Date.now()
    this.todos.push({
      id,
      text,
      complete: false,
    })
    this.emit("change")
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text)
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change")
      }
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
