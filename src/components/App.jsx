import React from 'react';
import Reader from './Reader';

import publications from '../Data/publications.json';

export const App = () => {
  return (
    <div>
      <Reader items={publications} />
    </div>
  );
};
