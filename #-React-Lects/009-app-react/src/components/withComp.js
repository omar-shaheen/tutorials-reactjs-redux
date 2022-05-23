import React, { Component } from "react";

const withComp = (OrgComp) => {
  return class NewComp extends Component {
    

    render() {
      return (
        <OrgComp
          name={this.state.name}
          updateNameState={this.updateNameState}
          {...this.props}
        />
      );
    }
  };
};

export default withComp;
