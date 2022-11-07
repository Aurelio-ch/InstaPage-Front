import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 16rem;
    padding: 4rem 7.5rem;
    justify-content: space-between;
    background-image: url("https://i.imgur.com/jVisZmn.png");
    img{
        width: 280px;
        height: 280px;
        border-radius: 8px;
        -webkit-box-shadow: -5px -5px 0px 2px rgba(175,59,255,0.49), 5px 5px 0px 2px rgba(0,0,0,0.49); 
        box-shadow: -5px -5px 0px 2px rgba(175,59,255,0.49), 5px 5px 0px 2px rgba(0,0,0,0.49);
    }
    @media(max-width: 720px){
        display: flex;
        flex-direction: column-reverse;
        
        gap: 3rem;
        padding: 2.5rem 1rem;
        text-align: center;
        img{
            margin: 0 auto;
        }
    }
`
export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-family: 'Poppins', sans-serif;
    justify-content: center;

    h2{
        font-weight: 500;
        font-size: 1.3rem;
        text-shadow: 0px 0px 17px #000000;
        font-family: 'Poppins', sans-serif;
    }

    h1{
        font-weight: 700;
        font-size: 3rem;
        text-shadow: 0px 0px 17px #000000;
        font-family: 'Poppins', sans-serif;
    }
    h3{
        font-weight: 400;
        font-size: 1rem;
        color: #B8B6A5;
        text-shadow: 0px 0px 17px #000000;
        font-family: 'Poppins', sans-serif;
    }
    p{
        font-size: 1rem;
        font-weight: 300; 
        text-shadow: 0px 0px 17px #000000;
    }


`

