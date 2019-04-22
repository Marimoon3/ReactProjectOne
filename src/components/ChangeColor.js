import React from "react";

class ChangeColor extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      color: "Black"
    };
  }

  onChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      color: this.state.input,
      input: ""
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            style={{
              outline: "none",
              color: "black"
            }}
            placeholder="enter color"
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
          <br />
          <button
            type="submit"
            style={{
              marginTop: "10px",
              outline: "none"
            }}
          >
            Change Color
          </button>
        </form>
      </div>
    );
  }
}

export default ChangeColor;
