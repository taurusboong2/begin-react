import React from 'react';

function Hello({ name, color, bgc }) {
  return (
    <div style={{
      color : color,
      backgroundColor : bgc
    }}>
    안녕하세요 {name}
    </div>
  )
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
