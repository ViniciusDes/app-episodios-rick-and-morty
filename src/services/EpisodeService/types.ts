import { Episode } from "../../types/Episode";

export interface IEpisodeService {
  getEpisodies: (description?: string) => Promise<Array<Episode>>;
}
