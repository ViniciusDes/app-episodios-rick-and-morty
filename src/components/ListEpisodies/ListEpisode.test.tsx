import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ListEpisodies from ".";
import App from "../../App";
import EpisodeService from "../../services/EpisodeService";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

// const episodeMock = {
//   id: 1,
//   name: "Pilot",
//   air_date: "December 2, 2013",
//   episode: "S01E01",
//   characters: [
//     "https://rickandmortyapi.com/api/character/1",
//     "https://rickandmortyapi.com/api/character/2",
//     "https://rickandmortyapi.com/api/character/35",
//     "https://rickandmortyapi.com/api/character/38",
//     "https://rickandmortyapi.com/api/character/62",
//     "https://rickandmortyapi.com/api/character/92",
//     "https://rickandmortyapi.com/api/character/127",
//     "https://rickandmortyapi.com/api/character/144",
//     "https://rickandmortyapi.com/api/character/158",
//     "https://rickandmortyapi.com/api/character/175",
//     "https://rickandmortyapi.com/api/character/179",
//     "https://rickandmortyapi.com/api/character/181",
//     "https://rickandmortyapi.com/api/character/239",
//     "https://rickandmortyapi.com/api/character/249",
//     "https://rickandmortyapi.com/api/character/271",
//     "https://rickandmortyapi.com/api/character/338",
//     "https://rickandmortyapi.com/api/character/394",
//     "https://rickandmortyapi.com/api/character/395",
//     "https://rickandmortyapi.com/api/character/435",
//   ],
//   url: "https://rickandmortyapi.com/api/episode/1",
//   created: "2017-11-10T12:56:33.798Z",
// };

describe("<ListEpiside />", () => {
  it("render first and last item of api data on List of Episodies", async () => {
    const data = await EpisodeService.getEpisodies();

    render(
      <BrowserRouter>
        <ListEpisodies />
      </BrowserRouter>
    );

    const firstNameEpisodeInTheDocument = await screen.findByText(
      "Descrição: " + data[0]?.name
    );
    const lastNameEpisodeInTheDocument = await screen.findByText(
      "Descrição: " + data.at(-1)?.name
    );

    expect(firstNameEpisodeInTheDocument).toBeInTheDocument();
    expect(lastNameEpisodeInTheDocument).toBeInTheDocument();
  });

  it("render emulate filter items on List of Episodies equal filter API", async () => {
    const listOfEpisodiesFiltered = await EpisodeService.getEpisodies("pi");
    const numberCardsFiltered = listOfEpisodiesFiltered.length;

    render(
      <BrowserRouter>
        <ListEpisodies />
      </BrowserRouter>
    );

    const inputFilterEpisodies = await screen.findByPlaceholderText(
      "Descrição:"
    );

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
    });

    fireEvent.change(inputFilterEpisodies, {
      target: { value: "pi" },
    });

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });
    });

    const numberCardsRendered = (await screen.findAllByRole("feed")).length;

    expect(numberCardsRendered).toEqual(numberCardsFiltered);
  });
});
