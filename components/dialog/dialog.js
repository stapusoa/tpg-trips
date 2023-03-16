import React from 'react';

function FullScreenDialog(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default FullScreenDialog;
