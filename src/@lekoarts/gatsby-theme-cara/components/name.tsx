/** @jsx jsx */

import { jsx } from 'theme-ui';

const Name = ({ children }) => {
  return (
    <h3 style={{
      textTransform: 'uppercase',
      backgroundImage: 'linear-gradient(-225deg,#00bfff 0%,#ff1361 29%,#ed8935 67%,#fff800 100%)',
      backgroundSize: 'auto auto',
      backgroundClip: 'border-box',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      { children }
    </h3>
  )}

export default Name
