import logo from './logo.svg';
import './App.css';
import './global.css'

import Head from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import TypeArea from './components/TypeArea'

function App() {
  return (
    <div className='container'>

      <Head></Head>
      <Aside></Aside>
      <Main></Main>
      <TypeArea></TypeArea>

    </div>
  );
}

export default App;
