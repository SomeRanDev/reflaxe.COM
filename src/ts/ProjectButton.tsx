import React from "react";

type ProjectButtonData = {
  name: string;
  desc: string;
  url: string;
  style?: React.CSSProperties;

  buttonClass: string;
};

export default class ProjectButton extends React.Component<ProjectButtonData> {
  render() {
    const style: React.CSSProperties = this.props.style ?? {};
    style.width = "calc(100% - 24px)";
    style.margin = "0";
    style.padding = "0";
    return (
      <div className="ButtonPadding">
        <button
          className={"ProjectButton " + this.props.buttonClass}
          onClick={this.onClick.bind(this)}
          style={{ margin: "12px" }}
        >
          <h2>{this.props.name}</h2>
          <br />
          <p style={{ fontSize: "11pt" }}>{this.props.desc}</p>
        </button>
      </div>
    );
  }

  onClick() {
    console.log(this.props);
    window.open(this.props.url);
  }
}
