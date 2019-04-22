import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: true
    };
  }

  handleClick() {
    this.setState({
      greeting: !this.state.greeting
    });
  }

  render() {
    return (
      <div class="nonsense" style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>
          {this.state.greeting ? "Hello" : "Goodbye"}
        </h1>
        <button
          style={{
            marginTop: "10px",
            outline: "none"
          }}
          onClick={() => this.handleClick()}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default Toggle;
