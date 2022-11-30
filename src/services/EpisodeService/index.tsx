import { Episode, IEpisodeService } from "./types";

class EpisodeService implements IEpisodeService {
  async getEpisodies(description?: string): Promise<Episode[] | []> {
    let url = "https://rickandmortyapi.com/api/episode";

    if (description) {
      url += `/?name=${description}`;
    }

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results?.length) {
          return data?.results;
        } else {
          return [];
        }
      });
  }
}

export default new EpisodeService();
