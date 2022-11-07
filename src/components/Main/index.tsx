import { Container, Text, Cards, Card1, Card2, Card3, Card4, BoxCard } from "./style";
import { RiStore2Fill, RiProfileLine, RiLayout2Fill } from "react-icons/ri";

export function Main(){
    return(
        <Container>
            <Text>
                <h3>Seu site - by Vubis</h3>
                <p>Nós da Vubis  transformamos suas ideias em realidade</p>
            </Text>
            <BoxCard>
            <Cards>   
                <Card1>
                    <span><RiStore2Fill/></span>
                    <h1>E-commerce</h1>
                    <p>Todos os seus produtos a um clique de distância dos seus clientes.</p>
                </Card1>
                <Card2>
                    <span><RiProfileLine/></span>
                    <h1>Institucional</h1>
                    <p>Todos os seus produtos a um clique de distância dos seus clientes.</p>
                </Card2>
                <Card3>
                    <span><RiLayout2Fill/></span>
                    <h1>Layout Personalizado</h1>
                    <p>Layouts personalizados para deixar seu site a cara da sua empresa.</p>
                </Card3>
            </Cards>

            <Card4>
                <h1>Site de qualidade</h1>
                <p>Usando as melhores ferramentas disponíveis no mercado</p>
            </Card4>

            </BoxCard>
            
        </Container>
    )
}