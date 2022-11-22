import { Episode } from "../../types/Episode";
import { InputEventElement } from "../../types/Global";

export interface ListEpisodiesProps {
  listOfEpisodies: Array<Episode>;
  handleChangeDescription: (ev: InputEventElement) => void;
}
