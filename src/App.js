import React, { Component } from 'react';
import { name, age, person } from './data';
import Banner from './components/Header/Banner';


class App extends React.Component {
  render(h) {
    return (
      <section>
        <Banner />
        <p>this is my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
        <p>{person.age}</p>
      </section>
    );
  }
}

export default App;