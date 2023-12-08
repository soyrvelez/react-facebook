import React from 'react';
import FacebookLogo from './logo';
import Options from './options';
import SearchBar from './search';
import Sections from './sections';

export default function Navbar() {
  return (
    <nav>
      <FacebookLogo />
      <SearchBar />
      <Sections />
      <Options />
    </nav>
  );
};
