import React, {Component} from 'react';

class Todo extends Component {
  render() {
    const {handleRemove, title} = this.props;
    return (
      <li>
        <p>{title}</p>
        <button onClick={handleRemove}>delete</button>
      </li>
    );
  }
}

export default Todo;