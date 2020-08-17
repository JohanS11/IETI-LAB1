import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { items: [], text: '',priority: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

    render(){
      return(
    
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            name="text"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
           <input
            name="priority"
            id="new-todo2"
            onChange={this.handleChange}
            value={this.state.priority}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name] : value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority : this.state.priority,
      dueDate: new Date(Date.now())
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: ''
    }));
  }
}
export default App;