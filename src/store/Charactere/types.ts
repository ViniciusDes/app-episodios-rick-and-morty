import { Charactere } from "../../services/Charactere/types";

export interface CharactereState {
  listOfCharactere: Array<Charactere>;
  listCharactere: (listUrl: string[]) => Promise<void>;
}
