import React from 'react';

const Progress = ({ currentPage, totalPages }) => {
  return (
    <p>
      {currentPage}/{totalPages}
    </p>
  );
};

export default Progress;
