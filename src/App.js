import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData, // import data from todosData.js to todos array
    };

    // binds handleChange method to this class
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(function (prevState) {
      // iterate through state todo to find matching id of the checkbox that was changed
      const newTodoList = prevState.todos.map(function (todo) {
        if (todo.id === id) {
          // returns a new todo object to avoid modifying current state
          return {
            ...todo, // pull all of the todo data otherwise it's just returning an object with a single completed state
            completed: !todo.completed,
          };
        }
        return todo; // return untouched todo item
      });

      return {
        todos: newTodoList, // replace todo state with new modified one
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
