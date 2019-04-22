import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  crement = amt => {
    this.setState({
      count: this.state.count + amt
    });
  };

  render() {
    return (
      <div className="counter" style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>{this.state.count}</h1>
        <button
          style={{
            marginTop: "10px",
            outline: "none"
          }}
          onClick={() => this.crement(1)}
        >
          Add
        </button>
        <button
          style={{
            marginTop: "10px",
            outline: "none"
          }}
          onClick={() => this.crement(-1)}
        >
          Sub
        </button>
      </div>
    );
  }
}

export default Counter;
