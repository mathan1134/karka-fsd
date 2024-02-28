
import React from 'react';

export const Navbar = ({ onSelectSize, onSelectCategory }) => {
  const lsize = () => {
    onSelectSize('L');
  };

  const msize = () => {
    onSelectSize('M');
  };

  const ca_men = () => {
    onSelectCategory('Men');
  };

  const ca_women = () => {
    onSelectCategory('Women');
  };

  return (
    <div className='nav'>
      <p>Size</p>
      <button onClick={lsize}>L</button><br />
      <button onClick={msize}>M</button><br /><br /><br />
      <p>Category</p>
      <button onClick={ca_men}>Men</button><br />
      <button onClick={ca_women}>Women</button><br />

    </div>
  );
};
