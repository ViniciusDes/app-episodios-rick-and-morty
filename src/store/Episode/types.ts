import { Episode } from "../../services/EpisodeService/types";

export interface EpisodeState {
  listOfEpisodies: Array<Episode>;
  listEpisodies: (description?: string) => Promise<void>;
}
