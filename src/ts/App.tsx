import React from "react";
import FirstHeader from "./FirstHeader";
import ProjectButton from "./ProjectButton";
import LinkButton from "./LinkButton";

function App() {
  return (
    <div className="App">
      <div
        className="Background"
        style={{ position: "fixed", overflow: "auto" }}
      >
        <div
          className="Content"
          style={{ position: "fixed", overflow: "auto" }}
        >
          <FirstHeader />
          <br />
          <p>A Haxe framework for creating compilation targets using macros.</p>
          <br />
          <div className="ButtonPadding">
            <div className="row">
              <div className="column">
                <LinkButton
                  name="Start-up Guide"
                  desc=""
                  url="https://github.com/RobertBorghese/reflaxe"
                  buttonClass="GreenButton"
                  style={{ width: "100%" }}
                />
              </div>
              <span style={{ margin: "12px" }}></span>
              <div className="column">
                <LinkButton
                  name="View on Github"
                  desc=""
                  url="https://github.com/RobertBorghese/reflaxe"
                  buttonClass="BlueButton"
                  style={{}}
                />
              </div>
              <span style={{ margin: "12px" }}></span>
              <div className="column">
                <LinkButton
                  name="API Docs"
                  desc=""
                  url="https://github.com/RobertBorghese/reflaxe"
                  buttonClass="PurpleButton"
                  style={{}}
                />
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p>Projects Made With Reflaxe</p>
          <br />
          <div className="ButtonPadding">
            <ProjectButton
              name="Reflaxe/C++"
              desc="An alternative C++ target for Haxe that generates dependent-less, GC-less C++17 code."
              url="https://github.com/RobertBorghese/reflaxe.CPP"
              buttonClass="RedButton"
            />
            <ProjectButton
              name="Reflaxe/C#"
              desc="A remake of the Haxe/C# target written entirely within Haxe using Reflaxe."
              url="https://github.com/RobertBorghese/reflaxe.CSharp"
              buttonClass="RedButton"
            />
            <ProjectButton
              name="Reflaxe/GDScript"
              desc="Compile Haxe to GDScript 2.0 as easily as you'd output to any other target."
              url="https://github.com/RobertBorghese/Haxe-to-GDScript"
              buttonClass="RedButton"
            />
          </div>
          <br />
          <div className="FirstHeader">
            <br />
            <div className="row">
              <div className="column">
                <p>End of the Site</p>
              </div>
              <div className="column">
                <p>© 2023 Robert Borghese</p>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
