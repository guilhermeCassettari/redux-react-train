
import './App.scss';

import Intervalo from './components/Operacoes/intervalo/Intervalo'

import Soma from './components/Operacoes/soma/Soma'
import Sorteio from './components/Operacoes/sorteio/Sorteio'
import Media from './components/Operacoes/media/Media'

function App() {
  return (
    <div className="App">
      <h1>Treinando Redux</h1>
      <div className="line">
      <Intervalo ></Intervalo>      
      </div>
      <div className="line">
           <Soma></Soma>
           <Sorteio></Sorteio>
           <Media></Media>
      </div>
      

    </div>
  );
}

export default App;
