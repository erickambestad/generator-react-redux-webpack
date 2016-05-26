"use strict";

import React from "react";

class Template extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let {
      children
    } = this.props;

    return(
      <div>
        {children}
      </div>
    )
  }
}

export default Template;
