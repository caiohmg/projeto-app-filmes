import React, { useEffect, useState } from "react";
import { Container, ListMovies } from "./styles";


import api, { key } from "../../services/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import SearchItem from '../../'
export default function SearchBar() {
  const navigation = useNavigation();
  const route = useRoute();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getSearchMovie() {
      const response = await api.get("/search/movie", {
        params: {
          query: route?.params?.name,
          api_key: key,
          language: "pt-BR",
          page: 1,
        },
      });

      if (isActive) {
        setMovie(response.data.results);

        setLoading(false);
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);
  
  if (loading) {
    return <Container></Container>
  }
  
  
  return (

    <Container>
      <ListMovies
      data={movie}
      showsVerticalScrollIndicator={false}
      keyExtractor={ (item) => String(item.id)}
      renderItem={ ({ item}) => <SearchItem data={item}/>}
      />
    </Container>
  )
}