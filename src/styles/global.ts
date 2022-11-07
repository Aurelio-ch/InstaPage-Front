import {createGlobalStyle} from 'styled-components';


export const GloabalStyle = createGlobalStyle`
  :root{
    --verde-padrao: #97CE4C;
    --verde-escuro: #2F9331;
    --preto-padrao: #171717;
    --branco-padrao: #FFFFFF;

  }
body{
  background-color: var(--preto-padrao) ;
}
  * {
    margin: 0;
    padding: 0;
    box-sizzing: border-box;
    color: var(--branco-padrao);

    font-family: 'Poppins', sans-serif;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  
  button {
        cursor: pointer;
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }

`