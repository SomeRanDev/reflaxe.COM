import React from "react";

type LinkButtonData = {
  name: string;
  desc: string;
  url: string;
  style?: React.CSSProperties;

  buttonClass: string;
};

export default class LinkButton extends React.Component<LinkButtonData> {
  render() {
    const style: React.CSSProperties = this.props.style ?? {};
    return (
      <div style={style}>
        <button
          className={"ProjectButton " + this.props.buttonClass}
          onClick={this.onClick.bind(this)}
          style={{ textAlign: "center" }}
        >
          <p>{this.props.name}</p>
        </button>
      </div>
    );
  }

  onClick() {
    window.open(this.props.url);
  }
}
