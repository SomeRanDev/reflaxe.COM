import React from "react";

export default class FirstHeader extends React.Component {
  render() {
    return (
      <div className="FirstHeader">
        <h1>Reflaxe</h1>
        <h3>
          <span style={{ color: "#cca87b" }}>Haxe</span> -&gt;{" "}
          <span style={{ color: "#ddcf99" }}>Anything</span>
        </h3>
        <br />
      </div>
    );
  }
}
