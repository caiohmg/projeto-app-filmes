import React, {useEffect, useState} from "react";
import {Container, Name} from './styles';
import api, { key} from '../../services/api';
import { useNavigation, useRoute} from '@react-navigation/native'
export default function SearchBar(){
  const navigation = useNavigation();
  const route = useRoute();
  const [movie, setMovie] =useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    let isActive = true;

    async function getSearchMovie(){
      const response = await api.get('/search/movie',{
        params:{
          query: route?.params?.name,
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      })

      if(isActive){
        setMovie(response.data.resilts);
        console.log(response.data.results);
        setLoading(false);
      }
    }

    
    if(isActive){
      getSearchMovie();
    }

    return () => {
      isActive = false;
    }
  }, [])

  if(loading){
    <Container></Container>
  }
  return(
    
    <Container>
      <Name>Teste Procurando</Name>
    </Container>
  )
}