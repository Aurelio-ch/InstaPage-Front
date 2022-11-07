import { Conteudo } from "./components/Conteudo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/";
import { Main } from "./components/Main";

import { GloabalStyle } from "./styles/global";


export function App() {

  return (
    <>
      <GloabalStyle />
      <Header />
      <Conteudo />
      <Main />
      <Footer></Footer>
    </>
  );
}

