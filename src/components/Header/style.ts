import styled from "styled-components";
export const Container = styled.header`
  font-family: Popins

`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 5rem;
  font-family: 'Poppins', sans-serif;


  img{
    width: 14rem;
  }

  @media(max-width: 720px){
    justify-content: center;
  }
  
`
