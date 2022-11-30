import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, WrapperInfo } from "./styles";
import { useCharactereStore } from "../../store/Charactere";

// interface ChacarecteresProps {
//   listLinkOfCharacteres: [string];
// }

const Characteres: React.FC = () => {
  const { listCharactere, listOfCharactere } = useCharactereStore();
  const location = useLocation();

  const listLinkOfCharacteres = location.state.listLinkOfCharacteres as [
    string
  ];

  useEffect(() => {
    listCharactere(listLinkOfCharacteres);
  }, []);

  console.log("listOfCharactere", listOfCharactere);

  return (
    <Container>
      <WrapperInfo>
        <ol>
          <li></li>
        </ol>
      </WrapperInfo>
    </Container>
  );
};

export default Characteres;
