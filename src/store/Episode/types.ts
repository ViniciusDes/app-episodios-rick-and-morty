import { Episode } from "../../services/Episode/types";

export interface EpisodeState {
  listOfEpisodies: Array<Episode>;
  listEpisodies: (description?: string) => Promise<void>;
}
