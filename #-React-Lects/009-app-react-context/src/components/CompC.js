import React, { Component } from "react";
import { CnxtConsumer } from "./ContextComp";

export default class CompC extends Component {
  render() {
    return (
      <CnxtConsumer>
        {
          (nameing)=> {
            return <div>This is {nameing}</div>
          }
        }
      </CnxtConsumer>
    );
  }
}
   