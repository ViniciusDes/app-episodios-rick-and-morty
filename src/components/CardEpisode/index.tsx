import moment from "moment";
import React from "react";
import { Episode } from "../../types/Episode";

import { Container } from "./styles";
//*es-lint
const CardEpisode: React.FC<{ episode: Episode }> = ({ episode }) => {
  function isValidDate(dateObject: string) {
    return new Date(dateObject).toString() !== "Invalid Date";
  }
  const handleClickNavigateCharacteres = (id: number) => {};

  return (
    <Container role="feed">
      <h2>Descrição: {episode.name}</h2>
      <h3>
        {isValidDate(episode.air_date)
          ? "Data exibição: " + episode.air_date
          : "Sem data prevista para exibição"}
      </h3>
      <p>Episodio: {episode.episode}</p>
      <button>Personagens</button>
    </Container>
  );
};

export default CardEpisode;
