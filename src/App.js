// ARQUIVO PRINCIPAL

import './App.css';
import Header from './componentes/Header'
import styled from 'styled-components'; // container que guarda estilos
import Pesquisa from './componentes/Pesquisa';
import Input from './componentes/Input';


 // aqui não precisa puxar classe, só botar
const AppContainer = styled.div`
 
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  

`

function App() {
  return (
    <AppContainer >
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
