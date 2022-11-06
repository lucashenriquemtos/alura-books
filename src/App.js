import Header from "./componentes/Header";
import styled from "styled-components";
import Pesquisa from "./componentes/Pesquisa/pesquisa";
import UltimosLancamentos from "./componentes/UltimosLancamentos/ultimosLancamentos";


const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #002F52 35%,#326589 165%);
`

function App() {
    return (
        <AppContainer>
            <Header/>
            <Pesquisa/>
            <UltimosLancamentos/>
        </AppContainer>
    );
}

export default App;
