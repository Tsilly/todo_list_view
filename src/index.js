import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import App from './App';
import 'semantic-ui-css/semantic.min.css';

// import * as serviceWorker from './serviceWorker';


const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

client
  .query({
    query: gql`
      {
        users {
          id
          email
          todoLists {
            title
            description
            todoItems {
              content
              createdAt
              completedAt
            }
          }
        }
      }
    `
  })
  .then(result => console.log(result));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
