import React from "react";
import RadioButtons from "../components/RadioButtons";

const SettingsPage = () => {
  return (
    <div className="settings">
      <h1 className="title">But Before ...</h1>
      <h2>we will need to setup some stuff.</h2>
      <h3>
        Do you want to type in as much digits of pi as possible, or I ask you a
        digit and you tell me the number?
      </h3>
      <RadioButtons />
    </div>
  );
};

export default SettingsPage;
