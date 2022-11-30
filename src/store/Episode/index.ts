import create from "zustand";
import EpisodeService from "../../services/Episode";
import { EpisodeState } from "./types";

const useEpisodeStore = create<EpisodeState>((set) => ({
  listOfEpisodies: [],

  listEpisodies: async (description?: string) => {
    const data = await EpisodeService.getEpisodies(description);
    set({
      listOfEpisodies: data,
    });
  },
}));

export { useEpisodeStore };
