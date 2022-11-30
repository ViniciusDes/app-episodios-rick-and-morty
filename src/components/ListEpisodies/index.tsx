import React, { useEffect } from "react";
import { useEpisodeStore } from "../../store/Episode";

import { InputEventElement } from "../../types/Global";
import CardEpisode from "../CardEpisode";

import { Container, ContainerItems, Header } from "./styles";

const ListEpisodies: React.FC = () => {
  const { listOfEpisodies, listEpisodies } = useEpisodeStore();

  const handleChangeFilterEpisodies = async (ev: InputEventElement) => {
    const { value } = ev.target;
    await listEpisodies(value);
  };

  useEffect(() => {
    listEpisodies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
