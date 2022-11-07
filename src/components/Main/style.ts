import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    text-align:center;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 7.5rem;
    @media(max-width: 720px){
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 2rem 1rem;
        text-align: center;
        img{
            margin: 0 auto;
        }
    }


`

export const Text = styled.div`
display: flex;
text-align:center;
flex-direction: column;
gap: 0.4rem;
h3{
    font-size: 2rem;
    font-weight: 500; 
}
p{
    font-size: 1rem;
    color: #E5E5E5;
}
`

export const Cards = styled.div`
    display: flex;
    text-align:center;
    gap: 1rem;
    @media(max-width: 720px){
        display: flex;
        flex-direction: column;
        gap: 1rem;

        text-align: center;
        img{
            margin: 0 auto;
        }
    }
`
export const Card1 = styled.div`
display: flex;
text-align:center;
flex-direction: column;
gap: 0.7rem;
padding: 4rem 1.3rem;
background-color: #C96408;
border-radius: 5px;
-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45); 
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45);

span{
    font-size: 2rem;
}
h1{
    font-size: 1.4rem;
}


`

export const Card2 = styled.div`
display: flex;
text-align:center;
flex-direction: column;
gap: 0.7rem;
padding: 3rem 1.3rem;
background-color: #7937BB;
border-radius: 5px;
-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45); 
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45);

span{
    font-size: 2rem;
}
h1{
    font-size: 1.4rem;
}

`

export const Card3 = styled.div`
display: flex;
text-align:center;
flex-direction: column;
gap: 0.7rem;
padding: 3rem 1.3rem;
background-color: #3775ED;
border-radius: 5px;
-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45); 
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45);

span{
    font-size: 2rem;
}
h1{
    font-size: 1.4rem;
}

`
export const Card4 = styled.div`
display: flex;
text-align:center;
flex-direction: column;
gap: 0.7rem;
padding: 8rem 1.5rem;
background-color: #23BA55;
border-radius: 5px;
-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45); 
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45);


h1{
    font-size: 2rem;
}

`
export const BoxCard = styled.div`
display: flex;
text-align:center;
flex-direction: column;
gap: 1rem;
@media(max-width: 720px){
    gap: 1rem;
}
`