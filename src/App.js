import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChuckJoke from "./ChuckJoke";
import cn from 'classnames';

console.log(process.env)
const Joke = ({ apiType, category }) => {
  return (
    <ChuckJoke  apiType={apiType} category={category}>
      {({ joke, fetchJoke, loading }) => (
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title" style={{ marginBottom: 30 }}>
                Joke
              </h1>
              <h2 className="subtitle">{joke}</h2>
            </div>
          </div>
        </section>
      )}
    </ChuckJoke>
  );
}

function JokeAdvanced({ data, apiType,category }) {
  return (
    <ChuckJoke data={data} apiType={apiType} category={category}>
      {({ joke, fetchJoke,fetchApi, loading, url }) =>  {
        console.log(data)
        return (
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title" style={{ marginBottom: 30 }}>
                JokeAdvanced
              </h1>
              <h2 className="subtitle">{joke}</h2>
              <p>
                <b>Category</b>: {category}
              </p>
              <p style={{ marginBottom: 30 }}>
                <b>Url</b>: <a href={url}>{url}</a>
              </p>
           
              <a
                className={cn("button is-info", {
                  "is-loading": loading,
                  "is-inverted": !loading
                })}
                onClick={fetchJoke}
              >
                Fetch New Joke
              </a>
            </div>
          </div>
        </section>
      )}}
    </ChuckJoke>
  );
}
const App = () => 
  <div>
    <JokeAdvanced apiType="graphql" category="graphql" />
  </div>

export default App;