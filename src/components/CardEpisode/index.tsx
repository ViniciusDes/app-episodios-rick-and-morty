import React from "react";
import { useNavigate } from "react-router-dom";
import { Episode } from "../../services/EpisodeService/types";

import { Container } from "./styles";
//*es-lint
const CardEpisode: React.FC<{ episode: Episode }> = ({ episode }) => {
  const navigate = useNavigate();

  function isValidDate(dateObject: string) {
    return new Date(dateObject).toString() !== "Invalid Date";
  }
  const handleClickNavigateCharacteres = (episode: Episode) => {
    navigate("/characteres", {
      state: { listLinkOfCharacteres: episode.characters },
    });
  };

  return (
    <Container role="feed">
      <h2>Descrição: {episode.name}</h2>
      <h3>
        {isValidDate(episode.air_date)
          ? "Data exibição: " + episode.air_date
          : "Sem data prevista para exibição"}
      </h3>
      <p>Episodio: {episode.episode}</p>
      <button onClick={() => handleClickNavigateCharacteres(episode)}>
        Personagens
      </button>
    </Container>
  );
};

export default CardEpisode;
