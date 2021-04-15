import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        project: {
          merge: true,
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com/",
  cache: cache,
  connectToDevTools: true,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
