import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './DetalhesEventoPage.css'
import api, { CommentaryResource, eventsResource } from '../../Services/Service';
import Title from '../../components/Title/Title';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';
import TableDev from '../DetalhesEventoPage/TableDev/TableDev';


const DetalhesEventoPage = () => {

  
  const [eventos, setEvento] = [];

  

 const [comentario, setComentario] = useState([])
  const [nomeEvento,setNomeEvento] =useState('')
  const [descricao, setDescricao]= useState('')
//   const {idEvento} = useParams();
//   const { userData } = useContext(UserContext);

  useEffect(() => {
    getEvento();
  },[])
  
  //get para trazer o detalhe do evento
  async function getEvento(id) {
    try {
      const retornaEvento = await api.get(`${eventsResource}/${id}`)
        
      setEvento(retornaEvento.data)
      console.log(retornaEvento);
      
    } catch (error) {
      
        console.log("Deu erro no get")
    }
  }

  //get para trazer comentario do evento

  async function getComentario(idEvento) {

    if (userData.role === "administrador") {

        try {
            const retornaComentario = await api.get(`${CommentaryResource}/${idEvento}`)
            
            setEvento(retornaComentario.data)
            console.log(retornaComentario);
            
        } catch (error) {
            
        }
        
    } else {
         const retornaComentarioIa = await api.get(`${CommentaryResource}/${idEvento}`)
        
    }
  
  }
  

    return(
        <>
        <MainContent>
        <Container>
        <Title titleText={"Detalhes do Evento"} potatoClass="custom-title"/> 
        {/* <TableDev
        evento={eventos}
        />  */}
        </Container>
      </MainContent>   
        </>
    )        
        
 }

export default DetalhesEventoPage;