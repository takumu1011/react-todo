import React from 'react';

function RemoveButton(props) {
  return (
    <p
      style={{
        color: '#ff0000',
        visibility: props.show ? 'visible' : 'hidden',
        cursor: 'pointer',
      }}
      onClick={props.onClick}
    >
      削除
    </p>
  );
}

export default RemoveButton;
