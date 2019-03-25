import React from 'react';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to Hogwarts </p>
    <div>
    <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
  </select>
    </div>
  </div>
);

export default Home;