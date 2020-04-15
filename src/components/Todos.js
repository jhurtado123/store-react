import React, { Component } from "react";
import Todo from "./Todo";

class Input extends Component {
  state = {
    input: "",
  };

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleClick = (e) => {
    const { click } = this.props;
    click(this.state.input);
    this.setState(
      {
        input: "",
      },
      () => {
        console.log("input", this.state.input);
      }
    );
  };

  render() {
    const { input } = this.state;

    // <button onClick={this.handleAddTodo}>add todo</button>
    return (
      <div>
        <label htmlFor=""></label>
        <input type="text" value={input} onChange={this.handleInput} />
        <button onClick={this.handleClick}>add todo</button>
      </div>
    );
  }
}

class Todos extends Component {
  state = {
    todos: [{id:1, title: "comprar leche"}],
  };

  handleAddTodo = (inputValue) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, {id: this._uniqId(), title: inputValue}],
    });
  };

  _uniqId() {
    return new Date().getTime();
  }

  handleDelete = (id) => {
   this.setState({
     todos: this.state.todos.filter(element => element.id !== id),
   })
  };

  render() {
    const { todos } = this.state;
    const that = this;
    return (
      <div>
        <h2>Mis tareas</h2>
        <Input click={this.handleAddTodo} ctx={that} />
        <ul>
          {/*todos.map((todo) => {
            return (
              <div key={todo.id}>
                <li>{todo.title}</li>
                <button onClick={() => this.handleDelete(todo.id) }>delete</button>
              </div>
            );
          })*/}
          { todos.map((todo, index) => {
            return (
              <Todo key={index} handleRemove={() => this.handleDelete(todo.id)} title={todo.title} />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Todos;
