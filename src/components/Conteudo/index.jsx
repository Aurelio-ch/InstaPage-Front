import { Container, Content} from "./style";
import React, { useState, useEffect } from "react";
import api from "../../services/api"


export function Conteudo() {
  const [data, setData] = useState();

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id") 

  async function getData() {
    const response = await api.get('/api', {
      params: {
        id: id
      }
    })
    setData(response.data)
  }


useEffect(() => {
 
getData()
    
  });
    return (
        <Container>
            <Content>
            <h2>Meu Nome é</h2>
            <h1>{!data ? "Loading..." : data.data.channel_data.name}</h1>
            <h3>{!data ? "Loading..." : `@${data.data.channel_data.user_name}`}</h3>
            <p>{!data ? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here" : !data.data.variables.biografia ? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here" : data.data.variables.biografia}</p>
            </Content>
            <img src={!data ? "https://i.imgur.com/eBeMlrG.png" : data.data.channel_data.profile_pic} alt="" />
        </Container>
    );
    
}