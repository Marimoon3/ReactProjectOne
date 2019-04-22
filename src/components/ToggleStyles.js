import React from "react";

class ToggleStyles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      align: null
    };
  }

  handleAlignL() {
    this.setState({
      align: "left"
    });
  }
  handleAlignC() {
    this.setState({
      align: "center"
    });
  }
  handleAlignR() {
    this.setState({
      align: "right"
    });
  }

  render() {
    return (
      <div
        className="counter"
        style={{ fontFamily: "sans-serif", textAlign: "center" }}
      >
        <h2 style={{ fontWeight: "100", textAlign: `${this.state.align}` }}>
          Align Me
        </h2>
        <button
          style={{
            marginTop: "10px",
            outline: "none"
          }}
          onClick={() => this.handleAlignL()}
        >
          Left
        </button>
        <button
          style={{
            marginTop: "10px",
            outline: "none"
          }}
          onClick={() => this.handleAlignC()}
        >
          Center
        </button>
        <button
          style={{
            marginTop: "10px",
            outline: "none"
          }}
          onClick={() => this.handleAlignR()}
        >
          Right
        </button>
      </div>
    );
  }
}

export default ToggleStyles;
