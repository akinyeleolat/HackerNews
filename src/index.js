import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import client from "./core/graphql";
import News from "./components/News";
import "./styles.css";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={News} />
      </Router>
    </ApolloProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
