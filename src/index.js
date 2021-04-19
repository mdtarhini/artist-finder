//react
import React from "react";
import ReactDOM from "react-dom";

//apollo stuff
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { cache } from "./Apollo/cache";

//others
import { DB_URI } from "./constants-and-settings";

//Main component (App)
import App from "./App";

//Main stylesheet
import "./index.css";

const client = new ApolloClient({
  uri: DB_URI,
  cache: cache,
  connectToDevTools: true,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
