import React from 'react'
import { name, age, person } from './data';
import Banner from './components/Header/Banner';

const App = () => (<section>
  <Banner />
  <p>this is my content</p>
  <p>{name}</p>
  <p>{age}</p>
  <p>{person.name}</p>
  <p>{person.age}</p>
</section>);

export default App;