import React from "react";
import ListEpisodies from "../../components/ListEpisodies";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <ListEpisodies />
    </Container>
  );
};

export default Home;
