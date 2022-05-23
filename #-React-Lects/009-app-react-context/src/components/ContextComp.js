import React from "react";

const crContext = React.createContext();

const CnxtProvider = crContext.Provider; //
const CnxtConsumer = crContext.Consumer; //

export { CnxtProvider, CnxtConsumer };
