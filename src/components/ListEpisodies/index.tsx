import React, { useEffect, useState } from "react";
import EpisodeService from "../../services/EpisodeService";
import { Episode } from "../../types/Episode";
import { InputEventElement } from "../../types/Global";
import CardEpisode from "../CardEpisode";

import { Container, ContainerItems, Header } from "./styles";
import { ListEpisodiesProps } from "./types";

const ListEpisodies: React.FC = () => {
  const [listOfEpisodies, setListOfEpisodies] = useState<Array<Episode>>([]);

  const listEpisodies = async (description?: string) => {
    const data = await EpisodeService.getEpisodies(description);
    setListOfEpisodies(data);
  };

  const handleChangeFilterEpisodies = (ev: InputEventElement) => {
    const { value } = ev.target;
    console.log("aaaa");
    listEpisodies(value);
  };

  useEffect(() => {
    listEpisodies();
  }, []);

  return (
    <Container>
      <Header>
        <input
          name="description"
          placeholder="Descrição:"
          onChange={handleChangeFilterEpisodies}
        />
      </Header>
      <ContainerItems>
        {listOfEpisodies.length ? (
          listOfEpisodies.map((episode) => {
            return <CardEpisode key={episode.id} episode={episode} />;
          })
        ) : (
          <h6>Sem dados para exibir</h6>
        )}
      </ContainerItems>
    </Container>
  );
};

export default ListEpisodies;
