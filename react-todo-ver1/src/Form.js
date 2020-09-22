import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.input) {
      this.props.onAdd(this.state.input);
      this.setState({
        input: '',
      });
    }
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
