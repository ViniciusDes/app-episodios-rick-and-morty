import create from "zustand";
import CharactereService from "../../services/Charactere";
import { CharactereState } from "./types";

const useCharactereStore = create<CharactereState>((set) => ({
  listOfCharactere: [],

  listCharactere: async (listUrl: string[]) => {
    const data = await CharactereService.getCharacteres(listUrl);
    set({
      listOfCharactere: data,
    });
  },
}));

export { useCharactereStore };
