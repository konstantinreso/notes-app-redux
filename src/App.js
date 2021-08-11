import './App.css';
import React from "react";
import Add from "./note/Add.js";
import List from "./note/List.js";
import Filters from "./note/Filters.js";


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        todos: [],
    };
  }

  createTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {id: Date.now(), title, completed: false}
      ]
    });
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, completed: !item.completed} :
          item
          )
      }
    );
  }

  render() {
    return (
      <section className="todoapp">
        <Add />
        <section className="main" style={{display: 'block'}}>
          <List />
        </section>
        <Filters />
      </section>
    );
  }
}
