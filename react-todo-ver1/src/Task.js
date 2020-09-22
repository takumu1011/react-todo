import React from 'react';
import RemoveButton from './RemoveButton';

// function Task(props) {
//   let text = props.completed ? <s>{props.text}</s> : props.text;
//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={props.completed}
//         onChange={(e) => {
//           props.onToggleCompleted({
//             id: props.id,
//             completed: e.target.checked,
//           });
//         }}
//       />
//       {text}
//       <RemoveButton
//         show={this.state.showRemove}
//         onClick={this.handleClickRemove}
//       />
//     </div>
//   );
// }

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemove: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleChange(e) {
    this.props.onToggleCompleted({
      id: this.props.id,
      completed: e.target.checked,
    });
  }
  handleClickRemove(e) {
    this.props.onRemove({
      id: this.props.id,
    });
  }
  handleMouseOver() {
    this.setState({
      showRemove: true,
    });
  }
  handleMouseOut() {
    this.setState({
      showRemove: false,
    });
  }
  render() {
    let completed = this.props.completed;
    let text = completed ? <s>{this.props.text}</s> : this.props.text;
    return (
      <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleChange}
        />
        {text}
        <RemoveButton
          show={this.state.showRemove}
          onClick={this.handleClickRemove}
        />
      </div>
    );
  }
}

export default Task;
