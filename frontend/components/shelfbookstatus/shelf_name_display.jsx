import React from 'react';

const ShelfNameDisplay = ({readingStatus, onClick}) => {

  return (
    <div onClick={onClick} className="shelf-display-name">
      <p>{readingStatus}</p>
    </div>
  )


}

export default ShelfNameDisplay;
