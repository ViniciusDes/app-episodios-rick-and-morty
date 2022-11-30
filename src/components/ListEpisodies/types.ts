import { Episode } from "../../services/Episode/types";
import { InputEventElement } from "../../types/Global";

export interface ListEpisodiesProps {
  listOfEpisodies: Array<Episode>;
  handleChangeDescription: (ev: InputEventElement) => void;
}
