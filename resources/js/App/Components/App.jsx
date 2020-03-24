import React from "react";
import Tracks from "./Tracks";

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>Track Directory</h1>
        <Tracks />
      </>
    );
  }
}
