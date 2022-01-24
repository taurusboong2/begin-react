import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" bgc="#eee"  isSpecial={true} binaryO={true} />
        <Hello color="blue" bgc="#e4e4e4" />
      </Wrapper>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
