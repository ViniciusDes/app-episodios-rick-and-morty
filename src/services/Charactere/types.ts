export interface ICharactereService {
  getCharacteres: (
    listLinkOfCharactere: string[]
  ) => Promise<Array<Charactere>>;
}

export type Charactere = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};
