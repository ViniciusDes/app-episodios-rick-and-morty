import { Charactere, ICharactereService } from "./types";

class CharactereService implements ICharactereService {
  async getCharacteres(
    listLinkOfCharactere: string[]
  ): Promise<Array<Charactere>> {
    const listCharacteres: Array<Charactere> = [];

    for (let url of listLinkOfCharactere) {
      listCharacteres.push(
        await new Promise((resolve) => {
          fetch(url).then((response) => {
            resolve(response.json());
          });
        })
      );
    }

    return listCharacteres;
  }
}

export default new CharactereService();
