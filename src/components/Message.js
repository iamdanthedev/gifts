import React from 'react';

const style = {
  textAlign: 'center',
  padding: '10px',
  marginBottom: '10px'
};

export default ({ children }) => (
  <div className="max-w white-box" style={style}>{children}</div>
);
