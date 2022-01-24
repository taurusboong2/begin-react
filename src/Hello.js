import React from 'react';

function Hello({ name, color, bgc, isSpecial, binaryO }) {
  return (
    <div style={{
      color : color,
      backgroundColor : bgc
    }}>
      {isSpecial && <b>*</b>}
      { binaryO ? <b>이것은 true </b> : <b>이것은 false </b>  }
    안녕하세요 {name}
    </div>
  )
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
